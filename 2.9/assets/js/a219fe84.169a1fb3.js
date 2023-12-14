"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[1192],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,h=d["".concat(o,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={hide_title:!0,hide_table_of_contents:!0,title:"Expression node"},i=void 0,s={unversionedId:"math/expression/README",id:"math/expression/README",title:"Expression node",description:"This node enables you to do your own calculations using simple expressons. Inputs are automatically derived from the expression. An expression set to a + someName + 1 will get two inputs: one for a and one for someName.",source:"@site/nodes/math/expression/README.md",sourceDirName:"math/expression",slug:"/math/expression/",permalink:"/2.9/nodes/math/expression/",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Expression node"},sidebar:"nodeSidebar",previous:{title:"REST node",permalink:"/2.9/nodes/data/rest/"},next:{title:"Function node",permalink:"/2.9/nodes/javascript/function/"}},o={},p=[{value:"Built in math functions",id:"built-in-math-functions",level:2},{value:"Advanced",id:"advanced",level:2},{value:"Truthy and Falsy signals",id:"truthy-and-falsy-signals",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Outputs",id:"outputs",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"expression"},"Expression"),(0,r.kt)("p",null,"This node enables you to do your own calculations using simple expressons. Inputs are automatically derived from the expression. An expression set to ",(0,r.kt)("inlineCode",{parentName:"p"},"a + someName + 1")," will get two inputs: one for ",(0,r.kt)("span",{className:"ndl-data"},"a")," and one for ",(0,r.kt)("span",{className:"ndl-data"},"someName"),"."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(14054).Z,width:"1458",height:"572"}))),(0,r.kt)("p",null,"The ",(0,r.kt)("span",{className:"ndl-node"},"Expression")," node runs JavaScript under the hood and supports a range of mathematical expressions."),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h2",{id:"built-in-math-functions"},"Built in math functions"),(0,r.kt)("p",null,"Expressions support the following funcitons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"min(a,b)")," - Minimum of two values"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max(a,b)")," - Maximum of two values"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cos(angle)")," - The cosine of an angle in radians"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sin(angle)")," - The sine of an angle in radians"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tan(angle)")," - The tangent of an angle in radians"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sqrt(a)")," - Square root of a number"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pi")," - PI in radians"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"round(a)")," - Rounds a number to the closest integer"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"floor(a)")," - Removes the fractional part of a number"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ceil(a)")," - Rounds a value up to the closest higher integer. E.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"round(1.1)")," equals ",(0,r.kt)("inlineCode",{parentName:"li"},"2"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"abs(a)")," - The absolute value of a number. Negative values will become positive."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"random()")," - A random number from 0 to 1")),(0,r.kt)("h2",{id:"advanced"},"Advanced"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"Expression")," node is running JavaScript under the hood so in addition to the above functions any standard\nJavaScript functions will also be valid. The ",(0,r.kt)("em",{parentName:"p"},"Expression")," node will add a ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," statement before the\nexpression is executed. ",(0,r.kt)("inlineCode",{parentName:"p"},"1+2")," will be evaluated as ",(0,r.kt)("inlineCode",{parentName:"p"},"return (1+2)")),(0,r.kt)("h2",{id:"truthy-and-falsy-signals"},"Truthy and Falsy signals"),(0,r.kt)("p",null,"You can use the signal outputs ",(0,r.kt)("span",{className:"ndl-signal"},"On True")," and ",(0,r.kt)("span",{className:"ndl-signal"},"On False"),' to trigger actions based on the result of an expression, if the result is considered "truthy" or "falsy" in Javascript.'),(0,r.kt)("p",null,"Normally, an expression node recalculates whenever one of the input parameters change. However, if you connect a signal to the ",(0,r.kt)("span",{className:"ndl-signal"},"Run")," signal input you can control when the expression is calculated. It will only calculate and update it's outputs when a signal is received."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(67259).Z,width:"1622",height:"754"}))),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Expression")),(0,r.kt)("td",{parentName:"tr",align:null},"The expression to be calculated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Run")),(0,r.kt)("td",{parentName:"tr",align:null},"Normally the expression is recalucated every time one of the input parameters change. But if you want to control when the expression is calculated you can connect a signal to this input, then the expression will ",(0,r.kt)("strong",{parentName:"td"},"only")," be calculated when a signal is received.")))),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"Inputs are automatically derived from the expression. An expression set to ",(0,r.kt)("inlineCode",{parentName:"p"},"a + someName + 1")," will get two inputs, one for ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," and one for ",(0,r.kt)("inlineCode",{parentName:"p"},"someName"),".",(0,r.kt)("br",null),(0,r.kt)("br",null),"As soon as any of the input values changes, the expression is reevaluated. "),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Result")),(0,r.kt)("td",{parentName:"tr",align:null},"This output contains the result when evaluating the expression")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Is true")),(0,r.kt)("td",{parentName:"tr",align:null},'This output will be true if the result of the expression is "truthy", that is considered true in Javascript.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Is false")),(0,r.kt)("td",{parentName:"tr",align:null},'This output will be true if the result of the expression is "falsy", that is considered false in Javascript.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"On True")),(0,r.kt)("td",{parentName:"tr",align:null},'A signal will be sent on this output when the expression is calculated and the result is "truthy".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"On False")),(0,r.kt)("td",{parentName:"tr",align:null},'A signal will be sent on this output when the expression is calculated and the result is "falsy".')))))}m.isMDXComponent=!0},14054:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/expression-1-9e6fe3a9526d1f226789b4714d3d33b5.png"},67259:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/expression-2-3ab0b0548333a62f4ab7cbbfa7f00e31.png"}}]);