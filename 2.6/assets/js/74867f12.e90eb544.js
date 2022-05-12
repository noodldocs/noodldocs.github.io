"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[5676],{3905:function(r,e,t){t.d(e,{Zo:function(){return u},kt:function(){return f}});var n=t(67294);function a(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function o(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function c(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function l(r,e){if(null==r)return{};var t,n,a=function(r,e){if(null==r)return{};var t,n,a={},o=Object.keys(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}var i=n.createContext({}),s=function(r){var e=n.useContext(i),t=e;return r&&(t="function"==typeof r?r(e):c(c({},e),r)),t},u=function(r){var e=s(r.components);return n.createElement(i.Provider,{value:e},r.children)},d={inlineCode:"code",wrapper:function(r){var e=r.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(r,e){var t=r.components,a=r.mdxType,o=r.originalType,i=r.parentName,u=l(r,["components","mdxType","originalType","parentName"]),p=s(t),f=a,h=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return t?n.createElement(h,c(c({ref:e},u),{},{components:t})):n.createElement(h,c({ref:e},u))}));function f(r,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof r||a){var o=t.length,c=new Array(o);c[0]=p;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=r,l.mdxType="string"==typeof r?r:a,c[1]=l;for(var s=2;s<o;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},49266:function(r,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var n=t(83117),a=t(80102),o=(t(67294),t(3905)),c=["components"],l={title:"Radar Chart | Chart.js Module",hide_title:!0},i="Radar Chart",s={unversionedId:"modules/chartjs/charts/radar",id:"modules/chartjs/charts/radar",title:"Radar Chart | Chart.js Module",description:"Basic",source:"@site/library/modules/chartjs/charts/radar.md",sourceDirName:"modules/chartjs/charts",slug:"/modules/chartjs/charts/radar",permalink:"/2.6/library/modules/chartjs/charts/radar",tags:[],version:"current",frontMatter:{title:"Radar Chart | Chart.js Module",hide_title:!0},sidebar:"chartjsSidebar",previous:{title:"Polar Area Chart | Chart.js Module",permalink:"/2.6/library/modules/chartjs/charts/polar-area"},next:{title:"Scatter Chart | Chart.js Module",permalink:"/2.6/library/modules/chartjs/charts/scatter"}},u={},d=[{value:"Basic",id:"basic",level:2}],p={toc:d};function f(r){var e=r.components,l=(0,a.Z)(r,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"radar-chart"},"Radar Chart"),(0,o.kt)("h2",{id:"basic"},"Basic"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(85919).Z,width:"810",height:"795"}))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'Outputs.Data = {\n    labels: ["January", "February", "March", "April", "May", "June", "July"],\n    datasets: [\n        {\n            label: "Dataset 1",\n            data: [\n                68.09585048, 29.88168724, 29.83624829, 69.19410151, 89.93055556,\n                19.20610425, 80.47753772\n            ],\n            borderColor: "rgb(255, 99, 132)",\n            backgroundColor: "rgba(255, 99, 132, 0.5)"\n        },\n        {\n            label: "Dataset 2",\n            data: [\n                71.27572016, 7.65003429, 35.27949246, 7.2505144, 28.50137174,\n                66.93329904, 31.1882716\n            ],\n            borderColor: "rgb(54, 162, 235)",\n            backgroundColor: "rgba(54, 162, 235, 0.5)"\n        }\n    ]\n}\n')))}f.isMDXComponent=!0},85919:function(r,e,t){e.Z=t.p+"assets/images/radar-chart-4099cbd27514578cbf295de19b10827c.png"}}]);