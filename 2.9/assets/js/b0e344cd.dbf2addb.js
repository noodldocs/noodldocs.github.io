"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[3530],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(a),c=n,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return a?r.createElement(h,i(i({ref:t},d),{},{components:a})):r.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},52126:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={hide_title:!0,hide_table_of_contents:!0,title:"Array Filter"},i=void 0,o={unversionedId:"data/array/array-filter/README",id:"data/array/array-filter/README",title:"Array Filter",description:"This node will take an array of items as input and output a filtered version of the items. Look at the Filter section below to find information on how to create filters.",source:"@site/nodes/data/array/array-filter/README.md",sourceDirName:"data/array/array-filter",slug:"/data/array/array-filter/",permalink:"/2.9/nodes/data/array/array-filter/",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Array Filter"},sidebar:"nodeSidebar",previous:{title:"Insert Into Array",permalink:"/2.9/nodes/data/array/insert-into-array/"},next:{title:"Array Map",permalink:"/2.9/nodes/data/array/array-map/"}},p={},s=[{value:"Inputs",id:"inputs",level:2},{value:"General",id:"general",level:3},{value:"Filter",id:"filter",level:3},{value:"Sort",id:"sort",level:3},{value:"Outputs",id:"outputs",level:2},{value:"General",id:"general-1",level:3}],d={toc:s},u="wrapper";function m(e){let{components:t,...l}=e;return(0,n.kt)(u,(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{className:"is-hidden"},""),(0,n.kt)("h1",{id:"array-filter"},"Array Filter"),(0,n.kt)("p",null,"This node will take an array of items as input and output a filtered version of the items. Look at the Filter section below to find information on how to create filters."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:a(66181).Z,width:"1022",height:"548"}))),(0,n.kt)("p",{className:"is-hidden"},""),(0,n.kt)("h2",{id:"inputs"},"Inputs"),(0,n.kt)("h3",{id:"general"},"General"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Data"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-data"},"Enabled")),(0,n.kt)("td",{parentName:"tr",align:null},"The filtering is enabled by default, if disabled the array will simply pass through unfiltered.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-data"},"Items")),(0,n.kt)("td",{parentName:"tr",align:null},"The array that should be filtered.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-data"},"Use Limit")),(0,n.kt)("td",{parentName:"tr",align:null},"Enables or disables limiting the number of objects in the outputted items array.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-data"},"Limit")),(0,n.kt)("td",{parentName:"tr",align:null},"Specify the maximum number of objects in the filtered output.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-data"},"Skip")),(0,n.kt)("td",{parentName:"tr",align:null},"Specify the number of objects to skip from the beginning of the filtered output.")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Signal"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-signal"},"Filter")),(0,n.kt)("td",{parentName:"tr",align:null},"By default the node will filter as soon as there is a new array on the ",(0,n.kt)("em",{parentName:"td"},"Items")," input or if that array changes. But if there is a connection to the ",(0,n.kt)("em",{parentName:"td"},"Filter")," input it will wait until a signal is sent here to perform the filtering.")))),(0,n.kt)("h3",{id:"filter"},"Filter"),(0,n.kt)("p",null,"By default the ",(0,n.kt)("strong",{parentName:"p"},"Array Filter")," node will pass through all objects of the input array. You can filter on ",(0,n.kt)("strong",{parentName:"p"},"Object")," properties. Add which properties you want to filter on."),(0,n.kt)("div",{className:"ndl-image-with-background"},(0,n.kt)("p",null,(0,n.kt)("img",{src:a(26366).Z,width:"802",height:"318"}))),(0,n.kt)("p",null,"For each filter property you can specify:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type"),"\nThe type you want for the filter, can be ",(0,n.kt)("em",{parentName:"p"},"Number"),", ",(0,n.kt)("em",{parentName:"p"},"String")," or ",(0,n.kt)("em",{parentName:"p"},"Boolean"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Op"),"\nThe available operations of the filter depend on the type that is set."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Equals")," Include in filter if the property equals the provided value. Available for all types."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Not Equals")," Include in filter if the property does NOT equal the provided value. Available for all types."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Greater than")," Include in filter if the property is greater than the provided value. Only available if type is ",(0,n.kt)("em",{parentName:"li"},"Number"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Less than")," Include in filter if the property is less than the provided value. Only available if type is ",(0,n.kt)("em",{parentName:"li"},"Number"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Greater than or equal")," Include in filter if the property is greater than or equal to the provided value. Only available if type is ",(0,n.kt)("em",{parentName:"li"},"Number"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Less than or equal")," Include in filter if the property is less than or equal to the provided value. Only available if type is ",(0,n.kt)("em",{parentName:"li"},"Number"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Matches Regexp")," Match a regexp to the provided value. Available if type is ",(0,n.kt)("em",{parentName:"li"},"String"))),(0,n.kt)("p",null,"?> To perform a free text search on strings, use the ",(0,n.kt)("em",{parentName:"p"},"Matches Regexp")," operation and set the ",(0,n.kt)("em",{parentName:"p"},"Value")," to the partial string you want to search for."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Value"),"\n<##input:filterFilterValue-","*","##>The value used to test against in the filter operation."),(0,n.kt)("div",{className:"ndl-image-with-background"},(0,n.kt)("p",null,(0,n.kt)("img",{src:a(48029).Z,width:"574",height:"306"}))),(0,n.kt)("h3",{id:"sort"},"Sort"),(0,n.kt)("p",null,"By default the ",(0,n.kt)("strong",{parentName:"p"},"Array Filter")," node does not sort the output, it will be in the same order as the input. You can specify sorting. Like filters you simply add which properties you want to sort on.\nFor each property you can choose the sorting order."),(0,n.kt)("div",{className:"ndl-image-with-background"},(0,n.kt)("p",null,(0,n.kt)("img",{src:a(68806).Z,width:"570",height:"178"}))),(0,n.kt)("h2",{id:"outputs"},"Outputs"),(0,n.kt)("h3",{id:"general-1"},"General"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Data"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-data"},"Items")),(0,n.kt)("td",{parentName:"tr",align:null},"The filtered and sorted array.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-data"},"Count")),(0,n.kt)("td",{parentName:"tr",align:null},"The number of objects in the filtered array.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-data"},"First Item Id")),(0,n.kt)("td",{parentName:"tr",align:null},"The ",(0,n.kt)("em",{parentName:"td"},"Id")," of the first object in the filtered array, or ",(0,n.kt)("em",{parentName:"td"},"undefined")," if there are no items in the filtered array.")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Signal"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-signal"},"Filtered")),(0,n.kt)("td",{parentName:"tr",align:null},"Signal emitted when the array has been filtered, either due to a ",(0,n.kt)("em",{parentName:"td"},"Filter")," signal sent or if the array has changed.")))))}m.isMDXComponent=!0},66181:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/array-filter-59428157a8ddaed489e0bf7e69c4bb31.png"},48029:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/collection-filter-2-52ae77ff59c6e6cb8d312c4fe11da969.png"},26366:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/collection-filter-a04203214c2bb50ea814fa53711b50c3.png"},68806:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/collection-sort-e04bb60545bf195e957ddab934dea802.png"}}]);