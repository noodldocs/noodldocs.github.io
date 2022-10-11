"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[4200],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),g=a,h=p["".concat(c,".").concat(g)]||p[g]||d[g]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2458:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),i=["components"],s={title:"Setting up a backend on Amazon Web Services",hide_title:!0},c="Setting up a backend on Amazon Web Services",l={unversionedId:"guides/deploy/setting-up-backend-on-aws",id:"guides/deploy/setting-up-backend-on-aws",title:"Setting up a backend on Amazon Web Services",description:"This guide will cover how to start up a Noodl backend on AWS using the Noodl backend docker image. You will need an AWS account setup. The service you will be using is called App Runner. Start by going to the console for that service.",source:"@site/docs/guides/deploy/setting-up-backend-on-aws.md",sourceDirName:"guides/deploy",slug:"/guides/deploy/setting-up-backend-on-aws",permalink:"/2.7/docs/guides/deploy/setting-up-backend-on-aws",tags:[],version:"current",frontMatter:{title:"Setting up a backend on Amazon Web Services",hide_title:!0}},u={},d=[],p={toc:d};function g(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-a-backend-on-amazon-web-services"},"Setting up a backend on Amazon Web Services"),(0,r.kt)("p",null,"This guide will cover how to start up a Noodl backend on AWS using the Noodl backend docker image. You will need an AWS account setup. The service you will be using is called ",(0,r.kt)("strong",{parentName:"p"},"App Runner"),". Start by going to the console for that service."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(75314).Z,width:"2244",height:"494"}))),(0,r.kt)("p",null,"There you can create a new service."),(0,r.kt)("div",{className:"ndl-image-with-background m"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(52846).Z,width:"572",height:"258"}))),(0,r.kt)("p",null,"When setting up the new service you need to specify that the image is to be fetched from the container registry."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(76022).Z,width:"1672",height:"436"}))),(0,r.kt)("p",null,"The image URL to use is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"public.ecr.aws/c2b0t2d7/noodl-cloud-services:latest\n")),(0,r.kt)("p",null,"You can choose if you want to manually control when you redeploy and instance. This is needed if the Noodl backend image is updated and you want to apply the updates to your service. You can also choose to automatically track changes. When you are done click ",(0,r.kt)("strong",{parentName:"p"},"Next"),"."),(0,r.kt)("p",null,"On the next screen you provide a ",(0,r.kt)("strong",{parentName:"p"},"name")," for your service and you can change settings for service. For the most part you can keep the standard settings but a few needs to be changed."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Port")," The port of the application needs to be set to ",(0,r.kt)("strong",{parentName:"li"},"3000"))),(0,r.kt)("p",null,"You also need to provide a few environment variables to the instance. You do this using the ",(0,r.kt)("strong",{parentName:"p"},"Add environment variable")," button."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9233).Z,width:"1728",height:"362"}))),(0,r.kt)("p",null,"The following variables are needed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"APP_ID")," You can choose this yourself, you need to provide it in the Noodl editor when connecting to your backend."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MASTER_KEY")," This you be a password that you need to keep safe. With this password you get full access to your backend, this is also needed to connect to your backend from Noodl."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DATABASE_URI")," This is the database url that you got when setting up the MongoDB database in the previous step. This can also be a Postgres url.")),(0,r.kt)("p",null,"With that in place you can move on to reviewing your settings and deploying your service. It might take a few minutes to completely setup you new service."),(0,r.kt)("p",null,"Once the service is up and running the last step is to find the URL of the service. You can find it by navigating to the service details page.  It will look something like this:"),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(87218).Z,width:"754",height:"130"}))),(0,r.kt)("p",null,"With that URL, master key and app id in hand, ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/deploy/using-an-external-backend#connect-your-application-to-the-self-hosted-backend"},"go back")," to the self hosting guide."))}g.isMDXComponent=!0},75314:function(e,t,n){t.Z=n.p+"assets/images/aws-1-8949fc9b7f490e2a5247039284a10f62.png"},52846:function(e,t,n){t.Z=n.p+"assets/images/aws-2-2ad2dcf6c03e4439d104dc98a2b170ee.png"},76022:function(e,t,n){t.Z=n.p+"assets/images/aws-3-ff364bcf34062c146311563c6a7dd01d.png"},9233:function(e,t,n){t.Z=n.p+"assets/images/aws-4-bdce302340780c79233e16d52f82ad75.png"},87218:function(e,t,n){t.Z=n.p+"assets/images/aws-5-977168d6f5a295ac5b3b8bf9f001c73e.png"}}]);