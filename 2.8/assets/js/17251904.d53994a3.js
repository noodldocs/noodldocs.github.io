"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[6037],{3905:function(t,a,e){e.d(a,{Zo:function(){return s},kt:function(){return u}});var n=e(67294);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function p(t,a){if(null==t)return{};var e,n,l=function(t,a){if(null==t)return{};var e,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(l[e]=t[e]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var d=n.createContext({}),o=function(t){var a=n.useContext(d),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},s=function(t){var a=o(t.components);return n.createElement(d.Provider,{value:a},t.children)},m={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(t,a){var e=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),k=o(e),u=l,N=k["".concat(d,".").concat(u)]||k[u]||m[u]||r;return e?n.createElement(N,i(i({ref:a},s),{},{components:e})):n.createElement(N,i({ref:a},s))}));function u(t,a){var e=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=e.length,i=new Array(r);i[0]=k;var p={};for(var d in a)hasOwnProperty.call(a,d)&&(p[d]=a[d]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var o=2;o<r;o++)i[o]=e[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}k.displayName="MDXCreateElement"},38244:function(t,a,e){e.r(a),e.d(a,{assets:function(){return s},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return m}});var n=e(83117),l=e(80102),r=(e(67294),e(3905)),i=["components"],p={title:"Pie Chart",hide_title:!0},d=void 0,o={unversionedId:"modules/chartjs/nodes/pie",id:"modules/chartjs/nodes/pie",title:"Pie Chart",description:"This visual node adds a pie chart to the visual tree.",source:"@site/library/modules/chartjs/nodes/pie.md",sourceDirName:"modules/chartjs/nodes",slug:"/modules/chartjs/nodes/pie",permalink:"/2.8/library/modules/chartjs/nodes/pie",tags:[],version:"current",frontMatter:{title:"Pie Chart",hide_title:!0},sidebar:"chartjsSidebar",previous:{title:"Doughnut Chart",permalink:"/2.8/library/modules/chartjs/nodes/doughnut"},next:{title:"Polar Area Chart",permalink:"/2.8/library/modules/chartjs/nodes/polar-area"}},s={},m=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],k={toc:m};function u(t){var a=t.components,p=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},k,p,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,""),(0,r.kt)("h1",{id:"pie-chart"},"Pie Chart"),(0,r.kt)("p",null,"This visual node adds a pie chart to the visual tree."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:e(3307).Z,width:"766",height:"775"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../charts/pie"},"Here")," is an example how to use used the node."),(0,r.kt)("p",null,""),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("div",{className:"ndl-table-35-65"},(0,r.kt)("h3",null,"General Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Index Axis")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Responsive")),(0,r.kt)("td",{parentName:"tr",align:null},"Resizes the chart canvas when its parent node changes size.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Maintain Aspect Ratio")),(0,r.kt)("td",{parentName:"tr",align:null},"Maintain the original canvas aspect ratio (width / height) when resizing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Aspect Ratio")),(0,r.kt)("td",{parentName:"tr",align:null},"Canvas aspect ratio (i.e. width / height, a value of 1 representing a square canvas). Default: 1")))),(0,r.kt)("h3",null,"Title"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Show Title")),(0,r.kt)("td",{parentName:"tr",align:null},"Is the title shown?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Text")),(0,r.kt)("td",{parentName:"tr",align:null},"Title text to display.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Align")),(0,r.kt)("td",{parentName:"tr",align:null},"Alignment of the title.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Position")),(0,r.kt)("td",{parentName:"tr",align:null},"Position of title.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Color")),(0,r.kt)("td",{parentName:"tr",align:null},"Color of text.")))),(0,r.kt)("h3",null,"Title Font"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Font Family")),(0,r.kt)("td",{parentName:"tr",align:null},"The font family.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Font Size")),(0,r.kt)("td",{parentName:"tr",align:null},"The font size.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Font Style")),(0,r.kt)("td",{parentName:"tr",align:null},"The font style.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Weight")),(0,r.kt)("td",{parentName:"tr",align:null},"The font weight (boldness).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Line Height")),(0,r.kt)("td",{parentName:"tr",align:null},"The height of an individual line of text.")))),(0,r.kt)("h3",null,"Tooltips"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Show Tooltips")),(0,r.kt)("td",{parentName:"tr",align:null},"Are on-canvas tooltips enabled?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Mode")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets which elements appear in the tooltip.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Position")),(0,r.kt)("td",{parentName:"tr",align:null},"The mode for positioning the tooltip.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Background Color")),(0,r.kt)("td",{parentName:"tr",align:null},"Background color of the tooltip.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Body Color")),(0,r.kt)("td",{parentName:"tr",align:null},"Color of body text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Spacing")),(0,r.kt)("td",{parentName:"tr",align:null},"Spacing to add to top and bottom of each tooltip item.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Corner Radius")),(0,r.kt)("td",{parentName:"tr",align:null},"Radius of tooltip corner curves.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Display Colors")),(0,r.kt)("td",{parentName:"tr",align:null},"If true, color boxes are shown in the tooltip.")))),(0,r.kt)("h3",null,"Tooltips Font"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Font Family")),(0,r.kt)("td",{parentName:"tr",align:null},"The font family.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Font Size")),(0,r.kt)("td",{parentName:"tr",align:null},"The font size.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Font Style")),(0,r.kt)("td",{parentName:"tr",align:null},"The font style.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Weight")),(0,r.kt)("td",{parentName:"tr",align:null},"The font weight (boldness).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Line Height")),(0,r.kt)("td",{parentName:"tr",align:null},"The height of an individual line of text.")))),(0,r.kt)("h3",null,"Legend Labels"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Text Color")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Text Align")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Use Point Style")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Point Style")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",null,"Legend Label Font"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Font Family")),(0,r.kt)("td",{parentName:"tr",align:null},"The font family.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Font Size")),(0,r.kt)("td",{parentName:"tr",align:null},"The font size.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Font Style")),(0,r.kt)("td",{parentName:"tr",align:null},"The font style.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Weight")),(0,r.kt)("td",{parentName:"tr",align:null},"The font weight (boldness).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Line Height")),(0,r.kt)("td",{parentName:"tr",align:null},"The height of an individual line of text.")))),(0,r.kt)("h3",null,"Data Decimation"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Is decimation enabled?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Algorithm")),(0,r.kt)("td",{parentName:"tr",align:null},"Decimation algorithm to use. See the ",(0,r.kt)("a",{parentName:"td",href:"https://www.chartjs.org/docs/latest/configuration/decimation.html#decimation-algorithms"},"more..."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Samples")),(0,r.kt)("td",{parentName:"tr",align:null},"If the ",(0,r.kt)("inlineCode",{parentName:"td"},"lttb")," algorithm is used, this is the number of samples in the output dataset. Defaults to the canvas width to pick 1 sample per pixel.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Threshold")),(0,r.kt)("td",{parentName:"tr",align:null},"If the number of samples in the current axis range is above this value, the decimation will be triggered. Defaults to 4 times the canvas width. The number of point after decimation can be higher than the ",(0,r.kt)("inlineCode",{parentName:"td"},"threshold")," value.")))),(0,r.kt)("h3",null,"Interaction"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Intersect")),(0,r.kt)("td",{parentName:"tr",align:null},"If true, the interaction mode only applies when the mouse position intersects an item on the chart.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Mode")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets which elements appear in the interaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Axis")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Include Invisible")),(0,r.kt)("td",{parentName:"tr",align:null},"If true, the invisible points that are outside of the chart area will also be included when evaluating interactions."))))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("div",{className:"ndl-table-35-65"},(0,r.kt)("h3",null,"Click Event"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Data")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Click")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",null,"Before Event"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Chart")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Args")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Before")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",null,"Debug"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Chart.js Options")),(0,r.kt)("td",{parentName:"tr",align:null}))))))}u.isMDXComponent=!0},3307:function(t,a,e){a.Z=e.p+"assets/images/pie-chart-748c645c0e2c6194fc573c2c31f0fda7.png"}}]);