/**
 * Service Worker для «Как приручить дракона: Викторина»
 * Кэширует все ресурсы для офлайн-доступа
 */

const CACHE_NAME = 'dragon-quiz-v4';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './base.css',
  './style.css',
  './questions.js',
  './app.js',
  './manifest.json',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/title-bg.jpg',
  './assets/hiccup.jpg',
  './assets/toothless.jpg',
  './assets/fishlegs.jpg',
  './assets/camicazi.jpg',
  './assets/stoick.jpg',
  './assets/snotlout.jpg',
  './assets/berk.jpg',
  './assets/fireworm.jpg',
  './assets/stormfly.jpg',
  './assets/gobber.jpg'
];

// Install — precache all assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// Activate — clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch — network-first for API, cache-first for assets
self.addEventListener('fetch', (event) => {
  // Skip non-same-origin requests and Firebase API calls
  if (!event.request.url.startsWith(self.location.origin) ||
      event.request.url.includes('firebaseio.com') ||
      event.request.url.includes('firebasedatabase.app')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      }
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200) {
          return response;
        }
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
