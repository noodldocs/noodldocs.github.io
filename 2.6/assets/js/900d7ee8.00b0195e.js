"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[312],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(g,i(i({ref:e},p),{},{components:n})):r.createElement(g,i({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2379:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},s=void 0,u={unversionedId:"utilities/delay",id:"utilities/delay",title:"delay",description:"This node lets you delay signals by the specified amount of milliseconds.",source:"@site/nodes/utilities/delay.md",sourceDirName:"utilities",slug:"/utilities/delay",permalink:"/2.5/nodes/utilities/delay",tags:[],version:"current",frontMatter:{},sidebar:"nodesSidebar",previous:{title:"value-changed",permalink:"/2.5/nodes/logic/value-changed"},next:{title:"color-blend",permalink:"/2.5/nodes/utilities/color-blend"}},p=[{value:"Inputs",id:"inputs",children:[],level:2},{value:"Outputs",id:"outputs",children:[],level:2}],d={toc:p};function c(t){var e=t.components,o=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,""),(0,l.kt)("h1",{id:"delay"},"Delay"),(0,l.kt)("p",null,"This node lets you delay ",(0,l.kt)("span",{class:"ndl-signal"},"signals")," by the specified amount of milliseconds."),(0,l.kt)("div",{class:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(2002).Z,width:"1011",height:"360"}))),(0,l.kt)("p",null,""),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-signal"},"Start")),(0,l.kt)("td",{parentName:"tr",align:null},"Starts the timer. Does nothing if the timer is already running.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-signal"},"Restart")),(0,l.kt)("td",{parentName:"tr",align:null},"Starts the timer. Restarts the timer if the timer is already running.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-signal"},"Stop")),(0,l.kt)("td",{parentName:"tr",align:null},"Stops the timer if it's running. Does nothing otherwise.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Duration")),(0,l.kt)("td",{parentName:"tr",align:null},"The duration of the timer in milliseconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Start Delay")),(0,l.kt)("td",{parentName:"tr",align:null},"The delay before the timer starts after the ",(0,l.kt)("em",{parentName:"td"},"Start")," input is triggered. Specified in milliseconds.")))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-signal"},"Started")),(0,l.kt)("td",{parentName:"tr",align:null},"Signal emitted when the timer starts.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-signal"},"Finished")),(0,l.kt)("td",{parentName:"tr",align:null},"Signal emitted when the timer is finished.")))))}c.isMDXComponent=!0},2002:function(t,e,n){e.Z=n.p+"assets/images/delay_node-db0b7269a919c8eed2d385c3b385110b.png"}}]);