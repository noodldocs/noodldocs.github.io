"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[17],{3905:function(A,t,e){e.d(t,{Zo:function(){return u},kt:function(){return s}});var a=e(67294);function o(A,t,e){return t in A?Object.defineProperty(A,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):A[t]=e,A}function n(A,t){var e=Object.keys(A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(A,t).enumerable}))),e.push.apply(e,a)}return e}function r(A){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?n(Object(e),!0).forEach((function(t){o(A,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(t){Object.defineProperty(A,t,Object.getOwnPropertyDescriptor(e,t))}))}return A}function g(A,t){if(null==A)return{};var e,a,o=function(A,t){if(null==A)return{};var e,a,o={},n=Object.keys(A);for(a=0;a<n.length;a++)e=n[a],t.indexOf(e)>=0||(o[e]=A[e]);return o}(A,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);for(a=0;a<n.length;a++)e=n[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(A,e)&&(o[e]=A[e])}return o}var B=a.createContext({}),E=function(A){var t=a.useContext(B),e=t;return A&&(e="function"==typeof A?A(t):r(r({},t),A)),e},u=function(A){var t=E(A.components);return a.createElement(B.Provider,{value:t},A.children)},l={inlineCode:"code",wrapper:function(A){var t=A.children;return a.createElement(a.Fragment,{},t)}},i=a.forwardRef((function(A,t){var e=A.components,o=A.mdxType,n=A.originalType,B=A.parentName,u=g(A,["components","mdxType","originalType","parentName"]),i=E(e),s=o,Q=i["".concat(B,".").concat(s)]||i[s]||l[s]||n;return e?a.createElement(Q,r(r({ref:t},u),{},{components:e})):a.createElement(Q,r({ref:t},u))}));function s(A,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof A||o){var n=e.length,r=new Array(n);r[0]=i;var g={};for(var B in t)hasOwnProperty.call(t,B)&&(g[B]=t[B]);g.originalType=A,g.mdxType="string"==typeof A?A:o,r[1]=g;for(var E=2;E<n;E++)r[E]=e[E];return a.createElement.apply(null,r)}return a.createElement.apply(null,e)}i.displayName="MDXCreateElement"},81816:function(A,t,e){e.r(t),e.d(t,{assets:function(){return u},contentTitle:function(){return B},default:function(){return s},frontMatter:function(){return g},metadata:function(){return E},toc:function(){return l}});var a=e(83117),o=e(80102),n=(e(67294),e(3905)),r=["components"],g={title:"Custom HTML",hide_title:!0},B=void 0,E={unversionedId:"modules/custom-html/README",id:"modules/custom-html/README",title:"Custom HTML",description:"This node allows you to add your own custom HTML markup to your visual tree. Common use cases include embeds or inline SVG's.",source:"@site/library/modules/custom-html/README.md",sourceDirName:"modules/custom-html",slug:"/modules/custom-html/",permalink:"/2.8/library/modules/custom-html/",tags:[],version:"current",frontMatter:{title:"Custom HTML",hide_title:!0},sidebar:"customHtmlSidebar",previous:{title:"The Custom HTML Module",permalink:"/2.8/library/modules/custom-html/overview"}},u={},l=[{value:"Security notice",id:"security-notice",level:2},{value:"Inputs",id:"inputs",level:2}],i={toc:l};function s(A){var t=A.components,g=(0,o.Z)(A,r);return(0,n.kt)("wrapper",(0,a.Z)({},i,g,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,""),(0,n.kt)("h1",{id:"custom-html"},"Custom HTML"),(0,n.kt)("p",null,"This node allows you to add your own custom HTML markup to your visual tree. Common use cases include embeds or inline SVG's."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:e(70687).Z,width:"680",height:"384"}))),(0,n.kt)("p",null,"You can pass dynamic values to your markup by using template strings. ",(0,n.kt)("inlineCode",{parentName:"p"},"{{ FillColor }}")," will create an input port named ",(0,n.kt)("inlineCode",{parentName:"p"},"FillColor"),"."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:e(22527).Z,width:"586",height:"173"}))),(0,n.kt)("h2",{id:"security-notice"},"Security notice"),(0,n.kt)("p",null,"This node also allows you to add script tags to your app. For security reasons all script tags are deactivated, but if you need to run a script (required for some embeds) you can turn off that fail safe. ",(0,n.kt)("strong",null,"Please note that passing user input to your template string variables can be a security risk for you and your users, leaving you vulnerable to ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-site_scripting"},"XSS Attacks"),".")),(0,n.kt)("p",null,""),(0,n.kt)("h2",{id:"inputs"},"Inputs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Data"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-data"},"HTML")),(0,n.kt)("td",{parentName:"tr",align:null},"Your custom markup that will be rendered in the visual tree.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-data"},"Run inline JavaScript")),(0,n.kt)("td",{parentName:"tr",align:null},"Running scripts with user input can be dangerous. To provide an extra layer of security JavaScript in the custom HTML is prevented from running. Turn this on if your embed require scripts or if you are an advanced user with knowledge of ",(0,n.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Cross-site_scripting"},"XSS Attacks"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-data"},"Custom Variables")),(0,n.kt)("td",{parentName:"tr",align:null},"Any variable in a template string will become an input. Only one variable per template string allowed")))))}s.isMDXComponent=!0},22527:function(A,t,e){t.Z=e.p+"assets/images/example-52ff04e8407d431c2d7fa0d221fea0ee.png"},70687:function(A,t){t.Z="data:image/png;base64,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CgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAEAUgQoAQBSBCgBAFIEKAECUBw0AgHLZSHD5/9agq6JtpQHlAAAAAElFTkSuQmCC"}}]);