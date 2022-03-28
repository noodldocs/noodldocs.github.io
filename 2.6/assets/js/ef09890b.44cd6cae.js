"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[3271],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:e},c),{},{components:n})):r.createElement(f,i({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53763:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Custom HTML",hide_title:!0},u=void 0,s={unversionedId:"custom-html/README",id:"custom-html/README",title:"Custom HTML",description:"This node allows you to add your own custom HTML markup to your visual tree. Common use cases include embeds or inline SVG's.",source:"@site/modules/custom-html/README.md",sourceDirName:"custom-html",slug:"/custom-html/",permalink:"/2.6/modules/custom-html/",tags:[],version:"current",frontMatter:{title:"Custom HTML",hide_title:!0},sidebar:"customHtmlSidebar",previous:{title:"The Custom HTML Module",permalink:"/2.6/modules/custom-html/overview"}},c=[{value:"Security notice",id:"security-notice",children:[],level:2},{value:"Inputs",id:"inputs",children:[],level:2}],p={toc:c};function m(t){var e=t.components,l=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,""),(0,o.kt)("h1",{id:"custom-html"},"Custom HTML"),(0,o.kt)("p",null,"This node allows you to add your own custom HTML markup to your visual tree. Common use cases include embeds or inline SVG's."),(0,o.kt)("div",{class:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(39993).Z,width:"514",height:"190"}))),(0,o.kt)("p",null,"You can pass dynamic values to your markup by using template strings. ",(0,o.kt)("inlineCode",{parentName:"p"},"{{ FillColor }}")," will create an input port named ",(0,o.kt)("inlineCode",{parentName:"p"},"FillColor"),"."),(0,o.kt)("div",{class:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(15627).Z,width:"586",height:"173"}))),(0,o.kt)("h2",{id:"security-notice"},"Security notice"),(0,o.kt)("p",null,"This node also allows you to add script tags to your app. For security reasons all script tags are deactivated, but if you need to run a script (required for some embeds) you can turn off that fail safe. ",(0,o.kt)("strong",null,"Please note that passing user input to your template string variables can be a security risk for you and your users, leaving you vulnerable to ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-site_scripting"},"XSS Attacks"),".")),(0,o.kt)("p",null,""),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{class:"ndl-data"},"HTML")),(0,o.kt)("td",{parentName:"tr",align:null},"Your custom markup that will be rendered in the visual tree.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{class:"ndl-data"},"Run inline JavaScript")),(0,o.kt)("td",{parentName:"tr",align:null},"Running scripts with user input can be dangerous. To provide an extra layer of security JavaScript in the custom HTML is prevented from running. Turn this on if your embed require scripts or if you are an advanced user with knowledge of ",(0,o.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Cross-site_scripting"},"XSS Attacks"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{class:"ndl-data"},"Custom Variables")),(0,o.kt)("td",{parentName:"tr",align:null},"Any variable in a template string will become an input. Only one variable per template string allowed")))))}m.isMDXComponent=!0},39993:function(t,e,n){e.Z=n.p+"assets/images/custom-html-b24160c8b901a0f66239cf0f7ccbc2fa.png"},15627:function(t,e,n){e.Z=n.p+"assets/images/example-52ff04e8407d431c2d7fa0d221fea0ee.png"}}]);