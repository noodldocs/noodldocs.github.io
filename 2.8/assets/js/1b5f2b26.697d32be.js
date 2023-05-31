"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[9895],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||l;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},62206:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const l={title:"Chart.js Module",hide_title:!0},o="Chart.js Module",s={unversionedId:"modules/chartjs/README",id:"modules/chartjs/README",title:"Chart.js Module",description:"GitHub",source:"@site/library/modules/chartjs/README.md",sourceDirName:"modules/chartjs",slug:"/modules/chartjs/",permalink:"/2.8/library/modules/chartjs/",draft:!1,tags:[],version:"current",frontMatter:{title:"Chart.js Module",hide_title:!0},sidebar:"chartjsSidebar",next:{title:"Bar Chart Example | Chart.js Module",permalink:"/2.8/library/modules/chartjs/charts/bar"}},i={},u=[{value:"Changing the Data",id:"changing-the-data",level:2},{value:"Changing the Scales",id:"changing-the-scales",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...l}=e;return(0,n.kt)(d,(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"chartjs-module"},"Chart.js Module"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/noodlapp/modules/tree/main/modules/noodl-chartjs"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?style=plastic&logo=github&label=GitHub&message=Source%20Code",alt:"GitHub"}))),(0,n.kt)("p",null,"This module allows you to add charts to your Noodl App, using ",(0,n.kt)("a",{parentName:"p",href:"https://www.chartjs.org/"},"Chart.js"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(3320).Z,width:"896",height:"493"})),(0,n.kt)("p",null,"Supported chart types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Line and Area"),(0,n.kt)("li",{parentName:"ul"},"Bar"),(0,n.kt)("li",{parentName:"ul"},"Radar"),(0,n.kt)("li",{parentName:"ul"},"Doughnut"),(0,n.kt)("li",{parentName:"ul"},"Pie"),(0,n.kt)("li",{parentName:"ul"},"Polar Area"),(0,n.kt)("li",{parentName:"ul"},"Bubble"),(0,n.kt)("li",{parentName:"ul"},"Scatter")),(0,n.kt)("p",null,"There are many different kinds inputs to change the style of the chart.\nLike the title, tooltip and legends."),(0,n.kt)("h2",{id:"changing-the-data"},"Changing the Data"),(0,n.kt)("p",null,"To style the chart data, it should be added next to the data it want to style.\nTo recreate for example this chart (",(0,n.kt)("a",{parentName:"p",href:"https://www.chartjs.org/docs/latest/samples/bar/border-radius.html"},"Bar Chart Border Radius"),").\nIt should send the style in the datasets to the chart."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'Outputs.Data = {\n    labels: [\n        "January",\n        "February",\n        "March",\n        "April",\n        "May",\n        "June",\n        "July"\n    ],\n    datasets: [\n        {\n            label: "Fully Rounded",\n            data: [99, 41, 94, 1, 32, -63, 36]\n            borderColor: "rgb(255, 99, 132)",\n            backgroundColor: "rgba(255, 99, 132, 0.5)",\n            borderWidth: 2,\n            borderRadius: 1.8,\n            borderSkipped: false\n        },\n        {\n            label: "Small Radius",\n            data: [-59, -80, -62, -25, -40, 58, 95],\n            borderColor: "rgb(54, 162, 235)",\n            backgroundColor: "rgba(54, 162, 235, 0.5)",\n            borderWidth: 2,\n            borderRadius: 5,\n            borderSkipped: false\n        }\n    ]\n}\n')),(0,n.kt)("h2",{id:"changing-the-scales"},"Changing the Scales"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"Outputs.Scales = {\n    x: {\n        stacked: true\n    },\n    y: {\n        stacked: true\n    }\n}\n")))}p.isMDXComponent=!0},3320:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/preview-bar-chart-nodes-c681f96011c7a49e5eb9a0f89119a1d2.png"}}]);