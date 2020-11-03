// const CACHE = "pwabuilder-offline";

// ServiceWorker.importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js");

// if (workbox) {
//   self.addEventListener("message", (event) => {
//     if (event.data && event.data.type === "SKIP_WAITING") {
//       self.skipWaiting();
//     }
//   });
  
//   workbox.routing.registerRoute(
//     new RegExp('/*'),
//     new workbox.strategies.StaleWhileRevalidate({
//       cacheName: CACHE
//     })
//   );
// }

async ServiceWorker.importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}