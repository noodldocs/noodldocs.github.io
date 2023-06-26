"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[4330],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),u=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return t?o.createElement(h,a(a({ref:n},c),{},{components:t})):o.createElement(h,a({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<s;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},16869:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var o=t(83117),r=t(80102),s=(t(67294),t(3905)),a=["components"],l={hide_title:!0,hide_table_of_contents:!0,title:"Noodl.Users"},i="Noodl.Users",u={unversionedId:"reference/users",id:"reference/users",title:"Noodl.Users",description:"The Noodl.Users object let's you access the current session user.",source:"@site/javascript/reference/users.md",sourceDirName:"reference",slug:"/reference/users",permalink:"/2.9/javascript/reference/users",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Noodl.Users"},sidebar:"apiSidebar",previous:{title:"Noodl.Records",permalink:"/2.9/javascript/reference/records"},next:{title:"Noodl.Files",permalink:"/2.9/javascript/reference/files"}},c={},p=[{value:"<strong><code>Noodl.Users.logIn(options)</code></strong>",id:"noodlusersloginoptions",level:4},{value:"<strong><code>Noodl.Users.signUp(options)</code></strong>",id:"noodluserssignupoptions",level:4},{value:"<strong><code>Noodl.Users.become(sessionToken)</code></strong>",id:"noodlusersbecomesessiontoken",level:4},{value:"<strong><code>Noodl.Users.impersonate(username,options)</code></strong>",id:"noodlusersimpersonateusernameoptions",level:4},{value:"<strong><code>Noodl.Users.Current</code></strong>",id:"noodluserscurrent",level:4},{value:"<strong><code>Noodl.Users.Current.fetch()</code></strong>",id:"noodluserscurrentfetch",level:4},{value:"<strong><code>Noodl.Users.Current.save()</code></strong>",id:"noodluserscurrentsave",level:4},{value:"<strong><code>Noodl.Users.Current.logOut()</code></strong>",id:"noodluserscurrentlogout",level:4},{value:"<strong><code>Noodl.Users.on(eventName,callback)</code></strong>",id:"noodlusersoneventnamecallback",level:4},{value:"<strong><code>Noodl.Users.off(eventName,callback)</code></strong>",id:"noodlusersoffeventnamecallback",level:4}],d={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"noodlusers"},"Noodl.Users"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"Noodl.Users")," object let's you access the current session user."),(0,s.kt)("h4",{id:"noodlusersloginoptions"},(0,s.kt)("strong",{parentName:"h4"},(0,s.kt)("inlineCode",{parentName:"strong"},"Noodl.Users.logIn(options)"))),(0,s.kt)("p",null,"This function will attempt to login to create a user session. After a successful login you can access the user object with ",(0,s.kt)("inlineCode",{parentName:"p"},"Noodl.Users.Current")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'// On the frontend you log in and access the user via Noodl.Users.Current\nawait Noodl.Users.logIn({\n  username: "my-username",\n  password: "my-password",\n});\n\nconsole.log(Noodl.Users.Current.UserId);\n\n// When running in a cloud function it also returns the user object\nconst user = await Noodl.Users.logIn({\n  username: "my-username",\n  password: "my-password",\n});\n\nconsole.log(user.sessionToken);\n')),(0,s.kt)("h4",{id:"noodluserssignupoptions"},(0,s.kt)("strong",{parentName:"h4"},(0,s.kt)("inlineCode",{parentName:"strong"},"Noodl.Users.signUp(options)"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Only available on the frontend"),(0,s.kt)("br",{parentName:"p"}),"\n","This function will attempt to sign up a new user, and if successful that user will become the current user session. Username, email and password are required options and properties is optional."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'await Noodl.Users.signUp({\n  username: "my-username",\n  email: "my-email",\n  password: "my-password",\n  properties: {\n    SomeProperty: true,\n  },\n});\n')),(0,s.kt)("h4",{id:"noodlusersbecomesessiontoken"},(0,s.kt)("strong",{parentName:"h4"},(0,s.kt)("inlineCode",{parentName:"strong"},"Noodl.Users.become(sessionToken)"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Only available on the frontend"),(0,s.kt)("br",{parentName:"p"}),"\n","This function will attempt to login a user with an existing session token. Session tokens can be created in cloud functions e.g. using the ",(0,s.kt)("inlineCode",{parentName:"p"},"impersonate")," function. After a successful login you can access the user object with ",(0,s.kt)("inlineCode",{parentName:"p"},"Noodl.Users.Current")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"// Call this from a function node with Inputs.SessionToken\ntry {\n  await Noodl.Users.become(Inputs.SessionToken);\n} catch (e) {\n  Outputs.Failure();\n  throw e;\n}\n\n// You can now access the user\nconst userId = Noodl.Users.Current.UserId;\n\nOutputs.Success();\n")),(0,s.kt)("h4",{id:"noodlusersimpersonateusernameoptions"},(0,s.kt)("strong",{parentName:"h4"},(0,s.kt)("inlineCode",{parentName:"strong"},"Noodl.Users.impersonate(username,options)"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Only available in cloud functions"),(0,s.kt)("br",{parentName:"p"}),"\n","With this function you can get a session token for a user that you can later send to the client to log that user in. This does not require a password and must be run on a cloud function (since they all have full access to the database). You can provide a duration for the session, or it will expire after 24 hours as default. If successful this call will return a user object that contains a session token that you can return to the client and use with the ",(0,s.kt)("inlineCode",{parentName:"p"},"become")," function."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"installationId")," is an optional that is a unique id for the client if you don't want to share sessions between different clients. Most common is to generate a random id on the client and pass to the cloud function when you are logging in."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'try {\n  const user = await Noodl.Users.impersonate("test@email.com", {\n    duration: 1 * 60 * 60 * 1000, // have the session last 1 hour\n    installationID: "xyz",\n  });\n\n  Outputs.SessionToken = user.sessionToken;\n  Outputs.Success();\n} catch (e) {\n  Outputs.Failure();\n  throw e;\n}\n')),(0,s.kt)("h4",{id:"noodluserscurrent"},(0,s.kt)("strong",{parentName:"h4"},(0,s.kt)("inlineCode",{parentName:"strong"},"Noodl.Users.Current"))),(0,s.kt)("p",null,"This function will return the current user object and properties if one exists."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const user = Noodl.Users.Current;\nif (user) {\n  // A user is logged in\n  console.log(user.UserId); // the user id of the current user\n\n  console.log(user.Properties.SomeProperty);\n} else {\n  // No user session\n}\n")),(0,s.kt)("h4",{id:"noodluserscurrentfetch"},(0,s.kt)("strong",{parentName:"h4"},(0,s.kt)("inlineCode",{parentName:"strong"},"Noodl.Users.Current.fetch()"))),(0,s.kt)("p",null,"This function will fetch that laters properties of the user object from the cloud database. It will throw an exception if the user session has expired."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"await Noodl.Users.Current.fetch();\n")),(0,s.kt)("h4",{id:"noodluserscurrentsave"},(0,s.kt)("strong",{parentName:"h4"},(0,s.kt)("inlineCode",{parentName:"strong"},"Noodl.Users.Current.save()"))),(0,s.kt)("p",null,"This function will attempt to save the properties of the current user. If you have made changes to the ",(0,s.kt)("strong",{parentName:"p"},"current()")," user object you will need to call this function to write the changes to the backend.\nIf the ",(0,s.kt)("inlineCode",{parentName:"p"},"password")," has been updated it will terminate all the sessions so the user has to login again."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"await Noodl.Users.Current.save();\n")),(0,s.kt)("h4",{id:"noodluserscurrentlogout"},(0,s.kt)("strong",{parentName:"h4"},(0,s.kt)("inlineCode",{parentName:"strong"},"Noodl.Users.Current.logOut()"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Only available on the frontend"),(0,s.kt)("br",{parentName:"p"}),"\n","This function will log out the current user and terminate the session."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"await Noodl.Users.Current.logOut();\n")),(0,s.kt)("h4",{id:"noodlusersoneventnamecallback"},(0,s.kt)("strong",{parentName:"h4"},(0,s.kt)("inlineCode",{parentName:"strong"},"Noodl.Users.on(eventName,callback)"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Only available on the frontend"),(0,s.kt)("br",{parentName:"p"}),"\n","You can use this function to listen for events related to the user service."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'Noodl.Users.on("sessionLost", () => {\n  // This is called when the session has expired\n});\n\nNoodl.Users.on("loggedIn", () => {\n  // This is called when a user has successfully logged in\n});\n\nNoodl.Users.on("loggedOut", () => {\n  // This is called when a user has successfully logged out\n});\n')),(0,s.kt)("h4",{id:"noodlusersoffeventnamecallback"},(0,s.kt)("strong",{parentName:"h4"},(0,s.kt)("inlineCode",{parentName:"strong"},"Noodl.Users.off(eventName,callback)"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Only available on the frontend"),(0,s.kt)("br",{parentName:"p"}),"\n","You use this function to remove an event listener from a specific event."))}m.isMDXComponent=!0}}]);