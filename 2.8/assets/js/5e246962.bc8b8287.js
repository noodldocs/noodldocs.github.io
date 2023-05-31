"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[4990],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61425:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"Line Chart | Chart.js Module",hide_title:!0},o="Line Chart Example",i={unversionedId:"modules/chartjs/charts/line",id:"modules/chartjs/charts/line",title:"Line Chart | Chart.js Module",description:"Basic",source:"@site/library/modules/chartjs/charts/line.md",sourceDirName:"modules/chartjs/charts",slug:"/modules/chartjs/charts/line",permalink:"/2.8/library/modules/chartjs/charts/line",draft:!1,tags:[],version:"current",frontMatter:{title:"Line Chart | Chart.js Module",hide_title:!0},sidebar:"chartjsSidebar",previous:{title:"Bar Chart Example | Chart.js Module",permalink:"/2.8/library/modules/chartjs/charts/bar"},next:{title:"Bubble Chart | Chart.js Module",permalink:"/2.8/library/modules/chartjs/charts/bubble"}},s={},c=[{value:"Basic",id:"basic",level:2},{value:"Change Interpolation modes",id:"change-interpolation-modes",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(p,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"line-chart-example"},"Line Chart Example"),(0,a.kt)("h2",{id:"basic"},"Basic"),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:r(67669).Z,width:"828",height:"442"}))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Outputs.Data = {\n    labels: ["January", "February", "March", "April", "May", "June", "July"],\n    datasets: [\n        {\n            label: "Dataset 1",\n            data: [\n                -95.88820302, 46.40775034, 99.6090535, 6.92558299, 37.49314129,\n                -58.07098765, 41.22085048\n            ],\n            borderColor: "rgb(255, 99, 132)",\n            backgroundColor: "rgba(255, 99, 132, 0.5)"\n        },\n        {\n            label: "Dataset 2",\n            data: [\n                48.94890261, 26.84156379, 73.66426612, -52.55829904, 21.01337449,\n                -29.07750343, -0.36179698\n            ],\n            borderColor: "rgb(54, 162, 235)",\n            backgroundColor: "rgba(54, 162, 235, 0.5)"\n        }\n    ]\n}\n')),(0,a.kt)("h3",{id:"change-interpolation-modes"},"Change Interpolation modes"),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:r(73822).Z,width:"841",height:"452"}))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Outputs.Scales = {\n    x: {\n        display: true,\n        title: {\n            display: true\n        }\n    },\n    y: {\n        display: true,\n        title: {\n            display: true,\n            text: 'Value'\n        },\n        suggestedMin: -10,\n        suggestedMax: 200\n    }\n}\n")))}d.isMDXComponent=!0},67669:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/line-chart-74f83d54ac656e470e46086bed223c2a.png"},73822:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/line-interpolation-chart-65659efac39e152d1b0545b0a1bd8166.png"}}]);