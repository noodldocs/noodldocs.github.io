"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[8062],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,h=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},74020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={hide_title:!0,hide_table_of_contents:!0,title:"Script node"},o=void 0,s={unversionedId:"javascript/script/README",id:"javascript/script/README",title:"Script node",description:"This node allows you to add complex JavaScript to your application.",source:"@site/nodes/javascript/script/README.md",sourceDirName:"javascript/script",slug:"/javascript/script/",permalink:"/2.9/nodes/javascript/script/",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Script node"},sidebar:"nodeSidebar",previous:{title:"Function node",permalink:"/2.9/nodes/javascript/function/"},next:{title:"CSS Definition node",permalink:"/2.9/nodes/utilities/css-definition/"}},p={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Handling when the node is unmounted",id:"handling-when-the-node-is-unmounted",level:3},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"is-hidden"},""),(0,i.kt)("h1",{id:"script"},"Script"),(0,i.kt)("p",null,"This node allows you to add complex JavaScript to your application.\nPlease refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/business-logic/javascript"},"Script Guide")," to learn more about the API.\nBut remember - with great power comes great responsibility."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(45617).Z,width:"942",height:"294"}))),(0,i.kt)("p",null,"In most cases you are better off using the simpler ",(0,i.kt)("span",{className:"ndl-node"},(0,i.kt)("a",{parentName:"p",href:"/nodes/javascript/function"},"Function"))," node for your custom JavaScript."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Reading the Javascript ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/business-logic/javascript"},"guide")," gives a broader understanding of how it works."),(0,i.kt)("p",null,"Here is an example of how you create a function that you can call in the node graph:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'Script.Inputs = {\n  Prefix: "string",\n  Value: "number"\n};\n\nScript.Outputs = {\n  Done: "signal",\n  Value: "string",\n};\n\nScript.Signals.MyFunction = function (value) {\n  // run javascript code\n  \n  Script.Outputs.Value = Script.Inputs.Prefix + " " + Script.Inputs.Value;\n  Script.Outputs.Done();\n};\n')),(0,i.kt)("p",null,"This can also be done with a setter so you dont have to call the ",(0,i.kt)("inlineCode",{parentName:"p"},"MyFunction")," signal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'Script.Inputs = {\n  Prefix: "string",\n  Value: "number"\n};\n\nScript.Outputs = {\n  Done: "signal",\n  Value: "string",\n};\n\nfunction onChange() {\n  Script.Outputs.Value = Script.Inputs.Prefix + " " + Script.Inputs.Value;\n  Script.Outputs.Done();\n}\n\nScript.Setters.Prefix = onChange;\nScript.Setters.Value = onChange;\n')),(0,i.kt)("h3",{id:"handling-when-the-node-is-unmounted"},"Handling when the node is unmounted"),(0,i.kt)("p",null,"When the node is unmounted like going to a different page, the ",(0,i.kt)("inlineCode",{parentName:"p"},"OnDestroy")," method will be called.\nIn this method, you can clean up potential listeners or libraries to keep the app performant."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Script.OnDestroy = function () {\n  // called when the node is unmounted\n}\n")),(0,i.kt)("p",{className:"is-hidden"},""),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("p",null,"The inputs are defined by the content of the script or by explicitly specifying inputs in the properties.\nSee the javascript ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/business-logic/javascript"},"guide")," for more details."),(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("p",null,"The outputs are defined by the content of the script or by explicitly specifying outputs in the properties.\nSee the javascript ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/business-logic/javascript"},"guide")," for more details."))}d.isMDXComponent=!0},45617:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/script-72fa14c04f780838aee9900c82d8aafc.png"}}]);