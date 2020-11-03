var CACHE_NAME = 'CURSO_PY';
var urlsToCache = [
    'index.html',
    'js/videoapp.js',
    'css/clasesyestilos.css',
    'm/css/materialize.min.css',
    'm/js/materialize.min.js',
    'images/python_cover.gif',
    'icons/videocurso-64.png',
    'icons/videocurso-96.png',
    'icons/videocurso-120.png',
    'icons/videocurso-144.png',
    'icons/videocurso-152.png',
    'icons/videocurso-167.png',
    'icons/videocurso-180.png',
    'icons/videocurso-192.png',
    'icons/videocurso-512.png'
];

self.addEventListener('install', e => {
e.waitUntil(
    caches.open(CACHE_NAME).then(
    function(CACHE_NAME) {
        CACHE_NAME.addAll(urlsToCache);
        return CACHE_NAME.addAll(urlsToCache);
    })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
    caches.open(CACHE_NAME)
    .then(cache => cache.match(event.request, {ignoreSearch: true}))
    .then(
        response => {
        return response || fetch(event.request);
        })
    .catch(error => {
        console.log('El servidor no permite actualizar el caché del Service Worker. ' + error);
        })
    );
});