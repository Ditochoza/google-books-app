if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const t=e=>s(e,n),a={module:{uri:n},exports:o,require:t};i[n]=Promise.all(c.map((e=>a[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"asset-manifest.json",revision:"377f8d3c98f3d9d8f244742f0d24ab48"},{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"index.html",revision:"8d06cd0e90e514024a1bd91e8c354621"},{url:"logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"logo256.png",revision:"fc8e21f831c1ec4fe6cf758394f63fb1"},{url:"logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"manifest.json",revision:"689613b94210eb987f1ca47e1aa18c84"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"static/css/main.4a4ed29a.css",revision:"920a5081d87ee71e06e552058a082c7f"},{url:"static/js/787.04b604fc.chunk.js",revision:"1650522429f5b49bbb25c21a04129711"},{url:"static/js/main.85198275.js",revision:"012e587408f0759ecf9e2578445e392a"},{url:"static/js/main.85198275.js.LICENSE.txt",revision:"b114cc85da504a772f040e3f40f8e46a"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
