const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const crypto = require('node:crypto');
const AdmZip = require('adm-zip');
const { resolveMods, installMods, importMods, listMods, toggleMod, profileDirectory } = require('../src/mods');
const { validateSettings } = require('../src/config');
const bytes = Buffer.from('verified mod download');
function version(project, id, dependencies = [], overrides = {}) {
  return { project_id: project, id, name: project, game_versions: ['1.21.1'], loaders: ['fabric'], version_type: 'release', dependencies, files: [{ filename: `${project}.jar`, url: `https://cdn.modrinth.com/${project}.jar`, size: bytes.length, hashes: { sha1: crypto.createHash('sha1').update(bytes).digest('hex') }, primary: true }], ...overrides };
}
async function fixture(t) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'kopeyka-mod-test-'));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  return { nickname: 'Player', memory: 4, gameDirectory: root, version: '1.21.1', loader: 'fabric', snapshots: false };
}
function requestFor(versions, corrupt = false) {
  return async url => {
    if (url.startsWith('https://cdn.modrinth.com/')) return new Response(corrupt ? Buffer.from('bad') : bytes);
    const parsed = new URL(url), route = parsed.pathname;
    const item = versions.find(v => route === `/v2/version/${v.id}`);
    if (item) return Response.json(item);
    const project = /\/project\/([^/]+)\/version/.exec(route)?.[1];
    return Response.json(versions.filter(v => v.project_id === project));
  };
}
test('resolves required dependencies once and excludes optional dependencies', async t => {
  const config = await fixture(t), dependency = { project_id: 'api', dependency_type: 'required' };
  const result = await resolveMods(config, ['one', 'two'], requestFor([version('one', '1', [dependency, { project_id: 'optional', dependency_type: 'optional' }]), version('two', '2', [dependency]), version('api', '3')]));
  assert.deepEqual(result.map(v => v.project_id), ['one', 'api', 'two']);
});
test('rejects wrong loader, game version and conflicting exact dependencies', async t => {
  const config = await fixture(t);
  await assert.rejects(resolveMods(config, ['one'], requestFor([version('one', '1', [], { loaders: ['forge'] })])), /Нет подходящей/);
  await assert.rejects(resolveMods(config, ['one'], requestFor([version('one', '1', [], { game_versions: ['1.20.1'] })])), /Нет подходящей/);
  await assert.rejects(resolveMods(config, ['one', 'two'], requestFor([version('one', '1', [{ version_id: '3', dependency_type: 'required' }]), version('two', '2', [{ version_id: '4', dependency_type: 'required' }]), version('api', '3'), version('api', '4')])), /разные версии/);
});
test('checks downloads before installing files and keeps mods isolated', async t => {
  const config = await fixture(t), versions = [version('one', '1')];
  await assert.rejects(installMods(config, ['one'], () => {}, requestFor(versions, true)), /Не удалось скачать/);
  assert.deepEqual(await listMods(config), []);
  await installMods(config, ['one'], () => {}, requestFor(versions));
  assert.equal((await listMods(config)).length, 1);
  assert.deepEqual(await listMods({ ...config, version: '1.20.1' }), []);
  await toggleMod(config, 'one.jar'); assert.equal((await listMods(config))[0].enabled, false);
  await toggleMod(config, 'one.jar.disabled'); assert.equal((await listMods(config))[0].enabled, true);
});
test('imports multiple local JARs, rejects other loaders and filename collisions', async t => {
  const config = await fixture(t), file = path.join(config.gameDirectory, 'local.jar');
  const zip = new AdmZip(); zip.addFile('fabric.mod.json', Buffer.from('{"id":"local","name":"Local mod","icon":"assets/local/icon.png"}'));
  const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4z8DwHwAFgAI/ScLbtAAAAABJRU5ErkJggg==', 'base64');
  zip.addFile('assets/local/icon.png', png); zip.writeZip(file);
  await importMods(config, [file]); assert.equal((await listMods(config))[0].file, 'local.jar');
  assert.equal((await listMods(config))[0].title, 'Local mod');
  assert.equal((await listMods(config))[0].icon, `data:image/png;base64,${png.toString('base64')}`);
  await toggleMod(config, 'local.jar');
  assert.equal((await listMods(config))[0].icon, `data:image/png;base64,${png.toString('base64')}`);
  await toggleMod(config, 'local.jar.disabled');
  await assert.rejects(importMods({ ...config, loader: 'forge' }, [file]), /другого загрузчика/);
  zip.addFile('other', Buffer.from('changed')); zip.writeZip(file);
  await assert.rejects(importMods(config, [file]), /уже существует/);
  await assert.rejects(toggleMod(config, '../local.jar'), /Некорректное/);
});
test('stores historical versions and loader, rejects unsafe profile names', async t => {
  const config = await fixture(t);
  assert.equal(validateSettings({ ...config, historical: true }, config).historical, true);
  assert.throws(() => profileDirectory({ ...config, version: '../bad' }));
  assert.throws(() => validateSettings({ ...config, loader: 'random' }, config));
});
test('backfills old installed-mod pictures once and filters untrusted media URLs', async t => {
  const config = await fixture(t), root = profileDirectory(config);
  await fs.mkdir(path.join(root, 'mods'), { recursive: true });
  await fs.writeFile(path.join(root, 'mods', 'one.jar'), bytes);
  await fs.writeFile(path.join(root, 'mods-index.json'), JSON.stringify([{ project: 'abcdefgh', file: 'one.jar', title: 'One' }]));
  let requests = 0;
  const request = async () => { requests++; return Response.json({ icon_url: 'https://cdn.modrinth.com/icon.png', gallery: [{ url: 'https://cdn.modrinth.com/screen.png' }, { url: 'https://untrusted.invalid/x.png' }] }); };
  const list = await listMods(config, request, true);
  assert.equal(list[0].icon, 'https://cdn.modrinth.com/icon.png');
  assert.deepEqual(list[0].gallery, ['https://cdn.modrinth.com/screen.png']);
  await listMods(config, request); assert.equal(requests, 1);
});
