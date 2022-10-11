"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[5197],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),l=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,o(o({ref:e},p),{},{components:n})):a.createElement(h,o({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u.mdxType="string"==typeof t?t:r,o[1]=u;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87818:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],u={hide_title:!0,hide_table_of_contents:!0,title:"Function"},s=void 0,l={unversionedId:"javascript/function",id:"javascript/function",title:"Function",description:"This node enables you to add simpler custom JavaScript to your application.",source:"@site/nodes/javascript/function.md",sourceDirName:"javascript",slug:"/javascript/function",permalink:"/2.7/nodes/javascript/function",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Function"},sidebar:"nodeSidebar",previous:{title:"Expression",permalink:"/2.7/nodes/math/expression"},next:{title:"Script",permalink:"/2.7/nodes/javascript/script"}},p={},c=[{value:"Custom inputs and outputs",id:"custom-inputs-and-outputs",level:2},{value:"Signal outputs",id:"signal-outputs",level:2},{value:"Controlled execution",id:"controlled-execution",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],d={toc:c};function m(t){var e=t.components,u=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,u,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"is-hidden"},""),(0,i.kt)("h1",{id:"function"},"Function"),(0,i.kt)("p",null,"This node enables you to add simpler custom JavaScript to your application."),(0,i.kt)("p",null,"Runs the Javascript:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'When any inputs are updated (if "Run" is not connected to anything)'),(0,i.kt)("li",{parentName:"ul"},'When "Run" is called')),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(88322).Z,width:"1534",height:"356"}))),(0,i.kt)("p",null,"The code runs from top to bottom.\nFor more complex custom JavaScript with multiple executon paths and extended control you should use the ",(0,i.kt)("span",{className:"ndl-node"},"Script")," node."),(0,i.kt)("p",{className:"is-hidden"},""),(0,i.kt)("p",null,"The most basic way to use the node is as an expression,\nany time the inputs are changed the script is run and the outputs are updated.\nE.g. the example above can be used as shown below."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(63143).Z,width:"1278",height:"358"}))),(0,i.kt)("h2",{id:"custom-inputs-and-outputs"},"Custom inputs and outputs"),(0,i.kt)("p",null,"In your function script you can use the ",(0,i.kt)("strong",{parentName:"p"},"Inputs")," and ",(0,i.kt)("strong",{parentName:"p"},"Outputs")," object and any properties of these objects that you use in your script will automatically create input and outputs ports.\nSo the following script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'Outputs.FullName = Inputs.FirstName + " " + Inputs.LastName;\n')),(0,i.kt)("p",null,"Will create the output ",(0,i.kt)("strong",{parentName:"p"},"FullName")," and the inputs ",(0,i.kt)("strong",{parentName:"p"},"FirstName")," and ",(0,i.kt)("strong",{parentName:"p"},"LastName"),".\nAnother option is to explicitly specify the inputs and outputs in the properties of the node.\nThis will allow you to explicitly specify the types of the inputs and outputs.\nThis can be especially useful if the node is connected to ",(0,i.kt)("strong",{parentName:"p"},"Component Inputs")," or ",(0,i.kt)("strong",{parentName:"p"},"Component Outputs"),"."),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(31249).Z,width:"556",height:"596"}))),(0,i.kt)("h2",{id:"signal-outputs"},"Signal outputs"),(0,i.kt)("p",null,"If you want to send a signal from your ",(0,i.kt)("strong",{parentName:"p"},"Function")," script you can use an output as a function instead of assigning it a value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"if (Inputs.Test === true) {\n  Outputs.TestIsTrue();\n} else {\n  Outputs.TestIsFalse();\n}\n")),(0,i.kt)("p",null,"The code above will automatically create two outputs ",(0,i.kt)("strong",{parentName:"p"},"TestIsTrue")," and ",(0,i.kt)("strong",{parentName:"p"},"TestIsFalse")," that are signals.\nWhen the inputs are changed and the code is run the node will send a signal on either depending on the content of the ",(0,i.kt)("strong",{parentName:"p"},"Test")," input."),(0,i.kt)("h2",{id:"controlled-execution"},"Controlled execution"),(0,i.kt)("p",null,"Normally the script is run when any of the inputs change, i.e.\nreceive new data via connections, but you can also control when the function is run with the ",(0,i.kt)("strong",{parentName:"p"},"Run")," signal input.\nIf this input has a connection the script will only run when a signal is received."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(17842).Z,width:"1022",height:"388"}))),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Script Inputs")),(0,i.kt)("td",{parentName:"tr",align:null},"Here you can list inputs to the function and specify types for the inputs as described above. For each input specified or simply used in the function code an input to the node will be created.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Script Outputs")),(0,i.kt)("td",{parentName:"tr",align:null},"Here you can list outputs to the function and specify types for the outputs as described above. For each output specified or simply used in the function code an input to the node will be created.")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Signal"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-signal"},"Run")),(0,i.kt)("td",{parentName:"tr",align:null},"Send a signal here to run the function. If this input has a connection the function script will not run when inputs are changed.")))),(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Outputs")),(0,i.kt)("td",{parentName:"tr",align:null},"The outputs defined in the function script.")))))}m.isMDXComponent=!0},88322:function(t,e,n){e.Z=n.p+"assets/images/function-1-4181caf3ea742feddcab5495e08ebe9c.png"},63143:function(t,e,n){e.Z=n.p+"assets/images/function-2-9e2e88fa5cdc71dac73f5429e206eb66.png"},31249:function(t,e,n){e.Z=n.p+"assets/images/function-3-eda0fe0c8a9df93c8fb8a67442667fde.png"},17842:function(t,e,n){e.Z=n.p+"assets/images/function-4-cb4e3dec60bffd0a3f8787eead9e5d62.png"}}]);