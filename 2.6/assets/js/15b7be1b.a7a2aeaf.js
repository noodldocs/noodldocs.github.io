"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[6946],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,g=c["".concat(o,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<l;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},15801:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),s=["components"],i={hide_title:!0,hide_table_of_contents:!0,title:"User"},o=void 0,d={unversionedId:"data/user/user-node",id:"data/user/user-node",title:"User",description:"This node provides information about the current user session, if the web app has a logged in user.",source:"@site/nodes/data/user/user-node.md",sourceDirName:"data/user",slug:"/data/user/user-node",permalink:"/2.6/nodes/data/user/user-node",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"User"},sidebar:"nodeSidebar",previous:{title:"Sign Up",permalink:"/2.6/nodes/data/user/sign-up"},next:{title:"Set User Properties",permalink:"/2.6/nodes/data/user/set-user-properties"}},u={},p=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],c={toc:p};function m(e){var t=e.components,i=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h1",{id:"user"},"User"),(0,l.kt)("p",null,"This node provides information about the current user session, if the web app has a logged in user."),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(10019).Z,width:"1011",height:"360"}))),(0,l.kt)("p",null,"The ",(0,l.kt)("span",{className:"ndl-node"},"User")," node only works if the user is created in the project\u2019s Noodl Cloud Service, and is logged in via the ",(0,l.kt)("span",{className:"ndl-node"},"Log In")," node."),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(30054).Z,width:"1036",height:"610"}))),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Fetch")),(0,l.kt)("td",{parentName:"tr",align:null},"Send a signal to this input to fetch the user properties for the current logged in user from the Noodl Cloud Services. There must be a valid user session for this to work.")))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("strong",{parentName:"td"},"Id")," of the User record for the current logged in user.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Username")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("strong",{parentName:"td"},"Username")," of the current logged in user.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Email")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("strong",{parentName:"td"},"Email")," of the current logged in user, if the user has an email stored.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Authenticated")),(0,l.kt)("td",{parentName:"tr",align:null},"This output will be true if a valid user session exists in the browser, i.e. there is a logged in user.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Error")),(0,l.kt)("td",{parentName:"tr",align:null},"If a ",(0,l.kt)("strong",{parentName:"td"},"Fetch")," action failed to retrieve the user information from the Noodl Cloud Services this output will contain the error message.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Your custom properties")),(0,l.kt)("td",{parentName:"tr",align:null},"<##output:prop-","*","##>The value of extra properties of the ",(0,l.kt)("strong",{parentName:"td"},"User")," class specified in the Noodl Cloud Services. The node will contain the latest value of all user properties.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Fetched")),(0,l.kt)("td",{parentName:"tr",align:null},"This signal is triggered after a ",(0,l.kt)("strong",{parentName:"td"},"Fetch")," has been successfully performed. That is the ",(0,l.kt)("strong",{parentName:"td"},"Fetch")," action is triggered by a signal and the user data is return from the Noodl Cloud Services.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Changed")),(0,l.kt)("td",{parentName:"tr",align:null},"This signal is triggered when the User is changed locally by a ",(0,l.kt)("strong",{parentName:"td"},"Set User Properties")," node or a ",(0,l.kt)("strong",{parentName:"td"},"Fetch")," action of a ",(0,l.kt)("strong",{parentName:"td"},"User")," node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Failure")),(0,l.kt)("td",{parentName:"tr",align:null},"This signal is triggered when a ",(0,l.kt)("strong",{parentName:"td"},"Fetch")," action failed to retrieve the latest user data from the Noodl Cloud Services. This could be due to an invalid session.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Logged In")),(0,l.kt)("td",{parentName:"tr",align:null},"This signal is triggered when a user has been successfully logged in.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Logged Out")),(0,l.kt)("td",{parentName:"tr",align:null},"This signal is triggered when a user has been successfully logged out.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Session Lost")),(0,l.kt)("td",{parentName:"tr",align:null},"This signal is triggered when the current user session becomes invalid, e.g. if it has timed out.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Changed events")),(0,l.kt)("td",{parentName:"tr",align:null},"<##output:changed-","*","##>This signal will be triggered when the property is changed using the ",(0,l.kt)("strong",{parentName:"td"},"Set User Property")," node or when the latest user data is retrieved from the Noodl Cloud Services with the ",(0,l.kt)("strong",{parentName:"td"},"Fetch")," action.")))))}m.isMDXComponent=!0},30054:function(e,t,n){t.Z=n.p+"assets/images/login_node-cc8429afffd87aa9a5421c6a4c34b222.png"},10019:function(e,t,n){t.Z=n.p+"assets/images/user_node-ca0b27a2e3a4983f8d674226395c97e0.png"}}]);