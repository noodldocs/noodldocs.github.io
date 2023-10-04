"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[5623],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),u=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,i(i({ref:e},p),{},{components:n})):a.createElement(h,i({ref:e},p))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[c]="string"==typeof t?t:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17557:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={hide_title:!0,hide_table_of_contents:!0,title:"Function node"},i=void 0,s={unversionedId:"javascript/function/README",id:"javascript/function/README",title:"Function node",description:"This node enables you to add simpler custom JavaScript to your application.",source:"@site/nodes/javascript/function/README.md",sourceDirName:"javascript/function",slug:"/javascript/function/",permalink:"/2.9/nodes/javascript/function/",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Function node"},sidebar:"nodeSidebar",previous:{title:"Expression node",permalink:"/2.9/nodes/math/expression/"},next:{title:"Script node",permalink:"/2.9/nodes/javascript/script/"}},l={},u=[{value:"Custom inputs and outputs",id:"custom-inputs-and-outputs",level:2},{value:"Signal outputs",id:"signal-outputs",level:2},{value:"Controlled execution",id:"controlled-execution",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],p={toc:u},c="wrapper";function d(t){let{components:e,...o}=t;return(0,r.kt)(c,(0,a.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"function"},"Function"),(0,r.kt)("p",null,"This node enables you to add simpler custom JavaScript to your application."),(0,r.kt)("p",null,"Runs the Javascript:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'When any inputs are updated (if "Run" is not connected to anything)'),(0,r.kt)("li",{parentName:"ul"},'When "Run" is called')),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(81805).Z,width:"1534",height:"356"}))),(0,r.kt)("p",null,"The code runs from top to bottom.\nFor more complex custom JavaScript with multiple executon paths and extended control you should use the ",(0,r.kt)("span",{className:"ndl-node"},"Script")," node."),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("p",null,"The most basic way to use the node is as an expression,\nany time the inputs are changed the script is run and the outputs are updated.\nE.g. the example above can be used as shown below."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(21518).Z,width:"1278",height:"358"}))),(0,r.kt)("h2",{id:"custom-inputs-and-outputs"},"Custom inputs and outputs"),(0,r.kt)("p",null,"In your function script you can use the ",(0,r.kt)("strong",{parentName:"p"},"Inputs")," and ",(0,r.kt)("strong",{parentName:"p"},"Outputs")," object and any properties of these objects that you use in your script will automatically create input and outputs ports.\nSo the following script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'Outputs.FullName = Inputs.FirstName + " " + Inputs.LastName;\n')),(0,r.kt)("p",null,"Will create the output ",(0,r.kt)("strong",{parentName:"p"},"FullName")," and the inputs ",(0,r.kt)("strong",{parentName:"p"},"FirstName")," and ",(0,r.kt)("strong",{parentName:"p"},"LastName"),".\nAnother option is to explicitly specify the inputs and outputs in the properties of the node.\nThis will allow you to explicitly specify the types of the inputs and outputs.\nThis can be especially useful if the node is connected to ",(0,r.kt)("strong",{parentName:"p"},"Component Inputs")," or ",(0,r.kt)("strong",{parentName:"p"},"Component Outputs"),"."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(24087).Z,width:"556",height:"596"}))),(0,r.kt)("h2",{id:"signal-outputs"},"Signal outputs"),(0,r.kt)("p",null,"If you want to send a signal from your ",(0,r.kt)("strong",{parentName:"p"},"Function")," script you can use an output as a function instead of assigning it a value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"if (Inputs.Test === true) {\n  Outputs.TestIsTrue();\n} else {\n  Outputs.TestIsFalse();\n}\n")),(0,r.kt)("p",null,"The code above will automatically create two outputs ",(0,r.kt)("strong",{parentName:"p"},"TestIsTrue")," and ",(0,r.kt)("strong",{parentName:"p"},"TestIsFalse")," that are signals.\nWhen the inputs are changed and the code is run the node will send a signal on either depending on the content of the ",(0,r.kt)("strong",{parentName:"p"},"Test")," input."),(0,r.kt)("h2",{id:"controlled-execution"},"Controlled execution"),(0,r.kt)("p",null,"Normally the script is run when any of the inputs change, i.e.\nreceive new data via connections, but you can also control when the function is run with the ",(0,r.kt)("strong",{parentName:"p"},"Run")," signal input.\nIf this input has a connection the script will only run when a signal is received."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(94865).Z,width:"1022",height:"388"}))),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Script Inputs")),(0,r.kt)("td",{parentName:"tr",align:null},"Here you can list inputs to the function and specify types for the inputs as described above. For each input specified or simply used in the function code an input to the node will be created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Script Outputs")),(0,r.kt)("td",{parentName:"tr",align:null},"Here you can list outputs to the function and specify types for the outputs as described above. For each output specified or simply used in the function code an input to the node will be created.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Run")),(0,r.kt)("td",{parentName:"tr",align:null},"Send a signal here to run the function. If this input has a connection the function script will not run when inputs are changed.")))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Outputs")),(0,r.kt)("td",{parentName:"tr",align:null},"The outputs defined in the function script.")))))}d.isMDXComponent=!0},81805:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/function-1-4181caf3ea742feddcab5495e08ebe9c.png"},21518:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/function-2-9e2e88fa5cdc71dac73f5429e206eb66.png"},24087:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/function-3-eda0fe0c8a9df93c8fb8a67442667fde.png"},94865:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/function-4-cb4e3dec60bffd0a3f8787eead9e5d62.png"}}]);