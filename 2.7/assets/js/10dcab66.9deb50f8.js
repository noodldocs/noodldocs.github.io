"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[2654],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,i(i({ref:e},u),{},{components:n})):r.createElement(d,i({ref:e},u))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14201:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=n(17213),c=["components"],l={title:"Star Rating Component",hide_title:!0},p="Star Rating Component",u={unversionedId:"examples/star-rating-component",id:"examples/star-rating-component",title:"Star Rating Component",description:"This component shows how to work with animations, visual states and component logic to build a visually rich star rating component. You can also follow the Build Along clip if you want to see how it's constructed.",source:"@site/library/examples/star-rating-component.mdx",sourceDirName:"examples",slug:"/examples/star-rating-component",permalink:"/2.6/library/examples/star-rating-component",tags:[],version:"current",frontMatter:{title:"Star Rating Component",hide_title:!0},sidebar:"librarySidebar",previous:{title:"Survey App",permalink:"/2.6/library/examples/survey-app"},next:{title:"Navigation with URL encoded Parameters",permalink:"/2.6/library/examples/navigation-url-encoding"}},s={},m=[],f={toc:m};function d(t){var e=t.components,l=(0,o.Z)(t,c);return(0,a.kt)("wrapper",(0,r.Z)({},f,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"star-rating-component"},"Star Rating Component"),(0,a.kt)("p",null,"This component shows how to work with ",(0,a.kt)("em",{parentName:"p"},"animations"),", ",(0,a.kt)("em",{parentName:"p"},"visual states")," and ",(0,a.kt)("em",{parentName:"p"},"component logic")," to build a visually rich star rating component. You can also follow the ",(0,a.kt)("a",{parentName:"p",href:"/docs/build-alongs/star-rating-component"},"Build Along")," clip if you want to see how it's constructed."),(0,a.kt)("div",{className:"ndl-image-with-background m"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(66184).Z,width:"602",height:"576"})),(0,a.kt)(i.Z,{zip:"/library/examples/star-rating-component/star-rating-1-1.zip",name:"Star Rating Component",thumb:"/library/examples/star-rating-component/star-rating-thumb.png",mdxType:"ImportButton"})))}d.isMDXComponent=!0},17213:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(67294),o=n(39671);function a(t){var e=t.zip,n=t.name,a=t.thumb,i=t.cf;return r.createElement("button",{className:"ndl-import-button",onClick:function(){return(0,o.I)(e,{name:n,thumb:a,cf:i})}})}},39671:function(t,e,n){n.d(e,{I:function(){return o}});var r=n(99782);function o(t,e){var n=[];e&&void 0!==e.name&&n.push("name="+encodeURIComponent(e.name)),e&&void 0!==e.thumb&&n.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+r.default.baseUrl+e.thumb)),e&&void 0!==e.cf&&n.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+r.default.baseUrl+"/"+e.cf));var o="noodl:import/"+location.protocol+"//"+location.host+r.default.baseUrl+t+(n.length>0?"?"+n.join("&"):"");console.log("Importing into Noodl:",o),console.log(t),window.location.href=o}},66184:function(t,e,n){e.Z=n.p+"assets/images/star-rating-de80c56463a1afe8717d06f289b1082b.gif"}}]);