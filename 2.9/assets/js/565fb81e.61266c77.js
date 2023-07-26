"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[2623],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||o;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53488:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(67294);function a(e){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)})):function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+n)}catch(i){console.error("Fallback: Oops, unable to copy",i)}document.body.removeChild(t)}(e)}function o(e){return i.createElement("button",{className:"ndl-copy-nodes-button",onClick:function(){return t=e.json,void a(JSON.stringify(t));var t}})}},13088:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return h}});var i=n(83117),a=n(80102),o=(n(67294),n(3905)),r=n(44996),l=n(53488),s=["components"],d={title:"Grouping & Layout",hide_title:!0},p="Grouping & Layout",c={unversionedId:"guides/user-interfaces/layout",id:"guides/user-interfaces/layout",title:"Grouping & Layout",description:"What you will learn in this guide",source:"@site/docs/guides/user-interfaces/layout.mdx",sourceDirName:"guides/user-interfaces",slug:"/guides/user-interfaces/layout",permalink:"/2.9/docs/guides/user-interfaces/layout",tags:[],version:"current",frontMatter:{title:"Grouping & Layout",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Components",permalink:"/2.9/docs/guides/user-interfaces/components"},next:{title:"Responsive Design",permalink:"/2.9/docs/guides/user-interfaces/responsive-design"}},u={},h=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:3},{value:"The Group Node",id:"the-group-node",level:2},{value:"Layout direction",id:"layout-direction",level:2},{value:"Layout Position",id:"layout-position",level:2},{value:"Dimensions",id:"dimensions",level:2},{value:"Fixed dimension",id:"fixed-dimension",level:3},{value:"Clip content",id:"clip-content",level:3},{value:"Alignment",id:"alignment",level:2},{value:"Margin and padding",id:"margin-and-padding",level:2},{value:"Multiple lines",id:"multiple-lines",level:2}],m={toc:h};function g(e){var t=e.components,d=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},m,d,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"grouping--layout"},"Grouping & Layout"),(0,o.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,o.kt)("p",null,"This guide will cover how to lay out visual elements. It's an important concept for creating responsive, dynamic interfaces for your apps."),(0,o.kt)("p",null,"The central node for defining a layout in Noodl is the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/basic-elements/group/"},"Group")," node. This guide will walk through the most important Group properties for defining a layout."),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"We will cover the following topics in this guide:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Group Node"),(0,o.kt)("li",{parentName:"ul"},"Layout Direction and position"),(0,o.kt)("li",{parentName:"ul"},"Size and Dimensions"),(0,o.kt)("li",{parentName:"ul"},"Alignment"),(0,o.kt)("li",{parentName:"ul"},"Margin and Padding"),(0,o.kt)("li",{parentName:"ul"},"Multi Line Layout")),(0,o.kt)("h2",{id:"the-group-node"},"The Group Node"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Group")," node is the most central node for doing a layout. It's the fundamental way of building visual hierarchies and structures in Noodl."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Group")," nodes are arranged in a hierarchy and can have other nodes as children. It controls the layout of its children and there are a number of properties that can be used to specify how the children of a ",(0,o.kt)("strong",{parentName:"p"},"Group"),' node will be laid out. You can copy the various node examples used in this guide by clicking "Copy nodes" and then pasting into a Noodl project.'),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("img",{src:"/2.8/docs/guides/user-interfaces/layout/groups.png"}),(0,o.kt)(l.Z,{json:{nodes:[{id:"5a81ad6d-b8eb-16f8-e2b3-3533c0a05462",type:"Group",label:"Group",x:176,y:140.5,parameters:{backgroundColor:"#FFFFFF"},ports:[],children:[{id:"999f7f8b-6678-ed24-5ea9-08b25e1b394e",type:"Group",x:196,y:186.5,parameters:{marginTop:{value:20,unit:"px"},marginLeft:{value:20,unit:"px"},marginRight:{value:20,unit:"px"},marginBottom:{value:20,unit:"px"},paddingTop:{value:50,unit:"px"},paddingLeft:{value:50,unit:"px"},paddingRight:{value:50,unit:"px"},paddingBottom:{value:50,unit:"px"},backgroundColor:"#DBDBDB"},ports:[],children:[{id:"ddde9610-f9a6-03bd-bb46-4a67d56a2180",type:"Group",x:216,y:232.5,parameters:{backgroundColor:"#B5B5B5"},ports:[],children:[]}]}]}],connections:[]},mdxType:"CopyToClipboardButton"})),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Hovering on a node in Noodl with the mouse cursor will highlight the corresponding visual element in the preview window. This is a great way to debug your layout. For example you hover over a node and you cannot see it in the preview window, it's likely that it has a zero size or lies outside the screen."))),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("video",{width:"100%",autoPlay:!0,muted:!0,loop:!0,src:(0,r.Z)("/docs/guides/user-interfaces/layout/hover.mp4")})),(0,o.kt)("h2",{id:"layout-direction"},"Layout direction"),(0,o.kt)("p",null,"By default the ",(0,o.kt)("strong",{parentName:"p"},"Group")," node will stack its children vertically. You can change the layout direction by editing the ",(0,o.kt)("strong",{parentName:"p"},"Layout")," property:"),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(46096).Z,width:"600",height:"146"}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Vertical")," Children are stacked vertically."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Horizontal")," Children are stacked horizontally."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"None")," Children are ",(0,o.kt)("em",{parentName:"li"},"not")," stacked. You will have to position them yourselves, for example by using margins, x/y positions or various alginments (see below).")),(0,o.kt)("p",null,'Here\'s an example you can copy into Noodl. Click the "Copy nodes" button next to the image and press Ctrl+V (Windows) or Cmd+V (macOS) to paste them into Noodl. Make sure you have a project open.'),(0,o.kt)("p",null,"Change the ",(0,o.kt)("strong",{parentName:"p"},"Layout")," of the top level node to see how the direction of the child nodes change."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("img",{src:"/2.8/docs/guides/user-interfaces/layout/layout-dir.png"}),(0,o.kt)(l.Z,{json:{nodes:[{id:"9f88e7d6-959c-7946-f66d-3db6257d522b",type:"Group",label:"Layout node",x:290,y:395,parameters:{sizeMode:"explicit",backgroundColor:"#E6E6E6"},ports:[],children:[{id:"8a0b2c8c-c534-bdcc-102d-2905b48d8885",type:"Group",x:310,y:456,parameters:{marginTop:{value:5,unit:"px"},marginLeft:{value:5,unit:"px"},marginRight:{value:5,unit:"px"},marginBottom:{value:5,unit:"px"},backgroundColor:"#C2C2C2",width:{value:100,unit:"px"},height:{value:100,unit:"px"}},ports:[],children:[]},{id:"bcfa83ad-f05f-d7ff-13a4-f82ac19bd664",type:"Group",x:310,y:502,parameters:{marginTop:{value:5,unit:"px"},marginLeft:{value:5,unit:"px"},marginRight:{value:5,unit:"px"},marginBottom:{value:5,unit:"px"},backgroundColor:"#C2C2C2",width:{value:100,unit:"px"},height:{value:100,unit:"px"}},ports:[],children:[]},{id:"35c2039f-5f12-3dab-bc94-a7c630aa9698",type:"Group",x:310,y:548,parameters:{marginTop:{value:5,unit:"px"},marginLeft:{value:5,unit:"px"},marginRight:{value:5,unit:"px"},marginBottom:{value:5,unit:"px"},backgroundColor:"#C2C2C2",width:{value:100,unit:"px"},height:{value:100,unit:"px"}},ports:[],children:[]}]}],connections:[]},mdxType:"CopyToClipboardButton"})),(0,o.kt)("h2",{id:"layout-position"},"Layout Position"),(0,o.kt)("p",null,"As a child of a group you can also control how you will be layouted by setting the ",(0,o.kt)("strong",{parentName:"p"},"Position")," property:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"In Layout")," - This node is part of the parent node's layout. It will be stacked with its siblings depending on the parent node's layout settings as explained above."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Absolute")," - Removes a node from the flow of a layout. Use margins and alignment to set the position."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Sticky")," - Behaves like ",(0,o.kt)("inlineCode",{parentName:"li"},"In Layout"),", except when the node is about the be scrolled outside the parent. It'll stick to an edge of the parent instead of scrolling away. Which edge can be controlled with the ",(0,o.kt)("em",{parentName:"li"},"Alignment")," input.")),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(99635).Z,width:"548",height:"152"}))),(0,o.kt)("h2",{id:"dimensions"},"Dimensions"),(0,o.kt)("p",null,"The dimensions section control how the size of a ",(0,o.kt)("strong",{parentName:"p"},"Group")," will be calculated."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(60154).Z,width:"538",height:"328"}))),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Group")," can also get its dimensions from the size of its children. You use the icons at the top to change between the four modes (from right):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Explicit width & height")," Specify both width and height explicitly in pixels (",(0,o.kt)("inlineCode",{parentName:"li"},"px"),"), percentage of parent (",(0,o.kt)("inlineCode",{parentName:"li"},"%"),"), or as a percentage of the viewport size (",(0,o.kt)("inlineCode",{parentName:"li"},"vw")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"vh"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Explicit width & content height")," Specify the width explicitly but the height will be the total of the children heights and margins."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Explicit height & content width")," Specify the height explicitly but the width will be the total of the children widths and margins."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Content width & height")," The size of this group will be the total width and height of the children based on the layout.")),(0,o.kt)("p",null,"You can copy the nodes below to an empty component in Noodl. The result is shown to the right. These nodes each use a different setting for the ",(0,o.kt)("strong",{parentName:"p"},"Dimensions")," icons."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("img",{src:"/2.8/docs/guides/user-interfaces/layout/content-size-nodes.png",className:"ndl-image small"}),(0,o.kt)("img",{src:"/2.8/docs/guides/user-interfaces/layout/content-size-example.png",className:"ndl-image small"}),(0,o.kt)(l.Z,{json:{nodes:[{id:"3aad82a0-9636-d391-b31c-06f66be77bdc",type:"Group",x:243,y:178,parameters:{backgroundColor:"#FFFFFF"},ports:[],children:[{id:"61757927-9c6c-3afb-a964-1492a5ff5a90",type:"Group",label:"Content height",x:263,y:224,parameters:{sizeMode:"contentHeight",backgroundColor:"#D6D6D6",marginBottom:{value:20,unit:"px"},width:{value:100,unit:"px"}},ports:[],children:[{id:"cefc770e-47c0-ddfd-0caa-b88831ce8e8f",type:"Circle",x:283,y:285,parameters:{fillColor:"#858585",size:50},ports:[],children:[]}]},{id:"ccdbfc6b-8138-cc99-6ffc-aaf6b5c4b56e",type:"Group",label:"Content size",x:263,y:331,parameters:{sizeMode:"contentSize",backgroundColor:"#D6D6D6",marginBottom:{value:20,unit:"px"}},ports:[],children:[{id:"cef82662-86c6-43d7-5221-fa47869a5043",type:"Circle",x:283,y:392,parameters:{fillColor:"#858585",size:50},ports:[],children:[]}]},{id:"000843d3-fdf9-7638-67e3-42617b66bf4f",type:"Group",label:"Content width",x:263,y:438,parameters:{sizeMode:"contentWidth",backgroundColor:"#D6D6D6",height:{value:100,unit:"px"}},ports:[],children:[{id:"f94a589b-b042-9f9e-1d2f-0599a5fe2f41",type:"Circle",x:283,y:499,parameters:{fillColor:"#858585",size:50},ports:[],children:[]}]}]}],connections:[]},mdxType:"CopyToClipboardButton"})),(0,o.kt)("h3",{id:"fixed-dimension"},"Fixed dimension"),(0,o.kt)("p",null,"Sizes specified in ",(0,o.kt)("inlineCode",{parentName:"p"},"%")," enables an additional set of dynamic size rules."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The group will expand to fill the parent. Space is shared with siblings and the ",(0,o.kt)("inlineCode",{parentName:"li"},"%")," value controls how much of the remaining space each node will get."),(0,o.kt)("li",{parentName:"ul"},"If the content of a Group is larger than the Group itself, it'll expand to contain the children.")),(0,o.kt)("p",null,"This dynamic sizing can be disabled by enabling ",(0,o.kt)("em",{parentName:"p"},"Fixed"),"."),(0,o.kt)("p",null,"Here's an example with two Groups, both set to 100% height. With ",(0,o.kt)("em",{parentName:"p"},"Fixed")," disabled they will both try to grow to the same size as the parent. As the rules above implied, the Groups final size will be 50% to make sure that both Groups have equal space and are shown on the screen."),(0,o.kt)("p",null,"Enabling ",(0,o.kt)("em",{parentName:"p"},"Fixed")," will force a Group to be exactly the size that's specified and disable dynamic sizing. With ",(0,o.kt)("em",{parentName:"p"},"Fixed")," enabled the first Group will cover the entire screen, and there will be no space left for the second Group that'll be pushed outside the screen."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(98138).Z,width:"664",height:"900"}))),(0,o.kt)("h3",{id:"clip-content"},"Clip content"),(0,o.kt)("p",null,"A Group with dimensions set in ",(0,o.kt)("inlineCode",{parentName:"p"},"%")," will expand to make sure it at least the same size as all of its content.\nThis can be changed be either enabling ",(0,o.kt)("inlineCode",{parentName:"p"},"Fixed")," or as in this example, enable ",(0,o.kt)("inlineCode",{parentName:"p"},"Clip content"),"."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(75922).Z,width:"640",height:"700"}))),(0,o.kt)("h2",{id:"alignment"},"Alignment"),(0,o.kt)("p",null,"You can use the alignment controls to pin the children to a specific edge, or how the remaining space should be distributed among the children. The padding of a group determines where that edge is."),(0,o.kt)("p",null,"A Group can control the alignment of its children using the ",(0,o.kt)("em",{parentName:"p"},"Align and justify content")," property."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("img",{src:"/2.8/docs/guides/user-interfaces/layout/alignment.gif"}),(0,o.kt)(l.Z,{json:{nodes:[{id:"6bede195-ea0c-d5ca-a315-500079267560",type:"Group",x:198,y:196,parameters:{backgroundColor:"#D6D6D6"},children:[{id:"b5beb893-c7ae-9467-da03-0032b8221ab6",type:"Circle",x:218,y:242,parameters:{fillColor:"#858585"}},{id:"0404c68a-525c-f975-60d3-8d0f7143abb7",type:"Circle",x:218,y:288,parameters:{fillColor:"#858585"}},{id:"b2b85213-f75e-7d0b-050e-dbee3c312fd7",type:"Circle",x:218,y:334,parameters:{fillColor:"#858585"}}]}]},mdxType:"CopyToClipboardButton"})),(0,o.kt)("p",null,"Children can use the ",(0,o.kt)("em",{parentName:"p"},"alignment")," controls to override the parent's alignment settings."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(48601).Z,width:"540",height:"150"}))),(0,o.kt)("p",null,"Children can use margins to offset the position from how it's aligned."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("img",{src:"/2.8/docs/guides/user-interfaces/layout/align.gif"}),(0,o.kt)(l.Z,{json:{nodes:[{id:"8a968ff3-9099-fc23-eaef-b3f3c2f8a271",type:"Group",label:"Layout None",x:-124.8300537163023,y:231.19983547495616,parameters:{backgroundColor:"#FFFFFF",flexDirection:"none"},ports:[],children:[{id:"6c2df5ce-7596-06da-a5c5-335275501d64",type:"Circle",x:-104.8300537163023,y:292.19983547495616,parameters:{fillColor:"#C9C9C9",alignY:"top",alignX:"left"},ports:[],children:[]}]}],connections:[]},mdxType:"CopyToClipboardButton"})),(0,o.kt)("h2",{id:"margin-and-padding"},"Margin and padding"),(0,o.kt)("p",null,"Clicking on a node will select it and open the property panel. This panel has controls for setting the margin and padding."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(84216).Z,width:"538",height:"350"}))),(0,o.kt)("p",null,"Here you can specify the ",(0,o.kt)("em",{parentName:"p"},"margin"),", i.e. the distance between this node and its siblings in the layout. You can specify the margins in all four directions. You can also specify the ",(0,o.kt)("em",{parentName:"p"},"padding"),", which is the distance from the borders of the ",(0,o.kt)("strong",{parentName:"p"},"Group")," to its children."),(0,o.kt)("p",null,"A good way to learn these concepts is to adjust and tweak the three nodes in this simple hierarchy. Try modifying the padding and margins and note the difference between them."),(0,o.kt)("h2",{id:"multiple-lines"},"Multiple lines"),(0,o.kt)("p",null,"If the child nodes extend beyond the border of the parent you have a couple of options to control the behavior, wrapping or scrolling. This section will explain the wrapping options that are available."),(0,o.kt)("p",null,"Wrapping is controlled by the ",(0,o.kt)("strong",{parentName:"p"},"Multi Line Wrap")," option in the properties."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(35156).Z,width:"548",height:"208"}))),(0,o.kt)("p",null,"You can choose any of these options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Off")," Children will extend beyond the borders of the parent node (default)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"On")," Children will be placed on multiple lines"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"On Reverse")," The children will wrap but in the reverse direction.")),(0,o.kt)("p",null,"Here's an example of a horizontal layout with ",(0,o.kt)("strong",{parentName:"p"},"Multi Line Wrap")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"On"),"."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("img",{src:"/2.8/docs/guides/user-interfaces/layout/multi-line.gif"}),(0,o.kt)(l.Z,{json:{nodes:[{id:"4ea33114-1bd2-d35a-79b6-9c6daf4ba473",type:"Group",x:198,y:196,parameters:{backgroundColor:"#D6D6D6",flexDirection:"row",flexWrap:"wrap"},children:[{id:"beeb24c5-2bf0-ca33-62ce-b448a10f1b09",type:"Circle",x:218,y:242,parameters:{fillColor:"#858585"}},{id:"1742b597-6ee5-dd00-0781-ec3c368b9bdc",type:"Circle",x:218,y:288,parameters:{fillColor:"#858585"}},{id:"e4fc4976-3c13-4a5d-701c-ef3a72eb17b5",type:"Circle",x:218,y:334,parameters:{fillColor:"#858585"}},{id:"37441ff4-81ac-47ac-2882-8d3f5a4151b4",type:"Circle",x:251.53808416795107,y:210.45256017010956,parameters:{fillColor:"#858585"}},{id:"4d7a3378-7b80-1f6d-c0cd-285360f291f6",type:"Circle",x:251.53808416795107,y:256.45256017010956,parameters:{fillColor:"#858585"}},{id:"b1a7b659-7519-e8ea-f4f5-96bba6954b81",type:"Circle",x:251.53808416795107,y:302.45256017010956,parameters:{fillColor:"#858585"}}]}]},mdxType:"CopyToClipboardButton"})))}g.isMDXComponent=!0},48601:function(e,t,n){t.Z=n.p+"assets/images/align-props-301c21166cd9d0399f8138613ed7732a.png"},75922:function(e,t,n){t.Z=n.p+"assets/images/clip-4bec7ce8990921c531a897a3a0bc01f8.gif"},98138:function(e,t,n){t.Z=n.p+"assets/images/fixed-height-931425a1702fe239534175ab1cfb4062.gif"},99635:function(e,t,n){t.Z=n.p+"assets/images/layout-absolute-c1dd7301112afd622bfd1a22b52c3eda.png"},46096:function(e,t,n){t.Z=n.p+"assets/images/layout-prop-e4159f9bc2130f3dd87d583a7c3c3ef6.png"},84216:function(e,t,n){t.Z=n.p+"assets/images/margin-and-padding-props-947842375f403e8b22b6ef73da9bc4c2.png"},35156:function(e,t,n){t.Z=n.p+"assets/images/wrap-43a09c273ceca68b65196f15e2b7df1b.png"},60154:function(e,t,n){t.Z=n.p+"assets/images/dimensions-8318fb5834fbfb6fb1951b0a06894005.png"}}]);