"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[7762],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62407:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),l=["components"],i={hide_title:!0,hide_table_of_contents:!0,title:"Repeater Item"},p=void 0,c={unversionedId:"ui-controls/repeater-item",id:"ui-controls/repeater-item",title:"Repeater Item",description:"This node contains a set of useful utilities for components that have been dynamically created by a Repeater node.",source:"@site/nodes/ui-controls/repeater-item.md",sourceDirName:"ui-controls",slug:"/ui-controls/repeater-item",permalink:"/2.6/nodes/ui-controls/repeater-item",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Repeater Item"},sidebar:"nodeSidebar",previous:{title:"Repeater",permalink:"/2.6/nodes/ui-controls/repeater"},next:{title:"Object",permalink:"/2.6/nodes/data/object/object-node"}},s={},d=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],m={toc:d};function u(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h1",{id:"repeater-item"},"Repeater Item"),(0,o.kt)("p",null,"This node contains a set of useful utilities for components that have been dynamically created by a ",(0,o.kt)("span",{className:"ndl-node"},"Repeater")," node."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4904).Z,width:"964",height:"262"}))),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Remove Completed")),(0,o.kt)("td",{parentName:"tr",align:null},"Send a signal, after ",(0,o.kt)("em",{parentName:"td"},"Try Remove")," has been sent and any remove animation is completed. This will remove the component from its parent. See ",(0,o.kt)("em",{parentName:"td"},"Try Remove")," below to learn more.")))),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Item Id")),(0,o.kt)("td",{parentName:"tr",align:null},"The object ",(0,o.kt)("em",{parentName:"td"},"Id")," for this component.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Added")),(0,o.kt)("td",{parentName:"tr",align:null},"When a new object is added to an array, any connected ",(0,o.kt)("a",{parentName:"td",href:"/nodes/ui-controls/repeater"},"Repeater")," node will create a new component. This component will get the ",(0,o.kt)("em",{parentName:"td"},"Added")," signal. Useful for playing animations or changing states.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Try Remove")),(0,o.kt)("td",{parentName:"tr",align:null},"When an object is removed from am array, any connected ",(0,o.kt)("a",{parentName:"td",href:"/nodes/ui-controls/repeater"},"Repeater")," node will remove the component it created for that object. If this signal is connected the ",(0,o.kt)("em",{parentName:"td"},"Remove Completed")," input should be used to signal when animations are complete.")))))}u.isMDXComponent=!0},4904:function(e,t,n){t.Z=n.p+"assets/images/repeater-item-d8d99f3c615af9c219d7e7d4b32b5b8e.png"}}]);