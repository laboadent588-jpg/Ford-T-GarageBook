const CACHE='model-t-garage-v1.1.8';
const FILES=[
 './','./index.html','./styles.css','./app.js','./offline-library.js',
 './manifest.webmanifest','./icon.svg?v=1.1.8','./icon-192.png?v=1.1.8','./icon-512.png?v=1.1.8',
 './model-t-torpedo-ad.png','./documents/ford-manual-1919.txt'
];

self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(
  keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))
 )).then(()=>self.clients.claim()));
});

self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const requestUrl=new URL(event.request.url);
 if(requestUrl.origin!==self.location.origin)return;
 event.respondWith(caches.match(event.request).then(cached=>{
  if(cached)return cached;
  return fetch(event.request).then(response=>{
   if(response.ok)caches.open(CACHE).then(cache=>cache.put(event.request,response.clone()));
   return response;
  }).catch(error=>{
   if(event.request.mode==='navigate')return caches.match('./index.html');
   throw error;
  });
 }));
});
