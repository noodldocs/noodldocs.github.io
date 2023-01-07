"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[4200],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2458:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=["components"],s={title:"Setting up a backend on Amazon Web Services",hide_title:!0},l="Setting up a backend on Amazon Web Services",u={unversionedId:"guides/deploy/setting-up-backend-on-aws",id:"guides/deploy/setting-up-backend-on-aws",title:"Setting up a backend on Amazon Web Services",description:"This guide will cover how to start up a Noodl backend on AWS using the Noodl backend docker image. You will need an AWS account setup. The service you will be using is called App Runner. Start by going to the console for that service.",source:"@site/docs/guides/deploy/setting-up-backend-on-aws.md",sourceDirName:"guides/deploy",slug:"/guides/deploy/setting-up-backend-on-aws",permalink:"/2.8/docs/guides/deploy/setting-up-backend-on-aws",tags:[],version:"current",frontMatter:{title:"Setting up a backend on Amazon Web Services",hide_title:!0}},c={},p=[],d={toc:p};function h(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-a-backend-on-amazon-web-services"},"Setting up a backend on Amazon Web Services"),(0,r.kt)("p",null,"This guide will cover how to start up a Noodl backend on AWS using the Noodl backend docker image. You will need an AWS account setup. The service you will be using is called ",(0,r.kt)("strong",{parentName:"p"},"App Runner"),". Start by going to the console for that service."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(93937).Z,width:"2244",height:"494"}))),(0,r.kt)("p",null,"There you can create a new service."),(0,r.kt)("div",{className:"ndl-image-with-background m"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(11369).Z,width:"572",height:"258"}))),(0,r.kt)("p",null,"When setting up the new service you need to specify that the image is to be fetched from the container registry."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(85147).Z,width:"1672",height:"436"}))),(0,r.kt)("p",null,"The image URL to use is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"public.ecr.aws/noodl/noodl-self-hosted-cloud-services:latest\n")),(0,r.kt)("p",null,"You can choose if you want to manually control when you redeploy and instance. This is needed if the Noodl backend image is updated and you want to apply the updates to your service. You can also choose to automatically track changes. When you are done click ",(0,r.kt)("strong",{parentName:"p"},"Next"),"."),(0,r.kt)("p",null,"On the next screen you provide a ",(0,r.kt)("strong",{parentName:"p"},"name")," for your service and you can change settings for service. For the most part you can keep the standard settings but a few needs to be changed."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Port")," The port of the application needs to be set to ",(0,r.kt)("strong",{parentName:"li"},"3000"))),(0,r.kt)("p",null,"You also need to provide a few environment variables to the instance. You do this using the ",(0,r.kt)("strong",{parentName:"p"},"Add environment variable")," button."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(92198).Z,width:"1728",height:"362"}))),(0,r.kt)("p",null,"The following variables are needed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"APP_ID")," You can choose this yourself, you need to provide it in the Noodl editor when connecting to your backend.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"MASTER_KEY")," This you be a password that you need to keep safe. With this password you get full access to your backend, this is also needed to connect to your backend from Noodl.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"DATABASE_URI")," This is the database url that you got when setting up the MongoDB database in the previous step. This can also be a Postgres url.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"PUBLIC_SERVER_URL")," (Optional) This is needed if you want to support file uploads and downloads, in that case you might need to go back here and update this environment variable after you have received the URL in the next step. This variable should be the public url where your clour services can be reached, starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"https://"),"."))),(0,r.kt)("p",null,"With that in place you can move on to reviewing your settings and deploying your service. It might take a few minutes to completely setup you new service."),(0,r.kt)("p",null,"Once the service is up and running the last step is to find the URL of the service. You can find it by navigating to the service details page.  It will look something like this:"),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(96980).Z,width:"754",height:"130"}))),(0,r.kt)("p",null,"With that URL, master key and app id in hand, ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/deploy/using-an-external-backend#connect-your-application-to-the-self-hosted-backend"},"go back")," to the self hosting guide."),(0,r.kt)("h1",{id:"file-storage"},"File storage"),(0,r.kt)("p",null,"If you want to support file upload and download, you need to specify the ",(0,r.kt)("strong",{parentName:"p"},"PUBLIC_SERVER_URL")," environment variable as noted above. By default the files will be stored in the database of your application, but if you instead want to use an S3 bucket for storage you need to create a bucket, and policy, you can find instructions on that ",(0,r.kt)("a",{parentName:"p",href:"http://docs.parseplatform.org/parse-server/guide/#configuring-s3adapter"},"here"),". Then specify these additional environment variables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S3_ACCESS_KEY"),"\tThe AWS access key for a user that has the required permissions. Required."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S3_SECRET_KEY"),"\tThe AWS secret key for the user. Required."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S3_BUCKET"),"\tThe name of your S3 bucket. Needs to be globally unique in all of S3. Required."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S3_REGION"),"\t(Optional) The AWS region to connect to. Default: \u2018us-east-1\u2019"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S3_BUCKET_PREFIX"),"\t(Optional)Create all the files with the specified prefix added to the filename. Can be used to put all the files for an app in a folder with \u2018folder/\u2019."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S3_DIRECT_ACCESS"),"\t(Optional)Whether reads are going directly to S3 or proxied through your Parse Server. If set to true, files will be made publicly accessible, and reads will not be proxied. Default: false")))}h.isMDXComponent=!0},93937:function(e,t,n){t.Z=n.p+"assets/images/aws-1-8949fc9b7f490e2a5247039284a10f62.png"},11369:function(e,t,n){t.Z=n.p+"assets/images/aws-2-2ad2dcf6c03e4439d104dc98a2b170ee.png"},85147:function(e,t,n){t.Z=n.p+"assets/images/aws-3-ff364bcf34062c146311563c6a7dd01d.png"},92198:function(e,t,n){t.Z=n.p+"assets/images/aws-4-bdce302340780c79233e16d52f82ad75.png"},96980:function(e,t,n){t.Z=n.p+"assets/images/aws-5-977168d6f5a295ac5b3b8bf9f001c73e.png"}}]);