"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[3432],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42401:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=(n(44996),n(53488),["components"]),c={title:"Form",hide_title:!0},l="Navigation Menu",s={unversionedId:"prefabs/navigation-menu/README",id:"prefabs/navigation-menu/README",title:"Form",description:"This is a nifty component that creates a navigation menu. Clicking an item will perform a navigation to the specified path and the correct item will be highlighted.",source:"@site/library/prefabs/navigation-menu/README.md",sourceDirName:"prefabs/navigation-menu",slug:"/prefabs/navigation-menu/",permalink:"/2.8/library/prefabs/navigation-menu/",tags:[],version:"current",frontMatter:{title:"Form",hide_title:!0},sidebar:"navigationMenuSidebar"},u={},p=[{value:"Basic usage",id:"basic-usage",level:2}],m={toc:p};function f(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"navigation-menu"},"Navigation Menu"),(0,o.kt)("p",null,"This is a nifty component that creates a navigation menu. Clicking an item will perform a navigation to the specified path and the correct item will be highlighted."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(78742).Z,width:"680",height:"384"}))),(0,o.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,o.kt)("p",null,"You specify the items of the menu by editing the ",(0,o.kt)("strong",{parentName:"p"},"Items")," array in the ",(0,o.kt)("strong",{parentName:"p"},"Navigation Menu")," component. Below is the default value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"[\n  {\n    // Icons are references to material icons,\n    // see https://fonts.google.com/icons?selected=Material+Icons\n    Icon: 'home',\n\n    // The label to be shown on the nav item\n    Label: 'Home',\n\n    // The url to navigate to when clicked\n    Url: '/home',\n\n    // Setting this to true will indicate that this\n    // item should be selected if there is no path\n    // or if no other path matches\n    IsHome: true,\n  },\n  {\n    Icon: 'schedule',\n    Label: 'Calendar',\n    Url: '/calendar',\n  },\n];\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Icon")," This is an icon identifier, you can find a list of all supported icons ",(0,o.kt)("a",{parentName:"p",href:"https://fonts.google.com/icons?selected=Material+Icons"},"here"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Label")," The label for the menu item.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Url")," The path that should be navigated to when clicked.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"IsHome"),' This specifies if this menu item is the "home" item. It will be shown as selected of there is no path or none of the others match the current path.'))))}f.isMDXComponent=!0},53488:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294);function a(e){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)})):function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+n)}catch(r){console.error("Fallback: Oops, unable to copy",r)}document.body.removeChild(t)}(e)}function o(e){return r.createElement("button",{className:"ndl-copy-nodes-button",onClick:function(){return t=e.json,void a(JSON.stringify(t));var t}})}},78742:function(e,t,n){t.Z=n.p+"assets/images/navigation-menu-a7d7ae7d6a1c3198cac858204dad60b6.png"}}]);