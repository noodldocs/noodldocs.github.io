"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[9270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||r;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},78375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"Google Analytics Root",hide_title:!0},l=void 0,i={unversionedId:"modules/google-analytics/nodes/google-analytics-root/README",id:"modules/google-analytics/nodes/google-analytics-root/README",title:"Google Analytics Root",description:"This node loads Google Analytics in your Noodl app. It must be placed in your Root Component for the tracking to work properly. You can find your Root Component in the Components list in the sidebar, having a house icon beside it.",source:"@site/library/modules/google-analytics/nodes/google-analytics-root/README.md",sourceDirName:"modules/google-analytics/nodes/google-analytics-root",slug:"/modules/google-analytics/nodes/google-analytics-root/",permalink:"/2.9/library/modules/google-analytics/nodes/google-analytics-root/",draft:!1,tags:[],version:"current",frontMatter:{title:"Google Analytics Root",hide_title:!0},sidebar:"googleAnalyticsSidebar",previous:{title:"Tracking Custom Events in Google Analytics",permalink:"/2.9/library/modules/google-analytics/guides/tracking-custom-events/"},next:{title:"Send Google Analytics Data",permalink:"/2.9/library/modules/google-analytics/nodes/send-google-analytics-data/"}},s={},c=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,""),(0,o.kt)("h1",{id:"google-analytics-root"},"Google Analytics Root"),(0,o.kt)("p",null,"This node loads Google Analytics in your Noodl app. It ",(0,o.kt)("em",{parentName:"p"},"must")," be placed in your ",(0,o.kt)("strong",{parentName:"p"},"Root Component")," for the tracking to work properly. You can find your ",(0,o.kt)("strong",{parentName:"p"},"Root Component")," in the ",(0,o.kt)("strong",{parentName:"p"},"Components")," list in the sidebar, having a house icon beside it."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(16050).Z,width:"1496",height:"752"}))),(0,o.kt)("p",null,"This node uses ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/analytics/devguides/collection/ga4"},"Google Analytics 4")," and requires a ",(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/9539598#find-G-ID"},"Google Analytics Measurement ID"),"."),(0,o.kt)("p",null,""),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Measurement ID")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("a",{parentName:"td",href:"https://support.google.com/analytics/answer/9539598#find-G-ID"},"Google Analytics Measurement ID")," to send the data to.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Allow Tracking")),(0,o.kt)("td",{parentName:"tr",align:null},"Sets if tracking should be allowed. For GDPR reasons this is disabled by default.")))),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Starting Tracking")),(0,o.kt)("td",{parentName:"tr",align:null},"Sends a signal after the tracking code is activated, before it's initialised in the app.")))))}d.isMDXComponent=!0},16050:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-1a49b68bee08e6c73c968e8833d88272.png"}}]);