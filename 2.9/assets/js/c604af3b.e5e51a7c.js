"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[9810],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=c(n),m=r,f=l["".concat(s,".").concat(m)]||l[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[l]="string"==typeof e?e:r,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={hide_title:!0,hide_table_of_contents:!0,title:"Component Inputs"},a=void 0,p={unversionedId:"component-utilities/component-inputs/README",id:"component-utilities/component-inputs/README",title:"Component Inputs",description:"This node is used to create inputs for reusable components.",source:"@site/nodes/component-utilities/component-inputs/README.md",sourceDirName:"component-utilities/component-inputs",slug:"/component-utilities/component-inputs/",permalink:"/2.9/nodes/component-utilities/component-inputs/",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Component Inputs"},sidebar:"nodeSidebar",previous:{title:"Number",permalink:"/2.9/nodes/data/number/"},next:{title:"Component Outputs",permalink:"/2.9/nodes/component-utilities/component-outputs/"}},s={},c=[],u={toc:c},l="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(l,(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"component-inputs"},"Component Inputs"),(0,r.kt)("p",null,"This node is used to create inputs for reusable components."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(85133).Z,width:"1011",height:"360"}))),(0,r.kt)("p",null,"A ",(0,r.kt)("span",{className:"ndl-node"},"Component Input")," node can have multiple ports connected to inputs on the nodes inside of the component."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(68643).Z,width:"1011",height:"330"}))),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("p",null,"A very powerful feature of Noodl is the ability to create ",(0,r.kt)("strong",{parentName:"p"},"Components")," that act as reusable nodes in your application."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(66146).Z,width:"902",height:"474"}))),(0,r.kt)("p",null,"A core concept of components is that they can have inputs and outputs like any of the built in nodes."),(0,r.kt)("p",null,"The inputs of a component originate from a ",(0,r.kt)("strong",{parentName:"p"},"Component Inputs")," node and are connected to any node in the component."),(0,r.kt)("p",null,"When a ",(0,r.kt)("strong",{parentName:"p"},"Component Inputs")," node is created, it doesn't have any ports. The ports must be added by inspecting the node (left clicking it) and then clicking the ",(0,r.kt)("strong",{parentName:"p"},"+Port")," button.\nYou can create and name ports as you wish."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(27465).Z,width:"562",height:"510"}))),(0,r.kt)("p",null,"You can have multiple ",(0,r.kt)("strong",{parentName:"p"},"Component Input")," nodes in a single component. If you have multiple ",(0,r.kt)("strong",{parentName:"p"},"Component Input")," nodes with ports that share the same name, they will be merged into one input. It's important that target ports have the same or compatible types. If not, the port may not show up in instances of the component."),(0,r.kt)("p",null,"You can also create groups for your component inputs using the ",(0,r.kt)("strong",{parentName:"p"},"+Group")," button, inputs in a specific group will have that as header in the properties of the component instance node."))}d.isMDXComponent=!0},85133:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ci_node-218e858d2411e9d6d4425b1b641e0353.png"},68643:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ci_node2-256afb47f3a16f1ec17fb6f7cd023de0.png"},27465:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/component-inputs-add-31f2d87434f271fe19d14d6d1af19911.png"},66146:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/component-inputs-2c93d3043d853fb567752892837ba3bc.png"}}]);