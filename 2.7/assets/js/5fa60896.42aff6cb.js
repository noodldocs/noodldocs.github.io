"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[9316],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return m}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),u=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),d=u(a),m=n,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return a?r.createElement(h,i(i({ref:e},s),{},{components:a})):r.createElement(h,i({ref:e},s))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9345:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r=a(83117),n=a(80102),l=(a(67294),a(3905)),i=["components"],p={hide_title:!0,hide_table_of_contents:!0,title:"Array Map"},o=void 0,u={unversionedId:"data/array/array-map",id:"data/array/array-map",title:"Array Map",description:"This node takes an input array, runs a small map script on each item, and outputs the resulting mapped array. That is an array with new objects, each created in the mapping script.",source:"@site/nodes/data/array/array-map.md",sourceDirName:"data/array",slug:"/data/array/array-map",permalink:"/2.6/nodes/data/array/array-map",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Array Map"},sidebar:"nodeSidebar",previous:{title:"Array Filter",permalink:"/2.6/nodes/data/array/array-filter"},next:{title:"Static Array",permalink:"/2.6/nodes/data/array/static-array"}},s={},c=[{value:"Inputs",id:"inputs",level:2},{value:"Script",id:"script",level:3},{value:"Outputs",id:"outputs",level:2},{value:"General",id:"general",level:3}],d={toc:c};function m(t){var e=t.components,p=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h1",{id:"array-map"},"Array Map"),(0,l.kt)("p",null,"This node takes an input array, runs a small map script on each item, and outputs the resulting mapped array. That is an array with new objects, each created in the mapping script."),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:a(82548).Z,width:"1830",height:"746"}))),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Items")),(0,l.kt)("td",{parentName:"tr",align:null},"The array that should be mapped.")))),(0,l.kt)("h3",{id:"script"},"Script"),(0,l.kt)("p",null,"The mapping script used to map the objects in the input array to new objects in the mapped output array. The script should be provided in the following format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"map({\n    FullName: () => object.first_name + object.last_name,\n    Age: 'years_old',\n})\n")),(0,l.kt)("p",null,"You can either provide a string with the name of the property that should be mapped with the syntax ",(0,l.kt)("em",{parentName:"p"},"to:'from'")," which will simply rename a property taking the value directly from the input object. Or you can provide a mapping function that takes the object (of the type ",(0,l.kt)("a",{parentName:"p",href:"/javascript/reference/object"},"Noodl.Object"),") and the function should return the mapped value."),(0,l.kt)("p",null,"Sometimes you need to extract the ",(0,l.kt)("strong",{parentName:"p"},"Id")," of the objects you are mapping, this can be done in the following way:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"map({\n    Value: () => object.getId(),\n    Label: 'PhotoName',\n})\n")),(0,l.kt)("p",null,"Note that the objects that are created when mapping are new objects so they will have their own Id as well."),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("h3",{id:"general"},"General"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Items")),(0,l.kt)("td",{parentName:"tr",align:null},"The mapped array.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Count")),(0,l.kt)("td",{parentName:"tr",align:null},"The number of items in the mapped array (this will be the same as the input array)")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Changed")),(0,l.kt)("td",{parentName:"tr",align:null},"A signal is emitted here when the input array has been modified which will trigger the ",(0,l.kt)("em",{parentName:"td"},"Array Map")," node to remap the input and produce a new output ",(0,l.kt)("em",{parentName:"td"},"Items"),".")))))}m.isMDXComponent=!0},82548:function(t,e,a){e.Z=a.p+"assets/images/array-map-093e000fa2d68e0cfe9ceca16dd4ab81.png"}}]);