const cacheName = 'collection-v1';
const assets = [
'./',
'./index.html',
'./style.css',
'./script.js',
'./manifest.json'
];

self.addEventListener('install', event => {
event.waitUntil(
caches.open(cacheName).then(cache => {
return cache.addAll(assets);
})
);
});

self.addEventListener('activate', event => {
event.waitUntil(
caches.keys().then(keys => {
return Promise.all(keys
.filter(key => key !== cacheName)
.map(key => caches.delete(key))
);
})
);
});

self.addEventListener('fetch', event => {
if (event.request.url.indexOf('unpkg.com') > -1) {
return fetch(event.request);
}
event.respondWith(
caches.match(event.request).then(response => {
return response || fetch(event.request);
})
);
});
