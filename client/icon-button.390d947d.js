import{S as s,i as c,s as i,e as n,b as a,f as t,d as e,h as o,r,j as l,k as u,l as f,n as h,H as $}from"./client.e82b233f.js";function v(s){let c,i,$,v,b,g,m;return{c(){c=n("button"),i=n("img"),this.h()},l(s){c=a(s,"BUTTON",{class:!0});var n=t(c);i=a(n,"IMG",{src:!0,class:!0,alt:!0}),n.forEach(e),this.h()},h(){i.src!==($=`icons/${s[0]}.svg`)&&o(i,"src",$),o(i,"class",v=r(`icon ${s[1]}`)+" svelte-1uwu1cf"),o(i,"alt",b=`${s[0]} icon`),o(c,"class","icon-button container svelte-1uwu1cf")},m(n,a){l(n,c,a),u(c,i),g||(m=f(c,"click",s[2]),g=!0)},p(s,[c]){1&c&&i.src!==($=`icons/${s[0]}.svg`)&&o(i,"src",$),2&c&&v!==(v=r(`icon ${s[1]}`)+" svelte-1uwu1cf")&&o(i,"class",v),1&c&&b!==(b=`${s[0]} icon`)&&o(i,"alt",b)},i:h,o:h,d(s){s&&e(c),g=!1,m()}}}function b(s,c,i){let{icon:n}=c,{size:a="regular"}=c;return s.$$set=s=>{"icon"in s&&i(0,n=s.icon),"size"in s&&i(1,a=s.size)},[n,a,function(c){$(s,c)}]}class g extends s{constructor(s){super(),c(this,s,b,v,i,{icon:0,size:1})}}export{g as I};
