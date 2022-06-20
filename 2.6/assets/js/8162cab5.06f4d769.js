"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[6712],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,b=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(b,i(i({ref:t},u),{},{components:a})):n.createElement(b,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},24016:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],o={hide_title:!0,hide_table_of_contents:!0,title:"Set Variable"},s=void 0,p={unversionedId:"data/variable/set-variable",id:"data/variable/set-variable",title:"Set Variable",description:"This node sets the Value of a Variable. You provide the new value on the Value input and trigger the Do action.",source:"@site/nodes/data/variable/set-variable.md",sourceDirName:"data/variable",slug:"/data/variable/set-variable",permalink:"/2.6/nodes/data/variable/set-variable",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Set Variable"},sidebar:"nodeSidebar",previous:{title:"Create New Object",permalink:"/2.6/nodes/data/object/create-new-object"},next:{title:"Variable",permalink:"/2.6/nodes/data/variable/variable-node"}},u={},c=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],d={toc:c};function m(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h1",{id:"set-variable"},"Set Variable"),(0,l.kt)("p",null,"This node sets the ",(0,l.kt)("strong",{parentName:"p"},"Value")," of a ",(0,l.kt)("a",{parentName:"p",href:"/nodes/data/variable/variable-node"},"Variable"),". You provide the new value on the ",(0,l.kt)("strong",{parentName:"p"},"Value")," input and trigger the ",(0,l.kt)("span",{className:"ndl-signal"},"Do")," action."),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:a(56388).Z,width:"936",height:"592"}))),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Name")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the ",(0,l.kt)("strong",{parentName:"td"},"Variable")," to set. Note: All ",(0,l.kt)("strong",{parentName:"td"},"Variable")," nodes with the same name will share the same data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Value")),(0,l.kt)("td",{parentName:"tr",align:null},"The value that you want the ",(0,l.kt)("strong",{parentName:"td"},"Variable")," to get when you trigger the ",(0,l.kt)("span",{className:"ndl-signal"},"Do")," action.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Do")),(0,l.kt)("td",{parentName:"tr",align:null},"Updates the value of the ",(0,l.kt)("strong",{parentName:"td"},"Variable")," to what is currently set on the input ",(0,l.kt)("strong",{parentName:"td"},"Value"),".")))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Done")),(0,l.kt)("td",{parentName:"tr",align:null},"This event is triggered when the ",(0,l.kt)("strong",{parentName:"td"},"Variable")," have been set.")))))}m.isMDXComponent=!0},56388:function(e,t,a){t.Z=a.p+"assets/images/variable-1-893ac1bc391a8c5e5b2512437fc462a1.png"}}]);