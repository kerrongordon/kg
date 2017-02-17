/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["app/app.component.css","d41d8cd98f00b204e9800998ecf8427e"],["app/app.component.html","51c7bb5418eae3c792919fab54827579"],["app/app.component.spec.ts","9895ecd7e50a59101b1b145406a8f8ee"],["app/app.component.ts","24ba8cbc7be7900603b090e592fbe865"],["app/app.module.ts","ba73b145a0dcc4c8e369091dddfa0fdb"],["app/components/kg-about/kg-about.component.css","c539185abdca0606bbbb61756b24b082"],["app/components/kg-about/kg-about.component.html","e6605086093001aa51207ca3aff408b9"],["app/components/kg-about/kg-about.component.spec.ts","2ba5f7ac094866e8cfbca124e0c2820f"],["app/components/kg-about/kg-about.component.ts","051179ec7bdc3276dafab3a04d85c5f4"],["app/components/kg-avatar/kg-avatar.component.css","ed9a0bb6081361173563f499e1d98ef4"],["app/components/kg-avatar/kg-avatar.component.html","6a8407f705ad49b2609b3e47d80f240c"],["app/components/kg-avatar/kg-avatar.component.spec.ts","944bc6e420b50a400695cbbbf6d81f30"],["app/components/kg-avatar/kg-avatar.component.ts","6b8d8de63792d4339f4f0e0499e0d530"],["app/components/kg-card/kg-card.component.css","ff9b26d26b335196a3aa71ed79adb918"],["app/components/kg-card/kg-card.component.html","bac2396eeb7a1ef8467f1749e03864d7"],["app/components/kg-card/kg-card.component.spec.ts","63e6f077793541e4c0da3bb595a82c66"],["app/components/kg-card/kg-card.component.ts","f68aee04a33dad667db56843b9307d55"],["app/components/kg-contact/kg-contact.component.css","9094c2988700ada5fa6d111d4af2b877"],["app/components/kg-contact/kg-contact.component.html","ec431af298708028a4d8088b77b5d643"],["app/components/kg-contact/kg-contact.component.spec.ts","b8f5c69477696bb8b043d51cbb39fed0"],["app/components/kg-contact/kg-contact.component.ts","9b1ef9990c381048cc2553fb9a3b2e7d"],["app/components/kg-footer/kg-footer.component.css","5fdf83ecb9425fd481adbd0844678d75"],["app/components/kg-footer/kg-footer.component.html","375ec3efaaf3ed14a8662dae373088bc"],["app/components/kg-footer/kg-footer.component.spec.ts","f56b67cbfa1ae6db588e2adbf0d1a651"],["app/components/kg-footer/kg-footer.component.ts","339f79ae20b9df18fd4b3c72679a14b6"],["app/components/kg-hero/kg-hero.component.css","9f6dfd3d9f5274b3d88c899d46de8021"],["app/components/kg-hero/kg-hero.component.html","00e30453006f8c038bd73b9c4abd0307"],["app/components/kg-hero/kg-hero.component.spec.ts","36dc73ae611da49a2bd919e79af9f219"],["app/components/kg-hero/kg-hero.component.ts","1ac36ac2aa25d74fa48823b383ecc92c"],["app/components/kg-home/kg-home.component.css","3007ee3721a96791245bc78509c5eea8"],["app/components/kg-home/kg-home.component.html","652a3791445f2d95fc2491fad5a78d61"],["app/components/kg-home/kg-home.component.spec.ts","95cab48647f49e7c1ee22fe2e639db57"],["app/components/kg-home/kg-home.component.ts","baf7515fbe2d9bf4577edbaa6dc22213"],["app/components/kg-portfolio/kg-portfolio.component.css","885b9b823512a67c3529e957ba11e03e"],["app/components/kg-portfolio/kg-portfolio.component.html","38a471ad57b244971ada7081866fc442"],["app/components/kg-portfolio/kg-portfolio.component.spec.ts","39d4f91b1d19f23dc79f64ad19e852ab"],["app/components/kg-portfolio/kg-portfolio.component.ts","687a0959c4a1f2e738552bc1a8fff377"],["app/components/kg-skill/kg-skill.component.css","1c8d780333824169f17d0aab24459a96"],["app/components/kg-skill/kg-skill.component.html","f85d1052c53a3ea5edd6f6a8485ade5f"],["app/components/kg-skill/kg-skill.component.spec.ts","7a7edfce59c4da1da09458b3b39be472"],["app/components/kg-skill/kg-skill.component.ts","01c641bc3da3c0594ee2cca7eff0520c"],["app/components/kg-view/kg-view.component.css","fe4a895f47b0f0949036d8ae9e84056b"],["app/components/kg-view/kg-view.component.html","9c11fa476cc36a807c58c1fef4895fde"],["app/components/kg-view/kg-view.component.spec.ts","efae5cf9e85e09a2ea69b6bc59f970a1"],["app/components/kg-view/kg-view.component.ts","1fa96c1744bda9f2f4fb3fce702678d5"],["app/route/route-routing.module.ts","de23c6576f5709839519d246cc097aea"],["app/route/route.component.css","d41d8cd98f00b204e9800998ecf8427e"],["app/route/route.component.html","4cfa35963999d3412daa11a8509daca5"],["app/route/route.component.spec.ts","e006fd3fd99b7523d9e84db25ad8cc16"],["app/route/route.component.ts","fbf54e10cc381d93fde47ace1f31067e"],["app/route/route.module.ts","261f77b7f45077174b863d651c101779"],["app/services/kg-data.service.spec.ts","57af8a0e887ce4effc07ff40072e9ab9"],["app/services/kg-data.service.ts","634de79e7026bb60907d03c625a852e0"],["assets/icons/android-icon-144x144.png","ae8dcc21444c031f0908b8a08d09b98d"],["assets/icons/android-icon-192x192.png","57e4465defa9e3bc2ace1a858cce48b7"],["assets/icons/android-icon-36x36.png","787d514cb5027114b8973f4470a9bb93"],["assets/icons/android-icon-48x48.png","2fbea1dd9e03226471c92e62c4dd3688"],["assets/icons/android-icon-72x72.png","72a9221591532db0640982b80410fedf"],["assets/icons/android-icon-96x96.png","63b76456808f4d882bee3dc775a0d795"],["assets/icons/apple-icon-114x114.png","14ef92b369600a7b4f28dff7fe34952e"],["assets/icons/apple-icon-120x120.png","81b87d62030ca9895df43726688f0f74"],["assets/icons/apple-icon-144x144.png","ae8dcc21444c031f0908b8a08d09b98d"],["assets/icons/apple-icon-152x152.png","a965d9cd3fb1e4e7b6b554586bba2c8b"],["assets/icons/apple-icon-180x180.png","891e60368bfaef77040601e3318ff6a8"],["assets/icons/apple-icon-57x57.png","6d630737de3c46e0704d95006bbf3f18"],["assets/icons/apple-icon-60x60.png","ddf5addd5f8601c26928832b448490ea"],["assets/icons/apple-icon-72x72.png","72a9221591532db0640982b80410fedf"],["assets/icons/apple-icon-76x76.png","266ddb51f556f3c9c53f768926d8c605"],["assets/icons/apple-icon-precomposed.png","ab9edf395fcd835a2ea64e9853925675"],["assets/icons/apple-icon.png","ab9edf395fcd835a2ea64e9853925675"],["assets/icons/favicon-16x16.png","df79cabfaa404d3d807f2ea12ade2685"],["assets/icons/favicon-32x32.png","ba4d3410cd4cfa901fd663ca05eec69c"],["assets/icons/favicon-96x96.png","63b76456808f4d882bee3dc775a0d795"],["assets/icons/ms-icon-144x144.png","ae8dcc21444c031f0908b8a08d09b98d"],["assets/icons/ms-icon-150x150.png","0da7adac847c7fabe8d585a3ccc27a3c"],["assets/icons/ms-icon-310x310.png","bc8987ef32db524a556973b841bcefbc"],["assets/icons/ms-icon-70x70.png","815eee5b1fb4d0f5581dea20828e339f"],["assets/img/Probatus.png~","b6ceca4720ec8f260d55842ba348e926"],["assets/img/hero.jpg","a71bfa949f9f917a5926ef9d1d22fda6"],["assets/img/kerronb.svg","a10f9c10e2258b799106f08dff2d6977"],["browserconfig.xml","653d077300a12f09a69caeea7a8947f8"],["data/description/description.json","f343b30c8c5eac0cd9391c2b11a65770"],["data/portfolios/gsetri/desktop.jpg","cbbce3b34f37a94bb9f0184d2fc0c966"],["data/portfolios/gsetri/gsetri.md","4979119efd2a52a866559649a7241756"],["data/portfolios/gsetri/thumb.jpg","4b6aa16e37a814362a154268d47b912c"],["data/portfolios/portfolios.json","c8b050b49d1c2bf17eca84993f348907"],["data/portfolios/probatus/desktop.jpg","de1d28b185ffb9f0c8dc86975f66a713"],["data/portfolios/probatus/probatus.md","9904ec8023da3a6689fcc890841336f5"],["data/portfolios/probatus/thumb.jpg","a82157477386def6ad331f2423c4cc11"],["data/skills/skills.json","f114d04599eae0acfbcfe7f6d13bb2d3"],["environments/environment.prod.ts","6de221395114600b523995704b7d1caa"],["environments/environment.ts","a8393b7aa331fe98c2da499ea0c09b28"],["favicon.ico","6f7ff0622479e41024f855b2ef223149"],["index.html","0955260bedbe1ebfea0754967e6b0068"],["main.ts","fcc2b1095abe5d70d6db8ef33da37b0f"],["manifest.json","8c1c0930afe82e48266371ec8f256c57"],["polyfills.ts","f599e362ac164d5576ebb9cf78e639c2"],["styles.css","9f45dc14fa7b6f44c5e203a228a4d63c"],["test.ts","d895990bd8ee4afad7088ddfd739848c"],["tsconfig.json","af203de8126b677b5d883393151cfe3c"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







