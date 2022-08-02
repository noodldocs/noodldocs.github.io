"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[327],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),h=o,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},12156:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),l=["components"],s={title:"Google Sheets Module",hide_title:!0},i=void 0,u={unversionedId:"modules/gsheets/README",id:"modules/gsheets/README",title:"Google Sheets Module",description:"The Google Sheets Module makes it easy to read data from publich Google Sheets. Use it for example to use Google Sheets as a CMS system or a read-only data repository. There are three nodes included, Query Sheet, Query Sheet Aggregate and Sheet Row.",source:"@site/library/modules/gsheets/README.md",sourceDirName:"modules/gsheets",slug:"/modules/gsheets/",permalink:"/2.6/library/modules/gsheets/",tags:[],version:"current",frontMatter:{title:"Google Sheets Module",hide_title:!0},sidebar:"gsheetsSidebar",next:{title:"Setting up the Google Sheets Module",permalink:"/2.6/library/modules/gsheets/guides/setting-up/"}},c={},d=[],p={toc:d};function h(e){var t=e.components,s=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"google-sheets-module"},"Google Sheets Module"),(0,a.kt)("p",null,"The Google Sheets Module makes it easy to read data from publich Google Sheets. Use it for example to use Google Sheets as a CMS system or a read-only data repository. There are three nodes included, ",(0,a.kt)("a",{parentName:"p",href:"/library/modules/gsheets/node-docs/query-sheet"},"Query Sheet"),", ",(0,a.kt)("a",{parentName:"p",href:"/library/modules/gsheets/node-docs/query-sheet-aggregate"},"Query Sheet Aggregate")," and ",(0,a.kt)("a",{parentName:"p",href:"/library/modules/gsheets/node-docs/sheet-row"},"Sheet Row"),"."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:r(89654).Z,width:"3745",height:"2055"}))),(0,a.kt)("p",null,"The module will interpret a Google Sheet as a giant table meaning the first row encountered in the sheet will decide the names of the columns, and then each row will contains values for those columns in its cells. Empty rows and columns will be skipped."),(0,a.kt)("p",null,"?> Note that the Google Sheet need to be made publicly available for the module to be able to access it. Also, the module is read-only, i.e. you cannot write data to the Google Sheet."))}h.isMDXComponent=!0},89654:function(e,t,r){t.Z=r.p+"assets/images/suatch-1-2ab12fe538ef6db61ea902a3438ebaad.png"}}]);