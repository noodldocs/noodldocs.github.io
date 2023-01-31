"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[2593],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return f}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=n.createContext({}),u=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(o),f=r,y=c["".concat(d,".").concat(f)]||c[f]||p[f]||i;return o?n.createElement(y,a(a({ref:t},s),{},{components:o})):n.createElement(y,a({ref:t},s))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},4561:function(e,t,o){o.r(t),o.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=o(83117),r=o(80102),i=(o(67294),o(3905)),a=["components"],l={title:"Self Hosting your Noodl frontend",hide_title:!0},d=void 0,u={unversionedId:"guides/deploy/hosting-frontend",id:"guides/deploy/hosting-frontend",title:"Self Hosting your Noodl frontend",description:"What you will learn in this guide",source:"@site/docs/guides/deploy/hosting-frontend.md",sourceDirName:"guides/deploy",slug:"/guides/deploy/hosting-frontend",permalink:"/2.8/docs/guides/deploy/hosting-frontend",tags:[],version:"current",frontMatter:{title:"Self Hosting your Noodl frontend",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Deploying to iOS and Android",permalink:"/2.8/docs/guides/deploy/deploying-to-ios-and-android"},next:{title:"overview",permalink:"/2.8/docs/build-alongs/overview"}},s={},p=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"Deploying to Local Folder",id:"deploying-to-local-folder",level:2},{value:"Hosting your Frontend at GCP or AWS",id:"hosting-your-frontend-at-gcp-or-aws",level:2}],c={toc:p};function f(e){var t=e.components,l=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"self-hosting-your-noodl-frontend"},"Self hosting your Noodl frontend"),(0,i.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,i.kt)("p",null,"In this guide you will learn how to ",(0,i.kt)("strong",{parentName:"p"},"Self Host")," by deploying your Noodl App frontend to a local folder and then host it on either Google Cloud Platform or AWS. This is needed if you want to host your Noodl App frontend in your own cloud infrastructure and with your own domain name."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Self Hosting"),(0,i.kt)("br",null),'Note: To be able to follow this guide you must have "Self Host" feature enabled. This is not available in the free Noodl plan. But you can request a trial ',(0,i.kt)("a",{parentName:"p",href:"https://noodl.net/plans"},"here"),"."))),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"By default, Noodl will host you App (both backend and frontend), by deploying your app to a ",(0,i.kt)("strong",{parentName:"p"},"sandbox.noodl.app")," domain for free or using your own domain. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/deploy/deploying-an-app-on-sandbox"},"this")," guide for more information."),(0,i.kt)("p",null,"However, for various reasons, you may want to host your frontend on your own infrastructure. For this you will first deploy it locally and then upload it to your hosting provider of choice."),(0,i.kt)("h2",{id:"deploying-to-local-folder"},"Deploying to Local Folder"),(0,i.kt)("p",null,"By using the ",(0,i.kt)("strong",{parentName:"p"},"Self Hosting")," section in the Noodl deployment popup will save a version of your frontend to a folder on your local machine, this folder will contain everything needed and you can simply upload the content to your hosting service."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:o(48076).Z,width:"606",height:"348"}))),(0,i.kt)("p",null,"Make sure you pick the backend you want to use for the deploy."),(0,i.kt)("h2",{id:"hosting-your-frontend-at-gcp-or-aws"},"Hosting your Frontend at GCP or AWS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Google Cloud Platform")," If you would like use GCP to host the frontend you can follow this ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/hosting-static-website"},"guide"),". There you will create a bucket, a load balancer and a CDN.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Amazon Web Services")," If you prefer to use AWS you can watch this ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=BpFKnPae1oY&ab_channel=AmazonWebServices"},"video")," it will explain how to create an S3 bucket and how to route traffic using the AWS DNS service, Route 53."))))}f.isMDXComponent=!0},48076:function(e,t,o){t.Z=o.p+"assets/images/noodl-deploy-to-folder-bc5b8763ee5e909c8d0c1d64e0c86a2b.png"}}]);