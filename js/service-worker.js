//PWA

const CACHE_NAME = 'readify-cache-v1';
const urlsToCache = [
  // html
  '/Readify_Mahasen_Bandarnayake/',
  '/Readify_Mahasen_Bandarnayake/index.html',
  '/Readify_Mahasen_Bandarnayake/explorer.html',
  '/Readify_Mahasen_Bandarnayake/feedback.html',
  '/Readify_Mahasen_Bandarnayake/flow.html',
  '/Readify_Mahasen_Bandarnayake/progress.html',
  '/Readify_Mahasen_Bandarnayake/recommender.html',

  // css
  '/Readify_Mahasen_Bandarnayake/css/navbar.css',
  '/Readify_Mahasen_Bandarnayake/css/index.css',
  '/Readify_Mahasen_Bandarnayake/css/footer.css',
  '/Readify_Mahasen_Bandarnayake/css/loading.css',
  '/Readify_Mahasen_Bandarnayake/css/explorer.css',
  '/Readify_Mahasen_Bandarnayake/css/feedback.css',
  '/Readify_Mahasen_Bandarnayake/css/flow.css',
  '/Readify_Mahasen_Bandarnayake/css/progress.css',
  '/Readify_Mahasen_Bandarnayake/css/recommender.css',

  // js
  '/Readify_Mahasen_Bandarnayake/js/index.js',
  '/Readify_Mahasen_Bandarnayake/js/explorer.js',
  '/Readify_Mahasen_Bandarnayake/js/feedback.js',
  '/Readify_Mahasen_Bandarnayake/js/flow.js',
  '/Readify_Mahasen_Bandarnayake/js/loading.js',
  '/Readify_Mahasen_Bandarnayake/js/recommender.js',
  '/Readify_Mahasen_Bandarnayake/js/reuse.js',
  '/Readify_Mahasen_Bandarnayake/js/tracker.js',

  // Favicon & manifest
  '/Readify_Mahasen_Bandarnayake/assets/images/favicon/favicon-16x16.png',
  '/Readify_Mahasen_Bandarnayake/assets/images/favicon/favicon-32x32.png',
  '/Readify_Mahasen_Bandarnayake/assets/images/favicon/favicon-96x96.png',
  '/Readify_Mahasen_Bandarnayake/assets/images/favicon/favicon.ico',
  '/Readify_Mahasen_Bandarnayake/assets/images/favicon/favicon.svg',
  '/Readify_Mahasen_Bandarnayake/assets/images/favicon/apple-touch-icon.png',
  '/Readify_Mahasen_Bandarnayake/assets/images/favicon/icon-192.png',
  '/Readify_Mahasen_Bandarnayake/assets/images/favicon/icon-512.png',
  '/Readify_Mahasen_Bandarnayake/assets/images/favicon/site.webmanifest',

  // background images
  '/Readify_Mahasen_Bandarnayake/assets/images/Background/bookexplorer.jpg',
  '/Readify_Mahasen_Bandarnayake/assets/images/Background/bookhome.jpg',
  '/Readify_Mahasen_Bandarnayake/assets/images/Background/feedback.webp',
  '/Readify_Mahasen_Bandarnayake/assets/images/Background/recommender.webp',
  '/Readify_Mahasen_Bandarnayake/assets/images/Background/tracker.webp',

  // Audio 
  '/Readify_Mahasen_Bandarnayake/assets/audio/Magical-Moments-chosiccom.mp3',
  '/Readify_Mahasen_Bandarnayake/assets/audio/Morning-Routine-Lofi-Study-Music.mp3',
  '/Readify_Mahasen_Bandarnayake/assets/audio/RELAX-LOFI-chosiccom.mp3',
];

self.addEventListener('install', event => {
    event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match('/Readify-webapp/index.html').then(response => response || fetch(event.request))
    );
  } else {
    event.respondWith(
      caches.match(event.request).then(response => response || fetch(event.request))
    );
  }
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(cacheNames => {
      return Promise.all(cacheNames.filter(name => name !== CACHE_NAME).map(name => caches.delete(name)));
    })
  );
});
