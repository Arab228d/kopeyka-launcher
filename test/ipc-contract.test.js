const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { invoke, events } = require('../src/ipc-contract');

const source = file => fs.readFileSync(path.join(__dirname, '..', 'src', file), 'utf8');
const matches = (file, pattern) => [...source(file).matchAll(pattern)].map(match => match[1]);
const unique = values => [...new Set(values)].sort();

test('every preload channel has exactly one main-process handler', () => {
  const handlers = [
    ...matches('main.js', /ipcMain\.handle\(\s*['"]([^'"]+)['"]/g),
    ...matches('window-controls.js', /ipcMain\.handle\(\s*['"]([^'"]+)['"]/g)
  ];
  assert.deepEqual(unique(handlers), unique(Object.values(invoke)));
});

test('sandboxed preload invokes and listens on the shared channels', () => {
  const invoked = matches('preload.js', /ipcRenderer\.invoke\(\s*'([^']+)'/g);
  const listened = matches('preload.js', /ipcRenderer\.on\(\s*'([^']+)'/g);
  assert.deepEqual(unique(invoked), unique(Object.values(invoke)));
  assert.deepEqual(unique(listened), unique(Object.values(events)));
});

test('preload stays self-contained because sandboxed scripts cannot require local files', () => {
  assert.doesNotMatch(source('preload.js'), /require\(['"]\.\//);
});

test('every event channel the bridge listens to is actually sent', () => {
  const sent = [
    ...matches('main.js', /\.send\(\s*['"]([^'"]+)['"]/g),
    ...matches('window-controls.js', /\.send\(\s*['"]([^'"]+)['"]/g)
  ];
  assert.deepEqual(unique(sent), unique(Object.values(events)));
});
