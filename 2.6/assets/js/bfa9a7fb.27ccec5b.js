"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[1835],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),h=r,k=m["".concat(p,".").concat(h)]||m[h]||u[h]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},60804:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],o={hide_title:!0,hide_table_of_contents:!0,title:"Video"},p=void 0,s={unversionedId:"basic-elements/video",id:"basic-elements/video",title:"Video",description:"This node places a video surface in the visual tree. It features a wide range of design options and settings for playback.",source:"@site/nodes/basic-elements/video.md",sourceDirName:"basic-elements",slug:"/basic-elements/video",permalink:"/2.6/nodes/basic-elements/video",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Video"},sidebar:"nodeSidebar",previous:{title:"Image",permalink:"/2.6/nodes/basic-elements/image"},next:{title:"Circle",permalink:"/2.6/nodes/basic-elements/circle"}},d={},u=[{value:"Inputs",id:"inputs",level:2},{value:"Visual",id:"visual",level:3},{value:"Outputs",id:"outputs",level:2},{value:"Visual",id:"visual-1",level:3}],m={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h1",{id:"video"},"Video"),(0,l.kt)("p",null,"This node places a video surface in the visual tree. It features a wide range of design options and settings for playback."),(0,l.kt)("p",null,"The ",(0,l.kt)("span",{className:"ndl-data"},"source")," can be set from a URL or a file. You can drag videos from your computer and drop them into Noodl to add them to the project folder. This will make them selectable as the ",(0,l.kt)("span",{className:"ndl-data"},"source")," in the ",(0,l.kt)("span",{className:"ndl-node"},"Video")," node Property Panel."),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Play")),(0,l.kt)("td",{parentName:"tr",align:null},"Signal to start playing the video.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Pause")),(0,l.kt)("td",{parentName:"tr",align:null},"Signal to pause the video.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Restart")),(0,l.kt)("td",{parentName:"tr",align:null},"Signal to play the video from the beginning.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Reset")),(0,l.kt)("td",{parentName:"tr",align:null},"Signal to reset the video to the beginning.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Source")),(0,l.kt)("td",{parentName:"tr",align:null},"The source of the video. Either a local file in the project folder or an absolute url.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Poster")),(0,l.kt)("td",{parentName:"tr",align:null},"An image shown when the video is not started. Choose an image in the project folder.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Autoplay")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets whether the audio/video should start playing as soon as it is loaded.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Volume")),(0,l.kt)("td",{parentName:"tr",align:null},"The volume of the video when played.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Muted")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets whether the audio/video is muted or not.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Loop")),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates whether the video should loop when the end is reached during playback.")))),(0,l.kt)("p",null,"The Video node also has some special Video Layout properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Video Position X")),(0,l.kt)("td",{parentName:"tr",align:null},"The video's X position within the ",(0,l.kt)("strong",{parentName:"td"},"Video")," node's bounding box.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Video Position Y")),(0,l.kt)("td",{parentName:"tr",align:null},"The video's Y position within the ",(0,l.kt)("strong",{parentName:"td"},"Video")," node's bounding box.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Object Fit")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies how the video will behave when scaled to other size than the default size.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"Contain"),": The video will be scaled by keeping aspect ratio and making sure the video fits in the bounding box. This may introduce transparent areas within the ",(0,l.kt)("strong",{parentName:"td"},"Video")," node's bounding box.",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"Cover"),": The video will be scaled by keeping aspect ratio and making sure the video fills the entire bounding box. Portions of the video may be clipped.",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"Fill"),": The video will fill the bounding box by scaling without keeping aspect ratio.",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"None"),": The video will not be scaled. May be clipped.")))),(0,l.kt)("h3",{id:"visual"},"Visual"),(0,l.kt)("p",null,"This node supports the following ",(0,l.kt)("a",{parentName:"p",href:"../shared-props/inputs/visual-input-properties"},"Visual Input Properties"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties#margin"},"Margin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties#alignment"},"Alignment")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties#dimensions"},"Dimensions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties#-position"},"Layout, Position")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties#style"},"Style")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties#border-style"},"Border Style")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties#corner-radius"},"Corner Radius")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties#box-shadow"},"Box Shadow")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties#placement"},"Placement")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties#dimension-constraints"},"Dimension Constraints")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties#other"},"Other")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties#advanced-style"},"Advanced Style"))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"On Can Play")),(0,l.kt)("td",{parentName:"tr",align:null},"Signal triggered when the video has loaded and is ready to be played.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"On Time Update")),(0,l.kt)("td",{parentName:"tr",align:null},"Signal triggered when the playing position of the audio/video has changed. Event is invoked both by playing the media as well as when the playback position is being moved (for example when fast forward is being used).")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"DOM Element")),(0,l.kt)("td",{parentName:"tr",align:null},"A reference to the DOM Element representing this visual node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"videoWidth")),(0,l.kt)("td",{parentName:"tr",align:null},"The width of the video source.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"videoHeight")),(0,l.kt)("td",{parentName:"tr",align:null},"The height of the video source.")))),(0,l.kt)("h3",{id:"visual-1"},"Visual"),(0,l.kt)("p",null,"This node supports the following ",(0,l.kt)("a",{parentName:"p",href:"../shared-props/outputs/visual-output-properties"},"Visual Output Properties"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties/#bounding-box"},"Bounding Box")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties/#mounted"},"Mounted")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties/#pointer-events"},"Pointer Events")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties/#hover-events"},"Hover Events")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties/#other"},"Other"))),(0,l.kt)("div",{className:"hidden-props-for-editor"},(0,l.kt)("p",null,'@include "../shared-props/inputs/visual-input-properties.md"\n@include "../shared-props/outputs/visual-output-properties.md"')))}h.isMDXComponent=!0}}]);