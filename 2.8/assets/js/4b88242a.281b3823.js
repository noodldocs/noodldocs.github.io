"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[7109],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=i(n),m=a,u=p["".concat(s,".").concat(m)]||p[m]||v[m]||o;return n?r.createElement(u,l(l({ref:t},d),{},{components:n})):r.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>v,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={hide_title:!0,hide_table_of_contents:!0,title:"Noodl.Events"},l="Noodl.Events",c={unversionedId:"reference/events",id:"reference/events",title:"Noodl.Events",description:"Only available on the frontend",source:"@site/javascript/reference/events.md",sourceDirName:"reference",slug:"/reference/events",permalink:"/2.8/javascript/reference/events",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Noodl.Events"},sidebar:"apiSidebar",previous:{title:"Noodl.Arrays",permalink:"/2.8/javascript/reference/arrays"},next:{title:"Component",permalink:"/2.8/javascript/reference/component"}},s={},i=[{value:"<strong><code>Noodl.Events.emit(eventName, data)</code></strong>",id:"noodleventsemiteventname-data",level:4},{value:"<strong><code>Noodl.Events.on(eventName, callback(data))</code></strong>",id:"noodleventsoneventname-callbackdata",level:4},{value:"<strong><code>Noodl.Events.once(eventName, callback(data))</code></strong>",id:"noodleventsonceeventname-callbackdata",level:4}],d={toc:i},p="wrapper";function v(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"noodlevents"},"Noodl.Events"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Only available on the frontend"),(0,a.kt)("br",{parentName:"p"}),"\n","This is the Noodl event emitter, you can use it to receive and send events from your scripts. You can learn more about events in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/business-logic/events"},"guide"),"."),(0,a.kt)("div",{className:"ndl-image-with-background xl"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(24166).Z,width:"640",height:"320"}))),(0,a.kt)("h4",{id:"noodleventsemiteventname-data"},(0,a.kt)("strong",{parentName:"h4"},(0,a.kt)("inlineCode",{parentName:"strong"},"Noodl.Events.emit(eventName, data)"))),(0,a.kt)("p",null,"Send an event. Works well together with ",(0,a.kt)("em",{parentName:"p"},"Event Receivers"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'Noodl.Events.emit("event name", {\n  value: "hello",\n  someOtherValue: 100,\n});\n')),(0,a.kt)("h4",{id:"noodleventsoneventname-callbackdata"},(0,a.kt)("strong",{parentName:"h4"},(0,a.kt)("inlineCode",{parentName:"strong"},"Noodl.Events.on(eventName, callback(data))"))),(0,a.kt)("h4",{id:"noodleventsonceeventname-callbackdata"},(0,a.kt)("strong",{parentName:"h4"},(0,a.kt)("inlineCode",{parentName:"strong"},"Noodl.Events.once(eventName, callback(data))"))),(0,a.kt)("p",null,"Receive an event. Works together with ",(0,a.kt)("em",{parentName:"p"},"Event Senders")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'Noodl.Events.on("event name", function (eventData) {\n  console.log(eventData.value);\n});\n')))}v.isMDXComponent=!0},24166:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/events-13f12b9d40e52293be362a80ef7a5f08.gif"}}]);