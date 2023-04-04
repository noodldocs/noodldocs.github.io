"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[2419],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},47326:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],l={title:"Noodl 2.8.2",description:"Noodl 2.8.2",slug:"february-2023-2",hide_table_of_contents:!1},c=void 0,s={permalink:"/2.8/whats-new/february-2023-2",source:"@site/whats-new/2023-02-24.md",title:"Noodl 2.8.2",description:"Noodl 2.8.2",date:"2023-02-24T00:00:00.000Z",formattedDate:"February 24, 2023",tags:[],truncated:!1,authors:[],frontMatter:{title:"Noodl 2.8.2",description:"Noodl 2.8.2",slug:"february-2023-2",hide_table_of_contents:!1},prevItem:{title:"Noodl 2.8.3",permalink:"/2.8/whats-new/april-2023"},nextItem:{title:"Noodl 2.8.1",permalink:"/2.8/whats-new/february-2023"}},u={authorsImageUrls:[]},d=[{value:"Columns node",id:"columns-node",level:2},{value:"Right click in design mode",id:"right-click-in-design-mode",level:2},{value:"Other notable changes",id:"other-notable-changes",level:2},{value:"Bug fixes",id:"bug-fixes",level:2}],p={toc:d};function f(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("section",null,(0,a.kt)("h2",{id:"columns-node"},"Columns node"),(0,a.kt)("p",null,"A new visual node: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.noodl.net/2.8/nodes/basic-elements/columns"},"Columns")),(0,a.kt)("p",null,"This is useful for layouts that have columns with gaps between them, and especially powerful in combination with media queries for handling responsive layouts."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(79945).Z,width:"1210",height:"452"}))),(0,a.kt)("section",null,(0,a.kt)("h2",{id:"right-click-in-design-mode"},"Right click in design mode"),(0,a.kt)("p",null,"The design mode has a new feature. Right click to get a list of all visual elements under the mouse cursor, and click to jump to the corresponding node."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(91203).Z,width:"880",height:"700"}))),(0,a.kt)("section",null,(0,a.kt)("h2",{id:"other-notable-changes"},"Other notable changes"),(0,a.kt)("p",null,"Expanded the Noodl.Records Javascript API:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support for aggregate queries"),(0,a.kt)("li",{parentName:"ul"},"Support for geo queries"),(0,a.kt)("li",{parentName:"ul"},"Specific columns of data can be selected to be included in the result of a query, instead of all data"),(0,a.kt)("li",{parentName:"ul"},"The ability to follow pointers and include their data directly in the result.")),(0,a.kt)("p",null,"Other changes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A new project setting for selecting different positions for the Noodl badge."),(0,a.kt)("li",{parentName:"ul"},"REST node can now parse results with content type application/geo+json."),(0,a.kt)("li",{parentName:"ul"},"REST node will handle responses that aren't JSON as raw text instead of showing a warning."),(0,a.kt)("li",{parentName:"ul"},'A Javascript object can now be connected to the "Id" input of an Object node.'))),(0,a.kt)("section",null,(0,a.kt)("h2",{id:"bug-fixes"},"Bug fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed issue with property panel not updating correctly when swtiching variants"),(0,a.kt)("li",{parentName:"ul"},"Fixed stale information in the version control panel after creating or applying a stash"),(0,a.kt)("li",{parentName:"ul"},"Query Records and a few other nodes and APIs had issues with arrays that included a null object."),(0,a.kt)("li",{parentName:"ul"},"Fixed styling issue in Radio Buttons that had multi line labels"),(0,a.kt)("li",{parentName:"ul"},'Fixed bug with the "Cancel" input to the REST node'),(0,a.kt)("li",{parentName:"ul"},"Fixed an UI error when a merge conflict happened in Node parameters that were objects and not simple primitives"),(0,a.kt)("li",{parentName:"ul"},"Improved how Noodl handes saving the project file to reduce the chance of a corrupt project on Windows."))))}f.isMDXComponent=!0},79945:function(e,t,n){t.Z=n.p+"assets/images/columns-node-44fef13af6ff86fc92f7b30dda17f353.png"},91203:function(e,t,n){t.Z=n.p+"assets/images/right-click-design-mode-368d6d0c15d133a5b8480f329fc6575c.png"}}]);