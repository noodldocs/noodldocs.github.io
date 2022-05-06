"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[9525],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),g=r,h=m["".concat(u,".").concat(g)]||m[g]||p[g]||l;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83506:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],o={title:"Query Sheet Aggregate",hide_title:!0},u=void 0,s={unversionedId:"modules/gsheets/node-docs/query-sheet-aggregate/README",id:"modules/gsheets/node-docs/query-sheet-aggregate/README",title:"Query Sheet Aggregate",description:"This node is used do aggregate data queries on a column from a public Google Sheet. The aggregate query will be either",source:"@site/library/modules/gsheets/node-docs/query-sheet-aggregate/README.md",sourceDirName:"modules/gsheets/node-docs/query-sheet-aggregate",slug:"/modules/gsheets/node-docs/query-sheet-aggregate/",permalink:"/2.6/library/modules/gsheets/node-docs/query-sheet-aggregate/",tags:[],version:"current",frontMatter:{title:"Query Sheet Aggregate",hide_title:!0},sidebar:"gsheetsSidebar",previous:{title:"Query Sheet",permalink:"/2.6/library/modules/gsheets/node-docs/query-sheet/"},next:{title:"Sheet Row",permalink:"/2.6/library/modules/gsheets/node-docs/sheet-row/"}},d={},p=[{value:"Results from the Aggregate Query",id:"results-from-the-aggregate-query",level:2},{value:"Document Id and Sheet Name",id:"document-id-and-sheet-name",level:2},{value:"Filters",id:"filters",level:2},{value:"Controlling when queries are performed",id:"controlling-when-queries-are-performed",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],m={toc:p};function g(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,""),(0,l.kt)("h1",{id:"query-sheet-aggregate"},"Query Sheet Aggregate"),(0,l.kt)("p",null,"This node is used do aggregate data queries on a column from a public Google Sheet. The aggregate query will be either"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"min"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"max")," - The minimum/maximum value of the specfied column."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"unique")," - An ",(0,l.kt)("strong",{parentName:"li"},"Array")," containing all unique values in the column."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"count")," - The number of entries in total of that column. Empty cells will not be counted.")),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(48497).Z,width:"1040",height:"635"}))),(0,l.kt)("p",null,"?> Note that the Google Sheet need to be made public for Noodl to be able to access it."),(0,l.kt)("p",null,""),(0,l.kt)("h2",{id:"results-from-the-aggregate-query"},"Results from the Aggregate Query"),(0,l.kt)("p",null,"Note the the type of the ",(0,l.kt)("strong",{parentName:"p"},"Result")," output is dependent on which aggregate query that is run. For ",(0,l.kt)("inlineCode",{parentName:"p"},"min"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"max")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"count")," ",(0,l.kt)("strong",{parentName:"p"},"Result")," will be a ",(0,l.kt)("strong",{parentName:"p"},"Number"),". For ",(0,l.kt)("inlineCode",{parentName:"p"},"unique")," it will be an ",(0,l.kt)("strong",{parentName:"p"},"Array"),"."),(0,l.kt)("h2",{id:"document-id-and-sheet-name"},"Document Id and Sheet Name"),(0,l.kt)("p",null,"You refer to the document through its id. You find the id in the URL of the Google Sheet."),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(38124).Z,width:"1213",height:"49"}))),(0,l.kt)("p",null,"You also have to specify the Sheet Name. You find the Sheet names in the Google Document at the bottom of the sheet."),(0,l.kt)("div",{className:"ndl-image-with-background"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(1118).Z,width:"445",height:"555"}))),(0,l.kt)("h2",{id:"filters"},"Filters"),(0,l.kt)("p",null,"A filter can be added to the query, meaning the aggregate will only be calculated based on the filtered rows. It can be a combination of various filter operators (",(0,l.kt)("inlineCode",{parentName:"p"},"equalTo"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"notEqualTo"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"exists"),", etc) depending on the type of the column. Multiple filters can be combined using ",(0,l.kt)("inlineCode",{parentName:"p"},"AND")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"OR"),". A the values to filter against can be set dynamic by making the filter use an ",(0,l.kt)("inlineCode",{parentName:"p"},"Input")," rateher than a static value. This will create an input on the node that you can connect."),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(48497).Z,width:"1040",height:"635"}))),(0,l.kt)("h2",{id:"controlling-when-queries-are-performed"},"Controlling when queries are performed"),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"Do")," signal is unconnected, the Query will automatically be run when the ",(0,l.kt)("strong",{parentName:"p"},"Query Sheet Aggregate")," node is created and whenever any of its inputs change. By connecting the ",(0,l.kt)("inlineCode",{parentName:"p"},"Do")," signal, the Query will only be run when ",(0,l.kt)("inlineCode",{parentName:"p"},"Do")," is triggered."),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Document Id")),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the Google Sheets document. You can find it in the URL of the sheet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Sheet Name")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the sheet where to capture the data in the Google Sheet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Column")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the column in the Google Sheet to run the aggreagate query on.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Aggregate")),(0,l.kt)("td",{parentName:"tr",align:null},"Can be one of the following values: ",(0,l.kt)("inlineCode",{parentName:"td"},"Min"),"/",(0,l.kt)("inlineCode",{parentName:"td"},"Max"),"/",(0,l.kt)("inlineCode",{parentName:"td"},"Unique"),"/",(0,l.kt)("inlineCode",{parentName:"td"},"Count"),". ",(0,l.kt)("inlineCode",{parentName:"td"},"Min"),"/",(0,l.kt)("inlineCode",{parentName:"td"},"Max")," will set the miminum value in the specified column on the ",(0,l.kt)("inlineCode",{parentName:"td"},"Result")," output. ",(0,l.kt)("inlineCode",{parentName:"td"},"count")," will set the number of non-empty cells in the column on ",(0,l.kt)("inlineCode",{parentName:"td"},"Result"),". Finally ",(0,l.kt)("inlineCode",{parentName:"td"},"Unique")," will set the ",(0,l.kt)("inlineCode",{parentName:"td"},"Result")," output to an ",(0,l.kt)("strong",{parentName:"td"},"Array")," of objects of the form ",(0,l.kt)("inlineCode",{parentName:"td"},"{Label:<unique value>, Value:<unique value>}")," with all unique values of the column.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Filter")),(0,l.kt)("td",{parentName:"tr",align:null},"Each filter that is set up to controlled by an input will show up as an input on the node.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Do")),(0,l.kt)("td",{parentName:"tr",align:null},"This signal will trigger the query to be executed. If the signal is not connected, the query will automatically be triggered when instanciated and when any of its inputs changes.")))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Result")),(0,l.kt)("td",{parentName:"tr",align:null},"The result of the aggregate query. It's either a ",(0,l.kt)("span",{className:"ndl-data"},"Number")," or an ",(0,l.kt)("strong",{parentName:"td"},"Array")," depending on what aggregation query that that was performed (see ",(0,l.kt)("inlineCode",{parentName:"td"},"Aggregate")," input above).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Error")),(0,l.kt)("td",{parentName:"tr",align:null},"A textual description of the latest error, when the ",(0,l.kt)("inlineCode",{parentName:"td"},"Failure")," signal was triggered as a result of a failed Query.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Success")),(0,l.kt)("td",{parentName:"tr",align:null},"This signal is sent when a Query was successfully performed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Failure")),(0,l.kt)("td",{parentName:"tr",align:null},"This signal is sent when a Query failed for some reason. The ",(0,l.kt)("inlineCode",{parentName:"td"},"Error")," property will contain the error message.")))))}g.isMDXComponent=!0},48497:function(e,t,n){t.Z=n.p+"assets/images/query-sheet-ag-1-018552dc78f7421f04862c0b58734a8b.png"},38124:function(e,t,n){t.Z=n.p+"assets/images/query-sheet-3-ab9a6d0c49ac84ca276721d5ce0695b0.png"},1118:function(e,t,n){t.Z=n.p+"assets/images/query-sheet-4-984fc531b728514de6e39f400944bb90.png"}}]);