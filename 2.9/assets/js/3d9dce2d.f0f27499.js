"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[7278],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=o,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||i;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},93903:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=t(83117),o=t(80102),i=(t(67294),t(3905)),a=["components"],l={title:"CLI Command build",hide_title:!0},u="Command: build",p={unversionedId:"commands/build/README",id:"commands/build/README",title:"CLI Command build",description:"Build a Noodl app without having Noodl installed and with custom build settings.",source:"@site/cli/commands/build/README.md",sourceDirName:"commands/build",slug:"/commands/build/",permalink:"/2.9/cli/commands/build/",tags:[],version:"current",frontMatter:{title:"CLI Command build",hide_title:!0},sidebar:"apiSidebar",previous:{title:"Workspace Modules",permalink:"/2.9/cli/guides/workspace-modules"},next:{title:"CLI Command new",permalink:"/2.9/cli/commands/new/"}},c={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Configuration",id:"configuration",level:3},{value:"<code>parseEndpoint</code>",id:"parseendpoint",level:4},{value:"<code>parseAppId</code>",id:"parseappid",level:4}],s={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"command-build"},"Command: build"),(0,i.kt)("p",null,"Build a Noodl app without having Noodl installed and with custom build settings."),(0,i.kt)("h2",{id:"synopsis"},"Synopsis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"noodl-cli build <projectDir> <outputDir> [--parseEndpoint <endpoint>] [--parseAppId <appId>]\n")),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("h4",{id:"parseendpoint"},(0,i.kt)("inlineCode",{parentName:"h4"},"parseEndpoint")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: undefined"),(0,i.kt)("li",{parentName:"ul"},"Type: String")),(0,i.kt)("p",null,"The endpoint to the Parse Platform instance."),(0,i.kt)("h4",{id:"parseappid"},(0,i.kt)("inlineCode",{parentName:"h4"},"parseAppId")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: undefined"),(0,i.kt)("li",{parentName:"ul"},"Type: String")),(0,i.kt)("p",null,"The App ID for the Parse Platform instance."))}m.isMDXComponent=!0}}]);