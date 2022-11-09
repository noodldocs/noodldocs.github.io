"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[4560],{3905:function(e,n,o){o.d(n,{Zo:function(){return u},kt:function(){return y}});var t=o(67294);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=t.createContext({}),d=function(e){var n=t.useContext(p),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},u=function(e){var n=d(e.components);return t.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(o),y=a,m=s["".concat(p,".").concat(y)]||s[y]||c[y]||i;return o?t.createElement(m,r(r({ref:n},u),{},{components:o})):t.createElement(m,r({ref:n},u))}));function y(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=o[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}s.displayName="MDXCreateElement"},76867:function(e,n,o){o.r(n),o.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var t=o(83117),a=o(80102),i=(o(67294),o(3905)),r=["components"],l={title:"Deploy an App on the Sandbox domain",hide_title:!0},p="Deploy an App to the Sandbox domain, `*.sandbox.noodl.app`",d={unversionedId:"guides/deploy/deploying-an-app-on-sandbox",id:"guides/deploy/deploying-an-app-on-sandbox",title:"Deploy an App on the Sandbox domain",description:"What you will learn in this guide",source:"@site/docs/guides/deploy/deploying-an-app-on-sandbox.md",sourceDirName:"guides/deploy",slug:"/guides/deploy/deploying-an-app-on-sandbox",permalink:"/2.8/docs/guides/deploy/deploying-an-app-on-sandbox",tags:[],version:"current",frontMatter:{title:"Deploy an App on the Sandbox domain",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Version control",permalink:"/2.8/docs/guides/collaboration/version-control"},next:{title:"Deploying to Custom Domain",permalink:"/2.8/docs/guides/deploy/deploying-to-custom-domain"}},u={},c=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"Doing a Sandbox Deployment",id:"doing-a-sandbox-deployment",level:2},{value:"Managing your Sandbox Deployments",id:"managing-your-sandbox-deployments",level:2}],s={toc:c};function y(e){var n=e.components,l=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,t.Z)({},s,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploy-an-app-to-the-sandbox-domain-sandboxnoodlapp"},"Deploy an App to the Sandbox domain, ",(0,i.kt)("inlineCode",{parentName:"h1"},"*.sandbox.noodl.app")),(0,i.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,i.kt)("p",null,"This guide will teach you how to deploy a Noodl App to the Noodl Sandbox, i.e the ",(0,i.kt)("inlineCode",{parentName:"p"},"sandbox.noodl.app")," domain.\nYou can use this to share your Noodl App with other people."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"There are multiple ways for you to deploy Noodl Apps so other people can use them. The easiest one is to use the Noodl Sandbox deployment. The your app will get a public URL that ends with ",(0,i.kt)("inlineCode",{parentName:"p"},".sandbox.noodl.app"),"."),(0,i.kt)("p",null,"The video below walks through all deployment options in Noodl, including Sandbox deploys:"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/M97-89RiboE",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("h2",{id:"doing-a-sandbox-deployment"},"Doing a Sandbox Deployment"),(0,i.kt)("p",null,"Open the project you want to deploy. Then click the ",(0,i.kt)("strong",{parentName:"p"},"Deploy")," button on the top right."),(0,i.kt)("div",{className:"ndl-image-with-background s"},(0,i.kt)("p",null,(0,i.kt)("img",{src:o(99171).Z,width:"223",height:"153"}))),(0,i.kt)("p",null,"In the popup that opens, you can select a subdomain name. Your URL will become ",(0,i.kt)("inlineCode",{parentName:"p"},"<subdomain>.noodl.app"),". Note that some subdomains may be taken by other users, so be ready to come up with a unique name if that's the case."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:o(22103).Z,width:"597",height:"652"}))),(0,i.kt)("h2",{id:"managing-your-sandbox-deployments"},"Managing your Sandbox Deployments"),(0,i.kt)("p",null,"Once you have deployed your app they will be available in the list of Sandbox Deployments."),(0,i.kt)("div",{className:"ndl-image-with-background m"},(0,i.kt)("p",null,(0,i.kt)("img",{src:o(34775).Z,width:"600",height:"801"}))),(0,i.kt)("p",null,"You can select any of the sandbox deploys and change which backend to use or to ",(0,i.kt)("strong",{parentName:"p"},"Delete")," the deploys."))}y.isMDXComponent=!0},99171:function(e,n){n.Z="data:image/png;base64,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"},34775:function(e,n,o){n.Z=o.p+"assets/images/manage-deploys-6bfe576432f5507adb92f4c03b00d7b2.png"},22103:function(e,n,o){n.Z=o.p+"assets/images/noodl-deploy-to-noodl-app-domain-d2812e0a9d2f5a14eb4797f0c849666d.png"}}]);