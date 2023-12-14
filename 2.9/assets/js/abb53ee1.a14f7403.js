"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[8386],{3905:(t,a,e)=>{e.d(a,{Zo:()=>o,kt:()=>N});var n=e(67294);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function d(t,a){if(null==t)return{};var e,n,l=function(t,a){if(null==t)return{};var e,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(l[e]=t[e]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var p=n.createContext({}),s=function(t){var a=n.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},o=function(t){var a=s(t.components);return n.createElement(p.Provider,{value:a},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),m=s(e),u=l,N=m["".concat(p,".").concat(u)]||m[u]||k[u]||r;return e?n.createElement(N,i(i({ref:a},o),{},{components:e})):n.createElement(N,i({ref:a},o))}));function N(t,a){var e=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=e.length,i=new Array(r);i[0]=u;var d={};for(var p in a)hasOwnProperty.call(a,p)&&(d[p]=a[p]);d.originalType=t,d[m]="string"==typeof t?t:l,i[1]=d;for(var s=2;s<r;s++)i[s]=e[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},93942:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var n=e(87462),l=(e(67294),e(3905));const r={title:"Bubble Chart",hide_title:!0},i=void 0,d={unversionedId:"modules/chartjs/nodes/bubble",id:"modules/chartjs/nodes/bubble",title:"Bubble Chart",description:"This visual node adds a bubble chart to the visual tree.",source:"@site/library/modules/chartjs/nodes/bubble.md",sourceDirName:"modules/chartjs/nodes",slug:"/modules/chartjs/nodes/bubble",permalink:"/2.9/library/modules/chartjs/nodes/bubble",draft:!1,tags:[],version:"current",frontMatter:{title:"Bubble Chart",hide_title:!0},sidebar:"chartjsSidebar",previous:{title:"Line Chart",permalink:"/2.9/library/modules/chartjs/nodes/line"},next:{title:"Doughnut Chart",permalink:"/2.9/library/modules/chartjs/nodes/doughnut"}},p={},s=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],o={toc:s},m="wrapper";function k(t){let{components:a,...r}=t;return(0,l.kt)(m,(0,n.Z)({},o,r,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,""),(0,l.kt)("h1",{id:"bubble-chart"},"Bubble Chart"),(0,l.kt)("p",null,"This visual node adds a bubble chart to the visual tree."),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:e(96395).Z,width:"818",height:"424"}))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../charts/bubble"},"Here")," is an example how to use used the node."),(0,l.kt)("p",null,""),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("div",{className:"ndl-table-35-65"},(0,l.kt)("h3",null,"General Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Index Axis")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Responsive")),(0,l.kt)("td",{parentName:"tr",align:null},"Resizes the chart canvas when its parent node changes size.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Maintain Aspect Ratio")),(0,l.kt)("td",{parentName:"tr",align:null},"Maintain the original canvas aspect ratio (width / height) when resizing.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Aspect Ratio")),(0,l.kt)("td",{parentName:"tr",align:null},"Canvas aspect ratio (i.e. width / height, a value of 1 representing a square canvas). Default: 1")))),(0,l.kt)("h3",null,"Animation"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"On Data Update")),(0,l.kt)("td",{parentName:"tr",align:null},"When false, it wont animate when you update the data object. (",(0,l.kt)("a",{parentName:"td",href:"https://www.chartjs.org/docs/latest/developers/updates.html#preventing-animations"},"Preventing Animations"),")")))),(0,l.kt)("h3",null,"Title"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Show Title")),(0,l.kt)("td",{parentName:"tr",align:null},"Is the title shown?")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Text")),(0,l.kt)("td",{parentName:"tr",align:null},"Title text to display.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Align")),(0,l.kt)("td",{parentName:"tr",align:null},"Alignment of the title.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Position")),(0,l.kt)("td",{parentName:"tr",align:null},"Position of title.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Color")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of text.")))),(0,l.kt)("h3",null,"Title Font"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Font Family")),(0,l.kt)("td",{parentName:"tr",align:null},"The font family.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Font Size")),(0,l.kt)("td",{parentName:"tr",align:null},"The font size.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Font Style")),(0,l.kt)("td",{parentName:"tr",align:null},"The font style.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Weight")),(0,l.kt)("td",{parentName:"tr",align:null},"The font weight (boldness).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Line Height")),(0,l.kt)("td",{parentName:"tr",align:null},"The height of an individual line of text.")))),(0,l.kt)("h3",null,"Tooltips"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Show Tooltips")),(0,l.kt)("td",{parentName:"tr",align:null},"Are on-canvas tooltips enabled?")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Mode")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets which elements appear in the tooltip.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Position")),(0,l.kt)("td",{parentName:"tr",align:null},"The mode for positioning the tooltip.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Background Color")),(0,l.kt)("td",{parentName:"tr",align:null},"Background color of the tooltip.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Body Color")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of body text.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Spacing")),(0,l.kt)("td",{parentName:"tr",align:null},"Spacing to add to top and bottom of each tooltip item.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Corner Radius")),(0,l.kt)("td",{parentName:"tr",align:null},"Radius of tooltip corner curves.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Display Colors")),(0,l.kt)("td",{parentName:"tr",align:null},"If true, color boxes are shown in the tooltip.")))),(0,l.kt)("h3",null,"Tooltips Font"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Font Family")),(0,l.kt)("td",{parentName:"tr",align:null},"The font family.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Font Size")),(0,l.kt)("td",{parentName:"tr",align:null},"The font size.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Font Style")),(0,l.kt)("td",{parentName:"tr",align:null},"The font style.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Weight")),(0,l.kt)("td",{parentName:"tr",align:null},"The font weight (boldness).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Line Height")),(0,l.kt)("td",{parentName:"tr",align:null},"The height of an individual line of text.")))),(0,l.kt)("h3",null,"Legend Labels"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Text Color")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Text Align")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Use Point Style")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Point Style")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",null,"Legend Label Font"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Font Family")),(0,l.kt)("td",{parentName:"tr",align:null},"The font family.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Font Size")),(0,l.kt)("td",{parentName:"tr",align:null},"The font size.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Font Style")),(0,l.kt)("td",{parentName:"tr",align:null},"The font style.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Weight")),(0,l.kt)("td",{parentName:"tr",align:null},"The font weight (boldness).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Line Height")),(0,l.kt)("td",{parentName:"tr",align:null},"The height of an individual line of text.")))),(0,l.kt)("h3",null,"Data Decimation"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Enabled")),(0,l.kt)("td",{parentName:"tr",align:null},"Is decimation enabled?")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Algorithm")),(0,l.kt)("td",{parentName:"tr",align:null},"Decimation algorithm to use. See the ",(0,l.kt)("a",{parentName:"td",href:"https://www.chartjs.org/docs/latest/configuration/decimation.html#decimation-algorithms"},"more..."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Samples")),(0,l.kt)("td",{parentName:"tr",align:null},"If the ",(0,l.kt)("inlineCode",{parentName:"td"},"lttb")," algorithm is used, this is the number of samples in the output dataset. Defaults to the canvas width to pick 1 sample per pixel.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Threshold")),(0,l.kt)("td",{parentName:"tr",align:null},"If the number of samples in the current axis range is above this value, the decimation will be triggered. Defaults to 4 times the canvas width. The number of point after decimation can be higher than the ",(0,l.kt)("inlineCode",{parentName:"td"},"threshold")," value.")))),(0,l.kt)("h3",null,"Interaction"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Intersect")),(0,l.kt)("td",{parentName:"tr",align:null},"If true, the interaction mode only applies when the mouse position intersects an item on the chart.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Mode")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets which elements appear in the interaction.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Axis")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Include Invisible")),(0,l.kt)("td",{parentName:"tr",align:null},"If true, the invisible points that are outside of the chart area will also be included when evaluating interactions."))))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("div",{className:"ndl-table-35-65"},(0,l.kt)("h3",null,"Click Event"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Data")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Click")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",null,"Before Event"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Chart")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Args")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Before")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",null,"Debug"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Chart.js Options")),(0,l.kt)("td",{parentName:"tr",align:null}))))))}k.isMDXComponent=!0},96395:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/images/bubble-chart-8d9c8727f23f048259bc25648d77059c.png"}}]);