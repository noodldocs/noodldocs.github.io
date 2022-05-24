"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[6092],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=o.createContext({}),u=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,y=p["".concat(d,".").concat(m)]||p[m]||s[m]||a;return n?o.createElement(y,r(r({ref:t},c),{},{components:n})):o.createElement(y,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},92196:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var o=n(83117),i=n(80102),a=(n(67294),n(3905)),r=["components"],l={title:"Deploying to Custom Domain",hide_title:!0},d=void 0,u={unversionedId:"guides/deploy/deploying-to-custom-domain",id:"guides/deploy/deploying-to-custom-domain",title:"Deploying to Custom Domain",description:"What you will learn in this guide",source:"@site/docs/guides/deploy/deploying-to-custom-domain.md",sourceDirName:"guides/deploy",slug:"/guides/deploy/deploying-to-custom-domain",permalink:"/2.6/docs/guides/deploy/deploying-to-custom-domain",tags:[],version:"current",frontMatter:{title:"Deploying to Custom Domain",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Deploy an App on the Sandbox domain",permalink:"/2.6/docs/guides/deploy/deploying-an-app-on-sandbox"},next:{title:"Using an External Backend",permalink:"/2.6/docs/guides/deploy/using-an-external-backend"}},c={},s=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"Acquiring your domain",id:"acquiring-your-domain",level:2},{value:"Deploying to you domain",id:"deploying-to-you-domain",level:2},{value:"Managing your custom deployments",id:"managing-your-custom-deployments",level:2}],p={toc:s};function m(e){var t=e.components,l=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploying-to-your-custom-domain"},"Deploying to your custom domain"),(0,a.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,a.kt)("p",null,"This guide will take you through the steps needed for deploying a Noodl app to your own custom domain. Note that the app is still hosted by Noodl, but you let your custom domain point to the app. If you want to host the backend and frontend yourself check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/deploy/using-an-external-backend"},"Using External Backend")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/deploy/hosting-frontend"},"Hosting Frontend"),"."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The guide walks you through the following topics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Acquiring a domain"),(0,a.kt)("li",{parentName:"ul"},"Deploying to your acquired custom domain"),(0,a.kt)("li",{parentName:"ul"},"Managing your custom domain deployments")),(0,a.kt)("p",null,"You can also check out the video below that walks through all deployment options in Noodl, including deploying to a Custom Domain:"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/M97-89RiboE",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,a.kt)("h2",{id:"acquiring-your-domain"},"Acquiring your domain"),(0,a.kt)("p",null,"The first thing you need to do is to acquire the domain, i.e. purchase it from a domain provider if you don't have it already. There are many different places where you can acquire a domain and they all work a little differently. The important thing is that you need to be able to configure the DNS records and especially set a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/CNAME_record"},"CNAME")," record. You will need this later."),(0,a.kt)("h2",{id:"deploying-to-you-domain"},"Deploying to you domain"),(0,a.kt)("p",null,"Once you have acquired the domain, click the ",(0,a.kt)("strong",{parentName:"p"},"Deploy application")," icon in the top right corner."),(0,a.kt)("div",{className:"ndl-image-with-background s"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9516).Z,width:"223",height:"153"}))),(0,a.kt)("p",null,"Then select the ",(0,a.kt)("strong",{parentName:"p"},"Custom Domains")," tab."),(0,a.kt)("div",{className:"ndl-image-with-background"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(50154).Z,width:"619",height:"301"}))),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"Manage Domains"),". This allows you to add a new custom domain."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(44186).Z,width:"1233",height:"489"}))),(0,a.kt)("p",null,"Enter the name of the domain you want to deploy to, including the subdomain. Note that Noodl does not support naked domains (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"mydomain.com"),") so you will have to add a subdomain, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"www."),".\nClick ",(0,a.kt)("strong",{parentName:"p"},"Add Domain"),". Noodl will now try to connect to the domain which will always fail the first time. You need to set up a CNAME record in the DNS on your domain providers side that matches Noodl."),(0,a.kt)("p",null,"Copy the value in the ",(0,a.kt)("strong",{parentName:"p"},"Value")," box (",(0,a.kt)("inlineCode",{parentName:"p"},"proxy-ssl.noodl.cloud"),"). You will need to provide when you create the CNAME record on the domain side."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(16202).Z,width:"2071",height:"1153"}))),(0,a.kt)("p",null,'Create the CNAME record in the DNS at your domain provider. Once that\'s done, click "Verify Connection" to see if Noodl can coonect.'),(0,a.kt)("p",null,"?> Note that it could take some time - up to several hours - for your domain provider to propertly update the DNS records so if Noodl cannot verify the domain, try again in a few minutes or hours."),(0,a.kt)("p",null,"Once the domain has been verified you will see the green ",(0,a.kt)("strong",{parentName:"p"},"Connected")," text."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(51742).Z,width:"2311",height:"1039"}))),(0,a.kt)("p",null,"Now your domain is available to deploy to. So close the ",(0,a.kt)("strong",{parentName:"p"},"Manage Domains")," popup."),(0,a.kt)("p",null,"You can now choose your newly added domain as a target. Make sure to also pick the backend you want to use in the deploy."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2524).Z,width:"1551",height:"1534"}))),(0,a.kt)("p",null,"Press ",(0,a.kt)("strong",{parentName:"p"},"Create Deploy")," and your new deployment is ready."),(0,a.kt)("h2",{id:"managing-your-custom-deployments"},"Managing your custom deployments"),(0,a.kt)("p",null,"Once you have added your custom domain and deployed to it you can updated it whenever you like, delete it or update which backend it uses."))}m.isMDXComponent=!0},44186:function(e,t,n){t.Z=n.p+"assets/images/custom-domains-2-23856b729ef6d32f9cae23bfad0ba397.png"},16202:function(e,t,n){t.Z=n.p+"assets/images/custom-domains-3-be8270c5c8b123941ab8bb50c7375637.png"},51742:function(e,t,n){t.Z=n.p+"assets/images/custom-domains-4-551343a3bd52e32c7673d08af4051a8b.png"},2524:function(e,t,n){t.Z=n.p+"assets/images/custom-domains-5-18d7ca4d6dc1be671e085d1ab061ff18.png"},50154:function(e,t,n){t.Z=n.p+"assets/images/custom-domains-680b913d01aedf87847ee34de3f8c1be.png"},9516:function(e,t){t.Z="data:image/png;base64,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"}}]);