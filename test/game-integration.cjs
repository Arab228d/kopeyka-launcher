// Optional real client check in a disposable profile. Never opens a world.
const fs = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const { fetchJson, ensureJava, MANIFEST } = require('../src/engine');
const { prepareMinecraft } = require('../src/installer');
const { prepareLoader } = require('../src/loaders');
const { GameClient, gameReady } = require('../src/game-client');
const { offlineProfile } = require('../src/auth');
const root = path.resolve(process.env.KOPEYKA_TEST_ROOT || 'artifacts/game-integration');
const versionId = process.argv[2] || '1.21.1';
const loaderId = process.argv[3] || 'forge_optifine';
let child, finished = false, output = '', last = 0;
const logFile = path.join(root, 'integration.log');
async function seed(source, destination) {
  let entries;
  try { entries = await fs.readdir(source, { withFileTypes: true }); } catch { return; }
  await fs.mkdir(destination, { recursive: true });
  for (const entry of entries) {
    const from = path.join(source, entry.name), to = path.join(destination, entry.name);
    if (entry.isDirectory()) await seed(from, to);
    else if (entry.isFile()) {
      try {
        // JSON indexes can be rewritten during preparation; give them separate bytes.
        if (entry.name.endsWith('.json')) await fs.copyFile(from, to, require('node:fs').constants.COPYFILE_EXCL);
        else await fs.link(from, to);
      } catch (error) { if (error.code !== 'EEXIST' && error.code !== 'EXDEV') throw error; }
    }
  }
}
function report(event) {
  if (Date.now() - last > 10000) { last = Date.now(); console.log(event.message || event.kind); }
}
async function finish(ok, reason) {
  if (finished) return; finished = true;
  if (child && child.exitCode === null) child.kill();
  const result = { ok, version: versionId, loader: loaderId, reason };
  await fs.writeFile(path.join(root, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result)); process.exit(ok ? 0 : 1);
}
(async () => {
  await fs.mkdir(root, { recursive: true });
  await fs.writeFile(logFile, '');
  const timeout = setTimeout(() => finish(false, 'Timed out'), 720000); timeout.unref();
  let source = path.join(os.homedir(), '.kopeyka', 'minecraft');
  try { source = JSON.parse(await fs.readFile(path.join(os.homedir(), '.kopeyka', 'launcher', 'settings.json'), 'utf8')).gameDirectory || source; } catch {}
  if (path.resolve(source) === root) throw new Error('Integration root must differ from the real game folder.');
  for (const name of ['libraries', 'assets', 'versions/' + versionId]) await seed(path.join(source, name), path.join(root, name));
  const manifest = await fetchJson(MANIFEST), version = manifest.versions.find(v => v.id === versionId);
  if (!version) throw new Error('Version unavailable');
  const { metadata } = await prepareMinecraft(root, version, report);
  const java = await ensureJava(metadata.javaVersion?.majorVersion || 8, path.join(root, 'runtimes'), report, path.resolve('build/runtimes'));
  const config = { nickname: 'KopeykaTest', version: versionId, loader: loaderId, memory: 3, gameDirectory: root };
  const loader = await prepareLoader(config, metadata, java, report);
  const client = new GameClient();
  const record = value => { fs.appendFile(logFile, String(value) + '\n').catch(() => {}); };
  client.on('debug', record);
  client.on('error', record);
  client.on('data', data => {
    record(data); output = (output + data).slice(-64000);
    if (gameReady(output)) finish(true, 'Minecraft reached renderer/audio initialization');
  });
  client.on('close', code => { if (!finished) finish(false, 'Client exited before readiness: ' + code); });
  child = await client.launch({ root, javaPath: java, authorization: offlineProfile(config.nickname), version: loader.version, customArgs: loader.customArgs,
    memory: { min: '1G', max: '3G' }, window: { width: 854, height: 480 }, overrides: { detached: false, maxSockets: 4, ...loader.overrides } });
  if (!child) await finish(false, 'No game process; inspect integration.log');
})().catch(error => finish(false, error.message));
