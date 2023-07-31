"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[7762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={hide_title:!0,hide_table_of_contents:!0,title:"Repeater Item"},l=void 0,i={unversionedId:"ui-controls/repeater-item",id:"ui-controls/repeater-item",title:"Repeater Item",description:"This node contains a set of useful utilities for components that have been dynamically created by a Repeater node.",source:"@site/nodes/ui-controls/repeater-item.md",sourceDirName:"ui-controls",slug:"/ui-controls/repeater-item",permalink:"/2.9/nodes/ui-controls/repeater-item",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Repeater Item"},sidebar:"nodeSidebar",previous:{title:"Repeater",permalink:"/2.9/nodes/ui-controls/repeater"},next:{title:"Object",permalink:"/2.9/nodes/data/object/object-node"}},p={},s=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],d={toc:s},c="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"repeater-item"},"Repeater Item"),(0,r.kt)("p",null,"This node contains a set of useful utilities for components that have been dynamically created by a ",(0,r.kt)("span",{className:"ndl-node"},"Repeater")," node."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(12142).Z,width:"964",height:"262"}))),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Remove Completed")),(0,r.kt)("td",{parentName:"tr",align:null},"Send a signal, after ",(0,r.kt)("em",{parentName:"td"},"Try Remove")," has been sent and any remove animation is completed. This will remove the component from its parent. See ",(0,r.kt)("em",{parentName:"td"},"Try Remove")," below to learn more.")))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Item Id")),(0,r.kt)("td",{parentName:"tr",align:null},"The object ",(0,r.kt)("em",{parentName:"td"},"Id")," for this component.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Added")),(0,r.kt)("td",{parentName:"tr",align:null},"When a new object is added to an array, any connected ",(0,r.kt)("a",{parentName:"td",href:"/nodes/ui-controls/repeater"},"Repeater")," node will create a new component. This component will get the ",(0,r.kt)("em",{parentName:"td"},"Added")," signal. Useful for playing animations or changing states.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Try Remove")),(0,r.kt)("td",{parentName:"tr",align:null},"When an object is removed from am array, any connected ",(0,r.kt)("a",{parentName:"td",href:"/nodes/ui-controls/repeater"},"Repeater")," node will remove the component it created for that object. If this signal is connected the ",(0,r.kt)("em",{parentName:"td"},"Remove Completed")," input should be used to signal when animations are complete.")))))}m.isMDXComponent=!0},12142:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/repeater-item-d8d99f3c615af9c219d7e7d4b32b5b8e.png"}}]);