"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[7109],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22436:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),c=["components"],i={},s="Noodl.Events",l={unversionedId:"reference/events",id:"reference/events",title:"Noodl.Events",description:"This is the Noodl event emitter, you can use it to receive and send events from your scripts. Remember that in function and scripts nodes you can access it directly as Events. You can learn more about events in the guide.",source:"@site/javascript/reference/events.md",sourceDirName:"reference",slug:"/reference/events",permalink:"/2.6/javascript/reference/events",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Noodl.Arrays",permalink:"/2.6/javascript/reference/arrays"},next:{title:"Component",permalink:"/2.6/javascript/reference/component"}},u={},p=[],m={toc:p};function f(e){var t=e.components,i=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"noodlevents"},"Noodl.Events"),(0,o.kt)("p",null,"This is the Noodl event emitter, you can use it to receive and send events from your scripts. Remember that in function and scripts nodes you can access it directly as ",(0,o.kt)("strong",{parentName:"p"},"Events"),". You can learn more about events in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/business-logic/events"},"guide"),"."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(62672).Z,width:"640",height:"320"}))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"em"},"Noodl.Events.emit(eventName, data)")),"\nSend an event. Works well together with ",(0,o.kt)("em",{parentName:"p"},"Event Receivers"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Noodl.Events.emit('event name', {\n    value: 'hello',\n    someOtherValue: 100,\n})\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"em"},"Noodl.Events.on(eventName, callback(data))")),(0,o.kt)("br",null),"\n",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"em"},"Noodl.Events.once(eventName, callback(data))")),"\nReceive an event. Works together with ",(0,o.kt)("em",{parentName:"p"},"Event Senders")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Noodl.Events.on('event name', function (eventData) {\n    console.log(eventData.value)\n})\n")))}f.isMDXComponent=!0},62672:function(e,t,n){t.Z=n.p+"assets/images/events-13f12b9d40e52293be362a80ef7a5f08.gif"}}]);