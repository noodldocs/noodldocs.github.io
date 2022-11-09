(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[3049],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return c},kt:function(){return m}});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(i),m=n,p=u["".concat(l,".").concat(m)]||u[m]||g[m]||o;return i?a.createElement(p,r(r({ref:t},c),{},{components:i})):a.createElement(p,r({ref:t},c))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var d=2;d<o;d++)r[d]=i[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},25492:function(e,t,i){"use strict";i.d(t,{O:function(){return g}});var a=i(67294),n=i(203),o=JSON.parse('[{"title":"Pages and Navigation","description":"Learn how to build navigation systems, browser url\u2019s and more.","href":"/docs/guides/navigation/basic-navigation","imageUrl":"/img/featured-content-images/navigation.png"},{"title":"Layout","description":"Learn about Noodls powerful layout system and how to use it to create responsive UI.","href":"/docs/guides/user-interfaces/layout","imageUrl":"/img/featured-content-images/layout.png"},{"title":"UI Controls and Data","description":"Learn how connect UI Controls to data nodes to create forms and more.","href":"/docs/guides/data/ui-controls-and-data","imageUrl":"/img/featured-content-images/list.png"},{"title":"Creating a Backend","description":"Learn how to set up a backend for your App, to store and read persistant data.","href":"/docs/guides/cloud-data/creating-a-backend","imageUrl":"/img/featured-content-images/data.png"},{"title":"Javascript in Noodl","description":"Learn how to use Javascript in Noodl and combine nodes with code.","href":"/docs/guides/business-logic/javascript","imageUrl":"/img/featured-content-images/code.png"},{"title":"Custom UI Components","description":"Learn how to create your own re-usable components.","href":"/docs/guides/business-logic/custom-ui-components","imageUrl":"/img/featured-content-images/list.png"}]'),r=i(69433),s=i(34690),l=i(52263),d=i(12336);function c(e){var t=e.title,i=e.description,n=e.href,o=e.imageUrl,r=(0,l.Z)().siteConfig;return a.createElement(d.T,{layout:d.B.Horisontal,primaryAction:{label:"Read guide",href:r.baseUrl.slice(0,-1)+n},title:t,description:i,imageUrl:o})}function g(e){var t=e.title,i=e.hasNoLink;return e.isFeaturedOnly?a.createElement(s.$,{title:t,linkHref:i?null:"docs/learn",linkLabel:i?null:"View all"},a.createElement(r.r,{layout:r.M.Half,hasEqualHeightItems:!0},o.map((function(e){return a.createElement(c,{key:e.title,imageUrl:e.imageUrl,title:e.title,description:e.description,href:e.href})})))):(0,n.D)().map((function(e){return a.createElement(s.$,{key:e.key,title:e.title,linkHref:null,linkLabel:null},a.createElement(r.r,{layout:r.M.Half,hasEqualHeightItems:!0},e.items.map((function(e){return a.createElement(c,{key:e.key,imageUrl:e.imageUrl,title:e.title,description:e.description,href:e.href})}))))}))}},34994:function(e,t,i){"use strict";i.d(t,{B:function(){return k}});var a,n=i(67294),o="Description_rCRL",r="Title_xagl",s="Root_Y8UR",l="Thumb_WbIn",d="Details_Yh3N",c="VideoLength_TPM_",g="Link_k4mw",u=["title","titleId"];function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},m.apply(this,arguments)}function p(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var f=function(e){var t=e.title,i=e.titleId,o=p(e,u);return n.createElement("svg",m({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":i},o),t?n.createElement("title",{id:i},t):null,a||(a=n.createElement("path",{d:"m10 16.5 6-4.5-6-4.5v9ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z",fill:"#dcdcdc"})))};function y(e){var t=e.videoId,i=e.title,a=e.description,u=e.videoLength;return n.createElement("article",{className:s},n.createElement("div",{className:l,style:{backgroundImage:"url(http://img.youtube.com/vi/"+t+"/0.jpg)"}}),n.createElement("div",{className:d},n.createElement("div",null,n.createElement("h1",{className:r},i),n.createElement("p",{className:o},a)),n.createElement("p",{className:c},n.createElement(f,null),n.createElement("span",null,u))),n.createElement("a",{className:g,href:"https://www.youtube.com/watch?v="+t,target:"_blank",rel:"noopener noreferrer"},"Watch video"))}var h=i(69433),b=i(34690),v=JSON.parse('[{"videoId":"titAgD6L6no","title":"Using the Noodl Figma plugin","description":"This video shows how to use the Noodl Figma plugin.","videoLength":"06.56"},{"videoId":"DWwE1RzuN2o","title":"Using the sign-up template","description":"Learn how to make a complete sign-up flow, including email setup for account validation and password recovery.","videoLength":"19.55"},{"videoId":"DG7LRrudMeE","title":"Tab Navigation Template","description":"Learn how to build a tab menu that let\'s the user navigate between different pages.","videoLength":"02.38"},{"videoId":"VwgcIsclVpE","title":"Star Rating Component","description":"Learn how to build an animated star rating component from scratch.","videoLength":"07.10"}]'),w=JSON.parse('["titAgD6L6no","DWwE1RzuN2o","DG7LRrudMeE","VwgcIsclVpE"]').map((function(e){return v.find((function(t){return t.videoId===e}))}));function k(e){var t=e.title,i=e.hasNoLink,a=e.isFeaturedOnly?w:v;return n.createElement(b.$,{title:t,linkHref:i?null:"https://www.youtube.com/channel/UCLkJ8XYV1J1RqrZKY-o1YWg",linkLabel:!i&&"View all"},n.createElement(h.r,{layout:h.M.Half,hasEqualHeightItems:!0},a.map((function(e){return n.createElement(y,{key:e.videoId,title:e.title,description:e.description,videoLength:e.videoLength,videoId:e.videoId})}))))}},12336:function(e,t,i){"use strict";i.d(t,{T:function(){return g},B:function(){return a}});var a,n=i(52263),o=i(72389),r=i(86010),s=i(67294),l=i(46400),d=i(32830),c={Root:"Root_FlAi","is-horisontal":"is-horisontal_bpe6","is-vertical":"is-vertical_DK4a",ImageContainer:"ImageContainer_VFbT",Image:"Image_I7Nz","has-no-padding":"has-no-padding_PmFk",Content:"Content_ViNB",PrimaryAction:"PrimaryAction_aNNZ",SecondaryAction:"SecondaryAction_RhgK"};function g(e){var t=e.layout,i=void 0===t?a.Vertical:t,g=e.title,u=e.description,m=e.hasNoPaddingInThumb,p=e.primaryAction,f=e.secondaryAction,y=e.imageUrl,h=(0,n.Z)().siteConfig,b=(0,o.Z)(),v=(0,s.useMemo)((function(){return b?location.protocol+"//"+location.host+h.baseUrl+y:null}),[b]);return s.createElement("article",{className:(0,r.Z)(c.Root,c[i])},s.createElement("div",{className:c.ImageContainer},v&&s.createElement("div",{className:(0,r.Z)(c.Image,m&&c["has-no-padding"]),style:{backgroundImage:"url("+v+")"}})),s.createElement("div",{className:c.Content},s.createElement("div",null,s.createElement("header",null,s.createElement(d.D,{size:d.J.Smaller,headingLevel:1},g)),s.createElement(l.x,{size:l.y.Small},u)),s.createElement("footer",{className:c.Footer},Boolean(p)&&s.createElement("a",{className:c.PrimaryAction,href:p.href,onClick:p.onClick},s.createElement(l.x,{size:l.y.Small,isSpan:!0},p.label)),Boolean(f)&&s.createElement("a",{className:c.SecondaryAction,href:f.href,onClick:f.onClick},s.createElement(l.x,{size:l.y.Small,isSpan:!0},f.label)))))}!function(e){e.Horisontal="is-horisontal",e.Vertical="is-vertical"}(a||(a={}))},69433:function(e,t,i){"use strict";i.d(t,{r:function(){return s},M:function(){return a}});var a,n=i(86010),o=i(67294),r={Root:"Root_Io4z","has-equal-height-items":"has-equal-height-items_Bfk5",GridItem:"GridItem_h6LT","is-grid-half":"is-grid-half_bkCe","is-grid-thirds":"is-grid-thirds_bUuo","is-grid-fifths":"is-grid-fifths_gZxO","is-grid-2-1-1":"is-grid-2-1-1_WJjM","is-grid-2-3":"is-grid-2-3_GVgU"};function s(e){var t=e.layout,i=e.children,a=e.hasEqualHeightItems,s=(0,o.useMemo)((function(){return Array.isArray(i)?i:[i]}),[i]);return o.createElement("div",{className:(0,n.Z)(r.Root,r[t],a&&r["has-equal-height-items"])},s.map((function(e,t){return null===e?null:o.createElement("div",{key:t,className:r.GridItem},e)})))}!function(e){e.Half="is-grid-half",e.Thirds="is-grid-thirds",e.Fifths="is-grid-fifths",e.Grid_2_1_1="is-grid-2-1-1",e.Grid_2_3="is-grid-2-3"}(a||(a={}))},34690:function(e,t,i){"use strict";i.d(t,{$:function(){return s}});var a=i(39960),n=i(67294),o=i(32830),r={Link:"Link_m_Qv",Root:"Root_RbPk",Header:"Header_lGMo"};function s(e){var t=e.title,i=e.titleSize,s=e.linkLabel,l=void 0===s?"View all":s,d=e.linkHref,c=e.children,g=e.hasNoHeader;return n.createElement("section",{className:r.Root},!g&&n.createElement("div",{className:r.Header},n.createElement(o.D,{size:i},t),Boolean(l)&&n.createElement(a.Z,{className:r.Link,href:d},l)),n.createElement("div",{className:r.Content},c))}},46400:function(e,t,i){"use strict";i.d(t,{x:function(){return s},y:function(){return a}});var a,n=i(86010),o=i(67294),r={Root:"Root_Wy7x","is-size-default":"is-size-default_pSmj","is-size-small":"is-size-small_M5O6","has-bottom-spacing":"has-bottom-spacing_OpxG","is-inline":"is-inline_xE6B","is-centered":"is-centered_i4nY"};function s(e){var t=e.children,i=e.size,s=void 0===i?a.Default:i,l=e.style,d=e.className,c=e.hasBottomSpacing,g=void 0===c||c,u=e.isSpan,m=e.isCentered,p=u?"span":"p";return o.createElement(p,{className:(0,n.Z)(r.Root,r["is-size-"+s],u&&r["is-inline"],m&&r["is-centered"],g&&r["has-bottom-spacing"],d),style:l},t)}!function(e){e.Default="default",e.Small="small"}(a||(a={}))},32830:function(e,t,i){"use strict";i.d(t,{D:function(){return s},J:function(){return a}});var a,n=i(86010),o=i(67294),r={Root:"Root_TxX9","is-size-default":"is-size-default_rXPJ","is-size-large":"is-size-large_kGki","is-size-small":"is-size-small_VhtV","is-size-smaller":"is-size-smaller_EhWW","has-bottom-spacing":"has-bottom-spacing_Lfds","is-centered":"is-centered_d8Sd"};function s(e){var t=e.children,i=e.size,s=void 0===i?a.Default:i,l=e.headingLevel,d=void 0===l?2:l,c=e.hasBottomSpacing,g=void 0===c||c,u=e.isCentered,m="h"+d;return o.createElement(m,{className:(0,n.Z)(r.Root,r["is-size-"+s],u&&r["is-centered"],g&&r["has-bottom-spacing"])},t)}!function(e){e.Default="default",e.Large="large",e.Small="small",e.Smaller="smaller"}(a||(a={}))},45367:function(e,t){t.recursiveBuildSidebarData=function e(t){return"items"in t?{type:"category",label:t.label,items:t.items.map(e)}:{type:"doc",label:t.label,id:t.id}}},203:function(e,t,i){var a=i(45367).recursiveBuildSidebarData,n=[{type:"category",label:"Building User Interfaces",link:{type:"doc",id:"guides/user-interfaces/overview"},items:[{type:"doc",label:"Visual nodes",id:"guides/user-interfaces/basics",imageUrl:"/img/featured-content-images/basic.png",description:"Learn how to to place and edit visual elements using Noodls node model"},{type:"doc",label:"Components",id:"guides/user-interfaces/components",imageUrl:"/img/featured-content-images/basic.png",description:"Learn how to create visual components that are reusable "},{type:"doc",label:"Layout",id:"guides/user-interfaces/layout",imageUrl:"/img/featured-content-images/layout.png",description:"Learn how to create layouts and group content using visual nodes"},{type:"doc",label:"Style Variants",id:"guides/user-interfaces/style-variants",imageUrl:"/img/featured-content-images/layout.png",description:"Learn how to define style variants for visual elements"},{type:"doc",label:"Visual States",id:"guides/user-interfaces/visual-states",imageUrl:"/img/featured-content-images/layout.png",description:"Learn how to style hover, focused, and other visual states on UI elements"},{type:"doc",label:"States Node",id:"guides/user-interfaces/states",imageUrl:"/img/featured-content-images/logic.png",description:"Learn how to use the States node to create UI states, animations and more"},{type:"doc",label:"Scrolling Content",id:"guides/user-interfaces/scrolling-content",imageUrl:"/img/featured-content-images/layout.png",description:"Learn how to set up scrolling containers and pages"},{type:"doc",label:"Modules and Prefabs",id:"guides/user-interfaces/modules",imageUrl:"/img/featured-content-images/basic.png",description:"Get pre-made components, third-party-services, and new capabilities with modules"},{type:"doc",label:"Figma Plugin",id:"guides/user-interfaces/figma-plugin",imageUrl:"/img/featured-content-images/basic.png",description:"Turn designs in Figma into Noodl nodes"}]},{type:"category",label:"Working with data",link:{type:"doc",id:"guides/data/overview"},items:[{type:"doc",label:"Making Connections",id:"guides/data/making-connections",imageUrl:"/img/featured-content-images/logic.png",description:"Learn how to make data connections between nodes."},{type:"doc",label:"Variables",id:"guides/data/variables",imageUrl:"/img/featured-content-images/logic.png",description:"Learn how to store data locally in your app using variables"},{type:"doc",label:"Objects",id:"guides/data/objects",imageUrl:"/img/featured-content-images/logic.png",description:"Learn how to store objects of data locally in your app"},{type:"doc",label:"Arrays",id:"guides/data/arrays",imageUrl:"/img/featured-content-images/list.png",description:"Learn how to store multiple objects of data using arrays"},{type:"doc",label:"Lists Basics",id:"guides/data/list-basics",imageUrl:"/img/featured-content-images/list.png",description:"Learn how to generate lists of UI elements from data"},{type:"doc",label:"UI Controls and data",id:"guides/data/ui-controls-and-data",imageUrl:"/img/featured-content-images/list.png",description:"Learn how connect UI Controls to data nodes to create forms and more"},{type:"doc",label:"External Data",id:"guides/data/external-data",imageUrl:"/img/featured-content-images/data.png",description:"Learn how to work with external data using REST APIs"}]},{type:"category",label:"Navigation",link:{type:"doc",id:"guides/navigation/overview"},items:[{type:"doc",label:"Basic Navigation",id:"guides/navigation/basic-navigation",imageUrl:"/img/featured-content-images/navigation.png",description:"Learn how to create pages and how to navigate between them"},{type:"doc",label:"Multi Level Navigation",id:"guides/navigation/multi-level-navigation",imageUrl:"/img/featured-content-images/navigation.png",description:"Learn how to set up a multi-level-navigation system"},{type:"doc",label:"Encoding Parameters in URLs",id:"guides/navigation/encoding-parameters-in-urls",imageUrl:"/img/featured-content-images/logic.png",description:"Learn how to pass parameters in the URL when navigating between page"},{type:"doc",label:"Popups",id:"guides/navigation/popups",imageUrl:"/img/featured-content-images/navigation.png",description:"Learn how to display popups on user interactions"},{type:"doc",label:"Component Stack",id:"guides/navigation/component-stack",imageUrl:"/img/featured-content-images/navigation.png",description:"Learn how to create a wizard flow using a Component Stack"}]},{type:"category",label:"Working with cloud data",link:{type:"doc",id:"guides/cloud-data/overview"},items:[{type:"doc",label:"Creating a backend",id:"guides/cloud-data/creating-a-backend",imageUrl:"/img/featured-content-images/data.png",description:"Learn how to set up a backend for your App, to store and read persistant data"},{type:"doc",label:"Creating a class",id:"guides/cloud-data/creating-a-class",imageUrl:"/img/featured-content-images/data.png",description:"Learn how to create a class for storing data records in a backend"},{type:"doc",label:"Creating new database records",id:"guides/cloud-data/creating-new-database-records",imageUrl:"/img/featured-content-images/data.png",description:"Learn how to store a data Record in a backend"},{type:"doc",label:"Quering records from a database",id:"guides/cloud-data/quering-records-from-database",imageUrl:"/img/featured-content-images/data.png",description:"Learn how to query record from a database to your app"},{type:"doc",label:"Updating records",id:"guides/cloud-data/updating-records",imageUrl:"/img/featured-content-images/data.png",description:"Learn how to update existing records in a database"},{type:"doc",label:"Filter database queries",id:"guides/cloud-data/filtering-database-queries",imageUrl:"/img/featured-content-images/data.png",description:"Learn how to filter database queries"},{type:"doc",label:"Record relations",id:"guides/cloud-data/record-relations",imageUrl:"/img/featured-content-images/data.png",description:"Learn how to create relations between records in a database"},{type:"doc",label:"Access Control",id:"guides/cloud-data/access-control",imageUrl:"/img/featured-content-images/data.png",description:"learn how to limit access control to records to certain users."}]},{type:"category",label:"Building business logic",link:{type:"doc",id:"guides/business-logic/overview"},items:[{type:"doc",label:"Client Side Business Logic with Nodes",id:"guides/business-logic/client-side-biz-logic-nodes",imageUrl:"/img/featured-content-images/logic.png",description:"Learn how to work with logic nodes for your frontend"},{type:"doc",label:"Javascript in Noodl",id:"guides/business-logic/javascript",imageUrl:"/img/featured-content-images/code.png",description:"Learn how to use Javascript in Noodl and combine nodes with code"},{type:"doc",label:"Client Side Business Logic with Javascript",id:"guides/business-logic/client-side-biz-logic-js",imageUrl:"/img/featured-content-images/code.png",description:"Learn how to use Javascript for custom logic"},{type:"doc",label:"Custom UI Components",id:"guides/business-logic/custom-ui-components",imageUrl:"/img/featured-content-images/list.png",description:"Learn how to create your own re-usable components"},{type:"doc",label:"Events",id:"guides/business-logic/events",imageUrl:"/img/featured-content-images/logic.png",description:"Learn how to work with events in Noodl"},{type:"doc",label:"Zapier",id:"guides/business-logic/zapier",imageUrl:"/img/featured-content-images/logic.png",description:"Learn how to connect Noodl to Zapier for task automation more"},{type:"doc",label:"User Management",id:"guides/business-logic/user-management",imageUrl:"/img/featured-content-images/data.png",description:"Learn how to use Noodls built in User Management nodes to create signup flows and more"}]},{type:"category",label:"Collaboration",link:{type:"doc",id:"guides/collaboration/overview"},items:[{type:"doc",label:"Version Control",id:"guides/collaboration/version-control",imageUrl:"/img/featured-content-images/basic.png",description:"Learn how to use Noodls powerful version control features based on Git"}]},{type:"category",label:"Deploying and hosting apps",link:{type:"doc",id:"guides/deploy/overview"},items:[{type:"doc",label:"Sandbox Deploy",id:"guides/deploy/deploying-an-app-on-sandbox",imageUrl:"/img/featured-content-images/hosting.png",description:"Learn how to deploy your app to a Noodl sandbox domain"},{type:"doc",label:"Deploying to custom domains",id:"guides/deploy/deploying-to-custom-domain",imageUrl:"/img/featured-content-images/hosting.png",description:"Learn how to deploy your app to custom domains "},{type:"doc",label:"Using a self hosted backend",id:"guides/deploy/using-an-external-backend",imageUrl:"/img/featured-content-images/data.png",description:"Learn how to create a self hosted backend through a Docker Container"},{type:"doc",label:"Deploying to iOS and Android",id:"guides/deploy/deploying-to-ios-and-android",imageUrl:"/img/featured-content-images/hosting.png",description:"Learn how to deploy your project as a native app"},{type:"doc",label:"Self hosting your Noodl Frontend",id:"guides/deploy/hosting-frontend",imageUrl:"/img/featured-content-images/hosting.png",description:"Learn how to deploy your project to a local folder for Self Hosting"}]}];function o(e){return"items"in e?{key:e.label,title:e.label,items:e.items.map(o)}:{key:e.label,title:e.label,description:e.description,href:"/docs/"+e.id,imageUrl:e.imageUrl}}t.D=function(){return n.map(o)}},61435:function(e,t,i){"use strict";i.r(t),i.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return d},metadata:function(){return g},toc:function(){return m}});var a=i(83117),n=i(80102),o=(i(67294),i(3905)),r=i(25492),s=i(34994),l=["components"],d={hide_title:!0},c=void 0,g={unversionedId:"learn",id:"learn",title:"learn",description:"",source:"@site/docs/learn.mdx",sourceDirName:".",slug:"/learn",permalink:"/2.8/docs/learn",tags:[],version:"current",frontMatter:{hide_title:!0},sidebar:"docsSidebar",next:{title:"How Noodl works",permalink:"/2.8/docs/getting-started/overview"}},u={},m=[],p={toc:m};function f(e){var t=e.components,i=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"happy-to-see-you-here"},"Happy to see you here!"),(0,o.kt)("p",null,"Noodl is a low code web app builder that will have you creating applications faster and smarter. It's a visual development environment that you don't need any previous coding skills to start learning. It's also great for developers who already know how to code as you can easily mix in JavaScript when appropriate."),(0,o.kt)(r.O,{title:"All guides",hasNoLink:!0,mdxType:"GuideListing"}),(0,o.kt)(s.B,{title:"All videos",hasNoLink:!0,mdxType:"VideoListing"}))}f.isMDXComponent=!0}}]);