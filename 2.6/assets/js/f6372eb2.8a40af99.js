"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[5017],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),d=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=d(n),g=a,m=c["".concat(o,".").concat(g)]||c[g]||p[g]||l;return n?r.createElement(m,s(s({ref:e},u),{},{components:n})):r.createElement(m,s({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,s=new Array(l);s[0]=c;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:a,s[1]=i;for(var d=2;d<l;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},75671:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),s=["components"],i={},o=void 0,d={unversionedId:"data/user/user",id:"data/user/user",title:"user",description:"This node provides information about the current user session, if the web app has a logged in user.",source:"@site/nodes/data/user/user.md",sourceDirName:"data/user",slug:"/data/user/",permalink:"/2.6/nodes/data/user/",tags:[],version:"current",frontMatter:{},sidebar:"nodesSidebar",previous:{title:"sign-up",permalink:"/2.6/nodes/data/user/sign-up"},next:{title:"set-user-properties",permalink:"/2.6/nodes/data/user/set-user-properties"}},u=[{value:"Inputs",id:"inputs",children:[],level:2},{value:"Outputs",id:"outputs",children:[],level:2}],p={toc:u};function c(t){var e=t.components,i=(0,a.Z)(t,s);return(0,l.kt)("wrapper",(0,r.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,""),(0,l.kt)("h1",{id:"user"},"User"),(0,l.kt)("p",null,"This node provides information about the current user session, if the web app has a logged in user."),(0,l.kt)("div",{class:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(65277).Z,width:"1011",height:"360"}))),(0,l.kt)("p",null,"The ",(0,l.kt)("span",{class:"ndl-node"},"User")," node only works if the user is created in the project\u2019s Noodl Cloud Service, and is logged in via the ",(0,l.kt)("span",{class:"ndl-node"},"Log In")," node."),(0,l.kt)("div",{class:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(71336).Z,width:"1036",height:"610"}))),(0,l.kt)("p",null,""),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-signal"},"Fetch")),(0,l.kt)("td",{parentName:"tr",align:null},"Send a signal to this input to fetch the user properties for the current logged in user from the Noodl Cloud Services. There must be a valid user session for this to work.")))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("strong",{parentName:"td"},"Id")," of the User record for the current logged in user.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Username")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("strong",{parentName:"td"},"Username")," of the current logged in user.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Email")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("strong",{parentName:"td"},"Email")," of the current logged in user, if the user has an email stored.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Authenticated")),(0,l.kt)("td",{parentName:"tr",align:null},"This output will be true if a valid user session exists in the browser, i.e. there is a logged in user.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Error")),(0,l.kt)("td",{parentName:"tr",align:null},"If a ",(0,l.kt)("strong",{parentName:"td"},"Fetch")," action failed to retrieve the user information from the Noodl Cloud Services this output will contain the error message.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Your custom properties")),(0,l.kt)("td",{parentName:"tr",align:null},"<##output:prop-","*","##>The value of extra properties of the ",(0,l.kt)("strong",{parentName:"td"},"User")," class specified in the Noodl Cloud Services. The node will contain the latest value of all user properties.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-signal"},"Fetched")),(0,l.kt)("td",{parentName:"tr",align:null},"This signal is triggered after a ",(0,l.kt)("strong",{parentName:"td"},"Fetch")," has been successfully performed. That is the ",(0,l.kt)("strong",{parentName:"td"},"Fetch")," action is triggered by a signal and the user data is return from the Noodl Cloud Services.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-signal"},"Changed")),(0,l.kt)("td",{parentName:"tr",align:null},"This signal is triggered when the User is changed locally by a ",(0,l.kt)("strong",{parentName:"td"},"Set User Properties")," node or a ",(0,l.kt)("strong",{parentName:"td"},"Fetch")," action of a ",(0,l.kt)("strong",{parentName:"td"},"User")," node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-signal"},"Failure")),(0,l.kt)("td",{parentName:"tr",align:null},"This signal is triggered when a ",(0,l.kt)("strong",{parentName:"td"},"Fetch")," action failed to retrieve the latest user data from the Noodl Cloud Services. This could be due to an invalid session.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-signal"},"Logged In")),(0,l.kt)("td",{parentName:"tr",align:null},"This signal is triggered when a user has been successfully logged in.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-signal"},"Logged Out")),(0,l.kt)("td",{parentName:"tr",align:null},"This signal is triggered when a user has been successfully logged out.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-signal"},"Session Lost")),(0,l.kt)("td",{parentName:"tr",align:null},"This signal is triggered when the current user session becomes invalid, e.g. if it has timed out.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-signal"},"Changed events")),(0,l.kt)("td",{parentName:"tr",align:null},"<##output:changed-","*","##>This signal will be triggered when the property is changed using the ",(0,l.kt)("strong",{parentName:"td"},"Set User Property")," node or when the latest user data is retrieved from the Noodl Cloud Services with the ",(0,l.kt)("strong",{parentName:"td"},"Fetch")," action.")))))}c.isMDXComponent=!0},71336:function(t,e,n){e.Z=n.p+"assets/images/login_node-cc8429afffd87aa9a5421c6a4c34b222.png"},65277:function(t,e,n){e.Z=n.p+"assets/images/user_node-ca0b27a2e3a4983f8d674226395c97e0.png"}}]);