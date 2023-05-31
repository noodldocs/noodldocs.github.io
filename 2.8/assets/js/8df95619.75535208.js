"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[7930],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),s=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),m=s(a),h=l,k=m["".concat(o,".").concat(h)]||m[h]||u[h]||r;return a?n.createElement(k,i(i({ref:e},p),{},{components:a})):n.createElement(k,i({ref:e},p))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=h;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d[m]="string"==typeof t?t:l,i[1]=d;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},87722:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var n=a(87462),l=(a(67294),a(3905));const r={hide_title:!0,hide_table_of_contents:!0,title:"Drag"},i=void 0,d={unversionedId:"utilities/drag",id:"utilities/drag",title:"Drag",description:"The drag node is used to make visual nodes draggable with the mouse or touch. The child of a Drag node automatically become draggable.",source:"@site/nodes/utilities/drag.md",sourceDirName:"utilities",slug:"/utilities/drag",permalink:"/2.8/nodes/utilities/drag",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Drag"},sidebar:"nodeSidebar",previous:{title:"Counter",permalink:"/2.8/nodes/math/counter"},next:{title:"Animate To Value",permalink:"/2.8/nodes/logic/animate-to-value"}},o={},s=[{value:"Inputs",id:"inputs",level:2},{value:"Snap To Position X",id:"snap-to-position-x",level:3},{value:"Snap To Position Y",id:"snap-to-position-y",level:3},{value:"Drag",id:"drag-1",level:3},{value:"Other",id:"other",level:3},{value:"Visual",id:"visual",level:3},{value:"Outputs",id:"outputs",level:2},{value:"Other",id:"other-1",level:3},{value:"Bounding Box",id:"bounding-box",level:3},{value:"Mounted",id:"mounted",level:3},{value:"Signals",id:"signals",level:3},{value:"Values",id:"values",level:3}],p={toc:s},m="wrapper";function u(t){let{components:e,...r}=t;return(0,l.kt)(m,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h1",{id:"drag"},"Drag"),(0,l.kt)("p",null,"The drag node is used to make visual nodes draggable with the mouse or touch. The child of a ",(0,l.kt)("strong",{parentName:"p"},"Drag")," node automatically become draggable."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The Drag node can only have one child, but that child can have many children.")),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:a(63546).Z,width:"686",height:"218"}))),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("h3",{id:"snap-to-position-x"},"Snap To Position X"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Do")),(0,l.kt)("td",{parentName:"tr",align:null},"Send a signal here to trigger a snap to the position specified by ",(0,l.kt)("em",{parentName:"td"},"Value")," and with the transition duration specified by ",(0,l.kt)("em",{parentName:"td"},"Duration"),".")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Value")),(0,l.kt)("td",{parentName:"tr",align:null},"This is the X value the the snap action will have as destination when triggered.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Duration")),(0,l.kt)("td",{parentName:"tr",align:null},"The snap transition duration.")))),(0,l.kt)("h3",{id:"snap-to-position-y"},"Snap To Position Y"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Do")),(0,l.kt)("td",{parentName:"tr",align:null},"Send a signal here to trigger a snap to the position specified by ",(0,l.kt)("em",{parentName:"td"},"Value")," and with the transition duration specified by ",(0,l.kt)("em",{parentName:"td"},"Duration"),".")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Value")),(0,l.kt)("td",{parentName:"tr",align:null},"This is the Y value the the snap action will have as destination when triggered.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Duration")),(0,l.kt)("td",{parentName:"tr",align:null},"The snap transition duration.")))),(0,l.kt)("h3",{id:"drag-1"},"Drag"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Enable")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables or disables this node. If it is disabled, drag will not have any affect on child nodes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Axis")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies along which axes the drag will work",(0,l.kt)("br",null),"a",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"X"),": Only horizontal drag is enabled.",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"Y"),": Only vertical drag is enabled.",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"Both"),": Both horizontal and vertical drag is enabled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Constrain to parent")),(0,l.kt)("td",{parentName:"tr",align:null},"If enabled the child nodes being dragged will be constrained to the borders of the parent node so they cannot be dragged outside of the parent bounds.")))),(0,l.kt)("h3",{id:"other"},"Other"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Start Drag X")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the X position that will be used as the starting point. Setting this will force the child nodes to the specified position.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Start Drag Y")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the Y position that will be used as the starting point. Setting this will force the child nodes to the specified position.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Scale")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the move scale that will be used when dragging the node around. This can correct the drag deltas while you are zoomed in or out.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Mounted")),(0,l.kt)("td",{parentName:"tr",align:null},"This property is used to completely remove the node from the DOM. If this property is set to false the node is removed from the DOM. It differs from the ",(0,l.kt)("em",{parentName:"td"},"Visible")," property where the node is still part of the DOM but invisible.")))),(0,l.kt)("h3",{id:"visual"},"Visual"),(0,l.kt)("p",null,"This node supports the following ",(0,l.kt)("a",{parentName:"p",href:"/nodes/shared-props/inputs/visual-input-properties"},"Visual Input Properties"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#advanced-style"},"Advanced Style"))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("h3",{id:"other-1"},"Other"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Child Index")),(0,l.kt)("td",{parentName:"tr",align:null},"The place this node has in relation to its parent. E.g. if a ",(0,l.kt)("strong",{parentName:"td"},"Group")," has three children, then the first child will have ",(0,l.kt)("em",{parentName:"td"},"Child Index")," 0, the second child will have ",(0,l.kt)("em",{parentName:"td"},"Child Index")," 1, and so on.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"This")),(0,l.kt)("td",{parentName:"tr",align:null},"A reference to this node. Used in custom ",(0,l.kt)("strong",{parentName:"td"},"Javascript")," nodes and more.")))),(0,l.kt)("h3",{id:"bounding-box"},"Bounding Box"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Screen Position X")),(0,l.kt)("td",{parentName:"tr",align:null},"Where this node is on the screen's X-axis, in pixels.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Screen Position Y")),(0,l.kt)("td",{parentName:"tr",align:null},"Where this node is on the screen's Y-axis, in pixels.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Width")),(0,l.kt)("td",{parentName:"tr",align:null},"Current width of this node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Height")),(0,l.kt)("td",{parentName:"tr",align:null},"Current height of this node.")))),(0,l.kt)("h3",{id:"mounted"},"Mounted"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Did Mount")),(0,l.kt)("td",{parentName:"tr",align:null},"Signal sent when this node has been mounted, i.e. has become part of the visual tree and is visible.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Will Unmount")),(0,l.kt)("td",{parentName:"tr",align:null},"Signal sent when this node is about to be removed from the visual tree and become hidden.")))),(0,l.kt)("h3",{id:"signals"},"Signals"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Drag Started")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when dragging of a child is detected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Drag Ended")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when dragging stopped.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Drag Moved")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted while a child node is being moved during the drag.")))),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Drag X")),(0,l.kt)("td",{parentName:"tr",align:null},"The current X position of the dragged node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Drag Y")),(0,l.kt)("td",{parentName:"tr",align:null},"The current Y position of the dragged node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Delta X")),(0,l.kt)("td",{parentName:"tr",align:null},"The horizontal distance a node has been dragged from its last horizontal position. Measured in ",(0,l.kt)("inlineCode",{parentName:"td"},"px"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Delta Y")),(0,l.kt)("td",{parentName:"tr",align:null},"The vertical distance a node has been dragged from its last vertical position. Measured in ",(0,l.kt)("inlineCode",{parentName:"td"},"px"),".")))))}u.isMDXComponent=!0},63546:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/drag-e21be4f2f2aed84bcee503546e82b8f3.png"}}]);