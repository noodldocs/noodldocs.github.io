"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[6948],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return v}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(a),v=r,m=d["".concat(u,".").concat(v)]||d[v]||p[v]||o;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},74307:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=["components"],l={title:"Avatar Module",hide_title:!0},u="Avatar Module",c={unversionedId:"modules/avatar/README",id:"modules/avatar/README",title:"Avatar Module",description:"This module allows you to add avatars to your Noodl App.",source:"@site/library/modules/avatar/README.md",sourceDirName:"modules/avatar",slug:"/modules/avatar/",permalink:"/2.7/library/modules/avatar/",tags:[],version:"current",frontMatter:{title:"Avatar Module",hide_title:!0},sidebar:"avatarSidebar"},s={},p=[{value:"Nodes",id:"nodes",level:2},{value:"Avatar Node",id:"avatar-node",level:3},{value:"Avatar Group",id:"avatar-group",level:3},{value:"Avatar Group Item",id:"avatar-group-item",level:3},{value:"Logic Name Abbreviation",id:"logic-name-abbreviation",level:3}],d={toc:p};function v(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"avatar-module"},"Avatar Module"),(0,o.kt)("p",null,"This module allows you to add avatars to your Noodl App."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(24007).Z,width:"484",height:"121"}))),(0,o.kt)("h2",{id:"nodes"},"Nodes"),(0,o.kt)("p",null,"In this module, there are a few nodes, which include:"),(0,o.kt)("h3",{id:"avatar-node"},"Avatar Node"),(0,o.kt)("p",null,"This node is written using the SDK and gives you all the options to modify the style of the avatar."),(0,o.kt)("h3",{id:"avatar-group"},"Avatar Group"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(82121).Z,width:"429",height:"129"}))),(0,o.kt)("p",null,"This is a simple node that takes in an array of objects.\nIt makes a few modifications to the array like taking only x amount of items and then sending that into a Repeater node,\nusing the Avatar Group Item component."),(0,o.kt)("p",null,"Items input:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"[\n  {\n    Text: 'AA',\n    Image: 'avatars/avatar-n4KewLKFOZw.jpg',\n  },\n  {\n    Text: 'AA',\n    Image: 'avatars/avatar-TW_z_iUD_bQ.jpg',\n  },\n];\n")),(0,o.kt)("h3",{id:"avatar-group-item"},"Avatar Group Item"),(0,o.kt)("p",null,"A node that maps the inputs from the Avatar Group into what should be used on the Avatar node."),(0,o.kt)("h3",{id:"logic-name-abbreviation"},"[Logic]"," Name Abbreviation"),(0,o.kt)("p",null,"Converts a full name to 2 characters.\nFor example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: "John Doe"\nOutput: "JD"\n')))}v.isMDXComponent=!0},82121:function(e,t,a){t.Z=a.p+"assets/images/avatar-group-node-41ef6726ac11f9db76657a822eb6f9d8.png"},24007:function(e,t,a){t.Z=a.p+"assets/images/preview-6340a3abac7a2270d9aa58f9f6f1ec3b.png"}}]);