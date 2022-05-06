"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[4536],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,l(l({ref:e},p),{},{components:n})):a.createElement(h,l({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},25952:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),l=["components"],i={hide_title:!0,hide_table_of_contents:!0,title:"String"},s=void 0,d={unversionedId:"data/string",id:"data/string",title:"String",description:"This node contains a string value (text). It can be provided with static data or be dynamically set from other nodes. The String node is often used to convert other data types to a string or to hold string values.",source:"@site/nodes/data/string.md",sourceDirName:"data",slug:"/data/string",permalink:"/2.6/nodes/data/string",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"String"},sidebar:"nodeSidebar",previous:{title:"Screen Resolution",permalink:"/2.6/nodes/utilities/screen-resolution"},next:{title:"Boolean",permalink:"/2.6/nodes/data/boolean"}},p={},u=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],c={toc:u};function m(t){var e=t.components,i=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h1",{id:"string"},"String"),(0,o.kt)("p",null,"This node contains a ",(0,o.kt)("span",{className:"ndl-data"},"string")," value (text). It can be provided with static data or be dynamically set from other nodes. The ",(0,o.kt)("span",{className:"ndl-node"},"String")," node is often used to convert other data types to a ",(0,o.kt)("span",{className:"ndl-data"},"string")," or to hold string values."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(25792).Z,width:"1011",height:"360"}))),(0,o.kt)("p",null,"You can also use the String node connected to a ",(0,o.kt)("span",{className:"ndl-node"},"Component Inputs")," node. This will make sure the input shows up as a ",(0,o.kt)("span",{className:"ndl-data"},"string")," input in the Property Panel for instances of this component."),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("p",null,"You can use it to provide a static value for input to other nodes. It is local to the component and cannot be accessed anywhere else in the graph."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("img",{src:"/nodes/data/string/local-string.png"})),(0,o.kt)("p",null,"You can simply connect to the ",(0,o.kt)("strong",{parentName:"p"},"Value")," input to set the value of the node when the connection is updated."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("img",{src:"/nodes/data/string/string-1.png"})),(0,o.kt)("p",null,"Using a variable node like above will make the ",(0,o.kt)("strong",{parentName:"p"},"Text")," component input show up as a string in the property editor of all instances of this component."),(0,o.kt)("p",null,"You can also use the ",(0,o.kt)("strong",{parentName:"p"},"Set")," input to control when the value of the variable node is updated. In the setup below the value is only updated when the ",(0,o.kt)("strong",{parentName:"p"},"Text Input")," node is blurred."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("img",{src:"/nodes/data/string/string-2.png"})),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Value")),(0,o.kt)("td",{parentName:"tr",align:null},"The value to store in the node. The output value will equal this value, unless ",(0,o.kt)("em",{parentName:"td"},"Set")," is connected, then the value will be passed to the output when a signal is sent to ",(0,o.kt)("em",{parentName:"td"},"Set"),".")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Set")),(0,o.kt)("td",{parentName:"tr",align:null},"This is used to only update the output when a signal is received. This will allow you to freeze the stored value and only allow it to update under certain conditions, e.g. on a Tap.")))),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Value")),(0,o.kt)("td",{parentName:"tr",align:null},"The string (text) stored in the node.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Length")),(0,o.kt)("td",{parentName:"tr",align:null},"The length of the string (text) stored in the node, i.e. the number of characters and spaces.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Stored")),(0,o.kt)("td",{parentName:"tr",align:null},"This port sends a signal when the value is updated via the ",(0,o.kt)("em",{parentName:"td"},"Set")," input.")))))}m.isMDXComponent=!0},25792:function(t,e,n){e.Z=n.p+"assets/images/string_node-fc69454c6535b5fadd395268f3f2a05a.png"}}]);