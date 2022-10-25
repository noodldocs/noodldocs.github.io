"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[6859],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return c}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),g=p(a),c=r,m=g["".concat(s,".").concat(c)]||g[c]||d[c]||i;return a?n.createElement(m,o(o({ref:e},u),{},{components:a})):n.createElement(m,o({ref:e},u))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},45035:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],l={hide_title:!0,hide_table_of_contents:!0,title:"Navigate"},s=void 0,p={unversionedId:"navigation/navigate",id:"navigation/navigate",title:"Navigate",description:"This node is used to navigate between Page nodes set up in a Page Router.",source:"@site/nodes/navigation/navigate.md",sourceDirName:"navigation",slug:"/navigation/navigate",permalink:"/2.7/nodes/navigation/navigate",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Navigate"},sidebar:"nodeSidebar",previous:{title:"Page Router",permalink:"/2.7/nodes/navigation/page-router"},next:{title:"Page Inputs",permalink:"/2.7/nodes/navigation/page-inputs"}},u={},d=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],g={toc:d};function c(t){var e=t.components,l=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},g,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"is-hidden"},""),(0,i.kt)("h1",{id:"navigate"},"Navigate"),(0,i.kt)("p",null,"This node is used to navigate between ",(0,i.kt)("span",{className:"ndl-node"},(0,i.kt)("a",{parentName:"p",href:"/nodes/navigation/page"},"Page"))," nodes set up in a ",(0,i.kt)("span",{className:"ndl-node"},(0,i.kt)("a",{parentName:"p",href:"/nodes/navigation/page-router"},"Page Router")),"."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9872).Z,width:"880",height:"661"}))),(0,i.kt)("p",null,"You can use a ",(0,i.kt)("a",{parentName:"p",href:"/nodes/navigation/page-inputs"},"Page Inputs")," node to pass parameters to the ",(0,i.kt)("span",{className:"ndl-node"},"Page")," you are navigating to. Any ",(0,i.kt)("span",{className:"ndl-data"},"Path Parameters")," or ",(0,i.kt)("span",{className:"ndl-data"},"Query Parameters")," you add will show up as inputs to the ",(0,i.kt)("span",{className:"ndl-node"},"Navigate")," node if you select that ",(0,i.kt)("span",{className:"ndl-node"},"Page")," as the ",(0,i.kt)("span",{className:"ndl-data"},"Target Page"),"."),(0,i.kt)("p",{className:"is-hidden"},""),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Router")),(0,i.kt)("td",{parentName:"tr",align:null},"Here you select which ",(0,i.kt)("strong",{parentName:"td"},"Page Router")," that this ",(0,i.kt)("strong",{parentName:"td"},"Navigation")," node will act on. This input is only available if there are multiple ",(0,i.kt)("strong",{parentName:"td"},"Page Routers")," in the project.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Target Page")),(0,i.kt)("td",{parentName:"tr",align:null},"Here you select the ",(0,i.kt)("strong",{parentName:"td"},"Page")," to navigate to. The pages available are based on which ",(0,i.kt)("strong",{parentName:"td"},"Page Router")," this ",(0,i.kt)("strong",{parentName:"td"},"Navigation")," node is associated with.")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Signal"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-signal"},"Navigate")),(0,i.kt)("td",{parentName:"tr",align:null},"Sending a signal to this input will perform the navigation to the ",(0,i.kt)("strong",{parentName:"td"},"Target Page"),".")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Mixed"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Page Parameters")),(0,i.kt)("td",{parentName:"tr",align:null},"Any page parameters set in the ",(0,i.kt)("a",{parentName:"td",href:"/nodes/navigation/page-inputs"},"Pages Inputs")," used by the ",(0,i.kt)("strong",{parentName:"td"},"Page")," will be available as inputs on the ",(0,i.kt)("strong",{parentName:"td"},"Navigate")," node.")))),(0,i.kt)("span",{className:"hidden-props-for-editor"}," An input parameter originating from the **Page Inputs** node of the **Target Page**."),(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Signal"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-signal"},"Navigated")),(0,i.kt)("td",{parentName:"tr",align:null},"This event is triggered when a navigation as been performed.")))))}c.isMDXComponent=!0},9872:function(t,e,a){e.Z=a.p+"assets/images/navigate-page-inputs-73949322f9dc238eea186c2dc520bb7e.png"}}]);