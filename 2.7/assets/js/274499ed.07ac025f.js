"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[9742],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,f=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23015:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={hide_title:!0,hide_table_of_contents:!0,title:"Expression"},s=void 0,p={unversionedId:"math/expression",id:"math/expression",title:"Expression",description:"This node enables you to do your own calculations using simple expressons. Inputs are automatically derived from the expression. An expression set to a + someName + 1 will get two inputs: one for a and one for someName.",source:"@site/nodes/math/expression.md",sourceDirName:"math",slug:"/math/expression",permalink:"/2.6/nodes/math/expression",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Expression"},sidebar:"nodeSidebar",previous:{title:"REST",permalink:"/2.6/nodes/data/rest"},next:{title:"Function",permalink:"/2.6/nodes/javascript/function"}},u={},d=[{value:"Built in math functions",id:"built-in-math-functions",level:2},{value:"Advanced",id:"advanced",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],m={toc:d};function c(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"is-hidden"},""),(0,i.kt)("h1",{id:"expression"},"Expression"),(0,i.kt)("p",null,"This node enables you to do your own calculations using simple expressons. Inputs are automatically derived from the expression. An expression set to ",(0,i.kt)("inlineCode",{parentName:"p"},"a + someName + 1")," will get two inputs: one for ",(0,i.kt)("span",{className:"ndl-data"},"a")," and one for ",(0,i.kt)("span",{className:"ndl-data"},"someName"),"."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(84894).Z,width:"1240",height:"298"}))),(0,i.kt)("p",null,"The ",(0,i.kt)("span",{className:"ndl-node"},"Expression")," node runs JavaScript under the hood and supports a range of mathematical expressions."),(0,i.kt)("p",{className:"is-hidden"},""),(0,i.kt)("h2",{id:"built-in-math-functions"},"Built in math functions"),(0,i.kt)("p",null,"Expressions support the following funcitons:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"min(a,b)")," - Minimum of two values"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max(a,b)")," - Maximum of two values"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cos(angle)")," - The cosine of an angle in radians"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sin(angle)")," - The sine of an angle in radians"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tan(angle)")," - The tangent of an angle in radians"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sqrt(a)")," - Square root of a number"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pi")," - PI in radians"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"round(a)")," - Rounds a number to the closest integer"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"floor(a)")," - Removes the fractional part of a number"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ceil(a)")," - Rounds a value up to the closest higher integer. E.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"round(1.1)")," equals ",(0,i.kt)("inlineCode",{parentName:"li"},"2"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"abs(a)")," - The absolute value of a number. Negative values will become positive."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"random()")," - A random number from 0 to 1")),(0,i.kt)("h2",{id:"advanced"},"Advanced"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Expression")," node is running JavaScript under the hood so in addition to the above functions any standard\nJavaScript functions will also be valid. The ",(0,i.kt)("em",{parentName:"p"},"Expression")," node will add a ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," statement before the\nexpression is executed. ",(0,i.kt)("inlineCode",{parentName:"p"},"1+2")," will be evaluated as ",(0,i.kt)("inlineCode",{parentName:"p"},"return (1+2)")),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Inputs")),(0,i.kt)("td",{parentName:"tr",align:null},"Inputs are automatically derived from the expression. An expression set to ",(0,i.kt)("inlineCode",{parentName:"td"},"a + someName + 1")," will get two inputs, one for ",(0,i.kt)("inlineCode",{parentName:"td"},"a")," and one for ",(0,i.kt)("inlineCode",{parentName:"td"},"someName"),".",(0,i.kt)("br",null),(0,i.kt)("br",null),"As soon as any of the input values changes, the expression is reevaluated.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Expression")),(0,i.kt)("td",{parentName:"tr",align:null},"The expression to be calculated.")))),(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"ndl-data"},"Result")),(0,i.kt)("td",{parentName:"tr",align:null},"This output contains the result when evaluating the expression")))))}c.isMDXComponent=!0},84894:function(e,t,n){t.Z=n.p+"assets/images/expression-eaf91b6307843fb7b694be831c5b121a.png"}}]);