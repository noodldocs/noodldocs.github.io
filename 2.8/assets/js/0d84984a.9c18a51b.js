"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[864],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(o),b=r,m=d["".concat(c,".").concat(b)]||d[b]||u[b]||a;return o?n.createElement(m,i(i({ref:t},p),{},{components:o})):n.createElement(m,i({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}b.displayName="MDXCreateElement"},41634:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=o(87462),r=(o(67294),o(3905));const a={hide_title:!0,hide_table_of_contents:!0,title:"Noodl.Object"},i="Noodl.Object",l={unversionedId:"reference/object",id:"reference/object",title:"Noodl.Object",description:"Allows access to Object from Javascript. You can learn more about objects and how you use them in your Noodl applications here.",source:"@site/javascript/reference/object.md",sourceDirName:"reference",slug:"/reference/object",permalink:"/2.8/javascript/reference/object",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Noodl.Object"},sidebar:"apiSidebar",previous:{title:"Noodl.Objects",permalink:"/2.8/javascript/reference/objects"},next:{title:"Noodl.Arrays",permalink:"/2.8/javascript/reference/arrays"}},c={},s=[{value:"<strong><code>Noodl.Object.get(id)</code></strong>",id:"noodlobjectgetid",level:4},{value:"<strong><code>Noodl.Object.create(data)</code></strong>",id:"noodlobjectcreatedata",level:4},{value:"<strong><code>Noodl.Object.exists(id)</code></strong>",id:"noodlobjectexistsid",level:4},{value:"<strong><code>object.on(event,listener)</code></strong>",id:"objectoneventlistener",level:4},{value:"<strong><code>object.off(event,listener)</code></strong>",id:"objectoffeventlistener",level:4},{value:"<strong><code>object.getId()</code></strong>",id:"objectgetid",level:4},{value:"<strong><code>object.set(name,value,options)</code></strong>",id:"objectsetnamevalueoptions",level:4},{value:"<strong><code>object.setAll(data)</code></strong>",id:"objectsetalldata",level:4},{value:"<strong><code>object.get(name,options)</code></strong>",id:"objectgetnameoptions",level:4}],p={toc:s},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"noodlobject"},"Noodl.Object"),(0,r.kt)("p",null,"Allows access to ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/object/object-node"},"Object")," from Javascript. You can learn more about objects and how you use them in your Noodl applications ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/data/objects"},"here"),"."),(0,r.kt)("h4",{id:"noodlobjectgetid"},(0,r.kt)("strong",{parentName:"h4"},(0,r.kt)("inlineCode",{parentName:"strong"},"Noodl.Object.get(id)"))),(0,r.kt)("p",null,"Returns the object with the specified id. This function will return a new empty object if the id is\nnot previously used. If you want to check if an object exists use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Noodl.Object.exists")," function.\nThis is the same as accessing the object through ",(0,r.kt)("inlineCode",{parentName:"p"},"Noodl.Objects"),"."),(0,r.kt)("h4",{id:"noodlobjectcreatedata"},(0,r.kt)("strong",{parentName:"h4"},(0,r.kt)("inlineCode",{parentName:"strong"},"Noodl.Object.create(data)"))),(0,r.kt)("p",null,"This function will create a new object and return it.\nThe properties of the object will be that of the supplied data. A special case is\nthe id attribute that will become the id of the object and not part of the object properties.\nE.g. the code below will create an object with two properties and the id set to 'A'."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'Noodl.Object.create({\n  id: "A",\n  myProp1: 10,\n  myProp2: "Hello",\n  myProp3: Noodl.Object.create({ anotherProp: 15 }),\n});\n')),(0,r.kt)("p",null,"If no id is provided the newly created object will get a unique id assigned.\nAs illustrated in the example above object properties can contain references to other objects."),(0,r.kt)("h4",{id:"noodlobjectexistsid"},(0,r.kt)("strong",{parentName:"h4"},(0,r.kt)("inlineCode",{parentName:"strong"},"Noodl.Object.exists(id)"))),(0,r.kt)("p",null,"Returns true if an object with the specified Id has been created with a call to Noodl.Object.get or Noodl.Object.create."),(0,r.kt)("h4",{id:"objectoneventlistener"},(0,r.kt)("strong",{parentName:"h4"},(0,r.kt)("inlineCode",{parentName:"strong"},"object.on(event,listener)"))),(0,r.kt)("h4",{id:"objectoffeventlistener"},(0,r.kt)("strong",{parentName:"h4"},(0,r.kt)("inlineCode",{parentName:"strong"},"object.off(event,listener)"))),(0,r.kt)("p",null,"Add and remove an event listener from the object.\nSupported events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"change")," - any property of the object is changed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"add")," - the object is added to a array"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remove")," - the object is removed from a array.")),(0,r.kt)("p",null,"Example usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'myObject.on("change", function (args) {\n  // property with name args.name was changed\n  // new value in args.value\n  // old value in args.old\n});\n\nmyObject.on("add", function (args) {\n  // object was added to the array args.array\n});\n\nmyObject.on("remove", function (args) {\n  // object was removed from the array args.array\n});\n')),(0,r.kt)("h4",{id:"objectgetid"},(0,r.kt)("strong",{parentName:"h4"},(0,r.kt)("inlineCode",{parentName:"strong"},"object.getId()"))),(0,r.kt)("p",null,"Returns the Id of the object."),(0,r.kt)("h4",{id:"objectsetnamevalueoptions"},(0,r.kt)("strong",{parentName:"h4"},(0,r.kt)("inlineCode",{parentName:"strong"},"object.set(name,value,options)"))),(0,r.kt)("p",null,"Sets a property of the object. The name and value of the property should be provided to the function."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"myObject.set('myProp1',44)")),(0,r.kt)("p",null,"This is equal to just setting the property of the object directly:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"myObject.myProp1 = 44")),(0,r.kt)("p",null,"Optionally, dot notation can be used to set a sub property.\nIf a property of the object is another object, then you can set a property of the object\ne.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"myProp3.anotherProp"),". To enable this you must supply the options ",(0,r.kt)("inlineCode",{parentName:"p"},"{resolve:true}"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"myObject.set('myProp3.anotherProp',50,{resolve:true})")),(0,r.kt)("h4",{id:"objectsetalldata"},(0,r.kt)("strong",{parentName:"h4"},(0,r.kt)("inlineCode",{parentName:"strong"},"object.setAll(data)"))),(0,r.kt)("p",null,"This function performs a set on all properties of the specified object.\nThis is equal to calling set for all properties of the data object.\nUpdating the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," property is not supported, and will be ignored."),(0,r.kt)("h4",{id:"objectgetnameoptions"},(0,r.kt)("strong",{parentName:"h4"},(0,r.kt)("inlineCode",{parentName:"strong"},"object.get(name,options)"))),(0,r.kt)("p",null,"Returns the value of the property with the specified name.\nAs in the set function the dot notation can be used if the object has another object as a property,\nif the options {resolve:true} is supplied."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"myObject.get('myProp3.anotherProp',{resolve:true})")),(0,r.kt)("p",null,"This is equal to reading the property directly:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"myObject.myProp3.anotherProp")))}u.isMDXComponent=!0}}]);