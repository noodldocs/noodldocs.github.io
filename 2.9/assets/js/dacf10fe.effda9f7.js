"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[9801],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),h=r,g=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},45378:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=["components"],l={title:"Filtering Database Queries",hide_title:!0},s="Filtering Database Queries",d={unversionedId:"guides/cloud-data/filtering-database-queries",id:"guides/cloud-data/filtering-database-queries",title:"Filtering Database Queries",description:"What you will learn in this guide",source:"@site/docs/guides/cloud-data/filtering-database-queries.md",sourceDirName:"guides/cloud-data",slug:"/guides/cloud-data/filtering-database-queries",permalink:"/2.9/docs/guides/cloud-data/filtering-database-queries",tags:[],version:"current",frontMatter:{title:"Filtering Database Queries",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Updating Records",permalink:"/2.9/docs/guides/cloud-data/updating-records"},next:{title:"Records Relationships",permalink:"/2.9/docs/guides/cloud-data/record-relations"}},p={},u=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"Filtering Records in the Cloud vs Locally",id:"filtering-records-in-the-cloud-vs-locally",level:2},{value:"Using the Query Records node for filtering",id:"using-the-query-records-node-for-filtering",level:2},{value:"Dynamic filtering",id:"dynamic-filtering",level:2}],c={toc:u};function h(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"filtering-database-queries"},"Filtering Database Queries"),(0,o.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,o.kt)("p",null,"In this guide you will learn how to let your database make a filtered query of your ",(0,o.kt)("strong",{parentName:"p"},"Records"),". This is a very common task in apps. For example if you want to see all comments related only to one specific post, or all messages that are unread. This is achieved by querying the database and ask it to filter out only the selected results."),(0,o.kt)("p",null,"In Noodl you use the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/query-records"},"Query Records")," node to make a filtered query."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"We will go through the following steps in this guide"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Query the Database for ",(0,o.kt)("strong",{parentName:"li"},"Records")," with a property equal to a specified value"),(0,o.kt)("li",{parentName:"ul"},"Make a dynamic filter, i.e. where the Qurey filter can change dynamically")),(0,o.kt)("p",null,"To get most out of this guide, it's best that you are already familiar with how to set up a cloud backend, create ",(0,o.kt)("strong",{parentName:"p"},"Classes")," and ",(0,o.kt)("strong",{parentName:"p"},"Records")," and make basic queries. You can quickly learn that by going through the following guides:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/cloud-data/creating-a-backend"},"Creating a Backend")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/cloud-data/creating-a-class"},"Creating a Class")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/cloud-data/creating-new-database-records"},"Creating Records")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/cloud-data/quering-records-from-database"},"Query Records")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/cloud-data/updating-records"},"Update Records"))),(0,o.kt)("h2",{id:"filtering-records-in-the-cloud-vs-locally"},"Filtering Records in the Cloud vs Locally"),(0,o.kt)("p",null,"This guide is focusing in on filtering Queries in the Cloud Database. This means that ",(0,o.kt)("strong",{parentName:"p"},"Records")," and filtered before they are sent to your app over the network. This is what the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/query-records"},"Query Records")," node does."),(0,o.kt)("p",null,"There is also another node, ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/filter-records"},"Filter Records"),", that filters data ",(0,o.kt)("em",{parentName:"p"},"that is already in the app"),", i.e. it filters locally."),(0,o.kt)("p",null,"Both of these have their advantages and disadvantages and in a good app you often mix them."),(0,o.kt)("p",null,"Filtering in a Query in the Database (using ",(0,o.kt)("strong",{parentName:"p"},"Query Records"),") have the following advantages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You only send the filtered out ",(0,o.kt)("strong",{parentName:"p"},"Records")," over the network. This is incredibly important if you are working with large data sets. If you have thousands of products in a database, you only want to send the products that the user is searching for or your app will be slow.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can make use of optimized indexes in the Database if you for example are sorting or filtering out only certain objects. Again, if you work with large data sets with thousands or millions of ",(0,o.kt)("strong",{parentName:"p"},"Records")," this is key to make your app fast."))),(0,o.kt)("p",null,"Filtering a Query locally (using ",(0,o.kt)("strong",{parentName:"p"},"Filter Records"),") have these main advantages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Once the ",(0,o.kt)("strong",{parentName:"p"},"Records")," are in the app, you don't need to send ",(0,o.kt)("strong",{parentName:"p"},"Records")," over the network which makes your app much faster.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you have many users of your app your Backend and Database may be congested. By avoiding Querying the Cloud Database too often, for example by handling data locally, you put less stress on it."))),(0,o.kt)("p",null,"Often, the most optimal solution is to combine the two methods. Make a Filtered Query towards the database that filters down the amount of ",(0,o.kt)("strong",{parentName:"p"},"Records")," to be sent to the app to a reasonable number, then use ",(0,o.kt)("strong",{parentName:"p"},"Filter Records")," for additional filtering and sorting locally."),(0,o.kt)("p",null,"In this guide, we will specifically look at filtering using the ",(0,o.kt)("strong",{parentName:"p"},"Query Records")," node. The ",(0,o.kt)("strong",{parentName:"p"},"Filter Records")," node works in a very similar fashion but only works on ",(0,o.kt)("strong",{parentName:"p"},"Arrays")," of ",(0,o.kt)("strong",{parentName:"p"},"Records")," that are already in the App, typically coming from a ",(0,o.kt)("strong",{parentName:"p"},"Query Records")," node."),(0,o.kt)("h2",{id:"using-the-query-records-node-for-filtering"},"Using the Query Records node for filtering"),(0,o.kt)("p",null,"This guide assumes that you already have a Backend up and running, with at least one Class containing a number of ",(0,o.kt)("strong",{parentName:"p"},"Records"),'. You can follow the previous "Working With Cloud Data" guides if you need help with that. As an example we will use a simple Task app created in the previous guides. It has one ',(0,o.kt)("strong",{parentName:"p"},"Class")," called ",(0,o.kt)("inlineCode",{parentName:"p"},"Task"),". It has two properties, ",(0,o.kt)("inlineCode",{parentName:"p"},"task")," which is a description of the task, and ",(0,o.kt)("inlineCode",{parentName:"p"},"isDone")," a boolean that keeps track of if the task is completed or not."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(10086).Z,width:"561",height:"315"}))),(0,o.kt)("p",null,"The App consists of a main screen as below:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(72461).Z,width:"1415",height:"522"}))),(0,o.kt)("p",null,"Each todo ",(0,o.kt)("strong",{parentName:"p"},"Record")," is represented by a list item constructed as below:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(60511).Z,width:"1730",height:"790"}))),(0,o.kt)("p",null,"Now we want to add a filter to only see the uncompleted tasks. Click on the ",(0,o.kt)("strong",{parentName:"p"},"Query Records")," node in the main screen. Then click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Filter Rule")," button."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(66646).Z,width:"780",height:"1060"}))),(0,o.kt)("p",null,"A new popup will appear where you can construct your filter. Feel free to play around a little with it."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(10576).Z,width:"1285",height:"1157"}))),(0,o.kt)("p",null,"It basically has three parts:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<property> <operator> <value or input>")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<property>")," is a property of your ",(0,o.kt)("strong",{parentName:"p"},"Record"),", for example ",(0,o.kt)("inlineCode",{parentName:"p"},"isDone")," in our Task example."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<operator>")," is a logical operator for the condition. There are a number of different operators and not all operators are available for all types of properties.\nFor the case of ",(0,o.kt)("inlineCode",{parentName:"p"},"isDone")," - a ",(0,o.kt)("strong",{parentName:"p"},"boolean")," there are for operators available: ",(0,o.kt)("inlineCode",{parentName:"p"},"equal to"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"not equal to"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"exists")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"not exists"),". While the ",(0,o.kt)("inlineCode",{parentName:"p"},"equal to")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"not equal to")," are pretty self explanatory, the ",(0,o.kt)("inlineCode",{parentName:"p"},"exists")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"not exists")," operators work in the following way: They check whether there is a value set at all for the property, or if it's undefined."),(0,o.kt)("p",null,"Finally the ",(0,o.kt)("inlineCode",{parentName:"p"},"<value or input>")," is the value that the operator should be applied to. The ",(0,o.kt)("inlineCode",{parentName:"p"},"<input>")," option we will look at later, so let's use ",(0,o.kt)("inlineCode",{parentName:"p"},"<value>")," for now."),(0,o.kt)("p",null,"In our case we want to filter out only the tasks that are not yet completed, i.e with ",(0,o.kt)("inlineCode",{parentName:"p"},"isDone = false"),". So our filter will be:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<isDone> <equal to> <false>")),(0,o.kt)("p",null,"Let's select that. You can see that the somewhat cryptic format of the filter is spelled out in natural language below the filter."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(93618).Z,width:"767",height:"1197"}))),(0,o.kt)("p",null,"You should already now see the list in your app changing to only show tasks that are uncompleted (if you have any). If you check the tasks they will start disappearing one by one as they are being filtered out. If you want them back, you will have to go into the ",(0,o.kt)("strong",{parentName:"p"},"Dashboard")," and change the ",(0,o.kt)("inlineCode",{parentName:"p"},"isDone")," value to false again, and refresh your app."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(26656).Z,width:"3840",height:"2160"}))),(0,o.kt)("h2",{id:"dynamic-filtering"},"Dynamic filtering"),(0,o.kt)("p",null,"The current state of the app is obviously flawed - when you finish all your tasks you see nothing. We need to be able to switch views between the completed and the uncompleted tasks."),(0,o.kt)("p",null,"Lets add a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/ui-controls/radio-button-group"},"Radio Button Group")," with two ",(0,o.kt)("a",{parentName:"p",href:"/nodes/ui-controls/radio-button"},"Radio Buttons"),". With this, we can control wether we want to show the uncomplete tasks or the completed tasks."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(15475).Z,width:"868",height:"529"}))),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(52600).Z,width:"553",height:"631"}))),(0,o.kt)("p",null,'Make sure the label for the buttons are set correctly ("Show Uncompleted"/"Show Completed") and that their value is set to "Uncompleted"/"Completed" respectively. Also, the ',(0,o.kt)("strong",{parentName:"p"},"Value")," of the ",(0,o.kt)("strong",{parentName:"p"},"Radio Button Group"),' should be "Uncompleted". That will be the default state. We will use the ',(0,o.kt)("strong",{parentName:"p"},"Value")," output of the ",(0,o.kt)("strong",{parentName:"p"},"Radio Button Group")," to control the filter settings of the ",(0,o.kt)("strong",{parentName:"p"},"Query Records"),"."),(0,o.kt)("p",null,"Now lets update the ",(0,o.kt)("strong",{parentName:"p"},"Query Records")," node so we can control its filter using inputs. Click the ",(0,o.kt)("strong",{parentName:"p"},"Query Records")," node and change the last part of the filter to not take a value, but an ",(0,o.kt)("strong",{parentName:"p"},"input"),"."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(24553).Z,width:"1188",height:"343"}))),(0,o.kt)("p",null,'Name the input "isDoneFilter". Now the ',(0,o.kt)("strong",{parentName:"p"},"Query Records")," have a new input that we can use! If the input is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," we will filter out all completed tasks (",(0,o.kt)("inlineCode",{parentName:"p"},"isDone = true"),") and vice versa for ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("p",null,'Finally we need to convert the two Radio Button values "Uncompleted" and "Completed" to ',(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". We do that by creating an ",(0,o.kt)("a",{parentName:"p",href:"/nodes/math/expression"},"Expression")," node and setting the expression to"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'filterState === "Completed"')),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Expression")," node will output ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),' if the input is "Completed", otherwise ',(0,o.kt)("inlineCode",{parentName:"p"},"false"),". Finally connect the output of the ",(0,o.kt)("strong",{parentName:"p"},"Expression")," to the ",(0,o.kt)("strong",{parentName:"p"},"Query Records")," and - voila! - our filtering will change when clicking the radio buttons."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8330).Z,width:"910",height:"580"}))),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(66959).Z,width:"1200",height:"675"}))))}h.isMDXComponent=!0},66646:function(e,t,a){t.Z=a.p+"assets/images/add-filter-rule-1-8f33856e8e49a9a933f51902ce6fd41d.png"},10576:function(e,t,a){t.Z=a.p+"assets/images/add-filter-rule-2-7d1155c0991e6e7f31188da7c6a38c9a.png"},93618:function(e,t,a){t.Z=a.p+"assets/images/add-filter-rule-3-2207e124c089cccb0d0dbf2d42ccecfc.png"},24553:function(e,t,a){t.Z=a.p+"assets/images/add-filter-rule-4-32ea51a8ab8d0602cf9dc43860d541bf.png"},10086:function(e,t,a){t.Z=a.p+"assets/images/checkbox-anim-107998061ed9bf7d0dc303cf5dc13368.gif"},26656:function(e,t,a){t.Z=a.p+"assets/images/completing-tasks-248fdba43efbf5b5c4a139559d07cc03.gif"},60511:function(e,t,a){t.Z=a.p+"assets/images/list-item-2-3f1b8bdbe501c3d7c468136a044f5eed.png"},72461:function(e,t,a){t.Z=a.p+"assets/images/orig-app-6ee1e0c22666eef01f9eb3b00cf21938.png"},15475:function(e,t,a){t.Z=a.p+"assets/images/radiobutton-1-bb1a2b8849e058e18948338ea8d6a37d.png"},52600:function(e,t,a){t.Z=a.p+"assets/images/radiobutton-2-d720a589ed7d99962251131a238eb750.png"},8330:function(e,t,a){t.Z=a.p+"assets/images/radiobutton-3-4bfd57e515b5565a20db1d0a2371a6c7.png"},66959:function(e,t,a){t.Z=a.p+"assets/images/radiobutton-ui-acb5bfdcdb3916cf37cac29abe77a18d.gif"}}]);