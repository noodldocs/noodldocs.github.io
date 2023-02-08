"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[9823],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24465:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=n(17213),l=["components"],c={title:"Localization Example (i18next)",hide_title:!0},p="Localization Example (i18next)",u={unversionedId:"examples/localization",id:"examples/localization",title:"Localization Example (i18next)",description:"This example app shows different usage of the i18next translation module (available here).",source:"@site/library/examples/localization.mdx",sourceDirName:"examples",slug:"/examples/localization",permalink:"/2.8/library/examples/localization",tags:[],version:"current",frontMatter:{title:"Localization Example (i18next)",hide_title:!0},sidebar:"librarySidebar",previous:{title:"Sign up / Sign In Example",permalink:"/2.8/library/examples/sign-up"}},s={},m=[],f={toc:m};function d(e){var t=e.components,c=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"localization-example-i18next"},"Localization Example (i18next)"),(0,a.kt)("p",null,"This example app shows different usage of the i18next translation module (available ",(0,a.kt)("a",{parentName:"p",href:"/library/modules/i18next"},"here"),")."),(0,a.kt)("div",{className:"ndl-image-with-background m"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(30185).Z,width:"994",height:"1035"})),(0,a.kt)(i.Z,{zip:"/library/examples/localization/i18next-example.zip",name:"Localization Example",thumb:"/library/examples/localization/i18next-screenshot.png",mdxType:"ImportButton"})))}d.isMDXComponent=!0},17213:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294),o=n(39671);function a(e){var t=e.zip,n=e.name,a=e.thumb,i=e.cf;return r.createElement("button",{className:"ndl-import-button",onClick:function(){return(0,o.I)(t,{name:n,thumb:a,cf:i})}})}},39671:function(e,t,n){n.d(t,{I:function(){return o}});var r=n(99782);function o(e,t){var n=[];t&&void 0!==t.name&&n.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&n.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+r.default.baseUrl+t.thumb)),t&&void 0!==t.cf&&n.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+r.default.baseUrl+"/"+t.cf));var o="noodl:import/"+location.protocol+"//"+location.host+r.default.baseUrl+e+(n.length>0?"?"+n.join("&"):"");console.log("Importing into Noodl:",o),console.log(e),window.location.href=o}},30185:function(e,t,n){t.Z=n.p+"assets/images/i18next-screenshot-530d164c93e74c89652926e783c672e4.png"}}]);