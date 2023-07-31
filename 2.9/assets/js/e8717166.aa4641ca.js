"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[6756],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(87462),o=(n(67294),n(3905)),r=n(17213);const i={title:"Navigation with URL encoded Parameters",hide_title:!0},l="Navigation with URL encoded parameters example",c={unversionedId:"examples/navigation-url-encoding",id:"examples/navigation-url-encoding",title:"Navigation with URL encoded Parameters",description:"This example demonstrated how to use Multiple levels of navigation stacks and how to Encode Parameters in the URL to pass values between pages. Follow the Navigation Guides to learn how the example was built.",source:"@site/library/examples/navigation-url-encoding.mdx",sourceDirName:"examples",slug:"/examples/navigation-url-encoding",permalink:"/2.9/library/examples/navigation-url-encoding",draft:!1,tags:[],version:"current",frontMatter:{title:"Navigation with URL encoded Parameters",hide_title:!0},sidebar:"librarySidebar",previous:{title:"Star Rating Component",permalink:"/2.9/library/examples/star-rating-component"},next:{title:"Suatch Google Sheets Example",permalink:"/2.9/library/examples/suatch"}},s={},p=[],m={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"navigation-with-url-encoded-parameters-example"},"Navigation with URL encoded parameters example"),(0,o.kt)("p",null,"This example demonstrated how to use ",(0,o.kt)("strong",{parentName:"p"},"Multiple levels of navigation stacks")," and how to ",(0,o.kt)("strong",{parentName:"p"},"Encode Parameters in the URL")," to pass values between pages. Follow the ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/navigation/basic-navigation"},"Navigation Guides")," to learn how the example was built."),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(93481).Z,width:"1200",height:"675"})),(0,o.kt)(r.Z,{zip:"/library/examples/navigation-url-encoding/param-encoding-url.zip",name:"Navigation Example",thumb:"/library/examples/navigation-url-encoding/show-products-page-4.png",mdxType:"ImportButton"})))}d.isMDXComponent=!0},17213:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(39671);function r(e){let{zip:t,name:n,thumb:r,cf:i}=e;return a.createElement("button",{className:"ndl-import-button",onClick:()=>(0,o.I)(t,{name:n,thumb:r,cf:i})})}},39671:(e,t,n)=>{n.d(t,{I:()=>o});var a=n(36809);function o(e,t){let n=[];t&&void 0!==t.name&&n.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&n.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+a.default.baseUrl+t.thumb)),t&&void 0!==t.cf&&n.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+a.default.baseUrl+"/"+t.cf));var o="noodl:import/"+location.protocol+"//"+location.host+a.default.baseUrl+e+(n.length>0?"?"+n.join("&"):"");console.log("Importing into Noodl:",o),console.log(e),window.location.href=o}},93481:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/encoding-params-final-fd7a5822f17fc59a8928fdda48d82810.gif"}}]);