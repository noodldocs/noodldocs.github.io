"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[4996],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,g=u["".concat(i,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(g,s(s({ref:t},d),{},{components:r})):n.createElement(g,s({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},48233:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={hide_title:!0,hide_table_of_contents:!0,title:"Set User Properties node"},s=void 0,l={unversionedId:"data/user/set-user-properties/README",id:"data/user/set-user-properties/README",title:"Set User Properties node",description:"This node is used to set properties on the currently logged in user.",source:"@site/nodes/data/user/set-user-properties/README.md",sourceDirName:"data/user/set-user-properties",slug:"/data/user/set-user-properties/",permalink:"/2.9/nodes/data/user/set-user-properties/",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Set User Properties node"},sidebar:"nodeSidebar",previous:{title:"User node",permalink:"/2.9/nodes/data/user/user-node/"},next:{title:"REST node",permalink:"/2.9/nodes/data/rest/"}},i={},p=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"is-hidden"},""),(0,a.kt)("h1",{id:"set-user-properties"},"Set User Properties"),(0,a.kt)("p",null,"This node is used to set properties on the currently logged in user."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:r(89422).Z,width:"1118",height:"356"}))),(0,a.kt)("p",null,"A user needs to be logged in via either the ",(0,a.kt)("span",{className:"ndl-node"},"Sign Up")," node or the ",(0,a.kt)("span",{className:"ndl-node"},"Log In")," node. If you want to read user properties of the currently logged in user you can use the ",(0,a.kt)("span",{className:"ndl-node"},"User")," node.\n"),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Data"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"ndl-data"},"Email")),(0,a.kt)("td",{parentName:"tr",align:null},"This input is used to set the ",(0,a.kt)("strong",{parentName:"td"},"Email")," property.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"ndl-data"},"Your custom properties")),(0,a.kt)("td",{parentName:"tr",align:null},"<##input:prop-","*","##>A property of the ",(0,a.kt)("strong",{parentName:"td"},"User")," class. You can add additional properties to the ",(0,a.kt)("strong",{parentName:"td"},"User")," class in the Noodl Cloud Services dashboard.  These will show up as inputs on the ",(0,a.kt)("strong",{parentName:"td"},"Set User Properties")," node.")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Signal"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"ndl-signal"},"Do")),(0,a.kt)("td",{parentName:"tr",align:null},"Send a signal to this input to store the properties in the user record in the Noodl Cloud Services. Once completed the ",(0,a.kt)("strong",{parentName:"td"},"Success")," or ",(0,a.kt)("strong",{parentName:"td"},"Failure")," action will be triggered.")))),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Signal"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"ndl-signal"},"Success")),(0,a.kt)("td",{parentName:"tr",align:null},"This event will be triggered if the properties was succesfully stored.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"ndl-signal"},"Failure")),(0,a.kt)("td",{parentName:"tr",align:null},"This event will be triggered if something went wrong while trying to store the properties on the ",(0,a.kt)("strong",{parentName:"td"},"User")," record in the Noodl Cloud Services. The error message can be found in the ",(0,a.kt)("strong",{parentName:"td"},"Error")," output.")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Data"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"ndl-data"},"Error")),(0,a.kt)("td",{parentName:"tr",align:null},"This output will contain the error message if the action failed.")))))}c.isMDXComponent=!0},89422:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/set-user-properties-nodes-e36177b5a1a04762d83e8565099a1cf3.png"}}]);