"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[2739],{3905:(e,a,r)=>{r.d(a,{Zo:()=>p,kt:()=>u});var i=r(67294);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,i,o=function(e,a){if(null==e)return{};var r,i,o={},t=Object.keys(e);for(i=0;i<t.length;i++)r=t[i],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)r=t[i],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var n=i.createContext({}),c=function(e){var a=i.useContext(n),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},p=function(e){var a=c(e.components);return i.createElement(n.Provider,{value:a},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},m=i.forwardRef((function(e,a){var r=e.components,o=e.mdxType,t=e.originalType,n=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,u=d["".concat(n,".").concat(m)]||d[m]||b[m]||t;return r?i.createElement(u,s(s({ref:a},p),{},{components:r})):i.createElement(u,s({ref:a},p))}));function u(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var t=r.length,s=new Array(t);s[0]=m;var l={};for(var n in a)hasOwnProperty.call(a,n)&&(l[n]=a[n]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<t;c++)s[c]=r[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81249:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>p,contentTitle:()=>n,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=r(87462),o=(r(67294),r(3905)),t=r(74980),s=r(20196);const l={title:"Library Overview",hide_title:!0},n="Library overview",c={unversionedId:"overview",id:"overview",title:"Library Overview",description:"Noodl has a lot of nodes available out of the box, but it can never include a node for everything. For that reason you can extend your project with specific modules or prefabs containing nodes and components to capture specfic functionality or UI controls.",source:"@site/library/overview.mdx",sourceDirName:".",slug:"/overview",permalink:"/2.9/library/overview",draft:!1,tags:[],version:"current",frontMatter:{title:"Library Overview",hide_title:!0},sidebar:"librarySidebar",next:{title:"All prefabs",permalink:"/2.9/library/prefabs/overview"}},p={},d=[{value:"Prefabs",id:"prefabs",level:2},{value:"Modules",id:"modules",level:2}],b={toc:d},m="wrapper";function u(e){let{components:a,...r}=e;return(0,o.kt)(m,(0,i.Z)({},b,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"library-overview"},"Library overview"),(0,o.kt)("p",null,"Noodl has a lot of nodes available out of the box, but it can never include a node for everything. For that reason you can extend your project with specific modules or prefabs containing nodes and components to capture specfic functionality or UI controls."),(0,o.kt)("p",null,"The main difference between ",(0,o.kt)("strong",{parentName:"p"},"Modules")," and ",(0,o.kt)("strong",{parentName:"p"},"Prefabs")," is that modules install new nodes to the editor, while prefabs clones components built with the core nodes, and stores them as if you created them yourself. Prefabs can be imported as many times as you want, and each clone can be modified how you see fit."),(0,o.kt)("h2",{id:"prefabs"},"Prefabs"),(0,o.kt)("p",null,"Noodl's library of prefabs is optimized for quickly building great data rich applications. Use them as is, or make them your own by customizing their internal building blocks."),(0,o.kt)(s.Y,{title:"Popular prefabs",isFeaturedOnly:!0,mdxType:"PrefabListing"}),(0,o.kt)("h2",{id:"modules"},"Modules"),(0,o.kt)("p",null,"Modules extend your project in some way, most commonly by adding new ",(0,o.kt)("strong",{parentName:"p"},"core nodes")," to your project. These nodes are added to the Node Picker and work like any other core node in Noodl."),(0,o.kt)(t.I,{title:"Popular modules",isFeaturedOnly:!0,mdxType:"ModuleListing"}))}u.isMDXComponent=!0},74980:(e,a,r)=>{r.d(a,{I:()=>p});var i=r(67294),o=r(34690),t=r(69433);const s=JSON.parse('[{"label":"PDF Viewer","desc":"A UI component for rendering PDFs from an URL.","icon":"library/modules/pdf-viewer/pdf-viewer.png","project":"library/modules/pdf-viewer/pdf-viewer-1.0.0.zip","docs":"/library/modules/pdf-viewer/","tags":["UI"]},{"label":"Mapbox","desc":"Use this module to add maps and location visualisations to your app.","icon":"library/modules/mapbox/mapbox.png","project":"library/modules/mapbox/mapbox-2-0-0.zip","docs":"/library/modules/mapbox/","tags":["UI","Service"]},{"label":"Chart.js","desc":"A module with components to build charts.","icon":"library/modules/chartjs/chartjs.png","project":"library/modules/chartjs/chartjs-module-1-4-3.zip","docs":"/library/modules/chartjs/","tags":["UI"]},{"label":"Google Sheets","desc":"Use your google sheets as a data source for your applications.","icon":"library/modules/gsheets/googlesheet.png","project":"library/modules/gsheets/gsheets-1-7.zip","docs":"/library/modules/gsheets/","tags":["Service","Data"]},{"label":"GraphQL","desc":"A module to help quering data using GraphQL.","project":"library/modules/graphql/graphql-module-1-0-1.zip","icon":"library/modules/graphql/graphql.png","docs":"/library/modules/graphql/","tags":["Data","Networking"]},{"label":"QR Scanner","desc":"Scan QR codes from camera or images.","icon":"library/modules/qr-scanner/qr.png","project":"library/modules/qr-scanner/qr-scanner-1-4.zip","docs":"/library/modules/qr-scanner/","tags":["Device"]},{"label":"Custom HTML","desc":"Write your own HTML and pass values to it with template strings. Useful for embeds.","project":"library/modules/custom-html/custom-html-module-1-0-2.zip","icon":"library/modules/custom-html/html.png","docs":"/library/modules/custom-html/","tags":["UI","Code"]},{"label":"Simple Tooltips","desc":"Add simple tooltips to your Noodl App.","project":"library/modules/simple-tooltips/simple-tooltips-v1-0-0.zip","icon":"library/modules/simple-tooltips/simple-tooltips.png","docs":"/library/modules/simple-tooltips/","tags":["UI"]},{"label":"Marquee","desc":"Add a marquee container to your Noodl App.","project":"library/modules/marquee/marquee-v1-0-0.zip","icon":"library/modules/marquee/marquee.png","docs":"/library/modules/marquee/","tags":["UI"]},{"label":"Form Validation","desc":"A utility node that makes different kind of form validation easier.","project":"library/modules/validation/validation-1-3.zip","icon":"library/modules/validation/formvalidation.png","docs":"/library/modules/validation/","tags":["Data","Utility"]},{"label":"Material Icons","desc":"The latest material icon set library.","icon":"library/modules/material-icons/material-icons.png","project":"library/modules/material-icons/material-icons-1-1.zip","docs":"/library/modules/material-icons/","tags":["UI"]},{"label":"Font Awesome Brands","desc":"The Font Awesome 6 brand icon library.","icon":"library/modules/font-awesome-brands/font-awesome-brands.png","project":"library/modules/font-awesome-brands/font-awesome-brands-1-0.zip","docs":"/library/modules/font-awesome-brands/","tags":["UI"]},{"label":"Font Awesome Solid","desc":"The Font Awesome 6 solid icon library.","icon":"library/modules/font-awesome-solid/font-awesome-solid.png","project":"library/modules/font-awesome-solid/font-awesome-solid-1-0.zip","docs":"/library/modules/font-awesome-solid/","tags":["UI"]},{"label":"Markdown","desc":"Use Markdown in Noodl and style it with CSS.","project":"library/modules/markdown/noodl-markdown-1-0-1.zip","icon":"library/modules/markdown/markdown.png","docs":"/library/modules/markdown/","tags":["Code"]},{"label":"Avatar","desc":"A module with components to build avatars.","icon":"library/modules/avatar/avatars.png","project":"library/modules/avatar/avatar-module-1-0-1.zip","docs":"/library/modules/avatar/","tags":["UI"]},{"label":"Image Cropper","desc":"Image Cropper Module. Mainly intended for cropping profile pictures.","icon":"library/modules/image-cropper/image-crop.png","project":"library/modules/image-cropper/image-cropper-1-4.zip","docs":"/library/modules/image-cropper/","tags":["UI","Utility"]},{"label":"Panning and Zooming Control","desc":"A control that implements a pan and zoom view on large images.","icon":"library/modules/panning-and-zooming/panning-and-zooming.png","project":"library/modules/panning-and-zooming/panning-and-zoom-1-0.zip","docs":"/library/modules/panning-and-zooming/","tags":["UI","Utility"]},{"label":"i18next Translation","desc":"A module for using i18next in Noodl.","project":"library/modules/i18next/i18next-1-0-3.zip","icon":"library/modules/i18next/translate.png","docs":"/library/modules/i18next/","tags":["Data","Utility"]},{"label":"MQTT Module","desc":"Send and receive messages over the MQTT protocol in web apps.","project":"library/modules/mqtt/mqtt-module-1-0-3.zip","icon":"library/modules/mqtt/mqtt.png","docs":"/library/modules/mqtt/","tags":["Device","Networking"]},{"label":"Shake Detector","desc":"A small module to detect a device shake with the accelerometer.","icon":"library/modules/shake-detector/shake-detector.png","project":"library/modules/shake-detector/shake-detector-1.0.2.zip","docs":"/library/modules/shake-detector/","tags":["Device"]},{"label":"Google Analytics","desc":"Track user behavior with Google Analytics.","project":"library/modules/google-analytics/google-analytics-1-0-7.zip","icon":"library/modules/google-analytics/googleanalytics.png","docs":"/library/modules/google-analytics/","tags":["Service","Analytics"]},{"label":"Lottie","desc":"A module for using Lottie animations in Noodl.","project":"library/modules/lottie/lottie-1-0-1.zip","icon":"library/modules/lottie/lottie.png","docs":"/library/modules/lottie/","tags":["UI","Animation"]},{"label":"Web Camera","desc":"Support for accessing the camera in web apps.","icon":"library/modules/webcamera/webcam.png","project":"library/modules/webcamera/webcamera-1-0-4.zip","docs":"/library/modules/webcamera/","tags":["Device"]},{"label":"Parse Cloud Function","desc":"Call Parse Platform cloud functions.","icon":"library/modules/parse-cloud-function/parse-cloud-function.png","project":"library/modules/parse-cloud-function/parse-cloud-function-1-0-0.zip","docs":"/library/modules/parse-cloud-function/","tags":["Data","Networking"]},{"label":"Geospatial Analysis","desc":"A module for using Turf.js to making it easy to working with GeoJSON.","icon":"library/modules/geospatial-analysis/geospatial-analysis.png","project":"library/modules/geospatial-analysis/geospatial-analysis-module-1-0-0.zip","docs":"/library/modules/geospatial-analysis/","tags":["Data"]},{"label":"Data Context","desc":"Share data between all child components.","icon":"library/modules/data-context/banner.png","project":"library/modules/data-context/data-context-1-0-2.zip","docs":"/library/modules/data-context/","tags":["Data"]}]'),l=JSON.parse('["Mapbox","Chart.js","GraphQL"]');var n=r(13080);const c=l.map((e=>s.find((a=>a.label===e))));function p(e){let{title:a,hasNoLink:r,isFeaturedOnly:l}=e;const p=l?c:s;return i.createElement(o.$,{title:a,linkHref:r?void 0:"/library/modules/overview",linkLabel:!r&&"View all"},i.createElement(t.r,{layout:t.M.Thirds,hasEqualHeightItems:!0},p.map((e=>e?i.createElement(n.O,{key:e.label,title:e.label,description:e.desc,readMoreUrl:e.docs,thumbUrl:e.icon,importArgs:{path:e.project,options:{thumb:e.icon,name:e.label}}}):null))))}},20196:(e,a,r)=>{r.d(a,{Y:()=>p});var i=r(67294),o=r(34690),t=r(69433);const s=JSON.parse('[{"label":"Date Picker","desc":"A date picker component.","icon":"library/prefabs/date-picker/date-picker.png","project":"library/prefabs/date-picker/date-picker-1-3.zip","docs":"/library/prefabs/date-picker/","tags":["UI"]},{"label":"Time Picker","desc":"A time picker component.","icon":"library/prefabs/time-picker/time-picker.png","project":"library/prefabs/time-picker/time-picker-1-2.zip","docs":"/library/prefabs/time-picker/","tags":["UI"]},{"label":"Multi Choice with Pills","desc":"A multi select drop down, showing the selected items as pills.","icon":"library/prefabs/multi-choice-with-pills/multi-choice-with-pills.png","project":"library/prefabs/multi-choice-with-pills/multi-choice-with-pills-0-9.zip","docs":"/library/prefabs/multi-choice-with-pills/","tags":["UI"]},{"label":"Multi Choice","desc":"A component that allows for multi selection in a group of checkboxes.","icon":"library/prefabs/multi-choice/multi-choice.png","project":"library/prefabs/multi-choice/multi-choice-0-5.zip","docs":"/library/prefabs/multi-choice/","tags":["UI"]},{"label":"Table","desc":"Component for creating tables from data.","icon":"library/prefabs/table/table.png","project":"library/prefabs/table/table-0-6.zip","docs":"/library/prefabs/table/","tags":["UI","Data"]},{"label":"Form","desc":"Component for creating dynamic forms.","icon":"library/prefabs/form/form.png","project":"library/prefabs/form/form-0-4.zip","docs":"/library/prefabs/form/","tags":["UI","Data"]},{"label":"List With Icons","desc":"A simple list component with icons and labels.","icon":"library/prefabs/list-with-icons/list-with-icons.png","project":"library/prefabs/list-with-icons/list-with-icons-1-0.zip","docs":"/library/prefabs/list-with-icons/","tags":["UI"]},{"label":"Navigation Menu","desc":"Component for creating navigation menus.","icon":"library/prefabs/navigation-menu/navigation-menu.png","project":"library/prefabs/navigation-menu/navigation-menu-0-1.zip","docs":"/library/prefabs/navigation-menu/","tags":["UI"]},{"label":"Media Query","desc":"Contains a handy component to create responsive interfaces.","icon":"library/prefabs/media-query/media-query.png","project":"library/prefabs/media-query/media-query-0-2.zip","docs":"/library/prefabs/media-query/","tags":["UI","Utility"]},{"label":"Progress Circle","desc":"Contains an animating progress visualization in percentage.","icon":"library/prefabs/progress-circle/progress-circle.png","project":"library/prefabs/progress-circle/progress-circle-0-1.zip","docs":"/library/prefabs/progress-circle/","tags":["UI"]},{"label":"Popup Modal","desc":"Contains a classic popup modal for simple confirm popups.","icon":"library/prefabs/modal/modal.png","project":"library/prefabs/modal/modal-0-1.zip","docs":"/library/prefabs/modal/","tags":["UI"]},{"label":"Toast","desc":"Contains Toast messages for success, warnings, errors, and neutral.","icon":"library/prefabs/toast/toast.png","project":"library/prefabs/toast/toast-0-1.zip","docs":"/library/prefabs/toast/","tags":["UI"]},{"label":"Toggle Switch","desc":"A toggle switch UI component.","icon":"library/prefabs/toggle/toggle.png","project":"library/prefabs/toggle/toggle-0-1.zip","docs":"/library/prefabs/toggle/","tags":["UI"]},{"label":"Tab Bar","desc":"A tab bar component, useful for creating tab navigation.","icon":"library/prefabs/tab-bar/tab-bar.png","project":"library/prefabs/tab-bar/tab-bar-0-1.zip","docs":"/library/prefabs/tab-bar/","tags":["UI"]},{"label":"Rating","desc":"An interactive star rating component.","icon":"library/prefabs/rating/rating.png","project":"library/prefabs/rating/rating-0-2.zip","docs":"/library/prefabs/rating/","tags":["UI"]},{"label":"Loading Spinner","desc":"A loading spinner that can be shown when requesting data etc.","icon":"library/prefabs/loading-spinner/loading-spinner.png","project":"library/prefabs/loading-spinner/loading-spinner-0-1.zip","docs":"/library/prefabs/loading-spinner/","tags":["UI"]},{"label":"Tags","desc":"Display a list of tags, with nice auto generated colors.","icon":"library/prefabs/tags/tags.png","project":"library/prefabs/tags/tags-0-1.zip","docs":"/library/prefabs/tags/","tags":["UI"]},{"label":"Selection Pills","desc":"A list of selection pills, select one or many.","icon":"library/prefabs/selection-pills/selection-pills.png","project":"library/prefabs/selection-pills/selection-pills-0-1.zip","docs":"/library/prefabs/selection-pills/","tags":["UI"]},{"label":"Send Grid","desc":"A simple prefab for sending emails with Send Grid.","icon":"library/prefabs/sendgrid/sendgrid.png","project":"library/prefabs/sendgrid/sendgrid-0-2.zip","docs":"/library/prefabs/sendgrid/","tags":["Cloud"]},{"label":"Mail Gun","desc":"A simple prefab for sending emails with Mail Gun.","icon":"library/prefabs/mailgun/mailgun.png","project":"library/prefabs/mailgun/mailgun-0-2.zip","docs":"/library/prefabs/mailgun/","tags":["Cloud"]},{"label":"Email Verification","desc":"Cloud functions for email verification and reset password.","icon":"library/prefabs/email-verification/email-verification.png","project":"library/prefabs/email-verification/email-verification-0-4.zip","docs":"/library/prefabs/email-verification/","tags":["Cloud"]},{"label":"OAuth2","desc":"Cloud functions for oauth2 user authentication.","icon":"library/prefabs/oauth2/oauth2.png","project":"library/prefabs/oauth2/oauth2-0-2.zip","docs":"/library/prefabs/oauth2/","tags":["Cloud"]},{"label":"TOTP","desc":"Cloud functions for auth with timebased one time passwords like Google Auth.","icon":"library/prefabs/totp/totp.png","project":"library/prefabs/totp/totp-0-2.zip","docs":"/library/prefabs/totp/","tags":["Cloud"]},{"label":"Stripe","desc":"Some helpers to make cloud functions for accepting payments and subscriptions.","icon":"library/prefabs/stripe/stripe.png","project":"library/prefabs/stripe/stripe-0-4.zip","docs":"/library/prefabs/stripe/","tags":["Cloud"]},{"label":"Pagination","desc":"A component for pagination, showing available pages and letting user switch.","icon":"library/prefabs/pagination/pagination.png","project":"library/prefabs/pagination/pagination-0-2.zip","docs":"/library/prefabs/pagination/","tags":["UI"]},{"label":"Pages And Rows","desc":"A component for pagination, letting user pick page and number of rows per page.","icon":"library/prefabs/pagesandrows/pagesandrows.png","project":"library/prefabs/pagesandrows/pagesandrows-0-2.zip","docs":"/library/prefabs/pagesandrows/","tags":["UI"]},{"label":"Filters","desc":"A prefab for creating filter controls that work well with query records.","icon":"library/prefabs/filters/filters.png","project":"library/prefabs/filters/filters-0-1.zip","docs":"/library/prefabs/filters/","tags":["UI"]},{"label":"OpenAI","desc":"A prefab with cloud functions for creating chat bots with the OpenAI API.","icon":"library/prefabs/openai/openai.png","project":"library/prefabs/openai/openai-0-5.zip","docs":"/library/prefabs/openai/","tags":["Cloud"]},{"label":"PDF Export","desc":"A prefab for creating a PDF file from a web page","icon":"library/prefabs/pdf/pdf.png","project":"library/prefabs/pdf/pdf-0-1.zip","docs":"/library/prefabs/pdf/","tags":["Cloud"]},{"label":"Xano","desc":"Connects to Xano and handles queries, users and authTokens. Built by @gmaison.","icon":"library/prefabs/xano/xano-thumb.png","project":"library/prefabs/xano/xano-prefab-1.zip","docs":"/library/prefabs/xano/","tags":["Data"]},{"label":"Supabase","desc":"Connects to Supabase and handles queries, users and authTokens. Built by @gmaison and @RicoTrevisan.","icon":"library/prefabs/supabase/thumb.png","project":"library/prefabs/supabase/supabase-prefab-1.zip","docs":"/library/prefabs/supabase/","tags":["Data"]}]'),l=JSON.parse('["Table","Form","Date Picker","Popup Modal","Toast","Email Verification"]');var n=r(13080);const c=l.map((e=>s.find((a=>a.label===e))));function p(e){let{title:a,hasNoLink:r,isFeaturedOnly:l}=e;const p=l?c:s;return i.createElement(o.$,{title:a,linkHref:r?void 0:"/library/prefabs/overview",linkLabel:!r&&"View all"},i.createElement(t.r,{layout:t.M.Thirds,hasEqualHeightItems:!0},p.map((e=>e?i.createElement(n.O,{key:e.label,title:e.label,description:e.desc,readMoreUrl:e.docs,thumbUrl:e.icon,importArgs:{path:e.project,options:{thumb:e.icon,name:e.label}}}):null))))}},12336:(e,a,r)=>{r.d(a,{T:()=>d,B:()=>p});var i=r(52263),o=r(72389),t=r(86010),s=r(67294),l=r(46400),n=r(32830);const c={Root:"Root_FlAi","is-horisontal":"is-horisontal_bpe6","is-vertical":"is-vertical_DK4a",ImageContainer:"ImageContainer_VFbT",Image:"Image_I7Nz","has-no-padding":"has-no-padding_PmFk",Content:"Content_ViNB",PrimaryAction:"PrimaryAction_aNNZ",SecondaryAction:"SecondaryAction_RhgK"};let p=function(e){return e.Horisontal="is-horisontal",e.Vertical="is-vertical",e}({});function d(e){let{layout:a=p.Vertical,title:r,description:d,hasNoPaddingInThumb:b,primaryAction:m,secondaryAction:u,imageUrl:g}=e;const{siteConfig:f}=(0,i.Z)(),y=(0,o.Z)(),h=(0,s.useMemo)((()=>y?location.protocol+"//"+location.host+f.baseUrl.slice(0,-1)+("/"===g[0]?g:"/"+g):null),[y]);return s.createElement("article",{className:(0,t.Z)(c.Root,c[a])},s.createElement("div",{className:c.ImageContainer},h&&s.createElement("div",{className:(0,t.Z)(c.Image,b&&c["has-no-padding"]),style:{backgroundImage:`url(${h})`}})),s.createElement("div",{className:c.Content},s.createElement("div",null,s.createElement("header",null,s.createElement(n.D,{size:n.J.Smaller,headingLevel:1},r)),s.createElement(l.x,{size:l.y.Small},d)),s.createElement("footer",{className:c.Footer},Boolean(m)&&s.createElement("a",{className:c.PrimaryAction,href:m.href,onClick:m.onClick},s.createElement(l.x,{size:l.y.Small,isSpan:!0},m.label)),Boolean(u)&&s.createElement("a",{className:c.SecondaryAction,href:u.href,onClick:u.onClick},s.createElement(l.x,{size:l.y.Small,isSpan:!0},u.label)))))}},13080:(e,a,r)=>{r.d(a,{O:()=>s});var i=r(52263),o=r(67294),t=r(12336);function s(e){let{thumbUrl:a,title:r,description:s,readMoreUrl:l,importArgs:n}=e;const{siteConfig:c}=(0,i.Z)();return o.createElement(t.T,{title:r,description:s,hasNoPaddingInThumb:!0,imageUrl:a,layout:t.B.Vertical,primaryAction:{label:"Read more",href:c.baseUrl.slice(0,-1)+l}})}},69433:(e,a,r)=>{r.d(a,{r:()=>l,M:()=>s});var i=r(86010),o=r(67294);const t={Root:"Root_Io4z","has-equal-height-items":"has-equal-height-items_Bfk5",GridItem:"GridItem_h6LT","is-grid-half":"is-grid-half_bkCe","is-grid-thirds":"is-grid-thirds_bUuo","is-grid-fifths":"is-grid-fifths_gZxO","is-grid-2-1-1":"is-grid-2-1-1_WJjM","is-grid-2-3":"is-grid-2-3_GVgU"};let s=function(e){return e.Half="is-grid-half",e.Thirds="is-grid-thirds",e.Fifths="is-grid-fifths",e.Grid_2_1_1="is-grid-2-1-1",e.Grid_2_3="is-grid-2-3",e}({});function l(e){let{layout:a,children:r,hasEqualHeightItems:s}=e;const l=(0,o.useMemo)((()=>Array.isArray(r)?r:[r]),[r]);return o.createElement("div",{className:(0,i.Z)(t.Root,t[a],s&&t["has-equal-height-items"])},l.map(((e,a)=>null===e?null:o.createElement("div",{key:a,className:t.GridItem},e))))}},34690:(e,a,r)=>{r.d(a,{$:()=>l});var i=r(39960),o=r(67294),t=r(32830);const s={Link:"Link_m_Qv",Root:"Root_RbPk",Header:"Header_lGMo"};function l(e){let{title:a,titleSize:r,linkLabel:l="View all",linkHref:n,children:c,hasNoHeader:p}=e;return o.createElement("section",{className:s.Root},!p&&o.createElement("div",{className:s.Header},o.createElement(t.D,{size:r},a),Boolean(l)&&o.createElement(i.Z,{className:s.Link,href:n},l)),o.createElement("div",{className:s.Content},c))}},46400:(e,a,r)=>{r.d(a,{x:()=>l,y:()=>s});var i=r(86010),o=r(67294);const t={Root:"Root_Wy7x","is-size-default":"is-size-default_pSmj","is-size-small":"is-size-small_M5O6","has-bottom-spacing":"has-bottom-spacing_OpxG","is-inline":"is-inline_xE6B","is-centered":"is-centered_i4nY"};let s=function(e){return e.Default="default",e.Small="small",e}({});function l(e){let{children:a,size:r=s.Default,style:l,className:n,hasBottomSpacing:c=!0,isSpan:p,isCentered:d}=e;const b=p?"span":"p";return o.createElement(b,{className:(0,i.Z)(t.Root,t[`is-size-${r}`],p&&t["is-inline"],d&&t["is-centered"],c&&t["has-bottom-spacing"],n),style:l},a)}},32830:(e,a,r)=>{r.d(a,{D:()=>l,J:()=>s});var i=r(86010),o=r(67294);const t={Root:"Root_TxX9","is-size-default":"is-size-default_rXPJ","is-size-large":"is-size-large_kGki","is-size-small":"is-size-small_VhtV","is-size-smaller":"is-size-smaller_EhWW","has-bottom-spacing":"has-bottom-spacing_Lfds","is-centered":"is-centered_d8Sd"};let s=function(e){return e.Default="default",e.Large="large",e.Small="small",e.Smaller="smaller",e}({});function l(e){let{children:a,size:r=s.Default,headingLevel:l=2,hasBottomSpacing:n=!0,isCentered:c}=e;const p=`h${l}`;return o.createElement(p,{className:(0,i.Z)(t.Root,t[`is-size-${r}`],c&&t["is-centered"],n&&t["has-bottom-spacing"])},a)}}}]);