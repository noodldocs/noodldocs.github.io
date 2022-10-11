"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[1329],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5458:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"Translation",hide_title:!0},s=void 0,u={unversionedId:"modules/i18next/translation",id:"modules/i18next/translation",title:"Translation",description:"This is the node where the translation happens. You typically connect these to your Text nodes and Text Input nodes. Translation nodes automatically change their output if language changes, if the bundle is changing, and when it becomes available.",source:"@site/library/modules/i18next/translation.md",sourceDirName:"modules/i18next",slug:"/modules/i18next/translation",permalink:"/2.7/library/modules/i18next/translation",tags:[],version:"current",frontMatter:{title:"Translation",hide_title:!0},sidebar:"i18nextSidebar",previous:{title:"LanguageBundle",permalink:"/2.7/library/modules/i18next/language-bundle"}},p={},c=[{value:"Inputs",id:"inputs",level:2},{value:"Variables",id:"variables",level:3},{value:"Outputs",id:"outputs",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,""),(0,o.kt)("h1",{id:"translation"},"Translation"),(0,o.kt)("p",null,"This is the node where the translation happens. You typically connect these to your ",(0,o.kt)("strong",{parentName:"p"},"Text")," nodes and ",(0,o.kt)("strong",{parentName:"p"},"Text Input")," nodes. Translation nodes automatically change their output if language changes, if the bundle is changing, and when it becomes available."),(0,o.kt)("p",null,"There are two dynamic features in the Translation node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If your translation includes some of i18next dynamic features, for example having a ",(0,o.kt)("inlineCode",{parentName:"p"},"{{count}}")," variable deciding between a plural string or not, or by inserting variables in the middle of the string, any variables used can be added as inputs on the Translation node, and be connected to other nodes in Noodl. For example if a translation uses the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"{{count}}"),' adding an input named "count" and connecting it to a Number node, the translation will change when the Number node is updated.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The name of the key can be dynamic. In most cases the key of a translation is known when building the app, but there are cases when the name of the key is only known during runtime. For example, in a database with thousands of products and related texts translated to multiple languages, the translations are generated when needed. The name of the keys are also generated dynamically. A product with an id ",(0,o.kt)("inlineCode",{parentName:"p"},"xyz123abc")," may have its translations stored in an object named ",(0,o.kt)("inlineCode",{parentName:"p"},"xyz123abc"),", ",(0,o.kt)("inlineCode",{parentName:"p"},'{"xyz123abc":{"label":"Product A", "desc":"A great product"}}'),". By using dynamic naming of the key in a Translation node, using the {}-pattern, the actual key can be resolved at runtime. In this scenario naming the Key in the translation node ",(0,o.kt)("inlineCode",{parentName:"p"},"{product_id}.label"),', will expose a new input to the Translation node called "product_id" that can be connected to a Model node in Noodl.\n'))),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Key"),(0,o.kt)("br",{parentName:"p"}),"\n","The key of the translation. This can be a static text or a text including one or more variables using ",(0,o.kt)("inlineCode",{parentName:"p"},"{var}")," syntax. Variables will become available as inputs."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Namespace"),(0,o.kt)("br",{parentName:"p"}),"\n","The namespace that this translation is using. Should match a namespace of a Language Bundle."),(0,o.kt)("h3",{id:"variables"},"Variables"),(0,o.kt)("p",null,"You can also add custom inputs to the translation node. They will be mapped to variables in the translated text itself (",(0,o.kt)("inlineCode",{parentName:"p"},"{{var}}"),") to make use of the i18next transformation functionality, such as plurals."),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Translation"),(0,o.kt)("br",{parentName:"p"}),"\n","This translated and formatted text string."))}m.isMDXComponent=!0}}]);