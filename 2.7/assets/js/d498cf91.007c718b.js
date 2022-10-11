"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[3270],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return c}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=p(n),c=a,g=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?r.createElement(g,o(o({ref:e},u),{},{components:n})):r.createElement(g,o({ref:e},u))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51214:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={hide_title:!0,hide_table_of_contents:!0,title:"String Format"},s=void 0,p={unversionedId:"string-manipulation/string-format",id:"string-manipulation/string-format",title:"String Format",description:"This node is used to construct a new text string from multiple other text strings.",source:"@site/nodes/string-manipulation/string-format.md",sourceDirName:"string-manipulation",slug:"/string-manipulation/string-format",permalink:"/2.7/nodes/string-manipulation/string-format",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"String Format"},sidebar:"nodeSidebar",previous:{title:"String Mapper",permalink:"/2.7/nodes/string-manipulation/string-mapper"},next:{title:"Date To String",permalink:"/2.7/nodes/utilities/date-to-string"}},u={},m=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],d={toc:m};function c(t){var e=t.components,l=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"is-hidden"},""),(0,i.kt)("h1",{id:"string-format"},"String Format"),(0,i.kt)("p",null,"This node is used to construct a new text ",(0,i.kt)("span",{className:"ndl-data"},"string")," from multiple other text ",(0,i.kt)("span",{className:"ndl-data"},"strings"),"."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(38889).Z,width:"924",height:"354"}))),(0,i.kt)("p",null,"The ",(0,i.kt)("span",{className:"ndl-node"},"String Format")," node needs a format input where the output ",(0,i.kt)("span",{className:"ndl-data"},"string")," and string variables are defined."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(88276).Z,width:"1011",height:"360"}))),(0,i.kt)("p",{className:"is-hidden"},""),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Format")),(0,i.kt)("td",{parentName:"tr",align:null},"This input contains the format string, that is the template that will be used to generated the output. Any part of the template that is encapsulated in bracets will generate an input port. E.g. setting the string format to ",(0,i.kt)("em",{parentName:"td"},"{Hours} hours ago")," will create an input port called ",(0,i.kt)("em",{parentName:"td"},"Hours"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Your ",(0,i.kt)("inlineCode",{parentName:"td"},"{strings}"))),(0,i.kt)("td",{parentName:"tr",align:null},"The input ports generated from the ",(0,i.kt)("strong",{parentName:"td"},"Format")," input.")))),(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Formatted")),(0,i.kt)("td",{parentName:"tr",align:null},"The formatted string, e.g. if the string format is ",(0,i.kt)("em",{parentName:"td"},"{Hours} hours ago")," and the ",(0,i.kt)("em",{parentName:"td"},"Hours")," input is connected to a value of ",(0,i.kt)("em",{parentName:"td"},"9")," the")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"formatted string will be ",(0,i.kt)("em",{parentName:"td"},"9 hours ago"),"."),(0,i.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0},38889:function(t,e,n){e.Z=n.p+"assets/images/stringformat-node-a5a7a3fee8b53c950997cae0a4e82cff.png"},88276:function(t,e,n){e.Z=n.p+"assets/images/stringformat-visual-59ac6c03e4727d4d01d072bf3435b67b.png"}}]);