const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { compile, findRuntimeCompiler } = require('../src/optifine-helper/compile');

const javac = findRuntimeCompiler();

test('compiles the OptiFine helper to Java 8 bytecode from bundled runtimes', { skip: !javac }, t => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'kopeyka-helper-'));
  t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  const target = path.join(directory, 'KopeykaOptifineInstall.class');
  assert.equal(compile({ javac, output: target }), target);
  const bytes = fs.readFileSync(target);
  assert.equal(bytes.readUInt32BE(0), 0xcafebabe);
  assert.equal(bytes.readUInt16BE(6), 52);
});

test('reports a missing runtime compiler instead of guessing', () => {
  assert.equal(findRuntimeCompiler(path.join(os.tmpdir(), 'kopeyka-missing-runtimes')), null);
});
