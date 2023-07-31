"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[6946],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(a),g=r,m=u["".concat(o,".").concat(g)]||u[g]||c[g]||l;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=g;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<l;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},15801:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={hide_title:!0,hide_table_of_contents:!0,title:"User"},s=void 0,i={unversionedId:"data/user/user-node",id:"data/user/user-node",title:"User",description:"This node provides information about the current user session, if the web app has a logged in user.",source:"@site/nodes/data/user/user-node.md",sourceDirName:"data/user",slug:"/data/user/user-node",permalink:"/2.9/nodes/data/user/user-node",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"User"},sidebar:"nodeSidebar",previous:{title:"Sign Up",permalink:"/2.9/nodes/data/user/sign-up"},next:{title:"Set User Properties",permalink:"/2.9/nodes/data/user/set-user-properties"}},o={},d=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"user"},"User"),(0,r.kt)("p",null,"This node provides information about the current user session, if the web app has a logged in user."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(40087).Z,width:"1011",height:"360"}))),(0,r.kt)("p",null,"The ",(0,r.kt)("span",{className:"ndl-node"},"User")," node only works if the user is created in the project\u2019s Noodl Cloud Service, and is logged in via the ",(0,r.kt)("span",{className:"ndl-node"},"Log In")," node."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(51559).Z,width:"1036",height:"610"}))),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Fetch")),(0,r.kt)("td",{parentName:"tr",align:null},"Send a signal to this input to fetch the user properties for the current logged in user from the Noodl Cloud Services. There must be a valid user session for this to work.")))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Id")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("strong",{parentName:"td"},"Id")," of the User record for the current logged in user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Username")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("strong",{parentName:"td"},"Username")," of the current logged in user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Email")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("strong",{parentName:"td"},"Email")," of the current logged in user, if the user has an email stored.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Authenticated")),(0,r.kt)("td",{parentName:"tr",align:null},"This output will be true if a valid user session exists in the browser, i.e. there is a logged in user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Error")),(0,r.kt)("td",{parentName:"tr",align:null},"If a ",(0,r.kt)("strong",{parentName:"td"},"Fetch")," action failed to retrieve the user information from the Noodl Cloud Services this output will contain the error message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Your custom properties")),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:prop-","*","##>The value of extra properties of the ",(0,r.kt)("strong",{parentName:"td"},"User")," class specified in the Noodl Cloud Services. The node will contain the latest value of all user properties.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Fetched")),(0,r.kt)("td",{parentName:"tr",align:null},"This signal is triggered after a ",(0,r.kt)("strong",{parentName:"td"},"Fetch")," has been successfully performed. That is the ",(0,r.kt)("strong",{parentName:"td"},"Fetch")," action is triggered by a signal and the user data is return from the Noodl Cloud Services.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Changed")),(0,r.kt)("td",{parentName:"tr",align:null},"This signal is triggered when the User is changed locally by a ",(0,r.kt)("strong",{parentName:"td"},"Set User Properties")," node or a ",(0,r.kt)("strong",{parentName:"td"},"Fetch")," action of a ",(0,r.kt)("strong",{parentName:"td"},"User")," node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Failure")),(0,r.kt)("td",{parentName:"tr",align:null},"This signal is triggered when a ",(0,r.kt)("strong",{parentName:"td"},"Fetch")," action failed to retrieve the latest user data from the Noodl Cloud Services. This could be due to an invalid session.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Logged In")),(0,r.kt)("td",{parentName:"tr",align:null},"This signal is triggered when a user has been successfully logged in.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Logged Out")),(0,r.kt)("td",{parentName:"tr",align:null},"This signal is triggered when a user has been successfully logged out.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Session Lost")),(0,r.kt)("td",{parentName:"tr",align:null},"This signal is triggered when the current user session becomes invalid, e.g. if it has timed out.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Changed events")),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:changed-","*","##>This signal will be triggered when the property is changed using the ",(0,r.kt)("strong",{parentName:"td"},"Set User Property")," node or when the latest user data is retrieved from the Noodl Cloud Services with the ",(0,r.kt)("strong",{parentName:"td"},"Fetch")," action.")))))}c.isMDXComponent=!0},51559:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/login_node-cc8429afffd87aa9a5421c6a4c34b222.png"},40087:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/user_node-ca0b27a2e3a4983f8d674226395c97e0.png"}}]);