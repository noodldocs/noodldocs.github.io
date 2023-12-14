"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[1553],{3905:(A,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>w});var n=t(67294);function a(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function l(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function d(A,e){if(null==A)return{};var t,n,a=function(A,e){if(null==A)return{};var t,n,a={},r=Object.keys(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(a[t]=A[t]);return a}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(a[t]=A[t])}return a}var o=n.createContext({}),s=function(A){var e=n.useContext(o),t=e;return A&&(t="function"==typeof A?A(e):l(l({},e),A)),t},u=function(A){var e=s(A.components);return n.createElement(o.Provider,{value:e},A.children)},g="mdxType",c={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},i=n.forwardRef((function(A,e){var t=A.components,a=A.mdxType,r=A.originalType,o=A.parentName,u=d(A,["components","mdxType","originalType","parentName"]),g=s(t),i=a,w=g["".concat(o,".").concat(i)]||g[i]||c[i]||r;return t?n.createElement(w,l(l({ref:e},u),{},{components:t})):n.createElement(w,l({ref:e},u))}));function w(A,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof A||a){var r=t.length,l=new Array(r);l[0]=i;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=A,d[g]="string"==typeof A?A:a,l[1]=d;for(var s=2;s<r;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}i.displayName="MDXCreateElement"},704:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const r={hide_title:!0,hide_table_of_contents:!0,title:"Log In node"},l=void 0,d={unversionedId:"data/user/log-in/README",id:"data/user/log-in/README",title:"Log In node",description:"This node is used to log in users that exist in the Noodl Cloud Service. You need to provide a Username and a Password and then send a signal to the Do action.",source:"@site/nodes/data/user/log-in/README.md",sourceDirName:"data/user/log-in",slug:"/data/user/log-in/",permalink:"/2.9/nodes/data/user/log-in/",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Log In node"},sidebar:"nodeSidebar",previous:{title:"Config node",permalink:"/2.9/nodes/data/cloud-data/config/"},next:{title:"Log Out node",permalink:"/2.9/nodes/data/user/log-out/"}},o={},s=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],u={toc:s},g="wrapper";function c(A){let{components:e,...r}=A;return(0,a.kt)(g,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"is-hidden"},""),(0,a.kt)("h1",{id:"log-in"},"Log In"),(0,a.kt)("p",null,"This node is used to log in users that exist in the Noodl Cloud Service. You need to provide a ",(0,a.kt)("span",{className:"ndl-data"},"Username")," and a ",(0,a.kt)("span",{className:"ndl-data"},"Password")," and then send a signal to the ",(0,a.kt)("span",{className:"ndl-signal"},"Do")," action."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:t(46919).Z,width:"1011",height:"360"}))),(0,a.kt)("p",null,"Once a user is logged in, their data can be accessed through the ",(0,a.kt)("span",{className:"ndl-data"},"User")," node."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:t(82362).Z,width:"1036",height:"610"}))),(0,a.kt)("p",{className:"is-hidden"},""),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Data"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"ndl-data"},"Username")),(0,a.kt)("td",{parentName:"tr",align:null},"The username of the user that should be logged in.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"ndl-data"},"Password")),(0,a.kt)("td",{parentName:"tr",align:null},"The password of the user that should be logged in.")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Signal"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"ndl-signal"},"Do")),(0,a.kt)("td",{parentName:"tr",align:null},"Send a signal to this action to log in the user. You need to make sure the ",(0,a.kt)("strong",{parentName:"td"},"Username")," and ",(0,a.kt)("strong",{parentName:"td"},"Password")," is connected, these will be sent to the backend for authentication.")))),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Signal"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"ndl-signal"},"Success")),(0,a.kt)("td",{parentName:"tr",align:null},"This event will be triggered if the log in was succesful.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"ndl-signal"},"Failure")),(0,a.kt)("td",{parentName:"tr",align:null},"This event will be triggered if something went wrong while trying to log in the user. The error message can be found in the ",(0,a.kt)("strong",{parentName:"td"},"Error")," output.")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Data"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"ndl-data"},"Error")),(0,a.kt)("td",{parentName:"tr",align:null},"This output will contain the error message if the log in failed.")))))}c.isMDXComponent=!0},82362:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/login_node-cc8429afffd87aa9a5421c6a4c34b222.png"},46919:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"}}]);