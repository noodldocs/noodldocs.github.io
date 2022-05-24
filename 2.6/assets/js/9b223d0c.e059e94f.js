"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[653],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),s=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(i,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,l(l({ref:e},p),{},{components:n})):a.createElement(h,l({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=u;var d={};for(var i in e)hasOwnProperty.call(e,i)&&(d[i]=e[i]);d.originalType=t,d.mdxType="string"==typeof t?t:r,l[1]=d;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21197:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return c}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),l=["components"],d={hide_title:!0,hide_table_of_contents:!0,title:"Add Record Relation"},i=void 0,s={unversionedId:"data/cloud-data/add-record-relation",id:"data/cloud-data/add-record-relation",title:"Add Record Relation",description:"This action node is used to create a relation between two records, the owning record and the target record.",source:"@site/nodes/data/cloud-data/add-record-relation.md",sourceDirName:"data/cloud-data",slug:"/data/cloud-data/add-record-relation",permalink:"/2.6/nodes/data/cloud-data/add-record-relation",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Add Record Relation"},sidebar:"nodeSidebar",previous:{title:"Delete Record",permalink:"/2.6/nodes/data/cloud-data/delete-record"},next:{title:"Remove Record Relation",permalink:"/2.6/nodes/data/cloud-data/remove-record-relation"}},p={},c=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],u={toc:c};function m(t){var e=t.components,d=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,d,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h1",{id:"add-record-relation"},"Add Record Relation"),(0,o.kt)("p",null,"This action node is used to create a relation between two records, the owning record and the target record."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(11695).Z,width:"1362",height:"656"}))),(0,o.kt)("p",null,"One record is the owning record (in this case ",(0,o.kt)("strong",{parentName:"p"},"Group")," records that can have a relation to many ",(0,o.kt)("strong",{parentName:"p"},"Post")," records), it should have a ",(0,o.kt)("strong",{parentName:"p"},"Relation")," type property."),(0,o.kt)("p",null,"You need to provide the ",(0,o.kt)("span",{className:"ndl-data"},"Id")," of the owning record. You also need to provide the ",(0,o.kt)("span",{className:"ndl-data"},"Id")," of the record that you want to add a relation to, this is the Target Record Id input."),(0,o.kt)("p",null,"Finally, send a ",(0,o.kt)("span",{className:"ndl-signal"},"signal")," to ",(0,o.kt)("span",{className:"ndl-signal"},"Do")," to perform the action."),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Class")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("strong",{parentName:"td"},"Class")," of the owning record where you want to add the related object to.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Id")),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the ",(0,o.kt)("strong",{parentName:"td"},"Id")," of the record that you want to use as the owning record to add a relation to. This input is only valid if ",(0,o.kt)("strong",{parentName:"td"},"Id Source")," is set to ",(0,o.kt)("strong",{parentName:"td"},"Specify explicitly"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Relation")),(0,o.kt)("td",{parentName:"tr",align:null},"You need to choose the ",(0,o.kt)("strong",{parentName:"td"},"Relation")," property of the owning class to use when creating the relation.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Target Record Id")),(0,o.kt)("td",{parentName:"tr",align:null},"This input should be connected to the ",(0,o.kt)("strong",{parentName:"td"},"Id")," of the target record of the new relation.")))),(0,o.kt)("p",null,"An Id of a record is needed to perform the action of this node:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Id Source")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("strong",{parentName:"td"},"Id Soure")," property specifies how this Id is retrieved, the options are:",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"Specify explicitly"),": This means you need to specify the Id of the record explicitly through e.g. a connection to the ",(0,o.kt)("strong",{parentName:"td"},"Id")," input.",(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"From repeater"),": This means that the Id for the record will be derived from a repeater. This option is only valid if the component this node is placed in is created by a repeater. Then this node will act on the repeater object that this component was created for.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Do")),(0,o.kt)("td",{parentName:"tr",align:null},"When a signal is received on this input the relation will be created in the backend.")))),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Id")),(0,o.kt)("td",{parentName:"tr",align:null},"This is the ",(0,o.kt)("strong",{parentName:"td"},"Id")," of the owning record that have / will receive the new relation. It is simply a mirror of the ",(0,o.kt)("strong",{parentName:"td"},"Id")," input.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Error")),(0,o.kt)("td",{parentName:"tr",align:null},"The error message in case something went wrong when attempting to add the relation in the backend.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Success")),(0,o.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output when the relation has been added successfully in the backend.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Failure")),(0,o.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output if something went wrong when adding the relation in the backend. The error message will be outputed on the ",(0,o.kt)("strong",{parentName:"td"},"Error")," output.")))))}m.isMDXComponent=!0},11695:function(t,e,n){e.Z=n.p+"assets/images/add-relation-10fa5367f51085ba701cc79b8e62adf4.png"}}]);