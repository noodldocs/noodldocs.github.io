"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[4990],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61425:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"Line Chart | Chart.js Module",hide_title:!0},c=void 0,s={unversionedId:"modules/chartjs/charts/line",id:"modules/chartjs/charts/line",title:"Line Chart | Chart.js Module",description:"Basic",source:"@site/library/modules/chartjs/charts/line.md",sourceDirName:"modules/chartjs/charts",slug:"/modules/chartjs/charts/line",permalink:"/2.7/library/modules/chartjs/charts/line",tags:[],version:"current",frontMatter:{title:"Line Chart | Chart.js Module",hide_title:!0},sidebar:"chartjsSidebar",previous:{title:"Bar Chart | Chart.js Module",permalink:"/2.7/library/modules/chartjs/charts/bar"},next:{title:"Bubble Chart | Chart.js Module",permalink:"/2.7/library/modules/chartjs/charts/bubble"}},u={},p=[{value:"Basic",id:"basic",level:2},{value:"Change Interpolation modes",id:"change-interpolation-modes",level:3}],d={toc:p};function h(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"line-chart"},"Line Chart"),(0,o.kt)("h2",{id:"basic"},"Basic"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(67669).Z,width:"828",height:"442"}))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'Outputs.Data = {\n    labels: ["January", "February", "March", "April", "May", "June", "July"],\n    datasets: [\n        {\n            label: "Dataset 1",\n            data: [\n                -95.88820302, 46.40775034, 99.6090535, 6.92558299, 37.49314129,\n                -58.07098765, 41.22085048\n            ],\n            borderColor: "rgb(255, 99, 132)",\n            backgroundColor: "rgba(255, 99, 132, 0.5)"\n        },\n        {\n            label: "Dataset 2",\n            data: [\n                48.94890261, 26.84156379, 73.66426612, -52.55829904, 21.01337449,\n                -29.07750343, -0.36179698\n            ],\n            borderColor: "rgb(54, 162, 235)",\n            backgroundColor: "rgba(54, 162, 235, 0.5)"\n        }\n    ]\n}\n')),(0,o.kt)("h3",{id:"change-interpolation-modes"},"Change Interpolation modes"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(73822).Z,width:"841",height:"452"}))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Outputs.Scales = {\n    x: {\n        display: true,\n        title: {\n            display: true\n        }\n    },\n    y: {\n        display: true,\n        title: {\n            display: true,\n            text: 'Value'\n        },\n        suggestedMin: -10,\n        suggestedMax: 200\n    }\n}\n")))}h.isMDXComponent=!0},67669:function(e,t,n){t.Z=n.p+"assets/images/line-chart-74f83d54ac656e470e46086bed223c2a.png"},73822:function(e,t,n){t.Z=n.p+"assets/images/line-interpolation-chart-65659efac39e152d1b0545b0a1bd8166.png"}}]);