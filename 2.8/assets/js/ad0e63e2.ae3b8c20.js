"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[5890],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),g=s(a),c=r,h=g["".concat(l,".").concat(c)]||g[c]||u[c]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},66009:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=["components"],p={hide_title:!0,hide_table_of_contents:!0,title:"Navigate To Path"},l=void 0,s={unversionedId:"navigation/navigate-to-path",id:"navigation/navigate-to-path",title:"Navigate To Path",description:"This node lets you navigate to a specific Page node in a Page Router.",source:"@site/nodes/navigation/navigate-to-path.md",sourceDirName:"navigation",slug:"/navigation/navigate-to-path",permalink:"/2.8/nodes/navigation/navigate-to-path",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Navigate To Path"},sidebar:"nodeSidebar",previous:{title:"External Link",permalink:"/2.8/nodes/navigation/external-link"},next:{title:"Page",permalink:"/2.8/nodes/navigation/page"}},d={},u=[{value:"Usage",id:"usage",level:2},{value:"Inputs",id:"inputs",level:2}],g={toc:u};function c(e){var t=e.components,p=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},g,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h1",{id:"navigate-to-path"},"Navigate To Path"),(0,o.kt)("p",null,"This node lets you navigate to a specific ",(0,o.kt)("span",{className:"ndl-node"},(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/page"},"Page"))," node in a ",(0,o.kt)("span",{className:"ndl-node"},(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/page-router"},"Page Router")),"."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(29088).Z,width:"826",height:"502"}))),(0,o.kt)("p",null,"In most cases you will want to use the ",(0,o.kt)("span",{className:"ndl-node"},(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/navigate"},"Navigate"))," or ",(0,o.kt)("span",{className:"ndl-node"},(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/external-link"},"External Link"))," nodes for your navigation. The ",(0,o.kt)("span",{className:"ndl-node"},"Navigate To Path")," node is a low level implementation suitable for more advanced and specific use cases."),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"You don't specify which ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," that should perform the navigation, it will be implicitly resolved using the provided path. For example, if you have a ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," with ",(0,o.kt)("strong",{parentName:"p"},"URL path")," ",(0,o.kt)("inlineCode",{parentName:"p"},"router1"),", with a ",(0,o.kt)("strong",{parentName:"p"},"Page"),"with the ",(0,o.kt)("strong",{parentName:"p"},"URL path")," ",(0,o.kt)("inlineCode",{parentName:"p"},"page1"),", which in turn contains an unnamed ",(0,o.kt)("strong",{parentName:"p"},"Page")," with the ",(0,o.kt)("strong",{parentName:"p"},"URL path")," ",(0,o.kt)("inlineCode",{parentName:"p"},"pageA"),", providing the ",(0,o.kt)("strong",{parentName:"p"},"Path")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/router1/page1/pageA/")," will force the two ",(0,o.kt)("strong",{parentName:"p"},"Page Routers")," to navigate to the respective pages."),(0,o.kt)("p",null,"In a way, ",(0,o.kt)("strong",{parentName:"p"},"Navigate To Path")," is very much like writing a URL directly into the browser address bar. However the node is only used to navigate between ",(0,o.kt)("strong",{parentName:"p"},"Pages")," in the Noodl project. If you want to navigate to an external URL you should instead use the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/external-link"},"External Link")," node."),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Path")),(0,o.kt)("td",{parentName:"tr",align:null},"Use this property to set the path to navigate to. Note that the ",(0,o.kt)("strong",{parentName:"td"},"Path")," should not include the domain but only the route within the Noodl project. The ",(0,o.kt)("strong",{parentName:"td"},"Path")," may include a ",(0,o.kt)("strong",{parentName:"td"},"Path Parameter")," as the final part, that will be forwarded to the receiving ",(0,o.kt)("strong",{parentName:"td"},"Page"),". You can also use ",(0,o.kt)("inlineCode",{parentName:"td"},"{}")," to make part of the ",(0,o.kt)("strong",{parentName:"td"},"Path")," dynamic and expose the part as an input. For example the path ",(0,o.kt)("inlineCode",{parentName:"td"},"/{a}/{b}/")," will expose two new inputs ",(0,o.kt)("em",{parentName:"td"},"a")," and ",(0,o.kt)("em",{parentName:"td"},"b"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Query Parameters")),(0,o.kt)("td",{parentName:"tr",align:null},"You can add any number of ",(0,o.kt)("strong",{parentName:"td"},"Query Parameters")," that will be forwarded to the receiving ",(0,o.kt)("a",{parentName:"td",href:"/nodes/navigation/page/"},"Page")," through their ",(0,o.kt)("a",{parentName:"td",href:"/nodes/navigation/page-inputs/"},"Page")," node.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Navigate")),(0,o.kt)("td",{parentName:"tr",align:null},"Sending a signal to this input will perform the navigation according to the provided ",(0,o.kt)("strong",{parentName:"td"},"Path"),".")))),(0,o.kt)("span",{className:"hidden-props-for-editor"},"A **Query Parameter** that will be forwarded to the receiving **Page** node through their **Page Inputs** node."),(0,o.kt)("span",{className:"hidden-props-for-editor"},"A **Path Parameter** that will be part of the **Path**."))}c.isMDXComponent=!0},29088:function(e,t,a){t.Z=a.p+"assets/images/navigate-to-path-bfb639bae6391d5f5da94dfcb143468a.png"}}]);