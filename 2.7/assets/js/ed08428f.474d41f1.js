"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[9119],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33957:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),l=n(53488),c=["components"],i={hide_title:!0,hide_table_of_contents:!0,title:"Get DOM element"},s="Get DOM element",u={unversionedId:"samples/get-dom-element",id:"samples/get-dom-element",title:"Get DOM element",description:"Sometimes you need to get access to the underlying DOM element and use the browser APIs directly.",source:"@site/javascript/samples/get-dom-element.mdx",sourceDirName:"samples",slug:"/samples/get-dom-element",permalink:"/2.7/javascript/samples/get-dom-element",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Get DOM element"},sidebar:"apiSidebar",previous:{title:"overview",permalink:"/2.7/javascript/samples/overview"},next:{title:"Pointer position example",permalink:"/2.7/javascript/samples/pointer-position"}},p={},d=[],m={toc:d};function f(e){var t=e.components,i=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-dom-element"},"Get DOM element"),(0,a.kt)("div",{class:"ndl-image-with-background xl"},(0,a.kt)(l.Z,{json:{nodes:[{id:"da9a319e-46ae-0bba-f9f0-64115fd8326a",type:"Group",x:-26,y:-78.00000000000003,parameters:{},ports:[],children:[]},{id:"432255e5-cf33-ab78-5dfc-c468fa2d35f0",type:"Javascript2",label:"Get DOM Element",x:-266,y:-87,parameters:{code:'Script.Inputs = {\n    group:"reference"\n}\n\nScript.Signals = {\n    didMount() {\n        const domElement = Script.Inputs.group.getDOMElement();\n        //domElement.addEventListener(...)\n    },\n    willUnmount() {\n        // const domElement = Script.Inputs.group.getDOMElement();\n        // domElement.removeEventListener(...)\n    }\n}\n',scriptInputs:[]},ports:[],children:[]}],connections:[{fromId:"da9a319e-46ae-0bba-f9f0-64115fd8326a",fromProperty:"didMount",toId:"432255e5-cf33-ab78-5dfc-c468fa2d35f0",toProperty:"didMount"},{fromId:"da9a319e-46ae-0bba-f9f0-64115fd8326a",fromProperty:"willUnmount",toId:"432255e5-cf33-ab78-5dfc-c468fa2d35f0",toProperty:"willUnmount"},{fromId:"da9a319e-46ae-0bba-f9f0-64115fd8326a",fromProperty:"this",toId:"432255e5-cf33-ab78-5dfc-c468fa2d35f0",toProperty:"group"}]},mdxType:"CopyToClipboardButton"}),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(58394).Z,width:"1450",height:"640"}))),(0,a.kt)("p",null,"Sometimes you need to get access to the underlying DOM element and use the browser APIs directly."),(0,a.kt)("p",null,"To get from a visual Noodl node to a DOM element we'll connect a visual node to a Script node. The input type should be ",(0,a.kt)("inlineCode",{parentName:"p"},'"reference"')," (or ",(0,a.kt)("inlineCode",{parentName:"p"},'"*"')," to accept all types). This example uses a Group, but any visual node will work."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Script.Inputs = {\n    group: 'reference',\n}\n")),(0,a.kt)("p",null,"Once we have the reference to a Noodl node we can get the DOM element reference with ",(0,a.kt)("inlineCode",{parentName:"p"},"getDOMElement()")," on the Noodl node."),(0,a.kt)("p",null,"A visual node might be unmonted, or haven't had a chance to render yet. To make sure there's a DOM element we'll use the ",(0,a.kt)("strong",{parentName:"p"},"Did Mount")," output from the Noodl node. This makes sure we'll get the latest DOM reference, and that our code won't run until the visual node is actually rendered."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Script.Inputs = {\n    group: 'reference',\n}\n\nScript.Signals = {\n    didMount() {\n        const domElement = Script.Inputs.group.getDOMElement()\n        //domElement.addEventListener(...)\n    },\n    willUnmount() {\n        // const domElement = Script.Inputs.group.getDOMElement();\n        // domElement.removeEventListener(...)\n    },\n}\n")))}f.isMDXComponent=!0},53488:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);function o(e){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)})):function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+n)}catch(r){console.error("Fallback: Oops, unable to copy",r)}document.body.removeChild(t)}(e)}function a(e){return r.createElement("button",{className:"ndl-copy-nodes-button",onClick:function(){return t=e.json,void o(JSON.stringify(t));var t}})}},58394:function(e,t,n){t.Z=n.p+"assets/images/get-dom-element-cecc1ef08402c1a1910afd2034ba8db3.png"}}]);