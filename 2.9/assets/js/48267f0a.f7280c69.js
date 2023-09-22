"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[848],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},g="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),g=p(a),m=r,c=g["".concat(s,".").concat(m)]||g[m]||u[m]||i;return a?n.createElement(c,l(l({ref:e},d),{},{components:a})):n.createElement(c,l({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[g]="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},68578:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={hide_title:!0,hide_table_of_contents:!0,title:"Navigate"},l=void 0,o={unversionedId:"navigation/navigate/README",id:"navigation/navigate/README",title:"Navigate",description:"This node is used to navigate between Page nodes set up in a Page Router.",source:"@site/nodes/navigation/navigate/README.md",sourceDirName:"navigation/navigate",slug:"/navigation/navigate/",permalink:"/2.9/nodes/navigation/navigate/",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Navigate"},sidebar:"nodeSidebar",previous:{title:"Page Router",permalink:"/2.9/nodes/navigation/page-router/"},next:{title:"Page Inputs",permalink:"/2.9/nodes/navigation/page-inputs/"}},s={},p=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],d={toc:p},g="wrapper";function u(t){let{components:e,...i}=t;return(0,r.kt)(g,(0,n.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"navigate"},"Navigate"),(0,r.kt)("p",null,"This node is used to navigate between ",(0,r.kt)("span",{className:"ndl-node"},(0,r.kt)("a",{parentName:"p",href:"/nodes/navigation/page"},"Page"))," nodes set up in a ",(0,r.kt)("span",{className:"ndl-node"},(0,r.kt)("a",{parentName:"p",href:"/nodes/navigation/page-router"},"Page Router")),"."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(9872).Z,width:"880",height:"661"}))),(0,r.kt)("p",null,"You can use a ",(0,r.kt)("a",{parentName:"p",href:"/nodes/navigation/page-inputs"},"Page Inputs")," node to pass parameters to the ",(0,r.kt)("span",{className:"ndl-node"},"Page")," you are navigating to. Any ",(0,r.kt)("span",{className:"ndl-data"},"Path Parameters")," or ",(0,r.kt)("span",{className:"ndl-data"},"Query Parameters")," you add will show up as inputs to the ",(0,r.kt)("span",{className:"ndl-node"},"Navigate")," node if you select that ",(0,r.kt)("span",{className:"ndl-node"},"Page")," as the ",(0,r.kt)("span",{className:"ndl-data"},"Target Page"),"."),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("div",{className:"ndl-table-35-65"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Router")),(0,r.kt)("td",{parentName:"tr",align:null},"Here you select which ",(0,r.kt)("strong",{parentName:"td"},"Page Router")," that this ",(0,r.kt)("strong",{parentName:"td"},"Navigation")," node will act on. This input is only available if there are multiple ",(0,r.kt)("strong",{parentName:"td"},"Page Routers")," in the project.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Target Page")),(0,r.kt)("td",{parentName:"tr",align:null},"Here you select the ",(0,r.kt)("strong",{parentName:"td"},"Page")," to navigate to. The pages available are based on which ",(0,r.kt)("strong",{parentName:"td"},"Page Router")," this ",(0,r.kt)("strong",{parentName:"td"},"Navigation")," node is associated with.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Open in new tab")),(0,r.kt)("td",{parentName:"tr",align:null},"Open the new page in a new browser tab.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Navigate")),(0,r.kt)("td",{parentName:"tr",align:null},"Sending a signal to this input will perform the navigation to the ",(0,r.kt)("strong",{parentName:"td"},"Target Page"),".")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Mixed"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Page Parameters")),(0,r.kt)("td",{parentName:"tr",align:null},"Any page parameters set in the ",(0,r.kt)("a",{parentName:"td",href:"/nodes/navigation/page-inputs"},"Pages Inputs")," used by the ",(0,r.kt)("strong",{parentName:"td"},"Page")," will be available as inputs on the ",(0,r.kt)("strong",{parentName:"td"},"Navigate")," node.")))),(0,r.kt)("span",{className:"hidden-props-for-editor"}," An input parameter originating from the **Page Inputs** node of the **Target Page**.")),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("div",{className:"ndl-table-35-65"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Navigated")),(0,r.kt)("td",{parentName:"tr",align:null},"This event is triggered when a navigation as been performed."))))))}u.isMDXComponent=!0},9872:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/navigate-page-inputs-73949322f9dc238eea186c2dc520bb7e.png"}}]);