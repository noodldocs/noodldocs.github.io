"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[3513],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,y=p["".concat(u,".").concat(d)]||p[d]||s[d]||i;return n?r.createElement(y,o(o({ref:t},m),{},{components:n})):r.createElement(y,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},27081:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={title:"Match Custom Media Query",hide_title:!0},u="Match Custom Media Query",c={unversionedId:"prefabs/media-query/components/match-custom-media-query/README",id:"prefabs/media-query/components/match-custom-media-query/README",title:"Match Custom Media Query",description:"This component is used to check for a custom media query. It is mostly used for one-off edge cases. For general media query usage it is recommended to use the Match Media Query component.",source:"@site/library/prefabs/media-query/components/match-custom-media-query/README.md",sourceDirName:"prefabs/media-query/components/match-custom-media-query",slug:"/prefabs/media-query/components/match-custom-media-query/",permalink:"/2.8/library/prefabs/media-query/components/match-custom-media-query/",tags:[],version:"current",frontMatter:{title:"Match Custom Media Query",hide_title:!0},sidebar:"mediaQuerySidebar",previous:{title:"Match Media Query",permalink:"/2.8/library/prefabs/media-query/components/match-media-query/"},next:{title:"Media Query Debugger",permalink:"/2.8/library/prefabs/media-query/components/media-query-debugger/"}},m={},s=[{value:"Media Query",id:"media-query",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],p={toc:s};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"match-custom-media-query"},"Match Custom Media Query"),(0,i.kt)("p",null,"This component is used to check for a custom media query. It is mostly used for one-off edge cases. For general media query usage it is recommended to use the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/library/prefabs/media-query/components/match-media-query"},"Match Media Query"))," component."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(74679).Z,width:"1454",height:"742"}))),(0,i.kt)("h2",{id:"media-query"},"Media Query"),(0,i.kt)("p",null,"Here's a few examples of media queries:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(max-width: 375px)"),". This will match if the screen size is ",(0,i.kt)("inlineCode",{parentName:"li"},"375px")," or smaller, like on an iPhone 8, or iPhone X."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(max-width: 768px)"),". Typical size to check for tablets."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(max-width: 1224px)"),". Typical size to check for desktop and laptops.")),(0,i.kt)("p",null,"You can also create more complex media queries that check for multiple sizes, or a range:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(min-device-width: 320px) and (max-device-height: 640px)"),". This will match any size that's above ",(0,i.kt)("inlineCode",{parentName:"li"},"320px"),", and no larger than ",(0,i.kt)("inlineCode",{parentName:"li"},"640px"),".")),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Media Query")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("strong",{parentName:"td"},"Media Query String")," you want to detect")))),(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Signal"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-signal"},"Match")),(0,i.kt)("td",{parentName:"tr",align:null},"Sends a signal if the ",(0,i.kt)("strong",{parentName:"td"},"Media Query String")," matches the device")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-signal"},"No Match")),(0,i.kt)("td",{parentName:"tr",align:null},"Sends a signal if the ",(0,i.kt)("strong",{parentName:"td"},"Media Query String")," does not match the device")))))}d.isMDXComponent=!0},74679:function(e,t,n){t.Z=n.p+"assets/images/match-custom-811e28a9c6dd6df76fb96c42836e98c5.png"}}]);