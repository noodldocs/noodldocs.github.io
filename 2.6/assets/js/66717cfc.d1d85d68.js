"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[3664],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,h=c["".concat(l,".").concat(u)]||c[u]||d[u]||o;return a?n.createElement(h,p(p({ref:t},m),{},{components:a})):n.createElement(h,p({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6729:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),p=["components"],i={hide_title:!0,hide_table_of_contents:!0,title:"Repeater"},l=void 0,s={unversionedId:"ui-controls/repeater",id:"ui-controls/repeater",title:"Repeater",description:"This node is used to dynamically insert visual components based on array data.",source:"@site/nodes/ui-controls/repeater.md",sourceDirName:"ui-controls",slug:"/ui-controls/repeater",permalink:"/2.6/nodes/ui-controls/repeater",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Repeater"},sidebar:"nodeSidebar",previous:{title:"Set Parent Component Object Properties",permalink:"/2.6/nodes/component-utilities/set-parent-component-object-properties"},next:{title:"Repeater Item",permalink:"/2.6/nodes/ui-controls/repeater-item"}},m={},d=[{value:"Inputs",id:"inputs",level:2},{value:"Script",id:"script",level:3},{value:"Mapping Inputs",id:"mapping-inputs",level:4},{value:"Dynamic Template Types",id:"dynamic-template-types",level:4},{value:"Outputs",id:"outputs",level:2}],c={toc:d};function u(e){var t=e.components,i=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h1",{id:"repeater"},"Repeater"),(0,o.kt)("p",null,"This node is used to dynamically insert visual components based on ",(0,o.kt)("span",{className:"ndl-data"},"array")," data."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(18322).Z,width:"1011",height:"360"}))),(0,o.kt)("p",null,"The ",(0,o.kt)("span",{className:"ndl-node"},"Repeater")," node takes data from a Noodl ",(0,o.kt)("span",{className:"ndl-data"},"Array")," and generates an existing visual component for each item in the ",(0,o.kt)("span",{className:"ndl-data"},"Array"),". The ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/object/object-node.md"},"Object")," or ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/record"},"Record")," associated with the visual component can then be used to populate the component with data."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(34878).Z,width:"1008",height:"357"}))),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("p",null,"More details can be found in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/data/list-basics"},"guide"),"."),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Template Type")),(0,o.kt)("td",{parentName:"tr",align:null},"This input is used to enable or disable dynamic templates. The input can be:",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"Explicit"),": The same ",(0,o.kt)("em",{parentName:"td"},"Component")," will be used for all items.",(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"Dynamic"),": Use code to choose what ",(0,o.kt)("em",{parentName:"td"},"Component")," to create for each item. In this case you will have to set the ",(0,o.kt)("strong",{parentName:"td"},"Script")," input.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Script")),(0,o.kt)("td",{parentName:"tr",align:null},"Available when ",(0,o.kt)("strong",{parentName:"td"},"Template Type")," is set to ",(0,o.kt)("strong",{parentName:"td"},"Dynamic")," or after chosing a ",(0,o.kt)("em",{parentName:"td"},"Component")," for a ",(0,o.kt)("strong",{parentName:"td"},"Explicit")," template type . Write a script to map input or choose what Component to create for every item (see below).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Component")),(0,o.kt)("td",{parentName:"tr",align:null},"Only available when ",(0,o.kt)("strong",{parentName:"td"},"Template Type")," is set to ",(0,o.kt)("strong",{parentName:"td"},"Explicit"),". Choose a component from your project that will be used as template to dynamically create component instances for each object in the Items array.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Items")),(0,o.kt)("td",{parentName:"tr",align:null},"An array of ",(0,o.kt)("a",{parentName:"td",href:"/nodes/data/object/object-node.md"},"Objects")," or ",(0,o.kt)("a",{parentName:"td",href:"/nodes/data/cloud-data/record"},"Records")," that will be used to dynamically create components.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Refresh")),(0,o.kt)("td",{parentName:"tr",align:null},"By sending a signal to this input all items in the ",(0,o.kt)("strong",{parentName:"td"},"Repeater")," will be removed and then recreated.")))),(0,o.kt)("h3",{id:"script"},"Script"),(0,o.kt)("p",null,"Here you can put an script that will do one of two things. Either the script\na) Maps the properties of the objects in the ",(0,o.kt)("strong",{parentName:"p"},"Items")," array to component inputs of the template component instances created by the ",(0,o.kt)("strong",{parentName:"p"},"Repeater")," node. This is only available if ",(0,o.kt)("strong",{parentName:"p"},"Template Type")," is set to ",(0,o.kt)("strong",{parentName:"p"},"Explicit"),". (see ",(0,o.kt)("em",{parentName:"p"},"Mapping Inputs")," below), or b) Chooses which template component to use for each item in the item array provided to the ",(0,o.kt)("strong",{parentName:"p"},"Repeater")," node. This is only available (and mandatory) if the ",(0,o.kt)("strong",{parentName:"p"},"Template Type")," is set to ",(0,o.kt)("strong",{parentName:"p"},"Dynamic"),". (see ",(0,o.kt)("em",{parentName:"p"},"Dynamic Template Types")," below)."),(0,o.kt)("h4",{id:"mapping-inputs"},"Mapping Inputs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"map({\n    Label: 'Full Name',\n    State: () => object.get('Married') === 'Yes',\n})\n")),(0,o.kt)("p",null,"By default the mapping is simply directly from object properties to component inputs. But you can use the script to change that mapping, in the example above the ",(0,o.kt)("em",{parentName:"p"},"Full Name")," property of the incoming object is mapped to the ",(0,o.kt)("em",{parentName:"p"},"Label")," component input. You can also use the script to do conversions of types by providing a function.\nThis could for example be useful when having a generic list item, that's used with various types of data arrays with different data models and properties."),(0,o.kt)("h4",{id:"dynamic-template-types"},"Dynamic Template Types"),(0,o.kt)("p",null,"By setting ",(0,o.kt)("strong",{parentName:"p"},"Template type")," to ",(0,o.kt)("strong",{parentName:"p"},"Dynamic")," you can use a script to determine which component that should be used for each item in the object ",(0,o.kt)("strong",{parentName:"p"},"Array"),". This could for example be useful if different items should have different visual representation and functionality tied to them.\nYou have to provide a script that determines which template to be used. The script will be called once for each object in the item array provided to the ",(0,o.kt)("strong",{parentName:"p"},"Repeater")," node. The script has has one input variable ",(0,o.kt)("em",{parentName:"p"},"item")," which is the current item. This can be used to get properties from the object. The script should set the variable ",(0,o.kt)("em",{parentName:"p"},"component"),' to the path to the component to use as a template for the item. Note, this is a string containing the path, beginning with a "/", to the component in the Noodl project.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let basePath = '/#My Sheet/ListItems'\nif (item.type === 'header') {\n    component = basePath + '/HeaderItem'\n} else {\n    component = basePath + '/StandardItem'\n}\n")),(0,o.kt)("p",null,'In the example above the script looks at the property "type" of each object, and either choses to component "#My Sheet/ListItems/HeaderItem" or "#My Sheet/ListItems/StandardItem" depending on the value.'),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Mixed"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Template Outputs")),(0,o.kt)("td",{parentName:"tr",align:null},"An output is created for every signal output of the ",(0,o.kt)("em",{parentName:"td"},"Template")," component.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Item Id")),(0,o.kt)("td",{parentName:"tr",align:null},"This output will be updated every time a signal is sent on any of the component output signals to reflect the ",(0,o.kt)("strong",{parentName:"td"},"Id")," of the related ",(0,o.kt)("a",{parentName:"td",href:"/nodes/data/object/object-node.md"},"Object")," or ",(0,o.kt)("a",{parentName:"td",href:"/nodes/data/cloud-data/record/"},"Record")," that triggered the signal.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Item Outputs")),(0,o.kt)("td",{parentName:"tr",align:null},"This group contains component outputs other than signals for the component template of the ",(0,o.kt)("strong",{parentName:"td"},"Repeater")," node. When a signal is triggered by one of the component instances the outputs will be replayed along with the ",(0,o.kt)("em",{parentName:"td"},"Item Id")," of the corresponding item. This can be used to store component specific outputs in e.g. objects and variables.")))),(0,o.kt)("span",{className:"hidden-props-for-editor"},"An output value coming from the list item."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Item Signals")),(0,o.kt)("td",{parentName:"tr",align:null},"This group contains component output signals from the component template of the ",(0,o.kt)("strong",{parentName:"td"},"Repeater")," node. When any of the component instances triggers an output signal, these will be relayed by the ",(0,o.kt)("strong",{parentName:"td"},"Repeater")," node along with the corresponding ",(0,o.kt)("strong",{parentName:"td"},"Item Id"),".")))),(0,o.kt)("span",{className:"hidden-props-for-editor"},"An output signal coming from the list item."))}u.isMDXComponent=!0},34878:function(e,t,a){t.Z=a.p+"assets/images/repeater_node-ba321f67fbab866b2f2e0380c96c3ab6.png"},18322:function(e,t,a){t.Z=a.p+"assets/images/repeater_visual-1b224607a580afcfc36f751e4ebc2ebb.png"}}]);