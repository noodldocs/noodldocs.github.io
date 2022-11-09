"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[1618],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,b=p["".concat(u,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(b,c(c({ref:t},s),{},{components:r})):n.createElement(b,c({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},35946:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return m}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),c=["components"],i={hide_title:!0},u=void 0,l={unversionedId:"modules/webcamera/webcamera-node",id:"modules/webcamera/webcamera-node",title:"webcamera-node",description:"!> The documentation for this node will be coming soon.",source:"@site/library/modules/webcamera/webcamera-node.md",sourceDirName:"modules/webcamera",slug:"/modules/webcamera/webcamera-node",permalink:"/2.8/library/modules/webcamera/webcamera-node",tags:[],version:"current",frontMatter:{hide_title:!0},sidebar:"webcameraSidebar",previous:{title:"WebCamera",permalink:"/2.8/library/modules/webcamera/webcamera-guide"}},s={},m=[],p={toc:m};function d(e){var t=e.components,i=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,""),(0,a.kt)("h1",{id:"webcamera"},"Webcamera"),(0,a.kt)("p",null,"!> The documentation for this node will be coming soon."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Web Camera")," node gets the video stream of a target device\u2019s camera (mobile camera or computer web camera). The ",(0,a.kt)("strong",{parentName:"p"},"Web Camera")," is used together with the ",(0,a.kt)("strong",{parentName:"p"},"Video")," node to display the camera stream. See the image below for how to hook it up."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(2566).Z,width:"1002",height:"576"})),(0,a.kt)("p",null,"It will work inside of Noodl without problems, but to make it work on a phone, or on a website, the project needs to be hosted on a secure server (https). If you use the Noodl Cloud Deploy functionality your project will be hosted on a secure server so this is a great way to test the Web Camera on a phone."),(0,a.kt)("p",null,"Note that iOS sometimes can be tricky, but try setting the Video node to mute and autoplay to get the Web Camera stream.\n"))}d.isMDXComponent=!0},2566:function(e,t,r){t.Z=r.p+"assets/images/webcamera-node-9c23ec8fc4c3c97a532506aec22a88c4.png"}}]);