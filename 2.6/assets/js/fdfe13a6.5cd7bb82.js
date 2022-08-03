"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[169],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return a?o.createElement(g,i(i({ref:t},d),{},{components:a})):o.createElement(g,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},89749:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var o=a(83117),n=a(80102),r=(a(67294),a(3905)),i=a(44996),s=["components"],l={title:"Workflow overview",hide_title:!0},c="Workflow Overview",d={unversionedId:"getting-started/workflow",id:"getting-started/workflow",title:"Workflow overview",description:"Let's take a look at the different concepts of the Noodl workflow when building your applications, namely",source:"@site/docs/getting-started/workflow.md",sourceDirName:"getting-started",slug:"/getting-started/workflow",permalink:"/2.6/docs/getting-started/workflow",tags:[],version:"current",frontMatter:{title:"Workflow overview",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Fundamentals",permalink:"/2.6/docs/getting-started/fundamentals"},next:{title:"Editor Tour",permalink:"/2.6/docs/getting-started/editor-tour"}},u={},p=[{value:"Building user interfaces",id:"building-user-interfaces",level:2},{value:"Customizing UI Controls",id:"customizing-ui-controls",level:3},{value:"Page Navigation &amp; Components",id:"page-navigation--components",level:2},{value:"Actions",id:"actions",level:2},{value:"Working with data",id:"working-with-data",level:2},{value:"The cloud database",id:"the-cloud-database",level:2},{value:"Business Logic",id:"business-logic",level:2},{value:"Collaboration",id:"collaboration",level:2},{value:"Modules and Extensions",id:"modules-and-extensions",level:2}],m={toc:p};function g(e){var t=e.components,l=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"workflow-overview"},"Workflow Overview"),(0,r.kt)("p",null,"Let's take a look at the different concepts of the Noodl workflow when building your applications, namely"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Building User Interfaces"),(0,r.kt)("li",{parentName:"ul"},"Page Navigation & Components"),(0,r.kt)("li",{parentName:"ul"},"Actions"),(0,r.kt)("li",{parentName:"ul"},"Working with Data"),(0,r.kt)("li",{parentName:"ul"},"The Cloud Database"),(0,r.kt)("li",{parentName:"ul"},"Business Logic"),(0,r.kt)("li",{parentName:"ul"},"Collaboration"),(0,r.kt)("li",{parentName:"ul"},"Modules and Extensions")),(0,r.kt)("h2",{id:"building-user-interfaces"},"Building user interfaces"),(0,r.kt)("p",null,"Any app needs a great ",(0,r.kt)("strong",{parentName:"p"},"User Interface"),". In Noodl it's easy and fast to build dynamic, reactive, beautiful user interfaces using the built in UI Controls. These controls are then arranged and layed out appropriately. Noodl contains a library of highly customizable core UI controls. It's also possible to extend Noodl with your own UI Controls, if needed."),(0,r.kt)("div",{className:"ndl-video"},(0,r.kt)("video",{width:"100%",autoPlay:!0,muted:!0,loop:!0,src:(0,i.Z)("/docs/getting-started/basic-concepts/ui-1.mp4")})),(0,r.kt)("h3",{id:"customizing-ui-controls"},"Customizing UI Controls"),(0,r.kt)("p",null,"Each UI Control have properties that use can be used for fine grained customization. Here is a short overview of concepts important for building user interfaces:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Visual States")," Each UI Control have a set of visual states, e.g. Hover, Pressed etc, and the control properties can be set for each state individually. Learn more ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/user-interfaces/visual-states"},"here"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Transitions")," You can control transition animations between each visual state using the animation editor.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Variants")," Define re-usable variants for your UI controls including properties, visual states and transitions. Build your own design systems and become super productive. Learn more ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/user-interfaces/style-variants"},"here")))),(0,r.kt)("h2",{id:"page-navigation--components"},"Page Navigation & Components"),(0,r.kt)("p",null,"When you start building more complete frontends you will be working with ",(0,r.kt)("strong",{parentName:"p"},"components"),". A component can be an entire page in your application, these are called ",(0,r.kt)("strong",{parentName:"p"},"Page Component"),"s, or they can be a smaller part of your UI that you want to re-use in many places, these are called ",(0,r.kt)("strong",{parentName:"p"},"Visual Component"),"s. They all live on your ",(0,r.kt)("strong",{parentName:"p"},"Canvas")," where you will get an overview of your entire application."),(0,r.kt)("div",{className:"ndl-video"},(0,r.kt)("video",{width:"100%",autoPlay:!0,muted:!0,loop:!0,src:(0,i.Z)("/docs/getting-started/basic-concepts/nav-1.mp4")})),(0,r.kt)("p",null,"It's simple to create page navigation but the system is also flexible enough to build more complex navigation flows, such as nested navigation. Noodl supports state of the art web app navigation, with permalinks and encoding of data in URLs. Here is a short overview of concepts important for building pages and navigation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Page"),", ",(0,r.kt)("strong",{parentName:"p"},"Page Router")," and ",(0,r.kt)("strong",{parentName:"p"},"Navigate")," nodes are the essence of the navigation system. Learn how to build basic page navigation in this ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/navigation/basic-navigation"},"guide")," and more advanced multi level navigation ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/navigation/multi-level-navigation"},"here"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Another feature of the navigation is ",(0,r.kt)("strong",{parentName:"p"},"Popups"),", these can be used to show or collect transient information. Learn more about popups ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/navigation/popups"},"here")))),(0,r.kt)("h2",{id:"actions"},"Actions"),(0,r.kt)("p",null,"An important concept in Noodl, that was briefly shown above, is ",(0,r.kt)("strong",{parentName:"p"},"action nodes"),". These nodes perform some sort of action when they are triggered by a signal, e.g. from a UI control (such as a button click) or from another action node (such as when the action has completed successfully or failed). Noodl contains a wide variety of action nodes for most common basic tasks such as ",(0,r.kt)("strong",{parentName:"p"},"Navigation")," and ",(0,r.kt)("strong",{parentName:"p"},"Reading and writing data"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(49998).Z,width:"800",height:"443"})),(0,r.kt)("p",null,"Connections between nodes is a core concept in Noodl, this is how you connect your user interface to data and actions."),(0,r.kt)("h2",{id:"working-with-data"},"Working with data"),(0,r.kt)("p",null,"When you have built some of your frontend, added pages, components and navigation it is time to connect dynamic data to your user interfaces. This is what makes your application come alive, and in Noodl you have a neat visual way to build modern reactive user interfaces."),(0,r.kt)("div",{className:"ndl-video"},(0,r.kt)("video",{width:"100%",autoPlay:!0,muted:!0,loop:!0,src:(0,i.Z)("/docs/getting-started/basic-concepts/data-1.mp4")})),(0,r.kt)("p",null,"There are three basic concepts for data in Noodl, the ",(0,r.kt)("strong",{parentName:"p"},"Variable"),", ",(0,r.kt)("strong",{parentName:"p"},"Object")," and ",(0,r.kt)("strong",{parentName:"p"},"Array")," nodes. You can learn more about how to work with these ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/data/overview"},"here"),"."),(0,r.kt)("p",null,"A very common pattern in web applications frontends are different types of lists or other dynamic repeating content. Learn how to do that in Noodl ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/data/list-basics"},"here")),(0,r.kt)("h2",{id:"the-cloud-database"},"The cloud database"),(0,r.kt)("p",null,"Now it's time to take a look at the second part of the Noodl platform, the cloud database. This is an important piece of any web application. You can create and manage cloud databases, or cloud services as they are refered to as, from within your Noodl project."),(0,r.kt)("div",{className:"ndl-video"},(0,r.kt)("video",{width:"100%",autoPlay:!0,muted:!0,loop:!0,src:(0,i.Z)("/docs/getting-started/basic-concepts/cloud-1.mp4")})),(0,r.kt)("p",null,"The Noodl cloud services will provide your applications with a couple of important functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Reading and writing data"),". You can create ",(0,r.kt)("strong",{parentName:"p"},"Class"),"es where you store ",(0,r.kt)("strong",{parentName:"p"},"Record"),"s, these can then be read, filtered and presented in your application. Dive in ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/cloud-data/overview"},"here")," to start learning about cloud services.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"User Management"),". Most applications need users, you can sign up users, log in, manage passwords etc. Take a look at this ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/business-logic/user-management"},"guide")," for a good place to get started.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Access Control"),". When you have users and data, you need to control which users can access what data. This can be done trough ",(0,r.kt)("strong",{parentName:"p"},"Role"),"s in your cloud servies. Learn more ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/cloud-data/access-control"},"here")))),(0,r.kt)("h2",{id:"business-logic"},"Business Logic"),(0,r.kt)("p",null,"As mentioned above you use ",(0,r.kt)("strong",{parentName:"p"},"action nodes")," to perform some sort of business logic action in Noodl. There are a wide variety of action nodes built in for most basic tasks such as navigating between pages, or storing data in the database. Data and signals from your UI controls are connected to your action nodes, and you can connect them together to make flows."),(0,r.kt)("div",{className:"ndl-video"},(0,r.kt)("video",{width:"100%",autoPlay:!0,muted:!0,loop:!0,src:(0,i.Z)("/docs/getting-started/basic-concepts/actions-1.mp4")})),(0,r.kt)("p",null,"But most applications require some sort of more advanced business logic, for instance processing data from the database or maybe logic to create more advanced UI components. Here you can create your own actions by writing simple Javascript snippets. Some things are simply better done in code, but you don't beed to be a developer, we try to keep things low-code over here."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(41775).Z,width:"2448",height:"1406"})),(0,r.kt)("h2",{id:"collaboration"},"Collaboration"),(0,r.kt)("p",null,"Finally, when your applications is growing you will want to work with your colleagues and friends. Thankfully, Noodl has a solid collaboration system with version control built in. You can work together on a project, you can each work on your own branches and merge. We try to bring really powerful concepts from the software development world into Noodl to make sure that you will never hit a wall."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(77390).Z,width:"642",height:"1062"}))),(0,r.kt)("p",null,"Learn more about the collaboration and version control capabilities ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/collaboration/version-control"},"here"),"."),(0,r.kt)("h2",{id:"modules-and-extensions"},"Modules and Extensions"),(0,r.kt)("p",null,"In Noodl you can also import modules developed by others or develop your own modules. You can find a list of current modules provided by Noodl ",(0,r.kt)("a",{parentName:"p",href:"/library/modules/overview"},"here"),". You can also build your own modules and extensions, for example wrapping existing Javascript libraries. You can read more about it ",(0,r.kt)("a",{parentName:"p",href:"/javascript/extending/overview"},"here"),"."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(96374).Z,width:"2083",height:"1654"}))))}g.isMDXComponent=!0},41775:function(e,t,a){t.Z=a.p+"assets/images/actions-2-b8d7d2ca736ea0ef9ed2690ec250bc25.png"},49998:function(e,t,a){t.Z=a.p+"assets/images/connecting-nodes-ef12704b2562eefa596b749fb9630629.gif"},77390:function(e,t,a){t.Z=a.p+"assets/images/initial-state-a43f2df5b6e5ca08ed070dc12b55f8c5.png"},96374:function(e,t,a){t.Z=a.p+"assets/images/browse-modules-c2f6a8c477ff26c48c300cf7ed3223e3.png"}}]);