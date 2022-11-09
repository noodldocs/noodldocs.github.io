"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[5749],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return d}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},b=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,f=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return n?t.createElement(f,i(i({ref:r},u),{},{components:n})):t.createElement(f,i({ref:r},u))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}b.displayName="MDXCreateElement"},90097:function(e,r,n){n.r(r),n.d(r,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var t=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={hide_title:!0,hide_table_of_contents:!0,title:"Noodl.Variables"},c="Noodl.Variables",s={unversionedId:"reference/variables",id:"reference/variables",title:"Noodl.Variables",description:"Variables are the simplest form of global data model in Noodl. You can learn more about variables in the guide. You can access all variables in your application trough the Noodl.Variables object. Changing a variable will trigger all connections to be updated for all Variable nodes in your project with the corresponding variable name.",source:"@site/javascript/reference/variables.md",sourceDirName:"reference",slug:"/reference/variables",permalink:"/2.8/javascript/reference/variables",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Noodl.Variables"},sidebar:"apiSidebar",previous:{title:"Reference Documentation",permalink:"/2.8/javascript/reference/overview"},next:{title:"Noodl.Objects",permalink:"/2.8/javascript/reference/objects"}},u={},p=[],b={toc:p};function d(e){var r=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},b,l,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"noodlvariables"},"Noodl.Variables"),(0,o.kt)("p",null,"Variables are the simplest form of global data model in Noodl. You can learn more about variables in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/data/variables"},"guide"),". You can access all variables in your application trough the ",(0,o.kt)("inlineCode",{parentName:"p"},"Noodl.Variables")," object. Changing a variable will trigger all connections to be updated for all ",(0,o.kt)("strong",{parentName:"p"},"Variable")," nodes in your project with the corresponding variable name."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(41754).Z,width:"1697",height:"550"}))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// This will change the variable named MyVariable\n// and trigger all variable nodes in your project\nNoodl.Variables.MyVariable = "Hello";\n\n// Use this if you have spaces in your variable name\nNoodl.Variables["My Variable"] = 10;\n\nNoodl.Variables.userName = "Mickeeeey";\n\n// Reading variables\nconsole.log(Noodl.Variables.userName);\n')))}d.isMDXComponent=!0},41754:function(e,r,n){r.Z=n.p+"assets/images/variables-d4844548e5f2515876b353198a407dc4.png"}}]);