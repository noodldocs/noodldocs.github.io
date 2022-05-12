"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[8459],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21512:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),l=["components"],i={title:"Multi Select",hide_title:!0},s="Multi Select",c={unversionedId:"modules/multi-select/README",id:"modules/multi-select/README",title:"Multi Select",description:"This is a small snippet containing a multi select drop down with checkboxes as shown below:",source:"@site/library/modules/multi-select/README.md",sourceDirName:"modules/multi-select",slug:"/modules/multi-select/",permalink:"/2.6/library/modules/multi-select/",tags:[],version:"current",frontMatter:{title:"Multi Select",hide_title:!0},sidebar:"multiSelectSidebar"},u={},p=[],d={toc:p};function m(e){var t=e.components,i=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"multi-select"},"Multi Select"),(0,a.kt)("p",null,"This is a small snippet containing a multi select drop down with checkboxes as shown below:"),(0,a.kt)("div",{className:"ndl-image-with-background"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(50304).Z,width:"872",height:"658"}))),(0,a.kt)("p",null,"When add this module to your project you will get three components ",(0,a.kt)("strong",{parentName:"p"},"Multi Select"),", ",(0,a.kt)("strong",{parentName:"p"},"Multi Select Option")," and ",(0,a.kt)("strong",{parentName:"p"},"Multi Select Pill"),". Then you can go ahead and use the multi select component as follows."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(33783).Z,width:"1770",height:"808"})),(0,a.kt)("p",null,"As input it requires two arrays, one containing all possible options, the ",(0,a.kt)("strong",{parentName:"p"},"Options")," input. This array should contains objects with at least a ",(0,a.kt)("strong",{parentName:"p"},"Value")," property and optionally a ",(0,a.kt)("strong",{parentName:"p"},"Label")," property if you do not want to display the value as the label. The other array should contain only the current selection, this should be objects with just the ",(0,a.kt)("strong",{parentName:"p"},"Value")," property (corresponding to the values in the ",(0,a.kt)("strong",{parentName:"p"},"Options"),") array."),(0,a.kt)("p",null,"The component will output an array of the selected objects (each an object with a ",(0,a.kt)("strong",{parentName:"p"},"Value")," property) as well as a signal output called ",(0,a.kt)("strong",{parentName:"p"},"Selection Changed")," that will be triggered when the selection has changed (duh)."),(0,a.kt)("p",null,"You can easily hook it up to data stored in the cloud database via a ",(0,a.kt)("strong",{parentName:"p"},"Record")," as shown below:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(27296).Z,width:"1778",height:"850"})),(0,a.kt)("p",null,"Make sure you create a property on your record class with the type ",(0,a.kt)("strong",{parentName:"p"},"Array")," then you can go ahead and store the selection using the ",(0,a.kt)("strong",{parentName:"p"},"Set Record Properties")," node."))}m.isMDXComponent=!0},27296:function(e,t,n){t.Z=n.p+"assets/images/multi-select-nodes-data-f0407e1df78bc09094ce77831b9ad376.png"},33783:function(e,t,n){t.Z=n.p+"assets/images/multi-select-nodes-e4f111edf7c1a319a1b40a6460f29dc0.png"},50304:function(e,t,n){t.Z=n.p+"assets/images/multi-select-6225c6a710ab288442da603a4e9e04ef.png"}}]);