"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[9075],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(i,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(h,o(o({ref:t},s),{},{components:a})):n.createElement(h,o({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[c]="string"==typeof e?e:r,o[1]=d;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},94385:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={hide_title:!0,hide_table_of_contents:!0,title:"Delete Record node"},o=void 0,d={unversionedId:"data/cloud-data/delete-record/README",id:"data/cloud-data/delete-record/README",title:"Delete Record node",description:"This node will delete a Record of a given Class from the Noodl Cloud Services backend.",source:"@site/nodes/data/cloud-data/delete-record/README.md",sourceDirName:"data/cloud-data/delete-record",slug:"/data/cloud-data/delete-record/",permalink:"/2.9/nodes/data/cloud-data/delete-record/",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Delete Record node"},sidebar:"nodeSidebar",previous:{title:"Query Records node",permalink:"/2.9/nodes/data/cloud-data/query-records/"},next:{title:"Add Record Relation node",permalink:"/2.9/nodes/data/cloud-data/add-record-relation/"}},i={},p=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],s={toc:p},c="wrapper";function u(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"delete-record"},"Delete Record"),(0,r.kt)("p",null,"This node will delete a ",(0,r.kt)("strong",{parentName:"p"},"Record")," of a given ",(0,r.kt)("strong",{parentName:"p"},"Class")," from the Noodl Cloud Services backend."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(97996).Z,width:"1011",height:"360"}))),(0,r.kt)("p",null,"You will need to provide the ",(0,r.kt)("strong",{parentName:"p"},"Id")," of the record to be deleted, there are multiple ways to do this, see the ",(0,r.kt)("strong",{parentName:"p"},"Id Source")," property for details."),(0,r.kt)("p",null,"Then send a signal on the ",(0,r.kt)("strong",{parentName:"p"},"Do")," input to perform the action."),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Class")),(0,r.kt)("td",{parentName:"tr",align:null},"You need to select the ",(0,r.kt)("strong",{parentName:"td"},"Class")," of records that this node will act on.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Id")),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the ",(0,r.kt)("strong",{parentName:"td"},"Id")," of the record that you want to delete. This input is only valid if ",(0,r.kt)("strong",{parentName:"td"},"Id Source")," is set to ",(0,r.kt)("strong",{parentName:"td"},"Specify explicitly"),".")))),(0,r.kt)("p",null,"An Id of a record is needed to perform the action of this node:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Id Source")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("strong",{parentName:"td"},"Id Soure")," property specifies how this Id is retrieved, the options are:",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"Specify explicitly"),": This means you need to specify the Id of the record explicitly through e.g. a connection to the ",(0,r.kt)("strong",{parentName:"td"},"Id")," input.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"From repeater"),": This means that the Id for the record will be derived from a repeater. This option is only valid if the component this node is placed in is created by a repeater. Then this node will act on the repeater object that this component was created for.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Do")),(0,r.kt)("td",{parentName:"tr",align:null},"When a signal is received on this input the record will be deleted on the backend.")))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Id")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("strong",{parentName:"td"},"Id")," of the record that will be / was deleted by this node. Simply reflecting the ",(0,r.kt)("strong",{parentName:"td"},"Id")," input.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Error")),(0,r.kt)("td",{parentName:"tr",align:null},"If something went wrong when deleting the record in the backend, this output will contain the error message.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Success")),(0,r.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output when the record have been successfully deleted in the backend.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Failure")),(0,r.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output if something went wrong when attempting to delete the record in the backend.")))))}u.isMDXComponent=!0},97996:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/delete-record-node-691b234c13538913c8930cfb0ad44304.png"}}]);