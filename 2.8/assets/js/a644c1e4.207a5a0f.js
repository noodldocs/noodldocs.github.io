"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[1600],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,v=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35741:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],l={title:"CLI Overview",hide_title:!0},c="CLI Overview",s={unversionedId:"guides/cli/overview",id:"guides/cli/overview",title:"CLI Overview",description:"Only available to Enterprise users.",source:"@site/docs/guides/cli/overview.md",sourceDirName:"guides/cli",slug:"/guides/cli/overview",permalink:"/2.8/docs/guides/cli/overview",tags:[],version:"current",frontMatter:{title:"CLI Overview",hide_title:!0}},p={},u=[{value:"Installation",id:"installation",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Retrieving workspace id or project id",id:"retrieving-workspace-id-or-project-id",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cli-overview"},"CLI Overview"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Only available to Enterprise users. "))),(0,a.kt)("p",null,"Noodl CLI, or ",(0,a.kt)("inlineCode",{parentName:"p"},"@noodl/noodl-cli"),", is a command-line interface to Noodl for use in your terminal or your scripts."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install -g @noodl/noodl-cli\n")),(0,a.kt)("p",null,"We have a few guides to help you get started with the Noodl CLI.\nTo get more information about the Noodl CLI, you can call ",(0,a.kt)("inlineCode",{parentName:"p"},"noodl-cli help")," to see the possible commands."),(0,a.kt)("h2",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"Some commands in ",(0,a.kt)("inlineCode",{parentName:"p"},"noodl-cli")," require you to authenticate with Noodl."),(0,a.kt)("p",null,"Set the credentials via environment variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ export NOODL_USERNAME=<my-email>\n$ export NOODL_PASSWORD=<my-password>\n")),(0,a.kt)("p",null,"You can also pass in the email and password via the command that requires it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ noodl-cli project clone <project-id> <path> --username <my-email> --password <my-password>\n")),(0,a.kt)("h2",{id:"retrieving-workspace-id-or-project-id"},"Retrieving workspace id or project id"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ noodl-cli workspace list --username <my-email> --password <my-password>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ noodl-cli project list <workspace-id> --username <my-email> --password <my-password>\n")))}m.isMDXComponent=!0}}]);