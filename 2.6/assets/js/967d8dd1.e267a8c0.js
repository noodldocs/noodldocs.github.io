"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[8039],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,A=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(A,r(r({ref:t},m),{},{components:n})):a.createElement(A,r({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17213:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),o=n(39671);function i(e){var t=e.zip,n=e.name,i=e.thumb,r=e.cf;return a.createElement("button",{className:"ndl-import-button",onClick:function(){return(0,o.I)(t,{name:n,thumb:i,cf:r})}})}},39671:function(e,t,n){n.d(t,{I:function(){return o}});var a=n(99782);function o(e,t){var n=[];t&&void 0!==t.name&&n.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&n.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+a.default.baseUrl+t.thumb)),t&&void 0!==t.cf&&n.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+a.default.baseUrl+"/"+t.cf));var o="noodl:import/"+location.protocol+"//"+location.host+a.default.baseUrl+e+(n.length>0?"?"+n.join("&"):"");console.log("Importing into Noodl:",o),console.log(e),window.location.href=o}},7433:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return A},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d}});var a=n(83117),o=n(80102),i=(n(67294),n(3905)),r=n(17213),s=["components"],l={title:"List Basics",hide_title:!0},p="List Basics",m={unversionedId:"guides/data/list-basics",id:"guides/data/list-basics",title:"List Basics",description:"What you will learn in this guide",source:"@site/docs/guides/data/list-basics.mdx",sourceDirName:"guides/data",slug:"/guides/data/list-basics",permalink:"/2.6/docs/guides/data/list-basics",tags:[],version:"current",frontMatter:{title:"List Basics",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Arrays",permalink:"/2.6/docs/guides/data/arrays"},next:{title:"UI Controls and data",permalink:"/2.6/docs/guides/data/ui-controls-and-data"}},c={},d=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"The Repeater Node",id:"the-repeater-node",level:2},{value:"Providing Items",id:"providing-items",level:2},{value:"Create a List Item Template",id:"create-a-list-item-template",level:2},{value:"Set the List Item Template",id:"set-the-list-item-template",level:2},{value:"Fixing the layout of the List Item",id:"fixing-the-layout-of-the-list-item",level:2},{value:"Connecting List Items to Data",id:"connecting-list-items-to-data",level:2},{value:"Detecting which List Item that was clicked",id:"detecting-which-list-item-that-was-clicked",level:2}],h={toc:d};function A(e){var t=e.components,l=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"list-basics"},"List Basics"),(0,i.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,i.kt)("p",null,"This guide will teach you how to create basic lists in Noodl using the ",(0,i.kt)("a",{parentName:"p",href:"/nodes/ui-controls/repeater"},"Repeater")," node that is being fed through an ",(0,i.kt)("a",{parentName:"p",href:"/nodes/data/array/array-node.md"},"Array"),". It will show how to create a simple list item and how to detect that the user clicks it."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The guide will walk you through the following steps."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Repeater")," node"),(0,i.kt)("li",{parentName:"ul"},"Creating a simple ",(0,i.kt)("strong",{parentName:"li"},"List Item")," component"),(0,i.kt)("li",{parentName:"ul"},"Connecting the data to the ",(0,i.kt)("strong",{parentName:"li"},"List Item")),(0,i.kt)("li",{parentName:"ul"},"Detecting when the user clicks an item")),(0,i.kt)("h2",{id:"the-repeater-node"},"The Repeater Node"),(0,i.kt)("p",null,"The main node for making lists is the ",(0,i.kt)("strong",{parentName:"p"},"Repeater")," node. The ",(0,i.kt)("strong",{parentName:"p"},"Repeater")," node takes an ",(0,i.kt)("strong",{parentName:"p"},"Array")," as an input (the ",(0,i.kt)("strong",{parentName:"p"},"Items")," property). It then and creates a copy of the provided ",(0,i.kt)("strong",{parentName:"p"},"List Item")," template as a component and connects the specific ",(0,i.kt)("strong",{parentName:"p"},"Object")," (or ",(0,i.kt)("strong",{parentName:"p"},"Record"),") in the ",(0,i.kt)("strong",{parentName:"p"},"Array")," with its respective ",(0,i.kt)("strong",{parentName:"p"},"List Item"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Array")," could for example be coming from an ",(0,i.kt)("a",{parentName:"p",href:"/nodes/data/array/array-node.md"},"Array")," node, from a database through a ",(0,i.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/query-records"},"Query Records")," or a ",(0,i.kt)("a",{parentName:"p",href:"/nodes/data/array/static-array"},"Static Array"),"."),(0,i.kt)("p",null,'Let\'s get started by starting a new project using the "Hello World" template. Remove the ',(0,i.kt)("strong",{parentName:"p"},"Text")," node and add in a ",(0,i.kt)("strong",{parentName:"p"},"Repeater")," node instead."),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(58).Z,width:"409",height:"271"}))),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Repeater")," needs two things to work:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Some ",(0,i.kt)("strong",{parentName:"li"},"Array")," data that can be represented as ",(0,i.kt)("em",{parentName:"li"},"List Items")),(0,i.kt)("li",{parentName:"ol"},"A ",(0,i.kt)("em",{parentName:"li"},"Template component")," that will be repeated per item in the ",(0,i.kt)("strong",{parentName:"li"},"Array"))),(0,i.kt)("p",null,"We will start with the ",(0,i.kt)("strong",{parentName:"p"},"Array"),". In this case we will use the ",(0,i.kt)("strong",{parentName:"p"},"Static Array")," might as well be some other node that outputs an ",(0,i.kt)("strong",{parentName:"p"},"Array")," for example a ",(0,i.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/query-records"},"Query Records")," node that queries records from a database. There is a specific guide for working with ",(0,i.kt)("strong",{parentName:"p"},"Query Records")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/cloud-data/quering-records-from-database"},"here"),"."),(0,i.kt)("h2",{id:"providing-items"},"Providing Items"),(0,i.kt)("p",null,"So create a ",(0,i.kt)("strong",{parentName:"p"},"Static Array")," node. Change its type to ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON")," and paste in the following data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "name": "Peter Reid",\n        "age": 29,\n        "team": "Everton",\n        "position": "Midfield"\n    },\n    {\n        "name": "Chris Waddle",\n        "age": 25,\n        "team": "Tottenham",\n        "position": "Midfield"\n    },\n    {\n        "name": "Mark Hateley",\n        "age": 24,\n        "team": "Milan",\n        "position": "Forward"\n    },\n    {\n        "name": "Peter Beardsley",\n        "age": 25,\n        "team": "Newcastle",\n        "position": "Forward"\n    },\n    {\n        "name": "Kenneth Sansom",\n        "age": 27,\n        "team": "Arsenal",\n        "position": "Defender"\n    }\n]\n')),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(82778).Z,width:"2220",height:"415"}))),(0,i.kt)("p",null,"Connect the ",(0,i.kt)("strong",{parentName:"p"},"Items")," output of the ",(0,i.kt)("strong",{parentName:"p"},"Static Array")," to the ",(0,i.kt)("strong",{parentName:"p"},"Items")," input of the ",(0,i.kt)("strong",{parentName:"p"},"Repeater")," node."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(96134).Z,width:"1257",height:"735"}))),(0,i.kt)("p",null,"Now we have items flowing into the repeater."),(0,i.kt)("h2",{id:"create-a-list-item-template"},"Create a List Item Template"),(0,i.kt)("p",null,"Next step is to create a component that can serve as a template for the ",(0,i.kt)("strong",{parentName:"p"},"Repeater"),". One component will be created per item in the ",(0,i.kt)("strong",{parentName:"p"},"Array")," that's feeding the ",(0,i.kt)("strong",{parentName:"p"},"Repeater"),"."),(0,i.kt)("p",null,'Create a new Visual Component. Call it "Player Item".'),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(46102).Z,width:"1047",height:"852"}))),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(89204).Z,width:"885",height:"795"}))),(0,i.kt)("p",null,"In the new component we will add in three ",(0,i.kt)("a",{parentName:"p",href:"/nodes/basic-elements/text"},"Text")," nodes that will present the information about each player. Make sure to change the layout of the root node to ",(0,i.kt)("inlineCode",{parentName:"p"},"Horizontal")," and add in the three ",(0,i.kt)("strong",{parentName:"p"},"Text")," nodes. Call the ",(0,i.kt)("strong",{parentName:"p"},"Text")," nodes, ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"age"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"team")," so we can keep track of them. Note that you can use the Canvas view to get a first view of how your list item will look, even before using it in your ",(0,i.kt)("strong",{parentName:"p"},"Repeater"),"."),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(85859).Z,width:"647",height:"1245"}))),(0,i.kt)("h2",{id:"set-the-list-item-template"},"Set the List Item Template"),(0,i.kt)("p",null,"Go back to the main component. We now need select our newly created component as our template. Click the ",(0,i.kt)("strong",{parentName:"p"},"Repeater"),' and set the template to "Player Item".'),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(63449).Z,width:"922",height:"833"}))),(0,i.kt)("p",null,"You should now see the first view of you data and list item, namely something like the screen below."),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(44240).Z,width:"1234",height:"1380"}))),(0,i.kt)("p",null,'The repeater have created an instance of the "Player Item" component for each item in the incoming array. But we immediately see two things to fix:'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The layout is weird. The ",(0,i.kt)("strong",{parentName:"li"},"Repeater")," takes up the full screen. It then divides the space equally among each list item. We should probably fix the layouting of our listitem a bit."),(0,i.kt)("li",{parentName:"ol"},"There is no data coming in from the list item. Our ",(0,i.kt)("strong",{parentName:"li"},"Text")," nodes are not connected to anything.")),(0,i.kt)("h2",{id:"fixing-the-layout-of-the-list-item"},"Fixing the layout of the List Item"),(0,i.kt)("p",null,'We deal with the layout first. In the "Player Item" component, click on the root ',(0,i.kt)("strong",{parentName:"p"},"Group"),' and change the sizing to "Explicit width & content height". This will make the vertical size of the list item be as large as the ',(0,i.kt)("strong",{parentName:"p"},"Texts")," they contain, while still taking upp all horizontal space."),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(55990).Z,width:"638",height:"586"}))),(0,i.kt)("p",null,'Lets also add a border around each item and some rounded corners. Change "Border Style" and "Border Radius" to your liking. Finally add in some padding in all four direction (to give some air within the list item) and a margin below the list item to get some air between items.'),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(41860).Z,width:"558",height:"836"}))),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(45582).Z,width:"1232",height:"700"}))),(0,i.kt)("p",null,"This looks better even if much more can be done. It will have to do for now."),(0,i.kt)("h2",{id:"connecting-list-items-to-data"},"Connecting List Items to Data"),(0,i.kt)("p",null,'Now we want to get the data from each item into the List Item. In the "Player Item" component, add in an ',(0,i.kt)("a",{parentName:"p",href:"/nodes/data/object/object-node.md"},"Object")," node. The ",(0,i.kt)("strong",{parentName:"p"},"Object")," node is one of the central data holding nodes in Noodl. Read more about them in a dedicated guide ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/data/objects"},"here"),"."),(0,i.kt)("p",null,"Click the ",(0,i.kt)("strong",{parentName:"p"},"Object")," and set the ",(0,i.kt)("strong",{parentName:"p"},'"Get Id From"')," property to ",(0,i.kt)("inlineCode",{parentName:"p"},"From Repeater"),"."),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(52557).Z,width:"550",height:"456"}))),(0,i.kt)("p",null,"You have now told the ",(0,i.kt)("strong",{parentName:"p"},"Object")," that the ",(0,i.kt)("strong",{parentName:"p"},"Repeater")," will assign its ",(0,i.kt)("strong",{parentName:"p"},"Id"),", meaning each list item will have its ",(0,i.kt)("strong",{parentName:"p"},"Object")," node point to the respective ",(0,i.kt)("strong",{parentName:"p"},"Object")," in the ",(0,i.kt)("strong",{parentName:"p"},"Array")," that feeds the repeater."),(0,i.kt)("p",null,"If you hover over your newly created ",(0,i.kt)("strong",{parentName:"p"},"Object")," you will actually see that it contains the data of our last item in the ",(0,i.kt)("strong",{parentName:"p"},"Array"),"."),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(49418).Z,width:"1012",height:"750"}))),(0,i.kt)("p",null,"?> Note that since there are several instances of the same List Item in memory at the same time you have to be a bit careful when reading the debug output in the node graph. Generally ",(0,i.kt)("em",{parentName:"p"},"the last value"),' in a connection or component is going to be shown as debug data. In our case, the last list item data ("Kenneth Sansom") is shown even though all the other ',(0,i.kt)("strong",{parentName:"p"},"Objects")," in the ",(0,i.kt)("strong",{parentName:"p"},"Array")," is in memory as well."),(0,i.kt)("p",null,"Now we are ready to hook up the ",(0,i.kt)("strong",{parentName:"p"},"Text")," nodes to our data. Create three properties on the ",(0,i.kt)("strong",{parentName:"p"},"Object")," matching the ones we have in the static array, namely ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"age")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"team"),"."),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(37797).Z,width:"550",height:"604"}))),(0,i.kt)("p",null,"Connect the ",(0,i.kt)("strong",{parentName:"p"},"Object")," properties to the ",(0,i.kt)("strong",{parentName:"p"},"Text")," input on the respective ",(0,i.kt)("strong",{parentName:"p"},"Text")," nodes."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(47106).Z,width:"1768",height:"1152"}))),(0,i.kt)("p",null,"While you are connecting the data to the ",(0,i.kt)("strong",{parentName:"p"},"Text")," nodes you should see the ",(0,i.kt)("strong",{parentName:"p"},"List Items")," being populated."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(41988).Z,width:"1230",height:"590"}))),(0,i.kt)("h2",{id:"detecting-which-list-item-that-was-clicked"},"Detecting which List Item that was clicked"),(0,i.kt)("p",null,"Finally, we also want to know when the user clicks an item and of course which item it was. Of course we could handle all business logic related to a ",(0,i.kt)("strong",{parentName:"p"},"List Item")," within it, but it's often better to let the ",(0,i.kt)("strong",{parentName:"p"},"List Items")," be pretty simple and handle any complex logic outside the ",(0,i.kt)("strong",{parentName:"p"},"Repeater"),". In short, we want the ",(0,i.kt)("strong",{parentName:"p"},"Repeater")," to be able to report when an item was clicked and which item was clicked."),(0,i.kt)("p",null,"You do this by letting the List Item component having ",(0,i.kt)("a",{parentName:"p",href:"/nodes/component-utilities/component-outputs"},"Component Outputs")," that are signals. You can have any number of signals coming out of your ",(0,i.kt)("strong",{parentName:"p"},"List Item"),". For example you may have a complex structure with buttons for changing and removing List Items and you want to know which one the user clicked. However in our simple case we only want to know if the ",(0,i.kt)("strong",{parentName:"p"},"List Item")," was clicked."),(0,i.kt)("p",null,'Go into the "Player Item" component. Add a ',(0,i.kt)("strong",{parentName:"p"},"Component Outputs"),' node. In it, add a property "Click". Then connect the "Click" signal from the root ',(0,i.kt)("strong",{parentName:"p"},"Group"),' to the newly created "Click" property on the ',(0,i.kt)("strong",{parentName:"p"},"Component Outputs"),"."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(96677).Z,width:"1368",height:"1024"}))),(0,i.kt)("p",null,"Now we are letting the ",(0,i.kt)("strong",{parentName:"p"},"Repeater")," know whenever a ",(0,i.kt)("strong",{parentName:"p"},"List Item")," is clicked."),(0,i.kt)("p",null,"Go back to the main app. We want to capture the outgoing ",(0,i.kt)("strong",{parentName:"p"},"Click")," signal together with the ",(0,i.kt)("strong",{parentName:"p"},"Id")," of the ",(0,i.kt)("strong",{parentName:"p"},"Object")," associated with the ",(0,i.kt)("strong",{parentName:"p"},"List Item")," that was clicked."),(0,i.kt)("p",null,"So create an ",(0,i.kt)("strong",{parentName:"p"},"Object")," node and connect the ",(0,i.kt)("strong",{parentName:"p"},"Item Id")," output that is now available on the ",(0,i.kt)("strong",{parentName:"p"},"Repeater")," to its ",(0,i.kt)("strong",{parentName:"p"},"Id"),"."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(72084).Z,width:"1920",height:"938"}))),(0,i.kt)("p",null,"This ",(0,i.kt)("strong",{parentName:"p"},"Object")," now will now point to the clicked item. To show that we can add a new ",(0,i.kt)("strong",{parentName:"p"},"Text")," node below the ",(0,i.kt)("strong",{parentName:"p"},"Repeater"),". Align it to the bottom and center and make sure its size is decided by its content, i.e. the ",(0,i.kt)("strong",{parentName:"p"},"Text")," node will only take up as much space as it needs, and it will end up in the center. Also make it larger, e.g. font size 24."),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(43866).Z,width:"540",height:"1636"}))),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(14554).Z,width:"1680",height:"708"}))),(0,i.kt)("p",null,"Add the property ",(0,i.kt)("strong",{parentName:"p"},"name")," on the ",(0,i.kt)("strong",{parentName:"p"},"Object")," and connect it to the ",(0,i.kt)("strong",{parentName:"p"},"Text")," node."),(0,i.kt)("p",null,"We are almost done, we actually need to capture the ",(0,i.kt)("strong",{parentName:"p"},"Click")," event from the ",(0,i.kt)("strong",{parentName:"p"},"Repeater")," for the ",(0,i.kt)("strong",{parentName:"p"},"Item Id")," to update when the user clicks. We anyway only want to show the text for a short while when the user clicks."),(0,i.kt)("p",null,"To achieve this we add in a ",(0,i.kt)("a",{parentName:"p",href:"/nodes/logic/switch"},"Switch")," node. This will keep the state weather the ",(0,i.kt)("strong",{parentName:"p"},"Text"),' is shown or not so call it "Selected Text Visible". Connect the ',(0,i.kt)("strong",{parentName:"p"},"Current State")," to the ",(0,i.kt)("strong",{parentName:"p"},"Mounted")," attribute of the ",(0,i.kt)("strong",{parentName:"p"},"Text"),". Then add a ",(0,i.kt)("strong",{parentName:"p"},"Delay")," node. Set the duration to 2000 milli seconds (2 seconds).\nLet the ",(0,i.kt)("strong",{parentName:"p"},"Clicked")," signal coming from the ",(0,i.kt)("strong",{parentName:"p"},"Repeater")," start the ",(0,i.kt)("strong",{parentName:"p"},"Delay")," by connecting it to ",(0,i.kt)("strong",{parentName:"p"},"Restart"),". As soon as the ",(0,i.kt)("strong",{parentName:"p"},"Delay")," is started we want to show the ",(0,i.kt)("strong",{parentName:"p"},"Text")," so connect ",(0,i.kt)("strong",{parentName:"p"},"Started")," to ",(0,i.kt)("strong",{parentName:"p"},"On")," on the ",(0,i.kt)("strong",{parentName:"p"},"Switch")," and the ",(0,i.kt)("strong",{parentName:"p"},"Finished")," signal to ",(0,i.kt)("strong",{parentName:"p"},"Off"),"."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(21251).Z,width:"1950",height:"890"}))),(0,i.kt)("p",null,'If everything works as expected you will now see the name of the player you click show up for two seconds at the bottom of the screen.\nTo import the project from the guide click "Import" on the image below.'),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2093).Z,width:"1236",height:"762"})),(0,i.kt)(r.Z,{zip:"/docs/guides/data/list-basics/list-part-1.zip",name:"List Basics",thumb:"/docs/guides/data/list-basics/final-1.png",mdxType:"ImportButton"})))}A.isMDXComponent=!0},47106:function(e,t,n){t.Z=n.p+"assets/images/connect-1-1ba5dd1367085e3fc62be29f7ac14a76.png"},72084:function(e,t,n){t.Z=n.p+"assets/images/connect-3-e50bda6a9ecabe60daba30db3a0675c7.png"},2093:function(e,t,n){t.Z=n.p+"assets/images/final-1-e1645d44cc844d5ed3889d2751b38214.png"},46102:function(e,t,n){t.Z=n.p+"assets/images/list-item-1-7097ae9c4a15366c328ff51f422a77dc.png"},89204:function(e,t,n){t.Z=n.p+"assets/images/list-item-2-7f587b5407bdd4429a42dc9bb59a6bd5.png"},85859:function(e,t,n){t.Z=n.p+"assets/images/list-item-3-8ed08b6243d2f33d045d07bef651db35.png"},96677:function(e,t,n){t.Z=n.p+"assets/images/list-item-4-bfe2c6d29e22b17312169dce5dc92a6d.png"},55990:function(e,t,n){t.Z=n.p+"assets/images/list-item-layout-1-64497275a77cc56485ab6fbcbf4019c9.png"},45582:function(e,t,n){t.Z=n.p+"assets/images/list-item-layout-2-4f7a0427e405a05e0ce2034734502432.png"},41860:function(e,t,n){t.Z=n.p+"assets/images/list-item-layout-3-01c71d6ef75d7fbe40c7e82e05a21fb4.png"},52557:function(e,t,n){t.Z=n.p+"assets/images/object-1-adefb60770e7c255a274c7f16f82d787.png"},49418:function(e,t,n){t.Z=n.p+"assets/images/object-2-d19dc7efbc53ec0182d7b2a45f5ac1be.png"},37797:function(e,t,n){t.Z=n.p+"assets/images/object-3-e0ef4350fff2a17cd882174345c7a75f.png"},58:function(e,t){t.Z="data:image/png;base64,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"},96134:function(e,t,n){t.Z=n.p+"assets/images/repeater-2-a74d72cf0819a0009b5813fdb71bcca8.png"},63449:function(e,t,n){t.Z=n.p+"assets/images/repeater-3-a447cb6b64473416ee8aded6de0a068a.png"},14554:function(e,t,n){t.Z=n.p+"assets/images/repeater-4-7a5ec1874fe71128c4219ae832e1e208.png"},21251:function(e,t,n){t.Z=n.p+"assets/images/repeater-5-9e9313e09597e2839c4074b1847faa92.png"},44240:function(e,t,n){t.Z=n.p+"assets/images/result-1-2b1baf111c572495ed1f0b33fa548830.png"},41988:function(e,t,n){t.Z=n.p+"assets/images/result-2-f4700d171f2f429119229fd23d7d9593.png"},82778:function(e,t,n){t.Z=n.p+"assets/images/static-array-1-d3c8296284d16646e234b26894c02d56.png"},43866:function(e,t,n){t.Z=n.p+"assets/images/text-props-ba9206206ec8b153f4f7861b64c5c973.png"}}]);