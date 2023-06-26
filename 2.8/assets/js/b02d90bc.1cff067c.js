"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[7245],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},95908:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),l=["components"],i={title:"Release Notes",hide_title:!0},p=void 0,u={unversionedId:"modules/mapbox/release-notes",id:"modules/mapbox/release-notes",title:"Release Notes",description:"Version 2.0 [2023-03-01]",source:"@site/library/modules/mapbox/release-notes.md",sourceDirName:"modules/mapbox",slug:"/modules/mapbox/release-notes",permalink:"/2.8/library/modules/mapbox/release-notes",tags:[],version:"current",frontMatter:{title:"Release Notes",hide_title:!0},sidebar:"mapboxSidebar",previous:{title:"Mapbox Polygon",permalink:"/2.8/library/modules/mapbox/nodes/v2/mapbox-polygon"}},c={},s=[],m={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"release-notes"},"Release Notes"),(0,a.kt)("p",null,"Version 2.0 ","[2023-03-01]"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support for Fullscreen Control"),(0,a.kt)("li",{parentName:"ul"},"Support for Geocoder Control"),(0,a.kt)("li",{parentName:"ul"},"Support for Navigation Control"),(0,a.kt)("li",{parentName:"ul"},"Support for Scale Control"),(0,a.kt)("li",{parentName:"ul"},"Support for Mapbox Draw",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added Mapbox Polygon node, draw a polygon on the map"),(0,a.kt)("li",{parentName:"ul"},"Added API to listen for newly created polygons via the Mapbox Control"))),(0,a.kt)("li",{parentName:"ul"},"Improved support for markers and custom markers",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added Mapbox Marker node, when placed as a child inside the Mapbox Map it will become a marker on the map")))),(0,a.kt)("p",null,"Version 1.0 ","[2022-01-14]"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support for basic interactions, such as clicking and moving the map"),(0,a.kt)("li",{parentName:"ul"},"Support for markers")))}f.isMDXComponent=!0}}]);