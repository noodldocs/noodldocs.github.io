"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[5676],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),i=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=i(e.components);return a.createElement(s.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},h=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(t),h=n,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return t?a.createElement(m,c(c({ref:r},u),{},{components:t})):a.createElement(m,c({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=h;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[d]="string"==typeof e?e:n,c[1]=l;for(var i=2;i<o;i++)c[i]=t[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},49266:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=t(87462),n=(t(67294),t(3905));const o={title:"Radar Chart | Chart.js Module",hide_title:!0},c="Radar Chart Example",l={unversionedId:"modules/chartjs/charts/radar",id:"modules/chartjs/charts/radar",title:"Radar Chart | Chart.js Module",description:"Basic",source:"@site/library/modules/chartjs/charts/radar.md",sourceDirName:"modules/chartjs/charts",slug:"/modules/chartjs/charts/radar",permalink:"/2.8/library/modules/chartjs/charts/radar",draft:!1,tags:[],version:"current",frontMatter:{title:"Radar Chart | Chart.js Module",hide_title:!0},sidebar:"chartjsSidebar",previous:{title:"Polar Area Chart | Chart.js Module",permalink:"/2.8/library/modules/chartjs/charts/polar-area"},next:{title:"Scatter Chart | Chart.js Module",permalink:"/2.8/library/modules/chartjs/charts/scatter"}},s={},i=[{value:"Basic",id:"basic",level:2}],u={toc:i},d="wrapper";function p(e){let{components:r,...o}=e;return(0,n.kt)(d,(0,a.Z)({},u,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"radar-chart-example"},"Radar Chart Example"),(0,n.kt)("h2",{id:"basic"},"Basic"),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:t(58442).Z,width:"810",height:"795"}))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'Outputs.Data = {\n    labels: ["January", "February", "March", "April", "May", "June", "July"],\n    datasets: [\n        {\n            label: "Dataset 1",\n            data: [\n                68.09585048, 29.88168724, 29.83624829, 69.19410151, 89.93055556,\n                19.20610425, 80.47753772\n            ],\n            borderColor: "rgb(255, 99, 132)",\n            backgroundColor: "rgba(255, 99, 132, 0.5)"\n        },\n        {\n            label: "Dataset 2",\n            data: [\n                71.27572016, 7.65003429, 35.27949246, 7.2505144, 28.50137174,\n                66.93329904, 31.1882716\n            ],\n            borderColor: "rgb(54, 162, 235)",\n            backgroundColor: "rgba(54, 162, 235, 0.5)"\n        }\n    ]\n}\n')))}p.isMDXComponent=!0},58442:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/radar-chart-4099cbd27514578cbf295de19b10827c.png"}}]);