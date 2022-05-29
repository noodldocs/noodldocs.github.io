"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[2776],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),o=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),d=o(n),c=r,h=d["".concat(i,".").concat(c)]||d[c]||s[c]||l;return n?a.createElement(h,u(u({ref:e},m),{},{components:n})):a.createElement(h,u({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,u=new Array(l);u[0]=d;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,u[1]=p;for(var o=2;o<l;o++)u[o]=n[o];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53739:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return o},toc:function(){return m},default:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),u=["components"],p={},i=void 0,o={unversionedId:"math/number-remapper",id:"math/number-remapper",title:"number-remapper",description:"This node maps a range of input numbers to a range of output numbers. It translates the relative position of the input number to its corresponding number in the output range.",source:"@site/nodes/math/number-remapper.md",sourceDirName:"math",slug:"/math/number-remapper",permalink:"/2.6/nodes/math/number-remapper",tags:[],version:"current",frontMatter:{},sidebar:"nodesSidebar",previous:{title:"color-blend",permalink:"/2.6/nodes/utilities/color-blend"},next:{title:"counter",permalink:"/2.6/nodes/math/counter"}},m=[{value:"Inputs",id:"inputs",children:[],level:2},{value:"Outputs",id:"outputs",children:[],level:2}],s={toc:m};function d(t){var e=t.components,p=(0,r.Z)(t,u);return(0,l.kt)("wrapper",(0,a.Z)({},s,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,""),(0,l.kt)("h1",{id:"number-remapper"},"Number Remapper"),(0,l.kt)("p",null,"This node maps a range of input ",(0,l.kt)("span",{class:"ndl-data"},"numbers")," to a range of output ",(0,l.kt)("span",{class:"ndl-data"},"numbers"),". It translates the relative position of the input ",(0,l.kt)("span",{class:"ndl-data"},"number")," to its corresponding ",(0,l.kt)("span",{class:"ndl-data"},"number")," in the output range."),(0,l.kt)("div",{class:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(50436).Z,width:"1011",height:"360"}))),(0,l.kt)("p",null,"If the input range is ",(0,l.kt)("inlineCode",{parentName:"p"},"0 to 360"),", the output range is ",(0,l.kt)("inlineCode",{parentName:"p"},"0 to 1")," and the input ",(0,l.kt)("span",{class:"ndl-data"},"number")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"180")," the output ",(0,l.kt)("span",{class:"ndl-data"},"number")," will be ",(0,l.kt)("inlineCode",{parentName:"p"},"0.5"),"."),(0,l.kt)("p",null,""),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Input Value")),(0,l.kt)("td",{parentName:"tr",align:null},"The number to remap.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Input Minimum")),(0,l.kt)("td",{parentName:"tr",align:null},"When the ",(0,l.kt)("em",{parentName:"td"},"Input Value")," equals this value the output of this node will exactly equal the value specified in ",(0,l.kt)("em",{parentName:"td"},"Output Minimum"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Input Maximum")),(0,l.kt)("td",{parentName:"tr",align:null},"When the ",(0,l.kt)("em",{parentName:"td"},"Input Value")," equals this value the output of this node will exactly equal the value specified in ",(0,l.kt)("em",{parentName:"td"},"Output Maximum"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Output Minimum")),(0,l.kt)("td",{parentName:"tr",align:null},"The lowest value to output.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Output Maximum")),(0,l.kt)("td",{parentName:"tr",align:null},"The highest value to output.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Clamp Output")),(0,l.kt)("td",{parentName:"tr",align:null},"Controls the behavior if the ",(0,l.kt)("em",{parentName:"td"},"Input Value")," is lower than ",(0,l.kt)("em",{parentName:"td"},"Input Minimum")," or higher than ",(0,l.kt)("em",{parentName:"td"},"Input Maximum"),".",(0,l.kt)("br",null),(0,l.kt)("br",null),"If ",(0,l.kt)("em",{parentName:"td"},"Clamp Output")," is set to ",(0,l.kt)("em",{parentName:"td"},"Yes")," then the output will not be lower than ",(0,l.kt)("em",{parentName:"td"},"Output Minimum")," or higher than ",(0,l.kt)("em",{parentName:"td"},"Output Maximum"),". If ",(0,l.kt)("em",{parentName:"td"},"Clamp Output")," is set to ",(0,l.kt)("em",{parentName:"td"},"No")," then the output will be linearly extrapolated and will be lower or higher than the specified minimum and maximum values.")))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"ndl-data"},"Remapped Value")),(0,l.kt)("td",{parentName:"tr",align:null},"The result of remapping the ",(0,l.kt)("em",{parentName:"td"},"Input Value")," with the values specified above.")))))}d.isMDXComponent=!0},50436:function(t,e,n){e.Z=n.p+"assets/images/number_remapper_node-d36824e583e2eedb67e443bcaf446f1e.png"}}]);