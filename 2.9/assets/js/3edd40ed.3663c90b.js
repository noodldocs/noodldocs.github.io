"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[9525],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,h=p["".concat(s,".").concat(g)]||p[g]||m[g]||l;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},83506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"Query Sheet Aggregate",hide_title:!0},i=void 0,o={unversionedId:"modules/gsheets/node-docs/query-sheet-aggregate/README",id:"modules/gsheets/node-docs/query-sheet-aggregate/README",title:"Query Sheet Aggregate",description:"This node is used do aggregate data queries on a column from a public Google Sheet. The aggregate query will be either",source:"@site/library/modules/gsheets/node-docs/query-sheet-aggregate/README.md",sourceDirName:"modules/gsheets/node-docs/query-sheet-aggregate",slug:"/modules/gsheets/node-docs/query-sheet-aggregate/",permalink:"/2.9/library/modules/gsheets/node-docs/query-sheet-aggregate/",draft:!1,tags:[],version:"current",frontMatter:{title:"Query Sheet Aggregate",hide_title:!0},sidebar:"gsheetsSidebar",previous:{title:"Query Sheet",permalink:"/2.9/library/modules/gsheets/node-docs/query-sheet/"},next:{title:"Sheet Row",permalink:"/2.9/library/modules/gsheets/node-docs/sheet-row/"}},s={},u=[{value:"Results from the Aggregate Query",id:"results-from-the-aggregate-query",level:2},{value:"Document Id and Sheet Name",id:"document-id-and-sheet-name",level:2},{value:"Filters",id:"filters",level:2},{value:"Controlling when queries are performed",id:"controlling-when-queries-are-performed",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],d={toc:u},p="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(p,(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,""),(0,r.kt)("h1",{id:"query-sheet-aggregate"},"Query Sheet Aggregate"),(0,r.kt)("p",null,"This node is used do aggregate data queries on a column from a public Google Sheet. The aggregate query will be either"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"min"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"max")," - The minimum/maximum value of the specfied column."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unique")," - An ",(0,r.kt)("strong",{parentName:"li"},"Array")," containing all unique values in the column."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"count")," - The number of entries in total of that column. Empty cells will not be counted.")),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(62807).Z,width:"1040",height:"635"}))),(0,r.kt)("p",null,"?> Note that the Google Sheet need to be made public for Noodl to be able to access it."),(0,r.kt)("p",null,""),(0,r.kt)("h2",{id:"results-from-the-aggregate-query"},"Results from the Aggregate Query"),(0,r.kt)("p",null,"Note the the type of the ",(0,r.kt)("strong",{parentName:"p"},"Result")," output is dependent on which aggregate query that is run. For ",(0,r.kt)("inlineCode",{parentName:"p"},"min"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"max")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"count")," ",(0,r.kt)("strong",{parentName:"p"},"Result")," will be a ",(0,r.kt)("strong",{parentName:"p"},"Number"),". For ",(0,r.kt)("inlineCode",{parentName:"p"},"unique")," it will be an ",(0,r.kt)("strong",{parentName:"p"},"Array"),"."),(0,r.kt)("h2",{id:"document-id-and-sheet-name"},"Document Id and Sheet Name"),(0,r.kt)("p",null,"You refer to the document through its id. You find the id in the URL of the Google Sheet."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(15857).Z,width:"1213",height:"49"}))),(0,r.kt)("p",null,"You also have to specify the Sheet Name. You find the Sheet names in the Google Document at the bottom of the sheet."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(39667).Z,width:"445",height:"555"}))),(0,r.kt)("h2",{id:"filters"},"Filters"),(0,r.kt)("p",null,"A filter can be added to the query, meaning the aggregate will only be calculated based on the filtered rows. It can be a combination of various filter operators (",(0,r.kt)("inlineCode",{parentName:"p"},"equalTo"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"notEqualTo"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"exists"),", etc) depending on the type of the column. Multiple filters can be combined using ",(0,r.kt)("inlineCode",{parentName:"p"},"AND")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"OR"),". A the values to filter against can be set dynamic by making the filter use an ",(0,r.kt)("inlineCode",{parentName:"p"},"Input")," rateher than a static value. This will create an input on the node that you can connect."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(62807).Z,width:"1040",height:"635"}))),(0,r.kt)("h2",{id:"controlling-when-queries-are-performed"},"Controlling when queries are performed"),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"Do")," signal is unconnected, the Query will automatically be run when the ",(0,r.kt)("strong",{parentName:"p"},"Query Sheet Aggregate")," node is created and whenever any of its inputs change. By connecting the ",(0,r.kt)("inlineCode",{parentName:"p"},"Do")," signal, the Query will only be run when ",(0,r.kt)("inlineCode",{parentName:"p"},"Do")," is triggered."),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Document Id")),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the Google Sheets document. You can find it in the URL of the sheet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Sheet Name")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the sheet where to capture the data in the Google Sheet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Column")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the column in the Google Sheet to run the aggreagate query on.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Aggregate")),(0,r.kt)("td",{parentName:"tr",align:null},"Can be one of the following values: ",(0,r.kt)("inlineCode",{parentName:"td"},"Min"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"Max"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"Unique"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"Count"),". ",(0,r.kt)("inlineCode",{parentName:"td"},"Min"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"Max")," will set the miminum value in the specified column on the ",(0,r.kt)("inlineCode",{parentName:"td"},"Result")," output. ",(0,r.kt)("inlineCode",{parentName:"td"},"count")," will set the number of non-empty cells in the column on ",(0,r.kt)("inlineCode",{parentName:"td"},"Result"),". Finally ",(0,r.kt)("inlineCode",{parentName:"td"},"Unique")," will set the ",(0,r.kt)("inlineCode",{parentName:"td"},"Result")," output to an ",(0,r.kt)("strong",{parentName:"td"},"Array")," of objects of the form ",(0,r.kt)("inlineCode",{parentName:"td"},"{Label:<unique value>, Value:<unique value>}")," with all unique values of the column.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Filter")),(0,r.kt)("td",{parentName:"tr",align:null},"Each filter that is set up to controlled by an input will show up as an input on the node.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Do")),(0,r.kt)("td",{parentName:"tr",align:null},"This signal will trigger the query to be executed. If the signal is not connected, the query will automatically be triggered when instanciated and when any of its inputs changes.")))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Result")),(0,r.kt)("td",{parentName:"tr",align:null},"The result of the aggregate query. It's either a ",(0,r.kt)("span",{className:"ndl-data"},"Number")," or an ",(0,r.kt)("strong",{parentName:"td"},"Array")," depending on what aggregation query that that was performed (see ",(0,r.kt)("inlineCode",{parentName:"td"},"Aggregate")," input above).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Error")),(0,r.kt)("td",{parentName:"tr",align:null},"A textual description of the latest error, when the ",(0,r.kt)("inlineCode",{parentName:"td"},"Failure")," signal was triggered as a result of a failed Query.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Success")),(0,r.kt)("td",{parentName:"tr",align:null},"This signal is sent when a Query was successfully performed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Failure")),(0,r.kt)("td",{parentName:"tr",align:null},"This signal is sent when a Query failed for some reason. The ",(0,r.kt)("inlineCode",{parentName:"td"},"Error")," property will contain the error message.")))))}m.isMDXComponent=!0},62807:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/query-sheet-ag-1-018552dc78f7421f04862c0b58734a8b.png"},15857:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/query-sheet-3-ab9a6d0c49ac84ca276721d5ce0695b0.png"},39667:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/query-sheet-4-984fc531b728514de6e39f400944bb90.png"}}]);