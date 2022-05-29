"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[9409],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=o.createContext({}),c=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},u=function(t){var e=c(t.components);return o.createElement(s.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=a(t,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||i;return n?o.createElement(f,p(p({ref:e},u),{},{components:n})):o.createElement(f,p({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,p=new Array(i);p[0]=m;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a.mdxType="string"==typeof t?t:r,p[1]=a;for(var c=2;c<i;c++)p[c]=n[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42910:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),p=["components"],a={},s=void 0,c={unversionedId:"component-utilities/component-inputs",id:"component-utilities/component-inputs",title:"component-inputs",description:"This node is used to create inputs for reusable components.",source:"@site/nodes/component-utilities/component-inputs.md",sourceDirName:"component-utilities",slug:"/component-utilities/component-inputs",permalink:"/2.6/nodes/component-utilities/component-inputs",tags:[],version:"current",frontMatter:{},sidebar:"nodesSidebar",previous:{title:"number",permalink:"/2.6/nodes/data/number"},next:{title:"component-outputs",permalink:"/2.6/nodes/component-utilities/component-outputs"}},u=[],l={toc:u};function m(t){var e=t.components,a=(0,r.Z)(t,p);return(0,i.kt)("wrapper",(0,o.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,""),(0,i.kt)("h1",{id:"component-inputs"},"Component Inputs"),(0,i.kt)("p",null,"This node is used to create inputs for reusable components."),(0,i.kt)("div",{class:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(66950).Z,width:"1011",height:"360"}))),(0,i.kt)("p",null,"A ",(0,i.kt)("span",{class:"ndl-node"},"Component Input")," node can have multiple ports connected to inputs on the nodes inside of the component."),(0,i.kt)("div",{class:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(32670).Z,width:"1011",height:"330"}))),(0,i.kt)("p",null,""),(0,i.kt)("p",null,"A very powerful feature of Noodl is the ability to create ",(0,i.kt)("strong",{parentName:"p"},"Components")," that act as reusable nodes in your application."),(0,i.kt)("div",{class:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4092).Z,width:"902",height:"474"}))),(0,i.kt)("p",null,"A core concept of components is that they can have inputs and outputs like any of the built in nodes."),(0,i.kt)("p",null,"The inputs of a component originate from a ",(0,i.kt)("strong",{parentName:"p"},"Component Inputs")," node and are connected to any node in the component."),(0,i.kt)("p",null,"When a ",(0,i.kt)("strong",{parentName:"p"},"Component Inputs")," node is created, it doesn't have any ports. The ports must be added by inspecting the node (left clicking it) and then clicking the ",(0,i.kt)("strong",{parentName:"p"},"+Port")," button.\nYou can create and name ports as you wish."),(0,i.kt)("div",{class:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(31934).Z,width:"562",height:"510"}))),(0,i.kt)("p",null,"You can have multiple ",(0,i.kt)("strong",{parentName:"p"},"Component Input")," nodes in a single component. If you have multiple ",(0,i.kt)("strong",{parentName:"p"},"Component Input")," nodes with ports that share the same name, they will be merged into one input. It's important that target ports have the same or compatible types. If not, the port may not show up in instances of the component."),(0,i.kt)("p",null,"You can also create groups for your component inputs using the ",(0,i.kt)("strong",{parentName:"p"},"+Group")," button, inputs in a specific group will have that as header in the properties of the component instance node."))}m.isMDXComponent=!0},66950:function(t,e,n){e.Z=n.p+"assets/images/ci_node-218e858d2411e9d6d4425b1b641e0353.png"},32670:function(t,e,n){e.Z=n.p+"assets/images/ci_node2-256afb47f3a16f1ec17fb6f7cd023de0.png"},31934:function(t,e,n){e.Z=n.p+"assets/images/component-inputs-add-31f2d87434f271fe19d14d6d1af19911.png"},4092:function(t,e,n){e.Z=n.p+"assets/images/component-inputs-2c93d3043d853fb567752892837ba3bc.png"}}]);