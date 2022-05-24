"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[5803],{3905:function(A,e,t){t.d(e,{Zo:function(){return p},kt:function(){return d}});var a=t(67294);function n(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function o(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,a)}return t}function i(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){n(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function r(A,e){if(null==A)return{};var t,a,n=function(A,e){if(null==A)return{};var t,a,n={},o=Object.keys(A);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var s=a.createContext({}),g=function(A){var e=a.useContext(s),t=e;return A&&(t="function"==typeof A?A(e):i(i({},e),A)),t},p=function(A){var e=g(A.components);return a.createElement(s.Provider,{value:e},A.children)},l={inlineCode:"code",wrapper:function(A){var e=A.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(A,e){var t=A.components,n=A.mdxType,o=A.originalType,s=A.parentName,p=r(A,["components","mdxType","originalType","parentName"]),h=g(t),d=n,c=h["".concat(s,".").concat(d)]||h[d]||l[d]||o;return t?a.createElement(c,i(i({ref:e},p),{},{components:t})):a.createElement(c,i({ref:e},p))}));function d(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var o=t.length,i=new Array(o);i[0]=h;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=A,r.mdxType="string"==typeof A?A:n,i[1]=r;for(var g=2;g<o;g++)i[g]=t[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},17213:function(A,e,t){t.d(e,{Z:function(){return o}});var a=t(67294),n=t(39671);function o(A){var e=A.zip,t=A.name,o=A.thumb,i=A.cf;return a.createElement("button",{className:"ndl-import-button",onClick:function(){return(0,n.I)(e,{name:t,thumb:o,cf:i})}})}},39671:function(A,e,t){t.d(e,{I:function(){return n}});var a=t(99782);function n(A,e){var t=[];e&&void 0!==e.name&&t.push("name="+encodeURIComponent(e.name)),e&&void 0!==e.thumb&&t.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+a.default.baseUrl+e.thumb)),e&&void 0!==e.cf&&t.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+a.default.baseUrl+"/"+e.cf));var n="noodl:import/"+location.protocol+"//"+location.host+a.default.baseUrl+A+(t.length>0?"?"+t.join("&"):"");console.log("Importing into Noodl:",n),console.log(A),window.location.href=n}},10508:function(A,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return g},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return h}});var a=t(83117),n=t(80102),o=(t(67294),t(3905)),i=t(17213),r=["components"],s={title:"Basic Navigation",hide_title:!0},g=void 0,p={unversionedId:"guides/navigation/basic-navigation",id:"guides/navigation/basic-navigation",title:"Basic Navigation",description:"",source:"@site/docs/guides/navigation/basic-navigation.mdx",sourceDirName:"guides/navigation",slug:"/guides/navigation/basic-navigation",permalink:"/2.6/docs/guides/navigation/basic-navigation",tags:[],version:"current",frontMatter:{title:"Basic Navigation",hide_title:!0},sidebar:"docsSidebar",previous:{title:"External Data",permalink:"/2.6/docs/guides/data/external-data"},next:{title:"Multi Level Navigation",permalink:"/2.6/docs/guides/navigation/multi-level-navigation"}},l={},h=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"What is Web Style Navigation?",id:"what-is-web-style-navigation",level:2},{value:"The Page Router",id:"the-page-router",level:2},{value:"Pages",id:"pages",level:2},{value:"Page paths",id:"page-paths",level:2},{value:"Navigating in the app",id:"navigating-in-the-app",level:2}],d={toc:h};function c(A){var e=A.components,s=(0,n.Z)(A,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basic-web-style-navigation"},"Basic Web Style Navigation"),(0,o.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,o.kt)("p",null,"In this guide you will be introduced to the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/page-router"},"Page Router"),", the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/page"},"Page")," and the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/navigate"},"Navigate")," node to create a simple UI where you can navigate between pages. You will learn how to navigate both by interacting with the App or by entering URLs directly in the browser."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"We will go through the following steps in the tutorial"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set up a ",(0,o.kt)("strong",{parentName:"li"},"Page Router")," with three ",(0,o.kt)("strong",{parentName:"li"},"Pages")),(0,o.kt)("li",{parentName:"ul"},"Configure the URL for the pages"),(0,o.kt)("li",{parentName:"ul"},"Implement navigation in the App")),(0,o.kt)("h2",{id:"what-is-web-style-navigation"},"What is Web Style Navigation?"),(0,o.kt)("p",null,"Noodl supports two types of navigations: App style navigation and Web style navigation. This guide covers the Web style navigation using the ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," and ",(0,o.kt)("strong",{parentName:"p"},"Pages"),"."),(0,o.kt)("p",null,"On a high level the main differences are"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Web Style:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Each Page has a distinct URL and by typing that URL in a browser window you will be routed to that page."),(0,o.kt)("li",{parentName:"ul"},"You can encode data in the URL that can be extracted in the Page."),(0,o.kt)("li",{parentName:"ul"},"The browser keeps track of your navigation stack, i.e. back history. The user can click back/forward in the browser window to navigate."),(0,o.kt)("li",{parentName:"ul"},"Generally there are no transitions when moving between pages."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"App Style:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The browser is unaware of the navigation - there is no change in URL when navigating."),(0,o.kt)("li",{parentName:"ul"},"Noodl keeps track of the navigation stack."),(0,o.kt)("li",{parentName:"ul"},"You can use different transitions when navigating.")))),(0,o.kt)("p",null,"You can mix the two navigation styles. For example a web page could have URLs leading in to the main section of the web site and within each section you use App style navigation."),(0,o.kt)("p",null,"When to use which style depends what the user expects from your app. Should it work like classic web-site or more like an app."),(0,o.kt)("p",null,"This guide will focus on Web Style navigation."),(0,o.kt)("h2",{id:"the-page-router"},"The Page Router"),(0,o.kt)("p",null,"The first node to look at in this guide is the ",(0,o.kt)("strong",{parentName:"p"},"Page Router"),". This node mainly keeps track of two things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Provide space for the ",(0,o.kt)("strong",{parentName:"li"},"Page")," that is currently showing"),(0,o.kt)("li",{parentName:"ul"},"Keep track of the other ",(0,o.kt)("strong",{parentName:"li"},"Pages")," you can navigate to")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," node is a visual node meaning it takes up space on the screen. Any ",(0,o.kt)("strong",{parentName:"p"},"Page")," you navigate to will become child of the ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," and use its space. So when designing your navigation flow, you typically create a bunch of ",(0,o.kt)("strong",{parentName:"p"},"Page")," components holding the content for each page and navigate between them. They will be put in the space that the ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," takes up. All nodes in the visual hierarchy that are not in the ",(0,o.kt)("strong",{parentName:"p"},"Pages")," will stay on screen no matter how you navigate. So title and footer would normally not be part of the ",(0,o.kt)("strong",{parentName:"p"},"Page")," but lie next to the ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," in the hierarchy."),(0,o.kt)("p",null,'Let\'s begin by creating a new project based on the "Hello World" Template. Delete the existing ',(0,o.kt)("strong",{parentName:"p"},"Text")," node and add in a ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," using the Node Picker."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(51549).Z,width:"790",height:"452"}))),(0,o.kt)("p",null,"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," to review its settings."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(81103).Z,width:"830",height:"1345"}))),(0,o.kt)("p",null,"For now - lets only change one thing: The background color to more clearly see the area on the screen that the page router takes up. Change it to a nice grey color."),(0,o.kt)("p",null,"As you can see, the whole screen changes color. It's because the ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," by default takes up as much screen as it can on the screen."),(0,o.kt)("p",null,"Lets create a simple sidebar and add to the App. Since this sidebar is lying next to the ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," in the hierarchy it will be a consistent component in the App no matter where you navigate. Navigation can only change what's in the ",(0,o.kt)("strong",{parentName:"p"},"Page Router"),"."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(89172).Z,width:"2015",height:"1380"}))),(0,o.kt)("p",null,"The sidebar is 100 px wide and white. It's placed together with the ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," in a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/basic-elements/group"},"Group")," node with a horizontal layout."),(0,o.kt)("h2",{id:"pages"},"Pages"),(0,o.kt)("p",null,"The next step is to add a few pages. The ",(0,o.kt)("strong",{parentName:"p"},"Page"),' node is a bit special in the way that you cannot create it using the Node Picker. Instead you add it from the components sidebar as part of a component. Click "+" and the "Page Component". Call the page "Home".'),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(63529).Z,width:"1190",height:"945"}))),(0,o.kt)("p",null,'Then add two more pages, "Products" and "Settings". Your component list should look as the image below.'),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(77568).Z,width:"832",height:"657"}))),(0,o.kt)("p",null,"If you click one of the Page components you will se that it has two nodes by default. A ",(0,o.kt)("strong",{parentName:"p"},"Page")," node and a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/page-inputs"},"Page Inputs")," node."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(27779).Z,width:"547",height:"292"}))),(0,o.kt)("p",null,"Let's ignore the ",(0,o.kt)("strong",{parentName:"p"},"Page Inputs")," node for now. We will use it in later guides to send parameters to the ",(0,o.kt)("strong",{parentName:"p"},"Pages"),".\nThe ",(0,o.kt)("strong",{parentName:"p"},"Page")," node is a container that will hold the content you want to show. Let's add some content to it.\nAdd a ",(0,o.kt)("strong",{parentName:"p"},"Group")," node and then a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/basic-elements/text"},"Text")," node as a child node. The ",(0,o.kt)("strong",{parentName:"p"},"Text"),' will become the title of the page, so give it the name "Title" and center it. Also change the text so it matches the page you are changing, for example "Home" if you are in the Home page.'),(0,o.kt)("p",null,"To more easily differentiate the pages from each other we will change the color of the Group to something that stands out, for example red."),(0,o.kt)("p",null,"Now change the other two pages, i.e. add the nodes, update the text title and change the color to a new color. You can select the two nodes and then copy the them using (Ctrl+C/Cmd+C) and paste them (Ctrl+P/Cmd+P) into the other pages."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(10530).Z,width:"373",height:"283"}))),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(92242).Z,width:"1198",height:"447"}))),(0,o.kt)("p",null,"As you change the pages you will see that one of them is already shown in the ",(0,o.kt)("strong",{parentName:"p"},"Page Router"),", the one that you added first. It has become the ",(0,o.kt)("strong",{parentName:"p"},"Starting Page")," of the ",(0,o.kt)("strong",{parentName:"p"},"Page Router"),". If you want to change that, you can go back to the Main App and click the ",(0,o.kt)("strong",{parentName:"p"},"Page Router"),". You will now see that there are two ",(0,o.kt)("strong",{parentName:"p"},"Pages")," added to your list of available ",(0,o.kt)("strong",{parentName:"p"},"Pages")," in the ",(0,o.kt)("strong",{parentName:"p"},"Page Router"),". You can hover over the ",(0,o.kt)("strong",{parentName:"p"},"Pages")," and a edit icon appears. It will open a menu where you can remove the page or make it the starting page. Try changing the starting page. You need to refresh the viewer for the changes to take place."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(18340).Z,width:"643",height:"1042"}))),(0,o.kt)("h2",{id:"page-paths"},"Page paths"),(0,o.kt)("p",null,"Now, lets look at the paths to the pages. Go back to one of the ",(0,o.kt)("strong",{parentName:"p"},"Page components")," and click the ",(0,o.kt)("strong",{parentName:"p"},"Page")," node. You will se that it has a Title and a path that's based on the name of the component."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(94278).Z,width:"403",height:"718"}))),(0,o.kt)("p",null,'For the case of the "Home" Page Component, it\'s path is "home". This means that the url to that page is ',(0,o.kt)("inlineCode",{parentName:"p"},"<your deployed domain>/home"),". Let's try it with our viewer running on localhost."),(0,o.kt)("p",null,"Open a window in your favourite browser. Enter the URL ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8574#/home"),". Then try the paths to the other pages, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8574#/products"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8574#/settings"),". The URLs should lead you to the different pages."),(0,o.kt)("h2",{id:"navigating-in-the-app"},"Navigating in the app"),(0,o.kt)("p",null,"Finally lets add some navigation within the app. First step is to add buttons to the empty sidebar."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(42904).Z,width:"532",height:"679"}))),(0,o.kt)("p",null,"Change the buttons slightly to fit with the sidebar design, for example enabling the icon, removing the label and adding some padding and margins."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(33462).Z,width:"930",height:"546"}))),(0,o.kt)("p",null,"Finally we are going to connect this buttons to a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/navigate"},"Navigate")," node, that will trigger the page navigation. So create three ",(0,o.kt)("strong",{parentName:"p"},"Navigation")," nodes. When you click them, you will see that you can change their target page to either one of the ",(0,o.kt)("strong",{parentName:"p"},"Page Components")," that are available in the ",(0,o.kt)("strong",{parentName:"p"},"Page Router"),"."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(11076).Z,width:"811",height:"253"}))),(0,o.kt)("p",null,"Make sure the three ",(0,o.kt)("strong",{parentName:"p"},"Navigate")," nodes points to the right target, and then connect the ",(0,o.kt)("strong",{parentName:"p"},"Click")," signal from the button to the ",(0,o.kt)("strong",{parentName:"p"},"Navigate")," signal on the ",(0,o.kt)("strong",{parentName:"p"},"Navigate")," nodes. Make sure the the correct button is connected to the correct ",(0,o.kt)("strong",{parentName:"p"},"Navigate")," node."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(35606).Z,width:"1582",height:"727"}))),(0,o.kt)("p",null,"Now try clicking the buttons. If everything was set up correctly you should see the ",(0,o.kt)("strong",{parentName:"p"},"Page Component"),' changing on the screen. Also try it in the browser and see how the URL changes. Try pressing the "Back"/"Forward" button in the browser and see how you move back and forth in the browser history.'),(0,o.kt)("p",null,'If you want import the full project in Noodl click the "Import" button below and follow the instructions below.'),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(1443).Z,width:"1200",height:"675"})),(0,o.kt)(i.Z,{zip:"/docs/guides/navigation/basic-navigation/basic-navigation.zip",name:"Basic Navigation",thumb:"/docs/guides/navigation/basic-navigation/ui-2.png",mdxType:"ImportButton"})))}c.isMDXComponent=!0},63529:function(A,e,t){e.Z=t.p+"assets/images/add-page-component-d142dda4e30e7b29c9d7986a4b3a0a53.png"},77568:function(A,e,t){e.Z=t.p+"assets/images/components-6838bfefecc16095e98a9ba227ca980c.png"},1443:function(A,e,t){e.Z=t.p+"assets/images/final-39d2141c3b87c80b29afb407f708f620.gif"},11076:function(A,e,t){e.Z=t.p+"assets/images/navigate-1-8091c81a495fe5f196d06549aaab0aa7.png"},27779:function(A,e,t){e.Z=t.p+"assets/images/page-1-bd836b04a4a6ff4a7701782b429d2a30.png"},10530:function(A,e){e.Z="data:image/png;base64,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"},94278:function(A,e,t){e.Z=t.p+"assets/images/page-props-648ab4f9f69728db38809247ef12c3b3.png"},51549:function(A,e){e.Z="data:image/png;base64,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"},81103:function(A,e,t){e.Z=t.p+"assets/images/page-router-2-80690a74ebdbde440775224435b8d3ba.png"},18340:function(A,e,t){e.Z=t.p+"assets/images/page-router-3-d2c9ab32285c62eb9ebc85778bc039d5.png"},92242:function(A,e,t){e.Z=t.p+"assets/images/screen-21875ba79d456af4ad34e0244c08053f.png"},42904:function(A,e,t){e.Z=t.p+"assets/images/sidebar-1-6bbbd0aa5986dfe394b0d2219f8ba209.png"},35606:function(A,e,t){e.Z=t.p+"assets/images/signal-1-a6ee1119863a38e092720d60de2431c4.png"},89172:function(A,e,t){e.Z=t.p+"assets/images/ui-1-a1c0f2059b5bda08bbf128a3cd4d4ce2.png"},33462:function(A,e,t){e.Z=t.p+"assets/images/ui-2-ee35612fafcdcabfee5f34c2a4bd431a.png"}}]);