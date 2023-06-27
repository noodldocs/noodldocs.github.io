"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[5481],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),b=o,f=d["".concat(s,".").concat(b)]||d[b]||u[b]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43498:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),c=["components"],i={hide_title:!0,hide_table_of_contents:!0,title:"Noodl.Objects"},s="Noodl.Objects",l={unversionedId:"reference/objects",id:"reference/objects",title:"Noodl.Objects",description:"One step above Variables are Objects,",source:"@site/javascript/reference/objects.md",sourceDirName:"reference",slug:"/reference/objects",permalink:"/2.8/javascript/reference/objects",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Noodl.Objects"},sidebar:"apiSidebar",previous:{title:"Noodl.Variables",permalink:"/2.8/javascript/reference/variables"},next:{title:"Noodl.Object",permalink:"/2.8/javascript/reference/object"}},p={},u=[],d={toc:u};function b(e){var t=e.components,i=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"noodlobjects"},"Noodl.Objects"),(0,a.kt)("p",null,"One step above ",(0,a.kt)("strong",{parentName:"p"},"Variable"),"s are ",(0,a.kt)("strong",{parentName:"p"},"Object"),"s,\nthis is a global data model of Noodl objects.\nEach object is referenced with an ",(0,a.kt)("strong",{parentName:"p"},"Id")," and can contain a set of properties.\nYou can access alla objects in your workspace through their ",(0,a.kt)("strong",{parentName:"p"},"Id")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Noodl.Objects")," prefix.\nChange a property of an object will trigger all connections from object nodes with the corresponding ",(0,a.kt)("strong",{parentName:"p"},"Id")," and property.\nYou can learn more about objects and how you use them in your Noodl applications ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/data/objects"},"here"),"."),(0,a.kt)("div",{className:"ndl-image-with-background xl"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(74115).Z,width:"1432",height:"857"}))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// This will change the property MyProperty\n// of object with id MyObjectId and trigger\n// all object nodes (with that id) in your project\nNoodl.Objects.MyObjectId.MyProperty = "Hello";\n\n// Use this notation of that object id contains spaces\nNoodl.Objects["Form Values"].input_text = "Whoops";\n\nNoodl.Objects["Form Values"]["A property with spaces"] = 20;\n\n// Reading an object property\nconsole.log(Noodl.Objects.CurrentUser.Name);\n\n// This will set all properties of the object you assign with\n// to the object with id "SomeId"\n// You cannot set the id property this way,\n// that property will be ignored if part of the object you assign\nNoodl.Objects.SomeId = { ... }\n')))}b.isMDXComponent=!0},74115:function(e,t,n){t.Z=n.p+"assets/images/objects-5d20f903222718395a9b45d722337702.png"}}]);