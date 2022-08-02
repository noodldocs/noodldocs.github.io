"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[8965],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(f,o(o({ref:t},s),{},{components:a})):n.createElement(f,o({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},44589:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),o=["components"],i={hide_title:!0,hide_table_of_contents:!0,title:"Upload File"},d=void 0,p={unversionedId:"data/cloud-data/upload-file",id:"data/cloud-data/upload-file",title:"Upload File",description:"This node uploads a file to the Noodl Cloud Services. Can be used in combination with a Record to link the file to a property. When retrieving the file reference you can get the URL to the file and Name of file using a Cloud File node.",source:"@site/nodes/data/cloud-data/upload-file.md",sourceDirName:"data/cloud-data",slug:"/data/cloud-data/upload-file",permalink:"/2.6/nodes/data/cloud-data/upload-file",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Upload File"},sidebar:"nodeSidebar",previous:{title:"Cloud File",permalink:"/2.6/nodes/data/cloud-data/cloud-file"},next:{title:"Cloud Function",permalink:"/2.6/nodes/data/cloud-data/cloud-function"}},s={},u=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],c={toc:u};function m(e){var t=e.components,i=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h1",{id:"upload-file"},"Upload File"),(0,l.kt)("p",null,"This node uploads a file to the Noodl Cloud Services. Can be used in combination with a ",(0,l.kt)("strong",{parentName:"p"},"Record")," to link the file to a property. When retrieving the file reference you can get the ",(0,l.kt)("strong",{parentName:"p"},"URL")," to the file and ",(0,l.kt)("strong",{parentName:"p"},"Name")," of file using a ",(0,l.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/cloud-file"},"Cloud File")," node."),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:a(2440).Z,width:"1166",height:"252"}))),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"File")),(0,l.kt)("td",{parentName:"tr",align:null},"An HTML5 ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/File"},"File"),". The ",(0,l.kt)("a",{parentName:"td",href:"/nodes/utilities/open-file-picker"},"File Picker")," can be used to open a file dialog picker and generate the ",(0,l.kt)("strong",{parentName:"td"},"File")," from a local file. It's also possible to retrieve the File from external sources, or generate it by code. ")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Upload")),(0,l.kt)("td",{parentName:"tr",align:null},"Triggers the upload to start.")))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Cloud File")),(0,l.kt)("td",{parentName:"tr",align:null},"A ",(0,l.kt)("a",{parentName:"td",href:"/nodes/data/cloud-data/cloud-file"},"Cloud File"),", which consists of an URL and a file name. Can be connected to a property of a ",(0,l.kt)("a",{parentName:"td",href:"/nodes/data/cloud-data/record"},"Record")," if the property type is specified as 'File'.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Total Bytes")),(0,l.kt)("td",{parentName:"tr",align:null},"The total size of the file in bytes that is being uploaded.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Uploaded Bytes")),(0,l.kt)("td",{parentName:"tr",align:null},"Contains the number of bytes have been uploaded so far. Starts at 0, and moves towards ",(0,l.kt)("strong",{parentName:"td"},"Total Bytes")," after the ",(0,l.kt)("strong",{parentName:"td"},"Upload")," input signal has been triggered. The value is updated each time the ",(0,l.kt)("strong",{parentName:"td"},"Progress Changed")," event is sent.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Uploaded Percent")),(0,l.kt)("td",{parentName:"tr",align:null},"The current percentage of the file that have been uploaded. Starts at 0, and moves towards 100 after the ",(0,l.kt)("strong",{parentName:"td"},"Upload")," input signal has been triggered. The value is updated each time the ",(0,l.kt)("strong",{parentName:"td"},"Progress Changed")," event is sent.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Error")),(0,l.kt)("td",{parentName:"tr",align:null},"The error message as a string, if the upload fails.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Error Status Code")),(0,l.kt)("td",{parentName:"tr",align:null},"An ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"},"HTTP error code"),". For example, ",(0,l.kt)("inlineCode",{parentName:"td"},"413")," if the file is too large.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Progress Changed")),(0,l.kt)("td",{parentName:"tr",align:null},"This event is used to track the upload progress. It is triggered multiple times during an upload when ",(0,l.kt)("strong",{parentName:"td"},"Uploaded Bytes")," and ",(0,l.kt)("strong",{parentName:"td"},"Uploaded Percent")," are updated.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Success")),(0,l.kt)("td",{parentName:"tr",align:null},"This event triggers when the file was uploaded successfully.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Failure")),(0,l.kt)("td",{parentName:"tr",align:null},"This event triggers if there was en error uploading the file.")))))}m.isMDXComponent=!0},2440:function(e,t,a){t.Z=a.p+"assets/images/upload-file-1c6dd36ccb66907d7363513783c934cf.png"}}]);