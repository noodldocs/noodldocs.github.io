"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[8130],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=r,g=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8655:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=["components"],s={title:"Updating Records",hide_title:!0},l=void 0,d={unversionedId:"guides/cloud-data/updating-records",id:"guides/cloud-data/updating-records",title:"Updating Records",description:"What you will learn in this guide",source:"@site/docs/guides/cloud-data/updating-records.md",sourceDirName:"guides/cloud-data",slug:"/guides/cloud-data/updating-records",permalink:"/2.8/docs/guides/cloud-data/updating-records",tags:[],version:"current",frontMatter:{title:"Updating Records",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Querying records From Database",permalink:"/2.8/docs/guides/cloud-data/quering-records-from-database"},next:{title:"Filtering Database Queries",permalink:"/2.8/docs/guides/cloud-data/filtering-database-queries"}},c={},p=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"Updating Records in the database",id:"updating-records-in-the-database-1",level:2},{value:"The Set Record Properties node",id:"the-set-record-properties-node",level:3}],u={toc:p};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"updating-records-in-the-database"},"Updating Records in the Database"),(0,o.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,o.kt)("p",null,"In this guide you will learn how to use the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/set-record-properties"},"Set Record Properties")," node to update data in the Database."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"We will go through the following steps in this guide"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Update previously queried ",(0,o.kt)("strong",{parentName:"li"},"Records"))),(0,o.kt)("p",null,"To get most out of this guide, it's best that you are already familiar with how to set up a cloud backend, create ",(0,o.kt)("strong",{parentName:"p"},"Classes")," and ",(0,o.kt)("strong",{parentName:"p"},"Records")," and query them. You can quickly learn that by going through the following guides:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/cloud-data/creating-a-backend"},"Creating a Backend")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/cloud-data/creating-a-class"},"Creating a Class")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/cloud-data/creating-new-database-records"},"Creating Records")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/cloud-data/quering-records-from-database"},"Query Records"))),(0,o.kt)("h2",{id:"updating-records-in-the-database-1"},"Updating Records in the database"),(0,o.kt)("p",null,"It's simple to update ",(0,o.kt)("strong",{parentName:"p"},"Records")," in the database using the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/set-record-properties"},"Set Record Properties")," node. You basically make sure the ",(0,o.kt)("strong",{parentName:"p"},"Id")," is set to the right ",(0,o.kt)("strong",{parentName:"p"},"Record"),", set the properties to what you want them to be and signal the ",(0,o.kt)("strong",{parentName:"p"},"Do")," input."),(0,o.kt)("p",null,"To try it out, make sure you have a cloud service active for your project. Set up a ",(0,o.kt)("strong",{parentName:"p"},"Class")," in the Database with some ",(0,o.kt)("strong",{parentName:"p"},"Records")," in. Finally Query some items from the ",(0,o.kt)("strong",{parentName:"p"},"Database"),'. If you follow the previous "Working With Cloud Data" guides you can use the simple Task list created there. It looks something like this:'),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(16897).Z,width:"960",height:"917"}))),(0,o.kt)("p",null,'The app has two components, the main component called "App" and a List Item called "Task Item".'),(0,o.kt)("p",null,"The main component that looks like this:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(60310).Z,width:"1415",height:"522"}))),(0,o.kt)("p",null,"And the list item like this"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(21943).Z,width:"1187",height:"697"}))),(0,o.kt)("p",null,"A clear shortcoming of this small app is that when you complete a task and check its checkbox the database wont actually update. The ",(0,o.kt)("inlineCode",{parentName:"p"},"isDone")," property will not change."),(0,o.kt)("p",null,"You can double check that by clicking a few items and reload the app. The changes are only visual, the underlying data is not changed."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(83399).Z,width:"561",height:"315"}))),(0,o.kt)("h3",{id:"the-set-record-properties-node"},"The Set Record Properties node"),(0,o.kt)("p",null,"To update a ",(0,o.kt)("strong",{parentName:"p"},"Record")," you use the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/set-record-properties"},"Set Record Properties")," node."),(0,o.kt)("p",null,"Add the node to your List Item. Click it, to edit its properties, and make sure the correct ",(0,o.kt)("strong",{parentName:"p"},"Class")," is selected."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(48934).Z,width:"1750",height:"807"}))),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(40987).Z,width:"686",height:"741"}))),(0,o.kt)("p",null,"Also note the option ",(0,o.kt)("inlineCode",{parentName:"p"},"Store to"),". You can chose to store changes either locally and in the cloud, or only locally. Let it be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"Cloud and locally")," as we our changes to be stored directly in the database."),(0,o.kt)("p",null,'Sometimes it makes sense to only store the changes locally at first. For example, if you have a form with multiple fields and a "Save" button, it might make sense to first store only locally and when the user presses "Save" to store all changes at once.'),(0,o.kt)("p",null,"Now we need to make sure the ",(0,o.kt)("strong",{parentName:"p"},"Id")," of the ",(0,o.kt)("strong",{parentName:"p"},"Set Record Properties")," are set correctly to the ",(0,o.kt)("strong",{parentName:"p"},"Id")," that the ",(0,o.kt)("strong",{parentName:"p"},"Repeater")," provides."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(32501).Z,width:"765",height:"782"}))),(0,o.kt)("p",null,"Now the only two things left to do is to connect the ",(0,o.kt)("strong",{parentName:"p"},"Checkbox")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"isDone")," property and trigger the ",(0,o.kt)("strong",{parentName:"p"},"Do")," signal of the ",(0,o.kt)("strong",{parentName:"p"},"Set Record Properties"),". We want to save whenever the state of the ",(0,o.kt)("strong",{parentName:"p"},"Checkbox")," is updated, so lets connect the ",(0,o.kt)("strong",{parentName:"p"},"Changed")," signal coming out of the ",(0,o.kt)("strong",{parentName:"p"},"Checkbox")," to ",(0,o.kt)("strong",{parentName:"p"},"Do"),"."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(47430).Z,width:"1730",height:"790"}))),(0,o.kt)("p",null,"We're done! Click on your different tasks and double check that they are correctly saved by bringing up your ",(0,o.kt)("strong",{parentName:"p"},"Dashboard")," inspect the ",(0,o.kt)("inlineCode",{parentName:"p"},"isDone")," properties. Don't forget to press ",(0,o.kt)("inlineCode",{parentName:"p"},"Refresh")," in the ",(0,o.kt)("strong",{parentName:"p"},"Dashboard")," to update the view."))}h.isMDXComponent=!0},83399:function(e,t,a){t.Z=a.p+"assets/images/checkbox-anim-107998061ed9bf7d0dc303cf5dc13368.gif"},16897:function(e,t,a){t.Z=a.p+"assets/images/items-2-3c05397a338776ff2cab9c446a75d161.png"},48934:function(e,t,a){t.Z=a.p+"assets/images/list-item-1-6c1d39c65188a98f5ff3f0f7f619943b.png"},47430:function(e,t,a){t.Z=a.p+"assets/images/list-item-2-3f1b8bdbe501c3d7c468136a044f5eed.png"},60310:function(e,t,a){t.Z=a.p+"assets/images/orig-app-6ee1e0c22666eef01f9eb3b00cf21938.png"},21943:function(e,t,a){t.Z=a.p+"assets/images/record-3-bb509f74b06be8c9b5d8748f01e8076c.png"},40987:function(e,t,a){t.Z=a.p+"assets/images/set-record-prop-1-17ecbcc934e6d11886be73e618f3f120.png"},32501:function(e,t,a){t.Z=a.p+"assets/images/set-record-prop-2-5e9d05e968dca4fa308367be94043764.png"}}]);