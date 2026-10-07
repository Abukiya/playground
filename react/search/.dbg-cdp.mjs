import { spawn } from "node:child_process";

const stdio = process.env.QUIET === "1" ? "ignore" : ["ignore", "pipe", "pipe"];
const c = spawn(
  "google-chrome-stable",
  [
    "--headless=new",
    "--remote-debugging-port=9333",
    "--no-sandbox",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--user-data-dir=/tmp/cdp-profile-searchpost",
    "about:blank",
  ],
  { stdio },
);
if (stdio !== "ignore") {
  c.stdout.on("data", (d) => console.log("OUT:", d.toString().trim()));
  c.stderr.on("data", (d) => console.log("ERR:", d.toString().trim()));
}
c.on("exit", (code) => console.log("chrome exited:", code));
c.on("error", (e) => console.log("spawn error:", e.message));

for (let i = 0; i < 30; i++) {
  await new Promise((r) => setTimeout(r, 500));
  try {
    const r = await fetch("http://127.0.0.1:9333/json/list");
    const j = await r.json();
    console.log(
      "targets:",
      JSON.stringify(j.map((t) => ({ type: t.type, url: t.url, ws: !!t.webSocketDebuggerUrl }))),
    );
    c.kill();
    process.exit(0);
  } catch (e) {
    if (i === 0) {
      console.log("FULL ERROR:", e);
      console.log("CAUSE:", e.cause);
      console.log("env proxy:", JSON.stringify({
        http_proxy: process.env.http_proxy,
        HTTP_PROXY: process.env.HTTP_PROXY,
        no_proxy: process.env.no_proxy,
        NO_PROXY: process.env.NO_PROXY,
      }));
    }
    console.log(i, "not up:", e.cause?.code ?? e.message);
  }
}
console.log("FAILED to reach CDP");
c.kill();
process.exit(1);
