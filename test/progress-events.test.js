const test = require('node:test');
const assert = require('node:assert/strict');
const { setTimeout: delay } = require('node:timers/promises');
const { createProgressSender } = require('../src/progress-events');
test('download bursts deliver the latest progress only', async () => {
  const received = [], send = createProgressSender(e => received.push(e), 10);
  for (let percent = 0; percent < 98; percent++) send({ kind: 'progress', percent });
  assert.equal(received.length, 0);
  await delay(30);
  assert.deepEqual(received, [{ kind: 'progress', percent: 97 }]);
});
test('errors and completion cancel stale pending progress immediately', async () => {
  const received = [], send = createProgressSender(e => received.push(e), 10);
  send({ kind: 'progress', percent: 95 }); send({ kind: 'error', message: 'Failed' });
  await delay(30);
  assert.deepEqual(received, [{ kind: 'error', message: 'Failed' }]);
  send({ kind: 'progress', percent: 98 }); send({ kind: 'progress', percent: 100 });
  await delay(30);
  assert.equal(received.length, 2); assert.equal(received[1].percent, 100);
});
