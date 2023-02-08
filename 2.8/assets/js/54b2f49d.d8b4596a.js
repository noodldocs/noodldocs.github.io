"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[198],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),f=o,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||i;return t?r.createElement(d,a(a({ref:n},c),{},{components:t})):r.createElement(d,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2781:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var r=t(83117),o=t(80102),i=(t(67294),t(3905)),a=t(17213),l=["components"],p={title:"Sign up / Sign In Example",hide_title:!0},u="Sign up / Sign In Example",c={unversionedId:"examples/sign-up",id:"examples/sign-up",title:"Sign up / Sign In Example",description:"This app includes a simple Sign Up / Sign In form, including buttons for requesting a new password and validating your email. This video walks through the example and shows how to connect to a email service using Zapier.",source:"@site/library/examples/sign-up.mdx",sourceDirName:"examples",slug:"/examples/sign-up",permalink:"/2.8/library/examples/sign-up",tags:[],version:"current",frontMatter:{title:"Sign up / Sign In Example",hide_title:!0},sidebar:"librarySidebar",previous:{title:"Javascript Example",permalink:"/2.8/library/examples/javascript-example"},next:{title:"Localization Example (i18next)",permalink:"/2.8/library/examples/localization"}},s={},m=[],f={toc:m};function d(e){var n=e.components,p=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,p,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sign-up--sign-in-example"},"Sign up / Sign In Example"),(0,i.kt)("p",null,"This app includes a simple Sign Up / Sign In form, including buttons for requesting a new password and validating your email. This ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=DWwE1RzuN2o"},"video")," walks through the example and shows how to connect to a email service using Zapier."),(0,i.kt)("div",{className:"ndl-image-with-background m"},(0,i.kt)("p",null,(0,i.kt)("img",{src:t(96562).Z,width:"530",height:"384"})),(0,i.kt)(a.Z,{zip:"/library/examples/sign-up/signuptemplate-1-2.zip",name:"Task List App",thumb:"/library/examples/sign-up/signup_thumbnail.png",cf:"/library/examples/sign-up/signup-app-cf.json",mdxType:"ImportButton"})))}d.isMDXComponent=!0},17213:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(67294),o=t(39671);function i(e){var n=e.zip,t=e.name,i=e.thumb,a=e.cf;return r.createElement("button",{className:"ndl-import-button",onClick:function(){return(0,o.I)(n,{name:t,thumb:i,cf:a})}})}},39671:function(e,n,t){t.d(n,{I:function(){return o}});var r=t(99782);function o(e,n){var t=[];n&&void 0!==n.name&&t.push("name="+encodeURIComponent(n.name)),n&&void 0!==n.thumb&&t.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+r.default.baseUrl+n.thumb)),n&&void 0!==n.cf&&t.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+r.default.baseUrl+"/"+n.cf));var o="noodl:import/"+location.protocol+"//"+location.host+r.default.baseUrl+e+(t.length>0?"?"+t.join("&"):"");console.log("Importing into Noodl:",o),console.log(e),window.location.href=o}},96562:function(e,n,t){n.Z=t.p+"assets/images/signup_thumbnail-dc6ecfb18dcf64d7f6c1d9f747e47532.png"}}]);