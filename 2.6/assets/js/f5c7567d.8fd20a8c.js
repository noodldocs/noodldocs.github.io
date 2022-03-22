"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[7508],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5924:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},s=void 0,u={unversionedId:"data/user/send-email-verification",id:"data/user/send-email-verification",title:"send-email-verification",description:"When a new user is created that have a valid email Noodl will automatically attempt to send a verification email (this needs an email service hooked up via something like Zapier). If for some reasone you need to resend the email you can use this action node. Your will need to provide the span email as in input to the node and then trigger the Do action.",source:"@site/nodes/data/user/send-email-verification.md",sourceDirName:"data/user",slug:"/data/user/send-email-verification",permalink:"/2.5/nodes/data/user/send-email-verification",tags:[],version:"current",frontMatter:{},sidebar:"nodesSidebar",previous:{title:"verify-email",permalink:"/2.5/nodes/data/user/verify-email"},next:{title:"reset-password",permalink:"/2.5/nodes/data/user/reset-password"}},d=[{value:"Inputs",id:"inputs",children:[],level:2},{value:"Outputs",id:"outputs",children:[],level:2}],p={toc:d};function c(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,""),(0,i.kt)("h1",{id:"send-email-verification"},"Send Email Verification"),(0,i.kt)("p",null,"When a new user is created that have a valid email Noodl will automatically attempt to send a verification email (this needs an email service hooked up via something like ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/business-logic/zapier"},"Zapier"),"). If for some reasone you need to resend the email you can use this action node. Your will need to provide the span ",(0,i.kt)("span",{class:"ndl-data"},"email")," as in input to the node and then trigger the ",(0,i.kt)("span",{class:"ndl-signal"},"Do")," action."),(0,i.kt)("div",{class:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(974).Z,width:"1392",height:"580"}))),(0,i.kt)("p",null,""),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Signal"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"ndl-signal"},"Do")),(0,i.kt)("td",{parentName:"tr",align:null},"Send a signal to this action to have a verification email sent to the user with the provided Email if it esists.")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"ndl-data"},"Email")),(0,i.kt)("td",{parentName:"tr",align:null},"The email that should receive a verification email, if a user with that email exists.")))),(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Signal"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"ndl-signal"},"Success")),(0,i.kt)("td",{parentName:"tr",align:null},"The verification email was succesfully triggered. It will be sent using your connected email service.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"ndl-signal"},"Failure")),(0,i.kt)("td",{parentName:"tr",align:null},"This event will be triggered if something when wrong when sending the email. The error message can be found in the ",(0,i.kt)("strong",{parentName:"td"},"Error")," output.")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"ndl-data"},"Error")),(0,i.kt)("td",{parentName:"tr",align:null},"This output will contain the error message if the action failed.")))))}c.isMDXComponent=!0},974:function(e,t,n){t.Z=n.p+"assets/images/send-email-verification-53b943d7bec2bade4e82d23df3464fa7.png"}}]);