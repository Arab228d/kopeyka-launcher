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
});
