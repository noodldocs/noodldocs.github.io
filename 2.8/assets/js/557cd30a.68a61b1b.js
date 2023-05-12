"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[6989],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=o,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},53488:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function o(e){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)})):function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var a=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+a)}catch(n){console.error("Fallback: Oops, unable to copy",n)}document.body.removeChild(t)}(e)}function r(e){return n.createElement("button",{className:"ndl-copy-nodes-button",onClick:function(){return t=e.json,void o(JSON.stringify(t));var t}})}},35194:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=a(83117),o=a(80102),r=(a(67294),a(3905)),i=a(53488),s=["components"],l={title:"Querying records From Database",hide_title:!0},d="Querying records from database",p={unversionedId:"guides/cloud-data/quering-records-from-database",id:"guides/cloud-data/quering-records-from-database",title:"Querying records From Database",description:"What you will learn in this guide",source:"@site/docs/guides/cloud-data/quering-records-from-database.md",sourceDirName:"guides/cloud-data",slug:"/guides/cloud-data/quering-records-from-database",permalink:"/2.8/docs/guides/cloud-data/quering-records-from-database",tags:[],version:"current",frontMatter:{title:"Querying records From Database",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Creating new Database Records",permalink:"/2.8/docs/guides/cloud-data/creating-new-database-records"},next:{title:"Updating Records",permalink:"/2.8/docs/guides/cloud-data/updating-records"}},c={},u=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"What is a &quot;Query&quot;?",id:"what-is-a-query",level:2},{value:"Making a Query",id:"making-a-query",level:2},{value:"Visualising the query results using a Repeater node",id:"visualising-the-query-results-using-a-repeater-node",level:2},{value:"Repeater and Records",id:"repeater-and-records",level:3},{value:"Connecting the Record properties",id:"connecting-the-record-properties",level:3}],h={toc:u};function m(e){var t=e.components,l=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"querying-records-from-database"},"Querying records from database"),(0,r.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,r.kt)("p",null,"In this guide you will learn how to use the ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/query-records"},"Query Records")," node to create powerful database queries to retrieve ",(0,r.kt)("strong",{parentName:"p"},"Records")," from a database. You will also learn how to use the ",(0,r.kt)("a",{parentName:"p",href:"/nodes/ui-controls/repeater"},"Repeater")," node in combination with a ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/record"},"Record")," node to visualize the results of a query."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"We will go through the following steps in this guide"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a simple query"),(0,r.kt)("li",{parentName:"ul"},"List results as list items using a ",(0,r.kt)("strong",{parentName:"li"},"Repeater")," node"),(0,r.kt)("li",{parentName:"ul"},"Connecting data properties to visual nodes")),(0,r.kt)("p",null,"To get most out of this guide, it's best that you are already familiar with how to set up a cloud backend, create ",(0,r.kt)("strong",{parentName:"p"},"Classes")," and ",(0,r.kt)("strong",{parentName:"p"},"Records"),". You can quickly learn that by going through the following guides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guides/cloud-data/creating-a-backend"},"Creating a Backend")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guides/cloud-data/creating-a-class"},"Creating a Class")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guides/cloud-data/creating-new-database-records"},"Creating Records"))),(0,r.kt)("h2",{id:"what-is-a-query"},'What is a "Query"?'),(0,r.kt)("p",null,"In the database world a Query is how you ask a database for a specific subset of records based on some conditions. In the case of Noodl, you ask your ",(0,r.kt)("strong",{parentName:"p"},"Cloud Service")," for all ",(0,r.kt)("strong",{parentName:"p"},"Records")," in a ",(0,r.kt)("strong",{parentName:"p"},"Class"),' that fullfills one or more conditions. An example of a query, in words, would be "Give me all ',(0,r.kt)("strong",{parentName:"p"},"Records")," in the ",(0,r.kt)("strong",{parentName:"p"},"Class")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," where the property ",(0,r.kt)("inlineCode",{parentName:"p"},"isDone"),' is false".'),(0,r.kt)("h2",{id:"making-a-query"},"Making a Query"),(0,r.kt)("p",null,"First make sure you have started a project with an active Backend with some data available in one or more ",(0,r.kt)("strong",{parentName:"p"},"Classes"),". Following the previous cloud data guides, we will use a ",(0,r.kt)("strong",{parentName:"p"},"Class")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"Task"),", with a bunch of items with the properties ",(0,r.kt)("inlineCode",{parentName:"p"},"task")," - a description of a task, and ",(0,r.kt)("inlineCode",{parentName:"p"},"isDone")," - a boolean value that is either ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," (the task ha been completed) or ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," (the task is not completed yet)."),(0,r.kt)("p",null,'Lets start with an empty project. You can for example use the "Hello World" template and remove the text node. Add a ',(0,r.kt)("a",{parentName:"p",href:"/nodes/ui-controls/repeater/"},"Repeater")," node as a child to the main ",(0,r.kt)("strong",{parentName:"p"},"Group"),". We will need the ",(0,r.kt)("strong",{parentName:"p"},"Repeater")," later to visualize the results of our query."),(0,r.kt)("p",null,"Then create a ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/query-records"},"Query Records")," node."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(57194).Z,width:"1217",height:"472"}))),(0,r.kt)("p",null,"First we need to select which ",(0,r.kt)("strong",{parentName:"p"},"Class")," this ",(0,r.kt)("strong",{parentName:"p"},"Query Records")," node should be applied to. You do that by clicking the node and select a ",(0,r.kt)("strong",{parentName:"p"},"Class")," from the Class dropdown. You should expect to see all ",(0,r.kt)("strong",{parentName:"p"},"Classes")," you created in this dropdown. If you for some reason don't see them, you probably havent connected your project to the right cloud service."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(32311).Z,width:"675",height:"610"}))),(0,r.kt)("p",null,'Leave the other settings for now. Since we don\'t add any conditions ("filters" as they are called in Noodl) this query will return all ',(0,r.kt)("strong",{parentName:"p"},"Records")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," Class. Or actually not always all, since Noodl will have a default limit on 100 ",(0,r.kt)("strong",{parentName:"p"},"Records")," for a Query, to avoid flooding the network if the ",(0,r.kt)("strong",{parentName:"p"},"Class")," contains a large amount of items. You can change the limit, by checking the ",(0,r.kt)("inlineCode",{parentName:"p"},"Use Limit")," checkbox, but we will not touch that right now."),(0,r.kt)("p",null,"To get a first look at we get back from the Query, create an ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/array/array-node"},"Array")," node to store the results in. Then connect ",(0,r.kt)("strong",{parentName:"p"},"Items")," from the ",(0,r.kt)("strong",{parentName:"p"},"Query Records")," node to the ",(0,r.kt)("strong",{parentName:"p"},"Items")," input on the ",(0,r.kt)("strong",{parentName:"p"},"Array"),". You should immediately see the result of the query if you hover over the connection between the two nodes to see the debug info."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(59870).Z,width:"1714",height:"902"}))),(0,r.kt)("p",null,"Noodl automatically runs ",(0,r.kt)("strong",{parentName:"p"},"Query Records")," as soon as they are created ",(0,r.kt)("em",{parentName:"p"},"unless")," the input signal ",(0,r.kt)("strong",{parentName:"p"},"Do")," is connected. Since queries and the result of queries are sent over network its sometimes important to control exactly when the query should be performed. In those cases connecting the ",(0,r.kt)("strong",{parentName:"p"},"Do")," signal to control when the query is performed is important. However, in this simple example we don't care about that so leaving it unconnected is fine."),(0,r.kt)("h2",{id:"visualising-the-query-results-using-a-repeater-node"},"Visualising the query results using a Repeater node"),(0,r.kt)("p",null,"To visualize the results we need to do a little bit of Noodling. We need to create a simple list item that can represent each ",(0,r.kt)("strong",{parentName:"p"},"Record"),"."),(0,r.kt)("p",null,'Create a new visual component by clicking the "+" icon under components and then selecting ',(0,r.kt)("inlineCode",{parentName:"p"},"Visual Component"),'. Give the new component a good name, we will call our item "Task Item" as it will represent one task.'),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(80031).Z,width:"1002",height:"646"}))),(0,r.kt)("p",null,"In the visual component add two nodes under the existing ",(0,r.kt)("strong",{parentName:"p"},"Group")," node, one ",(0,r.kt)("a",{parentName:"p",href:"/nodes/ui-controls/checkbox"},"Checkbox")," and one ",(0,r.kt)("a",{parentName:"p",href:"/nodes/basic-elements/text"},"Text")," node. The ",(0,r.kt)("strong",{parentName:"p"},"Checkbox")," will represent the ",(0,r.kt)("inlineCode",{parentName:"p"},"isDone")," property, while the ",(0,r.kt)("strong",{parentName:"p"},"Text")," node holds the description of the task. Also clean up the layout by setting the ",(0,r.kt)("strong",{parentName:"p"},"layout")," of the ",(0,r.kt)("strong",{parentName:"p"},"Group")," to ",(0,r.kt)("strong",{parentName:"p"},"Horizontal")," and add som padding and margins. Also the label of the ",(0,r.kt)("strong",{parentName:"p"},"Checkbox")," was removed. (You can copy the nodes using the button on the image below and paste them into your project if you want to.)"),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(75459).Z,width:"1636",height:"736"})),(0,r.kt)(i.Z,{json:{nodes:[{id:"d4117337-b6cf-64cc-e2dd-70de4cfb10e6",type:"Group",x:0,y:0,parameters:{flexDirection:"row",sizeMode:"contentHeight",paddingLeft:{value:5,unit:"px"},paddingTop:{value:2,unit:"px"},paddingBottom:{value:2,unit:"px"},paddingRight:{value:5,unit:"px"}},ports:[],children:[{id:"e5bdf35a-988f-9c6b-981e-0275f1884912",type:"net.noodl.controls.checkbox",x:20,y:46,parameters:{useLabel:!1,alignY:"center"},ports:[],children:[]},{id:"5fbfaf9d-919f-699f-1e1a-fcbdd20c7631",type:"Text",x:20,y:92,parameters:{marginLeft:{value:10,unit:"px"},sizeMode:"contentSize"},ports:[],children:[]}]}],connections:[],comments:[]},mdxType:"CopyToClipboardButton"})),(0,r.kt)("p",null,"The looks don't matter right now and if you work with different kind of data your list item will look a little different."),(0,r.kt)("p",null,"Next we go back to our main App and set the ",(0,r.kt)("strong",{parentName:"p"},"Template")," of the ",(0,r.kt)("strong",{parentName:"p"},"Repeater")," node to use our newly created Task Item."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(43).Z,width:"1325",height:"1075"}))),(0,r.kt)("p",null,"Finally, we delete the ",(0,r.kt)("strong",{parentName:"p"},"Array")," node we created earlier and feed the result of the query results directly into the ",(0,r.kt)("strong",{parentName:"p"},"Repeater")," node by connecting ",(0,r.kt)("strong",{parentName:"p"},"Items")," in the ",(0,r.kt)("strong",{parentName:"p"},"Query Records")," node to the ",(0,r.kt)("strong",{parentName:"p"},"Items")," input in the ",(0,r.kt)("strong",{parentName:"p"},"Repeater"),"."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(49811).Z,width:"2700",height:"1125"}))),(0,r.kt)("p",null,"After the connection is done you should see that your list now contains a bunch of items, in fact, it should contain as many items as your ",(0,r.kt)("strong",{parentName:"p"},"Class")," has."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Repeater")," node has created one instance of the list item per ",(0,r.kt)("strong",{parentName:"p"},"Record"),"."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(62289).Z,width:"950",height:"1092"}))),(0,r.kt)("p",null,"The only problem is that the items does not show the content of the ",(0,r.kt)("strong",{parentName:"p"},"Record"),". To fix that we need to understand how the ",(0,r.kt)("strong",{parentName:"p"},"Repeater")," node deals with an ",(0,r.kt)("strong",{parentName:"p"},"Array")," of ",(0,r.kt)("strong",{parentName:"p"},"Records"),"."),(0,r.kt)("h3",{id:"repeater-and-records"},"Repeater and Records"),(0,r.kt)("p",null,"To get the items to show the right data, we need to get hold of the ",(0,r.kt)("strong",{parentName:"p"},"Record")," holding the right data. We do this by using the ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/record"},"Record")," node. Add a ",(0,r.kt)("strong",{parentName:"p"},"Record")," node to the previously created list item. Click the node and make sure its ",(0,r.kt)("strong",{parentName:"p"},"Class")," is set to the class you want to display, in this guide we will point it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," Class."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1278).Z,width:"1207",height:"545"}))),(0,r.kt)("p",null,"Now the ",(0,r.kt)("strong",{parentName:"p"},"Id")," of the ",(0,r.kt)("strong",{parentName:"p"},"Record")," comes into play - we need to set it to the ",(0,r.kt)("strong",{parentName:"p"},"Id")," corresponding to the ",(0,r.kt)("strong",{parentName:"p"},"Record")," that the list item represent. It will obviously be different for each list item. Luckily, the ",(0,r.kt)("strong",{parentName:"p"},"Repeater")," node solves this. It will assign the right ",(0,r.kt)("strong",{parentName:"p"},"Id")," to the right list item. See image below."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(26030).Z,width:"2412",height:"650"}))),(0,r.kt)("p",null,"The only thing we need to do is to tell the ",(0,r.kt)("strong",{parentName:"p"},"Record")," node to pick up its ",(0,r.kt)("strong",{parentName:"p"},"Id")," from the right place. Click the ",(0,r.kt)("strong",{parentName:"p"},"Record")," node again and change the ",(0,r.kt)("strong",{parentName:"p"},"Id Source")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"From repeater"),"."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(69233).Z,width:"672",height:"502"}))),(0,r.kt)("p",null,"Now if you hover on the ",(0,r.kt)("strong",{parentName:"p"},"Repeater")," you should see that its filled with data for one of the list items."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(57623).Z,width:"1240",height:"612"}))),(0,r.kt)("h3",{id:"connecting-the-record-properties"},"Connecting the Record properties"),(0,r.kt)("p",null,"Finally, lets connect the data of the record - its properties - to our ",(0,r.kt)("strong",{parentName:"p"},"Text")," node and ",(0,r.kt)("strong",{parentName:"p"},"Checkbox"),"."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(27919).Z,width:"1187",height:"697"}))),(0,r.kt)("p",null,"You should now be able to see your ",(0,r.kt)("strong",{parentName:"p"},"Records")," in your app."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(96739).Z,width:"960",height:"917"}))))}m.isMDXComponent=!0},69233:function(e,t,a){t.Z=a.p+"assets/images/id-source-93fa20cd4ee9767e79ea8ec19d2d758e.png"},62289:function(e,t,a){t.Z=a.p+"assets/images/items-1-e3b23e4a1fa99aafca3b5bf29eb3b2b7.png"},96739:function(e,t,a){t.Z=a.p+"assets/images/items-2-3c05397a338776ff2cab9c446a75d161.png"},80031:function(e,t,a){t.Z=a.p+"assets/images/new-component-e9d830e4a00bc99a6cf04bd1c096e459.png"},57194:function(e,t,a){t.Z=a.p+"assets/images/query-1-7935240109ec57d5a1bd61adadb18703.png"},32311:function(e,t,a){t.Z=a.p+"assets/images/query-2-aa8ac3359857c60b3773177d93b6010b.png"},59870:function(e,t,a){t.Z=a.p+"assets/images/query-running-f6bbd65465d53340d43ce151560f7d89.png"},49811:function(e,t,a){t.Z=a.p+"assets/images/query-to-repeater-27e4cfcb6428daedbe6cc60f844d639c.png"},1278:function(e,t,a){t.Z=a.p+"assets/images/record-1-89cb22b78549cc87be93e700f058c04e.png"},57623:function(e,t,a){t.Z=a.p+"assets/images/record-2-49f4a2cc77c4132617b00d3a88121afe.png"},27919:function(e,t,a){t.Z=a.p+"assets/images/record-3-bb509f74b06be8c9b5d8748f01e8076c.png"},26030:function(e,t,a){t.Z=a.p+"assets/images/records-database-illustration-9cb4b5dbba5999c30a958723706b88b6.png"},43:function(e,t,a){t.Z=a.p+"assets/images/repeater-template-91c7de2bde72cf351e5f6e30a9526e2a.png"},75459:function(e,t,a){t.Z=a.p+"assets/images/task-item-6f9bfc0ae74f724dc6834e2d62eb602c.png"}}]);