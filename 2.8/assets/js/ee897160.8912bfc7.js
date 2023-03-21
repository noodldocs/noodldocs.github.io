"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[19],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52079:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],s={title:"Modules and Prefabs",hide_title:!0},u="Modules and Prefabs in Noodl",l={unversionedId:"guides/user-interfaces/modules",id:"guides/user-interfaces/modules",title:"Modules and Prefabs",description:"Noodl has a lot of nodes available out of the box, but it can never include a node for everything. For that reason you can extend your project with specific modules or prefabs containing nodes and components to capture specfic functionality or UI controls.",source:"@site/docs/guides/user-interfaces/modules.md",sourceDirName:"guides/user-interfaces",slug:"/guides/user-interfaces/modules",permalink:"/2.8/docs/guides/user-interfaces/modules",tags:[],version:"current",frontMatter:{title:"Modules and Prefabs",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Scrolling Content",permalink:"/2.8/docs/guides/user-interfaces/scrolling-content"},next:{title:"Figma Plugin",permalink:"/2.8/docs/guides/user-interfaces/figma-plugin"}},c={},d=[{value:"How to add modules and prefabs to your project",id:"how-to-add-modules-and-prefabs-to-your-project",level:2}],p={toc:d};function f(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modules-and-prefabs-in-noodl"},"Modules and Prefabs in Noodl"),(0,a.kt)("p",null,"Noodl has a lot of nodes available out of the box, but it can never include a node for everything. For that reason you can extend your project with specific modules or prefabs containing nodes and components to capture specfic functionality or UI controls."),(0,a.kt)("p",null,"The main difference between ",(0,a.kt)("strong",{parentName:"p"},"Modules")," and ",(0,a.kt)("strong",{parentName:"p"},"Prefabs")," is that ",(0,a.kt)("strong",{parentName:"p"},"Modules")," install new nodes to the editor, while ",(0,a.kt)("strong",{parentName:"p"},"Prefabs")," clones components built with the core nodes, and stores them as if you created them yourself. Prefabs can be imported as many times as you want, and each clone can be modified how you see fit."),(0,a.kt)("p",null,"You can see the list of modules ",(0,a.kt)("a",{parentName:"p",href:"/library/modules/overview"},"here"),", and prefabs ",(0,a.kt)("a",{parentName:"p",href:"/library/prefabs/overview"},"here"),". Make sure to check in often as the library keeps growing quickly."),(0,a.kt)("h2",{id:"how-to-add-modules-and-prefabs-to-your-project"},"How to add modules and prefabs to your project"),(0,a.kt)("p",null,"You add modules to your project by opening the project you want to use the module in and the bring up the ",(0,a.kt)("strong",{parentName:"p"},"Node Picker"),". You can do this either by ",(0,a.kt)("strong",{parentName:"p"},"Right Clicking")," in the node canvas or by clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," icon at the top left."),(0,a.kt)("div",{className:"ndl-image-with-background"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(80195).Z,width:"826",height:"476"}))),(0,a.kt)("p",null,"In the node picker, the find the tab ",(0,a.kt)("strong",{parentName:"p"},"Modules")," and then click ",(0,a.kt)("strong",{parentName:"p"},"Import")," on the module you want to use. The module is added to your project."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(57841).Z,width:"1660",height:"1356"}))),(0,a.kt)("p",null,"After importing the module you new nodes and components are now available under ",(0,a.kt)("strong",{parentName:"p"},"External Libraries"),"."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(45193).Z,width:"2056",height:"1696"}))),(0,a.kt)("p",null,"Adding a prefab is done via the ",(0,a.kt)("strong",{parentName:"p"},"Prefabs")," tab in the same way, click ",(0,a.kt)("strong",{parentName:"p"},"Import"),". Prefabs will add a component to your library of components. If you already have components with that name (maybe you have included the prefab before), you will be asked to overwrite."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(76835).Z,width:"1648",height:"1258"}))),(0,a.kt)("p",null,"When the prefab is imported you will get one or more new components in your ",(0,a.kt)("strong",{parentName:"p"},"default sheet"),"."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(63037).Z,width:"656",height:"210"}))),(0,a.kt)("p",null,"Don't forget to read the documentation for the prefabs you intend to use, there you will find how to use them but also useful guides on how to customize and build upon them to your liking."))}f.isMDXComponent=!0},80195:function(e,t,n){t.Z=n.p+"assets/images/add-new-node-fc32fab0abaa84fd73e33ea405582d9c.png"},57841:function(e,t,n){t.Z=n.p+"assets/images/browse-modules-1566223216f1a00f3880ecad33835c8b.png"},76835:function(e,t,n){t.Z=n.p+"assets/images/browse-prefabs-c8274c435d46525bbbca7e1273dc3d73.png"},45193:function(e,t,n){t.Z=n.p+"assets/images/external-libraries-e5d89ee5f39dfb0419e904b9a92255fe.png"},63037:function(e,t,n){t.Z=n.p+"assets/images/prefabs-imported-3742f369e3c3594bb62b12a0876276a7.png"}}]);