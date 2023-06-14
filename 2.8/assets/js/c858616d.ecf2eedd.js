"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[3798],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=l,b=m["".concat(i,".").concat(c)]||m[c]||d[c]||r;return a?n.createElement(b,o(o({ref:t},u),{},{components:a})):n.createElement(b,o({ref:t},u))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:l,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},40384:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const r={title:"Mapbox Styles",hide_title:!0},o="Mapbox Styles",s={unversionedId:"modules/mapbox/guides/styles",id:"modules/mapbox/guides/styles",title:"Mapbox Styles",description:"Mapbox styles are a collection of rules that define how a map is displayed. They include information about the map's layout, colors, labels, and symbols. Mapbox styles are used to create maps that are visually appealing and easy to read.",source:"@site/library/modules/mapbox/guides/styles.md",sourceDirName:"modules/mapbox/guides",slug:"/modules/mapbox/guides/styles",permalink:"/2.8/library/modules/mapbox/guides/styles",draft:!1,tags:[],version:"current",frontMatter:{title:"Mapbox Styles",hide_title:!0},sidebar:"mapboxSidebar",previous:{title:"Directions API with the Mapbox Module",permalink:"/2.8/library/modules/mapbox/guides/directions-api/"},next:{title:"Take a screenshot",permalink:"/2.8/library/modules/mapbox/guides/screenshot"}},i={},p=[{value:"Prebuilt Styles",id:"prebuilt-styles",level:2},{value:"Custom Styles",id:"custom-styles",level:2},{value:"Style Object",id:"style-object",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mapbox-styles"},"Mapbox Styles"),(0,l.kt)("p",null,"Mapbox styles are a collection of rules that define how a map is displayed. They include information about the map's layout, colors, labels, and symbols. Mapbox styles are used to create maps that are visually appealing and easy to read."),(0,l.kt)("p",null,"They can be customized to meet the needs of different users and applications, and can be used with Mapbox's suite of mapping tools to create interactive maps for web and mobile applications. Mapbox styles are based on the Mapbox Style Specification, which is an open-source specification for designing and sharing map styles."),(0,l.kt)("div",{className:"ndl-image-with-background"},(0,l.kt)("p",null,(0,l.kt)("img",{src:a(18958).Z,width:"960",height:"960"}))),(0,l.kt)("h2",{id:"prebuilt-styles"},"Prebuilt Styles"),(0,l.kt)("p",null,"Mapbox have a few prebuilt styles, here are a few of them:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Streets: A classic style that emphasizes roads, parks, and other features of urban areas."),(0,l.kt)("li",{parentName:"ul"},"Outdoors: Designed for outdoor enthusiasts, this style includes topographic lines, hiking trails, and other natural features."),(0,l.kt)("li",{parentName:"ul"},"Light: A minimalist style that focuses on the essentials of a map, with a light color scheme that's easy on the eyes."),(0,l.kt)("li",{parentName:"ul"},"Dark: A more dramatic version of the Light style, with a dark color scheme that's perfect for nighttime maps."),(0,l.kt)("li",{parentName:"ul"},"Satellite: This style uses satellite imagery to show real-world views of the Earth's surface, and is often used for mapping remote areas or monitoring changes in the environment."),(0,l.kt)("li",{parentName:"ul"},"Navigation: A style optimized for driving and navigation, with a focus on road networks and landmarks.")),(0,l.kt)("p",null,"You can find them ",(0,l.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/api/maps/styles/#mapbox-styles"},"here"),". Here is the same list with the styles:"),(0,l.kt)("div",{className:"ndl-table-35-65"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Style"),(0,l.kt)("th",{parentName:"tr",align:null},"Source"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Streets"),(0,l.kt)("td",{parentName:"tr",align:null},"mapbox://styles/mapbox/streets-v12")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Outdoors"),(0,l.kt)("td",{parentName:"tr",align:null},"mapbox://styles/mapbox/outdoors-v12")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Light"),(0,l.kt)("td",{parentName:"tr",align:null},"mapbox://styles/mapbox/light-v11")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dark"),(0,l.kt)("td",{parentName:"tr",align:null},"mapbox://styles/mapbox/dark-v11")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Satellite"),(0,l.kt)("td",{parentName:"tr",align:null},"mapbox://styles/mapbox/satellite-v9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Satellite Streets"),(0,l.kt)("td",{parentName:"tr",align:null},"mapbox://styles/mapbox/satellite-streets-v12")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Navigation Day"),(0,l.kt)("td",{parentName:"tr",align:null},"mapbox://styles/mapbox/navigation-day-v1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Navigation Night"),(0,l.kt)("td",{parentName:"tr",align:null},"mapbox://styles/mapbox/navigation-night-v1"))))),(0,l.kt)("h2",{id:"custom-styles"},"Custom Styles"),(0,l.kt)("p",null,"You can also use ",(0,l.kt)("a",{parentName:"p",href:"https://www.mapbox.com/mapbox-studio"},"Mapbox Studio")," to create your own custom styles."),(0,l.kt)("p",null,"In Mapbox Studio you will get a link which should be passed into ",(0,l.kt)("inlineCode",{parentName:"p"},"Style"),", and you will have the custom style."),(0,l.kt)("h2",{id:"style-object"},"Style Object"),(0,l.kt)("p",null,'Looking at the Mapbox "Add a video" example, which can be ',(0,l.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/example/video-on-a-map/"},"here"),"."),(0,l.kt)("p",null,"In this example a Javascript object is used to create the style."),(0,l.kt)("p",null,"Here is how we can recreate this example in Noodl."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a Function node, with this code:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'Outputs.MapStyle = JSON.stringify({\n  version: 8,\n  sources: {\n    satellite: {\n      type: "raster",\n      url: "mapbox://mapbox.satellite",\n      tileSize: 256,\n    },\n    video: {\n      type: "video",\n      urls: [\n        "https://static-assets.mapbox.com/mapbox-gl-js/drone.mp4",\n        "https://static-assets.mapbox.com/mapbox-gl-js/drone.webm",\n      ],\n      coordinates: [\n        [-122.51596391201019, 37.56238816766053],\n        [-122.51467645168304, 37.56410183312965],\n        [-122.51309394836426, 37.563391708549425],\n        [-122.51423120498657, 37.56161849366671],\n      ],\n    },\n  },\n  layers: [\n    {\n      id: "background",\n      type: "background",\n      paint: {\n        "background-color": "rgb(4,7,14)",\n      },\n    },\n    {\n      id: "satellite",\n      type: "raster",\n      source: "satellite",\n    },\n    {\n      id: "video",\n      type: "raster",\n      source: "video",\n    },\n  ],\n});\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Connect the ",(0,l.kt)("inlineCode",{parentName:"p"},"MapStyle")," output to the Mapbox ",(0,l.kt)("inlineCode",{parentName:"p"},"Style")," input. And you will now have the style with a video.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"To pause and play the video, like in the example."))),(0,l.kt)("p",null,"We create another Function node with this code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const mapboxObject = Inputs.Map;\nconst playOrPause = Inputs.PlayOrPause;\n\nif (!mapboxObject) return;\n\nif (playOrPause) {\n  mapboxObject.getSource("video").play();\n} else {\n  mapboxObject.getSource("video").pause();\n}\n')),(0,l.kt)("p",null,"And connect it to a Switch node, like in this picture:"),(0,l.kt)("div",{className:"ndl-image-with-background"},(0,l.kt)("p",null,(0,l.kt)("img",{src:a(78219).Z,width:"1527",height:"1041"}))),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Now we have replicated the example by Mapbox.")))}d.isMDXComponent=!0},18958:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/preview-042fbe4c2339cf39b77195f2e3bae847.png"},78219:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/video-nodegraph-e853d15e77b29aa625241ce7e1a692c1.png"}}]);