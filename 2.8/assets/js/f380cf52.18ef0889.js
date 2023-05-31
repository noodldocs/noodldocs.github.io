"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[3513],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>y});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),m=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(a),d=n,y=c["".concat(u,".").concat(d)]||c[d]||p[d]||i;return a?r.createElement(y,o(o({ref:t},s),{},{components:a})):r.createElement(y,o({ref:t},s))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},27081:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const i={title:"Match Custom Media Query",hide_title:!0},o="Match Custom Media Query",l={unversionedId:"prefabs/media-query/components/match-custom-media-query/README",id:"prefabs/media-query/components/match-custom-media-query/README",title:"Match Custom Media Query",description:"This component is used to check for a custom media query. It is mostly used for one-off edge cases. For general media query usage it is recommended to use the Match Media Query component.",source:"@site/library/prefabs/media-query/components/match-custom-media-query/README.md",sourceDirName:"prefabs/media-query/components/match-custom-media-query",slug:"/prefabs/media-query/components/match-custom-media-query/",permalink:"/2.8/library/prefabs/media-query/components/match-custom-media-query/",draft:!1,tags:[],version:"current",frontMatter:{title:"Match Custom Media Query",hide_title:!0},sidebar:"mediaQuerySidebar",previous:{title:"Match Media Query",permalink:"/2.8/library/prefabs/media-query/components/match-media-query/"},next:{title:"Media Query Debugger",permalink:"/2.8/library/prefabs/media-query/components/media-query-debugger/"}},u={},m=[{value:"Media Query",id:"media-query",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],s={toc:m},c="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"match-custom-media-query"},"Match Custom Media Query"),(0,n.kt)("p",null,"This component is used to check for a custom media query. It is mostly used for one-off edge cases. For general media query usage it is recommended to use the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/library/prefabs/media-query/components/match-media-query"},"Match Media Query"))," component."),(0,n.kt)("div",{className:"ndl-image-with-background xl"},(0,n.kt)("p",null,(0,n.kt)("img",{src:a(55238).Z,width:"1454",height:"742"}))),(0,n.kt)("h2",{id:"media-query"},"Media Query"),(0,n.kt)("p",null,"Here's a few examples of media queries:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"(max-width: 375px)"),". This will match if the screen size is ",(0,n.kt)("inlineCode",{parentName:"li"},"375px")," or smaller, like on an iPhone 8, or iPhone X."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"(max-width: 768px)"),". Typical size to check for tablets."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"(max-width: 1224px)"),". Typical size to check for desktop and laptops.")),(0,n.kt)("p",null,"You can also create more complex media queries that check for multiple sizes, or a range:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"(min-device-width: 320px) and (max-device-height: 640px)"),". This will match any size that's above ",(0,n.kt)("inlineCode",{parentName:"li"},"320px"),", and no larger than ",(0,n.kt)("inlineCode",{parentName:"li"},"640px"),".")),(0,n.kt)("h2",{id:"inputs"},"Inputs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Data"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-data"},"Media Query")),(0,n.kt)("td",{parentName:"tr",align:null},"The ",(0,n.kt)("strong",{parentName:"td"},"Media Query String")," you want to detect")))),(0,n.kt)("h2",{id:"outputs"},"Outputs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Signal"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-signal"},"Match")),(0,n.kt)("td",{parentName:"tr",align:null},"Sends a signal if the ",(0,n.kt)("strong",{parentName:"td"},"Media Query String")," matches the device")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-signal"},"No Match")),(0,n.kt)("td",{parentName:"tr",align:null},"Sends a signal if the ",(0,n.kt)("strong",{parentName:"td"},"Media Query String")," does not match the device")))))}p.isMDXComponent=!0},55238:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/match-custom-811e28a9c6dd6df76fb96c42836e98c5.png"}}]);