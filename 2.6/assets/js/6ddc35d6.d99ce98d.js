"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[12],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=d(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(g,l(l({ref:e},p),{},{components:n})):a.createElement(g,l({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},82667:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=["components"],o={hide_title:!0,hide_table_of_contents:!0,title:"Condition"},s=void 0,d={unversionedId:"utilities/logic/condition",id:"utilities/logic/condition",title:"Condition",description:"This node evaluates a condition and sends one of two signals depending on if the condition is true or false.",source:"@site/nodes/utilities/logic/condition.md",sourceDirName:"utilities/logic",slug:"/utilities/logic/condition",permalink:"/2.6/nodes/utilities/logic/condition",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Condition"},sidebar:"nodeSidebar",previous:{title:"Or",permalink:"/2.6/nodes/logic/or"},next:{title:"Inverter",permalink:"/2.6/nodes/logic/inverter"}},p={},u=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],c={toc:u};function m(t){var e=t.components,o=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"is-hidden"},""),(0,i.kt)("h1",{id:"condition"},"Condition"),(0,i.kt)("p",null,"This node evaluates a condition and sends one of two ",(0,i.kt)("span",{className:"ndl-signal"},"signals")," depending on if the condition is ",(0,i.kt)("span",{className:"ndl-data"},"true")," or ",(0,i.kt)("span",{className:"ndl-data"},"false"),"."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(11686).Z,width:"1011",height:"360"}))),(0,i.kt)("p",null,"The input ",(0,i.kt)("span",{className:"ndl-data"},"Condition")," will be treated as a ",(0,i.kt)("span",{className:"ndl-data"},"boolean"),", and the evaluation happens when the input changes, unless an explict ",(0,i.kt)("span",{className:"ndl-signal"},"signal")," is connected to the ",(0,i.kt)("span",{className:"ndl-signal"},"Evaluate")," input."),(0,i.kt)("p",{className:"is-hidden"},""),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(47605).Z,width:"640",height:"280"}))),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Condition")),(0,i.kt)("td",{parentName:"tr",align:null},"A boolean that decides which output signal (",(0,i.kt)("strong",{parentName:"td"},"On true")," or ",(0,i.kt)("strong",{parentName:"td"},"On false"),") that should be triggered when the ",(0,i.kt)("strong",{parentName:"td"},"Evaluate")," signal is triggered or when the condition changes, if the ",(0,i.kt)("strong",{parentName:"td"},"Evaluate")," signal is not connected.")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Signal"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-signal"},"Evaluate")),(0,i.kt)("td",{parentName:"tr",align:null},"Evaluates the ",(0,i.kt)("strong",{parentName:"td"},"Condition")," input and triggers the respective output signal. If no signal is connected to Evaluate, the node will evaluate the input everytime the input changes.")))),(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Is True")),(0,i.kt)("td",{parentName:"tr",align:null},"A ",(0,i.kt)("span",{className:"ndl-data"},"boolean")," that is ",(0,i.kt)("span",{className:"ndl-data"},"true")," when the latest evaluated value on the ",(0,i.kt)("strong",{parentName:"td"},"Condition")," input is true. ")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Is False")),(0,i.kt)("td",{parentName:"tr",align:null},"A ",(0,i.kt)("span",{className:"ndl-data"},"boolean")," that is ",(0,i.kt)("span",{className:"ndl-data"},"false")," when the latest evaluated value on the ",(0,i.kt)("strong",{parentName:"td"},"Condition")," input is false. ")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Signal"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-signal"},"On True")),(0,i.kt)("td",{parentName:"tr",align:null},"Triggered when ",(0,i.kt)("strong",{parentName:"td"},"Evaluate")," is triggered and ",(0,i.kt)("strong",{parentName:"td"},"Condition")," is ",(0,i.kt)("span",{className:"ndl-data"},"true."),"")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-signal"},"On False")),(0,i.kt)("td",{parentName:"tr",align:null},"Triggered when ",(0,i.kt)("strong",{parentName:"td"},"Evaluate")," is triggered and ",(0,i.kt)("strong",{parentName:"td"},"Condition")," is ",(0,i.kt)("span",{className:"ndl-data"},"false."),"")))))}m.isMDXComponent=!0},47605:function(t,e,n){e.Z=n.p+"assets/images/condition-d34875d5918744ce62cfd2f902d70c29.gif"},11686:function(t,e,n){e.Z=n.p+"assets/images/condition_node-e3aa88beab5977e42926fb3f710bfbc7.png"}}]);