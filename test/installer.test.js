const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const crypto = require('node:crypto');
const { downloadFile, validFile, allowedLibrary, inside } = require('../src/installer');
test('retries damaged downloads, commits verified bytes, and reuses them without a request', async () => {
  const temp = await fs.mkdtemp(path.join(os.tmpdir(), 'kopeyka-download-'));
  try {
    const body = Buffer.from('verified Minecraft fixture'); const file = path.join(temp, 'client.jar');
    const descriptor = { url: 'https://example.invalid/client.jar', size: body.length, sha1: crypto.createHash('sha1').update(body).digest('hex') };
    let calls = 0;
    const request = async () => new Response(++calls === 1 ? 'broken' : body);
    assert.deepEqual(await downloadFile(descriptor, file, undefined, request), { cached: false }); assert.equal(calls, 2);
    assert.equal(await validFile(file, descriptor), true); assert.deepEqual(await downloadFile(descriptor, file, undefined, request), { cached: true }); assert.equal(calls, 2);
    await fs.writeFile(file, 'bad'); await downloadFile(descriptor, file, undefined, request); assert.equal(calls, 3);
    await assert.rejects(fs.access(file + '.part'));
  } finally { assert.ok(path.resolve(temp).startsWith(path.join(os.tmpdir(), 'kopeyka-download-'))); await fs.rm(temp, { recursive: true, force: true }); }
});
test('failed requests do not leave a completed client or partial file', async () => {
  const temp = await fs.mkdtemp(path.join(os.tmpdir(), 'kopeyka-failed-'));
  try {
    const file = path.join(temp, 'client.jar'); let calls = 0;
    await assert.rejects(downloadFile({ url: 'https://example.invalid', sha1: '0'.repeat(40) }, file, undefined, async () => { calls++; return new Response('missing', { status: 404 }); }), /3 попыток/);
    assert.equal(calls, 3); await assert.rejects(fs.access(file)); await assert.rejects(fs.access(file + '.part'));
  } finally { assert.ok(path.resolve(temp).startsWith(path.join(os.tmpdir(), 'kopeyka-failed-'))); await fs.rm(temp, { recursive: true, force: true }); }
});
test('filters platform rules and rejects paths outside the game directory', () => {
  assert.equal(allowedLibrary({ rules: [{ action: 'allow', os: { name: 'linux' } }] }), false);
  assert.equal(allowedLibrary({ rules: [{ action: 'allow' }, { action: 'disallow', os: { name: 'osx' } }] }), true);
  assert.equal(allowedLibrary({ rules: [{ action: 'allow', os: { name: 'windows', arch: 'x86' } }] }), false);
  assert.throws(() => inside(path.resolve('minecraft'), '../outside.jar'));
  const driveRoot = path.parse(path.resolve('minecraft')).root;
  assert.equal(inside(driveRoot, 'minecraft/client.jar'), path.join(driveRoot, 'minecraft', 'client.jar'));
});
test('concurrent downloads of one target share verified bytes without competing partial files', async t => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'kopeyka-concurrent-'));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const bytes = Buffer.from('one verified download'), file = path.join(root, 'client.jar');
  const descriptor = { url: 'https://example.invalid/client.jar', size: bytes.length, sha1: crypto.createHash('sha1').update(bytes).digest('hex') };
  let requests = 0;
  const request = async () => { requests++; await new Promise(resolve => setImmediate(resolve)); return new Response(bytes); };
  const results = await Promise.all([downloadFile(descriptor, file, undefined, request), downloadFile(descriptor, file, undefined, request)]);
  assert.equal(requests, 1);
  assert.deepEqual(results, [{ cached: false }, { cached: true }]);
  assert.deepEqual(await fs.readFile(file), bytes);
  assert.deepEqual(await fs.readdir(root), ['client.jar']);
});
test('rejects oversized transfers before writing bytes beyond the expected size', async t => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'kopeyka-oversized-'));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  let reports = 0;
  await assert.rejects(downloadFile({ url: 'https://example.invalid/client.jar', size: 2, sha1: '0'.repeat(40) }, path.join(root, 'client.jar'), () => reports++, async () => new Response('too large')), /Неверный размер файла/);
  assert.equal(reports, 0);
  assert.deepEqual(await fs.readdir(root), []);
});
test('Java discovery skips a damaged preferred runtime and reuses a working installed copy', async t => {
  const { findJava } = require('../src/engine');
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'kopeyka-runtime-choice-'));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  for (const name of ['verified-1', 'verified-2']) {
    await fs.mkdir(path.join(root, name, 'bin'), { recursive: true });
    await fs.writeFile(path.join(root, name, 'bin', 'java.exe'), 'fixture');
  }
  const checked = [];
  const found = await findJava(root, async file => { checked.push(path.basename(path.dirname(path.dirname(file)))); if (file.includes('verified-2')) throw new Error('damaged'); });
  assert.equal(found, path.join(root, 'verified-1', 'bin', 'java.exe'));
  assert.deepEqual(checked, ['verified-2', 'verified-1']);
});
test('failed Java verification removes its extracted staging tree and archive', { skip: process.platform !== 'win32' || process.arch !== 'x64' }, async t => {
  const { ensureJava } = require('../src/engine'), AdmZip = require('adm-zip');
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'kopeyka-runtime-cleanup-'));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const zip = new AdmZip(); zip.addFile('jdk/bin/java.exe', Buffer.from('not an executable'));
  const bytes = zip.toBuffer(), checksum = crypto.createHash('sha256').update(bytes).digest('hex');
  t.mock.method(globalThis, 'fetch', async url => String(url).includes('api.adoptium.net') ? Response.json([{ binary: { package: { checksum, link: 'https://example.invalid/java.zip' } } }]) : new Response(bytes));
  await assert.rejects(ensureJava(21, root, () => {}), /исправный исполняемый файл Java/);
  assert.deepEqual(await fs.readdir(path.join(root, 'java-21')), []);
});
