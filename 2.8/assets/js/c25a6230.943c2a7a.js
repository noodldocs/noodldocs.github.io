"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[5845],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,v=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(v,l(l({ref:t},c),{},{components:n})):a.createElement(v,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45733:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=["components"],o={hide_title:!0,hide_table_of_contents:!0,title:"Receive Event"},s=void 0,d={unversionedId:"events/receive-event",id:"events/receive-event",title:"Receive Event",description:"This node is used to receive a signal triggered by a Send Event node. To learn more about Events check out the Events Guide.",source:"@site/nodes/events/receive-event.md",sourceDirName:"events",slug:"/events/receive-event",permalink:"/2.8/nodes/events/receive-event",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Receive Event"},sidebar:"nodeSidebar",previous:{title:"Send Event",permalink:"/2.8/nodes/events/send-event"},next:{title:"Substring",permalink:"/2.8/nodes/string-manipulation/substring"}},c={},p=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],u={toc:p};function m(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"is-hidden"},""),(0,i.kt)("h1",{id:"receive-event"},"Receive Event"),(0,i.kt)("p",null,"This node is used to receive a signal triggered by a ",(0,i.kt)("span",{className:"ndl-node"},"Send Event")," node. To learn more about ",(0,i.kt)("strong",{parentName:"p"},"Events")," check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/business-logic/events"},"Events Guide"),"."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(97887).Z,width:"900",height:"296"}))),(0,i.kt)("p",null,"The ",(0,i.kt)("span",{className:"ndl-node"},"Send Event")," node lets you specify a channel to broadcast to. All ",(0,i.kt)("span",{className:"ndl-node"},"Receive Event")," nodes set to that channel will be triggered simultaneously.\n"),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Enabled")),(0,i.kt)("td",{parentName:"tr",align:null},"This port is used to disable/enable this node. If disabled the receiver node will not be activated when the corresponding ",(0,i.kt)("a",{parentName:"td",href:"/nodes/events/send-event"},"Send Event")," node is triggered.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Consume")),(0,i.kt)("td",{parentName:"tr",align:null},"This property specified if and how the event is consumed when captured by this receive event node.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Channel")),(0,i.kt)("td",{parentName:"tr",align:null},"Each ",(0,i.kt)("strong",{parentName:"td"},"Receive Event")," node must listen to a specific channel. This means that when a ","[Send Event][/nodes/events/send-event]"," node of that channel is triggered all ",(0,i.kt)("strong",{parentName:"td"},"Receive Event")," nodes with the same channel will be triggered as well (depending on the propagation, please review the ",(0,i.kt)("a",{parentName:"td",href:"/docs/guides/business-logic/events"},"Events guide")," for more details).")))),(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Mixed"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Custom Outputs")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("strong",{parentName:"td"},"Receive Event")," node will automatically get outputs from all ","[Send Event][0]"," nodes connected to the same channel. See the ","[Send Event][0]"," documentation for more details on adding ports for sending values with events.")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Signal"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-signal"},"Received")),(0,i.kt)("td",{parentName:"tr",align:null},"This is a signal port, it is triggered when a signal is triggered in any ",(0,i.kt)("strong",{parentName:"td"},"Send Event")," node with the same channel as this ",(0,i.kt)("strong",{parentName:"td"},"Receive Event")," node.")))))}m.isMDXComponent=!0},97887:function(e,t,n){t.Z=n.p+"assets/images/receive-event-921395b775c7a8598401e4ba757c601a.png"}}]);