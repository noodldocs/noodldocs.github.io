"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[9270],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return g}});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=o.createContext({}),c=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return o.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=c(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||r;return n?o.createElement(m,l(l({ref:e},p),{},{components:n})):o.createElement(m,l({ref:e},p))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78375:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),l=["components"],i={title:"Google Analytics Root",hide_title:!0},s=void 0,c={unversionedId:"modules/google-analytics/nodes/google-analytics-root/README",id:"modules/google-analytics/nodes/google-analytics-root/README",title:"Google Analytics Root",description:"This node loads Google Analytics in your Noodl app. It must be placed in your Root Component for the tracking to work properly. You can find your Root Component in the Components list in the sidebar, having a house icon beside it.",source:"@site/library/modules/google-analytics/nodes/google-analytics-root/README.md",sourceDirName:"modules/google-analytics/nodes/google-analytics-root",slug:"/modules/google-analytics/nodes/google-analytics-root/",permalink:"/2.6/library/modules/google-analytics/nodes/google-analytics-root/",tags:[],version:"current",frontMatter:{title:"Google Analytics Root",hide_title:!0},sidebar:"googleAnalyticsSidebar",previous:{title:"Tracking Custom Events in Google Analytics",permalink:"/2.6/library/modules/google-analytics/guides/tracking-custom-events/"},next:{title:"Send Google Analytics Data",permalink:"/2.6/library/modules/google-analytics/nodes/send-google-analytics-data/"}},p={},u=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],d={toc:u};function g(t){var e=t.components,i=(0,a.Z)(t,l);return(0,r.kt)("wrapper",(0,o.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,""),(0,r.kt)("h1",{id:"google-analytics-root"},"Google Analytics Root"),(0,r.kt)("p",null,"This node loads Google Analytics in your Noodl app. It ",(0,r.kt)("em",{parentName:"p"},"must")," be placed in your ",(0,r.kt)("strong",{parentName:"p"},"Root Component")," for the tracking to work properly. You can find your ",(0,r.kt)("strong",{parentName:"p"},"Root Component")," in the ",(0,r.kt)("strong",{parentName:"p"},"Components")," list in the sidebar, having a house icon beside it."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(16050).Z,width:"1496",height:"752"}))),(0,r.kt)("p",null,"This node uses ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/analytics/devguides/collection/ga4"},"Google Analytics 4")," and requires a ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/9539598#find-G-ID"},"Google Analytics Measurement ID"),"."),(0,r.kt)("p",null,""),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Measurement ID")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"https://support.google.com/analytics/answer/9539598#find-G-ID"},"Google Analytics Measurement ID")," to send the data to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Allow Tracking")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets if tracking should be allowed. For GDPR reasons this is disabled by default.")))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Starting Tracking")),(0,r.kt)("td",{parentName:"tr",align:null},"Sends a signal after the tracking code is activated, before it's initialised in the app.")))))}g.isMDXComponent=!0},16050:function(t,e,n){e.Z=n.p+"assets/images/screenshot-1a49b68bee08e6c73c968e8833d88272.png"}}]);