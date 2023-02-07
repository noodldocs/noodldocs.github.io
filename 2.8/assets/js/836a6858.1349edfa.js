"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[7615],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97766:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],c={title:"Date Picker",hide_title:!0},p=void 0,u={unversionedId:"prefabs/date-picker/README",id:"prefabs/date-picker/README",title:"Date Picker",description:"A UI component for picking dates. It works both as a text input where you can type the date, and as a calendar drop down (or using the native date picker on mobile).",source:"@site/library/prefabs/date-picker/README.md",sourceDirName:"prefabs/date-picker",slug:"/prefabs/date-picker/",permalink:"/2.8/library/prefabs/date-picker/",tags:[],version:"current",frontMatter:{title:"Date Picker",hide_title:!0},sidebar:"datePickerSidebar"},l={},s=[],d={toc:s};function f(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"date-picker"},"Date Picker"),(0,o.kt)("p",null,"A UI component for picking dates. It works both as a text input where you can type the date, and as a calendar drop down (or using the native date picker on mobile)."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(67562).Z,width:"680",height:"384"}))),(0,o.kt)("p",null,"On desktop and tablets the text input present a calendar drop down when edited."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(77874).Z,width:"812",height:"1004"}))),(0,o.kt)("p",null,"After importing the module you will see a component called ",(0,o.kt)("strong",{parentName:"p"},"Date Picker")," in your project."),(0,o.kt)("p",null,"The example below shows how to hook the ",(0,o.kt)("strong",{parentName:"p"},"Date Picker")," up to data in a ",(0,o.kt)("strong",{parentName:"p"},"Variable"),", you can save the value back to the object with the ",(0,o.kt)("strong",{parentName:"p"},"Set Variable")," using the ",(0,o.kt)("strong",{parentName:"p"},"Changed")," signal."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(60973).Z,width:"1530",height:"438"}))),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Value")," input and output have the Javascript ",(0,o.kt)("strong",{parentName:"p"},"Date")," type."))}f.isMDXComponent=!0},77874:function(e,t,n){t.Z=n.p+"assets/images/date-picker-drop-down-28b9521edb88c5d9472fe5553846bba0.png"},60973:function(e,t,n){t.Z=n.p+"assets/images/date-picker-nodes-49da1c7e30f32db6bd7e50818d34f62c.png"},67562:function(e,t,n){t.Z=n.p+"assets/images/date-picker-98a3969b8b632e1e51009d05a3743e70.png"}}]);