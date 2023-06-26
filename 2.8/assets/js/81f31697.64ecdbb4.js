"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[5379],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=s(n),f=o,m=h["".concat(l,".").concat(f)]||h[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},66169:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],c={title:"Multi Choice",hide_title:!0},l="Multi Choice",s={unversionedId:"prefabs/multi-choice/README",id:"prefabs/multi-choice/README",title:"Multi Choice",description:"A simple component for multi choice selection comprising a group of checkboxes.",source:"@site/library/prefabs/multi-choice/README.md",sourceDirName:"prefabs/multi-choice",slug:"/prefabs/multi-choice/",permalink:"/2.8/library/prefabs/multi-choice/",tags:[],version:"current",frontMatter:{title:"Multi Choice",hide_title:!0},sidebar:"multiChoiceSidebar"},p={},u=[],h={toc:u};function f(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"multi-choice"},"Multi Choice"),(0,i.kt)("p",null,"A simple component for multi choice selection comprising a group of checkboxes."),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(81450).Z,width:"680",height:"385"}))),(0,i.kt)("p",null,"After importing the module you will see a component called ",(0,i.kt)("strong",{parentName:"p"},"Multi Choice")," in your project."),(0,i.kt)("p",null,"The example below shows how to hook the ",(0,i.kt)("strong",{parentName:"p"},"Multi Choice")," up to data in an ",(0,i.kt)("strong",{parentName:"p"},"Object"),", you can save the value back to the object with the ",(0,i.kt)("strong",{parentName:"p"},"Set Object Properties")," using the ",(0,i.kt)("strong",{parentName:"p"},"Selection Changed")," signal."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(24438).Z,width:"1622",height:"512"}))),(0,i.kt)("p",null,"As input it takes three arrays of strings, one containing all possible options, the ",(0,i.kt)("strong",{parentName:"p"},"Options"),' input, this is the "value" of the options, it might differ from the labels, i.e. what is shown on screen. This you can specify with the ',(0,i.kt)("strong",{parentName:"p"},"Labels")," array input, it must have the same number of strings in the array, each one corresponding to a value in the ",(0,i.kt)("strong",{parentName:"p"},"Options")," array."),(0,i.kt)("p",null,"The final array is the ",(0,i.kt)("strong",{parentName:"p"},"Selection")," array, it contains all options that are selection. There is also an output from the component called ",(0,i.kt)("strong",{parentName:"p"},"Selection")," which is updated when the user interacts with the component, the ",(0,i.kt)("strong",{parentName:"p"},"Selection Changed")," event is triggered."))}f.isMDXComponent=!0},24438:function(e,t,n){t.Z=n.p+"assets/images/multi-choice-nodes-18e1a8f4fdbdc1e0fc1588faf95a3c4e.png"},81450:function(e,t,n){t.Z=n.p+"assets/images/multi-choice-8d13f0e631b15604ef8685e9b79ce3dc.png"}}]);