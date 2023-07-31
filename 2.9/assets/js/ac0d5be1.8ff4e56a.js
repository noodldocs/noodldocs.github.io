"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[3816],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(b,c(c({ref:t},u),{},{components:r})):n.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,c=new Array(l);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,c[1]=o;for(var i=2;i<l;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21448:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const l={title:"Stacked Line Chart | Chart.js Module",hide_title:!0},c="Stacked Line Chart Example",o={unversionedId:"modules/chartjs/charts/stacked-line",id:"modules/chartjs/charts/stacked-line",title:"Stacked Line Chart | Chart.js Module",description:"Basic",source:"@site/library/modules/chartjs/charts/stacked-line.md",sourceDirName:"modules/chartjs/charts",slug:"/modules/chartjs/charts/stacked-line",permalink:"/2.9/library/modules/chartjs/charts/stacked-line",draft:!1,tags:[],version:"current",frontMatter:{title:"Stacked Line Chart | Chart.js Module",hide_title:!0},sidebar:"chartjsSidebar",previous:{title:"Line Chart | Chart.js Module",permalink:"/2.9/library/modules/chartjs/charts/line"},next:{title:"Bubble Chart | Chart.js Module",permalink:"/2.9/library/modules/chartjs/charts/bubble"}},s={},i=[{value:"Basic",id:"basic",level:2}],u={toc:i},d="wrapper";function p(e){let{components:t,...l}=e;return(0,a.kt)(d,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stacked-line-chart-example"},"Stacked Line Chart Example"),(0,a.kt)("h2",{id:"basic"},"Basic"),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:r(49284).Z,width:"533",height:"334"}))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Outputs.Data = {\n    labels: ["January", "February", "March", "April", "May", "June", "July"],\n    datasets: [\n        {\n            label: "Dataset 1",\n            data: [\n                -95.88820302, 46.40775034, 99.6090535, 6.92558299, 37.49314129,\n                -58.07098765, 41.22085048\n            ],\n            borderColor: "rgb(255, 99, 132)",\n            backgroundColor: "rgba(255, 99, 132, 0.5)"\n        },\n        {\n            label: "Dataset 2",\n            data: [\n                48.94890261, 26.84156379, 73.66426612, -52.55829904, 21.01337449,\n                -29.07750343, -0.36179698\n            ],\n            borderColor: "rgb(54, 162, 235)",\n            backgroundColor: "rgba(54, 162, 235, 0.5)"\n        }\n    ]\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Outputs.Scales = {\n  y: {\n    stacked: true\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Outputs.Plugins = {\n  filler: {\n    propagate: true\n  }\n}\n")))}p.isMDXComponent=!0},49284:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/stacked-line-chart-3b288714a8af769c77d572dcd2430368.png"}}]);