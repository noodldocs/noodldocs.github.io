"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[3837],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||l;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},98784:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),o=["components"],i={hide_title:!0},s=void 0,u={unversionedId:"modules/gsheets/node-docs/sheet-row/README",id:"modules/gsheets/node-docs/sheet-row/README",title:"README",description:"This node is used do simplify handling of results from a Query Sheet node. It's typically used in a combination with a Repeater Item to easily connect any columns available in a row in a Google Sheets sheet.",source:"@site/library/modules/gsheets/node-docs/sheet-row/README.md",sourceDirName:"modules/gsheets/node-docs/sheet-row",slug:"/modules/gsheets/node-docs/sheet-row/",permalink:"/2.6/library/modules/gsheets/node-docs/sheet-row/",tags:[],version:"current",frontMatter:{hide_title:!0},sidebar:"gsheetsSidebar",previous:{title:"README",permalink:"/2.6/library/modules/gsheets/node-docs/query-sheet-aggregate/"},next:{title:"Release Notes",permalink:"/2.6/library/modules/gsheets/release-notes"}},d={},p=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],c={toc:p};function h(e){var t=e.components,i=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,""),(0,l.kt)("h1",{id:"sheet-row"},"Sheet Row"),(0,l.kt)("p",null,"This node is used do simplify handling of results from a ",(0,l.kt)("a",{parentName:"p",href:"/library/modules/gsheets/node-docs/sheet-row"},"Query Sheet")," node. It's typically used in a combination with a ",(0,l.kt)("a",{parentName:"p",href:"/nodes/ui-controls/repeater-item"},"Repeater Item")," to easily connect any columns available in a row in a Google Sheets sheet."),(0,l.kt)("p",null,"By setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"Row Id")," of the ",(0,l.kt)("strong",{parentName:"p"},"Sheet Row"),", and selecting the ",(0,l.kt)("strong",{parentName:"p"},"Sheet")," (if you use more than one) your ",(0,l.kt)("strong",{parentName:"p"},"Sheet Row")," will automatically show all available column values."),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(72813).Z,width:"1700",height:"1660"}))),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(93058).Z,width:"2422",height:"2180"}))),(0,l.kt)("p",null,"?> Note that the Google Sheet need to be made public for Noodl to be able to access it."),(0,l.kt)("p",null,""),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Sheet")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the Sheet in which the row lies. This input only exists if you are querying multiple sheets, otherwise it will automatically select the sheet you are querying.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Row Id")),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the Sheet Row. The Id is determined by the ",(0,l.kt)("a",{parentName:"td",href:"/library/modules/gsheets/node-docs/query-sheet"},"Query Sheet")," node accessing the Sheet, where you can decide how the Id is generated throguh the ",(0,l.kt)("strong",{parentName:"td"},"Use Column For Id")," property.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Fetch")),(0,l.kt)("td",{parentName:"tr",align:null},"Explicitly tells the ",(0,l.kt)("strong",{parentName:"td"},"Sheet Row")," to fetch data from the Google Sheet. If this signal is unconnected it will fetch automatically when the ",(0,l.kt)("strong",{parentName:"td"},"Sheet Row")," node is created.")))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Column Values")),(0,l.kt)("td",{parentName:"tr",align:null},"Each column in the row will become and output with the same name holding the value of the cell.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Fetched")),(0,l.kt)("td",{parentName:"tr",align:null},"This signal is sent when new data have been fetched from the Google Sheet to the ",(0,l.kt)("strong",{parentName:"td"},"Sheet Row"),".")))))}h.isMDXComponent=!0},72813:function(e,t,n){t.Z=n.p+"assets/images/sheet-row-1-f7f393c35e99ac60e61a2d5209339a73.png"},93058:function(e,t,n){t.Z=n.p+"assets/images/sheet-row-2-881b482ddd5dd8ac0617579069f23cd2.png"}}]);