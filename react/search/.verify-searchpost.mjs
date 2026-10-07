// Headless Chrome (CDP) check for src/components/searchpost.jsx
const CHROME = process.env.CHROME || "google-chrome-stable";
const PORT = 5173;
const DEBUG_PORT = 9333;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

import { spawn } from "node:child_process";let chrome = null;
const PROXY = process.env.HTTP_PROXY || process.env.http_proxy || process.env.HTTPS_PROXY || process.env.https_proxy;
if (process.env.NO_SPAWN !== "1") {
  chrome = spawn(
    CHROME,
    [
      "--headless=new",
      `--remote-debugging-port=${DEBUG_PORT}`,
      "--no-sandbox",
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--user-data-dir=/tmp/cdp-profile-searchpost",
      ...(PROXY ? [`--proxy-server=${PROXY}`, "--proxy-bypass-list=localhost;127.0.0.1;[::1]"] : []),
      "about:blank",
    ],
    { stdio: ["ignore", "pipe", "pipe"] },
  );
  chrome.stderr.on("data", (d) => console.log("[chrome]", d.toString().trim()));
  chrome.on("exit", (code) => console.log("[chrome] exited:", code));
  chrome.on("error", (e) => console.log("[chrome] spawn error:", e.message));
}

// Chrome keeps the proxy env it inherited at spawn time; our fetch() calls are localhost-only.
for (const k of ["http_proxy", "HTTP_PROXY", "https_proxy", "HTTPS_PROXY", "all_proxy", "ALL_PROXY"]) {
  delete process.env[k];
}

async function getTarget() {
  for (let i = 0; i < 80; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/list`);
      const list = await res.json();
      const page = list.find((t) => t.type === "page");
      if (page?.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
    } catch (e) {
      if (i < 3 || i % 10 === 0) console.log(`  target poll ${i}:`, e.cause?.cause?.code ?? e.cause?.code ?? e.message);
    }
    await sleep(250);
  }
  throw new Error("no CDP target");
}

const ws = new WebSocket(await getTarget());
await new Promise((res, rej) => {
  ws.onopen = res;
  ws.onerror = rej;
});

let id = 0;
const pending = new Map();
const logs = [];
ws.onmessage = (e) => {
  const msg = JSON.parse(e.data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
  } else if (msg.method === "Runtime.consoleAPICalled" || msg.method === "Log.entryAdded") {
    logs.push(
      (msg.params.entry?.text ||
        msg.params.args?.map((a) => a.value ?? a.description).join(" ")) ?? "",
    );
  } else if (msg.method === "Runtime.exceptionThrown") {
    logs.push("EXCEPTION: " + JSON.stringify(msg.params.exceptionDetails.exception?.description ?? msg.params.exceptionDetails.text));
  }
};
const send = (method, params = {}) =>
  new Promise((resolve, reject) => {
    const mid = ++id;
    pending.set(mid, { resolve, reject });
    ws.send(JSON.stringify({ id: mid, method, params }));
  });

const evaluate = async (expression) => {
  const r = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
  if (r.exceptionDetails) throw new Error(r.exceptionDetails.text + " " + (r.exceptionDetails.exception?.description ?? ""));
  return r.result.value;
};

const results = [];
const check = (name, ok, detail = "") => {
  results.push({ name, ok, detail });
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail ? "  -- " + detail : ""}`);
};

await send("Page.enable");
await send("Runtime.enable");
await send("Network.enable");

// --- 1. app mounts without crashing ---
await send("Page.navigate", { url: `http://127.0.0.1:${PORT}/` });
await sleep(2500);
let crashed = logs.some((l) => l.startsWith("EXCEPTION") || /Cannot read prop|not a function|Uncaught/.test(l));
check("initial render does not crash", !crashed, logs.filter((l) => /EXCEPTION|Cannot read|not a function/.test(l)).join(" | "));
console.log("  [debug] body html:", (await evaluate("document.body.innerHTML.slice(0, 500)")));
console.log("  [debug] inputs:", await evaluate("document.querySelectorAll('input').length"));

const type = async (value) => {
  const found = await evaluate("document.querySelectorAll('input').length");
  if (!found) throw new Error("no input element on page");
  await evaluate(`(() => {
    const input = document.querySelector('input[type="text"]');
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    setter.call(input, ${JSON.stringify(value)});
    input.dispatchEvent(new Event('input', { bubbles: true }));
    return input.value;
  })()`);
};

const clickSearch = async () => {
  await evaluate(`(() => {
    const btn = [...document.querySelectorAll('button')].find(b => b.textContent.trim() === 'Search');
    btn.click();
    return true;
  })()`);
};

const dom = () => evaluate(`document.body.innerText`);

// --- 2. happy path: results render ---
await type("1");
await clickSearch();
await sleep(3000);
let text = await dom();
check("search renders post titles", /sunt aut facere/.test(text), text.slice(0, 160).replace(/\n/g, " / "));

// --- 3. error path: message renders instead of crashing ---
await send("Network.setBlockedURLs", { urls: ["*jsonplaceholder*"] });
logs.length = 0;
await type("2");
await clickSearch();
await sleep(3000);
text = await dom();
check("error message renders on failed fetch", /something went wrong/i.test(text), text.slice(0, 200).replace(/\n/g, " / "));
crashed = logs.some((l) => l.startsWith("EXCEPTION") || /Cannot read prop|not a function|Uncaught/.test(l));
check("no crash while in error state", !crashed, logs.filter((l) => /EXCEPTION|Cannot read|not a function/.test(l)).join(" | "));
check("no stale posts shown next to error", !/sunt aut facere/.test(text), "");

// --- 4. recovery: unblock and search again ---
await send("Network.setBlockedURLs", { urls: [] });
await type("3");
await clickSearch();
await sleep(3000);
text = await dom();
const titleCount = await evaluate("document.querySelectorAll('h1').length");
check(
  "recovers after error and renders results",
  titleCount > 0 && !/something went wrong/i.test(text),
  `h1 count=${titleCount}; ` + text.slice(0, 120).replace(/\n/g, " / "),
);

console.log("\n--- console output ---");
console.log(logs.join("\n") || "(none)");
const failed = results.filter((r) => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} checks passed`);
ws.close();
chrome?.kill();
process.exit(failed.length ? 1 : 0);
