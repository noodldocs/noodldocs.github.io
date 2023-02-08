"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[9665],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return m}});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=o.createContext({}),c=function(t){var e=o.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},l=function(t){var e=c(t.components);return o.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,p=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(f,s(s({ref:e},l),{},{components:n})):o.createElement(f,s({ref:e},l))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48418:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),s=["components"],i={title:"Toast",hide_title:!0},p="Toast",c={unversionedId:"prefabs/toast/README",id:"prefabs/toast/README",title:"Toast",description:"A UI component for displaying Toast messages. This UI component comes with four Toast variations; A Warning, Error, Success, and a Neutral variation. This component utilizes the Show Popup node to display the toast from a Signal input, you can read more about popups in this guide.",source:"@site/library/prefabs/toast/README.md",sourceDirName:"prefabs/toast",slug:"/prefabs/toast/",permalink:"/2.8/library/prefabs/toast/",tags:[],version:"current",frontMatter:{title:"Toast",hide_title:!0},sidebar:"toastSidebar"},l={},u=[],d={toc:u};function m(t){var e=t.components,i=(0,a.Z)(t,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"toast"},"Toast"),(0,r.kt)("p",null,"A UI component for displaying Toast messages. This UI component comes with four Toast variations; A ",(0,r.kt)("strong",{parentName:"p"},"Warning"),", ",(0,r.kt)("strong",{parentName:"p"},"Error"),", ",(0,r.kt)("strong",{parentName:"p"},"Success"),", and a ",(0,r.kt)("strong",{parentName:"p"},"Neutral")," variation. This component utilizes the ",(0,r.kt)("strong",{parentName:"p"},"Show Popup")," node to display the toast from a Signal input, you can read more about popups in this ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/navigation/popups"},"guide"),"."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(21702).Z,width:"680",height:"598"}))),(0,r.kt)("p",null,"After cloning the prefab you will see a logic component called ",(0,r.kt)("strong",{parentName:"p"},"Show Toast")," in your project. The example below demonstrates how to show the Toast with a click event from a Button node, by connecting a Signal to the ",(0,r.kt)("strong",{parentName:"p"},"Do")," Input of the ",(0,r.kt)("strong",{parentName:"p"},"Show Toast")," node. In the Sidebar you can select what Toast type to show."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(79138).Z,width:"1748",height:"798"}))),(0,r.kt)("p",null,"You can modify the appearence of the toast by editing the sub components of the ",(0,r.kt)("strong",{parentName:"p"},"Show Toast")," parent component. Each type of toast has its own component with its unique styling, and the ",(0,r.kt)("strong",{parentName:"p"},"Toast Component")," contains animations and logic that are shared between all types of toasts."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(95690).Z,width:"558",height:"454"}))),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"Toast Component")," you can modify the show and hide transition using the ",(0,r.kt)("strong",{parentName:"p"},"State")," node. You can read more about how to use the ",(0,r.kt)("strong",{parentName:"p"},"State")," node in this ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/user-interfaces/states"},"guide"),". A ",(0,r.kt)("strong",{parentName:"p"},"Delay")," node is used to control the time the toast is visible, and the ",(0,r.kt)("strong",{parentName:"p"},"Close Popup")," is triggered after the close transition is completed (important)."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(33233).Z,width:"2026",height:"802"}))),(0,r.kt)("p",null,"The content of a toast component for a specific type is faily straight forward. It contains the visual elements of the toast and the message as a ",(0,r.kt)("strong",{parentName:"p"},"Component Input"),"."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(16645).Z,width:"1280",height:"648"}))),(0,r.kt)("p",null,"If you want to add additional types of toast you will need to modify the ",(0,r.kt)("strong",{parentName:"p"},"State")," node in the ",(0,r.kt)("strong",{parentName:"p"},"Show Toast")," logic parent component. It contains a state for each type of toast. You will then need to create a child component with the corresponding name (simply duplicate one of the existing components, such as ",(0,r.kt)("strong",{parentName:"p"},"Normal")," and rename it)."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(30322).Z,width:"2060",height:"696"}))))}m.isMDXComponent=!0},95690:function(t,e,n){e.Z=n.p+"assets/images/toast-components-24a3ac99d008c4f41b3b7f5e23bbd920.png"},79138:function(t,e,n){e.Z=n.p+"assets/images/toast-inuse-13625ddd5c7855d22eb55a46081dbe98.png"},16645:function(t,e,n){e.Z=n.p+"assets/images/toast-nodes-2-4b491e24377b736de7a3f6f61c988076.png"},30322:function(t,e,n){e.Z=n.p+"assets/images/toast-nodes-3-06780937af43bb756bac82fbed9898b6.png"},33233:function(t,e,n){e.Z=n.p+"assets/images/toast-nodes-c2fe15d93b1ac79835c7ed4f14787a06.png"},21702:function(t,e,n){e.Z=n.p+"assets/images/toast_variations-561cd760aa26ef84bbfb99f27011d9f0.png"}}]);