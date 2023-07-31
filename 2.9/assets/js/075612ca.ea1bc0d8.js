"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[121],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"i18next Module",hide_title:!0},i="i18next Module",l={unversionedId:"modules/i18next/README",id:"modules/i18next/README",title:"i18next Module",description:"Module for using i18next in Noodl.",source:"@site/library/modules/i18next/README.md",sourceDirName:"modules/i18next",slug:"/modules/i18next/",permalink:"/2.9/library/modules/i18next/",draft:!1,tags:[],version:"current",frontMatter:{title:"i18next Module",hide_title:!0},sidebar:"i18nextSidebar",next:{title:"i18next",permalink:"/2.9/library/modules/i18next/i18next-node"}},c={},u=[],p={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"i18next-module"},"i18next Module"),(0,o.kt)("p",null,"Module for using ",(0,o.kt)("a",{parentName:"p",href:"https://www.i18next.com"},"i18next")," in Noodl.\nThe module has three nodes, ",(0,o.kt)("em",{parentName:"p"},"i18next"),", ",(0,o.kt)("em",{parentName:"p"},"Language Bundle")," and ",(0,o.kt)("em",{parentName:"p"},"Translation"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"i18next node is used to keep track of current language and to change the language"),(0,o.kt)("li",{parentName:"ul"},"Language Bundle holds the resources (i.e. localized texts) for a specific language"),(0,o.kt)("li",{parentName:"ul"},"Translation retrieves the correct translation for a specific string (identified by a key) from the currently selected language. If the current language changes, all strings are updated accordingly.")),(0,o.kt)("p",null,"An example with the most common cases can be found ",(0,o.kt)("a",{parentName:"p",href:"/library/examples/localization"},"here"),"."))}d.isMDXComponent=!0}}]);