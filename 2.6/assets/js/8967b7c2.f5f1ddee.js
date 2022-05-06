"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[2662],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=i.createContext({}),d=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(r.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,g=u["".concat(r,".").concat(p)]||u[p]||h[p]||o;return n?i.createElement(g,l(l({ref:t},c),{},{components:n})):i.createElement(g,l({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<o;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13265:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return p}});var i=n(83117),a=n(80102),o=(n(67294),n(3905)),l=n(17213),s=n(44996),r=["components"],d={title:"Park Details View",hide_title:!0},c=void 0,h={unversionedId:"modules/gsheets/guides/park-details/README",id:"modules/gsheets/guides/park-details/README",title:"Park Details View",description:"What you will learn in this guide",source:"@site/library/modules/gsheets/guides/park-details/README.mdx",sourceDirName:"modules/gsheets/guides/park-details",slug:"/modules/gsheets/guides/park-details/",permalink:"/2.6/library/modules/gsheets/guides/park-details/",tags:[],version:"current",frontMatter:{title:"Park Details View",hide_title:!0},sidebar:"gsheetsSidebar",previous:{title:"Setting up the Google Sheets Module",permalink:"/2.6/library/modules/gsheets/guides/setting-up/"},next:{title:"Google Sheets Filtering",permalink:"/2.6/library/modules/gsheets/guides/filtering/"}},u={},p=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"Creating the Park Details component",id:"creating-the-park-details-component",level:2},{value:"Adding the Park Details to the App component",id:"adding-the-park-details-to-the-app-component",level:2},{value:"Using the Sheet Row node to get the correct details data",id:"using-the-sheet-row-node-to-get-the-correct-details-data",level:2},{value:"Summary",id:"summary",level:2}],g={toc:p};function m(e){var t=e.components,d=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},g,d,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"park-details-view"},"Park Details View"),(0,o.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,o.kt)("p",null,"This guide will continue to explore how we can build front ends to data from Google Sheets."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"If you haven't already looked at the guide for setting up the Google Sheets Module, it's recommended to do that before starting this guide. You can find it ",(0,o.kt)("a",{parentName:"p",href:"/library/modules/gsheets/guides/setting-up"},"here"),"."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7245).Z,width:"2330",height:"1562"}))),(0,o.kt)("p",null,"We will go though the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using the Sheet Row node."),(0,o.kt)("li",{parentName:"ul"},"Building a simple details view for data from a Google Sheet")),(0,o.kt)("h2",{id:"creating-the-park-details-component"},"Creating the Park Details component"),(0,o.kt)("p",null,"First let's create a new visual component that we will call Park Details."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(91654).Z,width:"676",height:"302"}))),(0,o.kt)("p",null,"Then, build out the following visual tree and then we will look at the properties for each node."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(72675).Z,width:"724",height:"1244"}))),(0,o.kt)("p",null,"First the properties for the top group, and the only thing that is different from the defaults is the white background:"),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(26527).Z,width:"556",height:"1738"}))),(0,o.kt)("p",null,"Next we have the Image node which is setup like this:"),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(69157).Z,width:"552",height:"1400"}))),(0,o.kt)("p",null,"The Group that we have called Text Content, only has some padding set:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(33197).Z,width:"1094",height:"1184"}))),(0,o.kt)("p",null,"We will be displaying the park name in the Text node that we call just Park Name, and the properties for that node are as follows:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(89524).Z,width:"1366",height:"2006"}))),(0,o.kt)("p",null,"There is another group in our tree, the Horizontal Group, that we use to lay out some of the other information, and the properties for this group are:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(83485).Z,width:"754",height:"1466"}))),(0,o.kt)("p",null,"All three of the Text nodes that are inside of the Horizontal Group have the same styling which is the default styling of a Text node so there is no need to change any properties for these nodes."),(0,o.kt)("p",null,"Finally the Text node that we have named Description has the following styling:"),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(16273).Z,width:"552",height:"1986"}))),(0,o.kt)("h2",{id:"adding-the-park-details-to-the-app-component"},"Adding the Park Details to the App component"),(0,o.kt)("p",null,"Now that we have built out and styled the visuals for our Park Details, let's add them to our App component. In the App component we will first add another group that we can call Details Container and then we add the Park Details as a child to that Group. It should look like this:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(68242).Z,width:"2110",height:"1120"}))),(0,o.kt)("p",null,"You should also see something like this in the preview window:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(83151).Z,width:"2004",height:"1694"}))),(0,o.kt)("p",null,"This is great, but it would be even nicer with some actual content!"),(0,o.kt)("h2",{id:"using-the-sheet-row-node-to-get-the-correct-details-data"},"Using the Sheet Row node to get the correct details data"),(0,o.kt)("p",null,"To get the correct content in the Park Details component, we will again use a ",(0,o.kt)("a",{parentName:"p",href:"/library/modules/gsheets/node-docs/sheet-row"},"Sheet Row")," node, so let's place it next to our visual tree."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(98838).Z,width:"1122",height:"1258"}))),(0,o.kt)("p",null,"We need to tell the Sheet Row node which row we want to look at, and if you remember from the previous ",(0,o.kt)("a",{parentName:"p",href:"/library/modules/gsheets/guides/setting-up/"},"guide"),", we already have a Variable named SelectedRowId. We set this everytime we click on an item in the list. Below you can see where in the List Item component the Variable is being set."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(48301).Z,width:"2696",height:"1626"}))),(0,o.kt)("p",null,"Since Variables are global we can use that same Variable in our Park Details component and connect it to the Row Id input of the Sheet Row node."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(83490).Z,width:"898",height:"590"}))),(0,o.kt)("p",null,"Now we can start to connect all the outputs from the Sheet Row node to our visual tree. Go ahead and make the following connections first, and then we will handle the remaining two."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(78731).Z,width:"1714",height:"1744"}))),(0,o.kt)("p",null,"You still don't see anything in the preview window, unless you go ahead and click on an item in the list. In the image below I clicked on the Arches park."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(65023).Z,width:"1946",height:"1820"}))),(0,o.kt)("p",null,"As you can see we haven't filled in the size information or the date for when the park was established so let's tackle that now."),(0,o.kt)("p",null,"The size that we are getting out from the Sheet Row is in km",(0,o.kt)("sup",null,"2"),", so it would be nice to add that at the end of the number. To do that we will use a String Format node, with the following set up, and then connected like in the second image."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(33451).Z,width:"558",height:"526"}))),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9380).Z,width:"1576",height:"1506"}))),(0,o.kt)("p",null,"The Established date that we get from the Sheet Row is a Date type and it looks a bit strange if we connect it directly to our text node, so let's put a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/utilities/date-to-string"},"Date To String")," node in between. After it's connected it will look like the image below."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(67050).Z,width:"1604",height:"1610"}))),(0,o.kt)("p",null,"The last thing we will do in this guide is to make sure we set the SelectedRowId Variable to the first item in the list. We can do that in the App component like this:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(22501).Z,width:"1798",height:"1118"}))),(0,o.kt)("p",null,"Now everytime we reload the first item in the list will always be selected and we will always show something in the Park Details section."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(49669).Z,width:"2284",height:"1752"}))),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,'In this guide we added a details view to our National Parks example using data from a Google Sheet. If you want to import the final project, click the "Import" button below and follow the instructions.'),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("img",{src:(0,s.Z)("/library/modules/gsheets/guides/park-details/first-item-selected-preview.png"),className:"ndl-image small"}),(0,o.kt)(l.Z,{zip:"gsheets-part2-1.zip",name:"Google Sheets Park Details",thumb:"arches.png",mdxType:"ImportButton"})),(0,o.kt)("p",null,"In the next guide we will look at how we can apply filters to our Google Sheet data."))}m.isMDXComponent=!0},17213:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(67294),a=n(39671);function o(e){var t=e.zip,n=e.name,o=e.thumb,l=e.cf;return i.createElement("button",{className:"ndl-import-button",onClick:function(){return(0,a.I)(t,{name:n,thumb:o,cf:l})}})}},39671:function(e,t,n){n.d(t,{I:function(){return a}});var i=n(99782);function a(e,t){var n=[];t&&void 0!==t.name&&n.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&n.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+i.default.baseUrl+t.thumb)),t&&void 0!==t.cf&&n.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+i.default.baseUrl+"/"+t.cf));var a="noodl:import/"+location.protocol+"//"+location.host+i.default.baseUrl+e+(n.length>0?"?"+n.join("&"):"");console.log("Importing into Noodl:",a),console.log(e),window.location.href=a}},98838:function(e,t,n){t.Z=n.p+"assets/images/add-sheet-row-85c3c91d300805650f0aa965fb67e12f.png"},68242:function(e,t,n){t.Z=n.p+"assets/images/app-comp-with-deets-58a4bf9b99ee7e802098e9137c38a80f.png"},65023:function(e,t,n){t.Z=n.p+"assets/images/arches-c855fb096b9d7c492f901cd4992ab5c1.png"},67050:function(e,t,n){t.Z=n.p+"assets/images/date-connected-bae6da621b0a1bb08f0691425f912997.png"},83151:function(e,t,n){t.Z=n.p+"assets/images/deets-preview-no-data-3935ab006ab3b7e6665d6ff48114f30b.png"},16273:function(e,t,n){t.Z=n.p+"assets/images/description-props-2d66c45e5b4206e027437e07a312d090.png"},78731:function(e,t,n){t.Z=n.p+"assets/images/details-almost-connected-dfc5c2799db9600b8616440249e1babd.png"},49669:function(e,t,n){t.Z=n.p+"assets/images/first-item-selected-preview-5a80ce461cac790aaaa9ee489c083723.png"},22501:function(e,t,n){t.Z=n.p+"assets/images/first-item-selected-70b82c5fe509eb7839cf2165460c39d8.png"},83485:function(e,t,n){t.Z=n.p+"assets/images/hgroup-props-17bb87c03ec3df0edc01c2ad40250ca1.png"},69157:function(e,t,n){t.Z=n.p+"assets/images/image-props-0e72674e6ca320c6b72ded3131373ee9.png"},48301:function(e,t,n){t.Z=n.p+"assets/images/list-item-variable-efa31c24d2cc33a2f4ccbbdea88f22db.png"},91654:function(e,t,n){t.Z=n.p+"assets/images/park-details-new-comp-2b710e80d8ac979f2522b27c47d76c6a.png"},72675:function(e,t,n){t.Z=n.p+"assets/images/park-details-node-tree-b75acc825a4aefcef2eec91eedc357ba.png"},7245:function(e,t,n){t.Z=n.p+"assets/images/park-details-4371e6a8b96b8e554016f36c4c67edae.png"},89524:function(e,t,n){t.Z=n.p+"assets/images/park-name-props-06e0f4f6b4447755ac23b7bce35f9d2c.png"},9380:function(e,t,n){t.Z=n.p+"assets/images/size-connected-5c837185aa484e24b94d97ba1d2cbcb5.png"},33451:function(e,t,n){t.Z=n.p+"assets/images/string-format-props-f1b6c359c3c438da0af66c053b266ded.png"},33197:function(e,t,n){t.Z=n.p+"assets/images/text-content-props-50cf928838dad052936f1ebec426d6da.png"},26527:function(e,t,n){t.Z=n.p+"assets/images/top-group-props-5b55c3a6e1a471cb24699fea1d67e0cd.png"},83490:function(e,t,n){t.Z=n.p+"assets/images/var-to-sheet-row-9558c1ef430b13bbde0d201ebaf12ba8.png"}}]);