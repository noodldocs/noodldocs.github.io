"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[946],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(n),g=i,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},60067:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return u}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),s=["components"],r={title:"Tracking Custom Events in Google Analytics",hide_title:!0},l=void 0,d={unversionedId:"modules/google-analytics/guides/tracking-custom-events/README",id:"modules/google-analytics/guides/tracking-custom-events/README",title:"Tracking Custom Events in Google Analytics",description:"What you will learn in this guide",source:"@site/library/modules/google-analytics/guides/tracking-custom-events/README.md",sourceDirName:"modules/google-analytics/guides/tracking-custom-events",slug:"/modules/google-analytics/guides/tracking-custom-events/",permalink:"/2.6/library/modules/google-analytics/guides/tracking-custom-events/",tags:[],version:"current",frontMatter:{title:"Tracking Custom Events in Google Analytics",hide_title:!0},sidebar:"googleAnalyticsSidebar",previous:{title:"Setting up Google Analytics",permalink:"/2.6/library/modules/google-analytics/guides/setting-up-google-analytics/"},next:{title:"Google Analytics Root",permalink:"/2.6/library/modules/google-analytics/nodes/google-analytics-root/"}},c={},u=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"Sending static data",id:"sending-static-data",level:2},{value:"Sending dynamic data based on user input",id:"sending-dynamic-data-based-on-user-input",level:2}],p={toc:u};function g(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tracking-custom-events-in-google-analytics"},"Tracking custom events in Google Analytics"),(0,o.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,o.kt)("p",null,"This guide will take you through the process of setting up and tracking custom events in Google Analytics. It is recommended that you take a look through the ",(0,o.kt)("a",{parentName:"p",href:"/library/modules/google-analytics/guides/setting-up-google-analytics"},"setup guide")," before reading this one."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"We will learn about the following things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sending static data"),(0,o.kt)("li",{parentName:"ul"},"Sending dynamic data based on user input")),(0,o.kt)("h2",{id:"sending-static-data"},"Sending static data"),(0,o.kt)("p",null,"To send custom events we use the ",(0,o.kt)("strong",{parentName:"p"},"Send Google Analytics Data")," node."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Send Google Analytics Data")," node is built on top of Google's own ",(0,o.kt)("inlineCode",{parentName:"p"},"gtag")," function, meaning that all ",(0,o.kt)("em",{parentName:"p"},"Google Analytics 4")," documentation you see that uses ",(0,o.kt)("inlineCode",{parentName:"p"},"gtag")," can be directly copied and pasted into the node."),(0,o.kt)("p",null,"In Google's own documentation on ",(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/11147304"},"sending events"),' we can find the following code in the section named "Send an event":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script>\n    gtag("event", "publish", {\n        role: "Writer",\n    })\n<\/script>\n')),(0,o.kt)("p",null,"We can copy the data passed to the gtag function and paste it directly into the ",(0,o.kt)("span",{className:"ndl-data"},"Gtag Tracking Data")," input in the ",(0,o.kt)("strong",{parentName:"p"},"Property Panel")," for the ",(0,o.kt)("strong",{parentName:"p"},"Send Google Analytics Data")," node, like so:"),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(73975).Z,width:"850",height:"338"}))),(0,o.kt)("p",null,"We can now submit the data to Google by sending a signal to the nodes ",(0,o.kt)("span",{className:"ndl-signal"},"Do")," input."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(69632).Z,width:"1004",height:"488"}))),(0,o.kt)("p",null,"We have now successfully tracked our first custom event!"),(0,o.kt)("h2",{id:"sending-dynamic-data-based-on-user-input"},"Sending dynamic data based on user input"),(0,o.kt)("p",null,"In some cases we want to provide more in depth data that might be dependent on specific user input. In this case we can use the ",(0,o.kt)("strong",{parentName:"p"},"String Format")," node."),(0,o.kt)("p",null,"Let's build a small app that tracks the user's favourite type of noodle dish. We'll use a ",(0,o.kt)("strong",{parentName:"p"},"Text Input")," and a ",(0,o.kt)("strong",{parentName:"p"},"Button")," to build a tiny form."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2409).Z,width:"1114",height:"696"}))),(0,o.kt)("p",null,"We are now ready to add the tracking."),(0,o.kt)("p",null,"Create a ",(0,o.kt)("strong",{parentName:"p"},"String Format")," node and open up it's ",(0,o.kt)("strong",{parentName:"p"},"Property Panel"),". In the ",(0,o.kt)("span",{className:"ndl-data"},"Format")," input we can now write our custom event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'    "event", "submitted_dish", {"dish": "{userDish}"}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"{userDish}")," part of this code will create an input named ",(0,o.kt)("span",{className:"ndl-data"},"userDish")," on this node. We can now send the ",(0,o.kt)("span",{className:"ndl-data"},"Text")," from ",(0,o.kt)("strong",{parentName:"p"},"Text Input")," to the ",(0,o.kt)("span",{className:"ndl-data"},"userDish")," input on ",(0,o.kt)("strong",{parentName:"p"},"String Format"),"."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(15943).Z,width:"1492",height:"558"}))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is ",(0,o.kt)("strong",{parentName:"p"},"very important")," that the ",(0,o.kt)("inlineCode",{parentName:"p"},"{userDish}")," is in quotation marks if the value is a ",(0,o.kt)("span",{className:"ndl-data"},"string"),", otherwise the tracking will fail. ",(0,o.kt)("span",{className:"ndl-data"},"Numbers")," can be unquoted."))),(0,o.kt)("p",null,"Now we need to send this data to Google. Create a ",(0,o.kt)("strong",{parentName:"p"},"Send Google Analytics Data")," node, and connect the ",(0,o.kt)("strong",{parentName:"p"},"String Format")," ",(0,o.kt)("span",{className:"ndl-data"},"Formatted")," output to the ",(0,o.kt)("strong",{parentName:"p"},"Send Google Analytics Data")," ",(0,o.kt)("span",{className:"ndl-data"},"Gtag Tracking Data")," input, and the ",(0,o.kt)("strong",{parentName:"p"},"Button")," ",(0,o.kt)("span",{className:"ndl-signal"},"Click")," output to the ",(0,o.kt)("strong",{parentName:"p"},"Send Google Analytics Data")," ",(0,o.kt)("span",{className:"ndl-signal"},"Do")," input. We will also connect the ",(0,o.kt)("span",{className:"ndl-signal"},"Data Sent")," output from ",(0,o.kt)("strong",{parentName:"p"},"Send Google Analytics Data")," to the ",(0,o.kt)("strong",{parentName:"p"},"Text Input")," ",(0,o.kt)("span",{className:"ndl-signal"},"Clear"),", to visually indicate that the data has been sent."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(74373).Z,width:"1268",height:"648"}))),(0,o.kt)("p",null,"We have now successfully tracked the users favourite noodle dish! Hop on into the Google Analytics Reports view and use this knowledge responsibly."))}g.isMDXComponent=!0},2409:function(e,t,n){t.Z=n.p+"assets/images/form-fc5b22a46469feacd9480cfe56d6ab12.png"},73975:function(e,t,n){t.Z=n.p+"assets/images/paste-code-b84e0f592950ff11c06b35612a3c6ff4.png"},74373:function(e,t,n){t.Z=n.p+"assets/images/sending-data-e2fec65bf7740d3e37482cfd5dd0a049.png"},15943:function(e,t,n){t.Z=n.p+"assets/images/string-format-connected-8a8fd4bba4ed99bd8ddc3590a15a6e60.png"},69632:function(e,t,n){t.Z=n.p+"assets/images/submit-data-1bbd235fc073340dd9438648bf112b06.png"}}]);