"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[5885],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,c(c({ref:t},l),{},{components:n})):r.createElement(d,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38763:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),c=["components"],i={},p="Component",s={unversionedId:"reference/component",id:"reference/component",title:"Component",description:"The Component object is ony available in Function and Script nodes and it contains things related to the component scope where the Function or Script node is executing.",source:"@site/javascript/reference/component.md",sourceDirName:"reference",slug:"/reference/component",permalink:"/2.6/javascript/reference/component",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Noodl.Events",permalink:"/2.6/javascript/reference/events"},next:{title:"overview",permalink:"/2.6/javascript/samples/overview"}},l={},u=[],m={toc:u};function f(e){var t=e.components,i=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"component"},"Component"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Component")," object is ony available in ",(0,a.kt)("a",{parentName:"p",href:"/nodes/javascript/function"},"Function")," and ",(0,a.kt)("a",{parentName:"p",href:"/nodes/javascript/script"},"Script")," nodes and it contains things related to the component scope where the ",(0,a.kt)("strong",{parentName:"p"},"Function")," or ",(0,a.kt)("strong",{parentName:"p"},"Script")," node is executing."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Component.Object")," is the ",(0,a.kt)("a",{parentName:"p",href:"/nodes/component-utilities/component-object"},"Component Object")," of the current component and you can use it just like any other ",(0,a.kt)("a",{parentName:"p",href:"/javascript/reference/object"},"Noodl.Object"),". Most commonly this means accessing the properties of the object. When you set a property any ",(0,a.kt)("strong",{parentName:"p"},"Component Object")," node in this component instance will update accordingly."),(0,a.kt)("div",{className:"ndl-image-with-background xl"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(94528).Z,width:"1808",height:"756"}))),(0,a.kt)("p",null,"In the example above the ",(0,a.kt)("strong",{parentName:"p"},"Function")," node called ",(0,a.kt)("em",{parentName:"p"},"Update selection")," is modifying the ",(0,a.kt)("strong",{parentName:"p"},"Component Object")," to create a new array for ",(0,a.kt)("strong",{parentName:"p"},"Selection"),". This is done by accessing the ",(0,a.kt)("strong",{parentName:"p"},"Checkboxes")," array in the component object and filtering and mapping that array."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Component.Object.Selection = Component.Object.Checkboxes.filter(o => o.Checked).map(o => ({Value:o.Value}))\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Component.ParentObject")," is similair but this object is the ",(0,a.kt)("a",{parentName:"p",href:"/nodes/component-utilities/parent-component-object"},"Parent Component Object"),", that is the ",(0,a.kt)("strong",{parentName:"p"},"Component Object")," of the parent component in the visual heirarchy. It is also used like any other ",(0,a.kt)("a",{parentName:"p",href:"/javascript/reference/object"},"Noodl.Object"),"."))}f.isMDXComponent=!0},94528:function(e,t,n){t.Z=n.p+"assets/images/component-object-af744c4cb71eefb9a66a60475ff773fb.png"}}]);