

workbox.navigationPreload.enable();

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"), {
  
  blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
});

workbox.routing.registerRoute("/", new workbox.strategies.NetworkFirst());
workbox.routing.registerRoute(({event}) => event.request.mode === 'navigate', new workbox.strategies.NetworkOnly(), 'GET');
workbox.routing.registerRoute(/^https:\/\/cdn.contentful.com\//, new workbox.strategies.StaleWhileRevalidate({ plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/http:\/\/images.ctfassets.net\//, new workbox.strategies.StaleWhileRevalidate({ plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
