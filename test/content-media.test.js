const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const crypto = require('node:crypto');
const { rememberContent, enrichContent } = require('../src/content-media');
const { avatar } = require('../src/profile-avatar');
const png = Buffer.from(require('../src/ui/assets/island-textures.json').textures.dirt.split(',')[1], 'base64');

test('shader install metadata restores covers without another lookup and changed archives are identified by hash', async t => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'kopeyka-covers-')); t.after(() => fs.rm(root, { recursive: true, force: true }));
  await fs.mkdir(path.join(root, 'shaderpacks'));
  const file = path.join(root, 'shaderpacks', 'local.zip');
  await fs.writeFile(file, 'original');
  const hash = bytes => crypto.createHash('sha1').update(bytes).digest('hex');
  await rememberContent(root, 'local.zip', 'shader', hash('original'), { title: 'Original Shader', icon_url: 'https://cdn.modrinth.com/icon.png', gallery: [{ url: 'https://cdn.modrinth.com/cover.png', featured: true }] });
  const item = { file: 'local.zip', title: 'local', kind: 'shader' };
  const offline = async () => { throw new Error('No network expected'); };
  const first = await enrichContent(root, item, offline);
  assert.equal(first.gallery[0], 'https://cdn.modrinth.com/cover.png');
  assert.equal((await enrichContent(root, item, offline)).title, 'Original Shader');
  await fs.writeFile(file, 'replacement archive');
  const requests = [];
  const updated = await enrichContent(root, item, async url => {
    requests.push(url);
    if (url.includes('/version_file/')) { assert.ok(url.includes(hash('replacement archive'))); return Response.json({ project_id: 'newShader', files: [{ hashes: { sha1: hash('replacement archive') } }] }); }
    return Response.json({ title: 'Replacement Shader', icon_url: 'https://evil.example/image.png', gallery: [{ url: 'https://cdn.modrinth.com/new.png' }] });
  });
  assert.equal(updated.title, 'Replacement Shader'); assert.equal(updated.icon, null); assert.equal(requests.length, 2);
});

test('nickname avatars share in-flight requests, are cached and reject invalid images and names', async t => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'kopeyka-avatars-')); t.after(() => fs.rm(root, { recursive: true, force: true }));
  let requests = 0;
  const request = async url => { requests++; assert.equal(url, 'https://mc-heads.net/avatar/Player/64'); return new Response(png); };
  const [a, b] = await Promise.all([avatar('Player', root, request), avatar('Player', root, request)]);
  assert.ok(a.startsWith('data:image/png;base64,')); assert.equal(a, b); assert.equal(requests, 1);
  assert.equal(await avatar('Player', root, request), a); assert.equal(requests, 1);
  assert.equal(await avatar('../bad', root, request), null);
  assert.equal(await avatar('OtherPlayer', root, async () => new Response('<html>Error</html>')), null);
});


test('unknown content caches failed lookups by file fingerprint and retries after expiry', async t => {
 const root=await fs.mkdtemp(path.join(os.tmpdir(),'kopeyka-missing-cover-'));t.after(()=>fs.rm(root,{recursive:true,force:true}));
 await fs.mkdir(path.join(root,'shaderpacks'));await fs.writeFile(path.join(root,'shaderpacks','unknown.zip'),'unknown');
 const item={file:'unknown.zip',title:'Unknown',kind:'shader'};
 let requests=0;const offline=async()=>{requests++;throw Error('Offline');};
 await enrichContent(root,item,offline);await enrichContent(root,item,offline);assert.equal(requests,1);
 const cache=JSON.parse(await fs.readFile(path.join(root,'content-media.json'),'utf8'));
 assert.ok(cache['shader/unknown.zip'].retryAt>Date.now());assert.equal(cache['shader/unknown.zip'].size,7);
 const future=Date.now()+600001;t.mock.method(Date,'now',()=>future);
 await enrichContent(root,item,offline);assert.equal(requests,2);
 await fs.writeFile(path.join(root,'shaderpacks','unknown.zip'),'modified');
 await enrichContent(root,item,offline);assert.equal(requests,3);
});
