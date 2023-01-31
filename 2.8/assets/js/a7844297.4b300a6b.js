"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[5951],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93881:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],l={title:"Scatter Chart | Chart.js Module",hide_title:!0},s=void 0,c={unversionedId:"modules/chartjs/charts/scatter",id:"modules/chartjs/charts/scatter",title:"Scatter Chart | Chart.js Module",description:"Basic",source:"@site/library/modules/chartjs/charts/scatter.md",sourceDirName:"modules/chartjs/charts",slug:"/modules/chartjs/charts/scatter",permalink:"/2.8/library/modules/chartjs/charts/scatter",tags:[],version:"current",frontMatter:{title:"Scatter Chart | Chart.js Module",hide_title:!0},sidebar:"chartjsSidebar",previous:{title:"Radar Chart | Chart.js Module",permalink:"/2.8/library/modules/chartjs/charts/radar"},next:{title:"Custom Tooltip",permalink:"/2.8/library/modules/chartjs/examples/custom-tooltip/"}},u={},p=[{value:"Basic",id:"basic",level:2},{value:"Multi axis",id:"multi-axis",level:3}],d={toc:p};function f(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scatter-chart"},"Scatter Chart"),(0,o.kt)("h2",{id:"basic"},"Basic"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:r(8247).Z,width:"855",height:"435"}))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'Outputs.Data = {\n    labels: ["January", "February", "March", "April", "May", "June", "July"],\n    datasets: [\n        {\n            label: "Dataset 1",\n            data: [\n                { x: 47.22136488, y: 88.67283951, r: 1 },\n                { x: 84.31584362, y: 63.31875857, r: 1 },\n                { x: 44.76423182, y: 92.18278464, r: 1 },\n                { x: 40.91220850, y: 6.129115230, r: 1 },\n                { x: 92.51286008, y: 54.54046639, r: 1 },\n                { x: 71.17112483, y: 16.42918381, r: 1 },\n                { x: 11.45490398, y: 78.21502058, r: 1 }\n            ],\n            borderColor: "rgb(255, 99, 132)",\n            backgroundColor: "rgba(255, 99, 132, 0.5)"\n        },\n        {\n            label: "Dataset 2",\n            data: [\n                { x: 5.441100820, y: 16.07981824, r: 1 },\n                { x: 91.04381001, y: 51.57964678, r: 1 },\n                { x: 4.938700270, y: 53.64326132, r: 1 },\n                { x: 22.43441358, y: 60.54226680, r: 1 },\n                { x: 4.024777090, y: 73.51123114, r: 1 },\n                { x: 6.499914270, y: 34.52546296, r: 1 },\n                { x: 60.72402263, y: 70.74545610, r: 1 }\n            ],\n            borderColor: "rgb(255, 159, 64)",\n            backgroundColor: "rgba(255, 99, 132, 0.5)"\n        }\n    ]\n}\n')),(0,o.kt)("h3",{id:"multi-axis"},"Multi axis"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:r(67196).Z,width:"850",height:"475"}))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Outputs.Scales = {\n    y: {\n        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for  log    scale for instance\n        position: 'left',\n        ticks: {\n            color: \"rgb(255, 99, 132)\",\n        }\n    },\n    y2: {\n        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for  log    scale for instance\n        position: 'right',\n        reverse: true,\n        ticks: {\n            color: \"rgb(54, 162, 235)\",\n        },\n        grid: {\n            drawOnChartArea: false // only want the grid lines for one axis to show up\n        }\n    }\n}\n")))}f.isMDXComponent=!0},8247:function(e,t,r){t.Z=r.p+"assets/images/scatter-chart-c389b9f458ecc17eea29eddb7cbb92b3.png"},67196:function(e,t,r){t.Z=r.p+"assets/images/scatter-multi-axis-chart-fac66f7b7a2bf7b0afe64ad29907e217.png"}}]);