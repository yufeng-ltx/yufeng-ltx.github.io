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
    "revision": "b2a72290fc69d9676c9ced91280b33a1"
  },
  {
    "url": "archives/index.html",
    "revision": "8fc985136c2f0fd5bff5fb272a7a4545"
  },
  {
    "url": "assets/css/0.styles.ad8a79a6.css",
    "revision": "77f982425c2d52e12d4bfa501117e84b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.541b04c0.js",
    "revision": "3029d3fcdddd0a53f8e6a8461b9c8851"
  },
  {
    "url": "assets/js/11.f046b2ce.js",
    "revision": "4207df35bfa58091328935b5de9b084d"
  },
  {
    "url": "assets/js/12.9f6f72e7.js",
    "revision": "9ebb30f4bf2a6144e9fcec09801c7124"
  },
  {
    "url": "assets/js/13.19ddc3ae.js",
    "revision": "3a5a71ca5edd2261a5bb99dbfbe4527c"
  },
  {
    "url": "assets/js/14.4d4a37aa.js",
    "revision": "b990bad3044ca6a1e2298a5a5ba3690d"
  },
  {
    "url": "assets/js/15.d06fdeea.js",
    "revision": "a4f198169de155c7a60272385ed7e662"
  },
  {
    "url": "assets/js/2.9c282f9a.js",
    "revision": "97433e8d12fab1072be6bbe7cefab260"
  },
  {
    "url": "assets/js/3.32cba5cd.js",
    "revision": "7beea7ab9bc3c25730084bfafcead07c"
  },
  {
    "url": "assets/js/4.67cb4dc6.js",
    "revision": "d46c2746db234936db80ddeb8af7c3c8"
  },
  {
    "url": "assets/js/5.891e12fc.js",
    "revision": "88d72af04ea187626590644e2e982021"
  },
  {
    "url": "assets/js/6.0d9e5e50.js",
    "revision": "d3cf380c53f622d0230db8fa8533585e"
  },
  {
    "url": "assets/js/7.4bbb118b.js",
    "revision": "a07bd93b7625b78a61cb353a907f53bc"
  },
  {
    "url": "assets/js/8.a04400b5.js",
    "revision": "382863355f33fc46b4d408f2ac163058"
  },
  {
    "url": "assets/js/9.ac5527a0.js",
    "revision": "41dc115730bd76ccfb998732913b43b9"
  },
  {
    "url": "assets/js/app.398f7d92.js",
    "revision": "32895374a0d7b86bf3ef450120ff7842"
  },
  {
    "url": "categories/index.html",
    "revision": "51c691453103c25cf2f1fc7d5c2e5ae0"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "31574f7a5b108287eb03dd2f00d63acf"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "f84c20e7088a0dc7649ce5e51802d318"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "7637faa2be24419a3740f998f0fe8c8e"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "05b2fba6fad02cd618723c9a5d8565f3"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "eb5f2a3f80f908049e22e7e3886aee86"
  },
  {
    "url": "images/avatars.png",
    "revision": "a65df147f1a7e7dfa59def30e4248bd8"
  },
  {
    "url": "images/home_banner.jpg",
    "revision": "3a6950e2c52acf4b1d81dc9d82473187"
  },
  {
    "url": "index.html",
    "revision": "5238bd80dd3b4c2828b80db780e16f70"
  },
  {
    "url": "pages/2017-02-10-ubuntu-安装nginx+php7+mysql/index.html",
    "revision": "ffe0eef79d46eab26515f9a9df41aa52"
  },
  {
    "url": "pages/2017-05-23-css中的BFC详解/index.html",
    "revision": "934b0705b690d3a2e16be554f705fd16"
  },
  {
    "url": "pages/2018-05-22-如何发布一个npm包/index.html",
    "revision": "12583445f3c26bdb8f5288281853c0c3"
  },
  {
    "url": "pages/2018-06-08-css面试题汇总/index.html",
    "revision": "90037b308bd67b183b53de92200bbe24"
  },
  {
    "url": "pages/2019-06-08-web前端知识结构整理/index.html",
    "revision": "7b0488de7a2c4acf8ce517366c06a8e2"
  },
  {
    "url": "pages/2020-05-22-linux上安装nginx及配置/index.html",
    "revision": "19810e008328adae9e3780b429fe962e"
  },
  {
    "url": "tags/index.html",
    "revision": "8a4a4432c854f6b4076781b81bc8fea3"
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
