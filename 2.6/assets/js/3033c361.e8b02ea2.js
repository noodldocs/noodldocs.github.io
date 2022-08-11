"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[781],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93171:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return m}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=n(17213),p=["components"],u={title:"Survey App",hide_title:!0},c=void 0,l={unversionedId:"examples/survey-app",id:"examples/survey-app",title:"Survey App",description:"",source:"@site/library/examples/survey-app.mdx",sourceDirName:"examples",slug:"/examples/survey-app",permalink:"/2.6/library/examples/survey-app",tags:[],version:"current",frontMatter:{title:"Survey App",hide_title:!0},sidebar:"librarySidebar",previous:{title:"Task List App",permalink:"/2.6/library/examples/task-list-app"},next:{title:"Star Rating Component",permalink:"/2.6/library/examples/star-rating-component"}},s={},m=[],f={toc:m};function d(e){var t=e.components,u=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-survey-app"},"Custom Survey App"),(0,a.kt)("p",null,"This app is a simple user survey. It shows how to work with ",(0,a.kt)("strong",{parentName:"p"},"navigation"),", ",(0,a.kt)("strong",{parentName:"p"},"visual and interaction states")," and ",(0,a.kt)("strong",{parentName:"p"},"custom components"),". You can also follow the ",(0,a.kt)("a",{parentName:"p",href:"/docs/build-alongs/survey-app"},"Build Along")," clip if you want to see how it's constructed."),(0,a.kt)("div",{className:"ndl-image-with-background m"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(55955).Z,width:"530",height:"384"})),(0,a.kt)(i.Z,{zip:"/library/examples/survey-app/survey_app_1-4.zip",name:"Custom Survey App",thumb:"/library/examples/survey-app/survey_thumbnail2.png",mdxType:"ImportButton"})))}d.isMDXComponent=!0},17213:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294),o=n(39671);function a(e){var t=e.zip,n=e.name,a=e.thumb,i=e.cf;return r.createElement("button",{className:"ndl-import-button",onClick:function(){return(0,o.I)(t,{name:n,thumb:a,cf:i})}})}},39671:function(e,t,n){n.d(t,{I:function(){return o}});var r=n(99782);function o(e,t){var n=[];t&&void 0!==t.name&&n.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&n.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+r.default.baseUrl+t.thumb)),t&&void 0!==t.cf&&n.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+r.default.baseUrl+"/"+t.cf));var o="noodl:import/"+location.protocol+"//"+location.host+r.default.baseUrl+e+(n.length>0?"?"+n.join("&"):"");console.log("Importing into Noodl:",o),console.log(e),window.location.href=o}},55955:function(e,t,n){t.Z=n.p+"assets/images/survey_thumbnail2-050e57e7593d4cca623d4f6213cb5f68.png"}}]);