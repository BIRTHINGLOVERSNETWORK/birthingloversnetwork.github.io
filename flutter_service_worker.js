'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8ea02675c39fc74159b47406106f50e0",
".git/config": "af37ef1eb88c99ec1d65024638d0f70e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3014c5ebef9805633613c27dbc5ce3cf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9c39fab7b8eb39a6a024cd116e18b389",
".git/logs/refs/heads/main": "fcf397771812cc89a4666d6f62301c6f",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/4702d7a24a0b4bcd05b505b8a555627be15fd8": "dfd4469e226ca31a71148e06c2958004",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/35/75cb61cb6f72216acb9f58efdad76f7dfef791": "c54e1b57fd1a0a4163232188f9e38704",
".git/objects/36/6daf33e3d753b4ed41225a5dd1a781246c62c7": "47a4216beafb92e5ed7b7f9d2e953317",
".git/objects/37/7e611ba2a64d358bf9028deb07143e336ec0f0": "2b5249e15c25e1f6713caaa9fdd598a8",
".git/objects/38/ea7806a917f95650d242965b0b50655fb9dcb9": "6aa5846f5c57c5012d3df9106ab01025",
".git/objects/3c/b649c5d939387e49ff9b1e01d45059783841f3": "d1ea6fa99a766212702bfddfe6f07b87",
".git/objects/43/99e758343187b2b2593f8b928be9a0b18dca75": "11dc4df3e335301a87a9ec6767832503",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/d1aab567d2b8fb4fd2a4166de0bd3bc4f33779": "491ead4dc87b0e91a4bed595df7ca78b",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/50/a89856489e6f53278edcc6bf3d915e8f9b3cae": "f5ff2c7efa581da3733732383aa9577a",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/ac3b555e08df28b76b85db8c1274a29fe969e1": "215df2537fe373356e7d7699b85eca8a",
".git/objects/60/ae75f459f05f62b97473b808bcc58e98e1ed13": "546c21cc07f47a9f0810029d1120d2a5",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/6e/dd0bc9e4b313c2654101b0c8fd12252fe63974": "3d6efea94905f4d8688320ee384b1569",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/79/69704ec8b2e1abc91216ebdf6bb902d0502e81": "cfc48aa86730415bcab6ce877751cfc7",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/9786e6779bef5770ac957b8e3832249c0e6db0": "91bb552314e1be281c10d954bbb70b6e",
".git/objects/8e/85ed842ee31076bbaef25926c03004680d7bb4": "e822534fec0d42e3e437b0a6a0403efb",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/93/fe4bf1b8535fe5a8c4b91f795376719fd8604e": "e4468bbc4dda94c4442027cb416f7197",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/9e88717095573372c7721611d55af282772a28": "ff99937d277cd9b27bd711d00b63ef12",
".git/objects/97/d4dad1b269fbc0c873b6bea6d5db1863b98b99": "42367596191dde7a8da18bcbf072cbab",
".git/objects/99/85b4fc3d031aa22c1d2cdcc97938968f09a790": "3274861df654ad213e471070ab501de0",
".git/objects/a1/2b286f76a17aa88fe34857388729c28437e99d": "543344069c59159de9bef3e5d0f470e4",
".git/objects/a3/335e54d52cc7f18c251e2386140a1dd39957bd": "6f243d08de21fab81e554ccfabe57537",
".git/objects/a5/f70d2dcb0d20032c64da6a1f4b47e93c6237a7": "08203534b8d09db490189d2706d7f472",
".git/objects/a7/a704ae0ea2dc3d21b45192e13370adc927d221": "2192d97f096fdc0f6d09c2b7410b4d22",
".git/objects/aa/559604ef0fe714862fa0922b88d8882ddebbd8": "56789ce9af31d32f176241cacc351346",
".git/objects/b2/de000de4120855f9e16b57faee2eaf727985b9": "6f585d9a4099f9535de53fa97fc672a3",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/e186d2220a9423e948c26471436e36e3a39dff": "a7f4880a9bfb4edeab465ea1c701ae4d",
".git/objects/c5/33423d39c99f700885c4d13566bae4c235e526": "f3a336430dbeb0b59cc767baa8cae920",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ce/b5c440ad31bbdf7595752ff73e276da1ae130c": "efa45b066b9a767cbfd79aa65af13d08",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/db/0e69cdf766fc392a7a7a8b2721f27696588e97": "787d275899d977807d8d65dfd97152d7",
".git/objects/df/96144cfd05ff1d88038aeec780c3129aa3c611": "36819587f492eb627a02641e041aaa4b",
".git/objects/e0/8a664c16ce1acdd664672ec8a0a154d45b0e66": "ad820521ab2ad11ba8fcc1b1ddd95876",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/2de52633821e3423e3788a201a4e04c5b0a632": "c55ae3ee2d98dc84b798ae499ceeb6ed",
".git/refs/heads/main": "be04f04fc6ac16ed4423dd3fe0aa2738",
"assets/AssetManifest.bin": "2673608dcff45d253b778c60eed7aa4f",
"assets/AssetManifest.bin.json": "9c269a326029174dd2566edac061ccc6",
"assets/AssetManifest.json": "097ed5c7538640aa601911e468c14c4f",
"assets/assets/images/blnlogo.jpg": "21dc0c995c6e3899d36dc44cd76bc772",
"assets/assets/images/SOM'24.jpg": "e7a2c6a121ea0be5e1eaa1f29fe813cd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "82f589bd6ed89c4476277f4612e8f6c4",
"assets/NOTICES": "0c432d269381d9529168634e3729d3e2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "9ed421974705b4f898d80ed30f860287",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "019217c52761f6bbcb1d027404fea3f5",
"icons/Icon-192.png": "eb23bd9ce8eef7c96ccb57897f6e27b6",
"icons/Icon-512.png": "af0ed477164ed96949d9349431b2fb5c",
"icons/Icon-maskable-192.png": "eb23bd9ce8eef7c96ccb57897f6e27b6",
"icons/Icon-maskable-512.png": "af0ed477164ed96949d9349431b2fb5c",
"index.html": "351fdbc40431359fb03b6c8fc4a19b34",
"/": "351fdbc40431359fb03b6c8fc4a19b34",
"main.dart.js": "5e50df0989a49f3f4dc29e12d2a676a5",
"manifest.json": "28682afd1e4d2153779cb4a6e58f9953",
"version.json": "313fe69d73a37512700699bc498f2fe3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
