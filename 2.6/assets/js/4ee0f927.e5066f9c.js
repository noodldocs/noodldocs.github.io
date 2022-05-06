"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[2437],{3905:function(A,e,t){t.d(e,{Zo:function(){return d},kt:function(){return c}});var n=t(67294);function a(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function l(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function o(A,e){if(null==A)return{};var t,n,a=function(A,e){if(null==A)return{};var t,n,a={},r=Object.keys(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(a[t]=A[t]);return a}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(a[t]=A[t])}return a}var s=n.createContext({}),u=function(A){var e=n.useContext(s),t=e;return A&&(t="function"==typeof A?A(e):l(l({},e),A)),t},d=function(A){var e=u(A.components);return n.createElement(s.Provider,{value:e},A.children)},i={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(A,e){var t=A.components,a=A.mdxType,r=A.originalType,s=A.parentName,d=o(A,["components","mdxType","originalType","parentName"]),p=u(t),c=a,w=p["".concat(s,".").concat(c)]||p[c]||i[c]||r;return t?n.createElement(w,l(l({ref:e},d),{},{components:t})):n.createElement(w,l({ref:e},d))}));function c(A,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof A||a){var r=t.length,l=new Array(r);l[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=A,o.mdxType="string"==typeof A?A:a,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9092:function(A,e,t){t.r(e),t.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return i}});var n=t(83117),a=t(80102),r=(t(67294),t(3905)),l=["components"],o={hide_title:!0,hide_table_of_contents:!0,title:"Sign Up"},s=void 0,u={unversionedId:"data/user/sign-up",id:"data/user/sign-up",title:"Sign Up",description:"This node is used to sign up new users in the Noodl Cloud Service.",source:"@site/nodes/data/user/sign-up.md",sourceDirName:"data/user",slug:"/data/user/sign-up",permalink:"/2.6/nodes/data/user/sign-up",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Sign Up"},sidebar:"nodeSidebar",previous:{title:"Log Out",permalink:"/2.6/nodes/data/user/log-out"},next:{title:"User",permalink:"/2.6/nodes/data/user/user-node"}},d={},i=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],p={toc:i};function c(A){var e=A.components,o=(0,a.Z)(A,l);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"sign-up"},"Sign Up"),(0,r.kt)("p",null,"This node is used to sign up new users in the Noodl Cloud Service."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:t(93307).Z,width:"1011",height:"360"}))),(0,r.kt)("p",null,"The ",(0,r.kt)("span",{className:"ndl-node"},"Sign Up")," node is the easiest way to handle users in a Noodl web app. Once a user is created with this node, they can log in through the ",(0,r.kt)("span",{className:"ndl-node"},"Log In")," node and you can access user information via the ",(0,r.kt)("span",{className:"ndl-node"},"User")," node."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:t(15648).Z,width:"1074",height:"496"}))),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Username")),(0,r.kt)("td",{parentName:"tr",align:null},"This is the username of the new user that is going to sign up. It is required that this input has a value and it must be unique, or the sign up will fail.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Password")),(0,r.kt)("td",{parentName:"tr",align:null},"This input should contain the password for the new user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Email")),(0,r.kt)("td",{parentName:"tr",align:null},"Optionally the new user can be given assigned an email.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Your custom properties")),(0,r.kt)("td",{parentName:"tr",align:null},"<##input:prop-","*","##>A property of the ",(0,r.kt)("strong",{parentName:"td"},"User")," class. You can add additional properties to the ",(0,r.kt)("strong",{parentName:"td"},"User")," class in the Noodl Cloud Services dashboard.  These will show up as inputs on the ",(0,r.kt)("strong",{parentName:"td"},"Sign Up")," node to optionally bhe given a value during sign up.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Do")),(0,r.kt)("td",{parentName:"tr",align:null},"Send a signal to this action to trigger the sign up. Once completed the ",(0,r.kt)("strong",{parentName:"td"},"Success")," or ",(0,r.kt)("strong",{parentName:"td"},"Failure")," event will be triggered.")))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Success")),(0,r.kt)("td",{parentName:"tr",align:null},"This action will be triggered if the sign up was succesful. The user is now logged in and information about the user can be accessed via the ",(0,r.kt)("strong",{parentName:"td"},"User")," node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Failure")),(0,r.kt)("td",{parentName:"tr",align:null},"This action will be triggered if something went wrong while trying to sign up the user. The error message can be found in the ",(0,r.kt)("strong",{parentName:"td"},"Error")," output.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Error")),(0,r.kt)("td",{parentName:"tr",align:null},"This output will contain the error message if the sign up failed.")))))}c.isMDXComponent=!0},15648:function(A,e,t){e.Z=t.p+"assets/images/sign-up_node-61037f80f04bac2ca76ead2deda83565.png"},93307:function(A,e){e.Z="data:image/png;base64,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"}}]);