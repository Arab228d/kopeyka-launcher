const { test } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { validateSettings } = require('../src/config');
const defaults = { nickname: 'Player', version: '1.21.1', memory: 4, snapshots: false, gameDirectory: path.resolve('minecraft') };
test('saves supported settings and drops arbitrary input', () => {
  const result = validateSettings({ nickname: 'Kopeyka_1', memory: 8, arbitrary: 'ignored' }, defaults);
  assert.equal(result.nickname, 'Kopeyka_1'); assert.equal(result.memory, 8); assert.equal(result.arbitrary, undefined);
});
test('rejects invalid player names, memory, versions and relative paths', () => {
  for (const input of [{ nickname: '../bad' }, { nickname: 'ab' }, { memory: 100 }, { memory: '4' }, { version: '../../bad' }, { gameDirectory: 'relative' }]) {
    assert.throws(() => validateSettings(input, defaults));
  }
});
