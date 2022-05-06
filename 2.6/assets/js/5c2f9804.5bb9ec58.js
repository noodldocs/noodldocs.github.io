"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[4015],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90260:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],s={title:"Getting Screen Coordinates of Markers",hide_title:!0},c=void 0,l={unversionedId:"modules/mapbox/guides/screen-coordinates/README",id:"modules/mapbox/guides/screen-coordinates/README",title:"Getting Screen Coordinates of Markers",description:"This snippet is useful if you want to position something, for example a Noodl Component, on top of a Marker on the Mapbox Map.",source:"@site/library/modules/mapbox/guides/screen-coordinates/README.md",sourceDirName:"modules/mapbox/guides/screen-coordinates",slug:"/modules/mapbox/guides/screen-coordinates/",permalink:"/2.6/library/modules/mapbox/guides/screen-coordinates/",tags:[],version:"current",frontMatter:{title:"Getting Screen Coordinates of Markers",hide_title:!0},sidebar:"mapboxSidebar",previous:{title:"Using Markers",permalink:"/2.6/library/modules/mapbox/guides/using-markers/"},next:{title:"Mapbox Map",permalink:"/2.6/library/modules/mapbox/mapbox-map"}},p={},u=[{value:"How it works",id:"how-it-works",level:2}],d={toc:u};function m(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-screen-coordinates-of-markers"},"Getting Screen Coordinates of Markers"),(0,a.kt)("p",null,"This snippet is useful if you want to position something, for example a Noodl Component, on top of a Marker on the Mapbox Map."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(91884).Z,width:"1550",height:"1200"}))),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"Create a ",(0,a.kt)("a",{parentName:"p",href:"/nodes/javascript/function"},"Function")," node and paste in the code below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const markers = document.querySelectorAll('.mapboxgl-marker')\n\nif (!markers) return\n\nfor (let i = 0; i < markers.length; i++) {\n    let m = markers[i]\n    let markerId = m.getAttribute('data-ndl-marker-id')\n    let rect = m.getBoundingClientRect()\n\n    Noodl.Object.get(markerId).setAll({\n        posX: rect.left,\n        posY: rect.top,\n    })\n}\n\nOutputs.done()\n")),(0,a.kt)("p",null,"When calling ",(0,a.kt)("strong",{parentName:"p"},"Run")," on the ",(0,a.kt)("strong",{parentName:"p"},"Function")," node the screen coordinates will be written to the Marker array, in the two properties ",(0,a.kt)("inlineCode",{parentName:"p"},"posX")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"posY"),". After the operation is finished the ",(0,a.kt)("strong",{parentName:"p"},"Done")," output signal will be triggered."))}m.isMDXComponent=!0},91884:function(e,t,n){t.Z=n.p+"assets/images/meteor-30fc11c25f28a49d9b286ecaf53432bf.png"}}]);