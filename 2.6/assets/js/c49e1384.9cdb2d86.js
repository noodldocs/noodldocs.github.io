"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[1807],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8558:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},p=void 0,u={unversionedId:"navigation/external-link",id:"navigation/external-link",title:"external-link",description:"This node is used to trigger a navigation to a page outside of your app.",source:"@site/nodes/navigation/external-link.md",sourceDirName:"navigation",slug:"/navigation/external-link",permalink:"/2.5/nodes/navigation/external-link",tags:[],version:"current",frontMatter:{},sidebar:"nodesSidebar",previous:{title:"page-inputs",permalink:"/2.5/nodes/navigation/page-inputs"},next:{title:"navigate-to-path",permalink:"/2.5/nodes/navigation/navigate-to-path"}},s=[{value:"Inputs",id:"inputs",children:[],level:2}],c={toc:s};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,""),(0,i.kt)("h1",{id:"external-link"},"External Link"),(0,i.kt)("p",null,"This node is used to trigger a navigation to a page outside of your app."),(0,i.kt)("p",null,"It also supports common URL schemes, like ",(0,i.kt)("inlineCode",{parentName:"p"},"mailto:")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tel:"),"."),(0,i.kt)("div",{class:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8689).Z,width:"1370",height:"682"}))),(0,i.kt)("p",null,"Note that ",(0,i.kt)("strong",{parentName:"p"},"External Link")," does not work in the Noodl Viewer. You need to run the app in a browser for it to work."),(0,i.kt)("p",null,""),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"ndl-data"},"Link")),(0,i.kt)("td",{parentName:"tr",align:null},"The URL that should be opened when the ",(0,i.kt)("strong",{parentName:"td"},"Do")," signal is triggered. The URL should include the full scheme, e.g. ",(0,i.kt)("inlineCode",{parentName:"td"},"http://"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"mailto:"),", etc. ")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"ndl-data"},"Open in New Tab")),(0,i.kt)("td",{parentName:"tr",align:null},"If this property is set to ",(0,i.kt)("span",{class:"ndl-data"},"true")," the link will be opened in a new browser tab. Otherwise it will open (and replace) the current Noodl app in the browser.")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Signal"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"ndl-signal"},"Do")),(0,i.kt)("td",{parentName:"tr",align:null},"Recieving a signal to this input will navigate to the external link.")))))}d.isMDXComponent=!0},8689:function(e,t,n){t.Z=n.p+"assets/images/external-link-965e3e6523a9c16a764d4d4c0b1369f9.png"}}]);