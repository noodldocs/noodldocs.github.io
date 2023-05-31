"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[9744],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},99446:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905)),o=r(17213);const l={title:"Travel App",hide_title:!0},p="Travel App",i={unversionedId:"examples/travel-app",id:"examples/travel-app",title:"Travel App",description:"This app for travelers shows a number of destinations in a card like horizontal list. It also includes a simple Navigation system.",source:"@site/library/examples/travel-app.mdx",sourceDirName:"examples",slug:"/examples/travel-app",permalink:"/2.8/library/examples/travel-app",draft:!1,tags:[],version:"current",frontMatter:{title:"Travel App",hide_title:!0},sidebar:"librarySidebar",previous:{title:"Suatch Google Sheets Example",permalink:"/2.8/library/examples/suatch"},next:{title:"Mapbox Example",permalink:"/2.8/library/examples/mapbox"}},c={},s=[],m={toc:s},u="wrapper";function f(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"travel-app"},"Travel App"),(0,a.kt)("p",null,"This app for travelers shows a number of destinations in a card like ",(0,a.kt)("strong",{parentName:"p"},"horizontal list"),". It also includes a simple ",(0,a.kt)("strong",{parentName:"p"},"Navigation")," system."),(0,a.kt)("div",{className:"ndl-image-with-background m"},(0,a.kt)("p",null,(0,a.kt)("img",{src:r(44093).Z,width:"530",height:"384"})),(0,a.kt)(o.Z,{zip:"/library/examples/travel-app/travel_app_1-2.zip",name:"Travel App",thumb:"/library/examples/travel-app/travel_app_thumbnail.png",mdxType:"ImportButton"})))}f.isMDXComponent=!0},17213:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(39671);function o(e){let{zip:t,name:r,thumb:o,cf:l}=e;return n.createElement("button",{className:"ndl-import-button",onClick:()=>(0,a.I)(t,{name:r,thumb:o,cf:l})})}},39671:(e,t,r)=>{r.d(t,{I:()=>a});var n=r(36809);function a(e,t){let r=[];t&&void 0!==t.name&&r.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&r.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+n.default.baseUrl+t.thumb)),t&&void 0!==t.cf&&r.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+n.default.baseUrl+"/"+t.cf));var a="noodl:import/"+location.protocol+"//"+location.host+n.default.baseUrl+e+(r.length>0?"?"+r.join("&"):"");console.log("Importing into Noodl:",a),console.log(e),window.location.href=a}},44093:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/travel_app_thumbnail-852445f0aafc5268774bcb3cea060fdf.png"}}]);