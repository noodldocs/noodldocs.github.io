"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[7374],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52436:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=r(17213),p=["components"],c={title:"Recipe App",hide_title:!0},l=void 0,u={unversionedId:"examples/recipe-app",id:"examples/recipe-app",title:"Recipe App",description:"",source:"@site/library/examples/recipe-app.mdx",sourceDirName:"examples",slug:"/examples/recipe-app",permalink:"/2.6/library/examples/recipe-app",tags:[],version:"current",frontMatter:{title:"Recipe App",hide_title:!0},sidebar:"librarySidebar",previous:{title:"Mapbox Example",permalink:"/2.6/library/examples/mapbox"},next:{title:"Modal Wizard in Popup",permalink:"/2.6/library/examples/modal-wizard"}},s={},m=[],d={toc:m};function f(e){var t=e.components,c=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"recipe-app"},"Recipe App"),(0,a.kt)("p",null,"This is a simple app for managing recipes built to demonstrate how to work with ",(0,a.kt)("a",{parentName:"p",href:"/nodes/data/array/array-node.md"},"Arrays"),". It's not connected to a backend but is using the ",(0,a.kt)("a",{parentName:"p",href:"/nodes/data/array/static-array"},"Static Array")," node. It shows how to add and remove items from an ",(0,a.kt)("strong",{parentName:"p"},"Array")," as well as some simple filtering. It also includes a little bit of ",(0,a.kt)("strong",{parentName:"p"},"Navigation")," logic."),(0,a.kt)("p",null,"To learn more about how it's built you can follow the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/data/arrays"},"Array Guide"),"."),(0,a.kt)("div",{className:"ndl-image-with-background m"},(0,a.kt)("p",null,(0,a.kt)("img",{src:r(50146).Z,width:"798",height:"788"})),(0,a.kt)(i.Z,{zip:"/library/examples/recipe-app/arrays.zip",name:"Recipe App",thumb:"/library/examples/recipe-app/thumbnail-1.png",mdxType:"ImportButton"})))}f.isMDXComponent=!0},17213:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(67294),o=r(39671);function a(e){var t=e.zip,r=e.name,a=e.thumb,i=e.cf;return n.createElement("button",{className:"ndl-import-button",onClick:function(){return(0,o.I)(t,{name:r,thumb:a,cf:i})}})}},39671:function(e,t,r){r.d(t,{I:function(){return o}});var n=r(99782);function o(e,t){var r=[];t&&void 0!==t.name&&r.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&r.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+n.default.baseUrl+t.thumb)),t&&void 0!==t.cf&&r.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+n.default.baseUrl+"/"+t.cf));var o="noodl:import/"+location.protocol+"//"+location.host+n.default.baseUrl+e+(r.length>0?"?"+r.join("&"):"");console.log("Importing into Noodl:",o),console.log(e),window.location.href=o}},50146:function(e,t,r){t.Z=r.p+"assets/images/thumbnail-1-7ba71e79f51d4edd9e089431967c2d23.png"}}]);