"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[5766],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},59218:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=n(17213),c=["components"],l={title:"CRUD Form",hide_title:!0},u=void 0,p={unversionedId:"examples/crud-form",id:"examples/crud-form",title:"CRUD Form",description:"",source:"@site/library/examples/crud-form.mdx",sourceDirName:"examples",slug:"/examples/crud-form",permalink:"/2.8/library/examples/crud-form",tags:[],version:"current",frontMatter:{title:"CRUD Form",hide_title:!0},sidebar:"librarySidebar",previous:{title:"Modal Wizard in Popup",permalink:"/2.8/library/examples/modal-wizard"},next:{title:"Conditional Form",permalink:"/2.8/library/examples/conditional-form"}},m={},s=[],d={toc:s};function f(e){var t=e.components,l=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"crud-form"},"CRUD Form"),(0,a.kt)("p",null,"This is an example of a CRUD form. CRUD stands for ",(0,a.kt)("em",{parentName:"p"},"Create, Read, Update and Delete"),", and the example shows how to do these actions using the Noodl data nodes.\nThe example is walked through in detail in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/data/ui-controls-and-data"},"UI Controls and Data guide"),"."),(0,a.kt)("div",{className:"ndl-image-with-background m"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(29383).Z,width:"1166",height:"744"})),(0,a.kt)(i.Z,{zip:"/library/examples/crud-form/final-crud-1.zip",name:"Mapbox Example",thumb:"/library/examples/crud-form/final-crud-thumb.png",mdxType:"ImportButton"})))}f.isMDXComponent=!0},17213:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294),o=n(39671);function a(e){var t=e.zip,n=e.name,a=e.thumb,i=e.cf;return r.createElement("button",{className:"ndl-import-button",onClick:function(){return(0,o.I)(t,{name:n,thumb:a,cf:i})}})}},39671:function(e,t,n){n.d(t,{I:function(){return o}});var r=n(99782);function o(e,t){var n=[];t&&void 0!==t.name&&n.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&n.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+r.default.baseUrl+t.thumb)),t&&void 0!==t.cf&&n.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+r.default.baseUrl+"/"+t.cf));var o="noodl:import/"+location.protocol+"//"+location.host+r.default.baseUrl+e+(n.length>0?"?"+n.join("&"):"");console.log("Importing into Noodl:",o),console.log(e),window.location.href=o}},29383:function(e,t,n){t.Z=n.p+"assets/images/final-crud-thumb-46300c19c6e235b7ebebe3d118a0bf29.png"}}]);