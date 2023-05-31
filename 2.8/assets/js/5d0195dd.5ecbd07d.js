"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[8421],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=u(n),h=r,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(f,o(o({ref:e},c),{},{components:n})):a.createElement(f,o({ref:e},c))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},19479:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={hide_title:!0,hide_table_of_contents:!0,title:"Request"},o=void 0,l={unversionedId:"cloud-functions/request",id:"cloud-functions/request",title:"Request",description:"The Request node is the starting point for Cloud Functions, it is where the logic flow is initiated when the function is called from the client. Each cloud function component can only have one Request node.",source:"@site/nodes/cloud-functions/request.md",sourceDirName:"cloud-functions",slug:"/cloud-functions/request",permalink:"/2.8/nodes/cloud-functions/request",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Request"},sidebar:"nodeSidebar",previous:{title:"CSS Definition",permalink:"/2.8/nodes/utilities/css-definition"},next:{title:"Response",permalink:"/2.8/nodes/cloud-functions/response"}},s={},u=[{value:"Inputs",id:"inputs",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Outputs",id:"outputs",level:2}],c={toc:u},d="wrapper";function p(t){let{components:e,...i}=t;return(0,r.kt)(d,(0,a.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"request"},"Request"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Request")," node is the starting point for ",(0,r.kt)("strong",{parentName:"p"},"Cloud Functions"),", it is where the logic flow is initiated when the function is called from the client. Each cloud function component can only have one ",(0,r.kt)("strong",{parentName:"p"},"Request")," node."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(48109).Z,width:"786",height:"508"}))),(0,r.kt)("p",null,"It's also where any input parameters to the ",(0,r.kt)("strong",{parentName:"p"},"Cloud Function")," is provided. To learn more about cloud functions take a look at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/cloud-logic/introduction"},"guide"),"."),(0,r.kt)("p",null,"You specify what parameters the cloud function accepts in the properties of the ",(0,r.kt)("strong",{parentName:"p"},"Request")," node. Here you can also specify if the user must be logged in on the client to call this function."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4106).Z,width:"760",height:"604"}))),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("p",null,"By default the user must be logged in on the client, and if thats not the case the cloud function call will automatically fail with an error indication an invalid session."),(0,r.kt)("p",null,"However, if you check the ",(0,r.kt)("strong",{parentName:"p"},"Allow Unauthenticated")," property the function can be called without a valid user session on the client."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(90350).Z,width:"1542",height:"688"}))),(0,r.kt)("p",null,"If the cloud function accepts unauthenticated requests, you can tell if the call was authenticated (there was a valid user session on the client) with the two outputs ",(0,r.kt)("strong",{parentName:"p"},"Authenticated")," and ",(0,r.kt)("strong",{parentName:"p"},"User Id"),". This can be used to trigger two different flows."),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Allow Unauthenticated")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies if a valid user session (the user is logged in) is required on the client for calling this function.")))),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"You can add parameters using the properties of this node. Parameters will show up when using the ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/cloud-function"},"Cloud Function")," node to call a cloud function from the client."),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Authenticated")),(0,r.kt)("td",{parentName:"tr",align:null},"This output will be ",(0,r.kt)("strong",{parentName:"td"},"true")," if the client calling this cloud function had a valid user session, i.e. the user was logged in.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"User Id")),(0,r.kt)("td",{parentName:"tr",align:null},"If the user was logged in when calling this function this output will be the ",(0,r.kt)("strong",{parentName:"td"},"Id")," of the user record.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Received")),(0,r.kt)("td",{parentName:"tr",align:null},"This signal is the starting point for the cloud function logic flow. The first actions you want performed in the cloud function should be connected to this input.")))))}p.isMDXComponent=!0},4106:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/request-2-fab9cebf904828aa57901736674cc5e6.png"},90350:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/request-3-17fa5cb2ff21a8784e86cba0c5ec1772.png"},48109:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/request-bd2819c4c5aa17bfff3e1937b5829418.png"}}]);