"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[8371],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,h=u["".concat(s,".").concat(g)]||u[g]||d[g]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},24302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"Setting up a backend on Google Cloud Platform",hide_title:!0},i="Setting up a backend on Google Cloud Platform",l={unversionedId:"guides/deploy/setting-up-backend-on-gcp",id:"guides/deploy/setting-up-backend-on-gcp",title:"Setting up a backend on Google Cloud Platform",description:"This guide will cover how to start up a Noodl backend on GCP using the Noodl backend docker image. You will need a GCP account setup. The service you will be using is called Cloud Run. Start by going to the console for that service.",source:"@site/docs/guides/deploy/setting-up-backend-on-gcp.md",sourceDirName:"guides/deploy",slug:"/guides/deploy/setting-up-backend-on-gcp",permalink:"/2.8/docs/guides/deploy/setting-up-backend-on-gcp",draft:!1,tags:[],version:"current",frontMatter:{title:"Setting up a backend on Google Cloud Platform",hide_title:!0}},s={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-a-backend-on-google-cloud-platform"},"Setting up a backend on Google Cloud Platform"),(0,o.kt)("p",null,"This guide will cover how to start up a Noodl backend on GCP using the Noodl backend docker image. You will need a GCP account setup. The service you will be using is called ",(0,o.kt)("strong",{parentName:"p"},"Cloud Run"),". Start by going to the console for that service."),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(78386).Z,width:"644",height:"176"}))),(0,o.kt)("p",null,"There you can create a new service. Find the button ",(0,o.kt)("strong",{parentName:"p"},"Create Service")," at the top."),(0,o.kt)("p",null,"When setting up the new service you need provide the url to the Noodl backend docker image."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1617).Z,width:"1114",height:"200"}))),(0,o.kt)("p",null,"The image URL to use is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gcr.io/noodlapp/noodl-self-hosted-cloud-services:latest\n")),(0,o.kt)("p",null,"Another important setting is making sure that unauthenticated requests can be handled by your new service."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(27634).Z,width:"1112",height:"264"}))),(0,o.kt)("p",null,"For the most part you can keep the standard settings but a few needs to be changed. These can be found by expanding the ",(0,o.kt)("strong",{parentName:"p"},"Container, Connections, Security")," section."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Continer port")," The port of the application needs to be set to ",(0,o.kt)("strong",{parentName:"li"},"3000"))),(0,o.kt)("p",null,"You also need to provide a few environment variables to the instance. You do this using the ",(0,o.kt)("strong",{parentName:"p"},"+ Add Variable")," button."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(65065).Z,width:"1152",height:"370"}))),(0,o.kt)("p",null,"The following variables are needed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"APP_ID")," You can choose this yourself, you need to provide it in the Noodl editor when connecting to your backend.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"MASTER_KEY")," This you be a password that you need to keep safe. With this password you get full access to your backend, this is also needed to connect to your backend from Noodl.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"DATABASE_URI")," This is the database uri that you got when setting up the MongoDB database in the previous step. This can also be a Postgres uri.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"PUBLIC_SERVER_URL")," (Optional) This is needed if you want to support file uploads and downloads, in that case you might need to go back here and update this environment variable after you have received the URL in the next step. This variable should be the public url where your clour services can be reached, starting with ",(0,o.kt)("inlineCode",{parentName:"p"},"https://"),"."))),(0,o.kt)("p",null,"With that in place you can create your new service, hit the ",(0,o.kt)("strong",{parentName:"p"},"Create")," button."),(0,o.kt)("p",null,"Once the service is up and running the last step is to find the URL of the service. You can find it by navigating to the service details page. "),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6537).Z,width:"736",height:"106"}))),(0,o.kt)("p",null,"With that URL, master key and app id in hand, ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/deploy/using-an-external-backend#connect-your-application-to-the-self-hosted-backend"},"go back")," to the self hosting guide."),(0,o.kt)("h1",{id:"file-storage"},"File storage"),(0,o.kt)("p",null,"If you want to support file upload and download, you need to specify the ",(0,o.kt)("strong",{parentName:"p"},"PUBLIC_SERVER_URL")," environment variable as noted above. By default the files will be stored in the database of your application, but if you instead want to use a GCS bucket for storage you can provide the following environment variables."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GCP_PROJECT_ID")," The project ID from the Google Developer\u2019s Console. Required."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GCS_BUCKET")," The name of your GCS bucket. Required."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GCP_CLIENT_EMAIL")," The client email of the service account with permissions to the bucket."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GCP_PRIVATE_KEY")," The private key associated with the client email for the servive account with permissions to the bucket."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GCS_BUCKET_PREFIX"),"\t(Optional) Create all the files with the specified prefix added to the filename. Can be used to put all the files for an app in a folder with \u2018folder/\u2019."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GCS_DIRECT_ACCESS"),"\t(Optional) Whether reads are going directly to GCS or proxied through your Parse Server. Default: false")))}d.isMDXComponent=!0},78386:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gcp-1-2f15917cc5859b8dbda19db8f0f69e1d.png"},1617:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gcp-2-d9f2f744b891321907cb6b287b3dd1d5.png"},27634:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gcp-3-5e5bf9b376a1e0c18ac8c603e63fe092.png"},65065:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gcp-4-c6413201d801ff6062767ca6c7487d93.png"},6537:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gcp-5-a354a0f59e578a22ff96741bb9e59937.png"}}]);