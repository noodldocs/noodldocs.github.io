"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[478],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),p=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(a,".").concat(m)]||d[m]||l[m]||i;return n?o.createElement(f,c(c({ref:t},u),{},{components:n})):o.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<i;p++)c[p]=n[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80611:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return d}});var o=n(83117),r=n(80102),i=(n(67294),n(3905)),c=n(53488),s=["components"],a={hide_title:!0,hide_table_of_contents:!0,title:"Pointer position example"},p=void 0,u={unversionedId:"samples/pointer-position",id:"samples/pointer-position",title:"Pointer position example",description:"",source:"@site/javascript/samples/pointer-position.md",sourceDirName:"samples",slug:"/samples/pointer-position",permalink:"/2.8/javascript/samples/pointer-position",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Pointer position example"},sidebar:"apiSidebar",previous:{title:"Get DOM element",permalink:"/2.8/javascript/samples/get-dom-element"},next:{title:"Extending Noodl",permalink:"/2.8/javascript/extending/overview"}},l={},d=[],m={toc:d};function f(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pointer-position-example"},"Pointer position example"),(0,i.kt)("div",{class:"ndl-image-with-background xl"},(0,i.kt)(c.Z,{json:{nodes:[{id:"0f09b7cb-50ab-74b8-52c1-7058a0769284",type:"Javascript2",label:"Pointer Position",x:-497.981910869314,y:389.26538248207396,parameters:{code:'function setPosition(e) {\n    Script.Outputs.PointerX = e.clientX;\n    Script.Outputs.PointerY = e.clientY;\n}\n\nScript.OnInit = function() {\n     document.body.addEventListener("mousemove", setPosition);\n\t document.body.addEventListener("mousedown", setPosition);\n}\n\nScript.OnDestroy = function() {\n\t document.body.removeEventListener("mousedown", setPosition);\n\t document.body.removeEventListener("mousemove", setPosition);    \n}'},ports:[],children:[]},{id:"bdc3ce12-5c23-27ee-7918-ad154b20e668",type:"Number",label:"X",x:-249.18868850167155,y:333.4616732156818,parameters:{},ports:[],children:[]},{id:"efbbb196-1b60-27f2-26c6-e7fc0d69d23d",type:"Number",label:"Y",x:-256.3223936828915,y:481.4925282575018,parameters:{},ports:[],children:[]}],connections:[{fromId:"0f09b7cb-50ab-74b8-52c1-7058a0769284",fromProperty:"PointerX",toId:"bdc3ce12-5c23-27ee-7918-ad154b20e668",toProperty:"value"},{fromId:"0f09b7cb-50ab-74b8-52c1-7058a0769284",fromProperty:"PointerY",toId:"efbbb196-1b60-27f2-26c6-e7fc0d69d23d",toProperty:"value"}]},mdxType:"CopyToClipboardButton"}),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(12720).Z,width:"1244",height:"550"}))),(0,i.kt)("p",null,"This example will attach an event listener to the body element of the web page, and listen for ",(0,i.kt)("inlineCode",{parentName:"p"},"mousemove"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Script.OnInit = function () {\n    document.body.addEventListener('mousemove', (e) => {\n        Script.Outputs.PointerX = e.clientX\n        Script.Outputs.PointerY = e.clientY\n    })\n}\n")),(0,i.kt)("p",null,"Now lets extend this to also include the ",(0,i.kt)("inlineCode",{parentName:"p"},"mousedown")," event, so it updates directly when a pointer event starts, not just when it moves. Since we need the same code twice we can add it to a function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function setPosition(e) {\n    Script.Outputs.PointerX = e.clientX\n    Script.Outputs.PointerY = e.clientY\n}\n\nScript.OnInit = function () {\n    document.body.addEventListener('mousemove', setPosition)\n    document.body.addEventListener('mousedown', setPosition)\n}\n")),(0,i.kt)("p",null,"We can extend this even further by removing the event listener when the JavaScript node is destroyed. This can happen when a user navigates from a page that runs this code, or when a component with this code is generated by a ",(0,i.kt)("strong",{parentName:"p"},"Repeater")," node."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function setPosition(e) {\n    Script.Outputs.PointerX = e.clientX\n    Script.Outputs.PointerY = e.clientY\n}\n\nScript.OnInit = function () {\n    document.body.addEventListener('mousemove', setPosition)\n    document.body.addEventListener('mousedown', setPosition)\n}\n\nScript.OnDestroy = function () {\n    document.body.removeEventListener('mousedown', setPosition)\n    document.body.removeEventListener('mousemove', setPosition)\n}\n")))}f.isMDXComponent=!0},53488:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(67294);function r(e){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)})):function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+n)}catch(o){console.error("Fallback: Oops, unable to copy",o)}document.body.removeChild(t)}(e)}function i(e){return o.createElement("button",{className:"ndl-copy-nodes-button",onClick:function(){return t=e.json,void r(JSON.stringify(t));var t}})}},12720:function(e,t,n){t.Z=n.p+"assets/images/pointer-position-a68244a1deb8016b3820c49e1ad93235.png"}}]);