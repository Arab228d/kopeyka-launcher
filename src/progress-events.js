// Coalesce download updates without delaying errors or launch state changes.
function createProgressSender(forward, interval = 100) {
  let timer, pending;
  function clear() { clearTimeout(timer); timer = undefined; pending = undefined; }
  return event => {
    if (event.kind !== 'progress' || event.percent === null || event.percent >= 100) {
      if (['progress', 'state', 'error'].includes(event.kind)) clear();
      forward(event);
      return;
    }
    pending = event;
    if (!timer) timer = setTimeout(() => { const latest = pending; clear(); if (latest) forward(latest); }, interval);
  };
}
module.exports = { createProgressSender };
