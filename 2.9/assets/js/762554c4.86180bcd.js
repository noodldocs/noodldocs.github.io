"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[5175],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),d=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(i.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(t),c=o,k=m["".concat(i,".").concat(c)]||m[c]||u[c]||a;return t?r.createElement(k,l(l({ref:n},p),{},{components:t})):r.createElement(k,l({ref:n},p))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=c;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[m]="string"==typeof e?e:o,l[1]=s;for(var d=2;d<a;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},71070:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=t(87462),o=(t(67294),t(3905));const a={title:"Markdown Module",hide_title:!0},l="Markdown Module",s={unversionedId:"modules/markdown/README",id:"modules/markdown/README",title:"Markdown Module",description:"Markdown in Noodl is a combination of the Markdown and CSS Definition nodes. The CSS enables styling of all the individual components of the resulting markdown, like headers, lists, images, links, and so on.",source:"@site/library/modules/markdown/README.md",sourceDirName:"modules/markdown",slug:"/modules/markdown/",permalink:"/2.9/library/modules/markdown/",draft:!1,tags:[],version:"current",frontMatter:{title:"Markdown Module",hide_title:!0},sidebar:"markdownSidebar",next:{title:"Markdown",permalink:"/2.9/library/modules/markdown/markdown-node"}},i={},d=[{value:"Example",id:"example",level:2},{value:"Beind the scenes",id:"beind-the-scenes",level:2}],p={toc:d},m="wrapper";function u(e){let{components:n,...a}=e;return(0,o.kt)(m,(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"markdown-module"},"Markdown Module"),(0,o.kt)("p",null,"Markdown in Noodl is a combination of the ",(0,o.kt)("strong",{parentName:"p"},"Markdown")," and ",(0,o.kt)("strong",{parentName:"p"},"CSS Definition")," nodes. The CSS enables styling of all the individual components of the resulting markdown, like headers, lists, images, links, and so on."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Let's recreate this example."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(3345).Z,width:"1370",height:"1742"})),(0,o.kt)("p",null,"We'll need three nodes. A ",(0,o.kt)("strong",{parentName:"p"},"Group"),", the ",(0,o.kt)("strong",{parentName:"p"},"Markdown")," node, and a ",(0,o.kt)("strong",{parentName:"p"},"CSS Definition")," node."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(23997).Z,width:"970",height:"336"})),(0,o.kt)("p",null,"This is the markdown:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'# H1\n\n## H2\n\n### H3\n\nEmphasis, aka italics, with _asterisks_ or _underscores_.\nStrong emphasis, aka bold, with **asterisks** or **underscores**.\nCombined emphasis with **asterisks and _underscores_**.\n\n1. First ordered list item\n2. Another item\n\n-   Unordered sub-list.\n\n1. Actual numbers don\'t matter, just that it\'s a number\n1. Ordered sub-list\n1. And another item.\n\n-   Unordered list can use asterisks\n\n*   Or minuses\n\n-   Or pluses\n\n[Link to Google](https://www.google.com)\n\nImage:\n![noodl logo](https://uploads-ssl.webflow.com/5ed7a7a9f2bff45062890ed6/5ef31ce42ee3d316fbf5f888_text-logo-black.png)\n\n> Blockquote\n\nIframe embed:\n\n<iframe width="560" height="315" src="https://www.youtube.com/embed/YQBndLl1phI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>\n')),(0,o.kt)("p",null,"To get the HTML to render we need to enable the ",(0,o.kt)("strong",{parentName:"p"},"Allow HTML")," input\n!()","[/modules/markdown/markdown-allow-html.png]"),(0,o.kt)("p",null,"The styling is done with the ",(0,o.kt)("strong",{parentName:"p"},"CSS Definition")," node. This node allows you to write regular CSS in your Noodl project."),(0,o.kt)("p",null,"In this example we'll use the following CSS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* Open Sans font added with the help of https://fonts.google.com */\n@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');\n\n.markdown {\n    font-family: 'Open Sans';\n    font-size: 16px; /* default font size*/\n}\n\n/* make all h1 blue */\n.markdown h1 {\n    color: blue;\n}\n\n/* style the unordered lists */\n.markdown ul {\n    list-style-type: circle;\n    /* list-style-image: url('sqpurple.gif'); */ /* you can also use images in the project folder */\n}\n\n/* style links */\n.markdown a {\n    text-decoration: none;\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},".markdown")," class is the default class name. This can be changed on the ",(0,o.kt)("strong",{parentName:"p"},"Markdown")," node with the ",(0,o.kt)("em",{parentName:"p"},"CSS Class")," input."),(0,o.kt)("h2",{id:"beind-the-scenes"},"Beind the scenes"),(0,o.kt)("p",null,"This module enables you to use ",(0,o.kt)("a",{parentName:"p",href:"https://commonmark.org/help/"},"Markdown")," in Noodl. It's implemented with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/remarkjs/react-markdown"},"react-markdown")," which in turn uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/remarkjs/remark"},"remark"),"."))}u.isMDXComponent=!0},3345:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/markdown-example-537a110f4b202fa6b874912d5e11d1b3.png"},23997:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/markdown-nodes-24d6636f69c049de037ee12e24685bb5.png"}}]);