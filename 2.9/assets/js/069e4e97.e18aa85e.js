"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[889],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>h});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),i=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=i(e.components);return a.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},b=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(t),b=n,h=u["".concat(c,".").concat(b)]||u[b]||d[b]||l;return t?a.createElement(h,o(o({ref:r},p),{},{components:t})):a.createElement(h,o({ref:r},p))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=b;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var i=2;i<l;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},18292:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var a=t(87462),n=(t(67294),t(3905));const l={title:"Polar Area Chart | Chart.js Module",hide_title:!0},o="Polar Area Chart Example",s={unversionedId:"modules/chartjs/charts/polar-area",id:"modules/chartjs/charts/polar-area",title:"Polar Area Chart | Chart.js Module",description:"Basic",source:"@site/library/modules/chartjs/charts/polar-area.md",sourceDirName:"modules/chartjs/charts",slug:"/modules/chartjs/charts/polar-area",permalink:"/2.9/library/modules/chartjs/charts/polar-area",draft:!1,tags:[],version:"current",frontMatter:{title:"Polar Area Chart | Chart.js Module",hide_title:!0},sidebar:"chartjsSidebar",previous:{title:"Pie Chart | Chart.js Module",permalink:"/2.9/library/modules/chartjs/charts/pie"},next:{title:"Radar Chart | Chart.js Module",permalink:"/2.9/library/modules/chartjs/charts/radar"}},c={},i=[{value:"Basic",id:"basic",level:2},{value:"Centered point labels",id:"centered-point-labels",level:3}],p={toc:i},u="wrapper";function d(e){let{components:r,...l}=e;return(0,n.kt)(u,(0,a.Z)({},p,l,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"polar-area-chart-example"},"Polar Area Chart Example"),(0,n.kt)("h2",{id:"basic"},"Basic"),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:t(30541).Z,width:"821",height:"795"}))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'Outputs.Data = {\n    labels: ["January", "February", "March", "April", "May", "June", "July"],\n    datasets: [\n        {\n            label: "Dataset 1",\n            data: [\n                5.64900549, 32.6611797, 33.64454733, 91.31515775, 18.01868999,\n                33.50823045, 9.38871742\n            ],\n            borderColor: "rgb(255, 99, 132)",\n            backgroundColor: "rgba(255, 99, 132, 0.5)"\n        },\n        {\n            label: "Dataset 2",\n            data: [\n                80.22805213, 21.33487654, 93.20301783, 52.62259945, 30.45781893,\n                76.09139232, 68.53566529\n            ],\n            borderColor: "rgb(54, 162, 235)",\n            backgroundColor: "rgba(54, 162, 235, 0.5)"\n        }\n    ]\n}\n')),(0,n.kt)("h3",{id:"centered-point-labels"},"Centered point labels"),(0,n.kt)("div",{className:"ndl-image-with-background l"},(0,n.kt)("p",null,(0,n.kt)("img",{src:t(85003).Z,width:"866",height:"815"}))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"Outputs.Scales = {\n    r: {\n        pointLabels: {\n            display: true,\n            centerPointLabels: true,\n            font: {\n                size: 18\n            }\n        }\n    }\n}\n")))}d.isMDXComponent=!0},85003:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/polar-area-centered-labels-chart-c7983b84bcd164005396f8ed83027eaf.png"},30541:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/polar-area-chart-a97ab586be29075460c97e68a8000099.png"}}]);