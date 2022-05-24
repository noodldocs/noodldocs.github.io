"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[5481],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,b=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(b,c(c({ref:t},l),{},{components:n})):r.createElement(b,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43498:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),c=["components"],i={},s=void 0,p={unversionedId:"reference/objects",id:"reference/objects",title:"objects",description:"One step above Variables are Objects,",source:"@site/javascript/reference/objects.md",sourceDirName:"reference",slug:"/reference/objects",permalink:"/2.6/javascript/reference/objects",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"variables",permalink:"/2.6/javascript/reference/variables"},next:{title:"object",permalink:"/2.6/javascript/reference/object"}},l={},u=[],d={toc:u};function f(e){var t=e.components,i=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"noodlobjects"},"Noodl.Objects"),(0,a.kt)("p",null,"One step above ",(0,a.kt)("strong",{parentName:"p"},"Variable"),"s are ",(0,a.kt)("strong",{parentName:"p"},"Object"),"s,\nthis is a global data model of Noodl objects.\nEach object is referenced with an ",(0,a.kt)("strong",{parentName:"p"},"Id")," and can contain a set of properties.\nYou can access alla objects in your workspace through their ",(0,a.kt)("strong",{parentName:"p"},"Id")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Noodl.Objects")," prefix.\nChange a property of an object will trigger all connections from object nodes with the corresponding ",(0,a.kt)("strong",{parentName:"p"},"Id")," and property.\nYou can learn more about objects and how you use them in your Noodl applications ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/data/objects"},"here"),"."),(0,a.kt)("div",{className:"ndl-image-with-background xl"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9940).Z,width:"1432",height:"857"}))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// This will change the property MyProperty\n// of object with id MyObjectId and trigger\n// all object nodes (with that id) in your project\nNoodl.Objects.MyObjectId.MyProperty = "Hello";\n\n// Use this notation of that object id contains spaces\nNoodl.Objects["Form Values"].input_text = "Whoops";\n\n// You can access objects without the Noodl prefix\n// in Function and Script nodes\nObjects["Form Values"]["A property with spaces"] = 20;\n\n// Reading an object property\nconsole.log(Objects.CurrentUser.Name);\n\n// This will set all properties of the object you assign with\n// to the object with id "SomeId"\n// You cannot set the id property this way,\n// that property will be ignored if part of the object you assign\nObjects.SomeId = { ... }\n')))}f.isMDXComponent=!0},9940:function(e,t,n){t.Z=n.p+"assets/images/objects-5d20f903222718395a9b45d722337702.png"}}]);