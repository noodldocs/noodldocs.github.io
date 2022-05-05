"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[1863],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=r,k=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return a?n.createElement(k,i(i({ref:t},l),{},{components:a})):n.createElement(k,i({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},74816:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=["components"],s={title:"Creating a Backend",hide_title:!0},c="Creating a Backend for your project",d={unversionedId:"guides/cloud-data/creating-a-backend",id:"guides/cloud-data/creating-a-backend",title:"Creating a Backend",description:"What you will learn in this guide",source:"@site/docs/guides/cloud-data/creating-a-backend.md",sourceDirName:"guides/cloud-data",slug:"/guides/cloud-data/creating-a-backend",permalink:"/2.6/docs/guides/cloud-data/creating-a-backend",tags:[],version:"current",frontMatter:{title:"Creating a Backend",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Working with Cloud Data in Noodl",permalink:"/2.6/docs/guides/cloud-data/overview"},next:{title:"Creating a Database Class",permalink:"/2.6/docs/guides/cloud-data/creating-a-class"}},l={},p=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"What is a Backend and when do you need it?",id:"what-is-a-backend-and-when-do-you-need-it",level:2},{value:"Internal vs External Backends",id:"internal-vs-external-backends",level:3},{value:"Select active backend",id:"select-active-backend",level:2},{value:"Inspect the Backend using the Dashboard",id:"inspect-the-backend-using-the-dashboard",level:2},{value:"Classes",id:"classes",level:3},{value:"Creating and switching to a new backend",id:"creating-and-switching-to-a-new-backend",level:2}],u={toc:p};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-a-backend-for-your-project"},"Creating a Backend for your project"),(0,o.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,o.kt)("p",null,"This guide will take you through the process of creating a ",(0,o.kt)("strong",{parentName:"p"},"Backend")," for your Noodl project. A ",(0,o.kt)("strong",{parentName:"p"},"Backend")," is needed if you want to fetch and store data for you application in a ",(0,o.kt)("strong",{parentName:"p"},"Database"),"."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"We will go through the following steps in this guide:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Creating a Backend"),(0,o.kt)("li",{parentName:"ul"},"Selecting a Backend for you project"),(0,o.kt)("li",{parentName:"ul"},"Inspect the ",(0,o.kt)("strong",{parentName:"li"},"Backend Database")," using the ",(0,o.kt)("strong",{parentName:"li"},"Dashboard")),(0,o.kt)("li",{parentName:"ul"},"Create and switch to a new ",(0,o.kt)("strong",{parentName:"li"},"Backend"))),(0,o.kt)("h2",{id:"what-is-a-backend-and-when-do-you-need-it"},"What is a Backend and when do you need it?"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Backend")," is a piece of software running in the cloud that helps serving your Noodl app with data and cloud functionality. The main reason for using a ",(0,o.kt)("strong",{parentName:"p"},"Backend")," in your project is to use its ",(0,o.kt)("strong",{parentName:"p"},"Database"),". For example the nodes ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/record"},"Record")," and ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/query-records"},"Query Records")," can only be used if you have a ",(0,o.kt)("strong",{parentName:"p"},"Backend")," active for you project."),(0,o.kt)("p",null,"Each ",(0,o.kt)("strong",{parentName:"p"},"Backend")," has a dedicated database which means you might want to have multiple ",(0,o.kt)("strong",{parentName:"p"},"Backends")," available for your project, for example one for your test data and one for your production data. Only one ",(0,o.kt)("strong",{parentName:"p"},"Backend")," can be enabled at a time."),(0,o.kt)("p",null,"Also note that ",(0,o.kt)("strong",{parentName:"p"},"Backends")," are shared within a workspace, i.e. all projects in a workspace have access to the same ",(0,o.kt)("strong",{parentName:"p"},"Backends"),"."),(0,o.kt)("h3",{id:"internal-vs-external-backends"},"Internal vs External Backends"),(0,o.kt)("p",null,"In Noodl there are two types of ",(0,o.kt)("strong",{parentName:"p"},"Backends"),", ",(0,o.kt)("strong",{parentName:"p"},"Internal")," and ",(0,o.kt)("strong",{parentName:"p"},"External"),". The ",(0,o.kt)("strong",{parentName:"p"},"Internal Backends")," are easiest to use, since Noodl can create those for you in a few clicks. ",(0,o.kt)("strong",{parentName:"p"},"External Backends")," are Backends that you set up and host yourself. In this guide we will focus on ",(0,o.kt)("strong",{parentName:"p"},"Internal Backends"),"."),(0,o.kt)("p",null,"To add a new Cloud Service click the ",(0,o.kt)("strong",{parentName:"p"},"Cloud Services")," icon in the top right."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(89423).Z,width:"771",height:"450"}))),(0,o.kt)("p",null,"Go to the ",(0,o.kt)("strong",{parentName:"p"},"Add Cloud Service")," tab."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(28641).Z,width:"774",height:"634"}))),(0,o.kt)("p",null,'Give the Cloud Service a name, for example "My Cloud Service" and a description "My cloud service for development". It could be a good idea to have multiple cloud services for the same project, since each cloud service will have its own database. This means that you can have one cloud service for development - where it doesnt matter if you mess up your data - and one for production.'),(0,o.kt)("p",null,"You can skip filling in a Master Key, which means that Noodl will automatically generate one for you."),(0,o.kt)("h2",{id:"select-active-backend"},"Select active backend"),(0,o.kt)("p",null,"Now you can select the newly created Backend as the Backend for your project."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(76011).Z,width:"775",height:"441"}))),(0,o.kt)("p",null,"This means that any data requests, for example from a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/query-records"},"Query Records"),", will come from this backend."),(0,o.kt)("h2",{id:"inspect-the-backend-using-the-dashboard"},"Inspect the Backend using the Dashboard"),(0,o.kt)("p",null,"Now your project is connected to a ",(0,o.kt)("strong",{parentName:"p"},"Backend")," with a ",(0,o.kt)("strong",{parentName:"p"},"Database"),". The best way to get an overview of the database is to open the ",(0,o.kt)("strong",{parentName:"p"},"Dashboard"),". You open it by clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"Open dashboard")," button on your Cloud Service."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(4746).Z,width:"3155",height:"1304"}))),(0,o.kt)("p",null,"No you can see the contents of your ",(0,o.kt)("strong",{parentName:"p"},"Database")," in the menu to the left, under ",(0,o.kt)("inlineCode",{parentName:"p"},"Browser"),". Right now, the Database contains two ",(0,o.kt)("em",{parentName:"p"},"classes"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Role"),". These two classes are created automatically. These classes are used to manage login and credentials in your app but we will not care about them in this guide."),(0,o.kt)("h3",{id:"classes"},"Classes"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Class")," in the database is a collection of ",(0,o.kt)("strong",{parentName:"p"},"Records")," of the same type. In other databases these are often referred to as ",(0,o.kt)("strong",{parentName:"p"},"Tables")," or ",(0,o.kt)("strong",{parentName:"p"},"Collections"),". In the case of the ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," class, it contains ",(0,o.kt)("strong",{parentName:"p"},"User Records")," where each record have data properties such as User Name, Email, etc. A typical app will have many different classes but we will not create any new classes in this guide. Instead you can close the ",(0,o.kt)("strong",{parentName:"p"},"Dashboard")," window for now."),(0,o.kt)("h2",{id:"creating-and-switching-to-a-new-backend"},"Creating and switching to a new backend"),(0,o.kt)("p",null,"Now you can create a second backend, by clicking ",(0,o.kt)("inlineCode",{parentName:"p"},"Create New Backend"),". Give it a name, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"Second Backend")," and a short description: ",(0,o.kt)("inlineCode",{parentName:"p"},"My production backend"),". You now have a second backend in the list, that you can switch to by clicking ",(0,o.kt)("inlineCode",{parentName:"p"},"Set as Project Backend"),"."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(92038).Z,width:"784",height:"627"}))),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(33385).Z,width:"784",height:"604"}))),(0,o.kt)("p",null,"If you now open the ",(0,o.kt)("strong",{parentName:"p"},"Dashboard")," again, but for the second backend, you can see that the ",(0,o.kt)("strong",{parentName:"p"},"Dashboard"),' is now showing the contents of the Database in "My second backend". The content looks the same as the ',(0,o.kt)("strong",{parentName:"p"},"Default Backend"),", containing the ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Role")," classes with no entries yet. But they are located in a different database."))}h.isMDXComponent=!0},28641:function(e,t,a){t.Z=a.p+"assets/images/add-cloud-service-dd1e555c1ab936851a51355f8ce89087.png"},76011:function(e,t,a){t.Z=a.p+"assets/images/cloud-service-created-34740fde71669b260a4ac84b756b591a.png"},89423:function(e,t,a){t.Z=a.p+"assets/images/cloud-services-140c110262b73a636d078406baf9a798.png"},4746:function(e,t,a){t.Z=a.p+"assets/images/dashboard-1-28c76d133663070c8e86956092a8610c.png"},33385:function(e,t,a){t.Z=a.p+"assets/images/second-backend-2-976aec1400d38ba5b7b5efbf6030c5f9.png"},92038:function(e,t,a){t.Z=a.p+"assets/images/second-backend-0af2699d0a0f25fb17fc8e41ec0008c5.png"}}]);