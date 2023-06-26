"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[9165],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),g=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=g(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=g(n),h=i,c=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(c,s(s({ref:t},d),{},{components:n})):a.createElement(c,s({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var g=2;g<o;g++)s[g]=n[g];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44066:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return r},metadata:function(){return g},toc:function(){return u}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),s=["components"],r={title:"Creating users in Noodl",hide_title:!0},l="Creating users in Noodl",g={unversionedId:"guides/user-management/creating-users-in-noodl",id:"guides/user-management/creating-users-in-noodl",title:"Creating users in Noodl",description:"What you will learn in this guide",source:"@site/docs/guides/user-management/creating-users-in-noodl.md",sourceDirName:"guides/user-management",slug:"/guides/user-management/creating-users-in-noodl",permalink:"/2.9/docs/guides/user-management/creating-users-in-noodl",tags:[],version:"current",frontMatter:{title:"Creating users in Noodl",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Events",permalink:"/2.9/docs/guides/business-logic/events"},next:{title:"Introduction to Cloud Functions",permalink:"/2.9/docs/guides/cloud-logic/introduction"}},d={},u=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:3},{value:"The User nodes",id:"the-user-nodes",level:2},{value:"The Sign up &amp; Login Template",id:"the-sign-up--login-template",level:2},{value:"Creating A Sign Up Page",id:"creating-a-sign-up-page",level:2},{value:"Creating A Sign Up Form",id:"creating-a-sign-up-form",level:3},{value:"Using the Sign Up node",id:"using-the-sign-up-node",level:3},{value:"See users in the backend",id:"see-users-in-the-backend",level:3},{value:"Navigate when a new user is created",id:"navigate-when-a-new-user-is-created",level:3},{value:"Creating a Log in Page",id:"creating-a-log-in-page",level:2},{value:"Show user data",id:"show-user-data",level:2},{value:"Log out a user",id:"log-out-a-user",level:2}],p={toc:u};function h(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-users-in-noodl"},"Creating users in Noodl"),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(99072).Z,width:"2676",height:"1668"}))),(0,o.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,o.kt)("p",null,"This guide will take you through the process of creating and managing user accounts in your Noodl apps. To support user accounts, make sure that you already have a ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/cloud-data/creating-a-backend"},"Noodl cloud service")," enabled on your project or have your ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/deploy/using-an-external-backend"},"own backend attached"),"."),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"We will go through the following topics in this guide:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Overview of the ",(0,o.kt)("strong",{parentName:"li"},"User")," nodes"),(0,o.kt)("li",{parentName:"ul"},"Using the ",(0,o.kt)("strong",{parentName:"li"},"Sign Up / Login template")),(0,o.kt)("li",{parentName:"ul"},"Creating a simple sign up page"),(0,o.kt)("li",{parentName:"ul"},"Creating a simple log in page"),(0,o.kt)("li",{parentName:"ul"},"Display user data"),(0,o.kt)("li",{parentName:"ul"},"Log out a user")),(0,o.kt)("h2",{id:"the-user-nodes"},"The User nodes"),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9938).Z,width:"568",height:"530"}))),(0,o.kt)("p",null,"Noodl comes with several built-in nodes for managing users in your application. These nodes will take care of all the backend operations needed to manage users and can be integrated flexibly into the user experience you are building. With these nodes, you can log in existing users, log out a user, sign up new users, get user information, and update user properties. Read more about the nodes on the Node Reference page:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/nodes/data/user/log-in"},"Log in")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/nodes/data/user/log-out"},"Log Out")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/nodes/data/user/sign-up"},"Sign Up")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/nodes/data/user/user-node"},"User")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/nodes/data/user/set-user-properties"},"Set User Properties"))),(0,o.kt)("h2",{id:"the-sign-up--login-template"},"The Sign up & Login Template"),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(14887).Z,width:"1992",height:"1054"}))),(0,o.kt)("p",null,"The easiest way to get what you need to create an app that supports user accounts is to start from the ",(0,o.kt)("strong",{parentName:"p"},"Signup & Login Template")," that you can find when you create a new project in Noodl. This template provides you with all the pages and logic needed in app that handles user accounts. This includes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Sign up and login users."),(0,o.kt)("li",{parentName:"ol"},"Send verification emails using ",(0,o.kt)("a",{parentName:"li",href:"/docs/guides/cloud-logic/email-verification"},"Noodl Cloud Functions and SendGrid"),", "),(0,o.kt)("li",{parentName:"ol"},"Resetting passwords, and other user data via an account page ")),(0,o.kt)("p",null,"Note that you will need a ",(0,o.kt)("a",{parentName:"p",href:"https://sendgrid.com/"},"SendGrid")," API key to send emails to users in this template. If you prefer another email client you can provide your own."),(0,o.kt)("p",null,"In the rest of this guide we will take a closer look at the core patterns for creating a sign up and log in flow step-by-step."),(0,o.kt)("h2",{id:"creating-a-sign-up-page"},"Creating A Sign Up Page"),(0,o.kt)("p",null,"Most apps that have user accounts have a sign-up flow, where users can go and sign up. To create this we need the following: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A page in our ",(0,o.kt)("a",{parentName:"li",href:"/nodes/navigation/page-router"},"page router")," that holds the sign-up interface"),(0,o.kt)("li",{parentName:"ol"},"An interface with a form to capture the user\u2019s email, and password"),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("a",{parentName:"li",href:"/nodes/data/user/sign-up"},"Sign Up")," and ",(0,o.kt)("a",{parentName:"li",href:"/nodes/navigation/navigate"},"Navigate node"))),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1569).Z,width:"980",height:"1126"}))),(0,o.kt)("p",null,"Let's start by ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/navigation/basic-navigation/#pages"},"creating a new page")," called ",(0,o.kt)("strong",{parentName:"p"},"Sign Up Page")," and click on the page component to add elements to the page. First, let\u2019s open the node picker and add a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/basic-elements/group"},"Group node")," to our Page Node, so we can better can control the layout of the page. "),(0,o.kt)("p",null,"When we start adding visual elements to build our sign up form, we want to have it in the middle of the page, so lets style the Group node a bit:"),(0,o.kt)("p",null,"Let's select the Group node and set its ",(0,o.kt)("strong",{parentName:"p"},"max width")," to 400px."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(58454).Z,width:"572",height:"398"}))),(0,o.kt)("p",null," Then let's center the Group horizontally on the page by setting its alignment property to ",(0,o.kt)("strong",{parentName:"p"},"Horizontal Align Center"),"."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(43426).Z,width:"676",height:"294"}))),(0,o.kt)("p",null,"Lastly let's center all content inside of the Group vertically."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(29765).Z,width:"608",height:"366"}))),(0,o.kt)("h3",{id:"creating-a-sign-up-form"},"Creating A Sign Up Form"),(0,o.kt)("p",null,"Now let's add some elements! Let's add a text Node to give a title to the page that says ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Create Account"))," and give it a text style of ",(0,o.kt)("strong",{parentName:"p"},"Title Large"),". Next let\u2019s add three ",(0,o.kt)("a",{parentName:"p",href:"/nodes/ui-controls/text-input"},"Text Input nodes")," to capture username, email, and password. A username is optional, whereas email and password are required for the Sign Up node to succeed."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(37471).Z,width:"2332",height:"920"}))),(0,o.kt)("p",null,"Let\u2019s make the first Text Input for email be changing its ",(0,o.kt)("strong",{parentName:"p"},"Type")," to ",(0,o.kt)("strong",{parentName:"p"},"Email")," and its ",(0,o.kt)("strong",{parentName:"p"},"Label")," to ",(0,o.kt)("strong",{parentName:"p"},"Email"),". Next, let\u2019s change the ",(0,o.kt)("strong",{parentName:"p"},"Type")," property of the last text inputs to ",(0,o.kt)("strong",{parentName:"p"},"Password"),", to make it hide the characters that a user writes. "),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(92010).Z,width:"682",height:"686"}))),(0,o.kt)("h3",{id:"using-the-sign-up-node"},"Using the Sign Up node"),(0,o.kt)("p",null,"Now let\u2019s add a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/user/sign-up"},"Sign Up node")," to the node graph, and connect the three Text Input nodes to the corresponding inputs on the Sign-up node. "),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(85862).Z,width:"1482",height:"978"}))),(0,o.kt)("p",null,"Lastly, we need a button to execute the user creation, so let's add a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/ui-controls/button"},"Button Node")," below our text inputs and connect its ",(0,o.kt)("strong",{parentName:"p"},"Click")," output to the ",(0,o.kt)("strong",{parentName:"p"},"Do")," input on the Sign Up node."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5836).Z,width:"2200",height:"1146"}))),(0,o.kt)("h3",{id:"see-users-in-the-backend"},"See users in the backend"),(0,o.kt)("p",null,"If we now fill in the form and click the button, the Sign Up node will execute and create a new user in the backend. If we open the ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/cloud-data/creating-a-backend#inspect-the-cloud-service-using-the-dashboard"},"Cloud Service dashboard")," for the the logged in user, we can see the created users in the User Class."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(60759).Z,width:"3360",height:"1022"}))),(0,o.kt)("h3",{id:"navigate-when-a-new-user-is-created"},"Navigate when a new user is created"),(0,o.kt)("p",null,"When the Sign Up node creates a new user it also logs in that user, so when that happens, we want to navigate to a new page to show the user that they have signed up. But before we can this, we need a page to navigate to."),(0,o.kt)("p",null,"Let's create a new page called ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Home"))," and then go back to our Sign Up Page component and add a Navigate node next to our Sign up node. The Sign Up node sends a signal if it succeeds, and we can use that signal to perform the ",(0,o.kt)("strong",{parentName:"p"},"do")," action on the Navigate node.  "),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(89018).Z,width:"2234",height:"1180"}))),(0,o.kt)("p",null,"If we try to sign up a new user now, we can see that it navigates ot the Home page."),(0,o.kt)("p",null,"Let's now make a login page, so that existing users have a way to log in."),(0,o.kt)("h2",{id:"creating-a-log-in-page"},"Creating a Log in Page"),(0,o.kt)("p",null,"Let's start by creating a new page called ",(0,o.kt)("strong",{parentName:"p"},"Log In Page")," and set that to be the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/page-router/#start-page"},"start page")," in the Page Router node in the App component."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(85674).Z,width:"1698",height:"760"}))),(0,o.kt)("p",null,'Now lets copy all the visual nodes from the Sign Up page and place them in the New Login Page, as we can reuse most of the layout and Input fields.\nThen Delete the Username Text Input, and change the title text node and the button to say "Log in".'),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(45146).Z,width:"1912",height:"934"}))),(0,o.kt)("p",null,"Next, Let's add a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/user/log-in"},"Log In node"),", and hook it up as shown on the image bellow."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(78491).Z,width:"1376",height:"972"}))),(0,o.kt)("p",null,"Similar to the Sign up flow, we want to navigate when the user logs in. But another trick we can do here is to use the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/user/user-node"},"User node")," to check if there is already a logged in user in memory. This is something the User node keeps track of for us, and we can use its Authorized output to perform the navigate if it's returning True. "),(0,o.kt)("p",null,"As we have the Log In Page as our start page, we can use the User node here together with a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/utilities/logic/condition"},"Condition node")," to navigate if the user is already logged in from a previous session. Add a User node, Condition node, and a Navigate and connect it up as shown on the image bellow. The Navigate node should target the Home Page. "),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(83105).Z,width:"1466",height:"1266"}))),(0,o.kt)("h2",{id:"show-user-data"},"Show user data"),(0,o.kt)("p",null,"If we want to show user related data we can as well use the User node, to get the data once a user has logged in. Let's add a small greeting on the Home Page to show the logged in user's name. We can do that by using the User node together with a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/string-manipulation/string-format"},"String Format node")," as shown bellow."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(22450).Z,width:"2072",height:"846"}))),(0,o.kt)("h2",{id:"log-out-a-user"},"Log out a user"),(0,o.kt)("p",null,"Lastly we can also log out a user by using the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/user/log-out"},"Log Out node"),". We need an event to trigger the log out so for this demonstration let's add a button and hook it's ",(0,o.kt)("strong",{parentName:"p"},"Click")," output to the ",(0,o.kt)("strong",{parentName:"p"},"Do")," input on the Sign Out node as the image shows bellow. Note that when login in users, it doesnt matter if we connect the email or username to the ",(0,o.kt)("strong",{parentName:"p"},"Username")," input on the Log In node. Both will work."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(38864).Z,width:"2074",height:"1200"}))),(0,o.kt)("p",null,"Again, we need to perform a navigation action once a user logs out, so lets add a Navigate node that takes the user to the log in page when they sign out. We can achieve this by connecting the ",(0,o.kt)("strong",{parentName:"p"},"success")," signal from the Log Out node to the ",(0,o.kt)("strong",{parentName:"p"},"Do")," input on the navigate node and have it targeting the Log In Page."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(20631).Z,width:"1612",height:"1040"}))),(0,o.kt)("p",null,"Let's end this guide by adding a few buttons to navigate between the sign up and login page. We can do that with another button that we style as a text button connected to a navigate node. "),(0,o.kt)("p",null,"So on the Log In page we want a button that performs a navigate to the Signup page."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(45185).Z,width:"2478",height:"1652"}))),(0,o.kt)("p",null,"And on the Sign up page we want a button to navigate from Sign up Page to the Log In page."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(74785).Z,width:"2418",height:"1316"}))),(0,o.kt)("p",null,"And now we have a simple flow to sign up users and log them in. Next steps would be to add form validation to the text inputs, which can be done with the ",(0,o.kt)("a",{parentName:"p",href:"/library/modules/validation"},"Form Validation module"),", and sending verification emails when a user signs up. From here we encourage you to create a new project using the ",(0,o.kt)("strong",{parentName:"p"},"Sign up and login template")," to inspect more patterns on how to do that."))}h.isMDXComponent=!0},83105:function(e,t,n){t.Z=n.p+"assets/images/autologin-df80f0a81e9b517ee96dfe80c550d16e.png"},43426:function(e,t,n){t.Z=n.p+"assets/images/centeralign-325a9bc7249b65d29989d74e44fa1f1c.png"},29765:function(e,t,n){t.Z=n.p+"assets/images/content-center-bb28a9ce826238f190da47465166e7fd.png"},5836:function(e,t,n){t.Z=n.p+"assets/images/create-account-button-c616333ab2721a542764d498c44c5fdf.png"},1569:function(e,t,n){t.Z=n.p+"assets/images/createaccountpage-3f02c1ba7051f374887386fe44945614.png"},60759:function(e,t,n){t.Z=n.p+"assets/images/dashboard-ad29bbbf487a3011af4b8e791606f228.png"},22450:function(e,t,n){t.Z=n.p+"assets/images/homescreen-01d39a022a8022fe073f7e8ea4058f74.png"},99072:function(e,t,n){t.Z=n.p+"assets/images/intro-d6d53848b73e6015627347915b06ea63.png"},78491:function(e,t,n){t.Z=n.p+"assets/images/login-node-93b1e41ed4e758c31798d62657840bdf.png"},45146:function(e,t,n){t.Z=n.p+"assets/images/login-page-6e56f1ffaeddcac69a78572b9d808465.png"},45185:function(e,t,n){t.Z=n.p+"assets/images/login-signup-navigate-710eb3c838ebef0cc1a24d180e4357f4.png"},38864:function(e,t,n){t.Z=n.p+"assets/images/logout-6cf20d594cb9b1d7ec34388af2bb4348.png"},85674:function(e,t,n){t.Z=n.p+"assets/images/makestartpage-5e8a88b675e0447427dbfee578a476db.png"},58454:function(e,t,n){t.Z=n.p+"assets/images/max-width-e6c94b83968087b4fff713f26e668f13.png"},20631:function(e,t,n){t.Z=n.p+"assets/images/navigate-logout-4af90be81169eacdc4c846e8dfdf9174.png"},89018:function(e,t,n){t.Z=n.p+"assets/images/navigate-onsignup-8aaad7809eb9b2c5372011ba77766933.png"},85862:function(e,t,n){t.Z=n.p+"assets/images/sign-up-node-5664a0f4da957b18543130255022afc3.png"},74785:function(e,t,n){t.Z=n.p+"assets/images/signup-login-navigate-11850b7f8c1679bce366345e99a7dea3.png"},37471:function(e,t,n){t.Z=n.p+"assets/images/signupformelements-f6495972ebf0b15d598941ecf81ede59.png"},14887:function(e,t,n){t.Z=n.p+"assets/images/template-2eca500879d6d37368cdd7b3309a85bb.png"},92010:function(e,t,n){t.Z=n.p+"assets/images/textinput-type-afbd2ee93338e8d80ad130171d47e902.png"},9938:function(e,t,n){t.Z=n.p+"assets/images/user_nodes-b57b529ea2bf8f063a51d6e49df93f26.png"}}]);