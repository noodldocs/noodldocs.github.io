"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[3991],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,h=m["".concat(i,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7430:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),s=["components"],l={hide_title:!0,hide_table_of_contents:!0,title:"Object"},i=void 0,p={unversionedId:"data/object/object-node",id:"data/object/object-node",title:"Object",description:"An Object is a basic data object in Noodl that stores any amount of properties. It can be used standalone or together with Array and Repeater nodes to create lists. An Object works much like a Variable but it can store many properties in one object.",source:"@site/nodes/data/object/object-node.md",sourceDirName:"data/object",slug:"/data/object/object-node",permalink:"/2.6/nodes/data/object/object-node",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Object"},sidebar:"nodeSidebar",previous:{title:"Repeater Item",permalink:"/2.6/nodes/ui-controls/repeater-item"},next:{title:"Set Object Properties",permalink:"/2.6/nodes/data/object/set-object-properties"}},d={},c=[{value:"Similarities between Objects and Records",id:"similarities-between-objects-and-records",level:2},{value:"Inputs",id:"inputs",level:2},{value:"General",id:"general",level:3},{value:"Outputs",id:"outputs",level:2},{value:"General",id:"general-1",level:3}],m={toc:c};function u(e){var t=e.components,l=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h1",{id:"object"},"Object"),(0,o.kt)("p",null,"An ",(0,o.kt)("strong",{parentName:"p"},"Object")," is a basic data object in Noodl that stores any amount of properties. It can be used standalone or together with ",(0,o.kt)("a",{parentName:"p",href:"nodes/data/array/array-node.md"},"Array")," and ",(0,o.kt)("a",{parentName:"p",href:"nodes/ui-controls/repeater"},"Repeater")," nodes to create lists. An ",(0,o.kt)("strong",{parentName:"p"},"Object")," works much like a ",(0,o.kt)("a",{parentName:"p",href:"nodes/data/variable/variable-node.md"},"Variable")," but it can store many properties in one object."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(42814).Z,width:"834",height:"258"}))),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Object")," node is typically used together with the ",(0,o.kt)("a",{parentName:"p",href:"nodes/data/object/create-new-object"},"Create New Object")," node and the ",(0,o.kt)("a",{parentName:"p",href:"nodes/data/object/set-object-properties"},"Set Object Properties")," node to create a complete object lifecycle, creating and updating object properties."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(14459).Z,width:"1435",height:"589"}))),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("p",null,"You can also create and refer to an object statically (i.e. not using a ",(0,o.kt)("a",{parentName:"p",href:"nodes/data/object/create-new-object"},"Create New Object")," by settings its ",(0,o.kt)("strong",{parentName:"p"},"Id"),". Generally, the ",(0,o.kt)("strong",{parentName:"p"},"Id")," is a global identifyer of the ",(0,o.kt)("strong",{parentName:"p"},"Object")," meaning that any ",(0,o.kt)("strong",{parentName:"p"},"Object")," nodes with the same idea will refer to the same data. If you change the properties in one ",(0,o.kt)("strong",{parentName:"p"},"Object")," node the values of all ",(0,o.kt)("strong",{parentName:"p"},"Object")," nodes with the same ",(0,o.kt)("strong",{parentName:"p"},"Id")," will be changed immediately, unless if you connect the ",(0,o.kt)("strong",{parentName:"p"},"Fetch")," signal."),(0,o.kt)("h2",{id:"similarities-between-objects-and-records"},"Similarities between Objects and Records"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Object")," and ",(0,o.kt)("a",{parentName:"p",href:"nodes/data/cloud-data/record"},"Record")," nodes are very similar. A ",(0,o.kt)("strong",{parentName:"p"},"Record")," can be seen as an ",(0,o.kt)("strong",{parentName:"p"},"Object")," that is backed by a database entry and hence have actions to ",(0,o.kt)("strong",{parentName:"p"},"Fetch")," from and ",(0,o.kt)("strong",{parentName:"p"},"Store")," it in the database. A ",(0,o.kt)("strong",{parentName:"p"},"Record")," also has a database defined schema based on its ",(0,o.kt)("strong",{parentName:"p"},"Class")," which enables Noodl to detect its available properties from its database Class. ",(0,o.kt)("strong",{parentName:"p"},"Objects")," does not have a schema.\nIf needed, you can use the ",(0,o.kt)("strong",{parentName:"p"},"Id")," of a ",(0,o.kt)("strong",{parentName:"p"},"Record")," as the ",(0,o.kt)("strong",{parentName:"p"},"Id")," of an ",(0,o.kt)("strong",{parentName:"p"},"Object")," to access its properties, but obviously cannot use the ",(0,o.kt)("strong",{parentName:"p"},"Object")," to store or fetch the data from the database."),(0,o.kt)("p",null,"Generally you use ",(0,o.kt)("strong",{parentName:"p"},"Objects")," as data holder for data that does not need to be stored in a database."),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("h3",{id:"general"},"General"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Custom Properties")),(0,o.kt)("td",{parentName:"tr",align:null},"An ",(0,o.kt)("strong",{parentName:"td"},"Object")," node can have any amount of properties. Each property will get one input and output to set/get their current value.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Id")),(0,o.kt)("td",{parentName:"tr",align:null},"Set the ",(0,o.kt)("em",{parentName:"td"},"Id")," for this ",(0,o.kt)("strong",{parentName:"td"},"Object"),". All ",(0,o.kt)("strong",{parentName:"td"},"Object")," nodes with the same ",(0,o.kt)("em",{parentName:"td"},"Id")," will refer to the same data and have the same properties. Changing a value of any property will immediately update the property in all other ",(0,o.kt)("strong",{parentName:"td"},"Object")," nodes with the same ",(0,o.kt)("strong",{parentName:"td"},"Id")," (unless if you connect the ",(0,o.kt)("strong",{parentName:"td"},"Fetch")," signal to a specific ",(0,o.kt)("em",{parentName:"td"},"Object")," node, see below).")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Fetch")),(0,o.kt)("td",{parentName:"tr",align:null},"Normally when an ",(0,o.kt)("strong",{parentName:"td"},"Object")," ",(0,o.kt)("em",{parentName:"td"},"Id")," is set, the property outputs are immediately updated. If you want to control how the data is updated you can connect to the ",(0,o.kt)("em",{parentName:"td"},"Fetch")," signal input. Then you need to explictly send a signal here for the ",(0,o.kt)("strong",{parentName:"td"},"Object")," node to fetch the data.")))),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("h3",{id:"general-1"},"General"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Id")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("em",{parentName:"td"},"Id")," for this ",(0,o.kt)("strong",{parentName:"td"},"Object")," node.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Custom Properties")),(0,o.kt)("td",{parentName:"tr",align:null},"An ",(0,o.kt)("strong",{parentName:"td"},"Object")," can have any amount of properties. Each property will get one output to get the current value.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Changed")),(0,o.kt)("td",{parentName:"tr",align:null},"Signal when any of the properties of this ",(0,o.kt)("strong",{parentName:"td"},"Object")," have changed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Fetched")),(0,o.kt)("td",{parentName:"tr",align:null},"Signal when the ",(0,o.kt)("strong",{parentName:"td"},"Object")," has fetched and updated it's outputs. Note that the event is triggered no matter if the properties have changed or not.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Changed Property Signals")),(0,o.kt)("td",{parentName:"tr",align:null},"An ",(0,o.kt)("strong",{parentName:"td"},"Object")," will also get changed signal outputs for each of it's properties. They will emit a signal when the property changes value when this or some other ",(0,o.kt)("strong",{parentName:"td"},"Object")," node with the same ",(0,o.kt)("em",{parentName:"td"},"Id")," triggers a set.")))),(0,o.kt)("span",{className:"hidden-props-for-editor"},"Triggered when this user defined property is changed."),(0,o.kt)("span",{className:"hidden-props-for-editor"},"User defined property."),(0,o.kt)("span",{className:"hidden-props-for-editor"},"User defined property."))}u.isMDXComponent=!0},42814:function(e,t,a){t.Z=a.p+"assets/images/object-3-ee5499c8b45bcedcd8f81bb851754101.png"},14459:function(e,t,a){t.Z=a.p+"assets/images/object-lifecycle-a4c305bf459089caee1be97bbd2c402f.png"}}]);