"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[1613],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(a),k=r,h=m["".concat(s,".").concat(k)]||m[k]||u[k]||l;return a?n.createElement(h,i(i({ref:e},d),{},{components:a})):n.createElement(h,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},94038:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],o={hide_title:!0,hide_table_of_contents:!0,title:"Radio Button"},s=void 0,p={unversionedId:"ui-controls/radio-button",id:"ui-controls/radio-button",title:"Radio Button",description:"This node places a radio button in the visual tree. The Radio Button must be placed in a Radio Button Group node to function properly.",source:"@site/nodes/ui-controls/radio-button.md",sourceDirName:"ui-controls",slug:"/ui-controls/radio-button",permalink:"/2.6/nodes/ui-controls/radio-button",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Radio Button"},sidebar:"nodeSidebar",previous:{title:"Dropdown",permalink:"/2.6/nodes/ui-controls/dropdown"},next:{title:"Radio Button Group",permalink:"/2.6/nodes/ui-controls/radio-button-group"}},d={},u=[{value:"Inputs",id:"inputs",level:2},{value:"Visual",id:"visual",level:3},{value:"Outputs",id:"outputs",level:2},{value:"States",id:"states",level:3}],m={toc:u};function k(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h1",{id:"radio-button"},"Radio Button"),(0,l.kt)("p",null,"This node places a radio button in the visual tree. The ",(0,l.kt)("span",{className:"ndl-node"},"Radio Button")," must be placed in a ",(0,l.kt)("span",{className:"ndl-node"},"Radio Button Group")," node to function properly."),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:a(41106).Z,width:"1011",height:"360"}))),(0,l.kt)("p",null,"You must specify a unique ",(0,l.kt)("span",{className:"ndl-data"},"Value")," for each ",(0,l.kt)("span",{className:"ndl-node"},"Radio Button")," node. Only one ",(0,l.kt)("span",{className:"ndl-node"},"Radio Button")," in a ",(0,l.kt)("span",{className:"ndl-node"},"Radio Button Group")," can be selected at once."),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:a(37267).Z,width:"1011",height:"360"}))),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("p",null,"The core radio button has a very simple visual appearance and is most often used in other components as part of a design system. This control contains all logic such as accessibility etc. It can be styled in via it's properties, or you can use it only for the logic and create your own radio button component in your own design system."),(0,l.kt)("div",{className:"ndl-image-with-background s"},(0,l.kt)("p",null,(0,l.kt)("img",{src:a(58711).Z,width:"242",height:"158"}))),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("p",null,"The main input of the Radio Button node is the ",(0,l.kt)("span",{className:"ndl-data"},"Value")," input:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Value")),(0,l.kt)("td",{parentName:"tr",align:null},"The value for this radio button. The value of the selected radio button in a radio button group will be passed as the ",(0,l.kt)("strong",{parentName:"td"},"Value")," output of the radio button group. All radio buttons in a group should have unique values.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Background Color")),(0,l.kt)("td",{parentName:"tr",align:null},'The background color when the radio button is "checked".')))),(0,l.kt)("p",null,"It can be enabled and disabled using the ",(0,l.kt)("span",{className:"ndl-data"},"Enabled")," input:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{parentName:"td",className:"ndl-data"}),"Enabled",(0,l.kt)("undefined",{parentName:"td"})),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies if the control is ",(0,l.kt)("strong",{parentName:"td"},"Enabled")," (",(0,l.kt)("inlineCode",{parentName:"td"},"true"),") or ",(0,l.kt)("strong",{parentName:"td"},"Disabled")," (",(0,l.kt)("inlineCode",{parentName:"td"},"false"),"). A disabled control will not respond to any user interaction.")))),(0,l.kt)("p",null,"The Checkbox node has a set of label properties that can be set:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Enable Label")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets whether the label is visible or not.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Text Style")),(0,l.kt)("td",{parentName:"tr",align:null},"Set an existing text style to this node, or create a new text style from the current properties.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Label")),(0,l.kt)("td",{parentName:"tr",align:null},"A text string that will be shown as the label on the button.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Spacing")),(0,l.kt)("td",{parentName:"tr",align:null},"The spacing between the label and the checkbox.")))),(0,l.kt)("p",null,"Similarly, it has a set of icon properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Enable Icon")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets whether the icon is visible or not.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},"Use this to set if you want to use a predefined ",(0,l.kt)("inlineCode",{parentName:"td"},"icon")," or a custom ",(0,l.kt)("inlineCode",{parentName:"td"},"image")," from the project folder.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Source")),(0,l.kt)("td",{parentName:"tr",align:null},"Where to get the icon.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Placement")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets whether the icon should be to the ",(0,l.kt)("inlineCode",{parentName:"td"},"left")," or to the ",(0,l.kt)("inlineCode",{parentName:"td"},"right")," of the ",(0,l.kt)("em",{parentName:"td"},"Label"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Size")),(0,l.kt)("td",{parentName:"tr",align:null},"The width of the icon in ",(0,l.kt)("inlineCode",{parentName:"td"},"px"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Color")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the color of the icon. Only visible if ",(0,l.kt)("em",{parentName:"td"},"Type")," is set to ",(0,l.kt)("inlineCode",{parentName:"td"},"icon"),".")))),(0,l.kt)("h3",{id:"visual"},"Visual"),(0,l.kt)("p",null,"This node supports the following ",(0,l.kt)("a",{parentName:"p",href:"../shared-props/inputs/visual-input-properties/"},"Visual Input Properties"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#margin"},"Margin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#padding"},"Padding")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#alignment"},"Alignment")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#dimensions"},"Dimensions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#-position"},"Layout, Position")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#style"},"Style")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#border-style"},"Border Style")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#corner-radius"},"Corner Radius")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#box-shadow"},"Box Shadow")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#placement"},"Placement")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#other"},"Other")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#advanced-style"},"Advanced Style"))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("p",null,"The main output of the Radio Button node is the ",(0,l.kt)("span",{className:"ndl-data"},"Checked")," output."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Checked")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean output that is true when this radio button control is checked and false if not. This is useful when using this control as a base for your own component that will represent visually that it is checked.")))),(0,l.kt)("p",null,"It also features a set of ",(0,l.kt)("span",{className:"ndl-signal"},"signals"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{parentName:"td",className:"ndl-signal"}),"Changed",(0,l.kt)("undefined",{parentName:"td"})),(0,l.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output when the value of the control is changed by user interaction.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{parentName:"td",className:"ndl-signal"}),"Focused",(0,l.kt)("undefined",{parentName:"td"})),(0,l.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output when the control is focused.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{parentName:"td",className:"ndl-signal"}),"Blurred",(0,l.kt)("undefined",{parentName:"td"})),(0,l.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output when the control is blurred, i.e. it has lost the input focus.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{parentName:"td",className:"ndl-signal"}),"Pointer Down",(0,l.kt)("undefined",{parentName:"td"})),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the mouse is pressed or finger is down on the node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{parentName:"td",className:"ndl-signal"}),"Pointer Up",(0,l.kt)("undefined",{parentName:"td"})),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the mouse is released or finger is lifted on the node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{parentName:"td",className:"ndl-signal"}),"Hover Start",(0,l.kt)("undefined",{parentName:"td"})),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the mouse enters the node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{parentName:"td",className:"ndl-signal"}),"Hover End",(0,l.kt)("undefined",{parentName:"td"})),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the mouse leaves the node.")))),(0,l.kt)("h3",{id:"states"},"States"),(0,l.kt)("p",null,"Apart from triggering ",(0,l.kt)("span",{className:"ndl-signal"},"signals")," the Checkbox node also notifies of its state through ",(0,l.kt)("span",{className:"ndl-data"},"data")," outputs:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{parentName:"td",className:"ndl-data"}),"Enabled",(0,l.kt)("undefined",{parentName:"td"})),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean output that is true if the control is in ",(0,l.kt)("strong",{parentName:"td"},"Enabled")," state and false if it is ",(0,l.kt)("strong",{parentName:"td"},"Disabled"),". This is useful when using this control as a base for your own component that will represent visually that it is enabled or disabled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{parentName:"td",className:"ndl-data"}),"Focused",(0,l.kt)("undefined",{parentName:"td"})),(0,l.kt)("td",{parentName:"tr",align:null},"This is a boolean type output that will be true if the control is in ",(0,l.kt)("strong",{parentName:"td"},"Focused")," state, and false otherwise. This is useful when using this control as a base for your own component that will represent visually that it is focused. This can be due to the user selecting the control for input or by using the keyboard.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{parentName:"td",className:"ndl-data"}),"Hover",(0,l.kt)("undefined",{parentName:"td"})),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean type output that is true when the user hovers over this control with the mouse and false otherwise. This is useful when using this control as a base for your own component that will represent visually that it is hovered.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{parentName:"td",className:"ndl-data"}),"Pressed",(0,l.kt)("undefined",{parentName:"td"})),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean output that is true when the user is currently pressing the control. This is useful when using this control as a base for your own component that will represent visually that it is pressed.")))),(0,l.kt)("p",null,"This node supports the following ",(0,l.kt)("a",{parentName:"p",href:"../shared-props/outputs/visual-output-properties/"},"Visual Output Properties"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties/#bounding-box"},"Bounding Box")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties/#mounted"},"Mounted")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties/#other"},"Other"))),(0,l.kt)("div",{className:"hidden-props-for-editor"},(0,l.kt)("p",null,'@include "../shared-props/inputs/visual-input-properties.md"\n@include "../shared-props/outputs/visual-output-properties.md"')))}k.isMDXComponent=!0},37267:function(t,e,a){e.Z=a.p+"assets/images/radio_button_node-e5e949336b431540a8f7e1fe80283d01.png"},41106:function(t,e,a){e.Z=a.p+"assets/images/radio_button_visual-c70473795016d54eeed3ab31f2b0473d.png"},58711:function(t,e,a){e.Z=a.p+"assets/images/radiobutton-ff41854fb4503b75f3a44229b3f7058b.gif"}}]);