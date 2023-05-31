"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[53],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(a),m=r,f=s["".concat(d,".").concat(m)]||s[m]||u[m]||l;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},15689:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={hide_title:!0,hide_table_of_contents:!0,title:"Cloud File"},o=void 0,i={unversionedId:"data/cloud-data/cloud-file",id:"data/cloud-data/cloud-file",title:"Cloud File",description:"Represents a file that has been uploaded to the Noodl Cloud Services and stored as a file property in a Record.",source:"@site/nodes/data/cloud-data/cloud-file.md",sourceDirName:"data/cloud-data",slug:"/data/cloud-data/cloud-file",permalink:"/2.8/nodes/data/cloud-data/cloud-file",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Cloud File"},sidebar:"nodeSidebar",previous:{title:"Remove Record Relation",permalink:"/2.8/nodes/data/cloud-data/remove-record-relation"},next:{title:"Upload File",permalink:"/2.8/nodes/data/cloud-data/upload-file"}},d={},p=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],c={toc:p},s="wrapper";function u(e){let{components:t,...l}=e;return(0,r.kt)(s,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"cloud-file"},"Cloud File"),(0,r.kt)("p",null,"Represents a file that has been uploaded to the Noodl Cloud Services and stored as a file property in a ",(0,r.kt)("strong",{parentName:"p"},"Record"),"."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3246).Z,width:"1474",height:"540"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cloud File")," is typically used in combination with the ",(0,r.kt)("a",{parentName:"p",href:"/nodes/utilities/open-file-picker"},"Open File Picker")," and the ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/upload-file"},"Upload File")," to upload a file and store a reference to it in the database. Then ",(0,r.kt)("strong",{parentName:"p"},"Cloud File")," is used to retrieve the reference and get the URL or Name of the file."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2440).Z,width:"1166",height:"252"}))),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Cloud File")),(0,r.kt)("td",{parentName:"tr",align:null},"A file that has been stored in the Noodl Cloud Services. Often used in combination with a ",(0,r.kt)("strong",{parentName:"td"},"Record")," to retrieve the ",(0,r.kt)("strong",{parentName:"td"},"Name")," and ",(0,r.kt)("strong",{parentName:"td"},"URL")," of a file.")))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"URL")),(0,r.kt)("td",{parentName:"tr",align:null},"The URL of the file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Name")),(0,r.kt)("td",{parentName:"tr",align:null},"The Name of the file.")))))}u.isMDXComponent=!0},3246:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloud-file-fab3481dae104f8d82aa9b9b0b13a622.png"},2440:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upload-file-1c6dd36ccb66907d7363513783c934cf.png"}}]);