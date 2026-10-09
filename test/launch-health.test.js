const { test } = require('node:test');
const assert = require('node:assert/strict');
const { launchMemory, launchFailure } = require('../src/launch-health');
const GB = 1073741824;
test('leaves RAM for Windows and caps requested Java heap using free memory', () => {
  assert.equal(launchMemory(4, 4 * GB, 3 * GB), 2);
  assert.equal(launchMemory(8, 16 * GB, 5 * GB), 4);
  assert.equal(launchMemory(4, 16 * GB, 12 * GB), 4);
  assert.throws(() => launchMemory(4, 8 * GB, 2 * GB), /Недостаточно/);
});
test('distinguishes Java memory and graphics failures from unexplained exits', () => {
  assert.match(launchFailure('Could not reserve enough space for object heap', 1), /не хватило памяти/);
  assert.match(launchFailure('UnsupportedClassVersionError: version 65', 1), /Версия Java/);
  assert.match(launchFailure('GLFW error 65542', 1), /OpenGL/);
  assert.match(launchFailure('unknown', -1), /кодом -1/);
});
test('waits for client initialization rather than merely Java starting', () => {
  const { gameReady } = require('../src/game-client');
  assert.equal(gameReady('Setting user: Player\nLWJGL version 3.3.3'), false);
  assert.equal(gameReady('Could not create the Java Virtual Machine'), false);
  assert.equal(gameReady('Created: 1024x512 minecraft:textures/atlas/blocks.png-atlas'), true);
  assert.equal(gameReady('OpenAL initialized.'), true);
});
test('metadata failures identify the affected server and DNS cause', async () => {
  const { fetchJson } = require('../src/engine');
  const request = async () => { throw new TypeError('fetch failed', { cause: { code: 'ENOTFOUND' } }); };
  await assert.rejects(fetchJson('https://api.adoptium.net/v3/assets/latest/21', request), /сервер api.adoptium.net.*DNS/);
});
test('extracts Java ZIP in a worker without blocking the main process', async t => {
  const fs = require('node:fs/promises'), path = require('node:path'), os = require('node:os');
  const { Worker } = require('node:worker_threads'), AdmZip = require('adm-zip');
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'kopeyka-runtime-test-'));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const archive = path.join(root, 'runtime.zip'), destination = path.join(root, 'extracted');
  const zip = new AdmZip(); zip.addFile('jdk/bin/java.exe', Buffer.from('fixture')); zip.writeZip(archive);
  await new Promise((resolve, reject) => {
    const worker = new Worker(path.join(__dirname, '../src/runtime-extract.js'), { workerData: { archive, destination } });
    worker.once('message', result => result.ok ? resolve() : reject(new Error(result.error))); worker.once('error', reject);
  });
  assert.equal(await fs.readFile(path.join(destination, 'jdk/bin/java.exe'), 'utf8'), 'fixture');
});
