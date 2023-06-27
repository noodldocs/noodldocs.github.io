"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[7120],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return p}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),c=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(u.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(t),p=r,h=d["".concat(u,".").concat(p)]||d[p]||g[p]||i;return t?o.createElement(h,l(l({ref:n},s),{},{components:t})):o.createElement(h,l({ref:n},s))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},28921:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d}});var o=t(83117),r=t(80102),i=(t(67294),t(3905)),l=t(44996),a=["components"],u={title:"Logging and Debugging",hide_title:!0},c="Logging and Debugging",s={unversionedId:"guides/cloud-logic/logging",id:"guides/cloud-logic/logging",title:"Logging and Debugging",description:"When building cloud functions it's important to know how to spot errors and problems quickly. This is where logging and debugging comes in.",source:"@site/docs/guides/cloud-logic/logging.md",sourceDirName:"guides/cloud-logic",slug:"/guides/cloud-logic/logging",permalink:"/2.9/docs/guides/cloud-logic/logging",tags:[],version:"current",frontMatter:{title:"Logging and Debugging",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Scheduled Jobs",permalink:"/2.9/docs/guides/cloud-logic/scheduled-jobs"},next:{title:"Javascript in Cloud Functions",permalink:"/2.9/docs/guides/cloud-logic/javascript"}},g={},d=[{value:"Running locally",id:"running-locally",level:2},{value:"Logging",id:"logging",level:2}],p={toc:d};function h(e){var n=e.components,u=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,u,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"logging-and-debugging"},"Logging and Debugging"),(0,i.kt)("p",null,"When building cloud functions it's important to know how to spot errors and problems quickly. This is where logging and debugging comes in."),(0,i.kt)("h2",{id:"running-locally"},"Running locally"),(0,i.kt)("p",null,"When you are running your application in the Noodl editor all cloud functions are run on your local computer. The are accessing the active cloud service of the project, just as they will when deployed. The easiest way to find errors in your cloud functions is to inspect data and signal connections in your node graph as your functions are running locally."),(0,i.kt)("div",{className:"ndl-video"},(0,i.kt)("video",{width:"100%",autoPlay:!0,muted:!0,loop:!0,src:(0,l.Z)("/docs/guides/cloud-logic/logging/cf-inspect.mp4")})),(0,i.kt)("p",null,"Simply bring up the cloud functions tab, choose the function you want to inspect and then trigger it from the app preview. You will see the data and signals flowing through your graph and you can inspect the values afterwards just like in your frontend components."),(0,i.kt)("p",null,"Sometimes this is not enough and we need to open the ",(0,i.kt)("strong",{parentName:"p"},"Cloud Runtime Debugger"),", you can launch it from the top of the sidebar in the cloud functions tab."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:t(18529).Z,width:"604",height:"210"}))),(0,i.kt)("p",null,"This will open a web debugger, just like when debugging your front end. When your cloud functions run locally they run in a web runtime which means that you have access to all the same debug tools. Most notably you can debug network calls from your function, as well as the logging to the console, more on that in a bit."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Refresh cloud functions")," button above is also very useful if you want to clear error messages and inspect data and run your function clean."),(0,i.kt)("p",null,"If you want to call your cloud functions from external tools while running locally you can do this by accessing the local Noodl clound functions server directly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST http://localhost:8577/functions/my-func -H 'Content-Type: application/json' -d '{\"someParameter\":\"value\"}'\n")),(0,i.kt)("p",null,"This can be very useful when working with e.g. webhooks as they can be tested locally without having to deploy."),(0,i.kt)("h2",{id:"logging"},"Logging"),(0,i.kt)("p",null,"Another important tool to make sure your functions are running as expected is logging, especially when finding problems in deployed applications. When you are running locally you will find the logs in the ",(0,i.kt)("strong",{parentName:"p"},"Cloud Runtime Debugger")," under the ",(0,i.kt)("strong",{parentName:"p"},"Console")," tab."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:t(66088).Z,width:"948",height:"720"}))),(0,i.kt)("p",null,"There are three functions you can use to log from your cloud functions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// These two both log messages as "info" severity\nconsole.log(\'Some message\')\nconsole.info(\'Another message\')\n\n// This is logged with "error" severity and should be reserved for\n// critical issues. So they will be easier to find.\nconsole.error("An error occured")\n')),(0,i.kt)("p",null,"When you have deployed your application you can find the logs in the dashboard for the cloud service that you have deployed to."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:t(24086).Z,width:"2368",height:"464"}))),(0,i.kt)("p",null,"The logs are divided into ",(0,i.kt)("strong",{parentName:"p"},"info")," and ",(0,i.kt)("strong",{parentName:"p"},"error")," depending on which log function you used above. If you make sure to reserv error for more critical issues they will be easier to find."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:t(39268).Z,width:"2272",height:"440"}))))}h.isMDXComponent=!0},66088:function(e,n,t){n.Z=t.p+"assets/images/console-log-2f60194921001a8db9d32018a84d525e.png"},39268:function(e,n,t){n.Z=t.p+"assets/images/log-dashboard-error-5118b5cca6d13214bcc2cc5d2dd47ab3.png"},24086:function(e,n,t){n.Z=t.p+"assets/images/log-dashboard-info-6298e5bc2cf6f782f1ede05e1d1d7a13.png"},18529:function(e,n,t){n.Z=t.p+"assets/images/open-debug-d9e3625dad8ce484ca86faf3e56dd066.png"}}]);