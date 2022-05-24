"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[9895],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),h=a,f=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},62206:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),l=["components"],u={title:"Chart.js Module",hide_title:!0},i=void 0,s={unversionedId:"modules/chartjs/README",id:"modules/chartjs/README",title:"Chart.js Module",description:"This module allows you to add charts to your Noodl App, using Chart.js.",source:"@site/library/modules/chartjs/README.md",sourceDirName:"modules/chartjs",slug:"/modules/chartjs/",permalink:"/2.6/library/modules/chartjs/",tags:[],version:"current",frontMatter:{title:"Chart.js Module",hide_title:!0},sidebar:"chartjsSidebar",next:{title:"Bar Chart | Chart.js Module",permalink:"/2.6/library/modules/chartjs/charts/bar"}},c={},d=[{value:"Changing the Data",id:"changing-the-data",level:2},{value:"Changing the Scales",id:"changing-the-scales",level:2}],p={toc:d};function h(e){var t=e.components,u=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chartjs-module"},"Chart.js Module"),(0,o.kt)("p",null,"This module allows you to add charts to your Noodl App, using ",(0,o.kt)("a",{parentName:"p",href:"https://www.chartjs.org/"},"Chart.js"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(3320).Z,width:"896",height:"493"})),(0,o.kt)("p",null,"Supported chart types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Line and Area"),(0,o.kt)("li",{parentName:"ul"},"Bar"),(0,o.kt)("li",{parentName:"ul"},"Radar"),(0,o.kt)("li",{parentName:"ul"},"Doughnut"),(0,o.kt)("li",{parentName:"ul"},"Pie"),(0,o.kt)("li",{parentName:"ul"},"Polar Area"),(0,o.kt)("li",{parentName:"ul"},"Bubble"),(0,o.kt)("li",{parentName:"ul"},"Scatter")),(0,o.kt)("p",null,"There are many different kinds inputs to change the style of the chart.\nLike the title, tooltip and legends."),(0,o.kt)("h2",{id:"changing-the-data"},"Changing the Data"),(0,o.kt)("p",null,"To style the chart data, it should be added next to the data it want to style.\nTo recreate for example this chart (",(0,o.kt)("a",{parentName:"p",href:"https://www.chartjs.org/docs/latest/samples/bar/border-radius.html"},"Bar Chart Border Radius"),").\nIt should send the style in the datasets to the chart."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'Outputs.Data = {\n    labels: [\n        "January",\n        "February",\n        "March",\n        "April",\n        "May",\n        "June",\n        "July"\n    ],\n    datasets: [\n        {\n            label: "Fully Rounded",\n            data: [99, 41, 94, 1, 32, -63, 36]\n            borderColor: "rgb(255, 99, 132)",\n            backgroundColor: "rgba(255, 99, 132, 0.5)",\n            borderWidth: 2,\n            borderRadius: 1.8,\n            borderSkipped: false\n        },\n        {\n            label: "Small Radius",\n            data: [-59, -80, -62, -25, -40, 58, 95],\n            borderColor: "rgb(54, 162, 235)",\n            backgroundColor: "rgba(54, 162, 235, 0.5)",\n            borderWidth: 2,\n            borderRadius: 5,\n            borderSkipped: false\n        }\n    ]\n}\n')),(0,o.kt)("h2",{id:"changing-the-scales"},"Changing the Scales"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Outputs.Scales = {\n    x: {\n        stacked: true\n    },\n    y: {\n        stacked: true\n    }\n}\n")))}h.isMDXComponent=!0},3320:function(e,t,r){t.Z=r.p+"assets/images/preview-bar-chart-nodes-c681f96011c7a49e5eb9a0f89119a1d2.png"}}]);