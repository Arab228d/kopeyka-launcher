// Real modded-client smoke check, isolated game directories; never touches user saves.
const fs = require('node:fs/promises');
const path = require('node:path');
const { GameClient: Client } = require('../src/game-client');
const { fetchJson, ensureJava, MANIFEST } = require('../src/engine');
const { offlineProfile } = require('../src/auth');
const { prepareMinecraft } = require('../src/installer');
const { prepareLoader, importOptifine } = require('../src/loaders');
const { installMods } = require('../src/mods');
(async () => {
  const kind = process.argv[2] || 'fabric', number = process.argv[3] || '1.21.1';
  const root = path.join(__dirname, '..', 'artifacts', `loader-${kind}-${number}`);
  const config = { nickname: 'KopeykaTest', memory: 2, version: number, gameDirectory: root, loader: kind };
  const assetRoot = path.join(process.env.APPDATA, 'KOPEYKA', 'minecraft', 'assets');
  const data = await fetchJson(MANIFEST), version = data.versions.find(v => v.id === number);
  const send = event => { if (event.percent === 100) console.log(event.message); };
  const { metadata } = await prepareMinecraft(root, version, send, { assetRoot });
  const index = JSON.parse(await fs.readFile(path.join(assetRoot, 'indexes', `${metadata.assetIndex.id}.json`), 'utf8'));
  if (!index.objects['icons/icon_16x16.png']) throw new Error('Official asset index is missing client resources');
  const java = await ensureJava(metadata.javaVersion?.majorVersion || 8, path.join(process.env.APPDATA, 'kopeyka-launcher', 'runtimes'), send);
  if (kind === 'optifine') {
    const name = `OptiFine_${number}_HD_U_J1.jar`;
    const page = await (await fetch(`https://optifine.net/adloadx?f=${name}`)).text();
    const href = /href=['"](downloadx\?[^'"]+)['"]/.exec(page)?.[1];
    if (!href) throw new Error('No official OptiFine link');
    const response = await fetch(new URL(href, 'https://optifine.net/'));
    if (!response.ok) throw new Error('OptiFine download failed');
    const file = path.join(root, name); await fs.writeFile(file, Buffer.from(await response.arrayBuffer()));
    await importOptifine(config, file);
  }
  const loader = await prepareLoader(config, metadata, java, send);
  console.log('Prepared loader:', JSON.stringify(loader));
  if (kind === 'fabric') console.log('Installed:', await installMods(config, ['modmenu'], () => {}));
  const client = new Client(); let child, ready = false, finished = false;
  const logfile = await fs.open(path.join(root, 'integration.log'), 'w');
  async function finish(ok, message) {
    if (finished) return; finished = true; if (child && !process.env.KOPEYKA_TEST_DETACH) child.kill();
    await logfile.close(); await fs.writeFile(path.join(root, 'result.json'), JSON.stringify({ ok, kind, number, message, pid: child?.pid, detached: Boolean(process.env.KOPEYKA_TEST_DETACH) }, null, 2));
    console.log(message); process.exit(ok ? 0 : 1);
  }
  client.on('debug', text => { logfile.write(text + '\n').catch(() => {}); if (/Failed|Couldn't/i.test(text)) console.log(text); });
  client.on('data', text => { logfile.write(text).catch(() => {}); if (/Sound engine started|Created:.*textures\/atlas\/blocks/.test(text) && !ready) { ready = true; setTimeout(() => finish(true, `${kind} reached renderer/audio initialization`), 2500); } });
  client.on('error', error => console.log(error));
  setTimeout(() => finish(false, 'Timed out'), 600000).unref();
  child = await client.launch({ root, authorization: offlineProfile('KopeykaTest'), javaPath: java, version: loader.version, customArgs: loader.customArgs, memory: { min: '1G', max: '2G' }, window: { width: 854, height: 480 }, overrides: { detached: false, assetRoot, ...loader.overrides } });
  if (!child) return finish(false, 'No client process');
  child.once('error', error => finish(false, error.message));
  child.once('close', code => { if (!ready) finish(false, `Early exit ${code}`); });
})().catch(error => { console.error(error); process.exit(1); });
