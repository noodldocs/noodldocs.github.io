"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[706],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),s=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(i.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(f,o(o({ref:e},c),{},{components:n})):a.createElement(f,o({ref:e},c))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u[p]="string"==typeof t?t:r,o[1]=u;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21077:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"Parse Cloud Function",hide_title:!0},o=void 0,u={unversionedId:"modules/parse-cloud-function/README",id:"modules/parse-cloud-function/README",title:"Parse Cloud Function",description:"This node is used to make calls to Parse Platform cloud functions. To use Parse cloud functions you need to have an external Parse backend and have attached cloud functions-",source:"@site/library/modules/parse-cloud-function/README.md",sourceDirName:"modules/parse-cloud-function",slug:"/modules/parse-cloud-function/",permalink:"/2.9/library/modules/parse-cloud-function/",draft:!1,tags:[],version:"current",frontMatter:{title:"Parse Cloud Function",hide_title:!0}},i={},s=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],c={toc:s},p="wrapper";function d(t){let{components:e,...l}=t;return(0,r.kt)(p,(0,a.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,""),(0,r.kt)("h1",{id:"parse-cloud-function"},"Parse Cloud Function"),(0,r.kt)("p",null,"This node is used to make calls to ",(0,r.kt)("a",{parentName:"p",href:"https://parseplatform.org"},"Parse Platform")," cloud functions. To use Parse cloud functions you need to have an external Parse backend and have attached cloud functions-"),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(91404).Z,width:"760",height:"426"}))),(0,r.kt)("p",null,"You need to specify the name of the cloud function you want to call. This is done via the ",(0,r.kt)("strong",{parentName:"p"},"Function Name")," property."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(83457).Z,width:"608",height:"220"}))),(0,r.kt)("p",null,"You can also provide parameters that you want to be passed to the cloud function by adding them using the ",(0,r.kt)("strong",{parentName:"p"},"Parameters")," property. Once a parameter is added the corresponding input is available on the node. You provide the input values via regular Noodl connections."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(27470).Z,width:"604",height:"284"}))),(0,r.kt)("p",null,"The cloud function returns the result of the cloud function on the ",(0,r.kt)("strong",{parentName:"p"},"Result")," output. "),(0,r.kt)("p",null,""),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Function Name")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the cloud function to call.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Custom Parameters")),(0,r.kt)("td",{parentName:"tr",align:null},"A parameter that will be passed to the function. Any parameters you add will become available as inputs on the node.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Call")),(0,r.kt)("td",{parentName:"tr",align:null},"Send a signal on this input to issue the request to the backend.")))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Result")),(0,r.kt)("td",{parentName:"tr",align:null},"This output will contain the result that the ",(0,r.kt)("strong",{parentName:"td"},"Cloud Function")," returns upon completion. ")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Success")),(0,r.kt)("td",{parentName:"tr",align:null},"This is sent if the function returns a success code and a result object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Failure")),(0,r.kt)("td",{parentName:"tr",align:null},"This is sent if the function returns a failure code.")))))}d.isMDXComponent=!0},83457:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/func-name-d22f7a32b9abd6163cd01e945fbfd4da.png"},27470:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/parameters-038b26d32d699a551e447968c5624bbf.png"},91404:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/parse-cloud-function-node-45dd3032ffeb3aac24b912f7b18a9c41.png"}}]);