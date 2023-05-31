"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[5766],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),u=o,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},59218:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905)),a=r(17213);const l={title:"CRUD Form",hide_title:!0},i="CRUD Form",c={unversionedId:"examples/crud-form",id:"examples/crud-form",title:"CRUD Form",description:"This is an example of a CRUD form. CRUD stands for Create, Read, Update and Delete, and the example shows how to do these actions using the Noodl data nodes.",source:"@site/library/examples/crud-form.mdx",sourceDirName:"examples",slug:"/examples/crud-form",permalink:"/2.8/library/examples/crud-form",draft:!1,tags:[],version:"current",frontMatter:{title:"CRUD Form",hide_title:!0},sidebar:"librarySidebar",previous:{title:"Modal Wizard in Popup",permalink:"/2.8/library/examples/modal-wizard"},next:{title:"Conditional Form",permalink:"/2.8/library/examples/conditional-form"}},p={},s=[],d={toc:s},m="wrapper";function u(e){let{components:t,...l}=e;return(0,o.kt)(m,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"crud-form"},"CRUD Form"),(0,o.kt)("p",null,"This is an example of a CRUD form. CRUD stands for ",(0,o.kt)("em",{parentName:"p"},"Create, Read, Update and Delete"),", and the example shows how to do these actions using the Noodl data nodes.\nThe example is walked through in detail in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/data/ui-controls-and-data"},"UI Controls and Data guide"),"."),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:r(29383).Z,width:"1166",height:"744"})),(0,o.kt)(a.Z,{zip:"/library/examples/crud-form/final-crud-1.zip",name:"Mapbox Example",thumb:"/library/examples/crud-form/final-crud-thumb.png",mdxType:"ImportButton"})))}u.isMDXComponent=!0},17213:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(39671);function a(e){let{zip:t,name:r,thumb:a,cf:l}=e;return n.createElement("button",{className:"ndl-import-button",onClick:()=>(0,o.I)(t,{name:r,thumb:a,cf:l})})}},39671:(e,t,r)=>{r.d(t,{I:()=>o});var n=r(36809);function o(e,t){let r=[];t&&void 0!==t.name&&r.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&r.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+n.default.baseUrl+t.thumb)),t&&void 0!==t.cf&&r.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+n.default.baseUrl+"/"+t.cf));var o="noodl:import/"+location.protocol+"//"+location.host+n.default.baseUrl+e+(r.length>0?"?"+r.join("&"):"");console.log("Importing into Noodl:",o),console.log(e),window.location.href=o}},29383:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/final-crud-thumb-46300c19c6e235b7ebebe3d118a0bf29.png"}}]);