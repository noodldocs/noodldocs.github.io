"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[8181],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),s=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,l(l({ref:e},p),{},{components:n})):a.createElement(h,l({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65049:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={},d=void 0,s={unversionedId:"data/cloud-data/remove-record-relation",id:"data/cloud-data/remove-record-relation",title:"remove-record-relation",description:"This node is used to remove a relation between two records, the owning record and the target record.",source:"@site/nodes/data/cloud-data/remove-record-relation.md",sourceDirName:"data/cloud-data",slug:"/data/cloud-data/remove-record-relation",permalink:"/2.6/nodes/data/cloud-data/remove-record-relation",tags:[],version:"current",frontMatter:{},sidebar:"nodesSidebar",previous:{title:"add-record-relation",permalink:"/2.6/nodes/data/cloud-data/add-record-relation"},next:{title:"cloud-file",permalink:"/2.6/nodes/data/cloud-data/cloud-file"}},p=[{value:"Inputs",id:"inputs",children:[],level:2},{value:"Outputs",id:"outputs",children:[],level:2}],c={toc:p};function u(t){var e=t.components,i=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,""),(0,o.kt)("h1",{id:"remove-record-relation"},"Remove Record Relation"),(0,o.kt)("p",null,"This node is used to remove a relation between two records, the owning record and the target record."),(0,o.kt)("div",{class:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(49012).Z,width:"1118",height:"502"}))),(0,o.kt)("p",null,"One record is the owning record (in this case ",(0,o.kt)("strong",{parentName:"p"},"Group")," records that can have a relation to many ",(0,o.kt)("strong",{parentName:"p"},"Post")," records), it should have a ",(0,o.kt)("strong",{parentName:"p"},"Relation")," type property."),(0,o.kt)("p",null,"You need to provide the ",(0,o.kt)("span",{class:"ndl-data"},"Id")," of the owning record. You also need to provide the ",(0,o.kt)("span",{class:"ndl-data"},"Id")," of the record that you want to add a relation to, this is the ",(0,o.kt)("span",{class:"ndl-data"},"Target Record Id")," input."),(0,o.kt)("p",null,"Finally, send a ",(0,o.kt)("span",{class:"ndl-signal"},"signal")," to ",(0,o.kt)("span",{class:"ndl-signal"},"Do")," to perform the action."),(0,o.kt)("p",null,""),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{class:"ndl-data"},"Class")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("strong",{parentName:"td"},"Class")," of the owning record where you want to remove the relation from.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{class:"ndl-data"},"Id")),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the ",(0,o.kt)("strong",{parentName:"td"},"Id")," of the record that you want to use as the owning record to remove an existing relation from. This input is only valid if ",(0,o.kt)("strong",{parentName:"td"},"Id Source")," is set to ",(0,o.kt)("strong",{parentName:"td"},"Specify explicitly"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{class:"ndl-data"},"Relation")),(0,o.kt)("td",{parentName:"tr",align:null},"You need to choose the ",(0,o.kt)("strong",{parentName:"td"},"Relation")," property of the owning class to use when removing the relation.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{class:"ndl-data"},"Target Record Id")),(0,o.kt)("td",{parentName:"tr",align:null},"This input should be connected to the ",(0,o.kt)("strong",{parentName:"td"},"Id")," of the target record that have an existing relation to the owning record via the ",(0,o.kt)("strong",{parentName:"td"},"Relation")," property that should be removed.")))),(0,o.kt)("p",null,"An Id of a record is needed to perform the action of this node:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{parentName:"td",className:"ndl-data"}),"Id Source",(0,o.kt)("undefined",{parentName:"td"})),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("strong",{parentName:"td"},"Id Soure")," property specifies how this Id is retrieved, the options are:",(0,o.kt)("br",{parentName:"td"}),(0,o.kt)("br",{parentName:"td"}),(0,o.kt)("inlineCode",{parentName:"td"},"Specify explicitly"),": This means you need to specify the Id of the record explicitly through e.g. a connection to the ",(0,o.kt)("strong",{parentName:"td"},"Id")," input.",(0,o.kt)("br",{parentName:"td"}),(0,o.kt)("inlineCode",{parentName:"td"},"From repeater"),": This means that the Id for the record will be derived from a repeater. This option is only valid if the component this node is placed in is created by a repeater. Then this node will act on the repeater object that this component was created for.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{class:"ndl-signal"},"Do")),(0,o.kt)("td",{parentName:"tr",align:null},"When a signal is received on this input the relation will be removed in the backend, if it exists.")))),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{class:"ndl-data"},"Id")),(0,o.kt)("td",{parentName:"tr",align:null},"This is the ",(0,o.kt)("strong",{parentName:"td"},"Id")," of the owning record. It is simply a mirror of the ",(0,o.kt)("strong",{parentName:"td"},"Id")," input.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{class:"ndl-data"},"Error")),(0,o.kt)("td",{parentName:"tr",align:null},"The error message in case something went wrong when attempting to remove the relation in the backend.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{class:"ndl-signal"},"Success")),(0,o.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output when the relation has been removed successfully in the backend.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{class:"ndl-signal"},"Failure")),(0,o.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output if something went wrong when removing the relation in the backend. The error message will be outputed on the ",(0,o.kt)("strong",{parentName:"td"},"Error")," output.")))))}u.isMDXComponent=!0},49012:function(t,e,n){e.Z=n.p+"assets/images/remove-relation-fe2e8aa213466b6fab5215c2fabb45ab.png"}}]);