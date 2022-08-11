"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[8715],{3905:function(A,e,t){t.d(e,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function n(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function i(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,r)}return t}function s(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){n(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function a(A,e){if(null==A)return{};var t,r,n=function(A,e){if(null==A)return{};var t,r,n={},i=Object.keys(A);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(A);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var p=r.createContext({}),o=function(A){var e=r.useContext(p),t=e;return A&&(t="function"==typeof A?A(e):s(s({},e),A)),t},u=function(A){var e=o(A.components);return r.createElement(p.Provider,{value:e},A.children)},l={inlineCode:"code",wrapper:function(A){var e=A.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(A,e){var t=A.components,n=A.mdxType,i=A.originalType,p=A.parentName,u=a(A,["components","mdxType","originalType","parentName"]),g=o(t),d=n,m=g["".concat(p,".").concat(d)]||g[d]||l[d]||i;return t?r.createElement(m,s(s({ref:e},u),{},{components:t})):r.createElement(m,s({ref:e},u))}));function d(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var i=t.length,s=new Array(i);s[0]=g;var a={};for(var p in e)hasOwnProperty.call(e,p)&&(a[p]=e[p]);a.originalType=A,a.mdxType="string"==typeof A?A:n,s[1]=a;for(var o=2;o<i;o++)s[o]=t[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},53622:function(A,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return l}});var r=t(83117),n=t(80102),i=(t(67294),t(3905)),s=["components"],a={hide_title:!0,hide_table_of_contents:!0,title:"Group"},p=void 0,o={unversionedId:"basic-elements/group",id:"basic-elements/group",title:"Group",description:"This node is a styleable container. It can have other visual nodes nested inside of it.",source:"@site/nodes/basic-elements/group.md",sourceDirName:"basic-elements",slug:"/basic-elements/group",permalink:"/2.6/nodes/basic-elements/group",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Group"},sidebar:"nodeSidebar",previous:{title:"Overview",permalink:"/2.6/nodes/overview"},next:{title:"Text",permalink:"/2.6/nodes/basic-elements/text"}},u={},l=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],g={toc:l};function d(A){var e=A.components,a=(0,n.Z)(A,s);return(0,i.kt)("wrapper",(0,r.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"is-hidden"},""),(0,i.kt)("h1",{id:"group"},"Group"),(0,i.kt)("p",null,"This node is a styleable container. It can have other visual nodes nested inside of it."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:t(69720).Z,width:"1011",height:"360"}))),(0,i.kt)("p",null,"The ",(0,i.kt)("span",{className:"ndl-node"},"Group")," is the most essential node when it comes to creating layouts and arranging visual elements."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:t(67895).Z,width:"1020",height:"361"}))),(0,i.kt)("p",{className:"is-hidden"},""),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Group")," nodes are typically used to layout children by stacking (the default), but can also be used to simply provide margins and padding to a group of visual nodes. To learn more about ",(0,i.kt)("strong",{parentName:"p"},"Group")," nodes check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/user-interfaces/layout"},"Layouting guide"),"."),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("p",null,"Many of the UI nodes share the same inputs. Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/nodes/shared-props/inputs/visual-input-properties"},"Visual Input Properties")," documentation."),(0,i.kt)("p",null,"This node supports the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#margin"},"Margin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#padding"},"Padding")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#alignment"},"Alignment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#dimensions"},"Dimensions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#layout"},"Layout")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#align-and-justify-content"},"Align and justify content")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#scroll"},"Scroll")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#style"},"Style")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#border-style"},"Border Style")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#corner-radius"},"Corner Radius")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#box-shadow"},"Box Shadow")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#placement"},"Placement")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#dimension-constraints"},"Dimension Constraints")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#focus"},"Focus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#other"},"Other")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/shared-props/inputs/visual-input-properties#advanced-style"},"Advanced Style"))),(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("p",null,"Many of the UI nodes share the same outputs. Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/nodes/shared-props/outputs/visual-output-properties"},"Visual Output Properties")," documentation."),(0,i.kt)("p",null,"This node supports the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/shared-props/outputs/visual-output-properties#scrolling"},"Scrolling")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/shared-props/outputs/visual-output-properties#bounding-box"},"Bounding Box")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/shared-props/outputs/visual-output-properties#mounted"},"Mounted")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/shared-props/outputs/visual-output-properties#pointer-events"},"Pointer Events")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/shared-props/outputs/visual-output-properties#hover-events"},"Hover Events")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/shared-props/outputs/visual-output-properties#focus"},"Focus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/shared-props/outputs/visual-output-properties#other"},"Other"))),(0,i.kt)("div",{className:"hidden-props-for-editor"},(0,i.kt)("p",null,'@include "../shared-props/inputs/visual-input-properties.md"\n@include "../shared-props/outputs/visual-output-properties.md"')))}d.isMDXComponent=!0},67895:function(A,e,t){e.Z=t.p+"assets/images/group_node-31bce0ae8573eb4138193c94abc8ea83.png"},69720:function(A,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA/MAAAFoCAYAAAAbwqsKAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAoDSURBVHgB7do9biRFGIDhaq8RtlYwhgN4QhI2hzMgERAhcQmLCCIkMiLECRAJR4CUlBQTg2yxARuwEyDs/W16OcHK2kHzep5HKnWr8greqm8ai9PT0y+maTpbfk8G7KnlDAwAALZrnucB3NhmOUPfXl5efnpnCfmvl4j5bNk8GrDHxDwAALDjjpZueX+1Wk3Ter1+OLzIg5gHAPgfeJmHV+LhwRDyAAAAUHJyMAAAAIAUMQ8AAAAxYh4AAABixDwAAADEiHkAAACIEfMAAAAQI+YBAAAgRswDAABAjJgHAACAGDEPAAAAMWIeAAAAYsQ8AAAAxIh5AAAAiBHzAAAAECPmAQAAIEbMAwAAQIyYBwAAgBgxDwAAADFiHgAAAGLEPAAAAMSIeQAAAIgR8wAAABAj5gEAACBGzAMAAECMmAcAAIAYMQ8AAAAxYh4AAABixDwAAADEiHkAAACIEfMAAAAQI+YBAAAgRswDAABAjJgHAACAGDEPAAAAMWIeAAAAYsQ8AAAAxIh5AAAAiBHzAAAAECPmAQAAIEbMAwAAQIyYBwAAgBgxDwAAADFiHgAAAGLEPAAAAMSIeQAAAIg5HMBOOzq8N6ZxPAAAburRs/PxfL4awO0h5mHHrV7/aNyZ3h4AADczjz//+XL5iHm4TYzZAwAAQIyYBwAAgBgxDwAAADFiHgAAAGLEPAAAAMSIeQAAAIgR8wAAABAj5gEAACBGzAMAAECMmAcAAIAYMQ8AAAAxYh4AAABixDwAAADEiHkAAACIEfMAAAAQI+YBAAAgRswDAABAjJgHAACAGDEPAAAAMWIeAAAAYg4HsJcO3pwGsJvmx/OYr8dW3D1+sqzHA9hND/66OwBehpiHPfXGBwfjtVNBD7vo+nwef//wbGzDe/f+GGef/DyA3TPPY3x49vEAeBnG7AEAACBGzAMAAECMmAcAAIAYMQ8AAAAxYh4AAABixDwAAADEiHkAAACIEfMAAAAQI+YBAAAgRswDAABAjJgHAACAGDEPAAAAMWIeAAAAYsQ8AAAAxIh5AAAAiBHzAAAAECPmAQAAIEbMAwAAQIyYBwAAgBgxDwAAADFiHgAAAGLEPAAAAMSIeQAAAIgR8wAAABAj5gEAACBGzAMAAECMmAcAAIAYMQ8AAAAxYh4AAABixDwAAADEiHkAAACIEfMAAAAQI+YBAAAgRswDAABAjJgHAACAGDEPAAAAMWIeAAAAYsQ8AAAAxIh5AAAAiBHzAAAAECPmAQAAIEbMAwAAQIyYBwAAgBgxDwAAADFiHgAAAGLEPAAAAMSIeQAAAIgR8wAAABAj5gEAACBGzAMAAECMmAcAAIAYMQ8AAAAxYh4AAABixDwAAADEiHkAAACIEfMAAAAQI+YBAAAgRswDAABAjJgHAACAGDEPAAAAMWIeAAAAYsQ8AAAAxIh5AAAAiBHzAAAAECPmAQAAIEbMAwAAQIyYBwAAgBgxDwAAADFiHgAAAGLEPAAAAMSIeQAAAIgR8wAAABAj5gEAACBGzAMAAECMmAcAAIAYMQ8AAAAxYh4AAABixDwAAADEiHkAAACIEfMAAAAQI+YBAAAgRswDAABAjJgHAACAGDEPAAAAMWIeAAAAYsQ8AAAAxIh5AAAAiBHzAAAAECPmAQAAIEbMAwAAQIyYBwAAgBgxDwAAADFiHgAAAGLEPAAAAMSIeQAAAIgR8wAAABAj5gEAACBGzAMAAECMmAcAAIAYMQ8AAAAxYh4AAABixDwAAADEiHkAAACIEfMAAAAQI+YBAAAgRswDAABAjJgHAACAGDEPAAAAMWIeAAAAYsQ8AAAAxIh5AAAAiBHzAAAAECPmAQAAIEbMAwAAQIyYBwAAgBgxDwAAADFiHgAAAGLEPAAAAMSIeQAAAIgR8wAAABAj5gEAACBGzAMAAECMmAcAAIAYMQ8AAAAxYh4AAABixDwAAADEiHkAAACIEfMAAAAQI+YBAAAgRswDAABAjJgHAACAGDEPAAAAMWIeAAAAYsQ8AAAAxIh5AAAAiBHzAAAAECPmAQAAIEbMAwAAQIyYBwAAgBgxDwAAADFiHgAAAGLEPAAAAMSIeQAAAIgR8wAAABAj5gEAACBGzAMAAECMmAcAAIAYMQ8AAAAxYh4AAABixDwAAADEiHkAAACIEfMAAAAQI+YBAAAgRswDAABAjJgHAACAGDEPAAAAMWIeAAAAYsQ8AAAAxIh5AAAAiBHzAAAAECPmAQAAIEbMAwAAQIyYBwAAgBgxDwAAADFiHgAAAGLEPAAAAMSIeQAAAIgR8wAAABAj5gEAACBGzAMAAECMmAcAAIAYMQ8AAAAxYh4AAABixDwAAADEiHkAAACIEfMAAAAQI+YBAAAgRswDAABAjJgHAACAGDEPAAAAMWIeAAAAYsQ8AAAAxIh5AAAAiBHzAAAAECPmAQAAIEbMAwAAQIyYBwAAgBgxDwAAADFiHgAAAGLEPAAAAMSIeQAAAIgR8wAAABAj5gEAACBGzAMAAECMmAcAAIAYMQ8AAAAxYh4AAABixDwAAADEiHkAAACIEfMAAAAQI+YBAAAgRswDAABAjJgHAACAGDEPAAAAMWIeAAAAYsQ8AAAAxIh5AAAAiBHzAAAAECPmAQAAIEbMAwAAQIyYBwAAgBgxDwAAADFiHgAAAGLEPAAAAMSIeQAAAIgR8wAAABAj5gEAACBGzAMAAECMmAcAAIAYMQ8AAAAxhwPYS9fnz8eTy2kAu+fpg3lsy+/3T8b3P747AIA2MQ976tGvL2Jhe8EA7Kbf7r/13wIA2ozZAwAAQIyYBwAAgBgxDwAAADFiHgAAAGLEPAAAAMSIeQAAAIgR8wAAABAj5gEAACBGzAMAAECMmAcAAIAYMQ8AAAAxYh4AAABixDwAAADEiHkAAACIEfMAAAAQI+YBAAAgRswDAABAjJgHAACAGDEPAAAAMWIeAAAAYg4HsNOunv6y3LodDwCAm5nHPF8N4HaZ1uv1PIAxTdMAAGC75ll+wCswG7MHAACAGDEPAAAAMWIeAAAAYsQ8AAAAxIh5AAAAiBHzAAAAECPmAQAAIEbMAwAAQIyYBwAAgBgxDwAAADFiHgAAAGLEPAAAAMSIeQAAAIgR8wAAABAj5gEAACBGzAMAAECMmAcAAIAYMQ8AAAAxYh4AAABixDwAAADEiHkAAACIEfMAAAAQI+YBAAAgRswDAABAjJgHAACAGDEPAAAAMWIeAAAAYsQ8AAAAxIh5AAAAiBHzAAAAECPmAQAAIEbMAwAAQIyYBwAAgBgxDwAAADFiHgAAAGLEPAAAAMSIeQAAAIgR8wAAABAj5gEAACBGzAMAAEDMi5jfDAAAAKBiczBN0zcDAAAAKJgX393ZbDY/rVarkyXq31k2jwbsqeUMDAAAgB22Wbrlq4uLi8//BZDYZQSR8go9AAAAAElFTkSuQmCC"}}]);