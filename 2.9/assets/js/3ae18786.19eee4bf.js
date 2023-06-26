"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[1978],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},s),{},{components:n})):o.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},80451:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],l={title:"Data Context Module",hide_title:!0},u=void 0,c={unversionedId:"modules/data-context/README",id:"modules/data-context/README",title:"Data Context Module",description:"This module allows you to work with scoped data objects.",source:"@site/library/modules/data-context/README.md",sourceDirName:"modules/data-context",slug:"/modules/data-context/",permalink:"/2.9/library/modules/data-context/",tags:[],version:"current",frontMatter:{title:"Data Context Module",hide_title:!0}},s={},d=[{value:"How to use it?",id:"how-to-use-it",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data-context-module"},"Data Context Module"),(0,a.kt)("p",null,"This module allows you to work with scoped data objects."),(0,a.kt)("p",null,"This module is designed to make it easier to work with data objects in complex data scenarios,\nwhere the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.noodl.net/#/nodes/component-utilities/parent-component-object/"},"Parent Component Object nodes")," will not be enough or will make it harder to maintain. "),(0,a.kt)("h2",{id:"how-to-use-it"},"How to use it?"),(0,a.kt)("p",null,"This module is adding 4 new nodes."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Context"),(0,a.kt)("li",{parentName:"ul"},"Get State (to get the data from the context, you have to call the Fetch method)"),(0,a.kt)("li",{parentName:"ul"},"Set State"),(0,a.kt)("li",{parentName:"ul"},"Subscriber (this is a reactive object so when something changes on the context this one get the new data automatically)")),(0,a.kt)("p",null,"The Context node is the most important node,\nwhere you design the data object you want to use and share it with all the child components.\nWhen you have a Context you can use either the Get State or Subscriber nodes (which work similarly to the Variable nodes) to get the current data, it will then find the closest Context node upwards in the graph to get the data."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/noodlapp/modules/tree/main/modules/data-context"},"Source Code")))}m.isMDXComponent=!0}}]);