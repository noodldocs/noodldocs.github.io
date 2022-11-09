"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[6824],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93441:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var r=n(83117),a=n(80102),s=(n(67294),n(3905)),o=["components"],i={title:"Receive Message",hide_title:!0},c=void 0,p={unversionedId:"modules/mqtt/receive-message",id:"modules/mqtt/receive-message",title:"Receive Message",description:"Receive Message nodes are used to receive messages sent over MQTT, by a Send Message node for example. Messages can be sent across devices and",source:"@site/library/modules/mqtt/receive-message.md",sourceDirName:"modules/mqtt",slug:"/modules/mqtt/receive-message",permalink:"/2.8/library/modules/mqtt/receive-message",tags:[],version:"current",frontMatter:{title:"Receive Message",hide_title:!0},sidebar:"mqttSidebar",previous:{title:"Send Message",permalink:"/2.8/library/modules/mqtt/send-message"}},l={},d=[{value:"Inputs",id:"inputs",level:2},{value:"Other",id:"other",level:3},{value:"Outputs",id:"outputs",level:2},{value:"PAYLOAD",id:"payload",level:3}],u={toc:d};function m(e){var t=e.components,i=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,""),(0,s.kt)("h1",{id:"receive-message"},"Receive Message"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Receive Message")," nodes are used to receive messages sent over MQTT, by a ",(0,s.kt)("a",{parentName:"p",href:"/library/modules/mqtt/send-message"},(0,s.kt)("strong",{parentName:"a"},"Send Message"))," node for example. Messages can be sent across devices and\nbe used for inter-device communication and IoT. The ",(0,s.kt)("strong",{parentName:"p"},"Receive Message")," node subscribes to an MQTT topic and receives any message and payload published to that topic."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(28193).Z,width:"832",height:"522"}),"\n"),(0,s.kt)("div",{class:"node-inputs"},(0,s.kt)("h2",{id:"inputs"},"Inputs"),(0,s.kt)("h3",{id:"other"},"Other"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Topic"),"\nThe topic name can be any identifier and is used by the ",(0,s.kt)("strong",{parentName:"p"},"Receive Message")," nodes to connect sender and receiver nodes, or publishers and subscribers in MQTT. Most commonly the topics are specified as a hierarchy with ",(0,s.kt)("strong",{parentName:"p"},"/")," as delimiters, e.g. ",(0,s.kt)("em",{parentName:"p"},"/Foo/Bar/1"),". Sometimes the topics need to be dynamic, this can be achieved by encapsulating a topic component with curly brackets, e.g. ",(0,s.kt)("em",{parentName:"p"},"/Foo/{Bar}/1"),". In this case a port called ",(0,s.kt)("em",{parentName:"p"},"Bar")," will show up.\nTopics on ",(0,s.kt)("em",{parentName:"p"},"Receive Message")," can also be specified with wildcards, so for instance ",(0,s.kt)("em",{parentName:"p"},"/Foo/+/Bar")," will subscribe to both ",(0,s.kt)("em",{parentName:"p"},"/Foo/Hello/Bar")," and ",(0,s.kt)("em",{parentName:"p"},"/Foo/Goodbye/Bar"),".\nThe exact topic component used when sending the message can be retrieved in a similar way to dynamic topics, by specifying ",(0,s.kt)("em",{parentName:"p"},"/Foo/+X+/Bar")," an output port called ",(0,s.kt)("em",{parentName:"p"},"X")," will\nbe created that will hold the value of the topic component when the message is received."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Enabled"),"\nEnable and disable the ",(0,s.kt)("strong",{parentName:"p"},"Receive Message")," node.")),(0,s.kt)("div",{class:"node-outputs"},(0,s.kt)("h2",{id:"outputs"},"Outputs"),(0,s.kt)("h3",{id:"payload"},"PAYLOAD"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Receive Message")," nodes can have arbitrary output ports, payloads, that will assume the value of any incoming messages, for example a ",(0,s.kt)("a",{parentName:"p",href:"/library/modules/mqtt/send-message"},"Send Message")," node. These ports are referred to as payload ports.\nThese ports can be added by inspecting the node and clicking the ",(0,s.kt)("em",{parentName:"p"},"Add port")," button in the ",(0,s.kt)("em",{parentName:"p"},"Payload")," section."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Received"),"\nA signal triggered when a message is received.")))}m.isMDXComponent=!0},28193:function(e,t,n){t.Z=n.p+"assets/images/receive-message-5fb7204013c29e17a92a9cab06640cad.png"}}]);