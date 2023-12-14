"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[2114],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(a),u=n,h=c["".concat(o,".").concat(u)]||c[u]||m[u]||l;return a?r.createElement(h,p(p({ref:t},d),{},{components:a})):r.createElement(h,p({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:n,p[1]=i;for(var s=2;s<l;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},78768:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={hide_title:!0,hide_table_of_contents:!0,title:"Array Map node"},p=void 0,i={unversionedId:"data/array/array-map/README",id:"data/array/array-map/README",title:"Array Map node",description:"This node takes an input array, runs a small map script on each item, and outputs the resulting mapped array. That is an array with new objects, each created in the mapping script.",source:"@site/nodes/data/array/array-map/README.md",sourceDirName:"data/array/array-map",slug:"/data/array/array-map/",permalink:"/2.9/nodes/data/array/array-map/",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Array Map node"},sidebar:"nodeSidebar",previous:{title:"Array Filter node",permalink:"/2.9/nodes/data/array/array-filter/"},next:{title:"Static Array node",permalink:"/2.9/nodes/data/array/static-array/"}},o={},s=[{value:"Inputs",id:"inputs",level:2},{value:"Script",id:"script",level:3},{value:"Outputs",id:"outputs",level:2},{value:"General",id:"general",level:3}],d={toc:s},c="wrapper";function m(e){let{components:t,...l}=e;return(0,n.kt)(c,(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{className:"is-hidden"},""),(0,n.kt)("h1",{id:"array-map"},"Array Map"),(0,n.kt)("p",null,"This node takes an input array, runs a small map script on each item, and outputs the resulting mapped array. That is an array with new objects, each created in the mapping script."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:a(89679).Z,width:"1830",height:"746"}))),(0,n.kt)("p",{className:"is-hidden"},""),(0,n.kt)("h2",{id:"inputs"},"Inputs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Data"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-data"},"Items")),(0,n.kt)("td",{parentName:"tr",align:null},"The array that should be mapped.")))),(0,n.kt)("h3",{id:"script"},"Script"),(0,n.kt)("p",null,"The mapping script used to map the objects in the input array to new objects in the mapped output array. The script should be provided in the following format:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"map({\n    FullName: () => object.first_name + object.last_name,\n    Age: 'years_old',\n})\n")),(0,n.kt)("p",null,"You can either provide a string with the name of the property that should be mapped with the syntax ",(0,n.kt)("em",{parentName:"p"},"to:'from'")," which will simply rename a property taking the value directly from the input object. Or you can provide a mapping function that takes the object (of the type ",(0,n.kt)("a",{parentName:"p",href:"/javascript/reference/object"},"Noodl.Object"),") and the function should return the mapped value."),(0,n.kt)("p",null,"Sometimes you need to extract the ",(0,n.kt)("strong",{parentName:"p"},"Id")," of the objects you are mapping, this can be done in the following way:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"map({\n    Value: () => object.getId(),\n    Label: 'PhotoName',\n})\n")),(0,n.kt)("p",null,"Note that the objects that are created when mapping are new objects so they will have their own Id as well."),(0,n.kt)("h2",{id:"outputs"},"Outputs"),(0,n.kt)("h3",{id:"general"},"General"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Data"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-data"},"Items")),(0,n.kt)("td",{parentName:"tr",align:null},"The mapped array.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-data"},"Count")),(0,n.kt)("td",{parentName:"tr",align:null},"The number of items in the mapped array (this will be the same as the input array)")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Signal"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-signal"},"Changed")),(0,n.kt)("td",{parentName:"tr",align:null},"A signal is emitted here when the input array has been modified which will trigger the ",(0,n.kt)("em",{parentName:"td"},"Array Map")," node to remap the input and produce a new output ",(0,n.kt)("em",{parentName:"td"},"Items"),".")))))}m.isMDXComponent=!0},89679:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/array-map-093e000fa2d68e0cfe9ceca16dd4ab81.png"}}]);