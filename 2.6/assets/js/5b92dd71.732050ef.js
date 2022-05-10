"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[3049],{3905:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return g}});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(i),g=r,p=m["".concat(l,".").concat(g)]||m[g]||u[g]||a;return i?n.createElement(p,o(o({ref:t},d),{},{components:i})):n.createElement(p,o({ref:t},d))}));function g(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},60370:function(e,t,i){i.d(t,{O:function(){return u}});var n=i(67294),r=JSON.parse('[{"title":"Building user interfaces","description":"","href":"/docs/guides/user-interfaces/overview","imageUrl":"#"},{"title":"Working with data","description":"","href":"/docs/guides/data/overview","imageUrl":"#"},{"title":"Navigation","description":"","href":"/docs/guides/navigation/overview","imageUrl":"#"},{"title":"Working with cloud data","description":"","href":"/docs/guides/cloud-data/overview","imageUrl":"#"},{"title":"Building business logic","description":"","href":"/docs/guides/business-logic/overview","imageUrl":"#"},{"title":"Deploying and hosting apps","description":"","href":"/docs/guides/deploy/overview","imageUrl":"#"}]'),a=JSON.parse('[{"title":"Pages and navigation","description":"Learn how to build both simple and advanced navigatino systems, browser url\u2019s and more.","href":"/docs/guides/navigation/overview","imageUrl":"/img/featured-content-images/guide-navigation.png"},{"title":"Layout","description":"Learn about Noodls powerful layout system and how to use it to craete responsive UI.","href":"/docs/guides/user-interfaces/layout","imageUrl":"/img/featured-content-images/guide-layout.png"},{"title":"UI Controls and Data","description":"Learn how connect the UI Controls of Noodl to data nodes to create forms and more.","href":"/docs/guides/data/ui-controls-and-data","imageUrl":"/img/featured-content-images/guide-list.png"},{"title":"Creating a Backend","description":"Learn how to set up a backend for your App, containing a database that your app can store and read persistant data from.","href":"/docs/guides/cloud-data/creating-a-backend","imageUrl":"/img/featured-content-images/guide-backend.png"},{"title":"Javascript in Noodl","description":"Learn how to make make use of your Javascript knowledge in Noodl and combining nodes with code.","href":"/docs/guides/business-logic/javascript","imageUrl":"/img/featured-content-images/guide-code.png"},{"title":"Custom UI Components","description":"Learn how to create your own custom UI Components that you can re-use in your Apps.","href":"/docs/guides/business-logic/custom-ui-components","imageUrl":"/img/featured-content-images/guide-layout.png"}]'),o=i(69433),s=i(34690),l=i(52263),c=i(12336);function d(e){var t=e.title,i=e.description,r=e.href,a=e.imageUrl,o=(0,l.Z)().siteConfig;return n.createElement(c.T,{layout:c.B.Horisontal,primaryAction:{label:"Read guide",href:o.baseUrl.slice(0,-1)+r},title:t,description:i,imageUrl:a})}function u(e){var t=e.title,i=e.hasNoLink,l=e.isFeaturedOnly?a:r;return n.createElement(s.$,{title:t,linkHref:i?null:"docs/getting-started/overview",linkLabel:i?null:"View all"},n.createElement(o.r,{layout:o.M.Half,hasEqualHeightItems:!0},l.map((function(e){return n.createElement(d,{key:e.title,imageUrl:e.imageUrl,title:e.title,description:e.description,href:e.href})}))))}},15956:function(e,t,i){i.d(t,{B:function(){return h}});var n=i(67294),r="Description_rCRL",a="Title_xagl",o="Root_Y8UR",s="Thumb_WbIn",l="Details_Yh3N",c="VideoLength_TPM_",d="Link_k4mw";function u(e){var t=e.videoId,i=e.title,u=e.description,m=e.videoLength;return n.createElement("article",{className:o},n.createElement("div",{className:s,style:{backgroundImage:"url(http://img.youtube.com/vi/"+t+"/0.jpg)"}}),n.createElement("div",{className:l},n.createElement("div",null,n.createElement("h1",{className:a},i),n.createElement("p",{className:r},u)),n.createElement("p",{className:c},m)),n.createElement("a",{className:d,href:"https://www.youtube.com/watch?v="+t,target:"_blank",rel:"noopener noreferrer"},"Watch video"))}var m=i(69433),g=i(34690),p=JSON.parse('[{"videoId":"titAgD6L6no","title":"Using the Noodl Figma plugin","description":"This video shows how to use the Noodl Figma plugin.","videoLength":6.56},{"videoId":"DWwE1RzuN2o","title":"Using the sign-up template","description":"Learn how to make a complete sign-up flow, including email setup for account validation and password recovery.","videoLength":19.55},{"videoId":"DG7LRrudMeE","title":"Tab Navigation Template","description":"Learn how to build a tab menu that let\'s the user navigate between different pages.","videoLength":2.38},{"videoId":"VwgcIsclVpE","title":"Star Rating Component","description":"Learn how to build an animated star rating component from scratch.","videoLength":7.1}]'),f=JSON.parse('["titAgD6L6no","DWwE1RzuN2o","DG7LRrudMeE","VwgcIsclVpE"]').map((function(e){return p.find((function(t){return t.videoId===e}))}));function h(e){var t=e.title,i=e.hasNoLink,r=e.isFeaturedOnly?f:p;return n.createElement(g.$,{title:t,linkLabel:!i&&"View all"},n.createElement(m.r,{layout:m.M.Half,hasEqualHeightItems:!0},r.map((function(e){return n.createElement(u,{key:e.videoId,title:e.title,description:e.description,videoLength:e.videoLength,videoId:e.videoId})}))))}},12336:function(e,t,i){i.d(t,{T:function(){return u},B:function(){return n}});var n,r=i(52263),a=i(72389),o=i(86010),s=i(67294),l=i(46400),c=i(32830),d={Root:"Root_FlAi","is-horisontal":"is-horisontal_bpe6","is-vertical":"is-vertical_DK4a",ImageContainer:"ImageContainer_VFbT",Image:"Image_I7Nz",Content:"Content_ViNB",PrimaryAction:"PrimaryAction_aNNZ",SecondaryAction:"SecondaryAction_RhgK"};function u(e){var t=e.layout,i=void 0===t?n.Vertical:t,u=e.title,m=e.description,g=e.primaryAction,p=e.secondaryAction,f=e.imageUrl,h=(0,r.Z)().siteConfig,v=(0,a.Z)(),y=(0,s.useMemo)((function(){return v?location.protocol+"//"+location.host+h.baseUrl+f:null}),[v]);return s.createElement("article",{className:(0,o.Z)(d.Root,d[i])},s.createElement("div",{className:d.ImageContainer},s.createElement("div",{className:d.Image,style:{backgroundImage:"url("+y+")"}})),s.createElement("div",{className:d.Content},s.createElement("div",null,s.createElement("header",null,s.createElement(c.D,{size:c.J.Smaller,headingLevel:1},u)),s.createElement(l.x,{size:l.y.Small},m)),s.createElement("footer",{className:d.Footer},Boolean(g)&&s.createElement("a",{className:d.PrimaryAction,href:g.href,onClick:g.onClick},s.createElement(l.x,{size:l.y.Small,isSpan:!0},g.label)),Boolean(p)&&s.createElement("a",{className:d.SecondaryAction,href:p.href,onClick:p.onClick},s.createElement(l.x,{size:l.y.Small,isSpan:!0},p.label)))))}!function(e){e.Horisontal="is-horisontal",e.Vertical="is-vertical"}(n||(n={}))},69433:function(e,t,i){i.d(t,{r:function(){return s},M:function(){return n}});var n,r=i(86010),a=i(67294),o={Root:"Root_Io4z","has-equal-height-items":"has-equal-height-items_Bfk5",GridItem:"GridItem_h6LT","is-grid-half":"is-grid-half_bkCe","is-grid-thirds":"is-grid-thirds_bUuo","is-grid-fifths":"is-grid-fifths_gZxO","is-grid-2-1-1":"is-grid-2-1-1_WJjM","is-grid-2-3":"is-grid-2-3_GVgU"};function s(e){var t=e.layout,i=e.children,n=e.hasEqualHeightItems,s=(0,a.useMemo)((function(){return Array.isArray(i)?i:[i]}),[i]);return a.createElement("div",{className:(0,r.Z)(o.Root,o[t],n&&o["has-equal-height-items"])},s.map((function(e,t){return null===e?null:a.createElement("div",{key:t,className:o.GridItem},e)})))}!function(e){e.Half="is-grid-half",e.Thirds="is-grid-thirds",e.Fifths="is-grid-fifths",e.Grid_2_1_1="is-grid-2-1-1",e.Grid_2_3="is-grid-2-3"}(n||(n={}))},34690:function(e,t,i){i.d(t,{$:function(){return s}});var n=i(39960),r=i(67294),a=i(32830),o={Link:"Link_m_Qv",Root:"Root_RbPk",Header:"Header_lGMo"};function s(e){var t=e.title,i=e.titleSize,s=e.linkLabel,l=void 0===s?"View all":s,c=e.linkHref,d=e.children,u=e.hasNoHeader;return r.createElement("section",{className:o.Root},!u&&r.createElement("div",{className:o.Header},r.createElement(a.D,{size:i},t),Boolean(l)&&r.createElement(n.Z,{className:o.Link,href:c},l)),r.createElement("div",{className:o.Content},d))}},46400:function(e,t,i){i.d(t,{x:function(){return s},y:function(){return n}});var n,r=i(86010),a=i(67294),o={Root:"Root_Wy7x","is-size-default":"is-size-default_pSmj","is-size-small":"is-size-small_M5O6","has-bottom-spacing":"has-bottom-spacing_OpxG","is-inline":"is-inline_xE6B","is-centered":"is-centered_i4nY"};function s(e){var t=e.children,i=e.size,s=void 0===i?n.Default:i,l=e.style,c=e.className,d=e.hasBottomSpacing,u=void 0===d||d,m=e.isSpan,g=e.isCentered,p=m?"span":"p";return a.createElement(p,{className:(0,r.Z)(o.Root,o["is-size-"+s],m&&o["is-inline"],g&&o["is-centered"],u&&o["has-bottom-spacing"],c),style:l},t)}!function(e){e.Default="default",e.Small="small"}(n||(n={}))},32830:function(e,t,i){i.d(t,{D:function(){return s},J:function(){return n}});var n,r=i(86010),a=i(67294),o={Root:"Root_TxX9","is-size-default":"is-size-default_rXPJ","is-size-large":"is-size-large_kGki","is-size-small":"is-size-small_VhtV","is-size-smaller":"is-size-smaller_EhWW","has-bottom-spacing":"has-bottom-spacing_Lfds","is-centered":"is-centered_d8Sd"};function s(e){var t=e.children,i=e.size,s=void 0===i?n.Default:i,l=e.headingLevel,c=void 0===l?2:l,d=e.hasBottomSpacing,u=void 0===d||d,m=e.isCentered,g="h"+c;return a.createElement(g,{className:(0,r.Z)(o.Root,o["is-size-"+s],m&&o["is-centered"],u&&o["has-bottom-spacing"])},t)}!function(e){e.Default="default",e.Large="large",e.Small="small",e.Smaller="smaller"}(n||(n={}))},61435:function(e,t,i){i.r(t),i.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return g}});var n=i(83117),r=i(80102),a=(i(67294),i(3905)),o=i(60370),s=i(15956),l=["components"],c={hide_title:!0},d=void 0,u={unversionedId:"learn",id:"learn",title:"learn",description:"",source:"@site/docs/learn.mdx",sourceDirName:".",slug:"/learn",permalink:"/2.6/docs/learn",tags:[],version:"current",frontMatter:{hide_title:!0},sidebar:"docsSidebar",next:{title:"overview",permalink:"/2.6/docs/getting-started/overview"}},m={},g=[],p={toc:g};function f(e){var t=e.components,i=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"happy-to-see-you-here"},"Happy to see you here!"),(0,a.kt)("p",null,"Noodl is a low code web app builder that will have you creating applications faster and smarter. It's a visual development environment that you don't need any previous coding skills to start learning. It's also great for developers who already know how to code as you can easily mix in JavaScript when appropriate."),(0,a.kt)(o.O,{title:"All guides",hasNoLink:!0,mdxType:"GuideListing"}),(0,a.kt)(s.B,{title:"All videos",hasNoLink:!0,mdxType:"VideoListing"}))}f.isMDXComponent=!0}}]);