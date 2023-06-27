"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[2518],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(g,o(o({ref:e},p),{},{components:n})):r.createElement(g,o({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16773:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=["components"],i={hide_title:!0,hide_table_of_contents:!0,title:"Boolean To String"},s=void 0,u={unversionedId:"utilities/boolean-to-string",id:"utilities/boolean-to-string",title:"Boolean To String",description:"This node takes a boolean input and converts it into the strings true or false.",source:"@site/nodes/utilities/boolean-to-string.md",sourceDirName:"utilities",slug:"/utilities/boolean-to-string",permalink:"/2.8/nodes/utilities/boolean-to-string",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Boolean To String"},sidebar:"nodeSidebar",previous:{title:"Animate To Value",permalink:"/2.8/nodes/logic/animate-to-value"},next:{title:"Switch",permalink:"/2.8/nodes/logic/switch"}},p={},c=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],d={toc:c};function m(t){var e=t.components,i=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h1",{id:"boolean-to-string"},"Boolean To String"),(0,l.kt)("p",null,"This node takes a ",(0,l.kt)("span",{className:"ndl-data"},"boolean")," input and converts it into the strings ",(0,l.kt)("span",{className:"ndl-data"},"true")," or ",(0,l.kt)("span",{className:"ndl-data"},"false"),"."),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(22726).Z,width:"834",height:"400"}))),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Selector")),(0,l.kt)("td",{parentName:"tr",align:null},"This is the boolean value that will select which string to output.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"String for true")),(0,l.kt)("td",{parentName:"tr",align:null},"The string to output if the selector is true.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"String for false")),(0,l.kt)("td",{parentName:"tr",align:null},"The string to output if the selecor is false.")))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Current Value")),(0,l.kt)("td",{parentName:"tr",align:null},"The selected string, i.e. either ",(0,l.kt)("strong",{parentName:"td"},"String for true")," or ",(0,l.kt)("strong",{parentName:"td"},"String for false")," depending on the ",(0,l.kt)("strong",{parentName:"td"},"Selector"),".")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Selector Changed")),(0,l.kt)("td",{parentName:"tr",align:null},"This signal is sent when the ",(0,l.kt)("strong",{parentName:"td"},"Selector")," changes value.")))))}m.isMDXComponent=!0},22726:function(t,e,n){e.Z=n.p+"assets/images/boolean-to-string-20e09274dc55fae706c8cb9e8c074d7b.png"}}]);