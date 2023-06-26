"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[5328],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12697:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=["components"],i={hide_title:!0,hide_table_of_contents:!0,title:"Color Blend"},u=void 0,p={unversionedId:"utilities/color-blend",id:"utilities/color-blend",title:"Color Blend",description:"This node lets you blend between color values.",source:"@site/nodes/utilities/color-blend.md",sourceDirName:"utilities",slug:"/utilities/color-blend",permalink:"/2.8/nodes/utilities/color-blend",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Color Blend"},sidebar:"nodeSidebar",previous:{title:"Delay",permalink:"/2.8/nodes/utilities/delay"},next:{title:"Number Remapper",permalink:"/2.8/nodes/math/number-remapper"}},c={},s=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],d={toc:s};function m(e){var t=e.components,i=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h1",{id:"color-blend"},"Color Blend"),(0,l.kt)("p",null,"This node lets you blend between color values."),(0,l.kt)("div",{className:"ndl-image-with-background"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(32332).Z,width:"480",height:"304"}))),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Color 0..N")),(0,l.kt)("td",{parentName:"tr",align:null},"The colors to mix. These ports are numbered as ",(0,l.kt)("em",{parentName:"td"},"Color 0"),", ",(0,l.kt)("em",{parentName:"td"},"Color 1")," etc. When a color is specified a new input will be created for the next color.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Blend value")),(0,l.kt)("td",{parentName:"tr",align:null},"This specifies how the input colors will be blended. The inputs colors are interpolated linearly so a ",(0,l.kt)("em",{parentName:"td"},"Blend Value")," of ",(0,l.kt)("em",{parentName:"td"},"0")," will result in the color of the input port ",(0,l.kt)("em",{parentName:"td"},"Color 0")," and a value of ",(0,l.kt)("em",{parentName:"td"},"1")," will result in ",(0,l.kt)("em",{parentName:"td"},"Color 1"),".",(0,l.kt)("br",null),(0,l.kt)("br",null),"A value of 0.5 will be a mix of 50% of ",(0,l.kt)("em",{parentName:"td"},"Color 0")," and ",(0,l.kt)("em",{parentName:"td"},"Color 1"),", a number of 1.5 will be a mix between ",(0,l.kt)("em",{parentName:"td"},"Color 1")," and ",(0,l.kt)("em",{parentName:"td"},"Color 2"),", etc. Values below 0 or above the amount of input colors are clamped to the closest color.")))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Result")),(0,l.kt)("td",{parentName:"tr",align:null},"The resulting blended color")))))}m.isMDXComponent=!0},32332:function(e,t,n){t.Z=n.p+"assets/images/color-blend-099c7621a7ec9d857739116edf244c72.png"}}]);