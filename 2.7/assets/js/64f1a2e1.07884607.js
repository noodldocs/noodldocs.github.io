"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[6232],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),h=l(n),g=i,u=h["".concat(p,".").concat(g)]||h[g]||d[g]||o;return n?a.createElement(u,s(s({ref:t},c),{},{components:n})):a.createElement(u,s({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=h;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1101:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return d}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),s=["components"],r={title:"Events",hide_title:!0},p="Events",l={unversionedId:"guides/business-logic/events",id:"guides/business-logic/events",title:"Events",description:"Overview",source:"@site/docs/guides/business-logic/events.md",sourceDirName:"guides/business-logic",slug:"/guides/business-logic/events",permalink:"/2.7/docs/guides/business-logic/events",tags:[],version:"current",frontMatter:{title:"Events",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Custom UI Components",permalink:"/2.7/docs/guides/business-logic/custom-ui-components"},next:{title:"Using Zapier for Business Logic",permalink:"/2.7/docs/guides/business-logic/zapier"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Sending and receiving events",id:"sending-and-receiving-events",level:2},{value:"Passing payload data",id:"passing-payload-data",level:2},{value:"Propagation",id:"propagation",level:2}],h={toc:d};function g(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"events"},"Events"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This guide covers an important concept in Noodl called Events. Events are used to send and recive signals with accompanying data. Signals are sent from one part of the node graph to one or many other locations in the graph. This is often useful when a user interaction occurs in one place of the app, such as the click of a button, that should trigger an action in a different place, e.g. a popup showing."),(0,o.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,o.kt)("p",null,"This guide will teach you how to use the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/events/send-event"},"Send Event")," and ",(0,o.kt)("a",{parentName:"p",href:"/nodes/events/receive-event"},"Receive Event")," nodes to pass signals and data from one place in your node graph to another."),(0,o.kt)("p",null,"This concept includes two nodes, the ",(0,o.kt)("strong",{parentName:"p"},"Send Event")," node and the ",(0,o.kt)("strong",{parentName:"p"},"Receive Event")," node. As the name implies, the ",(0,o.kt)("strong",{parentName:"p"},"Send Event")," node is used when you want to send an event. Below is an example of an event being sent when a ",(0,o.kt)("strong",{parentName:"p"},"Text")," node is clicked."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(56394).Z,title:":class=img-size-l",width:"1132",height:"442"})),(0,o.kt)("h2",{id:"sending-and-receiving-events"},"Sending and receiving events"),(0,o.kt)("p",null,"In the example above, the ",(0,o.kt)("strong",{parentName:"p"},"Click")," signal of the ",(0,o.kt)("strong",{parentName:"p"},"Text")," node is connected to the ",(0,o.kt)("strong",{parentName:"p"},"Send")," input of the ",(0,o.kt)("strong",{parentName:"p"},"Send Event")," node. This will trigger the an event to be sent when the text is clicked."),(0,o.kt)("p",null,"An event is sent to a certain ",(0,o.kt)("strong",{parentName:"p"},"Channel")," which is specified in the properties of the ",(0,o.kt)("strong",{parentName:"p"},"Send Event")," node. In this case the name of the channel is ",(0,o.kt)("strong",{parentName:"p"},"Show Popup"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(58038).Z,title:":class=img-size-m",width:"578",height:"170"})),(0,o.kt)("p",null,"The event signal is passed to all ",(0,o.kt)("strong",{parentName:"p"},"Receive Event")," nodes that share the same ",(0,o.kt)("strong",{parentName:"p"},"Channel"),". In the example below the event that was sent above is received."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(95222).Z,title:":class=img-size-l",width:"958",height:"402"})),(0,o.kt)("p",null,"To illustrate this you can see below how when the click signal is sent via the ",(0,o.kt)("strong",{parentName:"p"},"Send Event")," node, it is passed to the ",(0,o.kt)("strong",{parentName:"p"},"Received")," output of the ",(0,o.kt)("strong",{parentName:"p"},"Event Receiver")," node."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(14776).Z,title:":class=img-size-l",width:"640",height:"320"})),(0,o.kt)("h2",{id:"passing-payload-data"},"Passing payload data"),(0,o.kt)("p",null,"So far we have seen the basic concept of the events mechanism in Noodl. Next, let's take a look at how you can pass data via payload connections to your event nodes. You start by adding ports to the ",(0,o.kt)("strong",{parentName:"p"},"Send Event")," node. You can add any number of ports for the data that you want to pass with the event."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(83576).Z,title:":class=img-size-l",width:"640",height:"320"})),(0,o.kt)("p",null,"Now you can connect data to the input ports that you created on the ",(0,o.kt)("strong",{parentName:"p"},"Send Event")," node. When the ",(0,o.kt)("strong",{parentName:"p"},"Send")," signal is received, the values on all inputs of the ",(0,o.kt)("strong",{parentName:"p"},"Send Event")," node will be captured and passed to the ",(0,o.kt)("strong",{parentName:"p"},"Receive Event"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(62890).Z,title:":class=img-size-l",width:"952",height:"448"})),(0,o.kt)("p",null,"When the ",(0,o.kt)("strong",{parentName:"p"},"Receive Event")," node outputs the ",(0,o.kt)("strong",{parentName:"p"},"Received")," signal it will also update all other outputs. The payload ports added on the ",(0,o.kt)("strong",{parentName:"p"},"Send Event")," node will become available on all ",(0,o.kt)("strong",{parentName:"p"},"Receive Event")," nodes that share the same channel as the ",(0,o.kt)("strong",{parentName:"p"},"Send Event")," node."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(24949).Z,title:":class=img-size-l",width:"1144",height:"520"})),(0,o.kt)("h2",{id:"propagation"},"Propagation"),(0,o.kt)("p",null,"Event propagation means how an event is sent in the graph, i.e. which ",(0,o.kt)("strong",{parentName:"p"},"Receive Event")," nodes an event is sent to. The default propagation mode is ",(0,o.kt)("strong",{parentName:"p"},"Global")," which means ",(0,o.kt)("em",{parentName:"p"},"all")," receivers will be triggered. You can however change the propagation via the ",(0,o.kt)("strong",{parentName:"p"},"Send To")," property of the ",(0,o.kt)("strong",{parentName:"p"},"Send Event")," node."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(94954).Z,title:":class=img-size-m",width:"558",height:"418"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Children")," mode will send the events to all the children in the component where the ",(0,o.kt)("strong",{parentName:"p"},"Send Event")," node is. So in the example below, the event will first be sent to ",(0,o.kt)("strong",{parentName:"p"},"My Child Comp")," followed by any children that node may have. When all descendants of ",(0,o.kt)("strong",{parentName:"p"},"My Child Comp")," node have received the event it will pass it to all children that are dynamically created by the ",(0,o.kt)("strong",{parentName:"p"},"Repeater")," node, and their descendants."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(87471).Z,title:":class=img-size-l",width:"2520",height:"1180"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Siblings")," mode will pass the event to all other nodes that are on the same level as the node where the originating ",(0,o.kt)("strong",{parentName:"p"},"Send Event")," node is. So if for instance the ",(0,o.kt)("strong",{parentName:"p"},"My Child Comp")," in the graph below contains a ",(0,o.kt)("strong",{parentName:"p"},"Send Event")," node that sends an event to its siblings all other ",(0,o.kt)("strong",{parentName:"p"},"My Child Comp")," nodes will receive it, except for the one sending the event, followed by the child instances dynamically created by the ",(0,o.kt)("strong",{parentName:"p"},"Repeater")," node."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(45514).Z,title:":class=img-size-l",width:"2428",height:"1200"})),(0,o.kt)("p",null,"The last propagation mode is ",(0,o.kt)("strong",{parentName:"p"},"Parent"),". This mode will send events up the node graph hierarchy. The ",(0,o.kt)("strong",{parentName:"p"},"My Other Child")," in the example graph below contains a ",(0,o.kt)("strong",{parentName:"p"},"Send Event")," node that is using the ",(0,o.kt)("strong",{parentName:"p"},"Parent")," propagation mode. When an event is sent from ",(0,o.kt)("strong",{parentName:"p"},"My Other Child"),", the parent ",(0,o.kt)("strong",{parentName:"p"},"My Child Comp")," node with receive it, followed by the node we are in and then the event would be passed on to the parent of this node. The propagation follows the visual hierarchy chain."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(72112).Z,title:":class=img-size-l",width:"1060",height:"452"})),(0,o.kt)("p",null,"The final thing to know about propagation is the ",(0,o.kt)("strong",{parentName:"p"},"Consume")," property of the ",(0,o.kt)("strong",{parentName:"p"},"Receive Event")," node. If that property is checked it means that when that particular node receives an event it will stop the propagation. So no other ",(0,o.kt)("strong",{parentName:"p"},"Receive Event")," nodes after that one will receive this specific event."))}g.isMDXComponent=!0},83576:function(e,t,n){t.Z=n.p+"assets/images/add-port-04d3aeae608c26d8e4024d37234566c3.gif"},58038:function(e,t,n){t.Z=n.p+"assets/images/channel-prop-45d3ebe83abc173a550b99e2ba8f6316.png"},62890:function(e,t,n){t.Z=n.p+"assets/images/connect-to-port-82ee14c104bab3c7bec301fcfd006cab.png"},14776:function(e,t,n){t.Z=n.p+"assets/images/events-demo-13f12b9d40e52293be362a80ef7a5f08.gif"},95222:function(e,t,n){t.Z=n.p+"assets/images/receive-event-061f61d140cb08946ac6d39e78effe72.png"},24949:function(e,t,n){t.Z=n.p+"assets/images/receiver-outputs-b31a04a4126350c03e08a13f9c13863b.png"},56394:function(e,t,n){t.Z=n.p+"assets/images/send-event-fb0442efaeddcea96f87bee50abe90b1.png"},87471:function(e,t,n){t.Z=n.p+"assets/images/send-to-children-b0e74feac03581a64b0239bc33ea6204.png"},72112:function(e,t,n){t.Z=n.p+"assets/images/send-to-parent-e2369080a1b595a633d5b47c3ee852b4.png"},45514:function(e,t,n){t.Z=n.p+"assets/images/send-to-siblings-0efd600a2aacf66fe9c7ad32b7435cbd.png"},94954:function(e,t,n){t.Z=n.p+"assets/images/send-to-36c00371281205a90ea76010be29956f.png"}}]);