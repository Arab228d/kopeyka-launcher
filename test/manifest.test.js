const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const crypto = require('node:crypto');
const manifest = require('../src/manifest');
const { prepareMinecraft } = require('../src/installer');

const sha1 = value => crypto.createHash('sha1').update(value).digest('hex');
const descriptor = (url, body) => ({ url, sha1: sha1(body), size: Buffer.byteLength(body) });
const clientJar = Buffer.from('client fixture');
function minecraftManifest(extra = {}) {
  return {
    id: '1.21.1', type: 'release',
    downloads: { client: descriptor('https://example.invalid/client.jar', clientJar), server: { sha1: 'c'.repeat(40), size: 1, url: 'https://example.invalid/server.jar' } },
    assetIndex: { id: '1.21.1', ...descriptor('https://example.invalid/index.json', '{"objects":{}}') },
    libraries: [{ name: 'com.example:library:1.0', downloads: { artifact: { path: 'com/example/library/1.0/library-1.0.jar', url: 'https://example.invalid/library.jar', sha1: 'd'.repeat(40), size: 10 } } }],
    arguments: { game: ['--username', { rules: [{ action: 'allow', os: { name: 'windows' } }], value: ['-Xss1M'] }], jvm: [] },
    javaVersion: { component: 'java-runtime-gamma', majorVersion: 21 },
    ...extra
  };
}
const label = /Некорректный манифест Minecraft 1\.21\.1/;

test('accepts a Mojang-shaped version manifest', () => {
  assert.doesNotThrow(() => manifest.versionManifest(minecraftManifest(), '1.21.1'));
  assert.doesNotThrow(() => manifest.versionManifest(minecraftManifest({ libraries: [], arguments: undefined, inheritsFrom: '1.21', minecraftArguments: '--username ${auth_player_name}' }), '1.21.1'));
});

test('rejects manifests with missing downloads, libraries and arguments instead of failing later', () => {
  const cases = [
    [value => { delete value.downloads.client; }, /downloads\.client/],
    [value => { value.downloads.client.url = 'ftp://example.invalid/client.jar'; }, /downloads\.client\.url/],
    [value => { value.downloads.client.sha1 = 'not-a-hash'; }, /downloads\.client\.sha1/],
    [value => { value.assetIndex = undefined; }, /assetIndex/],
    [value => { value.libraries = {}; }, /libraries/],
    [value => { value.libraries[0].name = ''; }, /libraries\[0\]\.name/],
    [value => { value.libraries[0].downloads.artifact.sha1 = ''; }, /libraries\[0\]\.downloads\.artifact\.sha1/],
    [value => { value.arguments.game = '--username'; }, /arguments\.game/],
    [value => { value.arguments.game[1].rules = 'windows'; }, /arguments\.game\[1\]\.rules/],
    [value => { value.javaVersion.majorVersion = '21'; }, /javaVersion\.majorVersion/],
    [value => { value.id = '1.20.1'; }, /не совпадает/]
  ];
  for (const [mutate, expected] of cases) {
    const value = minecraftManifest(); mutate(value);
    assert.throws(() => manifest.versionManifest(value, '1.21.1'), expected);
  }
  assert.throws(() => manifest.versionManifest(null, '1.21.1'), label);
  assert.throws(() => manifest.versionManifest(minecraftManifest(), '26.3'), /Некорректный манифест Minecraft 26\.3.*не совпадает/);
});

test('accepts Fabric and OptiFine profiles whose libraries have no download descriptors', () => {
  const fabric = {
    id: 'fabric-loader-0.16.10-1.21.1', inheritsFrom: '1.21.1', mainClass: 'net.fabricmc.loader.impl.launch.knot.KnotClient',
    arguments: { game: [], jvm: ['-DFabricMcEmu= net.minecraft.client.main.Main '] },
    libraries: [{ name: 'org.ow2.asm:asm:9.7.1', url: 'https://maven.fabricmc.net/', sha1: 'e'.repeat(40), size: 126093 }]
  };
  assert.equal(manifest.fabricProfile(fabric).id, fabric.id);
  assert.doesNotThrow(() => manifest.loaderProfile({ id: '1.21.4-OptiFine_HD_U_J3', inheritsFrom: '1.21.4', libraries: [{ name: 'optifine:OptiFine:1.21.4_HD_U_J3' }], arguments: { game: [] } }, '1.21.4-OptiFine_HD_U_J3'));
  assert.throws(() => manifest.fabricProfile({ inheritsFrom: '1.21.1', libraries: [] }), /профиль Fabric.*id/);
  assert.throws(() => manifest.fabricProfile({ id: 'x' }), /libraries/);
  assert.throws(() => manifest.loaderProfile({ libraries: [{}] }), /libraries\[0\]\.name/);
});

test('reads Forge installers with version.json and old install_profile.json shapes', () => {
  const library = name => ({ name, downloads: { artifact: { path: 'a/b.jar', url: '', sha1: 'f'.repeat(40), size: 1 } } });
  assert.equal(manifest.forgeProfile({ id: '1.21.1-forge-52.1.20', libraries: [library('net.minecraftforge:forge:1.21.1-52.1.20:client')], arguments: { game: [], jvm: [] } }), '1.21.1-forge-52.1.20');
  assert.equal(manifest.forgeProfile({ spec: 1, version: '1.12.2-forge-14.23.5.2860', minecraft: '1.12.2', libraries: [library('net.minecraftforge:forge:1.12.2')] }), '1.12.2-forge-14.23.5.2860');
  assert.equal(manifest.forgeProfile({ versionInfo: { id: '1.7.10-forge-10.13.4.1614' } }), '1.7.10-forge-10.13.4.1614');
  assert.equal(manifest.forgeProfile({}, 'fallback-id'), 'fallback-id');
  assert.throws(() => manifest.forgeProfile({ libraries: [{ name: 42 }] }), /libraries\[0\]\.name/);
  assert.throws(() => manifest.forgeProfile({}, ''), /нет id/);
  assert.throws(() => manifest.forgeProfile([]), /профиль установщика Forge/);
});

test('requires id in NeoForge profiles and checks asset indexes', () => {
  assert.equal(manifest.neoforgeProfile({ id: 'neoforge-21.1.190', libraries: [] }).id, 'neoforge-21.1.190');
  assert.throws(() => manifest.neoforgeProfile({ libraries: [] }), /NeoForge.*id/);
  assert.doesNotThrow(() => manifest.assetIndex({ objects: { 'icons/icon_16x16.png': { hash: 'a'.repeat(40), size: 0 } } }));
  assert.throws(() => manifest.assetIndex({ objects: { icon: { hash: 'zz', size: 1 } } }), /objects\.icon\.hash/);
  assert.throws(() => manifest.assetIndex({ objects: { icon: { hash: 'a'.repeat(40), size: -1 } } }), /objects\.icon\.size/);
  assert.throws(() => manifest.assetIndex({}), /objects/);
});

test('validates launcher markers so a damaged cache triggers a reinstall', () => {
  assert.equal(manifest.installerMarker({ id: '1.21.1-fabric', combo: { forge: '52.1.20', optifine: 'OptiFine_1.21.1_HD_U_J1.jar' } }).id, '1.21.1-fabric');
  assert.throws(() => manifest.installerMarker({ combo: {} }), /маркер.*id/);
  assert.throws(() => manifest.installerMarker({ id: 'x', combo: { forge: '52.1.20' } }), /combo\.optifine/);
  assert.equal(manifest.optifineMarker({ id: '1.21.4-OptiFine_HD_U_J3', name: 'OptiFine_1.21.4_HD_U_J3.jar' }).id, '1.21.4-OptiFine_HD_U_J3');
  assert.throws(() => manifest.optifineMarker({ name: 'broken' }), /файл OptiFine.*id/);
  assert.throws(() => manifest.parseJson('{', 'манифест Minecraft'), /повреждён/);
});

test('validates the Mojang version list before any version is selected', () => {
  const entry = { id: '26.3', type: 'release', url: 'https://example.invalid/26.3.json', sha1: 'a'.repeat(40) };
  assert.equal(manifest.versionCatalog({ latest: { release: '26.3', snapshot: '26.4' }, versions: [entry] }).versions.length, 1);
  assert.throws(() => manifest.versionCatalog({ versions: [] }), /versions пуст/);
  assert.throws(() => manifest.versionCatalog({ versions: [{ ...entry, url: 'file:///26.3.json' }] }), /versions\[0\]\.url/);
  assert.throws(() => manifest.versionCatalog({ versions: [{ ...entry, sha1: 'nope' }] }), /versions\[0\]\.sha1/);
  assert.throws(() => manifest.versionCatalog({ versions: [{ ...entry, id: '' }] }), /versions\[0\]\.id/);
});

test('loaderChoices picks stable loaders and survives malformed promotion payloads', async t => {
  const { loaderChoices } = require('../src/loaders');
  t.mock.method(globalThis, 'fetch', async url => String(url).includes('files.minecraftforge.net')
    ? Response.json({ promos: { '1.21.1-recommended': '52.1.20', '1.21.1-latest': '52.1.21' } })
    : Response.json([{ loader: { version: '0.16.10', stable: false } }, { loader: { version: '0.15.11', stable: true } }]));
  assert.deepEqual(await loaderChoices('1.21.1'), { forge: '52.1.20', fabric: '0.15.11', errors: false });
  t.mock.method(globalThis, 'fetch', async url => String(url).includes('files.minecraftforge.net') ? Response.json({ promos: null }) : Response.json({ malformed: true }));
  assert.deepEqual(await loaderChoices('1.21.1'), { forge: null, fabric: null, errors: true });
});

test('prepareMinecraft rejects a broken manifest before downloading its client', async t => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'kopeyka-manifest-'));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const broken = minecraftManifest(); delete broken.downloads.client;
  const body = JSON.stringify(broken);
  const version = { id: '1.21.1', ...descriptor('https://example.invalid/version.json', body) };
  const requested = [];
  t.mock.method(globalThis, 'fetch', async url => { requested.push(String(url)); if (String(url).endsWith('version.json')) return new Response(body); throw new Error('Unexpected request'); });
  await assert.rejects(prepareMinecraft(root, version, () => {}, { assetRoot: path.join(root, 'assets') }), /downloads\.client/);
  assert.deepEqual(requested, ['https://example.invalid/version.json']);
  await assert.rejects(fs.access(path.join(root, 'versions', '1.21.1', '1.21.1.jar')));
});

test('prepareMinecraft installs through validated manifest and asset index', async t => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'kopeyka-manifest-valid-'));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const indexBody = JSON.stringify({ objects: {} });
  const value = minecraftManifest({ assetIndex: { id: '1.21.1', ...descriptor('https://example.invalid/index.json', indexBody) } });
  value.libraries = [];
  const body = JSON.stringify(value);
  const version = { id: '1.21.1', ...descriptor('https://example.invalid/version.json', body) };
  t.mock.method(globalThis, 'fetch', async url => {
    const target = String(url);
    if (target.endsWith('version.json')) return new Response(body);
    if (target.endsWith('index.json')) return new Response(indexBody);
    if (target.endsWith('client.jar')) return new Response(clientJar);
    throw new Error('Unexpected request ' + target);
  });
  const result = await prepareMinecraft(root, version, () => {}, { assetRoot: path.join(root, 'assets') });
  assert.equal(result.metadata.id, '1.21.1');
  assert.equal(result.downloaded, 1);
  assert.deepEqual(await fs.readFile(path.join(root, 'versions', '1.21.1', '1.21.1.jar')), clientJar);
});
