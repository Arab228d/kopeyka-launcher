const fs = require('node:fs/promises');
// Serve a validated disk snapshot immediately while a single refresh runs.
function backgroundCatalog(file, refresh, validate, updated = () => {}) {
  let task;
  function fetchFresh() {
    if (!task) task = Promise.resolve().then(refresh).then(value => { if (!validate(value)) throw new Error('Некорректный каталог'); updated(value); return value; }).finally(() => { task = undefined; });
    return task;
  }
  return async (force = false) => {
    if (!force) {
      try { const value = JSON.parse(await fs.readFile(file, 'utf8')); if (validate(value)) { fetchFresh().catch(() => {}); return value; } } catch {}
    }
    return fetchFresh();
  };
}
module.exports = { backgroundCatalog };
