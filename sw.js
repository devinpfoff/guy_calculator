const staticCacheName = 'site-static-v1',
  assets = [
    '',
    'index.html',
    'js/register.js',
    'js/app.js',
    'js/config.js',
    'css/main.css',
    'favicons/apple-touch-icon.png',
    'images/chevron-down-solid.svg'
  ];
self.addEventListener('install', e => {
  //console.log('service worker has been installed');
  e.waitUntil(
    caches.open(staticCacheName).then(cache => {
      //console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});
self.addEventListener('activate', e => {
  //console.log('service worker has been activated');
  e.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(
        keys
          .filter(key => key !== staticCacheName)
          .map(key => caches.delete(key))
      );
    })
  );
});
self.addEventListener('fetch', e => {
  //console.log('fetch event', e);
  e.respondWith(
    caches.match(e.request).then(cacheRes => {
      return cacheRes || fetch(e.request);
    })
  );
});
