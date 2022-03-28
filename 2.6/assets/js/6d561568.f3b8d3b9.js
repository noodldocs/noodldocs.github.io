"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[1753],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27884:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],p={hide_title:!0},l=void 0,u={unversionedId:"basic-elements/icon",id:"basic-elements/icon",title:"icon",description:"This node places an icon in the visual tree.",source:"@site/nodes/basic-elements/icon.md",sourceDirName:"basic-elements",slug:"/basic-elements/icon",permalink:"/2.6/nodes/basic-elements/icon",tags:[],version:"current",frontMatter:{hide_title:!0},sidebar:"nodesSidebar",previous:{title:"circle",permalink:"/2.6/nodes/basic-elements/circle"},next:{title:"button",permalink:"/2.6/nodes/ui-controls/button"}},s=[{value:"Inputs",id:"inputs",children:[{value:"Visual",id:"visual",children:[],level:3}],level:2},{value:"Outputs",id:"outputs",children:[],level:2}],c={toc:s};function d(e){var t=e.components,p=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,""),(0,i.kt)("h1",{id:"icon"},"Icon"),(0,i.kt)("p",null,"This node places an icon in the visual tree."),(0,i.kt)("div",{class:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(83542).Z,width:"1066",height:"448"}))),(0,i.kt)("p",null,"You can use an icon from the built in library, or provide your own image source.\n"),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"ndl-data"},"Type")),(0,i.kt)("td",{parentName:"tr",align:null},"Use this to set if you want to use a predefined ",(0,i.kt)("inlineCode",{parentName:"td"},"icon")," or a custom ",(0,i.kt)("inlineCode",{parentName:"td"},"image")," from the project folder.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"ndl-data"},"Icon Source")),(0,i.kt)("td",{parentName:"tr",align:null},"Where to get the icon.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"ndl-data"},"Size")),(0,i.kt)("td",{parentName:"tr",align:null},"The width of the icon in ",(0,i.kt)("inlineCode",{parentName:"td"},"px"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"ndl-data"},"Color")),(0,i.kt)("td",{parentName:"tr",align:null},"Sets the color of the icon. Only visible if ",(0,i.kt)("em",{parentName:"td"},"Type")," is set to ",(0,i.kt)("inlineCode",{parentName:"td"},"icon"),".")))),(0,i.kt)("h3",{id:"visual"},"Visual"),(0,i.kt)("p",null,"This node supports the following ",(0,i.kt)("a",{parentName:"p",href:"../shared-props/inputs/visual-input-properties"},"Visual Input Properties"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties#margin"},"Margin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties#padding"},"Padding")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties#alignment"},"Alignment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties#-position"},"Layout, Position")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties#style"},"Style")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties#placement"},"Placement")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../shared-props/inputs/visual-input-properties#advanced-style"},"Advanced Style"))),(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("p",null,"This node supports the following ",(0,i.kt)("a",{parentName:"p",href:"../shared-props/outputs/visual-output-properties"},"Visual Output Properties"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties#bounding-box"},"Bounding Box")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties#mounted"},"Mounted")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties#other"},"Other"))),(0,i.kt)("div",{class:"hidden-props-for-editor"},(0,i.kt)("p",null,'@include "../shared-props/inputs/visual-input-properties.md"\n@include "../shared-props/outputs/visual-output-properties.md"')))}d.isMDXComponent=!0},83542:function(e,t,n){t.Z=n.p+"assets/images/icon-6d5d6e496f451f6b3cd7022430826464.png"}}]);