import{S as s,i as a,s as c,e as t,t as l,a as e,b as o,f as r,g as i,d as n,c as v,h,p as d,j as b,k as p,l as f,n as u,r as g,u as y,v as m,w as E}from"./client.11cf8a97.js";function x(s){let a,c,y,m,E,x,T,w,I,N,O,V,k,S,j,B,D,G,M,P,U;return{c(){a=t("section"),c=t("h1"),y=l("settings"),m=e(),E=t("div"),x=t("p"),T=l("clear all vocabs"),w=e(),I=t("button"),N=t("img"),V=e(),k=t("div"),S=t("p"),j=l("export my vocabs"),B=e(),D=t("button"),G=t("img"),this.h()},l(s){a=o(s,"SECTION",{});var t=r(a);c=o(t,"H1",{});var l=r(c);y=i(l,"settings"),l.forEach(n),m=v(t),E=o(t,"DIV",{class:!0});var e=r(E);x=o(e,"P",{});var h=r(x);T=i(h,"clear all vocabs"),h.forEach(n),w=v(e),I=o(e,"BUTTON",{disabled:!0,class:!0});var d=r(I);N=o(d,"IMG",{src:!0,alt:!0,class:!0}),d.forEach(n),e.forEach(n),V=v(t),k=o(t,"DIV",{class:!0});var b=r(k);S=o(b,"P",{});var p=r(S);j=i(p,"export my vocabs"),p.forEach(n),B=v(b),D=o(b,"BUTTON",{class:!0});var f=r(D);G=o(f,"IMG",{src:!0,alt:!0,class:!0}),f.forEach(n),b.forEach(n),t.forEach(n),this.h()},h(){N.src!==(O="icons/delete--color.svg")&&h(N,"src","icons/delete--color.svg"),h(N,"alt","clear all vocab icon button"),h(N,"class","svelte-1dh77s3"),I.disabled=s[0],h(I,"class","svelte-1dh77s3"),d(I,"empty",s[0]),h(E,"class","setting svelte-1dh77s3"),G.src!==(M="icons/copy.svg")&&h(G,"src","icons/copy.svg"),h(G,"alt","clear all vocab icon button"),h(G,"class","svelte-1dh77s3"),h(D,"class","svelte-1dh77s3"),h(k,"class","setting svelte-1dh77s3")},m(t,l){b(t,a,l),p(a,c),p(c,y),p(a,m),p(a,E),p(E,x),p(x,T),p(E,w),p(E,I),p(I,N),p(a,V),p(a,k),p(k,S),p(S,j),p(k,B),p(k,D),p(D,G),P||(U=[f(I,"click",s[3]),f(D,"click",s[4])],P=!0)},p(s,[a]){1&a&&(I.disabled=s[0]),1&a&&d(I,"empty",s[0])},i:u,o:u,d(s){s&&n(a),P=!1,g(U)}}}function T(s,a,c){let t;y(s,E,(s=>c(5,t=s)));let l=!1;m((async()=>{await E.loadVocab(),0===t.length&&c(0,l=!0)}));const e=async()=>{await E.clearVocabs(),c(0,l=!0)},o=async()=>{try{await navigator.clipboard.writeText(JSON.stringify(t)),alert("copied your vocabs into the clipboard! 😃")}catch(s){alert("unable to export your vocabs 😭")}};return[l,e,o,()=>e(),()=>o()]}export default class extends s{constructor(s){super(),a(this,s,T,x,c,{})}}
