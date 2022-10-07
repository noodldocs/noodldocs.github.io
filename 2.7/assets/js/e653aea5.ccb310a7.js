"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[9181],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=o,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=c;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},56680:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),i=["components"],l={title:"Markdown",hide_title:!0},u=void 0,p={unversionedId:"modules/markdown/markdown-node",id:"modules/markdown/markdown-node",title:"Markdown",description:"This node enables you to use Markdown in Noodl.",source:"@site/library/modules/markdown/markdown-node.md",sourceDirName:"modules/markdown",slug:"/modules/markdown/markdown-node",permalink:"/2.6/library/modules/markdown/markdown-node",tags:[],version:"current",frontMatter:{title:"Markdown",hide_title:!0},sidebar:"markdownSidebar",previous:{title:"Markdown Module",permalink:"/2.6/library/modules/markdown/"}},s={},d=[{value:"Inputs",id:"inputs",level:2}],c={toc:d};function m(e){var n=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,""),(0,a.kt)("h1",{id:"markdown"},"Markdown"),(0,a.kt)("p",null,"This node enables you to use Markdown in Noodl."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(6210).Z,width:"970",height:"336"}),"\n"),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CSS Class"),(0,a.kt)("br",{parentName:"p"}),"\n","The class name that'll be set on a wrapper ",(0,a.kt)("inlineCode",{parentName:"p"},"<div>")," around the resulting HTML output. This is important for styling the Markdown with CSS."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source"),(0,a.kt)("br",{parentName:"p"}),"\n","The markdown source."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Allow HTML"),(0,a.kt)("br",{parentName:"p"}),"\n","If this is enabled any HTML in the ",(0,a.kt)("em",{parentName:"p"},"Source")," will be rendered as HTML. Be mindful of security risks if the markdown source originates in some type of end user input."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Open links in tab"),"  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"true")," Links in the markdown open in a new tab"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"false")," Links in the markdown open in the same window")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Mounted"),(0,a.kt)("br",{parentName:"p"}),"\n","This property is used to completely remove the node from the DOM. If this property is set to false the node is removed from the DOM."))}m.isMDXComponent=!0},6210:function(e,n,t){n.Z=t.p+"assets/images/markdown-nodes-24d6636f69c049de037ee12e24685bb5.png"}}]);