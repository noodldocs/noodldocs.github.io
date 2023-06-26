"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[1807],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39850:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={hide_title:!0,hide_table_of_contents:!0,title:"External Link"},p=void 0,s={unversionedId:"navigation/external-link",id:"navigation/external-link",title:"External Link",description:"This node is used to trigger a navigation to a page outside of your app.",source:"@site/nodes/navigation/external-link.md",sourceDirName:"navigation",slug:"/navigation/external-link",permalink:"/2.8/nodes/navigation/external-link",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"External Link"},sidebar:"nodeSidebar",previous:{title:"Page Inputs",permalink:"/2.8/nodes/navigation/page-inputs"},next:{title:"Navigate To Path",permalink:"/2.8/nodes/navigation/navigate-to-path"}},u={},c=[{value:"Inputs",id:"inputs",level:2}],d={toc:c};function m(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"is-hidden"},""),(0,i.kt)("h1",{id:"external-link"},"External Link"),(0,i.kt)("p",null,"This node is used to trigger a navigation to a page outside of your app."),(0,i.kt)("p",null,"It also supports common URL schemes, like ",(0,i.kt)("inlineCode",{parentName:"p"},"mailto:")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tel:"),"."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(77754).Z,width:"1370",height:"682"}))),(0,i.kt)("p",null,"Note that ",(0,i.kt)("strong",{parentName:"p"},"External Link")," does not work in the Noodl Viewer. You need to run the app in a browser for it to work."),(0,i.kt)("p",{className:"is-hidden"},""),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Link")),(0,i.kt)("td",{parentName:"tr",align:null},"The URL that should be opened when the ",(0,i.kt)("strong",{parentName:"td"},"Do")," signal is triggered. The URL should include the full scheme, e.g. ",(0,i.kt)("inlineCode",{parentName:"td"},"http://"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"mailto:"),", etc. ")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Open in New Tab")),(0,i.kt)("td",{parentName:"tr",align:null},"If this property is set to ",(0,i.kt)("span",{className:"ndl-data"},"true")," the link will be opened in a new browser tab. Otherwise it will open (and replace) the current Noodl app in the browser.")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Signal"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-signal"},"Do")),(0,i.kt)("td",{parentName:"tr",align:null},"Recieving a signal to this input will navigate to the external link.")))))}m.isMDXComponent=!0},77754:function(e,t,n){t.Z=n.p+"assets/images/external-link-965e3e6523a9c16a764d4d4c0b1369f9.png"}}]);