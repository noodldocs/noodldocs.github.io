"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[8036],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},27569:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={hide_title:!0,hide_table_of_contents:!0,title:"Open File Picker node"},i=void 0,p={unversionedId:"utilities/open-file-picker/README",id:"utilities/open-file-picker/README",title:"Open File Picker node",description:"This node opens a file picker dialog. Noodl uses the system file picker dialog, meaning it works seamlessly with the users native device experience.",source:"@site/nodes/utilities/open-file-picker/README.md",sourceDirName:"utilities/open-file-picker",slug:"/utilities/open-file-picker/",permalink:"/2.9/nodes/utilities/open-file-picker/",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Open File Picker node"},sidebar:"nodeSidebar",previous:{title:"Unique Id node",permalink:"/2.9/nodes/utilities/unique-id/"},next:{title:"Screen Resolution node",permalink:"/2.9/nodes/utilities/screen-resolution/"}},o={},s=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Metadata",id:"metadata",level:3}],d={toc:s},c="wrapper";function u(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"open-file-picker"},"Open File Picker"),(0,r.kt)("p",null,"This node opens a file picker dialog. Noodl uses the system file picker dialog, meaning it works seamlessly with the users native device experience."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3663).Z,width:"896",height:"326"}))),(0,r.kt)("p",null,"You can define what file types are allowed to be uploaded. This is done by entering a ",(0,r.kt)("span",{className:"ndl-data"},"string")," of file types: each item needs to start with a period (",(0,r.kt)("inlineCode",{parentName:"p"},"."),") and be separated by a comma (",(0,r.kt)("inlineCode",{parentName:"p"},","),"). Leave the list blank if you want to accept any file type."),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Open")),(0,r.kt)("td",{parentName:"tr",align:null},"Send a signal to this input to open the file picker.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Accepted file types")),(0,r.kt)("td",{parentName:"tr",align:null},"A comma separated list of file types that the user can select. Leave blank to accept any file type.",(0,r.kt)("br",null),(0,r.kt)("br",null),"The file type can be specified as a filename extension, starting with a period. E.g. ",(0,r.kt)("inlineCode",{parentName:"td"},".png"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".json")," or ",(0,r.kt)("inlineCode",{parentName:"td"},".png, .jpg"),".",(0,r.kt)("br",null),(0,r.kt)("br",null),"The type can also be specified as a ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types"},"MIME type"),". E.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"image/*"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"image/png")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"video/mp4"),".")))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"File")),(0,r.kt)("td",{parentName:"tr",align:null},"A web file API Object. A ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/File"},"File")," object. This can be used uploaded via ",(0,r.kt)("a",{parentName:"td",href:"/nodes/data/cloud-data/upload-file"},"Upload File"),", sent as a part of a ",(0,r.kt)("a",{parentName:"td",href:"/nodes/data/rest"},"REST")," call, processed in a ",(0,r.kt)("a",{parentName:"td",href:"/nodes/javascript/function"},"Function")," node, used together with modules, or other tasks.")))),(0,r.kt)("h3",{id:"metadata"},"Metadata"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Path")),(0,r.kt)("td",{parentName:"tr",align:null},"The local path to the file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Name")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the file, without the path.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Size in bytes")),(0,r.kt)("td",{parentName:"tr",align:null},"Total size of the file in bytes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},"The file type")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Success")),(0,r.kt)("td",{parentName:"tr",align:null},"Triggered when the user has selected a file")))))}u.isMDXComponent=!0},3663:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/open-file-picker-ea755afe8a6f46b6d9845e5f8692dfd4.png"}}]);