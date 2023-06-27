"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[6504],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),g=l,h=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90075:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(83117),l=n(80102),o=(n(67294),n(3905)),r=n(44996),i=(n(53488),["components"]),s={title:"Table",hide_title:!0},c="Table",p={unversionedId:"prefabs/table/README",id:"prefabs/table/README",title:"Table",description:"A component for creating tables. This is also a great starting point for creating your own custom tables.",source:"@site/library/prefabs/table/README.md",sourceDirName:"prefabs/table",slug:"/prefabs/table/",permalink:"/2.8/library/prefabs/table/",tags:[],version:"current",frontMatter:{title:"Table",hide_title:!0},sidebar:"tableSidebar"},d={},u=[{value:"Basic usage",id:"basic-usage",level:2},{value:"Row clicked signal",id:"row-clicked-signal",level:2},{value:"Editing columns",id:"editing-columns",level:2},{value:"Custom Cells",id:"custom-cells",level:2},{value:"Sorting",id:"sorting",level:2}],g={toc:u};function h(e){var t=e.components,s=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"table"},"Table"),(0,o.kt)("p",null,"A component for creating tables. This is also a great starting point for creating your own custom tables."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(86323).Z,width:"680",height:"384"}))),(0,o.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,o.kt)("p",null,"The most simple use case is to show an array of objects. This can be done by simply providing the array items as the ",(0,o.kt)("strong",{parentName:"p"},"Items")," input of the table component. Here is a simple example of just using the result from a ",(0,o.kt)("strong",{parentName:"p"},"Query Records")," and feeding it to a table."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(58439).Z,width:"1144",height:"926"}))),(0,o.kt)("p",null,"This will simply present all properties of the objects as columns, as show below:"),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(96439).Z,width:"1854",height:"742"}))),(0,o.kt)("p",null,"The table will automatically show ",(0,o.kt)("strong",{parentName:"p"},"String"),", ",(0,o.kt)("strong",{parentName:"p"},"Boolean"),", ",(0,o.kt)("strong",{parentName:"p"},"Number")," and ",(0,o.kt)("strong",{parentName:"p"},"Date")," types. Other types will not be presented correctly. Now you might not want to show all properties of the objects. This can be easily achieved with the ",(0,o.kt)("strong",{parentName:"p"},"Headers")," innput of the table. There you can specify which columns to use."),(0,o.kt)("p",null,"Providing the following headers in this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"[\n  {\n    Field: 'Name',\n    Label: 'Name',\n  },\n  {\n    Field: 'Level',\n    Label: 'Security Level',\n  },\n  {\n    Field: 'HireDate',\n    Label: 'Hired at',\n  },\n  {\n    Field: 'Remote',\n    Label: 'Works remote',\n  },\n];\n")),(0,o.kt)("p",null,"You can also clear the default sample items of the table by editing the ",(0,o.kt)("strong",{parentName:"p"},"Items")," input in the property panel. Just put in an empty array."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"[];\n")),(0,o.kt)("p",null,"Would instead produce the following table:"),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(27701).Z,width:"1856",height:"736"}))),(0,o.kt)("h2",{id:"row-clicked-signal"},"Row clicked signal"),(0,o.kt)("p",null,"When a row is clicked the ",(0,o.kt)("strong",{parentName:"p"},"Item Clicked")," signal will be emitted along with the ",(0,o.kt)("strong",{parentName:"p"},"Item Id")," of the object or record representing that row. You can for instance use that to show details for the object in a different panel. The example below sets the ",(0,o.kt)("strong",{parentName:"p"},"Item Id")," to a variable that could be used somewhere else to present the object in a different UI."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(42219).Z,width:"1634",height:"550"}))),(0,o.kt)("h2",{id:"editing-columns"},"Editing columns"),(0,o.kt)("p",null,"You can make a column editable by specifying the ",(0,o.kt)("strong",{parentName:"p"},"Editable")," property in the corresponding header item. Let's say we want to make the ",(0,o.kt)("strong",{parentName:"p"},"Works remote")," column editable, we would simply provide it in the ",(0,o.kt)("strong",{parentName:"p"},"Headers")," array."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"[\n  ...{\n    Field: 'Remote',\n    Label: 'Works remote',\n    Editable: true,\n  },\n];\n")),(0,o.kt)("p",null,"This would allow the checkboxes in the column to be edited. The table will edit the actual object or record property, you can see this by inspecting the content of the ",(0,o.kt)("strong",{parentName:"p"},"Items")," array output of the ",(0,o.kt)("strong",{parentName:"p"},"Query Records")," node while editing the table."),(0,o.kt)("div",{className:"ndl-video"},(0,o.kt)("video",{width:"100%",autoPlay:!0,muted:!0,loop:!0,src:(0,r.Z)("/library/prefabs/table/table-editable.mp4")})),(0,o.kt)("p",null,"When an item is edited the ",(0,o.kt)("strong",{parentName:"p"},"Cell Changed")," signal will be emitted from the table, along with the ",(0,o.kt)("strong",{parentName:"p"},"Item Id")," and the ",(0,o.kt)("strong",{parentName:"p"},"Field"),". You can, for instance, use this event to trigger a record save to the cloud."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(78549).Z,width:"1508",height:"554"}))),(0,o.kt)("p",null,"With this setup you have a very basic CRUD interface to a list of objects. Make sure to set the ",(0,o.kt)("strong",{parentName:"p"},"Properties to store")," to ",(0,o.kt)("strong",{parentName:"p"},"All")," on the ",(0,o.kt)("strong",{parentName:"p"},"Set Record Properties")," node."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(42566).Z,width:"554",height:"98"}))),(0,o.kt)("h2",{id:"custom-cells"},"Custom Cells"),(0,o.kt)("p",null,"The table component is entierly built using Noodl core nodes which means you can rebuilt it to completely fit your needs. One setting you can provide in the ",(0,o.kt)("strong",{parentName:"p"},"Headers")," input is to set the column width in pixels. You can do this be specifying ",(0,o.kt)("strong",{parentName:"p"},"Width"),", as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"[\n  ...{\n    Field: 'Remote',\n    Label: 'Works remote',\n    Editable: true,\n    Width: 50,\n  },\n];\n")),(0,o.kt)("p",null,"You can also customize the cells of the table by simply editing their individual subcomponents, or by creating completely new ones. The ",(0,o.kt)("strong",{parentName:"p"},"Table")," component have a number of subcomponents, one for each type of cell, and one default simply called ",(0,o.kt)("strong",{parentName:"p"},"Cell"),". You can duplicate this one to use as base for your own cell type."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9450).Z,width:"880",height:"556"}))),(0,o.kt)("p",null,"Next, rename the new copy to a good name for your new cell type, it must end with ",(0,o.kt)("strong",{parentName:"p"},"Cell"),", so we will call it ",(0,o.kt)("strong",{parentName:"p"},"Security Level Cell"),". Now you can edit the ",(0,o.kt)("strong",{parentName:"p"},"Headers")," array to make the column use your new cell type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'[\n    ...\n    {\n        Field:"Level",\n        Label:"Security Level",\n        Type:"Security Level"\n    },\n    ...\n]\n')),(0,o.kt)("p",null,"Now let's get started editing our new cell type, here is a simple example of how to show the security level as a colored bar."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(73048).Z,width:"1684",height:"782"}))),(0,o.kt)("p",null,"In the example above we have created a ",(0,o.kt)("strong",{parentName:"p"},"Group")," that has a width in percentage, some nice rounded corners and padding. The ",(0,o.kt)("strong",{parentName:"p"},"Function")," node computes the width and a blend for the color with the following script."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Outputs.Blend = (Inputs.Value / 5) * 2\nOutputs.Width = Math.max( (Inputs.Value / 5) * 100, 20)\n")),(0,o.kt)("p",null,"The color blend is creating the background color for the group with these settings:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(25245).Z,width:"828",height:"494"}))),(0,o.kt)("p",null,"Using this cell type will give you the following table."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(90920).Z,width:"1876",height:"812"}))),(0,o.kt)("p",null,"We recommend inspecting the default cell types and see how the handle cell editing etc."),(0,o.kt)("h2",{id:"sorting"},"Sorting"),(0,o.kt)("p",null,"You can enable sorting by a column by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Sortable")," property in a header item. This will enable the header item to be clicked to switch between ascending and descending sorting. "),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(70146).Z,width:"632",height:"247"}))),(0,o.kt)("p",null,"Here is an example for a table with two columns:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'[\n    {\n        Label:"Name",\n        Field:"Name",\n        Sortable:true\n    },\n    {\n        Label:"State",\n        Field:"State",\n        Sortable:true\n    }\n]\n')),(0,o.kt)("p",null,"The table doesn't sort the items automatically instead it provides an output called ",(0,o.kt)("span",{class:"ndl-data"},"Sorting")," that will contain the current selecting sorting field, and a signal ",(0,o.kt)("span",{class:"ndl-data"},"Sorting Changed")," that will be emitted when the user clicks on a header and the sorting is changed. This will need to be hooked up to your data source to trigger a fetch, it's very simple to do this with ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/query-records"},"Query Records")," as shown below:"),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(59903).Z,width:"473",height:"254"}))),(0,o.kt)("p",null,"The ",(0,o.kt)("span",{class:"ndl-data"},"Sorting")," output is a string containing the name of the selected sorting field with a prefix ",(0,o.kt)("inlineCode",{parentName:"p"},"-")," if sorting is to be done descending. You can easily connect this to the ",(0,o.kt)("strong",{parentName:"p"},"Query Records")," node using ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/query-records#sorting-in-advanced-filters"},"advanced filters"),". Here is the most simple example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"where({ })\n\nsort([Inputs.Sorting])\n")),(0,o.kt)("p",null,"This will allow you to make the connection between the table ",(0,o.kt)("strong",{parentName:"p"},"Sorting")," output and the corresponding input on the ",(0,o.kt)("strong",{parentName:"p"},"Query Records")," node. Finally you can set the sorting via the ",(0,o.kt)("span",{class:"ndl-data"},"Sorting")," input on the table component. This can be used to provide a default sorting, make sure you use the same sorting as default on your data source."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(47752).Z,width:"293",height:"49"}))))}h.isMDXComponent=!0},53488:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294);function l(e){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)})):function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+n)}catch(a){console.error("Fallback: Oops, unable to copy",a)}document.body.removeChild(t)}(e)}function o(e){return a.createElement("button",{className:"ndl-copy-nodes-button",onClick:function(){return t=e.json,void l(JSON.stringify(t));var t}})}},42566:function(e,t,n){t.Z=n.p+"assets/images/set-record-props-925a58b5bda5893e39103cb832da136e.png"},25245:function(e,t,n){t.Z=n.p+"assets/images/table-color-blend-props-38e19ad4102ca00723dc649e55c9d536.png"},9450:function(e,t,n){t.Z=n.p+"assets/images/table-duplicate-cell-cc1304e610f0b2188fbed5e384fa7e81.png"},58439:function(e,t,n){t.Z=n.p+"assets/images/table-nodes-1-fc23c522ea57f21803f9ab481e1c4921.png"},42219:function(e,t,n){t.Z=n.p+"assets/images/table-nodes-2-a9da8d44c1e87266e66fbe3b57423b8f.png"},78549:function(e,t,n){t.Z=n.p+"assets/images/table-nodes-3-ed2cb5dc9da3e25161e9e03ca65fe026.png"},73048:function(e,t,n){t.Z=n.p+"assets/images/table-nodes-4-9c747650387893a89ee599732c2850b7.png"},96439:function(e,t,n){t.Z=n.p+"assets/images/table-screen-1-2d7a32e0e21f527e24474bed1e2fa043.png"},27701:function(e,t,n){t.Z=n.p+"assets/images/table-screen-2-7a28370858a0f9927e6340a6d7614423.png"},90920:function(e,t,n){t.Z=n.p+"assets/images/table-screen-3-d0a412f564b19ef5ae9ba62e6653a3a8.png"},59903:function(e,t,n){t.Z=n.p+"assets/images/table-sorting-1-b47b1d00930316c39d8f93511bb6d33e.png"},47752:function(e,t){t.Z="data:image/png;base64,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"},70146:function(e,t,n){t.Z=n.p+"assets/images/table-sorting-3-eeec3fa00a9351698f2f513ef7e84ded.png"},86323:function(e,t,n){t.Z=n.p+"assets/images/table-d7da365dadaa715ee8a30072650e2aa0.png"}}]);