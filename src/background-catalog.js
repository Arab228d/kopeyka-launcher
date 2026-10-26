const fs = require('node:fs/promises');
// Serve a validated disk snapshot immediately while a single refresh runs.
function backgroundCatalog(file, refresh, validate, updated = () => {}) {
  let task;
  function fetchFresh() {
    if (!task) task = Promise.resolve().then(refresh).then(value => { if (!validate(value)) throw new Error('Некорректный каталог'); updated(value); return value; }).finally(() => { task = undefined; });
    return task;
  }
  async function withSource(force = false) {
    if (!force) {
      try { const value = JSON.parse(await fs.readFile(file, 'utf8')); if (validate(value)) { fetchFresh().catch(() => {}); return { value, source: 'cache' }; } } catch {}
    }
    return { value: await fetchFresh(), source: 'network' };
  }
  const get = async force => (await withSource(force)).value;
  get.withSource = withSource;
  return get;
}
module.exports = { backgroundCatalog };
