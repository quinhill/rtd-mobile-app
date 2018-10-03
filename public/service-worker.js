// Flag for enabling cache in production
var doCache = true;
var CACHE_NAME = "RTD-mobile";
// Delete old caches

self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
            console.log("Deleting cache: " + key);
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// This triggers when user starts the app
self.addEventListener("install", function (event) {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME)
      .then(function (cache) {
        fetch("manifest.json")
          .then(response => {
            response.json();
          })
          // We will cache initial page and the main.js
          // We could also cache assets like CSS and images
          .then(assets => {
            const urlsToCache = ["/", assets["app.js"]];
            cache.addAll(urlsToCache);
            console.log("cached");
          });
      })
    );
  }
});

// Here we intercept request and serve up the matching files
self.addEventListener("fetch", function (event) {
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
      })
    );
  }
});