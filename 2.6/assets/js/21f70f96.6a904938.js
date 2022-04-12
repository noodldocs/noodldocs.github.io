"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[2440],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=o.createContext({}),s=function(t){var e=o.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return o.createElement(u.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||l[d]||a;return n?o.createElement(f,i(i({ref:e},c),{},{components:n})):o.createElement(f,i({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94387:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],p={hide_title:!0,hide_table_of_contents:!0,title:"Component Outputs"},u=void 0,s={unversionedId:"component-utilities/component-outputs",id:"component-utilities/component-outputs",title:"Component Outputs",description:"This node is used to create outputs for reusable components.",source:"@site/nodes/component-utilities/component-outputs.md",sourceDirName:"component-utilities",slug:"/component-utilities/component-outputs",permalink:"/2.6/nodes/component-utilities/component-outputs",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Component Outputs"},sidebar:"nodeSidebar",previous:{title:"Component Inputs",permalink:"/2.6/nodes/component-utilities/component-inputs"},next:{title:"Component Children",permalink:"/2.6/nodes/component-utilities/component-children"}},c={},l=[],m={toc:l};function d(t){var e=t.components,p=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,p,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"is-hidden"},""),(0,a.kt)("h1",{id:"component-outputs"},"Component Outputs"),(0,a.kt)("p",null,"This node is used to create outputs for reusable components."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(92016).Z,width:"1017",height:"360"}))),(0,a.kt)("p",null,"A ",(0,a.kt)("span",{className:"ndl-node"},"Component Output")," node can have as many ports as needed and can make output properties from the nodes available on the custom component."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(167).Z,width:"1011",height:"357"}))),(0,a.kt)("p",{className:"is-hidden"},""),(0,a.kt)("p",null,"A very powerful feature of Noodl is the ability to create ",(0,a.kt)("strong",{parentName:"p"},"Components")," that act as reusable nodes in your application. A core concept of components is that they can have inputs and outputs like any of the built in nodes."),(0,a.kt)("div",{className:"ndl-image-with-background"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(53456).Z,width:"850",height:"298"}))),(0,a.kt)("p",null,"The outputs of a component are derived from a ",(0,a.kt)("strong",{parentName:"p"},"Component Outputs")," node and are\nconnected to any other node in the component."),(0,a.kt)("p",null,"When a ",(0,a.kt)("strong",{parentName:"p"},"Component Outputs")," node is created, it doesn't have any ports. The ports must be added by inspecting the node (left clicking it) and then clicking the ",(0,a.kt)("strong",{parentName:"p"},"+Port")," button.\nYou can create and name ports as you wish."),(0,a.kt)("div",{className:"ndl-image-with-background"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(58417).Z,width:"678",height:"310"}))),(0,a.kt)("p",null,"Once you have created your output ports on the ",(0,a.kt)("strong",{parentName:"p"},"Component Outputs")," node, you can connect any port from any node in your component node graph to the ",(0,a.kt)("strong",{parentName:"p"},"Component Outputs"),". These connected ports will now be available as outputs from the component when it is used in other places in your Noodl application."),(0,a.kt)("p",null,"You may have multiple ",(0,a.kt)("strong",{parentName:"p"},"Component Outputs")," nodes in a single component. If you have multiple nodes with\nports of the same name, they will be merged into one output."),(0,a.kt)("p",null,"You can also create groups of component outputs by using the ",(0,a.kt)("strong",{parentName:"p"},"+Group")," button, you can drag outputs up and down in the list. The label of the groups will be shown in connection panel of the component instance node."))}d.isMDXComponent=!0},92016:function(t,e,n){e.Z=n.p+"assets/images/co_node1-c79f65cfd287d97ac94475e8811ad72f.png"},167:function(t,e,n){e.Z=n.p+"assets/images/co_node2-023c8e7b95e4542e02b11cc5e0487b09.png"},58417:function(t,e,n){e.Z=n.p+"assets/images/component-output-ports-f408b06372c4d0b187cf5a62751117a9.png"},53456:function(t,e,n){e.Z=n.p+"assets/images/component-outputs-233b57a8cf81ad7b1ec8ea16ce96201b.png"}}]);