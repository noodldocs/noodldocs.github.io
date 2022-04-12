"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[3491],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(n),f=o,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,u(u({ref:t},c),{},{components:n})):r.createElement(d,u({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var i=2;i<a;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41101:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),u=["components"],l={},p="Rotary Knob",i={unversionedId:"rotary-knob/README",id:"rotary-knob/README",title:"Rotary Knob",description:"This is an example of how to use the Script node to implement a simple rotary knob.",source:"@site/modules/rotary-knob/README.md",sourceDirName:"rotary-knob",slug:"/rotary-knob/",permalink:"/2.6/modules/rotary-knob/",tags:[],version:"current",frontMatter:{},sidebar:"rotaryKnobScrollSidebar"},c={},s=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],m={toc:s};function f(e){var t=e.components,l=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rotary-knob"},"Rotary Knob"),(0,a.kt)("p",null,"This is an example of how to use the ",(0,a.kt)("a",{parentName:"p",href:"/nodes/javascript/script"},"Script")," node to implement a simple rotary knob."),(0,a.kt)("p",null,'The knob has start and stop angles, and is not "endless".'),(0,a.kt)("div",{className:"ndl-image-with-background"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(64630).Z,width:"1110",height:"274"}))),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Min Value"),"\nThe minimum value the component should output"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Max Value"),"\nThe maximum value the component should output"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Value"),"\nSet the start value, must be between ",(0,a.kt)("strong",{parentName:"p"},"Min Value")," and ",(0,a.kt)("strong",{parentName:"p"},"Max Value")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Min Angle"),"\nThe lowest angle the knob can turn to. Should be between -180 and 180."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Max Angle"),"\nThe maximum angle the knob can turn to. Should be between -180 and 180."),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Value"),"\nThe current value"))}f.isMDXComponent=!0},64630:function(e,t,n){t.Z=n.p+"assets/images/rotary-knob-514be915ef47305e0e046ad43762ab59.png"}}]);