"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[2250],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>h});var a=n(67294);function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,p=function(t,e){if(null==t)return{};var n,a,p={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(p[n]=t[n]);return p}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(p[n]=t[n])}return p}var s=a.createContext({}),i=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=i(t.components);return a.createElement(s.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,p=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=i(n),c=p,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return n?a.createElement(h,r(r({ref:e},u),{},{components:n})):a.createElement(h,r({ref:e},u))}));function h(t,e){var n=arguments,p=e&&e.mdxType;if("string"==typeof t||p){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:p,r[1]=l;for(var i=2;i<o;i++)r[i]=n[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},75831:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=n(87462),p=(n(67294),n(3905));const o={hide_title:!0,hide_table_of_contents:!0,title:"Show Popup"},r=void 0,l={unversionedId:"popups/show-popup",id:"popups/show-popup",title:"Show Popup",description:"This node is used to display a component as a modal popup on top of the entire window.",source:"@site/nodes/popups/show-popup.md",sourceDirName:"popups",slug:"/popups/show-popup",permalink:"/2.8/nodes/popups/show-popup",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Show Popup"},sidebar:"nodeSidebar",previous:{title:"Pop Component",permalink:"/2.8/nodes/component-stack/pop-component"},next:{title:"Close Popup",permalink:"/2.8/nodes/popups/close-popup"}},s={},i=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],u={toc:i},d="wrapper";function m(t){let{components:e,...o}=t;return(0,p.kt)(d,(0,a.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",{className:"is-hidden"},""),(0,p.kt)("h1",{id:"show-popup"},"Show Popup"),(0,p.kt)("p",null,"This node is used to display a component as a modal popup on top of the entire window."),(0,p.kt)("div",{className:"ndl-image-with-background"},(0,p.kt)("p",null,(0,p.kt)("img",{src:n(91291).Z,width:"560",height:"162"}))),(0,p.kt)("p",null,"The ",(0,p.kt)("span",{className:"ndl-node"},"Show Popup")," node lets you specify which component will be popped up when signaled with the ",(0,p.kt)("span",{className:"ndl-signal"},"Show")," input. Any ",(0,p.kt)("span",{className:"ndl-node"},"Component Inputs")," that the specified component has will be available as inputs to the ",(0,p.kt)("span",{className:"ndl-node"},"Show Popup")," node."),(0,p.kt)("div",{className:"ndl-image-with-background l"},(0,p.kt)("p",null,(0,p.kt)("img",{src:n(70442).Z,width:"1276",height:"344"}))),(0,p.kt)("p",{className:"is-hidden"},""),(0,p.kt)("p",null,"When a popup is closed with the ",(0,p.kt)("a",{parentName:"p",href:"/nodes/popups/close-popup"},"Close Popup")," node it is possible to send back signals and values via ",(0,p.kt)("strong",{parentName:"p"},"Results")," and ",(0,p.kt)("strong",{parentName:"p"},"Close Actions"),". These will become available as outputs for the ",(0,p.kt)("strong",{parentName:"p"},"Show Popup")," node if the target popup component contains ",(0,p.kt)("strong",{parentName:"p"},"Close Popup")," nodes."),(0,p.kt)("div",{className:"ndl-image-with-background l"},(0,p.kt)("p",null,(0,p.kt)("img",{src:n(84278).Z,width:"1056",height:"356"}))),(0,p.kt)("h2",{id:"inputs"},"Inputs"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Data"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("span",{className:"ndl-data"},"Target")),(0,p.kt)("td",{parentName:"tr",align:null},"A component that will be cloned and put on top of the entire window when the ",(0,p.kt)("strong",{parentName:"td"},"Show")," signals is received.")))),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Signal"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("span",{className:"ndl-signal"},"Show")),(0,p.kt)("td",{parentName:"tr",align:null},"Send a signal here to show the popup.")))),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Mixed"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"Component Inputs")),(0,p.kt)("td",{parentName:"tr",align:null},"Any ",(0,p.kt)("strong",{parentName:"td"},"Component Inputs")," that the popup component have will be available as inputs.")))),(0,p.kt)("span",{className:"hidden-props-for-editor"},"A parameter input originating from a **Component Input** in the **Target** component. It's value will be forwarded to the component."),(0,p.kt)("h2",{id:"outputs"},"Outputs"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Signal"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("span",{className:"ndl-signal"},"Closed")),(0,p.kt)("td",{parentName:"tr",align:null},"This output sends a signal when the popup is closed with a ",(0,p.kt)("strong",{parentName:"td"},"Close Popup")," node. See ",(0,p.kt)("a",{parentName:"td",href:"/nodes/popups/close-popup/"},"Close Popup")," for more information.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("span",{className:"ndl-signal"},"Close Actions")),(0,p.kt)("td",{parentName:"tr",align:null},"Any close action signals provided via the ",(0,p.kt)("a",{parentName:"td",href:"/nodes/popups/close-popup/"},"Close Popup")," node from the target popup component will become available here.")))),(0,p.kt)("span",{className:"hidden-props-for-editor"},"A result signal originating from the **Target** components **Close Popup** node."),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Data"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("span",{className:"ndl-data"},"Close Results")),(0,p.kt)("td",{parentName:"tr",align:null},"Any result values provided via the ",(0,p.kt)("a",{parentName:"td",href:"/nodes/popups/close-popup/"},"Close Popup")," node from the target popup component will become available here.")))),(0,p.kt)("span",{className:"hidden-props-for-editor"},"A result output originating from the **Target** components **Close Popup** node."))}m.isMDXComponent=!0},70442:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/show-popup-1-ab3496965167aa7ef5875178bfb99dd3.png"},91291:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/show-popup-2-3c9fe6ef94ebe729033e830fbdd71a5f.png"},84278:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/show-popup-3-f3353e35ff5120f9973f5215e37b882c.png"}}]);