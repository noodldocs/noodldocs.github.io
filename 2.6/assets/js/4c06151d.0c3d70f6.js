"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[5328],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=l,b=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},68133:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),o=["components"],i={},u=void 0,p={unversionedId:"utilities/color-blend",id:"utilities/color-blend",title:"color-blend",description:"This node lets you blend between color values.",source:"@site/nodes/utilities/color-blend.md",sourceDirName:"utilities",slug:"/utilities/color-blend",permalink:"/2.6/nodes/utilities/color-blend",tags:[],version:"current",frontMatter:{},sidebar:"nodesSidebar",previous:{title:"delay",permalink:"/2.6/nodes/utilities/delay"},next:{title:"number-remapper",permalink:"/2.6/nodes/math/number-remapper"}},c=[{value:"Inputs",id:"inputs",children:[],level:2},{value:"Outputs",id:"outputs",children:[],level:2}],d={toc:c};function s(e){var t=e.components,i=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,""),(0,a.kt)("h1",{id:"color-blend"},"Color Blend"),(0,a.kt)("p",null,"This node lets you blend between color values."),(0,a.kt)("div",{class:"ndl-image-with-background"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(65057).Z,width:"480",height:"304"}))),(0,a.kt)("p",null,""),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Data"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{class:"ndl-data"},"Color 0..N")),(0,a.kt)("td",{parentName:"tr",align:null},"The colors to mix. These ports are numbered as ",(0,a.kt)("em",{parentName:"td"},"Color 0"),", ",(0,a.kt)("em",{parentName:"td"},"Color 1")," etc. When a color is specified a new input will be created for the next color.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{class:"ndl-data"},"Blend value")),(0,a.kt)("td",{parentName:"tr",align:null},"This specifies how the input colors will be blended. The inputs colors are interpolated linearly so a ",(0,a.kt)("em",{parentName:"td"},"Blend Value")," of ",(0,a.kt)("em",{parentName:"td"},"0")," will result in the color of the input port ",(0,a.kt)("em",{parentName:"td"},"Color 0")," and a value of ",(0,a.kt)("em",{parentName:"td"},"1")," will result in ",(0,a.kt)("em",{parentName:"td"},"Color 1"),".",(0,a.kt)("br",null),(0,a.kt)("br",null),"A value of 0.5 will be a mix of 50% of ",(0,a.kt)("em",{parentName:"td"},"Color 0")," and ",(0,a.kt)("em",{parentName:"td"},"Color 1"),", a number of 1.5 will be a mix between ",(0,a.kt)("em",{parentName:"td"},"Color 1")," and ",(0,a.kt)("em",{parentName:"td"},"Color 2"),", etc. Values below 0 or above the amount of input colors are clamped to the closest color.")))),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Data"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{class:"ndl-data"},"Result")),(0,a.kt)("td",{parentName:"tr",align:null},"The resulting blended color")))))}s.isMDXComponent=!0},65057:function(e,t,n){t.Z=n.p+"assets/images/color-blend-099c7621a7ec9d857739116edf244c72.png"}}]);