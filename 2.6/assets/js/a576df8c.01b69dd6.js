"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[6129],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(h,c(c({ref:t},s),{},{components:r})):n.createElement(h,c({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75344:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),c=["components"],i={title:"Pie Chart | Chart.js Module",hide_title:!0},l="Pie Chart",u={unversionedId:"modules/chartjs/charts/pie",id:"modules/chartjs/charts/pie",title:"Pie Chart | Chart.js Module",description:"Basic",source:"@site/library/modules/chartjs/charts/pie.md",sourceDirName:"modules/chartjs/charts",slug:"/modules/chartjs/charts/pie",permalink:"/2.6/library/modules/chartjs/charts/pie",tags:[],version:"current",frontMatter:{title:"Pie Chart | Chart.js Module",hide_title:!0},sidebar:"chartjsSidebar",previous:{title:"Doughnut Chart | Chart.js Module",permalink:"/2.6/library/modules/chartjs/charts/doughnut"},next:{title:"Polar Area Chart | Chart.js Module",permalink:"/2.6/library/modules/chartjs/charts/polar-area"}},s={},p=[{value:"Basic",id:"basic",level:2}],d={toc:p};function f(e){var t=e.components,i=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pie-chart"},"Pie Chart"),(0,o.kt)("h2",{id:"basic"},"Basic"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:r(96437).Z,width:"766",height:"775"}))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Outputs.Data = {\n    labels: [\n        'Red',\n        'Yellow',\n        'Blue'\n    ],\n    datasets: [\n        {\n            data: [10, 20, 30],\n            backgroundColor: [\n                '#FF5382',\n                '#FFCC34',\n                '#00A3F1'\n            ],\n        }\n    ]\n}\n")))}f.isMDXComponent=!0},96437:function(e,t,r){t.Z=r.p+"assets/images/pie-chart-748c645c0e2c6194fc573c2c31f0fda7.png"}}]);