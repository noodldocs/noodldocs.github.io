"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[2258],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),s=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(f,i(i({ref:e},c),{},{components:n})):a.createElement(f,i({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17161:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],o={hide_title:!0,hide_table_of_contents:!0,title:"Animate To Value"},u=void 0,s={unversionedId:"logic/animate-to-value",id:"logic/animate-to-value",title:"Animate To Value",description:"This node takes a target value and will automatically animate towards it. The animation will restart every time the target value changes.",source:"@site/nodes/logic/animate-to-value.md",sourceDirName:"logic",slug:"/logic/animate-to-value",permalink:"/2.8/nodes/logic/animate-to-value",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Animate To Value"},sidebar:"nodeSidebar",previous:{title:"Drag",permalink:"/2.8/nodes/utilities/drag"},next:{title:"Boolean To String",permalink:"/2.8/nodes/utilities/boolean-to-string"}},c={},p=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],d={toc:p};function m(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h1",{id:"animate-to-value"},"Animate To Value"),(0,l.kt)("p",null,"This node takes a target value and will automatically animate towards it. The animation will restart every time the target value changes."),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(26083).Z,width:"1372",height:"294"}))),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Target Value")),(0,l.kt)("td",{parentName:"tr",align:null},"The value to animate to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Duration")),(0,l.kt)("td",{parentName:"tr",align:null},"The duration of the animation in milliseconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Delay")),(0,l.kt)("td",{parentName:"tr",align:null},"Delay before the animation starts in milliseconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Easing Curve")),(0,l.kt)("td",{parentName:"tr",align:null},"The easing curve of the animation")))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Current Value")),(0,l.kt)("td",{parentName:"tr",align:null},"The current value of the animation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"At Target Value")),(0,l.kt)("td",{parentName:"tr",align:null},"Signals when the animation has reached its target value")))))}m.isMDXComponent=!0},26083:function(t,e,n){e.Z=n.p+"assets/images/animate-to-value-d30ab824bd18cfa06fed1d115bfdd552.png"}}]);