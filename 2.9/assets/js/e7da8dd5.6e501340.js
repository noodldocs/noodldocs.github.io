"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[5457],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5460:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],l={title:"Workspace Modules",hide_title:!0},s="Workspace Modules",c={unversionedId:"guides/cli/workspace-modules",id:"guides/cli/workspace-modules",title:"Workspace Modules",description:"Currently, the new Noodl CLI doesn't have support to upload to a workspace, it is supported in the older version of the Noodl CLI, for example, version 0.7.2.",source:"@site/docs/guides/cli/workspace-modules.md",sourceDirName:"guides/cli",slug:"/guides/cli/workspace-modules",permalink:"/2.9/docs/guides/cli/workspace-modules",tags:[],version:"current",frontMatter:{title:"Workspace Modules",hide_title:!0}},p={},d=[{value:"Using the old Noodl CLI",id:"using-the-old-noodl-cli",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"workspace-modules"},"Workspace Modules"),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Currently, the new Noodl CLI doesn't have support to upload to a workspace, it is supported in the older version of the Noodl CLI, for example, version ",(0,a.kt)("inlineCode",{parentName:"p"},"0.7.2"),"."))),(0,a.kt)("h2",{id:"using-the-old-noodl-cli"},"Using the old Noodl CLI"),(0,a.kt)("p",null,"To find the workspace id and access key."),(0,a.kt)("p",null,"Open the ",(0,a.kt)("a",{parentName:"p",href:"https://console.noodl.net/"},"Noodl console")," and manage a workspace, if you are admin you will have access to the ",(0,a.kt)("strong",{parentName:"p"},"Access Key"),". The workspace id can be found in the URL on that page, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"https://console.noodl.net/#/workspaces/g58p2h")," have the ",(0,a.kt)("strong",{parentName:"p"},"workspace id")," ",(0,a.kt)("inlineCode",{parentName:"p"},"g58p2h"),"."),(0,a.kt)("p",null,"Run this in the same folder where you have ",(0,a.kt)("inlineCode",{parentName:"p"},"module.json"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ noodl-cli push <workspace-id>/<access-key>\n")))}m.isMDXComponent=!0}}]);