"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[1576],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(o),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return o?n.createElement(f,l(l({ref:t},c),{},{components:o})):n.createElement(f,l({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},65921:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=o(87462),r=(o(67294),o(3905));const a={title:"Workspace Modules",hide_title:!0},l="Workspace Modules",i={unversionedId:"guides/workspace-modules",id:"guides/workspace-modules",title:"Workspace Modules",description:"Currently, the new Noodl CLI doesn't have support to upload to a workspace, it is supported in the older version of the Noodl CLI, for example, version 0.7.2.",source:"@site/cli/guides/workspace-modules.md",sourceDirName:"guides",slug:"/guides/workspace-modules",permalink:"/2.9/cli/guides/workspace-modules",draft:!1,tags:[],version:"current",frontMatter:{title:"Workspace Modules",hide_title:!0},sidebar:"apiSidebar",previous:{title:"Continuous Deployment",permalink:"/2.9/cli/guides/continuous-deployment"},next:{title:"CLI Command build",permalink:"/2.9/cli/commands/build/"}},s={},p=[{value:"Using the old Noodl CLI",id:"using-the-old-noodl-cli",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"workspace-modules"},"Workspace Modules"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Currently, the new Noodl CLI doesn't have support to upload to a workspace, it is supported in the older version of the Noodl CLI, for example, version ",(0,r.kt)("inlineCode",{parentName:"p"},"0.7.2"),".")),(0,r.kt)("h2",{id:"using-the-old-noodl-cli"},"Using the old Noodl CLI"),(0,r.kt)("p",null,"To find the workspace id and access key."),(0,r.kt)("p",null,"Open the ",(0,r.kt)("a",{parentName:"p",href:"https://console.noodl.net/"},"Noodl console")," and manage a workspace, if you are admin you will have access to the ",(0,r.kt)("strong",{parentName:"p"},"Access Key"),". The workspace id can be found in the URL on that page, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"https://console.noodl.net/#/workspaces/g58p2h")," have the ",(0,r.kt)("strong",{parentName:"p"},"workspace id")," ",(0,r.kt)("inlineCode",{parentName:"p"},"g58p2h"),"."),(0,r.kt)("p",null,"Run this in the same folder where you have ",(0,r.kt)("inlineCode",{parentName:"p"},"module.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ noodl-cli push <workspace-id>/<access-key>\n")))}u.isMDXComponent=!0}}]);