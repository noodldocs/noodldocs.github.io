"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[5890],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),s=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),g=s(a),c=r,h=g["".concat(l,".").concat(c)]||g[c]||u[c]||o;return a?n.createElement(h,i(i({ref:e},d),{},{components:a})):n.createElement(h,i({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=g;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3535:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return g}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],p={},l=void 0,s={unversionedId:"navigation/navigate-to-path",id:"navigation/navigate-to-path",title:"navigate-to-path",description:"This node lets you navigate to a specific Page node in a Page Router.",source:"@site/nodes/navigation/navigate-to-path.md",sourceDirName:"navigation",slug:"/navigation/navigate-to-path",permalink:"/2.6/nodes/navigation/navigate-to-path",tags:[],version:"current",frontMatter:{},sidebar:"nodesSidebar",previous:{title:"external-link",permalink:"/2.6/nodes/navigation/external-link"},next:{title:"page",permalink:"/2.6/nodes/navigation/page"}},d=[{value:"Usage",id:"usage",children:[],level:2},{value:"Inputs",id:"inputs",children:[],level:2}],u={toc:d};function g(t){var e=t.components,p=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,p,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,""),(0,o.kt)("h1",{id:"navigate-to-path"},"Navigate To Path"),(0,o.kt)("p",null,"This node lets you navigate to a specific ",(0,o.kt)("span",{class:"ndl-node"},(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/page"},"Page"))," node in a ",(0,o.kt)("span",{class:"ndl-node"},(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/page-router"},"Page Router")),"."),(0,o.kt)("div",{class:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(31834).Z,width:"826",height:"502"}))),(0,o.kt)("p",null,"In most cases you will want to use the ",(0,o.kt)("span",{class:"ndl-node"},(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/navigate"},"Navigate"))," or ",(0,o.kt)("span",{class:"ndl-node"},(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/external-link"},"External Link"))," nodes for your navigation. The ",(0,o.kt)("span",{class:"ndl-node"},"Navigate To Path")," node is a low level implementation suitable for more advanced and specific use cases."),(0,o.kt)("p",null,""),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"You don't specify which ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," that should perform the navigation, it will be implicitly resolved using the provided path. For example, if you have a ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," with ",(0,o.kt)("strong",{parentName:"p"},"URL path")," ",(0,o.kt)("inlineCode",{parentName:"p"},"router1"),", with a ",(0,o.kt)("strong",{parentName:"p"},"Page"),"with the ",(0,o.kt)("strong",{parentName:"p"},"URL path")," ",(0,o.kt)("inlineCode",{parentName:"p"},"page1"),", which in turn contains an unnamed ",(0,o.kt)("strong",{parentName:"p"},"Page")," with the ",(0,o.kt)("strong",{parentName:"p"},"URL path")," ",(0,o.kt)("inlineCode",{parentName:"p"},"pageA"),", providing the ",(0,o.kt)("strong",{parentName:"p"},"Path")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/router1/page1/pageA/")," will force the two ",(0,o.kt)("strong",{parentName:"p"},"Page Routers")," to navigate to the respective pages."),(0,o.kt)("p",null,"In a way, ",(0,o.kt)("strong",{parentName:"p"},"Navigate To Path")," is very much like writing a URL directly into the browser address bar. However the node is only used to navigate between ",(0,o.kt)("strong",{parentName:"p"},"Pages")," in the Noodl project. If you want to navigate to an external URL you should instead use the ",(0,o.kt)("a",{parentName:"p",href:"nodes/navigation/external-link"},"External Link")," node."),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{class:"ndl-data"},"Path")),(0,o.kt)("td",{parentName:"tr",align:null},"Use this property to set the path to navigate to. Note that the ",(0,o.kt)("strong",{parentName:"td"},"Path")," should not include the domain but only the route within the Noodl project. The ",(0,o.kt)("strong",{parentName:"td"},"Path")," may include a ",(0,o.kt)("strong",{parentName:"td"},"Path Parameter")," as the final part, that will be forwarded to the receiving ",(0,o.kt)("strong",{parentName:"td"},"Page"),". You can also use ",(0,o.kt)("inlineCode",{parentName:"td"},"{}")," to make part of the ",(0,o.kt)("strong",{parentName:"td"},"Path")," dynamic and expose the part as an input. For example the path ",(0,o.kt)("inlineCode",{parentName:"td"},"/{a}/{b}/")," will expose two new inputs ",(0,o.kt)("em",{parentName:"td"},"a")," and ",(0,o.kt)("em",{parentName:"td"},"b"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{class:"ndl-data"},"Query Parameters")),(0,o.kt)("td",{parentName:"tr",align:null},"You can add any number of ",(0,o.kt)("strong",{parentName:"td"},"Query Parameters")," that will be forwarded to the receiving ",(0,o.kt)("a",{parentName:"td",href:"/nodes/navigation/page/"},"Page")," through their ",(0,o.kt)("a",{parentName:"td",href:"/nodes/navigation/page-inputs/"},"Page")," node.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{class:"ndl-signal"},"Navigate")),(0,o.kt)("td",{parentName:"tr",align:null},"Sending a signal to this input will perform the navigation according to the provided ",(0,o.kt)("strong",{parentName:"td"},"Path"),".")))),(0,o.kt)("span",{class:"hidden-props-for-editor"},"A **Query Parameter** that will be forwarded to the receiving **Page** node through their **Page Inputs** node."),(0,o.kt)("span",{class:"hidden-props-for-editor"},"A **Path Parameter** that will be part of the **Path**."))}g.isMDXComponent=!0},31834:function(t,e,a){e.Z=a.p+"assets/images/navigate-to-path-bfb639bae6391d5f5da94dfcb143468a.png"}}]);