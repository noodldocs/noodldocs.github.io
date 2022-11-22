"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[9805],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||s;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16869:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(83117),o=n(80102),s=(n(67294),n(3905)),a=["components"],l={hide_title:!0,hide_table_of_contents:!0,title:"Noodl.Users"},i="Noodl.Users",c={unversionedId:"reference/users",id:"reference/users",title:"Noodl.Users",description:"The Noodl.Users object let's you access the current session user.",source:"@site/javascript/reference/users.md",sourceDirName:"reference",slug:"/reference/users",permalink:"/2.8/javascript/reference/users",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Noodl.Users"},sidebar:"apiSidebar",previous:{title:"Noodl.Records",permalink:"/2.8/javascript/reference/records"},next:{title:"Noodl.Files",permalink:"/2.8/javascript/reference/files"}},u={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"noodlusers"},"Noodl.Users"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"Noodl.Users")," object let's you access the current session user."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Noodl.Users.logIn(options)")),"\nThis function will attempt to login to create a user session. After a successful login you can access the user object with ",(0,s.kt)("inlineCode",{parentName:"p"},"Noodl.Users.Current")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'await Noodl.Users.logIn({\n    username:"my-username",\n    password:"my-password"\n})\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Noodl.Users.signUp(options)")),"\nThis function will attempt to sign up a new user, and if successful that user will become the current user session. Username, email and password are required options and properties is optional."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'await Noodl.Users.signUp({\n    username:"my-username",\n    email:"my-email",\n    password:"my-password",\n    properties:{\n        SomeProperty:true\n    }\n})\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Noodl.Users.Current")),"\nThis function will return the current user object and properties if one exists. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const user = Noodl.Users.Current\nif(user) {\n    // A user is logged in\n    console.log(user.UserId) // the user id of the current user\n\n    console.log(user.Properties.SomeProperty)\n}\nelse {\n    // No user session\n}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Noodl.Users.Current.fetch()")),"\nThis function will fetch that laters properties of the user object from the cloud database. It will throw an exception if the user session has expired."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"await Noodl.Users.Current.fetch()\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Noodl.Users.Current.save()")),"\nThis function will attempt to save the properties of the current user. If you have made changes to the ",(0,s.kt)("strong",{parentName:"p"},"current()")," user object you will need to call this function to write the changes to the backend."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"await Noodl.Users.Current.save()\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Noodl.Users.Current.logOut()")),"\nThis function will log out the current user and terminate the session."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"await Noodl.Users.Current.logOut()\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Noodl.Users.on(eventName,callback)")),"\nYou can use this function to listen for events related to the user service."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"Noodl.Users.on('sessionLost',() => {\n    // This is called when the session has expired\n})\n\nNoodl.Users.on('loggedIn',() => {\n    // This is called when a user has successfully logged in\n})\n\nNoodl.Users.on('loggedOut',() => {\n    // This is called when a user has successfully logged out\n})\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Noodl.Users.off(eventName,callback)")),"\nYou use this function to remove an event listener from a specific event."))}f.isMDXComponent=!0}}]);