"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[2621],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return g}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(a),g=o,u=c["".concat(p,".").concat(g)]||c[g]||h[g]||r;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},17213:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294),o=a(39671);function r(e){var t=e.zip,a=e.name,r=e.thumb,i=e.cf;return n.createElement("button",{className:"ndl-import-button",onClick:function(){return(0,o.I)(t,{name:a,thumb:r,cf:i})}})}},39671:function(e,t,a){function n(e,t){var a=[];t&&void 0!==t.name&&a.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&a.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+location.pathname+"/"+t.thumb)),t&&void 0!==t.cf&&a.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+location.pathname+"/"+t.cf));var n="noodl:import/"+location.protocol+"//"+location.host+location.pathname+e+(a.length>0?"?"+a.join("&"):"");console.log("Importing into Noodl:",n),console.log(e),window.location.href=n}a.d(t,{I:function(){return n}})},70604:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return c}});var n=a(83117),o=a(80102),r=(a(67294),a(3905)),i=a(17213),s=["components"],p={},l="Encoding Parameters In URLs",d={unversionedId:"guides/navigation/encoding-parameters-in-urls",id:"guides/navigation/encoding-parameters-in-urls",title:"Encoding Parameters In URLs",description:"What you will learn in this guide",source:"@site/docs/guides/navigation/encoding-parameters-in-urls.mdx",sourceDirName:"guides/navigation",slug:"/guides/navigation/encoding-parameters-in-urls",permalink:"/2.6/docs/guides/navigation/encoding-parameters-in-urls",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Multi Level Navigation",permalink:"/2.6/docs/guides/navigation/multi-level-navigation"},next:{title:"Popups Guide",permalink:"/2.6/docs/guides/navigation/popups"}},h={},c=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"Path Parameters",id:"path-parameters",level:2},{value:"Listing Products",id:"listing-products",level:3},{value:"Adding the Show Product Page",id:"adding-the-show-product-page",level:3},{value:"Using a Path Parameter",id:"using-a-path-parameter",level:3},{value:"Set the Path Parameter when Navigating",id:"set-the-path-parameter-when-navigating",level:2},{value:"Prettifying the &quot;Show Product Page&quot;",id:"prettifying-the-show-product-page",level:3},{value:"Using Query Parameters",id:"using-query-parameters",level:2},{value:"Adding a VAT setting",id:"adding-a-vat-setting",level:3},{value:"Sending the Query Parameter",id:"sending-the-query-parameter",level:3},{value:"Receiving the Query Parameter",id:"receiving-the-query-parameter",level:3}],g={toc:c};function u(e){var t=e.components,p=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},g,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"encoding-parameters-in-urls"},"Encoding Parameters In URLs"),(0,r.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,r.kt)("p",null,'This guide will teach you how to pass parameters in the URL when you are navigating between pages, either as the final part of a path, e.g. "mysite.com#/path/parameter" or as query strings, "mysite.com#/path?parameter1=val1',"\xb6",'meter2=val2".\nNoodl is handling this through its ',(0,r.kt)("a",{parentName:"p",href:"/nodes/navigation/page-inputs"},"Page Inputs")," node and ",(0,r.kt)("a",{parentName:"p",href:"/nodes/navigation/navigate"},"Navigate")," node."),(0,r.kt)("p",null,"The main reason to encode data needed by a ",(0,r.kt)("strong",{parentName:"p"},"Page Component")," in URLs rather than using regular data nodes is that the data becomes independent of the App state. For example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If a user refreshes the browser running the App, the data will still be available to the ",(0,r.kt)("strong",{parentName:"li"},"Page Component")," in the URL."),(0,r.kt)("li",{parentName:"ul"},"If a user want to be able to share the exact state of an App with another user, you can encode that state in the URL.")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The guide will cover the following"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pass data to a ",(0,r.kt)("strong",{parentName:"li"},"Page Component")," as a ",(0,r.kt)("strong",{parentName:"li"},"Path Parameter")),(0,r.kt)("li",{parentName:"ul"},"Navigate to a path and set the ",(0,r.kt)("strong",{parentName:"li"},"Path Parameter")),(0,r.kt)("li",{parentName:"ul"},"Pass data to a ",(0,r.kt)("strong",{parentName:"li"},"Page Component")," using a ",(0,r.kt)("strong",{parentName:"li"},"Query Parameter"))),(0,r.kt)("p",null,"The guide assumes that you are familiar with basic Web Navigation concepts and it's suggested that you have already gone through the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/navigation/basic-navigation"},"Basic Navigation")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/navigation/multi-level-navigation"},"Multi Level Navigation")," guides before you go through this guide."),(0,r.kt)("p",null,"We will also use the example app developed as part of the two guides as a starting point in this guide. If you haven't built it already, you can import it by clicking the button below and follow the instructions in Noodl."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(90048).Z,width:"1200",height:"675"})),(0,r.kt)(i.Z,{zip:"multi-level-navigation.zip",name:"Multi Level Navigation",thumb:"multi-level-thumb.png",mdxType:"ImportButton"})),(0,r.kt)("h2",{id:"path-parameters"},"Path Parameters"),(0,r.kt)("p",null,"To demonstrate a typical use of ",(0,r.kt)("strong",{parentName:"p"},"Path Parameters")," we will have to create a list of products to show in our app."),(0,r.kt)("h3",{id:"listing-products"},"Listing Products"),(0,r.kt)("p",null,"The App will focus on Melee weapons.\nIn the main App component, create a ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/array/static-array"},"Static Array")," node. Make sure its set to ",(0,r.kt)("inlineCode",{parentName:"p"},"CSV")," type. Edit the CSV data and paste in the data from below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"name,category,description,price,identifyer\nKatana,steel,A classic japanese weapon used by the samurais,2000,katana\nBroadsword,steel,A favorite among the medieval knights,1800,broadsword\nMorning Star,steel,A scary and heavy weapon that require an expert to handle,1200,morning-star\nWooden Club,wood,A cheap and easy to use weapon that's popular among the farmers,50,wooden-club\nBokken,wood,A japanese wooden sword used in Kendo,850,bokken\nFake two handed sword,plastic,Looks real but so much lighter than the real thing,400,fake-sword\nMace for practice,plastic,A plastic mace you can use for training,250,plastic-mace\n")),(0,r.kt)("p",null,'Feel free to add more data to the dataset if you want, as long as the category is one of "steel"/"wood"/"plastic". Also make sure the the "identifyer" value of any new row you add does not contain any whitespaces.'),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(40786).Z,width:"1937",height:"1560"}))),(0,r.kt)("p",null,'Ok, now lets list the products under the Products page with their category, i.e. any "steel" products should be listed on the products/steel page.'),(0,r.kt)("p",null,"First we put the Products in an Array that we can find anywhere in the app. Create an ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/array/array-node.md"},"Array")," node next to the ",(0,r.kt)("strong",{parentName:"p"},"Static Array"),". Give it the ",(0,r.kt)("strong",{parentName:"p"},"Id")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Products"),". Then connect the output ",(0,r.kt)("strong",{parentName:"p"},"Items")," on the ",(0,r.kt)("strong",{parentName:"p"},"Static Array")," to the input ",(0,r.kt)("strong",{parentName:"p"},"Items")," on the ",(0,r.kt)("strong",{parentName:"p"},"Array"),"."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(6165).Z,width:"1790",height:"1090"}))),(0,r.kt)("p",null,'Now we will go into the "Steel" Product Page and list the products of the "steel" category. We will use a ',(0,r.kt)("a",{parentName:"p",href:"/nodes/ui-controls/repeater"},"Repeater")," and create a list item."),(0,r.kt)("p",null,"In the steel page, add a ",(0,r.kt)("strong",{parentName:"p"},"Repater")," node as the second child of the group. Also add an ",(0,r.kt)("strong",{parentName:"p"},"Array")," node. Make sure its ",(0,r.kt)("strong",{parentName:"p"},"Id")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"Products"),", i.e. the same array that we filled with the product data. Then connect the ",(0,r.kt)("strong",{parentName:"p"},"Items")," output of the ",(0,r.kt)("strong",{parentName:"p"},"Array")," connects to the ",(0,r.kt)("strong",{parentName:"p"},"Items")," input of the ",(0,r.kt)("strong",{parentName:"p"},"Repeater"),"."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(68454).Z,width:"1247",height:"910"}))),(0,r.kt)("p",null,"We will still not see anything because we have no list item that the ",(0,r.kt)("strong",{parentName:"p"},"Repeater"),' can use to visualize the items. So lets create a new component, we call it "Product Item". In the new component we add a ',(0,r.kt)("strong",{parentName:"p"},"Text")," node as the only child in the ",(0,r.kt)("strong",{parentName:"p"},"Group"),". Now we need to retrieve the individual ",(0,r.kt)("strong",{parentName:"p"},"Object")," that contains the Product entry. Create an ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/object/object-node"},"Object")," node and make sure it gets its ",(0,r.kt)("strong",{parentName:"p"},"Id"),' from the repeater node. Also add a property "name" to the ',(0,r.kt)("strong",{parentName:"p"},"Object"),"."),(0,r.kt)("div",{className:"ndl-image-with-background m"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(94597).Z,width:"697",height:"657"}))),(0,r.kt)("div",{className:"ndl-image-with-background m"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(90306).Z,width:"675",height:"600"}))),(0,r.kt)("p",null,"Finally hook up the ",(0,r.kt)("strong",{parentName:"p"},"name")," output of the ",(0,r.kt)("strong",{parentName:"p"},"Object")," with the ",(0,r.kt)("strong",{parentName:"p"},"text")," property of the ",(0,r.kt)("strong",{parentName:"p"},"Text")," node. We will have something like image below."),(0,r.kt)("div",{className:"ndl-image-with-background m"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(69306).Z,width:"1175",height:"605"}))),(0,r.kt)("p",null,'Now we are ready to go back to the "Steel" page and select our newly created List Item as the List Item of the repeater.'),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(38214).Z,width:"690",height:"500"}))),(0,r.kt)("p",null,'If you navigate to the "Steel" page, you should now see a bunch of items popping up. It should look something like this:'),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(67293).Z,width:"1345",height:"1740"}))),(0,r.kt)("p",null,"We immediately see two things"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The list items need to be styled"),(0,r.kt)("li",{parentName:"ul"},'We see all products, not only the ones in the "steel" category')),(0,r.kt)("p",null,'To fix the styling we go back into the "Product Item" component, make sure the ',(0,r.kt)("strong",{parentName:"p"},"Group")," node is ",(0,r.kt)("strong",{parentName:"p"},"Content Height")," (so the list gets a bit more compact). We also add a ",(0,r.kt)("strong",{parentName:"p"},"Hover State")," on the ",(0,r.kt)("strong",{parentName:"p"},"Text")," node. There is plenty of more styling that can be done, but lets settle for now."),(0,r.kt)("p",null,'Secondly, to filter out the products of the "steel" category, we go back to the "Steel Products" Page Component.'),(0,r.kt)("p",null,"We add in a ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/array/array-filter"},"Array Filter")," node in between the ",(0,r.kt)("strong",{parentName:"p"},"Array")," and ",(0,r.kt)("strong",{parentName:"p"},"Repater"),"."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(19131).Z,width:"1487",height:"912"}))),(0,r.kt)("p",null,"And finally we configure the ",(0,r.kt)("strong",{parentName:"p"},"Array Filter")," to only show items where ",(0,r.kt)("inlineCode",{parentName:"p"},'category = "steel"'),"."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(69096).Z,width:"1110",height:"815"}))),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(56072).Z,width:"695",height:"1365"}))),(0,r.kt)("p",null,"Now your Steel Page should look something like the one below."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(31592).Z,width:"1247",height:"1099"}))),(0,r.kt)("p",null,"Quickly copy-and-paste the ",(0,r.kt)("strong",{parentName:"p"},"Array"),"+",(0,r.kt)("strong",{parentName:"p"},"Array Filter"),"+",(0,r.kt)("strong",{parentName:"p"},"Repeater"),' construction to the "Wood" and "Plastic" page, make sure to update the filter, and we are done with listing the products.'),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(84018).Z,width:"561",height:"315"}))),(0,r.kt)("h3",{id:"adding-the-show-product-page"},"Adding the Show Product Page"),(0,r.kt)("p",null,"Next step is to add a new ",(0,r.kt)("strong",{parentName:"p"},"Page Component")," to the main ",(0,r.kt)("strong",{parentName:"p"},"Page Router"),". We want to have it mapped to the URL ",(0,r.kt)("inlineCode",{parentName:"p"},"/showproduct"),". Click the main ",(0,r.kt)("strong",{parentName:"p"},"Page Router")," (in the App component), the click ",(0,r.kt)("strong",{parentName:"p"},"Add New Page")," and ",(0,r.kt)("strong",{parentName:"p"},"Create New Page"),"."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(5923).Z,width:"1335",height:"1705"}))),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(31857).Z,width:"652",height:"1040"}))),(0,r.kt)("p",null,'Lets first go to the new page and make sure the path is "showproduct" by clicking the ',(0,r.kt)("strong",{parentName:"p"},"Page")," node and updating the path."),(0,r.kt)("p",null,"So how do we know which of the Melee Weapon Products to show here? Well, that's where the ",(0,r.kt)("strong",{parentName:"p"},"Path Parameter")," comes in."),(0,r.kt)("h3",{id:"using-a-path-parameter"},"Using a Path Parameter"),(0,r.kt)("p",null,"We want to send the ",(0,r.kt)("inlineCode",{parentName:"p"},"identifyer")," value of the a clicked product as a ",(0,r.kt)("strong",{parentName:"p"},"Path Parameter")," and use that to look up the correct product. I.e. we want to Navigate to this page with the path ",(0,r.kt)("inlineCode",{parentName:"p"},"/showproduct/<identifyer>"),"."),(0,r.kt)("p",null,"We achieve that by clicking the ",(0,r.kt)("strong",{parentName:"p"},"Page Inputs")," node and add a ",(0,r.kt)("strong",{parentName:"p"},"Path Parameter"),' called "productIdentifyer". The name doesnt matter except that becomes the name of the output of the ',(0,r.kt)("strong",{parentName:"p"},"Page Inputs")," node that will contain whatever is sent in the last part of the path."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(77512).Z,width:"1035",height:"505"}))),(0,r.kt)("p",null,"For test purposes, add a ",(0,r.kt)("strong",{parentName:"p"},"Text")," node to the ",(0,r.kt)("strong",{parentName:"p"},"Page"),' node and connect the "productIdentifyer" output to the ',(0,r.kt)("strong",{parentName:"p"},"Text")," input of the ",(0,r.kt)("strong",{parentName:"p"},"Text")," node."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(55224).Z,width:"2350",height:"1180"}))),(0,r.kt)("h2",{id:"set-the-path-parameter-when-navigating"},"Set the Path Parameter when Navigating"),(0,r.kt)("p",null,'Ok, we are almost ready to try the "showproduct" Page. We just need to do the actual navigation.'),(0,r.kt)("p",null,'So lets go back to the "Product Item" component we build earlier. We want to navigate when we click these items.'),(0,r.kt)("p",null,"Add a ",(0,r.kt)("strong",{parentName:"p"},"Navigate")," node and make sure the associated ",(0,r.kt)("strong",{parentName:"p"},"Page Router"),' is "Main". Then pick the "Show Product Page" as the target.'),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(39047).Z,width:"1317",height:"547"}))),(0,r.kt)("p",null,'As soon as you select it, you will see that there is a new input called "productIdentifyer". This is the one we added on the ',(0,r.kt)("strong",{parentName:"p"},"Page Inputs")," earlier!"),(0,r.kt)("p",null,'We want to set it to the "identifyer" value from our product so lets add the property "identifyer" on our ',(0,r.kt)("strong",{parentName:"p"},"Object"),' and connect it to the "productIdentifyer" input of our ',(0,r.kt)("strong",{parentName:"p"},"Navigate")," node. Also, connect the ",(0,r.kt)("strong",{parentName:"p"},"Click")," signal from the ",(0,r.kt)("strong",{parentName:"p"},"Group")," node to the ",(0,r.kt)("strong",{parentName:"p"},"Navigate")," signal on the ",(0,r.kt)("strong",{parentName:"p"},"Navigate")," node."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(69489).Z,width:"1875",height:"917"}))),(0,r.kt)("p",null,'Now try clicking on different products under the different Products pages. You should see the "Show Product Page" with the corresponding identifyer printed on the screen. Also try it in a regular browser to see how the URL looks.'),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2319).Z,width:"1720",height:"792"}))),(0,r.kt)("h3",{id:"prettifying-the-show-product-page"},'Prettifying the "Show Product Page"'),(0,r.kt)("p",null,'To finish up the "Show Product Page" we will extract some real data from the product and present in a sligthly prettier way. Go to the "Show Product Page".'),(0,r.kt)("p",null,"Add a new ",(0,r.kt)("strong",{parentName:"p"},"Group")," under the ",(0,r.kt)("strong",{parentName:"p"},"Page")," node and remove the ",(0,r.kt)("strong",{parentName:"p"},"Text")," node that was previously there. Make the ",(0,r.kt)("strong",{parentName:"p"},"Group")," white and give it some margin to give it some space. Add rounded corners and give it some padding for what's going inside it."),(0,r.kt)("p",null,"Then add three ",(0,r.kt)("strong",{parentName:"p"},"Text"),' nodes, one for "name", one for "description" and one for "price". Make the first ',(0,r.kt)("strong",{parentName:"p"},"Text")," node bold. Also, add some nice margins in-between them."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(84688).Z,width:"1740",height:"815"}))),(0,r.kt)("p",null,'Now we need to connect the data. We have the "identifyer" coming in as our ',(0,r.kt)("strong",{parentName:"p"},"Path Parameter"),". We are going to use that to filter out the right ",(0,r.kt)("strong",{parentName:"p"},"Object"),' from our "Products Array".'),(0,r.kt)("p",null,"So we connect it to an ",(0,r.kt)("strong",{parentName:"p"},"Array Filter"),', which we filter on "identifyer". We should only get one item out, so we can take the ',(0,r.kt)("strong",{parentName:"p"},"First Item Id")," and connect it to the ",(0,r.kt)("strong",{parentName:"p"},"Id")," of an ",(0,r.kt)("strong",{parentName:"p"},"Object")," node."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Object"),' should have three properties, "name", "description" and "price". The "price" need to be formatted. So add a ',(0,r.kt)("a",{parentName:"p",href:"/nodes/string-manipulation/string-format"},"String Format")," node with the string ",(0,r.kt)("inlineCode",{parentName:"p"},"Price: {price} EUR"),'.\nAn input "price" should now be available on the ',(0,r.kt)("strong",{parentName:"p"},"String Format"),' node. Connect the "price" output from the ',(0,r.kt)("strong",{parentName:"p"},"Object")," to it."),(0,r.kt)("p",null,"The data extraction should look similar to below:"),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(89848).Z,width:"2325",height:"755"}))),(0,r.kt)("p",null,"Then connect the data to the ",(0,r.kt)("strong",{parentName:"p"},"Text")," nodes and we are done with this part."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(49520).Z,width:"1705",height:"694"}))),(0,r.kt)("div",{className:"ndl-image-with-background m"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(43761).Z,width:"769",height:"624"}))),(0,r.kt)("h2",{id:"using-query-parameters"},"Using Query Parameters"),(0,r.kt)("p",null,"Another way to send parameters to pages is as ",(0,r.kt)("em",{parentName:"p"},"Query Parameters"),". While you can only have one ",(0,r.kt)("strong",{parentName:"p"},"Path Parameter"),", you can have as many ",(0,r.kt)("strong",{parentName:"p"},"Query Parameters")," as you want."),(0,r.kt)("p",null,"Lets add a ",(0,r.kt)("strong",{parentName:"p"},"Query Parameter")," to our ",(0,r.kt)("strong",{parentName:"p"},"Page Inputs")," node. We will call it ",(0,r.kt)("inlineCode",{parentName:"p"},"showVAT")," and we will use it to determine whether the price should include VAT or not in the ",(0,r.kt)("strong",{parentName:"p"},"Show Products Page"),"."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(89312).Z,width:"636",height:"331"}))),(0,r.kt)("p",null,'Now lets make use of the parameter. We start by going to the "Settings" page component. We will let the user state its preference here, whether they want to include VAT or not in the displayed price.'),(0,r.kt)("h3",{id:"adding-a-vat-setting"},"Adding a VAT setting"),(0,r.kt)("p",null,"Add a ",(0,r.kt)("a",{parentName:"p",href:"/nodes/ui-controls/radio-button-group"},"Radio Button Group")," with a ",(0,r.kt)("strong",{parentName:"p"},"Text")," node and two ",(0,r.kt)("a",{parentName:"p",href:"/nodes/ui-controls/radio-button"},"Radio Buttons")," as children. The text will be the title for the group. Make sure the first ",(0,r.kt)("strong",{parentName:"p"},"Radio Button")," have the value ",(0,r.kt)("inlineCode",{parentName:"p"},"showVAT")," and the second ",(0,r.kt)("inlineCode",{parentName:"p"},"dontShowVAT"),"."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(53094).Z,width:"622",height:"711"}))),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(27485).Z,width:"761",height:"622"}))),(0,r.kt)("p",null,"So lets save the VAT state, using a bit of logic and a ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/variable/variable-node.md"},"Variable")," / ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/variable/set-variable.md"},"Set Variable")," node. Note that we connect the ",(0,r.kt)("strong",{parentName:"p"},"Variable")," that holds the current value to the ",(0,r.kt)("strong",{parentName:"p"},"Value")," of the ",(0,r.kt)("strong",{parentName:"p"},"Radio Group")," node to make sure it reflects the current setting when navigating to the ",(0,r.kt)("strong",{parentName:"p"},"Settings")," Page. (Remember that the ",(0,r.kt)("strong",{parentName:"p"},"Page Component")," will be re-instanciated every time you navigate to it so we need to set the initial value every time.)"),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(77656).Z,width:"1917",height:"817"}))),(0,r.kt)("p",null,"Now we need to update our navigation to encode the setting in the URL. But maybe we should revisit why we would want to do that. Why not use our ",(0,r.kt)("strong",{parentName:"p"},"Variable")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Show VAT")," directly in the ",(0,r.kt)("strong",{parentName:"p"},"Show Products")," page component? Well, if we want our users to be able to copy the URL they are on when looking at a product, and we want the receiver to see the exact same view as the sender, we need to encode the setting in the URL."),(0,r.kt)("h3",{id:"sending-the-query-parameter"},"Sending the Query Parameter"),(0,r.kt)("p",null,'Go to the "Product Item" component where we do the navigation to the "Show Product" Page. If you click the ',(0,r.kt)("strong",{parentName:"p"},"Navigate")," node you will now see that the ",(0,r.kt)("inlineCode",{parentName:"p"},"showVAT")," parameter is availabel as an input."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(89928).Z,width:"415",height:"429"}))),(0,r.kt)("p",null,"We simply connect our ",(0,r.kt)("strong",{parentName:"p"},"Variable")," to it and the value will be sent."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(31434).Z,width:"1201",height:"582"}))),(0,r.kt)("h3",{id:"receiving-the-query-parameter"},"Receiving the Query Parameter"),(0,r.kt)("p",null,'The only thing left is to receive the parameter in the "Show Product" Page and show different prices depending on the parameter. We add a ',(0,r.kt)("strong",{parentName:"p"},"Variable")," that will hold the string to be shown (the price string including the VAT or not). Then we add a ",(0,r.kt)("a",{parentName:"p",href:"/nodes/utilities/logic/condition"},"Condition")," node to set the correct string to the ",(0,r.kt)("strong",{parentName:"p"},"Variable"),". The nodes look as below:"),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(90900).Z,width:"2371",height:"832"}))),(0,r.kt)("p",null,'If you want to download the complete project then press the "Import" button below and follow the instructions in Noodl.'),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(6388).Z,width:"1200",height:"675"})),(0,r.kt)(i.Z,{zip:"param-encoding-url.zip",name:"Encoding Parameters in URL",thumb:"show-products-page-4.png",mdxType:"ImportButton"})))}u.isMDXComponent=!0},6165:function(e,t,a){t.Z=a.p+"assets/images/array-1-13d8f3140310a82a14a19ec520baf2ba.png"},69096:function(e,t,a){t.Z=a.p+"assets/images/array-filter-1-87073e57a824b32be2536ae1e60096c7.png"},56072:function(e,t,a){t.Z=a.p+"assets/images/array-filter-2-654e8d8b2242df95fd2065a7b722bb6a.png"},2319:function(e,t,a){t.Z=a.p+"assets/images/browser-1-938ac1da69367c7df532e30ff7da642c.png"},55224:function(e,t,a){t.Z=a.p+"assets/images/connect-text-d870069eda4ce419049500bfccbcd935.png"},5923:function(e,t,a){t.Z=a.p+"assets/images/create-new-page-1-9347d490d7a28913402499d72135806f.png"},31857:function(e,t,a){t.Z=a.p+"assets/images/create-new-page-2-6bf1f0eb62b67d8d7bda35b8153ffc68.png"},6388:function(e,t,a){t.Z=a.p+"assets/images/encoding-params-final-fd7a5822f17fc59a8928fdda48d82810.gif"},94597:function(e,t,a){t.Z=a.p+"assets/images/id-repeater-c7c66fa3b838ea642c6de624ae62612d.png"},67293:function(e,t,a){t.Z=a.p+"assets/images/list-1-e81a9e805e2f77035c95c3297a34518c.png"},31592:function(e,t,a){t.Z=a.p+"assets/images/list-2-7e918cc4fa7b4900e532c1b14e41bb78.png"},69306:function(e,t,a){t.Z=a.p+"assets/images/list-item-1-b8bcb9986487d2dd3a521e46640f27ca.png"},69489:function(e,t,a){t.Z=a.p+"assets/images/list-item-2-52a5c109079c0f876cc453f93db8ddf2.png"},31434:function(e,t,a){t.Z=a.p+"assets/images/list-item-3-f4715f33e3eb09f65f3928e27e33284d.png"},90900:function(e,t,a){t.Z=a.p+"assets/images/list-item-4-a9f3c081ea8034ac1ade38ca698e2d89.png"},39047:function(e,t,a){t.Z=a.p+"assets/images/navigate-1-01d304f746936420c04ce81cf9c7230e.png"},89928:function(e,t,a){t.Z=a.p+"assets/images/navigate-2-b3d0851af37f9e6bf08625c489b976c5.png"},90306:function(e,t,a){t.Z=a.p+"assets/images/object-1-7529f6bf74bc75b9e844b3f9b0305091.png"},77512:function(e,t,a){t.Z=a.p+"assets/images/path-param-1-17be2346396d92e58c6a560dae03f36f.png"},68454:function(e,t,a){t.Z=a.p+"assets/images/products-page-1-d482ea4932441899fb1c84320ea06c4e.png"},19131:function(e,t,a){t.Z=a.p+"assets/images/products-page-2-4c1303ca564c318f8cb74c4d350a8714.png"},89312:function(e,t,a){t.Z=a.p+"assets/images/query-param-1-2b2344381017052685d60486f5c0478f.png"},38214:function(e,t,a){t.Z=a.p+"assets/images/repeater-1-330dc91c09d02d6b3ce80dfee8656680.png"},53094:function(e,t,a){t.Z=a.p+"assets/images/settings-1-14b3e0b93addc9674eec2a79abfaddcc.png"},27485:function(e,t,a){t.Z=a.p+"assets/images/settings-2-dd5b442c079e5e8947f743057de40284.png"},77656:function(e,t,a){t.Z=a.p+"assets/images/settings-3-0428cb8bdaf4c3335201fe302a6513f2.png"},84688:function(e,t,a){t.Z=a.p+"assets/images/show-products-page-1-f3478105db06f4e6d64433aa0dbca04d.png"},89848:function(e,t,a){t.Z=a.p+"assets/images/show-products-page-2-be64509a87565b4a11d21985636d2f52.png"},49520:function(e,t,a){t.Z=a.p+"assets/images/show-products-page-3-d4e8a915a762e4f70e387ee810d547bd.png"},43761:function(e,t,a){t.Z=a.p+"assets/images/show-products-page-4-b49a611d7bbc66621677df9567036202.png"},84018:function(e,t,a){t.Z=a.p+"assets/images/sorting-5bfa71559fe966e257a96921208f2d69.gif"},40786:function(e,t,a){t.Z=a.p+"assets/images/static-array-27899ec25afe3e118db4b7d764dcfd28.png"},90048:function(e,t,a){t.Z=a.p+"assets/images/multi-level-final-48a717a73bb6d39789ea385274650ac0.gif"}}]);