"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[9470],{3905:function(e,t,o){o.d(t,{Zo:function(){return l},kt:function(){return m}});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(o),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||n;return o?a.createElement(f,i(i({ref:t},l),{},{components:o})):a.createElement(f,i({ref:t},l))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<n;d++)i[d]=o[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},40618:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var a=o(87462),r=o(63366),n=(o(67294),o(3905)),i=o(53488),c=["components"],s={},d="MQTT \x3c!--",l={unversionedId:"mqtt/mqtt-guide",id:"mqtt/mqtt-guide",title:"MQTT \x3c!--",description:"In this guide we will create a small MQTT communication example using the Send Message and Receive Message nodes available in the MQTT module.",source:"@site/modules/mqtt/mqtt-guide.mdx",sourceDirName:"mqtt",slug:"/mqtt/mqtt-guide",permalink:"/2.6/modules/mqtt/mqtt-guide",tags:[],version:"current",frontMatter:{},sidebar:"mqttSidebar",previous:{title:"MQTT Module",permalink:"/2.6/modules/mqtt/"},next:{title:"send-message",permalink:"/2.6/modules/mqtt/send-message"}},p=[{value:"Overview",id:"overview",children:[],level:2},{value:"Using the the MQTT module",id:"using-the-the-mqtt-module",children:[],level:2},{value:"Connecting to an MQTT broker",id:"connecting-to-an-mqtt-broker",children:[],level:2},{value:"Testing our MQTT broker",id:"testing-our-mqtt-broker",children:[],level:2},{value:"Dynamic Topic names",id:"dynamic-topic-names",children:[],level:2}],u={toc:p};function m(e){var t=e.components,s=(0,r.Z)(e,c);return(0,n.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mqtt--docsify-ignore-all-"},"MQTT "),(0,n.kt)("p",null,"In this guide we will create a small MQTT communication example using the ",(0,n.kt)("em",{parentName:"p"},"Send Message")," and ",(0,n.kt)("em",{parentName:"p"},"Receive Message")," nodes available in the MQTT module."),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"MQTT is a very popular communication protocol between IoT devices. It's based on a simple publisher/subscriber architecture where all messages pass through an MQTT broker, who directs messages from publishers to subscribers. As a subscriber, you subscribe to ",(0,n.kt)("em",{parentName:"p"},"topics"),", which are typically made up of different subpaths. As a publisher of messages, you publish your messages to these topics. A message can contain a ",(0,n.kt)("em",{parentName:"p"},"payload"),", i.e. a data object with one or more pieces of data."),(0,n.kt)("p",null,'As an example, an IoT thermometer, called "thermometer1", may publish temperature and pressure data to "/thermometer1/thermometer" topic with a payload containing a time, a temperature and a pressure reading.'),(0,n.kt)("p",null,"MQTT is a very capable protocol and we will only cover parts of it in this guide. You can read more about it ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/MQTT"},"here"),";"),(0,n.kt)("h2",{id:"using-the-the-mqtt-module"},"Using the the MQTT module"),(0,n.kt)("p",null,'First, let\'s create a new project using the minimal "Hello" template. Give the project a name, for example "MQTT Messaging".\nSince the MQTT nodes are not part of the default node set in Noodl, we need to enable the MQTT module. Find the module tab in the sidebar and add the "MQTT" module.'),(0,n.kt)("p",null,"Now two more nodes are available in your project, the ",(0,n.kt)("a",{parentName:"p",href:"/modules/mqtt/send-message.md"},(0,n.kt)("strong",{parentName:"a"},"Send Message"))," and ",(0,n.kt)("a",{parentName:"p",href:"/modules/mqtt/receive-message.md"},(0,n.kt)("strong",{parentName:"a"},"Receive Message"))," nodes."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(15525).Z,width:"628",height:"882"})),(0,n.kt)("p",null,"Try adding a ",(0,n.kt)("strong",{parentName:"p"},"Send Message")," and ",(0,n.kt)("strong",{parentName:"p"},"Receive Message")," node to the project, to see that they are now available."),(0,n.kt)("h2",{id:"connecting-to-an-mqtt-broker"},"Connecting to an MQTT broker"),(0,n.kt)("p",null,"For the MQTT messaging to work, we need to connect to an MQTT broker. Setting up and hosting a commercial, secure MQTT broker is a bit of a hassle. So for this guide we will instead use the open MQTT broker \"Shiftr\". It's being hosted in the cloud so we don't need to worry about hosting it. Another good alternative is the open source broker ",(0,n.kt)("a",{parentName:"p",href:"https://mosquitto.org/"},"Mosquitto")," that you can run locally or host yourself."),(0,n.kt)("p",null,"Go to ",(0,n.kt)("a",{parentName:"p",href:"http://shiftr.io"},"shiftr.io"),' and sign up for an account if you don\'t already have one. Also create a new "Name space" and a "Token" for the namespace. In the end you should have created an MQTT endpoint to use, similar to the one below.'),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(34562).Z,width:"723",height:"170"})),(0,n.kt)("p",null,'Now go into your project settings and paste in the URL (beginning with "mqtt:") into the "Broker URL" field.'),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(82856).Z,width:"490",height:"386"})),(0,n.kt)("h2",{id:"testing-our-mqtt-broker"},"Testing our MQTT broker"),(0,n.kt)("p",null,"Ok, now we have everything to get started to send MQTT messages. Let's try it!"),(0,n.kt)("p",null,'Start by adding a "Send Message" node. Set its topic to "mytopic" and add a payload called "myvalue".'),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(65528).Z,width:"1034",height:"940"})),(0,n.kt)("p",null,'Now let\'s send our first message to the topic "mytopic". So we assign a value to the input "myvalue", using a ',(0,n.kt)("strong",{parentName:"p"},"Number")," node and connect the ",(0,n.kt)("em",{parentName:"p"},"Send")," signal to the click event of the background ",(0,n.kt)("strong",{parentName:"p"},"Group"),". Any value is fine, we just want to see if it's working."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(33801).Z,width:"930",height:"666"})),(0,n.kt)("p",null,"When you start clicking the background rectangle, you should now be sending messages to the MQTT broker. If you bring up you web browser with your Shiftr name space topology you should be seeing some events entering the system everytime you click. Again, remember that the MQTT messages are being sent to a router hosted somewhere in the cloud, which means that any device with an internet connection can now connect to your Noodl app, or vice versa, by sending messages to the router."),(0,n.kt)("div",{class:"ndl-images"},(0,n.kt)("img",{src:"mqtt-guide-img/mqtt-guide6.gif",class:"ndl-image medium"}),(0,n.kt)(i.Z,{json:{nodes:[{id:"3b093066-8241-2d44-8430-07b7e37b6977",type:"Group",x:177,y:141.5,parameters:{backgroundColor:"#FFFFFF"},ports:[],children:[{id:"ada2b412-3417-a23c-b4c2-86a5dfa1d480",type:"Text",x:197,y:223.5,parameters:{sizeMode:"contentSize",alignX:"center",alignY:"center",text:"Hello",color:"#171717",fontFamily:"Arial",position:"absolute",fontSize:{value:30,unit:"px"}},ports:[],children:[]}]},{id:"f95cf4c6-2ad9-c84b-882d-865d015193c0",type:"Send Message",x:-30.5,y:139,parameters:{topic:"mytopic",payload:"myvalue"},ports:[],children:[]},{id:"fb4aa28a-06fc-6b1b-128c-78cb989e1455",type:"Number",x:191.5,y:298,parameters:{value:25},ports:[],children:[]}],connections:[{fromId:"3b093066-8241-2d44-8430-07b7e37b6977",fromProperty:"onClick",toId:"f95cf4c6-2ad9-c84b-882d-865d015193c0",toProperty:"Send"},{fromId:"fb4aa28a-06fc-6b1b-128c-78cb989e1455",fromProperty:"savedValue",toId:"f95cf4c6-2ad9-c84b-882d-865d015193c0",toProperty:"payload-myvalue"}]},mdxType:"CopyToClipboardButton"})),(0,n.kt)("p",null,'You can inspect the messages in Shiftr and see the payload that\'s being sent. Also try opening a few browser windows running your simple Noodl app. As you can see, there are now multiple clients in Shiftr that can publish messages to the "mytopic" topic. Each browser window is a publisher in the broker, as well as your Noodl Editor.'),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(13173).Z,width:"1078",height:"788"})),(0,n.kt)("p",null,'Now let\'s change things up slightly as we are going to receive messages as well. We are going to assign each client a random color. When you click the background, that color will be sent out to all subscribers of the topic "mytopic". A circle in the middle of the screen will present any received value.'),(0,n.kt)("p",null,"The random color is generated using a ",(0,n.kt)("strong",{parentName:"p"},"Color Blend")," node with 5 different base colors. By generating a random number, between 0 and 5, we randomly pick a color on that color scale. Each client will have their own random number and respective color."),(0,n.kt)("p",null,"The color is published once the background is clicked, or rather, the random number is published. When you receive a message which will include the random number, that number is translated back to a color through a ",(0,n.kt)("strong",{parentName:"p"},"Color Blend")," node with the same colors as before."),(0,n.kt)("div",{class:"ndl-images"},(0,n.kt)("img",{src:"mqtt-guide-img/mqtt-guide8.png",class:"ndl-image medium"}),(0,n.kt)(i.Z,{json:{nodes:[{id:"6643149e-ba94-b26f-bc40-80b79bfc01cf",type:"Group",x:177,y:141.5,parameters:{backgroundColor:"#FFFFFF"},ports:[],children:[{id:"daadd5d9-073e-c3e7-0d4d-f5ec6ddcf190",type:"Circle",x:197,y:243.5,parameters:{size:200,position:"absolute",alignY:"center",alignX:"center",strokeEnabled:!0,strokeWidth:5,strokeColor:"#FFFFFF"},ports:[],children:[]}]},{id:"6c0a2207-03bd-835f-83a3-834b5a9548eb",type:"Send Message",x:-39.46794686634766,y:12.167608604511884,parameters:{topic:"mytopic",payload:"myvalue"},ports:[],children:[]},{id:"00f5506c-2a41-7c97-d1ec-4c1f17f83542",type:"Expression",x:334.05517426052154,y:-157.0598440470801,parameters:{expression:"random()*5"},ports:[],children:[]},{id:"00f617a2-baf5-5e99-e1ac-714af2f765cf",type:"Receive Message",x:366.07566421792484,y:486.0503305263981,parameters:{topic:"mytopic",payload:"myvalue"},ports:[],children:[]},{id:"9888cd86-341e-cc47-62d0-aa18095daa2a",type:"Color Blend",x:399.4325313988179,y:17.225848316195083,parameters:{"color 0":"#000000","color 1":"#A7A04A","color 2":"#E8423A","color 3":"#C6C6C6","color 4":"#006394"},ports:[],children:[]},{id:"f82c3bf5-127e-6eba-20f1-397c8fd0b114",type:"Color Blend",x:387.8845576559488,y:321.32249021174806,parameters:{"color 0":"#000000","color 1":"#A7A04A","color 2":"#E8423A","color 3":"#C6C6C6","color 4":"#006394"},ports:[],children:[]}],connections:[{fromId:"6643149e-ba94-b26f-bc40-80b79bfc01cf",fromProperty:"onClick",toId:"6c0a2207-03bd-835f-83a3-834b5a9548eb",toProperty:"Send"},{fromId:"00f5506c-2a41-7c97-d1ec-4c1f17f83542",fromProperty:"result",toId:"6c0a2207-03bd-835f-83a3-834b5a9548eb",toProperty:"payload-myvalue"},{fromId:"00f5506c-2a41-7c97-d1ec-4c1f17f83542",fromProperty:"result",toId:"9888cd86-341e-cc47-62d0-aa18095daa2a",toProperty:"blendValue"},{fromId:"9888cd86-341e-cc47-62d0-aa18095daa2a",fromProperty:"result",toId:"6643149e-ba94-b26f-bc40-80b79bfc01cf",toProperty:"backgroundColor"},{fromId:"00f617a2-baf5-5e99-e1ac-714af2f765cf",fromProperty:"payload-myvalue",toId:"f82c3bf5-127e-6eba-20f1-397c8fd0b114",toProperty:"blendValue"},{fromId:"f82c3bf5-127e-6eba-20f1-397c8fd0b114",fromProperty:"result",toId:"daadd5d9-073e-c3e7-0d4d-f5ec6ddcf190",toProperty:"fillColor"}]},mdxType:"CopyToClipboardButton"})),(0,n.kt)("p",null,"Let's load a couple of browser windows running your app, and maybe your mobile phone as well, and click around in the different windows. If everything works as expected you should see that the inner circles in all clients will change color to the background you just clicked."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(60328).Z,width:"640",height:"393"})),(0,n.kt)("h2",{id:"dynamic-topic-names"},"Dynamic Topic names"),(0,n.kt)("p",null,"We have now published and subscribed to messages on one single topic, basically broadcasting messages to all clients. You may want to identify yourself as a publisher, or be more selective on what messages you subscribe to. So let's divide the clients into five groups. You belong to a specific group (Group_1 - Group_5) depending on a random number (0-0.999... belong to first group, 1-1.999... to second, etc). We use some neat nodes, i.e. ",(0,n.kt)("a",{parentName:"p",href:"/nodes/math/expression"},(0,n.kt)("strong",{parentName:"a"},"Expressions"))," and ",(0,n.kt)("a",{parentName:"p",href:"/nodes/string-manipulation/string-format"},(0,n.kt)("strong",{parentName:"a"},"String Formats"))," to create the group names and determine which group you belong to."),(0,n.kt)("p",null,"Each group gets its own topic which is dynamically created using a ",(0,n.kt)("em",{parentName:"p"},"{}"),' construct. Note that you have to be a bit careful when naming topics. For example, avoid whitespaces, hence we call the groups "Group_X".'),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(43814).Z,width:"1408",height:"684"})),(0,n.kt)("p",null,"There is also a ",(0,n.kt)("strong",{parentName:"p"},"Receive Message")," node that each group uses to subscribe to only its group messages. When they receive a message a ",(0,n.kt)("strong",{parentName:"p"},"Transiton")," node triggers an animation of the opacity of the ",(0,n.kt)("strong",{parentName:"p"},"Text")," node, causing it to flash in the circle."),(0,n.kt)("div",{class:"ndl-images"},(0,n.kt)("img",{src:"/modules/mqtt/mqtt-guide-img/mqtt-guide11.png",class:"ndl-image large"}),(0,n.kt)(i.Z,{json:{nodes:[{id:"a961fe46-7861-9cd8-9d32-7eb2cfdccdbc",type:"Group",x:177,y:141.5,parameters:{backgroundColor:"#FFFFFF"},ports:[],children:[{id:"986da408-b8ff-c64c-efd1-2931f14e31e1",type:"Text",x:197,y:243.5,parameters:{sizeMode:"contentSize",alignX:"center",fontSize:{value:20,unit:"px"},fontFamily:"Helvetica",color:"#FFFFFF",marginTop:{value:10,unit:"px"}},ports:[],children:[]},{id:"d6edd70a-aab6-bfa4-ff82-00878a4db77f",type:"Circle",x:197,y:325.5,parameters:{size:200,position:"absolute",alignY:"center",alignX:"center",strokeEnabled:!0,strokeWidth:5,strokeColor:"#FFFFFF"},ports:[],children:[]},{id:"1d1686ca-4d5f-b37c-6a22-400bffc1e179",type:"Text",label:"Text",x:197,y:407.5,parameters:{position:"absolute",sizeMode:"contentSize",alignX:"center",alignY:"center",text:"",fontFamily:"Helvetica",fontSize:{value:20,unit:"px"},color:"#FFFFFF"},ports:[],children:[]}]},{id:"3b7e73f7-dfe5-28cb-4d7e-9d0afecc48ad",type:"Send Message",x:-99.46151025686125,y:153.3218874905391,parameters:{topic:"mytopic",payload:"myvalue"},ports:[],children:[]},{id:"b540b1ea-05a8-7977-2373-8904630a69e3",type:"Expression",x:258.55835369159354,y:-85.4680314386139,parameters:{expression:"random()*5"},ports:[],children:[]},{id:"0058cac0-940e-9b2a-481d-6cb26d8d2a24",type:"Receive Message",x:588.2558620795669,y:323.1620374217247,parameters:{topic:"mytopic",payload:"myvalue",enabled:!0},ports:[],children:[]},{id:"c428146e-5701-dc82-551c-eae4971cd0a1",type:"Color Blend",x:399.4325313988179,y:17.225848316195083,parameters:{"color 0":"#000000","color 1":"#A7A04A","color 2":"#E8423A","color 3":"#C6C6C6","color 4":"#006394"},ports:[],children:[]},{id:"4a2bcae5-d62c-0d79-b6e5-cae995fe6e01",type:"Color Blend",x:399.0706330517986,y:331.88202000987104,parameters:{"color 0":"#000000","color 1":"#A7A04A","color 2":"#E8423A","color 3":"#C6C6C6","color 4":"#006394"},ports:[],children:[]},{id:"5c4cc0ea-720a-e042-9214-28a4fd4e343a",type:"Receive Message",x:-102.71153493076321,y:289.6270849236503,parameters:{topic:"{mygroup}/message",payload:"text"},ports:[],children:[]},{id:"25a3bbc9-a0a3-3a1f-d0dc-3120127352a5",type:"String Selector",x:-107.85891325999646,y:-340.16310128056824,parameters:{"input 0":"Group_1","input 1":"Group_2","input 2":"Group_3","input 3":"Group_4","input 4":"Group_5"},ports:[],children:[]},{id:"b298ebae-1c7a-427d-76ee-5811dd697dd7",type:"Expression",x:387.0563061618897,y:-256.65160955180494,parameters:{expression:"floor(x)"},ports:[],children:[]},{id:"f2ae905b-d3f8-684e-5047-f9e756ba2c83",type:"Send Message",x:-101.5613422950648,y:-88.57450240625224,parameters:{topic:"{mygroup}/message",payload:"text"},ports:[],children:[]},{id:"3bbebb1a-0fa1-d7dd-0b32-5251c7ee7c0a",type:"Transition",x:-99.76801957568031,y:450.15483129178,parameters:{targetValue:0,"overrideCurrentValue.value":1,duration:2e3},ports:[],children:[]},{id:"3a17439c-2747-cad3-69df-cb71063a8c40",type:"String Format",x:-418.01393979063266,y:-88.14376143188795,parameters:{format:"{x} rulez!"},ports:[],children:[]}],connections:[{fromId:"a961fe46-7861-9cd8-9d32-7eb2cfdccdbc",fromProperty:"onClick",toId:"3b7e73f7-dfe5-28cb-4d7e-9d0afecc48ad",toProperty:"Send"},{fromId:"b540b1ea-05a8-7977-2373-8904630a69e3",fromProperty:"result",toId:"3b7e73f7-dfe5-28cb-4d7e-9d0afecc48ad",toProperty:"payload-myvalue"},{fromId:"b540b1ea-05a8-7977-2373-8904630a69e3",fromProperty:"result",toId:"c428146e-5701-dc82-551c-eae4971cd0a1",toProperty:"blendValue"},{fromId:"c428146e-5701-dc82-551c-eae4971cd0a1",fromProperty:"result",toId:"a961fe46-7861-9cd8-9d32-7eb2cfdccdbc",toProperty:"backgroundColor"},{fromId:"0058cac0-940e-9b2a-481d-6cb26d8d2a24",fromProperty:"payload-myvalue",toId:"4a2bcae5-d62c-0d79-b6e5-cae995fe6e01",toProperty:"blendValue"},{fromId:"4a2bcae5-d62c-0d79-b6e5-cae995fe6e01",fromProperty:"result",toId:"d6edd70a-aab6-bfa4-ff82-00878a4db77f",toProperty:"fillColor"},{fromId:"5c4cc0ea-720a-e042-9214-28a4fd4e343a",fromProperty:"payload-text",toId:"1d1686ca-4d5f-b37c-6a22-400bffc1e179",toProperty:"text"},{fromId:"b540b1ea-05a8-7977-2373-8904630a69e3",fromProperty:"result",toId:"b298ebae-1c7a-427d-76ee-5811dd697dd7",toProperty:"x"},{fromId:"b298ebae-1c7a-427d-76ee-5811dd697dd7",fromProperty:"result",toId:"25a3bbc9-a0a3-3a1f-d0dc-3120127352a5",toProperty:"index"},{fromId:"25a3bbc9-a0a3-3a1f-d0dc-3120127352a5",fromProperty:"currentValue",toId:"986da408-b8ff-c64c-efd1-2931f14e31e1",toProperty:"text"},{fromId:"25a3bbc9-a0a3-3a1f-d0dc-3120127352a5",fromProperty:"currentValue",toId:"5c4cc0ea-720a-e042-9214-28a4fd4e343a",toProperty:"topic-mygroup"},{fromId:"25a3bbc9-a0a3-3a1f-d0dc-3120127352a5",fromProperty:"currentValue",toId:"f2ae905b-d3f8-684e-5047-f9e756ba2c83",toProperty:"topic-mygroup"},{fromId:"a961fe46-7861-9cd8-9d32-7eb2cfdccdbc",fromProperty:"onClick",toId:"f2ae905b-d3f8-684e-5047-f9e756ba2c83",toProperty:"Send"},{fromId:"3bbebb1a-0fa1-d7dd-0b32-5251c7ee7c0a",fromProperty:"currentValue",toId:"1d1686ca-4d5f-b37c-6a22-400bffc1e179",toProperty:"opacity"},{fromId:"5c4cc0ea-720a-e042-9214-28a4fd4e343a",fromProperty:"messageReceived",toId:"3bbebb1a-0fa1-d7dd-0b32-5251c7ee7c0a",toProperty:"overrideCurrentValue.do"},{fromId:"25a3bbc9-a0a3-3a1f-d0dc-3120127352a5",fromProperty:"currentValue",toId:"3a17439c-2747-cad3-69df-cb71063a8c40",toProperty:"x"},{fromId:"3a17439c-2747-cad3-69df-cb71063a8c40",fromProperty:"formatted",toId:"f2ae905b-d3f8-684e-5047-f9e756ba2c83",toProperty:"payload-text"}]},mdxType:"CopyToClipboardButton"})),(0,n.kt)("p",null,"You can see that the new topics start popping up in the Shiftr topology once you start sending messages between the browser windows."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(58680).Z,width:"1142",height:"664"})),(0,n.kt)("p",null,"As you click around you in your browser windows you can see that messages are only sent within a group."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(18859).Z,width:"640",height:"393"})),(0,n.kt)("p",null,"Now you know how to publish and subscribe to topics and how to connect to an MQTT broker. This can for example be used to connect to an Arduino or a Raspberry Pi, etc, if you want to play with some hardware. Find some software that can connect to an MQTT broker and start publishing and subscribing to messages. Best of luck!"))}m.isMDXComponent=!0},53488:function(e,t,o){o.d(t,{Z:function(){return n}});var a=o(67294);function r(e){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)})):function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var o=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+o)}catch(a){console.error("Fallback: Oops, unable to copy",a)}document.body.removeChild(t)}(e)}function n(e){return a.createElement("button",{className:"ndl-copy-nodes-button",onClick:function(){return t=e.json,void r(JSON.stringify(t));var t}})}},15525:function(e,t,o){t.Z=o.p+"assets/images/mqtt-guide1-66de59b1f43d73220ef18d9b1657f74e.png"},43814:function(e,t,o){t.Z=o.p+"assets/images/mqtt-guide10-b0e40412099aa3011f5622cc0d6e73f4.png"},58680:function(e,t,o){t.Z=o.p+"assets/images/mqtt-guide12-0316d17463bf3d25ae0803cbc773224e.png"},18859:function(e,t,o){t.Z=o.p+"assets/images/mqtt-guide13-cfd0411e8443542177a6a03695a9d056.gif"},34562:function(e,t,o){t.Z=o.p+"assets/images/mqtt-guide2-cc554b553e4ff504cfdbef72b253c850.png"},82856:function(e,t,o){t.Z=o.p+"assets/images/mqtt-guide3-d065919f874fbfa32aade3eaa593007c.png"},65528:function(e,t,o){t.Z=o.p+"assets/images/mqtt-guide4-b00518b7cdc9ef4e5a976314da229586.png"},33801:function(e,t,o){t.Z=o.p+"assets/images/mqtt-guide5-7686c50ab9444e76d3463f62e724f0bf.png"},13173:function(e,t,o){t.Z=o.p+"assets/images/mqtt-guide7-38bff9b6445643b3cd01b1933e80559e.png"},60328:function(e,t,o){t.Z=o.p+"assets/images/mqtt-guide9-a0d16596f5aee823410b6dce1e818f26.gif"}}]);