"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[8068],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,v=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(v,i(i({ref:t},s),{},{components:r})):n.createElement(v,i({ref:t},s))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},23691:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"CLI Overview",hide_title:!0},i="CLI Overview",l={unversionedId:"overview",id:"overview",title:"CLI Overview",description:"Noodl CLI, or @noodl/noodl-cli, is a command-line interface to Noodl for use in your terminal or your scripts.",source:"@site/cli/overview.mdx",sourceDirName:".",slug:"/overview",permalink:"/2.9/cli/overview",draft:!1,tags:[],version:"current",frontMatter:{title:"CLI Overview",hide_title:!0},sidebar:"apiSidebar",next:{title:"Continuous Deployment",permalink:"/2.9/cli/guides/continuous-deployment"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Retrieving workspace id or project id",id:"retrieving-workspace-id-or-project-id",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cli-overview"},"CLI Overview"),(0,o.kt)("p",null,"Noodl CLI, or ",(0,o.kt)("inlineCode",{parentName:"p"},"@noodl/noodl-cli"),", is a command-line interface to Noodl for use in your terminal or your scripts."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install -g @noodl/noodl-cli\n")),(0,o.kt)("p",null,"We have a few guides to help you get started with the Noodl CLI.\nTo get more information about the Noodl CLI, you can call ",(0,o.kt)("inlineCode",{parentName:"p"},"noodl-cli help")," to see the possible commands."),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"Some commands in ",(0,o.kt)("inlineCode",{parentName:"p"},"noodl-cli")," require you to authenticate with Noodl."),(0,o.kt)("p",null,"Set the credentials via environment variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ export NOODL_USERNAME=<my-email>\n$ export NOODL_PASSWORD=<my-password>\n")),(0,o.kt)("p",null,"You can also pass in the email and password via the command that requires it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ noodl-cli project clone <project-id> <path> --username <my-email> --password <my-password>\n")),(0,o.kt)("h2",{id:"retrieving-workspace-id-or-project-id"},"Retrieving workspace id or project id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ noodl-cli workspace list --username <my-email> --password <my-password>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ noodl-cli project list <workspace-id> --username <my-email> --password <my-password>\n")))}d.isMDXComponent=!0}}]);