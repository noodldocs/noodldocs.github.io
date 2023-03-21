"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[1017],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(n),m=r,d=h["".concat(s,".").concat(m)]||h[m]||p[m]||a;return n?o.createElement(d,l(l({ref:t},u),{},{components:n})):o.createElement(d,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},99876:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),l=["components"],i={title:"Carousel Scroll",hide_title:!0},s="Carousel Scroll",c={unversionedId:"modules/carousel-scroll/README",id:"modules/carousel-scroll/README",title:"Carousel Scroll",description:"This module contains a simple horizontal Carousel scroll with the following features:",source:"@site/library/modules/carousel-scroll/README.md",sourceDirName:"modules/carousel-scroll",slug:"/modules/carousel-scroll/",permalink:"/2.8/library/modules/carousel-scroll/",tags:[],version:"current",frontMatter:{title:"Carousel Scroll",hide_title:!0},sidebar:"carouselScrollSidebar"},u={},p=[{value:"Overview of what&#39;s included in the import project",id:"overview-of-whats-included-in-the-import-project",level:2},{value:"Using the snippet",id:"using-the-snippet",level:2}],h={toc:p};function m(e){var t=e.components,i=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"carousel-scroll"},"Carousel Scroll"),(0,a.kt)("p",null,"This module contains a simple horizontal Carousel scroll with the following features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Can be scrolled by swiping horizontally or by clicking scroll buttons"),(0,a.kt)("li",{parentName:"ul"},"Can auto scroll"),(0,a.kt)("li",{parentName:"ul"},"One selected item that can be aligned to the left, to the center or to the right"),(0,a.kt)("li",{parentName:"ul"},"Easy to visually modify")),(0,a.kt)("div",{className:"ndl-image-with-background"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(97598).Z,width:"920",height:"1659"}))),(0,a.kt)("h2",{id:"overview-of-whats-included-in-the-import-project"},"Overview of what's included in the import project"),(0,a.kt)("p",null,"When you import the module into your project you will get the following components:"),(0,a.kt)("div",{className:"ndl-image-with-background"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(98582).Z,width:"890",height:"870"}))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Carousel/Carousel Logic")),(0,a.kt)("p",null,"This folder contains the logic that controls the scrolling of the application. This is needed by the Carousel component and you should generally not modify this unless you really know what you are doing :)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Carousel/Card")),(0,a.kt)("p",null,"This component is the template for the card that represents an item in the Carousel list. You should base your own Carousel item on this Card, either by modifying this directly or making a copy of it. Feel free to change the structure of the component, however it's important to keep the ",(0,a.kt)("strong",{parentName:"p"},"Parent Component")," node and have the ",(0,a.kt)("strong",{parentName:"p"},"Width")," output connected to the ",(0,a.kt)("strong",{parentName:"p"},"Width")," of the main container of the Card. Also note the selection logic if you want the Card to change appearance if it's selected."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Carousel/Carousel")),(0,a.kt)("p",null,"This is the main component that represents the Carousel list. You should generally not change anything major in this component unless you know what you are doing."),(0,a.kt)("p",null,"Note that the ",(0,a.kt)("strong",{parentName:"p"},"Carousel")," node should have its cards as direct children. This can be achieved by either manually putting them there or using a ",(0,a.kt)("a",{parentName:"p",href:"/nodes/ui-controls/repeater"},"Repeater")," node."),(0,a.kt)("div",{className:"ndl-image-with-background"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(82907).Z,width:"1090",height:"420"}))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Carousel Buttons")),(0,a.kt)("p",null,"This component the two buttons that controls left/right scrolling. Feel free to style the ",(0,a.kt)("strong",{parentName:"p"},"Buttons")," according to your liking."),(0,a.kt)("h2",{id:"using-the-snippet"},"Using the snippet"),(0,a.kt)("p",null,"You typically use the snippet by using the ",(0,a.kt)("strong",{parentName:"p"},"Carousel")," component more or less as it is and style the ",(0,a.kt)("strong",{parentName:"p"},"Card")," component to fit your app.\nThe ",(0,a.kt)("strong",{parentName:"p"},"Carousel")," component have a few options available to tweak."),(0,a.kt)("div",{className:"ndl-image-with-background"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(74056).Z,width:"785",height:"780"}))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Width")," - This is the width of each Carousel Card in the Carousel."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Start from Index")," - The selected index from start."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Item Change Timer")," - The delay between each autoscroll. Will only apply if ",(0,a.kt)("strong",{parentName:"li"},"Autoscroll")," is set to ",(0,a.kt)("strong",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Autoscroll")," - A boolean that controls if the list should automatically scroll to the next item whenver the ",(0,a.kt)("strong",{parentName:"li"},"Item Change Timer")," expires.")),(0,a.kt)("p",null,"The most impactful component to change is the ",(0,a.kt)("strong",{parentName:"p"},"Carousel Card"),". You can for example keep the background color ",(0,a.kt)("strong",{parentName:"p"},"Group")," node and then add your own content as children to the ",(0,a.kt)("strong",{parentName:"p"},"Group")," named ",(0,a.kt)("em",{parentName:"p"},"Put your content in this group"),". Another option is to rebuild the card completely but the it's important to let the width stored in the ",(0,a.kt)("strong",{parentName:"p"},"Component Object")," control the width of the card."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(66636).Z,width:"2120",height:"1400"}))))}m.isMDXComponent=!0},97598:function(e,t,n){t.Z=n.p+"assets/images/carousel-1-921120f386f35a4021a9c539bf654a2d.png"},66636:function(e,t,n){t.Z=n.p+"assets/images/carousel-card-4458d8274f7018529f3bb86f44ae7bbe.png"},74056:function(e,t,n){t.Z=n.p+"assets/images/carousel-params-3d3608a6b796e3f05c0a941c18df6f33.png"},82907:function(e,t,n){t.Z=n.p+"assets/images/carousel-repeater-ce663b556b1484eb9d841a00831ce2dd.png"},98582:function(e,t,n){t.Z=n.p+"assets/images/components-bd53e83feaabd77a26b4b8808fdfde21.png"}}]);