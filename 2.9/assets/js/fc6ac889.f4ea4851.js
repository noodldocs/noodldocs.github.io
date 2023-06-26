"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[9805],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=d(n),u=i,h=g["".concat(l,".").concat(u)]||g[u]||p[u]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},53488:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294);function i(e){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)})):function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+n)}catch(a){console.error("Fallback: Oops, unable to copy",a)}document.body.removeChild(t)}(e)}function o(e){return a.createElement("button",{className:"ndl-copy-nodes-button",onClick:function(){return t=e.json,void i(JSON.stringify(t));var t}})}},17213:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),i=n(39671);function o(e){var t=e.zip,n=e.name,o=e.thumb,r=e.cf;return a.createElement("button",{className:"ndl-import-button",onClick:function(){return(0,i.I)(t,{name:n,thumb:o,cf:r})}})}},39671:function(e,t,n){n.d(t,{I:function(){return i}});var a=n(99782);function i(e,t){var n=[];t&&void 0!==t.name&&n.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&n.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+a.default.baseUrl+t.thumb)),t&&void 0!==t.cf&&n.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+a.default.baseUrl+"/"+t.cf));var i="noodl:import/"+location.protocol+"//"+location.host+a.default.baseUrl+e+(n.length>0?"?"+n.join("&"):"");console.log("Importing into Noodl:",i),console.log(e),window.location.href=i}},75686:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),r=(n(53488),n(17213),["components"]),s={title:"Styling the Table",hide_title:!0},l="Styling the Table",d={unversionedId:"guides/visualizing-data/styling-table",id:"guides/visualizing-data/styling-table",title:"Styling the Table",description:"What you will learn in this guide",source:"@site/docs/guides/visualizing-data/styling-table.md",sourceDirName:"guides/visualizing-data",slug:"/guides/visualizing-data/styling-table",permalink:"/2.9/docs/guides/visualizing-data/styling-table",tags:[],version:"current",frontMatter:{title:"Styling the Table",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Filter your Table data",permalink:"/2.9/docs/guides/visualizing-data/filter-table-data"},next:{title:"Client Side Business Logic in Nodes",permalink:"/2.9/docs/guides/business-logic/client-side-biz-logic-nodes"}},c={},p=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Changing the app background",id:"changing-the-app-background",level:2},{value:"Styling the table",id:"styling-the-table-1",level:2},{value:"Style the Filters section",id:"style-the-filters-section",level:2},{value:"Summary",id:"summary",level:2}],g={toc:p};function u(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"styling-the-table"},"Styling the Table"),(0,o.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,o.kt)("p",null,"In this guide we will look at how we can style the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/library/prefabs/table/"},"Table"))," prefab and make the app we have created in the previous guides look a bit nicer. We will only make some minor changes to the background colors and borders of the ",(0,o.kt)("strong",{parentName:"p"},"Table"),", but we encourage you to play around with the ",(0,o.kt)("strong",{parentName:"p"},"Table")," prefab on your own and make it into something that fits your use cases."),(0,o.kt)("h2",{id:"changing-the-app-background"},"Changing the app background"),(0,o.kt)("p",null,"Let's start with an easy change, the overall background color of our app. Go the the App component and select the ",(0,o.kt)("strong",{parentName:"p"},"Page Router"),"."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(62523).Z,width:"636",height:"798"}))),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(72761).Z,width:"600",height:"338"}))),(0,o.kt)("p",null,"Now change the ",(0,o.kt)("strong",{parentName:"p"},"Background Color")," property to ",(0,o.kt)("inlineCode",{parentName:"p"},"#F0EDE8"),", and the app should look like the second image below."),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(40831).Z,width:"624",height:"1496"}))),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(20843).Z,width:"2684",height:"1206"}))),(0,o.kt)("h2",{id:"styling-the-table-1"},"Styling the table"),(0,o.kt)("p",null,"Go back to the Start Page and double click on the ",(0,o.kt)("strong",{parentName:"p"},"Table")," component in the node graph. It should take you into the ",(0,o.kt)("strong",{parentName:"p"},"Table")," prefab, and this is where we will make some styling changes."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(19439).Z,width:"1140",height:"1072"}))),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(23312).Z,width:"1298",height:"960"}))),(0,o.kt)("p",null,"Select the top ",(0,o.kt)("strong",{parentName:"p"},"Group")," and remove it's ",(0,o.kt)("strong",{parentName:"p"},"Border")," by setting it to none and set the ",(0,o.kt)("strong",{parentName:"p"},"Corner Radius")," to 0:"),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(87596).Z,width:"1032",height:"1112"}))),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9139).Z,width:"628",height:"1580"}))),(0,o.kt)("p",null,"Next select the ",(0,o.kt)("strong",{parentName:"p"},"Group")," named Header Row and find the Border Style section. In the Border Style section, select the bottom border and set it's color to Grey - 300. Let's also set it's ",(0,o.kt)("strong",{parentName:"p"},"Background Color")," to White."),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(47445).Z,width:"698",height:"1150"}))),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(20243).Z,width:"604",height:"896"}))),(0,o.kt)("p",null,"It doesn't look like much right now, but let's continue by styling the rows of the ",(0,o.kt)("strong",{parentName:"p"},"Table"),". In the Components tab, unfurl the ",(0,o.kt)("strong",{parentName:"p"},"Table")," and select the ",(0,o.kt)("strong",{parentName:"p"},"Row")," subcomponent."),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(24898).Z,width:"608",height:"1434"}))),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(68901).Z,width:"1598",height:"800"}))),(0,o.kt)("p",null,"We want all rows to have the same background color so select the ",(0,o.kt)("strong",{parentName:"p"},"Color Blend")," node and set ",(0,o.kt)("strong",{parentName:"p"},"Color 0")," and ",(0,o.kt)("strong",{parentName:"p"},"Color 1")," to Grey - 100. "),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(36258).Z,width:"608",height:"576"}))),(0,o.kt)("p",null,"Also make sure that the bottom border of the ",(0,o.kt)("strong",{parentName:"p"},"Group")," named Row is set to 1px and Grey - 300"),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(924).Z,width:"2030",height:"1816"}))),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(70178).Z,width:"2738",height:"1192"}))),(0,o.kt)("p",null,"The table is starting to look pretty good, we want to add a border around the whole thing, but before we do that, let's style the ",(0,o.kt)("strong",{parentName:"p"},"Image Cell")," slightly."),(0,o.kt)("p",null,"Select the ",(0,o.kt)("strong",{parentName:"p"},"Image Cell")," in the Components view. "),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(18388).Z,width:"608",height:"1380"}))),(0,o.kt)("p",null,"Find the ",(0,o.kt)("strong",{parentName:"p"},"Image")," node and give it 8px Corner Radius."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(27687).Z,width:"1836",height:"306"}))),(0,o.kt)("p",null,"Now we will add a border around the whole ",(0,o.kt)("strong",{parentName:"p"},"Table")," and we will also include the ",(0,o.kt)("strong",{parentName:"p"},"Pages And Rows")," in that border. Go back to the Start Page, and wrap the ",(0,o.kt)("strong",{parentName:"p"},"Table")," and ",(0,o.kt)("strong",{parentName:"p"},"Pages And Rows")," in a ",(0,o.kt)("strong",{parentName:"p"},"Group")," called Table Border. "),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3306).Z,width:"928",height:"802"}))),(0,o.kt)("p",null,"Select the Table Border ",(0,o.kt)("strong",{parentName:"p"},"Group")," and set the ",(0,o.kt)("strong",{parentName:"p"},"Border style")," to Solid 1px and Grey - 300, give it 8px ",(0,o.kt)("strong",{parentName:"p"},"Corner Radius")," and make sure that ",(0,o.kt)("strong",{parentName:"p"},"Clip Content")," is checked:"),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4251).Z,width:"596",height:"1760"}))),(0,o.kt)("p",null,"The table now looks really good, except for the bottom where we have the ",(0,o.kt)("strong",{parentName:"p"},"Pages And Rows"),"."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(13709).Z,width:"2756",height:"1576"}))),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(20758).Z,width:"1756",height:"518"}))),(0,o.kt)("p",null,"Let's fix it by wrapping the ",(0,o.kt)("strong",{parentName:"p"},"Pages And Rows")," in it's own ",(0,o.kt)("strong",{parentName:"p"},"Group")," and give that Group a White ",(0,o.kt)("strong",{parentName:"p"},"Background"),"."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(79401).Z,width:"2450",height:"732"}))),(0,o.kt)("p",null,"Select the ",(0,o.kt)("strong",{parentName:"p"},"Pages And Rows")," and give it 16px margin all around."),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(90221).Z,width:"606",height:"1616"}))),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(21584).Z,width:"1822",height:"516"}))),(0,o.kt)("p",null,"That looks quite nice, so let's make the Filters section look a bit nicer too."),(0,o.kt)("h2",{id:"style-the-filters-section"},"Style the Filters section"),(0,o.kt)("p",null,"The filters section currently looks like this:"),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(93092).Z,width:"776",height:"1194"}))),(0,o.kt)("p",null,"It needs a header so let's add a ",(0,o.kt)("strong",{parentName:"p"},"Group")," as a child to the Filter Column and call it Filter Header. Then with the Filter Header ",(0,o.kt)("strong",{parentName:"p"},"Group")," selected set the ",(0,o.kt)("strong",{parentName:"p"},"Height")," to 42px and have it align it's content vertically centered. Also give it 16px ",(0,o.kt)("strong",{parentName:"p"},"Padding")," both left and right and set it's ",(0,o.kt)("strong",{parentName:"p"},"Background Color")," to White."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(94983).Z,width:"518",height:"612"}))),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(84279).Z,width:"592",height:"1842"}))),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(58012).Z,width:"596",height:"482"}))),(0,o.kt)("p",null,"Add ",(0,o.kt)("strong",{parentName:"p"},"Text")," node as a child to the Filter Header ",(0,o.kt)("strong",{parentName:"p"},"Group")," and set the ",(0,o.kt)("strong",{parentName:"p"},"Text"),' property to "Filters" and change the ',(0,o.kt)("strong",{parentName:"p"},"Text Style")," to Label Medium."),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2017).Z,width:"416",height:"624"}))),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(27108).Z,width:"592",height:"914"}))),(0,o.kt)("p",null,"Wrap the ",(0,o.kt)("strong",{parentName:"p"},"Filter")," component in a ",(0,o.kt)("strong",{parentName:"p"},"Group")," and add 16px Top, Left and Right *Padding** to the Group."),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(95728).Z,width:"738",height:"946"}))),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(79267).Z,width:"598",height:"978"}))),(0,o.kt)("p",null,"Now select the Filter Column ",(0,o.kt)("strong",{parentName:"p"},"Group")," and update the ",(0,o.kt)("strong",{parentName:"p"},"Top Margin")," to 40px, check the ",(0,o.kt)("strong",{parentName:"p"},"Clip Content")," property, set the ",(0,o.kt)("strong",{parentName:"p"},"Background Color")," to Grey - 100, give it a Solid 1px, Grey - 300 border all around and a ",(0,o.kt)("strong",{parentName:"p"},"Corner Radius")," of 16px. "),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(12405).Z,width:"688",height:"946"}))),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(61509).Z,width:"602",height:"1652"}))),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(24434).Z,width:"608",height:"1788"}))),(0,o.kt)("p",null,"That's if for the filters section, but as a final touch we will update the ",(0,o.kt)("strong",{parentName:"p"},"Text Style")," called Body Medium. Select the ",(0,o.kt)("strong",{parentName:"p"},"Text")," node in the Filter Header, find the ",(0,o.kt)("strong",{parentName:"p"},"Text Style")," property and click the settings icon next to Body Medium and set the ",(0,o.kt)("strong",{parentName:"p"},"Size")," to 14px."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(65965).Z,width:"1190",height:"854"}))),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(42282).Z,width:"1830",height:"1170"}))),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Now we have styled our ",(0,o.kt)("strong",{parentName:"p"},"Table")," and the filters section and below you can see what it looked like before and after the styling. Prefabs like that ",(0,o.kt)("strong",{parentName:"p"},"Table")," are a great way to quickly build out your experiences, but they are meant to be tinkered with and hopefully this guide has given you some ideas of how you can update the look and feel of prefabs."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(74882).Z,width:"2746",height:"1518"}))),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8149).Z,width:"2752",height:"1412"}))))}u.isMDXComponent=!0},94983:function(e,t,n){t.Z=n.p+"assets/images/add-filter-header-15bbd4403b010f86fa8bd7ebeb73a887.png"},40831:function(e,t,n){t.Z=n.p+"assets/images/change-bg-pr-d9187e6a0eca09fe49c11893c34e3832.png"},36258:function(e,t,n){t.Z=n.p+"assets/images/color-blend-props-a830ec186adada01c6508a382a5a2b27.png"},61509:function(e,t,n){t.Z=n.p+"assets/images/column-props-1-20d865301e131f3f7be16af53e24a459.png"},24434:function(e,t,n){t.Z=n.p+"assets/images/column-props-2-079bfdefcc9e90adbd910741aead0dd1.png"},19439:function(e,t,n){t.Z=n.p+"assets/images/double-click-table-9ccc6724bc60903428946929ffa284ca.png"},58012:function(e,t,n){t.Z=n.p+"assets/images/filter-header-props-bg-8060bf8e59027f6106b94f1341e471e3.png"},84279:function(e,t,n){t.Z=n.p+"assets/images/filter-header-props-db0179f033fba0944ea2587759eaae20.png"},95728:function(e,t,n){t.Z=n.p+"assets/images/filters-in-group-b5ce9ed91664568f1bf22be8fcef5d02.png"},93092:function(e,t,n){t.Z=n.p+"assets/images/filters-initial-e45ec2c381f55738e750423977be10b3.png"},79267:function(e,t,n){t.Z=n.p+"assets/images/group-padding-props-3e615338c537d3cfe79b9dbdf977d8a0.png"},20243:function(e,t,n){t.Z=n.p+"assets/images/header-row-props-4a59f35290dcc5db91cf8e2d5ab0c9f8.png"},18388:function(e,t,n){t.Z=n.p+"assets/images/image-cell-78f1f32714b5bfe43335a65e8b580022.png"},27687:function(e,t,n){t.Z=n.p+"assets/images/image-props-43ec8916774f9765cbd2c35bd36fd793.png"},20843:function(e,t,n){t.Z=n.p+"assets/images/new-bg-7b1492a4992b1fa37acd99e14e97fd4f.png"},79401:function(e,t,n){t.Z=n.p+"assets/images/pages-and-rows-in-group-8dac1083237618c8caf178abcb2feb9c.png"},90221:function(e,t,n){t.Z=n.p+"assets/images/pages-and-rows-padding-21979a77c78b4444f52f9c6b2e22af43.png"},924:function(e,t,n){t.Z=n.p+"assets/images/row-border-props-5b9e9f6d394b186a402ed493ff36e8e4.png"},24898:function(e,t,n){t.Z=n.p+"assets/images/row-in-comp-295c428cfdce39e051742fce3907ca81.png"},68901:function(e,t,n){t.Z=n.p+"assets/images/row-overview-12c0435d6644e7b416f4717c5dfb2d69.png"},62523:function(e,t,n){t.Z=n.p+"assets/images/select-app-8cc0d49a317cd75902cf6b628e4ccd62.png"},12405:function(e,t,n){t.Z=n.p+"assets/images/select-filter-column-bcecffd753a3cf0ef9b195351b66ca1a.png"},47445:function(e,t,n){t.Z=n.p+"assets/images/select-header-row-1978f336f5491e2dba46336b5fe90af8.png"},72761:function(e,t,n){t.Z=n.p+"assets/images/select-pr-e6c7473ab0d0cf79d4e8db8b4de55e3d.png"},87596:function(e,t,n){t.Z=n.p+"assets/images/select-table-group-fa10bbeaefe1bf35fdcc8e22e310e9e6.png"},3306:function(e,t,n){t.Z=n.p+"assets/images/table-border-group-8d5d23f66ccc44c3cef6e0bcfe9a47f9.png"},4251:function(e,t,n){t.Z=n.p+"assets/images/table-border-props-8da4dcfba08b97d7170772d78d630e29.png"},20758:function(e,t,n){t.Z=n.p+"assets/images/table-bottom-d2f9777d0e89418fb043031359afb8be.png"},21584:function(e,t,n){t.Z=n.p+"assets/images/table-final-5e0c00fb50336c54a26616d0f7c4bf5c.png"},9139:function(e,t,n){t.Z=n.p+"assets/images/table-group-props-5671efbfee0ac6beda8876bb0abd6e56.png"},70178:function(e,t,n){t.Z=n.p+"assets/images/table-in-progress-b76896b9e8fc504082754b2c52f1dc8a.png"},74882:function(e,t,n){t.Z=n.p+"assets/images/table-no-style-9dc2622062f40fc947d47cc5ba7b7a78.png"},23312:function(e,t,n){t.Z=n.p+"assets/images/table-overview-6884eb902ad546ba83fac4c089ec1e60.png"},13709:function(e,t,n){t.Z=n.p+"assets/images/table-style-done-be3d36841e6370bf16b2952433600f64.png"},8149:function(e,t,n){t.Z=n.p+"assets/images/table-with-style-f3f1c4205e6e9aed8ec2ebaa4e5d5766.png"},2017:function(e,t,n){t.Z=n.p+"assets/images/text-node-filter-header-d163b8432dd5b64d892b9f8f3fbc1b1a.png"},27108:function(e,t,n){t.Z=n.p+"assets/images/text-node-props-57d03fa71d2dae0d315fe9663a1d1d3b.png"},65965:function(e,t,n){t.Z=n.p+"assets/images/text-style-conf-0488d6f59c5046845f94e680176c1e7b.png"},42282:function(e,t,n){t.Z=n.p+"assets/images/text-style-props-983fe000ec32a8f07d0458d416646366.png"}}]);