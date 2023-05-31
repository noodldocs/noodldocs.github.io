"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[6224],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=p(a),u=r,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||l;return a?n.createElement(h,i(i({ref:e},d),{},{components:a})):n.createElement(h,i({ref:e},d))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},12971:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={hide_title:!0,hide_table_of_contents:!0,title:"Switch"},i=void 0,o={unversionedId:"logic/switch",id:"logic/switch",title:"Switch",description:"This node holds a boolean state. It is either true (on) or false (off).",source:"@site/nodes/logic/switch.md",sourceDirName:"logic",slug:"/logic/switch",permalink:"/2.8/nodes/logic/switch",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Switch"},sidebar:"nodeSidebar",previous:{title:"Boolean To String",permalink:"/2.8/nodes/utilities/boolean-to-string"},next:{title:"And",permalink:"/2.8/nodes/logic/and"}},s={},p=[{value:"Inputs",id:"inputs",level:2},{value:"Change state",id:"change-state",level:3},{value:"Outputs",id:"outputs",level:2}],d={toc:p},c="wrapper";function m(t){let{components:e,...l}=t;return(0,r.kt)(c,(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"switch"},"Switch"),(0,r.kt)("p",null,"This node holds a ",(0,r.kt)("span",{className:"ndl-data"},"boolean")," state. It is either ",(0,r.kt)("span",{className:"ndl-data"},"true")," (on) or ",(0,r.kt)("span",{className:"ndl-data"},"false")," (off)."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(61576).Z,width:"640",height:"300"}))),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("h3",{id:"change-state"},"Change state"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"On")),(0,r.kt)("td",{parentName:"tr",align:null},"Sending a signal to this input sets the state of the ",(0,r.kt)("strong",{parentName:"td"},"Switch")," to ",(0,r.kt)("em",{parentName:"td"},"On"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Off")),(0,r.kt)("td",{parentName:"tr",align:null},"Sending a signal to this input sets the state of the ",(0,r.kt)("strong",{parentName:"td"},"Switch")," to ",(0,r.kt)("em",{parentName:"td"},"Off"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Flip")),(0,r.kt)("td",{parentName:"tr",align:null},"Sending a signal to this input sets the ",(0,r.kt)("strong",{parentName:"td"},"Switch")," to the opposite of its current state. If it is ",(0,r.kt)("em",{parentName:"td"},"On")," flip will set it to ",(0,r.kt)("em",{parentName:"td"},"Off")," and vice versa.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Start State")),(0,r.kt)("td",{parentName:"tr",align:null},"The starting state of the ",(0,r.kt)("strong",{parentName:"td"},"Switch"),". If the ",(0,r.kt)("em",{parentName:"td"},"Start State")," is set to ",(0,r.kt)("em",{parentName:"td"},"On")," then the ",(0,r.kt)("em",{parentName:"td"},"Switched To On")," output signal will trigger instantly when applications starts, or when a component is created dynamically.")))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Current State")),(0,r.kt)("td",{parentName:"tr",align:null},"This output is either ",(0,r.kt)("em",{parentName:"td"},"True")," or ",(0,r.kt)("em",{parentName:"td"},"False")," depending on if the ",(0,r.kt)("strong",{parentName:"td"},"Switch")," is ",(0,r.kt)("em",{parentName:"td"},"On")," or ",(0,r.kt)("em",{parentName:"td"},"Off"),".")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Switched To On")),(0,r.kt)("td",{parentName:"tr",align:null},"This signal is sent when the ",(0,r.kt)("strong",{parentName:"td"},"Switch")," goes from ",(0,r.kt)("em",{parentName:"td"},"Off")," to ",(0,r.kt)("em",{parentName:"td"},"On"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Switched To Off")),(0,r.kt)("td",{parentName:"tr",align:null},"This signal is sent when the ",(0,r.kt)("strong",{parentName:"td"},"Switch")," goes from ",(0,r.kt)("em",{parentName:"td"},"On")," to ",(0,r.kt)("em",{parentName:"td"},"Off"),".")))))}m.isMDXComponent=!0},61576:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/switch-d0cf0e22fddb67ec23aef148a0c96b87.gif"}}]);