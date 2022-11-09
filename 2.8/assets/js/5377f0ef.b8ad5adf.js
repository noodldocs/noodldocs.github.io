"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[8697],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),h=a,f=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(f,u(u({ref:t},s),{},{components:r})):n.createElement(f,u({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,u[1]=c;for(var l=2;l<o;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4268:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),u=["components"],c={title:"Doughnut Chart | Chart.js Module",hide_title:!0},i="Doughnut Chart",l={unversionedId:"modules/chartjs/charts/doughnut",id:"modules/chartjs/charts/doughnut",title:"Doughnut Chart | Chart.js Module",description:"Basic",source:"@site/library/modules/chartjs/charts/doughnut.md",sourceDirName:"modules/chartjs/charts",slug:"/modules/chartjs/charts/doughnut",permalink:"/2.8/library/modules/chartjs/charts/doughnut",tags:[],version:"current",frontMatter:{title:"Doughnut Chart | Chart.js Module",hide_title:!0},sidebar:"chartjsSidebar",previous:{title:"Bubble Chart | Chart.js Module",permalink:"/2.8/library/modules/chartjs/charts/bubble"},next:{title:"Pie Chart | Chart.js Module",permalink:"/2.8/library/modules/chartjs/charts/pie"}},s={},p=[{value:"Basic",id:"basic",level:2}],d={toc:p};function h(e){var t=e.components,c=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"doughnut-chart"},"Doughnut Chart"),(0,o.kt)("h2",{id:"basic"},"Basic"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:r(50568).Z,width:"858",height:"787"}))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'Outputs.Data = {\n    labels: ["Red", "Orange", "Yellow", "Green", "Blue"],\n    datasets: [\n        {\n            label: "Dataset 1",\n            data: [96.79955418, 80.80761317, 36.31772977, 64.56447188, 7.52314815],\n            backgroundColor: [\n                "rgb(255, 99, 132)",\n                "rgb(255, 159, 64)",\n                "rgb(255, 205, 86)",\n                "rgb(75, 192, 192)",\n                "rgb(54, 162, 235)",\n                "rgb(153, 102, 255)",\n                "rgb(201, 203, 207)",\n                "rgba(255, 99, 132, 0.5)",\n                "rgba(255, 99, 132, 0.5)",\n                "rgba(75, 192, 192, 0.5)",\n                "rgba(54, 162, 235, 0.5)"\n            ]\n        }\n    ]\n}\n')))}h.isMDXComponent=!0},50568:function(e,t,r){t.Z=r.p+"assets/images/doughnut-chart-86516bb5ea9f00d5c4ee8aea53fd52a5.png"}}]);