// Manual integration check: downloads and starts a real vanilla client.
const path = require('node:path');
const fs = require('node:fs/promises');
const { Client } = require('minecraft-launcher-core');
const { offlineProfile } = require('./src/auth');
const { fetchJson, ensureJava, MANIFEST } = require('./src/engine');
const { prepareMinecraft } = require('./src/installer');
(async () => {
  const root = process.env.KOPEYKA_TEST_ROOT || path.join(process.env.APPDATA, 'KOPEYKA', 'minecraft');
  const assetRoot = path.join(process.env.APPDATA, 'KOPEYKA', 'minecraft', 'assets');
  const runtime = path.join(process.env.APPDATA, 'kopeyka-launcher', 'runtimes');
  const data = await fetchJson(MANIFEST);
  const version = data.versions.find(v => v.id === (process.argv[2] || '1.21.1'));
  const installation = await prepareMinecraft(root, version, event => { if (event.kind === 'log' || event.percent === 100) console.log(event.message); }, { assetRoot });
  const metadata = installation.metadata;
  console.log(JSON.stringify({ installed: version.id, downloaded: installation.downloaded, cached: installation.cached }));
  let last = 0;
  const java = await ensureJava(metadata.javaVersion.majorVersion, runtime, event => {
    if (Date.now() - last > 5000) { console.log(event.message); last = Date.now(); }
  });
  await fs.mkdir(root, { recursive: true });
  const client = new Client();
  const log = await fs.open(path.join(process.cwd(), 'integration.log'), 'w');
  let ready = false, child, done = false;
  const finish = async (ok, reason) => {
    if (done) return; done = true;
    console.log(reason); await fs.writeFile('integration-result.json', JSON.stringify({ ok, reason, version: version.id }, null, 2));
    if (child) child.kill();
    await log.close(); process.exit(ok ? 0 : 1);
  };
  client.on('debug', text => { log.write(text + '\n').catch(() => {}); if (/Failed|Couldn't/i.test(text)) console.log(text); });
  client.on('data', text => {
    log.write(text).catch(() => {});
    if (!ready && /OpenAL initialized|Sound engine started|Created:.*textures\/atlas\/blocks/.test(text)) { ready = true; console.log('Minecraft renderer/audio initialized.'); setTimeout(() => finish(true, `Minecraft ${version.id} reached render initialization`), 3000); }
  });
  client.on('progress', event => { if (Date.now() - last > 5000) { console.log(`${event.type}: ${event.task}/${event.total}`); last = Date.now(); } });
  client.on('error', error => console.log(String(error)));
  const timeout = setTimeout(() => finish(false, 'Integration timed out'), 600000); timeout.unref();
  child = await client.launch({ root, authorization: offlineProfile('KopeykaTest'), javaPath: java, version: { number: version.id, type: 'release' }, memory: { min: '1G', max: '2G' }, window: { width: 854, height: 480 }, overrides: { detached: false, maxSockets: 16, assetRoot } });
  if (!child) return finish(false, 'Client returned no process; inspect integration.log');
  child.once('error', error => finish(false, error.message));
  child.once('close', code => { if (!ready) finish(false, `Minecraft exited before render initialization: ${code}`); });
})().catch(error => { console.error(error); process.exit(1); });
