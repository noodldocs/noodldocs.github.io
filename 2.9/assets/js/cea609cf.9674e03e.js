"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[4985],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={hide_title:!0,hide_table_of_contents:!0,title:"And"},o=void 0,i={unversionedId:"logic/and/README",id:"logic/and/README",title:"And",description:"This node performs a logic AND operation on its inputs. If all inputs are true the node will output true. If any input is false the node will output false.",source:"@site/nodes/logic/and/README.md",sourceDirName:"logic/and",slug:"/logic/and/",permalink:"/2.9/nodes/logic/and/",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"And"},sidebar:"nodeSidebar",previous:{title:"Switch",permalink:"/2.9/nodes/logic/switch/"},next:{title:"Or",permalink:"/2.9/nodes/logic/or/"}},p={},s=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],u={toc:s},d="wrapper";function c(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"and"},"And"),(0,r.kt)("p",null,"This node performs a logic AND operation on its inputs. If all inputs are ",(0,r.kt)("span",{className:"ndl-data"},"true")," the node will output ",(0,r.kt)("span",{className:"ndl-data"},"true"),". If any input is ",(0,r.kt)("span",{className:"ndl-data"},"false")," the node will output ",(0,r.kt)("span",{className:"ndl-data"},"false"),"."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(16167).Z,width:"1011",height:"483"}))),(0,r.kt)("p",null,"Any number of inputs can be used. When an input is connected a new one will be created automatically."),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Input 0..N")),(0,r.kt)("td",{parentName:"tr",align:null},"The inputs are numbered as ",(0,r.kt)("em",{parentName:"td"},"Input 0"),",",(0,r.kt)("em",{parentName:"td"},"Input 1")," etc. Whenever you connect to an input a new one is created so you will never run out of inputs.")))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Result")),(0,r.kt)("td",{parentName:"tr",align:null},"The result of a logic AND operation on all of the inputs. Either ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),". ",(0,r.kt)("inlineCode",{parentName:"td"},"True")," if all inputs are ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," if one or more inputs are ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),".")))))}c.isMDXComponent=!0},16167:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/and_node-c0d124c3b66688637e07e1e88c4c079c.png"}}]);