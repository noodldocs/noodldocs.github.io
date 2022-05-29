"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[9978],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(r),m=n,y=s["".concat(p,".").concat(m)]||s[m]||u[m]||l;return r?a.createElement(y,o(o({ref:t},d),{},{components:r})):a.createElement(y,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},83633:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),o=["components"],i={},p=void 0,c={unversionedId:"data/array/create-new-array",id:"data/array/create-new-array",title:"create-new-array",description:"Creates a new Array. The outgoing property Id is the id of the newly created array. This can for example be connected to an Array node or Insert Object Into Array Node.",source:"@site/nodes/data/array/create-new-array.md",sourceDirName:"data/array",slug:"/data/array/create-new-array",permalink:"/2.6/nodes/data/array/create-new-array",tags:[],version:"current",frontMatter:{},sidebar:"nodesSidebar",previous:{title:"array",permalink:"/2.6/nodes/data/array/"},next:{title:"remove-from-array",permalink:"/2.6/nodes/data/array/remove-from-array"}},d=[{value:"Inputs",id:"inputs",children:[],level:2},{value:"Outputs",id:"outputs",children:[],level:2}],u={toc:d};function s(e){var t=e.components,i=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,""),(0,l.kt)("h1",{id:"create-new-array"},"Create New Array"),(0,l.kt)("p",null,"Creates a new Array. The outgoing property ",(0,l.kt)("em",{parentName:"p"},"Id")," is the id of the newly created array. This can for example be connected to an ",(0,l.kt)("a",{parentName:"p",href:"/nodes/data/array/array.md"},"Array")," node or ",(0,l.kt)("a",{parentName:"p",href:"/nodes/data/array/insert-into-array"},"Insert Object Into Array Node"),"."),(0,l.kt)("div",{class:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:r(50601).Z,width:"1665",height:"617"}))),(0,l.kt)("p",null,""),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Items")),(0,l.kt)("td",{parentName:"tr",align:null},"An array containing initial items of the new array. It will be read when the ",(0,l.kt)("em",{parentName:"td"},"Do")," signal is triggered. In other words, the new Array will be a copy of the provided Array, containing the same Objects.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-signal"},"Do")),(0,l.kt)("td",{parentName:"tr",align:null},"Sending a signal to this input creates the new Array. The ",(0,l.kt)("em",{parentName:"td"},"Id")," of the newly created array will be set on the ",(0,l.kt)("em",{parentName:"td"},"Id")," output. Each triggering will create a new Array, hence changing the ",(0,l.kt)("em",{parentName:"td"},"Id")," output.")))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Id")),(0,l.kt)("td",{parentName:"tr",align:null},"The Id of the newly created Array. You use this Id to refer to the Array.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-signal"},"Done")),(0,l.kt)("td",{parentName:"tr",align:null},"This signal will be sent when the new Array has been created.")))))}s.isMDXComponent=!0},50601:function(e,t,r){t.Z=r.p+"assets/images/create-new-array-b46a2aa8c4eda83e1f1fde7bafe4e60b.png"}}]);