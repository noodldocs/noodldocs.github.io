"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[9571],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>b});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var i=n.createContext({}),d=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(i.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=d(a),c=l,b=m["".concat(i,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(b,o(o({ref:e},s),{},{components:a})):n.createElement(b,o({ref:e},s))}));function b(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=c;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[m]="string"==typeof t?t:l,o[1]=p;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},40659:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const r={title:"Mapbox Polygon",hide_title:!0},o=void 0,p={unversionedId:"modules/mapbox/nodes/v2/mapbox-polygon",id:"modules/mapbox/nodes/v2/mapbox-polygon",title:"Mapbox Polygon",description:"This node should be placed as a child in the Mapbox Map node, it can be used in a repeater.",source:"@site/library/modules/mapbox/nodes/v2/mapbox-polygon.md",sourceDirName:"modules/mapbox/nodes/v2",slug:"/modules/mapbox/nodes/v2/mapbox-polygon",permalink:"/2.9/library/modules/mapbox/nodes/v2/mapbox-polygon",draft:!1,tags:[],version:"current",frontMatter:{title:"Mapbox Polygon",hide_title:!0},sidebar:"mapboxSidebar",previous:{title:"Mapbox Marker",permalink:"/2.9/library/modules/mapbox/nodes/v2/mapbox-marker"},next:{title:"Release Notes",permalink:"/2.9/library/modules/mapbox/release-notes"}},i={},d=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],s={toc:d},m="wrapper";function u(t){let{components:e,...r}=t;return(0,l.kt)(m,(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,""),(0,l.kt)("h1",{id:"mapbox-polygon"},"Mapbox Polygon"),(0,l.kt)("p",null,"This node should be placed as a child in the Mapbox Map node, it can be used in a repeater."),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:a(29838).Z,width:"796",height:"497"}))),(0,l.kt)("p",null,'Here is the code that is inside the "Get Polygon" Function node:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Outputs.Coordinates = [\n  [\n    [-118.446802, 34.061877],\n    [-118.456802, 34.061877],\n    [-118.456802, 34.051877],\n    [-118.446802, 34.051877],\n    [-118.446802, 34.061877],\n  ],\n];\n")),(0,l.kt)("p",null,""),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("div",{className:"ndl-table-35-65"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Coordinates")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the current coordinates.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Enabled")),(0,l.kt)("td",{parentName:"tr",align:null},"Enable / Disable user interaction.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Edit")),(0,l.kt)("td",{parentName:"tr",align:null},"Send a signal to start polygon editing."))))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("div",{className:"ndl-table-35-65"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Mapbox Object")),(0,l.kt)("td",{parentName:"tr",align:null},"The mapbox object.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Mapbox Draw Object")),(0,l.kt)("td",{parentName:"tr",align:null},"The mapbox draw object.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Feature Id")),(0,l.kt)("td",{parentName:"tr",align:null},"The feature id.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Coordinates")),(0,l.kt)("td",{parentName:"tr",align:null},"The coordinates of the polygon.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Updated")),(0,l.kt)("td",{parentName:"tr",align:null},"Sends a signal when the polygon is getting updated.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Selected")),(0,l.kt)("td",{parentName:"tr",align:null},"Sends a signal when the polygon is getting selected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Unselected")),(0,l.kt)("td",{parentName:"tr",align:null},"Sends a signal when the polygon is unselected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Did Mount")),(0,l.kt)("td",{parentName:"tr",align:null},"Sends a signal when the polygon is loaded.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Will Unmount")),(0,l.kt)("td",{parentName:"tr",align:null},"Sends a signal when the polygon is unloaded."))))))}u.isMDXComponent=!0},29838:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/mapbox-polygon-b964cab7fe945b0e485c9a21020a1b61.png"}}]);