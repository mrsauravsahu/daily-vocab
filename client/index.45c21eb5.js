import{S as s,i as e,s as t,I as a,e as l,b as c,f as n,d as o,h as r,j as h,J as i,w as f,x as d,a as u,c as v,k as $,n as m,t as p,g,o as E,p as w,u as I,y as b,C as x,K as y,L as D,E as V,m as k,M as C,v as S,F as _}from"./client.36ed7b12.js";import{I as j}from"./icon-button.acd97356.js";function A(s){let e,t;const u=s[1].default,v=a(u,s,s[0],null);return{c(){e=l("div"),v&&v.c(),this.h()},l(s){e=c(s,"DIV",{class:!0});var t=n(e);v&&v.l(t),t.forEach(o),this.h()},h(){r(e,"class","container svelte-qzeduu")},m(s,a){h(s,e,a),v&&v.m(e,null),t=!0},p(s,[e]){v&&v.p&&1&e&&i(v,u,s,s[0],e,null,null)},i(s){t||(f(v,s),t=!0)},o(s){d(v,s),t=!1},d(s){s&&o(e),v&&v.d(s)}}}function N(s,e,t){let{$$slots:a={},$$scope:l}=e;return s.$$set=s=>{"$$scope"in s&&t(0,l=s.$$scope)},[l,a]}class O extends s{constructor(s){super(),e(this,s,N,A,t,{})}}function T(s){let e,t,a,i,f,d;return{c(){e=l("div"),t=l("div"),a=u(),i=l("div"),f=u(),d=l("div"),this.h()},l(s){e=c(s,"DIV",{class:!0});var l=n(e);t=c(l,"DIV",{class:!0}),n(t).forEach(o),a=v(l),i=c(l,"DIV",{class:!0}),n(i).forEach(o),f=v(l),d=c(l,"DIV",{class:!0}),n(d).forEach(o),l.forEach(o),this.h()},h(){r(t,"class","dot svelte-y9x7nt"),r(i,"class","dot svelte-y9x7nt"),r(d,"class","dot svelte-y9x7nt"),r(e,"class","container svelte-y9x7nt")},m(s,l){h(s,e,l),$(e,t),$(e,a),$(e,i),$(e,f),$(e,d)},p:m,i:m,o:m,d(s){s&&o(e)}}}class P extends s{constructor(s){super(),e(this,s,null,T,t,{})}}function R(s,e,t){const a=s.slice();return a[2]=e[t],a}function q(s){let e,t;return{c(){e=l("p"),t=p("uh oh 🙊 looks like you don't have any vocab yet!  No worries, let's add one now! 😃")},l(s){e=c(s,"P",{});var a=n(e);t=g(a,"uh oh 🙊 looks like you don't have any vocab yet!  No worries, let's add one now! 😃"),a.forEach(o)},m(s,a){h(s,e,a),$(e,t)},d(s){s&&o(e)}}}function z(s){let e,t,a,i,f,d,m,E,w,I=s[2].word+"",b=C.DateTime.fromISO(s[2].createdAt).toRelativeCalendar()+"",x=s[2].sentences[0].text+"";return{c(){e=l("div"),t=l("div"),a=p(I),i=u(),f=l("div"),d=p(b),m=u(),E=l("p"),w=p(x),this.h()},l(s){e=c(s,"DIV",{class:!0});var l=n(e);t=c(l,"DIV",{class:!0});var r=n(t);a=g(r,I),r.forEach(o),i=v(l),f=c(l,"DIV",{class:!0});var h=n(f);d=g(h,b),h.forEach(o),l.forEach(o),m=v(s),E=c(s,"P",{class:!0});var u=n(E);w=g(u,x),u.forEach(o),this.h()},h(){r(t,"class","vocab_word svelte-1l3r1c7"),r(f,"class","vocab_createdAt svelte-1l3r1c7"),r(e,"class","vocab_header svelte-1l3r1c7"),r(E,"class","vocab_sentence svelte-1l3r1c7")},m(s,l){h(s,e,l),$(e,t),$(t,a),$(e,i),$(e,f),$(f,d),h(s,m,l),h(s,E,l),$(E,w)},p(s,e){1&e&&I!==(I=s[2].word+"")&&S(a,I),1&e&&b!==(b=C.DateTime.fromISO(s[2].createdAt).toRelativeCalendar()+"")&&S(d,b),1&e&&x!==(x=s[2].sentences[0].text+"")&&S(w,x)},d(s){s&&o(e),s&&o(m),s&&o(E)}}}function B(s){let e,t,a;return t=new O({props:{$$slots:{default:[z]},$$scope:{ctx:s}}}),{c(){e=l("div"),E(t.$$.fragment),this.h()},l(s){e=c(s,"DIV",{class:!0});var a=n(e);w(t.$$.fragment,a),a.forEach(o),this.h()},h(){r(e,"class","vocab svelte-1l3r1c7")},m(s,l){h(s,e,l),I(t,e,null),a=!0},p(s,e){const a={};33&e&&(a.$$scope={dirty:e,ctx:s}),t.$set(a)},i(s){a||(f(t.$$.fragment,s),a=!0)},o(s){d(t.$$.fragment,s),a=!1},d(s){s&&o(e),b(t)}}}function F(s){let e,t,a,i,m,D,k,C,S,_,A,N=0===s[0].length&&q(),O=s[0],T=[];for(let e=0;e<O.length;e+=1)T[e]=B(R(s,O,e));const z=s=>d(T[s],1,1,(()=>{T[s]=null}));return C=new P({}),_=new j({props:{icon:"add"}}),_.$on("click",s[1]),{c(){e=l("section"),t=l("h1"),a=p("welcome back"),i=u(),N&&N.c(),m=u();for(let s=0;s<T.length;s+=1)T[s].c();D=u(),k=l("div"),E(C.$$.fragment),S=u(),E(_.$$.fragment),this.h()},l(s){e=c(s,"SECTION",{});var l=n(e);t=c(l,"H1",{});var r=n(t);a=g(r,"welcome back"),r.forEach(o),i=v(l),N&&N.l(l),m=v(l);for(let s=0;s<T.length;s+=1)T[s].l(l);D=v(l),k=c(l,"DIV",{class:!0});var h=n(k);w(C.$$.fragment,h),S=v(h),w(_.$$.fragment,h),h.forEach(o),l.forEach(o),this.h()},h(){r(k,"class","new-vocab svelte-1l3r1c7")},m(s,l){h(s,e,l),$(e,t),$(t,a),$(e,i),N&&N.m(e,null),$(e,m);for(let s=0;s<T.length;s+=1)T[s].m(e,null);$(e,D),$(e,k),I(C,k,null),$(k,S),I(_,k,null),A=!0},p(s,[t]){if(0===s[0].length?N||(N=q(),N.c(),N.m(e,m)):N&&(N.d(1),N=null),1&t){let a;for(O=s[0],a=0;a<O.length;a+=1){const l=R(s,O,a);T[a]?(T[a].p(l,t),f(T[a],1)):(T[a]=B(l),T[a].c(),f(T[a],1),T[a].m(e,D))}for(V(),a=O.length;a<T.length;a+=1)z(a);x()}},i(s){if(!A){for(let s=0;s<O.length;s+=1)f(T[s]);f(C.$$.fragment,s),f(_.$$.fragment,s),A=!0}},o(s){T=T.filter(Boolean);for(let s=0;s<T.length;s+=1)d(T[s]);d(C.$$.fragment,s),d(_.$$.fragment,s),A=!1},d(s){s&&o(e),N&&N.d(),y(T,s),b(C),b(_)}}}function H(s,e,t){let a;D(s,_,(s=>t(0,a=s)));return[a,()=>k("words/add")]}export default class extends s{constructor(s){super(),e(this,s,H,F,t,{})}}