import{S as e,i as s,s as t,L as a,e as o,b as n,f as l,d as c,h as r,j as h,M as i,B as d,C as f,t as m,g as u,k as v,w as $,x as g,z as p,D as b,a as _,c as w,y as E,H as I,N as y,p as D,I as k,m as x,O as V,A,v as C}from"./client.1c56abba.js";import{I as N}from"./icon-button.c01e1dea.js";function O(e){let s,t;const m=e[1].default,u=a(m,e,e[0],null);return{c(){s=o("div"),u&&u.c(),this.h()},l(e){s=n(e,"DIV",{class:!0});var t=l(s);u&&u.l(t),t.forEach(c),this.h()},h(){r(s,"class","container svelte-qzeduu")},m(e,a){h(e,s,a),u&&u.m(s,null),t=!0},p(e,[s]){u&&u.p&&(!t||1&s)&&i(u,m,e,e[0],s,null,null)},i(e){t||(d(u,e),t=!0)},o(e){f(u,e),t=!1},d(e){e&&c(s),u&&u.d(e)}}}function S(e,s,t){let{$$slots:a={},$$scope:o}=s;return e.$$set=e=>{"$$scope"in e&&t(0,o=e.$$scope)},[o,a]}class j extends e{constructor(e){super(),s(this,e,S,O,t,{})}}function T(e,s,t){const a=e.slice();return a[2]=s[t],a}function z(e){let s,t;return{c(){s=o("p"),t=m("uh oh 🙊 looks like you don't have any vocab yet! No worries,\n                let's add one now! 😃"),this.h()},l(e){s=n(e,"P",{class:!0});var a=l(s);t=u(a,"uh oh 🙊 looks like you don't have any vocab yet! No worries,\n                let's add one now! 😃"),a.forEach(c),this.h()},h(){r(s,"class","novocab_message svelte-10midn3")},m(e,a){h(e,s,a),v(s,t)},d(e){e&&c(s)}}}function B(e){let s,t,a,i,d,f,$,g,p,b=e[2].word+"",E=V.DateTime.fromISO(e[2].createdAt).toRelativeCalendar()+"",I=e[2].usage+"";return{c(){s=o("div"),t=o("div"),a=m(b),i=_(),d=o("div"),f=m(E),$=_(),g=o("p"),p=m(I),this.h()},l(e){s=n(e,"DIV",{class:!0});var o=l(s);t=n(o,"DIV",{class:!0});var r=l(t);a=u(r,b),r.forEach(c),i=w(o),d=n(o,"DIV",{class:!0});var h=l(d);f=u(h,E),h.forEach(c),o.forEach(c),$=w(e),g=n(e,"P",{class:!0});var m=l(g);p=u(m,I),m.forEach(c),this.h()},h(){r(t,"class","vocab_word svelte-10midn3"),r(d,"class","vocab_createdAt svelte-10midn3"),r(s,"class","vocab_header svelte-10midn3"),r(g,"class","vocab_sentence svelte-10midn3")},m(e,o){h(e,s,o),v(s,t),v(t,a),v(s,i),v(s,d),v(d,f),h(e,$,o),h(e,g,o),v(g,p)},p(e,s){1&s&&b!==(b=e[2].word+"")&&A(a,b),1&s&&E!==(E=V.DateTime.fromISO(e[2].createdAt).toRelativeCalendar()+"")&&A(f,E),1&s&&I!==(I=e[2].usage+"")&&A(p,I)},d(e){e&&c(s),e&&c($),e&&c(g)}}}function H(e){let s,t,a;return t=new j({props:{$$slots:{default:[B]},$$scope:{ctx:e}}}),{c(){s=o("div"),$(t.$$.fragment),this.h()},l(e){s=n(e,"DIV",{class:!0});var a=l(s);g(t.$$.fragment,a),a.forEach(c),this.h()},h(){r(s,"class","vocab svelte-10midn3")},m(e,o){h(e,s,o),p(t,s,null),a=!0},p(e,s){const a={};33&s&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){a||(d(t.$$.fragment,e),a=!0)},o(e){f(t.$$.fragment,e),a=!1},d(e){e&&c(s),b(t)}}}function P(e){let s,t,a,i,D,x,V,A,C,O,S=0===e[0].length&&z(),j=e[0],B=[];for(let s=0;s<j.length;s+=1)B[s]=H(T(e,j,s));const P=e=>f(B[e],1,1,(()=>{B[e]=null}));return A=new N({props:{icon:"add"}}),A.$on("click",e[1]),{c(){s=o("section"),t=o("h1"),a=m("daily vocab"),i=_(),D=o("div"),S&&S.c(),x=_();for(let e=0;e<B.length;e+=1)B[e].c();V=_(),$(A.$$.fragment),this.h()},l(e){s=n(e,"SECTION",{class:!0});var o=l(s);t=n(o,"H1",{});var r=l(t);a=u(r,"daily vocab"),r.forEach(c),i=w(o),D=n(o,"DIV",{class:!0});var h=l(D);S&&S.l(h),x=w(h);for(let e=0;e<B.length;e+=1)B[e].l(h);V=w(h),g(A.$$.fragment,h),h.forEach(c),o.forEach(c),this.h()},h(){r(D,"class",C=E(0===e[0].length?"home_content__novocab home_content":"home_content")+" svelte-10midn3"),r(s,"class","home")},m(e,o){h(e,s,o),v(s,t),v(t,a),v(s,i),v(s,D),S&&S.m(D,null),v(D,x);for(let e=0;e<B.length;e+=1)B[e].m(D,null);v(D,V),p(A,D,null),O=!0},p(e,[s]){if(0===e[0].length?S||(S=z(),S.c(),S.m(D,x)):S&&(S.d(1),S=null),1&s){let t;for(j=e[0],t=0;t<j.length;t+=1){const a=T(e,j,t);B[t]?(B[t].p(a,s),d(B[t],1)):(B[t]=H(a),B[t].c(),d(B[t],1),B[t].m(D,V))}for(k(),t=j.length;t<B.length;t+=1)P(t);I()}(!O||1&s&&C!==(C=E(0===e[0].length?"home_content__novocab home_content":"home_content")+" svelte-10midn3"))&&r(D,"class",C)},i(e){if(!O){for(let e=0;e<j.length;e+=1)d(B[e]);d(A.$$.fragment,e),O=!0}},o(e){B=B.filter(Boolean);for(let e=0;e<B.length;e+=1)f(B[e]);f(A.$$.fragment,e),O=!1},d(e){e&&c(s),S&&S.d(),y(B,e),b(A)}}}function R(e,s,t){let a;D(e,C,(e=>t(0,a=e)));return[a,()=>x("words/add")]}export default class extends e{constructor(e){super(),s(this,e,R,P,t,{})}}