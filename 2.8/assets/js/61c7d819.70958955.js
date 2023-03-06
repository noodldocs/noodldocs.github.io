"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[13],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,g=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return n?o.createElement(g,i(i({ref:t},u),{},{components:n})):o.createElement(g,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60699:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],s={title:"Using Zapier for Business Logic",hide_title:!0},c=void 0,l={unversionedId:"guides/business-logic/zapier",id:"guides/business-logic/zapier",title:"Using Zapier for Business Logic",description:"What you will learn in this guide",source:"@site/docs/guides/business-logic/zapier.md",sourceDirName:"guides/business-logic",slug:"/guides/business-logic/zapier",permalink:"/2.8/docs/guides/business-logic/zapier",tags:[],version:"current",frontMatter:{title:"Using Zapier for Business Logic",hide_title:!0}},u={},p=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Setup",id:"setup",level:2}],d={toc:p};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-zapier-for-business-logic"},"Using Zapier for Business Logic"),(0,a.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,a.kt)("p",null,"This guide will cover how to connect your Noodl application to ",(0,a.kt)("strong",{parentName:"p"},"Zapier"),". ",(0,a.kt)("strong",{parentName:"p"},"Zapier")," is a great platform for automatic tasks and connecting different cloud based applications. This can become very useful for Noodl creators as some tasks need to be performed in the cloud. After a used has signed in, you might want to send them a welcome email, or maybe on some sort of action like inviting a user to a team. Other features, such as payment, can be integrated into your Noodl app successfully using ",(0,a.kt)("strong",{parentName:"p"},"Zapier"),". Continue reading or watch the video to get started."),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/mHX9XdFMHJ0",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,a.kt)("p",null,"You can also watch this video that explains how to use Zapier to send out emails for email verification and forgot password links."),(0,a.kt)("p",null,"You can also check out the video below that walks through all deployment options in Noodl, including deploying to a Custom Domain:"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/DWwE1RzuN2o",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"You connect ",(0,a.kt)("strong",{parentName:"p"},"Zapier")," to your Noodl cloud services, this is what you need to create users, write data to the cloud etc. These events can be used to trigger flows in Zapier."),(0,a.kt)("p",null,"Setting up a Noodl cloud service is very simple and is covered in this ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/cloud-data/creating-a-backend"},"guide"),"."),(0,a.kt)("p",null,"With your cloud services up and running you can start creating ",(0,a.kt)("strong",{parentName:"p"},"Zaps"),". For more information on ",(0,a.kt)("strong",{parentName:"p"},"Zapier")," and to start learning the basics go ",(0,a.kt)("a",{parentName:"p",href:"https://zapier.com/how-it-works"},"here"),"."),(0,a.kt)("p",null,"You start your new ",(0,a.kt)("strong",{parentName:"p"},"Zap")," by choosing the ",(0,a.kt)("strong",{parentName:"p"},"Noodl")," trigger. Here you first need to choose an event from the Noodl cloud services that will trigger your ",(0,a.kt)("strong",{parentName:"p"},"Zap"),"."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(44271).Z,width:"1960",height:"516"}))),(0,a.kt)("p",null,"There are a number of events to choose from:"),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(38486).Z,width:"1914",height:"992"}))),(0,a.kt)("p",null,"To for instance send an email with a new user is created, pick the ",(0,a.kt)("strong",{parentName:"p"},"User Created")," event. Next up you need to connect ",(0,a.kt)("strong",{parentName:"p"},"Zapier")," to your Noodl cloud services."),(0,a.kt)("p",null,"Under ",(0,a.kt)("strong",{parentName:"p"},"Choose Account")," you will need to select ",(0,a.kt)("strong",{parentName:"p"},"Connect new account")," which will bring up the connection popup show below."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(87677).Z,width:"1168",height:"974"}))),(0,a.kt)("p",null,"Here you need the cloud services endpoint and the master key. This will allow Zapier to connect to your applications cloud services and to perform tasks on your behalf."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(92201).Z,width:"1036",height:"366"}))),(0,a.kt)("p",null,"Simply copy the ",(0,a.kt)("strong",{parentName:"p"},"Endpoint")," and ",(0,a.kt)("strong",{parentName:"p"},"Master Key")," into the corresponding fields in the Zapier connection popup and hit ",(0,a.kt)("strong",{parentName:"p"},"Yes, continue"),". This should connect you to your cloud services."),(0,a.kt)("p",null,"That's it really. Now you can go on and hook up your Noodl application to all the good stuff in the ",(0,a.kt)("strong",{parentName:"p"},"Zapier")," integrations. But that's not the only thing you can do with Noodl and Zapier. There are also a bunch of actions that you can perform on your Noodl cloud services, perhaps as response to other Zapier events."),(0,a.kt)("p",null,"If you instead choose the ",(0,a.kt)("strong",{parentName:"p"},"Noodl")," app when creating an action you will have the following choices:"),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(94403).Z,width:"1896",height:"1254"}))),(0,a.kt)("p",null,"For instance, ",(0,a.kt)("strong",{parentName:"p"},"Create Record")," lets you create a new record in the database. This can be useful to support payment flows, where the payment service will trigger an event in Zapier when a payment is performed and you can then insert the payment in your database."),(0,a.kt)("p",null,"Another example is that for some tasks you might want to make sure that the user has the correct access level before performing the task. You can do this by issuing a function call to that triggers a Zapier ",(0,a.kt)("strong",{parentName:"p"},"Zap")," that contains the ",(0,a.kt)("strong",{parentName:"p"},"Fetch User")," action. This will allow you to examing the fields of the user and only perform the action if the user has the correct credentials."),(0,a.kt)("p",null,"There are endless ways you can extend your application by running ",(0,a.kt)("strong",{parentName:"p"},"Zapier")," tasks and this is an integral part of may application flows."))}h.isMDXComponent=!0},94403:function(e,t,n){t.Z=n.p+"assets/images/actions-1-bfb53cadffd41832841d130fc832487a.png"},87677:function(e,t,n){t.Z=n.p+"assets/images/connect-1-e28db19ac2f9cee3d2444f6960b15a99.png"},92201:function(e,t,n){t.Z=n.p+"assets/images/connect-2-d8d15f30fb8c60b1da4bb72856a5a523.png"},44271:function(e,t,n){t.Z=n.p+"assets/images/setup-1-86aa9a4810205ba5db473882c4bf5bd1.png"},38486:function(e,t,n){t.Z=n.p+"assets/images/setup-2-8d1432adf8cf7e73a7b970c3573f9fea.png"}}]);