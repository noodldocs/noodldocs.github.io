"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[2509],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var A=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);n&&(A=A.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,A)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,A,r=function(e,n){if(null==e)return{};var t,A,r={},i=Object.keys(e);for(A=0;A<i.length;A++)t=i[A],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(A=0;A<i.length;A++)t=i[A],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=A.createContext({}),g=function(e){var n=A.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=g(e.components);return A.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return A.createElement(A.Fragment,{},n)}},p=A.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=g(t),m=r,c=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return t?A.createElement(c,a(a({ref:n},s),{},{components:t})):A.createElement(c,a({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var g=2;g<i;g++)a[g]=t[g];return A.createElement.apply(null,a)}return A.createElement.apply(null,t)}p.displayName="MDXCreateElement"},18823:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return g},toc:function(){return u}});var A=t(83117),r=t(80102),i=(t(67294),t(3905)),a=["components"],o={title:"SendGrid",hide_title:!0},l="SendGrid",g={unversionedId:"prefabs/sendgrid/README",id:"prefabs/sendgrid/README",title:"SendGrid",description:"This prefab will add a logic component to your cloud functions so you can send emails with SendGrid, it will show up in the SendGrid folder among your cloud functions.",source:"@site/library/prefabs/sendgrid/README.md",sourceDirName:"prefabs/sendgrid",slug:"/prefabs/sendgrid/",permalink:"/2.8/library/prefabs/sendgrid/",tags:[],version:"current",frontMatter:{title:"SendGrid",hide_title:!0},sidebar:"MailGunSidebar"},s={},u=[{value:"Settings",id:"settings",level:2},{value:"Sending an email",id:"sending-an-email",level:2}],p={toc:u};function m(e){var n=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,A.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sendgrid"},"SendGrid"),(0,i.kt)("p",null,"This prefab will add a logic component to your cloud functions so you can send emails with ",(0,i.kt)("a",{parentName:"p",href:"https://sendgrid.com"},"SendGrid"),", it will show up in the ",(0,i.kt)("strong",{parentName:"p"},"SendGrid")," folder among your ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/cloud-logic/introduction"},"cloud functions"),"."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:t(86646).Z,width:"600",height:"152"}))),(0,i.kt)("h2",{id:"settings"},"Settings"),(0,i.kt)("p",null,"First you must provide a few settings, this is done in the ",(0,i.kt)("strong",{parentName:"p"},"Config")," part of the ",(0,i.kt)("strong",{parentName:"p"},"Cloud Dashboard"),". Launch your cloud services dashboard (if you don't have a cloud service you need to create and make it active for the project)."),(0,i.kt)("div",{className:"ndl-image-with-background s"},(0,i.kt)("p",null,(0,i.kt)("img",{src:t(38572).Z,width:"306",height:"106"}))),(0,i.kt)("div",{className:"ndl-image-with-background m"},(0,i.kt)("p",null,(0,i.kt)("img",{src:t(23509).Z,width:"600",height:"458"}))),(0,i.kt)("p",null,"Then find the ",(0,i.kt)("strong",{parentName:"p"},"Config")," section in the sidebar of your dashboard. You can take a look at the ",(0,i.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/config"},"Config")," node for more details on how config parameters work. Create a parameter for ",(0,i.kt)("inlineCode",{parentName:"p"},"SendGridAPIKey"),", make sure you make the ",(0,i.kt)("strong",{parentName:"p"},"Master Key Only")," so it is protected in your cloud service."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:t(84889).Z,width:"1962",height:"102"}))),(0,i.kt)("h2",{id:"sending-an-email"},"Sending an email"),(0,i.kt)("p",null,"Sending an email is done by adding a ",(0,i.kt)("strong",{parentName:"p"},"Send Email")," logic component to your cloud function and then sending a signal to the ",(0,i.kt)("strong",{parentName:"p"},"Do")," input."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:t(21525).Z,width:"1574",height:"632"}))),(0,i.kt)("p",null,"There are a number of inputs to this node that is good to review:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"To")," This is the email for the recipients on your email."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CC")," This is the email for the cc on your email."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BCC")," This is the email for the bcc on your email.")),(0,i.kt)("p",null,"The three above inputs can also accept an array of emails, such as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"[\n    'example@email.com',\n    'another@email.com'\n]\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"From")," One string containing an email that should be the from email address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Subject")," The subject of your email."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Text")," If you want to send a pure text email provide the content of the email on this input."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Html")," If you want to send a html emal, provide the content of the email on this input.")))}m.isMDXComponent=!0},38572:function(e,n){n.Z="data:image/png;base64,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"},23509:function(e,n,t){n.Z=t.p+"assets/images/config-2-54aa603c93bc1bd7017c46bd4b6c7614.png"},84889:function(e,n,t){n.Z=t.p+"assets/images/config-3-48bbc5681fb87732ab5fc0880045948d.png"},86646:function(e,n,t){n.Z=t.p+"assets/images/sendgrid-1-609d4ce6f04be72cf6503d850be1028b.png"},21525:function(e,n,t){n.Z=t.p+"assets/images/sendgrid-3-bae42f1b7040183b7cc80b30a7073928.png"}}]);