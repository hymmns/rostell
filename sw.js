const cachedRostell = 'rostell-cache';
const assetsToChache = [
  '/rostell/',
  '/rostell/app.html',
  '/rostell/app.js',
  'rostell/icon/favicon-32x32.png',
  '/rostell/manifest.webmanifest',
  '/rostell/icon/icon.png',
  '/rostell/style.css',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cachedRostell).then((cache) => {
      cache.addAll(assetsToChache);
    })
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
