"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[6356],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(n),g=r,d=m["".concat(s,".").concat(g)]||m[g]||c[g]||o;return n?a.createElement(d,i(i({ref:t},l),{},{components:n})):a.createElement(d,i({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63489:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],p={hide_title:!0,hide_table_of_contents:!0,title:"Page Inputs"},s=void 0,u={unversionedId:"navigation/page-inputs",id:"navigation/page-inputs",title:"Page Inputs",description:"This node is used to pass parameters in the URL when navigating between pages in a Page Router.",source:"@site/nodes/navigation/page-inputs.md",sourceDirName:"navigation",slug:"/navigation/page-inputs",permalink:"/2.8/nodes/navigation/page-inputs",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Page Inputs"},sidebar:"nodeSidebar",previous:{title:"Navigate",permalink:"/2.8/nodes/navigation/navigate"},next:{title:"External Link",permalink:"/2.8/nodes/navigation/external-link"}},l={},c=[],m={toc:c};function g(e){var t=e.components,p=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h1",{id:"page-inputs"},"Page Inputs"),(0,o.kt)("p",null,"This node is used to pass parameters in the URL when navigating between pages in a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/page-router"},"Page Router"),"."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6247).Z,width:"835",height:"502"}))),(0,o.kt)("p",null,"One common use for this is when you want certain input parameters to be available in sharable links."),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h2",null,"Encoding Parameters in the URL"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/page-inputs"},"Page Inputs")," node is used to send parameters between Pages by encoding them in the URL. This is useful for example if you want certain input parameters to be available at a page, no matter the state of the app. The user may for example press ",(0,o.kt)("strong",{parentName:"p"},"Refresh")," in the browser. Since the parameters are encoded in the URL they will still be available in the ",(0,o.kt)("strong",{parentName:"p"},"Page")," through a ",(0,o.kt)("strong",{parentName:"p"},"Page Inputs")," node.\nAnother case for encoding parameters in the URL is for users to be able to share a link, with a full route to a specific place in your app, with specific parameters set."),(0,o.kt)("p",null,"There are two types of parameters ",(0,o.kt)("strong",{parentName:"p"},"Path Parameters")," and ",(0,o.kt)("strong",{parentName:"p"},"Query Parameters"),". There can only be one ",(0,o.kt)("strong",{parentName:"p"},"Path Parameter")," while you can have any number of ",(0,o.kt)("strong",{parentName:"p"},"Query Parameters"),"."),(0,o.kt)("h3",null,"Path Parameter"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Path Parameter")," is added to the route of the page at the end. For example a ",(0,o.kt)("strong",{parentName:"p"},"Page")," with ",(0,o.kt)("strong",{parentName:"p"},"URL Path")," ",(0,o.kt)("inlineCode",{parentName:"p"},"mypage")," with a path parameter defined, will expect the next part of the route to be the value of that parameter. The route ",(0,o.kt)("inlineCode",{parentName:"p"},"mypage/monkey")," will result in the ",(0,o.kt)("strong",{parentName:"p"},"Path Parameter")," of the ",(0,o.kt)("strong",{parentName:"p"},"Page")," to get the value ",(0,o.kt)("inlineCode",{parentName:"p"},"monkey"),". Using ",(0,o.kt)("strong",{parentName:"p"},"Path Parameter")," is a convenient way to encode a specific data entry to be prepopulated in a ",(0,o.kt)("strong",{parentName:"p"},"Page"),". As an example the ",(0,o.kt)("strong",{parentName:"p"},"Path Parameter")," could be the ",(0,o.kt)("strong",{parentName:"p"},"Id")," of a ",(0,o.kt)("strong",{parentName:"p"},"Record"),"."),(0,o.kt)("h3",null,"Query Parameter"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Query Parameter")," are encoded using ",(0,o.kt)("inlineCode",{parentName:"p"},"?parameter=value;")," notation in the URL. You can have any number of ",(0,o.kt)("strong",{parentName:"p"},"Query Parameters"),"."),(0,o.kt)("span",{className:"hidden-props-for-editor"},"A page parameter that will be available as an input on any **Navigate** node that navigates to its associated **Page**."))}g.isMDXComponent=!0},6247:function(e,t,n){t.Z=n.p+"assets/images/page-inputs-e1a8b84f17776562874d72a4b2d9887c.png"}}]);