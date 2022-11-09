"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[778],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=s(a),h=r,m=u["".concat(d,".").concat(h)]||u[h]||c[h]||o;return a?n.createElement(m,l(l({ref:e},p),{},{components:a})):n.createElement(m,l({ref:e},p))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},74886:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),l=["components"],i={hide_title:!0,hide_table_of_contents:!0,title:"Record"},d=void 0,s={unversionedId:"data/cloud-data/record",id:"data/cloud-data/record",title:"Record",description:"This node is used to read data from a Record. A Record is an Object with a Class, with predefined properties of specific types and that can be stored in the Noodl backend.",source:"@site/nodes/data/cloud-data/record.md",sourceDirName:"data/cloud-data",slug:"/data/cloud-data/record",permalink:"/2.8/nodes/data/cloud-data/record",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Record"},sidebar:"nodeSidebar",previous:{title:"Static Array",permalink:"/2.8/nodes/data/array/static-array"},next:{title:"Create New Record",permalink:"/2.8/nodes/data/cloud-data/create-new-record"}},p={},c=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],u={toc:c};function h(t){var e=t.components,i=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h1",{id:"record"},"Record"),(0,o.kt)("p",null,"This node is used to read data from a ",(0,o.kt)("strong",{parentName:"p"},"Record"),". A ",(0,o.kt)("strong",{parentName:"p"},"Record")," is an ",(0,o.kt)("strong",{parentName:"p"},"Object")," with a ",(0,o.kt)("strong",{parentName:"p"},"Class"),", with predefined properties of specific types and that can be stored in the Noodl backend."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(44244).Z,width:"1011",height:"360"}))),(0,o.kt)("p",null,"You have to choose the class for the ",(0,o.kt)("strong",{parentName:"p"},"Record")," node in the property panel and you must make sure that the node has the Id of the record it should access (there are multiple ways to do this, see full docs for details)."),(0,o.kt)("p",null,"Then you can access the properties of the specific ",(0,o.kt)("strong",{parentName:"p"},"Record")," through the property outputs.\n"),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Class")),(0,o.kt)("td",{parentName:"tr",align:null},"Select the ",(0,o.kt)("strong",{parentName:"td"},"Class")," for this Records that this node will get data from. Choosing the ",(0,o.kt)("strong",{parentName:"td"},"Class")," will make the node get all properties of the class as outputs.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Id")),(0,o.kt)("td",{parentName:"tr",align:null},"The Id of the ",(0,o.kt)("strong",{parentName:"td"},"Record")," that this node should read data from.")))),(0,o.kt)("p",null,"An Id of a record is needed to perform the action of this node:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Id Source")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("strong",{parentName:"td"},"Id Soure")," property specifies how this Id is retrieved, the options are:",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"Specify explicitly"),": This means you need to specify the Id of the record explicitly through e.g. a connection to the ",(0,o.kt)("strong",{parentName:"td"},"Id")," input.",(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"From repeater"),": This means that the Id for the record will be derived from a repeater. This option is only valid if the component this node is placed in is created by a repeater. Then this node will act on the repeater object that this component was created for.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Fetch")),(0,o.kt)("td",{parentName:"tr",align:null},"Send a signal on this input to fetch the data for this ",(0,o.kt)("strong",{parentName:"td"},"Record")," from the backend. All ",(0,o.kt)("strong",{parentName:"td"},"Record")," nodes that share the ",(0,o.kt)("strong",{parentName:"td"},"Id")," with this node (i.e. are reading data from the same record) will be updated.")))),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Id")),(0,o.kt)("td",{parentName:"tr",align:null},"The Id of the ",(0,o.kt)("strong",{parentName:"td"},"Record")," this node is accessing the properties for.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Error")),(0,o.kt)("td",{parentName:"tr",align:null},"This will contain the error message if a fetch action failed and the ",(0,o.kt)("strong",{parentName:"td"},"Failure")," signal was emitted.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Class Properties")),(0,o.kt)("td",{parentName:"tr",align:null},"<##output:prop-","*","##>The value of this property in the record that the node reads from. This node will have an output for each property in the ",(0,o.kt)("strong",{parentName:"td"},"Class")," that have been selected on the node.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Fetched")),(0,o.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output when a ",(0,o.kt)("strong",{parentName:"td"},"Fetch")," has been completed successfully. This is as a result of triggering a fetch by sending a signal to the ",(0,o.kt)("strong",{parentName:"td"},"Fetch")," input.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Failure")),(0,o.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output if a fetch action has failed. This is a potential result of triggering a fetch by sending a signal to the ",(0,o.kt)("strong",{parentName:"td"},"Fetch")," input.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Changed")),(0,o.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output if the record that this node is reading data from has changed locally.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Property Changed Signal")),(0,o.kt)("td",{parentName:"tr",align:null},"<##output:changed-","*","##>A signal is sent here if the value of the property on the record this node is reading data from has changed locally.")))))}h.isMDXComponent=!0},44244:function(t,e,a){e.Z=a.p+"assets/images/record-node-e425d08c88d93e4467c695e5729f3e1b.png"}}]);