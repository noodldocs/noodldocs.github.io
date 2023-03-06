"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[4994],{31589:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return g}});var a=n(83117),l=n(80102),o=(n(67294),n(3905)),i=n(22004),r=["components"],s={title:"Panning and Zooming Control",hide_title:!0},m=void 0,d={unversionedId:"modules/panning-and-zooming/README",id:"modules/panning-and-zooming/README",title:"Panning and Zooming Control",description:"",source:"@site/library/modules/panning-and-zooming/README.mdx",sourceDirName:"modules/panning-and-zooming",slug:"/modules/panning-and-zooming/",permalink:"/2.8/library/modules/panning-and-zooming/",tags:[],version:"current",frontMatter:{title:"Panning and Zooming Control",hide_title:!0}},p={},g=[{value:"The Panning Control",id:"the-panning-control",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],h={toc:g};function u(t){var e=t.components,n=(0,l.Z)(t,r);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"panning-and-zooming-control"},"Panning and Zooming Control"),(0,o.kt)("p",null,"This module contains a component that enables you to zoom in and out of an image as well as panning around in the image. The component supports both mouse wheel scrolling and pinch zooming. You can also control the zoom level by connecting it to ",(0,o.kt)("strong",{parentName:"p"},"Buttons"),"."),(0,o.kt)("p",null,"The module also contains a small example."),(0,o.kt)("p",null,"The sizing of the control is best controlled by putting it in a ",(0,o.kt)("strong",{parentName:"p"},"Group")," node with the relevant dimension setting applied, as the ",(0,o.kt)("strong",{parentName:"p"},"Panning Control")," will always try to fill its parent."),(0,o.kt)(i.Z,{playing:!0,autoplay:!0,muted:!0,loop:!0,url:"panzoom.mp4",mdxType:"ReactPlayer"}),(0,o.kt)("h2",{id:"the-panning-control"},"The Panning Control"),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Zoom Level")),(0,o.kt)("td",{parentName:"tr",align:null},"A number that sets the current Zoom Level of the image as a scale. For example ",(0,o.kt)("inlineCode",{parentName:"td"},"1")," means it's the natural size of the image, ",(0,o.kt)("inlineCode",{parentName:"td"},"0.5")," means zoomed out to half the size, ",(0,o.kt)("inlineCode",{parentName:"td"},"2.0")," means zoomed in to double the size. Note that the ",(0,o.kt)("span",{className:"ndl-data"},"Max Zoom Level")," and ",(0,o.kt)("span",{className:"ndl-data"},"Min Zoom Level")," will adjust the zoom level so it matches the limits.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Max Zoom Level")),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum allowed zoom level.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Min Zoom Level")),(0,o.kt)("td",{parentName:"tr",align:null},"The minimum allowed zoom level.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Enable Pinch Zooming")),(0,o.kt)("td",{parentName:"tr",align:null},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true")," enables pinch zooming on the image.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Enable Scroll Wheel Zooming")),(0,o.kt)("td",{parentName:"tr",align:null},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true")," enables scroll wheel or track pad zooming.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Image")),(0,o.kt)("td",{parentName:"tr",align:null},"A source to an image that should be displayed by the Panning Control.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Enable Clip")),(0,o.kt)("td",{parentName:"tr",align:null},"If set to ",(0,o.kt)("inlineCode",{parentName:"td"},"true")," will enable clipping on the Panning Control, meaning it will clip any parts of the zoomed image sticking out outside the control.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Constraint to Container")),(0,o.kt)("td",{parentName:"tr",align:null},"Set to ",(0,o.kt)("inlineCode",{parentName:"td"},"true")," this will ensure that it's not possible to scroll or zoom to a position where there is empty space between the image and the ",(0,o.kt)("strong",{parentName:"td"},"Panning Control"),".")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Zoom In")),(0,o.kt)("td",{parentName:"tr",align:null},"This signal will trigger a Zoom In into the image.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Zoom Out")),(0,o.kt)("td",{parentName:"tr",align:null},"This signal will trigger a Zoom Out of the image.")))),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"X pos")),(0,o.kt)("td",{parentName:"tr",align:null},"The x position (in image coordinates) of the top left corner of what's visible of the image in the ",(0,o.kt)("strong",{parentName:"td"},"Panning Control"),". If ",(0,o.kt)("span",{className:"ndl-data"},"Constraint to Container")," is set to ",(0,o.kt)("inlineCode",{parentName:"td"},"false")," this can be a negative number, if there is empty space to the left of the image.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Y pos")),(0,o.kt)("td",{parentName:"tr",align:null},"The y position (in image coordinates) of the top left corner of what's visible of the image in the ",(0,o.kt)("strong",{parentName:"td"},"Panning Control"),". If ",(0,o.kt)("span",{className:"ndl-data"},"Constraint to Container")," is set to ",(0,o.kt)("inlineCode",{parentName:"td"},"false")," this can be a negative number, if there is empty space to the top of the image.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Height")),(0,o.kt)("td",{parentName:"tr",align:null},"The height (in image coordinates) of the visible rectangle of the image in the ",(0,o.kt)("strong",{parentName:"td"},"Panning Control"),". Note that if ",(0,o.kt)("span",{className:"ndl-data"},"Constraint to Container")," is set to ",(0,o.kt)("inlineCode",{parentName:"td"},"false")," this height can be larger than the natural image height, i.e. when there is empty space to the bottom of the image.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Width")),(0,o.kt)("td",{parentName:"tr",align:null},"The width (in image coordinates) of the visible rectangle of the image in the ",(0,o.kt)("strong",{parentName:"td"},"Panning Control"),". Note that if ",(0,o.kt)("span",{className:"ndl-data"},"Constraint to Container")," is set to ",(0,o.kt)("inlineCode",{parentName:"td"},"false")," this width can be larger than the natural image width, i.e. when there is empty space to the right of the image.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Current Zoom Level")),(0,o.kt)("td",{parentName:"tr",align:null},"The current Zoom Level applied to the ",(0,o.kt)("strong",{parentName:"td"},"Panning Control"))))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"View Updated")),(0,o.kt)("td",{parentName:"tr",align:null},"This signal is sent whenever a new area is visible of the image, e.g. when the user have panned or zoomed.")))))}u.isMDXComponent=!0}}]);