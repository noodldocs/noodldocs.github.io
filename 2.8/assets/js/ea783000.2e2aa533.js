"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[9978],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,y=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return r?a.createElement(y,l(l({ref:t},c),{},{components:r})):a.createElement(y,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},13178:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return s}});var a=r(83117),n=r(80102),o=(r(67294),r(3905)),l=["components"],i={hide_title:!0,hide_table_of_contents:!0,title:"Create New Array"},p=void 0,d={unversionedId:"data/array/create-new-array",id:"data/array/create-new-array",title:"Create New Array",description:"Creates a new Array. The outgoing property Id is the id of the newly created array. This can for example be connected to an Array node or Insert Object Into Array Node.",source:"@site/nodes/data/array/create-new-array.md",sourceDirName:"data/array",slug:"/data/array/create-new-array",permalink:"/2.8/nodes/data/array/create-new-array",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Create New Array"},sidebar:"nodeSidebar",previous:{title:"Array",permalink:"/2.8/nodes/data/array/array-node"},next:{title:"Remove From Array",permalink:"/2.8/nodes/data/array/remove-from-array"}},c={},s=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],u={toc:s};function m(e){var t=e.components,i=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h1",{id:"create-new-array"},"Create New Array"),(0,o.kt)("p",null,"Creates a new Array. The outgoing property ",(0,o.kt)("em",{parentName:"p"},"Id")," is the id of the newly created array. This can for example be connected to an ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/array/array-node"},"Array")," node or ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/array/insert-into-array"},"Insert Object Into Array Node"),"."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:r(71725).Z,width:"1665",height:"617"}))),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Items")),(0,o.kt)("td",{parentName:"tr",align:null},"An array containing initial items of the new array. It will be read when the ",(0,o.kt)("em",{parentName:"td"},"Do")," signal is triggered. In other words, the new Array will be a copy of the provided Array, containing the same Objects.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Do")),(0,o.kt)("td",{parentName:"tr",align:null},"Sending a signal to this input creates the new Array. The ",(0,o.kt)("em",{parentName:"td"},"Id")," of the newly created array will be set on the ",(0,o.kt)("em",{parentName:"td"},"Id")," output. Each triggering will create a new Array, hence changing the ",(0,o.kt)("em",{parentName:"td"},"Id")," output.")))),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Id")),(0,o.kt)("td",{parentName:"tr",align:null},"The Id of the newly created Array. You use this Id to refer to the Array.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Done")),(0,o.kt)("td",{parentName:"tr",align:null},"This signal will be sent when the new Array has been created.")))))}m.isMDXComponent=!0},71725:function(e,t,r){t.Z=r.p+"assets/images/create-new-array-b46a2aa8c4eda83e1f1fde7bafe4e60b.png"}}]);