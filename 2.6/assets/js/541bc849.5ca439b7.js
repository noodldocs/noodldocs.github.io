"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[4398],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return m}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),s=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=s(t.components);return r.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=s(a),m=n,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return a?r.createElement(h,l(l({ref:e},p),{},{components:a})):r.createElement(h,l({ref:e},p))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},13318:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=a(83117),n=a(80102),o=(a(67294),a(3905)),l=["components"],i={hide_title:!0,hide_table_of_contents:!0,title:"Array"},d=void 0,s={unversionedId:"data/array/array-node",id:"data/array/array-node",title:"Array",description:"Arrays are ordered lists of Objects. See the guide on arrays here for a more detailed introduction.",source:"@site/nodes/data/array/array-node.md",sourceDirName:"data/array",slug:"/data/array/array-node",permalink:"/2.6/nodes/data/array/array-node",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Array"},sidebar:"nodeSidebar",previous:{title:"Variable",permalink:"/2.6/nodes/data/variable/variable-node"},next:{title:"Create New Array",permalink:"/2.6/nodes/data/array/create-new-array"}},p={},c=[{value:"Inputs",id:"inputs",level:2},{value:"General",id:"general",level:3},{value:"Outputs",id:"outputs",level:2}],u={toc:c};function m(t){var e=t.components,i=(0,n.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h1",{id:"array"},"Array"),(0,o.kt)("p",null,"Arrays are ordered lists of ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/object/object-node"},"Object"),"s. See the guide on arrays ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/data/arrays"},"here")," for a more detailed introduction."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(16255).Z,width:"1712",height:"1017"}))),(0,o.kt)("p",null,"You can create and modify the array using the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/array/create-new-array"},"Create new Array"),", ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/array/insert-into-array"},"Insert Object Into Array")," and ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/array/remove-from-array"},"Remove Object From Array"),".\n"),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("h3",{id:"general"},"General"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Items")),(0,o.kt)("td",{parentName:"tr",align:null},"This input sets the source of the array. You can for instance forward the content of a ",(0,o.kt)("a",{parentName:"td",href:"/nodes/data/array/static-array"},"Static Array")," node using this input. The content of the source array will be copied to this array by default and any changes to the source array will also be copied automatically. You can control this by making a signal connection to ",(0,o.kt)("em",{parentName:"td"},"Set"),", in that case the items, i.e. content of the source array, will only be copied when a signal is received on ",(0,o.kt)("em",{parentName:"td"},"Set"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Id")),(0,o.kt)("td",{parentName:"tr",align:null},"This is the ",(0,o.kt)("em",{parentName:"td"},"Id")," of the array, it works similair to objects and variables. It specifies the array that this node will act on via it's ",(0,o.kt)("em",{parentName:"td"},"Id"),". All ",(0,o.kt)("strong",{parentName:"td"},"Array")," nodes with the same ",(0,o.kt)("em",{parentName:"td"},"Id")," will refer to the same array of objects.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Fetch")),(0,o.kt)("td",{parentName:"tr",align:null},"Normally when ",(0,o.kt)("em",{parentName:"td"},"Id")," is set, the items and count outputs are immediately updated with the content of the array referenced by the ",(0,o.kt)("em",{parentName:"td"},"Id"),". If you want to control how the data is updated you can connect to the ",(0,o.kt)("em",{parentName:"td"},"Fetch")," signal input. Then you need to explictly send a signal here for the ",(0,o.kt)("strong",{parentName:"td"},"Array")," node to fetch the data. Before an array have been fetched none of the modify and set operations or source items will have any affect.")))),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Id")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("em",{parentName:"td"},"Id")," for this ",(0,o.kt)("strong",{parentName:"td"},"Array"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Items")),(0,o.kt)("td",{parentName:"tr",align:null},"This is an output that can be connected to others that can take ",(0,o.kt)("strong",{parentName:"td"},"Array")," inputs, such as the ",(0,o.kt)("a",{parentName:"td",href:"/nodes/ui-controls/repeater"},"Repeater")," node. It will hold an ",(0,o.kt)("inlineCode",{parentName:"td"},"Noodl.Array")," type.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Count")),(0,o.kt)("td",{parentName:"tr",align:null},"The number of items in the ",(0,o.kt)("strong",{parentName:"td"},"Array"),".")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Changed")),(0,o.kt)("td",{parentName:"tr",align:null},"This signal is triggered when the content of the array is changed, either by an action on this node or by some other node in the graph that operates on the same array Id.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Fetched")),(0,o.kt)("td",{parentName:"tr",align:null},"Triggered when a ",(0,o.kt)("em",{parentName:"td"},"Fetch")," action has been performed and the data is ready.")))))}m.isMDXComponent=!0},16255:function(t,e,a){e.Z=a.p+"assets/images/array-f0914ba194cad294b7268c439af9fd91.png"}}]);