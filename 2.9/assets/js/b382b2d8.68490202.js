"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[8779],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},60432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Noodl 2.8.2",description:"Noodl 2.8.2",slug:"february-2023-2",hide_table_of_contents:!1},l=void 0,i={permalink:"/2.9/whats-new/february-2023-2",source:"@site/whats-new/2023-02-24.md",title:"Noodl 2.8.2",description:"Noodl 2.8.2",date:"2023-02-24T00:00:00.000Z",formattedDate:"February 24, 2023",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{title:"Noodl 2.8.2",description:"Noodl 2.8.2",slug:"february-2023-2",hide_table_of_contents:!1},prevItem:{title:"Noodl 2.8.3",permalink:"/2.9/whats-new/april-2023"},nextItem:{title:"Noodl 2.8.1",permalink:"/2.9/whats-new/february-2023"}},s={authorsImageUrls:[]},c=[{value:"Columns node",id:"columns-node",level:2},{value:"Right click in design mode",id:"right-click-in-design-mode",level:2},{value:"Other notable changes",id:"other-notable-changes",level:2},{value:"Bug fixes",id:"bug-fixes",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("section",null,(0,o.kt)("h2",{id:"columns-node"},"Columns node"),(0,o.kt)("p",null,"A new visual node: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.noodl.net/2.8/nodes/basic-elements/columns"},"Columns")),(0,o.kt)("p",null,"This is useful for layouts that have columns with gaps between them, and especially powerful in combination with media queries for handling responsive layouts."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(20487).Z,width:"1210",height:"452"}))),(0,o.kt)("section",null,(0,o.kt)("h2",{id:"right-click-in-design-mode"},"Right click in design mode"),(0,o.kt)("p",null,"The design mode has a new feature. Right click to get a list of all visual elements under the mouse cursor, and click to jump to the corresponding node."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(84726).Z,width:"880",height:"700"}))),(0,o.kt)("section",null,(0,o.kt)("h2",{id:"other-notable-changes"},"Other notable changes"),(0,o.kt)("p",null,"Expanded the Noodl.Records Javascript API:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support for aggregate queries"),(0,o.kt)("li",{parentName:"ul"},"Support for geo queries"),(0,o.kt)("li",{parentName:"ul"},"Specific columns of data can be selected to be included in the result of a query, instead of all data"),(0,o.kt)("li",{parentName:"ul"},"The ability to follow pointers and include their data directly in the result.")),(0,o.kt)("p",null,"Other changes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A new project setting for selecting different positions for the Noodl badge."),(0,o.kt)("li",{parentName:"ul"},"REST node can now parse results with content type application/geo+json."),(0,o.kt)("li",{parentName:"ul"},"REST node will handle responses that aren't JSON as raw text instead of showing a warning."),(0,o.kt)("li",{parentName:"ul"},'A Javascript object can now be connected to the "Id" input of an Object node.'))),(0,o.kt)("section",null,(0,o.kt)("h2",{id:"bug-fixes"},"Bug fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed issue with property panel not updating correctly when swtiching variants"),(0,o.kt)("li",{parentName:"ul"},"Fixed stale information in the version control panel after creating or applying a stash"),(0,o.kt)("li",{parentName:"ul"},"Query Records and a few other nodes and APIs had issues with arrays that included a null object."),(0,o.kt)("li",{parentName:"ul"},"Fixed styling issue in Radio Buttons that had multi line labels"),(0,o.kt)("li",{parentName:"ul"},'Fixed bug with the "Cancel" input to the REST node'),(0,o.kt)("li",{parentName:"ul"},"Fixed an UI error when a merge conflict happened in Node parameters that were objects and not simple primitives"),(0,o.kt)("li",{parentName:"ul"},"Improved how Noodl handes saving the project file to reduce the chance of a corrupt project on Windows."))))}p.isMDXComponent=!0},20487:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/columns-node-44fef13af6ff86fc92f7b30dda17f353.png"},84726:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/right-click-design-mode-368d6d0c15d133a5b8480f329fc6575c.png"}}]);