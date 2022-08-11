"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[5079],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),s=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,h=m["".concat(d,".").concat(u)]||m[u]||p[u]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8119:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),i=["components"],l={title:"Deploying as a micro frontend",hide_title:!0},d=void 0,s={unversionedId:"guides/deploy/micro-frontend",id:"guides/deploy/micro-frontend",title:"Deploying as a micro frontend",description:"This is a preview guide and not yet generally available. Please reach out to the Noodl team at info@noodl.net if you want to give it a spin.",source:"@site/docs/guides/deploy/micro-frontend.md",sourceDirName:"guides/deploy",slug:"/guides/deploy/micro-frontend",permalink:"/2.6/docs/guides/deploy/micro-frontend",tags:[],version:"current",frontMatter:{title:"Deploying as a micro frontend",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Self Hosting your Noodl frontend",permalink:"/2.6/docs/guides/deploy/hosting-frontend"},next:{title:"overview",permalink:"/2.6/docs/build-alongs/overview"}},c={},p=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"IFrame",id:"iframe",level:2},{value:"Using Noodl embed toolkit",id:"using-noodl-embed-toolkit",level:2},{value:"Moving to production",id:"moving-to-production",level:2}],m={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This is a preview guide and not yet generally available. Please reach out to the Noodl team at ",(0,r.kt)("a",{parentName:"p",href:"mailto:info@noodl.net"},"info@noodl.net")," if you want to give it a spin."))),(0,r.kt)("h1",{id:"deploying-as-a-micro-frontend"},"Deploying as a micro frontend"),(0,r.kt)("p",null,"Micro frontends is an architecture that divides a classic monolithic SPA (Single Page Application) into smaller pieces that are decoupled from each other. Each micro frontend is developed by a different team and the decoupling enables each team to choose their frameworks and the development, testing and deploy methods that works best for them. This approach is meant to accelerate the iteration speed for each team by reducing dependencies that slow down release cycles. Another great advantage is that high performance teams of designers and developers working together using a tool like Noodl can coexist with traditional development teams or legacy technology stacks. You can read more about it ",(0,r.kt)("a",{parentName:"p",href:"https://www.noodl.net/post/what-are-micro-frontends-and-why-would-you-use-them"},"here"),"."),(0,r.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,r.kt)("p",null,"In this guide you will learn how to embed your Noodl deploys as micro frontends in an existing container application. There are generally two methods for how to do this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using an ",(0,r.kt)("strong",{parentName:"li"},"IFrame")," for maximum isolation."),(0,r.kt)("li",{parentName:"ul"},"Using the Noodl embed toolkit.")),(0,r.kt)("h2",{id:"iframe"},"IFrame"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"IFrame")," is an easy choice with some advantages and some disadvantages. The main advantage is that it is isolated from the rest of the application and other micro frontends. The main disadvantage (besides some generally feeling that IFrames are iffy) is that there is a noticable load and render time that you need to do some work to hide, also there might be some challenges with responsiveness. The implementation is straight forward:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<iframe src="https://my-micro-frontend-app.sandbox.noodl.app"></iframe>\n')),(0,r.kt)("p",null,"You can also use the ",(0,r.kt)("strong",{parentName:"p"},"IFrame")," in development mode, simply pointing it to the Noodl editor. This will allow you to view your Noodl micro frontend app in the container application while editing in real time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<iframe src="http://localhost:8574"></iframe>\n')),(0,r.kt)("p",null,"This technique is more limited in terms of how you communicate with your Noodl micro frontend as the Noodl APIs are hidden within the IFrame and you need to build a messaging system. Therefor we generally recommend using the Noodl embed toolkit."),(0,r.kt)("h2",{id:"using-noodl-embed-toolkit"},"Using Noodl embed toolkit"),(0,r.kt)("p",null,"This is the recommended approach for loading a Noodl micro frontend app into your container application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script src=\"https://cdn.noodl.net/noodl-embed.min.js\"><\/script>\n<script type=\"text/javascript\">\nNoodl.embed({\n    app:'my-micro-frontend-app.sandbox.noodl.app',\n    container:'#my-micro-frontend-container',\n    variables:{\n        myVariable:'some value'\n    }\n})\n<\/script>\n")),(0,r.kt)("p",null,"This will asynchronously load the Noodl runtime and application and render it under the specified container element. To avoid some load time the first time the micro frontend is rendered you can pre-load the app like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script src=\"https://cdn.noodl.net/noodl-embed.min.js\"><\/script>\n<script type=\"text/javascript\">\nlet microFrontend = Noodl.embed({\n    app:'my-micro-frontend-app.sandbox.noodl.app',\n    //just don't include the container\n    variables:{\n        myVariable:'some value'\n    }\n})\n\n// Some time later when the micro frontend is visible\nmicroFrontend.render('#my-micro-frontend-container')\n<\/script>\n")),(0,r.kt)("p",null,"Whenever you deploy to the sandbox from Noodl the micro frontend will be updated. This will allow your team to work on it's own cadence and not be limited by dependencies on other teams."),(0,r.kt)("p",null,"Just like with the ",(0,r.kt)("strong",{parentName:"p"},"IFrame")," technique you can run in development mode, connecting to the editor and seeing your Noodl micro frontend app live in the container application as you build."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script src=\"https://cdn.noodl.net/noodl-embed.min.js\"><\/script>\n<script type=\"text/javascript\">\nNoodl.embed({\n    app:'localhost', // Simply put localhost here\n    container:'#my-micro-frontend-container',\n    variables:{\n        myVariable:'some value'\n    }\n})\n<\/script>\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You are free to use the Noodl sandbox deploys as much as you want for free. We do recommend them mostly for prototyping and development, when you move to production we recommend moving to a production or self hosted deploy."))),(0,r.kt)("h2",{id:"moving-to-production"},"Moving to production"),(0,r.kt)("p",null,"When deploying a production micro frontend we suggest that you move to a self hosted backend (if needed) and frontend. Check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/deploy/using-an-external-backend"},"Using a self hosted backend")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/deploy/hosting-frontend"},"Self hosting yout frontend")," guides for more details."),(0,r.kt)("p",null,"Once you frontend is deployed and connected to your production backend you can simply use the production URL in the ",(0,r.kt)("strong",{parentName:"p"},"embed")," function call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script src=\"https://cdn.noodl.net/noodl-embed.min.js\"><\/script>\n<script type=\"text/javascript\">\nNoodl.embed({\n    app:'my-production-micro-frontend.com', // This is simply a URL to your self hosted Noodl micro frontend app\n    container:'#my-micro-frontend-container',\n    variables:{\n        myVariable:'some value'\n    }\n})\n<\/script>\n")),(0,r.kt)("p",null,"All Noodl projects are kept in a ",(0,r.kt)("strong",{parentName:"p"},"Git")," repository making it possible to connect to a CI/CD pipeline using the Noodl Build CLI. This will allow you to trigger a deploy when you push to a certain branch in your Noodl project."))}u.isMDXComponent=!0}}]);