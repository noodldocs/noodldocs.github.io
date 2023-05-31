"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[5572],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),d=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,h=u["".concat(o,".").concat(m)]||u[m]||c[m]||s;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<s;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},62309:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const s={hide_title:!0,hide_table_of_contents:!0,title:"Request Password Reset"},i=void 0,l={unversionedId:"data/user/request-password-reset",id:"data/user/request-password-reset",title:"Request Password Reset",description:"This action node is used to help users recover a lost password, or to change their password. In order to do this they first need to receive a reset link via email. This action will trigger such an email (it needs to be hooked up via one of Noodls cloud services integrations such as Zapier). Typically you would use some sort of password recovery page.",source:"@site/nodes/data/user/request-password-reset.md",sourceDirName:"data/user",slug:"/data/user/request-password-reset",permalink:"/2.8/nodes/data/user/request-password-reset",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Request Password Reset"}},o={},d=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...s}=e;return(0,n.kt)(u,(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{className:"is-hidden"},""),(0,n.kt)("h1",{id:"request-password-reset"},"Request Password Reset"),(0,n.kt)("p",null,"This action node is used to help users recover a lost password, or to change their password. In order to do this they first need to receive a reset link via email. This action will trigger such an email (it needs to be hooked up via one of Noodls cloud services integrations such as ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides/business-logic/zapier"},"Zapier"),"). Typically you would use some sort of password recovery page."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(29640).Z,width:"970",height:"652"})),(0,n.kt)("p",null,"This page would run the ",(0,n.kt)("strong",{parentName:"p"},"Request Password Reset")," action as shown below. The node needs the ",(0,n.kt)("span",{className:"ndl-data"},"Email")," that it should request a password reset for, given that a user with that email exists. Then send a signal to ",(0,n.kt)("span",{className:"ndl-signal"},"Do")," to initiate the request."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:a(57173).Z,width:"1230",height:"626"}))),(0,n.kt)("p",{className:"is-hidden"},""),(0,n.kt)("p",null,"This ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides/business-logic/user-management"},"guide")," explains in detail how to connect Noodl with an email service using Zapier."),(0,n.kt)("h2",{id:"inputs"},"Inputs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Signal"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-signal"},"Do")),(0,n.kt)("td",{parentName:"tr",align:null},"Send a signal to this action to have a password reset email sent to the user with the provided Email if it esists.")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Data"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-data"},"Email")),(0,n.kt)("td",{parentName:"tr",align:null},"The email that should receive a password reset email, if a user with that email exists.")))),(0,n.kt)("h2",{id:"outputs"},"Outputs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Signal"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-signal"},"Success")),(0,n.kt)("td",{parentName:"tr",align:null},"The password reset email was succesfully triggered. It will be sent using your connected email service.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-signal"},"Failure")),(0,n.kt)("td",{parentName:"tr",align:null},"This event will be triggered if something when wrong when sending the email. The error message can be found in the ",(0,n.kt)("strong",{parentName:"td"},"Error")," output.")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Data"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-data"},"Error")),(0,n.kt)("td",{parentName:"tr",align:null},"This output will contain the error message if the action failed.")))))}c.isMDXComponent=!0},57173:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/request-nodes-b8324f4f28a00dd125dc5a4e976fa0b2.png"},29640:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/request-ui-5ed6f59378094b7e0b698d5e233bb35c.png"}}]);