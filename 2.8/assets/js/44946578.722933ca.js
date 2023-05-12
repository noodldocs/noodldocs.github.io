"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[9511],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},A=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),A=c(n),g=o,p=A["".concat(s,".").concat(g)]||A[g]||u[g]||i;return n?a.createElement(p,l(l({ref:t},d),{},{components:n})):a.createElement(p,l({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=A;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}A.displayName="MDXCreateElement"},91074:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return u}});var a=n(83117),o=n(80102),i=(n(67294),n(3905)),l=["components"],r={title:"Scheduled Jobs",hide_title:!0},s="Scheduled Jobs",c={unversionedId:"guides/cloud-logic/scheduled-jobs",id:"guides/cloud-logic/scheduled-jobs",title:"Scheduled Jobs",description:'One very useful task for cloud functions are scheduled jobs. This is logic that you want to run in the cloud at specific intervals, such as every 15 minutes, hourly or daily. These jobs typically take care of housekeeping tasks that run in the "background" of your application.',source:"@site/docs/guides/cloud-logic/scheduled-jobs.md",sourceDirName:"guides/cloud-logic",slug:"/guides/cloud-logic/scheduled-jobs",permalink:"/2.8/docs/guides/cloud-logic/scheduled-jobs",tags:[],version:"current",frontMatter:{title:"Scheduled Jobs",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Emal Verification",permalink:"/2.8/docs/guides/cloud-logic/email-verification"},next:{title:"Logging and Debugging",permalink:"/2.8/docs/guides/cloud-logic/logging"}},d={},u=[{value:"The job cloud function",id:"the-job-cloud-function",level:2},{value:"Testing and deploying",id:"testing-and-deploying",level:2},{value:"Scheduling the job",id:"scheduling-the-job",level:2},{value:"Security",id:"security",level:2}],A={toc:u};function g(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},A,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"scheduled-jobs"},"Scheduled Jobs"),(0,i.kt)("p",null,'One very useful task for cloud functions are scheduled jobs. This is logic that you want to run in the cloud at specific intervals, such as every 15 minutes, hourly or daily. These jobs typically take care of housekeeping tasks that run in the "background" of your application.'),(0,i.kt)("p",null,"Let's say for this example that we have a class in the database where a lot of records gets created as the application is running and to not use unnecessary data storage we want to prune the records that are older than 48 hours."),(0,i.kt)("h2",{id:"the-job-cloud-function"},"The job cloud function"),(0,i.kt)("p",null,"We start by creating a simple cloud function that will do the cloud job. Let's call it ",(0,i.kt)("strong",{parentName:"p"},"Cleanup"),"."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(24027).Z,width:"612",height:"158"}))),(0,i.kt)("p",null,"In this function we add a small logic flow that first find all ",(0,i.kt)("strong",{parentName:"p"},"Photos")," that are older than 48 hours. This is done with a ",(0,i.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/query-records"},"Query Records")," node and a date filter, passing in the date we want to compare ",(0,i.kt)("strong",{parentName:"p"},"createdAt")," too via a small ",(0,i.kt)("strong",{parentName:"p"},"Function")," snippet."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(88086).Z,width:"2414",height:"730"}))),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Date")," object to compare to is calcuated as such (date right now, and back up 48 hours). We want all ",(0,i.kt)("strong",{parentName:"p"},"Photo")," records that have a date that is less (earlier) than this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Outputs.FilterDate = new Date(Date.now() - 48*60*60*1000)\n")),(0,i.kt)("p",null,"If successful the photos are passed into a handy node called ",(0,i.kt)("a",{parentName:"p",href:"/nodes/data/run-tasks"},"Run Tasks")," which will perform a logic component task for each item in the array that is fed to it, reporting ",(0,i.kt)("strong",{parentName:"p"},"Done")," when the are all processed. We need to create the logic component, I called it ",(0,i.kt)("strong",{parentName:"p"},"Delete Task")," and added it as a child component to the cloud function."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(57331).Z,width:"822",height:"440"}))),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(93086).Z,width:"632",height:"244"}))),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Delete Task")," is very simple, it uses the ",(0,i.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/delete-record"},"Delete Record")," node triggered when the ",(0,i.kt)("strong",{parentName:"p"},"Do")," is sent. This signal is sent by the ",(0,i.kt)("strong",{parentName:"p"},"Run Tasks")," node."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(97673).Z,width:"1606",height:"560"}))),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Run Tasks")," node will create an instance of the task component (",(0,i.kt)("strong",{parentName:"p"},"Delete Task"),") for each item in the array (that is for each ",(0,i.kt)("strong",{parentName:"p"},"Photo")," we want to delete) and just like the ",(0,i.kt)("a",{parentName:"p",href:"/nodes/ui-controls/repeater"},"Repeater")," node you can specify that the ",(0,i.kt)("strong",{parentName:"p"},"Delete Record")," node should operate on the current record."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(36651).Z,width:"612",height:"260"}))),(0,i.kt)("p",null,"Then we just need one more thing for out ",(0,i.kt)("strong",{parentName:"p"},"Cleanup")," cloud function and that is to make sure it can be called without ",(0,i.kt)("strong",{parentName:"p"},"Authentication"),", we will get back to this a bit later. Make sure the ",(0,i.kt)("strong",{parentName:"p"},"Request")," node in the ",(0,i.kt)("strong",{parentName:"p"},"Cleanup")," cloud function has this property checked."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2514).Z,width:"608",height:"188"}))),(0,i.kt)("h2",{id:"testing-and-deploying"},"Testing and deploying"),(0,i.kt)("p",null,"The easiest way to test your background job is to trigger it manually from the UI of your application. Add a button somewhere (maybe in an admin panel of your app) and simply run the function. This will allow you to test if properly and debug it in the Noodl editor before deploying."),(0,i.kt)("div",{className:"ndl-image-with-background m"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(22833).Z,width:"380",height:"238"}))),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(80942).Z,width:"980",height:"470"}))),(0,i.kt)("p",null,"When it's working to your liking, deploy it to your backend. Take a look in this ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/cloud-logic/introduction#deploying"},"guide")," to learn more about deploying."),(0,i.kt)("h2",{id:"scheduling-the-job"},"Scheduling the job"),(0,i.kt)("p",null,"When the cloud function is deploy we need to schedule it to be run at the interval we want. You can run a deployed cloud function from outside of Noodl, this is very handy for tasks like handling paymnents with external providers etc, and it's super useful for scheduling cloud jobs too. First, find your cloud service in the cloud services tab, and look for ",(0,i.kt)("strong",{parentName:"p"},"Manage Cloud Service"),"."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(71872).Z,width:"684",height:"214"}))),(0,i.kt)("div",{className:"ndl-image-with-background m"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(17415).Z,width:"600",height:"470"}))),(0,i.kt)("p",null,"This will open a popup showing you information about the selected cloud services, we are looking for the ",(0,i.kt)("strong",{parentName:"p"},"Endpoint"),", this is the HTTP address you use to access your cloud service."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(97897).Z,width:"1654",height:"682"}))),(0,i.kt)("p",null,"The endpoint will have the following format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://backend.noodl.cloud/xyz/123\n")),(0,i.kt)("p",null,"With the endpoint in hand you can go ahead and set up the scheduling for your cloud job. There are a wide range of tools for scheduling HTTP calls and my absolute favorite is ",(0,i.kt)("a",{parentName:"p",href:"https://cron-job.org/"},"cron-job.org"),", it's clean, simple and free."),(0,i.kt)("p",null,"Once you have created an account and sign in, look for the ",(0,i.kt)("strong",{parentName:"p"},"Create Cronjob")," button."),(0,i.kt)("div",{className:"ndl-image-with-background m"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(15392).Z,width:"470",height:"166"}))),(0,i.kt)("p",null,"First you provide the endpoint of the cloud function that is your backgroud job that you want to schedule, you use the endpoint for above and add ",(0,i.kt)("inlineCode",{parentName:"p"},"/functions/{function-name}")),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(89573).Z,width:"2434",height:"444"}))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some tools don't handle urls with big and small cases to it might be a good idea to just use small cases in the names of your cloud functions and no spaces or other special characters."))),(0,i.kt)("p",null,"Move on to choosing the schedule interval for your background job:"),(0,i.kt)("div",{className:"ndl-image-with-background m"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(55700).Z,width:"442",height:"110"}))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Don't schedule your tasks too often. In Noodl hosted cloud services (and generally self hosted too) you are billed for the amount of time your cloud function runs, and if you are using a free plan and run too many cloud functions they will be throttled after a while and your application performance will suffer."))),(0,i.kt)("p",null,"Now move over to the ",(0,i.kt)("strong",{parentName:"p"},"Advanced")," tab for some additional settings. Mainly that you need to change the ",(0,i.kt)("strong",{parentName:"p"},"Request Method")," to ",(0,i.kt)("strong",{parentName:"p"},"POST")," as that is how you invoke cloud functions in Noodl."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(85689).Z,width:"856",height:"148"}))),(0,i.kt)("p",null,"That's it, you can now test your function using the ",(0,i.kt)("strong",{parentName:"p"},"Test Run")," button and it should run successfully. Then go ahead and create it."),(0,i.kt)("div",{className:"ndl-image-with-background m"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(21004).Z,width:"296",height:"126"}))),(0,i.kt)("p",null,"Now your cloud function will be scheduled and you can just sit back and watch as your photos are clean up (or whatever you choose to do in your background job) nicely."),(0,i.kt)("h2",{id:"security"},"Security"),(0,i.kt)("p",null,"One final note on security. Above we set the cloud function to ",(0,i.kt)("strong",{parentName:"p"},"allow unauthenticated requests"),", this means that anyone can call this function whenever. It's not a huge problem since it doesn't do anything sensitive, it will simply prune our photos a bit more often. But it might run up our bill. So let's add a secret key that is needed to make the call."),(0,i.kt)("p",null,"Simply add parameter to your cloud function called ",(0,i.kt)("strong",{parentName:"p"},"Secret"),", and add a small logic in the beginning of your function to verify it (you can pick any secret you like)."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(85580).Z,width:"1746",height:"1046"}))),(0,i.kt)("p",null,"If the secret provided when calling this function does not match, then send an error response back."),(0,i.kt)("div",{className:"ndl-image-with-background m"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(83533).Z,width:"608",height:"250"}))),(0,i.kt)("p",null,"This will make sure that no one can call your function (or at least, it won't do any possibly expensive work) without knowing your secret. Finally, provide the same secret when scheduling your background job, this can be done in the ",(0,i.kt)("strong",{parentName:"p"},"Advanced")," tab in ",(0,i.kt)("a",{parentName:"p",href:"https://cron-job.org/"},"cron-job.org"),"."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(85599).Z,width:"960",height:"438"}))),(0,i.kt)("p",null,"There you go, now you have a scheduled cloud job up and running. Calling cloud functions from external services like this is a very useful pattern to integrate Noodl with other services, it will be a recurring pattern in other guides so it's good to know."))}g.isMDXComponent=!0},71872:function(e,t,n){t.Z=n.p+"assets/images/bg-schedule-1-a781c9a49ee28913b1fea55404216830.png"},17415:function(e,t,n){t.Z=n.p+"assets/images/bg-schedule-2-f35f6d32bc7f22d8ac89cb9c2f4860bb.png"},97897:function(e,t,n){t.Z=n.p+"assets/images/bg-schedule-3-aeb5987849d73b0f2320daebe7574f02.png"},24027:function(e,t,n){t.Z=n.p+"assets/images/cleanup-1-0c2b534c9d2cf4225c2c952e9b3228cf.png"},57331:function(e,t,n){t.Z=n.p+"assets/images/cleanup-delete-0-6835c2d72047b687dfdc4404edbc28f9.png"},93086:function(e,t,n){t.Z=n.p+"assets/images/cleanup-delete-1-faecc28403b9d0e61ce31bea140b64d6.png"},97673:function(e,t,n){t.Z=n.p+"assets/images/cleanup-delete-2-4ffa475bf8e87bced4651f757d665e36.png"},36651:function(e,t,n){t.Z=n.p+"assets/images/cleanup-delete-3-af6e373a68251f175a49837abd3a13ca.png"},2514:function(e,t,n){t.Z=n.p+"assets/images/cleanup-noauth-097222ec3d66b23b3c038b343cb64098.png"},88086:function(e,t,n){t.Z=n.p+"assets/images/cleanup-nodes-1-b93546aa371bec5685ba6dd646bb1eca.png"},22833:function(e,t,n){t.Z=n.p+"assets/images/cleanup-test-1-0920a83e3ffb2a2492e905f69a90e01f.png"},80942:function(e,t,n){t.Z=n.p+"assets/images/cleanup-test-2-bbc714f6431bd641bcaed35ce99d2de0.png"},15392:function(e,t,n){t.Z=n.p+"assets/images/cron-1-8f7264451356595e32aa718b866a64bf.png"},89573:function(e,t,n){t.Z=n.p+"assets/images/cron-2-0c7fc96aa4943d54817273b398c7669b.png"},55700:function(e,t,n){t.Z=n.p+"assets/images/cron-3-9b251f44e44ba832b1703eac9a58a59a.png"},85689:function(e,t,n){t.Z=n.p+"assets/images/cron-4-6a357d5741b6428ba0520ddb203ab7f7.png"},21004:function(e,t){t.Z="data:image/png;base64,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"},85580:function(e,t,n){t.Z=n.p+"assets/images/security-1-4f23f97b206f34da163899c00bfb5666.png"},83533:function(e,t,n){t.Z=n.p+"assets/images/security-2-14bac81f508e2d8555beebbdc75ce0f7.png"},85599:function(e,t,n){t.Z=n.p+"assets/images/security-3-56886d76e2077715c37ec54bc33b0422.png"}}]);