import{_ as t,a as n,b as o,c as e,i as a,s as r,d as c,S as s,Z as i,f as l,e as u,j as f,k as h,g as v,h as d,m as p,n as m,o as $,p as g,z as b,$ as y,D as w,E as x,a0 as k,t as _,l as E,A as I,B as j,C as D,a1 as R,F as V,L as B,a2 as F,N as T,G as H,M as z,a3 as C,I as O,x as N,a4 as P,Q as S,v as A,w as M}from"./client.6ffff2b3.js";import{I as W}from"./icon-button.6297bed8.js";function G(t){var n=t-1;return n*n*n+1}function L(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.delay,e=void 0===o?0:o,a=n.duration,r=void 0===a?400:a,c=n.easing,s=void 0===c?G:c,i=getComputedStyle(t),l=+i.opacity,u=parseFloat(i.height),f=parseFloat(i.paddingTop),h=parseFloat(i.paddingBottom),v=parseFloat(i.marginTop),d=parseFloat(i.marginBottom),p=parseFloat(i.borderTopWidth),m=parseFloat(i.borderBottomWidth);return{delay:e,duration:r,easing:s,css:function(t){return"overflow: hidden;"+"opacity: ".concat(Math.min(20*t,1)*l,";")+"height: ".concat(t*u,"px;")+"padding-top: ".concat(t*f,"px;")+"padding-bottom: ".concat(t*h,"px;")+"margin-top: ".concat(t*v,"px;")+"margin-bottom: ".concat(t*d,"px;")+"border-top-width: ".concat(t*p,"px;")+"border-bottom-width: ".concat(t*m,"px;")}}}function Q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,r=n(t);if(e){var c=n(this).constructor;a=Reflect.construct(r,arguments,c)}else a=r.apply(this,arguments);return o(this,a)}}var U=function(t){return{}},Z=function(t){return{}},q=function(t){return{}},J=function(t){return{}};function K(t){var n,o,e,a,r,c,s,k=t[2].header,_=i(k,t,t[1],J),E=t[2].content,I=i(E,t,t[1],Z);return{c:function(){n=l("button"),o=l("div"),_&&_.c(),e=u(),a=l("div"),I&&I.c(),this.h()},l:function(t){n=f(t,"BUTTON",{class:!0});var r=h(n);o=f(r,"DIV",{class:!0});var c=h(o);_&&_.l(c),c.forEach(v),e=d(r),a=f(r,"DIV",{class:!0});var s=h(a);I&&I.l(s),s.forEach(v),r.forEach(v),this.h()},h:function(){p(o,"class","header svelte-ovztw3"),p(a,"class","content svelte-ovztw3"),p(n,"class","cmp-accordion svelte-ovztw3")},m:function(i,l){m(i,n,l),$(n,o),_&&_.m(o,null),$(n,e),$(n,a),I&&I.m(a,null),t[3](a),r=!0,c||(s=g(n,"click",t[4]),c=!0)},p:function(t,n){var o=b(n,1)[0];_&&_.p&&(!r||2&o)&&y(_,k,t,t[1],o,q,J),I&&I.p&&(!r||2&o)&&y(I,E,t,t[1],o,U,Z)},i:function(t){r||(w(_,t),w(I,t),r=!0)},o:function(t){x(_,t),x(I,t),r=!1},d:function(o){o&&v(n),_&&_.d(o),I&&I.d(o),t[3](null),c=!1,s()}}}function X(t,n,o){var e=n.$$slots,a=void 0===e?{}:e,r=n.$$scope,c=null;return t.$$set=function(t){"$$scope"in t&&o(1,r=t.$$scope)},[c,r,a,function(t){k[t?"unshift":"push"]((function(){o(0,c=t)}))},function(){c&&(console.log({mac:c.style.maxHeight}),""===c.style.maxHeight||"0px"===c.style.maxHeight?o(0,c.style.maxHeight="".concat(c.scrollHeight,"px"),c):o(0,c.style.maxHeight="0",c))}]}var Y=function(n){t(i,s);var o=Q(i);function i(t){var n;return e(this,i),n=o.call(this),a(c(n),t,X,K,r,{}),n}return i}();function tt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,r=n(t);if(e){var c=n(this).constructor;a=Reflect.construct(r,arguments,c)}else a=r.apply(this,arguments);return o(this,a)}}function nt(t,n,o){var e=t.slice();return e[4]=n[o],e}function ot(t){var n,o;return{c:function(){n=l("p"),o=_("uh oh 🙊 looks like you don't have any vocab yet! No worries,\n                let's add one now! 😃"),this.h()},l:function(t){n=f(t,"P",{class:!0});var e=h(n);o=E(e,"uh oh 🙊 looks like you don't have any vocab yet! No worries,\n                let's add one now! 😃"),e.forEach(v),this.h()},h:function(){p(n,"class","novocab_message svelte-1rbik6j")},m:function(t,e){m(t,n,e),$(n,o)},d:function(t){t&&v(n)}}}function et(t){var n,o,e,a,r,c,s,i,g,b,y=t[4].word+"",w=P.DateTime.fromISO(t[4].createdAt).toRelativeCalendar()+"",x=t[4].usage+"";return{c:function(){n=l("div"),o=l("div"),e=l("div"),a=_(y),r=u(),c=l("div"),s=_(w),i=u(),g=l("p"),b=_(x),this.h()},l:function(t){n=f(t,"DIV",{slot:!0,class:!0});var l=h(n);o=f(l,"DIV",{class:!0});var u=h(o);e=f(u,"DIV",{class:!0});var p=h(e);a=E(p,y),p.forEach(v),r=d(u),c=f(u,"DIV",{class:!0});var m=h(c);s=E(m,w),m.forEach(v),u.forEach(v),i=d(l),g=f(l,"P",{class:!0});var $=h(g);b=E($,x),$.forEach(v),l.forEach(v),this.h()},h:function(){p(e,"class","vocab_word svelte-1rbik6j"),p(c,"class","vocab_createdAt svelte-1rbik6j"),p(o,"class","vocab_title svelte-1rbik6j"),p(g,"class","vocab_sentence svelte-1rbik6j"),p(n,"slot","header"),p(n,"class","vocab_header svelte-1rbik6j")},m:function(t,l){m(t,n,l),$(n,o),$(o,e),$(e,a),$(o,r),$(o,c),$(c,s),$(n,i),$(n,g),$(g,b)},p:function(t,n){1&n&&y!==(y=t[4].word+"")&&S(a,y),1&n&&w!==(w=P.DateTime.fromISO(t[4].createdAt).toRelativeCalendar()+"")&&S(s,w),1&n&&x!==(x=t[4].usage+"")&&S(b,x)},d:function(t){t&&v(n)}}}function at(t){var n,o,e,a,r,c,s,i,g,b=t[4].notes+"";return(c=new W({props:{icon:"edit",size:"small"}})).$on("click",(function(){return t[1](t[4])})),(i=new W({props:{icon:"delete",size:"small",textColor:"white"}})).$on("click",(function(){return t[2](t[4])})),{c:function(){n=l("div"),o=l("p"),e=_(b),a=u(),r=l("div"),I(c.$$.fragment),s=u(),I(i.$$.fragment),this.h()},l:function(t){n=f(t,"DIV",{slot:!0,class:!0});var l=h(n);o=f(l,"P",{});var u=h(o);e=E(u,b),u.forEach(v),a=d(l),r=f(l,"DIV",{class:!0});var p=h(r);j(c.$$.fragment,p),s=d(p),j(i.$$.fragment,p),p.forEach(v),l.forEach(v),this.h()},h:function(){p(r,"class","vocab_actions svelte-1rbik6j"),p(n,"slot","content"),p(n,"class","vocab_sentence svelte-1rbik6j")},m:function(t,l){m(t,n,l),$(n,o),$(o,e),$(n,a),$(n,r),D(c,r,null),$(r,s),D(i,r,null),g=!0},p:function(n,o){t=n,(!g||1&o)&&b!==(b=t[4].notes+"")&&S(e,b)},i:function(t){g||(w(c.$$.fragment,t),w(i.$$.fragment,t),g=!0)},o:function(t){x(c.$$.fragment,t),x(i.$$.fragment,t),g=!1},d:function(t){t&&v(n),V(c),V(i)}}}function rt(t,n){var o,e,a,r;return e=new Y({props:{$$slots:{content:[at],header:[et]},$$scope:{ctx:n}}}),{key:t,first:null,c:function(){o=l("div"),I(e.$$.fragment),this.h()},l:function(t){o=f(t,"DIV",{class:!0});var n=h(o);j(e.$$.fragment,n),n.forEach(v),this.h()},h:function(){p(o,"class","vocab svelte-1rbik6j"),this.first=o},m:function(t,n){m(t,o,n),D(e,o,null),r=!0},p:function(t,o){n=t;var a={};129&o&&(a.$$scope={dirty:o,ctx:n}),e.$set(a)},i:function(t){r||(w(e.$$.fragment,t),a&&a.end(1),r=!0)},o:function(t){x(e.$$.fragment,t),t&&(a=R(o,L,{})),r=!1},d:function(t){t&&v(o),V(e),t&&a&&a.end()}}}function ct(t){for(var n,o,e,a,r,c,s,i,g,y,k=[],R=new Map,H=0===t[0].length&&ot(),O=t[0],N=function(t){return t[4].id},P=0;P<O.length;P+=1){var S=nt(t,O,P),A=N(S);R.set(A,k[P]=rt(A,S))}return(i=new W({props:{icon:"add"}})).$on("click",t[3]),{c:function(){n=l("section"),o=l("h1"),e=_("daily vocab"),a=u(),r=l("div"),H&&H.c(),c=u();for(var t=0;t<k.length;t+=1)k[t].c();s=u(),I(i.$$.fragment),this.h()},l:function(t){n=f(t,"SECTION",{class:!0});var l=h(n);o=f(l,"H1",{});var u=h(o);e=E(u,"daily vocab"),u.forEach(v),a=d(l),r=f(l,"DIV",{class:!0});var p=h(r);H&&H.l(p),c=d(p);for(var m=0;m<k.length;m+=1)k[m].l(p);s=d(p),j(i.$$.fragment,p),p.forEach(v),l.forEach(v),this.h()},h:function(){p(r,"class",g=B(0===t[0].length?"home_content__novocab home_content":"home_content")+" svelte-1rbik6j"),p(n,"class","home")},m:function(t,l){m(t,n,l),$(n,o),$(o,e),$(n,a),$(n,r),H&&H.m(r,null),$(r,c);for(var u=0;u<k.length;u+=1)k[u].m(r,null);$(r,s),D(i,r,null),y=!0},p:function(t,n){var o=b(n,1)[0];0===t[0].length?H||((H=ot()).c(),H.m(r,c)):H&&(H.d(1),H=null),1&o&&(O=t[0],z(),k=F(k,o,N,1,t,O,R,r,C,rt,s,nt),T()),(!y||1&o&&g!==(g=B(0===t[0].length?"home_content__novocab home_content":"home_content")+" svelte-1rbik6j"))&&p(r,"class",g)},i:function(t){if(!y){for(var n=0;n<O.length;n+=1)w(k[n]);w(i.$$.fragment,t),y=!0}},o:function(t){for(var n=0;n<k.length;n+=1)x(k[n]);x(i.$$.fragment,t),y=!1},d:function(t){t&&v(n),H&&H.d();for(var o=0;o<k.length;o+=1)k[o].d();V(i)}}}function st(t,n,o){var e;H(t,O,(function(t){return o(0,e=t)}));return[e,function(){var t=A(M.mark((function t(n){return M.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N("words/add?id=".concat(n.id));case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),function(t){return O.deleteVocab(t.id)},function(){return N("words/add")}]}var it=function(n){t(i,s);var o=tt(i);function i(t){var n;return e(this,i),n=o.call(this),a(c(n),t,st,ct,r,{}),n}return i}();export default it;
