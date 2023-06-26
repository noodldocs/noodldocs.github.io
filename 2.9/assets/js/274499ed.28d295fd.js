"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[9742],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,h=m["".concat(o,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23015:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=["components"],s={hide_title:!0,hide_table_of_contents:!0,title:"Expression"},o=void 0,u={unversionedId:"math/expression",id:"math/expression",title:"Expression",description:"This node enables you to do your own calculations using simple expressons. Inputs are automatically derived from the expression. An expression set to a + someName + 1 will get two inputs: one for a and one for someName.",source:"@site/nodes/math/expression.md",sourceDirName:"math",slug:"/math/expression",permalink:"/2.9/nodes/math/expression",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Expression"},sidebar:"nodeSidebar",previous:{title:"REST",permalink:"/2.9/nodes/data/rest"},next:{title:"Function",permalink:"/2.9/nodes/javascript/function"}},p={},d=[{value:"Built in math functions",id:"built-in-math-functions",level:2},{value:"Advanced",id:"advanced",level:2},{value:"Truthy and Falsy signals",id:"truthy-and-falsy-signals",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Outputs",id:"outputs",level:2}],m={toc:d};function c(e){var t=e.components,s=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"is-hidden"},""),(0,i.kt)("h1",{id:"expression"},"Expression"),(0,i.kt)("p",null,"This node enables you to do your own calculations using simple expressons. Inputs are automatically derived from the expression. An expression set to ",(0,i.kt)("inlineCode",{parentName:"p"},"a + someName + 1")," will get two inputs: one for ",(0,i.kt)("span",{className:"ndl-data"},"a")," and one for ",(0,i.kt)("span",{className:"ndl-data"},"someName"),"."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(62329).Z,width:"1458",height:"572"}))),(0,i.kt)("p",null,"The ",(0,i.kt)("span",{className:"ndl-node"},"Expression")," node runs JavaScript under the hood and supports a range of mathematical expressions."),(0,i.kt)("p",{className:"is-hidden"},""),(0,i.kt)("h2",{id:"built-in-math-functions"},"Built in math functions"),(0,i.kt)("p",null,"Expressions support the following funcitons:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"min(a,b)")," - Minimum of two values"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max(a,b)")," - Maximum of two values"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cos(angle)")," - The cosine of an angle in radians"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sin(angle)")," - The sine of an angle in radians"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tan(angle)")," - The tangent of an angle in radians"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sqrt(a)")," - Square root of a number"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pi")," - PI in radians"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"round(a)")," - Rounds a number to the closest integer"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"floor(a)")," - Removes the fractional part of a number"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ceil(a)")," - Rounds a value up to the closest higher integer. E.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"round(1.1)")," equals ",(0,i.kt)("inlineCode",{parentName:"li"},"2"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"abs(a)")," - The absolute value of a number. Negative values will become positive."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"random()")," - A random number from 0 to 1")),(0,i.kt)("h2",{id:"advanced"},"Advanced"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Expression")," node is running JavaScript under the hood so in addition to the above functions any standard\nJavaScript functions will also be valid. The ",(0,i.kt)("em",{parentName:"p"},"Expression")," node will add a ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," statement before the\nexpression is executed. ",(0,i.kt)("inlineCode",{parentName:"p"},"1+2")," will be evaluated as ",(0,i.kt)("inlineCode",{parentName:"p"},"return (1+2)")),(0,i.kt)("h2",{id:"truthy-and-falsy-signals"},"Truthy and Falsy signals"),(0,i.kt)("p",null,"You can use the signal outputs ",(0,i.kt)("span",{className:"ndl-signal"},"On True")," and ",(0,i.kt)("span",{className:"ndl-signal"},"On False"),' to trigger actions based on the result of an expression, if the result is considered "truthy" or "falsy" in Javascript.'),(0,i.kt)("p",null,"Normally, an expression node recalculates whenever one of the input parameters change. However, if you connect a signal to the ",(0,i.kt)("span",{className:"ndl-signal"},"Run")," signal input you can control when the expression is calculated. It will only calculate and update it's outputs when a signal is received."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(72660).Z,width:"1622",height:"754"}))),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Expression")),(0,i.kt)("td",{parentName:"tr",align:null},"The expression to be calculated.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Run")),(0,i.kt)("td",{parentName:"tr",align:null},"Normally the expression is recalucated every time one of the input parameters change. But if you want to control when the expression is calculated you can connect a signal to this input, then the expression will ",(0,i.kt)("strong",{parentName:"td"},"only")," be calculated when a signal is received.")))),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"Inputs are automatically derived from the expression. An expression set to ",(0,i.kt)("inlineCode",{parentName:"p"},"a + someName + 1")," will get two inputs, one for ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," and one for ",(0,i.kt)("inlineCode",{parentName:"p"},"someName"),".",(0,i.kt)("br",null),(0,i.kt)("br",null),"As soon as any of the input values changes, the expression is reevaluated. "),(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Result")),(0,i.kt)("td",{parentName:"tr",align:null},"This output contains the result when evaluating the expression")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Is true")),(0,i.kt)("td",{parentName:"tr",align:null},'This output will be true if the result of the expression is "truthy", that is considered true in Javascript.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Is false")),(0,i.kt)("td",{parentName:"tr",align:null},'This output will be true if the result of the expression is "falsy", that is considered false in Javascript.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-signal"},"On True")),(0,i.kt)("td",{parentName:"tr",align:null},'A signal will be sent on this output when the expression is calculated and the result is "truthy".')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-signal"},"On False")),(0,i.kt)("td",{parentName:"tr",align:null},'A signal will be sent on this output when the expression is calculated and the result is "falsy".')))))}c.isMDXComponent=!0},62329:function(e,t,n){t.Z=n.p+"assets/images/expression-1-9e6fe3a9526d1f226789b4714d3d33b5.png"},72660:function(e,t,n){t.Z=n.p+"assets/images/expression-2-3ab0b0548333a62f4ab7cbbfa7f00e31.png"}}]);