"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[7614],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return y}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),y=a,f=u["".concat(l,".").concat(y)]||u[y]||d[y]||o;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},70201:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=t(83117),a=t(80102),o=(t(67294),t(3905)),i=["components"],s={hide_title:!0,hide_table_of_contents:!0,title:"Noodl.Arrays"},l="Noodl.Arrays",c={unversionedId:"reference/arrays",id:"reference/arrays",title:"Noodl.Arrays",description:"Only available on the frontend",source:"@site/javascript/reference/arrays.md",sourceDirName:"reference",slug:"/reference/arrays",permalink:"/2.8/javascript/reference/arrays",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Noodl.Arrays"},sidebar:"apiSidebar",previous:{title:"Noodl.Object",permalink:"/2.8/javascript/reference/object"},next:{title:"Noodl.Events",permalink:"/2.8/javascript/reference/events"}},p={},d=[],u={toc:d};function y(e){var r=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"noodlarrays"},"Noodl.Arrays"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Only available on the frontend"),(0,o.kt)("br",{parentName:"p"}),"\n","The third part of the global data model in Noodl are arrays. Each array is reference by its ",(0,o.kt)("strong",{parentName:"p"},"Id")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Noodl.Arrays"),"prefix, similar to objects and variables. You can learn more about arrays in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/data/arrays"},"arrays guide"),". Changing an array will trigger an update of all ",(0,o.kt)("strong",{parentName:"p"},"Array")," node with the corresponding ",(0,o.kt)("strong",{parentName:"p"},"Id"),"."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(14404).Z,width:"1119",height:"424"}))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Generally arrays in Noodl are expected to contain objects. There is nothing stopping you putting other stuff in arrays but"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// This will change the array with id MyArray and update all Arrays nodes\n// with that id.\nNoodl.Arrays.MyArray = [{ Hello: "There" }];\n\n// Use this if you have spaces in your array id\nNoodl.Arrays["Recepie List"] = [{ Name: "Fancy Burger" }];\n\n// Reading arrays\nconsole.log(Noodl.Arrays.MyArray);\n\n// WARNING, you can access arrays like this but this will not trigger an update\n// in Noodl. You should avoid modifying arrays like this.\nNoodl.Arrays.MyArray.push({ Hello: "Again" });\n\n// Instead, create a new array. This will trigger an update\n// on all Array nodes with id MyArray\nNoodl.Arrays.MyArray = Noodl.Arrays.MyArray.concat([{ Hello: "Again" }]);\n')))}y.isMDXComponent=!0},14404:function(e,r,t){r.Z=t.p+"assets/images/arrays-69d8ed70e3e82fcc0398173d6e129b76.png"}}]);