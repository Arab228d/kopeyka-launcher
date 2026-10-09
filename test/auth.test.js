const { test } = require('node:test');
const assert = require('node:assert/strict');
const { offlineProfile } = require('../src/auth');
test('offline identity is stable per name and uses Minecraft offline UUID', () => {
  assert.equal(offlineProfile('Notch').uuid, 'b50ad385829d3141a2167e7d7539ba7f');
  assert.deepEqual(offlineProfile('Player'), offlineProfile('Player'));
  assert.notEqual(offlineProfile('Player').uuid, offlineProfile('Other').uuid);
});
