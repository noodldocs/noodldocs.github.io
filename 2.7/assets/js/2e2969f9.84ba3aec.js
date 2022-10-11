"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[9904],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79328:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],s={title:"Building User Interfaces",hide_title:!0},l="Building User Interfaces in Noodl",u={unversionedId:"guides/user-interfaces/overview",id:"guides/user-interfaces/overview",title:"Building User Interfaces",description:"The user interface in your Noodl App are all the things that your users will interact with on your screen. Lists, buttons, checkboxes, etc.",source:"@site/docs/guides/user-interfaces/overview.md",sourceDirName:"guides/user-interfaces",slug:"/guides/user-interfaces/overview",permalink:"/2.7/docs/guides/user-interfaces/overview",tags:[],version:"current",frontMatter:{title:"Building User Interfaces",hide_title:!0}},c={},p=[],d={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"building-user-interfaces-in-noodl"},"Building User Interfaces in Noodl"),(0,a.kt)("p",null,"The user interface in your Noodl App are all the things that your users will interact with on your screen. Lists, buttons, checkboxes, etc."),(0,a.kt)("p",null,"In Noodl, you build these using ",(0,a.kt)("strong",{parentName:"p"},"Visual Nodes"),", i.e. the blue nodes in your node graph. Visual nodes represents something that can be seen on a screen. In contrast, logical nodes, for example representing a query to the database or a condition to be evaluated are not directly visible on the screen."),(0,a.kt)("p",null,"The visual nodes can also be grouped together in hierarchies mainly to define how they are relate to each other in the layout on the screen. By putting two ",(0,a.kt)("strong",{parentName:"p"},"Buttons")," as children of the same ",(0,a.kt)("strong",{parentName:"p"},"Group")," you can for example hide both these ",(0,a.kt)("strong",{parentName:"p"},"Buttons")," by hiding the ",(0,a.kt)("strong",{parentName:"p"},"Group"),". The order of the visual nodes also generally tells which order they will be rendered on the screen. Nodes later in the tree will be rendered on top of nodes earlier in the tree, if they happen to occupy the same space in the tree. (However this can be overridden using the ",(0,a.kt)("strong",{parentName:"p"},"zIndex")," property.)"),(0,a.kt)("p",null,"As you can understand, for a large App, the visual tree can quickly become very large. That's why you typically create ",(0,a.kt)("strong",{parentName:"p"},"Components")," of subtrees that capture a specific functionality. The components can in themselves contain more components. Components are also a great way to re-use UI in many places in your app and create a design system greatly reducing time to build UI."),(0,a.kt)("p",null,"The visual nodes can also be styled and customized heavily from a visual perspective. Also the visualization aspect of a visual node can be saved and re-used using the style variants system. Many visual nodes also have multiple visual states. For example a Button will typically change appearance when the user hovers over it, clicks it or if the button is disabled. Using the visual states system or the ",(0,a.kt)("strong",{parentName:"p"},"States")," node, you can finetune in detail how you UI will react visibly to ser interactions."),(0,a.kt)("p",null,"All of this and more is covered in this part of the guide."))}h.isMDXComponent=!0}}]);