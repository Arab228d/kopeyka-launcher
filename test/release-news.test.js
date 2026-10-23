const {test}=require('node:test'); const assert=require('node:assert/strict'); const fs=require('node:fs/promises'); const os=require('node:os'); const path=require('node:path'); const {ReleaseNews}=require('../src/release-news');
test('release news survives update, remains unread until acknowledged, and ignores failed installs',async t=>{
 const dir=await fs.mkdtemp(path.join(os.tmpdir(),'kopeyka-news-'));t.after(()=>fs.rm(dir,{recursive:true,force:true}));
 const old=new ReleaseNews(dir,'0.1.0-beta','Old notes');await old.load();assert.equal(old.current().unread,false);
 await old.prepare({version:'0.1.1-beta',notes:'New shaders\n<script>no execution</script>'});
 const failed=new ReleaseNews(dir,'0.1.0-beta','Old notes');await failed.load();assert.equal(failed.current().unread,false);assert.equal(failed.current().body,'Old notes');
 const updated=new ReleaseNews(dir,'0.1.1-beta','Fallback notes');await updated.load();assert.equal(updated.current().unread,true);assert.ok(updated.current().body.includes('New shaders'));
 const reopened=new ReleaseNews(dir,'0.1.1-beta','Fallback notes');await reopened.load();assert.equal(reopened.current().unread,true);await reopened.acknowledge();
 const dismissed=new ReleaseNews(dir,'0.1.1-beta','Fallback notes');await dismissed.load();assert.equal(dismissed.current().unread,false);
 const manual=new ReleaseNews(dir,'0.1.2-beta','Manual update notes');await manual.load();assert.equal(manual.current().unread,true);assert.equal(manual.current().body,'Manual update notes');
});

test('release news recovers a damaged state from its backup and tolerates invalid shapes', async t => {
 const dir=await fs.mkdtemp(path.join(os.tmpdir(),'kopeyka-news-recovery-'));t.after(()=>fs.rm(dir,{recursive:true,force:true}));
 const file=path.join(dir,'release-news.json');
 await fs.writeFile(file, '{broken');
 await fs.writeFile(file+'.bak', JSON.stringify({seen:'0.1.0-beta',pending:{version:'0.1.1-beta',body:'Recovered notes'}}));
 const recovered=new ReleaseNews(dir,'0.1.1-beta','Fallback',true);await recovered.load();
 assert.deepEqual(recovered.current(),{version:'0.1.1-beta',body:'Recovered notes',unread:true});
 for (const value of [null,[],{seen:17}]) {
  await fs.writeFile(file,JSON.stringify(value));await fs.writeFile(file+'.bak','broken');
  const news=new ReleaseNews(dir,'0.1.1-beta','Fallback',true);await news.load();
  assert.equal(news.current().body,'Fallback');assert.equal(news.current().unread,true);
 }
});
