"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[1190],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16385:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"Release Notes",hide_title:!0},s="Release Notes",u={unversionedId:"modules/chartjs/release-notes",id:"modules/chartjs/release-notes",title:"Release Notes",description:"Version 1.4.3 [2023-06-08]",source:"@site/library/modules/chartjs/release-notes.md",sourceDirName:"modules/chartjs",slug:"/modules/chartjs/release-notes",permalink:"/2.9/library/modules/chartjs/release-notes",tags:[],version:"current",frontMatter:{title:"Release Notes",hide_title:!0},sidebar:"chartjsSidebar",previous:{title:"Scatter Chart",permalink:"/2.9/library/modules/chartjs/nodes/scatter"}},c={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"release-notes"},"Release Notes"),(0,o.kt)("p",null,"Version 1.4.3 ","[2023-06-08]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add Animation ",(0,o.kt)("inlineCode",{parentName:"li"},"On Data Update")," input on Chart nodes, provides the ability to prevent animations when updating the chart in real time. (",(0,o.kt)("a",{parentName:"li",href:"https://www.chartjs.org/docs/latest/developers/updates.html#preventing-animations"},"Preventing Animations"),")"),(0,o.kt)("li",{parentName:"ul"},"Add Animations object to all nodes, similar to Scales, making it possible to create nicer animations. (",(0,o.kt)("a",{parentName:"li",href:"https://www.chartjs.org/docs/latest/configuration/animations.html#animations"},"Chart.js Animations"),")")),(0,o.kt)("p",null,"Version 1.4.2 ","[2023-05-16]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add Chart node, custom node allowing a full Chart.js config to create the chart.")),(0,o.kt)("p",null,"Version 1.4.1 ","[2023-05-04]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add Helpers output to all nodes, allowing for interactions.")),(0,o.kt)("p",null,"Version 1.4.0 ","[2023-04-06]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Change "Maintain Aspect Ratio" default from ',(0,o.kt)("inlineCode",{parentName:"li"},"true")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"Fix responsiveness"),(0,o.kt)("li",{parentName:"ul"},"Fix default inputs not applied"),(0,o.kt)("li",{parentName:"ul"},"Fix issue when data is updated before Did Mount"),(0,o.kt)("li",{parentName:"ul"},"Add a link to docs on each node")),(0,o.kt)("p",null,"Version 1.3.0 ","[2023-03-31]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support for Before Event and Click Event"),(0,o.kt)("li",{parentName:"ul"},"Support for Data Decimation plugin"),(0,o.kt)("li",{parentName:"ul"},"Support for Interaction"),(0,o.kt)("li",{parentName:"ul"},"Only show default chart data when there is no connection to data")))}m.isMDXComponent=!0}}]);