"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[1718],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=l,h=p["".concat(o,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:l,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(87462),l=(n(67294),n(3905));const r={hide_title:!0,hide_table_of_contents:!0,title:"Columns node"},i=void 0,s={unversionedId:"basic-elements/columns/README",id:"basic-elements/columns/README",title:"Columns node",description:"This node is used to layout your content in columns with gaps.",source:"@site/nodes/basic-elements/columns/README.md",sourceDirName:"basic-elements/columns",slug:"/basic-elements/columns/",permalink:"/2.9/nodes/basic-elements/columns/",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Columns node"},sidebar:"nodeSidebar",previous:{title:"Group node",permalink:"/2.9/nodes/basic-elements/group/"},next:{title:"Text node",permalink:"/2.9/nodes/basic-elements/text/"}},o={},d=[{value:"Layout strings",id:"layout-strings",level:2},{value:"Responsive layouts",id:"responsive-layouts",level:2},{value:"Using the Min Column Width value",id:"using-the-min-column-width-value",level:3},{value:"Using different layout strings",id:"using-different-layout-strings",level:3},{value:"Inputs",id:"inputs",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h1",{id:"columns"},"Columns"),(0,l.kt)("p",null,"This node is used to layout your content in columns with gaps."),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(11739).Z,width:"1210",height:"452"}))),(0,l.kt)("p",null,"The ",(0,l.kt)("span",{className:"ndl-node"},"Columns")," node does not have any own styling attached to it. Instead it arranges all its children into dynamic layouts using ",(0,l.kt)("strong",{parentName:"p"},"layout strings"),"."),(0,l.kt)("h2",{id:"layout-strings"},"Layout strings"),(0,l.kt)("p",null,"A layout string is simply a string of numbers with spaces between them. Every number represents a fraction of the full container width and is converted to a column. A ",(0,l.kt)("span",{className:"ndl-node"},"Columns")," node with the layout string ",(0,l.kt)("inlineCode",{parentName:"p"},"1 2 1")," that contains 5 children will be rendered like this:"),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(35942).Z,width:"1184",height:"352"}))),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h2",{id:"responsive-layouts"},"Responsive layouts"),(0,l.kt)("h3",{id:"using-the-min-column-width-value"},"Using the Min Column Width value"),(0,l.kt)("p",null,"The easiest way of making the columns responsive is by setting the ",(0,l.kt)("span",{class:"ndl-data"},"Min Column Width")," value. This will check if the columns will fit with your specified ",(0,l.kt)("span",{class:"ndl-data"},"Layout String"),". If the container can't fit the columns when they are at their Min Width, the layout will fold into a grid with fewer columns."),(0,l.kt)("p",null,"Make sure the children you pass are set to a width of ",(0,l.kt)("inlineCode",{parentName:"p"},"100%")," of their parent."),(0,l.kt)("h3",{id:"using-different-layout-strings"},"Using different layout strings"),(0,l.kt)("p",null,"Advanced responsive layouts can easily be created by passing different values to the ",(0,l.kt)("span",{class:"ndl-data"},"Layout String")," input using a ",(0,l.kt)("a",{parentName:"p",href:"/nodes/utilities/logic/states"},"States")," node and the ",(0,l.kt)("a",{parentName:"p",href:"/library/prefabs/media-query/"},"Media Queries")," prefab."),(0,l.kt)("p",null,"Make sure the children you pass are set to a width of ",(0,l.kt)("inlineCode",{parentName:"p"},"100%")," of their parent."),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Layout String")),(0,l.kt)("td",{parentName:"tr",align:null},"Determines the size and layout of the columns that the children are rendered into.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Horizontal Gap")),(0,l.kt)("td",{parentName:"tr",align:null},"The horizontal spacing between the columns in ",(0,l.kt)("inlineCode",{parentName:"td"},"px"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Vertical Gap")),(0,l.kt)("td",{parentName:"tr",align:null},"The vertical spacing between the columns in ",(0,l.kt)("inlineCode",{parentName:"td"},"px"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Layout Direction")),(0,l.kt)("td",{parentName:"tr",align:null},"If the columns should be rendered horizontally or vertically.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Min Column Width")),(0,l.kt)("td",{parentName:"tr",align:null},"The smallest the columns are allowed to be before they fold into a layout with fewer columns.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Mounted")),(0,l.kt)("td",{parentName:"tr",align:null},"If the columns node should be rendered in the app or not.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Justify Content")),(0,l.kt)("td",{parentName:"tr",align:null},"The position of children in unfilled rows.")))))}c.isMDXComponent=!0},35942:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/columns_example-0ac8b47ffba2ee825bf43b94a4b9925f.png"},11739:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/columns_visual-44fef13af6ff86fc92f7b30dda17f353.png"}}]);