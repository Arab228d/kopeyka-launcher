const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const AdmZip = require('adm-zip');
const { loadMinecraftTextures } = require('../src/minecraft-textures');
const PNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+j2ZkAAAAASUVORK5CYII=', 'base64');
test('reads whitelisted textures from a local client and reuses cache when client is unavailable', async () => {
  const temp = await fs.mkdtemp(path.join(os.tmpdir(), 'kopeyka-textures-'));
  try {
    const versionRoot = path.join(temp, 'game', 'versions', '1.21.1'); await fs.mkdir(versionRoot, { recursive: true });
    const zip = new AdmZip();
    for (const key of ['dirt', 'grass_block_top', 'oak_log']) zip.addFile(`assets/minecraft/textures/block/${key}.png`, PNG);
    zip.addFile('assets/minecraft/textures/block/not_allowed.png', PNG);
    zip.addFile('assets/minecraft/textures/block/sand.png', Buffer.from('not a PNG'));
    zip.writeZip(path.join(versionRoot, '1.21.1.jar'));
    const cache = path.join(temp, 'cache');
    const result = await loadMinecraftTextures([path.join(temp, 'game')], cache);
    assert.equal(result.source, 'minecraft'); assert.equal(result.version, '1.21.1');
    assert.match(result.textures.dirt, /^data:image\/png;base64,/); assert.equal(result.textures.not_allowed, undefined); assert.equal(result.textures.sand, undefined);
    assert.deepEqual(await loadMinecraftTextures([path.join(temp, 'missing')], cache), result);
  } finally {
    assert.ok(path.resolve(temp).startsWith(path.join(os.tmpdir(), 'kopeyka-textures-')));
    await fs.rm(temp, { recursive: true, force: true });
  }
});
test('keeps the approved Minecraft textures without game files or cache', async () => {
  const temp = await fs.mkdtemp(path.join(os.tmpdir(), 'kopeyka-empty-'));
  try {
    const result = await loadMinecraftTextures([path.join(temp, 'missing')], temp);
    assert.equal(result.source, 'minecraft');
    for (const key of ['dirt', 'grass_block_top', 'oak_leaves', 'poppy', 'steve', 'minecraft_logo', 'java_logo']) assert.match(result.textures[key], /^data:image\/png;base64,/);
  }
  finally { assert.ok(path.resolve(temp).startsWith(path.join(os.tmpdir(), 'kopeyka-empty-'))); await fs.rm(temp, { recursive: true, force: true }); }
});
test('retains extracted textures when writing the cache fails', async () => {
  const temp = await fs.mkdtemp(path.join(os.tmpdir(), 'kopeyka-cache-failure-'));
  try {
    const versionRoot = path.join(temp, 'game', 'versions', '1.21.1'); await fs.mkdir(versionRoot, { recursive: true });
    const zip = new AdmZip();
    for (const key of ['dirt', 'grass_block_top', 'oak_log']) zip.addFile(`assets/minecraft/textures/block/${key}.png`, PNG);
    zip.writeZip(path.join(versionRoot, '1.21.1.jar'));
    const cache = path.join(temp, 'file-instead-of-directory'); await fs.writeFile(cache, 'blocked');
    const result = await loadMinecraftTextures([path.join(temp, 'game')], cache);
    assert.equal(result.source, 'minecraft'); assert.equal(result.textures.dirt, `data:image/png;base64,${PNG.toString('base64')}`);
  } finally { assert.ok(path.resolve(temp).startsWith(path.join(os.tmpdir(), 'kopeyka-cache-failure-'))); await fs.rm(temp, { recursive: true, force: true }); }
});
