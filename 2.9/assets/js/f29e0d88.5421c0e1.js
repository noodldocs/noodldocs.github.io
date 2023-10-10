"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[4352],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,m=u["".concat(s,".").concat(c)]||u[c]||h[c]||l;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9416:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={hide_title:!0,hide_table_of_contents:!0,title:"Variable node"},i=void 0,o={unversionedId:"data/variable/variable-node/README",id:"data/variable/variable-node/README",title:"Variable node",description:"Use this node to store a single data variable that will be globally accessible throughout the application. Variable works in a similar way as Object but can only store one value.",source:"@site/nodes/data/variable/variable-node/README.md",sourceDirName:"data/variable/variable-node",slug:"/data/variable/variable-node/",permalink:"/2.9/nodes/data/variable/variable-node/",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Variable node"},sidebar:"nodeSidebar",previous:{title:"Set Variable node",permalink:"/2.9/nodes/data/variable/set-variable/"},next:{title:"Run Tasks node",permalink:"/2.9/nodes/data/run-tasks/"}},s={},d=[{value:"Storing a value",id:"storing-a-value",level:2},{value:"Use a stored value",id:"use-a-stored-value",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],p={toc:d},u="wrapper";function h(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"variable"},"Variable"),(0,r.kt)("p",null,"Use this node to store a single data variable that will be globally accessible throughout the application. ",(0,r.kt)("strong",{parentName:"p"},"Variable")," works in a similar way as ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/object/object-node"},"Object")," but can only store one value."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1678).Z,width:"936",height:"592"}))),(0,r.kt)("p",null,"The value can be dynamically stored, either by passing it a new value or by sending ",(0,r.kt)("span",{className:"ndl-signal"},"signals")," to the ",(0,r.kt)("span",{className:"ndl-node"},(0,r.kt)("a",{parentName:"p",href:"/nodes/data/variable/set-variable"},"Set Variable"))," node."),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h2",{id:"storing-a-value"},"Storing a value"),(0,r.kt)("p",null,"Give the Variable a name with the ",(0,r.kt)("strong",{parentName:"p"},"Name")," input and simply connect to ",(0,r.kt)("strong",{parentName:"p"},"Value"),", whenever the input connection is updated the value will be stored in the variable. You can also use the ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/variable/set-variable"},"Set Variable")," node to update tha value of a ",(0,r.kt)("strong",{parentName:"p"},"Variable"),". In this case, you control when the value is stored by sending a signal to the ",(0,r.kt)("span",{className:"ndl-signal"},"Do")," action."),(0,r.kt)("h2",{id:"use-a-stored-value"},"Use a stored value"),(0,r.kt)("p",null,"When a value is stored in a variable you can use it somewhere else in your application simply be creating a new node and giving it the same ",(0,r.kt)("strong",{parentName:"p"},"Name")," and connecting the ",(0,r.kt)("strong",{parentName:"p"},"Value")," property."),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Name")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the ",(0,r.kt)("strong",{parentName:"td"},"Variable"),". All ",(0,r.kt)("strong",{parentName:"td"},"Variable")," nodes with the same name will share the same data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Value")),(0,r.kt)("td",{parentName:"tr",align:null},"The value that you want the ",(0,r.kt)("strong",{parentName:"td"},"Variable")," to get. You will connect your data to this input. The value of the ",(0,r.kt)("strong",{parentName:"td"},"Variable")," will change when the data changes. If you want to control more precisely when the value should be updated, you should use the ",(0,r.kt)("a",{parentName:"td",href:"/nodes/data/variable/set-variable"},"Set Variable")," node.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Fetch")),(0,r.kt)("td",{parentName:"tr",align:null},"Normally the value output of the node is updated once the ",(0,r.kt)("strong",{parentName:"td"},"Name")," input is set and if there is a change in the data from somewhere in the graph. However, if this signal has a connection it will wait until it gets a signal on ",(0,r.kt)("strong",{parentName:"td"},"Fetch")," before it updates.")))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Value")),(0,r.kt)("td",{parentName:"tr",align:null},"The current value of this ",(0,r.kt)("strong",{parentName:"td"},"Variable")," node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Name")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the ",(0,r.kt)("strong",{parentName:"td"},"Variable"),".")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Changed")),(0,r.kt)("td",{parentName:"tr",align:null},"This signal is sent when the ",(0,r.kt)("strong",{parentName:"td"},"Value")," of this ",(0,r.kt)("strong",{parentName:"td"},"Variable")," has changed. Note: The signal triggers when any ",(0,r.kt)("strong",{parentName:"td"},"Variable")," with the same ",(0,r.kt)("strong",{parentName:"td"},"Name")," is changed, i.e. it triggers when the underlying data has changed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Fetched")),(0,r.kt)("td",{parentName:"tr",align:null},"Signal when the data of this ",(0,r.kt)("strong",{parentName:"td"},"Variable")," node has been fetched and updated, either as a response to the ",(0,r.kt)("strong",{parentName:"td"},"Fetch")," input signal (when it has completed and the output ",(0,r.kt)("strong",{parentName:"td"},"Value")," is updated), or when the ",(0,r.kt)("strong",{parentName:"td"},"Name")," of the variable have changed.")))))}h.isMDXComponent=!0},1678:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/variable-1-893ac1bc391a8c5e5b2512437fc462a1.png"}}]);