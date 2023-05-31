"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[2489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,v=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={hide_title:!0,hide_table_of_contents:!0,title:"Inverter"},i=void 0,o={unversionedId:"logic/inverter",id:"logic/inverter",title:"Inverter",description:"This node changes true values to be false, and false values to be true. It is identical to a logic NOT operation.",source:"@site/nodes/logic/inverter.md",sourceDirName:"logic",slug:"/logic/inverter",permalink:"/2.8/nodes/logic/inverter",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Inverter"},sidebar:"nodeSidebar",previous:{title:"Condition",permalink:"/2.8/nodes/utilities/logic/condition"},next:{title:"Send Event",permalink:"/2.8/nodes/events/send-event"}},s={},d=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Advanced",id:"advanced",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"inverter"},"Inverter"),(0,r.kt)("p",null,"This node changes ",(0,r.kt)("span",{className:"ndl-data"},"true")," values to be ",(0,r.kt)("span",{className:"ndl-data"},"false"),", and ",(0,r.kt)("span",{className:"ndl-data"},"false")," values to be ",(0,r.kt)("span",{className:"ndl-data"},"true"),". It is identical to a logic NOT operation."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(75399).Z,width:"1011",height:"360"}))),(0,r.kt)("p",null,"The ",(0,r.kt)("span",{className:"ndl-node"},"Inverter")," node runs JavaScript in the background and interprets truthy and falsy values in the same fashion. It is equal to creating an ",(0,r.kt)("span",{className:"ndl-node"},"Expression")," node with the expression ",(0,r.kt)("inlineCode",{parentName:"p"},"!value"),"."),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Value")),(0,r.kt)("td",{parentName:"tr",align:null},"The value to invert.")))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Result")),(0,r.kt)("td",{parentName:"tr",align:null},"The result of inverting the input ",(0,r.kt)("em",{parentName:"td"},"Value"),". This is equal to either ",(0,r.kt)("em",{parentName:"td"},"True")," or ",(0,r.kt)("em",{parentName:"td"},"False"))))),(0,r.kt)("h2",{id:"advanced"},"Advanced"),(0,r.kt)("p",null,"The inverter is equal to creating the following expression:\n",(0,r.kt)("inlineCode",{parentName:"p"},"!value")," ."))}u.isMDXComponent=!0},75399:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/inverter_node-03edfbbc949c71e576ed0250d5d51be8.png"}}]);