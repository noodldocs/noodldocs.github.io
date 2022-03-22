"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[8378],{3905:function(t,A,e){e.d(A,{Zo:function(){return o},kt:function(){return m}});var n=e(7294);function a(t,A,e){return A in t?Object.defineProperty(t,A,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[A]=e,t}function r(t,A){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);A&&(n=n.filter((function(A){return Object.getOwnPropertyDescriptor(t,A).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var A=1;A<arguments.length;A++){var e=null!=arguments[A]?arguments[A]:{};A%2?r(Object(e),!0).forEach((function(A){a(t,A,e[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(A){Object.defineProperty(t,A,Object.getOwnPropertyDescriptor(e,A))}))}return t}function i(t,A){if(null==t)return{};var e,n,a=function(t,A){if(null==t)return{};var e,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],A.indexOf(e)>=0||(a[e]=t[e]);return a}(t,A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],A.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var s=n.createContext({}),u=function(t){var A=n.useContext(s),e=A;return t&&(e="function"==typeof t?t(A):l(l({},A),t)),e},o=function(t){var A=u(t.components);return n.createElement(s.Provider,{value:A},t.children)},p={inlineCode:"code",wrapper:function(t){var A=t.children;return n.createElement(n.Fragment,{},A)}},d=n.forwardRef((function(t,A){var e=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),d=u(e),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return e?n.createElement(h,l(l({ref:A},o),{},{components:e})):n.createElement(h,l({ref:A},o))}));function m(t,A){var e=arguments,a=A&&A.mdxType;if("string"==typeof t||a){var r=e.length,l=new Array(r);l[0]=d;var i={};for(var s in A)hasOwnProperty.call(A,s)&&(i[s]=A[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var u=2;u<r;u++)l[u]=e[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}d.displayName="MDXCreateElement"},1264:function(t,A,e){e.r(A),e.d(A,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return o},default:function(){return d}});var n=e(7462),a=e(3366),r=(e(7294),e(3905)),l=["components"],i={},s=void 0,u={unversionedId:"ui-controls/slider",id:"ui-controls/slider",title:"slider",description:"This node places a range slider in the visual tree. It is used to select a number between a min and a max value.",source:"@site/nodes/ui-controls/slider.md",sourceDirName:"ui-controls",slug:"/ui-controls/slider",permalink:"/2.5/nodes/ui-controls/slider",tags:[],version:"current",frontMatter:{},sidebar:"nodesSidebar",previous:{title:"radio-button-group",permalink:"/2.5/nodes/ui-controls/radio-button-group"},next:{title:"text-input",permalink:"/2.5/nodes/ui-controls/text-input"}},o=[{value:"Inputs",id:"inputs",children:[{value:"Thumb and track",id:"thumb-and-track",children:[],level:3},{value:"Visual",id:"visual",children:[],level:3}],level:2},{value:"Outputs",id:"outputs",children:[{value:"States",id:"states",children:[],level:3},{value:"Visual",id:"visual-1",children:[],level:3}],level:2}],p={toc:o};function d(t){var A=t.components,i=(0,a.Z)(t,l);return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:A,mdxType:"MDXLayout"}),(0,r.kt)("p",null,""),(0,r.kt)("h1",{id:"slider"},"Slider"),(0,r.kt)("p",null,"This node places a range slider in the visual tree. It is used to select a ",(0,r.kt)("span",{class:"ndl-data"},"number")," between a ",(0,r.kt)("inlineCode",{parentName:"p"},"min")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"max")," value."),(0,r.kt)("div",{class:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:e(8432).Z,width:"1011",height:"360"}))),(0,r.kt)("p",null,"The ",(0,r.kt)("span",{class:"ndl-node"},"Slider")," node allows you to set a ",(0,r.kt)("span",{class:"ndl-data"},"Step")," value. This controls in what intervals the slider can be incremented or decremented."),(0,r.kt)("div",{class:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:e(9629).Z,width:"1011",height:"360"}))),(0,r.kt)("p",null,""),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"ndl-data"},"Value")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the numeric value of the control.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"ndl-data"},"Min")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the numeric minumum value that can be selected using this range control. Default is 0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"ndl-data"},"Max")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the numeric maximum value that can be selected using this range control. Default is 100.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"ndl-data"},"Step")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the numeric step value for this range control. Values can only be selected in the specified steps. Default is 1.")))),(0,r.kt)("p",null,"It can be enabled and disabled using the ",(0,r.kt)("span",{class:"ndl-data"},"Enabled")," input:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-data"}),"Enabled",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##input:enabled##>Specifies if the control is ",(0,r.kt)("strong",{parentName:"td"},"Enabled")," (",(0,r.kt)("inlineCode",{parentName:"td"},"true"),") or ",(0,r.kt)("strong",{parentName:"td"},"Disabled")," (",(0,r.kt)("inlineCode",{parentName:"td"},"false"),"). A disabled control will not respond to any user interaction.<##input##>")))),(0,r.kt)("h3",{id:"thumb-and-track"},"Thumb and track"),(0,r.kt)("p",null,"The Property Panel features editing popouts for the Slider Thumb and Track. These are styled separately using modified versions of the ",(0,r.kt)("a",{parentName:"p",href:"../shared-props/inputs/visual-input-properties/#dimensions"},"Dimensions"),", ",(0,r.kt)("a",{parentName:"p",href:"../shared-props/inputs/visual-input-properties/#border-style"},"Border Style"),", ",(0,r.kt)("a",{parentName:"p",href:"../shared-props/inputs/visual-input-properties/#corner-radius"},"Corner Radius")," and ",(0,r.kt)("a",{parentName:"p",href:"../shared-props/inputs/visual-input-properties/#box-shadow"},"Box Shadow")," gadgets."),(0,r.kt)("h3",{id:"visual"},"Visual"),(0,r.kt)("p",null,"This node supports the following ",(0,r.kt)("a",{parentName:"p",href:"../shared-props/inputs/visual-input-properties/"},"Visual Input Properties"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#margin"},"Margin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#padding"},"Padding")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#alignment"},"Alignment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#dimensions"},"Dimensions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#-position"},"Layout, Position")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#style"},"Style")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#placement"},"Placement")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#other"},"Other")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#advanced-style"},"Advanced Style"))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"ndl-data"},"Value")),(0,r.kt)("td",{parentName:"tr",align:null},"The current selected numeric value of the range control.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"ndl-data"},"Value Percent")),(0,r.kt)("td",{parentName:"tr",align:null},"The current selected numeric value of the range control adjusted to be between ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"100"),", so the value of the range control in ",(0,r.kt)("inlineCode",{parentName:"td"},"%"),".")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-signal"}),"Changed",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output when the value of the control is changed by user interaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-signal"}),"Focused",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:onFocus##>A signal is sent on this output when the control is focused.<##output##>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-signal"}),"Blurred",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:onBlur##>A signal is sent on this output when the control is blurred, i.e. it has lost the input focus.<##output##>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-signal"}),"Pointer Down",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:pointerDown##>Emitted when the mouse is pressed or finger is down on the node.<##output##>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-signal"}),"Pointer Up",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:pointerUp##>Emitted when the mouse is released or finger is lifted on the node.<##output##>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-signal"}),"Hover Start",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:hoverStart##>Emitted when the mouse enters the node.<##output##>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-signal"}),"Hover End",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:hoverEnd##>Emitted when the mouse leaves the node.<##output##>")))),(0,r.kt)("h3",{id:"states"},"States"),(0,r.kt)("p",null,"The Slider"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-data"}),"Enabled",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:enabled##>A boolean output that is true if the control is in ",(0,r.kt)("strong",{parentName:"td"},"Enabled")," state and false if it is ",(0,r.kt)("strong",{parentName:"td"},"Disabled"),". This is useful when using this control as a base for your own component that will represent visually that it is enabled or disabled.<##output##>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-data"}),"Focused",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:focusState##>This is a boolean type output that will be true if the control is in ",(0,r.kt)("strong",{parentName:"td"},"Focused")," state, and false otherwise. This is useful when using this control as a base for your own component that will represent visually that it is focused. This can be due to the user selecting the control for input or by using the keyboard.<##output##>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-data"}),"Hover",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:hoverState##>A boolean type output that is true when the user hovers over this control with the mouse and false otherwise. This is useful when using this control as a base for your own component that will represent visually that it is hovered.<##output##>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-data"}),"Pressed",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:pressedState##>A boolean output that is true when the user is currently pressing the control. This is useful when using this control as a base for your own component that will represent visually that it is pressed.<##output##>")))),(0,r.kt)("h3",{id:"visual-1"},"Visual"),(0,r.kt)("p",null,"This node supports the following ",(0,r.kt)("a",{parentName:"p",href:"../shared-props/outputs/visual-output-properties/"},"Visual Output Properties"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties/#bounding-box"},"Bounding Box")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties/#mounted"},"Mounted")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties/#other"},"Other"))),(0,r.kt)("div",{class:"hidden-props-for-editor"},(0,r.kt)("p",null,'@include "../shared-props/inputs/visual-input-properties.md"\n@include "../shared-props/outputs/visual-output-properties.md"')))}d.isMDXComponent=!0},9629:function(t,A,e){A.Z=e.p+"assets/images/slider_node-bd1254e7a9fffce64942f75dc51f72ad.png"},8432:function(t,A){A.Z="data:image/png;base64,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"}}]);