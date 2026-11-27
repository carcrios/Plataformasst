// Service worker: red primero para la app (así una actualización llega sin quedar atrapada en caché).
// Las llamadas a Apps Script, Wompi y CDNs externos no se cachean.
const CACHE_NAME = 'academia-sst-co-v16';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './favicon.ico',
  './icons/icon-192.png',
  './css/interaui.css',
  './css/sst.css',
  './js/app.js',
  './js/api.js',
  './js/config.js',
  './js/catalog.js',
  './js/certificate.js',
  './js/dom.js',
  './js/interactive-visuals.js',
  './js/sample-certificate.js',
  './js/permits-guide.js',
  './js/legal.js',
  './js/payments.js',
  './js/store.js',
  './js/student.js',
  './js/telemetry.js',
  './vendor/jspdf.umd.min.js',
  './vendor/qrcode.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request)
      .then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(event.request, copy));
        }
        return res;
      })
      .catch(() => caches.match(event.request).then((hit) => hit || caches.match('./index.html')))
  );
});
