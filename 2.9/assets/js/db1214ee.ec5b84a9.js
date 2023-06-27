"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[4560],{3905:function(e,n,o){o.d(n,{Zo:function(){return u},kt:function(){return y}});var t=o(67294);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=t.createContext({}),d=function(e){var n=t.useContext(p),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},u=function(e){var n=d(e.components);return t.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(o),y=a,m=c["".concat(p,".").concat(y)]||c[y]||s[y]||i;return o?t.createElement(m,r(r({ref:n},u),{},{components:o})):t.createElement(m,r({ref:n},u))}));function y(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=o[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}c.displayName="MDXCreateElement"},76867:function(e,n,o){o.r(n),o.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var t=o(83117),a=o(80102),i=(o(67294),o(3905)),r=["components"],l={title:"Deploy an App on the Sandbox domain",hide_title:!0},p="Deploy an App to the Sandbox domain, `*.sandbox.noodl.app`",d={unversionedId:"guides/deploy/deploying-an-app-on-sandbox",id:"guides/deploy/deploying-an-app-on-sandbox",title:"Deploy an App on the Sandbox domain",description:"What you will learn in this guide",source:"@site/docs/guides/deploy/deploying-an-app-on-sandbox.md",sourceDirName:"guides/deploy",slug:"/guides/deploy/deploying-an-app-on-sandbox",permalink:"/2.9/docs/guides/deploy/deploying-an-app-on-sandbox",tags:[],version:"current",frontMatter:{title:"Deploy an App on the Sandbox domain",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Version control",permalink:"/2.9/docs/guides/collaboration/version-control"},next:{title:"Deploying to Custom Domain",permalink:"/2.9/docs/guides/deploy/deploying-to-custom-domain"}},u={},s=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"Doing a Sandbox Deployment",id:"doing-a-sandbox-deployment",level:2},{value:"Managing your Sandbox Deployments",id:"managing-your-sandbox-deployments",level:2}],c={toc:s};function y(e){var n=e.components,l=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,t.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploy-an-app-to-the-sandbox-domain-sandboxnoodlapp"},"Deploy an App to the Sandbox domain, ",(0,i.kt)("inlineCode",{parentName:"h1"},"*.sandbox.noodl.app")),(0,i.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,i.kt)("p",null,"This guide will teach you how to deploy a Noodl App to the Noodl Sandbox, i.e the ",(0,i.kt)("inlineCode",{parentName:"p"},"sandbox.noodl.app")," domain.\nYou can use this to share your Noodl App with other people."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"There are multiple ways for you to deploy Noodl Apps so other people can use them. The easiest one is to use the Noodl Sandbox deployment. The your app will get a public URL that ends with ",(0,i.kt)("inlineCode",{parentName:"p"},".sandbox.noodl.app"),"."),(0,i.kt)("p",null,"The video below walks through all deployment options in Noodl, including Sandbox deploys:"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/M97-89RiboE",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("h2",{id:"doing-a-sandbox-deployment"},"Doing a Sandbox Deployment"),(0,i.kt)("p",null,"Open the project you want to deploy. Then click the ",(0,i.kt)("strong",{parentName:"p"},"Deploy")," button on the top right."),(0,i.kt)("div",{className:"ndl-image-with-background s"},(0,i.kt)("p",null,(0,i.kt)("img",{src:o(43325).Z,width:"426",height:"136"}))),(0,i.kt)("p",null,"In the popup that opens, you can select a subdomain name. Your URL will become ",(0,i.kt)("inlineCode",{parentName:"p"},"<subdomain>.noodl.app"),". Note that some subdomains may be taken by other users, so be ready to come up with a unique name if that's the case."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:o(12429).Z,width:"838",height:"1002"}))),(0,i.kt)("h2",{id:"managing-your-sandbox-deployments"},"Managing your Sandbox Deployments"),(0,i.kt)("p",null,"Once you have deployed your app they will be available in the list of Sandbox Deployments."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:o(5629).Z,width:"600",height:"801"}))),(0,i.kt)("p",null,"You can select any of the sandbox deploys and change which backend to use or to ",(0,i.kt)("strong",{parentName:"p"},"Delete")," the deploys."))}y.isMDXComponent=!0},43325:function(e,n,o){n.Z=o.p+"assets/images/deploy-button-d6d986259effda011716733acb0e8e1e.png"},5629:function(e,n,o){n.Z=o.p+"assets/images/manage-deploys-6bfe576432f5507adb92f4c03b00d7b2.png"},12429:function(e,n,o){n.Z=o.p+"assets/images/noodl-deploy-to-noodl-app-domain-4a4be9d1ab8da10cf4f9fb6765c0a690.png"}}]);