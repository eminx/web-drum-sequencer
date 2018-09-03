var serviceWorkerOption = {
  "assets": [
    "./iconstats-6d849b0c3bf13be1db20.json",
    "./assets/fonts/33a7a7c3caf1424a788ad1a74046845f.woff2",
    "./assets/fonts/86cade2f761700598f5f2c260193cb09.woff",
    "./assets/fonts/8612f086e8406b4b304caa7cac52a0a7.woff2",
    "./assets/fonts/21e11f3e402000cc47311642b081a30a.woff",
    "./assets/fonts/c7262c85fc05c9177075e237c23372fe.woff2",
    "./assets/fonts/bb67ace0f25b28040a393a79d2eacf49.woff",
    "./assets/audio/707-bd.mp3",
    "./assets/audio/707-sd-low.mp3",
    "./assets/audio/707-sd-high.mp3",
    "./assets/audio/707-ch.mp3",
    "./assets/audio/707-oh.mp3",
    "./assets/audio/707-clap.mp3",
    "./assets/audio/707-tamb.mp3",
    "./assets/audio/808-bd-short.mp3",
    "./assets/audio/808-bd-long.mp3",
    "./assets/audio/808-cowbell.mp3",
    "./assets/audio/808-sd.mp3",
    "./assets/audio/808-clap.mp3",
    "./assets/audio/808-ch.mp3",
    "./assets/audio/808-oh.mp3",
    "./assets/audio/808-cym.mp3",
    "./assets/audio/808-clav.mp3",
    "./assets/audio/808-rs.mp3",
    "./assets/audio/808-ht.mp3",
    "./assets/audio/808-mt.mp3",
    "./assets/audio/808-lt.mp3",
    "./assets/audio/acetone-bd.mp3",
    "./assets/audio/acetone-sd-1.mp3",
    "./assets/audio/acetone-sd-2.mp3",
    "./assets/audio/acetone-ch.mp3",
    "./assets/audio/acetone-oh.mp3",
    "./assets/audio/acetone-perc-1.mp3",
    "./assets/audio/acetone-perc-2.mp3",
    "./assets/audio/linn-bd.mp3",
    "./assets/audio/linn-sd.mp3",
    "./assets/audio/linn-ch.mp3",
    "./assets/audio/linn-ph.mp3",
    "./assets/audio/linn-clap.mp3",
    "./assets/audio/linn-tamb.mp3",
    "./assets/audio/linn-cowbell.mp3",
    "./assets/audio/linn-ht.mp3",
    "./assets/audio/linn-mt.mp3",
    "./assets/audio/linn-lt.mp3",
    "./assets/audio/linn-rim.mp3",
    "./assets/audio/hip-hop-bd-1.mp3",
    "./assets/audio/hip-hop-bd-2.mp3",
    "./assets/audio/hip-hop-sd-1.mp3",
    "./assets/audio/hip-hop-sd-2.mp3",
    "./assets/audio/hip-hop-ch-1.mp3",
    "./assets/audio/hip-hop-ch-2.mp3",
    "./assets/audio/hip-hop-oh.mp3",
    "./assets/images/simplegray.png",
    "./assets/images/github.svg",
    "./assets/js/bundle-32dfab2cc963e5fc9dc6.js"
  ]
};
        
        !function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";self.addEventListener("fetch",function(e){e.respondWith(function(e){var t=e.request.clone();return fetch(t).then(function(t){if(!t||200!==t.status||"basic"!==t.type)return t;var n=t.clone();return caches.open("wdsCache").then(function(t){t.put(e.request,n)}),t})}(e).catch(function(){return caches.match(e.request)}))})}]);