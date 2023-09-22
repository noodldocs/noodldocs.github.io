"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[23],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>h});var n=a(67294);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,s=function(t,e){if(null==t)return{};var a,n,s={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(s[a]=t[a]);return s}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,s=t.mdxType,l=t.originalType,o=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=d(a),m=s,h=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(h,r(r({ref:e},p),{},{components:a})):n.createElement(h,r({ref:e},p))}));function h(t,e){var a=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var l=a.length,r=new Array(l);r[0]=m;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[c]="string"==typeof t?t:s,r[1]=i;for(var d=2;d<l;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},98830:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(87462),s=(a(67294),a(3905));const l={hide_title:!0,hide_table_of_contents:!0,title:"States"},r=void 0,i={unversionedId:"utilities/logic/states/README",id:"utilities/logic/states/README",title:"States",description:"This node is used to switch between logical states. Each state holds values that can be transitioned between. You can define as many states and values as needed.",source:"@site/nodes/utilities/logic/states/README.md",sourceDirName:"utilities/logic/states",slug:"/utilities/logic/states/",permalink:"/2.9/nodes/utilities/logic/states/",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"States"},sidebar:"nodeSidebar",previous:{title:"Close Popup",permalink:"/2.9/nodes/popups/close-popup/"},next:{title:"Value Changed",permalink:"/2.9/nodes/logic/value-changed/"}},o={},d=[{value:"Inputs",id:"inputs",level:2},{value:"Value types",id:"value-types",level:3},{value:"State values",id:"state-values",level:3},{value:"State transition",id:"state-transition",level:3},{value:"To state actions",id:"to-state-actions",level:3},{value:"Outputs",id:"outputs",level:2}],p={toc:d},c="wrapper";function u(t){let{components:e,...l}=t;return(0,s.kt)(c,(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",{className:"is-hidden"},""),(0,s.kt)("h1",{id:"states"},"States"),(0,s.kt)("p",null,"This node is used to switch between logical states. Each state holds values that can be transitioned between. You can define as many states and values as needed."),(0,s.kt)("div",{className:"ndl-image-with-background l"},(0,s.kt)("p",null,(0,s.kt)("img",{src:a(69383).Z,width:"674",height:"241"}))),(0,s.kt)("p",null,"The ",(0,s.kt)("span",{className:"ndl-node"},"State")," node is often used to create animations on user interactions, and create state machines. Learn more in the State Node Guide."),(0,s.kt)("div",{className:"ndl-image-with-background l"},(0,s.kt)("p",null,(0,s.kt)("img",{src:a(61462).Z,width:"674",height:"241"}))),(0,s.kt)("p",{className:"is-hidden"},""),(0,s.kt)("p",null,"To learn more take a look at the ",(0,s.kt)("a",{parentName:"p",href:"/docs/guides/user-interfaces/states"},"States guide"),"."),(0,s.kt)("h2",{id:"inputs"},"Inputs"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Data"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{className:"ndl-data"},"States")),(0,s.kt)("td",{parentName:"tr",align:null},"A ",(0,s.kt)("strong",{parentName:"td"},"States")," node can have as many states as is necessary. Add a new state by clicking on the plus button.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{className:"ndl-data"},"Values")),(0,s.kt)("td",{parentName:"tr",align:null},"Every state will have its own set of values. All values need to be set for every state that is added.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{className:"ndl-data"},"State")),(0,s.kt)("td",{parentName:"tr",align:null},"This input controls the current state. By setting this input to the same name as one of the available states, ",(0,s.kt)("strong",{parentName:"td"},"State")," node will change to that state.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{className:"ndl-data"},"Use Transitions")),(0,s.kt)("td",{parentName:"tr",align:null},"Setting this to ",(0,s.kt)("span",{className:"ndl-data"},"true")," will turn on transitions when moving between states, while ",(0,s.kt)("span",{className:"ndl-data"},"false")," will turn them off. ")))),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Signal"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{className:"ndl-signal"},"Toggle")),(0,s.kt)("td",{parentName:"tr",align:null},"Triggering this signal will force the ",(0,s.kt)("strong",{parentName:"td"},"State")," node to move to the next state in its state list, or the first state if the current state is the last one.")))),(0,s.kt)("h3",{id:"value-types"},"Value types"),(0,s.kt)("p",null,"For each value you can specify the type. Default is ",(0,s.kt)("strong",{parentName:"p"},"Number"),"."),(0,s.kt)("div",{className:"ndl-image-with-background"},(0,s.kt)("img",{src:"/nodes/animation/states-value-types.png",className:"ndl-image small"})),(0,s.kt)("h3",{id:"state-values"},"State values"),(0,s.kt)("p",null,"For every state you can specify each of the values. This is the value that they will have when you are at that specific state. You can also set the values for each state by connecting them to other nodes."),(0,s.kt)("span",{className:"hidden-props-for-editor"},"The value of a property for a specific state."),(0,s.kt)("div",{className:"ndl-image-with-background"},(0,s.kt)("img",{src:"/nodes/animation/state-values.png",className:"ndl-image small"})),(0,s.kt)("h3",{id:"state-transition"},"State transition"),(0,s.kt)("p",null,"Here you specify if there should be a transition to the target state. When you switch to the given state it will transition smoothely over time. Each state has a default transition and individual transitions for ",(0,s.kt)("strong",{parentName:"p"},"Number")," and ",(0,s.kt)("strong",{parentName:"p"},"Color")," types. Use the curve editor to specify the timing for the transition."),(0,s.kt)("div",{className:"ndl-image-with-background"},(0,s.kt)("img",{src:"/guides/states/change-size-curve.gif",className:"ndl-image med"})),(0,s.kt)("p",null,"To learn more take a look at the ",(0,s.kt)("a",{parentName:"p",href:"/docs/guides/user-interfaces/states"},"States guide"),"."),(0,s.kt)("h3",{id:"to-state-actions"},"To state actions"),(0,s.kt)("p",null,"Each state will have a signal input called ",(0,s.kt)("strong",{parentName:"p"},"To")," followed by the state name. This can be used to connect a signal that will take the states node to that state when the signal is triggered."),(0,s.kt)("span",{className:"hidden-props-for-editor"},"Triggers the **State** node to move to this state."),(0,s.kt)("h2",{id:"outputs"},"Outputs"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Data"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{className:"ndl-data"},"State")),(0,s.kt)("td",{parentName:"tr",align:null},"The name of the current state.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{className:"ndl-data"},"Values")),(0,s.kt)("td",{parentName:"tr",align:null},"All of the values for the current state and for any transitions that is active.")))),(0,s.kt)("span",{className:"hidden-props-for-editor"},"The value of the property, given the current state and transition."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Signal"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{className:"ndl-signal"},"State Changed")),(0,s.kt)("td",{parentName:"tr",align:null},"A signal that is sent when the current state is changed.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{className:"ndl-signal"},"At ",(0,s.kt)("inlineCode",{parentName:"td"},"[State Name]"))),(0,s.kt)("td",{parentName:"tr",align:null},"True when the currently selected state is ",(0,s.kt)("inlineCode",{parentName:"td"},"[State Name]"),". For example, if the ",(0,s.kt)("em",{parentName:"td"},"State")," node has a state ",(0,s.kt)("em",{parentName:"td"},"Started"),", it will have an output signal called ",(0,s.kt)("em",{parentName:"td"},"At Started"),".")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{className:"ndl-signal"},"Has Reached ",(0,s.kt)("inlineCode",{parentName:"td"},"[State Name]"))),(0,s.kt)("td",{parentName:"tr",align:null},"Signal sent when the state animation to state ",(0,s.kt)("inlineCode",{parentName:"td"},"[State Name]")," is complete.")))),(0,s.kt)("span",{className:"hidden-props-for-editor"},"This value is ",(0,s.kt)("span",{className:"ndl-data"},"true")," when this state is active, otherwise ",(0,s.kt)("span",{className:"ndl-data"},"false"),"."),(0,s.kt)("span",{className:"hidden-props-for-editor"},"This signal is sent when the specific state has been reached."))}u.isMDXComponent=!0},61462:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/states_node-5b2c3e3c5e2339c93f1dcde573dc6a35.gif"},69383:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/states_visual-a78a283482e8ad14f735fbe69ea21d27.gif"}}]);