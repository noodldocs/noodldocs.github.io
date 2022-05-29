"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[8537],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14636:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={},s=void 0,d={unversionedId:"events/send-event",id:"events/send-event",title:"send-event",description:"This node sends a signal to another place in your app without having to connect the nodes directly. To learn more about Events check out the Events Guide.",source:"@site/nodes/events/send-event.md",sourceDirName:"events",slug:"/events/send-event",permalink:"/2.6/nodes/events/send-event",tags:[],version:"current",frontMatter:{},sidebar:"nodesSidebar",previous:{title:"inverter",permalink:"/2.6/nodes/logic/inverter"},next:{title:"receive-event",permalink:"/2.6/nodes/events/receive-event"}},p=[{value:"Inputs",id:"inputs",children:[],level:2}],c={toc:p};function u(e){var t=e.components,i=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,""),(0,l.kt)("h1",{id:"send-event"},"Send Event"),(0,l.kt)("p",null,"This node sends a ",(0,l.kt)("span",{class:"ndl-signal"},"signal")," to another place in your app without having to connect the nodes directly. To learn more about ",(0,l.kt)("strong",{parentName:"p"},"Events")," check out the ",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/business-logic/events"},"Events Guide"),"."),(0,l.kt)("div",{class:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(42267).Z,width:"854",height:"302"}))),(0,l.kt)("p",null,"The ",(0,l.kt)("span",{class:"ndl-node"},"Send Event")," node lets you specify a channel to broadcast to. When this node is triggered with a ",(0,l.kt)("span",{class:"ndl-signal"},"Send signal")," all ",(0,l.kt)("span",{class:"ndl-node"},"Receive Event")," nodes set to that channel will be triggered.\n"),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Mixed"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Custom Inputs")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Send Event")," nodes can have arbitrary input ports that will be passed on to the ",(0,l.kt)("a",{parentName:"td",href:"/nodes/events/receive-event"},"Receive Event")," nodes when the ",(0,l.kt)("em",{parentName:"td"},"Send")," signal is triggered. These ports can be added by inspecting the node and clicking the ",(0,l.kt)("em",{parentName:"td"},"Add port")," button.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Channel Name")),(0,l.kt)("td",{parentName:"tr",align:null},"The channel name can be any identifier and is used on the ",(0,l.kt)("a",{parentName:"td",href:"/nodes/events/receive-event"},"Receive Event")," nodes to connect a sender and receiver node.",(0,l.kt)("br",null),(0,l.kt)("br",null),"There may be multiple ",(0,l.kt)("strong",{parentName:"td"},"Send Event")," nodes with the same channel. In that case the receiving nodes listening to the channel will get a merged set of ports from all ",(0,l.kt)("strong",{parentName:"td"},"Send Event")," nodes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Send To")),(0,l.kt)("td",{parentName:"tr",align:null},"Controls what components the event will be sent to.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"Global"),": Send to all components",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"Parent"),": Send the event up the visual hierarchy to parent components.",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"Children"),": Send the events to all children of this component, and their descendants.",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"Siblings"),": Send the event to all siblings of this component in the visual hierarchy.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-signal"},"Send Event")),(0,l.kt)("td",{parentName:"tr",align:null},"Send a signal to this input to send the event. This is a signal port and when triggered the corresponding ",(0,l.kt)("a",{parentName:"td",href:"/nodes/events/receive-event"},"Receive Event")," nodes will be triggered as well.")))))}u.isMDXComponent=!0},42267:function(e,t,n){t.Z=n.p+"assets/images/send-event-287e48c31322b7b653ae2803b86428ba.png"}}]);