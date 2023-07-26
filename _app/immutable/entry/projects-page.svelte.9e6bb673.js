import{S as z,i as V,s as G,k as B,q as H,l as j,m as L,r as U,h as w,n as A,E as le,p as S,b as C,C as M,u as W,D as N,e as ae,v as J,d as p,f as q,g,J as Y,L as Q,M as X,N as Z,y as h,z as k,A as v,B as T,a as E,c as D,F as O,P as me}from"../chunks/index.afa1daf7.js";import{H as $e}from"../chunks/Heading.68751fe9.js";import{L as be}from"../chunks/LinkButtons.ca5c3462.js";import{M as ce}from"../chunks/Meta.4ed45604.js";import{S as R}from"../chunks/Section.f2192827.js";function ge(f){let e,n,t=f[0].text+"",r,l;return{c(){e=B("div"),n=B("p"),r=H(t),this.h()},l(a){e=j(a,"DIV",{class:!0});var s=L(e);n=j(s,"P",{class:!0});var o=L(n);r=U(o,t),o.forEach(w),s.forEach(w),this.h()},h(){A(n,"class","svelte-5naw85"),A(e,"class",l=le(f[0].size||"sm")+" svelte-5naw85"),S(e,"background-color",f[0].color)},m(a,s){C(a,e,s),M(e,n),M(n,r)},p(a,[s]){s&1&&t!==(t=a[0].text+"")&&W(r,t),s&1&&l!==(l=le(a[0].size||"sm")+" svelte-5naw85")&&A(e,"class",l),s&1&&S(e,"background-color",a[0].color)},i:N,o:N,d(a){a&&w(e)}}}function de(f,e,n){let{badge:t}=e;return f.$$set=r=>{"badge"in r&&n(0,t=r.badge)},[t]}class pe extends z{constructor(e){super(),V(this,e,de,ge,G,{badge:0})}}function _e(f){let e,n;const t=f[3].default,r=Y(t,f,f[2],null);return{c(){e=B("div"),r&&r.c(),this.h()},l(l){e=j(l,"DIV",{class:!0});var a=L(e);r&&r.l(a),a.forEach(w),this.h()},h(){A(e,"class","svelte-1m7uibp")},m(l,a){C(l,e,a),r&&r.m(e,null),n=!0},p(l,a){r&&r.p&&(!n||a&4)&&Q(r,t,l,l[2],n?Z(t,l[2],a,null):X(l[2]),null)},i(l){n||(g(r,l),n=!0)},o(l){p(r,l),n=!1},d(l){l&&w(e),r&&r.d(l)}}}function we(f){let e,n,t;const r=f[3].default,l=Y(r,f,f[2],null);return{c(){e=B("a"),l&&l.c(),this.h()},l(a){e=j(a,"A",{href:!0,target:!0,class:!0});var s=L(e);l&&l.l(s),s.forEach(w),this.h()},h(){A(e,"href",f[0]),A(e,"target",n=f[1]?"_blank":void 0),A(e,"class","svelte-1m7uibp")},m(a,s){C(a,e,s),l&&l.m(e,null),t=!0},p(a,s){l&&l.p&&(!t||s&4)&&Q(l,r,a,a[2],t?Z(r,a[2],s,null):X(a[2]),null),(!t||s&1)&&A(e,"href",a[0]),(!t||s&2&&n!==(n=a[1]?"_blank":void 0))&&A(e,"target",n)},i(a){t||(g(l,a),t=!0)},o(a){p(l,a),t=!1},d(a){a&&w(e),l&&l.d(a)}}}function he(f){let e,n,t,r;const l=[we,_e],a=[];function s(o,b){return o[0]?0:1}return e=s(f),n=a[e]=l[e](f),{c(){n.c(),t=ae()},l(o){n.l(o),t=ae()},m(o,b){a[e].m(o,b),C(o,t,b),r=!0},p(o,[b]){let d=e;e=s(o),e===d?a[e].p(o,b):(J(),p(a[d],1,1,()=>{a[d]=null}),q(),n=a[e],n?n.p(o,b):(n=a[e]=l[e](o),n.c()),g(n,1),n.m(t.parentNode,t))},i(o){r||(g(n),r=!0)},o(o){p(n),r=!1},d(o){a[e].d(o),o&&w(t)}}}function ke(f,e,n){let{$$slots:t={},$$scope:r}=e,{to:l=void 0}=e,{newTab:a=!1}=e;return f.$$set=s=>{"to"in s&&n(0,l=s.to),"newTab"in s&&n(1,a=s.newTab),"$$scope"in s&&n(2,r=s.$$scope)},[l,a,r,t]}class ve extends z{constructor(e){super(),V(this,e,ke,he,G,{to:0,newTab:1})}}function se(f,e,n){const t=f.slice();return t[13]=e[n],t}function ie(f){let e,n;return{c(){e=B("p"),n=H(f[4]),this.h()},l(t){e=j(t,"P",{class:!0});var r=L(e);n=U(r,f[4]),r.forEach(w),this.h()},h(){A(e,"class","role svelte-1hieaov")},m(t,r){C(t,e,r),M(e,n)},p(t,r){r&16&&W(n,t[4])},d(t){t&&w(e)}}}function fe(f){let e,n;return{c(){e=B("p"),n=H(f[3]),this.h()},l(t){e=j(t,"P",{class:!0});var r=L(e);n=U(r,f[3]),r.forEach(w),this.h()},h(){A(e,"class","desc svelte-1hieaov")},m(t,r){C(t,e,r),M(e,n)},p(t,r){r&8&&W(n,t[3])},d(t){t&&w(e)}}}function oe(f){let e,n,t=f[8],r=[];for(let a=0;a<t.length;a+=1)r[a]=ue(se(f,t,a));const l=a=>p(r[a],1,1,()=>{r[a]=null});return{c(){e=B("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=j(a,"DIV",{class:!0});var s=L(e);for(let o=0;o<r.length;o+=1)r[o].l(s);s.forEach(w),this.h()},h(){A(e,"class","badges svelte-1hieaov")},m(a,s){C(a,e,s);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null);n=!0},p(a,s){if(s&256){t=a[8];let o;for(o=0;o<t.length;o+=1){const b=se(a,t,o);r[o]?(r[o].p(b,s),g(r[o],1)):(r[o]=ue(b),r[o].c(),g(r[o],1),r[o].m(e,null))}for(J(),o=t.length;o<r.length;o+=1)l(o);q()}},i(a){if(!n){for(let s=0;s<t.length;s+=1)g(r[s]);n=!0}},o(a){r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)p(r[s]);n=!1},d(a){a&&w(e),me(r,a)}}}function ue(f){let e,n;return e=new pe({props:{badge:f[13]}}),{c(){h(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p(t,r){const l={};r&256&&(l.badge=t[13]),e.$set(l)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function Te(f){let e,n,t,r,l,a,s,o=f[4]&&ie(f),b=f[3]&&fe(f),d=f[8].length>0&&oe(f);return{c(){e=B("div"),o&&o.c(),n=E(),t=B("p"),r=H(f[2]),l=E(),b&&b.c(),a=E(),d&&d.c(),this.h()},l(i){e=j(i,"DIV",{class:!0});var c=L(e);o&&o.l(c),n=D(c),t=j(c,"P",{class:!0});var u=L(t);r=U(u,f[2]),u.forEach(w),l=D(c),b&&b.l(c),a=D(c),d&&d.l(c),c.forEach(w),this.h()},h(){A(t,"class","title svelte-1hieaov"),A(e,"class","content svelte-1hieaov"),O(e,"dark",f[9]),O(e,"no-link",f[0]===void 0),O(e,"no-bg",!f[5]&&!f[6]),S(e,"background-color",f[5]),S(e,"background-image",f[6]),S(e,"border-color",f[7]),S(e,"cursor",f[0]?"pointer":"not-allowed")},m(i,c){C(i,e,c),o&&o.m(e,null),M(e,n),M(e,t),M(t,r),M(e,l),b&&b.m(e,null),M(e,a),d&&d.m(e,null),s=!0},p(i,c){i[4]?o?o.p(i,c):(o=ie(i),o.c(),o.m(e,n)):o&&(o.d(1),o=null),(!s||c&4)&&W(r,i[2]),i[3]?b?b.p(i,c):(b=fe(i),b.c(),b.m(e,a)):b&&(b.d(1),b=null),i[8].length>0?d?(d.p(i,c),c&256&&g(d,1)):(d=oe(i),d.c(),g(d,1),d.m(e,null)):d&&(J(),p(d,1,1,()=>{d=null}),q()),(!s||c&512)&&O(e,"dark",i[9]),(!s||c&1)&&O(e,"no-link",i[0]===void 0),(!s||c&96)&&O(e,"no-bg",!i[5]&&!i[6]),c&32&&S(e,"background-color",i[5]),c&64&&S(e,"background-image",i[6]),c&128&&S(e,"border-color",i[7]),c&1&&S(e,"cursor",i[0]?"pointer":"not-allowed")},i(i){s||(g(d),s=!0)},o(i){p(d),s=!1},d(i){i&&w(e),o&&o.d(),b&&b.d(),d&&d.d()}}}function Ce(f){let e,n;return e=new ve({props:{to:f[0],newTab:f[1],$$slots:{default:[Te]},$$scope:{ctx:f}}}),{c(){h(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p(t,[r]){const l={};r&1&&(l.to=t[0]),r&2&&(l.newTab=t[1]),r&66557&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function Ie(f,e,n){let{to:t=void 0}=e,{newTab:r=!1}=e,{title:l}=e,{description:a=void 0}=e,{role:s=void 0}=e,{backgroundColor:o=void 0}=e,{backgroundImage:b=void 0}=e,{borderColor:d=void 0}=e,{badges:i=[]}=e,{dark:c=!1}=e,{old:u=!1}=e;u&&i.push({text:"OLD PROJECT",color:"#60a5fab0"});let{deprecated:P=!1}=e;P&&i.push({text:"DEPRECATED",color:"#fb923cb0"});let{date:$=""}=e;return $&&i.push({text:$,color:"#646464a0",size:"md"}),f.$$set=_=>{"to"in _&&n(0,t=_.to),"newTab"in _&&n(1,r=_.newTab),"title"in _&&n(2,l=_.title),"description"in _&&n(3,a=_.description),"role"in _&&n(4,s=_.role),"backgroundColor"in _&&n(5,o=_.backgroundColor),"backgroundImage"in _&&n(6,b=_.backgroundImage),"borderColor"in _&&n(7,d=_.borderColor),"badges"in _&&n(8,i=_.badges),"dark"in _&&n(9,c=_.dark),"old"in _&&n(10,u=_.old),"deprecated"in _&&n(11,P=_.deprecated),"date"in _&&n(12,$=_.date)},[t,r,l,a,s,o,b,d,i,c,u,P,$]}class y extends z{constructor(e){super(),V(this,e,Ie,Ce,G,{to:0,newTab:1,title:2,description:3,role:4,backgroundColor:5,backgroundImage:6,borderColor:7,badges:8,dark:9,old:10,deprecated:11,date:12})}}function Ee(f){let e,n;const t=f[1].default,r=Y(t,f,f[0],null);return{c(){e=B("div"),r&&r.c(),this.h()},l(l){e=j(l,"DIV",{class:!0});var a=L(e);r&&r.l(a),a.forEach(w),this.h()},h(){A(e,"class","svelte-1fz0b84")},m(l,a){C(l,e,a),r&&r.m(e,null),n=!0},p(l,[a]){r&&r.p&&(!n||a&1)&&Q(r,t,l,l[0],n?Z(t,l[0],a,null):X(l[0]),null)},i(l){n||(g(r,l),n=!0)},o(l){p(r,l),n=!1},d(l){l&&w(e),r&&r.d(l)}}}function De(f,e,n){let{$$slots:t={},$$scope:r}=e;return f.$$set=l=>{"$$scope"in l&&n(0,r=l.$$scope)},[r,t]}class F extends z{constructor(e){super(),V(this,e,De,Ee,G,{})}}function Pe(f){let e;return{c(){e=H("Projects")},l(n){e=U(n,"Projects")},m(n,t){C(n,e,t)},d(n){n&&w(e)}}}function ye(f){let e,n,t,r,l,a,s,o,b,d,i,c;return e=new y({props:{to:"/paper",title:"Paper",description:"Plan your courses at Northwestern University.",backgroundColor:"#262626",dark:!0}}),t=new y({props:{to:"https://github.com/dilanx/dmslauncher",newTab:!0,title:"DMSLauncher",description:"The better way to launch your modded game.",backgroundImage:`
        linear-gradient(
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.2)
        ),
        url('/images/mcshaders1.jpg')`,dark:!0}}),l=new y({props:{to:"https://github.com/dilanx/switchpresence",newTab:!0,title:"SwitchPresence",description:"Display your Nintendo Switch games as your Discord activity.",backgroundImage:`
        linear-gradient(
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.2)
        ),
        url('/images/discord.png')
      `,dark:!0}}),s=new y({props:{to:"https://chrome.google.com/webstore/detail/paste-list/nolfbfhaicjldjodgafpaheehkolchdf",newTab:!0,title:"Paste List",description:"Simplify your browser's clipboard.",backgroundImage:"linear-gradient(to right, #ffe9e9, #e9ffe9)"}}),b=new y({props:{to:"https://github.com/dilanx/TimeManager",newTab:!0,title:"TimeManager",description:"Easily log time for your projects or tasks.",backgroundImage:"linear-gradient(to right, #fbcfe8, #f5d0fe)",old:!0}}),i=new y({props:{to:"https://docs.dilanxd.com/flapxd",newTab:!0,title:"FlapXD",description:"Flappy bird taken to the previous level.",backgroundImage:`
        linear-gradient(
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.2)
        ),
        url('/images/flapxd.png')
      `,dark:!0,old:!0}}),{c(){h(e.$$.fragment),n=E(),h(t.$$.fragment),r=E(),h(l.$$.fragment),a=E(),h(s.$$.fragment),o=E(),h(b.$$.fragment),d=E(),h(i.$$.fragment)},l(u){k(e.$$.fragment,u),n=D(u),k(t.$$.fragment,u),r=D(u),k(l.$$.fragment,u),a=D(u),k(s.$$.fragment,u),o=D(u),k(b.$$.fragment,u),d=D(u),k(i.$$.fragment,u)},m(u,P){v(e,u,P),C(u,n,P),v(t,u,P),C(u,r,P),v(l,u,P),C(u,a,P),v(s,u,P),C(u,o,P),v(b,u,P),C(u,d,P),v(i,u,P),c=!0},p:N,i(u){c||(g(e.$$.fragment,u),g(t.$$.fragment,u),g(l.$$.fragment,u),g(s.$$.fragment,u),g(b.$$.fragment,u),g(i.$$.fragment,u),c=!0)},o(u){p(e.$$.fragment,u),p(t.$$.fragment,u),p(l.$$.fragment,u),p(s.$$.fragment,u),p(b.$$.fragment,u),p(i.$$.fragment,u),c=!1},d(u){T(e,u),u&&w(n),T(t,u),u&&w(r),T(l,u),u&&w(a),T(s,u),u&&w(o),T(b,u),u&&w(d),T(i,u)}}}function Ae(f){let e,n;return e=new F({props:{$$slots:{default:[ye]},$$scope:{ctx:f}}}),{c(){h(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p(t,r){const l={};r&1&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function Se(f){let e,n,t,r,l,a,s,o,b,d,i,c,u,P;return e=new y({props:{to:"https://craco.js.org",newTab:!0,title:"CRACO",description:"An easy and comprehensible configuration layer for Create React App.",backgroundColor:"#0c5041",dark:!0}}),t=new y({props:{to:"https://github.com/dilanx/create-tutorial",newTab:!0,title:"create-tutorial",description:"An npm command line tool to load tutorial starter code."}}),l=new y({props:{to:"https://github.com/dilanx/terminal-pastelle",newTab:!0,title:"terminal-pastelle",description:"A nice pastel-type theme for a variety of terminals."}}),s=new y({props:{to:"https://github.com/dilanx/redark",newTab:!0,title:"redark",description:"A dark theme for Redoc."}}),b=new y({props:{to:"https://github.com/dilanx/ChoccyStatus",newTab:!0,title:"ChoccyStatus",description:"A customizable, JSON-based status page for static sites.",deprecated:!0}}),i=new y({props:{to:"https://github.com/dilanx/GamerLanguage",newTab:!0,title:"GamerLanguage",description:"An esoteric joke programming language for gamers.",deprecated:!0}}),u=new y({props:{to:"https://github.com/dilanx/dilanscript",newTab:!0,title:"dilanscript",description:"A super easy-to-use data storage or configuration file with parser API.",deprecated:!0}}),{c(){h(e.$$.fragment),n=E(),h(t.$$.fragment),r=E(),h(l.$$.fragment),a=E(),h(s.$$.fragment),o=E(),h(b.$$.fragment),d=E(),h(i.$$.fragment),c=E(),h(u.$$.fragment)},l($){k(e.$$.fragment,$),n=D($),k(t.$$.fragment,$),r=D($),k(l.$$.fragment,$),a=D($),k(s.$$.fragment,$),o=D($),k(b.$$.fragment,$),d=D($),k(i.$$.fragment,$),c=D($),k(u.$$.fragment,$)},m($,_){v(e,$,_),C($,n,_),v(t,$,_),C($,r,_),v(l,$,_),C($,a,_),v(s,$,_),C($,o,_),v(b,$,_),C($,d,_),v(i,$,_),C($,c,_),v(u,$,_),P=!0},p:N,i($){P||(g(e.$$.fragment,$),g(t.$$.fragment,$),g(l.$$.fragment,$),g(s.$$.fragment,$),g(b.$$.fragment,$),g(i.$$.fragment,$),g(u.$$.fragment,$),P=!0)},o($){p(e.$$.fragment,$),p(t.$$.fragment,$),p(l.$$.fragment,$),p(s.$$.fragment,$),p(b.$$.fragment,$),p(i.$$.fragment,$),p(u.$$.fragment,$),P=!1},d($){T(e,$),$&&w(n),T(t,$),$&&w(r),T(l,$),$&&w(a),T(s,$),$&&w(o),T(b,$),$&&w(d),T(i,$),$&&w(c),T(u,$)}}}function Be(f){let e,n;return e=new F({props:{$$slots:{default:[Se]},$$scope:{ctx:f}}}),{c(){h(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p(t,r){const l={};r&1&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function je(f){let e,n,t,r,l,a,s,o,b,d;return e=new y({props:{to:"https://www.wildhacks.net",newTab:!0,title:"WildHacks",description:"Northwestern University's largest hackathon.",role:"director",backgroundColor:"#180b2f",dark:!0,date:"2022 +"}}),t=new y({props:{to:"https://dilloday.com",newTab:!0,title:"Mayfest Productions",description:"The Northwestern University student organization behind Dillo Day, the nation's largest student-run music festival.",role:"director of tech",backgroundImage:`
        linear-gradient(
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.2)
        ),
        url('/images/dilloday.jpeg')
      `,dark:!0,date:"2022 +"}}),l=new y({props:{to:"https://www.nudrumline.org",newTab:!0,title:"Northwestern Drumline",description:"The drumline section of the Northwestern University Marching Band.",role:"former snare player and website developer",backgroundImage:`
        linear-gradient(
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.2)
        ),
        url('/images/drumline.jpg')
      `,dark:!0,date:"2020 - 2022"}}),s=new y({props:{title:"SGDG",description:"The premier student organization for software and game development at Northwestern University.",backgroundColor:"#f9ffff",role:"founder and former president",date:"2021 - 2022"}}),b=new y({props:{to:"https://voidstone.dilanxd.com",newTab:!0,title:"Voidstone Software",description:"Quality custom software and game modifications curated to your taste.",backgroundColor:"black",role:"founder and former software developer",dark:!0,date:"2015 - 2020"}}),{c(){h(e.$$.fragment),n=E(),h(t.$$.fragment),r=E(),h(l.$$.fragment),a=E(),h(s.$$.fragment),o=E(),h(b.$$.fragment)},l(i){k(e.$$.fragment,i),n=D(i),k(t.$$.fragment,i),r=D(i),k(l.$$.fragment,i),a=D(i),k(s.$$.fragment,i),o=D(i),k(b.$$.fragment,i)},m(i,c){v(e,i,c),C(i,n,c),v(t,i,c),C(i,r,c),v(l,i,c),C(i,a,c),v(s,i,c),C(i,o,c),v(b,i,c),d=!0},p:N,i(i){d||(g(e.$$.fragment,i),g(t.$$.fragment,i),g(l.$$.fragment,i),g(s.$$.fragment,i),g(b.$$.fragment,i),d=!0)},o(i){p(e.$$.fragment,i),p(t.$$.fragment,i),p(l.$$.fragment,i),p(s.$$.fragment,i),p(b.$$.fragment,i),d=!1},d(i){T(e,i),i&&w(n),T(t,i),i&&w(r),T(l,i),i&&w(a),T(s,i),i&&w(o),T(b,i)}}}function Le(f){let e,n;return e=new F({props:{$$slots:{default:[je]},$$scope:{ctx:f}}}),{c(){h(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p(t,r){const l={};r&1&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function Me(f){let e,n,t,r;return e=new y({props:{to:"https://github.com/dilanx/WedBars",newTab:!0,title:"WedBars",description:"Hypixel's Bed Wars but way better. Trust me.",backgroundImage:`
        linear-gradient(
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.2)
        ),
        url('/images/mcshaders2.jpg')
      `,dark:!0}}),t=new y({props:{to:"/minecraft-maps",title:"Minecraft Maps",description:"Old Minecraft game worlds available for download. Played by YouTubers like DanTDM, CaptainSparklez, Logdotzip, and more.",backgroundImage:`
        linear-gradient(
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.2)
        ),
        url('/images/mcshaders3.jpg')
      `,dark:!0}}),{c(){h(e.$$.fragment),n=E(),h(t.$$.fragment)},l(l){k(e.$$.fragment,l),n=D(l),k(t.$$.fragment,l)},m(l,a){v(e,l,a),C(l,n,a),v(t,l,a),r=!0},p:N,i(l){r||(g(e.$$.fragment,l),g(t.$$.fragment,l),r=!0)},o(l){p(e.$$.fragment,l),p(t.$$.fragment,l),r=!1},d(l){T(e,l),l&&w(n),T(t,l)}}}function Ne(f){let e,n;return e=new F({props:{$$slots:{default:[Me]},$$scope:{ctx:f}}}),{c(){h(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p(t,r){const l={};r&1&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function Oe(f){let e,n,t,r,l,a;return e=new y({props:{to:"https://github.com/dilanx/config",newTab:!0,title:"config",description:"Maintain consistency across your projects with consistent styling and configuration."}}),t=new y({props:{to:"https://github.com/dilanx/avatar",newTab:!0,title:"avatar",description:"A simple letter-color avatar component for auth.dilanxd.com avatars."}}),l=new y({props:{to:"https://github.com/dilanx/themes",newTab:!0,title:"themes",description:"A collection of themes used on my websites."}}),{c(){h(e.$$.fragment),n=E(),h(t.$$.fragment),r=E(),h(l.$$.fragment)},l(s){k(e.$$.fragment,s),n=D(s),k(t.$$.fragment,s),r=D(s),k(l.$$.fragment,s)},m(s,o){v(e,s,o),C(s,n,o),v(t,s,o),C(s,r,o),v(l,s,o),a=!0},p:N,i(s){a||(g(e.$$.fragment,s),g(t.$$.fragment,s),g(l.$$.fragment,s),a=!0)},o(s){p(e.$$.fragment,s),p(t.$$.fragment,s),p(l.$$.fragment,s),a=!1},d(s){T(e,s),s&&w(n),T(t,s),s&&w(r),T(l,s)}}}function Re(f){let e,n;return e=new F({props:{$$slots:{default:[Oe]},$$scope:{ctx:f}}}),{c(){h(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){v(e,t,r),n=!0},p(t,r){const l={};r&1&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function ze(f){let e,n,t,r,l,a,s,o,b,d,i,c,u,P,$,_;return e=new ce({props:{title:"Projects",description:"Full-stack software developer"}}),t=new $e({props:{h1:!0,hidden:!0,$$slots:{default:[Pe]},$$scope:{ctx:f}}}),l=new R({props:{wm:!0,hs:!0,label:{title:"APPLICATIONS",subtitle:"Desktop, mobile, and web applications I've created or am working on"},$$slots:{default:[Ae]},$$scope:{ctx:f}}}),s=new R({props:{wm:!0,hs:!0,label:{title:"DEVELOPER TOOLS",subtitle:"Tools I've developed for developers of all kinds—programmers, website creators, etc."},$$slots:{default:[Be]},$$scope:{ctx:f}}}),b=new R({props:{wm:!0,hs:!0,label:{title:"ORGANIZATIONS AND THIRD PARTY",subtitle:"Organizations and services I am or was involved with"},$$slots:{default:[Le]},$$scope:{ctx:f}}}),i=new R({props:{wm:!0,hs:!0,label:{title:"MINECRAFT",subtitle:"Things I've made for or within the popular game Minecraft"},$$slots:{default:[Ne]},$$scope:{ctx:f}}}),u=new R({props:{wm:!0,hs:!0,label:{title:"DEVELOPER RESOURCES",subtitle:"Resources and configuration presets for myself and other developers"},$$slots:{default:[Re]},$$scope:{ctx:f}}}),$=new be({props:{margin:!0,links:[{to:"https://github.com/dilanx",text:"Check out my projects on GitHub",icon:"fab fa-github"}]}}),{c(){h(e.$$.fragment),n=E(),h(t.$$.fragment),r=E(),h(l.$$.fragment),a=E(),h(s.$$.fragment),o=E(),h(b.$$.fragment),d=E(),h(i.$$.fragment),c=E(),h(u.$$.fragment),P=E(),h($.$$.fragment)},l(m){k(e.$$.fragment,m),n=D(m),k(t.$$.fragment,m),r=D(m),k(l.$$.fragment,m),a=D(m),k(s.$$.fragment,m),o=D(m),k(b.$$.fragment,m),d=D(m),k(i.$$.fragment,m),c=D(m),k(u.$$.fragment,m),P=D(m),k($.$$.fragment,m)},m(m,I){v(e,m,I),C(m,n,I),v(t,m,I),C(m,r,I),v(l,m,I),C(m,a,I),v(s,m,I),C(m,o,I),v(b,m,I),C(m,d,I),v(i,m,I),C(m,c,I),v(u,m,I),C(m,P,I),v($,m,I),_=!0},p(m,[I]){const K={};I&1&&(K.$$scope={dirty:I,ctx:m}),t.$set(K);const x={};I&1&&(x.$$scope={dirty:I,ctx:m}),l.$set(x);const ee={};I&1&&(ee.$$scope={dirty:I,ctx:m}),s.$set(ee);const te={};I&1&&(te.$$scope={dirty:I,ctx:m}),b.$set(te);const re={};I&1&&(re.$$scope={dirty:I,ctx:m}),i.$set(re);const ne={};I&1&&(ne.$$scope={dirty:I,ctx:m}),u.$set(ne)},i(m){_||(g(e.$$.fragment,m),g(t.$$.fragment,m),g(l.$$.fragment,m),g(s.$$.fragment,m),g(b.$$.fragment,m),g(i.$$.fragment,m),g(u.$$.fragment,m),g($.$$.fragment,m),_=!0)},o(m){p(e.$$.fragment,m),p(t.$$.fragment,m),p(l.$$.fragment,m),p(s.$$.fragment,m),p(b.$$.fragment,m),p(i.$$.fragment,m),p(u.$$.fragment,m),p($.$$.fragment,m),_=!1},d(m){T(e,m),m&&w(n),T(t,m),m&&w(r),T(l,m),m&&w(a),T(s,m),m&&w(o),T(b,m),m&&w(d),T(i,m),m&&w(c),T(u,m),m&&w(P),T($,m)}}}class We extends z{constructor(e){super(),V(this,e,null,ze,G,{})}}export{We as default};