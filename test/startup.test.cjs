const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync(require('node:path').join(__dirname, '../src/ui/startup.js'), 'utf8');
const flush = async () => { for (let n = 0; n < 8; n++) await Promise.resolve(); };
function fixture({ elapsed = 0, brokenAssets = false, splash = false } = {}) {
  let now = elapsed, next = 0, minimized = 0, closed = 0;
  const timers = new Map(), events = [], classes = new Set(['booting']);
  const element = () => ({ dataset: {}, style: { setProperty() {} }, textContent: '', value: 0, inert: true, addEventListener(type, listener) { this[type] = listener; }, remove() { this.removed = true; } });
  const nodes = new Map(['startup-overlay', 'startup-progress', 'startup-status', 'startup-detail', 'startup-minimize', 'startup-close', 'shell', 'cube'].map(key => [key, element()]));
  const rows = new Map(['settings', 'versions', 'loaders', 'updates'].map(key => { const row = element(); row.result = element(); row.querySelector = () => row.result; return [key, row]; }));
  const document = {
    body: { classList: { add: value => classes.add(value), remove: value => classes.delete(value) } },
    fonts: { ready: brokenAssets ? new Promise(() => {}) : Promise.resolve() },
    getElementById: id => nodes.get(id),
    querySelector: selector => selector === '.app-shell' ? splash ? null : nodes.get('shell') : selector === '.startup-cube' ? nodes.get('cube') : rows.get(selector.match(/"([a-z]+)"/)[1])
  };
  const window = { launcher: { startupStartedAt: 100000, minimizeWindow: async () => { minimized++; }, closeWindow: async () => { closed++; } }, dispatchEvent: event => events.push(event.type) };
  vm.runInNewContext(source, { window, document, Date: { now: () => 100000 + now }, performance: { timeOrigin: 100000 }, Promise, Map, Event: class { constructor(type) { this.type = type; } }, setTimeout: (fn, ms) => { const id = ++next; timers.set(id, { fn, at: now + ms }); return id; }, clearTimeout: id => timers.delete(id) });
  async function advance(ms) {
    const end = now + ms;
    while (true) {
      const upcoming = [...timers].filter(([, timer]) => timer.at <= end).sort((a, b) => a[1].at - b[1].at)[0];
      if (!upcoming) break;
      now = upcoming[1].at; timers.delete(upcoming[0]); upcoming[1].fn(); await flush();
    }
    now = end; await flush();
  }
  return { window, nodes, rows, classes, events, advance, counts: () => ({ minimized, closed }) };
}
async function ready(f) {
  for (const key of ['settings', 'versions', 'loaders', 'updates']) await f.window.startup.check(key, Promise.resolve(null), () => ({ text: 'Готово' }));
  await flush();
}
test('real successful checks remain visible until 9 seconds, then reveal exactly once', async () => {
  const f = fixture(); await ready(f);
  assert.equal(f.nodes.get('startup-progress').value, 4);
  await f.advance(8999); assert.ok(f.classes.has('booting'));
  await f.advance(1); assert.equal(f.nodes.get('shell').inert, false);
  assert.deepEqual(f.events, ['ui-revealed']);
  await f.advance(300); assert.ok(f.nodes.get('startup-overlay').removed);
  await f.advance(3000); assert.deepEqual(f.events, ['ui-revealed']);
});
test('slow update check times out honestly and never traps the user on the splash', async () => {
  const f = fixture();
  for (const key of ['settings', 'versions', 'loaders']) await f.window.startup.check(key, Promise.resolve(null), () => ({ text: 'Готово' }));
  const result = f.window.startup.check('updates', new Promise(() => {}), () => ({ text: 'Актуальная версия' })).catch(error => error.message);
  await f.advance(9500);
  assert.match(await result, /слишком много времени/);
  assert.equal(f.rows.get('updates').dataset.state, 'warning');
  assert.equal(f.rows.get('updates').result.textContent, 'Недоступно');
  assert.equal(f.nodes.get('shell').inert, false);
  await f.advance(300); assert.ok(f.nodes.get('startup-overlay').removed);
});
test('cached catalogs and offline update errors keep distinct visible results', async () => {
  const f = fixture();
  await f.window.startup.check('versions', Promise.resolve({ source: 'cache' }), value => ({ state: value.source, text: 'Сохранённый список' }));
  await assert.rejects(f.window.startup.check('updates', Promise.reject(new Error('offline')), () => ({ text: 'Актуальная версия' })), /offline/);
  assert.equal(f.rows.get('versions').dataset.state, 'cache');
  assert.equal(f.rows.get('versions').result.textContent, 'Сохранённый список');
  assert.equal(f.rows.get('updates').dataset.state, 'warning');
  await f.advance(10350); assert.ok(f.nodes.get('startup-overlay').removed);
});
test('broken assets or renderer checks still reveal within 12 seconds', async () => {
  const f = fixture({ brokenAssets: true });
  await f.advance(9999); assert.ok(f.classes.has('booting'));
  await f.advance(651); assert.ok(f.nodes.get('startup-overlay').removed);
  assert.equal(f.rows.get('versions').result.textContent, 'Не завершено');
});
test('initial splash time counts toward the same 9-second startup, controls respond while loading', async () => {
  const f = fixture({ elapsed: 6000 }); await ready(f);
  await f.nodes.get('startup-minimize').click(); await f.nodes.get('startup-close').click();
  assert.deepEqual(f.counts(), { minimized: 1, closed: 1 });
  await f.advance(2999); assert.ok(f.classes.has('booting'));
  await f.advance(1); assert.equal(f.nodes.get('shell').inert, false);
});
