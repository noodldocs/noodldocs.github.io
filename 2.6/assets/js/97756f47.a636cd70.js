"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[818],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||g[d]||o;return a?n.createElement(h,p(p({ref:t},u),{},{components:a})):n.createElement(h,p({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=a[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},32908:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return g}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),p=["components"],i={hide_title:!0,hide_table_of_contents:!0,title:"Page Router"},s=void 0,l={unversionedId:"navigation/page-router",id:"navigation/page-router",title:"Page Router",description:"This node lets you navigate between your Page nodes using the Navigate or Navigate To Path nodes. You can also use the External Link node to navigate to a page outside your app.",source:"@site/nodes/navigation/page-router.md",sourceDirName:"navigation",slug:"/navigation/page-router",permalink:"/2.6/nodes/navigation/page-router",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Page Router"},sidebar:"nodeSidebar",previous:{title:"Text Input",permalink:"/2.6/nodes/ui-controls/text-input"},next:{title:"Navigate",permalink:"/2.6/nodes/navigation/navigate"}},u={},g=[{value:"Implementation",id:"implementation",level:2},{value:"Start Page",id:"start-page",level:2},{value:"Navigating",id:"navigating",level:2},{value:"URLs to Page Routers and Pages",id:"urls-to-page-routers-and-pages",level:3},{value:"Navigating using Navigation node",id:"navigating-using-navigation-node",level:3},{value:"Multiple Page Routers",id:"multiple-page-routers",level:2},{value:"Visual Appearance",id:"visual-appearance",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Visual",id:"visual",level:3},{value:"Outputs",id:"outputs",level:2},{value:"Visual",id:"visual-1",level:3}],m={toc:g};function d(e){var t=e.components,i=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h1",{id:"page-router"},"Page Router"),(0,o.kt)("p",null,"This node lets you navigate between your ",(0,o.kt)("span",{className:"ndl-node"},(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/page"},"Page"))," nodes using the ",(0,o.kt)("span",{className:"ndl-node"},(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/navigate"},"Navigate"))," or ",(0,o.kt)("span",{className:"ndl-node"},(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/navigate-to-path"},"Navigate To Path"))," nodes. You can also use the ",(0,o.kt)("span",{className:"ndl-node"},(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/external-link"},"External Link"))," node to navigate to a page outside your app."),(0,o.kt)("p",null,"Unlike the somewhat similar ",(0,o.kt)("a",{parentName:"p",href:"/nodes/component-stack/component-stack-node.md"},"Component Stack")," the ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," is optimized for web type navigation (in contrast to app type) and uses URLs and routing as part of the navigation as well as the browser history."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(83802).Z,width:"930",height:"745"}))),(0,o.kt)("p",null,"Every ",(0,o.kt)("span",{className:"ndl-node"},"Page Router")," has a ",(0,o.kt)("span",{className:"ndl-data"},"Start Page"),". The pages are rendered inside of the ",(0,o.kt)("span",{className:"ndl-node"},"Page Router"),". You can use the ",(0,o.kt)("span",{className:"ndl-data"},"Clip Behavior")," option to decide how the ",(0,o.kt)("span",{className:"ndl-node"},"Page Router")," should wrap its content."),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," uses standard browser navigation which means that the user can use the browser ",(0,o.kt)("strong",{parentName:"p"},"Back")," button to navigate back in the ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," history."),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," only navigates between ",(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/page"},"Pages"),". ",(0,o.kt)("strong",{parentName:"p"},"Pages")," cannot be created through the Node Picker. You create them using ",(0,o.kt)("strong",{parentName:"p"},"Create Page")," in the component side bar."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(25835).Z,width:"1027",height:"877"}))),(0,o.kt)("p",null,"After creating your ",(0,o.kt)("strong",{parentName:"p"},"Pages")," they are automatically added to your ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," unless you have multiple ",(0,o.kt)("strong",{parentName:"p"},"Page Routers")," in your project. Then you'll have to add them manually to where they belong."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(79621).Z,width:"800",height:"870"}))),(0,o.kt)("h2",{id:"start-page"},"Start Page"),(0,o.kt)("p",null,"When creating and adding pages to your ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," you will have to make one of the pages a starting page by opening the menu on the page item in the ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," properties and selecting ",(0,o.kt)("em",{parentName:"p"},'Make Start Page"'),"."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(29433).Z,width:"1037",height:"875"}))),(0,o.kt)("h2",{id:"navigating"},"Navigating"),(0,o.kt)("h3",{id:"urls-to-page-routers-and-pages"},"URLs to Page Routers and Pages"),(0,o.kt)("p",null,"Noodl uses a URL to route a ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," to a specific ",(0,o.kt)("strong",{parentName:"p"},"Page"),". A ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," may optionally have a ",(0,o.kt)("strong",{parentName:"p"},"URL Path"),". Each page has also has a ",(0,o.kt)("strong",{parentName:"p"},"URL Path")," that will uniquely identify the URL route to that page."),(0,o.kt)("p",null,"Generally, the route to a ",(0,o.kt)("strong",{parentName:"p"},"Page")," looks like the following"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<domainname>#/<route1>/<route2>/<route3>...")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"<domainname")," is the domain on where you host the app and each ",(0,o.kt)("inlineCode",{parentName:"p"},"<route>")," points to either a ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," or a ",(0,o.kt)("strong",{parentName:"p"},"Page")," within a ",(0,o.kt)("strong",{parentName:"p"},"Page Router"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"<route>")," may also include a ",(0,o.kt)("strong",{parentName:"p"},"Page Parameter")," and ",(0,o.kt)("strong",{parentName:"p"},"Query Parameters")," (see below)."),(0,o.kt)("p",null,"For example a ",(0,o.kt)("strong",{parentName:"p"},"Page Route")," with the ",(0,o.kt)("strong",{parentName:"p"},"URL Path")," 'myrouter', with two possible pages with ",(0,o.kt)("strong",{parentName:"p"},"URL Paths")," ",(0,o.kt)("em",{parentName:"p"},"page1")," and ",(0,o.kt)("em",{parentName:"p"},"page2"),", will have two possible routes: ",(0,o.kt)("em",{parentName:"p"},"myrouter/page1")," and ",(0,o.kt)("em",{parentName:"p"},"#myrouter/page2"),". Note the '#' character that is always added in the beginning of a route. If, for example, the Noodl App is deployed on the domain ",(0,o.kt)("em",{parentName:"p"},"app.mynoodlapps.com"),", entering ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://app.mynoodlapps.com#myrouter/page2"},"https://app.mynoodlapps.com#myrouter/page2"))," in the browser will take make the ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," with the ",(0,o.kt)("strong",{parentName:"p"},"URL Path")," ",(0,o.kt)("em",{parentName:"p"},"myrouter")," navigate to the ",(0,o.kt)("strong",{parentName:"p"},"Page")," with the ",(0,o.kt)("strong",{parentName:"p"},"URL Path")," ",(0,o.kt)("em",{parentName:"p"},"page2"),"."),(0,o.kt)("h3",{id:"navigating-using-navigation-node"},"Navigating using Navigation node"),(0,o.kt)("p",null,"The most straight forward way of navigating between pages within an app is to use the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/navigate"},"Navigate")," node. This node will navigate to the ",(0,o.kt)("strong",{parentName:"p"},"Page")," selected in the ",(0,o.kt)("strong",{parentName:"p"},"Navigation")," node. This will update the URL of the browser to the route pointing to that page. There is also a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/navigate-to-path"},"Navigate To Path")," node that allows an explicit path to be set, that could for example perform navigation on multiple ",(0,o.kt)("strong",{parentName:"p"},"Page Routers")," at the same time by simply specifying a full URL path."),(0,o.kt)("h2",{id:"multiple-page-routers"},"Multiple Page Routers"),(0,o.kt)("p",null,"If needed, you can use multiple ",(0,o.kt)("strong",{parentName:"p"},"Page Routers")," at the same time. This could for example be used if you have multiple navigation flows within a higher level navigation flow. For example, you may have a top level navigation between the pages ",(0,o.kt)("em",{parentName:"p"},"Home")," ",(0,o.kt)("em",{parentName:"p"},"Settings")," and ",(0,o.kt)("em",{parentName:"p"},"Content")," and within each page have sub navigation into specific pages under each section."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(23465).Z,width:"3150",height:"1785"})),(0,o.kt)("h2",null,"Encoding Parameters in the URL"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/page-inputs"},"Page Inputs")," node is used to send parameters between Pages by encoding them in the URL. This is useful for example if you want certain input parameters to be available at a page, no matter the state of the app. The user may for example press ",(0,o.kt)("strong",{parentName:"p"},"Refresh")," in the browser. Since the parameters are encoded in the URL they will still be available in the ",(0,o.kt)("strong",{parentName:"p"},"Page")," through a ",(0,o.kt)("strong",{parentName:"p"},"Page Inputs")," node.\nAnother case for encoding parameters in the URL is for users to be able to share a link, with a full route to a specific place in your app, with specific parameters set."),(0,o.kt)("p",null,"There are two types of parameters ",(0,o.kt)("strong",{parentName:"p"},"Path Parameters")," and ",(0,o.kt)("strong",{parentName:"p"},"Query Parameters"),". There can only be one ",(0,o.kt)("strong",{parentName:"p"},"Path Parameter")," while you can have any number of ",(0,o.kt)("strong",{parentName:"p"},"Query Parameters"),"."),(0,o.kt)("h3",null,"Path Parameter"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Path Parameter")," is added to the route of the page at the end. For example a ",(0,o.kt)("strong",{parentName:"p"},"Page")," with ",(0,o.kt)("strong",{parentName:"p"},"URL Path")," ",(0,o.kt)("inlineCode",{parentName:"p"},"mypage")," with a path parameter defined, will expect the next part of the route to be the value of that parameter. The route ",(0,o.kt)("inlineCode",{parentName:"p"},"mypage/monkey")," will result in the ",(0,o.kt)("strong",{parentName:"p"},"Path Parameter")," of the ",(0,o.kt)("strong",{parentName:"p"},"Page")," to get the value ",(0,o.kt)("inlineCode",{parentName:"p"},"monkey"),". Using ",(0,o.kt)("strong",{parentName:"p"},"Path Parameter")," is a convenient way to encode a specific data entry to be prepopulated in a ",(0,o.kt)("strong",{parentName:"p"},"Page"),". As an example the ",(0,o.kt)("strong",{parentName:"p"},"Path Parameter")," could be the ",(0,o.kt)("strong",{parentName:"p"},"Id")," of a ",(0,o.kt)("strong",{parentName:"p"},"Record"),"."),(0,o.kt)("h3",null,"Query Parameter"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Query Parameter")," are encoded using ",(0,o.kt)("inlineCode",{parentName:"p"},"?parameter=value;")," notation in the URL. You can have any number of ",(0,o.kt)("strong",{parentName:"p"},"Query Parameters"),"."),(0,o.kt)("h2",{id:"visual-appearance"},"Visual Appearance"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Page Router")," is a visual node. It will automatically expand to take all space available in the current layout, unless its ",(0,o.kt)("strong",{parentName:"p"},"Clipping Behavior")," is set to ",(0,o.kt)("strong",{parentName:"p"},"Expand To Content Size")," in which case it will have the same size as the ",(0,o.kt)("strong",{parentName:"p"},"Page")," its showing (if available)."),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Name")),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the ",(0,o.kt)("strong",{parentName:"td"},"Page Router"),". If you have multiple ",(0,o.kt)("strong",{parentName:"td"},"Page Routers")," the name will be used to identify them.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"URL path")),(0,o.kt)("td",{parentName:"tr",align:null},"An optional path of the ",(0,o.kt)("strong",{parentName:"td"},"Page Router")," when routing a URL towards it.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Clip Behavior")),(0,o.kt)("td",{parentName:"tr",align:null},"This property controls the size and clipping behavior of the ",(0,o.kt)("strong",{parentName:"td"},"Page Router"),". It has three possible values: ",(0,o.kt)("strong",{parentName:"td"},"Expand To Content Size"),", ",(0,o.kt)("strong",{parentName:"td"},"Scroll")," or ",(0,o.kt)("strong",{parentName:"td"},"Clip Content"),".",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"Expand To Content Size"),": Changes the size of the ",(0,o.kt)("strong",{parentName:"td"},"Page Router")," to fit the size of the ",(0,o.kt)("strong",{parentName:"td"},"Page")," it's currently showing.",(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"Scroll"),": Makes the ",(0,o.kt)("strong",{parentName:"td"},"Page Router")," take as much space as it can. Any ",(0,o.kt)("strong",{parentName:"td"},"Page")," inside it will be scrollable if it cannot fit inside the ",(0,o.kt)("strong",{parentName:"td"},"Page Router"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Background Color")),(0,o.kt)("td",{parentName:"tr",align:null},"The color that will be shown when there is no ",(0,o.kt)("strong",{parentName:"td"},"Page")," covering the ",(0,o.kt)("strong",{parentName:"td"},"Page Router")," or when the ",(0,o.kt)("strong",{parentName:"td"},"Page")," is transparent.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Mounted")),(0,o.kt)("td",{parentName:"tr",align:null},"This property is used to completely remove the node from the DOM. If this property is set to false the node is removed from the DOM. It differs from the ",(0,o.kt)("em",{parentName:"td"},"Visible")," property where the node is still part of the DOM but invisible.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Reset")),(0,o.kt)("td",{parentName:"tr",align:null},"Triggering this action will reset the ",(0,o.kt)("strong",{parentName:"td"},"Page Router")," making it show the start page.")))),(0,o.kt)("h3",{id:"visual"},"Visual"),(0,o.kt)("p",null,"This node also supports the ",(0,o.kt)("a",{parentName:"p",href:"../shared-props/inputs/visual-input-properties#advanced-style"},"Advanced Style")," gadget from the ",(0,o.kt)("a",{parentName:"p",href:"../shared-props/inputs/visual-input-properties/"},"Visual Input Properties"),"."),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Current Page Title")),(0,o.kt)("td",{parentName:"tr",align:null},"The title of the page that is currently showing in this ",(0,o.kt)("strong",{parentName:"td"},"Page Router"),".")))),(0,o.kt)("h3",{id:"visual-1"},"Visual"),(0,o.kt)("p",null,"This node supports the following ",(0,o.kt)("a",{parentName:"p",href:"../shared-props/outputs/visual-output-properties/"},"Visual Output Properties"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties/#bounding-box"},"Bounding Box")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties/#mounted"},"Mounted")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../shared-props/outputs/visual-output-properties/#other"},"Other"))),(0,o.kt)("div",{className:"hidden-props-for-editor"},(0,o.kt)("p",null,'@include "../shared-props/inputs/visual-input-properties.md"\n@include "../shared-props/outputs/visual-output-properties.md"')))}d.isMDXComponent=!0},25835:function(e,t,a){t.Z=a.p+"assets/images/create-page-0435a0b04abfd9616c3caa83cbce60aa.png"},29433:function(e,t,a){t.Z=a.p+"assets/images/make-start-page-7adca9bfb4046693b3b0d40b779ae64d.png"},23465:function(e,t,a){t.Z=a.p+"assets/images/multi-router-8f300b45a7d0b8fd692794e755092c1f.png"},83802:function(e,t,a){t.Z=a.p+"assets/images/page-router-1-e6a6efbae7e6b8879d5fb74516073ccb.png"},79621:function(e,t,a){t.Z=a.p+"assets/images/pages-in-router-f6cd0985ac436cc13f477d6e915eb42a.png"}}]);