"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[7590],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return b}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),b=a,f=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return t?n.createElement(f,l(l({ref:r},u),{},{components:t})):n.createElement(f,l({ref:r},u))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99250:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=t(83117),a=t(80102),o=(t(67294),t(3905)),l=["components"],c={title:"Bar Chart | Chart.js Module",hide_title:!0},i="Bar Chart",s={unversionedId:"modules/chartjs/charts/bar",id:"modules/chartjs/charts/bar",title:"Bar Chart | Chart.js Module",description:"Basic",source:"@site/library/modules/chartjs/charts/bar.md",sourceDirName:"modules/chartjs/charts",slug:"/modules/chartjs/charts/bar",permalink:"/2.6/library/modules/chartjs/charts/bar",tags:[],version:"current",frontMatter:{title:"Bar Chart | Chart.js Module",hide_title:!0},sidebar:"chartjsSidebar",previous:{title:"Chart.js Module",permalink:"/2.6/library/modules/chartjs/"},next:{title:"Line Chart | Chart.js Module",permalink:"/2.6/library/modules/chartjs/charts/line"}},u={},p=[{value:"Basic",id:"basic",level:2},{value:"Horizontal",id:"horizontal",level:2}],d={toc:p};function b(e){var r=e.components,c=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,c,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bar-chart"},"Bar Chart"),(0,o.kt)("h2",{id:"basic"},"Basic"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(95824).Z,width:"859",height:"466"}))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'Outputs.Data = {\n    labels: ["January", "February", "March", "April", "May", "June", "July"],\n    datasets: [\n        {\n            label: "Dataset 1",\n            data: [\n                [32, 36],\n                [-86, 50],\n                [-37, 0],\n                [-3, 43],\n                [3, -46],\n                [-36, 6],\n                [3, 4]\n            ],\n            backgroundColor: "rgb(255, 99, 132)"\n        },\n        {\n            label: "Dataset 2",\n            data: [\n                [91, 31],\n                [50, -56],\n                [-79, -14],\n                [44, -47],\n                [91, 78],\n                [12, 53],\n                [-71, -16]\n            ],\n            backgroundColor: "rgb(54, 162, 235)"\n        }\n    ]\n}\n')),(0,o.kt)("h2",{id:"horizontal"},"Horizontal"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(70305).Z,width:"791",height:"447"}))),(0,o.kt)("p",null,'Change the "Index Axis" to "Y" in the property panel.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'Outputs.Data = {\n    labels: ["January", "February", "March", "April", "May", "June", "July"],\n    datasets: [\n        {\n            label: "Dataset 1",\n            data: [-91.99588477, 52.35768176, -57.81550069, 61.43518519, 64.43072702, -1.91529492, 57.45884774],\n            borderColor: "rgb(255, 99, 132)",\n            backgroundColor: "rgba(255, 99, 132, 0.5)"\n        },\n        {\n            label: "Dataset 2",\n            data: [74.65192044, -58.97805213, -37.25823045, -50.31207133, 37.66289438, 43.95061728, -43.79458162],\n            borderColor: "rgb(54, 162, 235)",\n            backgroundColor: "rgba(54, 162, 235, 0.5)"\n        }\n    ]\n}\n')))}b.isMDXComponent=!0},95824:function(e,r,t){r.Z=t.p+"assets/images/bar-chart-ba71f6dc03f081ae9287a3b1ba71237f.png"},70305:function(e,r,t){r.Z=t.p+"assets/images/horizontal-bar-chart-01b7fb5baa7f96d7a9e1d24ed6a4f43f.png"}}]);