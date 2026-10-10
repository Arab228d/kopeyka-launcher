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
test('migrates old nicknames and persists up to 15 distinct local profiles', () => {
  assert.deepEqual(validateSettings({ nickname: 'Existing' }, defaults).profiles, ['Existing']);
  const profiles = Array.from({ length: 15 }, (_, i) => `Player_${i}`);
  const saved = validateSettings({ profiles, nickname: profiles[14] }, defaults);
  assert.deepEqual(validateSettings(JSON.parse(JSON.stringify(saved)), defaults), saved);
  for (const invalid of [[], [...profiles, 'Extra'], ['Player', 'player'], ['Player', '../bad']]) assert.throws(() => validateSettings({ profiles: invalid }, defaults));
  assert.throws(() => validateSettings({ profiles: ['Other'], nickname: 'Player' }, defaults));
});

test('migrates old defaults to latest release and preserves explicit version choices', () => {
  assert.equal(validateSettings({}, defaults).useLatestRelease, true);
  const saved = validateSettings({ useLatestRelease: false, version: '1.20.1', loader: 'fabric' }, defaults);
  assert.equal(validateSettings(JSON.parse(JSON.stringify(saved)), defaults).useLatestRelease, false);
  assert.equal(saved.version, '1.20.1');
});
