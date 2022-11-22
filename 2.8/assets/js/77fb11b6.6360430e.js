"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[7655],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),h=p(n),u=i,m=h["".concat(l,".").concat(u)]||h[u]||c[u]||o;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},70506:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return c}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),s=["components"],r={title:"Emal Verification",hide_title:!0},l="Email Verification",p={unversionedId:"guides/cloud-logic/email-verification",id:"guides/cloud-logic/email-verification",title:"Emal Verification",description:"Cloud functions play an important role when creating different log in and sign up flows. Using the nodes Sign Up, Log In and Log Out you can create the most basic flow that will have the user sign up with a username, optionally email, and password and log in with username and password.",source:"@site/docs/guides/cloud-logic/email-verification.md",sourceDirName:"guides/cloud-logic",slug:"/guides/cloud-logic/email-verification",permalink:"/2.8/docs/guides/cloud-logic/email-verification",tags:[],version:"current",frontMatter:{title:"Emal Verification",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Introduction to Cloud Functions",permalink:"/2.8/docs/guides/cloud-logic/introduction"},next:{title:"Version control",permalink:"/2.8/docs/guides/collaboration/version-control"}},d={},c=[{value:"Settings",id:"settings",level:2},{value:"Signing up",id:"signing-up",level:2},{value:"Verifyng the email",id:"verifyng-the-email",level:2},{value:"Reset Password",id:"reset-password",level:2}],h={toc:c};function u(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"email-verification"},"Email Verification"),(0,o.kt)("p",null,"Cloud functions play an important role when creating different log in and sign up flows. Using the nodes ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/user/sign-up"},"Sign Up"),", ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/user/log-in"},"Log In")," and ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/user/log-out"},"Log Out")," you can create the most basic flow that will have the user sign up with a username, optionally email, and password and log in with username and password."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It's common to use email for both ",(0,o.kt)("strong",{parentName:"p"},"username")," and ",(0,o.kt)("strong",{parentName:"p"},"email")," when signing up, so you only ask the user for email and password, one less thing to remeber right."))),(0,o.kt)("p",null,"Once logged in you can use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/cloud-data/access-control"},"Access Control")," functions of the cloud database to control what a user has access to and not. The built in role system will allow you to create features like teams/groups of users."),(0,o.kt)("p",null,"This is a great way to get started and focus on building your application. But once you start getting to the point where you want to expose it to more users often you need a more solid sign up and log in flow. The first addition is likely the need to verify the email of users and allow them to reset the password and this is what we will cover in this guide."),(0,o.kt)("p",null,"There is a project template that contains a more complete sign up and log in flow that also covers sending emails to users on sign up, editing the profile etc, and it uses cloud functions to do some of these things that cannot be performed from the frontend for security reasons (cloud functions always have full access to the database)."),(0,o.kt)("p",null,"You can either start a new project from the template, or you can import the cloud functions into your existing project. We will review them here in this guide, case by case."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9081).Z,width:"760",height:"690"}))),(0,o.kt)("h2",{id:"settings"},"Settings"),(0,o.kt)("p",null,"In order to make the email verification process work there are a few settings that need to be provided. First let's look at the settings in the ",(0,o.kt)("strong",{parentName:"p"},"Sign Up / Settings")," component. This is related to formating the verification emails and how to send them."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(71294).Z,width:"792",height:"852"}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"App Domain")," Here you need to enter the domain where you application is deployed starting with ",(0,o.kt)("inlineCode",{parentName:"li"},"https://"),". This is used for the links in the verification emails. For testing you can put ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8574"),", this is where the local Noodl web server is running."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"From Email Address"),' This is where you put the email address that should be used as the "from" email when sending verification emails to users. It\'s important that this is a valid email with ',(0,o.kt)("strong",{parentName:"li"},"Send Grid")," (the email sending service we use for the application).")),(0,o.kt)("p",null,"Finally there is one more setting that you need to provide. This is can be found in the ",(0,o.kt)("strong",{parentName:"p"},"Send Grid / Settings")," component. The project template and email verification prefabs use ",(0,o.kt)("a",{parentName:"p",href:"https://sendgrid.com/"},"SendGrid")," as an email service, to use them you need to sign up and get an account (it's free to test). In the ",(0,o.kt)("strong",{parentName:"p"},"Send Grid / Settings")," component you need to provide the ",(0,o.kt)("strong",{parentName:"p"},"API Key")," for your ",(0,o.kt)("strong",{parentName:"p"},"Send Grid")," account."),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(90768).Z,width:"730",height:"516"}))),(0,o.kt)("h2",{id:"signing-up"},"Signing up"),(0,o.kt)("p",null,"Signing up is done with the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/user/sign-up"},"Sign Up")," action node. After the user has successfully signed up the cloud function ",(0,o.kt)("strong",{parentName:"p"},"Send Verification Email")," is called. This function will send an email to the address provided by the user."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(59113).Z,width:"1718",height:"992"}))),(0,o.kt)("p",null,"Let's take a closer look at the cloud function. There is no need to dive into the details but it's good to review the main flow and blocks. The cloud function is found in the cloud function tab, in the ",(0,o.kt)("strong",{parentName:"p"},"Sign Up")," folder, it's called ",(0,o.kt)("strong",{parentName:"p"},"Send Verification Email"),". The first this when the function is started is that a ",(0,o.kt)("strong",{parentName:"p"},"Request Email Verification")," action component is used."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(72130).Z,width:"1422",height:"910"}))),(0,o.kt)("p",null,"This action create a secret token (a random string of characters, sort of a temporary password) that it stores with the current user. This token will later be sent to the user as part of an email. If the email is already verified a signal will be emitted on ",(0,o.kt)("strong",{parentName:"p"},"Email Is Verified")," which we will return as an error result for the cloud function."),(0,o.kt)("p",null,"The next part is actually sending the email to the user. This is done in the function with the ",(0,o.kt)("strong",{parentName:"p"},"Format Email")," and ",(0,o.kt)("strong",{parentName:"p"},"Send Email")," action components."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(28090).Z,width:"1008",height:"530"}))),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Format Email")," action takes as input the verification token and the email of the user and creates an email with a link. You can look at the properties of the ",(0,o.kt)("strong",{parentName:"p"},"Format Email")," node to see the content of the email."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(88458).Z,width:"760",height:"354"}))),(0,o.kt)("p",null,"As you can see it creates an email containing an HTML link, this link uses some fancy template syntax."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"$Domain")," This will be replaced by the format email node to the domain where your application is deployed, so that the link will take you back to the app. More on this later."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"{Token}")," This is the generated token from before."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"{Email}")," This is the email for the user, it will be used to fetch the user and marked the email as verified in the next step.")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Format Email")," node outputs the final email with the correct values for the above placeholders insterted. This email content is then sent to the ",(0,o.kt)("strong",{parentName:"p"},"Send Email")," node that actually sends the email to the user. "),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(80006).Z,width:"976",height:"770"}))),(0,o.kt)("p",null,"That's it. Now the user should have a fresh email with the subject ",(0,o.kt)("strong",{parentName:"p"},"Email Verification!")," in it's inbox. You can edit the ",(0,o.kt)("strong",{parentName:"p"},"Subject")," property of the ",(0,o.kt)("strong",{parentName:"p"},"Send Email")," action."),(0,o.kt)("h2",{id:"verifyng-the-email"},"Verifyng the email"),(0,o.kt)("p",null,"We need one more thing in place for the email verification flow to work. We need the page that the link in the verification email points to. After the ",(0,o.kt)("strong",{parentName:"p"},"Format Email")," action have formatted the email template and inserted the ",(0,o.kt)("strong",{parentName:"p"},"Token"),", ",(0,o.kt)("strong",{parentName:"p"},"Email")," and ",(0,o.kt)("strong",{parentName:"p"},"Domain")," the resulting link will look something like this."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'<a href="https://your-app.sandbox.noodl.app/verify-email?token=abc&email=user@email.com">verify</a>')),(0,o.kt)("p",null,"This little thing will send the user back to your app (remember you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8574")," as domain for testing, before your app is deployed) and specifically to the page ",(0,o.kt)("inlineCode",{parentName:"p"},"/verify-email"),". So, let's take a look at the page in the project template."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2868).Z,width:"1808",height:"944"}))),(0,o.kt)("p",null,"There is a lot of stuff here but the important things is the ",(0,o.kt)("strong",{parentName:"p"},"Page Inputs")," where we get the ",(0,o.kt)("strong",{parentName:"p"},"Token")," and ",(0,o.kt)("strong",{parentName:"p"},"Email")," as part of the query parameters in the link (the stuff after the ",(0,o.kt)("inlineCode",{parentName:"p"},"?")," in the link), these are passed to the ",(0,o.kt)("strong",{parentName:"p"},"Sign Up / Verify Email")," cloud function that is called as soon as the page is loaded with the ",(0,o.kt)("strong",{parentName:"p"},"Did Mount")," signal."),(0,o.kt)("p",null,"If it succeeds, the email was verified and the user is sent to the log in page of the app with the ",(0,o.kt)("strong",{parentName:"p"},"Navigate")," node and a toast message is shown. If it fails, a message is displayed on the screen and a toast is shown using the ",(0,o.kt)("strong",{parentName:"p"},"Show Toast")," component (you can find this among the prefabs and install it into your project, same for the ",(0,o.kt)("strong",{parentName:"p"},"Loading Spinner"),")."),(0,o.kt)("p",null,"Once logged in to your app you can inspect the user object by hovering over any ",(0,o.kt)("strong",{parentName:"p"},"User")," node. Here you can see some properties that have been set by the email verification cloud functions."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(40348).Z,width:"764",height:"698"}))),(0,o.kt)("p",null,"The most important is the ",(0,o.kt)("strong",{parentName:"p"},"emailVerified")," property of the user, this indicates if the user have verified their email of not. In the sign up project template the user is actually send to the home screen of the app even if the email address is not verfied and a banner is shown. You could for instance only enable certain parts of the application if the user have verified their email."),(0,o.kt)("p",null,"If the email was not received properly of if the user would like to have another verification email sent you can simply call the ",(0,o.kt)("strong",{parentName:"p"},"Sign Up / Send Verification Email")," cloud function again."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you update the email with the ",(0,o.kt)("strong",{parentName:"p"},"Set User Properties")," action node, it will automatically switch the ",(0,o.kt)("strong",{parentName:"p"},"emailVerified")," property of the user to false."))),(0,o.kt)("h2",{id:"reset-password"},"Reset Password"),(0,o.kt)("p",null,"Resetting a user password when it's been lost follows the same pattern as sending an email for verification. First you need to present some sort of UI where the user can enter their email address to recover their password."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(486).Z,width:"880",height:"644"}))),(0,o.kt)("p",null,"There is a function called ",(0,o.kt)("strong",{parentName:"p"},"Sign Up / Request Password Reset")," that simply accepts an ",(0,o.kt)("strong",{parentName:"p"},"Email")," and it can be called without the user being logged in. "),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(52563).Z,width:"1058",height:"520"}))),(0,o.kt)("p",null,"The cloud function follow pretty much the same pattern as when sending email verifications. It will send an email to the user with a link containing a secret token just like when veryfing the email address."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(99673).Z,width:"1522",height:"736"}))),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Request Password Reset")," action will generate the secret token which is passed to the ",(0,o.kt)("strong",{parentName:"p"},"Format Email")," along with the users email. This time it will generate a link to a page called ",(0,o.kt)("inlineCode",{parentName:"p"},"/reset-password"),". You can edit the content of the email in the ",(0,o.kt)("strong",{parentName:"p"},"Format Email")," node."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(77339).Z,width:"746",height:"234"}))),(0,o.kt)("p",null,"The resulting link will look something like this:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'<a href="https://your-app.sandbox.noodl.app/reset-password?token=abc&email=user@email.com">link</a>')),(0,o.kt)("p",null,"The link will take the user to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/reset-password")," page which can contain a ",(0,o.kt)("strong",{parentName:"p"},"Text Input")," where the user can provide the new password."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(35272).Z,width:"874",height:"620"}))),(0,o.kt)("p",null,"When the user hits the reset button we will call the ",(0,o.kt)("strong",{parentName:"p"},"Sign Up / Reset Password")," cloud function by supplying the secret token and user email that is received via the query parameters of the link and the ",(0,o.kt)("strong",{parentName:"p"},"Page Inputs")," node."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(31050).Z,width:"1618",height:"1052"}))),(0,o.kt)("p",null,"Provided that the secret token is correct and have not expired (tokens are valid for 24 hours) the password will be updated. You can then send the user back to the ",(0,o.kt)("strong",{parentName:"p"},"Log In")," page."),(0,o.kt)("p",null,"That's it, this is how you use cloud functions to create an email verification and password reset flow. You will use cloud functions for a lot of user management tasks that need to be performed on the backend with full database access."))}u.isMDXComponent=!0},486:function(e,t,n){t.Z=n.p+"assets/images/reset-password-1-febc05010706aa49fdce5f4619d10e78.png"},52563:function(e,t,n){t.Z=n.p+"assets/images/reset-password-2-79045cdca35a317964da8534d57d9f39.png"},99673:function(e,t,n){t.Z=n.p+"assets/images/reset-password-3-1aee6555044c4588c94231feb81fb992.png"},77339:function(e,t,n){t.Z=n.p+"assets/images/reset-password-4-f1efc4e317f5c2315752e77c4bf88371.png"},31050:function(e,t,n){t.Z=n.p+"assets/images/reset-password-5-5ab4fc013361523677751d194ac49e57.png"},35272:function(e,t,n){t.Z=n.p+"assets/images/reset-password-6-226403f0ac6e03a25f04f9d15779f6dd.png"},71294:function(e,t,n){t.Z=n.p+"assets/images/settings-1-3801c025c360f0c8e532df7fa5abea7b.png"},90768:function(e,t,n){t.Z=n.p+"assets/images/settings-2-ba02c0fc1d5eb0ddfbc035a13bfa0b45.png"},59113:function(e,t,n){t.Z=n.p+"assets/images/sign-up-1-17865ab4ce36b2f70baf6cecd14e46e9.png"},72130:function(e,t,n){t.Z=n.p+"assets/images/sign-up-2-020e1d4b27e1c2cc4d910816afbe4960.png"},28090:function(e,t,n){t.Z=n.p+"assets/images/sign-up-3-e22cedf8db53eb32a90d32f5a321c47d.png"},88458:function(e,t,n){t.Z=n.p+"assets/images/sign-up-4-bf4d759cca940264554b8b8503eedf2f.png"},80006:function(e,t,n){t.Z=n.p+"assets/images/sign-up-5-bf0a3f3d5d4099bcc2451c2652204f98.png"},9081:function(e,t,n){t.Z=n.p+"assets/images/signup-template-15cd4d1a6d6fce354bcefb13224db64b.png"},2868:function(e,t,n){t.Z=n.p+"assets/images/verify-email-1-faad07be3e8ac8eedcc96c03052d30e3.png"},40348:function(e,t,n){t.Z=n.p+"assets/images/verify-email-2-0c5d11fed1967cea0f515c9c58299f19.png"}}]);