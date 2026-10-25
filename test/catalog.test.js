const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const crypto = require('node:crypto');
const { searchCatalog, installCatalog } = require('../src/catalog');
test('mod catalog filters by game version, loader and client compatibility', async () => {
  let calls = 0;
  const result = await searchCatalog({ version:'1.21.1', loader:'fabric' }, 'mod', 'light', 18, async url => {
    calls++;
    const q = new URL(url).searchParams;
    const facets = JSON.parse(q.get('facets'));
    assert.ok(facets.some(f => f.includes('categories:fabric')));
    assert.ok(facets.some(f => f.includes('versions:1.21.1')));
    assert.equal(q.get('offset'), '18');
    return Response.json({ total_hits: 1, hits:[{ project_id:'a',title:'A',icon_url:'https://evil.example/a.png',gallery:[] }] });
  });
  assert.equal(result.hits[0].icon, null);
  const empty = await searchCatalog({ version:'1.21.1',loader:'vanilla' },'mod','',0,()=>{throw new Error('No network expected');});
  assert.equal(empty.hits.length,0); assert.ok(empty.message.includes('Fabric')); assert.equal(calls,1);
});
test('resource pack installation validates bytes, preserves conflicts and saves cover metadata', async t => {
  const root=await fs.mkdtemp(path.join(os.tmpdir(),'kopeyka-resources-'));t.after(()=>fs.rm(root,{recursive:true,force:true}));
  const c={nickname:'Player',memory:4,version:'1.21.1',loader:'vanilla',gameDirectory:root};
  const bytes=Buffer.from('resource fixture'),sha1=crypto.createHash('sha1').update(bytes).digest('hex');
  let downloads=0;
  const request=async url=>{
    if(url.startsWith('https://cdn.modrinth.com/')){downloads++;return new Response(bytes);}
    if(url.includes('/version?'))return Response.json([{project_id:'texture',game_versions:['1.21.1'],version_type:'release',files:[{filename:'textures.zip',url:'https://cdn.modrinth.com/textures.zip',size:bytes.length,hashes:{sha1}}]}]);
    return Response.json({id:'texture',project_type:'resourcepack',title:'Textures',icon_url:'https://cdn.modrinth.com/icon.png'});
  };
  await installCatalog(c,'resourcepack','texture',()=>{},request);
  assert.deepEqual(await fs.readFile(path.join(root,'resourcepacks','textures.zip')),bytes);
  const media=JSON.parse(await fs.readFile(path.join(root,'content-media.json'),'utf8'));
  assert.equal(media['resourcepack/textures.zip'].title,'Textures');
  await installCatalog(c,'resourcepack','texture',()=>{},request);assert.equal(downloads,1);
  await fs.writeFile(path.join(root,'resourcepacks','textures.zip'),'own file');
  await assert.rejects(installCatalog(c,'resourcepack','texture',()=>{},request),/уже существует/);
  assert.equal(downloads,1);
  await assert.rejects(installCatalog(c,'mod','texture',()=>{},request),/другому типу/);
});


test('Forge + OptiFine uses Forge compatibility for the mod catalog', async () => {
 await searchCatalog({version:'1.21.1',loader:'forge_optifine'},'mod','',0,async url=>{
  const facets=JSON.parse(new URL(url).searchParams.get('facets'));
  assert.ok(facets.some(f=>f.includes('categories:forge')));
  assert.ok(!facets.some(f=>f.includes('categories:forge_optifine')));
  return Response.json({total_hits:0,hits:[]});
 });
});
