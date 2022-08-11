"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[2739],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return p}});var o=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},d=function(e){var r=c(e.components);return o.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),p=a,b=u["".concat(s,".").concat(p)]||u[p]||m[p]||i;return t?o.createElement(b,n(n({ref:r},d),{},{components:t})):o.createElement(b,n({ref:r},d))}));function p(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,n=new Array(i);n[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,n[1]=l;for(var c=2;c<i;c++)n[c]=t[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},81249:function(e,r,t){t.r(r),t.d(r,{assets:function(){return m},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var o=t(83117),a=t(80102),i=(t(67294),t(3905)),n=t(2463),l=["components"],s={title:"Library Overview",hide_title:!0},c=void 0,d={unversionedId:"overview",id:"overview",title:"Library Overview",description:"",source:"@site/library/overview.mdx",sourceDirName:".",slug:"/overview",permalink:"/2.6/library/overview",tags:[],version:"current",frontMatter:{title:"Library Overview",hide_title:!0},sidebar:"librarySidebar",next:{title:"All modules",permalink:"/2.6/library/modules/overview"}},m={},u=[],p={toc:u};function b(e){var r=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"library-overview"},"Library overview"),(0,i.kt)(n.I,{title:"Popular modules",isFeaturedOnly:!0,mdxType:"ModuleListing"}))}b.isMDXComponent=!0},2463:function(e,r,t){t.d(r,{I:function(){return u}});var o=t(67294),a=t(34690),i=t(69433),n=JSON.parse('[{"label":"PDF Viewer","desc":"A UI component for rendering PDFs from an URL.","icon":"library/modules/pdf-viewer/pdf-viewer.png","project":"library/modules/pdf-viewer/pdf-viewer-1.0.0.zip","docs":"/library/modules/pdf-viewer/","tags":["UI"]},{"label":"Rotary Knob","desc":"A rotary knob UI component.","icon":"library/modules/rotary-knob/rotary-knob.png","project":"library/modules/rotary-knob/rotary-knob-1.0.3.zip","docs":"/library/modules/rotary-knob/","tags":["UI"]},{"label":"Shake Detector","desc":"A small module to detect a device shake with the accelerometer.","icon":"library/modules/shake-detector/shake-detector.png","project":"library/modules/shake-detector/shake-detector-1.0.2.zip","docs":"/library/modules/shake-detector/","tags":["Device"]},{"label":"Table","desc":"Basic core nodes to create tables. Example included.","icon":"library/modules/table/table_example.png","project":"library/modules/table/table-example-1-0-0.zip","docs":"/library/modules/table/","tags":["UI","Data"]},{"label":"Avatar","desc":"A module with components to build avatars.","icon":"library/modules/avatar/avatars.png","project":"library/modules/avatar/avatar-module-1-0-1.zip","docs":"/library/modules/avatar/","tags":["UI"]},{"label":"Chart.js","desc":"A module with components to build charts.","icon":"library/modules/chartjs/chartjs.png","project":"library/modules/chartjs/chartjs-module-1-1-0.zip","docs":"/library/modules/chartjs/","tags":["UI"]},{"label":"Media Query","desc":"Contains a handy component to create responsive interfaces.","icon":"library/modules/media-query/media-query.png","project":"library/modules/media-query/media-query-project.zip","docs":"/library/modules/media-query/","tags":["UI","Utility"]},{"label":"Multi Select","desc":"This module contains a few components that will help you make multi select drop downs.","icon":"library/modules/multi-select/multi-select.png","project":"library/modules/multi-select/multi-select-0-5.zip","docs":"/library/modules/multi-select/","tags":["UI"]},{"label":"Checkbox group","desc":"This module contains a few components that will help you make checkbox groups.","icon":"library/modules/checkbox-group/checkbox-group.png","project":"library/modules/checkbox-group/checkbox-group-0-3.zip","docs":"/library/modules/checkbox-group/","tags":["UI","Utility"]},{"label":"Mapbox","desc":"Use this module to add maps and location visualisations to your app.","icon":"library/modules/mapbox/mapbox.png","project":"library/modules/mapbox/mapbox-1-7-2.zip","docs":"/library/modules/mapbox/","tags":["UI","Service"]},{"label":"Google Analytics","desc":"Track user behavior with Google Analytics.","project":"library/modules/google-analytics/google-analytics-1-0-7.zip","icon":"library/modules/google-analytics/googleanalytics.png","docs":"/library/modules/google-analytics/","tags":["Service","Analytics"]},{"label":"Google Sheets","desc":"Use your google sheets as a data source for your applications.","icon":"library/modules/gsheets/googlesheet.png","project":"library/modules/gsheets/gsheets-1-7.zip","docs":"/library/modules/gsheets/","tags":["Service","Data"]},{"label":"GraphQL","desc":"A module to help quering data using GraphQL.","project":"library/modules/graphql/graphql-module-1-0-1.zip","icon":"library/modules/graphql/graphql.png","docs":"/library/modules/graphql/","tags":["Data","Networking"]},{"label":"QR Scanner","desc":"Scan QR codes from camera or images.","icon":"library/modules/qr-scanner/qr.png","project":"library/modules/qr-scanner/qr-scanner-1-4.zip","docs":"/library/modules/qr-scanner/","tags":["Device"]},{"label":"Custom HTML","desc":"Write your own HTML and pass values to it with template strings. Useful for embeds.","project":"library/modules/custom-html/custom-html-module-1-0-2.zip","icon":"library/modules/custom-html/html.png","docs":"/library/modules/custom-html/","tags":["UI","Code"]},{"label":"Form Validation","desc":"A utility node that makes different kind of form validation easier.","project":"library/modules/validation/validation-1-2.zip","icon":"library/modules/validation/formvalidation.png","docs":"/library/modules/validation/","tags":["Data","Utility"]},{"label":"Lottie","desc":"A module for using Lottie animations in Noodl.","project":"library/modules/lottie/lottie-1-0-1.zip","icon":"library/modules/lottie/lottie.png","docs":"/library/modules/lottie/","tags":["UI","Animation"]},{"label":"Markdown","desc":"Use Markdown in Noodl and style it with CSS.","project":"library/modules/markdown/noodl-markdown-1-0-1.zip","icon":"library/modules/markdown/markdown.png","docs":"/library/modules/markdown/","tags":["Code"]},{"label":"MQTT Module","desc":"Send and receive messages over the MQTT protocol in web apps.","project":"library/modules/mqtt/mqtt-module-1-0-3.zip","icon":"library/modules/mqtt/mqtt.png","docs":"/library/modules/mqtt/","tags":["Device","Networking"]},{"label":"Web Camera","desc":"Support for accessing the camera in web apps.","icon":"library/modules/webcamera/webcam.png","project":"library/modules/webcamera/webcamera-1-0-4.zip","docs":"/library/modules/webcamera/","tags":["Device"]},{"label":"Image Cropper","desc":"Image Cropper Module. Mainly intended for cropping profile pictures.","icon":"library/modules/image-cropper/image-crop.png","project":"library/modules/image-cropper/image-cropper-1-4.zip","docs":"/library/modules/image-cropper/","tags":["UI","Utility"]},{"label":"Panning and Zooming Control","desc":"A control that implements a pan and zoom view on large images.","icon":"library/modules/panning-and-zooming/panning-and-zooming.png","project":"library/modules/panning-and-zooming/panning-and-zoom-1-0.zip","docs":"/library/modules/panning-and-zooming/","tags":["UI","Utility"]},{"label":"i18next Translation","desc":"A module for using i18next in Noodl.","project":"library/modules/i18next/i18next-1-0-3.zip","icon":"library/modules/i18next/translate.png","docs":"/library/modules/i18next/","tags":["Data","Utility"]},{"label":"Stripe Checkout","desc":"Stripe Checkout for your web apps.","project":"library/modules/stripe-checkout/stripe-checkout-1-0-0.zip","icon":"library/modules/stripe-checkout/stripe_checkout.png","docs":"/library/modules/stripe-checkout/","tags":["Service"]}]'),l=JSON.parse('["Lottie","Mapbox","Chart.js","GraphQL","QR Scanner","MQTT Module"]'),s=t(52263),c=t(12336);function d(e){var r=e.thumbUrl,t=e.title,a=e.description,i=e.readMoreUrl,n=(e.importArgs,(0,s.Z)().siteConfig);return o.createElement(c.T,{title:t,description:a,hasNoPaddingInThumb:!0,imageUrl:r,layout:c.B.Vertical,primaryAction:{label:"Read more",href:n.baseUrl.slice(0,-1)+i}})}var m=l.map((function(e){return n.find((function(r){return r.label===e}))}));function u(e){var r=e.title,t=e.hasNoLink,l=e.isFeaturedOnly?m:n;return o.createElement(a.$,{title:r,linkHref:t?null:"/library/modules/overview",linkLabel:!t&&"View all"},o.createElement(i.r,{layout:i.M.Thirds,hasEqualHeightItems:!0},l.map((function(e){return o.createElement(d,{key:e.label,title:e.label,description:e.desc,readMoreUrl:e.docs,thumbUrl:e.icon,importArgs:{path:e.project,options:{thumb:e.icon,name:e.label}}})}))))}},12336:function(e,r,t){t.d(r,{T:function(){return m},B:function(){return o}});var o,a=t(52263),i=t(72389),n=t(86010),l=t(67294),s=t(46400),c=t(32830),d={Root:"Root_FlAi","is-horisontal":"is-horisontal_bpe6","is-vertical":"is-vertical_DK4a",ImageContainer:"ImageContainer_VFbT",Image:"Image_I7Nz","has-no-padding":"has-no-padding_PmFk",Content:"Content_ViNB",PrimaryAction:"PrimaryAction_aNNZ",SecondaryAction:"SecondaryAction_RhgK"};function m(e){var r=e.layout,t=void 0===r?o.Vertical:r,m=e.title,u=e.description,p=e.hasNoPaddingInThumb,b=e.primaryAction,g=e.secondaryAction,y=e.imageUrl,h=(0,a.Z)().siteConfig,f=(0,i.Z)(),v=(0,l.useMemo)((function(){return f?location.protocol+"//"+location.host+h.baseUrl+y:null}),[f]);return l.createElement("article",{className:(0,n.Z)(d.Root,d[t])},l.createElement("div",{className:d.ImageContainer},v&&l.createElement("div",{className:(0,n.Z)(d.Image,p&&d["has-no-padding"]),style:{backgroundImage:"url("+v+")"}})),l.createElement("div",{className:d.Content},l.createElement("div",null,l.createElement("header",null,l.createElement(c.D,{size:c.J.Smaller,headingLevel:1},m)),l.createElement(s.x,{size:s.y.Small},u)),l.createElement("footer",{className:d.Footer},Boolean(b)&&l.createElement("a",{className:d.PrimaryAction,href:b.href,onClick:b.onClick},l.createElement(s.x,{size:s.y.Small,isSpan:!0},b.label)),Boolean(g)&&l.createElement("a",{className:d.SecondaryAction,href:g.href,onClick:g.onClick},l.createElement(s.x,{size:s.y.Small,isSpan:!0},g.label)))))}!function(e){e.Horisontal="is-horisontal",e.Vertical="is-vertical"}(o||(o={}))},69433:function(e,r,t){t.d(r,{r:function(){return l},M:function(){return o}});var o,a=t(86010),i=t(67294),n={Root:"Root_Io4z","has-equal-height-items":"has-equal-height-items_Bfk5",GridItem:"GridItem_h6LT","is-grid-half":"is-grid-half_bkCe","is-grid-thirds":"is-grid-thirds_bUuo","is-grid-fifths":"is-grid-fifths_gZxO","is-grid-2-1-1":"is-grid-2-1-1_WJjM","is-grid-2-3":"is-grid-2-3_GVgU"};function l(e){var r=e.layout,t=e.children,o=e.hasEqualHeightItems,l=(0,i.useMemo)((function(){return Array.isArray(t)?t:[t]}),[t]);return i.createElement("div",{className:(0,a.Z)(n.Root,n[r],o&&n["has-equal-height-items"])},l.map((function(e,r){return null===e?null:i.createElement("div",{key:r,className:n.GridItem},e)})))}!function(e){e.Half="is-grid-half",e.Thirds="is-grid-thirds",e.Fifths="is-grid-fifths",e.Grid_2_1_1="is-grid-2-1-1",e.Grid_2_3="is-grid-2-3"}(o||(o={}))},34690:function(e,r,t){t.d(r,{$:function(){return l}});var o=t(39960),a=t(67294),i=t(32830),n={Link:"Link_m_Qv",Root:"Root_RbPk",Header:"Header_lGMo"};function l(e){var r=e.title,t=e.titleSize,l=e.linkLabel,s=void 0===l?"View all":l,c=e.linkHref,d=e.children,m=e.hasNoHeader;return a.createElement("section",{className:n.Root},!m&&a.createElement("div",{className:n.Header},a.createElement(i.D,{size:t},r),Boolean(s)&&a.createElement(o.Z,{className:n.Link,href:c},s)),a.createElement("div",{className:n.Content},d))}},46400:function(e,r,t){t.d(r,{x:function(){return l},y:function(){return o}});var o,a=t(86010),i=t(67294),n={Root:"Root_Wy7x","is-size-default":"is-size-default_pSmj","is-size-small":"is-size-small_M5O6","has-bottom-spacing":"has-bottom-spacing_OpxG","is-inline":"is-inline_xE6B","is-centered":"is-centered_i4nY"};function l(e){var r=e.children,t=e.size,l=void 0===t?o.Default:t,s=e.style,c=e.className,d=e.hasBottomSpacing,m=void 0===d||d,u=e.isSpan,p=e.isCentered,b=u?"span":"p";return i.createElement(b,{className:(0,a.Z)(n.Root,n["is-size-"+l],u&&n["is-inline"],p&&n["is-centered"],m&&n["has-bottom-spacing"],c),style:s},r)}!function(e){e.Default="default",e.Small="small"}(o||(o={}))},32830:function(e,r,t){t.d(r,{D:function(){return l},J:function(){return o}});var o,a=t(86010),i=t(67294),n={Root:"Root_TxX9","is-size-default":"is-size-default_rXPJ","is-size-large":"is-size-large_kGki","is-size-small":"is-size-small_VhtV","is-size-smaller":"is-size-smaller_EhWW","has-bottom-spacing":"has-bottom-spacing_Lfds","is-centered":"is-centered_d8Sd"};function l(e){var r=e.children,t=e.size,l=void 0===t?o.Default:t,s=e.headingLevel,c=void 0===s?2:s,d=e.hasBottomSpacing,m=void 0===d||d,u=e.isCentered,p="h"+c;return i.createElement(p,{className:(0,a.Z)(n.Root,n["is-size-"+l],u&&n["is-centered"],m&&n["has-bottom-spacing"])},r)}!function(e){e.Default="default",e.Large="large",e.Small="small",e.Smaller="smaller"}(o||(o={}))}}]);