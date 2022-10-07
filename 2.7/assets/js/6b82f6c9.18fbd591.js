"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[2250],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},p=Object.keys(t);for(a=0;a<p.length;a++)n=p[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(a=0;a<p.length;a++)n=p[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),i=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=i(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,p=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=i(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||p;return n?a.createElement(h,r(r({ref:e},u),{},{components:n})):a.createElement(h,r({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var p=n.length,r=new Array(p);r[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,r[1]=l;for(var i=2;i<p;i++)r[i]=n[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},75831:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return d}});var a=n(83117),o=n(80102),p=(n(67294),n(3905)),r=["components"],l={hide_title:!0,hide_table_of_contents:!0,title:"Show Popup"},s=void 0,i={unversionedId:"popups/show-popup",id:"popups/show-popup",title:"Show Popup",description:"This node is used to display a component as a modal popup on top of the entire window.",source:"@site/nodes/popups/show-popup.md",sourceDirName:"popups",slug:"/popups/show-popup",permalink:"/2.6/nodes/popups/show-popup",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Show Popup"},sidebar:"nodeSidebar",previous:{title:"Pop Component",permalink:"/2.6/nodes/component-stack/pop-component"},next:{title:"Close Popup",permalink:"/2.6/nodes/popups/close-popup"}},u={},d=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],c={toc:d};function m(t){var e=t.components,l=(0,o.Z)(t,r);return(0,p.kt)("wrapper",(0,a.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",{className:"is-hidden"},""),(0,p.kt)("h1",{id:"show-popup"},"Show Popup"),(0,p.kt)("p",null,"This node is used to display a component as a modal popup on top of the entire window."),(0,p.kt)("div",{className:"ndl-image-with-background"},(0,p.kt)("p",null,(0,p.kt)("img",{src:n(53812).Z,width:"560",height:"162"}))),(0,p.kt)("p",null,"The ",(0,p.kt)("span",{className:"ndl-node"},"Show Popup")," node lets you specify which component will be popped up when signaled with the ",(0,p.kt)("span",{className:"ndl-signal"},"Show")," input. Any ",(0,p.kt)("span",{className:"ndl-node"},"Component Inputs")," that the specified component has will be available as inputs to the ",(0,p.kt)("span",{className:"ndl-node"},"Show Popup")," node."),(0,p.kt)("div",{className:"ndl-image-with-background l"},(0,p.kt)("p",null,(0,p.kt)("img",{src:n(47185).Z,width:"1276",height:"344"}))),(0,p.kt)("p",{className:"is-hidden"},""),(0,p.kt)("p",null,"When a popup is closed with the ",(0,p.kt)("a",{parentName:"p",href:"/nodes/popups/close-popup"},"Close Popup")," node it is possible to send back signals and values via ",(0,p.kt)("strong",{parentName:"p"},"Results")," and ",(0,p.kt)("strong",{parentName:"p"},"Close Actions"),". These will become available as outputs for the ",(0,p.kt)("strong",{parentName:"p"},"Show Popup")," node if the target popup component contains ",(0,p.kt)("strong",{parentName:"p"},"Close Popup")," nodes."),(0,p.kt)("div",{className:"ndl-image-with-background l"},(0,p.kt)("p",null,(0,p.kt)("img",{src:n(18354).Z,width:"1056",height:"356"}))),(0,p.kt)("h2",{id:"inputs"},"Inputs"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Data"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("span",{className:"ndl-data"},"Target")),(0,p.kt)("td",{parentName:"tr",align:null},"A component that will be cloned and put on top of the entire window when the ",(0,p.kt)("strong",{parentName:"td"},"Show")," signals is received.")))),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Signal"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("span",{className:"ndl-signal"},"Show")),(0,p.kt)("td",{parentName:"tr",align:null},"Send a signal here to show the popup.")))),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Mixed"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},"Component Inputs")),(0,p.kt)("td",{parentName:"tr",align:null},"Any ",(0,p.kt)("strong",{parentName:"td"},"Component Inputs")," that the popup component have will be available as inputs.")))),(0,p.kt)("span",{className:"hidden-props-for-editor"},"A parameter input originating from a **Component Input** in the **Target** component. It's value will be forwarded to the component."),(0,p.kt)("h2",{id:"outputs"},"Outputs"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Signal"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("span",{className:"ndl-signal"},"Closed")),(0,p.kt)("td",{parentName:"tr",align:null},"This output sends a signal when the popup is closed with a ",(0,p.kt)("strong",{parentName:"td"},"Close Popup")," node. See ",(0,p.kt)("a",{parentName:"td",href:"/nodes/popups/close-popup/"},"Close Popup")," for more information.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("span",{className:"ndl-signal"},"Close Actions")),(0,p.kt)("td",{parentName:"tr",align:null},"Any close action signals provided via the ",(0,p.kt)("a",{parentName:"td",href:"/nodes/popups/close-popup/"},"Close Popup")," node from the target popup component will become available here.")))),(0,p.kt)("span",{className:"hidden-props-for-editor"},"A result signal originating from the **Target** components **Close Popup** node."),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Data"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("span",{className:"ndl-data"},"Close Results")),(0,p.kt)("td",{parentName:"tr",align:null},"Any result values provided via the ",(0,p.kt)("a",{parentName:"td",href:"/nodes/popups/close-popup/"},"Close Popup")," node from the target popup component will become available here.")))),(0,p.kt)("span",{className:"hidden-props-for-editor"},"A result output originating from the **Target** components **Close Popup** node."))}m.isMDXComponent=!0},47185:function(t,e,n){e.Z=n.p+"assets/images/show-popup-1-ab3496965167aa7ef5875178bfb99dd3.png"},53812:function(t,e,n){e.Z=n.p+"assets/images/show-popup-2-3c9fe6ef94ebe729033e830fbdd71a5f.png"},18354:function(t,e,n){e.Z=n.p+"assets/images/show-popup-3-f3353e35ff5120f9973f5215e37b882c.png"}}]);