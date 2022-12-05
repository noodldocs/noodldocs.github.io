"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[2045],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},27561:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=["components"],s={title:"Creating a Database Class",hide_title:!0},l="Creating a Class in the Database",d={unversionedId:"guides/cloud-data/creating-a-class",id:"guides/cloud-data/creating-a-class",title:"Creating a Database Class",description:"What you will learn in this guide",source:"@site/docs/guides/cloud-data/creating-a-class.md",sourceDirName:"guides/cloud-data",slug:"/guides/cloud-data/creating-a-class",permalink:"/2.8/docs/guides/cloud-data/creating-a-class",tags:[],version:"current",frontMatter:{title:"Creating a Database Class",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Creating a Cloud Service",permalink:"/2.8/docs/guides/cloud-data/creating-a-backend"},next:{title:"Creating new Database Records",permalink:"/2.8/docs/guides/cloud-data/creating-new-database-records"}},c={},p=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"Add a new Class to the database using the <strong>Dashboard</strong>",id:"add-a-new-class-to-the-database-using-the-dashboard",level:2},{value:"Adding Columns to a Class",id:"adding-columns-to-a-class",level:2},{value:"What is a column?",id:"what-is-a-column",level:3},{value:"Column Types",id:"column-types",level:3},{value:"The default columns",id:"the-default-columns",level:3},{value:"Adding a new Record",id:"adding-a-new-record",level:2}],u={toc:p};function m(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-a-class-in-the-database"},"Creating a Class in the Database"),(0,o.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,o.kt)("p",null,"In this guide you will learn how to create new ",(0,o.kt)("strong",{parentName:"p"},"Classes")," in the database and add new ",(0,o.kt)("strong",{parentName:"p"},"Columns")," to it. ",(0,o.kt)("strong",{parentName:"p"},"Classes")," are used to hold ",(0,o.kt)("strong",{parentName:"p"},"Records")," in a Database in Noodl."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"We will go through the following steps in this guide"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add a new ",(0,o.kt)("strong",{parentName:"li"},"Class")," to the Database using the ",(0,o.kt)("strong",{parentName:"li"},"Dashboard")),(0,o.kt)("li",{parentName:"ul"},"Add new ",(0,o.kt)("strong",{parentName:"li"},"Columns")," to the Class"),(0,o.kt)("li",{parentName:"ul"},"Add a couple of new ",(0,o.kt)("strong",{parentName:"li"},"Records")," in the Class through the ",(0,o.kt)("strong",{parentName:"li"},"Dashboard"))),(0,o.kt)("p",null,"Before you start this guide, make sure you have enabled Cloud Services and have one active for your project. You can learn how to do this in ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/cloud-data/creating-a-backend"},"this")," guide."),(0,o.kt)("h2",{id:"add-a-new-class-to-the-database-using-the-dashboard"},"Add a new Class to the database using the ",(0,o.kt)("strong",{parentName:"h2"},"Dashboard")),(0,o.kt)("p",null,"First, make sure you have an active cloud service for your project. Then click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dashboard")," button in the Cloud Services sidebar."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(26954).Z,width:"2554",height:"1140"}))),(0,o.kt)("p",null,"Now you can add a new Class to the database either by clicking the yellow button ",(0,o.kt)("inlineCode",{parentName:"p"},"Create a Class")," in the menu to the left, or open the ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit")," menu and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Add a Class"),"."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(79508).Z,width:"596",height:"314"}))),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3348).Z,width:"622",height:"922"}))),(0,o.kt)("p",null,"Next step is to give the ",(0,o.kt)("strong",{parentName:"p"},"Class")," a name. Fill in a name, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"Task")," and make sure it's of the type ",(0,o.kt)("inlineCode",{parentName:"p"},"Custom"),". Now you can select ",(0,o.kt)("inlineCode",{parentName:"p"},"Create class and add columns"),"."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(23947).Z,width:"1405",height:"852"}))),(0,o.kt)("h2",{id:"adding-columns-to-a-class"},"Adding Columns to a Class"),(0,o.kt)("h3",{id:"what-is-a-column"},"What is a column?"),(0,o.kt)("p",null,"Each ",(0,o.kt)("strong",{parentName:"p"},"Class")," in Noodl have a number of Columns which defines what type of data each ",(0,o.kt)("strong",{parentName:"p"},"Record")," in the class can have. For example, if you are building a Task Management app, you may have a class called ",(0,o.kt)("inlineCode",{parentName:"p"},"Task"),", with the columns ",(0,o.kt)("inlineCode",{parentName:"p"},"task")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"isDone")," as two columns, holding the description of the task and wether the task is done or not. In Noodl, the ",(0,o.kt)("strong",{parentName:"p"},"Columns")," will be represented as properties on the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/record"},"Record")," node that can be used as inputs our outputs."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(84871).Z,width:"2328",height:"264"}))),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(84313).Z,width:"802",height:"622"}))),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(15352).Z,width:"690",height:"452"}))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"/docs/guides/cloud-data/record-relations?id=relation-many-to-many-relationships"},"Relations")," are an exception here. They can only be used through Queries and won't shop up as properties on Record nodes."))),(0,o.kt)("h3",{id:"column-types"},"Column Types"),(0,o.kt)("p",null,"Each ",(0,o.kt)("strong",{parentName:"p"},"Column")," has a specific data type that decides what kind of data it can hold.\nThere are 11 different data types available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"String")," - a string value"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Boolean")," - a boolean value (can be ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Number")," - a number value"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Date")," - a date (stored in iso format)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Object")," - a JavaScript object"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Array")," - a JavasSript array"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Geopoint")," - A Geopoint, i.e. a location on the surface of the earth"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Polygon")," - a GEOJSon polygon object"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"File")," - a reference to a file"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Pointer")," - A pointer to another ",(0,o.kt)("strong",{parentName:"li"},"Record")," in a ",(0,o.kt)("strong",{parentName:"li"},"Class")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/guides/cloud-data/record-relations?id=relation-many-to-many-relationships"},"Relations"))," - A list of relations to other ",(0,o.kt)("strong",{parentName:"li"},"Records")," in a ",(0,o.kt)("strong",{parentName:"li"},"Class"),". Note that these won't show up directly on the ",(0,o.kt)("strong",{parentName:"li"},"Record")," node, but are available in queries.")),(0,o.kt)("p",null,"In this guide, we will focus in on the simpler data types, ",(0,o.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Number"),"."),(0,o.kt)("p",null,"Lets add two columns to our ",(0,o.kt)("strong",{parentName:"p"},"Class"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"task")," - a ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," type column, and ",(0,o.kt)("inlineCode",{parentName:"p"},"isDone")," - a ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean"),". You can also chose to have a default value for each column that will be set if a new ",(0,o.kt)("strong",{parentName:"p"},"Record")," has no entry set for that column. In our case, let set the default value of ",(0,o.kt)("inlineCode",{parentName:"p"},"isDone")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(97979).Z,width:"1397",height:"1240"}))),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(25890).Z,width:"1380",height:"1240"}))),(0,o.kt)("p",null,"You can also select if a ",(0,o.kt)("strong",{parentName:"p"},"Column")," is required for a new ",(0,o.kt)("strong",{parentName:"p"},"Record")," to be added in the ",(0,o.kt)("strong",{parentName:"p"},"Class"),". If set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", the insertion will any new ",(0,o.kt)("strong",{parentName:"p"},"Record")," that has no value provided for the ",(0,o.kt)("strong",{parentName:"p"},"Column"),". Right now we don't want that, so we will leave it in the state ",(0,o.kt)("inlineCode",{parentName:"p"},"No")," for both ",(0,o.kt)("strong",{parentName:"p"},"Columns"),"."),(0,o.kt)("h3",{id:"the-default-columns"},"The default columns"),(0,o.kt)("p",null,"As you can see when inspecting your new Task Class in the ",(0,o.kt)("strong",{parentName:"p"},"Dashboard"),", it also contains a few other ",(0,o.kt)("strong",{parentName:"p"},"Columns"),". These are automatically created you should generally not remove them. They are actually quite useful. The default columns are"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"objectId")," - This is a unique identifyer for each ",(0,o.kt)("strong",{parentName:"li"},"Record"),". This identifyer will become the ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," property of the ",(0,o.kt)("strong",{parentName:"li"},"Record")," node when refering to it using a ",(0,o.kt)("strong",{parentName:"li"},"Record")," node."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"createdAt")," - A Date object containing the date and time for when the ",(0,o.kt)("strong",{parentName:"li"},"Record")," was created."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"updatedAt")," - A Date object containing the date and time for when the ",(0,o.kt)("strong",{parentName:"li"},"Record")," was last updated."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ACL")," - A special column to keep track of which users and roles that has the right to fetch and store this object. For now, lets leave it as it is.")),(0,o.kt)("h2",{id:"adding-a-new-record"},"Adding a new Record"),(0,o.kt)("p",null,"Now it's time to add a new ",(0,o.kt)("strong",{parentName:"p"},"Record")," to the Task Class. You can add ",(0,o.kt)("strong",{parentName:"p"},"Record")," either through the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add a row"),"-button or through the ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit")," menu and then selecting ",(0,o.kt)("inlineCode",{parentName:"p"},"Add row")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Add row through modal"),". Let's click on the latter button. This brings up a form that lets you fill out the values for each ",(0,o.kt)("strong",{parentName:"p"},"Column")," for the new ",(0,o.kt)("strong",{parentName:"p"},"Record"),"."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(41841).Z,width:"775",height:"197"}))),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(38108).Z,width:"550",height:"935"}))),(0,o.kt)("p",null,"Add a few ",(0,o.kt)("strong",{parentName:"p"},"Records")," and see them pop up in the ",(0,o.kt)("strong",{parentName:"p"},"Class"),". You can also try deleting them by selecting them and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit"),"->",(0,o.kt)("inlineCode",{parentName:"p"},"Delete these rows"),"."))}m.isMDXComponent=!0},23947:function(e,t,a){t.Z=a.p+"assets/images/add-class-de5f03ff13e5aa5aaa036e2dfa44e40a.png"},25890:function(e,t,a){t.Z=a.p+"assets/images/add-new-column-2-8f5d0397ac2a321ad6ffe367da8f640e.png"},97979:function(e,t,a){t.Z=a.p+"assets/images/add-new-column-4d8eed77b281703b4da99d51c90867c8.png"},41841:function(e,t,a){t.Z=a.p+"assets/images/add-row-1-ef8083bdc8eba014558cb772556eb658.png"},38108:function(e,t,a){t.Z=a.p+"assets/images/add-row-2-8ffa34af24ab10d403086865d9ad77e3.png"},84871:function(e,t,a){t.Z=a.p+"assets/images/class-063341b3180dbf8e4886b14728f05e4b.png"},79508:function(e,t,a){t.Z=a.p+"assets/images/create-class-1-cc6c8dc7508545e433483e89c4d7a5be.png"},3348:function(e,t,a){t.Z=a.p+"assets/images/create-class-2-3b2112427023035f8b6526bb063ec736.png"},26954:function(e,t,a){t.Z=a.p+"assets/images/dashboard-1-6c77e6c8066ff24071cb86458289757d.png"},84313:function(e,t,a){t.Z=a.p+"assets/images/record-1-a4e9947feb980b0061c240b3d4c88fa2.png"},15352:function(e,t,a){t.Z=a.p+"assets/images/record-2-788229483fdbb6e5a77d13ce2be0be90.png"}}]);