!function(){"use strict";const e=1620919001613,t=`cache${e}`,n=["/client/client.a4661123.js","/client/inject_styles.5607aec6.js","/client/index.f986a532.js","/client/index.3cf6ab9c.js","/client/index.0d50d7c9.js","/client/index.16035ecb.js","/client/icon-button.ee14d526.js","/client/index.eec98c35.js"].concat(["/service-worker-index.html","/favicon.png","/icons/add.svg","/icons/copy.svg","/icons/delete--color.svg","/icons/logo-192.png","/icons/logo-512.png","/icons/tick--light.svg","/icons/tick.svg","/icons/warn--light.svg","/icons/warn.svg","/manifest.json"]),c=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),s=n.protocol.startsWith("http"),i=n.hostname===self.location.hostname&&n.port!==self.location.port,a=n.host===self.location.host&&c.has(n.pathname),o="only-if-cached"===t.request.cache&&!a;!s||i||o||t.respondWith((async()=>a&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const c=await n.match(t);if(c)return c;throw e}}(t.request))())}))}();
