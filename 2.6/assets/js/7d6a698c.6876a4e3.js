"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[9614],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=i(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||s;return n?a.createElement(m,p(p({ref:t},u),{},{components:n})):a.createElement(m,p({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,p=new Array(s);p[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,p[1]=r;for(var i=2;i<s;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9941:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var a=n(7462),o=n(3366),s=(n(7294),n(3905)),p=["components"],r={},l=void 0,i={unversionedId:"popups/close-popup",id:"popups/close-popup",title:"close-popup",description:"This node is used to close a popup that have previously been shown with the Show Popup node. Sending a signal to the Close input will close the popup and remove the component instance.",source:"@site/nodes/popups/close-popup.md",sourceDirName:"popups",slug:"/popups/close-popup",permalink:"/2.5/nodes/popups/close-popup",tags:[],version:"current",frontMatter:{},sidebar:"nodesSidebar",previous:{title:"show-popup",permalink:"/2.5/nodes/popups/show-popup"},next:{title:"states",permalink:"/2.5/nodes/utilities/logic/states"}},u=[{value:"Results and close actions",id:"results-and-close-actions",children:[],level:3},{value:"Inputs",id:"inputs",children:[],level:2}],c={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,p);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,""),(0,s.kt)("h1",{id:"close-popup"},"Close Popup"),(0,s.kt)("p",null,"This node is used to close a popup that have previously been shown with the ",(0,s.kt)("span",{class:"ndl-node"},"Show Popup")," node. Sending a signal to the ",(0,s.kt)("span",{class:"ndl-signal"},"Close")," input will close the popup and remove the component instance."),(0,s.kt)("div",{class:"ndl-image-with-background l"},(0,s.kt)("p",null,(0,s.kt)("img",{src:n(4397).Z,width:"974",height:"320"}))),(0,s.kt)("p",null,"You can also pass data back to the component that triggered the popup by adding ",(0,s.kt)("span",{class:"ndl-data"},"Result")," values and ",(0,s.kt)("span",{class:"ndl-signal"},"Close Action")," signals. This is typically used for popups that propmt the user for some kind of input or action, like ",(0,s.kt)("strong",{parentName:"p"},"Name"),", ",(0,s.kt)("strong",{parentName:"p"},"Confirm")," or ",(0,s.kt)("strong",{parentName:"p"},"Cancel"),"."),(0,s.kt)("p",null,""),(0,s.kt)("h3",{id:"results-and-close-actions"},"Results and close actions"),(0,s.kt)("p",null,"Sending data back to the triggering component is done by adding ",(0,s.kt)("strong",{parentName:"p"},"Result")," values and ",(0,s.kt)("strong",{parentName:"p"},"Close Action")," signals. The result values become inputs where you can pass data back, and the actions become signal inputs that can be used to send signals back. This is typically useful for popups that take some sort of input, e.g. ",(0,s.kt)("strong",{parentName:"p"},"Name")," and where the user can perform different actions, e.g. ",(0,s.kt)("strong",{parentName:"p"},"Confirm")," or ",(0,s.kt)("strong",{parentName:"p"},"Cancel"),"."),(0,s.kt)("div",{class:"ndl-image-with-background"},(0,s.kt)("p",null,(0,s.kt)("img",{src:n(1574).Z,width:"558",height:"534"}))),(0,s.kt)("p",null,"After specifying results and close actions in the properties the corresponding inputs become available on the ",(0,s.kt)("strong",{parentName:"p"},"Close Popup")," node."),(0,s.kt)("div",{class:"ndl-image-with-background l"},(0,s.kt)("p",null,(0,s.kt)("img",{src:n(5189).Z,width:"996",height:"590"}))),(0,s.kt)("p",null,"These ",(0,s.kt)("strong",{parentName:"p"},"Result")," values and ",(0,s.kt)("strong",{parentName:"p"},"Close Actions")," will also become available as outputs on the ",(0,s.kt)("a",{parentName:"p",href:"/nodes/popups/show-popup"},"Show Popup")," nodes that have the component containing the ",(0,s.kt)("strong",{parentName:"p"},"Close Popup")," node as target."),(0,s.kt)("div",{class:"ndl-image-with-background l"},(0,s.kt)("p",null,(0,s.kt)("img",{src:n(6226).Z,width:"1056",height:"356"}))),(0,s.kt)("h2",{id:"inputs"},"Inputs"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Signal"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{class:"ndl-signal"},"Close")),(0,s.kt)("td",{parentName:"tr",align:null},"Send a signal here to close the popup. If no close actions are specified this should be used.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{class:"ndl-signal"},"Close Actions")),(0,s.kt)("td",{parentName:"tr",align:null},"All close actions specified on this node will become available as signal inputs. See above for more details.")))),(0,s.kt)("span",{class:"hidden-props-for-editor"},"When the **Popup** is closed using this custom **Close Action**, the same signal be triggered on the **Show Popup** node that was used to open the **Popup**."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Data"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{class:"ndl-data"},"Result Values")),(0,s.kt)("td",{parentName:"tr",align:null},"All result values specified on this node will become available as inputs. See above for more details.")))),(0,s.kt)("span",{class:"hidden-props-for-editor"},"When the **Popup** is closed, this result parameter will be forwarded as an output on the **Show Popup** node that was used to open the **Popup**."))}d.isMDXComponent=!0},4397:function(e,t,n){t.Z=n.p+"assets/images/close-popup-1-270ea9f6fc997a129841bdfb3447ffd6.png"},1574:function(e,t,n){t.Z=n.p+"assets/images/close-popup-2-872bd3ea6a36daa6addfef955990b62d.png"},5189:function(e,t,n){t.Z=n.p+"assets/images/close-popup-3-763e8648b3f0f5e9e66b51ee563b7018.png"},6226:function(e,t,n){t.Z=n.p+"assets/images/show-popup-3-f3353e35ff5120f9973f5215e37b882c.png"}}]);