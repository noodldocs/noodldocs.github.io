"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[2193],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),p=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,s=d(t,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(i,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(h,o(o({ref:e},s),{},{components:n})):a.createElement(h,o({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var d={};for(var i in e)hasOwnProperty.call(e,i)&&(d[i]=e[i]);d.originalType=t,d.mdxType="string"==typeof t?t:r,o[1]=d;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43605:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return c}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),o=["components"],d={hide_title:!0,hide_table_of_contents:!0,title:"Delete Record"},i=void 0,p={unversionedId:"data/cloud-data/delete-record",id:"data/cloud-data/delete-record",title:"Delete Record",description:"This node will delete a Record of a given Class from the Noodl Cloud Services backend.",source:"@site/nodes/data/cloud-data/delete-record.md",sourceDirName:"data/cloud-data",slug:"/data/cloud-data/delete-record",permalink:"/2.9/nodes/data/cloud-data/delete-record",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Delete Record"},sidebar:"nodeSidebar",previous:{title:"Query Records",permalink:"/2.9/nodes/data/cloud-data/query-records"},next:{title:"Add Record Relation",permalink:"/2.9/nodes/data/cloud-data/add-record-relation"}},s={},c=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],u={toc:c};function m(t){var e=t.components,d=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,d,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h1",{id:"delete-record"},"Delete Record"),(0,l.kt)("p",null,"This node will delete a ",(0,l.kt)("strong",{parentName:"p"},"Record")," of a given ",(0,l.kt)("strong",{parentName:"p"},"Class")," from the Noodl Cloud Services backend."),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(97996).Z,width:"1011",height:"360"}))),(0,l.kt)("p",null,"You will need to provide the ",(0,l.kt)("strong",{parentName:"p"},"Id")," of the record to be deleted, there are multiple ways to do this, see the ",(0,l.kt)("strong",{parentName:"p"},"Id Source")," property for details."),(0,l.kt)("p",null,"Then send a signal on the ",(0,l.kt)("strong",{parentName:"p"},"Do")," input to perform the action."),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Class")),(0,l.kt)("td",{parentName:"tr",align:null},"You need to select the ",(0,l.kt)("strong",{parentName:"td"},"Class")," of records that this node will act on.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Id")),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the ",(0,l.kt)("strong",{parentName:"td"},"Id")," of the record that you want to delete. This input is only valid if ",(0,l.kt)("strong",{parentName:"td"},"Id Source")," is set to ",(0,l.kt)("strong",{parentName:"td"},"Specify explicitly"),".")))),(0,l.kt)("p",null,"An Id of a record is needed to perform the action of this node:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Id Source")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("strong",{parentName:"td"},"Id Soure")," property specifies how this Id is retrieved, the options are:",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"Specify explicitly"),": This means you need to specify the Id of the record explicitly through e.g. a connection to the ",(0,l.kt)("strong",{parentName:"td"},"Id")," input.",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"From repeater"),": This means that the Id for the record will be derived from a repeater. This option is only valid if the component this node is placed in is created by a repeater. Then this node will act on the repeater object that this component was created for.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Do")),(0,l.kt)("td",{parentName:"tr",align:null},"When a signal is received on this input the record will be deleted on the backend.")))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("strong",{parentName:"td"},"Id")," of the record that will be / was deleted by this node. Simply reflecting the ",(0,l.kt)("strong",{parentName:"td"},"Id")," input.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Error")),(0,l.kt)("td",{parentName:"tr",align:null},"If something went wrong when deleting the record in the backend, this output will contain the error message.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Success")),(0,l.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output when the record have been successfully deleted in the backend.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Failure")),(0,l.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output if something went wrong when attempting to delete the record in the backend.")))))}m.isMDXComponent=!0},97996:function(t,e,n){e.Z=n.p+"assets/images/delete-record-node-691b234c13538913c8930cfb0ad44304.png"}}]);