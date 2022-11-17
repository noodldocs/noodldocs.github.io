"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[8433],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=s(a),m=r,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||l;return a?n.createElement(f,i(i({ref:e},u),{},{components:a})):n.createElement(f,i({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},12194:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],o={hide_title:!0,hide_table_of_contents:!0,title:"Filter Record"},d=void 0,s={unversionedId:"data/cloud-data/filter-records",id:"data/cloud-data/filter-records",title:"Filter Record",description:"This node is used to filter an array that is assumed to contain Records of a given class based on custom filter conditions.",source:"@site/nodes/data/cloud-data/filter-records.md",sourceDirName:"data/cloud-data",slug:"/data/cloud-data/filter-records",permalink:"/2.8/nodes/data/cloud-data/filter-records",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Filter Record"},sidebar:"nodeSidebar",previous:{title:"Create New Record",permalink:"/2.8/nodes/data/cloud-data/create-new-record"},next:{title:"Set Record Properties",permalink:"/2.8/nodes/data/cloud-data/set-record-properties"}},u={},p=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],c={toc:p};function m(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h1",{id:"filter-record"},"Filter Record"),(0,l.kt)("p",null,"This node is used to filter an ",(0,l.kt)("span",{className:"ndl-data"},"array")," that is assumed to contain Records of a given class based on custom filter conditions."),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:a(66729).Z,width:"1011",height:"360"}))),(0,l.kt)("p",null,"You can specify both filter and sorting visually."),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:a(39169).Z,width:"1011",height:"360"}))),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Enabled")),(0,l.kt)("td",{parentName:"tr",align:null},"If disabled the node will simply pass the input array through without change, if enabled the input array will be filtered and sorted.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Class")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("strong",{parentName:"td"},"Class")," of records that the input array is assumed to contain.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Use Limit")),(0,l.kt)("td",{parentName:"tr",align:null},"Enabled or disable limiting of the input array to a specific number of maximum records.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Limit")),(0,l.kt)("td",{parentName:"tr",align:null},"The number of maximum records to limit the output filtered array to contain.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Skip")),(0,l.kt)("td",{parentName:"tr",align:null},"The number of records in the beginning of the output filtered array to skip.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Items")),(0,l.kt)("td",{parentName:"tr",align:null},"The input array of records that should be filtered by this node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Filter Parameter Inputs")),(0,l.kt)("td",{parentName:"tr",align:null},"<##input:fp-","*","##>Each filter parameter get an input where a connection can be made to provide the value for the paramter.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Filter")),(0,l.kt)("td",{parentName:"tr",align:null},"Send a signal on this input to perform the filtering, this will produce a new filtered array on the ",(0,l.kt)("strong",{parentName:"td"},"Items")," output. If this input does not have a connection, the input array will be filtered every time it is updated.")))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Items")),(0,l.kt)("td",{parentName:"tr",align:null},"This output will contain the filtered array of records.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Count")),(0,l.kt)("td",{parentName:"tr",align:null},"The number of records in the filtered output array.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"First Record Id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("strong",{parentName:"td"},"Id")," of the first record in the filtered output array.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Filtered")),(0,l.kt)("td",{parentName:"tr",align:null},"A signal will be sent on this output when the input array have been successfully filtered.")))))}m.isMDXComponent=!0},66729:function(t,e,a){e.Z=a.p+"assets/images/filter-records-node-735a4f69b6d325b03c7f6759ec8847fe.png"},39169:function(t,e,a){e.Z=a.p+"assets/images/filter-records-visual-2f32234b702e8b454ed1a9e114bee9a8.png"}}]);