"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[6934],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4572:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=n(83117),a=n(80102),s=(n(67294),n(3905)),o=["components"],i={title:"Send Message",hide_title:!0},l=void 0,p={unversionedId:"modules/mqtt/send-message",id:"modules/mqtt/send-message",title:"Send Message",description:"Send Message nodes are used to send a message over MQTT, to another device for example. All devices that connect to the editor will",source:"@site/library/modules/mqtt/send-message.md",sourceDirName:"modules/mqtt",slug:"/modules/mqtt/send-message",permalink:"/2.6/library/modules/mqtt/send-message",tags:[],version:"current",frontMatter:{title:"Send Message",hide_title:!0},sidebar:"mqttSidebar",previous:{title:"MQTT Guide",permalink:"/2.6/library/modules/mqtt/mqtt-guide"},next:{title:"Receive Message",permalink:"/2.6/library/modules/mqtt/receive-message"}},u={},c=[{value:"Inputs",id:"inputs",level:2},{value:"General",id:"general",level:3},{value:"PAYLOAD",id:"payload",level:3},{value:"RATE LIMIT",id:"rate-limit",level:3},{value:"Outputs",id:"outputs",level:2}],d={toc:c};function m(e){var t=e.components,i=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,""),(0,s.kt)("h1",{id:"send-message"},"Send Message"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Send Message")," nodes are used to send a message over MQTT, to another device for example. All devices that connect to the editor will\nuse the same MQTT broker and thus messages can be sent across devices. The ",(0,s.kt)("strong",{parentName:"p"},"Send Message")," node uses topics to specify which receivers should get the messages."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(73126).Z,width:"500",height:"270"})),(0,s.kt)("p",null,""),(0,s.kt)("div",{class:"node-inputs"},(0,s.kt)("h2",{id:"inputs"},"Inputs"),(0,s.kt)("h3",{id:"general"},"General"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Topic"),(0,s.kt)("br",{parentName:"p"}),"\n","The MQTT topic this ",(0,s.kt)("strong",{parentName:"p"},"Send Message")," will publish messages to. Most commonly the topics are specified as a hierarchy with ",(0,s.kt)("strong",{parentName:"p"},"/")," as delimiters, e.g. ",(0,s.kt)("em",{parentName:"p"},"/Foo/Bar/1"),". Sometimes the topic needs to be dynamic, this can be achieved by encapsulating a topic component with curly brackets, e.g. ",(0,s.kt)("em",{parentName:"p"},"/Foo/{Bar}/1"),". In this case a port called ",(0,s.kt)("em",{parentName:"p"},"Bar")," will show up."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Format"),"\nThis input sets the format the payload will be sent in, either as JSON or as a CSV."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Send on Change"),"\nThis boolean controls whether a new message will be sent automatically when any payload input changes, or if you have to explicitly trigger the ",(0,s.kt)("em",{parentName:"p"},"Send")," signal to send the message."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Send"),(0,s.kt)("br",{parentName:"p"}),"\n","This is a signal port and when triggered the corresponding ",(0,s.kt)("strong",{parentName:"p"},"Receive Message")," nodes will be triggered as well."),(0,s.kt)("h3",{id:"payload"},"PAYLOAD"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Send Message")," nodes can have arbitrary input ports that represent the payload that will be sent with the message when the ",(0,s.kt)("em",{parentName:"p"},"Send")," signal is triggered. These ports can be added by inspecting the node and clicking the ",(0,s.kt)("em",{parentName:"p"},"Add port")," button in the ",(0,s.kt)("em",{parentName:"p"},"Payload")," section."),(0,s.kt)("h3",{id:"rate-limit"},"RATE LIMIT"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Rate Limit"),"\nThis boolean specifies if there should be a rate limit added to the messages, i.e. if the number of messages should be throttled at a specific value. This could be useful if you have a continouos stream of messages you want to send, for example a sensor reading, but you want to avoid congesting the MQTT broker."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Messages / Sec"),"\nIf ",(0,s.kt)("em",{parentName:"p"},"Rate Limit")," is set, this defines how many messages per second this node will send.")),(0,s.kt)("div",{class:"node-inputs"},(0,s.kt)("h2",{id:"outputs"},"Outputs"),(0,s.kt)("p",null,"This node doesn't have any outputs.")))}m.isMDXComponent=!0},73126:function(e,t,n){t.Z=n.p+"assets/images/send-message-1786b74ce28d1efb19278614603cc5fb.gif"}}]);