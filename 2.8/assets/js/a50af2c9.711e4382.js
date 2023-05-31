"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[6092],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>y});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(o),m=a,y=p["".concat(d,".").concat(m)]||p[m]||c[m]||i;return o?n.createElement(y,r(r({ref:t},u),{},{components:o})):n.createElement(y,r({ref:t},u))}));function y(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=o[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},92196:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=o(87462),a=(o(67294),o(3905));const i={title:"Deploying to Custom Domain",hide_title:!0},r="Deploying to your custom domain",l={unversionedId:"guides/deploy/deploying-to-custom-domain",id:"guides/deploy/deploying-to-custom-domain",title:"Deploying to Custom Domain",description:"What you will learn in this guide",source:"@site/docs/guides/deploy/deploying-to-custom-domain.md",sourceDirName:"guides/deploy",slug:"/guides/deploy/deploying-to-custom-domain",permalink:"/2.8/docs/guides/deploy/deploying-to-custom-domain",draft:!1,tags:[],version:"current",frontMatter:{title:"Deploying to Custom Domain",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Deploy an App on the Sandbox domain",permalink:"/2.8/docs/guides/deploy/deploying-an-app-on-sandbox"},next:{title:"Using a self hosted backend",permalink:"/2.8/docs/guides/deploy/using-an-external-backend"}},d={},s=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"Acquiring your domain",id:"acquiring-your-domain",level:2},{value:"Deploying to you domain",id:"deploying-to-you-domain",level:2},{value:"Managing your custom deployments",id:"managing-your-custom-deployments",level:2}],u={toc:s},p="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploying-to-your-custom-domain"},"Deploying to your custom domain"),(0,a.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,a.kt)("p",null,"This guide will take you through the steps needed for deploying a Noodl app to your own custom domain. Note that the app is still hosted by Noodl, but you let your custom domain point to the app. If you want to host the backend and frontend yourself check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/deploy/using-an-external-backend"},"Using a self hosted backend")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/deploy/hosting-frontend"},"Hosting Frontend"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"To be able to follow this guide you must have custom domain feature enabled. This is not available in the free Noodl plan. But you can request a trial ",(0,a.kt)("a",{parentName:"p",href:"https://noodl.net/plans"},"here"),".")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The guide walks you through the following topics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Acquiring a domain"),(0,a.kt)("li",{parentName:"ul"},"Deploying to your acquired custom domain"),(0,a.kt)("li",{parentName:"ul"},"Managing your custom domain deployments")),(0,a.kt)("p",null,"You can also check out the video below that walks through all deployment options in Noodl, including deploying to a Custom Domain:"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/M97-89RiboE",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,a.kt)("h2",{id:"acquiring-your-domain"},"Acquiring your domain"),(0,a.kt)("p",null,"The first thing you need to do is to acquire the domain, i.e. purchase it from a domain provider if you don't have it already. There are many different places where you can acquire a domain and they all work a little differently. The important thing is that you need to be able to configure the DNS records and especially set a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/CNAME_record"},"CNAME")," record. You will need this later."),(0,a.kt)("h2",{id:"deploying-to-you-domain"},"Deploying to you domain"),(0,a.kt)("p",null,"Once you have acquired the domain, click the ",(0,a.kt)("strong",{parentName:"p"},"Deploy application")," icon in the top right corner."),(0,a.kt)("div",{className:"ndl-image-with-background s"},(0,a.kt)("p",null,(0,a.kt)("img",{src:o(9516).Z,width:"426",height:"136"}))),(0,a.kt)("p",null,"Then select the ",(0,a.kt)("strong",{parentName:"p"},"Custom Domains")," tab."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:o(50154).Z,width:"830",height:"496"}))),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"Manage Domains"),". This allows you to add a new custom domain."),(0,a.kt)("div",{className:"ndl-image-with-background xl"},(0,a.kt)("p",null,(0,a.kt)("img",{src:o(44186).Z,width:"1233",height:"489"}))),(0,a.kt)("p",null,"Enter the name of the domain you want to deploy to, including the subdomain. Note that Noodl does not support naked domains (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"mydomain.com"),") so you will have to add a subdomain, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"www."),".\nClick ",(0,a.kt)("strong",{parentName:"p"},"Add Domain"),". Noodl will now try to connect to the domain which will always fail the first time. You need to set up a CNAME record in the DNS on your domain providers side that matches Noodl."),(0,a.kt)("p",null,"Copy the value in the ",(0,a.kt)("strong",{parentName:"p"},"Value")," box (",(0,a.kt)("inlineCode",{parentName:"p"},"proxy-ssl.noodl.cloud"),"). You will need to provide when you create the CNAME record on the domain side."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:o(16202).Z,width:"2071",height:"1153"}))),(0,a.kt)("p",null,'Create the CNAME record in the DNS at your domain provider. Once that\'s done, click "Verify Connection" to see if Noodl can coonect.'),(0,a.kt)("p",null,"?> Note that it could take some time - up to several hours - for your domain provider to propertly update the DNS records so if Noodl cannot verify the domain, try again in a few minutes or hours."),(0,a.kt)("p",null,"Once the domain has been verified you will see the green ",(0,a.kt)("strong",{parentName:"p"},"Connected")," text."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:o(51742).Z,width:"2311",height:"1039"}))),(0,a.kt)("p",null,"Now your domain is available to deploy to. So close the ",(0,a.kt)("strong",{parentName:"p"},"Manage Domains")," popup."),(0,a.kt)("p",null,"You can now choose your newly added domain as a target. Make sure to also pick the backend you want to use in the deploy."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:o(2524).Z,width:"1551",height:"1534"}))),(0,a.kt)("p",null,"Press ",(0,a.kt)("strong",{parentName:"p"},"Create Deploy")," and your new deployment is ready."),(0,a.kt)("h2",{id:"managing-your-custom-deployments"},"Managing your custom deployments"),(0,a.kt)("p",null,"Once you have added your custom domain and deployed to it you can updated it whenever you like, delete it or update which backend it uses."))}c.isMDXComponent=!0},44186:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/custom-domains-2-23856b729ef6d32f9cae23bfad0ba397.png"},16202:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/custom-domains-3-be8270c5c8b123941ab8bb50c7375637.png"},51742:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/custom-domains-4-551343a3bd52e32c7673d08af4051a8b.png"},2524:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/custom-domains-5-18d7ca4d6dc1be671e085d1ab061ff18.png"},50154:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/custom-domains-d8bd6d3bc0691a4d981cb734715d22a2.png"},9516:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/deploy-button-d6d986259effda011716733acb0e8e1e.png"}}]);