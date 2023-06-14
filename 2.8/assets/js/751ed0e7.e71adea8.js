"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[975],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),p=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):d(d({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=p(a),u=r,c=m["".concat(i,".").concat(u)]||m[u]||k[u]||l;return a?n.createElement(c,d(d({ref:e},s),{},{components:a})):n.createElement(c,d({ref:e},s))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,d=new Array(l);d[0]=u;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[m]="string"==typeof t?t:r,d[1]=o;for(var p=2;p<l;p++)d[p]=a[p];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},56723:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"Mapbox Marker",hide_title:!0},d=void 0,o={unversionedId:"modules/mapbox/nodes/v2/mapbox-marker",id:"modules/mapbox/nodes/v2/mapbox-marker",title:"Mapbox Marker",description:"This node should be placed as a child in the Mapbox Map node, it can be used in a repeater.",source:"@site/library/modules/mapbox/nodes/v2/mapbox-marker.md",sourceDirName:"modules/mapbox/nodes/v2",slug:"/modules/mapbox/nodes/v2/mapbox-marker",permalink:"/2.8/library/modules/mapbox/nodes/v2/mapbox-marker",draft:!1,tags:[],version:"current",frontMatter:{title:"Mapbox Marker",hide_title:!0},sidebar:"mapboxSidebar",previous:{title:"Mapbox Map",permalink:"/2.8/library/modules/mapbox/nodes/v2/mapbox-map"},next:{title:"Mapbox Polygon",permalink:"/2.8/library/modules/mapbox/nodes/v2/mapbox-polygon"}},i={},p=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],s={toc:p},m="wrapper";function k(t){let{components:e,...l}=t;return(0,r.kt)(m,(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,""),(0,r.kt)("h1",{id:"mapbox-marker"},"Mapbox Marker"),(0,r.kt)("p",null,"This node should be placed as a child in the Mapbox Map node, it can be used in a repeater."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(10585).Z,width:"579",height:"513"}))),(0,r.kt)("p",null,""),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("div",{className:"ndl-table-35-65"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Color")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the color of the marker.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"z-Index")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the z-Index of the marker.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Draggable")),(0,r.kt)("td",{parentName:"tr",align:null},"Make the marker draggable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Rotation")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the rotation of the marker.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Rotation Alignment")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the rotation alignment marker.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Pitch Alignment")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the pitch alignment marker.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Offset X")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the marker x offset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Offset Y")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the marker y offset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Longitude")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the current active longitude.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Latitude")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the current active latitude.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Tooltip")),(0,r.kt)("td",{parentName:"tr",align:null},"Add a custom tooltip using the Mapbox tooltips, this will oonly work on the default markers."))))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("div",{className:"ndl-table-35-65"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Longitude")),(0,r.kt)("td",{parentName:"tr",align:null},"The current active longitude.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Latitude")),(0,r.kt)("td",{parentName:"tr",align:null},"The current active latitude.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Width")),(0,r.kt)("td",{parentName:"tr",align:null},"The width of the marker container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Height")),(0,r.kt)("td",{parentName:"tr",align:null},"The height of the marker container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Screen Position X")),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of pixels between the left side of the window and the left side of the map container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Screen Position Y")),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of pixels between the top of the window and the top side of the map container.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Click")),(0,r.kt)("td",{parentName:"tr",align:null},"Sends a signal when the user clicks on the marker.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Drag Start")),(0,r.kt)("td",{parentName:"tr",align:null},"Sends a signal when marker is starting to be dragged.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Drag")),(0,r.kt)("td",{parentName:"tr",align:null},"Sends a signal when marker is being dragged.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Drag End")),(0,r.kt)("td",{parentName:"tr",align:null},"Sends a signal when marker is dragged ended.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Did Mount")),(0,r.kt)("td",{parentName:"tr",align:null},"Sends a signal when the marker have been loaded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Will Unmount")),(0,r.kt)("td",{parentName:"tr",align:null},"Sends a signal when the marker is unloaded."))))))}k.isMDXComponent=!0},10585:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/mapbox-marker-1679da9727006130edcdd554897377a9.png"}}]);