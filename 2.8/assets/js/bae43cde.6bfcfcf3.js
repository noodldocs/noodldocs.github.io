"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[2758],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,h=d["".concat(p,".").concat(f)]||d[f]||l[f]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73335:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],s={hide_title:!0,hide_table_of_contents:!0,title:"Script"},p=void 0,u={unversionedId:"javascript/script",id:"javascript/script",title:"Script",description:"This node allows you to add complex JavaScript to your application.",source:"@site/nodes/javascript/script.md",sourceDirName:"javascript",slug:"/javascript/script",permalink:"/2.8/nodes/javascript/script",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Script"},sidebar:"nodeSidebar",previous:{title:"Function",permalink:"/2.8/nodes/javascript/function"},next:{title:"CSS Definition",permalink:"/2.8/nodes/utilities/css-definition"}},c={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Handling when the node is unmounted",id:"handling-when-the-node-is-unmounted",level:3},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],d={toc:l};function f(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"is-hidden"},""),(0,a.kt)("h1",{id:"script"},"Script"),(0,a.kt)("p",null,"This node allows you to add complex JavaScript to your application.\nPlease refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/business-logic/javascript"},"Script Guide")," to learn more about the API.\nBut remember - with great power comes great responsibility."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(38127).Z,width:"942",height:"294"}))),(0,a.kt)("p",null,"In most cases you are better off using the simpler ",(0,a.kt)("span",{className:"ndl-node"},(0,a.kt)("a",{parentName:"p",href:"/nodes/javascript/function"},"Function"))," node for your custom JavaScript."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Reading the Javascript ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/business-logic/javascript"},"guide")," gives a broader understanding of how it works."),(0,a.kt)("p",null,"Here is an example of how you create a function that you can call in the node graph:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Script.Inputs = {\n  Prefix: "string",\n  Value: "number"\n};\n\nScript.Outputs = {\n  Done: "signal",\n  Value: "string",\n};\n\nScript.Signals.MyFunction = function (value) {\n  // run javascript code\n  \n  Script.Outputs.Value = Script.Inputs.Prefix + " " + Script.Inputs.Value;\n  Script.Outputs.Done();\n};\n')),(0,a.kt)("p",null,"This can also be done with a setter so you dont have to call the ",(0,a.kt)("inlineCode",{parentName:"p"},"MyFunction")," signal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Script.Inputs = {\n  Prefix: "string",\n  Value: "number"\n};\n\nScript.Outputs = {\n  Done: "signal",\n  Value: "string",\n};\n\nfunction onChange() {\n  Script.Outputs.Value = Script.Inputs.Prefix + " " + Script.Inputs.Value;\n  Script.Outputs.Done();\n}\n\nScript.Setters.Prefix = onChange;\nScript.Setters.Value = onChange;\n')),(0,a.kt)("h3",{id:"handling-when-the-node-is-unmounted"},"Handling when the node is unmounted"),(0,a.kt)("p",null,"When the node is unmounted like going to a different page, the ",(0,a.kt)("inlineCode",{parentName:"p"},"OnDestroy")," method will be called.\nIn this method, you can clean up potential listeners or libraries to keep the app performant."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Script.OnDestroy = function () {\n  // called when the node is unmounted\n}\n")),(0,a.kt)("p",{className:"is-hidden"},""),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("p",null,"The inputs are defined by the content of the script or by explicitly specifying inputs in the properties.\nSee the javascript ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/business-logic/javascript"},"guide")," for more details."),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("p",null,"The outputs are defined by the content of the script or by explicitly specifying outputs in the properties.\nSee the javascript ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/business-logic/javascript"},"guide")," for more details."))}f.isMDXComponent=!0},38127:function(e,t,n){t.Z=n.p+"assets/images/script-72fa14c04f780838aee9900c82d8aafc.png"}}]);