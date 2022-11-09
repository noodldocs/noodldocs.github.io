"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[7374],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52436:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=n(17213),p=["components"],c={title:"Recipe App",hide_title:!0},l="Recipe App",s={unversionedId:"examples/recipe-app",id:"examples/recipe-app",title:"Recipe App",description:"This is a simple app for managing recipes built to demonstrate how to work with Arrays. It's not connected to a backend but is using the Static Array node. It shows how to add and remove items from an Array as well as some simple filtering. It also includes a little bit of Navigation logic.",source:"@site/library/examples/recipe-app.mdx",sourceDirName:"examples",slug:"/examples/recipe-app",permalink:"/2.8/library/examples/recipe-app",tags:[],version:"current",frontMatter:{title:"Recipe App",hide_title:!0},sidebar:"librarySidebar",previous:{title:"Mapbox Example",permalink:"/2.8/library/examples/mapbox"},next:{title:"Modal Wizard in Popup",permalink:"/2.8/library/examples/modal-wizard"}},u={},m=[],d={toc:m};function f(e){var t=e.components,c=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"recipe-app"},"Recipe App"),(0,a.kt)("p",null,"This is a simple app for managing recipes built to demonstrate how to work with ",(0,a.kt)("a",{parentName:"p",href:"/nodes/data/array/array-node"},"Arrays"),". It's not connected to a backend but is using the ",(0,a.kt)("a",{parentName:"p",href:"/nodes/data/array/static-array"},"Static Array")," node. It shows how to add and remove items from an ",(0,a.kt)("strong",{parentName:"p"},"Array")," as well as some simple filtering. It also includes a little bit of ",(0,a.kt)("strong",{parentName:"p"},"Navigation")," logic."),(0,a.kt)("p",null,"To learn more about how it's built you can follow the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/data/arrays"},"Array Guide"),"."),(0,a.kt)("div",{className:"ndl-image-with-background m"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(85250).Z,width:"798",height:"788"})),(0,a.kt)(i.Z,{zip:"/library/examples/recipe-app/arrays.zip",name:"Recipe App",thumb:"/library/examples/recipe-app/thumbnail-1.png",mdxType:"ImportButton"})))}f.isMDXComponent=!0},17213:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294),o=n(39671);function a(e){var t=e.zip,n=e.name,a=e.thumb,i=e.cf;return r.createElement("button",{className:"ndl-import-button",onClick:function(){return(0,o.I)(t,{name:n,thumb:a,cf:i})}})}},39671:function(e,t,n){n.d(t,{I:function(){return o}});var r=n(99782);function o(e,t){var n=[];t&&void 0!==t.name&&n.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&n.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+r.default.baseUrl+t.thumb)),t&&void 0!==t.cf&&n.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+r.default.baseUrl+"/"+t.cf));var o="noodl:import/"+location.protocol+"//"+location.host+r.default.baseUrl+e+(n.length>0?"?"+n.join("&"):"");console.log("Importing into Noodl:",o),console.log(e),window.location.href=o}},85250:function(e,t,n){t.Z=n.p+"assets/images/thumbnail-1-7ba71e79f51d4edd9e089431967c2d23.png"}}]);