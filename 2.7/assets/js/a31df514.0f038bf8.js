"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[6224],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return n?a.createElement(h,i(i({ref:e},d),{},{components:n})):a.createElement(h,i({ref:e},d))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12971:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],o={hide_title:!0,hide_table_of_contents:!0,title:"Switch"},s=void 0,p={unversionedId:"logic/switch",id:"logic/switch",title:"Switch",description:"This node holds a boolean state. It is either true (on) or false (off).",source:"@site/nodes/logic/switch.md",sourceDirName:"logic",slug:"/logic/switch",permalink:"/2.6/nodes/logic/switch",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Switch"},sidebar:"nodeSidebar",previous:{title:"Boolean To String",permalink:"/2.6/nodes/utilities/boolean-to-string"},next:{title:"And",permalink:"/2.6/nodes/logic/and"}},d={},c=[{value:"Inputs",id:"inputs",level:2},{value:"Change state",id:"change-state",level:3},{value:"Outputs",id:"outputs",level:2}],m={toc:c};function u(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h1",{id:"switch"},"Switch"),(0,l.kt)("p",null,"This node holds a ",(0,l.kt)("span",{className:"ndl-data"},"boolean")," state. It is either ",(0,l.kt)("span",{className:"ndl-data"},"true")," (on) or ",(0,l.kt)("span",{className:"ndl-data"},"false")," (off)."),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(67150).Z,width:"640",height:"300"}))),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("h3",{id:"change-state"},"Change state"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"On")),(0,l.kt)("td",{parentName:"tr",align:null},"Sending a signal to this input sets the state of the ",(0,l.kt)("strong",{parentName:"td"},"Switch")," to ",(0,l.kt)("em",{parentName:"td"},"On"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Off")),(0,l.kt)("td",{parentName:"tr",align:null},"Sending a signal to this input sets the state of the ",(0,l.kt)("strong",{parentName:"td"},"Switch")," to ",(0,l.kt)("em",{parentName:"td"},"Off"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Flip")),(0,l.kt)("td",{parentName:"tr",align:null},"Sending a signal to this input sets the ",(0,l.kt)("strong",{parentName:"td"},"Switch")," to the opposite of its current state. If it is ",(0,l.kt)("em",{parentName:"td"},"On")," flip will set it to ",(0,l.kt)("em",{parentName:"td"},"Off")," and vice versa.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Start State")),(0,l.kt)("td",{parentName:"tr",align:null},"The starting state of the ",(0,l.kt)("strong",{parentName:"td"},"Switch"),". If the ",(0,l.kt)("em",{parentName:"td"},"Start State")," is set to ",(0,l.kt)("em",{parentName:"td"},"On")," then the ",(0,l.kt)("em",{parentName:"td"},"Switched To On")," output signal will trigger instantly when applications starts, or when a component is created dynamically.")))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Current State")),(0,l.kt)("td",{parentName:"tr",align:null},"This output is either ",(0,l.kt)("em",{parentName:"td"},"True")," or ",(0,l.kt)("em",{parentName:"td"},"False")," depending on if the ",(0,l.kt)("strong",{parentName:"td"},"Switch")," is ",(0,l.kt)("em",{parentName:"td"},"On")," or ",(0,l.kt)("em",{parentName:"td"},"Off"),".")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Switched To On")),(0,l.kt)("td",{parentName:"tr",align:null},"This signal is sent when the ",(0,l.kt)("strong",{parentName:"td"},"Switch")," goes from ",(0,l.kt)("em",{parentName:"td"},"Off")," to ",(0,l.kt)("em",{parentName:"td"},"On"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Switched To Off")),(0,l.kt)("td",{parentName:"tr",align:null},"This signal is sent when the ",(0,l.kt)("strong",{parentName:"td"},"Switch")," goes from ",(0,l.kt)("em",{parentName:"td"},"On")," to ",(0,l.kt)("em",{parentName:"td"},"Off"),".")))))}u.isMDXComponent=!0},67150:function(t,e,n){e.Z=n.p+"assets/images/switch-d0cf0e22fddb67ec23aef148a0c96b87.gif"}}]);