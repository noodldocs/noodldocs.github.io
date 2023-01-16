"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[4403],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return u}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(a),u=r,c=k["".concat(o,".").concat(u)]||k[u]||s[u]||l;return a?n.createElement(c,i(i({ref:e},m),{},{components:a})):n.createElement(c,i({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},58301:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return s}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],p={title:"Mapbox Map",hide_title:!0},o=void 0,d={unversionedId:"modules/mapbox/mapbox-map",id:"modules/mapbox/mapbox-map",title:"Mapbox Map",description:"This node adds a map to the visual tree, using Mapbox. The map can be both interactive and static.",source:"@site/library/modules/mapbox/mapbox-map.md",sourceDirName:"modules/mapbox",slug:"/modules/mapbox/mapbox-map",permalink:"/2.8/library/modules/mapbox/mapbox-map",tags:[],version:"current",frontMatter:{title:"Mapbox Map",hide_title:!0},sidebar:"mapboxSidebar",previous:{title:"Getting Screen Coordinates of Markers",permalink:"/2.8/library/modules/mapbox/guides/screen-coordinates/"},next:{title:"Release Notes",permalink:"/2.8/library/modules/mapbox/release-notes"}},m={},s=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],k={toc:s};function u(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,""),(0,l.kt)("h1",{id:"mapbox-map"},"Mapbox Map"),(0,l.kt)("p",null,"This node adds a map to the visual tree, using ",(0,l.kt)("a",{parentName:"p",href:"https://www.mapbox.com/"},"Mapbox"),". The map can be both interactive and static."),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:a(32562).Z,width:"638",height:"303"}))),(0,l.kt)("p",null,"Markers can be placed on the map by sending an ",(0,l.kt)("span",{className:"ndl-data"},"array")," of marker ",(0,l.kt)("span",{className:"ndl-data"},"objects")," containing ",(0,l.kt)("inlineCode",{parentName:"p"},"Lat"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Lon")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Color")," to the ",(0,l.kt)("span",{className:"ndl-data"},"Markers")," input. ",(0,l.kt)("inlineCode",{parentName:"p"},"Color"),' can be specified as a string, (e.g. "White") or as a hex string (e.g. "#ffffff").'),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:a(21942).Z,width:"633",height:"296"}))),(0,l.kt)("p",null,""),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Longitude")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the current active longitude.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Latitude")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the current active latitude.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Zoom")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the zoom level of the map.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Markers")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of markers on the map. Every marker is defined as an object containing the properties ",(0,l.kt)("inlineCode",{parentName:"td"},"Lat"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Lon "),", and ",(0,l.kt)("inlineCode",{parentName:"td"},"Color"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the Marker type. Can be either ",(0,l.kt)("inlineCode",{parentName:"td"},"Default")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"Image"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Source")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the source of the Marker image. Only available if the Marker is om ",(0,l.kt)("inlineCode",{parentName:"td"},"Image")," type.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Width")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the width of the Marker image (in pixels). Only available if the Marker is om ",(0,l.kt)("inlineCode",{parentName:"td"},"Image")," type.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Height")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the height of the Marker image (in pixels). Only available if the Marker is om ",(0,l.kt)("inlineCode",{parentName:"td"},"Image")," type.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Anchor")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the the anchor point of the Marker image in relation to the location on the map. Only available if the Marker is om ",(0,l.kt)("inlineCode",{parentName:"td"},"Image")," type.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Interactive")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets if users can interact with the map or not.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Style")),(0,l.kt)("td",{parentName:"tr",align:null},"A path to a ",(0,l.kt)("a",{parentName:"td",href:"https://docs.mapbox.com/api/maps/styles/"},"Mapbox Style"),".")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Center on user")),(0,l.kt)("td",{parentName:"tr",align:null},"Send a signal to this port to center the map to the current active latitude and longitude.")))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"(Coordinates) Longitude")),(0,l.kt)("td",{parentName:"tr",align:null},"The current active longitude.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"(Coordinates) Latitude")),(0,l.kt)("td",{parentName:"tr",align:null},"The current active latitude.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Zoom")),(0,l.kt)("td",{parentName:"tr",align:null},"The current zoom level of the map.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"(Map Clicked) Longitude")),(0,l.kt)("td",{parentName:"tr",align:null},"The longitude that where the user clicked last. To be used with the Click signal.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"(Map Clicked) Latitude")),(0,l.kt)("td",{parentName:"tr",align:null},"The latitude that where the user clicked last. o be used with the Click signal.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Marker Id")),(0,l.kt)("td",{parentName:"tr",align:null},"If you have clicked a marker on the map, this port will send the ",(0,l.kt)("inlineCode",{parentName:"td"},"Id")," of the clicked marker.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Width")),(0,l.kt)("td",{parentName:"tr",align:null},"The with of the map container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Height")),(0,l.kt)("td",{parentName:"tr",align:null},"The height of the map container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Screen Position X")),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of pixels between the left side of the window and the left side of the map container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Screen Position Y")),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of pixels between the top of the window and the top side of the map container.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Click")),(0,l.kt)("td",{parentName:"tr",align:null},"Sends a signal when the map is clicked.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Marker Click")),(0,l.kt)("td",{parentName:"tr",align:null},"Sends a signal when a marker is cliked.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Map Loaded")),(0,l.kt)("td",{parentName:"tr",align:null},"Sends a signal when the map has finished loading, after it has been mounted in the app.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Map Moved")),(0,l.kt)("td",{parentName:"tr",align:null},"Sends a signal after the map in view has been moved.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Did Mount")),(0,l.kt)("td",{parentName:"tr",align:null},"Sends a signal when the map has been rendered in the app, before the map has been loaded.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Will Unmount")),(0,l.kt)("td",{parentName:"tr",align:null},"Sends a signal before the map will be removed from the visual tree.")))))}u.isMDXComponent=!0},32562:function(t,e,a){e.Z=a.p+"assets/images/mapbox-map-e973691fe07ba6e2d18b88f653ce7b64.png"},21942:function(t,e,a){e.Z=a.p+"assets/images/marker-data-c5af3ff4c46a28ac900cf876d4f66b03.png"}}]);