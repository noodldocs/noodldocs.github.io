"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[9550],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),u=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return o.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),f=r,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||i;return t?o.createElement(d,a(a({ref:n},p),{},{components:t})):o.createElement(d,a({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},63957:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var o=t(83117),r=t(80102),i=(t(67294),t(3905)),a=t(17213),l=["components"],c={title:"Conditional Form",hide_title:!0},u="Conditional Form",p={unversionedId:"examples/conditional-form",id:"examples/conditional-form",title:"Conditional Form",description:"This is an example of a form using Noodl logical nodes to change contents depending on what options the user picks in the form.",source:"@site/library/examples/conditional-form.mdx",sourceDirName:"examples",slug:"/examples/conditional-form",permalink:"/2.8/library/examples/conditional-form",tags:[],version:"current",frontMatter:{title:"Conditional Form",hide_title:!0},sidebar:"librarySidebar",previous:{title:"CRUD Form",permalink:"/2.8/library/examples/crud-form"},next:{title:"Javascript Example",permalink:"/2.8/library/examples/javascript-example"}},s={},m=[],f={toc:m};function d(e){var n=e.components,c=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},f,c,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"conditional-form"},"Conditional Form"),(0,i.kt)("p",null,"This is an example of a form using Noodl logical nodes to change contents depending on what options the user picks in the form.\nThe example is walked through in detail in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/business-logic/client-side-biz-logic-nodes"},"Conditional Form with Nodes guide"),"."),(0,i.kt)("div",{className:"ndl-image-with-background m"},(0,i.kt)("p",null,(0,i.kt)("img",{src:t(17982).Z,width:"562",height:"825"})),(0,i.kt)(a.Z,{zip:"/library/examples/conditional-form/conditional-form-1.zip",name:"Mapbox Example",thumb:"/library/examples/conditional-form/final-2.png",mdxType:"ImportButton"})))}d.isMDXComponent=!0},17213:function(e,n,t){t.d(n,{Z:function(){return i}});var o=t(67294),r=t(39671);function i(e){var n=e.zip,t=e.name,i=e.thumb,a=e.cf;return o.createElement("button",{className:"ndl-import-button",onClick:function(){return(0,r.I)(n,{name:t,thumb:i,cf:a})}})}},39671:function(e,n,t){t.d(n,{I:function(){return r}});var o=t(99782);function r(e,n){var t=[];n&&void 0!==n.name&&t.push("name="+encodeURIComponent(n.name)),n&&void 0!==n.thumb&&t.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+o.default.baseUrl+n.thumb)),n&&void 0!==n.cf&&t.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+o.default.baseUrl+"/"+n.cf));var r="noodl:import/"+location.protocol+"//"+location.host+o.default.baseUrl+e+(t.length>0?"?"+t.join("&"):"");console.log("Importing into Noodl:",r),console.log(e),window.location.href=r}},17982:function(e,n,t){n.Z=t.p+"assets/images/final-2-dd900ac05a1af8d5747488c073d21f05.png"}}]);