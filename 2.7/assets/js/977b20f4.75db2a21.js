"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[7275],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},57233:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),l=["components"],o={hide_title:!0,hide_table_of_contents:!0,title:"Verify Email"},s=void 0,u={unversionedId:"data/user/verify-email",id:"data/user/verify-email",title:"Verify Email",description:"This node is used to verify the email of a user. When this action is performed successfully the emailVerified property of the User will be set to true. You can use this property to enable or disable certain parts of your application. This node will need two things to successfully verify the user email, the Username and a secret Token that should be delivered to your user when they sign up or via the Send Email Verification action node.",source:"@site/nodes/data/user/verify-email.md",sourceDirName:"data/user",slug:"/data/user/verify-email",permalink:"/2.7/nodes/data/user/verify-email",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Verify Email"},sidebar:"nodeSidebar",previous:{title:"Set User Properties",permalink:"/2.7/nodes/data/user/set-user-properties"},next:{title:"Send Email Verification",permalink:"/2.7/nodes/data/user/send-email-verification"}},p={},d=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],c={toc:d};function m(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"is-hidden"},""),(0,i.kt)("h1",{id:"verify-email"},"Verify Email"),(0,i.kt)("p",null,"This node is used to verify the email of a user. When this action is performed successfully the ",(0,i.kt)("span",{className:"ndl-data"},"emailVerified")," property of the ",(0,i.kt)("span",{className:"ndl-data"},"User")," will be set to true. You can use this property to enable or disable certain parts of your application. This node will need two things to successfully verify the user email, the ",(0,i.kt)("span",{className:"ndl-data"},"Username")," and a secret ",(0,i.kt)("span",{className:"ndl-data"},"Token")," that should be delivered to your user when they sign up or via the ",(0,i.kt)("a",{parentName:"p",href:"/nodes/data/user/send-email-verification"},"Send Email Verification")," action node."),(0,i.kt)("p",null,"Generally your application should have a specific ",(0,i.kt)("strong",{parentName:"p"},"email verification page")," that is linked to from the verification email, the username and token should be provided as query parameters to the page. Once you have hooked that up you need to trigger the ",(0,i.kt)("span",{className:"ndl-signal"},"Do")," action, preferably when the page loads via the ",(0,i.kt)("span",{className:"ndl-signal"},"Did Mount")," signal."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:a(94220).Z,width:"1452",height:"606"}))),(0,i.kt)("p",{className:"is-hidden"},""),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Signal"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-signal"},"Do")),(0,i.kt)("td",{parentName:"tr",align:null},"Send a signal to this action to attempt to verify the email for the provided username and token.")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Username")),(0,i.kt)("td",{parentName:"tr",align:null},"The username that this action will attempt to verify the email for.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Token")),(0,i.kt)("td",{parentName:"tr",align:null},"The secret token needed to verify the email.")))),(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Signal"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-signal"},"Success")),(0,i.kt)("td",{parentName:"tr",align:null},"The email was successfully verified.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-signal"},"Failure")),(0,i.kt)("td",{parentName:"tr",align:null},"This event will be triggered if something when wrong when trying to verify the email. The error message can be found in the ",(0,i.kt)("strong",{parentName:"td"},"Error")," output.")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Error")),(0,i.kt)("td",{parentName:"tr",align:null},"This output will contain the error message if the action failed.")))))}m.isMDXComponent=!0},94220:function(e,t,a){t.Z=a.p+"assets/images/verify-email-ea08bae9aec1e5b112a2eb1c470d0d11.png"}}]);