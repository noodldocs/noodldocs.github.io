"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[7855],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(a),h=o,m=u["".concat(d,".").concat(h)]||u[h]||p[h]||r;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},53488:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function o(e){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)})):function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var a=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+a)}catch(n){console.error("Fallback: Oops, unable to copy",n)}document.body.removeChild(t)}(e)}function r(e){return n.createElement("button",{className:"ndl-copy-nodes-button",onClick:function(){return t=e.json,void o(JSON.stringify(t));var t}})}},75633:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return h}});var n=a(83117),o=a(80102),r=(a(67294),a(3905)),s=a(44996),i=a(53488),d=["components"],l={title:"States Node",hide_title:!0},c=void 0,p={unversionedId:"guides/user-interfaces/states",id:"guides/user-interfaces/states",title:"States Node",description:"",source:"@site/docs/guides/user-interfaces/states.mdx",sourceDirName:"guides/user-interfaces",slug:"/guides/user-interfaces/states",permalink:"/2.8/docs/guides/user-interfaces/states",tags:[],version:"current",frontMatter:{title:"States Node",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Visual States",permalink:"/2.8/docs/guides/user-interfaces/visual-states"},next:{title:"Scrolling Content",permalink:"/2.8/docs/guides/user-interfaces/scrolling-content"}},u={},h=[{value:"The visuals",id:"the-visuals",level:2},{value:"The states node",id:"the-states-node",level:2},{value:"Transitions",id:"transitions",level:2},{value:"Chaining States",id:"chaining-states",level:2}],m={toc:h};function f(e){var t=e.components,l=(0,o.Z)(e,d);return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"states-node"},"States Node"),(0,r.kt)("p",null,"A common concept in Noodl is the use of different visual states. In this guide we will cover states with an example of how to create a simple reusable switch component, and an example of hovering effects."),(0,r.kt)("div",{className:"ndl-image-with-background s"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(90810).Z,width:"314",height:"74"}))),(0,r.kt)("p",null,"The examples will cover how to use a ",(0,r.kt)("strong",{parentName:"p"},"States")," node for handling transitions and interactions."),(0,r.kt)("h2",{id:"the-visuals"},"The visuals"),(0,r.kt)("p",null,"First let's start with the basic visual nodes that make up the switch. This is simply a ",(0,r.kt)("strong",{parentName:"p"},"Group")," and a ",(0,r.kt)("strong",{parentName:"p"},"Circle")," with proper styling. You can copy the nodes below and paste into your own project."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("img",{src:"/2.8/docs/guides/user-interfaces/states/switch-nodes.png",className:"ndl-image med"}),(0,r.kt)(i.Z,{json:{nodes:[{id:"beeb6388-461b-f1fe-d64e-be798e4b1b4d",type:"Group",x:441.71346128847347,y:300.98375737190554,parameters:{backgroundColor:"#FFFFFF"},ports:[],children:[{id:"9677d929-9a49-7fc5-ae14-27a1b48e883f",type:"Group",x:461.71346128847347,y:346.98375737190554,parameters:{width:{value:80,unit:"px"},height:{value:40,unit:"px"},backgroundColor:"#F0F0F0",borderRadius:20,alignX:"center",marginTop:{value:20,unit:"px"}},ports:[],children:[{id:"aeda33bf-10cb-1e76-07b2-4a368140ca65",type:"Circle",x:481.71346128847347,y:392.98375737190554,parameters:{fillColor:"#E8E8E8",size:40,strokeWidth:2,strokeColor:"#454545",strokeEnabled:!0},ports:[],children:[]}]}]}],connections:[]},mdxType:"CopyToClipboardButton"})),(0,r.kt)("p",null,"Below you can see the styling of the two nodes. The first image shows the Circle node's properties and the second image shows the Group node's properties. Don't forget that you can hover the nodes in the graph to see their placement in the preview."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("img",{src:"/2.8/docs/guides/user-interfaces/states/style-props1.png",className:"ndl-image small"}),(0,r.kt)("img",{src:"/2.8/docs/guides/user-interfaces/states/style-props2.png",className:"ndl-image small"})),(0,r.kt)("h2",{id:"the-states-node"},"The states node"),(0,r.kt)("p",null,"A very common pattern is to represent states visually. In this example we want our switch to have two states ",(0,r.kt)("strong",{parentName:"p"},"On")," and ",(0,r.kt)("strong",{parentName:"p"},"Off"),", and we want it to have different visuals for these states. This is achieved with the ",(0,r.kt)("strong",{parentName:"p"},"States")," node. Start by creating a new ",(0,r.kt)("a",{parentName:"p",href:"/nodes/utilities/logic/states"},"States")," node."),(0,r.kt)("p",null,"Next, create the two states."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("img",{src:"/2.8/docs/guides/user-interfaces/states/create-states.gif",className:"ndl-image med"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"States")," node will be in one of the states that we just defined. It starts in the state specified by the ",(0,r.kt)("strong",{parentName:"p"},"State")," property that shows up when you add states. Later we will switch state by connecting a signal."),(0,r.kt)("p",null,"We will also specify ",(0,r.kt)("strong",{parentName:"p"},"Values")," for each of our states. In the same way you added states, add a single value and call it ",(0,r.kt)("strong",{parentName:"p"},"Knob X"),". It doesn't really matter what you call it, as long as you know what it is for. In this case it's for moving the knob's (the Circle node) X position to its correct position for the two states."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("img",{src:"/2.8/docs/guides/user-interfaces/states/values-1.png",className:"ndl-image med"})),(0,r.kt)("p",null,"Specify the value for each state. The X position should be ",(0,r.kt)("strong",{parentName:"p"},"40")," when the switch is in the ",(0,r.kt)("strong",{parentName:"p"},"On")," state and ",(0,r.kt)("strong",{parentName:"p"},"0")," when the switch is in the ",(0,r.kt)("strong",{parentName:"p"},"Off")," state. Enter these values in the ",(0,r.kt)("strong",{parentName:"p"},"States")," node properties."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("img",{src:"/2.8/docs/guides/user-interfaces/states/on-values.png",className:"ndl-image med"}),(0,r.kt)("img",{src:"/2.8/docs/guides/user-interfaces/states/off-values.png",className:"ndl-image med"})),(0,r.kt)("p",null,"Connect the ",(0,r.kt)("strong",{parentName:"p"},"Knob X")," output of the ",(0,r.kt)("strong",{parentName:"p"},"States")," node to the ",(0,r.kt)("strong",{parentName:"p"},"Pos X")," input of the ",(0,r.kt)("strong",{parentName:"p"},"Circle")," node."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("img",{src:"/2.8/docs/guides/user-interfaces/states/knob-x-connected.png"})),(0,r.kt)("p",null,"As you can see the ",(0,r.kt)("strong",{parentName:"p"},"States")," node will get an output corresponding to each value that is defined under ",(0,r.kt)("strong",{parentName:"p"},"Values"),". This output will transition to the specified values when the ",(0,r.kt)("strong",{parentName:"p"},"States")," node changes state. One way to see the different states and transitions is to play with the ",(0,r.kt)("strong",{parentName:"p"},"State")," dropdown menu in the properties panel."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("video",{width:"100%",autoPlay:!0,muted:!0,loop:!0,src:(0,s.Z)("/docs/guides/user-interfaces/states/change-state.mp4")})),(0,r.kt)("p",null,"If you hover over the output connection of the ",(0,r.kt)("strong",{parentName:"p"},"States")," node a small popup will show the current value that is being outputted. If you click this small popup, you pin the popup so that it stays visible. Now you can see the output value change as it transitions from one state to another."),(0,r.kt)("p",null,"You can connect the outputs of the ",(0,r.kt)("strong",{parentName:"p"},"States")," node to anything you like. In this example we connected the output to an input where they were both of the type ",(0,r.kt)("strong",{parentName:"p"},"Number"),". You can use different types than numbers. Add a new ",(0,r.kt)("strong",{parentName:"p"},"Value")," to the ",(0,r.kt)("strong",{parentName:"p"},"States"),' node. Call it "Background Color" and give it a ',(0,r.kt)("strong",{parentName:"p"},"Color")," type instead of the default ",(0,r.kt)("strong",{parentName:"p"},"Number")," type. Then choose two different colors for the two states and connect the output to the ",(0,r.kt)("strong",{parentName:"p"},"Background Color")," of the ",(0,r.kt)("strong",{parentName:"p"},"Group")," node containing the ",(0,r.kt)("strong",{parentName:"p"},"Circle"),"."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("img",{src:"/2.8/docs/guides/user-interfaces/states/color-type.png",className:"ndl-image med"})),(0,r.kt)("p",null,"Finally, we can make the ",(0,r.kt)("strong",{parentName:"p"},"States")," node toggle state when the switch ",(0,r.kt)("strong",{parentName:"p"},"Group")," node is clicked. This is achieved by connecting the ",(0,r.kt)("strong",{parentName:"p"},"Click")," signal from the ",(0,r.kt)("strong",{parentName:"p"},"Group")," to the ",(0,r.kt)("strong",{parentName:"p"},"Toggle")," input of the ",(0,r.kt)("strong",{parentName:"p"},"States")," node. This will make the ",(0,r.kt)("strong",{parentName:"p"},"States")," node jump to the next state in the list and when the last one is reached it will jump to the first one again. In this case we only have two states, so it will toggle between ",(0,r.kt)("strong",{parentName:"p"},"On")," and ",(0,r.kt)("strong",{parentName:"p"},"Off"),"."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("img",{src:"/2.8/docs/guides/user-interfaces/states/click-toggle.png"}),(0,r.kt)(i.Z,{json:{nodes:[{id:"f0d8169f-90ca-9cd9-bc88-af4c2ed631d0",type:"Group",x:441.71346128847347,y:300.98375737190554,parameters:{backgroundColor:"#FFFFFF"},ports:[],children:[{id:"f2461a9d-49c6-f184-1ac1-a75450a7c856",type:"Group",x:461.71346128847347,y:346.98375737190554,parameters:{width:{value:80,unit:"px"},height:{value:40,unit:"px"},backgroundColor:"#F0F0F0",borderRadius:20,alignX:"center",marginTop:{value:20,unit:"px"}},ports:[],children:[{id:"c66997cc-19d2-630c-692e-0caafdf37dd7",type:"Circle",x:481.71346128847347,y:448.98375737190554,parameters:{fillColor:"#E8E8E8",size:40,strokeWidth:2,strokeColor:"#454545",strokeEnabled:!0},ports:[],children:[]}]}]},{id:"5d631656-dea2-b5d7-f5ee-ee27e220463b",type:"States",x:232.07664638676232,y:376.3848345864951,parameters:{states:"On,Off",values:"Knob X,Background Color","type-Background Color":"color","value-On-Knob X":40,"value-Off-Knob X":0,"value-Off-Background Color":"#F0F0F0","value-On-Background Color":"#CCE6CE",startState:"Off"},ports:[],children:[]}],connections:[{fromId:"5d631656-dea2-b5d7-f5ee-ee27e220463b",fromProperty:"Knob X",toId:"c66997cc-19d2-630c-692e-0caafdf37dd7",toProperty:"transformX"},{fromId:"5d631656-dea2-b5d7-f5ee-ee27e220463b",fromProperty:"Background Color",toId:"f2461a9d-49c6-f184-1ac1-a75450a7c856",toProperty:"backgroundColor"},{fromId:"f2461a9d-49c6-f184-1ac1-a75450a7c856",fromProperty:"onClick",toId:"5d631656-dea2-b5d7-f5ee-ee27e220463b",toProperty:"toggle"}]},mdxType:"CopyToClipboardButton"})),(0,r.kt)("h2",{id:"transitions"},"Transitions"),(0,r.kt)("p",null,"For ",(0,r.kt)("em",{parentName:"p"},"number")," and ",(0,r.kt)("em",{parentName:"p"},"color")," types the ",(0,r.kt)("strong",{parentName:"p"},"States")," node will try to smoothly transition between the states. Sometimes this is not the desired behaviour, and sometimes you want to change how the transition behaves. Noodl let's you edit the transition curves to change the transition behaviour. Take a look at the example below. You can copy the nodes and replace the old nodes in your project or create a new component."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("img",{src:"/2.8/docs/guides/user-interfaces/states/hover-fx-nodes.png",className:"ndl-image med"}),(0,r.kt)(i.Z,{json:{nodes:[{id:"4c6ec6bd-2ba3-807a-9177-da451a835ec2",type:"Group",x:410.63681490171115,y:392,parameters:{backgroundColor:"#FFFFFF"},ports:[],children:[{id:"56e1ec26-a280-b297-baf3-f5365f6a6124",type:"Group",x:430.63681490171115,y:438,parameters:{width:{value:80,unit:"px"},height:{value:80,unit:"px"},backgroundColor:"#E6DD39",borderRadius:20,alignX:"center",marginTop:{value:70,unit:"px"}},ports:[],children:[]}]},{id:"34a39ad5-0999-133a-5f7e-6943ebd8d899",type:"States",label:"Hover",x:177.3701941946174,y:432.9317475959747,parameters:{states:"Yes,No",startState:"No",values:"Size,Color","type-Color":"color","value-Yes-Color":"#D4CE35","value-No-Color":"#323975","value-Yes-Size":1.5,"value-No-Size":1},ports:[],children:[]}],connections:[{fromId:"56e1ec26-a280-b297-baf3-f5365f6a6124",fromProperty:"hoverStart",toId:"34a39ad5-0999-133a-5f7e-6943ebd8d899",toProperty:"to-Yes"},{fromId:"56e1ec26-a280-b297-baf3-f5365f6a6124",fromProperty:"hoverEnd",toId:"34a39ad5-0999-133a-5f7e-6943ebd8d899",toProperty:"to-No"},{fromId:"34a39ad5-0999-133a-5f7e-6943ebd8d899",fromProperty:"Color",toId:"56e1ec26-a280-b297-baf3-f5365f6a6124",toProperty:"backgroundColor"},{fromId:"34a39ad5-0999-133a-5f7e-6943ebd8d899",fromProperty:"Size",toId:"56e1ec26-a280-b297-baf3-f5365f6a6124",toProperty:"transformScale"}]},mdxType:"CopyToClipboardButton"})),(0,r.kt)("p",null,"This simple graph has a ",(0,r.kt)("strong",{parentName:"p"},"States")," node that controls the hover state of a ",(0,r.kt)("strong",{parentName:"p"},"Group"),". As you can see the ",(0,r.kt)("strong",{parentName:"p"},"Group")," sends a signal when it is hovered which transitions the ",(0,r.kt)("strong",{parentName:"p"},"States")," node to the ",(0,r.kt)("strong",{parentName:"p"},"Yes")," state. A different signal is sent when the mouse leaves (you stop hovering), which changes the ",(0,r.kt)("strong",{parentName:"p"},"States")," node to the ",(0,r.kt)("strong",{parentName:"p"},"No")," state. The ",(0,r.kt)("strong",{parentName:"p"},"States")," node changes the ",(0,r.kt)("strong",{parentName:"p"},"Scale")," and ",(0,r.kt)("strong",{parentName:"p"},"Color")," of the ",(0,r.kt)("strong",{parentName:"p"},"Group")," node when it goes between its states. The effect is shown below:"),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("img",{src:"/2.8/docs/guides/user-interfaces/states/hover-fx1.gif",className:"ndl-image small"})),(0,r.kt)("p",null,"Both transitions (color and size) have the default transition curves. You can edit the transition curves in the properties of the ",(0,r.kt)("strong",{parentName:"p"},"States")," node. Look for the transitions when moving to the ",(0,r.kt)("strong",{parentName:"p"},"Yes")," state (i.e. the hovered state)."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("img",{src:"/2.8/docs/guides/user-interfaces/states/transition-props.png",className:"ndl-image med"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Default")," property is a transition curve that is used for all values if they don't have a specific transition curve set for themselves. If you want to change the curve for all transitions use this."),(0,r.kt)("p",null,"In this case we want to change the curve for the ",(0,r.kt)("strong",{parentName:"p"},"Size")," transition. You can edit the curve via the curve editor."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("img",{src:"/2.8/docs/guides/user-interfaces/states/change-size-curve.gif",className:"ndl-image med"})),(0,r.kt)("p",null,"You can play with different settings for the curves and see them working when you hover the rectangle in the preview. Here is one example with a little bounce in the ",(0,r.kt)("strong",{parentName:"p"},"Size")," transition and a linear ",(0,r.kt)("strong",{parentName:"p"},"Color")," transition. Don't forget that you can use the preset icons on the right in the curve editor to choose between four presets:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ease In")," Slower in the beginning and accelerating towards the end."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ease Out")," Decelerates towards the end."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ease In and Out")," Smooth/slower start and end."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Linear")," Linear animation, starts instantly and keeps constant speed.")),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("img",{src:"/2.8/docs/guides/user-interfaces/states/hover-fx2.gif",className:"ndl-image small"})),(0,r.kt)("h2",{id:"chaining-states"},"Chaining States"),(0,r.kt)("p",null,"You can also connect several ",(0,r.kt)("strong",{parentName:"p"},"States")," nodes together to create more complex types of animations. In the node graph below we have a second ",(0,r.kt)("strong",{parentName:"p"},"States")," node that expands the ",(0,r.kt)("strong",{parentName:"p"},"Group")," node (changes the width). The second ",(0,r.kt)("strong",{parentName:"p"},"States")," node labeled ",(0,r.kt)("strong",{parentName:"p"},"Expand")," changes the width between the states ",(0,r.kt)("strong",{parentName:"p"},"Yes")," and ",(0,r.kt)("strong",{parentName:"p"},"No"),". The neat thing is that it is triggered when the first states node (the hover states) has reached the ",(0,r.kt)("strong",{parentName:"p"},"Yes")," state. It is returned to ",(0,r.kt)("strong",{parentName:"p"},"No")," when the mouse leaves (the hover end), just like the first node."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("img",{src:"/2.8/docs/guides/user-interfaces/states/chaining-states.png"}),(0,r.kt)(i.Z,{json:{nodes:[{id:"31b24415-e1ef-7480-db67-f8c3d9df8965",type:"Group",x:410.63681490171115,y:392,parameters:{backgroundColor:"#FFFFFF"},ports:[],children:[{id:"2255f3f8-c7c6-a195-9e20-22204968c916",type:"Group",x:430.63681490171115,y:438,parameters:{width:{value:80,unit:"px"},height:{value:80,unit:"px"},backgroundColor:"#E6DD39",borderRadius:20,alignX:"center",marginTop:{value:70,unit:"px"}},ports:[],children:[]}]},{id:"dadabea3-2a7f-ca23-a71d-79fae0cfff6e",type:"States",label:"Hover",x:173.3701941946174,y:343.9317475959747,parameters:{states:"Yes,No",startState:"No",values:"Size,Color","type-Color":"color","value-Yes-Color":"#D4CE35","value-No-Color":"#323975","value-Yes-Size":1.5,"value-No-Size":1,"transition-Yes-Size":{curve:[0,0,.39,2.31],dur:300,delay:0},"transition-Yes-Color":{curve:[0,0,1,1],dur:300,delay:0},"transition-No-Color":{curve:[0,0,1,1],dur:300,delay:0}},ports:[],children:[]},{id:"82a0d318-ac00-eb50-653e-bf2aa4344425",type:"States",label:"Expand",x:181.5019645647742,y:554.7158737979873,parameters:{states:"Yes,No",values:"Width","value-Yes-Width":200,"value-No-Width":90,startState:"No","transition-Yes-Width":{curve:[0,0,.58,1],dur:500,delay:0}},ports:[],children:[]}],connections:[{fromId:"2255f3f8-c7c6-a195-9e20-22204968c916",fromProperty:"hoverStart",toId:"dadabea3-2a7f-ca23-a71d-79fae0cfff6e",toProperty:"to-Yes"},{fromId:"2255f3f8-c7c6-a195-9e20-22204968c916",fromProperty:"hoverEnd",toId:"dadabea3-2a7f-ca23-a71d-79fae0cfff6e",toProperty:"to-No"},{fromId:"dadabea3-2a7f-ca23-a71d-79fae0cfff6e",fromProperty:"Color",toId:"2255f3f8-c7c6-a195-9e20-22204968c916",toProperty:"backgroundColor"},{fromId:"dadabea3-2a7f-ca23-a71d-79fae0cfff6e",fromProperty:"Size",toId:"2255f3f8-c7c6-a195-9e20-22204968c916",toProperty:"transformScale"},{fromId:"82a0d318-ac00-eb50-653e-bf2aa4344425",fromProperty:"Width",toId:"2255f3f8-c7c6-a195-9e20-22204968c916",toProperty:"width"},{fromId:"dadabea3-2a7f-ca23-a71d-79fae0cfff6e",fromProperty:"reached-Yes",toId:"82a0d318-ac00-eb50-653e-bf2aa4344425",toProperty:"to-Yes"},{fromId:"2255f3f8-c7c6-a195-9e20-22204968c916",fromProperty:"hoverEnd",toId:"82a0d318-ac00-eb50-653e-bf2aa4344425",toProperty:"to-No"}]},mdxType:"CopyToClipboardButton"})),(0,r.kt)("p",null,"This will result in the behaviour shown below. As you can see the first ",(0,r.kt)("strong",{parentName:"p"},"States")," node triggers the bouncy size change, which is immediately followed by the second ",(0,r.kt)("strong",{parentName:"p"},"Expand")," states node that changes the state to ",(0,r.kt)("strong",{parentName:"p"},"Yes")," and transitions the width to the expanded state."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("img",{src:"/2.8/docs/guides/user-interfaces/states/hover-fx3.gif",className:"ndl-image small"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"States")," node is one of the most commonly used nodes in Noodl apps, and mastering it will let you create many great interactions. Have fun!"))}f.isMDXComponent=!0},90810:function(e,t,a){t.Z=a.p+"assets/images/switch-40d138a5543219f9b630c69835d5006d.gif"}}]);