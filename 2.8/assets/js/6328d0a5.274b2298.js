"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[5941],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),i=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=i(e.components);return n.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=i(t),d=a,f=p["".concat(u,".").concat(d)]||p[d]||b[d]||o;return t?n.createElement(f,c(c({ref:r},s),{},{components:t})):n.createElement(f,c({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=p;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=t[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},83471:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return b}});var n=t(83117),a=t(80102),o=(t(67294),t(3905)),c=["components"],l={title:"Bubble Chart | Chart.js Module",hide_title:!0},u="Bubble Chart Example",i={unversionedId:"modules/chartjs/charts/bubble",id:"modules/chartjs/charts/bubble",title:"Bubble Chart | Chart.js Module",description:"Basic",source:"@site/library/modules/chartjs/charts/bubble.md",sourceDirName:"modules/chartjs/charts",slug:"/modules/chartjs/charts/bubble",permalink:"/2.8/library/modules/chartjs/charts/bubble",tags:[],version:"current",frontMatter:{title:"Bubble Chart | Chart.js Module",hide_title:!0},sidebar:"chartjsSidebar",previous:{title:"Stacked Line Chart | Chart.js Module",permalink:"/2.8/library/modules/chartjs/charts/stacked-line"},next:{title:"Doughnut Chart | Chart.js Module",permalink:"/2.8/library/modules/chartjs/charts/doughnut"}},s={},b=[{value:"Basic",id:"basic",level:2}],p={toc:b};function d(e){var r=e.components,l=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bubble-chart-example"},"Bubble Chart Example"),(0,o.kt)("h2",{id:"basic"},"Basic"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(27133).Z,width:"818",height:"424"}))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'Outputs.Data = {\n    labels: ["January", "February", "March", "April", "May", "June", "July"],\n    datasets: [\n        {\n            label: "Dataset 1",\n            data: [\n                { x: 6.64266118, y: 17.53858025, r: 9.3146433470507550 },\n                { x: 96.5149177, y: 11.62894376, r: 7.6109825102880660 },\n                { x: 76.4077503, y: 26.60408093, r: 11.861539780521262 },\n                { x: 58.6668381, y: 93.32818930, r: 6.2947102194787380 },\n                { x: 63.0452674, y: 61.18398491, r: 9.2129629629629620 },\n                { x: 61.1479766, y: 9.183813440, r: 11.881730109739369 },\n                { x: 87.5428669, y: 23.74742798, r: 14.084962277091908 }\n            ],\n            borderColor: "rgb(255, 99, 132)",\n            backgroundColor: "rgba(255, 99, 132, 0.5)"\n        },\n        {\n            label: "Dataset 2",\n            data: [\n                { x: 13.47350823, y: 60.22333676, r: 10.254929698216735 },\n                { x: 18.52066187, y: 81.83427641, r: 13.214334705075446 },\n                { x: 18.52666324, y: 36.67566872, r: 8.6403034979423870 },\n                { x: 88.80015432, y: 63.01911866, r: 5.5760459533607690 },\n                { x: 89.83496228, y: 62.09919410, r: 14.916623799725650 },\n                { x: 78.42121056, y: 75.89120370, r: 11.631172839506174 },\n                { x: 85.42309671, y: 31.55564129, r: 13.651791838134430 }\n            ],\n            borderColor: "rgb(255, 159, 64)",\n            backgroundColor: "rgba(255, 99, 132, 0.5)"\n        }\n    ]\n}\n')))}d.isMDXComponent=!0},27133:function(e,r,t){r.Z=t.p+"assets/images/bubble-chart-8d9c8727f23f048259bc25648d77059c.png"}}]);