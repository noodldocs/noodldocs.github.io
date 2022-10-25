"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[3864],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80691:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=n(17213),s=n(44996),l=["components"],p={title:"Using Markers",hide_title:!0},d="Using Markers in the Mapbox Module",c={unversionedId:"modules/mapbox/guides/using-markers/README",id:"modules/mapbox/guides/using-markers/README",title:"Using Markers",description:"What you will learn in this guide",source:"@site/library/modules/mapbox/guides/using-markers/README.md",sourceDirName:"modules/mapbox/guides/using-markers",slug:"/modules/mapbox/guides/using-markers/",permalink:"/2.7/library/modules/mapbox/guides/using-markers/",tags:[],version:"current",frontMatter:{title:"Using Markers",hide_title:!0},sidebar:"mapboxSidebar",previous:{title:"Interacting with the Mapbox Module",permalink:"/2.7/library/modules/mapbox/guides/interacting/"},next:{title:"Getting Screen Coordinates of Markers",permalink:"/2.7/library/modules/mapbox/guides/screen-coordinates/"}},u={},m=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"Markers",id:"markers",level:2},{value:"Capturing when the user clicks a marker",id:"capturing-when-the-user-clicks-a-marker",level:2},{value:"Removing Markers",id:"removing-markers",level:2}],h={toc:m};function k(e){var t=e.components,p=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},h,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-markers-in-the-mapbox-module"},"Using Markers in the Mapbox Module"),(0,o.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,o.kt)("p",null,"This guide will teach you how to add and remove markers to your Mapboc Map in Noodl."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This guide will walk you through the following steps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Adding markers to the map"),(0,o.kt)("li",{parentName:"ul"},"Capturing when the user clicks a marker"),(0,o.kt)("li",{parentName:"ul"},"Removing markers from the map")),(0,o.kt)("p",null,"The guide will build on the two previous Mapbox guides, ",(0,o.kt)("a",{parentName:"p",href:"/library/modules/mapbox/guides/setting-up"},"Setting up Mapbox module")," and ",(0,o.kt)("a",{parentName:"p",href:"/library/modules/mapbox/guides/interacting"},"Interacting with the Mapbox Module"),". It's recommended that you read those guides first, if you haven't already."),(0,o.kt)("p",null,"The guide will build upon the example from the previous guides. You can import the result from the previous guide by clicking the import button below. Don't forget to set the correct Access Token that you got from your Mapbox account."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("img",{src:(0,s.Z)("library/modules/mapbox/guides/interacting/final-result.gif"),className:"ndl-image large"}),(0,o.kt)(i.Z,{zip:"interacting.zip",name:"Mapbox Interactions",thumb:"screen-2.png",mdxType:"ImportButton"})),(0,o.kt)("p",null,"There is also a video walking through the guide."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/LBh51xy9n7k",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,o.kt)("h2",{id:"markers"},"Markers"),(0,o.kt)("p",null,"Markers are used to mark points in the map. They can be anywhere on the map."),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(56130).Z,width:"662",height:"687"}))),(0,o.kt)("p",null,"A marker can either be represented by the default icon, or you can use a custom image instead. In this guide we will go with the default icon. The default icon can also have a color of your choice."),(0,o.kt)("p",null,"Markers are fed to the Mapbox module through an ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/array/array-node"},"Array"),". Each ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/object/object-node"},"Object")," in the ",(0,o.kt)("strong",{parentName:"p"},"Array")," should be of the format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "Lat":<the latitude>,\n    "Lon":<the longitude>,\n    "Color":<the color, e.g, "White" or as hex-string "#ffffff". Only used with the default icon.>\n}\n')),(0,o.kt)("p",null,"Let's change our App so you add a marker whenever you click on the map.\nFirst we add an ",(0,o.kt)("strong",{parentName:"p"},"Array")," node. Give it the ",(0,o.kt)("strong",{parentName:"p"},"id")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Map Markers"),"."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(96611).Z,width:"675",height:"370"}))),(0,o.kt)("p",null,"This will feed the markers to the ",(0,o.kt)("strong",{parentName:"p"},"Mapbox")," node, so connect its output ",(0,o.kt)("strong",{parentName:"p"},"Items")," to the ",(0,o.kt)("strong",{parentName:"p"},"Markers")," input on the ",(0,o.kt)("strong",{parentName:"p"},"Mapbox")," node."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(94874).Z,width:"1655",height:"1345"}))),(0,o.kt)("p",null,"Now we need to add new ",(0,o.kt)("strong",{parentName:"p"},"Objects")," to the ",(0,o.kt)("strong",{parentName:"p"},"Array")," whenever the user clicks on the map. Add a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/object/create-new-object"},"Create New Object")," node and make sure you can set the three properties ",(0,o.kt)("inlineCode",{parentName:"p"},"Lon")," (Number), ",(0,o.kt)("inlineCode",{parentName:"p"},"Lat")," (Number) and ",(0,o.kt)("inlineCode",{parentName:"p"},"Color")," (String) when you create it."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(34898).Z,width:"1792",height:"1332"}))),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(71643).Z,width:"692",height:"1312"}))),(0,o.kt)("p",null,"We want to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"Lat")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Lon")," to the position the user clicks, so connect the ",(0,o.kt)("inlineCode",{parentName:"p"},"Latitude")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Longitude")," outputs from the Mapbox to the them. We can hard code the color to ",(0,o.kt)("inlineCode",{parentName:"p"},"Black")," for now, so just enter ",(0,o.kt)("inlineCode",{parentName:"p"},"Black")," directly in the properties panel of the ",(0,o.kt)("strong",{parentName:"p"},"Create New Object")," node. Then we connect the ",(0,o.kt)("strong",{parentName:"p"},"Click")," event from the ",(0,o.kt)("strong",{parentName:"p"},"Mapbox Map")," node to the ",(0,o.kt)("strong",{parentName:"p"},"Do")," signal of the ",(0,o.kt)("strong",{parentName:"p"},"Create New Object")," node."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(57152).Z,width:"2015",height:"1500"}))),(0,o.kt)("p",null,"The newly created ",(0,o.kt)("strong",{parentName:"p"},"Object")," need to be added to the ",(0,o.kt)("strong",{parentName:"p"},"Array")," that holds the markers. So by adding a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/array/insert-into-array"},"Insert Object Into Array")," node, connecting the ",(0,o.kt)("strong",{parentName:"p"},"Done")," signal from the ",(0,o.kt)("strong",{parentName:"p"},"Create new Object Node")," to ",(0,o.kt)("strong",{parentName:"p"},"Do")," and also connecting the ",(0,o.kt)("strong",{parentName:"p"},"Id")," to ",(0,o.kt)("strong",{parentName:"p"},"Object Id")," we are almost done. We just need to make sure the insert happens in the correct ",(0,o.kt)("strong",{parentName:"p"},"Array"),". So either hardcode the ",(0,o.kt)("strong",{parentName:"p"},"Array Id")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Map Markers"),", or connect the ",(0,o.kt)("strong",{parentName:"p"},"Id")," of the ",(0,o.kt)("strong",{parentName:"p"},"Array")," to the ",(0,o.kt)("strong",{parentName:"p"},"Array Id")," of the ",(0,o.kt)("strong",{parentName:"p"},"Insert Object Into Array")," node."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(34307).Z,width:"2622",height:"1475"}))),(0,o.kt)("p",null,"If everything was done correctly, you should now be able to place black markers on the map."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(46566).Z,width:"2095",height:"1742"}))),(0,o.kt)("h2",{id:"capturing-when-the-user-clicks-a-marker"},"Capturing when the user clicks a marker"),(0,o.kt)("p",null,"Next step is to be able to do something when the user clicks a marker. So we need to differentiate between clicking on the map and clicking on a marker. Conveniently there is an additional outgoing signal on the ",(0,o.kt)("strong",{parentName:"p"},"Mapbox Map")," node called ",(0,o.kt)("strong",{parentName:"p"},"Marker Click"),". Another signal will be important too, the ",(0,o.kt)("strong",{parentName:"p"},"Marker Id")," output that will contain the ",(0,o.kt)("strong",{parentName:"p"},"Id")," of the ",(0,o.kt)("strong",{parentName:"p"},"Object")," in the marker ",(0,o.kt)("strong",{parentName:"p"},"Array")," that represents the clicked marker."),(0,o.kt)("p",null,"So let's change up the logic slightly, so the panel either shows the marker that was clicked, or the newly created marker if the user didn't click the marker but on the map instead."),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/variable/variable-node"},"Variable")," and ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/variable/set-variable"},"Set Variable")," node and some logic around that, we make sure a ",(0,o.kt)("strong",{parentName:"p"},"Variable")," holds the current marker. See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/data/variables"},"guide")," on using ",(0,o.kt)("strong",{parentName:"p"},"Variables")," if you want to know more about how to use them.\nAlso, the ",(0,o.kt)("strong",{parentName:"p"},"Marker Click")," signal now makes the panel visible as well. The full node design can be seen below."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(63777).Z,width:"2792",height:"1982"}))),(0,o.kt)("p",null,"Finally, let's update the panel logic. We want to make sure the latitude/longitude values comes from the marker and not from where you clicked on the map. It won't make a difference now, but we might want to capture more information in the marker to show in the panel, so this is a better design."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Current Marker")," Variable holds the ",(0,o.kt)("strong",{parentName:"p"},"Id")," of the current marker, so just connect it to an ",(0,o.kt)("strong",{parentName:"p"},"Object")," and take out the ",(0,o.kt)("inlineCode",{parentName:"p"},"Lon")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Lat")," properties from it. The updated design is shown below."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(68230).Z,width:"2645",height:"2042"}))),(0,o.kt)("h2",{id:"removing-markers"},"Removing Markers"),(0,o.kt)("p",null,"Finally we want to be able to remove markers. It's very easy, just remove them from the Marker ",(0,o.kt)("strong",{parentName:"p"},"Array"),".\nSo let's add a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/ui-controls/button"},"Button")," to the panel. Remove its label and instead add an icon that represents \"delete\". Also make it smaller by adapting its padding and size. Finally make it red so it's clear it's a destructive action."),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(45724).Z,width:"645",height:"1580"}))),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(72013).Z,width:"692",height:"1760"}))),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(34137).Z,width:"1512",height:"1732"}))),(0,o.kt)("p",null,"We connect the functionality for the button. We add a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/array/remove-from-array"},"Remove Object From Array")," node and make sure the ",(0,o.kt)("strong",{parentName:"p"},"Object Id")," is what's stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Current Marker")," ",(0,o.kt)("strong",{parentName:"p"},"Variable")," and the ",(0,o.kt)("strong",{parentName:"p"},"Array Id")," comes the same ",(0,o.kt)("strong",{parentName:"p"},"Id")," as the ",(0,o.kt)("inlineCode",{parentName:"p"},"Map Markers")," ",(0,o.kt)("strong",{parentName:"p"},"Array"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Click")," signal from the ",(0,o.kt)("strong",{parentName:"p"},"Button")," is connected to ",(0,o.kt)("strong",{parentName:"p"},"Do")," on the ",(0,o.kt)("strong",{parentName:"p"},"Remove Object From Array")," node. Finally we also close the panel when the removal is ",(0,o.kt)("strong",{parentName:"p"},"Done"),"."),(0,o.kt)("p",null,'This is what the final node construct looks like. If you want to import the final project click the "Import" button:'),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("img",{src:(0,s.Z)("library/modules/mapbox/guides/using-markers/nodes-7.png"),className:"ndl-image large"}),(0,o.kt)(i.Z,{zip:"markers.zip",name:"Mapbox Markers",thumb:"screen-3.png",mdxType:"ImportButton"})))}k.isMDXComponent=!0},17213:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(39671);function o(e){var t=e.zip,n=e.name,o=e.thumb,i=e.cf;return a.createElement("button",{className:"ndl-import-button",onClick:function(){return(0,r.I)(t,{name:n,thumb:o,cf:i})}})}},39671:function(e,t,n){n.d(t,{I:function(){return r}});var a=n(99782);function r(e,t){var n=[];t&&void 0!==t.name&&n.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&n.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+a.default.baseUrl+t.thumb)),t&&void 0!==t.cf&&n.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+a.default.baseUrl+"/"+t.cf));var r="noodl:import/"+location.protocol+"//"+location.host+a.default.baseUrl+e+(n.length>0?"?"+n.join("&"):"");console.log("Importing into Noodl:",r),console.log(e),window.location.href=r}},45724:function(e,t,n){t.Z=n.p+"assets/images/button-1-4ece438f07c2122b6df0edb50139bf0d.png"},72013:function(e,t,n){t.Z=n.p+"assets/images/button-panel-1-4c82a61750f3f5fe200af03745b8a8a4.png"},56130:function(e,t,n){t.Z=n.p+"assets/images/markers-1-b19b135f8477414fe2d67b1f89ee7523.png"},94874:function(e,t,n){t.Z=n.p+"assets/images/nodes-1-e179d417b34f2deb8d9f642dbc9628c6.png"},34898:function(e,t,n){t.Z=n.p+"assets/images/nodes-2-c36d0f81c9e9d458acca6584f7d17eed.png"},57152:function(e,t,n){t.Z=n.p+"assets/images/nodes-3-580275b94679bcc5511aede097bed830.png"},34307:function(e,t,n){t.Z=n.p+"assets/images/nodes-4-7833e8f53229daca2092cd964b58ccf2.png"},63777:function(e,t,n){t.Z=n.p+"assets/images/nodes-5-7a4776bf1ca49fc3c2d15d4fbb0faff4.png"},68230:function(e,t,n){t.Z=n.p+"assets/images/nodes-6-9e584c6af7b39c123afabc205bb234a8.png"},96611:function(e,t,n){t.Z=n.p+"assets/images/panel-1-dc1d16ec582df4a270cdcf4184470292.png"},71643:function(e,t,n){t.Z=n.p+"assets/images/panel-2-8dc53bc96ceeea7c457e4934c95e7c9e.png"},46566:function(e,t,n){t.Z=n.p+"assets/images/screen-2-ca1273b42d183e07d0d56d77eea2a172.png"},34137:function(e,t,n){t.Z=n.p+"assets/images/screen-3-4f789daa7f8b7000c59f5018ff33b86a.png"}}]);