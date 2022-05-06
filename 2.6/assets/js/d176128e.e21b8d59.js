"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[8362],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},83473:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],s={title:"Working with Data in Noodl",hide_title:!0},l=void 0,u={unversionedId:"guides/data/overview",id:"guides/data/overview",title:"Working with Data in Noodl",description:"Noodl contains a number of nodes that help you fill your UI with data and read and process the data that the user enters. This is achieved by connecting the visual nodes to Variables, Objects and Arrays.",source:"@site/docs/guides/data/overview.md",sourceDirName:"guides/data",slug:"/guides/data/overview",permalink:"/2.6/docs/guides/data/overview",tags:[],version:"current",frontMatter:{title:"Working with Data in Noodl",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Figma Plugin",permalink:"/2.6/docs/guides/user-interfaces/figma-plugin"},next:{title:"Making Connections",permalink:"/2.6/docs/guides/data/making-connections"}},c={},d=[],p={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"working-with-data-in-noodl"},"Working with Data in Noodl"),(0,o.kt)("p",null,"Noodl contains a number of nodes that help you fill your UI with data and read and process the data that the user enters. This is achieved by connecting the visual nodes to ",(0,o.kt)("strong",{parentName:"p"},"Variables"),", ",(0,o.kt)("strong",{parentName:"p"},"Objects")," and ",(0,o.kt)("strong",{parentName:"p"},"Arrays"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Variables")," are singular values"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Objects")," are a collection of different values that belong together, for example data about an order or a customer"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Arrays")," are a list of ",(0,o.kt)("strong",{parentName:"li"},"Objects")," for example a list of orders or customers")),(0,o.kt)("p",null,"These nodes are all ",(0,o.kt)("em",{parentName:"p"},"client side")," only, meaning they are not stored in a database in the cloud. They are also only valid during a singular session in an App. For example if the user refresh the browser this data is cleared. Storing this data in the cloud is easy however and you can learn more about that in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/cloud-data/overview"},"Cloud Data Guides"),"."))}f.isMDXComponent=!0}}]);