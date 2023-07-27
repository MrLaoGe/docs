/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a593c6810976cec887ec8b29651bd7ee"
  },
  {
    "url": "about.html",
    "revision": "bbaa1de395b01de15d72d84dd5a893dd"
  },
  {
    "url": "about1.html",
    "revision": "5db3faf02c8b6ba5c67b1d70a1449a54"
  },
  {
    "url": "assets/css/0.styles.354d41f8.css",
    "revision": "cfcd115dce17f84d46cd39dff32cbe07"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "f0deb678238da7525f9cd90044727d23"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5fe39a33.js",
    "revision": "de86a862d345e71ab6608382af7093f8"
  },
  {
    "url": "assets/js/11.4140a4b4.js",
    "revision": "be81a8fcca0273648f4f0ccbe8f38d97"
  },
  {
    "url": "assets/js/12.9085eb6d.js",
    "revision": "dd59e27e42047ef7caa547f64fe846d5"
  },
  {
    "url": "assets/js/13.124445d6.js",
    "revision": "ea08480528d0c38ab83865b47f983211"
  },
  {
    "url": "assets/js/14.089bac9d.js",
    "revision": "3e8d24d354bab09b2caf0a8168667c45"
  },
  {
    "url": "assets/js/15.2a6fef62.js",
    "revision": "0aa2cd79b8fa227e9a7f5e3c5efd4859"
  },
  {
    "url": "assets/js/16.43da24ce.js",
    "revision": "04ff29b04c9a8af6ffdc1ea95ec2bff1"
  },
  {
    "url": "assets/js/17.cc7c60d3.js",
    "revision": "30963291011b31019000ce4b26689ad2"
  },
  {
    "url": "assets/js/18.9c602df1.js",
    "revision": "523c044b1e01c8c4bc1d6bce1594ea3d"
  },
  {
    "url": "assets/js/19.c7d7a7c9.js",
    "revision": "b73ca69a85e49c5996d4767f7e11b6f6"
  },
  {
    "url": "assets/js/2.51974051.js",
    "revision": "237cc485caa401407c40e03401365332"
  },
  {
    "url": "assets/js/3.6c95d94d.js",
    "revision": "b71f82075a2969702820084f3e4f0e32"
  },
  {
    "url": "assets/js/4.2c4798e9.js",
    "revision": "a5c23737ad8f8e4abed1a6838a943eed"
  },
  {
    "url": "assets/js/5.ba46e881.js",
    "revision": "4dd3742838b4c6c7dab7c88ba36a30e2"
  },
  {
    "url": "assets/js/6.089cdba8.js",
    "revision": "2c63f68ce9ed0041b0a3c948f8825619"
  },
  {
    "url": "assets/js/7.4b79d864.js",
    "revision": "d0d27cdfd0bc7621017f42f8d0274f19"
  },
  {
    "url": "assets/js/8.cfc65479.js",
    "revision": "df2ac09e6c6a9389263b230f86436fa1"
  },
  {
    "url": "assets/js/9.b8407a1d.js",
    "revision": "9193ccbd517a2f874e5e6fe86d92238f"
  },
  {
    "url": "assets/js/app.2f4de2e9.js",
    "revision": "76b86d854cbe2493c9552645b730f997"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "360128a56e1f9fdd1e89d4082db10c27"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "a43ce8f118cb32fd59da5631c74307fc"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "20dc459dc7abbf9608a69b55537a4cf5"
  },
  {
    "url": "css/index.html",
    "revision": "00787d9248f5ad2d07f9b3126816cb7a"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "4b93d9d6bba092494380631d9e963826"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "2e8e2ec090727a03806ea1b2ccc7b998"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "5c17ca8e6a08dbb331c2cee360e1ba58"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "3029e729bdd2038f22f2ee4de20c8040"
  },
  {
    "url": "index.html",
    "revision": "5049a9c1407a3321b2addeabfbb4b0eb"
  },
  {
    "url": "javascript/index.html",
    "revision": "0f60e89539468faf7b4caf81643213af"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "3ec8f5cd07d0b9be1eb5e9864a935baa"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "d32c0cafa80116acd7a9ed440a8fff14"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "789559825c76186a6cb4d63de4c9168b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
