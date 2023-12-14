"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[9550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return n?o.createElement(f,a(a({ref:t},s),{},{components:n})):o.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=n(87462),r=(n(67294),n(3905)),i=n(17213);const a={title:"Conditional Form",hide_title:!0},l="Conditional Form",c={unversionedId:"examples/conditional-form",id:"examples/conditional-form",title:"Conditional Form",description:"This is an example of a form using Noodl logical nodes to change contents depending on what options the user picks in the form.",source:"@site/library/examples/conditional-form.mdx",sourceDirName:"examples",slug:"/examples/conditional-form",permalink:"/2.9/library/examples/conditional-form",draft:!1,tags:[],version:"current",frontMatter:{title:"Conditional Form",hide_title:!0},sidebar:"librarySidebar",previous:{title:"CRUD Form",permalink:"/2.9/library/examples/crud-form"},next:{title:"Javascript Example",permalink:"/2.9/library/examples/javascript-example"}},p={},s=[],m={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"conditional-form"},"Conditional Form"),(0,r.kt)("p",null,"This is an example of a form using Noodl logical nodes to change contents depending on what options the user picks in the form.\nThe example is walked through in detail in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/business-logic/client-side-biz-logic-nodes"},"Conditional Form with Nodes guide"),"."),(0,r.kt)("div",{className:"ndl-image-with-background m"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(63745).Z,width:"562",height:"825"})),(0,r.kt)(i.Z,{zip:"/library/examples/conditional-form/conditional-form-1.zip",name:"Mapbox Example",thumb:"/library/examples/conditional-form/final-2.png",mdxType:"ImportButton"})))}u.isMDXComponent=!0},17213:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),r=n(39671);function i(e){let{zip:t,name:n,thumb:i,cf:a}=e;return o.createElement("button",{className:"ndl-import-button",onClick:()=>(0,r.I)(t,{name:n,thumb:i,cf:a})})}},39671:(e,t,n)=>{n.d(t,{I:()=>r});var o=n(36809);function r(e,t){let n=[];t&&void 0!==t.name&&n.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&n.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+o.default.baseUrl+t.thumb)),t&&void 0!==t.cf&&n.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+o.default.baseUrl+"/"+t.cf));var r="noodl:import/"+location.protocol+"//"+location.host+o.default.baseUrl+e+(n.length>0?"?"+n.join("&"):"");console.log("Importing into Noodl:",r),console.log(e),window.location.href=r}},63745:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/final-2-dd900ac05a1af8d5747488c073d21f05.png"}}]);