"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[2786],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(n),m=i,f=h["".concat(c,".").concat(m)]||h[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},78152:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],l={title:"Multi Choice With Pills",hide_title:!0},c="Multi Choice With Pills",s={unversionedId:"prefabs/multi-choice-with-pills/README",id:"prefabs/multi-choice-with-pills/README",title:"Multi Choice With Pills",description:"A simple component for multi choice selection comprising a drop down with all options and the selected options are shown as pills above the drop down.",source:"@site/library/prefabs/multi-choice-with-pills/README.md",sourceDirName:"prefabs/multi-choice-with-pills",slug:"/prefabs/multi-choice-with-pills/",permalink:"/2.8/library/prefabs/multi-choice-with-pills/",tags:[],version:"current",frontMatter:{title:"Multi Choice With Pills",hide_title:!0},sidebar:"multiChoiceWithPillsSidebar"},p={},u=[],h={toc:u};function m(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"multi-choice-with-pills"},"Multi Choice With Pills"),(0,o.kt)("p",null,"A simple component for multi choice selection comprising a drop down with all options and the selected options are shown as pills above the drop down."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(23671).Z,width:"680",height:"385"}))),(0,o.kt)("p",null,"After importing the module you will see a component called ",(0,o.kt)("strong",{parentName:"p"},"Multi Choice With Pills")," in your project."),(0,o.kt)("p",null,"The example below shows how to hook the ",(0,o.kt)("strong",{parentName:"p"},"Multi Choice With Pills")," up to data in an ",(0,o.kt)("strong",{parentName:"p"},"Object"),", you can save the value back to the object with the ",(0,o.kt)("strong",{parentName:"p"},"Set Object Properties")," using the ",(0,o.kt)("strong",{parentName:"p"},"Selection Changed")," signal."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(21380).Z,width:"1630",height:"574"}))),(0,o.kt)("p",null,"As input it takes three arrays of strings, one containing all possible options, the ",(0,o.kt)("strong",{parentName:"p"},"Options"),' input, this is the "value" of the options, it might differ from the labels, i.e. what is shown on screen. This you can specify with the ',(0,o.kt)("strong",{parentName:"p"},"Labels")," array input, it must have the same number of strings in the array, each one corresponding to a value in the ",(0,o.kt)("strong",{parentName:"p"},"Options")," array."),(0,o.kt)("p",null,"The final array is the ",(0,o.kt)("strong",{parentName:"p"},"Selection")," array, it contains all options that are selection. There is also an output from the component called ",(0,o.kt)("strong",{parentName:"p"},"Selection")," which is updated when the user interacts with the component, the ",(0,o.kt)("strong",{parentName:"p"},"Selection Changed")," event is triggered."))}m.isMDXComponent=!0},21380:function(e,t,n){t.Z=n.p+"assets/images/multi-choice-with-pills-1-a941e2bbc9c05018b6e882ae0715ce59.png"},23671:function(e,t,n){t.Z=n.p+"assets/images/multi-choice-with-pills-004ab0a0068dbc570a37a841c7fd498f.png"}}]);