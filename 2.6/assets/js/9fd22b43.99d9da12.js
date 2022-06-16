"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[5486],{17213:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(67294),a=n(39671);function i(e){var t=e.zip,n=e.name,i=e.thumb,l=e.cf;return o.createElement("button",{className:"ndl-import-button",onClick:function(){return(0,a.I)(t,{name:n,thumb:i,cf:l})}})}},39671:function(e,t,n){n.d(t,{I:function(){return a}});var o=n(99782);function a(e,t){var n=[];t&&void 0!==t.name&&n.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&n.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+o.default.baseUrl+t.thumb)),t&&void 0!==t.cf&&n.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+o.default.baseUrl+"/"+t.cf));var a="noodl:import/"+location.protocol+"//"+location.host+o.default.baseUrl+e+(n.length>0?"?"+n.join("&"):"");console.log("Importing into Noodl:",a),console.log(e),window.location.href=a}},7391:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var o=n(83117),a=n(80102),i=(n(67294),n(3905)),l=n(17213),r=n(22004),s=["components"],p={title:"Scrolling Content",hide_title:!0},c="Scrolling Content",u={unversionedId:"guides/user-interfaces/scrolling-content",id:"guides/user-interfaces/scrolling-content",title:"Scrolling Content",description:"What you will learn in this guide",source:"@site/docs/guides/user-interfaces/scrolling-content.mdx",sourceDirName:"guides/user-interfaces",slug:"/guides/user-interfaces/scrolling-content",permalink:"/2.6/docs/guides/user-interfaces/scrolling-content",tags:[],version:"current",frontMatter:{title:"Scrolling Content",hide_title:!0},sidebar:"docsSidebar",previous:{title:"States Node",permalink:"/2.6/docs/guides/user-interfaces/states"},next:{title:"Modules",permalink:"/2.6/docs/guides/user-interfaces/modules"}},h={},d=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"Scrolling in the Group node",id:"scrolling-in-the-group-node",level:2},{value:"The size of the Group node",id:"the-size-of-the-group-node",level:3},{value:"Getting the Group to Scroll",id:"getting-the-group-to-scroll",level:3},{value:"Structuring Scrolling Content",id:"structuring-scrolling-content",level:3},{value:"Scrolling in Page Routers",id:"scrolling-in-page-routers",level:2},{value:"Sticky Layout Position option",id:"sticky-layout-position-option",level:3}],g={toc:d};function m(e){var t=e.components,p=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},g,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"scrolling-content"},"Scrolling Content"),(0,i.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,i.kt)("p",null,"This guide will teach you the basics on how to make content larger than its container visible through scrolling. We will mainly make use of the ",(0,i.kt)("strong",{parentName:"p"},"Scrolling")," property on the ",(0,i.kt)("a",{parentName:"p",href:"/nodes/basic-elements/group"},"Group")," node and go into detail on how the layout engine works in relation to scrolling. We will also look at the built in scrolling functionality in the ",(0,i.kt)("a",{parentName:"p",href:"/nodes/navigation/page-router"},"Page Router")," that makes it easy to build pages with scrollable content."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The guides will walk through the following topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How the ",(0,i.kt)("strong",{parentName:"li"},"Group")," node gets it size"),(0,i.kt)("li",{parentName:"ul"},"Scrolling in the ",(0,i.kt)("strong",{parentName:"li"},"Group")," node"),(0,i.kt)("li",{parentName:"ul"},"Scrolling in the ",(0,i.kt)("strong",{parentName:"li"},"Page Router")," node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Sticky")," Layout Position in a scrolling ",(0,i.kt)("strong",{parentName:"li"},"Group"))),(0,i.kt)("p",null,"This guide will use the ",(0,i.kt)("a",{parentName:"p",href:"/nodes/ui-controls/repeater"},"Repeater")," node to create lists and also touch on navigation using the ",(0,i.kt)("a",{parentName:"p",href:"/nodes/navigation/page-router"},"Page Router"),". So it's recommended to check out the guides for them either before or after following this guide."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/guides/data/list-basics"},"List Basics Guide")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/guides/navigation/basic-navigation"},"Web Navigation Guide"))),(0,i.kt)("p",null,"You should also be familiar with layout basics so check out ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/user-interfaces/layout"},"this")," guide before you start this guide, if you haven't already."),(0,i.kt)("h2",{id:"scrolling-in-the-group-node"},"Scrolling in the Group node"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Group")," node is the fundamental node to create a layout. So what happens if the children of a ",(0,i.kt)("strong",{parentName:"p"},"Group")," node takes up more space than what's available?\nWell, it depends on how you set up its sizing."),(0,i.kt)("h3",{id:"the-size-of-the-group-node"},"The size of the Group node"),(0,i.kt)("p",null,"On a high level there are two options (in both horizontal and vertical direction):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Size is explicitly set. The size can then be given in % of available space, pixels or vw"),(0,i.kt)("li",{parentName:"ol"},"Size is decided by the total size of its children")),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(86174).Z,width:"542",height:"304"}))),(0,i.kt)("p",null,'So we only need to worry about case 1), what happens if the children takes up more than the space that you give them in the Group?\nLet\'s try it. Start a new project, for example using the "Hello World" template. Replace the current nodes with the ones below.'),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(62099).Z,width:"1038",height:"488"}))),(0,i.kt)("p",null,"Fill up the ",(0,i.kt)("strong",{parentName:"p"},"Static Array")," node with some data. Make sure its set to ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON")," format."),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(29893).Z,width:"550",height:"370"}))),(0,i.kt)("p",null,"Then copy and paste the data below into the ",(0,i.kt)("strong",{parentName:"p"},"Static Array"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    { "label": "item 1" },\n    { "label": "item 2" },\n    { "label": "item 3" },\n    { "label": "item 4" },\n    { "label": "item 5" },\n    { "label": "item 6" },\n    { "label": "item 7" },\n    { "label": "item 8" },\n    { "label": "item 9" },\n    { "label": "item 10" },\n    { "label": "item 11" },\n    { "label": "item 12" },\n    { "label": "item 13" },\n    { "label": "item 14" },\n    { "label": "item 15" },\n    { "label": "item 16" },\n    { "label": "item 17" },\n    { "label": "item 18" },\n    { "label": "item 19" },\n    { "label": "item 20" }\n]\n')),(0,i.kt)("p",null,'Then create a new visual component and call it "List Item".'),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(28738).Z,width:"850",height:"622"}))),(0,i.kt)("p",null,"And create the following node structure:"),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(72831).Z,width:"902",height:"508"}))),(0,i.kt)("p",null,"Make sure the ",(0,i.kt)("strong",{parentName:"p"},"Object")," node has a property called ",(0,i.kt)("inlineCode",{parentName:"p"},"label")," connected to the ",(0,i.kt)("strong",{parentName:"p"},"Text")," node. Also set the size of the ",(0,i.kt)("strong",{parentName:"p"},"Group")," node to 100% width, and 45 px height. Give it a 5 px margin at the bottom. Also give it a outline so we can see it properly.\nCenter align the ",(0,i.kt)("strong",{parentName:"p"},"Text")," node vertically."),(0,i.kt)("p",null,'Finally go back to the "App" component and select the newly created list item as the ',(0,i.kt)("strong",{parentName:"p"},"Template"),"."),(0,i.kt)("p",null,'You will now have something that looks like below. (You can also import the project directly by clicking "Import" below).'),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(68744).Z,width:"1219",height:"1438"})),(0,i.kt)(l.Z,{zip:"/docs/guides/user-interfaces/scrolling-content/step-1.zip",name:"Scrolling Part 1",thumb:"/docs/guides/user-interfaces/scrolling-content/result-1.png",mdxType:"ImportButton"})),(0,i.kt)("p",null,"As you can see, the list takes up the full screen and unless you have a veeeeery long screen the items will flow outside the screen. You are not able to scroll the content."),(0,i.kt)("p",null,"Also try to change the vertical size of the ",(0,i.kt)("strong",{parentName:"p"},"Group")," node in the main App to ",(0,i.kt)("inlineCode",{parentName:"p"},"50%"),"."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(62073).Z,width:"1592",height:"426"}))),(0,i.kt)("p",null,"You might expect that only half the screen would be covered by the list, but you will see no change. That's because the default behavior of a ",(0,i.kt)("strong",{parentName:"p"},"Group")," with explicit size set is that ",(0,i.kt)("em",{parentName:"p"},"if the size of the children are larger than the size of the Group, the size will grow to fit the children"),"."),(0,i.kt)("p",null,"You can change that behavior and tell the ",(0,i.kt)("strong",{parentName:"p"},"Group")," to clip the content instead of growing. Check the ",(0,i.kt)("strong",{parentName:"p"},"Clip Content")," property of the group."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(71045).Z,width:"2688",height:"1544"}))),(0,i.kt)("h3",{id:"getting-the-group-to-scroll"},"Getting the Group to Scroll"),(0,i.kt)("p",null,"Another way to do it is to tell the ",(0,i.kt)("strong",{parentName:"p"},"Group")," that it allows scrolling. Uncheck the ",(0,i.kt)("strong",{parentName:"p"},"Clip Content")," and instead check ",(0,i.kt)("strong",{parentName:"p"},"Enable Scroll"),". You will now have a scrollable list."),(0,i.kt)(r.Z,{playing:!0,autoplay:!0,muted:!0,loop:!0,url:"scrolling-content/scroll1.mp4",mdxType:"ReactPlayer"}),(0,i.kt)("p",null,"As you can see there is an extra option ",(0,i.kt)("strong",{parentName:"p"},"Use native scroll"),". Generally you should have this checked, unless you are doing a very custom scroll interaction. We will not cover that in this guide."),(0,i.kt)("h3",{id:"structuring-scrolling-content"},"Structuring Scrolling Content"),(0,i.kt)("p",null,"Change back the size to ",(0,i.kt)("inlineCode",{parentName:"p"},"100%")," on the ",(0,i.kt)("strong",{parentName:"p"},"Group")," node."),(0,i.kt)("p",null,"Now let's add a title and and a footer. We can't add it to our ",(0,i.kt)("strong",{parentName:"p"},"Group")," node, because then they will scroll away with the list. So we have to restructure our layout a little."),(0,i.kt)("p",null,"Create a new ",(0,i.kt)("strong",{parentName:"p"},"Group")," node. Make the existing ",(0,i.kt)("strong",{parentName:"p"},"Group")," node a child of the new ",(0,i.kt)("strong",{parentName:"p"},"Group")," node."),(0,i.kt)(r.Z,{playing:!0,autoplay:!0,muted:!0,loop:!0,url:"scrolling-content/regroup.mp4",mdxType:"ReactPlayer"}),(0,i.kt)("p",null,"Now we can add a header and a footer to the highest level ",(0,i.kt)("strong",{parentName:"p"},"Group")," and they will not be affected by the scrolling.\nThe header and footer could for example be a ",(0,i.kt)("strong",{parentName:"p"},"Group")," node with content height and 100% width. Then add a ",(0,i.kt)("strong",{parentName:"p"},"Text")," with a larger font. Perhaps add a bit of padding in the ",(0,i.kt)("strong",{parentName:"p"},"Group")," containing the text."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(63567).Z,width:"1116",height:"940"}))),(0,i.kt)("p",null,"Now you can see that the footer and header are allowed to take its space while the scrolling content takes whatever is left and lets its content scroll if it doesn't fit."),(0,i.kt)(r.Z,{playing:!0,autoplay:!0,muted:!0,loop:!0,url:"scrolling-content/hf-scroll.mp4",mdxType:"ReactPlayer"}),(0,i.kt)("h2",{id:"scrolling-in-page-routers"},"Scrolling in Page Routers"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Page Router")," is one of the main nodes to implement navigation in Noodl. In short, the ",(0,i.kt)("strong",{parentName:"p"},"Page Router")," contains the ",(0,i.kt)("a",{parentName:"p",href:"/nodes/navigation/page/"},"Pages")," you navigate to. In that sense, the ",(0,i.kt)("strong",{parentName:"p"},"Page Router")," is quite similar to a ",(0,i.kt)("strong",{parentName:"p"},"Group")," node. That's why a ",(0,i.kt)("strong",{parentName:"p"},"Page Router")," also have the options to make it's content scrollable by chosing ",(0,i.kt)("strong",{parentName:"p"},"Clip Behavior")," and setting ",(0,i.kt)("strong",{parentName:"p"},"Scrolling"),"."),(0,i.kt)("div",{className:"ndl-image-with-background m"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(77365).Z,width:"542",height:"394"}))),(0,i.kt)("p",null,"Lets try it out!"),(0,i.kt)("p",null,'Create a new visual component. Call it "App 2". Select "Make Home" to make it the new home component (i.e it will be shown in the viewer).'),(0,i.kt)("div",{className:"ndl-image-with-background m"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(44795).Z,width:"826",height:"668"}))),(0,i.kt)("p",null,"Add a ",(0,i.kt)("strong",{parentName:"p"},"Page Router")," as the first child of the root ",(0,i.kt)("strong",{parentName:"p"},"Group")),(0,i.kt)("div",{className:"ndl-image-with-background m"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(19114).Z,width:"526",height:"360"}))),(0,i.kt)("p",null,"Click on the ",(0,i.kt)("strong",{parentName:"p"},"Page Router")," and click ",(0,i.kt)("inlineCode",{parentName:"p"},"Add new Page")," and add a new ",(0,i.kt)("strong",{parentName:"p"},"Page")," called ",(0,i.kt)("inlineCode",{parentName:"p"},"Page 1"),"."),(0,i.kt)("p",null,"We can now simplify the previous structure. Since the ",(0,i.kt)("strong",{parentName:"p"},"Page Router")," will work as the ",(0,i.kt)("strong",{parentName:"p"},"Group")," we can move the ",(0,i.kt)("strong",{parentName:"p"},"Repeater")," (and the ",(0,i.kt)("strong",{parentName:"p"},"Static Array")," that provides the items) to right under the ",(0,i.kt)("strong",{parentName:"p"},"Page")," node in our newly created ",(0,i.kt)("strong",{parentName:"p"},"Page")," component."),(0,i.kt)("div",{className:"ndl-image-with-background m"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(26980).Z,width:"1136",height:"708"}))),(0,i.kt)("p",null,"Make sure to set the ",(0,i.kt)("strong",{parentName:"p"},"Clip Behavior")," to ",(0,i.kt)("strong",{parentName:"p"},"Scrolling")," on the ",(0,i.kt)("strong",{parentName:"p"},"Page Router")," and you now have scrolling content in your ",(0,i.kt)("strong",{parentName:"p"},"Page"),". Try it out."),(0,i.kt)("h3",{id:"sticky-layout-position-option"},"Sticky Layout Position option"),(0,i.kt)("p",null,"There is another way to get things like headers and footers to not be scrolled out of the ",(0,i.kt)("strong",{parentName:"p"},"Group")," node even if scrolling is enabled, and we will try it out on our ",(0,i.kt)("strong",{parentName:"p"},"Page"),". Instead of creating a new structure we can add our header and footer to be direct children to the ",(0,i.kt)("strong",{parentName:"p"},"Page")," node. So copy and paste them so they end up before and after our ",(0,i.kt)("strong",{parentName:"p"},"Repeater"),"."),(0,i.kt)("div",{className:"ndl-image-with-background m"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(77499).Z,width:"1072",height:"958"}))),(0,i.kt)("p",null,"Also make sure the header is aligned to the top and the footer aligned to the bottom."),(0,i.kt)("p",null,"If you try scrolling now, they will be scrolled in and out of the screen. However if you change the ",(0,i.kt)("strong",{parentName:"p"},"Position")," setting for the header and footer ",(0,i.kt)("strong",{parentName:"p"},"Group")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Sticky")," you will see that they will stay on screen."),(0,i.kt)("div",{className:"ndl-image-with-background m"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(74966).Z,width:"540",height:"786"}))),(0,i.kt)("p",null,"The only issue is that you can see the list scroll behind the header and footer. This is probably not what you want."),(0,i.kt)(r.Z,{playing:!0,autoplay:!0,muted:!0,loop:!0,url:"scrolling-content/sticky1.mp4",mdxType:"ReactPlayer"}),(0,i.kt)("p",null,"You fix that by setting the background color to non-transparent white. Also since Noodl by default renders everything in the order as it's in the tree (nodes later in the tree will be rendered on top of nodes earlier in the tree if they overlap), we also need to change the ",(0,i.kt)("strong",{parentName:"p"},"zIndex")," of the header to ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," to stay on top of the ",(0,i.kt)("strong",{parentName:"p"},"Repeater")," that's below it in the tree."),(0,i.kt)("div",{className:"ndl-image-with-background m"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(89618).Z,width:"542",height:"444"}))),(0,i.kt)("p",null,"You now have a working scrolling list with a sticky header and footer."),(0,i.kt)(r.Z,{playing:!0,autoplay:!0,muted:!0,loop:!0,url:"scrolling-content/sticky2.mp4",mdxType:"ReactPlayer"}),(0,i.kt)("p",null,"If you want to try out the full project, import the project below."),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(49794).Z,width:"1034",height:"1444"})),(0,i.kt)(l.Z,{zip:"/docs/guides/user-interfaces/scrolling-content/step-2.zip",name:"Scrolling Part 2",thumb:"/docs/guides/user-interfaces/scrolling-content/result-2.png",mdxType:"ImportButton"})))}m.isMDXComponent=!0},62073:function(e,t,n){t.Z=n.p+"assets/images/50-percent-724bd0056ec2b155e36f91cf0b157562.png"},71045:function(e,t,n){t.Z=n.p+"assets/images/clip-52932ba15f9a83f62fc50a14f1044112.png"},86174:function(e,t,n){t.Z=n.p+"assets/images/dims-1-980b9df692e8c9775f65f27979af95ec.png"},63567:function(e,t,n){t.Z=n.p+"assets/images/header-footer-7263ef824dfa8767e78927fefb1358f8.png"},72831:function(e,t,n){t.Z=n.p+"assets/images/list-item-1-b08036b3b952a863f9e5060a7988cf08.png"},44795:function(e,t,n){t.Z=n.p+"assets/images/make-home-9a0814541edeba3af186ae8278627e1d.png"},28738:function(e,t,n){t.Z=n.p+"assets/images/new-component-e2bd00de89c07a82b95da70f9a86048e.png"},26980:function(e,t,n){t.Z=n.p+"assets/images/page-1-9c71bee573ae3bc17f0e5fb0f4178675.png"},77499:function(e,t,n){t.Z=n.p+"assets/images/page-2-2284d838652597302c34e579e6e51130.png"},19114:function(e,t,n){t.Z=n.p+"assets/images/page-router-1-5e576ff236b4da5fe5cd6863270901a2.png"},77365:function(e,t,n){t.Z=n.p+"assets/images/page-router-props-9f5eefb31390356cc75633a37c7ddc23.png"},68744:function(e,t,n){t.Z=n.p+"assets/images/result-1-85d8a566ec259cfa08fc81698c38967e.png"},49794:function(e,t,n){t.Z=n.p+"assets/images/result-2-6108127a7b3fadb844f0bc367a2b6f45.png"},29893:function(e,t,n){t.Z=n.p+"assets/images/static-array-1-23f979af266321c0a0106c04ae337248.png"},62099:function(e,t,n){t.Z=n.p+"assets/images/step-1-3c84fc7c410cba0d2f28526e9aa330c6.png"},74966:function(e,t,n){t.Z=n.p+"assets/images/sticky-e61f04a2e65ca880b05290dbb4fb8f41.png"},89618:function(e,t,n){t.Z=n.p+"assets/images/zindex-1-8b3154645bbf542caa5043d8741abfa2.png"}}]);