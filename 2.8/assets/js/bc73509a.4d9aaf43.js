"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[9385],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,g=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},31807:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),l=["components"],s={hide_title:!0,hide_table_of_contents:!0,title:"Set User Properties"},i=void 0,p={unversionedId:"data/user/set-user-properties",id:"data/user/set-user-properties",title:"Set User Properties",description:"This node is used to set properties on the currently logged in user.",source:"@site/nodes/data/user/set-user-properties.md",sourceDirName:"data/user",slug:"/data/user/set-user-properties",permalink:"/2.8/nodes/data/user/set-user-properties",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Set User Properties"},sidebar:"nodeSidebar",previous:{title:"User",permalink:"/2.8/nodes/data/user/user-node"},next:{title:"Verify Email",permalink:"/2.8/nodes/data/user/verify-email"}},u={},d=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],c={toc:d};function m(e){var t=e.components,s=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h1",{id:"set-user-properties"},"Set User Properties"),(0,o.kt)("p",null,"This node is used to set properties on the currently logged in user."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:r(27411).Z,width:"1118",height:"356"}))),(0,o.kt)("p",null,"A user needs to be logged in via either the ",(0,o.kt)("span",{className:"ndl-node"},"Sign Up")," node or the ",(0,o.kt)("span",{className:"ndl-node"},"Log In")," node. If you want to read user properties of the currently logged in user you can use the ",(0,o.kt)("span",{className:"ndl-node"},"User")," node.\n"),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Email")),(0,o.kt)("td",{parentName:"tr",align:null},"This input is used to set the ",(0,o.kt)("strong",{parentName:"td"},"Email")," property.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Your custom properties")),(0,o.kt)("td",{parentName:"tr",align:null},"<##input:prop-","*","##>A property of the ",(0,o.kt)("strong",{parentName:"td"},"User")," class. You can add additional properties to the ",(0,o.kt)("strong",{parentName:"td"},"User")," class in the Noodl Cloud Services dashboard.  These will show up as inputs on the ",(0,o.kt)("strong",{parentName:"td"},"Set User Properties")," node.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Do")),(0,o.kt)("td",{parentName:"tr",align:null},"Send a signal to this input to store the properties in the user record in the Noodl Cloud Services. Once completed the ",(0,o.kt)("strong",{parentName:"td"},"Success")," or ",(0,o.kt)("strong",{parentName:"td"},"Failure")," action will be triggered.")))),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Success")),(0,o.kt)("td",{parentName:"tr",align:null},"This event will be triggered if the properties was succesfully stored.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Failure")),(0,o.kt)("td",{parentName:"tr",align:null},"This event will be triggered if something went wrong while trying to store the properties on the ",(0,o.kt)("strong",{parentName:"td"},"User")," record in the Noodl Cloud Services. The error message can be found in the ",(0,o.kt)("strong",{parentName:"td"},"Error")," output.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Error")),(0,o.kt)("td",{parentName:"tr",align:null},"This output will contain the error message if the action failed.")))))}m.isMDXComponent=!0},27411:function(e,t,r){t.Z=r.p+"assets/images/set-user-properties-nodes-e36177b5a1a04762d83e8565099a1cf3.png"}}]);