"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[7245],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),d=o,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:o,l[1]=p;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95908:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"Release Notes",hide_title:!0},l="Release Notes",p={unversionedId:"modules/mapbox/release-notes",id:"modules/mapbox/release-notes",title:"Release Notes",description:"Version 2.0 [2023-03-01]",source:"@site/library/modules/mapbox/release-notes.md",sourceDirName:"modules/mapbox",slug:"/modules/mapbox/release-notes",permalink:"/2.9/library/modules/mapbox/release-notes",draft:!1,tags:[],version:"current",frontMatter:{title:"Release Notes",hide_title:!0},sidebar:"mapboxSidebar",previous:{title:"Mapbox Polygon",permalink:"/2.9/library/modules/mapbox/nodes/v2/mapbox-polygon"}},i={},s=[],u={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"release-notes"},"Release Notes"),(0,o.kt)("p",null,"Version 2.0 ","[2023-03-01]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support for Fullscreen Control"),(0,o.kt)("li",{parentName:"ul"},"Support for Geocoder Control"),(0,o.kt)("li",{parentName:"ul"},"Support for Navigation Control"),(0,o.kt)("li",{parentName:"ul"},"Support for Scale Control"),(0,o.kt)("li",{parentName:"ul"},"Support for Mapbox Draw",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Added Mapbox Polygon node, draw a polygon on the map"),(0,o.kt)("li",{parentName:"ul"},"Added API to listen for newly created polygons via the Mapbox Control"))),(0,o.kt)("li",{parentName:"ul"},"Improved support for markers and custom markers",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Added Mapbox Marker node, when placed as a child inside the Mapbox Map it will become a marker on the map")))),(0,o.kt)("p",null,"Version 1.0 ","[2022-01-14]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support for basic interactions, such as clicking and moving the map"),(0,o.kt)("li",{parentName:"ul"},"Support for markers")))}m.isMDXComponent=!0}}]);