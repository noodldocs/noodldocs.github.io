"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[6938],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=i,g=h["".concat(l,".").concat(p)]||h[p]||c[p]||a;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},57699:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],s={title:"Visual States",hide_title:!0},l=void 0,u={unversionedId:"guides/user-interfaces/visual-states",id:"guides/user-interfaces/visual-states",title:"Visual States",description:"What you will learn in this guide",source:"@site/docs/guides/user-interfaces/visual-states.md",sourceDirName:"guides/user-interfaces",slug:"/guides/user-interfaces/visual-states",permalink:"/2.7/docs/guides/user-interfaces/visual-states",tags:[],version:"current",frontMatter:{title:"Visual States",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Style Variants",permalink:"/2.7/docs/guides/user-interfaces/style-variants"},next:{title:"States Node",permalink:"/2.7/docs/guides/user-interfaces/states"}},d={},c=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"Let&#39;s go!",id:"lets-go",level:2}],h={toc:c};function p(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"working-with-visual-states"},"Working with Visual States"),(0,a.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,a.kt)("p",null,"This guide will teach you how to style ",(0,a.kt)("strong",{parentName:"p"},"Visual nodes")," differently based on user interaction."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"We will go through the following steps in this guide:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a button"),(0,a.kt)("li",{parentName:"ul"},"Style its ",(0,a.kt)("inlineCode",{parentName:"li"},"neutral")," state"),(0,a.kt)("li",{parentName:"ul"},"Style it differently in its ",(0,a.kt)("inlineCode",{parentName:"li"},"hover")," state")),(0,a.kt)("p",null,"There is also a video walking through the guide."),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/aya8lsQ9BBc",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,a.kt)("h2",{id:"lets-go"},"Let's go!"),(0,a.kt)("p",null,"When working with Visual nodes we often find ourselves in situations where we want to style the node differently based on the user interaction. We might want to have a different background color when hovering a button, or indicating that a checkbox has been checked. This is done using ",(0,a.kt)("strong",{parentName:"p"},"Visual States")," in the nodes settings in the ",(0,a.kt)("strong",{parentName:"p"},"Property Panel"),"."),(0,a.kt)("p",null,"Let\u2019s create a button in our node tree, and give it a quick styling."),(0,a.kt)("div",{className:"ndl-image-with-background"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(73372).Z,width:"738",height:"396"}))),(0,a.kt)("p",null,"Our brand guidelines tell us that all buttons need to be the Dark color and that they shouldn't have any rounded corners."),(0,a.kt)("div",{className:"ndl-image-with-background s"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4855).Z,width:"400",height:"256"}))),(0,a.kt)("p",null,"Ok, so, it looks good now, but when I sent it to my designer friend they told me that while the button looked good in the neutral state, it was all wrong when hovered. The button is supposed to be the Primary Light color, and the text should be Dark. Let\u2019s fix that by modifying the Hover state."),(0,a.kt)("p",null,"With the Button node still selected, let\u2019s move over to the Visual State selector and click the Hover option."),(0,a.kt)("div",{className:"ndl-image-with-background"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(50954).Z,width:"562",height:"434"}))),(0,a.kt)("p",null,"We will see the Property Panel shift around a bit. Some properties just don't make any sense to change in an interaction state, so Noodl will hide those properties for us."),(0,a.kt)("p",null,"Let\u2019s scroll down to the properties for Label and Background Color and update them."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(35792).Z,width:"1364",height:"934"}))),(0,a.kt)("p",null,"And voila - we are now following the brand guidelines."),(0,a.kt)("div",{className:"ndl-image-with-background s"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(74551).Z,width:"400",height:"256"}))))}p.isMDXComponent=!0},73372:function(e,t,n){t.Z=n.p+"assets/images/node-created-bb3ff75f4434d5ab085140fe7f9f6c35.png"},74551:function(e,t,n){t.Z=n.p+"assets/images/right-hover-9cd65a46c0002b47afd21ade01633a1a.gif"},50954:function(e,t,n){t.Z=n.p+"assets/images/states-efe899d7d7327daf9891859dbd74f852.png"},35792:function(e,t,n){t.Z=n.p+"assets/images/update-states-dd7c1cd38e5bf68c504bd217ebf95a46.png"},4855:function(e,t,n){t.Z=n.p+"assets/images/wrong-hover-4926cf99e2a0323de48bdc198dd33625.gif"}}]);