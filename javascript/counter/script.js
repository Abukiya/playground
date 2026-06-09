// State
let count = 0;

// DOM refs — grab them once, reuse everywhere
const display = document.getElementById('display');
const msg     = document.getElementById('msg');

// Render — the ONLY place that touches the DOM for the count
function render() {
  display.textContent = count;
  display.className = count > 0 ? 'positive' : count < 0 ? 'negative' : '';
}

function setMsg(text) {
  msg.textContent = text;
}

// Actions
function increase() { count += 1; render(); setMsg(''); }
function decrease() { count -= 1; render(); setMsg(''); }
function reset()    { count  = 0; render(); setMsg('Reset.'); }

function save() {
  localStorage.setItem('playground_counter', count);
  setMsg('Saved: ' + count);
}

function load() {
  const saved = localStorage.getItem('playground_counter');
  if (saved === null) { setMsg('Nothing saved yet.'); return; }
  count = parseInt(saved, 10);
  render();
  setMsg('Loaded: ' + count);
}

// Wire up buttons — keep JS out of HTML
document.getElementById('btn-increase').addEventListener('click', increase);
document.getElementById('btn-decrease').addEventListener('click', decrease);
document.getElementById('btn-reset').addEventListener('click', reset);
document.getElementById('btn-save').addEventListener('click', save);
document.getElementById('btn-load').addEventListener('click', load);