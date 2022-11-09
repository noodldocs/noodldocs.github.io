"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[8218],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return d}});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=o.createContext({}),s=function(t){var e=o.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},l=function(t){var e=s(t.components);return o.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,i=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),u=s(n),d=a,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(k,p(p({ref:e},l),{},{components:n})):o.createElement(k,p({ref:e},l))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,p=new Array(r);p[0]=u;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:a,p[1]=c;for(var s=2;s<r;s++)p[s]=n[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14847:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),p=["components"],c={hide_title:!0,hide_table_of_contents:!0,title:"Pop Component"},i=void 0,s={unversionedId:"component-stack/pop-component",id:"component-stack/pop-component",title:"Pop Component",description:'The Pop Component Stack node is used together with a Component Stack to navigate back ("pop"). It is typically used when creating app style navigation. For more information on how Component Stack navigation work, check out the Component Stack documentation.',source:"@site/nodes/component-stack/pop-component.md",sourceDirName:"component-stack",slug:"/component-stack/pop-component",permalink:"/2.8/nodes/component-stack/pop-component",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Pop Component"},sidebar:"nodeSidebar",previous:{title:"Push Component",permalink:"/2.8/nodes/component-stack/push-component"},next:{title:"Show Popup",permalink:"/2.8/nodes/popups/show-popup"}},l={},m=[{value:"Inputs",id:"inputs",level:2},{value:"Back Actions and Results",id:"back-actions-and-results",level:3}],u={toc:m};function d(t){var e=t.components,c=(0,a.Z)(t,p);return(0,r.kt)("wrapper",(0,o.Z)({},u,c,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"pop-component-stack"},"Pop Component Stack"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Pop Component Stack")," node is used together with a ",(0,r.kt)("a",{parentName:"p",href:"/nodes/component-stack/component-stack-node"},"Component Stack"),' to navigate back ("pop"). It is typically used when creating app style navigation. For more information on how ',(0,r.kt)("strong",{parentName:"p"},"Component Stack")," navigation work, check out the ",(0,r.kt)("a",{parentName:"p",href:"/nodes/component-stack/component-stack-node"},"Component Stack")," documentation."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(55357).Z,width:"1522",height:"757"}))),(0,r.kt)("p",null,"?> Note that you have to use the ",(0,r.kt)("strong",{parentName:"p"},"Pop Component Stack")," node from within a component in the ",(0,r.kt)("strong",{parentName:"p"},"Component Stack"),"."),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Navigate")),(0,r.kt)("td",{parentName:"tr",align:null},"Triggering this action will pop the topmost component from the stack. If there is a component under the popped component, it will be now be visible.")))),(0,r.kt)("h3",{id:"back-actions-and-results"},"Back Actions and Results"),(0,r.kt)("p",null,"When popping a component from the stack you can also trigger a ",(0,r.kt)("strong",{parentName:"p"},"Back Action")," and a ",(0,r.kt)("strong",{parentName:"p"},"Result"),". This can be used to communicate back to the place where the component was originally pushed using the ",(0,r.kt)("a",{parentName:"p",href:"/nodes/component-stack/push-component"},"Push To Component Stack"),' node. This could for example be used to communicate back some contents of a form, and if the user pressed "OK" or "Cancel".'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Mixed"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Back Actions, Results")),(0,r.kt)("td",{parentName:"tr",align:null},"You can add any number of ",(0,r.kt)("strong",{parentName:"td"},"Back Actions")," and ",(0,r.kt)("strong",{parentName:"td"},"Result")," inputs to the ",(0,r.kt)("strong",{parentName:"td"},"Pop Component Stack")," node. These will show up as outputs on any ",(0,r.kt)("a",{parentName:"td",href:"/nodes/component-stack/push-component"},"Push To Component Stack")," node pointing to the component with this ",(0,r.kt)("strong",{parentName:"td"},"Pop Component Stack")," node.")))),(0,r.kt)("span",{className:"hidden-props-for-editor"},"A **Back Action** signal. Triggering this will pop from the **Component Stack** and send a signal to the [Push To Component Stack](/nodes/component-stack/push-component) node used to push the component."),(0,r.kt)("span",{className:"hidden-props-for-editor"},"A **Result** input. Any data sent to this input will be forwarded to the [Push To Component Stack](/nodes/component-stack/push-component) node when the component is popped."))}d.isMDXComponent=!0},55357:function(t,e,n){e.Z=n.p+"assets/images/pop-component-stack-b892d833c88fd0dd003fff4d8190fcd6.png"}}]);