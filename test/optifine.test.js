const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs/promises'),os=require('node:os'),path=require('node:path'),AdmZip=require('adm-zip');
const {downloadOptifine,officialUrl}=require('../src/optifine');
test('OptiFine resolves official mirror, verifies installer and rejects unavailable versions',async t=>{const root=await fs.mkdtemp(path.join(os.tmpdir(),'kopeyka-optifine-'));t.after(()=>fs.rm(root,{recursive:true,force:true}));const zip=new AdmZip();zip.addFile('optifine/Installer.class',Buffer.from('test'));const bytes=zip.toBuffer();const request=async url=>url.includes('/downloads')?new Response('adloadx?f=OptiFine_1.21.1_HD_U_J1.jar'):url.includes('/adloadx')?new Response("<a href='downloadx?f=OptiFine_1.21.1_HD_U_J1.jar&x=token'>Download</a>"):new Response(bytes);const file=await downloadOptifine({version:'1.21.1',gameDirectory:root},()=>{},request);assert.deepEqual(await fs.readFile(file),bytes);await assert.rejects(downloadOptifine({version:'26.3',gameDirectory:root},()=>{},request),/ещё не выпущен/);assert.throws(()=>officialUrl('https://evil.example/downloadx'),/Некорректная ссылка/);});


test('Forge + OptiFine catalog excludes N/A and pins the stable compatible pair', () => {
 const {parseCatalog}=require('../src/loader-catalog');
 const row=(name,forge)=>`<tr><td><a href="adloadx?f=${name}">Mirror</a></td><td class='colForge'>Forge ${forge}</td></tr>`;
 const html=row('preview_OptiFine_1.21.1_HD_U_J1_pre1.jar','52.0.1')+row('OptiFine_1.21.1_HD_U_J1.jar','52.0.16')+row('preview_OptiFine_26.2_HD_U_K2_pre5.jar','N/A');
 assert.deepEqual(parseCatalog('forge_optifine',html),{'1.21.1':{optifine:'OptiFine_1.21.1_HD_U_J1.jar',forge:'52.0.16'}});
});

test('Forge + OptiFine installs in its own mods folder, reuses local bytes and preserves conflicts', async t => {
 const {installForgeOptifine}=require('../src/loaders');
 const {profileDirectory}=require('../src/mods');
 const root=await fs.mkdtemp(path.join(os.tmpdir(),'kopeyka-combo-'));t.after(()=>fs.rm(root,{recursive:true,force:true}));
 const c={nickname:'Player',memory:4,version:'1.21.1',loader:'forge_optifine',gameDirectory:root};
 const combo={optifine:'OptiFine_1.21.1_HD_U_J1.jar',forge:'52.0.16'};
 const zip=new AdmZip();zip.addFile('optifine/Installer.class',Buffer.from('fixture'));const bytes=zip.toBuffer();
 await fs.mkdir(path.join(root,'installers'));await fs.writeFile(path.join(root,'installers',combo.optifine),bytes);
 const noNetwork=()=>{throw Error('Unexpected download');};
 const target=await installForgeOptifine(c,combo,()=>{},noNetwork);
 assert.equal(target,path.join(profileDirectory(c),'mods',combo.optifine));assert.deepEqual(await fs.readFile(target),bytes);
 assert.notEqual(profileDirectory(c),profileDirectory({...c,loader:'forge'}));
 await installForgeOptifine(c,combo,()=>{},noNetwork);
 await fs.writeFile(target,'custom');await assert.rejects(installForgeOptifine(c,combo,()=>{},noNetwork),/другой файл/);
 assert.equal(await fs.readFile(target,'utf8'),'custom');
 await assert.rejects(installForgeOptifine(c,{...combo,optifine:'../bad.jar'},()=>{},noNetwork),/Некорректная/);
});
