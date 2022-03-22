"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[4635],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7115:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={},p=void 0,s={unversionedId:"utilities/open-file-picker",id:"utilities/open-file-picker",title:"open-file-picker",description:"This node opens a file picker dialog. Noodl uses the system file picker dialog, meaning it works seamlessly with the users native device experience.",source:"@site/nodes/utilities/open-file-picker.md",sourceDirName:"utilities",slug:"/utilities/open-file-picker",permalink:"/2.5/nodes/utilities/open-file-picker",tags:[],version:"current",frontMatter:{},sidebar:"nodesSidebar",previous:{title:"unique-id",permalink:"/2.5/nodes/utilities/unique-id"},next:{title:"screen-resolution",permalink:"/2.5/nodes/utilities/screen-resolution"}},d=[{value:"Inputs",id:"inputs",children:[],level:2},{value:"Outputs",id:"outputs",children:[{value:"Metadata",id:"metadata",children:[],level:3}],level:2}],u={toc:d};function c(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,""),(0,l.kt)("h1",{id:"open-file-picker"},"Open File Picker"),(0,l.kt)("p",null,"This node opens a file picker dialog. Noodl uses the system file picker dialog, meaning it works seamlessly with the users native device experience."),(0,l.kt)("div",{class:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(5372).Z,width:"896",height:"326"}))),(0,l.kt)("p",null,"You can define what file types are allowed to be uploaded. This is done by entering a ",(0,l.kt)("span",{class:"ndl-data"},"string")," of file types: each item needs to start with a period (",(0,l.kt)("inlineCode",{parentName:"p"},"."),") and be separated by a comma (",(0,l.kt)("inlineCode",{parentName:"p"},","),"). Leave the list blank if you want to accept any file type."),(0,l.kt)("p",null,""),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-signal"},"Open")),(0,l.kt)("td",{parentName:"tr",align:null},"Send a signal to this input to open the file picker.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Accepted file types")),(0,l.kt)("td",{parentName:"tr",align:null},"A comma separated list of file types that the user can select. Leave blank to accept any file type.",(0,l.kt)("br",null),(0,l.kt)("br",null),"The file type can be specified as a filename extension, starting with a period. E.g. ",(0,l.kt)("inlineCode",{parentName:"td"},".png"),", ",(0,l.kt)("inlineCode",{parentName:"td"},".json")," or ",(0,l.kt)("inlineCode",{parentName:"td"},".png, .jpg"),".",(0,l.kt)("br",null),(0,l.kt)("br",null),"The type can also be specified as a ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types"},"MIME type"),". E.g. ",(0,l.kt)("inlineCode",{parentName:"td"},"image/*"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"image/png")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"video/mp4"),".")))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"File")),(0,l.kt)("td",{parentName:"tr",align:null},"A web file API Object. A ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/File"},"File")," object. This can be used uploaded via ",(0,l.kt)("a",{parentName:"td",href:"/nodes/data/cloud-data/upload-file"},"Upload File"),", sent as a part of a ",(0,l.kt)("a",{parentName:"td",href:"/nodes/data/rest"},"REST")," call, processed in a ",(0,l.kt)("a",{parentName:"td",href:"/nodes/javascript/function"},"Function")," node, used together with modules, or other tasks.")))),(0,l.kt)("h3",{id:"metadata"},"Metadata"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Path")),(0,l.kt)("td",{parentName:"tr",align:null},"The local path to the file.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Name")),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the file, without the path.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Size in bytes")),(0,l.kt)("td",{parentName:"tr",align:null},"Total size of the file in bytes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},"The file type")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-signal"},"Success")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggered when the user has selected a file")))))}c.isMDXComponent=!0},5372:function(e,t,n){t.Z=n.p+"assets/images/open-file-picker-ea755afe8a6f46b6d9845e5f8692dfd4.png"}}]);