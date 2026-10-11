const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs/promises'),os=require('node:os'),path=require('node:path');
const {backgroundCatalog}=require('../src/background-catalog');
test('cached catalog is usable before network finishes and refresh requests share one operation',async t=>{
const root=await fs.mkdtemp(path.join(os.tmpdir(),'catalog-fast-'));t.after(()=>fs.rm(root,{recursive:true,force:true}));const file=path.join(root,'cache.json');await fs.writeFile(file,JSON.stringify({versions:['old']}));let finish,calls=0,notified;const get=backgroundCatalog(file,()=>{calls++;return new Promise(r=>finish=r)},x=>Array.isArray(x.versions),x=>notified=x);
assert.deepEqual(await get(),{versions:['old']});const fresh=get(true);await get();assert.equal(calls,1);finish({versions:['new']});assert.deepEqual(await fresh,{versions:['new']});assert.deepEqual(notified,{versions:['new']});
});
test('invalid cache waits for fresh data',async t=>{const root=await fs.mkdtemp(path.join(os.tmpdir(),'catalog-invalid-'));t.after(()=>fs.rm(root,{recursive:true,force:true}));const file=path.join(root,'cache.json');await fs.writeFile(file,'{}');const get=backgroundCatalog(file,async()=>({versions:['new']}),x=>Array.isArray(x.versions));assert.deepEqual(await get(),{versions:['new']});});
