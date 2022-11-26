"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[7109],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},22436:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],c={hide_title:!0,hide_table_of_contents:!0,title:"Noodl.Events"},l="Noodl.Events",s={unversionedId:"reference/events",id:"reference/events",title:"Noodl.Events",description:"Only available on the frontend",source:"@site/javascript/reference/events.md",sourceDirName:"reference",slug:"/reference/events",permalink:"/2.8/javascript/reference/events",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Noodl.Events"},sidebar:"apiSidebar",previous:{title:"Noodl.Arrays",permalink:"/2.8/javascript/reference/arrays"},next:{title:"Component",permalink:"/2.8/javascript/reference/component"}},p={},u=[],f={toc:u};function m(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"noodlevents"},"Noodl.Events"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Only available on the frontend"),(0,a.kt)("br",{parentName:"p"}),"\n","This is the Noodl event emitter, you can use it to receive and send events from your scripts. You can learn more about events in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/business-logic/events"},"guide"),"."),(0,a.kt)("div",{className:"ndl-image-with-background xl"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(54219).Z,width:"640",height:"320"}))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Noodl.Events.emit(eventName, data)")),(0,a.kt)("br",{parentName:"p"}),"\n","Send an event. Works well together with ",(0,a.kt)("em",{parentName:"p"},"Event Receivers"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'Noodl.Events.emit("event name", {\n  value: "hello",\n  someOtherValue: 100,\n});\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Noodl.Events.on(eventName, callback(data))")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Noodl.Events.once(eventName, callback(data))")),(0,a.kt)("br",{parentName:"p"}),"\n","Receive an event. Works together with ",(0,a.kt)("em",{parentName:"p"},"Event Senders")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'Noodl.Events.on("event name", function (eventData) {\n  console.log(eventData.value);\n});\n')))}m.isMDXComponent=!0},54219:function(e,t,n){t.Z=n.p+"assets/images/events-13f12b9d40e52293be362a80ef7a5f08.gif"}}]);