"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[5236],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=d(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return n?a.createElement(k,i(i({ref:e},u),{},{components:n})):a.createElement(k,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[p]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78578:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={hide_title:!0,hide_table_of_contents:!0,title:"Counter node"},i=void 0,o={unversionedId:"math/counter/README",id:"math/counter/README",title:"Counter node",description:"This node holds a number that can be increased or decreased with signals.",source:"@site/nodes/math/counter/README.md",sourceDirName:"math/counter",slug:"/math/counter/",permalink:"/2.9/nodes/math/counter/",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Counter node"},sidebar:"nodeSidebar",previous:{title:"Number Remapper node",permalink:"/2.9/nodes/math/number-remapper/"},next:{title:"Drag node",permalink:"/2.9/nodes/utilities/drag/"}},s={},d=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],u={toc:d},p="wrapper";function c(t){let{components:e,...l}=t;return(0,r.kt)(p,(0,a.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"counter"},"Counter"),(0,r.kt)("p",null,"This node holds a ",(0,r.kt)("span",{className:"ndl-data"},"number")," that can be increased or decreased with ",(0,r.kt)("span",{className:"ndl-signal"},"signals"),"."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(79318).Z,width:"1011",height:"360"}))),(0,r.kt)("p",null,"The Counter node can be limited to a ",(0,r.kt)("inlineCode",{parentName:"p"},"min")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"max")," value, and the limit can be turned on and off."),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(31073).Z,width:"640",height:"280"}))),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Increase Count")),(0,r.kt)("td",{parentName:"tr",align:null},"Triggering this action will increases the count by one.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Decrease Count")),(0,r.kt)("td",{parentName:"tr",align:null},"Triggering this action will decrease the count by one.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Reset To Start")),(0,r.kt)("td",{parentName:"tr",align:null},"Triggering this action will reset the counter to its ",(0,r.kt)("em",{parentName:"td"},"Start Value"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Start Value")),(0,r.kt)("td",{parentName:"tr",align:null},"The start value of the count. Defaults to zero.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Min Value")),(0,r.kt)("td",{parentName:"tr",align:null},"The minimum value of the counter. The counter will never decrease below this value. Note that ",(0,r.kt)("strong",{parentName:"td"},"Limits Enabled")," need to be set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," for this to be in effect.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Max Value")),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum value of the counter. The counter will never increase above this value. Note that ",(0,r.kt)("strong",{parentName:"td"},"Limits Enabled")," need to be set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," for this to be in effect.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Limits Enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"This input controls if the limits (",(0,r.kt)("strong",{parentName:"td"},"Min Value")," and ",(0,r.kt)("strong",{parentName:"td"},"Max Value"),") are active or disabled.")))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Current Count")),(0,r.kt)("td",{parentName:"tr",align:null},"This output contains the current count.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Count Changed")),(0,r.kt)("td",{parentName:"tr",align:null},"This signal will be triggered whenever the ",(0,r.kt)("strong",{parentName:"td"},"Current Count")," changes.")))))}c.isMDXComponent=!0},31073:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/counter-e58f919066918023aa78a4b2680c1adf.gif"},79318:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/counter_node-723dd34dd56eb87ad0c6525892d72d75.png"}}]);