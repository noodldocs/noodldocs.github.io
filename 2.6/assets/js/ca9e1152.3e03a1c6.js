"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[6544],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),c=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(u,".").concat(m)]||p[m]||s[m]||o;return n?a.createElement(h,l(l({ref:e},d),{},{components:n})):a.createElement(h,l({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36096:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),l=["components"],i={hide_title:!0,hide_table_of_contents:!0,title:"Cloud Function"},u=void 0,c={unversionedId:"data/cloud-data/cloud-function",id:"data/cloud-data/cloud-function",title:"Cloud Function",description:"This node is used to make calls to backend cloud functions. To use cloud functions you need to have an external Parse backend up and running and have attached cloud functions or have a Noodl Zap running in Zapier. You can read more about how to make your own backend logic here.",source:"@site/nodes/data/cloud-data/cloud-function.md",sourceDirName:"data/cloud-data",slug:"/data/cloud-data/cloud-function",permalink:"/2.6/nodes/data/cloud-data/cloud-function",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Cloud Function"},sidebar:"nodeSidebar",previous:{title:"Upload File",permalink:"/2.6/nodes/data/cloud-data/upload-file"},next:{title:"Log In",permalink:"/2.6/nodes/data/user/log-in"}},d={},s=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],p={toc:s};function m(t){var e=t.components,i=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h1",{id:"cloud-function"},"Cloud Function"),(0,o.kt)("p",null,"This node is used to make calls to backend cloud functions. To use cloud functions you need to have an external ",(0,o.kt)("a",{parentName:"p",href:"https://parseplatform.org"},"Parse")," backend up and running and have attached cloud functions or have a Noodl Zap running in ",(0,o.kt)("a",{parentName:"p",href:"https://zapier.com"},"Zapier"),". You can read more about how to make your own backend logic ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/business-logic/overview"},"here"),"."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(99330).Z,width:"768",height:"398"}))),(0,o.kt)("p",null,"You need to specify the name of the cloud function you want to call. This is done via the ",(0,o.kt)("strong",{parentName:"p"},"Function Name")," property."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(89805).Z,width:"558",height:"152"}))),(0,o.kt)("p",null,"You can also provide parameters that you want to be passed to the cloud function by adding them using the ",(0,o.kt)("strong",{parentName:"p"},"Parameters")," property. Once a parameter is added the corresponding input is available on the node. You provide the input values via regular Noodl connections."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(66900).Z,width:"558",height:"208"}))),(0,o.kt)("p",null,"The cloud function can return a value, an object or an array when finished. The return value will be available on the ",(0,o.kt)("strong",{parentName:"p"},"Result")," output. The result value will be converted to a Noodl type, for example an ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/object/object-node"},"Object")," or an ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/array/array-node"},"Array")," containing ",(0,o.kt)("strong",{parentName:"p"},"Objects"),".\nThe only exception is if the returned array is an array of JavaScript primitives (strings, numbers, booleans), i.e. ",(0,o.kt)("em",{parentName:"p"},"not")," objects. Then Noodl cannot convert the array to a Noodl ",(0,o.kt)("strong",{parentName:"p"},"Array")," with ",(0,o.kt)("strong",{parentName:"p"},"Objects"),". Instead the returned array will be a JavaScript array with primitives that need to be handed in JavaScript by a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/javascript/function"},"Function")," or ",(0,o.kt)("a",{parentName:"p",href:"/nodes/javascript/script"},"Script")," node."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(52431).Z,width:"951",height:"577"}))),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Function Name")),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the cloud function to call.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Custom Parameters")),(0,o.kt)("td",{parentName:"tr",align:null},"<##input:pm-","*","##>A parameter that will be passed to the function. Any parameters you add will become available as inputs on the node.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Call")),(0,o.kt)("td",{parentName:"tr",align:null},"Send a signal on this input to issue the request to the backend.")))),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Result")),(0,o.kt)("td",{parentName:"tr",align:null},"This output will contain the result that the ",(0,o.kt)("strong",{parentName:"td"},"Cloud Function")," returns upon completion. ")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Success")),(0,o.kt)("td",{parentName:"tr",align:null},"This is sent if the function returns a success code and a result object.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Failure")),(0,o.kt)("td",{parentName:"tr",align:null},"This is sent if the function returns a fail code.")))))}m.isMDXComponent=!0},89805:function(t,e,n){e.Z=n.p+"assets/images/cloudfunction-name-734ff3a920013a52856bb0c2810c33f3.png"},66900:function(t,e,n){e.Z=n.p+"assets/images/cloudfunction-params-1bd01474f9820bc8c56724d5bb55fb15.png"},52431:function(t,e,n){e.Z=n.p+"assets/images/cloudfunction-result-example-896b842f7ae40431db5acf7af90867ab.png"},99330:function(t,e,n){e.Z=n.p+"assets/images/cloudfunction-8399a286d9faaa3b4c7841282c52b431.png"}}]);