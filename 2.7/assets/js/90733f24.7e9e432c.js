"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[39],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(g,o(o({ref:e},p),{},{components:n})):r.createElement(g,o({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58382:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={hide_title:!0,hide_table_of_contents:!0,title:"Substring"},s=void 0,u={unversionedId:"string-manipulation/substring",id:"string-manipulation/substring",title:"Substring",description:"This node lets you extract a part of a string given a start and end character position.",source:"@site/nodes/string-manipulation/substring.md",sourceDirName:"string-manipulation",slug:"/string-manipulation/substring",permalink:"/2.6/nodes/string-manipulation/substring",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Substring"},sidebar:"nodeSidebar",previous:{title:"Receive Event",permalink:"/2.6/nodes/events/receive-event"},next:{title:"String Mapper",permalink:"/2.6/nodes/string-manipulation/string-mapper"}},p={},c=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],d={toc:c};function m(t){var e=t.components,l=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"is-hidden"},""),(0,i.kt)("h1",{id:"substring"},"Substring"),(0,i.kt)("p",null,"This node lets you extract a part of a ",(0,i.kt)("span",{className:"ndl-data"},"string")," given a start and end character position."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(86596).Z,width:"1011",height:"360"}))),(0,i.kt)("p",{className:"is-hidden"},""),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"The source string where the substring should be extracted from.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Start")),(0,i.kt)("td",{parentName:"tr",align:null},"The character index of the start of the substring.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"End")),(0,i.kt)("td",{parentName:"tr",align:null},"The character index of the end of the substring.")))),(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Result")),(0,i.kt)("td",{parentName:"tr",align:null},"The extracted substring.")))))}m.isMDXComponent=!0},86596:function(t,e,n){e.Z=n.p+"assets/images/substring_node-d0891bf91bd86132b33629531bc7d82a.png"}}]);