"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[3504],{3905:function(t,a,e){e.d(a,{Zo:function(){return s},kt:function(){return u}});var n=e(67294);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function d(t,a){if(null==t)return{};var e,n,l=function(t,a){if(null==t)return{};var e,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(l[e]=t[e]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var p=n.createContext({}),i=function(t){var a=n.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},s=function(t){var a=i(t.components);return n.createElement(p.Provider,{value:a},t.children)},m={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(t,a){var e=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,s=d(t,["components","mdxType","originalType","parentName"]),k=i(e),u=l,N=k["".concat(p,".").concat(u)]||k[u]||m[u]||r;return e?n.createElement(N,o(o({ref:a},s),{},{components:e})):n.createElement(N,o({ref:a},s))}));function u(t,a){var e=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=e.length,o=new Array(r);o[0]=k;var d={};for(var p in a)hasOwnProperty.call(a,p)&&(d[p]=a[p]);d.originalType=t,d.mdxType="string"==typeof t?t:l,o[1]=d;for(var i=2;i<r;i++)o[i]=e[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}k.displayName="MDXCreateElement"},73162:function(t,a,e){e.r(a),e.d(a,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return d},metadata:function(){return i},toc:function(){return m}});var n=e(83117),l=e(80102),r=(e(67294),e(3905)),o=["components"],d={title:"Mapbox Map",hide_title:!0},p=void 0,i={unversionedId:"modules/mapbox/nodes/v2/mapbox-map",id:"modules/mapbox/nodes/v2/mapbox-map",title:"Mapbox Map",description:"This node adds a map to the visual tree, using Mapbox. The map can be both interactive and static.",source:"@site/library/modules/mapbox/nodes/v2/mapbox-map.md",sourceDirName:"modules/mapbox/nodes/v2",slug:"/modules/mapbox/nodes/v2/mapbox-map",permalink:"/2.8/library/modules/mapbox/nodes/v2/mapbox-map",tags:[],version:"current",frontMatter:{title:"Mapbox Map",hide_title:!0},sidebar:"mapboxSidebar",previous:{title:"Take a screenshot",permalink:"/2.8/library/modules/mapbox/guides/screenshot"},next:{title:"Mapbox Marker",permalink:"/2.8/library/modules/mapbox/nodes/v2/mapbox-marker"}},s={},m=[{value:"Inputs",id:"inputs",level:2},{value:"Options",id:"options",level:4},{value:"Other",id:"other",level:4},{value:"Coordinates",id:"coordinates",level:4},{value:"Geolocate",id:"geolocate",level:4},{value:"Controls - Fullscreen",id:"controls---fullscreen",level:4},{value:"Controls - Geocoder",id:"controls---geocoder",level:4},{value:"Controls - Geolocate",id:"controls---geolocate",level:4},{value:"Controls - Navigation",id:"controls---navigation",level:4},{value:"Controls - Scale",id:"controls---scale",level:4},{value:"Controls - Mapbox Draw",id:"controls---mapbox-draw",level:4},{value:"Controls - Mapbox Draw - Controls",id:"controls---mapbox-draw---controls",level:4},{value:"Outputs",id:"outputs",level:2}],k={toc:m};function u(t){var a=t.components,d=(0,l.Z)(t,o);return(0,r.kt)("wrapper",(0,n.Z)({},k,d,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,""),(0,r.kt)("h1",{id:"mapbox-map"},"Mapbox Map"),(0,r.kt)("p",null,"This node adds a map to the visual tree, using ",(0,r.kt)("a",{parentName:"p",href:"https://www.mapbox.com/"},"Mapbox"),". The map can be both interactive and static."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:e(93617).Z,width:"579",height:"513"}))),(0,r.kt)("p",null,""),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("div",{className:"ndl-table-35-65"},(0,r.kt)("h4",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Style")),(0,r.kt)("td",{parentName:"tr",align:null},"A path to a ",(0,r.kt)("a",{parentName:"td",href:"https://docs.mapbox.com/api/maps/styles/"},"Mapbox Style"),".")))),(0,r.kt)("h4",{id:"other"},"Other"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Interactive")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable / Disable any interactions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Anti-alias")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable anti-alias")))),(0,r.kt)("h4",{id:"coordinates"},"Coordinates"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Longitude")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the current active longitude.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Latitude")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the current active latitude.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Zoom")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the current active zoom.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Bearing")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the current active bearing.")))),(0,r.kt)("h4",{id:"geolocate"},"Geolocate"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Center on user")),(0,r.kt)("td",{parentName:"tr",align:null},"Center the map on the user location, this only works with Geolocate enabled.")))),(0,r.kt)("h4",{id:"controls---fullscreen"},"Controls - Fullscreen"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Enable Fullscreen")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable the fullscreen control.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Fullscreen Position")),(0,r.kt)("td",{parentName:"tr",align:null},"Change the control position.")))),(0,r.kt)("h4",{id:"controls---geocoder"},"Controls - Geocoder"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Enable Geocoder")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable the Geocoder control.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Geocoder Position")),(0,r.kt)("td",{parentName:"tr",align:null},"Change the control position.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Placeholder")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the placeholder in the search field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Show Marker")),(0,r.kt)("td",{parentName:"tr",align:null},"Show a marker of the search result location.")))),(0,r.kt)("h4",{id:"controls---geolocate"},"Controls - Geolocate"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Enable Geolocate")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable the Geolocate control.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Geolocate Position")),(0,r.kt)("td",{parentName:"tr",align:null},"Change the control position.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Show Accuracy Circle")),(0,r.kt)("td",{parentName:"tr",align:null},"Show the accuracy circle of the user position.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Show User Heading")),(0,r.kt)("td",{parentName:"tr",align:null},"Show the user heading.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Show User Location")),(0,r.kt)("td",{parentName:"tr",align:null},"Show user location.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Track User Location")),(0,r.kt)("td",{parentName:"tr",align:null},"Track the user location.")))),(0,r.kt)("h4",{id:"controls---navigation"},"Controls - Navigation"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Enable Navigation")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable the Navigation control.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Navigation Position")),(0,r.kt)("td",{parentName:"tr",align:null},"Change the control position.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Show Compass")),(0,r.kt)("td",{parentName:"tr",align:null},"Show the compass button in the control.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Show Zoom")),(0,r.kt)("td",{parentName:"tr",align:null},"Show the plus and minus buttons in the control.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Visualize Pitch")),(0,r.kt)("td",{parentName:"tr",align:null},"Visualize the pitch in the compass.")))),(0,r.kt)("h4",{id:"controls---scale"},"Controls - Scale"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Enable Scale")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable the Scale control.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Scale Position")),(0,r.kt)("td",{parentName:"tr",align:null},"Change the control position.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Max Width")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the max width of the control.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Unit")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the unit the control should display.")))),(0,r.kt)("h4",{id:"controls---mapbox-draw"},"Controls - Mapbox Draw"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Enable Mapbox Draw")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable the Mapbox Draw control.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Mapbox Draw Position")),(0,r.kt)("td",{parentName:"tr",align:null},"Change the control position.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Enable Draw Keybindings")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable Keybindings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Enable Draw Touch")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable Touch inputs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Enable Draw Box Select")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable Box Select.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Display Draw Controls")),(0,r.kt)("td",{parentName:"tr",align:null},"Show the Mapbox Draw controls.")))),(0,r.kt)("h4",{id:"controls---mapbox-draw---controls"},"Controls - Mapbox Draw - Controls"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Points")),(0,r.kt)("td",{parentName:"tr",align:null},"Show the point button.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Line String")),(0,r.kt)("td",{parentName:"tr",align:null},"Show the line string button.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Polygon")),(0,r.kt)("td",{parentName:"tr",align:null},"Show the polygon button.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Trash")),(0,r.kt)("td",{parentName:"tr",align:null},"Show the trash button.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Combine Features")),(0,r.kt)("td",{parentName:"tr",align:null},"Show the combine features button.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Uncombine Features")),(0,r.kt)("td",{parentName:"tr",align:null},"Show the uncombine features button."))))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("div",{className:"ndl-table-35-65"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"(Coordinates) Longitude")),(0,r.kt)("td",{parentName:"tr",align:null},"The current active longitude.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"(Coordinates) Latitude")),(0,r.kt)("td",{parentName:"tr",align:null},"The current active latitude.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"(Coordinates) Zoom")),(0,r.kt)("td",{parentName:"tr",align:null},"The current zoom level of the map")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"(Coordinates) Bearing")),(0,r.kt)("td",{parentName:"tr",align:null},"The current active bearing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"(Map Clicked) Longitude")),(0,r.kt)("td",{parentName:"tr",align:null},"The longitude that where the user clicked last. To be used with the Click signal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"(Map Clicked) Latitude")),(0,r.kt)("td",{parentName:"tr",align:null},"The latitude that where the user clicked last. o be used with the Click signal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Width")),(0,r.kt)("td",{parentName:"tr",align:null},"The with of the map container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Height")),(0,r.kt)("td",{parentName:"tr",align:null},"The height of the map container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Screen Position X")),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of pixels between the left side of the window and the left side of the map container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Screen Position Y")),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of pixels between the top of the window and the top side of the map container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Mapbox Object")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the Mapbox object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Mapbox Draw Object")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the Mapbox Draw object.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Click")),(0,r.kt)("td",{parentName:"tr",align:null},"Sends a signal when the map is clicked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Map Loaded")),(0,r.kt)("td",{parentName:"tr",align:null},"Sends a signal when the map has finished loading, after it has been mounted in the app.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Map Moved")),(0,r.kt)("td",{parentName:"tr",align:null},"Sends a signal after the map in view has been moved.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Did Mount")),(0,r.kt)("td",{parentName:"tr",align:null},"Sends a signal when the map has been rendered in the app, before the map has been loaded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Will Unmount")),(0,r.kt)("td",{parentName:"tr",align:null},"Sends a signal before the map will be removed from the visual tree."))))))}u.isMDXComponent=!0},93617:function(t,a,e){a.Z=e.p+"assets/images/mapbox-marker-1679da9727006130edcdd554897377a9.png"}}]);