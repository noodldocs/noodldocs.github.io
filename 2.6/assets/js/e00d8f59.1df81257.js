"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[1560],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return c}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(t),c=o,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||a;return t?r.createElement(h,l(l({ref:n},p),{},{components:t})):r.createElement(h,l({ref:n},p))}));function c(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},10078:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),l=["components"],i={},s="Markdown module",d={unversionedId:"markdown/README",id:"markdown/README",title:"Markdown module",description:"Adding the module to your project",source:"@site/modules/markdown/README.md",sourceDirName:"markdown",slug:"/markdown/",permalink:"/2.6/modules/markdown/",tags:[],version:"current",frontMatter:{},sidebar:"markdownSidebar",next:{title:"markdown-node",permalink:"/2.6/modules/markdown/markdown-node"}},p=[{value:"Adding the module to your project",id:"adding-the-module-to-your-project",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Beind the scenes",id:"beind-the-scenes",children:[],level:2}],u={toc:p};function m(e){var n=e.components,i=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"markdown-module"},"Markdown module"),(0,a.kt)("h2",{id:"adding-the-module-to-your-project"},"Adding the module to your project"),(0,a.kt)("p",null,"Since the ",(0,a.kt)("strong",{parentName:"p"},"Markdown")," node is not part of the default node set in Noodl, we need to add the Markdown module. Open the Noodl project in which you want to add the module, and import it from the sidebar."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(67498).Z,width:"636",height:"728"})),(0,a.kt)("p",null,"Once that's done you'll be able to create the Markdown node."),(0,a.kt)("p",null,"Markdown in Noodl is a combination of the ",(0,a.kt)("strong",{parentName:"p"},"Markdown")," and ",(0,a.kt)("strong",{parentName:"p"},"CSS Definition")," nodes. The CSS enables styling of all the individual components of the resulting markdown, like headers, lists, images, links, and so on."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Let's recreate this example."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(56661).Z,width:"1370",height:"1742"})),(0,a.kt)("p",null,"We'll need three nodes. A ",(0,a.kt)("strong",{parentName:"p"},"Group"),", the ",(0,a.kt)("strong",{parentName:"p"},"Markdown")," node, and a ",(0,a.kt)("strong",{parentName:"p"},"CSS Definition")," node."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(43189).Z,width:"970",height:"336"})),(0,a.kt)("p",null,"This is the markdown:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'# H1\n## H2\n### H3\n\nEmphasis, aka italics, with *asterisks* or _underscores_.\nStrong emphasis, aka bold, with **asterisks** or __underscores__.\nCombined emphasis with **asterisks and _underscores_**.\n1. First ordered list item\n2. Another item\n  * Unordered sub-list. \n1. Actual numbers don\'t matter, just that it\'s a number\n  1. Ordered sub-list\n4. And another item.\n* Unordered list can use asterisks\n- Or minuses\n+ Or pluses\n\n[Link to Google](https://www.google.com)\n\nImage: \n![noodl logo](https://uploads-ssl.webflow.com/5ed7a7a9f2bff45062890ed6/5ef31ce42ee3d316fbf5f888_text-logo-black.png)\n\n> Blockquote\n\nIframe embed:\n<iframe width="560" height="315" src="https://www.youtube.com/embed/YQBndLl1phI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n')),(0,a.kt)("p",null,"To get the HTML to render we need to enable the ",(0,a.kt)("strong",{parentName:"p"},"Allow HTML")," input\n!()","[/modules/markdown/markdown-allow-html.png]"),(0,a.kt)("p",null,"The styling is done with the ",(0,a.kt)("strong",{parentName:"p"},"CSS Definition")," node. This node allows you to write regular CSS in your Noodl project."),(0,a.kt)("p",null,"In this example we'll use the following CSS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* Open Sans font added with the help of https://fonts.google.com */\n@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');\n\n.markdown {\n    font-family: 'Open Sans';\n    font-size: 16px; /* default font size*/\n}\n\n/* make all h1 blue */\n.markdown h1 { \n    color: blue; \n}\n\n/* style the unordered lists */\n.markdown ul { \n    list-style-type: circle; \n    /* list-style-image: url('sqpurple.gif'); */ /* you can also use images in the project folder */\n}\n\n/* style links */\n.markdown a { \n    text-decoration: none;\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".markdown")," class is the default class name. This can be changed on the ",(0,a.kt)("strong",{parentName:"p"},"Markdown")," node with the ",(0,a.kt)("em",{parentName:"p"},"CSS Class")," input."),(0,a.kt)("h2",{id:"beind-the-scenes"},"Beind the scenes"),(0,a.kt)("p",null,"This module enables you to use ",(0,a.kt)("a",{parentName:"p",href:"https://commonmark.org/help/"},"Markdown")," in Noodl. It's implemented with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/remarkjs/react-markdown"},"react-markdown")," which in turn uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/remarkjs/remark"},"remark"),"."))}m.isMDXComponent=!0},67498:function(e,n,t){n.Z=t.p+"assets/images/markdown-add-module-812cf35b1d799c9d77d0cf9858390404.png"},56661:function(e,n,t){n.Z=t.p+"assets/images/markdown-example-537a110f4b202fa6b874912d5e11d1b3.png"},43189:function(e,n,t){n.Z=t.p+"assets/images/markdown-nodes-24d6636f69c049de037ee12e24685bb5.png"}}]);