"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[5854],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26288:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],s={},l="Progressive Web App",p={unversionedId:"guides/deploy/pwa",id:"guides/deploy/pwa",title:"Progressive Web App",description:"A Progressive Web App (PWA) is a type of web application that combines the best features of both web and native mobile applications. It delivers a fast, reliable, and engaging user experience across different devices and platforms, without the need to install an app from an app store. PWAs use modern web technologies to provide app-like functionality, such as offline access, push notifications, and access to device hardware.",source:"@site/docs/guides/deploy/pwa.md",sourceDirName:"guides/deploy",slug:"/guides/deploy/pwa",permalink:"/2.8/docs/guides/deploy/pwa",tags:[],version:"current",frontMatter:{}},c={},u=[{value:"Key characteristics",id:"key-characteristics",level:2},{value:"Connectivity independence",id:"connectivity-independence",level:3},{value:"Fast and reliable performance",id:"fast-and-reliable-performance",level:3},{value:"Installable",id:"installable",level:3},{value:"How to create a PWA?",id:"how-to-create-a-pwa",level:2},{value:"Creating the Web App Manifest",id:"creating-the-web-app-manifest",level:3},{value:"Verify Web App Manifest on a Phone",id:"verify-web-app-manifest-on-a-phone",level:3}],d={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"progressive-web-app"},"Progressive Web App"),(0,o.kt)("p",null,"A Progressive Web App (PWA) is a type of web application that combines the best features of both web and native mobile applications. It delivers a fast, reliable, and engaging user experience across different devices and platforms, without the need to install an app from an app store. PWAs use modern web technologies to provide app-like functionality, such as offline access, push notifications, and access to device hardware."),(0,o.kt)("p",null,"As of today (Noodl 2.8.3) there are no built-in features to make it ",(0,o.kt)("strong",{parentName:"p"},"easier")," to work with Progressive Web Apps in Noodl.\nIf you are interested in hearing more, ",(0,o.kt)("a",{parentName:"p",href:"https://www.noodl.net/community"},"contact us"),"."),(0,o.kt)("h2",{id:"key-characteristics"},"Key characteristics"),(0,o.kt)("p",null,"Here are some of the key characteristics of Progressive Web Apps."),(0,o.kt)("h3",{id:"connectivity-independence"},"Connectivity independence"),(0,o.kt)("p",null,"One of the key features of PWAs is their ability to work offline or with poor network conditions. This is achieved through caching strategies implemented using service workers, which store assets and data locally on the user's device."),(0,o.kt)("p",null,"Service workers are one of the ways to achieve this. JavaScript files that run in the background, separate from the main browser thread. They enable core PWA features like offline functionality, caching, background synchronization, and push notifications. Service workers act as a proxy between the web app and the network, allowing developers to control how network requests are handled and implement efficient caching strategies."),(0,o.kt)("h3",{id:"fast-and-reliable-performance"},"Fast and reliable performance"),(0,o.kt)("p",null,"They can work offline or with poor network conditions, using cached data and assets to provide a functional user experience.\nPWAs use caching and background data synchronization to ensure a smooth and fast user experience."),(0,o.kt)("p",null,"Web workers are a powerful tool for enhancing web application performance. They execute JavaScript code in the background, separate from the main browser thread, allowing computationally intensive tasks to be offloaded without affecting the responsiveness of the user interface. Web workers communicate with the main thread using a messaging system, ensuring seamless integration with the rest of the application. By making it possible to run complex operations in parallel, web workers significantly improve the overall user experience, particularly in CPU-demanding applications."),(0,o.kt)("p",null,"There is a module built to work with Web Workers in Noodl, it is quite technical, and it can be found here ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/noodlapp/modules/tree/main/modules/web-worker"},"Web Worker Module"),"."),(0,o.kt)("h3",{id:"installable"},"Installable"),(0,o.kt)("p",null,"With Progressive Web Apps you can add your Noodl app to a device's home screen, similar to how native apps appear. Installing a PWA creates a shortcut and allows you to access the web app directly without needing to open a browser and navigate to the app's URL."),(0,o.kt)("p",null,"The installation process for PWAs is relatively simple and does not require downloading from an app store. Once a PWA meets certain criteria (e.g., having a web app manifest and being served over HTTPS), browsers may prompt users to install the PWA or provide an option to do so manually."),(0,o.kt)("p",null,"Once installed, the PWA can be launched from the home screen, app drawer, or any other location where native apps can be accessed. The PWA will open in a standalone window, without the typical browser interface elements, making it feel more like a native app."),(0,o.kt)("h2",{id:"how-to-create-a-pwa"},"How to create a PWA?"),(0,o.kt)("h3",{id:"creating-the-web-app-manifest"},"Creating the Web App Manifest"),(0,o.kt)("p",null,"The web app manifest is a JSON file that provides metadata about the PWA, such as its name, icons, display settings, and preferred orientation. This information allows the PWA to be installed on a device's home screen with a custom icon and launch experience, making it feel more like a native app."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a manifest.json file and include it in your Noodl apps ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/deploy/project-structure/"},"project directory"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the manifest.json file and add the basic properties required for your web app."))),(0,o.kt)("p",null,"Here's a simple example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "My PWA",\n  "short_name": "PWA",\n  "description": "A sample Progressive Web App",\n  "start_url": "/",\n  "display": "standalone",\n  "background_color": "#ffffff",\n  "theme_color": "#000000"\n}\n')),(0,o.kt)("p",null,"Here's a brief explanation of each property:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),": The full name of your Progressive Web App."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"short_name"),": A shorter name for your PWA, used when there's limited space (e.g., on the home screen)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"description"),": A brief description of your PWA."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"start_url"),": The URL that the PWA should open when launched."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"display"),': The preferred display mode for the PWA. "standalone" is the most app-like experience, without browser interface elements.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"background_color"),": The background color of the")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Make sure to reference it in your Head Code which can be found under the Project Settings, using a link tag:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="manifest" href="/manifest.json" />\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Deploy your application and you are now using the basic functionalities of Progressive Web Apps.")),(0,o.kt)("h3",{id:"verify-web-app-manifest-on-a-phone"},"Verify Web App Manifest on a Phone"),(0,o.kt)("p",null,"Now when you have installed the manifest file, there are different ways to test it.\nThis is one of the ways it can be tested on a phone by following these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the web app on your phone's browser using by going to your Noodl app URL.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the web app to your phone's home screen:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Android (Chrome)"),': Tap the vertical ellipsis (\u22ee) in the top-right corner of the browser, then select "Add to Home screen" or "Install App" from the menu. Confirm the action by tapping "Add" or "Install" when prompted.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"iOS (Safari)"),': Tap the "Share" icon at the bottom of the browser (a square with an arrow pointing upwards), then scroll down and select "Add to Home Screen." Confirm by tapping "Add" in the top-right corner.')))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Close your browser and find the app icon on your phone's home screen.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tap the app icon to launch the PWA. It should open in a standalone window without the browser interface elements, providing an app-like experience."))),(0,o.kt)("p",null,"Please note that this method only checks if your web app can be added to the home screen and launched like a PWA. It doesn't evaluate the full PWA functionality or features such as offline support, push notifications or performance optimizations.\nTo thoroughly test your PWA, you should look at using Lighthouse in Chrome Developer Tools."))}h.isMDXComponent=!0}}]);