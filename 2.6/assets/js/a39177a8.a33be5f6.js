"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[3856],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||l[m]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33793:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),i=n(44996),s=["components"],c={title:"Components",hide_title:!0},u="Components",p={unversionedId:"guides/user-interfaces/components",id:"guides/user-interfaces/components",title:"Components",description:"What you will learn in this guide",source:"@site/docs/guides/user-interfaces/components.md",sourceDirName:"guides/user-interfaces",slug:"/guides/user-interfaces/components",permalink:"/2.6/docs/guides/user-interfaces/components",tags:[],version:"current",frontMatter:{title:"Components",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Building User Interfaces Basics",permalink:"/2.6/docs/guides/user-interfaces/basics"},next:{title:"Grouping & Layout",permalink:"/2.6/docs/guides/user-interfaces/layout"}},l={},d=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Creating visual components",id:"creating-visual-components",level:2},{value:"Component Inputs &amp; Outputs",id:"component-inputs--outputs",level:2},{value:"Sheets",id:"sheets",level:2}],m={toc:d};function h(e){var t=e.components,c=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"components"},"Components"),(0,r.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,r.kt)("p",null,"In this guide you will learn how to create visual components to make re-usable UI components. This is essential to create dynamic user interfaces connected to data that we will learn later."),(0,r.kt)("h2",{id:"creating-visual-components"},"Creating visual components"),(0,r.kt)("p",null,"Visual components are parts of a user interface that can be reused. You create new visual components using the ",(0,r.kt)("strong",{parentName:"p"},"Component Panel"),"."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("video",{width:"100%",autoPlay:!0,muted:!0,loop:!0,src:(0,i.Z)("/docs/guides/user-interfaces/components/create-component.mp4")})),(0,r.kt)("p",null,"Next you give it a name and it will show up in the components list, as well as in the visual canvas. Newly created visual components only contain a single root ",(0,r.kt)("strong",{parentName:"p"},"Group")," node. Once you have your component created you can start working on it like you have already learnt, or you can cut and paste UI elements from another component that you want to make re-usable."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("video",{width:"100%",autoPlay:!0,muted:!0,loop:!0,src:(0,i.Z)("/docs/guides/user-interfaces/components/cut-n-paste.mp4")})),(0,r.kt)("p",null,"When you have your component all done, you can re-use it anywhere in your application user interface by simply dragging it from the component panel."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("video",{width:"100%",autoPlay:!0,muted:!0,loop:!0,src:(0,i.Z)("/docs/guides/user-interfaces/components/drag-component.mp4")})),(0,r.kt)("p",null,"If you prefer, you can also find your components in the node picker."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(25032).Z,width:"1092",height:"1198"}))),(0,r.kt)("h2",{id:"component-inputs--outputs"},"Component Inputs & Outputs"),(0,r.kt)("p",null,"That's a pretty neat trick. Now we can create our own re-usable UI components. But it would be even more powerful if we could turn them into templates and change some things up for each new instance of the UI component we create. This is where ",(0,r.kt)("strong",{parentName:"p"},"Component Inputs")," come into play. This is a concept where you can expose certain inputs of some of your nodes in the component as inputs to the component instance. This is done with the ",(0,r.kt)("strong",{parentName:"p"},"Component Inputs")," node."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(95633).Z,width:"1244",height:"606"}))),(0,r.kt)("p",null,"If you go ahead and edit the properties of this node you will see that you can add ",(0,r.kt)("strong",{parentName:"p"},"ports")," to it. Each port will become an input (and property) of your component instances when you use the component in your application. In this example, we create two ",(0,r.kt)("strong",{parentName:"p"},"ports")," one called ",(0,r.kt)("strong",{parentName:"p"},"Label")," and another called ",(0,r.kt)("strong",{parentName:"p"},"Button Color"),"."),(0,r.kt)("div",{className:"ndl-image-with-background m"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(81364).Z,width:"694",height:"352"}))),(0,r.kt)("p",null,"After that is done, we can go ahead and make connections from the ",(0,r.kt)("strong",{parentName:"p"},"Component Inputs")," node to the inputs that we want each ",(0,r.kt)("strong",{parentName:"p"},"Port")," to connect to. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"So the ",(0,r.kt)("strong",{parentName:"li"},"Label")," port we want to connect to the ",(0,r.kt)("strong",{parentName:"li"},"Text")," input of the ",(0,r.kt)("strong",{parentName:"li"},"Text")," node."),(0,r.kt)("li",{parentName:"ul"},"And the ",(0,r.kt)("strong",{parentName:"li"},"Button Color")," port we want to connect to the ",(0,r.kt)("strong",{parentName:"li"},"Background Color")," of the ",(0,r.kt)("strong",{parentName:"li"},"Button")," node.")),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("video",{width:"100%",autoPlay:!0,muted:!0,loop:!0,src:(0,i.Z)("/docs/guides/user-interfaces/components/connect-inputs.mp4")})),(0,r.kt)("p",null,"Now with your new component inputs in place, you will see that the ports show up as properties on your component instance and you can go ahead and customize them individually."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("video",{width:"100%",autoPlay:!0,muted:!0,loop:!0,src:(0,i.Z)("/docs/guides/user-interfaces/components/edit-inputs.mp4")})),(0,r.kt)("p",null,"This works in the same way for component outputs, you simply use the ",(0,r.kt)("strong",{parentName:"p"},"Component Outputs")," node instead. This is very useful when you are creating UI component that accept some sort of user intput via UI controls."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(29804).Z,width:"1556",height:"748"}))),(0,r.kt)("p",null,"Component inputs and outputs, and connecting to these is not just important for making re-usable UI components. It's also a core concept in connecting data to your user interfaces and creating dynamic data driver applications. We will take a closer look at that in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/data/overview"},"Working with data")," section."),(0,r.kt)("h2",{id:"sheets"},"Sheets"),(0,r.kt)("p",null,"When your application grows you will be creating more and more components and after a while the visual canvas can become crowded. When this happends it's a good idea to orginise your application into sheets. Each sheet is a new empty visual canvas for you to place more components into. To create a new sheet "),(0,r.kt)("div",{className:"ndl-image-with-background m"},(0,r.kt)("video",{width:"100%",autoPlay:!0,muted:!0,loop:!0,src:(0,i.Z)("/docs/guides/user-interfaces/components/create-sheet.mp4")})),(0,r.kt)("p",null,"You can move components between sheets by simply dragging from the components panel and dropping onto the sheet you want to move it to."))}h.isMDXComponent=!0},95633:function(e,t,n){t.Z=n.p+"assets/images/component-inputs-43ac38c863cb4e3d786a9d6428172847.png"},29804:function(e,t,n){t.Z=n.p+"assets/images/component-outputs-5bcde620175e0b170f82f4b409e63497.png"},25032:function(e,t,n){t.Z=n.p+"assets/images/create-from-node-picker-7352f317cae6d95c38cd30c4d2e77e61.png"},81364:function(e,t,n){t.Z=n.p+"assets/images/create-input-65824fbb27dbe3d89968312901c52567.png"}}]);