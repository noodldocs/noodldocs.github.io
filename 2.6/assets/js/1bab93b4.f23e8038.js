"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[5392],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,o(o({ref:e},p),{},{components:n})):a.createElement(k,o({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3307:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={},s=void 0,u={unversionedId:"data/boolean",id:"data/boolean",title:"boolean",description:"This node holds a boolean (true/false) value. You can use it to quickly store a boolean using the Set input. It can also be used to hold a static value in logical operations.",source:"@site/nodes/data/boolean.md",sourceDirName:"data",slug:"/data/boolean",permalink:"/2.5/nodes/data/boolean",tags:[],version:"current",frontMatter:{},sidebar:"nodesSidebar",previous:{title:"string",permalink:"/2.5/nodes/data/string"},next:{title:"color",permalink:"/2.5/nodes/data/color"}},p=[{value:"Inputs",id:"inputs",children:[],level:2},{value:"Outputs",id:"outputs",children:[],level:2}],d={toc:p};function c(t){var e=t.components,i=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,""),(0,l.kt)("h1",{id:"boolean"},"Boolean"),(0,l.kt)("p",null,"This node holds a ",(0,l.kt)("span",{class:"ndl-data"},"boolean")," (true/false) value. You can use it to quickly store a ",(0,l.kt)("span",{class:"ndl-data"},"boolean")," using the ",(0,l.kt)("span",{class:"ndl-signal"},"Set")," input. It can also be used to hold a static value in logical operations."),(0,l.kt)("div",{class:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(6346).Z,width:"1674",height:"516"}))),(0,l.kt)("p",null,"You can connect the ",(0,l.kt)("span",{class:"ndl-node"},"Boolean")," node to a ",(0,l.kt)("span",{class:"ndl-node"},"Component Inputs")," node. This will make the input shows up as a ",(0,l.kt)("span",{class:"ndl-data"},"boolean")," (checkbox) in the Property Panel for instances of this component."),(0,l.kt)("div",{class:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(1630).Z,width:"1178",height:"464"}))),(0,l.kt)("p",null,""),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Value")),(0,l.kt)("td",{parentName:"tr",align:null},"The value to store in the node. The output value will equal this value, unless ",(0,l.kt)("em",{parentName:"td"},"Set")," is connected, then it will be updated when ",(0,l.kt)("strong",{parentName:"td"},"Set")," receives a signal.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-signal"},"Set")),(0,l.kt)("td",{parentName:"tr",align:null},"This is used to only update the output when ",(0,l.kt)("em",{parentName:"td"},"Save Value")," is set to true. This will allow you to freeze the stored value and only allow it to update under certain conditions, e.g. on a Tap.")))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Value")),(0,l.kt)("td",{parentName:"tr",align:null},"The boolean stored in the node")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-signal"},"Stored")),(0,l.kt)("td",{parentName:"tr",align:null},"This port sends a signal when the value is stored via the ",(0,l.kt)("em",{parentName:"td"},"Set")," input signal.")))))}c.isMDXComponent=!0},6346:function(t,e,n){e.Z=n.p+"assets/images/boolean-1-38f0d9e5fec312eb5ad581c9f9596f9d.png"},1630:function(t,e,n){e.Z=n.p+"assets/images/boolean-2-ee8f5aafaff465b1ff38d82044aed36d.png"}}]);