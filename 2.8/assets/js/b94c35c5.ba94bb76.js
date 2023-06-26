"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[6686],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=s(n),h=r,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,i(i({ref:e},c),{},{components:n})):a.createElement(m,i({ref:e},c))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82822:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],l={hide_title:!0,hide_table_of_contents:!0,title:"Set Object Properties"},p=void 0,s={unversionedId:"data/object/set-object-properties",id:"data/object/set-object-properties",title:"Set Object Properties",description:"You can use this node to set properties on an Object. You must identify the Object with it's Id (see full docs for details)",source:"@site/nodes/data/object/set-object-properties.md",sourceDirName:"data/object",slug:"/data/object/set-object-properties",permalink:"/2.8/nodes/data/object/set-object-properties",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Set Object Properties"},sidebar:"nodeSidebar",previous:{title:"Object",permalink:"/2.8/nodes/data/object/object-node"},next:{title:"Create New Object",permalink:"/2.8/nodes/data/object/create-new-object"}},c={},d=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],u={toc:d};function h(t){var e=t.components,l=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h1",{id:"set-object-properties"},"Set Object Properties"),(0,o.kt)("p",null,"You can use this node to set properties on an ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/object/object-node"},"Object"),". You must identify the ",(0,o.kt)("strong",{parentName:"p"},"Object")," with it's ",(0,o.kt)("strong",{parentName:"p"},"Id")," (see full docs for details)"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(32893).Z,width:"1084",height:"510"}))),(0,o.kt)("p",null,"You can then specify which properties you want to set on the Object in the property panel."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(77325).Z,width:"602",height:"544"}))),(0,o.kt)("p",null,"Finally, send a signal to ",(0,o.kt)("strong",{parentName:"p"},"Do")," to perform the action."),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Properties To Set")),(0,o.kt)("td",{parentName:"tr",align:null},"You can specify which properties to set by adding them to this list. Object don't have a schema with predefined properties like Records so you can choose any property name you want.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Property Types")),(0,o.kt)("td",{parentName:"tr",align:null},"Each property that you want to set will give you the option of setting the type of the value that you want to set to that property.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Property Values")),(0,o.kt)("td",{parentName:"tr",align:null},"<##input:prop-","*","##>The value to set on the Object property when the action is performed. (Signal is receieved on the ",(0,o.kt)("strong",{parentName:"td"},"Do")," input) Each property that you want to set (that was added to the ",(0,o.kt)("strong",{parentName:"td"},"Properties to set")," section above) will get it's own input both in the property panel and as a connection input.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Id Source")),(0,o.kt)("td",{parentName:"tr",align:null},"An Id of a record is needed to perform the action of this node. The ",(0,o.kt)("strong",{parentName:"td"},"Id Source")," property specifies how this Id is retrieved, the options are:",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"Specify explicitly"),": This means you need to specify the Id of the record explicitly through e.g. a connection to the ",(0,o.kt)("strong",{parentName:"td"},"Id")," input.",(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"From repeater"),": This means that the Id for the record will be derived from a repeater. This option is only valid if the component this node is placed in is created by a repeater. Then this node will act on the repeater object that this component was created for.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Id")),(0,o.kt)("td",{parentName:"tr",align:null},"On this input you provide the ",(0,o.kt)("strong",{parentName:"td"},"Id")," of the object where you will set the properties.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Do")),(0,o.kt)("td",{parentName:"tr",align:null},"Send a signal on this input to perform the action and set the properties.")))),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Id")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("strong",{parentName:"td"},"Id")," of the Object where you will / have set the properties. This is simply a mirror of the ",(0,o.kt)("strong",{parentName:"td"},"Id")," input.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Done")),(0,o.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output when the action is performed. You can use this to trigger other actions that needs to run after the properties have been set.")))))}h.isMDXComponent=!0},77325:function(t,e,n){e.Z=n.p+"assets/images/prop-panel-12b50f07cf8612150e9c6ac481516355.png"},32893:function(t,e,n){e.Z=n.p+"assets/images/set-object-properties-f654ee665ea21211f264cdb6284f61d9.png"}}]);