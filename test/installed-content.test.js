const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const { listInstalled } = require('../src/installed-content');

test('installed content combines mods, resource packs and shaders only from the selected build', async t => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'kopeyka-content-'));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const profile = { nickname: 'Player', memory: 4, version: '1.21.1', loader: 'fabric', gameDirectory: root };
  const build = path.join(root, 'profiles', '1.21.1-fabric');
  for (const folder of ['mods', 'resourcepacks', 'shaderpacks']) await fs.mkdir(path.join(build, folder), { recursive: true });
  await fs.writeFile(path.join(build, 'mods', 'local.jar.disabled'), 'fixture');
  await fs.writeFile(path.join(build, 'resourcepacks', 'Textures.zip'), 'fixture');
  await fs.mkdir(path.join(build, 'resourcepacks', 'Unpacked textures'));
  await fs.writeFile(path.join(build, 'resourcepacks', 'readme.txt'), 'ignored');
  await fs.writeFile(path.join(build, 'shaderpacks', 'Lighting.zip'), 'fixture');
  const installed = await listInstalled(profile, async () => new Response('', { status: 404 }));
  assert.equal(installed.length, 4);
  assert.deepEqual(installed.map(item => item.kind).sort(), ['mod', 'resourcepack', 'resourcepack', 'shader']);
  assert.equal(installed.find(item => item.kind === 'mod').enabled, false);
  assert.equal(installed.find(item => item.kind === 'shader').title, 'Lighting');
  assert.deepEqual(await listInstalled({ ...profile, loader: 'vanilla' }, async () => new Response('', { status: 404 })), []);
});
