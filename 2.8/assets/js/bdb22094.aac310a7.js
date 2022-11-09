"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[2001],{3905:function(t,A,e){e.d(A,{Zo:function(){return p},kt:function(){return m}});var n=e(67294);function a(t,A,e){return A in t?Object.defineProperty(t,A,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[A]=e,t}function r(t,A){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);A&&(n=n.filter((function(A){return Object.getOwnPropertyDescriptor(t,A).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var A=1;A<arguments.length;A++){var e=null!=arguments[A]?arguments[A]:{};A%2?r(Object(e),!0).forEach((function(A){a(t,A,e[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(A){Object.defineProperty(t,A,Object.getOwnPropertyDescriptor(e,A))}))}return t}function i(t,A){if(null==t)return{};var e,n,a=function(t,A){if(null==t)return{};var e,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],A.indexOf(e)>=0||(a[e]=t[e]);return a}(t,A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],A.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var s=n.createContext({}),o=function(t){var A=n.useContext(s),e=A;return t&&(e="function"==typeof t?t(A):l(l({},A),t)),e},p=function(t){var A=o(t.components);return n.createElement(s.Provider,{value:A},t.children)},u={inlineCode:"code",wrapper:function(t){var A=t.children;return n.createElement(n.Fragment,{},A)}},d=n.forwardRef((function(t,A){var e=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=o(e),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return e?n.createElement(h,l(l({ref:A},p),{},{components:e})):n.createElement(h,l({ref:A},p))}));function m(t,A){var e=arguments,a=A&&A.mdxType;if("string"==typeof t||a){var r=e.length,l=new Array(r);l[0]=d;var i={};for(var s in A)hasOwnProperty.call(A,s)&&(i[s]=A[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var o=2;o<r;o++)l[o]=e[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}d.displayName="MDXCreateElement"},49498:function(t,A,e){e.r(A),e.d(A,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u}});var n=e(83117),a=e(80102),r=(e(67294),e(3905)),l=["components"],i={hide_title:!0,hide_table_of_contents:!0,title:"Button"},s=void 0,o={unversionedId:"ui-controls/button",id:"ui-controls/button",title:"Button",description:"This node places a customizable button in the visual tree.",source:"@site/nodes/ui-controls/button.md",sourceDirName:"ui-controls",slug:"/ui-controls/button",permalink:"/2.8/nodes/ui-controls/button",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Button"},sidebar:"nodeSidebar",previous:{title:"Icon",permalink:"/2.8/nodes/basic-elements/icon"},next:{title:"Checkbox",permalink:"/2.8/nodes/ui-controls/checkbox"}},p={},u=[{value:"Inputs",id:"inputs",level:2},{value:"Visual",id:"visual",level:3},{value:"Outputs",id:"outputs",level:2},{value:"States",id:"states",level:3},{value:"Visual",id:"visual-1",level:3}],d={toc:u};function m(t){var A=t.components,i=(0,a.Z)(t,l);return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:A,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"button"},"Button"),(0,r.kt)("p",null,"This node places a customizable button in the visual tree."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:e(22626).Z,width:"1011",height:"360"}))),(0,r.kt)("p",null,"The button has a ",(0,r.kt)("span",{className:"ndl-signal"},"Click")," signal that you can use to trigger actions."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:e(31587).Z,width:"674",height:"240"}))),(0,r.kt)("p",null,"This control contains all logic such as accessibility etc. It can be styled in via it's properties.\nUse variations to create different types of buttons"),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("p",null,"The Button can be enabled and disabled using the Enabled input:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies if the control is ",(0,r.kt)("strong",{parentName:"td"},"Enabled")," (",(0,r.kt)("inlineCode",{parentName:"td"},"true"),") or ",(0,r.kt)("strong",{parentName:"td"},"Disabled")," (",(0,r.kt)("inlineCode",{parentName:"td"},"false"),"). A disabled control will not respond to any user interaction.")))),(0,r.kt)("p",null,"The Button node has a set of label properties that can be set:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Enable Label")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets whether the label is visible or not.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Text Style")),(0,r.kt)("td",{parentName:"tr",align:null},"Set an existing text style to this node, or create a new text style from the current properties.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Label")),(0,r.kt)("td",{parentName:"tr",align:null},"A text string that will be shown as the label on the button.")))),(0,r.kt)("p",null,"Similarly, it has a set of icon properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Enable Icon")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets whether the icon is visible or not.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},"Use this to set if you want to use a predefined ",(0,r.kt)("inlineCode",{parentName:"td"},"icon")," or a custom ",(0,r.kt)("inlineCode",{parentName:"td"},"image")," from the project folder.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Source")),(0,r.kt)("td",{parentName:"tr",align:null},"Where to get the icon.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Spacing")),(0,r.kt)("td",{parentName:"tr",align:null},"The spacing between the text and the icon.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Placement")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets whether the icon should be to the ",(0,r.kt)("inlineCode",{parentName:"td"},"left")," or to the ",(0,r.kt)("inlineCode",{parentName:"td"},"right")," of the ",(0,r.kt)("em",{parentName:"td"},"Label"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Size")),(0,r.kt)("td",{parentName:"tr",align:null},"The width of the icon in ",(0,r.kt)("inlineCode",{parentName:"td"},"px"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Color")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the color of the icon. Only visible if ",(0,r.kt)("em",{parentName:"td"},"Type")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"icon"),".")))),(0,r.kt)("h3",{id:"visual"},"Visual"),(0,r.kt)("p",null,"This node supports the following ",(0,r.kt)("a",{parentName:"p",href:"/nodes/shared-props/inputs/visual-input-properties"},"Visual Input Properties"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#margin"},"Margin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#padding"},"Padding")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#alignment"},"Alignment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#dimensions"},"Dimensions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#position"},"Layout, Position")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#text-styles"},"Text Styles")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#style"},"Style")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#border-style"},"Border Style")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#corner-radius"},"Corner Radius")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#box-shadow"},"Box Shadow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#placement"},"Placement")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#dimension-constraints"},"Dimension Constraints")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#other"},"Other")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#advanced-style"},"Advanced Style"))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("p",null,"The main output for the button is the Click ",(0,r.kt)("span",{className:"ndl-signal"},"signal"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Click")),(0,r.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output when the button is clicked.")))),(0,r.kt)("p",null,"It also features a set of more in depth ",(0,r.kt)("span",{className:"ndl-signal"},"signals"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Changed")),(0,r.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output when the value of the control is changed by user interaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Focused")),(0,r.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output when the control is focused.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Blurred")),(0,r.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output when the control is blurred, i.e. it has lost the input focus.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Pointer Down")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the mouse is pressed or finger is down on the node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Pointer Up")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the mouse is released or finger is lifted on the node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Hover Start")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the mouse enters the node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Hover End")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the mouse leaves the node.")))),(0,r.kt)("h3",{id:"states"},"States"),(0,r.kt)("p",null,"Apart from triggering ",(0,r.kt)("span",{className:"ndl-signal"},"signals")," the Button node also notifies of its state through ",(0,r.kt)("span",{className:"ndl-data"},"data")," outputs:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"A boolean output that is true if the control is in ",(0,r.kt)("strong",{parentName:"td"},"Enabled")," state and false if it is ",(0,r.kt)("strong",{parentName:"td"},"Disabled"),". This is useful when using this control as a base for your own component that will represent visually that it is enabled or disabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Focused")),(0,r.kt)("td",{parentName:"tr",align:null},"This is a boolean type output that will be true if the control is in ",(0,r.kt)("strong",{parentName:"td"},"Focused")," state, and false otherwise. This is useful when using this control as a base for your own component that will represent visually that it is focused. This can be due to the user selecting the control for input or by using the keyboard.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Hover")),(0,r.kt)("td",{parentName:"tr",align:null},"A boolean type output that is true when the user hovers over this control with the mouse and false otherwise. This is useful when using this control as a base for your own component that will represent visually that it is hovered.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Pressed")),(0,r.kt)("td",{parentName:"tr",align:null},"A boolean output that is true when the user is currently pressing the control. This is useful when using this control as a base for your own component that will represent visually that it is pressed.")))),(0,r.kt)("h3",{id:"visual-1"},"Visual"),(0,r.kt)("p",null,"This node supports the following ",(0,r.kt)("a",{parentName:"p",href:"/nodes/shared-props/outputs/visual-output-properties/"},"Visual Output Properties"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/nodes/shared-props/outputs/visual-output-properties/#bounding-box"},"Bounding Box")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/nodes/shared-props/outputs/visual-output-properties/#mounted"},"Mounted")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/nodes/shared-props/outputs/visual-output-properties/#other"},"Other"))),(0,r.kt)("div",{className:"hidden-props-for-editor"},(0,r.kt)("p",null,'@include "../shared-props/inputs/visual-input-properties.md"\n@include "../shared-props/outputs/visual-output-properties.md"')))}m.isMDXComponent=!0},31587:function(t,A,e){A.Z=e.p+"assets/images/button_node-b429672228ce0d7aa9b88692ed81681a.png"},22626:function(t,A){A.Z="data:image/png;base64,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"}}]);