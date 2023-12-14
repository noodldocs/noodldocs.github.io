"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[3766],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={hide_title:!0,hide_table_of_contents:!0,title:"Component Object node"},l=void 0,i={unversionedId:"component-utilities/component-object/README",id:"component-utilities/component-object/README",title:"Component Object node",description:"This node is a shared set of properties that can be accessed from a component as well as from any child components. It can be used to implement things such as radio groups, tabs, accordion lists and other visual elements that need to coordinate. It is also a useful general tool for any kind communication between a set of components.",source:"@site/nodes/component-utilities/component-object/README.md",sourceDirName:"component-utilities/component-object",slug:"/component-utilities/component-object/",permalink:"/2.9/nodes/component-utilities/component-object/",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Component Object node"},sidebar:"nodeSidebar",previous:{title:"Component Children node",permalink:"/2.9/nodes/component-utilities/component-children/"},next:{title:"Parent Component Object node",permalink:"/2.9/nodes/component-utilities/parent-component-object/"}},p={},s=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],c={toc:s},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h1",{id:"component-object"},"Component Object"),(0,o.kt)("p",null,"This node is a shared set of properties that can be accessed from a component as well as from any child components. It can be used to implement things such as radio groups, tabs, accordion lists and other visual elements that need to coordinate. It is also a useful general tool for any kind communication between a set of components."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(40631).Z,width:"712",height:"392"}))),(0,o.kt)("p",null,"The ",(0,o.kt)("span",{className:"ndl-node"},"Component Object")," node works much like the ",(0,o.kt)("span",{className:"ndl-node"},(0,o.kt)("a",{parentName:"p",href:"/nodes/data/object/object-node"},"Object"))," node where you add properties that become inputs or outputs to the node."),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(89381).Z,width:"556",height:"292"}))),(0,o.kt)("p",null,"Unlike the ",(0,o.kt)("span",{className:"ndl-node"},(0,o.kt)("a",{parentName:"p",href:"/nodes/data/object/object-node"},"Object"))," node it does not have an ",(0,o.kt)("span",{className:"ndl-data"},"Id"),". Instead all ",(0,o.kt)("span",{className:"ndl-node"},"Component Object")," nodes within the same component share the same data."),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Property name")),(0,o.kt)("td",{parentName:"tr",align:null},"<##input:value-","*","##>The value of a specific property of the Component Object. A Component Object node can have any amount of properties. They must be named in the Property Panel. When this input is changed all other Component Object nodes in the same component are updated. Each property will get one input and output to set/get their current value. See below for more details.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Fetch")),(0,o.kt)("td",{parentName:"tr",align:null},"The fetch signal input can be used to explicitly signal when the data of a ",(0,o.kt)("strong",{parentName:"td"},"Component Object")," should be fetched. If a connection is made to this input the node will not automatically receive changes on it's properties, it will only get the new data when the fetch signal is triggered.")))),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Custom properties")),(0,o.kt)("td",{parentName:"tr",align:null},"<##output:value-","*","##>A Component Object node can have any amount of properties. Each property will get one output to get the current value.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Changed")),(0,o.kt)("td",{parentName:"tr",align:null},"An event is triggered when any of the properties have changed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Fetched")),(0,o.kt)("td",{parentName:"tr",align:null},"An event is triggered on this output when a fetch is completed as a result of a ",(0,o.kt)("strong",{parentName:"td"},"Fetch")," sent on to the node.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Changed Property Signals")),(0,o.kt)("td",{parentName:"tr",align:null},"<##output:changed-","*","##>One changed signal output will be created for every property. They will emit a signal when the property changes value when this or some other ",(0,o.kt)("strong",{parentName:"td"},"Component Object")," or ",(0,o.kt)("a",{parentName:"td",href:"/nodes/component-utilities/parent-component-object"},"Parent Component Object")," node triggers the ",(0,o.kt)("em",{parentName:"td"},"Set")," input.")))))}m.isMDXComponent=!0},89381:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/component-object-props-37d28d4b755c4c48776646ba32b2587e.png"},40631:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/component-object-cb1a1d89b2ffc112dfc04f5f32a0b2ce.png"}}]);