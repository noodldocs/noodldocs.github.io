"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[2494],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=c(n),d=o,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(b,p(p({ref:e},s),{},{components:n})):r.createElement(b,p({ref:e},s))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,p=new Array(a);p[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:o,p[1]=i;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56763:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),p=["components"],i={},l=void 0,c={unversionedId:"component-utilities/set-parent-component-object-properties",id:"component-utilities/set-parent-component-object-properties",title:"set-parent-component-object-properties",description:"With this node you can set properties on the closed parent Component Object. You can access properties of the closet parent Component Object with the Parent Component Object node.",source:"@site/nodes/component-utilities/set-parent-component-object-properties.md",sourceDirName:"component-utilities",slug:"/component-utilities/set-parent-component-object-properties",permalink:"/2.6/nodes/component-utilities/set-parent-component-object-properties",tags:[],version:"current",frontMatter:{},sidebar:"nodesSidebar",previous:{title:"set-component-object-properties",permalink:"/2.6/nodes/component-utilities/set-component-object-properties"},next:{title:"repeater",permalink:"/2.6/nodes/ui-controls/repeater"}},s=[{value:"Inputs",id:"inputs",children:[],level:2},{value:"Outputs",id:"outputs",children:[],level:2}],u={toc:s};function m(t){var e=t.components,i=(0,o.Z)(t,p);return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,""),(0,a.kt)("h1",{id:"set-parent-component-object-properties"},"Set Parent Component Object Properties"),(0,a.kt)("p",null,"With this node you can set properties on the closed parent ",(0,a.kt)("strong",{parentName:"p"},"Component Object"),". You can access properties of the closet parent ",(0,a.kt)("strong",{parentName:"p"},"Component Object")," with the ",(0,a.kt)("a",{parentName:"p",href:"/nodes/component-utilities/parent-component-object"},"Parent Component Object")," node."),(0,a.kt)("div",{class:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(77744).Z,width:"824",height:"402"}))),(0,a.kt)("p",null,""),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Signal"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{class:"ndl-signal"},"Do")),(0,a.kt)("td",{parentName:"tr",align:null},"Stores any properties that are typed in the property panel or connected. All ",(0,a.kt)("strong",{parentName:"td"},"Component Object")," nodes in the same component, as well as any ",(0,a.kt)("a",{parentName:"td",href:"/nodes/component-utilities/parent-component-object"},"Parent Component Object")," nodes, will be updated. ")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Data"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{class:"ndl-data"},"Custom Properties")),(0,a.kt)("td",{parentName:"tr",align:null},"<##input:prop-","*","##>A property to set in the ",(0,a.kt)("strong",{parentName:"td"},"Component Object"),". You can list the properties you want to set in the property panel.")))),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Signal"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{class:"ndl-signal"},"Done")),(0,a.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output when the set action is completed.")))))}m.isMDXComponent=!0},77744:function(t,e,n){e.Z=n.p+"assets/images/set-parent-component-object-properties-305c582be6151db6791e74771ea4d997.png"}}]);