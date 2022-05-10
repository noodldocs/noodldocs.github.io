"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[8744],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=d(r),p=o,m=f["".concat(l,".").concat(p)]||f[p]||c[p]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},69433:function(e,t,r){r.d(t,{r:function(){return s},M:function(){return n}});var n,o=r(86010),a=r(67294),i={Root:"Root_Io4z","has-equal-height-items":"has-equal-height-items_Bfk5",GridItem:"GridItem_h6LT","is-grid-half":"is-grid-half_bkCe","is-grid-thirds":"is-grid-thirds_bUuo","is-grid-fifths":"is-grid-fifths_gZxO","is-grid-2-1-1":"is-grid-2-1-1_WJjM","is-grid-2-3":"is-grid-2-3_GVgU"};function s(e){var t=e.layout,r=e.children,n=e.hasEqualHeightItems,s=(0,a.useMemo)((function(){return Array.isArray(r)?r:[r]}),[r]);return a.createElement("div",{className:(0,o.Z)(i.Root,i[t],n&&i["has-equal-height-items"])},s.map((function(e,t){return null===e?null:a.createElement("div",{key:t,className:i.GridItem},e)})))}!function(e){e.Half="is-grid-half",e.Thirds="is-grid-thirds",e.Fifths="is-grid-fifths",e.Grid_2_1_1="is-grid-2-1-1",e.Grid_2_3="is-grid-2-3"}(n||(n={}))},34690:function(e,t,r){r.d(t,{$:function(){return s}});var n=r(39960),o=r(67294),a=r(32830),i={Link:"Link_m_Qv",Root:"Root_RbPk",Header:"Header_lGMo"};function s(e){var t=e.title,r=e.titleSize,s=e.linkLabel,l=void 0===s?"View all":s,d=e.linkHref,u=e.children,c=e.hasNoHeader;return o.createElement("section",{className:i.Root},!c&&o.createElement("div",{className:i.Header},o.createElement(a.D,{size:r},t),Boolean(l)&&o.createElement(n.Z,{className:i.Link,href:d},l)),o.createElement("div",{className:i.Content},u))}},32830:function(e,t,r){r.d(t,{D:function(){return s},J:function(){return n}});var n,o=r(86010),a=r(67294),i={Root:"Root_TxX9","is-size-default":"is-size-default_rXPJ","is-size-large":"is-size-large_kGki","is-size-small":"is-size-small_VhtV","is-size-smaller":"is-size-smaller_EhWW","has-bottom-spacing":"has-bottom-spacing_Lfds","is-centered":"is-centered_d8Sd"};function s(e){var t=e.children,r=e.size,s=void 0===r?n.Default:r,l=e.headingLevel,d=void 0===l?2:l,u=e.hasBottomSpacing,c=void 0===u||u,f=e.isCentered,p="h"+d;return a.createElement(p,{className:(0,o.Z)(i.Root,i["is-size-"+s],f&&i["is-centered"],c&&i["has-bottom-spacing"])},t)}!function(e){e.Default="default",e.Large="large",e.Small="small",e.Smaller="smaller"}(n||(n={}))},27891:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return g},default:function(){return y},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return k}});var n=r(83117),o=r(80102),a=r(67294),i=r(3905),s=r(39960),l="Root_xG7o";function d(e){var t=e.title,r=e.href,n=e.onClick,o=r?s.Z:"button";return a.createElement(o,{className:l,to:r,onClick:n},t)}var u=r(69433),c=r(34690);function f(e){var t=e.title,r=e.links;return a.createElement(c.$,{title:t,linkLabel:null},a.createElement(u.r,{layout:u.M.Thirds,hasEqualHeightItems:!0},r.map((function(e){return a.createElement(d,{title:e.title,href:e.href,onClick:e.onClick})}))))}var p=["components"],m={hide_title:!0},g=void 0,h={unversionedId:"getting-started/overview",id:"getting-started/overview",title:"overview",description:"",source:"@site/docs/getting-started/overview.mdx",sourceDirName:"getting-started",slug:"/getting-started/overview",permalink:"/2.6/docs/getting-started/overview",tags:[],version:"current",frontMatter:{hide_title:!0},sidebar:"docsSidebar",previous:{title:"learn",permalink:"/2.6/docs/learn"},next:{title:"Workflow overview",permalink:"/2.6/docs/getting-started/workflow"}},v={},k=[{value:"Getting started",id:"getting-started",level:2}],w={toc:k};function y(e){var t=e.components,r=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},w,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-noodl-works"},"How Noodl works"),(0,i.kt)("p",null,"Noodl has two fundamental parts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"A visual builder for modern web application frontends.")," You compose frontends from a library of UI Controls that are highly customizable, down to fine grained animations and transitions. A versatile navigation system that supports both simple and more complex nested navigation and popups. Re-usable components to support dynamic, reactive interfaces. And you build logic either visually or with simple Javascript functions.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"A cloud database.")," A solid easy to learn database where you manage classes and records. You can of course also query data and create record relations. The cloud database also includes user management (sign up, log in/out) and Access Control. Noodl can manage the database for you in the cloud or your can host it on your own. It is based on a popular open source project (",(0,i.kt)("a",{parentName:"p",href:"http://parseplatform.org"},"Parse"),") and can be integrated with a wide range of other services through Zapier or webhooks."))),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"Getting started with Noodl is easy. There are interactive lessons built into the tool that are a great starting point. In the documentation we recommend the following articles to get started."),(0,i.kt)(f,{links:[{title:"Workflow overview",href:"/docs/getting-started/workflow"},{title:"Editor tour",href:"/docs/guides/overview"},{title:"Build your first app",href:"/docs/build-alongs/overview"}],mdxType:"LinkButtonGrid"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"First we recommend reviewing the ",(0,i.kt)("a",{parentName:"p",href:"/2.6/docs/getting-started/workflow"},"Workflow overview")," page and then the ",(0,i.kt)("a",{parentName:"p",href:"/2.6/docs/getting-started/fundamentals"},"Fundamentals")," page to get some more meat the bones in terms of what Noodl can do for you.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Then dive into the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/overview"},"Guides")," section and start digging into the wonderful world on Noodl.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you are more of a visual learner and prefer video tutorials we suggest you jump to the ",(0,i.kt)("a",{parentName:"p",href:"/2.6/docs/build-alongs/overview"},"Build along")," section,there you will find two 15 minute long videos taking you through the process of building out a UI for task list app and connecting it to a cloud database."))),(0,i.kt)("p",null,"Also don't forget to check out the Forum and our Discord channel - great ways to learn and make new friends!"),(0,i.kt)("p",null,"Happy Noodling!"))}y.isMDXComponent=!0}}]);