(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[9974],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return c},kt:function(){return m}});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var d=n.createContext({}),s=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=s(o),m=i,b=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return o?n.createElement(b,l(l({ref:t},c),{},{components:o})):n.createElement(b,l({ref:t},c))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,l=new Array(a);l[0]=u;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var s=2;s<a;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},3511:function(e,t,o){"use strict";o.r(t),o.d(t,{assets:function(){return C},contentTitle:function(){return w},default:function(){return O},frontMatter:function(){return T},metadata:function(){return k},toc:function(){return E}});var n,i=o(83117),a=o(80102),l=o(67294),r=o(3905),d=o(34690),s=o(46400),c=o(69433),p=o(39960),u=o(86010),m={Root:"Root_i8xM","has-hoverstate":"has-hoverstate_sckd","is-visual":"is-visual_Aaqo","is-data":"is-data_gzLh","is-custom":"is-custom_S8jO","is-logic":"is-logic_ngRY","is-connection":"is-connection_GfGX"};function b(e){var t=e.nodeType,o=e.label,n=e.docUrl,i=n?p.Z:"div";return l.createElement(i,{className:(0,u.Z)(m.Root,m[t],Boolean(n)&&m["has-hoverstate"]),to:n},o)}!function(e){e.Visual="is-visual",e.Data="is-data",e.Custom="is-custom",e.Logic="is-logic",e.Connection="is-connection"}(n||(n={}));var y=o(7931);function f(e){return"title"in e?l.createElement(d.$,{key:e.key,title:e.title,linkLabel:!1},e.description&&l.createElement(s.x,null,l.createElement("span",{dangerouslySetInnerHTML:{__html:e.description}})),l.createElement(c.r,{layout:c.M.Fifths},e.items.map(f))):l.createElement(b,e)}function g(){return l.createElement("div",null,(0,y.q)().map(f))}function v(e){var t=e.text;return l.createElement(d.$,{title:"Node colors",linkLabel:null},l.createElement(c.r,{layout:c.M.Grid_2_3},l.createElement(s.x,null,t),l.createElement("div",null,l.createElement(c.r,{layout:c.M.Thirds},l.createElement(b,{label:"Visual nodes",nodeType:n.Visual}),l.createElement(b,{label:"Data nodes",nodeType:n.Data}),l.createElement(b,{label:"Custom code nodes",nodeType:n.Custom}),l.createElement(b,{label:"Logic nodes",nodeType:n.Logic}),l.createElement(b,{label:"Connection nodes",nodeType:n.Connection})))))}var h=["components"],T={id:"overview",title:"Overview",hide_title:!0,hide_table_of_contents:!0},w=void 0,k={unversionedId:"overview",id:"overview",title:"Overview",description:"",source:"@site/nodes/overview.mdx",sourceDirName:".",slug:"/overview",permalink:"/2.9/nodes/overview",tags:[],version:"current",frontMatter:{id:"overview",title:"Overview",hide_title:!0,hide_table_of_contents:!0},sidebar:"nodeSidebar",next:{title:"Group",permalink:"/2.9/nodes/basic-elements/group"}},C={},E=[],_={toc:E};function O(e){var t=e.components,o=(0,a.Z)(e,h);return(0,r.kt)("wrapper",(0,i.Z)({},_,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"node-reference"},"Node Reference"),(0,r.kt)("p",null,"The main building blocks of Noodl are nodes. Every node has its own specific purpose and is very simple in itself, but together they become really powerful. Here you will find an overview of all Core Nodes, their type and category."),(0,r.kt)("p",null,"Noodl can also be extended with Modules that give you more nodes to build with. Check out the ",(0,r.kt)("a",{parentName:"p",href:"/library/modules/overview"},"Module library")," for the ones that already exist, or the ",(0,r.kt)("a",{parentName:"p",href:"/javascript/extending/overview"},"Extending Noodl section")," to learn how to develop your own."),(0,r.kt)("div",{className:"spacer",style:{paddingBottom:"80px"}}),(0,r.kt)(v,{text:"All the nodes in Noodl are color coded to make it easier to visually navigate the Node Canvas.",mdxType:"NodeColorGuide"}),(0,r.kt)(g,{mdxType:"NodeReferenceListing"}))}O.isMDXComponent=!0},69433:function(e,t,o){"use strict";o.d(t,{r:function(){return r},M:function(){return n}});var n,i=o(86010),a=o(67294),l={Root:"Root_Io4z","has-equal-height-items":"has-equal-height-items_Bfk5",GridItem:"GridItem_h6LT","is-grid-half":"is-grid-half_bkCe","is-grid-thirds":"is-grid-thirds_bUuo","is-grid-fifths":"is-grid-fifths_gZxO","is-grid-2-1-1":"is-grid-2-1-1_WJjM","is-grid-2-3":"is-grid-2-3_GVgU"};function r(e){var t=e.layout,o=e.children,n=e.hasEqualHeightItems,r=(0,a.useMemo)((function(){return Array.isArray(o)?o:[o]}),[o]);return a.createElement("div",{className:(0,i.Z)(l.Root,l[t],n&&l["has-equal-height-items"])},r.map((function(e,t){return null===e?null:a.createElement("div",{key:t,className:l.GridItem},e)})))}!function(e){e.Half="is-grid-half",e.Thirds="is-grid-thirds",e.Fifths="is-grid-fifths",e.Grid_2_1_1="is-grid-2-1-1",e.Grid_2_3="is-grid-2-3"}(n||(n={}))},34690:function(e,t,o){"use strict";o.d(t,{$:function(){return r}});var n=o(39960),i=o(67294),a=o(32830),l={Link:"Link_m_Qv",Root:"Root_RbPk",Header:"Header_lGMo"};function r(e){var t=e.title,o=e.titleSize,r=e.linkLabel,d=void 0===r?"View all":r,s=e.linkHref,c=e.children,p=e.hasNoHeader;return i.createElement("section",{className:l.Root},!p&&i.createElement("div",{className:l.Header},i.createElement(a.D,{size:o},t),Boolean(d)&&i.createElement(n.Z,{className:l.Link,href:s},d)),i.createElement("div",{className:l.Content},c))}},46400:function(e,t,o){"use strict";o.d(t,{x:function(){return r},y:function(){return n}});var n,i=o(86010),a=o(67294),l={Root:"Root_Wy7x","is-size-default":"is-size-default_pSmj","is-size-small":"is-size-small_M5O6","has-bottom-spacing":"has-bottom-spacing_OpxG","is-inline":"is-inline_xE6B","is-centered":"is-centered_i4nY"};function r(e){var t=e.children,o=e.size,r=void 0===o?n.Default:o,d=e.style,s=e.className,c=e.hasBottomSpacing,p=void 0===c||c,u=e.isSpan,m=e.isCentered,b=u?"span":"p";return a.createElement(b,{className:(0,i.Z)(l.Root,l["is-size-"+r],u&&l["is-inline"],m&&l["is-centered"],p&&l["has-bottom-spacing"],s),style:d},t)}!function(e){e.Default="default",e.Small="small"}(n||(n={}))},32830:function(e,t,o){"use strict";o.d(t,{D:function(){return r},J:function(){return n}});var n,i=o(86010),a=o(67294),l={Root:"Root_TxX9","is-size-default":"is-size-default_rXPJ","is-size-large":"is-size-large_kGki","is-size-small":"is-size-small_VhtV","is-size-smaller":"is-size-smaller_EhWW","has-bottom-spacing":"has-bottom-spacing_Lfds","is-centered":"is-centered_d8Sd"};function r(e){var t=e.children,o=e.size,r=void 0===o?n.Default:o,d=e.headingLevel,s=void 0===d?2:d,c=e.hasBottomSpacing,p=void 0===c||c,u=e.isCentered,m="h"+s;return a.createElement(m,{className:(0,i.Z)(l.Root,l["is-size-"+r],u&&l["is-centered"],p&&l["has-bottom-spacing"])},t)}!function(e){e.Default="default",e.Large="large",e.Small="small",e.Smaller="smaller"}(n||(n={}))},45367:function(e,t){t.recursiveBuildSidebarData=function e(t){return"items"in t?{type:"category",label:t.label,items:t.items.map(e)}:{type:"doc",label:t.label,id:t.id}}},7931:function(e,t,o){var n=o(45367).recursiveBuildSidebarData,i="is-visual",a="is-data",l="is-custom",r="is-logic",d="is-connection",s=[{label:"UI Elements",description:'These nodes make up all of the visuals of your app. Put them in your node tree whenever you want to render an element on the screen. These nodes also support <a href="/2.7/docs/guides/user-interfaces/style-variants">Variants</a> and <a href="/2.7/docs/guides/user-interfaces/visual-states">States</a>.',items:[{label:"Basic Elements",items:[{label:"Group",id:"basic-elements/group",nodeType:i},{label:"Columns",id:"basic-elements/columns",nodeType:i},{label:"Text",id:"basic-elements/text",nodeType:i},{label:"Image",id:"basic-elements/image",nodeType:i},{label:"Video",id:"basic-elements/video",nodeType:i},{label:"Circle",id:"basic-elements/circle",nodeType:i},{label:"Icon",id:"basic-elements/icon",nodeType:i}]},{label:"UI Controls",items:[{label:"Button",id:"ui-controls/button",nodeType:i},{label:"Checkbox",id:"ui-controls/checkbox",nodeType:i},{label:"Dropdown",id:"ui-controls/dropdown",nodeType:i},{label:"Radio Button",id:"ui-controls/radio-button",nodeType:i},{label:"Radio Button Group",id:"ui-controls/radio-button-group",nodeType:i},{label:"Slider",id:"ui-controls/slider",nodeType:i},{label:"Text Input",id:"ui-controls/text-input",nodeType:i}]}]},{label:"Navigation & Popups",description:"These nodes cover all your navigation needs, everyting from URL and hash based navigation to component replacement. You can either use them to reroute the user to a different views or render content on top of the current view in modals.",items:[{label:"Navigation",items:[{label:"Page Router",id:"navigation/page-router",nodeType:i},{label:"Navigate",id:"navigation/navigate",nodeType:r},{label:"Page Inputs",id:"navigation/page-inputs",nodeType:d},{label:"External Link",id:"navigation/external-link",nodeType:r},{label:"Navigate To Path",id:"navigation/navigate-to-path",nodeType:r},{label:"Page",id:"navigation/page",nodeType:i}]},{label:"Component Stack",items:[{label:"Component Stack",id:"component-stack/component-stack-node",nodeType:i},{label:"Push Component To Stack",id:"component-stack/push-component",nodeType:r},{label:"Pop Component Stack",id:"component-stack/pop-component",nodeType:r}]},{label:"Popups",items:[{label:"Show Popup",id:"popups/show-popup",nodeType:r},{label:"Close Popup",id:"popups/close-popup",nodeType:r}]}]},{label:"Logic & Utilities",description:"Most of the meat in an app comes from logic and data processing. This is your toolbox for working with most logic, data and user interactions, big and small.",items:[{label:"General Utils",items:[{label:"States",id:"utilities/logic/states",nodeType:r},{label:"Value Changed",id:"logic/value-changed",nodeType:r},{label:"Delay",id:"utilities/delay",nodeType:r},{label:"Color Blend",id:"utilities/color-blend",nodeType:r},{label:"Number Remapper",id:"math/number-remapper",nodeType:r},{label:"Counter",id:"math/counter",nodeType:r},{label:"Drag",id:"utilities/drag",nodeType:i},{label:"Animate To Value",id:"logic/animate-to-value",nodeType:r}]},{label:"Logic",items:[{label:"Boolean To String",id:"utilities/boolean-to-string",nodeType:r},{label:"Switch",id:"logic/switch",nodeType:r},{label:"And",id:"logic/and",nodeType:r},{label:"Or",id:"logic/or",nodeType:r},{label:"Condition",id:"utilities/logic/condition",nodeType:r},{label:"Inverter",id:"logic/inverter",nodeType:r}]},{label:"Events",items:[{label:"Send Event",id:"events/send-event",nodeType:d},{label:"Receive Event",id:"events/receive-event",nodeType:d}]},{label:"String Manipulation",items:[{label:"Substring",id:"string-manipulation/substring",nodeType:r},{label:"String Mapper",id:"string-manipulation/string-mapper",nodeType:r},{label:"String Format",id:"string-manipulation/string-format",nodeType:r},{label:"Date To String",id:"utilities/date-to-string",nodeType:r},{label:"Unique Id",id:"utilities/unique-id",nodeType:r}]},{label:"System",items:[{label:"Open File Picker",id:"utilities/open-file-picker",nodeType:r},{label:"Screen Resolution",id:"utilities/screen-resolution",nodeType:r}]},{label:"Variables",items:[{label:"String",id:"data/string",nodeType:r},{label:"Boolean",id:"data/boolean",nodeType:r},{label:"Color",id:"data/color",nodeType:r},{label:"Number",id:"data/number",nodeType:r}]}]},{label:"Component Utilities",description:"One of the core concepts in Noodl is the ability to create your own reusable components. Here are nodes that help you manage how data passes through them.",items:[{label:"Component Inputs",id:"component-utilities/component-inputs",nodeType:d},{label:"Component Outputs",id:"component-utilities/component-outputs",nodeType:d},{label:"Component Children",id:"component-utilities/component-children",nodeType:d},{label:"Component Object",id:"component-utilities/component-object",nodeType:d},{label:"Parent Component Object",id:"component-utilities/parent-component-object",nodeType:d},{label:"Set Component Object Properties",id:"component-utilities/set-component-object-properties",nodeType:d},{label:"Set Parent Component Object Properties",id:"component-utilities/set-parent-component-object-properties",nodeType:d}]},{label:"Read & Write Data",description:"No app is complete without content. These are nodes that help you work with dynamic data defined in the app, a Noodl Cloud Service or from any backend of your choice.",items:[{label:"Variables & Objects",items:[{label:"Repeater",id:"ui-controls/repeater",nodeType:i},{label:"Repeater Item",id:"ui-controls/repeater-item",nodeType:a},{label:"Object",id:"data/object/object-node",nodeType:a},{label:"Set Object Properties",id:"data/object/set-object-properties",nodeType:a},{label:"Create New Object",id:"data/object/create-new-object",nodeType:a},{label:"Set Variable",id:"data/variable/set-variable",nodeType:a},{label:"Variable",id:"data/variable/variable-node",nodeType:a},{label:"Run Tasks",id:"data/run-tasks",nodeType:a}]},{label:"Arrays",items:[{label:"Array",id:"data/array/array-node",nodeType:a},{label:"Create New Array",id:"data/array/create-new-array",nodeType:a},{label:"Remove Object From Array",id:"data/array/remove-from-array",nodeType:a},{label:"Clear Array",id:"data/array/clear-array",nodeType:a},{label:"Insert Object Into Array",id:"data/array/insert-into-array",nodeType:a},{label:"Array Filter",id:"data/array/array-filter",nodeType:a},{label:"Array Map",id:"data/array/array-map",nodeType:a},{label:"Static Array",id:"data/array/static-array",nodeType:a}]},{label:"Cloud Data",items:[{label:"Record",id:"data/cloud-data/record",nodeType:a},{label:"Create New Record",id:"data/cloud-data/create-new-record",nodeType:a},{label:"Filter Records",id:"data/cloud-data/filter-records",nodeType:a},{label:"Set Record Properties",id:"data/cloud-data/set-record-properties",nodeType:a},{label:"Query Records",id:"data/cloud-data/query-records",nodeType:a},{label:"Delete Record",id:"data/cloud-data/delete-record",nodeType:a},{label:"Add Record Relation",id:"data/cloud-data/add-record-relation",nodeType:a},{label:"Remove Record Relation",id:"data/cloud-data/remove-record-relation",nodeType:a},{label:"Cloud File",id:"data/cloud-data/cloud-file",nodeType:a},{label:"Upload File",id:"data/cloud-data/upload-file",nodeType:a},{label:"Cloud Function",id:"data/cloud-data/cloud-function",nodeType:a},{label:"Config",id:"data/cloud-data/config",nodeType:a}]},{label:"User",items:[{label:"Log In",id:"data/user/log-in",nodeType:a},{label:"Log Out",id:"data/user/log-out",nodeType:a},{label:"Sign Up",id:"data/user/sign-up",nodeType:a},{label:"User",id:"data/user/user-node",nodeType:a},{label:"Set User Properties",id:"data/user/set-user-properties",nodeType:a}]},{label:"External Data",items:[{label:"REST",id:"data/rest",nodeType:a}]}]},{label:"Custom Code",description:"Even though most problems can be solved with Noodl's built in base nodes, it's nice to have options for those specific situations that require code. After all, text based coding is quite fun too.",items:[{label:"Expression",id:"math/expression",nodeType:l},{label:"Function",id:"javascript/function",nodeType:l},{label:"Script",id:"javascript/script",nodeType:l},{label:"CSS Definition",id:"utilities/css-definition",nodeType:l}]},{label:"Cloud Functions",items:[{label:"Request",id:"cloud-functions/request",nodeType:a},{label:"Response",id:"cloud-functions/response",nodeType:a},{label:"Cloud Data",items:[{label:"Aggregate Records",id:"cloud-functions/cloud-data/aggregate-records",nodeType:a}]}]}];function c(e){return"items"in e?{title:e.label,description:e.description,items:e.items.map(c),key:e.label}:{label:e.label,docUrl:e.id,nodeType:e.nodeType,key:e.label}}t.q=function(){return s.map(c).map((function(e){var t=e.items.reduce((function(e,t){return[].concat(e,"items"in t?t.items:[t])}),[]);return Object.assign({},e,{items:t})}))}}}]);