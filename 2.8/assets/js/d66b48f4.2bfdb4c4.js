"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[1968],{3905:function(e,t,i){i.d(t,{Zo:function(){return h},kt:function(){return g}});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var d=n.createContext({}),r=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},h=function(e){var t=r(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=r(i),g=a,p=u["".concat(d,".").concat(g)]||u[g]||c[g]||o;return i?n.createElement(p,l(l({ref:t},h),{},{components:i})):n.createElement(p,l({ref:t},h))}));function g(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,l=new Array(o);l[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var r=2;r<o;r++)l[r]=i[r];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},26950:function(e,t,i){i.r(t),i.d(t,{assets:function(){return u},contentTitle:function(){return h},default:function(){return m},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return g}});var n=i(83117),a=i(80102),o=(i(67294),i(3905)),l=i(17213),s=i(44996),d=["components"],r={title:"Google Sheets Filtering",hide_title:!0},h="Google Sheets Filtering",c={unversionedId:"modules/gsheets/guides/filtering/README",id:"modules/gsheets/guides/filtering/README",title:"Google Sheets Filtering",description:"What you will learn in this guide",source:"@site/library/modules/gsheets/guides/filtering/README.mdx",sourceDirName:"modules/gsheets/guides/filtering",slug:"/modules/gsheets/guides/filtering/",permalink:"/2.8/library/modules/gsheets/guides/filtering/",tags:[],version:"current",frontMatter:{title:"Google Sheets Filtering",hide_title:!0},sidebar:"gsheetsSidebar",previous:{title:"Park Details View",permalink:"/2.8/library/modules/gsheets/guides/park-details/"},next:{title:"Query Sheet",permalink:"/2.8/library/modules/gsheets/node-docs/query-sheet/"}},u={},g=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"Creating the visual Filters component and adding it to the App component",id:"creating-the-visual-filters-component-and-adding-it-to-the-app-component",level:2},{value:"Hiding and Showing the Filters component",id:"hiding-and-showing-the-filters-component",level:2},{value:"Finishing the visuals for the Filters component",id:"finishing-the-visuals-for-the-filters-component",level:2},{value:"Using Query Sheet Aggregate nodes to set the min and max value of the Slider",id:"using-query-sheet-aggregate-nodes-to-set-the-min-and-max-value-of-the-slider",level:2},{value:"Getting a list of all states",id:"getting-a-list-of-all-states",level:2},{value:"Adding All option to states Dropdown",id:"adding-all-option-to-states-dropdown",level:2},{value:"Creating Add All Option component",id:"creating-add-all-option-component",level:2},{value:"Adding filters.",id:"adding-filters",level:2},{value:"Summary",id:"summary",level:2}],p={toc:g};function m(e){var t=e.components,r=(0,a.Z)(e,d);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"google-sheets-filtering"},"Google Sheets Filtering"),(0,o.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,o.kt)("p",null,"This guide will look at how we can apply filters to our Google Sheets data and use that in our example app."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"If you haven't already followed the previous guides for the Google Sheets Module, it's recommended to do that before starting this guide. You can find them ","[part 1 here]","(library/modules/gsheets/guides/setting-up/ and ",(0,o.kt)("a",{parentName:"p",href:"/library/modules/gsheets/guides/park-details"},"part 2 here"),"."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(87906).Z,width:"2312",height:"1744"}))),(0,o.kt)("p",null,"We will go though the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Creating a visual filter component."),(0,o.kt)("li",{parentName:"ul"},"Using the Query Sheet Aggregate node to pull out specific data from different columns in the Google Sheet and then ause that data to populate a Dropdown node and Slider that will be used for filtering."),(0,o.kt)("li",{parentName:"ul"},"Creating filters on the Query Sheet node.")),(0,o.kt)("h2",{id:"creating-the-visual-filters-component-and-adding-it-to-the-app-component"},"Creating the visual Filters component and adding it to the App component"),(0,o.kt)("p",null,"Let's first create a new visual component that we will call Filters."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(38726).Z,width:"1162",height:"700"}))),(0,o.kt)("p",null,"To begin with we will style the Group node in the Filters component like this:"),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(88089).Z,width:"558",height:"1472"}))),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(60281).Z,width:"550",height:"1840"}))),(0,o.kt)("p",null,"We will soon get back to building out this component, but before we do that, let's add some functionality and visuals in the App component so that we can bring up our Filter component. The first thing we will do is to add a Button. Let's call it Filter Button."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(7276).Z,width:"1686",height:"966"}))),(0,o.kt)("p",null,"Then let's style the button. We will remove the label and use an icon for the button just like in the images below. It's important that the Button's Position property is set to Absolute. That way we get it to float on top of our Park Details view."),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(70115).Z,width:"576",height:"1986"}))),(0,o.kt)("p",null,"Now that we have a button, let's add an area for our Filters component. Let's add a Group like this:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(58518).Z,width:"1670",height:"956"}))),(0,o.kt)("p",null,"This Group has a bit of styling, and again it's important that the Position is set to Absolute so that it will be on top of our Park Details. Here's the actual styling for the Group."),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(11444).Z,width:"564",height:"1544"}))),(0,o.kt)("p",null,"Let's add our Filters component as a child to the Group. The visual node tree in the App component should now look like the first image below, and your preview should look something like the second image."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(52784).Z,width:"1746",height:"1070"}))),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(47680).Z,width:"2306",height:"1760"}))),(0,o.kt)("h2",{id:"hiding-and-showing-the-filters-component"},"Hiding and Showing the Filters component"),(0,o.kt)("p",null,"We don't want the Filters component to always be visible, it should only show when you click the Filter Button, and then if you click the Filter Button again, it should hide. We can easily add this functionality by using a Switch node, and hook it up like below:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(32231).Z,width:"1054",height:"1150"}))),(0,o.kt)("p",null,"Now, when you click on the Filter Button you should alternately hide and show the Filters component."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(51678).Z,width:"2316",height:"1768"}))),(0,o.kt)("h2",{id:"finishing-the-visuals-for-the-filters-component"},"Finishing the visuals for the Filters component"),(0,o.kt)("p",null,"Let's select the Filters component again and finish building the visuals. The idea is that we should be able to filter the list of national parks based on which state they are in and/or what size they have. A Dropdown node would be a good pick for a UI element to select a state from, and to choose a size, a Slider node would be good to use. Add nodes to the Filters component so that you have a visual tree that looks like the image below. We will go through each node and it's properties next."),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(38217).Z,width:"616",height:"780"}))),(0,o.kt)("p",null,"The Dropdown node that we will use to select which state to filter on has been styled as below:"),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(46380).Z,width:"570",height:"1708"}))),(0,o.kt)("p",null,"Next we have a Group node that holds two text nodes. The Group has been named Slider Info and it has the following styling:"),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(16426).Z,width:"558",height:"1534"}))),(0,o.kt)("p",null,"The two text nodes that follow have slightly different styling from each other. The first one is a Label for the Slider and it has the following styling:"),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(65898).Z,width:"560",height:"1566"}))),(0,o.kt)("p",null,"The second Text node that will hold the Current Slider Value looks like this:"),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(44904).Z,width:"546",height:"1932"}))),(0,o.kt)("p",null,"Lastly we have the Slider node where we have only changed the padding a bit:"),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(27716).Z,width:"560",height:"702"}))),(0,o.kt)("h2",{id:"using-query-sheet-aggregate-nodes-to-set-the-min-and-max-value-of-the-slider"},"Using Query Sheet Aggregate nodes to set the min and max value of the Slider"),(0,o.kt)("p",null,"The Slider component will be used to set a number that we want to be between the smallest sized national park and the largest sized national park. In our Google Sheet we have a column for size so it would be cool if we could figure what the smallest and largest number is in this column. This is where the ",(0,o.kt)("a",{parentName:"p",href:"/library/modules/gsheets/node-docs/query-sheet-aggregate"},"Query Sheet Aggregate")," node comes in. This node is used to do aggregate data queries on a column from a public Google Sheet which is exactly what we are after here."),(0,o.kt)("p",null,"Let's first add a Query Sheet Aggregate node to our Filters component, and fill in the following properties:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(81277).Z,width:"1004",height:"780"}))),(0,o.kt)("p",null,"As you can see we need to tell the node which Google Sheet document it should look at (Document Id: 1gjttBIT4bHGFS8ynF31DoYw143ZY3UAiwopAW0N97KQ) and which sheet in that document we are interested in. Once the node has that information it will present a list of all the columns that the specific sheet has. Here we want to pick the Size (km2) column, and then we can choose how we want to aggregate the data of that column. We want to set up a Slider with a minimum and maximum value, so let's select Max to get the maximum value of the Size (km2) column."),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(92243).Z,width:"558",height:"632"}))),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(91929).Z,width:"966",height:"814"}))),(0,o.kt)("p",null,"Then we connect it to the Slider like this:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(12803).Z,width:"1218",height:"978"}))),(0,o.kt)("p",null,"Now we need another Query Sheet Aggregate node to get the minimum value so let's add one and set it's properties as follows, and also hook it up as in the second image:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(93669).Z,width:"1076",height:"810"}))),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(9287).Z,width:"1568",height:"1104"}))),(0,o.kt)("p",null,"Now the Slider has it's min and max value set, so let's now make sure that we show the current value of the slider in our Current Slider Value Text node. It would also be nice to show that the number is in km",(0,o.kt)("sup",null,"2")," so we will add a String Format node and set it up like this:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(94915).Z,width:"558",height:"412"}))),(0,o.kt)("p",null,"Then let's connect everything like this:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(52546).Z,width:"1674",height:"1048"}))),(0,o.kt)("p",null,"The reason we hook up the result from the Query Sheet Aggregate - Min Size, is so that we show the initial slider value when we first open up the Filters component. The Value output from the Slider only updates as we interact with the Slider so the initial value needs to be set from the Query Sheet Aggregate - Min Size."),(0,o.kt)("h2",{id:"getting-a-list-of-all-states"},"Getting a list of all states"),(0,o.kt)("p",null,"Now that we know how to use the Query Sheet Aggregate node, let's use it again, to get a list of all states that are in our Google Sheet for US national parks. This time we will set the Aggregare property to unique which means the node will return an array of all the unique values from the states column."),(0,o.kt)("p",null,"?> Note that some parks span two states, e.g. the Great Smoky Mountains are in both North Carolina and Tennessee. We have chosen to treat North Carolina, Tennessee as it's own option in the states list. A different solution would be to have two entries for Great Smoky Mountains, one for each state it's in."),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(1770).Z,width:"578",height:"742"}))),(0,o.kt)("p",null,"Let's connect it to our Dropdown node, and then click on the Dropdown list in the preview."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(92915).Z,width:"1548",height:"1150"}))),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(64774).Z,width:"2398",height:"1754"}))),(0,o.kt)("p",null,"This looks pretty good, but there is one problem. There is no option for selecting All states which is the initial state of our list. To solve this, we need to add another option to the array of states."),(0,o.kt)("h2",{id:"adding-all-option-to-states-dropdown"},"Adding All option to states Dropdown"),(0,o.kt)("p",null,"The result we get from the Query Sheet Aggregate - States is an array of items, so let's create a new Array and call it AllStates and then connect the result from Query Sheet Aggregate - States to the Items input of the Array:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(14400).Z,width:"2204",height:"1544"}))),(0,o.kt)("p",null,"Next we want to use a Create New Object node to create a new object that we can then insert into the Array. Set up the Create New Object node like below and then we connect it like in the second image."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(85861).Z,width:"558",height:"936"}))),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(48920).Z,width:"1806",height:"1698"}))),(0,o.kt)("p",null,"Now that we have a new Object, we want to insert it into our Array and we do that with an Insert Object Into Array node. Connect everything like below:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(90289).Z,width:"1596",height:"504"}))),(0,o.kt)("p",null,"Our AllStates Array contains one extra option, the All option. Before we connect it to our Dropdown, let's make sure that the Array is sorted alphabetically, so we will connect an Array Filter node like in the image below. Here it's important that we use the Done signal from the Insert Object Into Array node, to tell the Array Filter to do the sorting, as that ensures that the All option is in the Array before we do the sorting."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(6814).Z,width:"1766",height:"912"}))),(0,o.kt)("p",null,"The Array Filter node should sort on the Value property of the items in the array, and we can do that by setting it up like this:"),(0,o.kt)("div",{className:"ndl-image-with-background "},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(98747).Z,width:"558",height:"938"}))),(0,o.kt)("p",null,"We could now make a connection from the Array Filter to the Dropdown, but as you can see the Filters component is getting quite big in terms of nodes."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(49499).Z,width:"2464",height:"1786"}))),(0,o.kt)("p",null,"Let's turn the selected nodes below into it's own Logic Component."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(64213).Z,width:"2464",height:"1786"}))),(0,o.kt)("h2",{id:"creating-add-all-option-component"},"Creating Add All Option component"),(0,o.kt)("p",null,"From the Component Actions button, select Logic Component and name it Add All Option."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(12122).Z,width:"732",height:"606"}))),(0,o.kt)("p",null,"Then from the Filters node, cut out the marked nodes and paste them into the Add All Option component (use standard keyboard shortcuts for cutting and pasting). It should now look like below."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(10797).Z,width:"2662",height:"1210"}))),(0,o.kt)("p",null,"Let's add a port to the Component Inputs node that we call Items:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(1667).Z,width:"1108",height:"844"}))),(0,o.kt)("p",null,"We also want to send out the sorted array, so let's add a port on the Component Outputs node called Sorted Items."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(39945).Z,width:"560",height:"504"}))),(0,o.kt)("p",null,"Now we just make the following connections."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(72337).Z,width:"2642",height:"1260"}))),(0,o.kt)("p",null,"Back in the Filters component let's add out newly create Add All Options node, and hook it up like this:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(78830).Z,width:"1938",height:"1572"}))),(0,o.kt)("p",null,"Now we have a nice Dropdown with our All option as well."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(6439).Z,width:"2034",height:"1756"}))),"Only problem is there is no initial value set in the Dropdown.",(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(92714).Z,width:"2274",height:"1746"}))),(0,o.kt)("p",null,'We can easily fix that but adding a String node and giving it the value "A" and then connecting it like the image below:'),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(40656).Z,width:"2502",height:"1576"}))),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(53900).Z,width:"2046",height:"1758"}))),(0,o.kt)("h2",{id:"adding-filters"},"Adding filters."),(0,o.kt)("p",null,"All of our visuals are now set up. All that is missing are the actual filters. Let's work on those now."),(0,o.kt)("p",null,"First let's add a new Logic Component that we call State and Size Filter."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(84875).Z,width:"2582",height:"1046"}))),(0,o.kt)("p",null,"Add two ports to the Component Inputs node called Selected State and Size. You can also delete the Component Outputs node, we won't need that."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(95872).Z,width:"1144",height:"452"}))),(0,o.kt)("p",null,"Jump back to the Filters component and add the State and Size Filter component and hook it up like this:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(15710).Z,width:"2608",height:"1694"}))),(0,o.kt)("p",null,"Now, we head back to the State and Size Filter component. Let's first make a filter for Size. We will add a Query Sheet node, and set it up like this."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(66095).Z,width:"566",height:"924"}))),(0,o.kt)("p",null,"The Query Sheet node has a very nice visual filter builder so click here to add a filter:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(62682).Z,width:"556",height:"200"}))),(0,o.kt)("p",null,"Then let's build out our filter using the visual builder. The following images show you each step. T"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(81729).Z,width:"952",height:"304"}))),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(55002).Z,width:"1280",height:"302"}))),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(64304).Z,width:"1722",height:"336"}))),(0,o.kt)("p",null,"In this final step it's important to change the Value to Input, and then you can change the MyInput to a better name, like Size for instance."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(76542).Z,width:"1758",height:"400"}))),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(56451).Z,width:"1736",height:"292"}))),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(72809).Z,width:"1734",height:"374"}))),(0,o.kt)("p",null,"We are going to add one more Query Sheet node, and this one we will call Query Sheet State and Size Filter. Then add two filters to it so the final properties for it looks like this:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(15327).Z,width:"1588",height:"1270"}))),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(38157).Z,width:"1674",height:"1260"}))),(0,o.kt)("p",null,"Next, we want to take the output from our Query Sheet nodes and hook them up to the Array node with the id Parks. If you remember from the previous guides, we are using this Array to feed the Repeater node that creates our list. If the Array is updated or changed, the Repeater node will automatically rerender, so everytime we get a new result from our filter nodes the list will update."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(20609).Z,width:"1180",height:"782"}))),(0,o.kt)("p",null,"So why did we create two Query Sheet nodes with two different filters. It's so that we can handle the case when we choose All as the option in the Dropdown list. All is not a state that exists in our sheet, so the filter that is looking at both state and size will fail everytime we feed A into it. So to handle this we will use an expression in combination with a condition node to check if we are looking at all states, in which case we will just filter on size, or if we have selected a specific state, then we can filter on both state and size. The images below first show the expression in the Expression node, and the second image shows how everything should be connected."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(60301).Z,width:"1946",height:"1000"}))),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:i(85756).Z,width:"1992",height:"916"}))),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,'In this guide we added filters to our National Parks and used the Query Sheets Aggregate nodes. Hope you enjoyed it, and you can import the final project by clicking the "Import" button below and follow the instructions.'),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("img",{src:(0,s.Z)("/modues/gsheets/guides/filtering/filter-final-preview.gif"),className:"ndl-image small"}),(0,o.kt)(l.Z,{zip:"gsheets-part3-1.zip",name:"Google Sheets National Parks",thumb:"filter-view.png",mdxType:"ImportButton"})))}m.isMDXComponent=!0},17213:function(e,t,i){i.d(t,{Z:function(){return o}});var n=i(67294),a=i(39671);function o(e){var t=e.zip,i=e.name,o=e.thumb,l=e.cf;return n.createElement("button",{className:"ndl-import-button",onClick:function(){return(0,a.I)(t,{name:i,thumb:o,cf:l})}})}},39671:function(e,t,i){i.d(t,{I:function(){return a}});var n=i(99782);function a(e,t){var i=[];t&&void 0!==t.name&&i.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&i.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+n.default.baseUrl+t.thumb)),t&&void 0!==t.cf&&i.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+n.default.baseUrl+"/"+t.cf));var a="noodl:import/"+location.protocol+"//"+location.host+n.default.baseUrl+e+(i.length>0?"?"+i.join("&"):"");console.log("Importing into Noodl:",a),console.log(e),window.location.href=a}},72337:function(e,t,i){t.Z=i.p+"assets/images/add-all-final-95f0eb979c93c23c2ad0e1673076840c.png"},78830:function(e,t,i){t.Z=i.p+"assets/images/add-all-in-filters-0e88197f6ee0103dfbbf83bee26a3b29.png"},62682:function(e,t,i){t.Z=i.p+"assets/images/add-filter-db590ff9a9cebcf7a4d44bb3f3b1b6c3.png"},81277:function(e,t,i){t.Z=i.p+"assets/images/aggregate-1-bbab2fd133ea332821bfde9715a6c127.png"},92243:function(e,t,i){t.Z=i.p+"assets/images/aggregate-column-choice-86000fefe586b1016707415a39e2d38a.png"},91929:function(e,t,i){t.Z=i.p+"assets/images/aggregate-max-70f550716fb62dd0c5d5b0ad9b311237.png"},9287:function(e,t,i){t.Z=i.p+"assets/images/aggregate-min-connected-e7ce9fbfc4d85485d389d915437bee07.png"},93669:function(e,t,i){t.Z=i.p+"assets/images/aggregate-min-props-5c0f37e4b7426427f3466df38639becb.png"},12803:function(e,t,i){t.Z=i.p+"assets/images/aggregate-slider-connect-d8d4797ea74b2adf003cef41795168d3.png"},94915:function(e,t,i){t.Z=i.p+"assets/images/aggregate-string-format-1a25bddb6b10857ffb36a3cc576bd0cd.png"},14400:function(e,t,i){t.Z=i.p+"assets/images/allstates-array-af402f02d5f9fd95866cae611efec259.png"},11444:function(e,t,i){t.Z=i.p+"assets/images/app-filter-group-props-7ac721779a78929a24acde3ee3992d79.png"},52784:function(e,t,i){t.Z=i.p+"assets/images/app-tree-filters-4254f794418feb032fc773d8053a6c8c.png"},98747:function(e,t,i){t.Z=i.p+"assets/images/array-filter-props-c064f01058a13a010b250615aaa716e3.png"},6814:function(e,t,i){t.Z=i.p+"assets/images/array-filter-9fb731292249e76ef6051a6f431ce02a.png"},49499:function(e,t,i){t.Z=i.p+"assets/images/big-filters-226949b47422521190f0a0a5f280215c.png"},81729:function(e,t,i){t.Z=i.p+"assets/images/build-filter-1-69d4566c4e7bf9ec89f66c56155098b8.png"},55002:function(e,t,i){t.Z=i.p+"assets/images/build-filter-2-0d42e72bd01124c765fbf298343b864e.png"},64304:function(e,t,i){t.Z=i.p+"assets/images/build-filter-3-52a1f03fc2367bb8c69f3ead6c99bd84.png"},76542:function(e,t,i){t.Z=i.p+"assets/images/build-filter-4-6e81ab50f7297a3ce36690f58402b3af.png"},56451:function(e,t,i){t.Z=i.p+"assets/images/build-filter-5-2bfe4c428a4ad8d0f862e74f2f41fdc7.png"},72809:function(e,t,i){t.Z=i.p+"assets/images/build-filter-6-23331f86575d298511748130956171d9.png"},52546:function(e,t,i){t.Z=i.p+"assets/images/current-slider-val-connection-587ae9caf38ddc2a2c669db74a840048.png"},64213:function(e,t,i){t.Z=i.p+"assets/images/cut-out-these-7fdc54316d7b8c593d88cc528c30c80b.png"},53900:function(e,t,i){t.Z=i.p+"assets/images/dd-final-preview-876eef68e537b2d9e8ed801b2bba15b6.png"},40656:function(e,t,i){t.Z=i.p+"assets/images/dd-final-b2cd1cd421201b00884c63626ff511bd.png"},92714:function(e,t,i){t.Z=i.p+"assets/images/dd-initial-value-7f6607a1987f1787621fee6794043f88.png"},6439:function(e,t,i){t.Z=i.p+"assets/images/dropdown-all-32234dfe6527f20a60b047254a51805d.png"},46380:function(e,t,i){t.Z=i.p+"assets/images/dropdown-props-2dd748582dec7fe2eda76bb89fe1d49d.png"},60301:function(e,t,i){t.Z=i.p+"assets/images/expression-props-e7ecf7bf4869b96ccfe23ed6647bc76d.png"},70115:function(e,t,i){t.Z=i.p+"assets/images/filter-button-props-870e89ad0f6671ef9138a39ab2df49ea.png"},7276:function(e,t,i){t.Z=i.p+"assets/images/filter-button-fe3943d8442681ff784feef7841f139d.png"},38726:function(e,t,i){t.Z=i.p+"assets/images/filter-comp-386fdd7c024204bb3bbf1147aff2d595.png"},58518:function(e,t,i){t.Z=i.p+"assets/images/filter-group-add-929091490feeda850a90667c31c65ac6.png"},60281:function(e,t,i){t.Z=i.p+"assets/images/filter-group-props-2-6d6b3013b03e27528a3d127f04e5b469.png"},88089:function(e,t,i){t.Z=i.p+"assets/images/filter-group-props-0fac7868bc15a983b4af6d6f6f59ed9e.png"},87906:function(e,t,i){t.Z=i.p+"assets/images/filter-view-969d0bfd67f045945e39bb02f972b584.png"},38217:function(e,t,i){t.Z=i.p+"assets/images/filters-visual-tree-052195af84a9e5126174015c99aa3106.png"},85756:function(e,t,i){t.Z=i.p+"assets/images/final-node-tree-5d5ef880641f71bece9aae81cd391d6f.png"},10797:function(e,t,i){t.Z=i.p+"assets/images/initial-add-all-5293abc0ab7d6b7d7fb947a6018326b8.png"},1667:function(e,t,i){t.Z=i.p+"assets/images/input-port-5a6e8c3c3a871f9abd0689f0139ad6ce.png"},90289:function(e,t,i){t.Z=i.p+"assets/images/insert-new-object-connected-20bae5ecc47b3860a78a4d655231b9ef.png"},12122:function(e,t,i){t.Z=i.p+"assets/images/logic-comp-cc6e38b543cb528e0265b9378a7073a4.png"},48920:function(e,t,i){t.Z=i.p+"assets/images/new-object-connected-1cc88048f8776cbcf4246d62b173d7c4.png"},85861:function(e,t,i){t.Z=i.p+"assets/images/new-object-3ab728ec762513f8583c8770d4ef9d65.png"},39945:function(e,t,i){t.Z=i.p+"assets/images/output-port-92399e78c4d6b2012dfa3f26a7f7033a.png"},47680:function(e,t,i){t.Z=i.p+"assets/images/preview-initial-filters-0d99ea44a38dad1013d914c2235834ad.png"},66095:function(e,t,i){t.Z=i.p+"assets/images/query-sheet-size-filter-b0186ca6df2a86fe30c336c2b17942fc.png"},20609:function(e,t,i){t.Z=i.p+"assets/images/query-sheet-to-arrays-dc2332b4dd4331167382a7d796ed78d3.png"},51678:function(e,t,i){t.Z=i.p+"assets/images/show-hide-cef0e89c6b89f5f4543d560bb9b507bb.gif"},16426:function(e,t,i){t.Z=i.p+"assets/images/slider-info-group-props-477d53da7a67ca742929c65cfb16f48f.png"},65898:function(e,t,i){t.Z=i.p+"assets/images/slider-label-6ac9b8311ca14b986013d8f2e4958d53.png"},27716:function(e,t,i){t.Z=i.p+"assets/images/slider-props-4abd3036d099b5275cf3cddbeb950bec.png"},44904:function(e,t,i){t.Z=i.p+"assets/images/slider-value-1297b3621bd9a6e8f5e5a4fe463766e0.png"},84875:function(e,t,i){t.Z=i.p+"assets/images/state-size-filter-comp-ee5a74dfb9caab41c09a2e0cb2ea6961.png"},15710:function(e,t,i){t.Z=i.p+"assets/images/state-size-filter-in-filters-aca99458ad0cde537d85c66dbd354fb1.png"},95872:function(e,t,i){t.Z=i.p+"assets/images/state-size-filter-inputs-1db5e4d598fb3249cff35d470346a0eb.png"},15327:function(e,t,i){t.Z=i.p+"assets/images/state-size-filter-props-1-27cca0ef49ae6a8b303c42e6de88d372.png"},38157:function(e,t,i){t.Z=i.p+"assets/images/state-size-filter-props-2-6ac6636fdcf8aa7555bd65e40699aaad.png"},1770:function(e,t,i){t.Z=i.p+"assets/images/states-aggregate-2e4b16f6d2a4a66811bd48060ad19512.png"},92915:function(e,t,i){t.Z=i.p+"assets/images/states-dropdown-connection-1-7efc0a2972617f71ef78c28179101e80.png"},64774:function(e,t,i){t.Z=i.p+"assets/images/states-dropdown-preview-888fb4e9d749a5e7192e6d5c8c2ecffd.png"},32231:function(e,t,i){t.Z=i.p+"assets/images/switch-da5fc2c00e1acce4b35450d261eb3c5a.png"}}]);