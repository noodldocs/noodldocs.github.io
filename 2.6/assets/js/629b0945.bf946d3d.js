"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[7219],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8071:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return h}});var i=n(83117),o=n(80102),a=(n(67294),n(3905)),r=n(17213),l=n(44996),s=["components"],c={title:"Interacting with the Mapbox Module",hide_title:!0},u=void 0,p={unversionedId:"modules/mapbox/guides/interacting/README",id:"modules/mapbox/guides/interacting/README",title:"Interacting with the Mapbox Module",description:"What you will learn in this guide",source:"@site/library/modules/mapbox/guides/interacting/README.md",sourceDirName:"modules/mapbox/guides/interacting",slug:"/modules/mapbox/guides/interacting/",permalink:"/2.6/library/modules/mapbox/guides/interacting/",tags:[],version:"current",frontMatter:{title:"Interacting with the Mapbox Module",hide_title:!0},sidebar:"mapboxSidebar",previous:{title:"Directions API with the Mapbox Module",permalink:"/2.6/library/modules/mapbox/guides/directions-api/"},next:{title:"Using Markers",permalink:"/2.6/library/modules/mapbox/guides/using-markers/"}},d={},h=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"Getting the position that the user clicked",id:"getting-the-position-that-the-user-clicked",level:2},{value:"Tracking Map Movement",id:"tracking-map-movement",level:2}],m={toc:h};function g(e){var t=e.components,c=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interacting-with-the-mapbox-module"},"Interacting with the Mapbox Module"),(0,a.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,a.kt)("p",null,"This guide will teach you how to implement basic interactions with your Mapbox map using the Mapbox Module."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"If you haven't already looked at the guide for setting up the Mapbox Module, it's recommended to recommended to do that before starting this guide. You can find it ",(0,a.kt)("a",{parentName:"p",href:"/library/modules/mapbox/guides/setting-up"},"here"),"."),(0,a.kt)("p",null,"We will go though the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Getting the latitude and longitude of the position a user clicked on the map."),(0,a.kt)("li",{parentName:"ul"},"Detecting when a user moves the map.")),(0,a.kt)("p",null,"There is also a video walking through the guide."),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/oDGEKKvlD74",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,a.kt)("h2",{id:"getting-the-position-that-the-user-clicked"},"Getting the position that the user clicked"),(0,a.kt)("p",null,"If we start out with the same super simple app as in the previous guide we can start adding some interactions to it."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(38170).Z,width:"2045",height:"1100"}))),(0,a.kt)("p",null,'Let\'s first remove the "Hello World"-text. Instead we replace it with a panel. We will build it using a ',(0,a.kt)("a",{parentName:"p",href:"/nodes/basic-elements/group"},"Group")," node. So add a ",(0,a.kt)("strong",{parentName:"p"},"Group"),' node at the bottom of the node hierarchy. Name it "Popup Panel" for readability.'),(0,a.kt)("div",{className:"ndl-image-with-background"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8453).Z,width:"595",height:"475"}))),(0,a.kt)("p",null,"We want it to float on top of the MapboxMap so change it's ",(0,a.kt)("strong",{parentName:"p"},"Position")," to ",(0,a.kt)("strong",{parentName:"p"},"Absolute"),". Center it and dock it to the bottom using the ",(0,a.kt)("strong",{parentName:"p"},"Layout")," controls. Set a size of 300 pixels wide and 100 pixels high for now. Give it a bottom margin of 20 pixels to give it some space."),(0,a.kt)("div",{className:"ndl-image-with-background s"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(45836).Z,width:"675",height:"1910"}))),(0,a.kt)("p",null,'Also make it white, with rounded corners of 10 pixels and a 2 pixel outline of a dark grey color. Also tick "Shadow Enabled" to make it a little nicer visually.'),(0,a.kt)("div",{className:"ndl-image-with-background s"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(65507).Z,width:"680",height:"1435"}))),(0,a.kt)("p",null,"Now you should have a panel floating on top of the map."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(23866).Z,width:"1657",height:"1210"}))),(0,a.kt)("p",null,"We want to print out the geographical location in the panel, i.e. the latitude and longitude of the position the user clicks."),(0,a.kt)("p",null,'Add two text nodes in the panel. Adjust the padding (horizontally and vertically) of the "Popup Panel" to 10 pixels to give the text some space.'),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(84737).Z,width:"2362",height:"1302"}))),(0,a.kt)("p",null,'Then connect the two outputs "Longitude" and "Latitude" to the respective text. ',(0,a.kt)("em",{parentName:"p"},'Make sure it\'s the one under "Mapped Clicked" Section')," since there are two other similarly named outputs that holds the current panning position of the map."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(22425).Z,width:"1662",height:"1290"}))),(0,a.kt)("p",null,"Now try clicking around in the map. You should see the two texts updating whenever you click."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(32729).Z,width:"1940",height:"1735"}))),(0,a.kt)("h2",{id:"tracking-map-movement"},"Tracking Map Movement"),(0,a.kt)("p",null,"Now let's add some behavior to the panel. We want it to appear from the bottom when the user clicks on the map. Then, when the user starts panning or zooming in the map. To do this we are going to use the ",(0,a.kt)("strong",{parentName:"p"},"Click")," and ",(0,a.kt)("strong",{parentName:"p"},"Map Moved")," signals."),(0,a.kt)("p",null,"First add a ",(0,a.kt)("a",{parentName:"p",href:"/nodes/utilities/logic/states"},"States"),' node that will hold the current state of the panel. Add the states "Off Screen" and "On Screen". Create a value to control in the state, lets call it "Y Position". This is the value that will control the Y position of the panel. It will be 120 when the panel is "Off Screen" (i.e. it will be below the screen). Then it will be 0 when the panel is "On Screen", i.e. it will be back at the bottom of the screen.'),(0,a.kt)("div",{className:"ndl-image-with-background"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(13353).Z,width:"687",height:"2165"}))),(0,a.kt)("p",null,"Finally hook up the outputs ",(0,a.kt)("strong",{parentName:"p"},"Click")," and ",(0,a.kt)("strong",{parentName:"p"},"Map Moved"),' signal to change the state between "On Screen" and "Off Screen". Feed back the output "Y Position" to the ',(0,a.kt)("strong",{parentName:"p"},"Pos Y")," of the panel."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(49089).Z,width:"1545",height:"1132"}))),(0,a.kt)("p",null,"Now you should be able to move around and click on the map, showing and hiding the panel printing the longitude and latitude."),(0,a.kt)("p",null,'If you want to import the final project, click the "Import" button below and follow the instructions.'),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("img",{src:(0,l.Z)("/library/modules/mapbox/guides/interacting/final-result.gif"),className:"ndl-image large"}),(0,a.kt)(r.Z,{zip:"interacting.zip",name:"Mapbox Interactions",thumb:"screen-2.png",mdxType:"ImportButton"})))}g.isMDXComponent=!0},17213:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(67294),o=n(39671);function a(e){var t=e.zip,n=e.name,a=e.thumb,r=e.cf;return i.createElement("button",{className:"ndl-import-button",onClick:function(){return(0,o.I)(t,{name:n,thumb:a,cf:r})}})}},39671:function(e,t,n){n.d(t,{I:function(){return o}});var i=n(99782);function o(e,t){var n=[];t&&void 0!==t.name&&n.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&n.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+i.default.baseUrl+t.thumb)),t&&void 0!==t.cf&&n.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+i.default.baseUrl+"/"+t.cf));var o="noodl:import/"+location.protocol+"//"+location.host+i.default.baseUrl+e+(n.length>0?"?"+n.join("&"):"");console.log("Importing into Noodl:",o),console.log(e),window.location.href=o}},22425:function(e,t,n){t.Z=n.p+"assets/images/connection-1-ced03a49117b0ed17d2338dd3a9c9643.png"},38170:function(e,t,n){t.Z=n.p+"assets/images/initial-state-63d75052cf9420661c8ed9f852396bdc.png"},8453:function(e,t,n){t.Z=n.p+"assets/images/nodes-1-6bcabd0f913fa6d997a11b476e364a5a.png"},49089:function(e,t,n){t.Z=n.p+"assets/images/nodes-2-4af235bb7ce424438c0f65c86288f102.png"},45836:function(e,t,n){t.Z=n.p+"assets/images/popup-panel-1-151c38e611df0f45d591558b3b6b4e35.png"},65507:function(e,t,n){t.Z=n.p+"assets/images/popup-panel-2-595f146c89f3735289706436c45618e0.png"},23866:function(e,t,n){t.Z=n.p+"assets/images/screen-1-03941f209a733914c34b43f567812fe0.png"},32729:function(e,t,n){t.Z=n.p+"assets/images/screen-2-d01b7229549fd4f021cc91ff8bf3c688.png"},84737:function(e,t,n){t.Z=n.p+"assets/images/state-2-0e42e9b6207138e475b34f028bf2facc.png"},13353:function(e,t,n){t.Z=n.p+"assets/images/states-panel-1-2644be253ee1568a7422a1bc84b3bd68.png"}}]);