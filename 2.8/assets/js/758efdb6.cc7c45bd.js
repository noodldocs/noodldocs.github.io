"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[3430],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56138:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],u={title:"Media Query Setup",hide_title:!0},p="Media Query Setup",l={unversionedId:"prefabs/media-query/components/media-query-setup/README",id:"prefabs/media-query/components/media-query-setup/README",title:"Media Query Setup",description:"This component sets up all media queries for your app. It should be placed in you home component. Your project should only include one Media Query Setup node.",source:"@site/library/prefabs/media-query/components/media-query-setup/README.md",sourceDirName:"prefabs/media-query/components/media-query-setup",slug:"/prefabs/media-query/components/media-query-setup/",permalink:"/2.8/library/prefabs/media-query/components/media-query-setup/",tags:[],version:"current",frontMatter:{title:"Media Query Setup",hide_title:!0},sidebar:"mediaQuerySidebar",previous:{title:"Media Queries",permalink:"/2.8/library/prefabs/media-query/"},next:{title:"Match Media Query",permalink:"/2.8/library/prefabs/media-query/components/match-media-query/"}},c={},s=[{value:"Changing the breakpoints",id:"changing-the-breakpoints",level:2}],d={toc:s};function m(e){var t=e.components,u=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"media-query-setup"},"Media Query Setup"),(0,a.kt)("p",null,"This component sets up all media queries for your app. It should be placed in you home component. Your project should only include one ",(0,a.kt)("strong",{parentName:"p"},"Media Query Setup")," node."),(0,a.kt)("div",{className:"ndl-image-with-background xl"},(0,a.kt)("p",null,(0,a.kt)("img",{src:r(10653).Z,width:"1140",height:"448"}))),(0,a.kt)("h2",{id:"changing-the-breakpoints"},"Changing the breakpoints"),(0,a.kt)("p",null,"This component comes with a prediefined set of commonly used breakpoints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Small Mobile"),": 400px and smaller"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Regular Mobile"),": 401px to 700px"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Tablet"),": 701px to 1200px"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Regular Desktop"),": 1201px to 1800px"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Large Desktop"),": 1801px and above")),(0,a.kt)("p",null,"If you want to change the recommended defaults, this can be done at the top of the ",(0,a.kt)("strong",{parentName:"p"},"Register media queries")," Script node."))}m.isMDXComponent=!0},10653:function(e,t,r){t.Z=r.p+"assets/images/media-query-setup-de3ff32d1d44a26dee97c37d1048da6b.png"}}]);