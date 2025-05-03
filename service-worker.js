const CACHE_NAME = 'my-site-cache-v3';
const urlsToCache = [
    '/', // index.html
    '/index.html',
    '/assets/css/styles.css',
    
    // Favicons and Manifest
    '/assets/favicon/apple-touch-icon.png',
    '/assets/favicon/favicon-96x96.png',
    '/assets/favicon/favicon.ico',
    '/assets/favicon/favicon.svg',
    '/assets/favicon/site.webmanifest',
    '/assets/favicon/web-app-manifest-192x192.png',
    '/assets/favicon/web-app-manifest-512x512.png',

    // Images
    '/assets/images/awardceremony.jpg',
    '/assets/images/conference.jpg',
    '/assets/images/demostration.jpg',
    '/assets/images/groupphoto2023-2025.jpg',
    '/assets/images/hackathon.jpg',
    '/assets/images/logo.png',
    '/assets/images/profile.png',
    '/assets/images/project1.png',
    '/assets/images/project2.png',
    '/assets/images/project3.jpeg',
    '/assets/images/social-sprite.png',
    '/assets/images/workshop.jpg',

    // JavaScript
    '/assets/js/script.js'
];

// Install event
self.addEventListener('install', event => {
    event.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
        return cache.addAll(urlsToCache);
      })
    );
  });
  
  // Fetch event
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        // Return cached response or fetch from network
        return response || fetch(event.request);
      })
    );
  });
  
  // Activate event
  self.addEventListener('activate', event => {
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(name => {
            if (name !== CACHE_NAME) {
              return caches.delete(name);
            }
          })
        );
      })
    );
  });