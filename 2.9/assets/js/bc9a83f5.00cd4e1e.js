"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[8105],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,k=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return a?r.createElement(k,p(p({ref:t},m),{},{components:a})):r.createElement(k,p({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,p[1]=i;for(var s=2;s<o;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},67884:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={title:"Match Media Query",hide_title:!0},p="Match Media Query",i={unversionedId:"prefabs/media-query/components/match-media-query/README",id:"prefabs/media-query/components/match-media-query/README",title:"Match Media Query",description:"This component is used to check what breakpoint is currently active. It has one output for every breakpoint that outputs either true or false.",source:"@site/library/prefabs/media-query/components/match-media-query/README.md",sourceDirName:"prefabs/media-query/components/match-media-query",slug:"/prefabs/media-query/components/match-media-query/",permalink:"/2.9/library/prefabs/media-query/components/match-media-query/",draft:!1,tags:[],version:"current",frontMatter:{title:"Match Media Query",hide_title:!0},sidebar:"mediaQuerySidebar",previous:{title:"Media Query Setup",permalink:"/2.9/library/prefabs/media-query/components/media-query-setup/"},next:{title:"Match Custom Media Query",permalink:"/2.9/library/prefabs/media-query/components/match-custom-media-query/"}},l={},s=[{value:"Breakpoints",id:"breakpoints",level:2},{value:"Common usage",id:"common-usage",level:2},{value:"Outputs",id:"outputs",level:2}],m={toc:s},u="wrapper";function c(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"match-media-query"},"Match Media Query"),(0,n.kt)("p",null,"This component is used to check what breakpoint is currently active. It has one output for every breakpoint that outputs either ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Please note that you need to place a ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/library/prefabs/media-query/components/media-query-setup"},"Media Query Setup"))," component in your projects home component for the ",(0,n.kt)("strong",{parentName:"p"},"Match Media Query")," comoponent to work.")),(0,n.kt)("br",null),(0,n.kt)("div",{className:"ndl-image-with-background xl"},(0,n.kt)("p",null,(0,n.kt)("img",{src:a(13729).Z,width:"1326",height:"674"}))),(0,n.kt)("h2",{id:"breakpoints"},"Breakpoints"),(0,n.kt)("p",null,"The breakpoints are set in the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/library/prefabs/media-query/components/media-query-setup"},"Media Query Setup"))," component. If the built in default breakpoints don't fit you, you can change them there."),(0,n.kt)("p",null,"For edge cases where you need to use a one-off breakpoint, you can use the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/library/prefabs/media-query/components/match-custom-media-query"},"Match Custom Media Query"))," component."),(0,n.kt)("h2",{id:"common-usage"},"Common usage"),(0,n.kt)("p",null,"The most common usecase is to use this node together with a ",(0,n.kt)("a",{parentName:"p",href:"/nodes/utilities/logic/states"},"States")," node, or the ",(0,n.kt)("strong",{parentName:"p"},"Mounted")," input, as pictured above."),(0,n.kt)("h2",{id:"outputs"},"Outputs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Data"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-data"},"Matches Small Mobile")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"true")," if the viewport matches the ",(0,n.kt)("strong",{parentName:"td"},"Small Mobile")," breakpoint")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-data"},"Matches Regular Mobile")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"true")," if the viewport matches the ",(0,n.kt)("strong",{parentName:"td"},"Regular Mobile")," breakpoint")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-data"},"Matches Tablet")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"true")," if the viewport matches the ",(0,n.kt)("strong",{parentName:"td"},"Tablet")," breakpoint")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-data"},"Matches Regular Desktop")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"true")," if the viewport matches the ",(0,n.kt)("strong",{parentName:"td"},"Regular Desktop")," breakpoint")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-data"},"Matches Large Desktop")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"true")," if the viewport matches the ",(0,n.kt)("strong",{parentName:"td"},"Large Desktop")," breakpoint")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-data"},"Matches All Mobile")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"true")," if the viewport matches the ",(0,n.kt)("strong",{parentName:"td"},"Small Mobile")," or ",(0,n.kt)("strong",{parentName:"td"},"Regular Mobile")," breakpoints")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"ndl-data"},"Matches All Desktop")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"true")," if the viewport matches the ",(0,n.kt)("strong",{parentName:"td"},"Regular Desktop")," or ",(0,n.kt)("strong",{parentName:"td"},"Large Desktop")," breakpoints")))))}c.isMDXComponent=!0},13729:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/media-query-d1dfd275a652aa31ecbd652fe747928f.png"}}]);