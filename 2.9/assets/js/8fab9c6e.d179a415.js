"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[4884],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),u=o,f=d["".concat(s,".").concat(u)]||d[u]||b[u]||a;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},73624:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>b,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={hide_title:!0,hide_table_of_contents:!0,title:"Noodl.Objects"},c="Noodl.Objects",i={unversionedId:"reference/objects/README",id:"reference/objects/README",title:"Noodl.Objects",description:"One step above Variables are Objects,",source:"@site/javascript/reference/objects/README.md",sourceDirName:"reference/objects",slug:"/reference/objects/",permalink:"/2.9/javascript/reference/objects/",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Noodl.Objects"},sidebar:"apiSidebar",previous:{title:"Noodl.Variables",permalink:"/2.9/javascript/reference/variables/"},next:{title:"Noodl.Object",permalink:"/2.9/javascript/reference/object/"}},s={},l=[],p={toc:l},d="wrapper";function b(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"noodlobjects"},"Noodl.Objects"),(0,o.kt)("p",null,"One step above ",(0,o.kt)("strong",{parentName:"p"},"Variable"),"s are ",(0,o.kt)("strong",{parentName:"p"},"Object"),"s,\nthis is a global data model of Noodl objects.\nEach object is referenced with an ",(0,o.kt)("strong",{parentName:"p"},"Id")," and can contain a set of properties.\nYou can access all objects in your workspace through their ",(0,o.kt)("strong",{parentName:"p"},"Id")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Noodl.Objects")," prefix.\nChange a property of an object will trigger all connections from object nodes with the corresponding ",(0,o.kt)("strong",{parentName:"p"},"Id")," and property.\nYou can learn more about objects and how you use them in your Noodl applications ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/data/objects"},"here"),"."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:r(12412).Z,width:"1432",height:"857"}))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// This will change the property MyProperty\n// of object with id MyObjectId and trigger\n// all object nodes (with that id) in your project\nNoodl.Objects.MyObjectId.MyProperty = "Hello";\n\n// Use this notation of that object id contains spaces\nNoodl.Objects["Form Values"].input_text = "Whoops";\n\nNoodl.Objects["Form Values"]["A property with spaces"] = 20;\n\n// Reading an object property\nconsole.log(Noodl.Objects.CurrentUser.Name);\n\n// This will set all properties of the object you assign with\n// to the object with id "SomeId"\n// You cannot set the id property this way,\n// that property will be ignored if part of the object you assign\nNoodl.Objects.SomeId = { ... }\n')))}b.isMDXComponent=!0},12412:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/objects-5d20f903222718395a9b45d722337702.png"}}]);