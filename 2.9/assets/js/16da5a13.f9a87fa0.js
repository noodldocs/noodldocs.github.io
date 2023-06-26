"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[8641],{3905:function(A,e,i){i.d(e,{Zo:function(){return g},kt:function(){return D}});var t=i(67294);function n(A,e,i){return e in A?Object.defineProperty(A,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):A[e]=i,A}function r(A,e){var i=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),i.push.apply(i,t)}return i}function c(A){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){n(A,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(i,e))}))}return A}function o(A,e){if(null==A)return{};var i,t,n=function(A,e){if(null==A)return{};var i,t,n={},r=Object.keys(A);for(t=0;t<r.length;t++)i=r[t],e.indexOf(i)>=0||(n[i]=A[i]);return n}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(t=0;t<r.length;t++)i=r[t],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(A,i)&&(n[i]=A[i])}return n}var a=t.createContext({}),u=function(A){var e=t.useContext(a),i=e;return A&&(i="function"==typeof A?A(e):c(c({},e),A)),i},g=function(A){var e=u(A.components);return t.createElement(a.Provider,{value:e},A.children)},E={inlineCode:"code",wrapper:function(A){var e=A.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(A,e){var i=A.components,n=A.mdxType,r=A.originalType,a=A.parentName,g=o(A,["components","mdxType","originalType","parentName"]),d=u(i),D=n,H=d["".concat(a,".").concat(D)]||d[D]||E[D]||r;return i?t.createElement(H,c(c({ref:e},g),{},{components:i})):t.createElement(H,c({ref:e},g))}));function D(A,e){var i=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var r=i.length,c=new Array(r);c[0]=d;var o={};for(var a in e)hasOwnProperty.call(e,a)&&(o[a]=e[a]);o.originalType=A,o.mdxType="string"==typeof A?A:n,c[1]=o;for(var u=2;u<r;u++)c[u]=i[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,i)}d.displayName="MDXCreateElement"},94567:function(A,e,i){i.r(e),i.d(e,{assets:function(){return g},contentTitle:function(){return a},default:function(){return D},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return E}});var t=i(83117),n=i(80102),r=(i(67294),i(3905)),c=["components"],o={title:"Marquee Module",hide_title:!0},a="Marquee",u={unversionedId:"modules/marquee/README",id:"modules/marquee/README",title:"Marquee Module",description:"GitHub",source:"@site/library/modules/marquee/README.md",sourceDirName:"modules/marquee",slug:"/modules/marquee/",permalink:"/2.9/library/modules/marquee/",tags:[],version:"current",frontMatter:{title:"Marquee Module",hide_title:!0},sidebar:"marquee",next:{title:"Marquee",permalink:"/2.9/library/modules/marquee/nodes/v1/marquee"}},g={},E=[{value:"Getting started",id:"getting-started",level:3}],d={toc:E};function D(A){var e=A.components,o=(0,n.Z)(A,c);return(0,r.kt)("wrapper",(0,t.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"marquee"},"Marquee"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/noodlapp/modules/tree/main/modules/marquee"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?style=plastic&logo=github&label=GitHub&message=Source%20Code",alt:"GitHub"}))),(0,r.kt)("p",null,"This module allows you to add a marquee to your Noodl App using any of the other visual nodes."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:i(59266).Z,width:"747",height:"342"}))),(0,r.kt)("h3",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,'After importing this module you will see one new nodes in the node picker called "Marquee" in the external libraries category.'),(0,r.kt)("p",null,"We can start by placing the Marquee node into our visual tree.\nAll the children placed in this node will be added into the marquee list and duplicated to fill the space."),(0,r.kt)("p",null,"For example when we add a Text node inside like this:"),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:i(75124).Z,width:"519",height:"383"}))),(0,r.kt)("p",null,"Then in the preview we will see this:"),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:i(59618).Z,width:"551",height:"188"}))))}D.isMDXComponent=!0},59266:function(A,e,i){e.Z=i.p+"assets/images/preview-marquee-c648bebd86cd0d95f1829212a5a6f528.png"},59618:function(A,e,i){e.Z=i.p+"assets/images/text-1-preview-f0e6a9fb01f2355abffbc3daabcb5d31.png"},75124:function(A,e){e.Z="data:image/png;base64,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"}}]);