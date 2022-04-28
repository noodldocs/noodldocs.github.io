"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[9744],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99446:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=n(17213),l=["components"],p={},c="Travel App",u={unversionedId:"examples/travel-app",id:"examples/travel-app",title:"Travel App",description:"This app for travelers shows a number of destinations in a card like horizontal list. It also includes a simple Navigation system.",source:"@site/library/examples/travel-app.mdx",sourceDirName:"examples",slug:"/examples/travel-app",permalink:"/2.6/library/examples/travel-app",tags:[],version:"current",frontMatter:{},sidebar:"librarySidebar",previous:{title:"Suatch Google Sheets Example",permalink:"/2.6/library/examples/suatch"},next:{title:"Mapbox Example",permalink:"/2.6/library/examples/mapbox"}},s={},m=[],f={toc:m};function d(e){var t=e.components,p=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"travel-app"},"Travel App"),(0,a.kt)("p",null,"This app for travelers shows a number of destinations in a card like ",(0,a.kt)("strong",{parentName:"p"},"horizontal list"),". It also includes a simple ",(0,a.kt)("strong",{parentName:"p"},"Navigation")," system."),(0,a.kt)("div",{className:"ndl-image-with-background m"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(25188).Z,width:"530",height:"384"})),(0,a.kt)(i.Z,{zip:"/travel_app_1-2.zip",name:"Travel App",thumb:"travel_app_thumbnail.png",mdxType:"ImportButton"})))}d.isMDXComponent=!0},17213:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294),o=n(39671);function a(e){var t=e.zip,n=e.name,a=e.thumb,i=e.cf;return r.createElement("button",{className:"ndl-import-button",onClick:function(){return(0,o.I)(t,{name:n,thumb:a,cf:i})}})}},39671:function(e,t,n){n.d(t,{I:function(){return o}});var r=n(99782);function o(e,t){var n=[];t&&void 0!==t.name&&n.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&n.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+r.default.baseUrl+t.thumb)),t&&void 0!==t.cf&&n.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+r.default.baseUrl+"/"+t.cf));var o="noodl:import/"+location.protocol+"//"+location.host+r.default.baseUrl+e+(n.length>0?"?"+n.join("&"):"");console.log("Importing into Noodl:",o),console.log(e),window.location.href=o}},25188:function(e,t,n){t.Z=n.p+"assets/images/travel_app_thumbnail-852445f0aafc5268774bcb3cea060fdf.png"}}]);