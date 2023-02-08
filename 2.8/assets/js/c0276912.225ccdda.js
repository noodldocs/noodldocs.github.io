"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[7202],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},30978:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],c={title:"Email Verification",hide_title:!0},l="Email Verification",s={unversionedId:"prefabs/email-verification/README",id:"prefabs/email-verification/README",title:"Email Verification",description:"This prefab contains a set of cloud functions that can help you add support for user email verification and a reset password flow by sending the user emails with links containing secret tokens. You can find a more thorough guide here.",source:"@site/library/prefabs/email-verification/README.md",sourceDirName:"prefabs/email-verification",slug:"/prefabs/email-verification/",permalink:"/2.8/library/prefabs/email-verification/",tags:[],version:"current",frontMatter:{title:"Email Verification",hide_title:!0},sidebar:"emailVerificationSidebar"},u={},p=[{value:"Settings",id:"settings",level:2},{value:"Sign up project template",id:"sign-up-project-template",level:2}],f={toc:p};function d(e){var t=e.components,c=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"email-verification"},"Email Verification"),(0,a.kt)("p",null,"This prefab contains a set of cloud functions that can help you add support for user email verification and a reset password flow by sending the user emails with links containing secret tokens. You can find a more thorough guide ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/cloud-logic/email-verification"},"here"),"."),(0,a.kt)("p",null,"When you clone the prefab your project will get the following cloud functions:"),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(50130).Z,width:"602",height:"734"}))),(0,a.kt)("h2",{id:"settings"},"Settings"),(0,a.kt)("p",null,"Before you can use the functions you must provide a few configuration parameters. These prefabs use ",(0,a.kt)("a",{parentName:"p",href:"/library/prefabs/sendgrid"},"SendGrid")," as an email service, to use them you need to sign up and get an account (it's free to test)."),(0,a.kt)("p",null,"Look ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/cloud-logic/email-verification#settings"},"here")," for a description of how to prepare the configuration, and check out the ",(0,a.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/config"},"Config")," node for more information on config parameters."),(0,a.kt)("h2",{id:"sign-up-project-template"},"Sign up project template"),(0,a.kt)("p",null,"The best way to learn more about email verification and password reset is to try the ",(0,a.kt)("strong",{parentName:"p"},"Sign up project template")," and read the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/cloud-logic/email-verification"},"guide")),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(43191).Z,width:"760",height:"690"}))))}d.isMDXComponent=!0},43191:function(e,t,n){t.Z=n.p+"assets/images/signup-template-15cd4d1a6d6fce354bcefb13224db64b.png"},50130:function(e,t,n){t.Z=n.p+"assets/images/email-verification-1-2f1164a368e84942065bbf857ca56fe6.png"}}]);