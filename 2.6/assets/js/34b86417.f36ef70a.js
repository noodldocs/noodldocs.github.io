"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[8184],{3905:function(t,e,A){A.d(e,{Zo:function(){return p},kt:function(){return m}});var a=A(67294);function n(t,e,A){return e in t?Object.defineProperty(t,e,{value:A,enumerable:!0,configurable:!0,writable:!0}):t[e]=A,t}function r(t,e){var A=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),A.push.apply(A,a)}return A}function l(t){for(var e=1;e<arguments.length;e++){var A=null!=arguments[e]?arguments[e]:{};e%2?r(Object(A),!0).forEach((function(e){n(t,e,A[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(A)):r(Object(A)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(A,e))}))}return t}function i(t,e){if(null==t)return{};var A,a,n=function(t,e){if(null==t)return{};var A,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)A=r[a],e.indexOf(A)>=0||(n[A]=t[A]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)A=r[a],e.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(t,A)&&(n[A]=t[A])}return n}var s=a.createContext({}),o=function(t){var e=a.useContext(s),A=e;return t&&(A="function"==typeof t?t(e):l(l({},e),t)),A},p=function(t){var e=o(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var A=t.components,n=t.mdxType,r=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=o(A),m=n,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return A?a.createElement(k,l(l({ref:e},p),{},{components:A})):a.createElement(k,l({ref:e},p))}));function m(t,e){var A=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=A.length,l=new Array(r);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var o=2;o<r;o++)l[o]=A[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,A)}d.displayName="MDXCreateElement"},7413:function(t,e,A){A.r(e),A.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u}});var a=A(83117),n=A(80102),r=(A(67294),A(3905)),l=["components"],i={hide_title:!0,hide_table_of_contents:!0,title:"Checkbox"},s=void 0,o={unversionedId:"ui-controls/checkbox",id:"ui-controls/checkbox",title:"Checkbox",description:"This node places a customizable checkbox in the visual tree.",source:"@site/nodes/ui-controls/checkbox.md",sourceDirName:"ui-controls",slug:"/ui-controls/checkbox",permalink:"/2.6/nodes/ui-controls/checkbox",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Checkbox"},sidebar:"nodeSidebar",previous:{title:"Button",permalink:"/2.6/nodes/ui-controls/button"},next:{title:"Dropdown",permalink:"/2.6/nodes/ui-controls/dropdown"}},p={},u=[{value:"Inputs",id:"inputs",level:2},{value:"Visual",id:"visual",level:3},{value:"Outputs",id:"outputs",level:2},{value:"States",id:"states",level:3},{value:"Visual",id:"visual-1",level:3}],d={toc:u};function m(t){var e=t.components,i=(0,n.Z)(t,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"checkbox"},"Checkbox"),(0,r.kt)("p",null,"This node places a customizable checkbox in the visual tree."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:A(37326).Z,width:"1011",height:"360"}))),(0,r.kt)("p",null,"The checkbox will flip its state when clicked and its ",(0,r.kt)("span",{className:"ndl-data"},"Checked")," property can be connected to a data source, such as a ",(0,r.kt)("span",{className:"ndl-data"},"variable")," or ",(0,r.kt)("span",{className:"ndl-data"},"object"),"."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:A(19810).Z,width:"1011",height:"360"}))),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("p",null,"This control contains all logic such as accessibility etc. It can be styled in via it's properties, or you can use it only for the logic and create your own checkbox component in your own design system."),(0,r.kt)("div",{className:"ndl-image-with-background s"},(0,r.kt)("p",null,(0,r.kt)("img",{src:A(98957).Z,width:"132",height:"128"}))),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("p",null,"The main input of the Checkbox node is the ",(0,r.kt)("span",{className:"ndl-data"},"Checked")," input:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Checked")),(0,r.kt)("td",{parentName:"tr",align:null},'A boolean setting the checkbox in "checked" or "unchecked" state. This is the value of the checkbox and can be connected to a data source.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Background Color")),(0,r.kt)("td",{parentName:"tr",align:null},'The background color when the checkbox is "checked".')))),(0,r.kt)("p",null,"It can be enabled and disabled using the ",(0,r.kt)("span",{className:"ndl-data"},"Enabled")," input:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies if the control is ",(0,r.kt)("strong",{parentName:"td"},"Enabled")," (",(0,r.kt)("inlineCode",{parentName:"td"},"true"),") or ",(0,r.kt)("strong",{parentName:"td"},"Disabled")," (",(0,r.kt)("inlineCode",{parentName:"td"},"false"),"). A disabled control will not respond to any user interaction.")))),(0,r.kt)("p",null,"The Checkbox node has a set of label properties that can be set:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Enable Label")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets whether the label is visible or not.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Text Style")),(0,r.kt)("td",{parentName:"tr",align:null},"Set an existing text style to this node, or create a new text style from the current properties.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Label")),(0,r.kt)("td",{parentName:"tr",align:null},"A text string that will be shown as the label on the button.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Spacing")),(0,r.kt)("td",{parentName:"tr",align:null},"The spacing between the label and the checkbox.")))),(0,r.kt)("p",null,"Similarly, it has a set of icon properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Enable Icon")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets whether the icon is visible or not.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},"Use this to set if you want to use a predefined ",(0,r.kt)("inlineCode",{parentName:"td"},"icon")," or a custom ",(0,r.kt)("inlineCode",{parentName:"td"},"image")," from the project folder.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Source")),(0,r.kt)("td",{parentName:"tr",align:null},"Where to get the icon.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Placement")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets whether the icon should be to the ",(0,r.kt)("inlineCode",{parentName:"td"},"left")," or to the ",(0,r.kt)("inlineCode",{parentName:"td"},"right")," of the ",(0,r.kt)("em",{parentName:"td"},"Label"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Size")),(0,r.kt)("td",{parentName:"tr",align:null},"The width of the icon in ",(0,r.kt)("inlineCode",{parentName:"td"},"px"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Color")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the color of the icon. Only visible if ",(0,r.kt)("em",{parentName:"td"},"Type")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"icon"),".")))),(0,r.kt)("h3",{id:"visual"},"Visual"),(0,r.kt)("p",null,"This node supports the following ",(0,r.kt)("a",{parentName:"p",href:"../shared-props/inputs/visual-input-properties/"},"Visual Input Properties"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#margin"},"Margin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#alignment"},"Alignment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#dimensions"},"Dimensions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#-position"},"Layout, Position")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#style"},"Style")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#border-style"},"Border Style")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#corner-radius"},"Corner Radius")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#box-shadow"},"Box Shadow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#placement"},"Placement")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#other"},"Other")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#advanced-style"},"Advanced Style"))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("p",null,"The main output of the Checkbox node is the ",(0,r.kt)("span",{className:"ndl-data"},"Checked")," output."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Checked")),(0,r.kt)("td",{parentName:"tr",align:null},"A boolean output that is true when this checkbox control is checked and false if not. This is useful when using this control as a base for your own component that will represent visually that it is checked.")))),(0,r.kt)("p",null,"It also features a set of ",(0,r.kt)("span",{className:"ndl-signal"},"signals"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Changed")),(0,r.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output when the value of the control is changed by user interaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Focused")),(0,r.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output when the control is focused.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Blurred")),(0,r.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output when the control is blurred, i.e. it has lost the input focus.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Pointer Down")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the mouse is pressed or finger is down on the node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Pointer Up")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the mouse is released or finger is lifted on the node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Hover Start")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the mouse enters the node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Hover End")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the mouse leaves the node.")))),(0,r.kt)("h3",{id:"states"},"States"),(0,r.kt)("p",null,"Apart from triggering ",(0,r.kt)("span",{className:"ndl-signal"},"signals")," the Checkbox node also notifies of its state through ",(0,r.kt)("span",{className:"ndl-data"},"data")," outputs:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"A boolean output that is true if the control is in ",(0,r.kt)("strong",{parentName:"td"},"Enabled")," state and false if it is ",(0,r.kt)("strong",{parentName:"td"},"Disabled"),". This is useful when using this control as a base for your own component that will represent visually that it is enabled or disabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Focused")),(0,r.kt)("td",{parentName:"tr",align:null},"This is a boolean type output that will be true if the control is in ",(0,r.kt)("strong",{parentName:"td"},"Focused")," state, and false otherwise. This is useful when using this control as a base for your own component that will represent visually that it is focused. This can be due to the user selecting the control for input or by using the keyboard.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Hover")),(0,r.kt)("td",{parentName:"tr",align:null},"A boolean type output that is true when the user hovers over this control with the mouse and false otherwise. This is useful when using this control as a base for your own component that will represent visually that it is hovered.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Pressed")),(0,r.kt)("td",{parentName:"tr",align:null},"A boolean output that is true when the user is currently pressing the control. This is useful when using this control as a base for your own component that will represent visually that it is pressed.")))),(0,r.kt)("h3",{id:"visual-1"},"Visual"),(0,r.kt)("p",null,"This node supports the following ",(0,r.kt)("a",{parentName:"p",href:"../shared-props/outputs/visual-output-properties/"},"Visual Output Properties"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties/#bounding-box"},"Bounding Box")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties/#mounted"},"Mounted")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties/#other"},"Other"))),(0,r.kt)("div",{className:"hidden-props-for-editor"},(0,r.kt)("p",null,'@include "../shared-props/inputs/visual-input-properties.md"\n@include "../shared-props/outputs/visual-output-properties.md"')))}m.isMDXComponent=!0},98957:function(t,e,A){e.Z=A.p+"assets/images/checkbox-bf6297c905b2e71f21c7bf279b79748a.gif"},19810:function(t,e,A){e.Z=A.p+"assets/images/checkbox_node-9bd147aaaade6e351961ecdd09a6bae7.png"},37326:function(t,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA/MAAAFoCAYAAAAbwqsKAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABLqSURBVHgB7d1NiJz3fcDx/9rriNiJRFpIG6Jla+ghXoEP6YstsA5tsA/WpUUyaA8tWG2RUx9kgwQ9xDpIvUng1cE1S4IFzmEFskovMnhF2oMMdhvam+QeWjCsglNCG3YVKZYla6rfhBGjZ5/ZnZmdl/3tfj4waPVod555pIP9ff4vz8T09HSjAAAAAFk0HikAAABAKmIeAAAAkhHzAAAAkIyYBwAAgGTEPAAAACQj5gEAACAZMQ8AAADJiHkAAABIRswDAABAMmIeAAAAkhHzAAAAkIyYBwAAgGTEPAAAACQj5gEAACAZMQ8AAADJiHkAAABIRswDAABAMmIeAAAAkhHzAAAAkIyYBwAAgGTEPAAAACQj5gEAACAZMQ8AAADJiHkAAABIRswDAABAMmIeAAAAkhHzAAAAkIyYBwAAgGTEPAAAACQj5gEAACAZMQ8AAADJiHkAAABIRswDAABAMmIeAAAAkhHzAAAAkIyYBwAAgGTEPAAAACQj5gEAACAZMQ8AAADJiHkAAABIRswDAABAMmIeAAAAkhHzAAAAkIyYBwAAgGTEPAAAACQj5gEAACAZMQ8AAADJiHkAAABIRswDAABAMmIeAAAAkhHzAAAAkIyYBwAAgGTEPAAAACQj5gEAACAZMQ8AAADJiHkAAABIRswDAABAMmIeAAAAkhHzAAAAkIyYBwAAgGTEPAAAACQj5gEAACAZMQ8AAADJiHkAAABIRswDAABAMmIeAAAAkhHzAAAAkIyYBwAAgGTEPAAAACQj5gEAACAZMQ8AAADJiHkAAABIRswDAABAMmIeAAAAkhHzAAAAkIyYBwAAgGTEPAAAACQj5gEAACAZMQ8AAADJiHkAAABIRswDAABAMmIeAAAAkhHzAAAAkIyYBwAAgGTEPAAAACQj5gEAACAZMQ8AAADJiHkAAABIRswDAABAMmIeAAAAkhHzAAAAkIyYBwAAgGTEPAAAACQj5gEAACAZMQ8AAADJiHkAAABIRswDAABAMmIeAAAAkhHzAAAAkIyYBwAAgGTEPAAAACQj5gEAACAZMQ8AAADJiHkAAABIRswDAABAMmIeAAAAkhHzAAAAkIyYBwAAgGTEPAAAACQj5gEAACAZMQ8AAADJiHkAAABIRswDAABAMmIeAAAAkhHzAAAAkIyYBwAAgGTEPAAAACQj5gEAACAZMQ8AAADJiHkAAABIRswDAABAMmIeAAAAkhHzAAAAkIyYBwAAgGTEPAAAACQj5gEAACAZMQ8AAADJiHkAAABIRswDAABAMmIeAAAAkhHzAAAAkIyYBwAAgGTEPAAAACQj5gEAACAZMQ8AAADJiHkAAABIRswDAABAMmIeAAAAkhHzAAAAkIyYBwAAgGTEPAAAACQj5gEAACAZMQ8AAADJTBYA2KDJia+Xbz3+l2XnV/6o7Hj0283XVnD33kq5dfc/y//e/kn55e1/Lre//FkBANgMJqanpxsFAPqw49Hd5fd3/v39iP/jsh384tf/WJZuvi3qAYBxa4h5APryrcf/oux+4tUy+cjOsp3cbdwo13/1Vvns1rsFAGBMGqbZA9CzqfsRv/trr5btKJYU/N7X/67569LNtwoAwDjYAA+AnjRH5LdpyLfb/bW/be4TAAAwDmIegK7FGvmYWk+YaAb9VtnsDwDIRcwD0KX78frE97fdGvm1TE7sbG4ACAAwamIegK7ECPQ3v/rnhYfFTv6xfh4AYJTEPABd+caOPynUmSi/a+08ADBiYh6ALkyU397xvUK9XV/5wwIAMEpiHoCuPD75nUI9m+ABAKMm5gHoio3vOhPzAMCoiXkAAABIRswDAABAMmIeAAAAkhHzAAAAkIyYBwAAgGTEPAAAACQj5gEAACCZyQIApDI1NVUWFhYeOtZoNMrs7Gy5fv16yWpiYqLMz8+XmZmZB8fiuk6dOlUWFxfLVhHXGf9+u3fvfnBsK/z7ATBaYh6Abe3A3zzW/PXiD++UTNpDMEQMbgU7d+5cFblxbKuJa6xeJwD0QswDsG1FyB/868ce/D5b0AMA25c18wBsS9WQj69bo/QAAJudmAdg26mGfMvBv3qszHzXfxoBgM3P/7EAsK10Cvlw8Ud3yrX/uFcAADY7MQ/AtrFmyP/wTnnvR9bMAwA5iHkAtgUhDwBsJXazB2DLE/LDEY9We/bZZ5uPjms9Pm5lZaX5rPRr164N9ZnprXO3Hu8W541zxiu+HqS4thdeeGHVdca5Pv744wIA4yDmAdjShPxgRcwePny4+Vrv+e8Ru++880557733yqBEwL/22mvNXzu5cOFCOXv27IZvJhw8eLD5WutcgzwfAPTCNHsAtiwhP1gR8B9++GEzptcL+TAzM1POnDlTrly58mAEfSPivOfPn183rl966aXm5zx69Gjpx9TUVPM88dnXO1f7+U6cOFEAYFTEPABbkpAfrAjpiNVuIr4q4nhhYWFDQR/BHJ+hF6+//nrPQb9nz55y6dKlriK+Km52xM/283cEAL0yzR6ALUfID1ZEdKeQjrXjsW68tU69tZa9KoL+9OnTZXZ2tvRiYmKi+Z4x3b163tYr/rxTQEfQ37hxozndfz2tmw6d3qt9PX6cs+7mRNwMmJ+f7/k6AaBXYh6ALUXID1YEbl3ILy8vl1OnTpXFxcVVG85F5MYofmwa1y4iP169bhrXfv6rV682z1t9j3jf1hr3qhidj8+51pr2Xbt21YZ8XFvcCIhX9TpjGUGMxlfPuXfv3ubxbm4gAEC/TLMHYMsQ8oMVo+J109SXlpbK/v37mxvb1e0cH9F85MiRVcEd73fgwIHSr9hoLka8624GxLFjx46Vubm5VX8Wob7edPuXX3551Uh7XOehQ4ea71l3nTFS3+mccT7T7QEYJjEPwJYg5Aev0Wg0g/3kyZMPptLHsRgZX2/n9vi+c+fOrTrez1r0EGF9/PjxdR87F7vKxyh8VYyed4rrmH1QHV2Pzx/ni2BfT5yzeoMhbiDUzRIAgEER8wCkJ+SHJyI1povHCPXTTz9d9u3bVxvLdepCuJ9N8CKsI5i7/d666I9ZAZ3iuv159S1xE6Pb5QCdPt/zzz9fAGBYxDwAIxPRHa9Bv6eQH51enqW+3ih6L+fs5Vn1rU35qp555plVxyLyq9EdcX7x4sXSizhf9e8m1tQDwLCIeQBGohXd8RpU0Av5zS3WoQ9CrxvmRYxfvnx51fFOcV2d+t/pZsB6qj8T0/oFPQDDYjd7AIauGt2tryO4B/We7YT86LQe0dZ6PFzr6wjkQW0A98knn5Re1cV46zO2zxiI39d9zn7Wu9ctIYhj3ay7B4BeiXkAhmrmDx6pje6NBL2QH5+I9HjkXIw4x2vYO7bHKHs/Mdxpin815utGzmPzujNnzpRBsKM9AMMi5gEYqmv/fq8Z2HVT6/sJeiE/HjFSHc9772cDu3EY1Hp9ANisxDwAQ9cK7I0GvZAfvdgg7vTp0z1PO49p7vGKGwAAwOCJeQBGYqNBL+TH4+jRox1DPka/Ywf3mAYfr/h9/BrH4uu4ETCImO9nNsBGprfHZ4/H8Q2C9fIADIuYB2Bk+g16IT8eU1NTtTEesTs3N9d8XNywp7PHDYF+wrzTDYDq4+PqHrW3vLzcvD4A2MzEPAAj1WvQC/nxqT5/PSwtLZXZ2dmenje/UU899VTpVd3GdnWj5K1ZBO03DOp2vQeAzcZz5gEYuQjwTlPq259DL+THJ0bE64L43LlzXYf8oJ6xHrvn9zI6H5/9wIEDq453+tx1ke/58ABsdmIegLFYL+jfeHuHkB+z6lT1Xh8TN6ggjpCPoO9W6zn37eKzX758edX3xvHFxcWHjsXNgNgroFdxTjcBABgVMQ/A2KwV9DPffbT2uJAfnbqR7G43o+s3iNd6r25G51u779eJ3fXrXLx4cdWxCPPqDYG1xP4C58+fL++//3759NNPm7/Oz88XABgWMQ/AWK0V9FVCfnRixLq6ZrzT9PWqVlAP8pn0EcsLCwvrBv0bb7xRG+GxWV+nafax4V119/q4hojxbkbaW5+tXfzcRnbUB4D12AAPgLFba1O8FiG/tojPw4cP971pW93j2GJaerxnu71795YTJ040v7cujiOkYwf8Xka1u/lsEcZ79uwply5dKmfPnm1OjW+/1rXOG7EeP7OW+PN4BF97gO/atas5wn7hwoXmn1evtzX9P85btyRhvXMCwEZMTE9PNwoArGmi7P2dq2XY2je/a7f5Q75RPvqfPWVUYiT4ypUrZZBil/p9+/Y9dCxuEMSIc6cwj6BuraGPmI3R6PaR7IjfCN72QI7IffLJJ2vfr+588f2vvPJKc6S/OtLdiuvqOapOnjzZ1XPj40ZFdYS9XVxr3ECIV1xva9f7OnG+OG+duM7492u/ARDXGX//o3xKAACpNYzMA7Bp1I3QG5EfnwjM48ePN0fD66I1RqU7bUwXPxuPsOtmavx6YmQ9Pkd1DXo30/jffPPNrkI+fPTRR83zdFpz3+3mdjGS3ynkAWBQrJkHYFNpX0Mv5Mevn+fKR3wfOXJkoKPMH3zwQZmbm+v6+2P0PIK616nuEeL9jpC3zhk3BABg2MQ8AJtOBPyp738u5DeJq1evlkOHDjU3kVtvTX5Mvd+/f/+qx70NQsR8hHanXelDfL4I8hdffLHrEfmquIHx3HPPlWPHjq15rvZzxmeLn+n3nADQK2vmAejCaNbM5zXaNfPjFFPmY7p5rGtvrVWPUex4VTelG6bqGv04b6xpb61rH6TWNVd3qI9rbp0TAEasIeYB6IKYX9v2iXkAYFNomGYPAAAAyYh5AAAASEbMAwAAQDJiHgAAAJIR8wAAAJCMmAegK59/+bNCvbuNGwUAYJTEPABd+ULMd3TzzicFAGCUxDwAXWiU5S9+WqjTKL+8/S8FAGCUxDwAXfn5rR8X6v3f7Z8UAIBREvMAdCXWha988W+Fh/3i1/9UbluCAACMmJgHoEuN8l8rPyh3760UfuPuveWydPMfCgDAqIl5ALp2+8vr5frNtwqhcf/v4m2j8gDAWIh5AHry2a0f3x+NFvQxIv/ZrXcLAMA4TBYA6NH1X71Vvry3UnY/8WqZfGRn2U5ian2MyAt5AGCcJqanpxsFAPqw49FvN4P+m1/9s7IdLH/xr+W/V35gaj0AMG4NMQ/AhkXUf2PHn5bf2vG98sTkd7bMaP3n96M9wn3lzk/Lz2++29zRHwBgExDzAAAAkEzDBngAAACQjJgHAACAZMQ8AAAAJCPmAQAAIBkxDwAAAMmIeQAAAEhGzAMAAEAyYh4AAACSEfMAAACQjJgHAACAZMQ8AAAAJCPmAQAAIBkxDwAAAMmIeQAAAEhGzAMAAEAyYh4AAACSEfMAAACQjJgHAACAZMQ8AAAAJCPmAQAAIBkxDwAAAMmIeQAAAEhGzAMAAEAyYh4AAACSEfMAAACQjJgHAACAZMQ8AAAAJCPmAQAAIBkxDwAAAMmIeQAAAEhGzAMAAEAyYh4AAACSEfMAAACQjJgHAACAZMQ8AAAAJCPmAQAAIBkxDwAAAMmIeQAAAEhGzAMAAEAyYh4AAACSEfMAAACQjJgHAACAZMQ8AAAAJCPmAQAAIBkxDwAAAMmIeQAAAEhGzAMAAEAyYh4AAACSEfMAAACQjJgHAACAZMQ8AAAAJCPmAQAAIBkxDwAAAMmIeQAAAEhGzAMAAEAyYh4AAACSEfMAAACQjJgHAACAZMQ8AAAAJCPmAQAAIBkxDwAAAMmIeQAAAEhGzAMAAEAyYh4AAACSEfMAAACQjJgHAACAZMQ8AAAAJCPmAQAAIBkxDwAAAMmIeQAAAEhGzAMAAEAyYh4AAACSEfMAAACQjJgHAACAZMQ8AAAAJCPmAQAAIBkxDwAAAMmIeQAAAEhGzAMAAEAyYh4AAACSEfMAAACQjJgHAACAZMQ8AAAAJCPmAQAAIBkxDwAAAMmIeQAAAEhGzAMAAEAyYh4AAACSEfMAAACQjJgHAACAZMQ8AAAAJCPmAQAAIBkxDwAAAMmIeQAAAEhGzAMAAEAyYh4AAACSEfMAAACQjJgHAACAZMQ8AAAAJCPmAQAAIBkxDwAAAMmIeQAAAEhGzAMAAEAyYh4AAACSEfMAAACQjJgHAACAZMQ8AAAAJCPmAQAAIBkxDwAAAMmIeQAAAEhGzAMAAEAyYh4AAACSEfMAAACQjJgHAACAZMQ8AAAAJCPmAQAAIBkxDwAAAMmIeQAAAEhGzAMAAEAyYh4AAACSEfMAAACQjJgHAACAZMQ8AAAAJCPmAQAAIBkxDwAAAMmIeQAAAEhGzAMAAEAyYh4AAACSEfMAAACQjJgHAACAZMQ8AAAAJCPmAQAAIBkxDwAAAMmIeQAAAEhGzAMAAEAyYh4AAACSEfMAAACQjJgHAACAZMQ8AAAAJCPmAQAAIBkxDwAAAMmIeQAAAEhm8v6rUQAAAIAsGv8PgdMz7DRJ9FcAAAAASUVORK5CYII="}}]);