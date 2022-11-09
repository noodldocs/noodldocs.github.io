"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[8],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,g=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},54676:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],c={title:"Rating",hide_title:!0},s="Rating",l={unversionedId:"prefabs/rating/README",id:"prefabs/rating/README",title:"Rating",description:"A UI component for selecting a rating from 1 to 5 with stars. Adding more starts or a different scale can easily be modified in the component. This UI component uses the Icon node to show the stars, and can be changed to other icons as well like hearts, smileys, etc. if preferred.",source:"@site/library/prefabs/rating/README.md",sourceDirName:"prefabs/rating",slug:"/prefabs/rating/",permalink:"/2.8/library/prefabs/rating/",tags:[],version:"current",frontMatter:{title:"Rating",hide_title:!0},sidebar:"ratingSidebar"},p={},u=[],f={toc:u};function d(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rating"},"Rating"),(0,a.kt)("p",null,"A UI component for selecting a rating from 1 to 5 with stars. Adding more starts or a different scale can easily be modified in the component. This UI component uses the ",(0,a.kt)("strong",{parentName:"p"},"Icon node")," to show the stars, and can be changed to other icons as well like hearts, smileys, etc. if preferred."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8747).Z,width:"680",height:"384"}))),(0,a.kt)("p",null,"After cloning the prefab you will see a logic component called ",(0,a.kt)("strong",{parentName:"p"},"Rating")," in your project. Place it into the dom-tree to render it. "),(0,a.kt)("p",null,"You can both set a rating to be displayed via the ",(0,a.kt)("strong",{parentName:"p"},"Rating Input"),", and get the selected rating from the ",(0,a.kt)("strong",{parentName:"p"},"Rating Output")," as shown on the image below."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Rating")," output is a number between 1-5 by default. "),(0,a.kt)("div",{className:"ndl-image-with-background xl"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(69079).Z,width:"1644",height:"408"}))))}d.isMDXComponent=!0},8747:function(e,t,n){t.Z=n.p+"assets/images/rating-b8c72930e3977e012fe55d5562d3e365.png"},69079:function(e,t,n){t.Z=n.p+"assets/images/rating_example-0920ab08e57403c7846ee5f136053965.png"}}]);