"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[1686],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=o.createContext({}),l=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=l(t.components);return o.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),m=l(n),d=i,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||r;return n?o.createElement(f,a(a({ref:e},u),{},{components:n})):o.createElement(f,a({ref:e},u))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:i,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14598:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=n(83117),i=n(80102),r=(n(67294),n(3905)),a=(n(44996),n(53488),["components"]),s={title:"List With Icons",hide_title:!0},c="List With Icons",l={unversionedId:"prefabs/list-with-icons/README",id:"prefabs/list-with-icons/README",title:"List With Icons",description:"This is a very simple list component that you can use as starting point for building your own custom lists.",source:"@site/library/prefabs/list-with-icons/README.md",sourceDirName:"prefabs/list-with-icons",slug:"/prefabs/list-with-icons/",permalink:"/2.7/library/prefabs/list-with-icons/",tags:[],version:"current",frontMatter:{title:"List With Icons",hide_title:!0},sidebar:"listWithIconsSidebar"},u={},p=[{value:"Basic usage",id:"basic-usage",level:2},{value:"Item Clicked",id:"item-clicked",level:2},{value:"Customizing",id:"customizing",level:2}],m={toc:p};function d(t){var e=t.components,s=(0,i.Z)(t,a);return(0,r.kt)("wrapper",(0,o.Z)({},m,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"list-with-icons"},"List With Icons"),(0,r.kt)("p",null,"This is a very simple list component that you can use as starting point for building your own custom lists."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(88143).Z,width:"680",height:"385"}))),(0,r.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,r.kt)("p",null,"You specify the items of the list by editing the ",(0,r.kt)("strong",{parentName:"p"},"Items")," array in the ",(0,r.kt)("strong",{parentName:"p"},"List With Icons")," component. Below is the default value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'[\n    {\n        // Icons are references to material icons, \n        // see https://fonts.google.com/icons?selected=Material+Icons\n        Icon:"account_circle",\n        Label:"List Item 1"\n    },\n    {\n        Icon:"account_circle",\n        Label:"List Item 2"\n    },\n    {\n        Icon:"account_circle",\n        Label:"List Item 3"\n    }   \n]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Icon")," This is an icon identifier, you can find a list of all supported icons ",(0,r.kt)("a",{parentName:"li",href:"https://fonts.google.com/icons?selected=Material+Icons"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Label")," The label that should be shown for the list item.")),(0,r.kt)("h2",{id:"item-clicked"},"Item Clicked"),(0,r.kt)("p",null,"The list has an output signal called ",(0,r.kt)("strong",{parentName:"p"},"Item Clicked")," when an item is clicked, and the output ",(0,r.kt)("strong",{parentName:"p"},"Item Id")," will contain the id of the object corresponding to that item."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(22919).Z,width:"1178",height:"526"}))),(0,r.kt)("p",null,"The function node in the above example contains the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const clickedListItem = Noodl.Objects[Inputs.ItemId]\n\nconsole.log("This item was clicked: " + clickedListItem.Label)\n')),(0,r.kt)("h2",{id:"customizing"},"Customizing"),(0,r.kt)("p",null,"Like most UI Components in the library this is a great staring point for building your own lists. The best way is to look at the ",(0,r.kt)("strong",{parentName:"p"},"Item")," sub component of the ",(0,r.kt)("strong",{parentName:"p"},"List With Icons")," component. Here you can see how the ",(0,r.kt)("strong",{parentName:"p"},"Label")," and ",(0,r.kt)("strong",{parentName:"p"},"Icon")," are connected from the ",(0,r.kt)("strong",{parentName:"p"},"Repeater Object"),". "),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(90338).Z,width:"1970",height:"804"}))),(0,r.kt)("p",null,"It's a starting point to build your own custom list items."))}d.isMDXComponent=!0},53488:function(t,e,n){n.d(e,{Z:function(){return r}});var o=n(67294);function i(t){navigator.clipboard?navigator.clipboard.writeText(t).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(t){console.error("Async: Could not copy text: ",t)})):function(t){var e=document.createElement("textarea");e.value=t,e.style.top="0",e.style.left="0",e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+n)}catch(o){console.error("Fallback: Oops, unable to copy",o)}document.body.removeChild(e)}(t)}function r(t){return o.createElement("button",{className:"ndl-copy-nodes-button",onClick:function(){return e=t.json,void i(JSON.stringify(e));var e}})}},22919:function(t,e,n){e.Z=n.p+"assets/images/list-with-icons-1-b299d7c06695f3dd4c5848fa52bb3882.png"},90338:function(t,e,n){e.Z=n.p+"assets/images/list-with-icons-2-9b2afe7bcea0e2c853c55b4a70672fd2.png"},88143:function(t,e,n){e.Z=n.p+"assets/images/list-with-icons-bce3aa37a2b87651372e98fcfbfe7f3e.png"}}]);