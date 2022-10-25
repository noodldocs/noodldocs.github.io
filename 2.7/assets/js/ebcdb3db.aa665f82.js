"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[9204],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return c}});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var l=n.createContext({}),p=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=p(a),c=i,h=d["".concat(l,".").concat(c)]||d[c]||g[c]||o;return a?n.createElement(h,r(r({ref:e},u),{},{components:a})):n.createElement(h,r({ref:e},u))}));function c(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},17213:function(t,e,a){a.d(e,{Z:function(){return o}});var n=a(67294),i=a(39671);function o(t){var e=t.zip,a=t.name,o=t.thumb,r=t.cf;return n.createElement("button",{className:"ndl-import-button",onClick:function(){return(0,i.I)(e,{name:a,thumb:o,cf:r})}})}},39671:function(t,e,a){a.d(e,{I:function(){return i}});var n=a(99782);function i(t,e){var a=[];e&&void 0!==e.name&&a.push("name="+encodeURIComponent(e.name)),e&&void 0!==e.thumb&&a.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+n.default.baseUrl+e.thumb)),e&&void 0!==e.cf&&a.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+n.default.baseUrl+"/"+e.cf));var i="noodl:import/"+location.protocol+"//"+location.host+n.default.baseUrl+t+(a.length>0?"?"+a.join("&"):"");console.log("Importing into Noodl:",i),console.log(t),window.location.href=i}},25367:function(t,e,a){a.r(e),a.d(e,{assets:function(){return g},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var n=a(83117),i=a(80102),o=(a(67294),a(3905)),r=a(17213),s=["components"],l={title:"Multi Level Navigation",hide_title:!0},p="Multi Level Navigation",u={unversionedId:"guides/navigation/multi-level-navigation",id:"guides/navigation/multi-level-navigation",title:"Multi Level Navigation",description:"What you will learn in this guide",source:"@site/docs/guides/navigation/multi-level-navigation.mdx",sourceDirName:"guides/navigation",slug:"/guides/navigation/multi-level-navigation",permalink:"/2.7/docs/guides/navigation/multi-level-navigation",tags:[],version:"current",frontMatter:{title:"Multi Level Navigation",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Basic Navigation",permalink:"/2.7/docs/guides/navigation/basic-navigation"},next:{title:"Encoding Parameters in URLs",permalink:"/2.7/docs/guides/navigation/encoding-parameters-in-urls"}},g={},d=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"Multiple Page Routers",id:"multiple-page-routers",level:2},{value:"Navigating Specific Routers",id:"navigating-specific-routers",level:2},{value:"Using the Navigate To Path node",id:"using-the-navigate-to-path-node",level:2}],c={toc:d};function h(t){var e=t.components,l=(0,i.Z)(t,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"multi-level-navigation"},"Multi Level Navigation"),(0,o.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,o.kt)("p",null,"In this guide we will look at using multiple ",(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/page-router"},"Page Routers")," to achieve navigation hierarchies with multiple levels. We will use the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/navigate"},"Navigate")," and ",(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/navigate-to-path"},"Navigate To Path")," nodes to move between the different ",(0,o.kt)("strong",{parentName:"p"},"Pages")," of the App."),(0,o.kt)("p",null,"This is used when your ",(0,o.kt)("strong",{parentName:"p"},"Pages"),' are routed to URLs where each subroute manages their own routes. For example you may have a section of your app, "Products", that you reach through the URL ',(0,o.kt)("inlineCode",{parentName:"p"},"https://mydomain.com/products"),", which in turn has three subsections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/products/steel")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/products/wood")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/products/plastics"))),(0,o.kt)("p",null,'There\'s another section, "Settings", with the URL ',(0,o.kt)("inlineCode",{parentName:"p"},"https://mydomain.com/settings"),". It has two subsections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/settings/company")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/settings/user"))),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"We will go through the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add and configure multiple layers of ",(0,o.kt)("strong",{parentName:"li"},"Page Routers"),"."),(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("strong",{parentName:"li"},"Navigate")," node to move between pages within each ",(0,o.kt)("strong",{parentName:"li"},"Page Router"),"."),(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("strong",{parentName:"li"},"Navigate To Path")," to navigate in multiple ",(0,o.kt)("strong",{parentName:"li"},"Page Routers")," in one go.")),(0,o.kt)("p",null,"If you are new to Web Type Navigation you should go through the ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/navigation/basic-navigation"},"Basic Navigation"),' guide first.\nWe will build upon the example built in that guide. If needed you can first import the base project by clicking the "import" button below.'),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(36491).Z,width:"1200",height:"675"})),(0,o.kt)(r.Z,{zip:"/docs/guides/navigation/multi-level-navigation/basic-navigation.zip",name:"Basic Navigation",thumb:"/docs/guides/navigation/multi-level-navigation/ui-2.png",mdxType:"ImportButton"})),(0,o.kt)("h2",{id:"multiple-page-routers"},"Multiple Page Routers"),(0,o.kt)("p",null,'The first thing we want to add to our app is three categories under our "Product" page. We want three categories'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Steel Products - with the path ",(0,o.kt)("inlineCode",{parentName:"li"},"/products/steel")),(0,o.kt)("li",{parentName:"ul"},"Wood Products - with the path ",(0,o.kt)("inlineCode",{parentName:"li"},"/products/wood")),(0,o.kt)("li",{parentName:"ul"},"Plastic Products - with the path ",(0,o.kt)("inlineCode",{parentName:"li"},"/product/plastic"))),(0,o.kt)("p",null,"We also want a Top Bar Menu, only available in the Products Page, to navigate between them."),(0,o.kt)("p",null,"How you acheive this in Noodl is to add a ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," in the Products Page, and create three new pages for the sub pages. We add the Top Bar directly in the Products Page, so it will be consistent between the three subpages."),(0,o.kt)("p",null,"So lets start with creating the Top Bar. Go to the Product Page."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(64537).Z,width:"705",height:"680"}))),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(91554).Z,width:"970",height:"672"}))),(0,o.kt)("p",null,"More or less the same way as the sidebar menu was created, we can create the Top Bar. The main difference is that its laid out horizontally and that the buttons has a text instead of an icon. Make sure the Top Bar Group is set to ",(0,o.kt)("strong",{parentName:"p"},"Content Height")," so it doesnt take upp any unnecessary space."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6059).Z,width:"987",height:"1215"}))),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(65724).Z,width:"672",height:"1817"}))),(0,o.kt)("p",null,"Now let's add a ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," under the Top Bar. It will take up the rest of the space of the ",(0,o.kt)("strong",{parentName:"p"},"Page"),". We change the name of the ",(0,o.kt)("strong",{parentName:"p"},"Node")," and the name of the ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," (the ",(0,o.kt)("strong",{parentName:"p"},"Name"),' Property) to "Products Router".'),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(69212).Z,width:"685",height:"1330"}))),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(79858).Z,width:"1035",height:"1327"}))),(0,o.kt)("p",null,"The next step is to add three new ",(0,o.kt)("strong",{parentName:"p"},"Page Components"),' using the "+" icon on the Components List. To keep things tidy, we first create a new folder, "Products Pages", and add the ',(0,o.kt)("strong",{parentName:"p"},"Page Components"),' under that folder, "Steel Page", "Wood Page", "Plastic Page"'),(0,o.kt)("p",null,"As you can see you now have to select which ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," you want to add the ",(0,o.kt)("strong",{parentName:"p"},"Page Component"),' to. We choose our newly created "Products Router".'),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(68979).Z,width:"815",height:"525"}))),(0,o.kt)("p",null,"Once each page is created, add a ",(0,o.kt)("strong",{parentName:"p"},"Group")," node with some easy to recognize color and add a ",(0,o.kt)("strong",{parentName:"p"},"Text")," node as a title, centered."),(0,o.kt)("p",null,"A fast way to create the ",(0,o.kt)("strong",{parentName:"p"},"Page Components"),' is to create one, and the use the "Duplicate" component feature.'),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(217).Z,width:"940",height:"815"}))),(0,o.kt)("p",null,"After creating the pages, changing their color and title, you should now have something that looks like this."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(41011).Z,width:"3242",height:"1285"}))),(0,o.kt)("p",null,"You can now double check the ",(0,o.kt)("strong",{parentName:"p"},"Page Router"),' in the "Products Page". It should have the three newly created pages as their available ',(0,o.kt)("strong",{parentName:"p"},"Page Components"),"."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(72649).Z,width:"682",height:"1055"}))),(0,o.kt)("p",null,"We should also check the individual ",(0,o.kt)("strong",{parentName:"p"},"Page"),' nodes so the "Url Path" is set correctly. Change it to "steel", "wood", "plastic".'),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(33293).Z,width:"950",height:"1212"}))),(0,o.kt)("p",null,'With the right URL Paths set in place you should now be able to navigate directly to the inner pages of the "Products Page" by editing the URL in the navigation bar of the browser.'),(0,o.kt)("p",null,"Open your favourite browser and try the three different URLs ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8574/#/products/steel"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8574/#/products/wood"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8574/#/products/plastic"),". They should tell the Main ",(0,o.kt)("strong",{parentName:"p"},"Page Router"),' to go to the "Products Page" and then the Products Page ',(0,o.kt)("strong",{parentName:"p"},"Page Router"),' to go to the specific pages, "Steel", "Wood" or "Plastic".'),(0,o.kt)("h2",{id:"navigating-specific-routers"},"Navigating Specific Routers"),(0,o.kt)("p",null,"Now lets hook up the Top Bar. Create three ",(0,o.kt)("strong",{parentName:"p"},"Navigate")," nodes in the Products Page Component. Set each of them to target the ",(0,o.kt)("strong",{parentName:"p"},"Products Router")," ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," and chose the respective target page."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(53621).Z,width:"1707",height:"1705"}))),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(20997).Z,width:"875",height:"427"}))),(0,o.kt)("p",null,"Try clicking the Top Bar. You should now be able between the ",(0,o.kt)("strong",{parentName:"p"},"Page Components")," in the inner ",(0,o.kt)("strong",{parentName:"p"},"Page Router"),"."),(0,o.kt)("h2",{id:"using-the-navigate-to-path-node"},"Using the Navigate To Path node"),(0,o.kt)("p",null,'Finally, lets add a shortcut to the "Plastic" page to the sidebar. Clicking that button should do two things:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Navigate to the "Products" ',(0,o.kt)("strong",{parentName:"li"},"Page Component")," in the Main ",(0,o.kt)("strong",{parentName:"li"},"Page Router"),"."),(0,o.kt)("li",{parentName:"ul"},'Navigate to the "Plastic" ',(0,o.kt)("strong",{parentName:"li"},"Page Component")," in the Products ",(0,o.kt)("strong",{parentName:"li"},"Page Router"),".")),(0,o.kt)("p",null,"Doing this using the individual ",(0,o.kt)("strong",{parentName:"p"},"Page Routers")," would be a bit messy, so instead we use the ",(0,o.kt)("strong",{parentName:"p"},"Navigate To Path")," node. It will give the App a path to navigate to and let ",(0,o.kt)("strong",{parentName:"p"},"Noodl")," resolve which navigations that need to happen on which ",(0,o.kt)("strong",{parentName:"p"},"Page Routers")," based on the path."),(0,o.kt)("p",null,"First lets add the shortcut button. Go to the main App component and add a new ",(0,o.kt)("strong",{parentName:"p"},"Button"),' to the sidebar. Call it "Shortcut: Plastic Products". Make it red so it stands out, align it to the bottom, and change the Text Style to a smaller font. Something like this:'),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(97127).Z,width:"1115",height:"1285"}))),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(80850).Z,width:"1250",height:"1382"}))),(0,o.kt)("p",null,"To finish things up, add a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/navigate-to-path"},"Navigate To Path")," node, make sure its path is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"products/plastic"),"."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(74433).Z,width:"715",height:"577"}))),(0,o.kt)("p",null,"Finally connect the ",(0,o.kt)("strong",{parentName:"p"},"Click")," signal of the ",(0,o.kt)("strong",{parentName:"p"},"Button")," to ",(0,o.kt)("strong",{parentName:"p"},"Navigate")," on the ",(0,o.kt)("strong",{parentName:"p"},"Navigate To Path")," node and we are done."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(96894).Z,width:"1182",height:"1377"}))),(0,o.kt)("p",null,'Try clicking the Shortcut Button and make sure it always navigates to the "Products" ',(0,o.kt)("strong",{parentName:"p"},"Page Component"),' and the "Plastic" ',(0,o.kt)("strong",{parentName:"p"},"Page Component")," within it."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(14482).Z,width:"1200",height:"675"})),(0,o.kt)(r.Z,{zip:"/docs/guides/navigation/multi-level-navigation/multi-level-navigation.zip",name:"Multi Level Navigation",thumb:"/docs/guides/navigation/multi-level-navigation/multi-level-thumb.png",mdxType:"ImportButton"})))}h.isMDXComponent=!0},68979:function(t,e,a){e.Z=a.p+"assets/images/add-page-d390efa26be7c6bcb12a0394fe97f225.png"},64537:function(t,e,a){e.Z=a.p+"assets/images/component-list-1-b9907d69a26b62e1fefa24ecac01c36f.png"},217:function(t,e,a){e.Z=a.p+"assets/images/duplicate-page-82d87456ac8e30499843f16d7aa52b94.png"},80850:function(t,e,a){e.Z=a.p+"assets/images/main-app-1-a9fa1a94f12b1d8de1e2bac6ed3e1da0.png"},96894:function(t,e,a){e.Z=a.p+"assets/images/main-app-2-f82a522f972ed4a66965cea8b58b309c.png"},14482:function(t,e,a){e.Z=a.p+"assets/images/multi-level-final-48a717a73bb6d39789ea385274650ac0.gif"},74433:function(t,e,a){e.Z=a.p+"assets/images/navigate-to-path-6a13ebadafa741042dfd49246e0c989d.png"},33293:function(t,e,a){e.Z=a.p+"assets/images/page-path-1-72d4a7d5268fb3692e4fe473d848dab2.png"},69212:function(t,e,a){e.Z=a.p+"assets/images/page-router-1-8275a14f2d7cdc966c8ee4bf0577332c.png"},72649:function(t,e,a){e.Z=a.p+"assets/images/page-router-2-2dd8c2a1fb87186f3ac455626933c13e.png"},41011:function(t,e,a){e.Z=a.p+"assets/images/pages-1-adcb3ff3e384c501c9d00fd31d4456dc.png"},36491:function(t,e,a){e.Z=a.p+"assets/images/prev-final-39d2141c3b87c80b29afb407f708f620.gif"},91554:function(t,e,a){e.Z=a.p+"assets/images/products-page-1-ab50cb3a818ef0df19c19bb6d1c9634d.png"},6059:function(t,e,a){e.Z=a.p+"assets/images/products-page-2-16a12b3ed97551142c75c79c24e88e4d.png"},79858:function(t,e,a){e.Z=a.p+"assets/images/products-page-3-999aa2e8e3a7874848756681f8181e3a.png"},20997:function(t,e,a){e.Z=a.p+"assets/images/products-router-navigate-18dce6d1fb5d2539906a997e73737273.png"},97127:function(t,e,a){e.Z=a.p+"assets/images/shortcut-1-52933fff0d531b2c06dd9dbf219a3fcf.png"},65724:function(t,e,a){e.Z=a.p+"assets/images/top-bar-panel-43d8e2d2a27cadd4f8548f500f9c26cb.png"},53621:function(t,e,a){e.Z=a.p+"assets/images/topbar-navigate-f685356891037d19b06da1a487a1377c.png"}}]);