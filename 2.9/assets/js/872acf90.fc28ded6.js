"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[6049],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47558:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={hide_title:!0,hide_table_of_contents:!0,title:"Or"},u=void 0,p={unversionedId:"logic/or",id:"logic/or",title:"Or",description:"This node performs a logic OR operation on its inputs. If any input is true the node will output true. If all inputs are false the node will output false.",source:"@site/nodes/logic/or.md",sourceDirName:"logic",slug:"/logic/or",permalink:"/2.9/nodes/logic/or",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Or"},sidebar:"nodeSidebar",previous:{title:"And",permalink:"/2.9/nodes/logic/and"},next:{title:"Condition",permalink:"/2.9/nodes/utilities/logic/condition"}},s={},c=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],d={toc:c};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h1",{id:"or"},"Or"),(0,o.kt)("p",null,"This node performs a logic OR operation on its inputs. If any input is ",(0,o.kt)("span",{className:"ndl-data"},"true")," the node will output ",(0,o.kt)("span",{className:"ndl-data"},"true"),". If all inputs are ",(0,o.kt)("span",{className:"ndl-data"},"false")," the node will output ",(0,o.kt)("span",{className:"ndl-data"},"false"),"."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(77562).Z,width:"1011",height:"483"}))),(0,o.kt)("p",null,"Any number of inputs can be used. When an input is connected a new one will be created automatically."),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Input 0..N")),(0,o.kt)("td",{parentName:"tr",align:null},"The inputs are numbered as ",(0,o.kt)("em",{parentName:"td"},"Input 0"),",",(0,o.kt)("em",{parentName:"td"},"Input 1")," etc. Whenever you connect to an input a new one is created so you will never run out of inputs.")))),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Result")),(0,o.kt)("td",{parentName:"tr",align:null},"The result of a logic OR operation on all of the inputs. Either ",(0,o.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"false"),". ",(0,o.kt)("inlineCode",{parentName:"td"},"True")," if at least one input is ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"false")," if all inputs are ",(0,o.kt)("inlineCode",{parentName:"td"},"false"),".")))))}m.isMDXComponent=!0},77562:function(e,t,n){t.Z=n.p+"assets/images/or_node-560a9aa0c276063e4d35299527887f56.png"}}]);