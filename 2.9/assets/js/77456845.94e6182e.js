"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[4892],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(n),k=r,c=u["".concat(s,".").concat(k)]||u[k]||m[k]||l;return n?a.createElement(c,i(i({ref:e},d),{},{components:n})):a.createElement(c,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},40749:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={hide_title:!0,title:"Visual Output Properties"},i=void 0,o={unversionedId:"shared-props/outputs/visual-output-properties",id:"shared-props/outputs/visual-output-properties",title:"Visual Output Properties",description:'@include "./_visual-output-properties.md"',source:"@site/nodes/shared-props/outputs/visual-output-properties.md",sourceDirName:"shared-props/outputs",slug:"/shared-props/outputs/visual-output-properties",permalink:"/2.9/nodes/shared-props/outputs/visual-output-properties",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,title:"Visual Output Properties"}},s={},p=[],d={toc:p},u="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"ndl-table-35-65"},(0,r.kt)("h1",null,"Visual Output Properties"),(0,r.kt)("h2",null,"Scrolling"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Scroll Position")),(0,r.kt)("td",{parentName:"tr",align:null},"The current position of scrolling in pixels.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Scroll Start")),(0,r.kt)("td",{parentName:"tr",align:null},"Signal emitted when scrolling starts.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Scroll End")),(0,r.kt)("td",{parentName:"tr",align:null},"Signal emitted when scrolling ends.")))),(0,r.kt)("h2",null,"Bounding Box"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Screen Position X")),(0,r.kt)("td",{parentName:"tr",align:null},"Where this node is on the screen's X-axis, in ",(0,r.kt)("inlineCode",{parentName:"td"},"px"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Screen Position Y")),(0,r.kt)("td",{parentName:"tr",align:null},"Where this node is on the screen's Y-axis, in ",(0,r.kt)("inlineCode",{parentName:"td"},"px"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Width")),(0,r.kt)("td",{parentName:"tr",align:null},"Current width of this node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Height")),(0,r.kt)("td",{parentName:"tr",align:null},"Current height of this node.")))),(0,r.kt)("h2",null,"Mounted"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Did Mount")),(0,r.kt)("td",{parentName:"tr",align:null},"Signal sent when this node has been mounted, i.e. has become part of the visual tree and is visible.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Will Unmount")),(0,r.kt)("td",{parentName:"tr",align:null},"Signal sent when this node is about to be removed from the visual tree and become hidden.")))),(0,r.kt)("h2",null,"Pointer Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Click")),(0,r.kt)("td",{parentName:"tr",align:null},"Triggered when the node is clicked or tapped.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Pointer Down")),(0,r.kt)("td",{parentName:"tr",align:null},"Triggered when the mouse is pressed or finger is down on the node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Pointer Up")),(0,r.kt)("td",{parentName:"tr",align:null},"Triggered when the mouse is released or finger is lifted on the node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Pointer Enter")),(0,r.kt)("td",{parentName:"tr",align:null},"Triggered when the mouse enters the node.")))),(0,r.kt)("h2",null,"Hover Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Hover Start")),(0,r.kt)("td",{parentName:"tr",align:null},"Triggered when the mouse enters the node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Hover End")),(0,r.kt)("td",{parentName:"tr",align:null},"Triggered when the mouse leaves the node.")))),(0,r.kt)("h2",null,"Focus"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Focused")),(0,r.kt)("td",{parentName:"tr",align:null},"Triggered when the node, or one if its descendants, is clicked, or if the ",(0,r.kt)("em",{parentName:"td"},"Focused")," input is triggered.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Blurred")),(0,r.kt)("td",{parentName:"tr",align:null},"Triggered when this node had focus and another node gained focus. Focus is only lost if the new focused node is not a descendant.")))),(0,r.kt)("h2",null,"Other"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Child Index")),(0,r.kt)("td",{parentName:"tr",align:null},"The place this node has in relation to its parent. E.g. if a ",(0,r.kt)("strong",{parentName:"td"},"Group")," has three children, then the first child will have ",(0,r.kt)("em",{parentName:"td"},"Child Index")," ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),", the second child will have ",(0,r.kt)("em",{parentName:"td"},"Child Index")," ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", and so on.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"This")),(0,r.kt)("td",{parentName:"tr",align:null},"A reference to this node. Used in custom ",(0,r.kt)("strong",{parentName:"td"},"JavaScript")," nodes and more.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Children Count")),(0,r.kt)("td",{parentName:"tr",align:null},"Outputs the number of children that this node has (if the node supports children)."))))))}m.isMDXComponent=!0}}]);