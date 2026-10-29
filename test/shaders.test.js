const {test}=require('node:test'); const assert=require('node:assert/strict'); const fs=require('node:fs/promises'); const os=require('node:os'); const path=require('node:path'); const crypto=require('node:crypto');
const {searchShaders,installShader,importShaders}=require('../src/shaders');
const bytes=Buffer.from('verified shader archive'); const hash=crypto.createHash('sha1').update(bytes).digest('hex');
const version={project_id:'shaderA',game_versions:['1.21.1'],loaders:['iris','optifine'],version_type:'release',files:[{primary:true,filename:'shader.zip',url:'https://cdn.modrinth.com/shader.zip',hashes:{sha1:hash},size:bytes.length}]};
function request(v=version) { return async url=> url.startsWith('https://cdn.modrinth.com/') ? new Response(bytes) : Response.json(url.includes('/version?')?[v]:{id:'shaderA',project_type:'shader',title:'Shader A'}); }
test('search filters shaders by game version, paginates and drops unsafe media',async()=>{ const result=await searchShaders({version:'1.21.1'},'water',18,async url=>{const u=new URL(url);assert.equal(u.searchParams.get('offset'),'18');assert.deepEqual(JSON.parse(u.searchParams.get('facets')),[['project_type:shader'],['versions:1.21.1']]);return Response.json({total_hits:30,hits:[{project_id:'shaderA',title:'A',icon_url:'https://evil.example/a.png',gallery:['https://cdn.modrinth.com/a.png']}]});});assert.equal(result.total,30);assert.equal(result.hits[0].icon,null);assert.equal(result.hits[0].gallery.length,1);});
test('installs verified shader in selected profile and protects existing archives',async t=>{const root=await fs.mkdtemp(path.join(os.tmpdir(),'kopeyka-shader-'));t.after(()=>fs.rm(root,{recursive:true,force:true}));const config={nickname:'Player',version:'1.21.1',loader:'fabric',memory:4,gameDirectory:root};await installShader(config,'shaderA',()=>{},request());const destination=path.join(root,'profiles','1.21.1-fabric','shaderpacks','shader.zip');assert.deepEqual(await fs.readFile(destination),bytes);await installShader(config,'shaderA',()=>{},request());await fs.writeFile(destination,'user file');await assert.rejects(installShader(config,'shaderA',()=>{},request()),/уже существует/);assert.equal(await fs.readFile(destination,'utf8'),'user file');await assert.rejects(installShader(config,'shaderA',()=>{},request({...version,game_versions:['1.20.1']})),/Нет шейдера/);await assert.rejects(installShader(config,'shaderA',()=>{},request({...version,files:[{...version.files[0],filename:'../escape.zip'}]})),/Некорректный архив/);});

test('does not transfer already installed or conflicting shader archives', async t => {
 const root=await fs.mkdtemp(path.join(os.tmpdir(),'kopeyka-shader-reuse-'));t.after(()=>fs.rm(root,{recursive:true,force:true}));
 const config={nickname:'Player',version:'1.21.1',loader:'fabric',memory:4,gameDirectory:root};
 const destination=path.join(root,'profiles','1.21.1-fabric','shaderpacks','shader.zip');
 await fs.mkdir(path.dirname(destination),{recursive:true});await fs.writeFile(destination,bytes);
 const metadata=request();const noTransfer=async url=>{assert.ok(!url.startsWith('https://cdn.modrinth.com/'));return metadata(url);};
 await installShader(config,'shaderA',()=>{},noTransfer);
 await fs.writeFile(destination,'user archive');
 await assert.rejects(installShader(config,'shaderA',()=>{},noTransfer),/уже существует/);
 for(const filename of ['CON.zip','lpt1.extra.zip']) await assert.rejects(installShader(config,'shaderA',()=>{},request({...version,files:[{...version.files[0],filename}]})),/Некорректный архив/);
});

test('imports local shader archives idempotently and rejects conflicts', async t => {
 const root=await fs.mkdtemp(path.join(os.tmpdir(),'kopeyka-shader-import-'));t.after(()=>fs.rm(root,{recursive:true,force:true}));
 const source=await fs.mkdtemp(path.join(os.tmpdir(),'kopeyka-shader-source-'));t.after(()=>fs.rm(source,{recursive:true,force:true}));
 const other=await fs.mkdtemp(path.join(os.tmpdir(),'kopeyka-shader-other-'));t.after(()=>fs.rm(other,{recursive:true,force:true}));
 const config={nickname:'Player',version:'1.21.1',loader:'fabric',memory:4,gameDirectory:root};
 const shader=path.join(source,'Aqua.zip');await fs.writeFile(shader,'shader-one');
 assert.deepEqual(await importShaders(config,[shader]),['Aqua.zip']);
 const destination=path.join(root,'profiles','1.21.1-fabric','shaderpacks','Aqua.zip');
 assert.equal(await fs.readFile(destination,'utf8'),'shader-one');
 assert.deepEqual(await importShaders(config,[shader]),['Aqua.zip']);
 const conflict=path.join(other,'Aqua.zip');await fs.writeFile(conflict,'shader-two');
 await assert.rejects(importShaders(config,[conflict]),/уже существует/);
 assert.equal(await fs.readFile(destination,'utf8'),'shader-one');
 await assert.rejects(importShaders(config,[path.join(source,'notes.txt')]),/не ZIP-архив/);
 await assert.rejects(importShaders(config,[path.join(source,'CON.zip')]),/недопустимое имя/);
 const clash=path.join(other,'Clash.zip');await fs.writeFile(clash,'one');
 const clashTwo=path.join(source,'Clash.zip');await fs.writeFile(clashTwo,'two');
 await assert.rejects(importShaders(config,[clash,clashTwo]),/разные шейдеры/);
});

test('shader pagination sends an integer offset', async () => {
 await searchShaders({version:'1.21.1'},'',18.8,async url=>{assert.equal(new URL(url).searchParams.get('offset'),'18');return Response.json({total_hits:0,hits:[]});});
});
