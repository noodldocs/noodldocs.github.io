"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[7881],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return g}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(a),g=r,h=u["".concat(d,".").concat(g)]||u[g]||p[g]||o;return a?n.createElement(h,i(i({ref:t},l),{},{components:a})):n.createElement(h,i({ref:t},l))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},68768:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=["components"],s={title:"Creating new Database Records",hide_title:!0},d=void 0,c={unversionedId:"guides/cloud-data/creating-new-database-records",id:"guides/cloud-data/creating-new-database-records",title:"Creating new Database Records",description:"What you will learn in this guide",source:"@site/docs/guides/cloud-data/creating-new-database-records.md",sourceDirName:"guides/cloud-data",slug:"/guides/cloud-data/creating-new-database-records",permalink:"/2.6/docs/guides/cloud-data/creating-new-database-records",tags:[],version:"current",frontMatter:{title:"Creating new Database Records",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Creating a Database Class",permalink:"/2.6/docs/guides/cloud-data/creating-a-class"},next:{title:"Querying records From Database",permalink:"/2.6/docs/guides/cloud-data/quering-records-from-database"}},l={},p=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"Create a Record using the Create New Record Node",id:"create-a-record-using-the-create-new-record-node",level:2},{value:"The Create New Record Node",id:"the-create-new-record-node",level:3},{value:"Initial Values",id:"initial-values",level:3},{value:"Creating The Record",id:"creating-the-record",level:3},{value:"Retrieving the id of the newly created Record",id:"retrieving-the-id-of-the-newly-created-record",level:2},{value:"Setting initial values of a Record",id:"setting-initial-values-of-a-record",level:2}],u={toc:p};function g(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"storing-and-fetching-data-in-a-database"},"Storing and fetching data in a database"),(0,o.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,o.kt)("p",null,"In this guide you will learn how to create and insert new entries - ",(0,o.kt)("strong",{parentName:"p"},"Records")," in a cloud database using the\n",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/create-new-record"},"Create New Record")," node."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"We will go through the following steps in this guide:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a ",(0,o.kt)("strong",{parentName:"li"},"Record")," in the database"),(0,o.kt)("li",{parentName:"ul"},"Retrieving the ",(0,o.kt)("strong",{parentName:"li"},"Id")," of the newly created ",(0,o.kt)("strong",{parentName:"li"},"Record")),(0,o.kt)("li",{parentName:"ul"},"Setting initial values of the ",(0,o.kt)("strong",{parentName:"li"},"Record"))),(0,o.kt)("p",null,"Before starting this guide, make sure you have Cloud Services enabled and have at least one ",(0,o.kt)("strong",{parentName:"p"},"Class")," in the database. You can learn how to do this in ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/cloud-data/creating-a-backend"},"this")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/cloud-data/creating-a-class"},"this")," guide."),(0,o.kt)("h2",{id:"create-a-record-using-the-create-new-record-node"},"Create a Record using the Create New Record Node"),(0,o.kt)("p",null,"If you tried out the ",(0,o.kt)("strong",{parentName:"p"},"Dashboard")," you could see how you could create ",(0,o.kt)("strong",{parentName:"p"},"Records")," from there. Now we will learn how to create ",(0,o.kt)("strong",{parentName:"p"},"Records")," from within an app."),(0,o.kt)("p",null,"Start a new Noodl Project in your workspace. You can use any template, for example the ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello World")," template."),(0,o.kt)("p",null,"Again, make sure you have ",(0,o.kt)("strong",{parentName:"p"},"Cloud Services")," enabled and a ",(0,o.kt)("strong",{parentName:"p"},"Backend")," set up with at least one ",(0,o.kt)("strong",{parentName:"p"},"Class"),". When opening your ",(0,o.kt)("inlineCode",{parentName:"p"},"Cloud Services")," menu it should look something like the image below, with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Project Backend")," selected."),(0,o.kt)("p",null,"Now open the Node Picker by right clicking in the Node window. Create a ",(0,o.kt)("strong",{parentName:"p"},"Create New Record")," node."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(91318).Z,width:"1199",height:"646"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(95245).Z,width:"813",height:"270"}))),(0,o.kt)("h3",{id:"the-create-new-record-node"},"The Create New Record Node"),(0,o.kt)("p",null,"As it name states, this node is used to create and insert new ",(0,o.kt)("strong",{parentName:"p"},"Records")," in a ",(0,o.kt)("strong",{parentName:"p"},"Class")," in the Database. First we need to set up which ",(0,o.kt)("strong",{parentName:"p"},"Class")," it should insert ",(0,o.kt)("strong",{parentName:"p"},"Records")," into. Click the node and select one of you ",(0,o.kt)("strong",{parentName:"p"},"Classes")," that you set up in your Backend. In this example, we select the ",(0,o.kt)("strong",{parentName:"p"},"Class")," ",(0,o.kt)("strong",{parentName:"p"},"Task"),"."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(90823).Z,width:"412",height:"373"}))),(0,o.kt)("h3",{id:"initial-values"},"Initial Values"),(0,o.kt)("p",null,"As you can see, when selecting a ",(0,o.kt)("strong",{parentName:"p"},"Class")," for your ",(0,o.kt)("strong",{parentName:"p"},"Create New Records")," node you immedieatly get new Properties on your node, namely the ",(0,o.kt)("strong",{parentName:"p"},"Columns")," you added to your ",(0,o.kt)("strong",{parentName:"p"},"Class")," when creating it. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Task")," class created in the previous guides have the ",(0,o.kt)("inlineCode",{parentName:"p"},"task")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"isComplete")," property."),(0,o.kt)("p",null,"You can add or remove ",(0,o.kt)("strong",{parentName:"p"},"Columns")," at any time in the ",(0,o.kt)("strong",{parentName:"p"},"Dashboard")," and all nodes that references to that ",(0,o.kt)("strong",{parentName:"p"},"Class")," will be updated accordingly. If you remove a ",(0,o.kt)("strong",{parentName:"p"},"Column")," that's used by your nodes, you will get warnings in Noodl."),(0,o.kt)("p",null,"As you probably already have figured out, by setting these properties on the node, you can control the initial values of the ",(0,o.kt)("strong",{parentName:"p"},"Record")," when creating it. So let's fill out the properties with some values, for example as below."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(27396).Z,width:"496",height:"361"}))),(0,o.kt)("h3",{id:"creating-the-record"},"Creating The Record"),(0,o.kt)("p",null,"Actually creating the ",(0,o.kt)("strong",{parentName:"p"},"Record")," is easy. You need to trigger the ",(0,o.kt)("strong",{parentName:"p"},"Do")," input signal on the ",(0,o.kt)("strong",{parentName:"p"},"Create New Record")," node. So lets add a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/ui-controls/button"},"Button")," for that purpose. Add it somewhere on your screen. In this example we add it after the ",(0,o.kt)("strong",{parentName:"p"},"Text")," node and center it and change its label."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(92816).Z,width:"1273",height:"816"}))),(0,o.kt)("p",null,"Now connect the ",(0,o.kt)("strong",{parentName:"p"},"Click")," output signal from the ",(0,o.kt)("strong",{parentName:"p"},"Button")," to the ",(0,o.kt)("strong",{parentName:"p"},"Do")," signal of the ",(0,o.kt)("strong",{parentName:"p"},"Create New Record")," by dragging from the ",(0,o.kt)("strong",{parentName:"p"},"Button")," to the ",(0,o.kt)("strong",{parentName:"p"},"Create New Record")," node."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(56496).Z,width:"1243",height:"727"}))),(0,o.kt)("p",null,"When the two nodes are connected you are ready to try your app. Click the button in the app a couple of times. You should see the ",(0,o.kt)("strong",{parentName:"p"},"Clicked")," to ",(0,o.kt)("strong",{parentName:"p"},"Do")," connection light up. If everything works as expected, a new ",(0,o.kt)("strong",{parentName:"p"},"Record")," should be created in the database each time you click. You can double check it by opening the ",(0,o.kt)("strong",{parentName:"p"},"Dashboard")," and look in your ",(0,o.kt)("strong",{parentName:"p"},"Class"),". Note: You may have to click the ",(0,o.kt)("strong",{parentName:"p"},"Refresh")," button in the ",(0,o.kt)("strong",{parentName:"p"},"Dashboard")," to see the items."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(12193).Z,width:"1200",height:"675"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(86127).Z,width:"1429",height:"309"}))),(0,o.kt)("h2",{id:"retrieving-the-id-of-the-newly-created-record"},"Retrieving the id of the newly created Record"),(0,o.kt)("p",null,"As you can see, the ",(0,o.kt)("strong",{parentName:"p"},"Create New Record")," node is kind of a ",(0,o.kt)("strong",{parentName:"p"},"Record")," creating factory. Each time ",(0,o.kt)("strong",{parentName:"p"},"Do")," is triggered a new ",(0,o.kt)("strong",{parentName:"p"},"Record")," is created. So how do you keep track of them?"),(0,o.kt)("p",null,"The node has an output ",(0,o.kt)("strong",{parentName:"p"},"Id"),", which will be the identifyer for the ",(0,o.kt)("strong",{parentName:"p"},"Record")," just created. As a side note, assuming the creation went well, the ",(0,o.kt)("strong",{parentName:"p"},"Success")," output signal is triggered as well when the ",(0,o.kt)("strong",{parentName:"p"},"Record")," has been created. If the creation failed, for example if one of the properties of the ",(0,o.kt)("strong",{parentName:"p"},"Record")," is required and wasn't provided (see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/cloud-data/creating-a-class/"},"this")," guide), the ",(0,o.kt)("strong",{parentName:"p"},"Failure")," signal is triggered instead."),(0,o.kt)("p",null,"Lets connect the output ",(0,o.kt)("strong",{parentName:"p"},"Id")," of the ",(0,o.kt)("strong",{parentName:"p"},"Create New Record")," node to a ",(0,o.kt)("strong",{parentName:"p"},"String")," node to take a better look at it."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Id")," is a special property of the ",(0,o.kt)("strong",{parentName:"p"},"Record"),". You will first notice that the ",(0,o.kt)("strong",{parentName:"p"},"Id")," of the newly created ",(0,o.kt)("strong",{parentName:"p"},"Record")," matches the ",(0,o.kt)("strong",{parentName:"p"},"objectId")," in the ",(0,o.kt)("strong",{parentName:"p"},"Dashboard"),"."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(13466).Z,width:"1057",height:"343"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(18427).Z,width:"1408",height:"163"}))),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Id")," is used to refer to this specific ",(0,o.kt)("strong",{parentName:"p"},"Record"),". For example, if you want to change a property of a specific ",(0,o.kt)("strong",{parentName:"p"},"Record")," you use a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/set-record-properties"},"Set Record Properties")," node and make sure it's ",(0,o.kt)("strong",{parentName:"p"},"Id")," is referring to the correct ",(0,o.kt)("strong",{parentName:"p"},"Record"),". Same goes for the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/record"},"Record")," node or the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/delete-record"},"Delete Record"),". So keeping track of you ",(0,o.kt)("strong",{parentName:"p"},"Ids")," is important."),(0,o.kt)("h2",{id:"setting-initial-values-of-a-record"},"Setting initial values of a Record"),(0,o.kt)("p",null,"Now lets add some UI so each new Task ",(0,o.kt)("strong",{parentName:"p"},"Record")," can have a different task text, and can have ",(0,o.kt)("inlineCode",{parentName:"p"},"isDone")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". Add a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/ui-controls/text-input"},"Text Input")," and a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/ui-controls/checkbox/"},"Checkbox")," and connect them to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create New Record")," node. As you can see, the two properties coming from the ",(0,o.kt)("strong",{parentName:"p"},"Columns")," of the ",(0,o.kt)("strong",{parentName:"p"},"Class")," are available as inputs on the ",(0,o.kt)("strong",{parentName:"p"},"Create New Record")," node."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(67762).Z,width:"1758",height:"940"}))),(0,o.kt)("p",null,"Try out your app, write some random task descriptions and check / uncheck. See that it works correctly by looking at the data in your ",(0,o.kt)("strong",{parentName:"p"},"Dashboard"),"."))}g.isMDXComponent=!0},92816:function(e,t,a){t.Z=a.p+"assets/images/app1-31359fdcd867d2521a4b29cb13360688.png"},56496:function(e,t,a){t.Z=a.p+"assets/images/connecting-1-7b4e519aba4a37446308134a1646a93d.png"},95245:function(e,t,a){t.Z=a.p+"assets/images/create-new-record-1-2c9e4a8a209d08e51e5ac693b8e41a4b.png"},90823:function(e,t,a){t.Z=a.p+"assets/images/create-new-record-2-5a31da27e8a0606d6bbd39f62a971f16.png"},27396:function(e,t,a){t.Z=a.p+"assets/images/create-new-record-3-c15607975c310cc6422889670ad17be6.png"},12193:function(e,t,a){t.Z=a.p+"assets/images/create-record-b9f676ac10847da8ae4eb806b18041e4.gif"},86127:function(e,t,a){t.Z=a.p+"assets/images/dashboard-1-a1ba0549f7ba77e78d98d34adbfb1c76.png"},67762:function(e,t,a){t.Z=a.p+"assets/images/initial-props-80a63d6deff6f519c76cededb9691dac.png"},18427:function(e,t,a){t.Z=a.p+"assets/images/inspect-2-e50b9c491c4cbba980e36da284779f79.png"},13466:function(e,t,a){t.Z=a.p+"assets/images/inspect-id-deff84ce0162ca1b795e5ad8cc2146f9.png"},91318:function(e,t,a){t.Z=a.p+"assets/images/node-picker-1-9438f972d8094182a96b4b35a2a1510b.png"}}]);