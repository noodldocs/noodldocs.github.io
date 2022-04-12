"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[2713],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=d(n),m=r,c=h["".concat(s,".").concat(m)]||h[m]||p[m]||l;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},77821:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],o={hide_title:!0},s=void 0,d={unversionedId:"gsheets/node-docs/query-sheet/README",id:"gsheets/node-docs/query-sheet/README",title:"README",description:"This node is used to query data from a public Google Sheet. You can filter and sort the data. The data is organized in Rows where the values of each cell in the row is exposed in a properties of the row.",source:"@site/modules/gsheets/node-docs/query-sheet/README.md",sourceDirName:"gsheets/node-docs/query-sheet",slug:"/gsheets/node-docs/query-sheet/",permalink:"/2.6/modules/gsheets/node-docs/query-sheet/",tags:[],version:"current",frontMatter:{hide_title:!0},sidebar:"gsheetsSidebar",previous:{title:"Google Sheets Filtering",permalink:"/2.6/modules/gsheets/guides/filtering/"},next:{title:"README",permalink:"/2.6/modules/gsheets/node-docs/query-sheet-aggregate/"}},u={},p=[{value:"Document Id and Sheet Name",id:"document-id-and-sheet-name",level:2},{value:"Filters",id:"filters",level:2},{value:"Returned results",id:"returned-results",level:2},{value:"Controlling when queries are performed",id:"controlling-when-queries-are-performed",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],h={toc:p};function m(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,""),(0,l.kt)("h1",{id:"query-sheet"},"Query Sheet"),(0,l.kt)("p",null,"This node is used to query data from a public Google Sheet. You can filter and sort the data. The data is organized in ",(0,l.kt)("em",{parentName:"p"},"Rows")," where the values of each cell in the row is exposed in a properties of the row."),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(95391).Z,width:"2690",height:"1480"}))),(0,l.kt)("p",null,"The node works in a similar way as the ",(0,l.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/query-records"},"Query Records")," node where you can add filters and sorting."),(0,l.kt)("div",{className:"ndl-image-with-background"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(48285).Z,width:"426",height:"781"}))),(0,l.kt)("p",null,"?> Note that the Google Sheet need to be made public for Noodl to be able to access it."),(0,l.kt)("p",null,""),(0,l.kt)("h2",{id:"document-id-and-sheet-name"},"Document Id and Sheet Name"),(0,l.kt)("p",null,"You refer to the document through its id. You find the id in the URL of the Google Sheet."),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(89430).Z,width:"1213",height:"49"}))),(0,l.kt)("p",null,"You also have to specify the Sheet Name. You find the Sheet names in the Google Document at the bottom of the sheet."),(0,l.kt)("div",{className:"ndl-image-with-background"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(76287).Z,width:"445",height:"555"}))),(0,l.kt)("h2",{id:"filters"},"Filters"),(0,l.kt)("p",null,"A filter can be added to the query. It can be a combination of various filter operators (",(0,l.kt)("inlineCode",{parentName:"p"},"equalTo"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"notEqualTo"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"exists"),", etc) depending on the type of the column. Multiple filters can be combined using ",(0,l.kt)("inlineCode",{parentName:"p"},"AND")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"OR"),". A the values to filter against can be set dynamic by making the filter use an ",(0,l.kt)("inlineCode",{parentName:"p"},"Input")," rateher than a static value. This will create an input on the node that you can connect."),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(24957).Z,width:"1306",height:"469"}))),(0,l.kt)("h2",{id:"returned-results"},"Returned results"),(0,l.kt)("p",null,"The results of the query is an ",(0,l.kt)("strong",{parentName:"p"},"Array"),", just as with a regular ",(0,l.kt)("strong",{parentName:"p"},"Query Record"),". The Array contains Objects that represents the rows in the Google Sheet. Each column value will be represented by a property in the respective object, with the same name as the column. When using a ",(0,l.kt)("a",{parentName:"p",href:"/modules/gsheets/node-docs/sheet-row"},"Sheet Row")," node, the ",(0,l.kt)("strong",{parentName:"p"},"Id")," of the object can be used to set the ",(0,l.kt)("strong",{parentName:"p"},"Row Id")," of the Sheet Row node."),(0,l.kt)("h2",{id:"controlling-when-queries-are-performed"},"Controlling when queries are performed"),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"Do")," signal is unconnected, the Query will automatically be run when the ",(0,l.kt)("strong",{parentName:"p"},"Query Sheet")," node is created and whenever any of its inputs change. By connecting the ",(0,l.kt)("inlineCode",{parentName:"p"},"Do")," signal, the Query will only be run when ",(0,l.kt)("inlineCode",{parentName:"p"},"Do")," is triggered."),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Document Id")),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the Google Sheets document. You can find it in the URL of the sheet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Sheet Name")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the sheet where to capture the data in the Google Sheet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Use Column For Id")),(0,l.kt)("td",{parentName:"tr",align:null},"You can select a column that will become the ",(0,l.kt)("strong",{parentName:"td"},"Id")," of the Noodl Objects that will represent each row. It's important that the values in this column are unique. You can also chose ",(0,l.kt)("inlineCode",{parentName:"td"},"Unique Id"),", then Noodl will generate it's own id's.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Use limit")),(0,l.kt)("td",{parentName:"tr",align:null},"A",(0,l.kt)("span",{className:"ndl-data"}," boolean ")," that selects whether there will be a limit or not on how many items that are loaded when the query is run. This is useful when you are handling large amount of items and you want to do pagination.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Limit")),(0,l.kt)("td",{parentName:"tr",align:null},"This input is only available if ",(0,l.kt)("inlineCode",{parentName:"td"},"Use Limit")," is set to",(0,l.kt)("span",{className:"ndl-data"}," true "),". It decides how many items that will be loeded when the query is triggered. To be used in combination with ",(0,l.kt)("inlineCode",{parentName:"td"},"Skip")," to create paginations.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Skip")),(0,l.kt)("td",{parentName:"tr",align:null},"This input is only available if ",(0,l.kt)("inlineCode",{parentName:"td"},"Use Limit")," is set to",(0,l.kt)("span",{className:"ndl-data"}," true "),". It sets how many items that will be skipped when the query is triggered. To be used in combination with ",(0,l.kt)("inlineCode",{parentName:"td"},"Skip")," to create paginations. For example, if ",(0,l.kt)("inlineCode",{parentName:"td"},"Limit")," is set to 10 and ",(0,l.kt)("inlineCode",{parentName:"td"},"Skip")," is set to 30, the query will fetch item 31-40.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Filter")),(0,l.kt)("td",{parentName:"tr",align:null},"Each filter that is set up to controlled by an input will show up as an input on the node.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Do")),(0,l.kt)("td",{parentName:"tr",align:null},"This signal will trigger the query to be executed. If the signal is not connected, the query will automatically be triggered when instanciated and when any of its inputs changes.")))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Items")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of items that's the result of the query. The items represents a row in the Google Sheet and will contain all column values as properties on the Object, as well as an id that's set up depending on the ",(0,l.kt)("inlineCode",{parentName:"td"},"Set Column For Id")," property is set up.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Count")),(0,l.kt)("td",{parentName:"tr",align:null},"The number of items the latest query returned.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"First Item Id")),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the first item that was returned in the latest query.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Error")),(0,l.kt)("td",{parentName:"tr",align:null},"A textual description of the latest error, when the ",(0,l.kt)("inlineCode",{parentName:"td"},"Failure")," signal was triggered as a result of a failed Query.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Success")),(0,l.kt)("td",{parentName:"tr",align:null},"This signal is sent when a Query was successfully performed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Failure")),(0,l.kt)("td",{parentName:"tr",align:null},"This signal is sent when a Query failed for some reason. The ",(0,l.kt)("inlineCode",{parentName:"td"},"Error")," property will contain the error message.")))))}m.isMDXComponent=!0},95391:function(e,t,n){t.Z=n.p+"assets/images/query-sheet-1-93d43cd2dc1261bf7c893d430dc98420.png"},48285:function(e,t,n){t.Z=n.p+"assets/images/query-sheet-2-6b0c5817f62fcae179abf334ccbc6c9e.png"},89430:function(e,t,n){t.Z=n.p+"assets/images/query-sheet-3-ab9a6d0c49ac84ca276721d5ce0695b0.png"},76287:function(e,t,n){t.Z=n.p+"assets/images/query-sheet-4-984fc531b728514de6e39f400944bb90.png"},24957:function(e,t,n){t.Z=n.p+"assets/images/query-sheet-5-6e7af3a85399a4400e94452dc7910964.png"}}]);