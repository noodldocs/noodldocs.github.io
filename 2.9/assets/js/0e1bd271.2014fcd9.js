"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[4482],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13011:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"CLI Command project list",hide_title:!0},i="Command: project list",l={unversionedId:"commands/project/list",id:"commands/project/list",title:"CLI Command project list",description:"List all the projects in a workspace.",source:"@site/cli/commands/project/list.md",sourceDirName:"commands/project",slug:"/commands/project/list",permalink:"/2.9/cli/commands/project/list",draft:!1,tags:[],version:"current",frontMatter:{title:"CLI Command project list",hide_title:!0},sidebar:"apiSidebar",previous:{title:"CLI Command parse",permalink:"/2.9/cli/commands/parse/"},next:{title:"CLI Command project list",permalink:"/2.9/cli/commands/project/clone"}},c={},s=[{value:"Synopsis",id:"synopsis",level:2},{value:"Configuration",id:"configuration",level:3},{value:"<code>username</code>",id:"username",level:4},{value:"<code>password</code>",id:"password",level:4}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"command-project-list"},"Command: project list"),(0,o.kt)("p",null,"List all the projects in a workspace."),(0,o.kt)("h2",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"noodl-cli project list <workspace-id> [--username <username>] [--password <password>]\n")),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("h4",{id:"username"},(0,o.kt)("inlineCode",{parentName:"h4"},"username")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: undefined"),(0,o.kt)("li",{parentName:"ul"},"Type: String")),(0,o.kt)("p",null,"Noodl username."),(0,o.kt)("h4",{id:"password"},(0,o.kt)("inlineCode",{parentName:"h4"},"password")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: undefined"),(0,o.kt)("li",{parentName:"ul"},"Type: String")),(0,o.kt)("p",null,"Noodl password."))}d.isMDXComponent=!0}}]);