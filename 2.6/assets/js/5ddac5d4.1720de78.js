"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[1335],{3905:function(t,e,A){A.d(e,{Zo:function(){return u},kt:function(){return m}});var n=A(67294);function a(t,e,A){return e in t?Object.defineProperty(t,e,{value:A,enumerable:!0,configurable:!0,writable:!0}):t[e]=A,t}function r(t,e){var A=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),A.push.apply(A,n)}return A}function o(t){for(var e=1;e<arguments.length;e++){var A=null!=arguments[e]?arguments[e]:{};e%2?r(Object(A),!0).forEach((function(e){a(t,e,A[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(A)):r(Object(A)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(A,e))}))}return t}function l(t,e){if(null==t)return{};var A,n,a=function(t,e){if(null==t)return{};var A,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)A=r[n],e.indexOf(A)>=0||(a[A]=t[A]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)A=r[n],e.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(t,A)&&(a[A]=t[A])}return a}var i=n.createContext({}),p=function(t){var e=n.useContext(i),A=e;return t&&(A="function"==typeof t?t(e):o(o({},e),t)),A},u=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var A=t.components,a=t.mdxType,r=t.originalType,i=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=p(A),m=a,h=d["".concat(i,".").concat(m)]||d[m]||s[m]||r;return A?n.createElement(h,o(o({ref:e},u),{},{components:A})):n.createElement(h,o({ref:e},u))}));function m(t,e){var A=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=A.length,o=new Array(r);o[0]=d;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var p=2;p<r;p++)o[p]=A[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,A)}d.displayName="MDXCreateElement"},39765:function(t,e,A){A.r(e),A.d(e,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=A(87462),a=A(63366),r=(A(67294),A(3905)),o=["components"],l={},i=void 0,p={unversionedId:"ui-controls/dropdown",id:"ui-controls/dropdown",title:"dropdown",description:"This node places a dropdown input field in the visual tree. The input can for example be used to capture information from a user.",source:"@site/nodes/ui-controls/dropdown.md",sourceDirName:"ui-controls",slug:"/ui-controls/dropdown",permalink:"/2.6/nodes/ui-controls/dropdown",tags:[],version:"current",frontMatter:{},sidebar:"nodesSidebar",previous:{title:"checkbox",permalink:"/2.6/nodes/ui-controls/checkbox"},next:{title:"radio-button",permalink:"/2.6/nodes/ui-controls/radio-button"}},u=[{value:"The Incoming Items Format",id:"the-incoming-items-format",children:[],level:2},{value:"Inputs",id:"inputs",children:[{value:"Visual",id:"visual",children:[],level:3}],level:2},{value:"Outputs",id:"outputs",children:[{value:"States",id:"states",children:[],level:3},{value:"Visual",id:"visual-1",children:[],level:3}],level:2}],s={toc:u};function d(t){var e=t.components,l=(0,a.Z)(t,o);return(0,r.kt)("wrapper",(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,""),(0,r.kt)("h1",{id:"dropdown"},"Dropdown"),(0,r.kt)("p",null,"This node places a dropdown input field in the visual tree. The input can for example be used to capture information from a user."),(0,r.kt)("div",{class:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:A(79166).Z,width:"1011",height:"360"}))),(0,r.kt)("p",null,"The dropdown takes an array of options as an input, which will be shown in the dropdown for the user to pick from."),(0,r.kt)("div",{class:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:A(27875).Z,width:"1011",height:"360"}))),(0,r.kt)("h2",{id:"the-incoming-items-format"},"The Incoming Items Format"),(0,r.kt)("p",null,"The incoming items should be an ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/array/array.md"},"Array")," of ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/object/object.md"},"Objects"),", for example coming from a ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/array/static-array"},"Static Array")," or ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/query-records"},"Static Array")," node."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Object")," should have two mandatory properties: ",(0,r.kt)("inlineCode",{parentName:"p"},"Label"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Value")," (note that the case matters, ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," would not work). The ",(0,r.kt)("inlineCode",{parentName:"p"},"Label")," property should contain the string to be shown in the ",(0,r.kt)("strong",{parentName:"p"},"Dropdown"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"Value")," property will be set on the output ",(0,r.kt)("strong",{parentName:"p"},"Value")," on the ",(0,r.kt)("strong",{parentName:"p"},"Dropdown"),"."),(0,r.kt)("div",{class:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:A(67890).Z,width:"1438",height:"513"}))),(0,r.kt)("p",null,"Depending on how you original data looks, it may be necessary to use the ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/array/array-map/"},"Array Map")," node to re-map values in the original data towards ",(0,r.kt)("inlineCode",{parentName:"p"},"Label")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Value"),". One useful pattern is to map the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of an ",(0,r.kt)("strong",{parentName:"p"},"Object")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Value")," property in teh ",(0,r.kt)("strong",{parentName:"p"},"Array Map")," to easily access the selected ",(0,r.kt)("strong",{parentName:"p"},"Object"),". The mapping can be achieved through ",(0,r.kt)("inlineCode",{parentName:"p"},"Value:function (object){return object.id}"),"."),(0,r.kt)("div",{class:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:A(3025).Z,width:"1642",height:"546"}))),(0,r.kt)("p",null,""),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"ndl-data"},"Items")),(0,r.kt)("td",{parentName:"tr",align:null},"This input takes an ",(0,r.kt)("strong",{parentName:"td"},"Array")," of ",(0,r.kt)("strong",{parentName:"td"},"Objects")," that will populate the ",(0,r.kt)("strong",{parentName:"td"},"Dropdown"),". You should make sure that they have the two properties ",(0,r.kt)("inlineCode",{parentName:"td"},"Label")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"Value")," set as they are used to represent the item in the ",(0,r.kt)("strong",{parentName:"td"},"Dropdown"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"ndl-data"},"Value")),(0,r.kt)("td",{parentName:"tr",align:null},"Setting this input will force the ",(0,r.kt)("strong",{parentName:"td"},"Dropdown")," to select the item with the same value set in its ",(0,r.kt)("inlineCode",{parentName:"td"},"Value")," property.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"ndl-data"},"Placeholder")),(0,r.kt)("td",{parentName:"tr",align:null},"The placeholder text for when the dropdown is empty.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"ndl-data"},"Placeholder Opacity")),(0,r.kt)("td",{parentName:"tr",align:null},"The opacity of the placeholder text. ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," is completely transparent and invisible. ",(0,r.kt)("inlineCode",{parentName:"td"},"1")," is completely solid and opaque.")))),(0,r.kt)("p",null,"User interaction can be enabled and disabled:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-data"}),"Enabled",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##input:enabled##>Specifies if the control is ",(0,r.kt)("strong",{parentName:"td"},"Enabled")," (",(0,r.kt)("inlineCode",{parentName:"td"},"true"),") or ",(0,r.kt)("strong",{parentName:"td"},"Disabled")," (",(0,r.kt)("inlineCode",{parentName:"td"},"false"),"). A disabled control will not respond to any user interaction.<##input##>")))),(0,r.kt)("h3",{id:"visual"},"Visual"),(0,r.kt)("p",null,"This node supports the following ",(0,r.kt)("a",{parentName:"p",href:"../shared-props/inputs/visual-input-properties/"},"Visual Input Properties"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#margin"},"Margin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#alignment"},"Alignment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#dimensions"},"Dimensions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#-position"},"Layout, Position")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#text-style"},"Text Style")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#style"},"Style")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#border-style"},"Border Style")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#corner-radius"},"Corner Radius")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#box-shadow"},"Box Shadow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#placement"},"Placement")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#other"},"Other")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties/#advanced-style"},"Advanced Style"))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("p",null,"The main output is the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"ndl-data"},"Value")),(0,r.kt)("td",{parentName:"tr",align:null},"This output holds the value, i.e. what is in the property ",(0,r.kt)("inlineCode",{parentName:"td"},"Value")," in the currently selected ",(0,r.kt)("strong",{parentName:"td"},"Object")," in the Dropdown.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"ndl-data"},"Changed")),(0,r.kt)("td",{parentName:"tr",align:null},"This signal signal is emitted when the selection of the ",(0,r.kt)("strong",{parentName:"td"},"Dropdown")," changes.")))),(0,r.kt)("p",null,"It also features a set of more in depth ",(0,r.kt)("span",{class:"ndl-signal"},"signals"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-signal"}),"Changed",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output when the value of the control is changed by user interaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-signal"}),"Focused",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:onFocus##>A signal is sent on this output when the control is focused.<##output##>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-signal"}),"Blurred",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:onBlur##>A signal is sent on this output when the control is blurred, i.e. it has lost the input focus.<##output##>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-signal"}),"Pointer Down",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:pointerDown##>Emitted when the mouse is pressed or finger is down on the node.<##output##>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-signal"}),"Pointer Up",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:pointerUp##>Emitted when the mouse is released or finger is lifted on the node.<##output##>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-signal"}),"Hover Start",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:hoverStart##>Emitted when the mouse enters the node.<##output##>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-signal"}),"Hover End",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:hoverEnd##>Emitted when the mouse leaves the node.<##output##>")))),(0,r.kt)("h3",{id:"states"},"States"),(0,r.kt)("p",null,"Apart from triggering ",(0,r.kt)("span",{class:"ndl-signal"},"signals")," the Dropdown node also notifies of its state through ",(0,r.kt)("span",{class:"ndl-data"},"data")," outputs:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-data"}),"Enabled",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:enabled##>A boolean output that is true if the control is in ",(0,r.kt)("strong",{parentName:"td"},"Enabled")," state and false if it is ",(0,r.kt)("strong",{parentName:"td"},"Disabled"),". This is useful when using this control as a base for your own component that will represent visually that it is enabled or disabled.<##output##>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-data"}),"Focused",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:focusState##>This is a boolean type output that will be true if the control is in ",(0,r.kt)("strong",{parentName:"td"},"Focused")," state, and false otherwise. This is useful when using this control as a base for your own component that will represent visually that it is focused. This can be due to the user selecting the control for input or by using the keyboard.<##output##>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-data"}),"Hover",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:hoverState##>A boolean type output that is true when the user hovers over this control with the mouse and false otherwise. This is useful when using this control as a base for your own component that will represent visually that it is hovered.<##output##>")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"ndl-data"}),"Pressed",(0,r.kt)("undefined",{parentName:"td"})),(0,r.kt)("td",{parentName:"tr",align:null},"<##output:pressedState##>A boolean output that is true when the user is currently pressing the control. This is useful when using this control as a base for your own component that will represent visually that it is pressed.<##output##>")))),(0,r.kt)("h3",{id:"visual-1"},"Visual"),(0,r.kt)("p",null,"This node supports the following ",(0,r.kt)("a",{parentName:"p",href:"../shared-props/outputs/visual-output-properties/"},"Visual Output Properties"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties/#bounding-box"},"Bounding Box")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties/#mounted"},"Mounted")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties/#other"},"Other"))),(0,r.kt)("div",{class:"hidden-props-for-editor"},(0,r.kt)("p",null,'@include "../shared-props/inputs/visual-input-properties.md"\n@include "../shared-props/outputs/visual-output-properties.md"')))}d.isMDXComponent=!0},67890:function(t,e,A){e.Z=A.p+"assets/images/dropdown-2-4d74487cfaf375cf87a3ee77c00b2e37.png"},3025:function(t,e,A){e.Z=A.p+"assets/images/dropdown-mapping-3e8b329fb4e5f048ca369fed3b351a8c.png"},27875:function(t,e,A){e.Z=A.p+"assets/images/dropdown_node-9ec776af30e6631b1c2ad3fb963e1bb2.png"},79166:function(t,e){e.Z="data:image/png;base64,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"}}]);