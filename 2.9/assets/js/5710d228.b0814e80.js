"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[5734],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,g=u["".concat(i,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(g,o(o({ref:t},s),{},{components:a})):n.createElement(g,o({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[u]="string"==typeof e?e:r,o[1]=d;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88467:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={hide_title:!0,hide_table_of_contents:!0,title:"Upload File node"},o=void 0,d={unversionedId:"data/cloud-data/upload-file/README",id:"data/cloud-data/upload-file/README",title:"Upload File node",description:"This node uploads a file to the Noodl Cloud Services. Can be used in combination with a Record to link the file to a property. When retrieving the file reference you can get the URL to the file and Name of file using a Cloud File node.",source:"@site/nodes/data/cloud-data/upload-file/README.md",sourceDirName:"data/cloud-data/upload-file",slug:"/data/cloud-data/upload-file/",permalink:"/2.9/nodes/data/cloud-data/upload-file/",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Upload File node"},sidebar:"nodeSidebar",previous:{title:"Cloud File node",permalink:"/2.9/nodes/data/cloud-data/cloud-file/"},next:{title:"Cloud Function node",permalink:"/2.9/nodes/data/cloud-data/cloud-function/"}},i={},p=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],s={toc:p},u="wrapper";function c(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"upload-file"},"Upload File"),(0,r.kt)("p",null,"This node uploads a file to the Noodl Cloud Services. Can be used in combination with a ",(0,r.kt)("strong",{parentName:"p"},"Record")," to link the file to a property. When retrieving the file reference you can get the ",(0,r.kt)("strong",{parentName:"p"},"URL")," to the file and ",(0,r.kt)("strong",{parentName:"p"},"Name")," of file using a ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/cloud-file"},"Cloud File")," node."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2440).Z,width:"1166",height:"252"}))),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"File")),(0,r.kt)("td",{parentName:"tr",align:null},"An HTML5 ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/File"},"File"),". The ",(0,r.kt)("a",{parentName:"td",href:"/nodes/utilities/open-file-picker"},"File Picker")," can be used to open a file dialog picker and generate the ",(0,r.kt)("strong",{parentName:"td"},"File")," from a local file. It's also possible to retrieve the File from external sources, or generate it by code. ")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Upload")),(0,r.kt)("td",{parentName:"tr",align:null},"Triggers the upload to start.")))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Cloud File")),(0,r.kt)("td",{parentName:"tr",align:null},"A ",(0,r.kt)("a",{parentName:"td",href:"/nodes/data/cloud-data/cloud-file"},"Cloud File"),", which consists of an URL and a file name. Can be connected to a property of a ",(0,r.kt)("a",{parentName:"td",href:"/nodes/data/cloud-data/record"},"Record")," if the property type is specified as 'File'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Total Bytes")),(0,r.kt)("td",{parentName:"tr",align:null},"The total size of the file in bytes that is being uploaded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Uploaded Bytes")),(0,r.kt)("td",{parentName:"tr",align:null},"Contains the number of bytes have been uploaded so far. Starts at 0, and moves towards ",(0,r.kt)("strong",{parentName:"td"},"Total Bytes")," after the ",(0,r.kt)("strong",{parentName:"td"},"Upload")," input signal has been triggered. The value is updated each time the ",(0,r.kt)("strong",{parentName:"td"},"Progress Changed")," event is sent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Uploaded Percent")),(0,r.kt)("td",{parentName:"tr",align:null},"The current percentage of the file that have been uploaded. Starts at 0, and moves towards 100 after the ",(0,r.kt)("strong",{parentName:"td"},"Upload")," input signal has been triggered. The value is updated each time the ",(0,r.kt)("strong",{parentName:"td"},"Progress Changed")," event is sent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Error")),(0,r.kt)("td",{parentName:"tr",align:null},"The error message as a string, if the upload fails.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Error Status Code")),(0,r.kt)("td",{parentName:"tr",align:null},"An ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"},"HTTP error code"),". For example, ",(0,r.kt)("inlineCode",{parentName:"td"},"413")," if the file is too large.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Progress Changed")),(0,r.kt)("td",{parentName:"tr",align:null},"This event is used to track the upload progress. It is triggered multiple times during an upload when ",(0,r.kt)("strong",{parentName:"td"},"Uploaded Bytes")," and ",(0,r.kt)("strong",{parentName:"td"},"Uploaded Percent")," are updated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Success")),(0,r.kt)("td",{parentName:"tr",align:null},"This event triggers when the file was uploaded successfully.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Failure")),(0,r.kt)("td",{parentName:"tr",align:null},"This event triggers if there was en error uploading the file.")))))}c.isMDXComponent=!0},2440:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upload-file-1c6dd36ccb66907d7363513783c934cf.png"}}]);