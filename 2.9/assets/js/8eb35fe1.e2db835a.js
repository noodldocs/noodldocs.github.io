"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[2489],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},50722:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=["components"],o={hide_title:!0,hide_table_of_contents:!0,title:"Inverter"},s=void 0,u={unversionedId:"logic/inverter",id:"logic/inverter",title:"Inverter",description:"This node changes true values to be false, and false values to be true. It is identical to a logic NOT operation.",source:"@site/nodes/logic/inverter.md",sourceDirName:"logic",slug:"/logic/inverter",permalink:"/2.9/nodes/logic/inverter",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Inverter"},sidebar:"nodeSidebar",previous:{title:"Condition",permalink:"/2.9/nodes/utilities/logic/condition"},next:{title:"Send Event",permalink:"/2.9/nodes/events/send-event"}},c={},d=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Advanced",id:"advanced",level:2}],p={toc:d};function m(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"is-hidden"},""),(0,i.kt)("h1",{id:"inverter"},"Inverter"),(0,i.kt)("p",null,"This node changes ",(0,i.kt)("span",{className:"ndl-data"},"true")," values to be ",(0,i.kt)("span",{className:"ndl-data"},"false"),", and ",(0,i.kt)("span",{className:"ndl-data"},"false")," values to be ",(0,i.kt)("span",{className:"ndl-data"},"true"),". It is identical to a logic NOT operation."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(64257).Z,width:"1011",height:"360"}))),(0,i.kt)("p",null,"The ",(0,i.kt)("span",{className:"ndl-node"},"Inverter")," node runs JavaScript in the background and interprets truthy and falsy values in the same fashion. It is equal to creating an ",(0,i.kt)("span",{className:"ndl-node"},"Expression")," node with the expression ",(0,i.kt)("inlineCode",{parentName:"p"},"!value"),"."),(0,i.kt)("p",{className:"is-hidden"},""),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Value")),(0,i.kt)("td",{parentName:"tr",align:null},"The value to invert.")))),(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Result")),(0,i.kt)("td",{parentName:"tr",align:null},"The result of inverting the input ",(0,i.kt)("em",{parentName:"td"},"Value"),". This is equal to either ",(0,i.kt)("em",{parentName:"td"},"True")," or ",(0,i.kt)("em",{parentName:"td"},"False"))))),(0,i.kt)("h2",{id:"advanced"},"Advanced"),(0,i.kt)("p",null,"The inverter is equal to creating the following expression:\n",(0,i.kt)("inlineCode",{parentName:"p"},"!value")," ."))}m.isMDXComponent=!0},64257:function(e,t,n){t.Z=n.p+"assets/images/inverter_node-03edfbbc949c71e576ed0250d5d51be8.png"}}]);