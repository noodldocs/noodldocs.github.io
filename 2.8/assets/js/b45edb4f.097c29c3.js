"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[8493],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),h=r,f=m["".concat(c,".").concat(h)]||m[h]||p[h]||a;return n?o.createElement(f,l(l({ref:t},s),{},{components:n})):o.createElement(f,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8349:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),l=n(17213),i=["components"],c={title:"Suatch Google Sheets Example",hide_title:!0},u="Suatch Google Sheets Example",s={unversionedId:"examples/suatch",id:"examples/suatch",title:"Suatch Google Sheets Example",description:"This neat little color selection app shows how you can use the Google Sheets module to retrieve data from a Google Sheets and how to filter the data. It also shows how to build a good looking list.",source:"@site/library/examples/suatch.mdx",sourceDirName:"examples",slug:"/examples/suatch",permalink:"/2.8/library/examples/suatch",tags:[],version:"current",frontMatter:{title:"Suatch Google Sheets Example",hide_title:!0},sidebar:"librarySidebar",previous:{title:"Navigation with URL encoded Parameters",permalink:"/2.8/library/examples/navigation-url-encoding"},next:{title:"Travel App",permalink:"/2.8/library/examples/travel-app"}},p={},m=[],h={toc:m};function f(e){var t=e.components,c=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"suatch-google-sheets-example"},"Suatch Google Sheets Example"),(0,a.kt)("p",null,"This neat little color selection app shows how you can use the ",(0,a.kt)("a",{parentName:"p",href:"/library/modules/gsheets"},"Google Sheets module")," to retrieve data from a ",(0,a.kt)("strong",{parentName:"p"},"Google Sheets")," and how to filter the data. It also shows how to build a good looking list."),(0,a.kt)("div",{className:"ndl-image-with-background m"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(49508).Z,width:"3745",height:"2055"})),(0,a.kt)(l.Z,{zip:"/library/examples/suatch/suatch_1-2.zip",name:"Suatch App",thumb:"/library/examples/suatch/suatch_1-1-thumb.png",mdxType:"ImportButton"})))}f.isMDXComponent=!0},17213:function(e,t,n){n.d(t,{Z:function(){return a}});var o=n(67294),r=n(39671);function a(e){var t=e.zip,n=e.name,a=e.thumb,l=e.cf;return o.createElement("button",{className:"ndl-import-button",onClick:function(){return(0,r.I)(t,{name:n,thumb:a,cf:l})}})}},39671:function(e,t,n){n.d(t,{I:function(){return r}});var o=n(99782);function r(e,t){var n=[];t&&void 0!==t.name&&n.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&n.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+o.default.baseUrl+t.thumb)),t&&void 0!==t.cf&&n.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+o.default.baseUrl+"/"+t.cf));var r="noodl:import/"+location.protocol+"//"+location.host+o.default.baseUrl+e+(n.length>0?"?"+n.join("&"):"");console.log("Importing into Noodl:",r),console.log(e),window.location.href=r}},49508:function(e,t,n){t.Z=n.p+"assets/images/suatch-1-2ab12fe538ef6db61ea902a3438ebaad.png"}}]);