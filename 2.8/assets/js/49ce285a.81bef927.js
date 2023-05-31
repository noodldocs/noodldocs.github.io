"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[3432],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));n(44996),n(53488);const o={title:"Form",hide_title:!0},i="Navigation Menu",l={unversionedId:"prefabs/navigation-menu/README",id:"prefabs/navigation-menu/README",title:"Form",description:"This is a nifty component that creates a navigation menu. Clicking an item will perform a navigation to the specified path and the correct item will be highlighted.",source:"@site/library/prefabs/navigation-menu/README.md",sourceDirName:"prefabs/navigation-menu",slug:"/prefabs/navigation-menu/",permalink:"/2.8/library/prefabs/navigation-menu/",draft:!1,tags:[],version:"current",frontMatter:{title:"Form",hide_title:!0},sidebar:"navigationMenuSidebar"},c={},s=[{value:"Basic usage",id:"basic-usage",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"navigation-menu"},"Navigation Menu"),(0,r.kt)("p",null,"This is a nifty component that creates a navigation menu. Clicking an item will perform a navigation to the specified path and the correct item will be highlighted."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(73033).Z,width:"680",height:"384"}))),(0,r.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,r.kt)("p",null,"You specify the items of the menu by editing the ",(0,r.kt)("strong",{parentName:"p"},"Items")," array in the ",(0,r.kt)("strong",{parentName:"p"},"Navigation Menu")," component. Below is the default value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"[\n  {\n    // Icons are references to material icons,\n    // see https://fonts.google.com/icons?selected=Material+Icons\n    Icon: 'home',\n\n    // The label to be shown on the nav item\n    Label: 'Home',\n\n    // The url to navigate to when clicked\n    Url: '/home',\n\n    // Setting this to true will indicate that this\n    // item should be selected if there is no path\n    // or if no other path matches\n    IsHome: true,\n  },\n  {\n    Icon: 'schedule',\n    Label: 'Calendar',\n    Url: '/calendar',\n  },\n];\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Icon")," This is an icon identifier, you can find a list of all supported icons ",(0,r.kt)("a",{parentName:"p",href:"https://fonts.google.com/icons?selected=Material+Icons"},"here"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Label")," The label for the menu item.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Url")," The path that should be navigated to when clicked.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"IsHome"),' This specifies if this menu item is the "home" item. It will be shown as selected of there is no path or none of the others match the current path.'))))}m.isMDXComponent=!0},53488:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294);function r(e){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)})):function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+n)}catch(a){console.error("Fallback: Oops, unable to copy",a)}document.body.removeChild(t)}(e)}function o(e){return a.createElement("button",{className:"ndl-copy-nodes-button",onClick:()=>{return t=e.json,void r(JSON.stringify(t));var t}})}},73033:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/navigation-menu-a7d7ae7d6a1c3198cac858204dad60b6.png"}}]);