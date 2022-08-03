"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[8876],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=l(r),d=o,m=h["".concat(i,".").concat(d)]||h[d]||s[d]||a;return r?n.createElement(m,p(p({ref:t},u),{},{components:r})):n.createElement(m,p({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},60791:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),p=["components"],c={title:"Checkbox Group",hide_title:!0},i="Checkbox Group",l={unversionedId:"modules/checkbox-group/README",id:"modules/checkbox-group/README",title:"Checkbox Group",description:"This is a small module containing a group of checkboxes that are dynamically created from an array containing at least the Value property, optionally the Label property and others as needed.",source:"@site/library/modules/checkbox-group/README.md",sourceDirName:"modules/checkbox-group",slug:"/modules/checkbox-group/",permalink:"/2.6/library/modules/checkbox-group/",tags:[],version:"current",frontMatter:{title:"Checkbox Group",hide_title:!0},sidebar:"checkboxGroupSidebar"},u={},s=[],h={toc:s};function d(e){var t=e.components,c=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"checkbox-group"},"Checkbox Group"),(0,a.kt)("p",null,"This is a small module containing a group of checkboxes that are dynamically created from an array containing at least the ",(0,a.kt)("strong",{parentName:"p"},"Value")," property, optionally the ",(0,a.kt)("strong",{parentName:"p"},"Label")," property and others as needed."),(0,a.kt)("div",{className:"ndl-image-with-background"},(0,a.kt)("p",null,(0,a.kt)("img",{src:r(53833).Z,width:"680",height:"384"}))),(0,a.kt)("p",null,"When importing the module into your project you get two components ",(0,a.kt)("strong",{parentName:"p"},"Checkbox Group")," and ",(0,a.kt)("strong",{parentName:"p"},"Checkbox Group Item"),". Then you can go ahead and use the checkbox group component as follows."),(0,a.kt)("p",null,"The example below shows how to hook the ",(0,a.kt)("strong",{parentName:"p"},"Checkbox Group")," up to data in a ",(0,a.kt)("strong",{parentName:"p"},"Record"),". Make sure you create a property on your record class with the type ",(0,a.kt)("strong",{parentName:"p"},"Array")," then you can go ahead and store the selection using the ",(0,a.kt)("strong",{parentName:"p"},"Set Record Properties")," node."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(2870).Z,width:"1514",height:"722"})),(0,a.kt)("p",null,"As input it requires two arrays, one containing all possible options, the ",(0,a.kt)("strong",{parentName:"p"},"Options")," input. This array should contains objects with at least a ",(0,a.kt)("strong",{parentName:"p"},"Value")," property and optionally a ",(0,a.kt)("strong",{parentName:"p"},"Label")," property if you do not want to display the value as the label. You can also provide other properties that will be available as inputs to the ",(0,a.kt)("strong",{parentName:"p"},"Checkbox Group Item")," component. The other array should contain only the current selection, this should be objects with just the ",(0,a.kt)("strong",{parentName:"p"},"Value")," property (corresponding to the values in the ",(0,a.kt)("strong",{parentName:"p"},"Options"),") array."),(0,a.kt)("p",null,"The component will output an array of the selected objects (each an object with a ",(0,a.kt)("strong",{parentName:"p"},"Value")," property) as well as a signal output called ",(0,a.kt)("strong",{parentName:"p"},"Selection Changed")," that will be triggered when the selection has changed (duh)."))}d.isMDXComponent=!0},2870:function(e,t,r){t.Z=r.p+"assets/images/checkbox-group-nodes-f0967af37cfc0eb29d4fada5cb0de925.png"},53833:function(e,t,r){t.Z=r.p+"assets/images/checkbox-group-e6cf75fec653d982ab89fbf9f438d400.png"}}]);