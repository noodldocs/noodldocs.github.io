(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[3049],{3905:(e,t,i)=>{"use strict";i.d(t,{Zo:()=>c,kt:()=>p});var a=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,o=function(e,t){if(null==e)return{};var i,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=d(i),m=o,p=g["".concat(l,".").concat(m)]||g[m]||u[m]||n;return i?a.createElement(p,r(r({ref:t},c),{},{components:i})):a.createElement(p,r({ref:t},c))}));function p(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,r=new Array(n);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<n;d++)r[d]=i[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},25492:(e,t,i)=>{"use strict";i.d(t,{O:()=>g});var a=i(67294),o=i(203);const n=JSON.parse('[{"title":"Pages and Navigation","description":"Learn how to build navigation systems, browser url\u2019s and more.","href":"/docs/guides/navigation/basic-navigation","imageUrl":"/img/featured-content-images/navigation.png"},{"title":"Layout","description":"Learn about Noodls powerful layout system and how to use it to create responsive UI.","href":"/docs/guides/user-interfaces/layout","imageUrl":"/img/featured-content-images/layout.png"},{"title":"UI Controls and Data","description":"Learn how connect UI Controls to data nodes to create forms and more.","href":"/docs/guides/data/ui-controls-and-data","imageUrl":"/img/featured-content-images/list.png"},{"title":"Creating a Backend","description":"Learn how to set up a backend for your App, to store and read persistant data.","href":"/docs/guides/cloud-data/creating-a-backend","imageUrl":"/img/featured-content-images/data.png"},{"title":"Javascript in Noodl","description":"Learn how to use Javascript in Noodl and combine nodes with code.","href":"/docs/guides/business-logic/javascript","imageUrl":"/img/featured-content-images/code.png"},{"title":"Custom UI Components","description":"Learn how to create your own re-usable components.","href":"/docs/guides/business-logic/custom-ui-components","imageUrl":"/img/featured-content-images/list.png"}]');var r=i(69433),s=i(34690),l=i(52263),d=i(12336);function c(e){let{title:t,description:i,href:o,imageUrl:n}=e;const{siteConfig:r}=(0,l.Z)();return a.createElement(d.T,{layout:d.B.Horisontal,primaryAction:{label:"Read guide",href:r.baseUrl.slice(0,-1)+o},title:t,description:i,imageUrl:n})}function g(e){let{title:t,hasNoLink:i,isFeaturedOnly:l}=e;return l?a.createElement(s.$,{title:t,linkHref:i?null:"docs/learn",linkLabel:i?null:"View all"},a.createElement(r.r,{layout:r.M.Half,hasEqualHeightItems:!0},n.map((e=>a.createElement(c,{key:e.title,imageUrl:e.imageUrl,title:e.title,description:e.description,href:e.href}))))):(0,o.D)().map((e=>a.createElement(s.$,{key:e.key,title:e.title,linkHref:null,linkLabel:null},a.createElement(r.r,{layout:r.M.Half,hasEqualHeightItems:!0},e.items.map((e=>a.createElement(c,{key:e.key,imageUrl:e.imageUrl,title:e.title,description:e.description,href:e.href})))))))}},34994:(e,t,i)=>{"use strict";i.d(t,{B:()=>m});var a=i(67294);const o={Description:"Description_rCRL",Title:"Title_xagl",Root:"Root_Y8UR",Thumb:"Thumb_WbIn",Details:"Details_Yh3N",VideoLength:"VideoLength_TPM_",Link:"Link_k4mw"};var n;function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},r.apply(this,arguments)}const s=e=>{let{title:t,titleId:i,...o}=e;return a.createElement("svg",r({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":i},o),t?a.createElement("title",{id:i},t):null,n||(n=a.createElement("path",{d:"m10 16.5 6-4.5-6-4.5v9ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z",fill:"#dcdcdc"})))};function l(e){let{videoId:t,title:i,description:n,videoLength:r}=e;return a.createElement("article",{className:o.Root},a.createElement("div",{className:o.Thumb,style:{backgroundImage:`url(http://img.youtube.com/vi/${t}/0.jpg)`}}),a.createElement("div",{className:o.Details},a.createElement("div",null,a.createElement("h1",{className:o.Title},i),a.createElement("p",{className:o.Description},n)),a.createElement("p",{className:o.VideoLength},a.createElement(s,null),a.createElement("span",null,r))),a.createElement("a",{className:o.Link,href:`https://www.youtube.com/watch?v=${t}`,target:"_blank",rel:"noopener noreferrer"},"Watch video"))}var d=i(69433),c=i(34690);const g=JSON.parse('[{"videoId":"titAgD6L6no","title":"Using the Noodl Figma plugin","description":"This video shows how to use the Noodl Figma plugin.","videoLength":"06.56"},{"videoId":"u04KnVju4KU","title":"Building AirBnB Clone","description":"Casually building an AirBnB clone and testing some new upcoming features of 2.8.2","videoLength":"2:09:22"},{"videoId":"zFJLPNCZGV8","title":"Noodl 2.8 release overview","description":"A look at the new features of 2.8 most norably cloud functions.","videoLength":"04:15"},{"videoId":"ATyqeK_deu4","title":"Noodl Basics - Visual States","description":"Learn how to use Noodl visual interaction states.","videoLength":"1:54"},{"videoId":"ecas2QPbr0g","title":"Intro to cloud services","description":"Continue the learning journey from the intro lessons in this video guide.","videoLength":"22:08"}]'),u=JSON.parse('["u04KnVju4KU","zFJLPNCZGV8","ATyqeK_deu4","ecas2QPbr0g"]').map((e=>g.find((t=>t.videoId===e))));function m(e){let{title:t,hasNoLink:i,isFeaturedOnly:o}=e;const n=o?u:g;return a.createElement(c.$,{title:t,linkHref:i?null:"https://www.youtube.com/channel/UCLkJ8XYV1J1RqrZKY-o1YWg",linkLabel:!i&&"View all"},a.createElement(d.r,{layout:d.M.Half,hasEqualHeightItems:!0},n.map((e=>a.createElement(l,{key:e.videoId,title:e.title,description:e.description,videoLength:e.videoLength,videoId:e.videoId})))))}},12336:(e,t,i)=>{"use strict";i.d(t,{T:()=>g,B:()=>c});var a=i(52263),o=i(72389),n=i(86010),r=i(67294),s=i(46400),l=i(32830);const d={Root:"Root_FlAi","is-horisontal":"is-horisontal_bpe6","is-vertical":"is-vertical_DK4a",ImageContainer:"ImageContainer_VFbT",Image:"Image_I7Nz","has-no-padding":"has-no-padding_PmFk",Content:"Content_ViNB",PrimaryAction:"PrimaryAction_aNNZ",SecondaryAction:"SecondaryAction_RhgK"};let c=function(e){return e.Horisontal="is-horisontal",e.Vertical="is-vertical",e}({});function g(e){let{layout:t=c.Vertical,title:i,description:g,hasNoPaddingInThumb:u,primaryAction:m,secondaryAction:p,imageUrl:y}=e;const{siteConfig:h}=(0,a.Z)(),f=(0,o.Z)(),b=(0,r.useMemo)((()=>f?location.protocol+"//"+location.host+h.baseUrl.slice(0,-1)+("/"===y[0]?y:"/"+y):null),[f]);return r.createElement("article",{className:(0,n.Z)(d.Root,d[t])},r.createElement("div",{className:d.ImageContainer},b&&r.createElement("div",{className:(0,n.Z)(d.Image,u&&d["has-no-padding"]),style:{backgroundImage:`url(${b})`}})),r.createElement("div",{className:d.Content},r.createElement("div",null,r.createElement("header",null,r.createElement(l.D,{size:l.J.Smaller,headingLevel:1},i)),r.createElement(s.x,{size:s.y.Small},g)),r.createElement("footer",{className:d.Footer},Boolean(m)&&r.createElement("a",{className:d.PrimaryAction,href:m.href,onClick:m.onClick},r.createElement(s.x,{size:s.y.Small,isSpan:!0},m.label)),Boolean(p)&&r.createElement("a",{className:d.SecondaryAction,href:p.href,onClick:p.onClick},r.createElement(s.x,{size:s.y.Small,isSpan:!0},p.label)))))}},69433:(e,t,i)=>{"use strict";i.d(t,{r:()=>s,M:()=>r});var a=i(86010),o=i(67294);const n={Root:"Root_Io4z","has-equal-height-items":"has-equal-height-items_Bfk5",GridItem:"GridItem_h6LT","is-grid-half":"is-grid-half_bkCe","is-grid-thirds":"is-grid-thirds_bUuo","is-grid-fifths":"is-grid-fifths_gZxO","is-grid-2-1-1":"is-grid-2-1-1_WJjM","is-grid-2-3":"is-grid-2-3_GVgU"};let r=function(e){return e.Half="is-grid-half",e.Thirds="is-grid-thirds",e.Fifths="is-grid-fifths",e.Grid_2_1_1="is-grid-2-1-1",e.Grid_2_3="is-grid-2-3",e}({});function s(e){let{layout:t,children:i,hasEqualHeightItems:r}=e;const s=(0,o.useMemo)((()=>Array.isArray(i)?i:[i]),[i]);return o.createElement("div",{className:(0,a.Z)(n.Root,n[t],r&&n["has-equal-height-items"])},s.map(((e,t)=>null===e?null:o.createElement("div",{key:t,className:n.GridItem},e))))}},34690:(e,t,i)=>{"use strict";i.d(t,{$:()=>s});var a=i(39960),o=i(67294),n=i(32830);const r={Link:"Link_m_Qv",Root:"Root_RbPk",Header:"Header_lGMo"};function s(e){let{title:t,titleSize:i,linkLabel:s="View all",linkHref:l,children:d,hasNoHeader:c}=e;return o.createElement("section",{className:r.Root},!c&&o.createElement("div",{className:r.Header},o.createElement(n.D,{size:i},t),Boolean(s)&&o.createElement(a.Z,{className:r.Link,href:l},s)),o.createElement("div",{className:r.Content},d))}},46400:(e,t,i)=>{"use strict";i.d(t,{x:()=>s,y:()=>r});var a=i(86010),o=i(67294);const n={Root:"Root_Wy7x","is-size-default":"is-size-default_pSmj","is-size-small":"is-size-small_M5O6","has-bottom-spacing":"has-bottom-spacing_OpxG","is-inline":"is-inline_xE6B","is-centered":"is-centered_i4nY"};let r=function(e){return e.Default="default",e.Small="small",e}({});function s(e){let{children:t,size:i=r.Default,style:s,className:l,hasBottomSpacing:d=!0,isSpan:c,isCentered:g}=e;const u=c?"span":"p";return o.createElement(u,{className:(0,a.Z)(n.Root,n[`is-size-${i}`],c&&n["is-inline"],g&&n["is-centered"],d&&n["has-bottom-spacing"],l),style:s},t)}},32830:(e,t,i)=>{"use strict";i.d(t,{D:()=>s,J:()=>r});var a=i(86010),o=i(67294);const n={Root:"Root_TxX9","is-size-default":"is-size-default_rXPJ","is-size-large":"is-size-large_kGki","is-size-small":"is-size-small_VhtV","is-size-smaller":"is-size-smaller_EhWW","has-bottom-spacing":"has-bottom-spacing_Lfds","is-centered":"is-centered_d8Sd"};let r=function(e){return e.Default="default",e.Large="large",e.Small="small",e.Smaller="smaller",e}({});function s(e){let{children:t,size:i=r.Default,headingLevel:s=2,hasBottomSpacing:l=!0,isCentered:d}=e;const c=`h${s}`;return o.createElement(c,{className:(0,a.Z)(n.Root,n[`is-size-${i}`],d&&n["is-centered"],l&&n["has-bottom-spacing"])},t)}},45367:(e,t)=>{t.recursiveBuildSidebarData=function e(t){return"items"in t?{type:"category",label:t.label,items:t.items.map(e)}:{type:"doc",label:t.label,id:t.id}}},203:(e,t,i)=>{const{recursiveBuildSidebarData:a}=i(45367),o=[{type:"category",label:"Building User Interfaces",link:{type:"doc",id:"guides/user-interfaces/overview"},items:[{type:"doc",label:"Visual nodes",id:"guides/user-interfaces/basics",imageUrl:"/img/featured-content-images/basic.png",description:"Learn how to to place and edit visual elements using Noodls node model"},{type:"doc",label:"Components",id:"guides/user-interfaces/components",imageUrl:"/img/featured-content-images/basic.png",description:"Learn how to create visual components that are reusable "},{type:"doc",label:"Layout",id:"guides/user-interfaces/layout",imageUrl:"/img/featured-content-images/layout.png",description:"Learn how to create layouts and group content using visual nodes"},{type:"doc",label:"Responsive Design",id:"guides/user-interfaces/responsive-design",imageUrl:"/img/featured-content-images/basic.png",description:"Learn how to to build responsive layouts and components"},{type:"doc",label:"Style Variants",id:"guides/user-interfaces/style-variants",imageUrl:"/img/featured-content-images/layout.png",description:"Learn how to define style variants for visual elements"},{type:"doc",label:"Visual States",id:"guides/user-interfaces/visual-states",imageUrl:"/img/featured-content-images/layout.png",description:"Learn how to style hover, focused, and other visual states on UI elements"},{type:"doc",label:"States Node",id:"guides/user-interfaces/states",imageUrl:"/img/featured-content-images/logic.png",description:"Learn how to use the States node to create UI states, animations and more"},{type:"doc",label:"Scrolling Content",id:"guides/user-interfaces/scrolling-content",imageUrl:"/img/featured-content-images/layout.png",description:"Learn how to set up scrolling containers and pages"},{type:"doc",label:"Modules and Prefabs",id:"guides/user-interfaces/modules",imageUrl:"/img/featured-content-images/basic.png",description:"Get pre-made components, third-party-services, and new capabilities with modules"},{type:"doc",label:"Figma Plugin",id:"guides/user-interfaces/figma-plugin",imageUrl:"/img/featured-content-images/basic.png",description:"Turn designs in Figma into Noodl nodes"}]},{type:"category",label:"Working with data",link:{type:"doc",id:"guides/data/overview"},items:[{type:"doc",label:"Making Connections",id:"guides/data/making-connections",imageUrl:"/img/featured-content-images/logic.png",description:"Learn how to make data connections between nodes."},{type:"doc",label:"Variables",id:"guides/data/variables",imageUrl:"/img/featured-content-images/logic.png",description:"Learn how to store data locally in your app using variables"},{type:"doc",label:"Objects",id:"guides/data/objects",imageUrl:"/img/featured-content-images/logic.png",description:"Learn how to store objects of data locally in your app"},{type:"doc",label:"Arrays",id:"guides/data/arrays",imageUrl:"/img/featured-content-images/list.png",description:"Learn how to store multiple objects of data using arrays"},{type:"doc",label:"Lists Basics",id:"guides/data/list-basics",imageUrl:"/img/featured-content-images/list.png",description:"Learn how to generate lists of UI elements from data"},{type:"doc",label:"UI Controls and data",id:"guides/data/ui-controls-and-data",imageUrl:"/img/featured-content-images/list.png",description:"Learn how connect UI Controls to data nodes to create forms and more"},{type:"doc",label:"External Data",id:"guides/data/external-data",imageUrl:"/img/featured-content-images/data.png",description:"Learn how to work with external data using REST APIs"}]},{type:"category",label:"Navigation",link:{type:"doc",id:"guides/navigation/overview"},items:[{type:"doc",label:"Basic Navigation",id:"guides/navigation/basic-navigation",imageUrl:"/img/featured-content-images/navigation.png",description:"Learn how to create pages and how to navigate between them"},{type:"doc",label:"Multi Level Navigation",id:"guides/navigation/multi-level-navigation",imageUrl:"/img/featured-content-images/navigation.png",description:"Learn how to set up a multi-level-navigation system"},{type:"doc",label:"Encoding Parameters in URLs",id:"guides/navigation/encoding-parameters-in-urls",imageUrl:"/img/featured-content-images/logic.png",description:"Learn how to pass parameters in the URL when navigating between page"},{type:"doc",label:"Popups",id:"guides/navigation/popups",imageUrl:"/img/featured-content-images/navigation.png",description:"Learn how to display popups on user interactions"},{type:"doc",label:"Component Stack",id:"guides/navigation/component-stack",imageUrl:"/img/featured-content-images/navigation.png",description:"Learn how to create a wizard flow using a Component Stack"}]},{type:"category",label:"Working with cloud data",link:{type:"doc",id:"guides/cloud-data/overview"},items:[{type:"doc",label:"Creating a cloud service",id:"guides/cloud-data/creating-a-backend",imageUrl:"/img/featured-content-images/data.png",description:"Learn how to set up a cloud service for your App, to store and read persistant data"},{type:"doc",label:"Creating a class",id:"guides/cloud-data/creating-a-class",imageUrl:"/img/featured-content-images/data.png",description:"Learn how to create a class for storing data records in a cloud service."},{type:"doc",label:"Creating new database records",id:"guides/cloud-data/creating-new-database-records",imageUrl:"/img/featured-content-images/data.png",description:"Learn how to store a data Record in a cloud service."},{type:"doc",label:"Quering records from a database",id:"guides/cloud-data/quering-records-from-database",imageUrl:"/img/featured-content-images/data.png",description:"Learn how to query record from a database to your app"},{type:"doc",label:"Updating records",id:"guides/cloud-data/updating-records",imageUrl:"/img/featured-content-images/data.png",description:"Learn how to update existing records in a database"},{type:"doc",label:"Filter database queries",id:"guides/cloud-data/filtering-database-queries",imageUrl:"/img/featured-content-images/data.png",description:"Learn how to filter database queries"},{type:"doc",label:"Record relations",id:"guides/cloud-data/record-relations",imageUrl:"/img/featured-content-images/data.png",description:"Learn how to create relations between records in a database"},{type:"doc",label:"Access Control",id:"guides/cloud-data/access-control",imageUrl:"/img/featured-content-images/data.png",description:"learn how to limit access control to records to certain users."},{type:"doc",label:"Importing and exporting data",id:"guides/cloud-data/import-export-csv",imageUrl:"/img/featured-content-images/data.png",description:"learn how to import and export data to/from your cloud services database."}]},{type:"category",label:"Visualizing Data",link:{type:"doc",id:"guides/visualizing-data/overview"},items:[{type:"doc",label:"Using the Table component to visualize data",id:"guides/visualizing-data/table-to-visualize-data",imageUrl:"/img/featured-content-images/data.png",description:"Learn how to use the Table node and Query Records to display data in a table."},{type:"doc",label:"Adding pagination to the Table component",id:"guides/visualizing-data/table-pagination",imageUrl:"/img/featured-content-images/data.png",description:"Learn how to use the Pages And Rows component to paginate the data in your Table."},{type:"doc",label:"Filter your Table data",id:"guides/visualizing-data/filter-table-data",imageUrl:"/img/featured-content-images/data.png",description:"Learn how to use the Filter prefab to filter out data from a Query Node and display it in a Table."},{type:"doc",label:"Styling the Table",id:"guides/visualizing-data/styling-table",imageUrl:"/img/featured-content-images/data.png",description:"Learn how to make style changes to the Table prefab."}]},{type:"category",label:"Building business logic",link:{type:"doc",id:"guides/business-logic/overview"},items:[{type:"doc",label:"Client Side Business Logic with Nodes",id:"guides/business-logic/client-side-biz-logic-nodes",imageUrl:"/img/featured-content-images/logic.png",description:"Learn how to work with logic nodes for your frontend"},{type:"doc",label:"Javascript in Noodl",id:"guides/business-logic/javascript",imageUrl:"/img/featured-content-images/code.png",description:"Learn how to use Javascript in Noodl and combine nodes with code"},{type:"doc",label:"Client Side Business Logic with Javascript",id:"guides/business-logic/client-side-biz-logic-js",imageUrl:"/img/featured-content-images/code.png",description:"Learn how to use Javascript for custom logic"},{type:"doc",label:"Custom UI Components",id:"guides/business-logic/custom-ui-components",imageUrl:"/img/featured-content-images/list.png",description:"Learn how to create your own re-usable components"},{type:"doc",label:"Events",id:"guides/business-logic/events",imageUrl:"/img/featured-content-images/logic.png",description:"Learn how to work with events in Noodl"}]},{type:"category",label:"User Management",link:{type:"doc",id:"guides/user-management/overview"},items:[{type:"doc",label:"Creating users in Noodl",id:"guides/user-management/creating-users-in-noodl",imageUrl:"/",description:"Learn how to create user accounts in your app"}]},{type:"category",label:"Cloud Functions",link:{type:"doc",id:"guides/cloud-logic/overview"},items:[{type:"doc",label:"Introduction",id:"guides/cloud-logic/introduction",imageUrl:"/img/featured-content-images/logic.png",description:"Start learning how to build logic that runs in the cloud."},{type:"doc",label:"Email Verification",id:"guides/cloud-logic/email-verification",imageUrl:"/img/featured-content-images/data.png",description:"Learn how create signup flows and more."},{type:"doc",label:"Scheduled Jobs",id:"guides/cloud-logic/scheduled-jobs",imageUrl:"/img/featured-content-images/logic.png",description:"How to do scheduled jobs using cloud functions."},{type:"doc",label:"Logging and Debugging",id:"guides/cloud-logic/logging",imageUrl:"/img/featured-content-images/logic.png",description:"How to log and debug your cloud functions."},{type:"doc",label:"Javascript",id:"guides/cloud-logic/javascript",imageUrl:"/img/featured-content-images/logic.png",description:"How to write Javascript in cloud functions."}]},{type:"category",label:"Collaboration",link:{type:"doc",id:"guides/collaboration/overview"},items:[{type:"doc",label:"Version Control",id:"guides/collaboration/version-control",imageUrl:"/img/featured-content-images/basic.png",description:"Learn how to use Noodls powerful version control features based on Git"}]},{type:"category",label:"Deploying and hosting apps",link:{type:"doc",id:"guides/deploy/overview"},items:[{type:"doc",label:"Sandbox Deploy",id:"guides/deploy/deploying-an-app-on-sandbox",imageUrl:"/img/featured-content-images/hosting.png",description:"Learn how to deploy your app to a Noodl sandbox domain"},{type:"doc",label:"Deploying to custom domains",id:"guides/deploy/deploying-to-custom-domain",imageUrl:"/img/featured-content-images/hosting.png",description:"Learn how to deploy your app to custom domains "},{type:"doc",label:"Using a self hosted cloud service",id:"guides/deploy/using-an-external-backend",imageUrl:"/img/featured-content-images/data.png",description:"Learn how to create a self hosted cloud service through a Docker Container"},{type:"doc",label:"Deploying to iOS and Android",id:"guides/deploy/deploying-to-ios-and-android",imageUrl:"/img/featured-content-images/hosting.png",description:"Learn how to deploy your project as a native app"},{type:"doc",label:"Self hosting your Noodl Frontend",id:"guides/deploy/hosting-frontend",imageUrl:"/img/featured-content-images/hosting.png",description:"Learn how to deploy your project to a local folder for Self Hosting"}]}];function n(e){return"items"in e?{key:e.label,title:e.label,items:e.items.map(n)}:{key:e.label,title:e.label,description:e.description,href:"/docs/"+e.id,imageUrl:e.imageUrl}}t.D=function(){return o.map(n)}},61435:(e,t,i)=>{"use strict";i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>g});var a=i(87462),o=(i(67294),i(3905)),n=i(25492),r=i(34994);const s={title:"Learn",hide_title:!0},l="Happy to see you here!",d={unversionedId:"learn",id:"learn",title:"Learn",description:"Noodl is a low code web app builder that will have you creating applications faster and smarter. It's a visual development environment that you don't need any previous coding skills to start learning. It's also great for developers who already know how to code as you can easily mix in JavaScript when appropriate.",source:"@site/docs/learn.mdx",sourceDirName:".",slug:"/learn",permalink:"/2.9/docs/learn",draft:!1,tags:[],version:"current",frontMatter:{title:"Learn",hide_title:!0},sidebar:"docsSidebar",next:{title:"How Noodl works",permalink:"/2.9/docs/getting-started/overview"}},c={},g=[],u={toc:g},m="wrapper";function p(e){let{components:t,...i}=e;return(0,o.kt)(m,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"happy-to-see-you-here"},"Happy to see you here!"),(0,o.kt)("p",null,"Noodl is a low code web app builder that will have you creating applications faster and smarter. It's a visual development environment that you don't need any previous coding skills to start learning. It's also great for developers who already know how to code as you can easily mix in JavaScript when appropriate."),(0,o.kt)(n.O,{title:"All guides",hasNoLink:!0,mdxType:"GuideListing"}),(0,o.kt)(r.B,{title:"All videos",hasNoLink:!0,mdxType:"VideoListing"}))}p.isMDXComponent=!0}}]);