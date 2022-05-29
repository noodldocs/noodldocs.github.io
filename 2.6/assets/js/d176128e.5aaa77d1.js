"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[8362],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},83473:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],l={title:"Working with Data in Noodl",hide_title:!0},s="Working with Data in Noodl",u={unversionedId:"guides/data/overview",id:"guides/data/overview",title:"Working with Data in Noodl",description:"Noodl contains a number of nodes that help you fill your UI with data and read and process the data that the user enters. This is achieved by connecting the visual nodes to Variables, Objects and Arrays.",source:"@site/docs/guides/data/overview.md",sourceDirName:"guides/data",slug:"/guides/data/overview",permalink:"/2.6/docs/guides/data/overview",tags:[],version:"current",frontMatter:{title:"Working with Data in Noodl",hide_title:!0}},c={},d=[],p={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"working-with-data-in-noodl"},"Working with Data in Noodl"),(0,o.kt)("p",null,"Noodl contains a number of nodes that help you fill your UI with data and read and process the data that the user enters. This is achieved by connecting the visual nodes to ",(0,o.kt)("strong",{parentName:"p"},"Variables"),", ",(0,o.kt)("strong",{parentName:"p"},"Objects")," and ",(0,o.kt)("strong",{parentName:"p"},"Arrays"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Variables")," are singular values"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Objects")," are a collection of different values that belong together, for example data about an order or a customer"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Arrays")," are a list of ",(0,o.kt)("strong",{parentName:"li"},"Objects")," for example a list of orders or customers")),(0,o.kt)("p",null,"These nodes are all ",(0,o.kt)("em",{parentName:"p"},"client side")," only, meaning they are not stored in a database in the cloud. They are also only valid during a singular session in an App. For example if the user refresh the browser this data is cleared. Storing this data in the cloud is easy however and you can learn more about that in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/cloud-data/overview"},"Cloud Data Guides"),"."))}f.isMDXComponent=!0}}]);