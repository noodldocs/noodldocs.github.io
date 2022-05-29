"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[6712],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return m}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=u(a),m=r,b=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(b,i(i({ref:e},s),{},{components:a})):n.createElement(b,i({ref:e},s))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8653:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={},p=void 0,u={unversionedId:"data/variable/set-variable",id:"data/variable/set-variable",title:"set-variable",description:"This node sets the Value of a Variable. You provide the new value on the Value input and trigger the Do action.",source:"@site/nodes/data/variable/set-variable.md",sourceDirName:"data/variable",slug:"/data/variable/set-variable",permalink:"/2.6/nodes/data/variable/set-variable",tags:[],version:"current",frontMatter:{},sidebar:"nodesSidebar",previous:{title:"create-new-object",permalink:"/2.6/nodes/data/object/create-new-object"},next:{title:"variable",permalink:"/2.6/nodes/data/variable/"}},s=[{value:"Inputs",id:"inputs",children:[],level:2},{value:"Outputs",id:"outputs",children:[],level:2}],c={toc:s};function d(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,""),(0,l.kt)("h1",{id:"set-variable"},"Set Variable"),(0,l.kt)("p",null,"This node sets the ",(0,l.kt)("strong",{parentName:"p"},"Value")," of a ",(0,l.kt)("a",{parentName:"p",href:"/nodes/data/variable/variable.md"},"Variable"),". You provide the new value on the ",(0,l.kt)("strong",{parentName:"p"},"Value")," input and trigger the ",(0,l.kt)("span",{class:"ndl-signal"},"Do")," action."),(0,l.kt)("div",{class:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:a(73776).Z,width:"936",height:"592"}))),(0,l.kt)("p",null,""),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Name")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the ",(0,l.kt)("strong",{parentName:"td"},"Variable")," to set. Note: All ",(0,l.kt)("strong",{parentName:"td"},"Variable")," nodes with the same name will share the same data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Value")),(0,l.kt)("td",{parentName:"tr",align:null},"The value that you want the ",(0,l.kt)("strong",{parentName:"td"},"Variable")," to get when you trigger the ",(0,l.kt)("span",{class:"ndl-signal"},"Do")," action.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-signal"},"Do")),(0,l.kt)("td",{parentName:"tr",align:null},"Updates the value of the ",(0,l.kt)("strong",{parentName:"td"},"Variable")," to what is currently set on the input ",(0,l.kt)("strong",{parentName:"td"},"Value"),".")))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-signal"},"Done")),(0,l.kt)("td",{parentName:"tr",align:null},"This event is triggered when the ",(0,l.kt)("strong",{parentName:"td"},"Variable")," have been set.")))))}d.isMDXComponent=!0},73776:function(t,e,a){e.Z=a.p+"assets/images/variable-1-893ac1bc391a8c5e5b2512437fc462a1.png"}}]);