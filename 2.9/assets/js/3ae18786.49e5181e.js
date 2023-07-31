"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[1978],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(o),m=r,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return o?n.createElement(h,l(l({ref:t},s),{},{components:o})):n.createElement(h,l({ref:t},s))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=o[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},80451:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=o(87462),r=(o(67294),o(3905));const a={title:"Data Context Module",hide_title:!0},l="Data Context Module",i={unversionedId:"modules/data-context/README",id:"modules/data-context/README",title:"Data Context Module",description:"This module allows you to work with scoped data objects.",source:"@site/library/modules/data-context/README.md",sourceDirName:"modules/data-context",slug:"/modules/data-context/",permalink:"/2.9/library/modules/data-context/",draft:!1,tags:[],version:"current",frontMatter:{title:"Data Context Module",hide_title:!0}},c={},u=[{value:"How to use it?",id:"how-to-use-it",level:2}],s={toc:u},d="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-context-module"},"Data Context Module"),(0,r.kt)("p",null,"This module allows you to work with scoped data objects."),(0,r.kt)("p",null,"This module is designed to make it easier to work with data objects in complex data scenarios,\nwhere the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.noodl.net/#/nodes/component-utilities/parent-component-object/"},"Parent Component Object nodes")," will not be enough or will make it harder to maintain. "),(0,r.kt)("h2",{id:"how-to-use-it"},"How to use it?"),(0,r.kt)("p",null,"This module is adding 4 new nodes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Context"),(0,r.kt)("li",{parentName:"ul"},"Get State (to get the data from the context, you have to call the Fetch method)"),(0,r.kt)("li",{parentName:"ul"},"Set State"),(0,r.kt)("li",{parentName:"ul"},"Subscriber (this is a reactive object so when something changes on the context this one get the new data automatically)")),(0,r.kt)("p",null,"The Context node is the most important node,\nwhere you design the data object you want to use and share it with all the child components.\nWhen you have a Context you can use either the Get State or Subscriber nodes (which work similarly to the Variable nodes) to get the current data, it will then find the closest Context node upwards in the graph to get the data."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/noodlapp/modules/tree/main/modules/data-context"},"Source Code")))}p.isMDXComponent=!0}}]);