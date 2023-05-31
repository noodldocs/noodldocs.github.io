"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[1543],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},b=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=s(a),b=r,m=d["".concat(p,".").concat(b)]||d[b]||u[b]||o;return a?n.createElement(m,l(l({ref:e},c),{},{components:a})):n.createElement(m,l({ref:e},c))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=b;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[d]="string"==typeof t?t:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},64639:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={hide_title:!0,hide_table_of_contents:!0,title:"Create New Object"},l=void 0,i={unversionedId:"data/object/create-new-object",id:"data/object/create-new-object",title:"Create New Object",description:"The node can be used to create a fresh new Object.",source:"@site/nodes/data/object/create-new-object.md",sourceDirName:"data/object",slug:"/data/object/create-new-object",permalink:"/2.8/nodes/data/object/create-new-object",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Create New Object"},sidebar:"nodeSidebar",previous:{title:"Set Object Properties",permalink:"/2.8/nodes/data/object/set-object-properties"},next:{title:"Set Variable",permalink:"/2.8/nodes/data/variable/set-variable"}},p={},s=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],c={toc:s},d="wrapper";function u(t){let{components:e,...o}=t;return(0,r.kt)(d,(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"create-new-object"},"Create New Object"),(0,r.kt)("p",null,"The node can be used to create a fresh new ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/object/object-node"},"Object"),"."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(85021).Z,width:"1462",height:"334"}))),(0,r.kt)("p",null,"You can provide any number of properties with values for your new Object. When the ",(0,r.kt)("strong",{parentName:"p"},"Done")," signal is sent the Object is created and you can perform other actions using the Object."),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Properties To Set")),(0,r.kt)("td",{parentName:"tr",align:null},"You can specify which properties to set by adding them to this list. Object don't have a schema with predefined properties like Records so you can choose any property name you want.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Property Types")),(0,r.kt)("td",{parentName:"tr",align:null},"Each property that you want to set will give you the option of setting the type of the value that you want to set to that property.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Property Values")),(0,r.kt)("td",{parentName:"tr",align:null},"<##input:prop-","*","##>The value to set on the Object property when the action is performed. (Signal is receieved on the ",(0,r.kt)("strong",{parentName:"td"},"Do")," input) Each property that you want to set (that was added to the ",(0,r.kt)("strong",{parentName:"td"},"Properties to set")," section above) will get it's own input both in the property panel and as a connection input.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Do")),(0,r.kt)("td",{parentName:"tr",align:null},"Send a signal in this input to create the new Object with the provided properties.")))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Id")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("strong",{parentName:"td"},"Id")," of the newly created object, this output is valid only when the ",(0,r.kt)("strong",{parentName:"td"},"Done")," signal has been sent.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Done")),(0,r.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output when the Object have been created.")))))}u.isMDXComponent=!0},85021:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/create-new-object-0383a2875ec4b92e57059882fbab5436.png"}}]);