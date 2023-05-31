"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[781],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(y,p(p({ref:t},c),{},{components:r})):n.createElement(y,p({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93171:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905)),a=r(17213);const p={title:"Survey App",hide_title:!0},i="Custom Survey App",l={unversionedId:"examples/survey-app",id:"examples/survey-app",title:"Survey App",description:"This app is a simple user survey. It shows how to work with navigation, visual and interaction states and custom components. You can also follow the Build Along clip if you want to see how it's constructed.",source:"@site/library/examples/survey-app.mdx",sourceDirName:"examples",slug:"/examples/survey-app",permalink:"/2.8/library/examples/survey-app",draft:!1,tags:[],version:"current",frontMatter:{title:"Survey App",hide_title:!0},sidebar:"librarySidebar",previous:{title:"Task List App",permalink:"/2.8/library/examples/task-list-app"},next:{title:"Star Rating Component",permalink:"/2.8/library/examples/star-rating-component"}},s={},c=[],u={toc:c},m="wrapper";function d(e){let{components:t,...p}=e;return(0,o.kt)(m,(0,n.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-survey-app"},"Custom Survey App"),(0,o.kt)("p",null,"This app is a simple user survey. It shows how to work with ",(0,o.kt)("strong",{parentName:"p"},"navigation"),", ",(0,o.kt)("strong",{parentName:"p"},"visual and interaction states")," and ",(0,o.kt)("strong",{parentName:"p"},"custom components"),". You can also follow the ",(0,o.kt)("a",{parentName:"p",href:"/docs/build-alongs/survey-app"},"Build Along")," clip if you want to see how it's constructed."),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:r(55955).Z,width:"530",height:"384"})),(0,o.kt)(a.Z,{zip:"/library/examples/survey-app/survey_app_1-4.zip",name:"Custom Survey App",thumb:"/library/examples/survey-app/survey_thumbnail2.png",mdxType:"ImportButton"})))}d.isMDXComponent=!0},17213:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(39671);function a(e){let{zip:t,name:r,thumb:a,cf:p}=e;return n.createElement("button",{className:"ndl-import-button",onClick:()=>(0,o.I)(t,{name:r,thumb:a,cf:p})})}},39671:(e,t,r)=>{r.d(t,{I:()=>o});var n=r(36809);function o(e,t){let r=[];t&&void 0!==t.name&&r.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&r.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+n.default.baseUrl+t.thumb)),t&&void 0!==t.cf&&r.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+n.default.baseUrl+"/"+t.cf));var o="noodl:import/"+location.protocol+"//"+location.host+n.default.baseUrl+e+(r.length>0?"?"+r.join("&"):"");console.log("Importing into Noodl:",o),console.log(e),window.location.href=o}},55955:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/survey_thumbnail2-050e57e7593d4cca623d4f6213cb5f68.png"}}]);