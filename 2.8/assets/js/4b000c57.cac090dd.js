"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[191],{3905:function(A,e,t){t.d(e,{Zo:function(){return l},kt:function(){return p}});var n=t(67294);function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function o(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function a(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function c(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},o=Object.keys(A);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var g=n.createContext({}),C=function(A){var e=n.useContext(g),t=e;return A&&(t="function"==typeof A?A(e):a(a({},e),A)),t},l=function(A){var e=C(A.components);return n.createElement(g.Provider,{value:e},A.children)},u={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},Q=n.forwardRef((function(A,e){var t=A.components,r=A.mdxType,o=A.originalType,g=A.parentName,l=c(A,["components","mdxType","originalType","parentName"]),Q=C(t),p=r,i=Q["".concat(g,".").concat(p)]||Q[p]||u[p]||o;return t?n.createElement(i,a(a({ref:e},l),{},{components:t})):n.createElement(i,a({ref:e},l))}));function p(A,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var o=t.length,a=new Array(o);a[0]=Q;var c={};for(var g in e)hasOwnProperty.call(e,g)&&(c[g]=e[g]);c.originalType=A,c.mdxType="string"==typeof A?A:r,a[1]=c;for(var C=2;C<o;C++)a[C]=t[C];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}Q.displayName="MDXCreateElement"},57711:function(A,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return g},default:function(){return p},frontMatter:function(){return c},metadata:function(){return C},toc:function(){return u}});var n=t(83117),r=t(80102),o=(t(67294),t(3905)),a=["components"],c={title:"Tab Bar",hide_title:!0},g="Tab Bar",C={unversionedId:"prefabs/tab-bar/README",id:"prefabs/tab-bar/README",title:"Tab Bar",description:"This prefab contains a tab bar component that you can use to create tab style navigation.",source:"@site/library/prefabs/tab-bar/README.md",sourceDirName:"prefabs/tab-bar",slug:"/prefabs/tab-bar/",permalink:"/2.8/library/prefabs/tab-bar/",tags:[],version:"current",frontMatter:{title:"Tab Bar",hide_title:!0},sidebar:"tabBarSidebar"},l={},u=[],Q={toc:u};function p(A){var e=A.components,c=(0,r.Z)(A,a);return(0,o.kt)("wrapper",(0,n.Z)({},Q,c,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tab-bar"},"Tab Bar"),(0,o.kt)("p",null,"This prefab contains a tab bar component that you can use to create tab style navigation."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(52772).Z,width:"680",height:"384"}))),(0,o.kt)("p",null,"The simple way to use it is to drag it into your project and specify the tabs using the ",(0,o.kt)("strong",{parentName:"p"},"Items")," input."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'[\n    {\n        Label:"Tab 1",\n        Value:"1"\n    },\n    {\n        Label:"Tab 2",\n        Value:"2"\n    },\n    {\n        Label:"Tab 3",\n        Value:"3"\n    },\n]\n')),(0,o.kt)("p",null,"You simply provide a ",(0,o.kt)("strong",{parentName:"p"},"Label")," and a ",(0,o.kt)("strong",{parentName:"p"},"Value")," for each tab. The output ",(0,o.kt)("strong",{parentName:"p"},"Selected Tab")," will contain the value of the currently selected tab, and you can use it to mount / unount the different tab pages."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(13185).Z,width:"1376",height:"1016"}))),(0,o.kt)("p",null,"The example above uses a simple function node to create mount / unmount switches for each of the pages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'Outputs.Tab1 = Inputs.SelectedTab==="1"\nOutputs.Tab2 = Inputs.SelectedTab==="2"\nOutputs.Tab3 = Inputs.SelectedTab==="3"\n')),(0,o.kt)("p",null,"You can change the appearance of the tab bar by editing the child component ",(0,o.kt)("strong",{parentName:"p"},"Tab Bar Item"),"."),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(35548).Z,width:"636",height:"162"}))))}p.isMDXComponent=!0},35548:function(A,e,t){e.Z=t.p+"assets/images/tab-bar-item-ec42fc23c124caf1be3d3049ee3fe3ec.png"},13185:function(A,e,t){e.Z=t.p+"assets/images/tab-bar-nodes-1-e9515675239ae69701eddb23628f8537.png"},52772:function(A,e){e.Z="data:image/png;base64,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qAAAlCJQAQAoRaACAFCKQAUAoBSBCgBAKQIVAIBSBCoAAKUIVAAAShGoAACUIlABAChFoAIAUIpABQCgFIEKAEApAhUAgFIEKgAApQhUAABKEagAAJQiUAEAKEWgAgBQikAFAKAUgQoAQCkCFQCAUgQqAAClCFQAAEoRqAAAlCJQAQAoRaACAFCKQAUAoBSBCgBAKQIVAIBSBCoAAKUIVAAAShGoAACUIlABAChFoAIAUIpABQCgFIEKAEApAhUAgFIEKgAApQhUAABKEagAAJQiUAEAKEWgAgBQikAFAKAUgQoAQCkCFQCAUgQqAAClCFQAAEoRqAAAlCJQAQAoRaACAFCKQAUAoBSBCgBAKQIVAIBSBCoAAKUIVAAAShGoAACUIlABAChFoAIAUIpABQCgFIEKAEApAhUAgFIEKgAApQhUAABKEagAAJQiUAEAKEWgAgBQikAFAKAUgQoAQCkCFQCAUgQqAAClCFQAAEoRqAAAlCJQAQAoRaACAFCKQAUAoBSBCgBAKQIVAIBSBCoAAKUIVAAAShGoAACUIlABAChFoAIAUIpABQCgFIEKAEApAhUAgFIEKgAApQhUAABKEagAAJQiUAEAKEWgAgBQikAFAKAUgQoAQCkCFQCAUgQqAAClCFQAAEoRqAAAlCJQAQAoRaACAFCKQAUAoBSBCgBAKQIVAIBSBCoAAKUIVAAAShGoAACUIlABAChFoAIAUIpABQCgFIEKAEApAhUAgFIEKgAApQhUAABKEagAAJQiUAEAKEWgAgBQikAFAKAUgQoAQCkCFQCAUgQqAAClCFQAAEoRqAAAlCJQAQAoRaACAFCKQAUAoBSBCgBAKQIVAIBSBCoAAKUIVAAAShGoAACUIlABAChFoAIAUIpABQCgFIEKAEApAhUAgFIEKgAApQhUAABKEagAAJQiUAEAKEWgAgBQikAFAKAUgQoAQCkCFQCAUgQqAAClCFQAAEoRqAAAlCJQAQAoRaACAFCKQAUAoBSBCgBAKQIVAIBSBCoAAKWMDgCAbVMrqKj1n5VL45QYjKPKAAAAAElFTkSuQmCC"}}]);