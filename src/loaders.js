const fs = require('node:fs/promises');
const path = require('node:path');
const { spawn } = require('node:child_process');
const AdmZip = require('adm-zip');
const { fetchJson } = require('./engine');
const { downloadFile, inside } = require('./installer');
const { profileDirectory } = require('./mods');
const FORGE = 'https://maven.minecraftforge.net/net/minecraftforge/forge';
async function loaderChoices(version) {
  const [forge, fabric] = await Promise.allSettled([
    fetchJson('https://files.minecraftforge.net/net/minecraftforge/forge/promotions_slim.json'),
    fetchJson(`https://meta.fabricmc.net/v2/versions/loader/${encodeURIComponent(version)}`)
  ]);
  return { forge: forge.status === 'fulfilled' ? forge.value.promos[`${version}-recommended`] || forge.value.promos[`${version}-latest`] || null : null,
    fabric: fabric.status === 'fulfilled' ? (fabric.value.find(v => v.loader.stable) || fabric.value[0])?.loader.version || null : null,
    errors: [forge, fabric].some(v => v.status === 'rejected') };
}
function runJava(java, args, cwd, send = () => {}, timeout = 600000) {
  return new Promise((resolve, reject) => {
    const child = spawn(java, args, { cwd, windowsHide: true });
    let output = '', done = false;
    const timer = setTimeout(() => { child.kill(); finish(new Error('Установка загрузчика заняла слишком долго. Попробуйте снова.')); }, timeout);
    function finish(error) { if (done) return; done = true; clearTimeout(timer); error ? reject(error) : resolve(output); }
    const onData = bytes => { const text = bytes.toString(); output = (output + text).slice(-16000); send({ kind: 'log', message: text }); };
    child.stdout.on('data', onData); child.stderr.on('data', onData);
    child.on('error', finish);
    child.on('close', code => finish(code === 0 ? null : new Error(`Установка загрузчика завершилась с кодом ${code}. ${output.slice(-1200)}`)));
  });
}
async function importOptifine(config, source) {
  const archive = new AdmZip(source);
  if (!archive.getEntry('optifine/Installer.class')) throw new Error('Выберите оригинальный установщик OptiFine JAR.');
  const name = path.basename(source);
  // The official filename encodes the Minecraft version.
  const match = /^(?:preview_)?OptiFine_(.+?)_(HD_U_.+)\.jar$/i.exec(name);
  if (!match || match[1] !== config.version) throw new Error(`Нужен OptiFine для Minecraft ${config.version}.`);
  const root = profileDirectory({ ...config, loader: 'optifine' });
  await fs.mkdir(root, { recursive: true });
  await fs.copyFile(source, path.join(root, 'optifine-installer.jar'));
  await fs.writeFile(path.join(root, 'optifine.json'), JSON.stringify({ name, minecraft: config.version, id: `${config.version}-OptiFine_${match[2]}` }));
  await fs.unlink(path.join(root, 'loader-installed.json')).catch(() => {});
  return name;
}
async function prepareLoader(config, metadata, java, send) {
  if (config.loader === 'vanilla') return { version: { number: config.version, type: metadata.type }, overrides: {} };
  const root = config.gameDirectory;
  const gameDirectory = profileDirectory(config);
  await fs.mkdir(gameDirectory, { recursive: true });
  const marker = path.join(gameDirectory, 'loader-installed.json');
  let id;
  try { const cached = JSON.parse(await fs.readFile(marker, 'utf8')); id = cached.id; await fs.access(inside(root, `versions/${id}/${id}.json`)); } catch { id = null; }
  if (!id) {
    send({ kind: 'progress', percent: null, message: `Установка ${config.loader} для ${config.version}…` });
    if (config.loader === 'fabric') {
      const choices = await loaderChoices(config.version);
      if (!choices.fabric) throw new Error('Fabric недоступен для этой версии или сервер не отвечает.');
      const profile = await fetchJson(`https://meta.fabricmc.net/v2/versions/loader/${encodeURIComponent(config.version)}/${choices.fabric}/profile/json`);
      id = profile.id;
      const directory = inside(root, `versions/${id}`); await fs.mkdir(directory, { recursive: true });
      await fs.writeFile(inside(directory, `${id}.json`), JSON.stringify(profile));
    } else if (config.loader === 'forge') {
      const choices = await loaderChoices(config.version);
      if (!choices.forge) throw new Error('Forge недоступен для этой версии или сервер не отвечает.');
      const full = `${config.version}-${choices.forge}`, url = `${FORGE}/${full}/forge-${full}-installer.jar`;
      const checksum = await fetch(`${url}.sha1`, { signal: AbortSignal.timeout(30000) });
      if (!checksum.ok) throw new Error('Не удалось проверить установщик Forge.');
      const sha1 = (await checksum.text()).trim().split(/\s/)[0];
      const installer = inside(root, `installers/forge-${full}.jar`);
      await downloadFile({ url, sha1 }, installer, (done, total) => send({ kind: 'progress', message: 'Загрузка Forge…', percent: total ? done / total * 100 : null }));
      await ensureLauncherProfiles(root);
      await runJava(java, ['-jar', installer, '--installClient', root, '--mirror', 'https://maven.minecraftforge.net/'], root, send);
      id = `${config.version}-forge-${choices.forge}`;
      // Older installers use a different id; read the installer's own profile.
      const zip = new AdmZip(installer);
      const profile = JSON.parse(zip.readAsText(zip.getEntry('version.json') ? 'version.json' : 'install_profile.json'));
      id = profile.id || profile.versionInfo?.id || id;
    } else if (config.loader === 'optifine') {
      const installer = path.join(gameDirectory, 'optifine-installer.jar');
      try { await fs.access(installer); } catch { throw new Error('Открой Mods → OptiFine и выбери установщик JAR с optifine.net.'); }
      await ensureLauncherProfiles(root);
      const helper = path.join(gameDirectory, 'KopeykaOptifineInstall.java');
      await fs.writeFile(helper, 'import java.io.File; public class KopeykaOptifineInstall { public static void main(String[] args) throws Exception { Class.forName("optifine.Installer").getMethod("doInstall", File.class).invoke(null, new File(args[0])); } }');
      const javac = path.join(path.dirname(java), 'javac.exe');
      await runJava(javac, ['-encoding', 'UTF-8', '-d', gameDirectory, helper], gameDirectory, send, 60000);
      await runJava(java, ['-Djava.awt.headless=true', '-cp', `${gameDirectory}${path.delimiter}${installer}`, 'KopeykaOptifineInstall', root], root, send);
      id = JSON.parse(await fs.readFile(path.join(gameDirectory, 'optifine.json'), 'utf8')).id;
      const installed = JSON.parse(await fs.readFile(inside(root, `versions/${id}/${id}.json`), 'utf8'));
      if (installed.inheritsFrom !== config.version) throw new Error('OptiFine не создал профиль для выбранной версии.');
    }
    await fs.access(inside(root, `versions/${id}/${id}.json`));
    await fs.writeFile(marker, JSON.stringify({ id }));
  }
  const file = inside(root, `versions/${id}/${id}.json`);
  const profile = JSON.parse(await fs.readFile(file, 'utf8'));
  const combined = { ...profile, arguments: { ...metadata.arguments, ...profile.arguments, game: [...(metadata.arguments?.game || []), ...(profile.arguments?.game || [])] } };
  if (profile.minecraftArguments) combined.minecraftArguments = profile.minecraftArguments;
  else if (metadata.minecraftArguments && !profile.arguments?.game?.length) combined.minecraftArguments = metadata.minecraftArguments;
  // MCLC reads the base version separately, and merges its libraries with these.
  const custom = `${id}-kopeyka`, directory = inside(root, `versions/${custom}`);
  await fs.mkdir(directory, { recursive: true });
  await fs.writeFile(inside(directory, `${custom}.json`), JSON.stringify(combined));
  const customArgs = (profile.arguments?.jvm || []).filter(arg => typeof arg === 'string').map(arg => arg.replaceAll('${library_directory}', path.join(root, 'libraries')).replaceAll('${classpath_separator}', path.delimiter).replaceAll('${version_name}', id));
  if (customArgs.some(arg => /\$\{/.test(arg))) throw new Error('Загрузчик содержит неподдерживаемые аргументы Java.');
  return { version: { number: config.version, type: metadata.type, custom }, customArgs,
    overrides: { gameDirectory, versionJson: inside(root, `versions/${config.version}/${config.version}.json`), minecraftJar: inside(root, `versions/${config.version}/${config.version}.jar`), assetIndex: metadata.assetIndex.id } };
}
async function ensureLauncherProfiles(root) {
  const file = path.join(root, 'launcher_profiles.json');
  try { await fs.access(file); } catch { await fs.writeFile(file, JSON.stringify({ profiles: {}, selectedProfile: '', clientToken: '', authenticationDatabase: {}, launcherVersion: { name: 'KOPEYKA', format: 21 } })); }
}
module.exports = { loaderChoices, prepareLoader, importOptifine, runJava };
