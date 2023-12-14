"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[7876],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,l(l({ref:e},d),{},{components:n})):a.createElement(k,l({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},23847:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={hide_title:!0,hide_table_of_contents:!0,title:"Date To String node"},l=void 0,o={unversionedId:"utilities/date-to-string/README",id:"utilities/date-to-string/README",title:"Date To String node",description:"This node translates a date type input and outputs a string based on your specified format.",source:"@site/nodes/utilities/date-to-string/README.md",sourceDirName:"utilities/date-to-string",slug:"/utilities/date-to-string/",permalink:"/2.9/nodes/utilities/date-to-string/",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Date To String node"},sidebar:"nodeSidebar",previous:{title:"String Format node",permalink:"/2.9/nodes/string-manipulation/string-format/"},next:{title:"Unique Id node",permalink:"/2.9/nodes/utilities/unique-id/"}},s={},p=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],d={toc:p},u="wrapper";function m(t){let{components:e,...i}=t;return(0,r.kt)(u,(0,a.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"date-to-string"},"Date To String"),(0,r.kt)("p",null,"This node translates a ",(0,r.kt)("span",{className:"ndl-data"},"date")," type input and outputs a ",(0,r.kt)("span",{className:"ndl-data"},"string")," based on your specified format."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(38602).Z,width:"1652",height:"546"}))),(0,r.kt)("p",null,"The format is specified as a ",(0,r.kt)("span",{className:"ndl-data"},"string")," that can include the following special syntax: ",(0,r.kt)("inlineCode",{parentName:"p"},"{date}"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"{month}"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"{monthShort}"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"{year}"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"{hours}"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"{minutes}")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"{seconds}"),"."),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"{date}")," The numeric date part."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"{month}")," The numeric month 1 = January, 12 = December."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"{monthShort}")," The numeric month 1 = Jan, 12 = Dec."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"{year}")," The numeric year."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"{hours}")," The numeric hour, between 0..23"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"{minutes}")," The numeric minute, between 0..60"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"{seconds}")," The numeric second, between 0..60")),(0,r.kt)("p",null,"The default format is this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{year}-{month}-{date}\n")),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("div",{className:"ndl-table-35-65"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Format")),(0,r.kt)("td",{parentName:"tr",align:null},"This is where the format string is specified, see above for details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Date")),(0,r.kt)("td",{parentName:"tr",align:null},"The date input to format."))))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("div",{className:"ndl-table-35-65"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"*","Date String")),(0,r.kt)("td",{parentName:"tr",align:null},"The formatted date string.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Date Changed")),(0,r.kt)("td",{parentName:"tr",align:null},"Sends a signal when the formatted date string changed."))))))}m.isMDXComponent=!0},38602:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/date-to-string-bc903e00294c6c78ae64d1111fc60044.png"}}]);