"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[1252],{3905:function(t,e,A){A.d(e,{Zo:function(){return u},kt:function(){return m}});var n=A(7294);function a(t,e,A){return e in t?Object.defineProperty(t,e,{value:A,enumerable:!0,configurable:!0,writable:!0}):t[e]=A,t}function r(t,e){var A=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),A.push.apply(A,n)}return A}function l(t){for(var e=1;e<arguments.length;e++){var A=null!=arguments[e]?arguments[e]:{};e%2?r(Object(A),!0).forEach((function(e){a(t,e,A[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(A)):r(Object(A)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(A,e))}))}return t}function i(t,e){if(null==t)return{};var A,n,a=function(t,e){if(null==t)return{};var A,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)A=r[n],e.indexOf(A)>=0||(a[A]=t[A]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)A=r[n],e.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(t,A)&&(a[A]=t[A])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),A=e;return t&&(A="function"==typeof t?t(e):l(l({},e),t)),A},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var A=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=p(A),m=a,c=d["".concat(s,".").concat(m)]||d[m]||o[m]||r;return A?n.createElement(c,l(l({ref:e},u),{},{components:A})):n.createElement(c,l({ref:e},u))}));function m(t,e){var A=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=A.length,l=new Array(r);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var p=2;p<r;p++)l[p]=A[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,A)}d.displayName="MDXCreateElement"},7217:function(t,e,A){A.r(e),A.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=A(7462),a=A(3366),r=(A(7294),A(3905)),l=["components"],i={},s=void 0,p={unversionedId:"ui-controls/text-input",id:"ui-controls/text-input",title:"text-input",description:"This node places a text input field in the visual tree. The input can be used to capture information from a user.",source:"@site/nodes/ui-controls/text-input.md",sourceDirName:"ui-controls",slug:"/ui-controls/text-input",permalink:"/2.5/nodes/ui-controls/text-input",tags:[],version:"current",frontMatter:{},sidebar:"nodesSidebar",previous:{title:"slider",permalink:"/2.5/nodes/ui-controls/slider"},next:{title:"page-router",permalink:"/2.5/nodes/navigation/page-router"}},u=[{value:"Inputs",id:"inputs",children:[{value:"Visual",id:"visual",children:[],level:3}],level:2},{value:"Outputs",id:"outputs",children:[{value:"States",id:"states",children:[],level:3},{value:"Visual",id:"visual-1",children:[],level:3}],level:2}],o={toc:u};function d(t){var e=t.components,i=(0,a.Z)(t,l);return(0,r.kt)("wrapper",(0,n.Z)({},o,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,""),(0,r.kt)("h1",{id:"text-input"},"Text Input"),(0,r.kt)("p",null,"This node places a text input field in the visual tree. The input can be used to capture information from a user."),(0,r.kt)("div",{class:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:A(1901).Z,width:"1011",height:"360"}))),(0,r.kt)("p",null,"The captured value can easily be connected to other nodes in a project."),(0,r.kt)("div",{class:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:A(8730).Z,width:"1011",height:"366"}))),(0,r.kt)("p",null,""),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"ndl-data"},"Text")),(0,r.kt)("td",{parentName:"tr",align:null},"The text string of the Text Input node. Setting this will change the current text, unless ",(0,r.kt)("em",{parentName:"td"},"Set")," is connected, then it will be updated when ",(0,r.kt)("em",{parentName:"td"},"Set")," receives a signal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"ndl-data"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},"The type of the Text Input.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"Text"),": A single line text input (default).",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"Text Area"),": A multi line text input.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"Email"),": A single line email text input.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"Number"),": A single line number input.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"Password"),": A single line password input, will mask password by default.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"ndl-data"},"Placeholder")),(0,r.kt)("td",{parentName:"tr",align:null},"The placeholder text for when the Text Input is empty.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"ndl-data"},"Placeholder Opacity")),(0,r.kt)("td",{parentName:"tr",align:null},"The opacity of the placeholder text. ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," is completely transparent and invisible. ",(0,r.kt)("inlineCode",{parentName:"td"},"1")," is completely solid and opaque.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"ndl-signal"},"Set")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the text field value to the text in the ",(0,r.kt)("em",{parentName:"td"},"Text")," input.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"ndl-signal"},"Clear")),(0,r.kt)("td",{parentName:"tr",align:null},"Clears the text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"ndl-signal"},"Focus")),(0,r.kt)("td",{parentName:"tr",align:null},"Focuses the text field.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Note"),": Some browsers, most notably Safari, only allow focus if it originates from a user event, like a click. So using a Delay node or other method might not work.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"ndl-signal"},"Blur")),(0,r.kt)("td",{parentName:"tr",align:null},"Removes the keyboard focus.")))),(0,r.kt)("h3",{id:"visual"},"Visual"),(0,r.kt)("p",null,"This node supports the following ",(0,r.kt)("a",{parentName:"p",href:"../shared-props/inputs/visual-input-properties/"},"Visual Input Properties"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#margin"},"Margin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#padding"},"Padding")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#alignment"},"Alignment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#dimensions"},"Dimensions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#-position"},"Layout, Position")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#text-style"},"Text Style")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#style"},"Style")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#border-style"},"Border Style")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#corner-radius"},"Corner Radius")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#box-shadow"},"Box Shadow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#placement"},"Placement")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#other"},"Other")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#advanced-style"},"Advanced Style"))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"ndl-data"},"Text")),(0,r.kt)("td",{parentName:"tr",align:null},"The current text string.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"ndl-signal"},"On Enter")),(0,r.kt)("td",{parentName:"tr",align:null},"Signal triggered when Enter/Return key is pressed.")))),(0,r.kt)("p",null,"It also features the standard set of UI control ",(0,r.kt)("span",{class:"ndl-signal"},"signals"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-signal"}),"Changed",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output when the value of the control is changed by user interaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-signal"}),"Focused",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:onFocus##>A signal is sent on this output when the control is focused.<##output##>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-signal"}),"Blurred",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:onBlur##>A signal is sent on this output when the control is blurred, i.e. it has lost the input focus.<##output##>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-signal"}),"Pointer Down",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:pointerDown##>Emitted when the mouse is pressed or finger is down on the node.<##output##>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-signal"}),"Pointer Up",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:pointerUp##>Emitted when the mouse is released or finger is lifted on the node.<##output##>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-signal"}),"Hover Start",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:hoverStart##>Emitted when the mouse enters the node.<##output##>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-signal"}),"Hover End",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:hoverEnd##>Emitted when the mouse leaves the node.<##output##>")))),(0,r.kt)("h3",{id:"states"},"States"),(0,r.kt)("p",null,"Apart from triggering ",(0,r.kt)("span",{class:"ndl-signal"},"signals")," the Checkbox node also notifies of its state through ",(0,r.kt)("span",{class:"ndl-data"},"data")," outputs:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-data"}),"Enabled",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:enabled##>A boolean output that is true if the control is in ",(0,r.kt)("strong",{parentName:"td"},"Enabled")," state and false if it is ",(0,r.kt)("strong",{parentName:"td"},"Disabled"),". This is useful when using this control as a base for your own component that will represent visually that it is enabled or disabled.<##output##>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-data"}),"Focused",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:focusState##>This is a boolean type output that will be true if the control is in ",(0,r.kt)("strong",{parentName:"td"},"Focused")," state, and false otherwise. This is useful when using this control as a base for your own component that will represent visually that it is focused. This can be due to the user selecting the control for input or by using the keyboard.<##output##>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-data"}),"Hover",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:hoverState##>A boolean type output that is true when the user hovers over this control with the mouse and false otherwise. This is useful when using this control as a base for your own component that will represent visually that it is hovered.<##output##>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-data"}),"Pressed",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:pressedState##>A boolean output that is true when the user is currently pressing the control. This is useful when using this control as a base for your own component that will represent visually that it is pressed.<##output##>")))),(0,r.kt)("h3",{id:"visual-1"},"Visual"),(0,r.kt)("p",null,"This node supports the following ",(0,r.kt)("a",{parentName:"p",href:"../shared-props/outputs/visual-output-properties/"},"Visual Output Properties"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties/#bounding-box"},"Bounding Box")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties/#mounted"},"Mounted")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties/#other"},"Other"))),(0,r.kt)("div",{class:"hidden-props-for-editor"},(0,r.kt)("p",null,'@include "../shared-props/inputs/visual-input-properties.md"\n@include "../shared-props/outputs/visual-output-properties.md"')))}d.isMDXComponent=!0},8730:function(t,e,A){e.Z=A.p+"assets/images/textinput_node-4472dc90948ef741eabd7f007690a567.png"},1901:function(t,e){e.Z="data:image/png;base64,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"}}]);