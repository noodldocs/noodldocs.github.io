"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[2993],{3905:function(e,t,i){i.d(t,{Zo:function(){return h},kt:function(){return g}});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var r=a.createContext({}),d=function(e){var t=a.useContext(r),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},h=function(e){var t=d(e.components);return a.createElement(r.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=d(i),g=n,p=c["".concat(r,".").concat(g)]||c[g]||u[g]||o;return i?a.createElement(p,l(l({ref:t},h),{},{components:i})):a.createElement(p,l({ref:t},h))}));function g(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,l=new Array(o);l[0]=c;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var d=2;d<o;d++)l[d]=i[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}c.displayName="MDXCreateElement"},57745:function(e,t,i){i.r(t),i.d(t,{assets:function(){return c},contentTitle:function(){return h},default:function(){return m},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return g}});var a=i(83117),n=i(80102),o=(i(67294),i(3905)),l=i(17213),s=i(44996),r=["components"],d={title:"Setting up the Google Sheets Module",hide_title:!0},h="Setting up the Google Sheets Module",u={unversionedId:"modules/gsheets/guides/setting-up/README",id:"modules/gsheets/guides/setting-up/README",title:"Setting up the Google Sheets Module",description:"What you will learn in this guide",source:"@site/library/modules/gsheets/guides/setting-up/README.mdx",sourceDirName:"modules/gsheets/guides/setting-up",slug:"/modules/gsheets/guides/setting-up/",permalink:"/2.8/library/modules/gsheets/guides/setting-up/",tags:[],version:"current",frontMatter:{title:"Setting up the Google Sheets Module",hide_title:!0},sidebar:"gsheetsSidebar",previous:{title:"Google Sheets Module",permalink:"/2.8/library/modules/gsheets/"},next:{title:"Park Details View",permalink:"/2.8/library/modules/gsheets/guides/park-details/"}},c={},g=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"Install the Google Sheets Module",id:"install-the-google-sheets-module",level:2},{value:"Getting data from a Query Sheet",id:"getting-data-from-a-query-sheet",level:2},{value:"Creating the Park List component",id:"creating-the-park-list-component",level:2},{value:"Building the list items",id:"building-the-list-items",level:2},{value:"Using the Sheet Row node in our List Items",id:"using-the-sheet-row-node-in-our-list-items",level:2},{value:"Summary",id:"summary",level:2}],p={toc:g};function m(e){var t=e.components,d=(0,n.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,d,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-the-google-sheets-module"},"Setting up the Google Sheets Module"),(0,o.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,o.kt)("p",null,"This guide will show you how to include the Google Sheets module in a project and how to get data from a Google Sheet into your Noodl project."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"In this guide we will build a small application where we display a list of US National Parks. We will get the data for the parks from a public Google Sheet."),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(71110).Z,width:"940",height:"1762"}))),(0,o.kt)("p",null,"We will go though the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install the Google Sheets Module in a Noodl Project."),(0,o.kt)("li",{parentName:"ul"},"Set up a Query Sheets node to pull data from a public Google Sheet"),(0,o.kt)("li",{parentName:"ul"},"Create a small list based on the data from the Google Sheet")),(0,o.kt)("h2",{id:"install-the-google-sheets-module"},"Install the Google Sheets Module"),(0,o.kt)("p",null,'The easiest way to get started with the Google Sheets Module is to use the "GSheets" template when creating a new project in Noodl. In that template, the Google Sheets module is already included.'),(0,o.kt)("p",null,"However, if you have an existing project, or want to start from a different template, it's easy to get started as well. Just follow these instructions."),(0,o.kt)("p",null,'When in the project, open the "Library" tab to the left. Find the "GSheet" module and click "Add".'),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(13229).Z,width:"770",height:"1984"}))),(0,o.kt)("p",null,"After the module is imported, you should now be able to find the ",(0,o.kt)("a",{parentName:"p",href:"/library/modules/gsheets/node-docs/query-sheet"},"Query Sheet"),", ",(0,o.kt)("a",{parentName:"p",href:"/library/modules/gsheets/node-docs/query-sheet-aggregate"},"Query Sheet Aggregate")," and ",(0,o.kt)("a",{parentName:"p",href:"/library/modules/gsheets/node-docs/sheet-row"},"Sheet Row"),' nodes in the node picker. Right click in the node editor area to bring up the node picker. Look under "External libraries" to find the ',(0,o.kt)("strong",{parentName:"p"},"Google Sheets")," nodes."),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(28722).Z,width:"550",height:"1206"}))),(0,o.kt)("h2",{id:"getting-data-from-a-query-sheet"},"Getting data from a Query Sheet"),(0,o.kt)("p",null,"In this guide we will start building from the Hello World template."),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(58920).Z,width:"1590",height:"1836"}))),(0,o.kt)("p",null,"Go ahead and delete the text node and you should end up just having a Group node as in the image below:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(43687).Z,width:"2914",height:"2012"}))),(0,o.kt)("p",null,"Then style your group like this:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(38827).Z,width:"764",height:"1550"}))),(0,o.kt)("p",null,"Before we build out our simple list UI, let's have a look at the Google Sheet that contains our data. You will find the document ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1gjttBIT4bHGFS8ynF31DoYw143ZY3UAiwopAW0N97KQ/"},"here.")),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(30138).Z,width:"3290",height:"2018"}))),(0,o.kt)("p",null,"The document contains three different sheets, but we are only interested in the sheet named Parks."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(56561).Z,width:"672",height:"112"}))),(0,o.kt)("p",null,"To get all the data from the Parks sheet into our Noodl project we will use a Query Sheets node, so let's add that and have a look at the properties."),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(56573).Z,width:"1226",height:"656"}))),(0,o.kt)("p",null,"The Document Id property takes the id of the Google Sheet document, and we get that from this part of the Google Sheet URL (1gjttBIT4bHGFS8ynF31DoYw143ZY3UAiwopAW0N97KQ):"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(5382).Z,width:"1946",height:"200"}))),(0,o.kt)("p",null,"Let's also fill in the name of the sheet we are interested wich is Parks. After you have done this, the properies of the Google Sheet node should look like this:"),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(73914).Z,width:"560",height:"902"}))),(0,o.kt)("p",null,"We will leave the Use Column For Id property set to Unique id, but you can select a column that will become the Id of the Noodl Objects that will represent each row. It's important that the values in this column are unique. Since we have chosen Unique Id, Noodl will generate it's own id's for us."),(0,o.kt)("p",null,"We can now get the data from the Query Sheet on the Items output, so let's create an Array node and give it the Id Parks and connect it like this:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(59853).Z,width:"1572",height:"866"}))),(0,o.kt)("p",null,"Now that we have all of the parks in an Array node, let's build out our list."),(0,o.kt)("h2",{id:"creating-the-park-list-component"},"Creating the Park List component"),(0,o.kt)("p",null,"First let's create a new visual component that we will call Park List."),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(97976).Z,width:"686",height:"432"}))),(0,o.kt)("p",null,"The Park List component will be pretty simple. First let's enable scroll on the Group, by setting the following property."),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(65073).Z,width:"568",height:"2004"}))),(0,o.kt)("p",null,"Next we will add a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/ui-controls/repeater"},"Repeater")," node as a child to our Group. The ",(0,o.kt)("a",{parentName:"p",href:"/nodes/ui-controls/repeater"},"Repeater")," node is used to generate one component for each row in the Parks Array so let's also add an Array node and give it the Parks id."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(69384).Z,width:"2260",height:"1022"}))),(0,o.kt)("p",null,"Then we connect it to the Repeater node like this."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(47519).Z,width:"1210",height:"562"}))),(0,o.kt)("p",null,"Now let's jump back to our App component and add a Group that we will call List Container."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(60588).Z,width:"598",height:"444"}))),(0,o.kt)("p",null,"Let's set this List Container to be 400 px in width and then let's add the Park List component as a child."),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(44146).Z,width:"550",height:"1178"}))),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(32778).Z,width:"1568",height:"856"}))),(0,o.kt)("p",null,"Now let's jump back to the Park List component and look at the Repeater properties. We need to tell the Repeater node which component it should generate, so before we fill this in, let's create our list items."),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(63860).Z,width:"560",height:"396"}))),(0,o.kt)("h2",{id:"building-the-list-items"},"Building the list items"),(0,o.kt)("p",null,"Let's create the visuals for our list items first by creating a new Visual Component that we call List Item."),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(67671).Z,width:"764",height:"382"}))),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(66854).Z,width:"704",height:"392"}))),(0,o.kt)("p",null,"The list items shouldn't be too tall so let's set an explicit height to 100 pixels and let's add some padding and change the Layout to Horizontal. We also want a nice bottom border."),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(74818).Z,width:"556",height:"1538"}))),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(51090).Z,width:"548",height:"362"}))),(0,o.kt)("p",null,"The items should all show an image as well as the park name and which state the park is located, so let's add nodes so that we get the following node tree:"),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(1485).Z,width:"530",height:"654"}))),(0,o.kt)("p",null,"Now set the Image properties like in the image below."),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(88694).Z,width:"556",height:"1260"}))),(0,o.kt)("p",null,"The Group that holds the two Text nodes is using all the default settings so we don't need to change anything there, but set the properties of the Park Name Text node to:"),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(31502).Z,width:"812",height:"1628"}))),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(86237).Z,width:"784",height:"802"}))),(0,o.kt)("p",null,"The State Text node should have the following properties:"),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(75163).Z,width:"802",height:"2014"}))),(0,o.kt)("p",null,"Now that we have visuals for our list items, we can tell the Repeater node in the Park List component to use this as the template so let's do that:"),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(48181).Z,width:"1300",height:"846"}))),(0,o.kt)("p",null,"If you reload your project now you should see the following in the preview window."),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(52810).Z,width:"944",height:"1756"}))),(0,o.kt)("p",null,"This is great, now let's make sure each list item displays the correct data."),(0,o.kt)("h2",{id:"using-the-sheet-row-node-in-our-list-items"},"Using the Sheet Row node in our List Items"),(0,o.kt)("p",null,"Let's go back to our List Item component and add a Sheet Row node."),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(25662).Z,width:"1292",height:"852"}))),(0,o.kt)("p",null,"The Sheet Row node can point to a specific row in the Google Sheet, but we need to tell it which row by providing an Id. That Id we will get from a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/ui-controls/repeater-item"},"Repeater Item")," node. This all works exactly the same as it does when you are working with the Noodl Query Records and Record nodes, and you can read more about that in this ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/cloud-data/quering-records-from-database"},"guide.")),(0,o.kt)("p",null,"Connect the Repeater Item and Sheet row like below"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(51330).Z,width:"860",height:"488"}))),(0,o.kt)("p",null,"Now, the Sheet Row node should have a bunch of new outputs. Let's hook them up like this:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(35674).Z,width:"1460",height:"1020"}))),(0,o.kt)("p",null,"You should now see something like this in your preview window, and you should be able to scroll your list."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(71110).Z,width:"940",height:"1762"}))),(0,o.kt)("p",null,"Before we finish, let's add a little bit of logic to highlight which List Item is selected. Create a States node and set it up like this:"),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(8197).Z,width:"562",height:"1752"}))),(0,o.kt)("p",null,"Let's also add an Expression node and set it up like this:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(74923).Z,width:"1960",height:"1002"}))),(0,o.kt)("p",null,"Finally we will add a Variable node with the name SelectedRowId, a Set Variable node, and a Condition node. Then we will hook it all up like this:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(72825).Z,width:"2790",height:"1718"}))),(0,o.kt)("p",null,"Now when you click on an item in the list it should become highlighted."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(90473).Z,width:"798",height:"1068"}))),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,'In this guide we built a list of National Parks using data from a Google Sheet. If you want to import the final project, click the "Import" button below and follow the instructions.'),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("img",{src:(0,s.Z)("/modules/gsheets/guides/setting-up/parks-final.gif"),className:"ndl-image small"}),(0,o.kt)(l.Z,{zip:"gsheets-part1-1-2.zip",name:"Google Sheets Getting Started",thumb:"final-result.png",mdxType:"ImportButton"})),(0,o.kt)("p",null,"In the next guide, we will create a details view for our parks, and in the final guide we will look at how we can filter the data we get in the Query Sheet node."))}m.isMDXComponent=!0},17213:function(e,t,i){i.d(t,{Z:function(){return o}});var a=i(67294),n=i(39671);function o(e){var t=e.zip,i=e.name,o=e.thumb,l=e.cf;return a.createElement("button",{className:"ndl-import-button",onClick:function(){return(0,n.I)(t,{name:i,thumb:o,cf:l})}})}},39671:function(e,t,i){i.d(t,{I:function(){return n}});var a=i(99782);function n(e,t){var i=[];t&&void 0!==t.name&&i.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&i.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+a.default.baseUrl+t.thumb)),t&&void 0!==t.cf&&i.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+a.default.baseUrl+"/"+t.cf));var n="noodl:import/"+location.protocol+"//"+location.host+a.default.baseUrl+e+(i.length>0?"?"+i.join("&"):"");console.log("Importing into Noodl:",n),console.log(e),window.location.href=n}},32778:function(e,t,i){t.Z=i.p+"assets/images/app-with-parks-list-d041b366c38b6b00a6fc4a9e336704cb.png"},69384:function(e,t,i){t.Z=i.p+"assets/images/array-parks-id-b07d36be8c695468f4ff9855409f30d7.png"},47519:function(e,t,i){t.Z=i.p+"assets/images/array-to-repeater-1caa6a7a5e02ed19fbd4af114db2b8a0.png"},67671:function(e,t,i){t.Z=i.p+"assets/images/create-list-item-1-8e339de4db5bf5fb0f9bab60885787ef.png"},66854:function(e,t,i){t.Z=i.p+"assets/images/create-list-item-2-4462108b1c2a71947a719ff2ba05541a.png"},97976:function(e,t,i){t.Z=i.p+"assets/images/create-scroll-list-aaeed431d69a348861642d0381ea5051.png"},74923:function(e,t,i){t.Z=i.p+"assets/images/expression-node-83c0d7e8cc113325991e248536cc7c7a.png"},72825:function(e,t,i){t.Z=i.p+"assets/images/final-item-node-755f30339b35267c74525a804f2e4385.png"},90473:function(e,t,i){t.Z=i.p+"assets/images/final-result-852295118f79500eeb9955c3dbcbbdda.png"},30138:function(e,t,i){t.Z=i.p+"assets/images/google-sheet-1-eeb224e01263c126b2e931e11ade14cc.png"},5382:function(e,t,i){t.Z=i.p+"assets/images/google-sheet-id-2e48e5fb4bd497120eba234cebc0ce39.png"},56561:function(e,t,i){t.Z=i.p+"assets/images/google-sheet-sheetnames-60962bce682d1b7bf4035371aa4f6ca7.png"},38827:function(e,t,i){t.Z=i.p+"assets/images/group-props-2cdd2a669dd37f2d65d3f9d8e8b66e3d.png"},52810:function(e,t,i){t.Z=i.p+"assets/images/halfway-preview-f62f76230a08f12bb1ef2b5d31509c5d.png"},43687:function(e,t,i){t.Z=i.p+"assets/images/hello-world-deleted-128dcc2fda5bfbff879dac3961d6116a.png"},58920:function(e,t,i){t.Z=i.p+"assets/images/hello-world-82351dfe902ae8449125132c25ea9558.png"},59853:function(e,t,i){t.Z=i.p+"assets/images/items-to-array-7e7138f3f076e8abbbf8b2fca1443a12.png"},44146:function(e,t,i){t.Z=i.p+"assets/images/list-container-props-97b3123948758b4a633befd34c14e3b1.png"},51090:function(e,t,i){t.Z=i.p+"assets/images/list-item-group-border-02c2e585fd54790f290f98653f41f7c9.png"},74818:function(e,t,i){t.Z=i.p+"assets/images/list-item-group-props-1e6fb4f8e1e32815a285882be29be1a6.png"},88694:function(e,t,i){t.Z=i.p+"assets/images/list-item-image-props-59e61ec2ddb14aab9ccc3af27d796c12.png"},31502:function(e,t,i){t.Z=i.p+"assets/images/list-item-park-name-props-1-f569fadc1a6ea1a87c30b100f31fc70f.png"},86237:function(e,t,i){t.Z=i.p+"assets/images/list-item-park-name-props-2-05c8aff1a83e02e38da51433123ac2a4.png"},25662:function(e,t,i){t.Z=i.p+"assets/images/list-item-sheet-row-7a84e487d670367ec4c069559129c220.png"},75163:function(e,t,i){t.Z=i.p+"assets/images/list-item-state-props-92866a139f0a8e3758d31ddfdfaf1928.png"},1485:function(e,t,i){t.Z=i.p+"assets/images/list-item-tree-157632e94d896b2b09a88c22d6ee5125.png"},60588:function(e,t,i){t.Z=i.p+"assets/images/main-app-list-container-bfd4ebc96fd928bfc68d3a094c713c9b.png"},13229:function(e,t,i){t.Z=i.p+"assets/images/module-1-b4cba144dc2fb55f1f74b53ba0458829.png"},28722:function(e,t,i){t.Z=i.p+"assets/images/nodepicker-1-b6cd7646e4fb4ab16af159cabfbdf759.png"},71110:function(e,t,i){t.Z=i.p+"assets/images/parks-list-filled-d02941437795c1ce92b3b7bba6ee9dc4.png"},73914:function(e,t,i){t.Z=i.p+"assets/images/query-sheet-node-filled-in-5cb1e23c58df8b680811d114a4b90c57.png"},56573:function(e,t,i){t.Z=i.p+"assets/images/query-sheet-node-43a56133c9d2746e4c1a6f1aa8347aac.png"},63860:function(e,t,i){t.Z=i.p+"assets/images/repeater-comp-c9452c01804628576a1b6e8641734e66.png"},48181:function(e,t,i){t.Z=i.p+"assets/images/repeater-filled-props-80e19047a5c5e5bbd968a859e4292992.png"},51330:function(e,t,i){t.Z=i.p+"assets/images/repeater-item-49a8ca66d86eec88c264ee4b21a09d30.png"},65073:function(e,t,i){t.Z=i.p+"assets/images/scroll-list-13ea0e4171eb0bcdc6dcfb467c3e71bb.png"},35674:function(e,t,i){t.Z=i.p+"assets/images/sheet-row-hook-up-e4fe6a0b69c416401ff97aa79a279904.png"},8197:function(e,t,i){t.Z=i.p+"assets/images/states-node-29184e7f0de49a3447d6d7979ac784a2.png"}}]);