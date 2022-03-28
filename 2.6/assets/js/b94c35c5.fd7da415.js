"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[3430],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),s=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,i(i({ref:e},d),{},{components:n})):a.createElement(h,i({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37526:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],p={},l=void 0,s={unversionedId:"data/object/set-object-properties",id:"data/object/set-object-properties",title:"set-object-properties",description:"You can use this node to set properties on an Object. You must identify the Object with it's Id (see full docs for details)",source:"@site/nodes/data/object/set-object-properties.md",sourceDirName:"data/object",slug:"/data/object/set-object-properties",permalink:"/2.6/nodes/data/object/set-object-properties",tags:[],version:"current",frontMatter:{},sidebar:"nodesSidebar",previous:{title:"object",permalink:"/2.6/nodes/data/object/"},next:{title:"create-new-object",permalink:"/2.6/nodes/data/object/create-new-object"}},d=[{value:"Inputs",id:"inputs",children:[],level:2},{value:"Outputs",id:"outputs",children:[],level:2}],c={toc:d};function u(t){var e=t.components,p=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,p,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,""),(0,o.kt)("h1",{id:"set-object-properties"},"Set Object Properties"),(0,o.kt)("p",null,"You can use this node to set properties on an ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/object/object.md"},"Object"),". You must identify the ",(0,o.kt)("strong",{parentName:"p"},"Object")," with it's ",(0,o.kt)("strong",{parentName:"p"},"Id")," (see full docs for details)"),(0,o.kt)("div",{class:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(60119).Z,width:"1084",height:"510"}))),(0,o.kt)("p",null,"You can then specify which properties you want to set on the Object in the property panel."),(0,o.kt)("div",{class:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(99597).Z,width:"602",height:"544"}))),(0,o.kt)("p",null,"Finally, send a signal to ",(0,o.kt)("strong",{parentName:"p"},"Do")," to perform the action."),(0,o.kt)("p",null,""),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{parentName:"td",className:"ndl-data"}),"Properties To Set",(0,o.kt)("undefined",{parentName:"td"})),(0,o.kt)("td",{parentName:"tr",align:null},"You can specify which properties to set by adding them to this list. Object don't have a schema with predefined properties like Records so you can choose any property name you want.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{parentName:"td",className:"ndl-data"}),"Property Types",(0,o.kt)("undefined",{parentName:"td"})),(0,o.kt)("td",{parentName:"tr",align:null},"Each property that you want to set will give you the option of setting the type of the value that you want to set to that property.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{parentName:"td",className:"ndl-data"}),"Property Values",(0,o.kt)("undefined",{parentName:"td"})),(0,o.kt)("td",{parentName:"tr",align:null},"<##input:prop-","*","##>The value to set on the Object property when the action is performed. (Signal is receieved on the ",(0,o.kt)("strong",{parentName:"td"},"Do")," input)<##input##> Each property that you want to set (that was added to the ",(0,o.kt)("strong",{parentName:"td"},"Properties to set")," section above) will get it's own input both in the property panel and as a connection input.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{class:"ndl-data"},"Id Source")),(0,o.kt)("td",{parentName:"tr",align:null},"An Id of a record is needed to perform the action of this node. The ",(0,o.kt)("strong",{parentName:"td"},"Id Source")," property specifies how this Id is retrieved, the options are:",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"Specify explicitly"),": This means you need to specify the Id of the record explicitly through e.g. a connection to the ",(0,o.kt)("strong",{parentName:"td"},"Id")," input.",(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"From repeater"),": This means that the Id for the record will be derived from a repeater. This option is only valid if the component this node is placed in is created by a repeater. Then this node will act on the repeater object that this component was created for.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{class:"ndl-data"},"Id")),(0,o.kt)("td",{parentName:"tr",align:null},"On this input you provide the ",(0,o.kt)("strong",{parentName:"td"},"Id")," of the object where you will set the properties.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{class:"ndl-signal"},"Do")),(0,o.kt)("td",{parentName:"tr",align:null},"Send a signal on this input to perform the action and set the properties.")))),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{class:"ndl-data"},"Id")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("strong",{parentName:"td"},"Id")," of the Object where you will / have set the properties. This is simply a mirror of the ",(0,o.kt)("strong",{parentName:"td"},"Id")," input.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{class:"ndl-signal"},"Done")),(0,o.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output when the action is performed. You can use this to trigger other actions that needs to run after the properties have been set.")))))}u.isMDXComponent=!0},99597:function(t,e,n){e.Z=n.p+"assets/images/prop-panel-12b50f07cf8612150e9c6ac481516355.png"},60119:function(t,e,n){e.Z=n.p+"assets/images/set-object-properties-f654ee665ea21211f264cdb6284f61d9.png"}}]);