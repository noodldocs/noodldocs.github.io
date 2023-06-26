"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[7109],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return v}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),v=o,m=u["".concat(i,".").concat(v)]||u[v]||p[v]||a;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22436:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return v},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),l=["components"],c={hide_title:!0,hide_table_of_contents:!0,title:"Noodl.Events"},i="Noodl.Events",s={unversionedId:"reference/events",id:"reference/events",title:"Noodl.Events",description:"Only available on the frontend",source:"@site/javascript/reference/events.md",sourceDirName:"reference",slug:"/reference/events",permalink:"/2.8/javascript/reference/events",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Noodl.Events"},sidebar:"apiSidebar",previous:{title:"Noodl.Arrays",permalink:"/2.8/javascript/reference/arrays"},next:{title:"Component",permalink:"/2.8/javascript/reference/component"}},d={},p=[{value:"<strong><code>Noodl.Events.emit(eventName, data)</code></strong>",id:"noodleventsemiteventname-data",level:4},{value:"<strong><code>Noodl.Events.on(eventName, callback(data))</code></strong>",id:"noodleventsoneventname-callbackdata",level:4},{value:"<strong><code>Noodl.Events.once(eventName, callback(data))</code></strong>",id:"noodleventsonceeventname-callbackdata",level:4}],u={toc:p};function v(e){var t=e.components,c=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"noodlevents"},"Noodl.Events"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Only available on the frontend"),(0,a.kt)("br",{parentName:"p"}),"\n","This is the Noodl event emitter, you can use it to receive and send events from your scripts. You can learn more about events in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/business-logic/events"},"guide"),"."),(0,a.kt)("div",{className:"ndl-image-with-background xl"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(64166).Z,width:"640",height:"320"}))),(0,a.kt)("h4",{id:"noodleventsemiteventname-data"},(0,a.kt)("strong",{parentName:"h4"},(0,a.kt)("inlineCode",{parentName:"strong"},"Noodl.Events.emit(eventName, data)"))),(0,a.kt)("p",null,"Send an event. Works well together with ",(0,a.kt)("em",{parentName:"p"},"Event Receivers"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'Noodl.Events.emit("event name", {\n  value: "hello",\n  someOtherValue: 100,\n});\n')),(0,a.kt)("h4",{id:"noodleventsoneventname-callbackdata"},(0,a.kt)("strong",{parentName:"h4"},(0,a.kt)("inlineCode",{parentName:"strong"},"Noodl.Events.on(eventName, callback(data))"))),(0,a.kt)("h4",{id:"noodleventsonceeventname-callbackdata"},(0,a.kt)("strong",{parentName:"h4"},(0,a.kt)("inlineCode",{parentName:"strong"},"Noodl.Events.once(eventName, callback(data))"))),(0,a.kt)("p",null,"Receive an event. Works together with ",(0,a.kt)("em",{parentName:"p"},"Event Senders")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'Noodl.Events.on("event name", function (eventData) {\n  console.log(eventData.value);\n});\n')))}v.isMDXComponent=!0},64166:function(e,t,n){t.Z=n.p+"assets/images/events-13f12b9d40e52293be362a80ef7a5f08.gif"}}]);