const CACHE_NAME = 'v1';
const urlsToCache = [
  '/',
  'index.html',
  'css/foundation.css',
  'css/style.css',
  'css/font.css',
  'css/animate.css',
  'css/icon.css',
  'font/font-awesome/css/font-awesome.min.css',
  'js/jquery.min.js',
  'img/logo.png'
];

// Install the service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch the assets from the cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
