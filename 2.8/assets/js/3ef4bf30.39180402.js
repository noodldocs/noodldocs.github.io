"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[4339],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return m}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),c=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(f,i(i({ref:e},s),{},{components:a})):r.createElement(f,i({ref:e},s))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},72280:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=a(83117),n=a(80102),o=(a(67294),a(3905)),i=["components"],l={hide_title:!0,hide_table_of_contents:!0,title:"Static Array"},p=void 0,c={unversionedId:"data/array/static-array",id:"data/array/static-array",title:"Static Array",description:"Store static data to populate an Array with items. The Static Array node is great for providing static local data for lists etc. You can use it e.g. as an input to a For Each node.",source:"@site/nodes/data/array/static-array.md",sourceDirName:"data/array",slug:"/data/array/static-array",permalink:"/2.8/nodes/data/array/static-array",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Static Array"},sidebar:"nodeSidebar",previous:{title:"Array Map",permalink:"/2.8/nodes/data/array/array-map"},next:{title:"Record",permalink:"/2.8/nodes/data/cloud-data/record"}},s={},u=[{value:"Inputs",id:"inputs",level:2},{value:"CSV",id:"csv",level:3},{value:"JSON",id:"json",level:3},{value:"Outputs",id:"outputs",level:2}],d={toc:u};function m(t){var e=t.components,l=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h1",{id:"static-array"},"Static Array"),(0,o.kt)("p",null,"Store static data to populate an ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/array/array-node"},"Array")," with items. The Static Array node is great for providing static local data for lists etc. You can use it e.g. as an input to a ",(0,o.kt)("strong",{parentName:"p"},"For Each")," node."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(94966).Z,width:"1034",height:"468"}))),(0,o.kt)("p",null,"You can provide the data in either ",(0,o.kt)("strong",{parentName:"p"},"CSV")," format or, ",(0,o.kt)("strong",{parentName:"p"},"JSON")," format. The ",(0,o.kt)("strong",{parentName:"p"},"items")," output is of ",(0,o.kt)("strong",{parentName:"p"},"Noodl.Array")," format. The content of the array is reset whenever the application is refreshed.\n"),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},"Choose what format the data will be in.",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"CSV"),": Comma-separated values",(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"JSON"),": JavaScript Object Notation")))),(0,o.kt)("h3",{id:"csv"},"CSV"),(0,o.kt)("p",null,"The first row defines the name of all properties. Subsequent rows defines the data values.\nExample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"lamp,topic\nKitchen Lamp,/lamps/1\nOffice Lamp,/lamps/2\nOffice Lamp 2,/lamps/4\n")),(0,o.kt)("h3",{id:"json"},"JSON"),(0,o.kt)("p",null,"Define the name of the properties, and the data, using a JSON array.\nExample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[\n    {\n        "lamp": "Kitchen Lamp",\n        "topic": "/lamps/1"\n    },\n    {\n        "lamp": "Office Lamp",\n        "topic": "/lamps/2"\n    },\n    {\n        "lamp": "Office Lamp 2",\n        "topic": "/lamps/4"\n    }\n]\n')),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Items")),(0,o.kt)("td",{parentName:"tr",align:null},"A ",(0,o.kt)("inlineCode",{parentName:"td"},"Noodl.Array")," object that can be connected to e.g. an ",(0,o.kt)("a",{parentName:"td",href:"/nodes/data/array/array-node"},"Array"),", ",(0,o.kt)("a",{parentName:"td",href:"/docs/guides/business-logic/javascript"},"JavaScript")," or ",(0,o.kt)("a",{parentName:"td",href:"/nodes/ui-controls/repeater"},"Repeater"),".")))))}m.isMDXComponent=!0},94966:function(t,e,a){e.Z=a.p+"assets/images/static-array-1-720a4bdf9b10232df3fbf98f618b52a7.png"}}]);