"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[3444],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(a),h=n,k=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return a?o.createElement(k,s(s({ref:t},c),{},{components:a})):o.createElement(k,s({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var d=2;d<r;d++)s[d]=a[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},33183:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=a(87462),n=(a(67294),a(3905));const r={title:"Using a self hosted backend",hide_title:!0},s="Using a self hosted backend",i={unversionedId:"guides/deploy/using-an-external-backend",id:"guides/deploy/using-an-external-backend",title:"Using a self hosted backend",description:"What you will learn in this guide",source:"@site/docs/guides/deploy/using-an-external-backend.md",sourceDirName:"guides/deploy",slug:"/guides/deploy/using-an-external-backend",permalink:"/2.9/docs/guides/deploy/using-an-external-backend",draft:!1,tags:[],version:"current",frontMatter:{title:"Using a self hosted backend",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Deploying to Custom Domain",permalink:"/2.9/docs/guides/deploy/deploying-to-custom-domain"},next:{title:"Deploying to iOS and Android",permalink:"/2.9/docs/guides/deploy/deploying-to-ios-and-android"}},l={},d=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"The different parts of a Noodl App",id:"the-different-parts-of-a-noodl-app",level:2},{value:"The Database",id:"the-database",level:2},{value:"The backend service",id:"the-backend-service",level:2},{value:"Connect your application to the self hosted backend",id:"connect-your-application-to-the-self-hosted-backend",level:3},{value:"Migrating from a Noodl hosted cloud service",id:"migrating-from-a-noodl-hosted-cloud-service",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"using-a-self-hosted-backend"},"Using a self hosted backend"),(0,n.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,n.kt)("p",null,"This guide will let you create a self hosted backend with an external database. This is an alternative to using an ",(0,n.kt)("strong",{parentName:"p"},"Noodl Hosted Cloud Services"),". Some reasons why you might want to do this could be:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You want to host your own database, maybe to ensure where data is stored or other privacy reasons."),(0,n.kt)("li",{parentName:"ul"},"You want to host your own backend on a cloud service such as AWS or Google Cloud Platform.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Self Hosting"),(0,n.kt)("br",null),'Note: To be able to follow this guide you must have "Self Host" feature enabled. This is not available in the free Noodl plan. But you can request a trial ',(0,n.kt)("a",{parentName:"p",href:"https://noodl.net/plans"},"here"),".")),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"We will go through the follwing steps"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Set up a Database cluster on MongoDB Atlas (any MongoDB or Postgres database is supported)"),(0,n.kt)("li",{parentName:"ul"},"Spin up a container with the Noodl backend docker image."),(0,n.kt)("li",{parentName:"ul"},"Connect to the self hosted backend from your Noodl project.")),(0,n.kt)("h2",{id:"the-different-parts-of-a-noodl-app"},"The different parts of a Noodl App"),(0,n.kt)("p",null,"As a background it's good to know that a Noodl App consists of three parts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"The database")," All Noodl applications must be backed by a database, you can use either a MongoDB or Postgres compatible database. This is where users and other records are stored. Nodes like ",(0,n.kt)("strong",{parentName:"p"},"Query Records")," access the database via the backend web service.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"The backend service")," This is the Noodl backend service that is provided via a Docker image and an instance can be started on most cloud providers. The Noodl backend is based on and compatable with the ",(0,n.kt)("a",{parentName:"p",href:"https://parseplatform.org"},"Parse Platform")," which is a great choice for a backend service. A solid open source project with an active foundation supporting many of the critical functions needed.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Static frontend hosting")," Noodl applications are SPAs (Single Page Applications) and need a place that serves the application frontend created when you deploy your application from Noodl. You can use a ",(0,n.kt)("strong",{parentName:"p"},"Noodl hosted")," frontend, with a custom domain, together with a self hosted backend, or you can host the frontend yourself as well."))),(0,n.kt)("p",null,"This guide will look at setting up your own self hosted ",(0,n.kt)("strong",{parentName:"p"},"Database")," and ",(0,n.kt)("strong",{parentName:"p"},"Backend"),"."),(0,n.kt)("h2",{id:"the-database"},"The Database"),(0,n.kt)("p",null,"You can choose any MongoDB or Postgres compatible database, for this guide we recommend using ",(0,n.kt)("a",{parentName:"p",href:"https://www.mongodb.com/cloud/atlas"},"MongoDB Atlas")," as it provides a free tier and you can choose to host it on GCP, AWS or Azure. You should always try to host your database using the same cloud provider as the backend service and preferably in the same region."),(0,n.kt)("p",null,"It's also very easy to get stated. Follow the instructions to setup your account. Create a new database."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:a(90175).Z,width:"1240",height:"676"}))),(0,n.kt)("p",null,"You can start by choosing the free plan (you can always upgrade later) and then the cloud providerand region where you would like host your database. Next you will be shown the security section of the setup. This controls who can access your database, you don't need to create a user as there is an admin user by default, you can choose to limit the IP-adresses that can access your database but don't worry about that now (you can always edit this later), just click ",(0,n.kt)("strong",{parentName:"p"},"Finish and close"),"."),(0,n.kt)("p",null,"Once your database is up and running you need to get the connection details for the next step. First you need to obtain the password of the ",(0,n.kt)("strong",{parentName:"p"},"Admin")," user. You will find your database users under the ",(0,n.kt)("strong",{parentName:"p"},"Database Access")," section."),(0,n.kt)("div",{className:"ndl-image-with-background m"},(0,n.kt)("p",null,(0,n.kt)("img",{src:a(11221).Z,width:"370",height:"262"}))),(0,n.kt)("p",null,"Find the ",(0,n.kt)("strong",{parentName:"p"},"Admin")," user and clicked ",(0,n.kt)("strong",{parentName:"p"},"edit"),". Under the ",(0,n.kt)("strong",{parentName:"p"},"Password")," tab click ",(0,n.kt)("strong",{parentName:"p"},"Edit Password"),", generate a new password and copy it. Store it somewhere safe, you will need it for the next step. Don't forget to click ",(0,n.kt)("strong",{parentName:"p"},"Update user")," before moving on."),(0,n.kt)("p",null,"Now you need to find the connection URI. In your cluster dashboard choose ",(0,n.kt)("em",{parentName:"p"},"Connect"),"."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:a(23939).Z,width:"704",height:"202"}))),(0,n.kt)("p",null,"Followed by ",(0,n.kt)("strong",{parentName:"p"},"Connect to your application"),"."),(0,n.kt)("div",{className:"ndl-image-with-background xl"},(0,n.kt)("p",null,(0,n.kt)("img",{src:a(97323).Z,width:"1538",height:"202"}))),(0,n.kt)("p",null,"Make sure the version is ",(0,n.kt)("strong",{parentName:"p"},"3.6 or later"),"."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:a(94992).Z,width:"1022",height:"234"}))),(0,n.kt)("p",null,"Now you need to copy and keep the connection URI shown below. It will look something like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mongodb+srv://Admin:<password>@cluster0.xxxxxxx.mongodb.net/?retryWrites=true&w=majority\n")),(0,n.kt)("p",null,"You need to replace the ",(0,n.kt)("inlineCode",{parentName:"p"},"<password>")," with the ",(0,n.kt)("strong",{parentName:"p"},"Admin")," password you generated before. Also, insert the name of your database in the url, you can pick any name, let's call it ",(0,n.kt)("inlineCode",{parentName:"p"},"noodldb"),", your final URL should look something like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mongodb+srv://Admin:<password>@cluster0.xxxxxxx.mongodb.net/noodldb?retryWrites=true&w=majority\n")),(0,n.kt)("p",null,"Keep this URI safe as it will have full access to your database."),(0,n.kt)("h2",{id:"the-backend-service"},"The backend service"),(0,n.kt)("p",null,"Next up we will deploy an instance of the Noodl backend service that we will point our application to. We provide guides for setting up Noodl on Amazon Web Services or Google Cloud Platform, follow the links below and set up the container. When you are ready you can proceed to the ",(0,n.kt)("strong",{parentName:"p"},"Connect your application to the self hosted backend")," below."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Setting up a backend on AWS")," Make sure you have an AWS account created and then follow ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides/deploy/setting-up-backend-on-aws"},"this guide"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Setting up a backend on GCP")," Make sure you have account on Google Cloud Platform created and then follow ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides/deploy/setting-up-backend-on-gcp"},"this guide"),"."))),(0,n.kt)("h3",{id:"connect-your-application-to-the-self-hosted-backend"},"Connect your application to the self hosted backend"),(0,n.kt)("p",null,'You can now connect to your new self hosted backend from your Noodl application. Open your project. Find the "Cloud Services" icon in the sidebar.'),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:a(82957).Z,width:"682",height:"210"}))),(0,n.kt)("p",null,"Find the plus icon at the top to create a new cloud service."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:a(240).Z,width:"682",height:"172"}))),(0,n.kt)("p",null,"Create a new cloud service. Make sure the ",(0,n.kt)("strong",{parentName:"p"},"Self Hosted")," checkbox is checked:"),(0,n.kt)("div",{className:"ndl-image-with-background xl"},(0,n.kt)("p",null,(0,n.kt)("img",{src:a(5399).Z,width:"1664",height:"1340"}))),(0,n.kt)("p",null,"Fill out the information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Name")," - Any name you want. This will be the name of the backend in the list of backends."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description")," - Some descriptive text of the backend."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Endpoint")," - This is the url to the backend service you have created in the previous step."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Application id")," - This is the application id that you provided when setting up the backend service in the previous step. It's simply and identifier of your own choosing."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Masterkey")," - This is the master key to the backend service you created in the previous step. It is needed by the editor to access the database for the dashboard, query nodes etc. This is stored locally and encrypted. You need to keep this safe as with it you have full access to your backend and database.")),(0,n.kt)("p",null,"You can make some quick tests, for example opening the ",(0,n.kt)("strong",{parentName:"p"},"Dashboard")," and create a ",(0,n.kt)("strong",{parentName:"p"},"Class")," to see that it works. That's it, now you have a self hosted Noodl cloud services up and running."),(0,n.kt)("h2",{id:"migrating-from-a-noodl-hosted-cloud-service"},"Migrating from a Noodl hosted cloud service"),(0,n.kt)("p",null,"If you are migrating from a Noodl hosted cloud service we can provide you with a database dump that you can use to restore your new database to, ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@noodl.net"},"email support to request"),". Once you have the backup file you need to install the MongoDB database tools, you can find instructions ",(0,n.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/database-tools/installation/installation/"},"here"),"."),(0,n.kt)("p",null,"Then you will use the following command to migrate your data:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'$ mongorestore --gzip --archive="path-to-backup-file" --uri="the-uri-to-your-mongodb-from-above"\n')))}u.isMDXComponent=!0},90175:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/atlas-1-9be5ceafa34a4e6662e13751ff195df4.png"},23939:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/atlas-2-3545d537771198ff52731420230f2dd5.png"},11221:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/atlas-3-1c18b80831362e44275be2e16f7acffa.png"},97323:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/atlas-4-56a08f6e59944dcee3efa1117cc74984.png"},94992:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/atlas-5-e7cc51c4330a118c6677f763b7b32d62.png"},240:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/cloud-services-2-f42858869fa4b077b601e064c487675a.png"},82957:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/cloud-services-7d1c63e1ebc162a29b2cd4eb52397757.png"},5399:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/noodl-external-backend-94aa38242b56f24f52f778ad0c329b89.png"}}]);