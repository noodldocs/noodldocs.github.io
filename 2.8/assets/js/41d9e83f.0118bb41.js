"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[7929],{3905:function(e,t,A){A.d(t,{Zo:function(){return l},kt:function(){return h}});var n=A(67294);function o(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function a(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,n)}return A}function i(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?a(Object(A),!0).forEach((function(t){o(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):a(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function r(e,t){if(null==e)return{};var A,n,o=function(e,t){if(null==e)return{};var A,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)A=a[n],t.indexOf(A)>=0||(o[A]=e[A]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)A=a[n],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(o[A]=e[A])}return o}var s=n.createContext({}),g=function(e){var t=n.useContext(s),A=t;return e&&(A="function"==typeof e?e(t):i(i({},t),e)),A},l=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var A=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),u=g(A),h=o,d=u["".concat(s,".").concat(h)]||u[h]||p[h]||a;return A?n.createElement(d,i(i({ref:t},l),{},{components:A})):n.createElement(d,i({ref:t},l))}));function h(e,t){var A=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=A.length,i=new Array(a);i[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var g=2;g<a;g++)i[g]=A[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,A)}u.displayName="MDXCreateElement"},87792:function(e,t,A){A.r(t),A.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return r},metadata:function(){return g},toc:function(){return p}});var n=A(83117),o=A(80102),a=(A(67294),A(3905)),i=["components"],r={title:"OAuth2",hide_title:!0},s="OAuth2",g={unversionedId:"prefabs/oauth2/README",id:"prefabs/oauth2/README",title:"OAuth2",description:"OAuth2 is a standard that allows, among other things, web applications to authorize (log in) users from external services like Facebook, Twitter, Microsoft or Google. This can make the sign up flow faster and you don't have to create a new user by signing up with your email and password. It can also be considered more secure as you as the application developer don't need to manage your users password.",source:"@site/library/prefabs/oauth2/README.md",sourceDirName:"prefabs/oauth2",slug:"/prefabs/oauth2/",permalink:"/2.8/library/prefabs/oauth2/",tags:[],version:"current",frontMatter:{title:"OAuth2",hide_title:!0},sidebar:"oauth2Sidebar"},l={},p=[{value:"Registering your app",id:"registering-your-app",level:2},{value:"Authorization",id:"authorization",level:2},{value:"Signing in",id:"signing-in",level:2}],u={toc:p};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"oauth2"},"OAuth2"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OAuth2")," is a standard that allows, among other things, web applications to authorize (log in) users from external services like Facebook, Twitter, Microsoft or Google. This can make the sign up flow faster and you don't have to create a new user by signing up with your email and password. It can also be considered more secure as you as the application developer don't need to manage your users password."),(0,a.kt)("p",null,"This prefab provide a few simple cloud functions to get started, they will enable you to sign in users from other services that provide OAuth2 support, more specifically using something called ",(0,a.kt)("strong",{parentName:"p"},"Authorization Code Flow"),". It's done in a few steps and we will try to cover these steps below."),(0,a.kt)("h2",{id:"registering-your-app"},"Registering your app"),(0,a.kt)("p",null,"The first step in this process is to register your application with the external auth service provider, this works slighly different but should give the same result in the end. In this guide we will use ",(0,a.kt)("a",{parentName:"p",href:"https://developer.spotify.com/dashboard"},"Spotify")," as an example, you can review the details of how the flow works ",(0,a.kt)("a",{parentName:"p",href:"https://developer.spotify.com/documentation/general/guides/authorization/code-flow/"},"here"),". To follow along, first sign in to the developer dashboard and register your application."),(0,a.kt)("div",{className:"ndl-image-with-background m"},(0,a.kt)("p",null,(0,a.kt)("img",{src:A(91593).Z,width:"1438",height:"1510"}))),(0,a.kt)("p",null,"When you get to the dashboard of your application your should first look for the ",(0,a.kt)("strong",{parentName:"p"},"Client ID")," and ",(0,a.kt)("strong",{parentName:"p"},"Client Secret"),"."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:A(70878).Z,width:"1052",height:"324"}))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Client ID")," This is an identifier of your application towards the auhtorization provider.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Client Secret")," This is a secret token that you should not share with your users, it must be kept on the backend, only use it in cloud functions."))),(0,a.kt)("p",null,"With these to in hand you need to register a redirect url for your application this, for your spotify app this is done in the settings popup, click ",(0,a.kt)("strong",{parentName:"p"},"Edit Settings"),"."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:A(67629).Z,width:"1112",height:"552"}))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Redirect Uri")," This is URI to your application that the authorization provider will send the user to when the authorization (log in) is complete. So this needs to be a page in your application that will receive a special authorization code that is needed to complete the flow. For testing it's generally a good idea to user ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:8574/oauth")," but once you deploy your application you need to use the domain you deploy to. Often you can whitelist many callbacks in your app.")),(0,a.kt)("p",null,"You also need to retrieve three important HTTP endpoints from the authorization provider. An example of how to find the for Microsoft Azure is ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/active-directory/develop/active-directory-v2-protocols#endpoints"},"here"),"."),(0,a.kt)("h2",{id:"authorization"},"Authorization"),(0,a.kt)("p",null,"The first step is to perform the user authorization, for this we need to update the settings of the prefab you just cloned. When added to the project you will have two new cloud functions and some logic components. You should start by opening the ",(0,a.kt)("strong",{parentName:"p"},"Settings")," component."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:A(38252).Z,width:"610",height:"358"}))),(0,a.kt)("p",null,"In the ",(0,a.kt)("strong",{parentName:"p"},"Settings")," component first update these settings with the values you retrieved when registering the app. Use the testing ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8574/oauth")," redirect uri for now."),(0,a.kt)("div",{className:"ndl-image-with-background m"},(0,a.kt)("p",null,(0,a.kt)("img",{src:A(86087).Z,width:"662",height:"1074"}))),(0,a.kt)("p",null,"There are two more things we need as you can see and that is the authorization endpoint and scope."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Auhtorization Endpoint")," This is where your application will redirect the user to sign in, they will click a button in your application and then be sent to e.g. Microsoft, Google or Spotify (or whichever auth provider you use) to sign in.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Scope")," This tells the auth provider what functions and data our applications needs access to so the user can give their permission. It's different for each auth provider so you need to refer to the documentation for the provider you are using, for the sign in to work we only need access to the user profile. For spotify the scope is ",(0,a.kt)("inlineCode",{parentName:"p"},"user-read-email"),"."))),(0,a.kt)("p",null,"These can sometimes be tricky to find for your service, looking at the guide ",(0,a.kt)("a",{parentName:"p",href:"https://developer.spotify.com/documentation/general/guides/authorization/code-flow/"},"here")," for instance we can find the authorization endpoint for the spotify auth service."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://accounts.spotify.com/authorize")),(0,a.kt)("p",null,"This is what you need to put in that last settings ",(0,a.kt)("strong",{parentName:"p"},"String")," node. Now we can start the log in process from the UI of our application. Let's say that we have a button called ",(0,a.kt)("strong",{parentName:"p"},"Log In With Spotify"),", when that button is clicked we should call the ",(0,a.kt)("strong",{parentName:"p"},"OAuth2/Authorize")," cloud function, it will return a URI that we should redirect the user to. We can do this with the ",(0,a.kt)("strong",{parentName:"p"},"External Link")," node."),(0,a.kt)("div",{className:"ndl-image-with-background xl"},(0,a.kt)("p",null,(0,a.kt)("img",{src:A(12238).Z,width:"1536",height:"538"}))),(0,a.kt)("p",null,"This will take the user to the log in screen of the auth provider, and when the user have signed in successfully the auth provider will redirect back to our application using the specified redirect uri that we put in the ",(0,a.kt)("strong",{parentName:"p"},"Settings")," component."),(0,a.kt)("h2",{id:"signing-in"},"Signing in"),(0,a.kt)("p",null,"So if you put e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8574/oauth")," for testing, then you need to create a new page with the url slug ",(0,a.kt)("strong",{parentName:"p"},"oauth")," to receive the result. This page will get one very important ",(0,a.kt)("strong",{parentName:"p"},"Page Input")," and that is a query parameter called ",(0,a.kt)("strong",{parentName:"p"},"Code"),", this is an authorazation code we get with a successful sign in that we can use to log the user in to your app. When you install the prefab you will also get a logic component on the frontend called ",(0,a.kt)("strong",{parentName:"p"},"Log In"),"."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:A(88078).Z,width:"606",height:"138"}))),(0,a.kt)("p",null,"Here is an example of a ",(0,a.kt)("strong",{parentName:"p"},"oauth")," page that uses the ",(0,a.kt)("strong",{parentName:"p"},"Log In")," component to complete the log in flow using the ",(0,a.kt)("strong",{parentName:"p"},"Code")," from the ",(0,a.kt)("strong",{parentName:"p"},"Page Inputs"),". If it's successful you can navigate to some page in your app and the user will be logged in. If unsuccessful you should show some sort of message."),(0,a.kt)("div",{className:"ndl-image-with-background xl"},(0,a.kt)("p",null,(0,a.kt)("img",{src:A(97444).Z,width:"1726",height:"870"}))),(0,a.kt)("p",null,"To complete this step we need another three settings in the ",(0,a.kt)("strong",{parentName:"p"},"Settings")," component for the cloud functions. The first one is the token endpoint. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Token Endpoint")," Once the user successfully signs in, the auth provider will send them back to your application to the ",(0,a.kt)("strong",{parentName:"li"},"Redirect Uri")," that you provided above with a secret authorization code, the cloud functions will then use that to sign in the user via this endpoint.")),(0,a.kt)("p",null,"Again you need to refer to the documentation of your auth provide to find the token, for spotify we can again find it at the bottom of this ",(0,a.kt)("a",{parentName:"p",href:"https://developer.spotify.com/documentation/general/guides/authorization/code-flow/"},"page"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://accounts.spotify.com/api/token")),(0,a.kt)("p",null,"The next thing needed is to get some data on the user, namely the email of the user, so we can match it with a Noodl user in your database (or create a new one if needed). For that you first need the user endpoint."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"User Endpoint")," Once signed in, this endpoint is used to get information on the user such as the email of the user which is needed to complete the sign in with Noodl.")),(0,a.kt)("p",null,"For spotify we can find it ",(0,a.kt)("a",{parentName:"p",href:"https://developer.spotify.com/documentation/web-api/reference/#/operations/get-current-users-profile"},"here"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://api.spotify.com/v1/me")),(0,a.kt)("p",null,"Calling this endpoint with the correct credentials will return an object describing the user, we are looking for the field containg the email of the user and looking at the documentation above we can see the it is simply named ",(0,a.kt)("strong",{parentName:"p"},"email"),". The ",(0,a.kt)("strong",{parentName:"p"},"Token Endpoing"),", ",(0,a.kt)("strong",{parentName:"p"},"User Endpoint")," and the name of the ",(0,a.kt)("strong",{parentName:"p"},"Email Field")," need to be added to the ",(0,a.kt)("strong",{parentName:"p"},"Settings")," component before the flow can be completed."),(0,a.kt)("div",{className:"ndl-image-with-background m"},(0,a.kt)("p",null,(0,a.kt)("img",{src:A(23087).Z,width:"580",height:"712"}))),(0,a.kt)("p",null,"That's it. With this flow in place you can sign in users with an external auth provider. A normal user will be created in your database or if a user already exists with the same email that user will be logged into."))}h.isMDXComponent=!0},91593:function(e,t,A){t.Z=A.p+"assets/images/oauth2-1-9c49b78f303e5acabfda7d3f4063b01a.png"},70878:function(e,t,A){t.Z=A.p+"assets/images/oauth2-2-2fd75ae2ad932699409998d08ff95b70.png"},67629:function(e,t,A){t.Z=A.p+"assets/images/oauth2-3-b0fd46b01746916a9dad0b7a759f1f78.png"},38252:function(e,t,A){t.Z=A.p+"assets/images/oauth2-cloud-functions-2e79246d5fe0441002286179ad87f2bd.png"},88078:function(e,t){t.Z="data:image/png;base64,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"},97444:function(e,t,A){t.Z=A.p+"assets/images/oauth2-oauth-page-592f164be435e315351eb4a0eaee6905.png"},86087:function(e,t,A){t.Z=A.p+"assets/images/oauth2-settings-1-8aa079a296e23effdd08d288172155fe.png"},23087:function(e,t,A){t.Z=A.p+"assets/images/oauth2-settings-2-49d1e72e0761de69c205835c1fcb5fad.png"},12238:function(e,t,A){t.Z=A.p+"assets/images/oauth2-sign-in-button-af47aa6e4840aebe0540e8f216c4fd1d.png"}}]);