import{S as s,i as c,s as a,e as i,b as n,f as t,d as o,h as e,y as r,j as l,k as u,l as f,n as h,K as $}from"./client.1c56abba.js";function v(s){let c,a,$,v,b,g,m;return{c(){c=i("button"),a=i("img"),this.h()},l(s){c=n(s,"BUTTON",{class:!0});var i=t(c);a=n(i,"IMG",{src:!0,class:!0,alt:!0}),i.forEach(o),this.h()},h(){a.src!==($=`icons/${s[0]}.svg`)&&e(a,"src",$),e(a,"class",v=r(`icon ${s[1]}`)+" svelte-1uwu1cf"),e(a,"alt",b=`${s[0]} icon`),e(c,"class","icon-button container svelte-1uwu1cf")},m(i,n){l(i,c,n),u(c,a),g||(m=f(c,"click",s[2]),g=!0)},p(s,[c]){1&c&&a.src!==($=`icons/${s[0]}.svg`)&&e(a,"src",$),2&c&&v!==(v=r(`icon ${s[1]}`)+" svelte-1uwu1cf")&&e(a,"class",v),1&c&&b!==(b=`${s[0]} icon`)&&e(a,"alt",b)},i:h,o:h,d(s){s&&o(c),g=!1,m()}}}function b(s,c,a){let{icon:i}=c,{size:n="regular"}=c;return s.$$set=s=>{"icon"in s&&a(0,i=s.icon),"size"in s&&a(1,n=s.size)},[i,n,function(c){$(s,c)}]}class g extends s{constructor(s){super(),c(this,s,b,v,a,{icon:0,size:1})}}export{g as I};