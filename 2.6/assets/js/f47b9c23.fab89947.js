"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[2865],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39924:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],s={},c="Getting Screen Coordinates of Markers",p={unversionedId:"mapbox/guides/screen-coordinates/README",id:"mapbox/guides/screen-coordinates/README",title:"Getting Screen Coordinates of Markers",description:"This snippet is useful if you want to position something, for example a Noodl Component, on top of a Marker on the Mapbox Map.",source:"@site/modules/mapbox/guides/screen-coordinates/README.md",sourceDirName:"mapbox/guides/screen-coordinates",slug:"/mapbox/guides/screen-coordinates/",permalink:"/2.6/modules/mapbox/guides/screen-coordinates/",tags:[],version:"current",frontMatter:{},sidebar:"mapboxSidebar",previous:{title:"Using Markers in the Mapbox Module",permalink:"/2.6/modules/mapbox/guides/using-markers/"},next:{title:"mapbox-map",permalink:"/2.6/modules/mapbox/mapbox-map"}},l={},u=[{value:"How it works",id:"how-it-works",level:2}],m={toc:u};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-screen-coordinates-of-markers"},"Getting Screen Coordinates of Markers"),(0,a.kt)("p",null,"This snippet is useful if you want to position something, for example a Noodl Component, on top of a Marker on the Mapbox Map."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8187).Z,width:"1550",height:"1200"}))),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"Create a ",(0,a.kt)("a",{parentName:"p",href:"/nodes/javascript/function"},"Function")," node and paste in the code below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const markers = document.querySelectorAll('.mapboxgl-marker')\n\nif (!markers) return\n\nfor (let i = 0; i < markers.length; i++) {\n    let m = markers[i]\n    let markerId = m.getAttribute('data-ndl-marker-id')\n    let rect = m.getBoundingClientRect()\n\n    Noodl.Object.get(markerId).setAll({\n        posX: rect.left,\n        posY: rect.top,\n    })\n}\n\nOutputs.done()\n")),(0,a.kt)("p",null,"When calling ",(0,a.kt)("strong",{parentName:"p"},"Run")," on the ",(0,a.kt)("strong",{parentName:"p"},"Function")," node the screen coordinates will be written to the Marker array, in the two properties ",(0,a.kt)("inlineCode",{parentName:"p"},"posX")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"posY"),". After the operation is finished the ",(0,a.kt)("strong",{parentName:"p"},"Done")," output signal will be triggered."))}d.isMDXComponent=!0},8187:function(e,t,n){t.Z=n.p+"assets/images/meteor-30fc11c25f28a49d9b286ecaf53432bf.png"}}]);