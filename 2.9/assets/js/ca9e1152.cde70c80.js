"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[6544],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=a.createContext({}),s=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(u.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,l=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(h,r(r({ref:e},c),{},{components:n})):a.createElement(h,r({ref:e},c))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[d]="string"==typeof t?t:o,r[1]=i;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36096:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const l={hide_title:!0,hide_table_of_contents:!0,title:"Cloud Function"},r=void 0,i={unversionedId:"data/cloud-data/cloud-function",id:"data/cloud-data/cloud-function",title:"Cloud Function",description:"Cloud functions are logic components that run in the cloud and not on the client like other logic components. The Cloud Function node is how you initiate a call to a cloud function component. Learn more about how to use cloud functions in this guide.",source:"@site/nodes/data/cloud-data/cloud-function.md",sourceDirName:"data/cloud-data",slug:"/data/cloud-data/cloud-function",permalink:"/2.9/nodes/data/cloud-data/cloud-function",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Cloud Function"},sidebar:"nodeSidebar",previous:{title:"Upload File",permalink:"/2.9/nodes/data/cloud-data/upload-file"},next:{title:"Config",permalink:"/2.9/nodes/data/cloud-data/config"}},u={},s=[{value:"Inputs",id:"inputs",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Outputs",id:"outputs",level:2},{value:"Result",id:"result",level:3}],c={toc:s},d="wrapper";function p(t){let{components:e,...l}=t;return(0,o.kt)(d,(0,a.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h1",{id:"cloud-function"},"Cloud Function"),(0,o.kt)("p",null,"Cloud functions are logic components that run in the cloud and not on the client like other logic components. The ",(0,o.kt)("strong",{parentName:"p"},"Cloud Function")," node is how you initiate a call to a cloud function component. Learn more about how to use cloud functions in this ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/cloud-logic/introduction"},"guide"),"."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(45643).Z,width:"652",height:"428"}))),(0,o.kt)("p",null,"You will first need to pick the cloud function that you want to call with this node."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(74147).Z,width:"754",height:"442"}))),(0,o.kt)("p",null,"After you have picked the cloud function, the ",(0,o.kt)("strong",{parentName:"p"},"Cloud Function")," node will receive the input parameters and output result parameters defined in the cloud function so you can hook them up to the logic of your application."),(0,o.kt)("p",null,"A cloud function can either return a ",(0,o.kt)("strong",{parentName:"p"},"Success")," or ",(0,o.kt)("strong",{parentName:"p"},"Failure")," response, this will result in the corresponding output signal on the ",(0,o.kt)("strong",{parentName:"p"},"Cloud Function")," node. You can use this to trigger different flows in your logic."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(69315).Z,width:"1030",height:"748"}))),(0,o.kt)("p",null,"If a ",(0,o.kt)("strong",{parentName:"p"},"Failure")," signal is emitted you can also use the ",(0,o.kt)("strong",{parentName:"p"},"Error")," output that will contain the error message sent from the cloud function."),(0,o.kt)("p",null,"If a ",(0,o.kt)("strong",{parentName:"p"},"Success")," signal is sent the result parameters will be available as outputs on the ",(0,o.kt)("strong",{parentName:"p"},"Cloud Function")," node."),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Function")),(0,o.kt)("td",{parentName:"tr",align:null},"The cloud function component that this node will call.")))),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Cloud Function")," node will receive all parameters specified in the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/cloud-functions/request"},"Request")," node in the cloud function component as inputs. When the ",(0,o.kt)("span",{className:"ndl-signal"},"Call")," signal is received the values on the inputs will be sent to the cloud funciton."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Call")),(0,o.kt)("td",{parentName:"tr",align:null},"Send a signal on this input to issue the request to the cloud function.")))),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Error")),(0,o.kt)("td",{parentName:"tr",align:null},"If the cloud function results in an error status, this output will contain the error message. ")))),(0,o.kt)("h3",{id:"result"},"Result"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Cloud Function")," node will receive all result parameters specified in any ",(0,o.kt)("a",{parentName:"p",href:"/nodes/cloud-functions/response"},"Response")," node in the cloud function component that is called. When the cloud function completes and retuns a ",(0,o.kt)("strong",{parentName:"p"},"Sucess")," status, any result parameters sent back will be available on these outputs."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Success")),(0,o.kt)("td",{parentName:"tr",align:null},"This is sent if the cloud function returns a ",(0,o.kt)("strong",{parentName:"td"},"Success")," status.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Failure")),(0,o.kt)("td",{parentName:"tr",align:null},"This is sent if the cloud function returns a ",(0,o.kt)("strong",{parentName:"td"},"Failure")," status.")))))}p.isMDXComponent=!0},45643:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/cloud-function-1-fb036ab2c0c7b4625aa01734b05c3fd6.png"},74147:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/cloud-function-2-7561619a628ed1341bb6d91be07e38f4.png"},69315:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/cloud-function-3-7960ba0783ff6bd5ce1528c3f20706be.png"}}]);