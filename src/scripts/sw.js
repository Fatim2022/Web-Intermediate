import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute, NavigationRoute } from 'workbox-routing';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { NetworkFirst, CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';

// BASE_URL API kamu (tidak perlu dari config karena ini sw mandiri)
const BASE_URL = 'https://story-api.dicoding.dev/v1';

// ✅ Precache file statis (dari __WB_MANIFEST yang diinject Webpack Workbox)
precacheAndRoute(self.__WB_MANIFEST);

// ✅ Routing untuk navigasi SPA fallback ke index.html
// Hanya aktifkan di production untuk menghindari konflik dengan hot reload
if (process.env.NODE_ENV === 'production') {
  const handler = createHandlerBoundToURL('/index.html');
  const navigationRoute = new NavigationRoute(handler, {
    // Exclude hot reload endpoints
    denylist: [/^\/_/, /\/hot-update/],
  });
  registerRoute(navigationRoute);
}

// ✅ Cache Google Fonts
registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com',
  new CacheFirst({
    cacheName: 'google-fonts',
  })
);

// ✅ Cache Font Awesome CDN
registerRoute(
  ({ url }) => url.origin === 'https://cdnjs.cloudflare.com' || url.origin.includes('fontawesome'),
  new CacheFirst({
    cacheName: 'fontawesome',
  })
);

// ✅ Cache avatar generator (ui-avatars)
registerRoute(
  ({ url }) => url.origin === 'https://ui-avatars.com',
  new CacheFirst({
    cacheName: 'avatars-api',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// ✅ Cache untuk permintaan API non-image dari story-api
registerRoute(
  ({ request, url }) => {
    const baseUrl = new URL(BASE_URL);
    return url.origin === baseUrl.origin && request.destination !== 'image';
  },
  new NetworkFirst({
    cacheName: 'story-api',
  })
);

// ✅ Cache untuk gambar dari story-api
registerRoute(
  ({ request, url }) => {
    const baseUrl = new URL(BASE_URL);
    return url.origin === baseUrl.origin && request.destination === 'image';
  },
  new StaleWhileRevalidate({
    cacheName: 'story-api-images',
  })
);

// ✅ Cache tile dari Maptiler
registerRoute(
  ({ url }) => url.origin.includes('maptiler'),
  new CacheFirst({
    cacheName: 'maptiler-api',
  })
);

// ✅ Install event – PERBAIKAN: Kondisional skipWaiting
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  // Hanya skipWaiting di production untuk menghindari loop di development
  if (process.env.NODE_ENV === 'production') {
    self.skipWaiting();
  }
});

// ✅ Activate event – bisa untuk future upgrade cache jika dibutuhkan
self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
  
  // Claim clients hanya di production
  if (process.env.NODE_ENV === 'production') {
    event.waitUntil(self.clients.claim());
  }
});

// ✅ Push notification handler
self.addEventListener('push', (event) => {
  console.log('Service Worker received a push');

  const chainPromise = async () => {
    const data = await event.data.json();
    await self.registration.showNotification(data.title, {
      body: data.options.body,
    });
  };

  event.waitUntil(chainPromise());
});