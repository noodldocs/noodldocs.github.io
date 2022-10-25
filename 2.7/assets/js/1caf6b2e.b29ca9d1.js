"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[2739],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return u}});var i=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,i,a=function(e,r){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),c=function(e){var r=i.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},d=function(e){var r=c(e.components);return i.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},m=i.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,b=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return t?i.createElement(b,n(n({ref:r},d),{},{components:t})):i.createElement(b,n({ref:r},d))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,n=new Array(o);n[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,n[1]=l;for(var c=2;c<o;c++)n[c]=t[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81249:function(e,r,t){t.r(r),t.d(r,{assets:function(){return m},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var i=t(83117),a=t(80102),o=(t(67294),t(3905)),n=t(74980),l=t(20196),s=["components"],c={title:"Library Overview",hide_title:!0},d=void 0,p={unversionedId:"overview",id:"overview",title:"Library Overview",description:"",source:"@site/library/overview.mdx",sourceDirName:".",slug:"/overview",permalink:"/2.7/library/overview",tags:[],version:"current",frontMatter:{title:"Library Overview",hide_title:!0},sidebar:"librarySidebar",next:{title:"All prefabs",permalink:"/2.7/library/prefabs/overview"}},m={},u=[{value:"Prefabs",id:"prefabs",level:2},{value:"Modules",id:"modules",level:2}],b={toc:u};function g(e){var r=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},b,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"library-overview"},"Library overview"),(0,o.kt)("p",null,"Noodl has a lot of nodes available out of the box, but it can never include a node for everything. For that reason you can extend your project with specific modules or prefabs containing nodes and components to capture specfic functionality or UI controls."),(0,o.kt)("p",null,"The main difference between ",(0,o.kt)("strong",{parentName:"p"},"Modules")," and ",(0,o.kt)("strong",{parentName:"p"},"Prefabs")," is that modules install new nodes to the editor, while prefabs clones components built with the core nodes, and stores them as if you created them yourself. Prefabs can be imported as many times as you want, and each clone can be modified how you see fit."),(0,o.kt)("h2",{id:"prefabs"},"Prefabs"),(0,o.kt)("p",null,"Noodl's library of prefabs is optimized for quickly building great data rich applications. Use them as is, or make them your own by customizing their internal building blocks."),(0,o.kt)(l.Y,{title:"Popular prefabs",isFeaturedOnly:!0,mdxType:"PrefabListing"}),(0,o.kt)("h2",{id:"modules"},"Modules"),(0,o.kt)("p",null,"Modules extend your project in some way, most commonly by adding new ",(0,o.kt)("strong",{parentName:"p"},"core nodes")," to your project. These nodes are added to the Node Picker and work like any other core node in Noodl."),(0,o.kt)(n.I,{title:"Popular modules",isFeaturedOnly:!0,mdxType:"ModuleListing"}))}g.isMDXComponent=!0},74980:function(e,r,t){t.d(r,{I:function(){return d}});var i=t(67294),a=t(34690),o=t(69433),n=JSON.parse('[{"label":"PDF Viewer","desc":"A UI component for rendering PDFs from an URL.","icon":"library/modules/pdf-viewer/pdf-viewer.png","project":"library/modules/pdf-viewer/pdf-viewer-1.0.0.zip","docs":"/library/modules/pdf-viewer/","tags":["UI"]},{"label":"Mapbox","desc":"Use this module to add maps and location visualisations to your app.","icon":"library/modules/mapbox/mapbox.png","project":"library/modules/mapbox/mapbox-1-7-2.zip","docs":"/library/modules/mapbox/","tags":["UI","Service"]},{"label":"Chart.js","desc":"A module with components to build charts.","icon":"library/modules/chartjs/chartjs.png","project":"library/modules/chartjs/chartjs-module-1-1-0.zip","docs":"/library/modules/chartjs/","tags":["UI"]},{"label":"Google Sheets","desc":"Use your google sheets as a data source for your applications.","icon":"library/modules/gsheets/googlesheet.png","project":"library/modules/gsheets/gsheets-1-7.zip","docs":"/library/modules/gsheets/","tags":["Service","Data"]},{"label":"GraphQL","desc":"A module to help quering data using GraphQL.","project":"library/modules/graphql/graphql-module-1-0-1.zip","icon":"library/modules/graphql/graphql.png","docs":"/library/modules/graphql/","tags":["Data","Networking"]},{"label":"QR Scanner","desc":"Scan QR codes from camera or images.","icon":"library/modules/qr-scanner/qr.png","project":"library/modules/qr-scanner/qr-scanner-1-4.zip","docs":"/library/modules/qr-scanner/","tags":["Device"]},{"label":"Custom HTML","desc":"Write your own HTML and pass values to it with template strings. Useful for embeds.","project":"library/modules/custom-html/custom-html-module-1-0-2.zip","icon":"library/modules/custom-html/html.png","docs":"/library/modules/custom-html/","tags":["UI","Code"]},{"label":"Form Validation","desc":"A utility node that makes different kind of form validation easier.","project":"library/modules/validation/validation-1-3.zip","icon":"library/modules/validation/formvalidation.png","docs":"/library/modules/validation/","tags":["Data","Utility"]},{"label":"Markdown","desc":"Use Markdown in Noodl and style it with CSS.","project":"library/modules/markdown/noodl-markdown-1-0-1.zip","icon":"library/modules/markdown/markdown.png","docs":"/library/modules/markdown/","tags":["Code"]},{"label":"Avatar","desc":"A module with components to build avatars.","icon":"library/modules/avatar/avatars.png","project":"library/modules/avatar/avatar-module-1-0-1.zip","docs":"/library/modules/avatar/","tags":["UI"]},{"label":"Image Cropper","desc":"Image Cropper Module. Mainly intended for cropping profile pictures.","icon":"library/modules/image-cropper/image-crop.png","project":"library/modules/image-cropper/image-cropper-1-4.zip","docs":"/library/modules/image-cropper/","tags":["UI","Utility"]},{"label":"Panning and Zooming Control","desc":"A control that implements a pan and zoom view on large images.","icon":"library/modules/panning-and-zooming/panning-and-zooming.png","project":"library/modules/panning-and-zooming/panning-and-zoom-1-0.zip","docs":"/library/modules/panning-and-zooming/","tags":["UI","Utility"]},{"label":"i18next Translation","desc":"A module for using i18next in Noodl.","project":"library/modules/i18next/i18next-1-0-3.zip","icon":"library/modules/i18next/translate.png","docs":"/library/modules/i18next/","tags":["Data","Utility"]},{"label":"MQTT Module","desc":"Send and receive messages over the MQTT protocol in web apps.","project":"library/modules/mqtt/mqtt-module-1-0-3.zip","icon":"library/modules/mqtt/mqtt.png","docs":"/library/modules/mqtt/","tags":["Device","Networking"]},{"label":"Shake Detector","desc":"A small module to detect a device shake with the accelerometer.","icon":"library/modules/shake-detector/shake-detector.png","project":"library/modules/shake-detector/shake-detector-1.0.2.zip","docs":"/library/modules/shake-detector/","tags":["Device"]},{"label":"Google Analytics","desc":"Track user behavior with Google Analytics.","project":"library/modules/google-analytics/google-analytics-1-0-7.zip","icon":"library/modules/google-analytics/googleanalytics.png","docs":"/library/modules/google-analytics/","tags":["Service","Analytics"]},{"label":"Lottie","desc":"A module for using Lottie animations in Noodl.","project":"library/modules/lottie/lottie-1-0-1.zip","icon":"library/modules/lottie/lottie.png","docs":"/library/modules/lottie/","tags":["UI","Animation"]},{"label":"Web Camera","desc":"Support for accessing the camera in web apps.","icon":"library/modules/webcamera/webcam.png","project":"library/modules/webcamera/webcamera-1-0-4.zip","docs":"/library/modules/webcamera/","tags":["Device"]},{"label":"Stripe Checkout","desc":"Stripe Checkout for your web apps.","project":"library/modules/stripe-checkout/stripe-checkout-1-0-0.zip","icon":"library/modules/stripe-checkout/stripe_checkout.png","docs":"/library/modules/stripe-checkout/","tags":["Service"]}]'),l=JSON.parse('["Lottie","Mapbox","Chart.js","GraphQL","QR Scanner","MQTT Module"]'),s=t(13080),c=l.map((function(e){return n.find((function(r){return r.label===e}))}));function d(e){var r=e.title,t=e.hasNoLink,l=e.isFeaturedOnly?c:n;return i.createElement(a.$,{title:r,linkHref:t?void 0:"/library/modules/overview",linkLabel:!t&&"View all"},i.createElement(o.r,{layout:o.M.Thirds,hasEqualHeightItems:!0},l.map((function(e){return e?i.createElement(s.O,{key:e.label,title:e.label,description:e.desc,readMoreUrl:e.docs,thumbUrl:e.icon,importArgs:{path:e.project,options:{thumb:e.icon,name:e.label}}}):null}))))}},20196:function(e,r,t){t.d(r,{Y:function(){return d}});var i=t(67294),a=t(34690),o=t(69433),n=JSON.parse('[{"label":"Date Picker","desc":"A date picker component.","icon":"library/prefabs/date-picker/date-picker.png","project":"library/prefabs/date-picker/date-picker-1-0.zip","docs":"/library/prefabs/date-picker/","tags":["UI"]},{"label":"Time Picker","desc":"A time picker component.","icon":"library/prefabs/time-picker/time-picker.png","project":"library/prefabs/time-picker/time-picker-1-0.zip","docs":"/library/prefabs/time-picker/","tags":["UI"]},{"label":"Multi Choice with Pills","desc":"A multi select drop down, showing the selected items as pills.","icon":"library/prefabs/multi-choice-with-pills/multi-choice-with-pills.png","project":"library/prefabs/multi-choice-with-pills/multi-choice-with-pills-0-7.zip","docs":"/library/prefabs/multi-choice-with-pills/","tags":["UI"]},{"label":"Multi Choice","desc":"A component that allows for multi selection in a group of checkboxes.","icon":"library/prefabs/multi-choice/multi-choice.png","project":"library/prefabs/multi-choice/multi-choice-0-5.zip","docs":"/library/prefabs/multi-choice/","tags":["UI"]},{"label":"Table","desc":"Component for creating tables from data.","icon":"library/prefabs/table/table.png","project":"library/prefabs/table/table-0-3.zip","docs":"/library/prefabs/table/","tags":["UI","Data"]},{"label":"Form","desc":"Component for creating dynamic forms.","icon":"library/prefabs/form/form.png","project":"library/prefabs/form/form-0-1.zip","docs":"/library/prefabs/form/","tags":["UI","Data"]},{"label":"List With Icons","desc":"A simple list component with icons and labels.","icon":"library/prefabs/list-with-icons/list-with-icons.png","project":"library/prefabs/list-with-icons/list-with-icons-1-0.zip","docs":"/library/prefabs/list-with-icons/","tags":["UI"]},{"label":"Navigation Menu","desc":"Component for creating navigation menus.","icon":"library/prefabs/navigation-menu/navigation-menu.png","project":"library/prefabs/navigation-menu/navigation-menu-0-1.zip","docs":"/library/prefabs/navigation-menu/","tags":["UI"]},{"label":"Media Query","desc":"Contains a handy component to create responsive interfaces.","icon":"library/prefabs/media-query/media-query.png","project":"library/prefabs/media-query/media-query-project.zip","docs":"/library/prefabs/media-query/","tags":["UI","Utility"]},{"label":"Progress Circle","desc":"Contains an animating progress visualization in percentage.","icon":"library/prefabs/progress-circle/progress-circle.png","project":"library/prefabs/progress-circle/progress-cicle-0-1.zip","docs":"/library/prefabs/progress-circle/","tags":["UI"]},{"label":"Popup Modal","desc":"Contains a classic popup modal for simple confirm popups.","icon":"library/prefabs/modal/modal.png","project":"library/prefabs/modal/modal-0-1.zip","docs":"/library/prefabs/modal/","tags":["UI"]},{"label":"Toast","desc":"Contains Toast messages for success, warnings, errors, and neutral.","icon":"library/prefabs/toast/toast.png","project":"library/prefabs/toast/toast-0-1.zip","docs":"/library/prefabs/toast/","tags":["UI"]},{"label":"Toggle Switch","desc":"A toggle switch UI component.","icon":"library/prefabs/toggle/toggle.png","project":"library/prefabs/toggle/toggle-0-1.zip","docs":"/library/prefabs/toggle/","tags":["UI"]}]'),l=JSON.parse('["Date Picker","Time Picker","Multi Choice","Table","Form","Navigation Menu"]'),s=t(13080),c=l.map((function(e){return n.find((function(r){return r.label===e}))}));function d(e){var r=e.title,t=e.hasNoLink,l=e.isFeaturedOnly?c:n;return i.createElement(a.$,{title:r,linkHref:t?void 0:"/library/prefabs/overview",linkLabel:!t&&"View all"},i.createElement(o.r,{layout:o.M.Thirds,hasEqualHeightItems:!0},l.map((function(e){return e?i.createElement(s.O,{key:e.label,title:e.label,description:e.desc,readMoreUrl:e.docs,thumbUrl:e.icon,importArgs:{path:e.project,options:{thumb:e.icon,name:e.label}}}):null}))))}},12336:function(e,r,t){t.d(r,{T:function(){return p},B:function(){return i}});var i,a=t(52263),o=t(72389),n=t(86010),l=t(67294),s=t(46400),c=t(32830),d={Root:"Root_FlAi","is-horisontal":"is-horisontal_bpe6","is-vertical":"is-vertical_DK4a",ImageContainer:"ImageContainer_VFbT",Image:"Image_I7Nz","has-no-padding":"has-no-padding_PmFk",Content:"Content_ViNB",PrimaryAction:"PrimaryAction_aNNZ",SecondaryAction:"SecondaryAction_RhgK"};function p(e){var r=e.layout,t=void 0===r?i.Vertical:r,p=e.title,m=e.description,u=e.hasNoPaddingInThumb,b=e.primaryAction,g=e.secondaryAction,f=e.imageUrl,y=(0,a.Z)().siteConfig,h=(0,o.Z)(),v=(0,l.useMemo)((function(){return h?location.protocol+"//"+location.host+y.baseUrl+f:null}),[h]);return l.createElement("article",{className:(0,n.Z)(d.Root,d[t])},l.createElement("div",{className:d.ImageContainer},v&&l.createElement("div",{className:(0,n.Z)(d.Image,u&&d["has-no-padding"]),style:{backgroundImage:"url("+v+")"}})),l.createElement("div",{className:d.Content},l.createElement("div",null,l.createElement("header",null,l.createElement(c.D,{size:c.J.Smaller,headingLevel:1},p)),l.createElement(s.x,{size:s.y.Small},m)),l.createElement("footer",{className:d.Footer},Boolean(b)&&l.createElement("a",{className:d.PrimaryAction,href:b.href,onClick:b.onClick},l.createElement(s.x,{size:s.y.Small,isSpan:!0},b.label)),Boolean(g)&&l.createElement("a",{className:d.SecondaryAction,href:g.href,onClick:g.onClick},l.createElement(s.x,{size:s.y.Small,isSpan:!0},g.label)))))}!function(e){e.Horisontal="is-horisontal",e.Vertical="is-vertical"}(i||(i={}))},13080:function(e,r,t){t.d(r,{O:function(){return n}});var i=t(52263),a=t(67294),o=t(12336);function n(e){var r=e.thumbUrl,t=e.title,n=e.description,l=e.readMoreUrl,s=(e.importArgs,(0,i.Z)().siteConfig);return a.createElement(o.T,{title:t,description:n,hasNoPaddingInThumb:!0,imageUrl:r,layout:o.B.Vertical,primaryAction:{label:"Read more",href:s.baseUrl.slice(0,-1)+l}})}},69433:function(e,r,t){t.d(r,{r:function(){return l},M:function(){return i}});var i,a=t(86010),o=t(67294),n={Root:"Root_Io4z","has-equal-height-items":"has-equal-height-items_Bfk5",GridItem:"GridItem_h6LT","is-grid-half":"is-grid-half_bkCe","is-grid-thirds":"is-grid-thirds_bUuo","is-grid-fifths":"is-grid-fifths_gZxO","is-grid-2-1-1":"is-grid-2-1-1_WJjM","is-grid-2-3":"is-grid-2-3_GVgU"};function l(e){var r=e.layout,t=e.children,i=e.hasEqualHeightItems,l=(0,o.useMemo)((function(){return Array.isArray(t)?t:[t]}),[t]);return o.createElement("div",{className:(0,a.Z)(n.Root,n[r],i&&n["has-equal-height-items"])},l.map((function(e,r){return null===e?null:o.createElement("div",{key:r,className:n.GridItem},e)})))}!function(e){e.Half="is-grid-half",e.Thirds="is-grid-thirds",e.Fifths="is-grid-fifths",e.Grid_2_1_1="is-grid-2-1-1",e.Grid_2_3="is-grid-2-3"}(i||(i={}))},34690:function(e,r,t){t.d(r,{$:function(){return l}});var i=t(39960),a=t(67294),o=t(32830),n={Link:"Link_m_Qv",Root:"Root_RbPk",Header:"Header_lGMo"};function l(e){var r=e.title,t=e.titleSize,l=e.linkLabel,s=void 0===l?"View all":l,c=e.linkHref,d=e.children,p=e.hasNoHeader;return a.createElement("section",{className:n.Root},!p&&a.createElement("div",{className:n.Header},a.createElement(o.D,{size:t},r),Boolean(s)&&a.createElement(i.Z,{className:n.Link,href:c},s)),a.createElement("div",{className:n.Content},d))}},46400:function(e,r,t){t.d(r,{x:function(){return l},y:function(){return i}});var i,a=t(86010),o=t(67294),n={Root:"Root_Wy7x","is-size-default":"is-size-default_pSmj","is-size-small":"is-size-small_M5O6","has-bottom-spacing":"has-bottom-spacing_OpxG","is-inline":"is-inline_xE6B","is-centered":"is-centered_i4nY"};function l(e){var r=e.children,t=e.size,l=void 0===t?i.Default:t,s=e.style,c=e.className,d=e.hasBottomSpacing,p=void 0===d||d,m=e.isSpan,u=e.isCentered,b=m?"span":"p";return o.createElement(b,{className:(0,a.Z)(n.Root,n["is-size-"+l],m&&n["is-inline"],u&&n["is-centered"],p&&n["has-bottom-spacing"],c),style:s},r)}!function(e){e.Default="default",e.Small="small"}(i||(i={}))},32830:function(e,r,t){t.d(r,{D:function(){return l},J:function(){return i}});var i,a=t(86010),o=t(67294),n={Root:"Root_TxX9","is-size-default":"is-size-default_rXPJ","is-size-large":"is-size-large_kGki","is-size-small":"is-size-small_VhtV","is-size-smaller":"is-size-smaller_EhWW","has-bottom-spacing":"has-bottom-spacing_Lfds","is-centered":"is-centered_d8Sd"};function l(e){var r=e.children,t=e.size,l=void 0===t?i.Default:t,s=e.headingLevel,c=void 0===s?2:s,d=e.hasBottomSpacing,p=void 0===d||d,m=e.isCentered,u="h"+c;return o.createElement(u,{className:(0,a.Z)(n.Root,n["is-size-"+l],m&&n["is-centered"],p&&n["has-bottom-spacing"])},r)}!function(e){e.Default="default",e.Large="large",e.Small="small",e.Smaller="smaller"}(i||(i={}))}}]);