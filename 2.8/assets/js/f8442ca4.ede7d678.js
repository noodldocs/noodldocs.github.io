"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[6536],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=o,h=d["".concat(p,".").concat(g)]||d[g]||u[g]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12951:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(83117),o=n(80102),i=(n(67294),n(3905)),r=["components"],s={title:"TOTP",hide_title:!0},p="TOTP",l={unversionedId:"prefabs/totp/README",id:"prefabs/totp/README",title:"TOTP",description:"Timebase One Time Passwords is a popular way to do 2-Factor Authentication (2FA) for users, that is, after the user signs in with username and password they need to provide a time based token to complete the login. Google Authenticator is a commonly used app, and there are other apps that are compatible.",source:"@site/library/prefabs/totp/README.md",sourceDirName:"prefabs/totp",slug:"/prefabs/totp/",permalink:"/2.8/library/prefabs/totp/",tags:[],version:"current",frontMatter:{title:"TOTP",hide_title:!0},sidebar:"TOTPSidebar"},c={},u=[{value:"Signing up",id:"signing-up",level:2},{value:"Connecting",id:"connecting",level:2},{value:"Logging in",id:"logging-in",level:2},{value:"Disconnecting",id:"disconnecting",level:2}],d={toc:u};function g(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"totp"},"TOTP"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Timebase One Time Password"),"s is a popular way to do 2-Factor Authentication (2FA) for users, that is, after the user signs in with username and password they need to provide a time based token to complete the login. ",(0,i.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en&gl=US"},"Google Authenticator")," is a commonly used app, and there are other apps that are compatible."),(0,i.kt)("p",null,"This prefab contains a couple of cloud functions and frontend logic functions that help you build a 2FA sign up / log in flow in Noodl."),(0,i.kt)("p",null,"After installing you will see two folders, one among your componets (the frontend) and one in your cloud functions called ",(0,i.kt)("strong",{parentName:"p"},"TOTP"),"."),(0,i.kt)("div",{className:"ndl-image-with-background m"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(86747).Z,width:"604",height:"222"}))),(0,i.kt)("div",{className:"ndl-image-with-background m"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5701).Z,width:"602",height:"720"}))),(0,i.kt)("p",null,"Let's review how we use these components to build the sign up and log in flow."),(0,i.kt)("h2",{id:"signing-up"},"Signing up"),(0,i.kt)("p",null,"First the user needs to sign up normally using the ",(0,i.kt)("a",{parentName:"p",href:"/nodes/data/user/sign-up"},"Sign Up")," node. The ",(0,i.kt)("strong",{parentName:"p"},"TOTP")," prefabs can also be used on an existing user, that is, you can enable ",(0,i.kt)("strong",{parentName:"p"},"TOTP")," after the user has signed up or you can make it required as part of the sign up flow."),(0,i.kt)("h2",{id:"connecting"},"Connecting"),(0,i.kt)("p",null,"When you have a user signed up / logged in you can start the process of activating ",(0,i.kt)("strong",{parentName:"p"},"TOTP"),", this is a two step process. First you need to generate a secret that is attaced to your users, you then need to present the user with a QR Code that is used to add your application to the ",(0,i.kt)("strong",{parentName:"p"},"TOTP")," authentication device (e.g. Google Authenticator). Once that is successful the user can verify that it works by typing in a valid token."),(0,i.kt)("p",null,"The first step is simply calling the ",(0,i.kt)("strong",{parentName:"p"},"TOTP/Start Connect")," cloud function. The example below calls the function when the page is loaded on the ",(0,i.kt)("strong",{parentName:"p"},"Did Mount")," signal. When the function completes you will receive a ",(0,i.kt)("strong",{parentName:"p"},"QR Code")," that you can simply use as source for an image node to display it."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(22010).Z,width:"1230",height:"626"}))),(0,i.kt)("p",null,"When completed, you might have a screen like this:"),(0,i.kt)("div",{className:"ndl-image-with-background m"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(28988).Z,width:"870",height:"940"}))),(0,i.kt)("p",null,"You can customize what name is used when your application shows up in the authentication device / app by looking in the ",(0,i.kt)("strong",{parentName:"p"},"TOTP/Start Connect")," cloud function for the action node called ",(0,i.kt)("strong",{parentName:"p"},"Generate Secret"),", clicking that node will reveal a property called ",(0,i.kt)("strong",{parentName:"p"},"Name")," that you can edit."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(40033).Z,width:"932",height:"550"}))),(0,i.kt)("p",null,"At this point the ",(0,i.kt)("strong",{parentName:"p"},"TOTP")," is not yet activated for the user. To activate the user must prove that the authentication device is working by entering a valid token. This token is sent to the cloud function ",(0,i.kt)("strong",{parentName:"p"},"TOTP/Complete Connect"),", when this function completes with ",(0,i.kt)("strong",{parentName:"p"},"Sucess")," the user can no longer log in with just username and password, more on this later. If it completes with ",(0,i.kt)("strong",{parentName:"p"},"Failure")," the token was not correct and you need to alert the user."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(98044).Z,width:"1706",height:"696"}))),(0,i.kt)("p",null,"When the ",(0,i.kt)("strong",{parentName:"p"},"TOTP")," connection is completed, you can have the user keep using your application as normal. But when it's time for login you need a different flow."),(0,i.kt)("h2",{id:"logging-in"},"Logging in"),(0,i.kt)("p",null,"Logging in is now divided into two steps, the first will simply ask for the username / email and password like before."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(75622).Z,width:"854",height:"464"}))),(0,i.kt)("p",null,"When the ",(0,i.kt)("strong",{parentName:"p"},"TOTP")," connect has completed you cannot use the ",(0,i.kt)("a",{parentName:"p",href:"/nodes/data/user/log-in"},"Log In")," node anymore, it will fail stating that log in is disabled. Instead you need to use the ",(0,i.kt)("strong",{parentName:"p"},"TOTP / Start Log In")," component that was installed in your project when cloning the prefab. You use it just like you would the good old ",(0,i.kt)("strong",{parentName:"p"},"Log In")," node, providing ",(0,i.kt)("strong",{parentName:"p"},"Username")," and ",(0,i.kt)("strong",{parentName:"p"},"Password"),"."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(79065).Z,width:"1760",height:"1146"}))),(0,i.kt)("p",null,"There can be three possible output signals from this action node:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Success")," The user is logged in, ",(0,i.kt)("strong",{parentName:"p"},"TOTP")," was not enabled, you can proceed to your application as normal.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Failure")," The user did not provide the right username / password.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"TOTP Needed")," The username and password was correct but ",(0,i.kt)("strong",{parentName:"p"},"TOTP")," is enabled. You need to send the user to a new page where the ",(0,i.kt)("strong",{parentName:"p"},"TOTP")," can be entered and validated."))),(0,i.kt)("p",null,"This next step simply need to ask the user to provide the ",(0,i.kt)("strong",{parentName:"p"},"TOTP")," from their authentication device."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(31245).Z,width:"862",height:"316"}))),(0,i.kt)("p",null,"In this step we are going to use the ",(0,i.kt)("strong",{parentName:"p"},"TOTP / Complete Log In")," that was installed into the project when the prefab was cloned. The ",(0,i.kt)("strong",{parentName:"p"},"TOTP")," token along with the ",(0,i.kt)("strong",{parentName:"p"},"Username")," and ",(0,i.kt)("strong",{parentName:"p"},"Password")," from the previous step (in this example they were stored in variables) need to be provided."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(95835).Z,width:"1790",height:"760"}))),(0,i.kt)("p",null,"If this action results in a ",(0,i.kt)("strong",{parentName:"p"},"Success")," signal the log in is completed and you can move the user on to your application. If ",(0,i.kt)("strong",{parentName:"p"},"Failure")," is sent then the token was not correct and you need to notify the user."),(0,i.kt)("h2",{id:"disconnecting"},"Disconnecting"),(0,i.kt)("p",null,"When the user is logged in you can disconnt the ",(0,i.kt)("strong",{parentName:"p"},"TOTP"),", this will remove the secret and the user can now log in the normal way again with just username and password."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(93102).Z,width:"1028",height:"298"}))),(0,i.kt)("p",null,"This is just a matter of calling the ",(0,i.kt)("strong",{parentName:"p"},"TOTP / Disconnect")," cloud function while the user is logged in. This will return a ",(0,i.kt)("strong",{parentName:"p"},"Success")," or ",(0,i.kt)("strong",{parentName:"p"},"Failure")," signal."))}g.isMDXComponent=!0},86747:function(e,t,n){t.Z=n.p+"assets/images/totp-1-fb6a4c53003402884e64b48afc5ddfd0.png"},5701:function(e,t,n){t.Z=n.p+"assets/images/totp-2-b99a265625cfe704afbb0e835a5b317d.png"},22010:function(e,t,n){t.Z=n.p+"assets/images/totp-connect-1-35949d8e5d544c24c9a4f242251fe39a.png"},28988:function(e,t,n){t.Z=n.p+"assets/images/totp-connect-2-5b2dddfe6e094845382f7d688d3c4164.png"},40033:function(e,t,n){t.Z=n.p+"assets/images/totp-connect-3-113b5fcad1f28a00031c2bac629c2f28.png"},98044:function(e,t,n){t.Z=n.p+"assets/images/totp-connect-4-3be67ee8eae53c30cef8347c984f41bb.png"},93102:function(e,t,n){t.Z=n.p+"assets/images/totp-disconnect-1-590e2aea1f390a78acd08294e7ed8865.png"},75622:function(e,t,n){t.Z=n.p+"assets/images/totp-login-1-391c01b6de2a5681200119e13a0c3c79.png"},79065:function(e,t,n){t.Z=n.p+"assets/images/totp-login-2-67d5e3f7e0217c2322b950ec1f6da818.png"},31245:function(e,t,n){t.Z=n.p+"assets/images/totp-login-3-b78bc038f0ac8464ee6fafa6f371c638.png"},95835:function(e,t,n){t.Z=n.p+"assets/images/totp-login-4-2a45555613a32d597d143a8ee3f987b5.png"}}]);