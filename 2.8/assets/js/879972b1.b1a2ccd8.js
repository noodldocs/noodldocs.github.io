"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[9285],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),s=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(u,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},32895:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],o={hide_title:!0,hide_table_of_contents:!0,title:"Counter"},u=void 0,s={unversionedId:"math/counter",id:"math/counter",title:"Counter",description:"This node holds a number that can be increased or decreased with signals.",source:"@site/nodes/math/counter.md",sourceDirName:"math",slug:"/math/counter",permalink:"/2.8/nodes/math/counter",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Counter"},sidebar:"nodeSidebar",previous:{title:"Number Remapper",permalink:"/2.8/nodes/math/number-remapper"},next:{title:"Drag",permalink:"/2.8/nodes/utilities/drag"}},d={},p=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],c={toc:p};function m(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h1",{id:"counter"},"Counter"),(0,l.kt)("p",null,"This node holds a ",(0,l.kt)("span",{className:"ndl-data"},"number")," that can be increased or decreased with ",(0,l.kt)("span",{className:"ndl-signal"},"signals"),"."),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(42136).Z,width:"1011",height:"360"}))),(0,l.kt)("p",null,"The Counter node can be limited to a ",(0,l.kt)("inlineCode",{parentName:"p"},"min")," and a ",(0,l.kt)("inlineCode",{parentName:"p"},"max")," value, and the limit can be turned on and off."),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(96943).Z,width:"640",height:"280"}))),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Increase Count")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggering this action will increases the count by one.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Decrease Count")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggering this action will decrease the count by one.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Reset To Start")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggering this action will reset the counter to its ",(0,l.kt)("em",{parentName:"td"},"Start Value"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Start Value")),(0,l.kt)("td",{parentName:"tr",align:null},"The start value of the count. Defaults to zero.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Min Value")),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum value of the counter. The counter will never decrease below this value. Note that ",(0,l.kt)("strong",{parentName:"td"},"Limits Enabled")," need to be set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," for this to be in effect.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Max Value")),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum value of the counter. The counter will never increase above this value. Note that ",(0,l.kt)("strong",{parentName:"td"},"Limits Enabled")," need to be set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," for this to be in effect.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Limits Enabled")),(0,l.kt)("td",{parentName:"tr",align:null},"This input controls if the limits (",(0,l.kt)("strong",{parentName:"td"},"Min Value")," and ",(0,l.kt)("strong",{parentName:"td"},"Max Value"),") are active or disabled.")))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Current Count")),(0,l.kt)("td",{parentName:"tr",align:null},"This output contains the current count.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Count Changed")),(0,l.kt)("td",{parentName:"tr",align:null},"This signal will be triggered whenever the ",(0,l.kt)("strong",{parentName:"td"},"Current Count")," changes.")))))}m.isMDXComponent=!0},96943:function(t,e,n){e.Z=n.p+"assets/images/counter-e58f919066918023aa78a4b2680c1adf.gif"},42136:function(t,e,n){e.Z=n.p+"assets/images/counter_node-723dd34dd56eb87ad0c6525892d72d75.png"}}]);