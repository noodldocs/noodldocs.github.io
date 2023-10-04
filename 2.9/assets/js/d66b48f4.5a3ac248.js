"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[1968],{3905:(e,t,i)=>{i.d(t,{Zo:()=>h,kt:()=>p});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var d=a.createContext({}),r=function(e){var t=a.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},h=function(e){var t=r(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,d=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),c=r(i),u=n,p=c["".concat(d,".").concat(u)]||c[u]||g[u]||s;return i?a.createElement(p,l(l({ref:t},h),{},{components:i})):a.createElement(p,l({ref:t},h))}));function p(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,l=new Array(s);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var r=2;r<s;r++)l[r]=i[r];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},26950:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=i(87462),n=(i(67294),i(3905)),s=i(17213),l=i(44996);const o={title:"Google Sheets Filtering",hide_title:!0},d="Google Sheets Filtering",r={unversionedId:"modules/gsheets/guides/filtering/README",id:"modules/gsheets/guides/filtering/README",title:"Google Sheets Filtering",description:"What you will learn in this guide",source:"@site/library/modules/gsheets/guides/filtering/README.mdx",sourceDirName:"modules/gsheets/guides/filtering",slug:"/modules/gsheets/guides/filtering/",permalink:"/2.9/library/modules/gsheets/guides/filtering/",draft:!1,tags:[],version:"current",frontMatter:{title:"Google Sheets Filtering",hide_title:!0},sidebar:"gsheetsSidebar",previous:{title:"Park Details View",permalink:"/2.9/library/modules/gsheets/guides/park-details/"},next:{title:"Query Sheet",permalink:"/2.9/library/modules/gsheets/node-docs/query-sheet/"}},h={},c=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"Creating the visual Filters component and adding it to the App component",id:"creating-the-visual-filters-component-and-adding-it-to-the-app-component",level:2},{value:"Hiding and Showing the Filters component",id:"hiding-and-showing-the-filters-component",level:2},{value:"Finishing the visuals for the Filters component",id:"finishing-the-visuals-for-the-filters-component",level:2},{value:"Using Query Sheet Aggregate nodes to set the min and max value of the Slider",id:"using-query-sheet-aggregate-nodes-to-set-the-min-and-max-value-of-the-slider",level:2},{value:"Getting a list of all states",id:"getting-a-list-of-all-states",level:2},{value:"Adding All option to states Dropdown",id:"adding-all-option-to-states-dropdown",level:2},{value:"Creating Add All Option component",id:"creating-add-all-option-component",level:2},{value:"Adding filters.",id:"adding-filters",level:2},{value:"Summary",id:"summary",level:2}],g={toc:c},u="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"google-sheets-filtering"},"Google Sheets Filtering"),(0,n.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,n.kt)("p",null,"This guide will look at how we can apply filters to our Google Sheets data and use that in our example app."),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"If you haven't already followed the previous guides for the Google Sheets Module, it's recommended to do that before starting this guide. You can find them ",(0,n.kt)("a",{parentName:"p",href:"library/modules/gsheets/guides/setting-up/"},"part 1 here")," and ",(0,n.kt)("a",{parentName:"p",href:"/library/modules/gsheets/guides/park-details"},"part 2 here"),"."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(64547).Z,width:"2312",height:"1744"}))),(0,n.kt)("p",null,"We will go though the following steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Creating a visual filter component."),(0,n.kt)("li",{parentName:"ul"},"Using the Query Sheet Aggregate node to pull out specific data from different columns in the Google Sheet and then use that data to populate a Dropdown node and Slider that will be used for filtering."),(0,n.kt)("li",{parentName:"ul"},"Creating filters on the Query Sheet node.")),(0,n.kt)("h2",{id:"creating-the-visual-filters-component-and-adding-it-to-the-app-component"},"Creating the visual Filters component and adding it to the App component"),(0,n.kt)("p",null,"Let's first create a new visual component that we will call Filters."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(81014).Z,width:"1162",height:"700"}))),(0,n.kt)("p",null,"To begin with we will style the Group node in the Filters component like this:"),(0,n.kt)("div",{className:"ndl-image-with-background s"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(70875).Z,width:"558",height:"1472"}))),(0,n.kt)("div",{className:"ndl-image-with-background s"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(61619).Z,width:"550",height:"1840"}))),(0,n.kt)("p",null,"We will soon get back to building out this component, but before we do that, let's add some functionality and visuals in the App component so that we can bring up our Filter component. The first thing we will do is to add a Button. Let's call it Filter Button."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(44532).Z,width:"1686",height:"966"}))),(0,n.kt)("p",null,"Then let's style the button. We will remove the label and use an icon for the button just like in the images below. It's important that the Button's Position property is set to Absolute. That way we get it to float on top of our Park Details view."),(0,n.kt)("div",{className:"ndl-image-with-background s"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(23757).Z,width:"576",height:"1986"}))),(0,n.kt)("p",null,"Now that we have a button, let's add an area for our Filters component. Let's add a Group like this:"),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(26337).Z,width:"1670",height:"956"}))),(0,n.kt)("p",null,"This Group has a bit of styling, and again it's important that the Position is set to Absolute so that it will be on top of our Park Details. Here's the actual styling for the Group."),(0,n.kt)("div",{className:"ndl-image-with-background "},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(51850).Z,width:"564",height:"1544"}))),(0,n.kt)("p",null,"Let's add our Filters component as a child to the Group. The visual node tree in the App component should now look like the first image below, and your preview should look something like the second image."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(96348).Z,width:"1746",height:"1070"}))),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(91154).Z,width:"2306",height:"1760"}))),(0,n.kt)("h2",{id:"hiding-and-showing-the-filters-component"},"Hiding and Showing the Filters component"),(0,n.kt)("p",null,"We don't want the Filters component to always be visible, it should only show when you click the Filter Button, and then if you click the Filter Button again, it should hide. We can easily add this functionality by using a Switch node, and hook it up like below:"),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(14857).Z,width:"1054",height:"1150"}))),(0,n.kt)("p",null,"Now, when you click on the Filter Button you should alternately hide and show the Filters component."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(88085).Z,width:"2316",height:"1768"}))),(0,n.kt)("h2",{id:"finishing-the-visuals-for-the-filters-component"},"Finishing the visuals for the Filters component"),(0,n.kt)("p",null,"Let's select the Filters component again and finish building the visuals. The idea is that we should be able to filter the list of national parks based on which state they are in and/or what size they have. A Dropdown node would be a good pick for a UI element to select a state from, and to choose a size, a Slider node would be good to use. Add nodes to the Filters component so that you have a visual tree that looks like the image below. We will go through each node and it's properties next."),(0,n.kt)("div",{className:"ndl-image-with-background "},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(69646).Z,width:"616",height:"780"}))),(0,n.kt)("p",null,"The Dropdown node that we will use to select which state to filter on has been styled as below:"),(0,n.kt)("div",{className:"ndl-image-with-background "},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(48766).Z,width:"570",height:"1708"}))),(0,n.kt)("p",null,"Next we have a Group node that holds two text nodes. The Group has been named Slider Info and it has the following styling:"),(0,n.kt)("div",{className:"ndl-image-with-background "},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(67669).Z,width:"558",height:"1534"}))),(0,n.kt)("p",null,"The two text nodes that follow have slightly different styling from each other. The first one is a Label for the Slider and it has the following styling:"),(0,n.kt)("div",{className:"ndl-image-with-background "},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(9563).Z,width:"560",height:"1566"}))),(0,n.kt)("p",null,"The second Text node that will hold the Current Slider Value looks like this:"),(0,n.kt)("div",{className:"ndl-image-with-background "},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(68005).Z,width:"546",height:"1932"}))),(0,n.kt)("p",null,"Lastly we have the Slider node where we have only changed the padding a bit:"),(0,n.kt)("div",{className:"ndl-image-with-background "},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(80799).Z,width:"560",height:"702"}))),(0,n.kt)("h2",{id:"using-query-sheet-aggregate-nodes-to-set-the-min-and-max-value-of-the-slider"},"Using Query Sheet Aggregate nodes to set the min and max value of the Slider"),(0,n.kt)("p",null,"The Slider component will be used to set a number that we want to be between the smallest sized national park and the largest sized national park. In our Google Sheet we have a column for size so it would be cool if we could figure what the smallest and largest number is in this column. This is where the ",(0,n.kt)("a",{parentName:"p",href:"/library/modules/gsheets/node-docs/query-sheet-aggregate"},"Query Sheet Aggregate")," node comes in. This node is used to do aggregate data queries on a column from a public Google Sheet which is exactly what we are after here."),(0,n.kt)("p",null,"Let's first add a Query Sheet Aggregate node to our Filters component, and fill in the following properties:"),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(55806).Z,width:"1004",height:"780"}))),(0,n.kt)("p",null,"As you can see we need to tell the node which Google Sheet document it should look at (Document Id: 1gjttBIT4bHGFS8ynF31DoYw143ZY3UAiwopAW0N97KQ) and which sheet in that document we are interested in. Once the node has that information it will present a list of all the columns that the specific sheet has. Here we want to pick the Size (km2) column, and then we can choose how we want to aggregate the data of that column. We want to set up a Slider with a minimum and maximum value, so let's select Max to get the maximum value of the Size (km2) column."),(0,n.kt)("div",{className:"ndl-image-with-background "},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(29208).Z,width:"558",height:"632"}))),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(18033).Z,width:"966",height:"814"}))),(0,n.kt)("p",null,"Then we connect it to the Slider like this:"),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(17052).Z,width:"1218",height:"978"}))),(0,n.kt)("p",null,"Now we need another Query Sheet Aggregate node to get the minimum value so let's add one and set it's properties as follows, and also hook it up as in the second image:"),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(2266).Z,width:"1076",height:"810"}))),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(68046).Z,width:"1568",height:"1104"}))),(0,n.kt)("p",null,"Now the Slider has it's min and max value set, so let's now make sure that we show the current value of the slider in our Current Slider Value Text node. It would also be nice to show that the number is in km",(0,n.kt)("sup",null,"2")," so we will add a String Format node and set it up like this:"),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(26354).Z,width:"558",height:"412"}))),(0,n.kt)("p",null,"Then let's connect everything like this:"),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(97549).Z,width:"1674",height:"1048"}))),(0,n.kt)("p",null,"The reason we hook up the result from the Query Sheet Aggregate - Min Size, is so that we show the initial slider value when we first open up the Filters component. The Value output from the Slider only updates as we interact with the Slider so the initial value needs to be set from the Query Sheet Aggregate - Min Size."),(0,n.kt)("h2",{id:"getting-a-list-of-all-states"},"Getting a list of all states"),(0,n.kt)("p",null,"Now that we know how to use the Query Sheet Aggregate node, let's use it again, to get a list of all states that are in our Google Sheet for US national parks. This time we will set the Aggregare property to unique which means the node will return an array of all the unique values from the states column."),(0,n.kt)("p",null,"?> Note that some parks span two states, e.g. the Great Smoky Mountains are in both North Carolina and Tennessee. We have chosen to treat North Carolina, Tennessee as it's own option in the states list. A different solution would be to have two entries for Great Smoky Mountains, one for each state it's in."),(0,n.kt)("div",{className:"ndl-image-with-background "},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(38898).Z,width:"578",height:"742"}))),(0,n.kt)("p",null,"Let's connect it to our Dropdown node, and then click on the Dropdown list in the preview."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(72169).Z,width:"1548",height:"1150"}))),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(10691).Z,width:"2398",height:"1754"}))),(0,n.kt)("p",null,"This looks pretty good, but there is one problem. There is no option for selecting All states which is the initial state of our list. To solve this, we need to add another option to the array of states."),(0,n.kt)("h2",{id:"adding-all-option-to-states-dropdown"},"Adding All option to states Dropdown"),(0,n.kt)("p",null,"The result we get from the Query Sheet Aggregate - States is an array of items, so let's create a new Array and call it AllStates and then connect the result from Query Sheet Aggregate - States to the Items input of the Array:"),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(41092).Z,width:"2204",height:"1544"}))),(0,n.kt)("p",null,"Next we want to use a Create New Object node to create a new object that we can then insert into the Array. Set up the Create New Object node like below and then we connect it like in the second image."),(0,n.kt)("div",{className:"ndl-image-with-background"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(24975).Z,width:"558",height:"936"}))),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(85497).Z,width:"1806",height:"1698"}))),(0,n.kt)("p",null,"Now that we have a new Object, we want to insert it into our Array and we do that with an Insert Object Into Array node. Connect everything like below:"),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(70900).Z,width:"1596",height:"504"}))),(0,n.kt)("p",null,"Our AllStates Array contains one extra option, the All option. Before we connect it to our Dropdown, let's make sure that the Array is sorted alphabetically, so we will connect an Array Filter node like in the image below. Here it's important that we use the Done signal from the Insert Object Into Array node, to tell the Array Filter to do the sorting, as that ensures that the All option is in the Array before we do the sorting."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(84776).Z,width:"1766",height:"912"}))),(0,n.kt)("p",null,"The Array Filter node should sort on the Value property of the items in the array, and we can do that by setting it up like this:"),(0,n.kt)("div",{className:"ndl-image-with-background "},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(88887).Z,width:"558",height:"938"}))),(0,n.kt)("p",null,"We could now make a connection from the Array Filter to the Dropdown, but as you can see the Filters component is getting quite big in terms of nodes."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(53842).Z,width:"2464",height:"1786"}))),(0,n.kt)("p",null,"Let's turn the selected nodes below into it's own Logic Component."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(69439).Z,width:"2464",height:"1786"}))),(0,n.kt)("h2",{id:"creating-add-all-option-component"},"Creating Add All Option component"),(0,n.kt)("p",null,"From the Component Actions button, select Logic Component and name it Add All Option."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(85302).Z,width:"732",height:"606"}))),(0,n.kt)("p",null,"Then from the Filters node, cut out the marked nodes and paste them into the Add All Option component (use standard keyboard shortcuts for cutting and pasting). It should now look like below."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(40589).Z,width:"2662",height:"1210"}))),(0,n.kt)("p",null,"Let's add a port to the Component Inputs node that we call Items:"),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(82893).Z,width:"1108",height:"844"}))),(0,n.kt)("p",null,"We also want to send out the sorted array, so let's add a port on the Component Outputs node called Sorted Items."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(44281).Z,width:"560",height:"504"}))),(0,n.kt)("p",null,"Now we just make the following connections."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(20085).Z,width:"2642",height:"1260"}))),(0,n.kt)("p",null,"Back in the Filters component let's add out newly create Add All Options node, and hook it up like this:"),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(74646).Z,width:"1938",height:"1572"}))),(0,n.kt)("p",null,"Now we have a nice Dropdown with our All option as well."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(3231).Z,width:"2034",height:"1756"}))),"Only problem is there is no initial value set in the Dropdown.",(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(1324).Z,width:"2274",height:"1746"}))),(0,n.kt)("p",null,'We can easily fix that but adding a String node and giving it the value "A" and then connecting it like the image below:'),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(12360).Z,width:"2502",height:"1576"}))),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(78462).Z,width:"2046",height:"1758"}))),(0,n.kt)("h2",{id:"adding-filters"},"Adding filters."),(0,n.kt)("p",null,"All of our visuals are now set up. All that is missing are the actual filters. Let's work on those now."),(0,n.kt)("p",null,"First let's add a new Logic Component that we call State and Size Filter."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(60678).Z,width:"2582",height:"1046"}))),(0,n.kt)("p",null,"Add two ports to the Component Inputs node called Selected State and Size. You can also delete the Component Outputs node, we won't need that."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(67915).Z,width:"1144",height:"452"}))),(0,n.kt)("p",null,"Jump back to the Filters component and add the State and Size Filter component and hook it up like this:"),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(69425).Z,width:"2608",height:"1694"}))),(0,n.kt)("p",null,"Now, we head back to the State and Size Filter component. Let's first make a filter for Size. We will add a Query Sheet node, and set it up like this."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(14949).Z,width:"566",height:"924"}))),(0,n.kt)("p",null,"The Query Sheet node has a very nice visual filter builder so click here to add a filter:"),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(38492).Z,width:"556",height:"200"}))),(0,n.kt)("p",null,"Then let's build out our filter using the visual builder. The following images show you each step. T"),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(29490).Z,width:"952",height:"304"}))),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(40254).Z,width:"1280",height:"302"}))),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(55136).Z,width:"1722",height:"336"}))),(0,n.kt)("p",null,"In this final step it's important to change the Value to Input, and then you can change the MyInput to a better name, like Size for instance."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(52554).Z,width:"1758",height:"400"}))),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(4122).Z,width:"1736",height:"292"}))),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(67836).Z,width:"1734",height:"374"}))),(0,n.kt)("p",null,"We are going to add one more Query Sheet node, and this one we will call Query Sheet State and Size Filter. Then add two filters to it so the final properties for it looks like this:"),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(7076).Z,width:"1588",height:"1270"}))),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(56600).Z,width:"1674",height:"1260"}))),(0,n.kt)("p",null,"Next, we want to take the output from our Query Sheet nodes and hook them up to the Array node with the id Parks. If you remember from the previous guides, we are using this Array to feed the Repeater node that creates our list. If the Array is updated or changed, the Repeater node will automatically rerender, so everytime we get a new result from our filter nodes the list will update."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(71671).Z,width:"1180",height:"782"}))),(0,n.kt)("p",null,"So why did we create two Query Sheet nodes with two different filters. It's so that we can handle the case when we choose All as the option in the Dropdown list. All is not a state that exists in our sheet, so the filter that is looking at both state and size will fail everytime we feed A into it. So to handle this we will use an expression in combination with a condition node to check if we are looking at all states, in which case we will just filter on size, or if we have selected a specific state, then we can filter on both state and size. The images below first show the expression in the Expression node, and the second image shows how everything should be connected."),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(79714).Z,width:"1946",height:"1000"}))),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(65231).Z,width:"1992",height:"916"}))),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,'In this guide we added filters to our National Parks and used the Query Sheets Aggregate nodes. Hope you enjoyed it, and you can import the final project by clicking the "Import" button below and follow the instructions.'),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("img",{src:(0,l.Z)("/modues/gsheets/guides/filtering/filter-final-preview.gif"),className:"ndl-image small"}),(0,n.kt)(s.Z,{zip:"gsheets-part3-1.zip",name:"Google Sheets National Parks",thumb:"filter-view.png",mdxType:"ImportButton"})))}p.isMDXComponent=!0},17213:(e,t,i)=>{i.d(t,{Z:()=>s});var a=i(67294),n=i(39671);function s(e){let{zip:t,name:i,thumb:s,cf:l}=e;return a.createElement("button",{className:"ndl-import-button",onClick:()=>(0,n.I)(t,{name:i,thumb:s,cf:l})})}},39671:(e,t,i)=>{i.d(t,{I:()=>n});var a=i(36809);function n(e,t){let i=[];t&&void 0!==t.name&&i.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&i.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+a.default.baseUrl+t.thumb)),t&&void 0!==t.cf&&i.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+a.default.baseUrl+"/"+t.cf));var n="noodl:import/"+location.protocol+"//"+location.host+a.default.baseUrl+e+(i.length>0?"?"+i.join("&"):"");console.log("Importing into Noodl:",n),console.log(e),window.location.href=n}},20085:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/add-all-final-95f0eb979c93c23c2ad0e1673076840c.png"},74646:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/add-all-in-filters-0e88197f6ee0103dfbbf83bee26a3b29.png"},38492:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/add-filter-db590ff9a9cebcf7a4d44bb3f3b1b6c3.png"},55806:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/aggregate-1-bbab2fd133ea332821bfde9715a6c127.png"},29208:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/aggregate-column-choice-86000fefe586b1016707415a39e2d38a.png"},18033:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/aggregate-max-70f550716fb62dd0c5d5b0ad9b311237.png"},68046:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/aggregate-min-connected-e7ce9fbfc4d85485d389d915437bee07.png"},2266:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/aggregate-min-props-5c0f37e4b7426427f3466df38639becb.png"},17052:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/aggregate-slider-connect-d8d4797ea74b2adf003cef41795168d3.png"},26354:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/aggregate-string-format-1a25bddb6b10857ffb36a3cc576bd0cd.png"},41092:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/allstates-array-af402f02d5f9fd95866cae611efec259.png"},51850:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/app-filter-group-props-7ac721779a78929a24acde3ee3992d79.png"},96348:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/app-tree-filters-4254f794418feb032fc773d8053a6c8c.png"},88887:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/array-filter-props-c064f01058a13a010b250615aaa716e3.png"},84776:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/array-filter-9fb731292249e76ef6051a6f431ce02a.png"},53842:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/big-filters-226949b47422521190f0a0a5f280215c.png"},29490:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/build-filter-1-69d4566c4e7bf9ec89f66c56155098b8.png"},40254:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/build-filter-2-0d42e72bd01124c765fbf298343b864e.png"},55136:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/build-filter-3-52a1f03fc2367bb8c69f3ead6c99bd84.png"},52554:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/build-filter-4-6e81ab50f7297a3ce36690f58402b3af.png"},4122:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/build-filter-5-2bfe4c428a4ad8d0f862e74f2f41fdc7.png"},67836:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/build-filter-6-23331f86575d298511748130956171d9.png"},97549:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/current-slider-val-connection-587ae9caf38ddc2a2c669db74a840048.png"},69439:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/cut-out-these-7fdc54316d7b8c593d88cc528c30c80b.png"},78462:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/dd-final-preview-876eef68e537b2d9e8ed801b2bba15b6.png"},12360:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/dd-final-b2cd1cd421201b00884c63626ff511bd.png"},1324:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/dd-initial-value-7f6607a1987f1787621fee6794043f88.png"},3231:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/dropdown-all-32234dfe6527f20a60b047254a51805d.png"},48766:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/dropdown-props-2dd748582dec7fe2eda76bb89fe1d49d.png"},79714:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/expression-props-e7ecf7bf4869b96ccfe23ed6647bc76d.png"},23757:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/filter-button-props-870e89ad0f6671ef9138a39ab2df49ea.png"},44532:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/filter-button-fe3943d8442681ff784feef7841f139d.png"},81014:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/filter-comp-386fdd7c024204bb3bbf1147aff2d595.png"},26337:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/filter-group-add-929091490feeda850a90667c31c65ac6.png"},61619:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/filter-group-props-2-6d6b3013b03e27528a3d127f04e5b469.png"},70875:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/filter-group-props-0fac7868bc15a983b4af6d6f6f59ed9e.png"},64547:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/filter-view-969d0bfd67f045945e39bb02f972b584.png"},69646:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/filters-visual-tree-052195af84a9e5126174015c99aa3106.png"},65231:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/final-node-tree-5d5ef880641f71bece9aae81cd391d6f.png"},40589:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/initial-add-all-5293abc0ab7d6b7d7fb947a6018326b8.png"},82893:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/input-port-5a6e8c3c3a871f9abd0689f0139ad6ce.png"},70900:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/insert-new-object-connected-20bae5ecc47b3860a78a4d655231b9ef.png"},85302:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/logic-comp-cc6e38b543cb528e0265b9378a7073a4.png"},85497:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/new-object-connected-1cc88048f8776cbcf4246d62b173d7c4.png"},24975:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/new-object-3ab728ec762513f8583c8770d4ef9d65.png"},44281:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/output-port-92399e78c4d6b2012dfa3f26a7f7033a.png"},91154:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/preview-initial-filters-0d99ea44a38dad1013d914c2235834ad.png"},14949:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/query-sheet-size-filter-b0186ca6df2a86fe30c336c2b17942fc.png"},71671:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/query-sheet-to-arrays-dc2332b4dd4331167382a7d796ed78d3.png"},88085:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/show-hide-cef0e89c6b89f5f4543d560bb9b507bb.gif"},67669:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/slider-info-group-props-477d53da7a67ca742929c65cfb16f48f.png"},9563:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/slider-label-6ac9b8311ca14b986013d8f2e4958d53.png"},80799:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/slider-props-4abd3036d099b5275cf3cddbeb950bec.png"},68005:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/slider-value-1297b3621bd9a6e8f5e5a4fe463766e0.png"},60678:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/state-size-filter-comp-ee5a74dfb9caab41c09a2e0cb2ea6961.png"},69425:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/state-size-filter-in-filters-aca99458ad0cde537d85c66dbd354fb1.png"},67915:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/state-size-filter-inputs-1db5e4d598fb3249cff35d470346a0eb.png"},7076:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/state-size-filter-props-1-27cca0ef49ae6a8b303c42e6de88d372.png"},56600:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/state-size-filter-props-2-6ac6636fdcf8aa7555bd65e40699aaad.png"},38898:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/states-aggregate-2e4b16f6d2a4a66811bd48060ad19512.png"},72169:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/states-dropdown-connection-1-7efc0a2972617f71ef78c28179101e80.png"},10691:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/states-dropdown-preview-888fb4e9d749a5e7192e6d5c8c2ecffd.png"},14857:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/switch-da5fc2c00e1acce4b35450d261eb3c5a.png"}}]);