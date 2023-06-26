"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[5885],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||a;return n?o.createElement(d,c(c({ref:t},l),{},{components:n})):o.createElement(d,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38763:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),c=["components"],i={hide_title:!0,hide_table_of_contents:!0,title:"Component"},p="Component",s={unversionedId:"reference/component",id:"reference/component",title:"Component",description:"Only available on the frontend",source:"@site/javascript/reference/component.md",sourceDirName:"reference",slug:"/reference/component",permalink:"/2.9/javascript/reference/component",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Component"},sidebar:"apiSidebar",previous:{title:"Noodl.Events",permalink:"/2.9/javascript/reference/events"},next:{title:"Noodl.Records",permalink:"/2.9/javascript/reference/records"}},l={},m=[],u={toc:m};function f(e){var t=e.components,i=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"component"},"Component"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Only available on the frontend"),(0,a.kt)("br",{parentName:"p"}),"\n","The ",(0,a.kt)("inlineCode",{parentName:"p"},"Component")," object is ony available in ",(0,a.kt)("a",{parentName:"p",href:"/nodes/javascript/function"},"Function")," and ",(0,a.kt)("a",{parentName:"p",href:"/nodes/javascript/script"},"Script")," nodes and it contains things related to the component scope where the ",(0,a.kt)("strong",{parentName:"p"},"Function")," or ",(0,a.kt)("strong",{parentName:"p"},"Script")," node is executing."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Component.Object")," is the ",(0,a.kt)("a",{parentName:"p",href:"/nodes/component-utilities/component-object"},"Component Object")," of the current component and you can use it just like any other ",(0,a.kt)("a",{parentName:"p",href:"/javascript/reference/object"},"Noodl.Object"),". Most commonly this means accessing the properties of the object. When you set a property any ",(0,a.kt)("strong",{parentName:"p"},"Component Object")," node in this component instance will update accordingly."),(0,a.kt)("div",{className:"ndl-image-with-background xl"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(43413).Z,width:"1808",height:"756"}))),(0,a.kt)("p",null,"In the example above the ",(0,a.kt)("strong",{parentName:"p"},"Function")," node called ",(0,a.kt)("em",{parentName:"p"},"Update selection")," is modifying the ",(0,a.kt)("strong",{parentName:"p"},"Component Object")," to create a new array for ",(0,a.kt)("strong",{parentName:"p"},"Selection"),". This is done by accessing the ",(0,a.kt)("strong",{parentName:"p"},"Checkboxes")," array in the component object and filtering and mapping that array."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Component.Object.Selection = Component.Object.Checkboxes.filter(\n  (o) => o.Checked\n).map((o) => ({ Value: o.Value }));\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Component.ParentObject")," is similair but this object is the ",(0,a.kt)("a",{parentName:"p",href:"/nodes/component-utilities/parent-component-object"},"Parent Component Object"),", that is the ",(0,a.kt)("strong",{parentName:"p"},"Component Object")," of the parent component in the visual heirarchy. It is also used like any other ",(0,a.kt)("a",{parentName:"p",href:"/javascript/reference/object"},"Noodl.Object"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Component.RepeaterObject")," If this component is the template of a repeater this will contain the object of the items array corresponding to this specific component instance. That is the same object as if you set an object ",(0,a.kt)("strong",{parentName:"p"},"Id Source")," to ",(0,a.kt)("strong",{parentName:"p"},"From Repeater"),", as shown below."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(65529).Z,width:"592",height:"184"}))),(0,a.kt)("p",null,"Below is an example of such an object in a component."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(87334).Z,width:"962",height:"714"}))),(0,a.kt)("p",null,"If this component is not directly the template used by a repeater but instead a sub component, you can still access the object. The object will be resolved by following the instance parent chain of components until it reaches a component that is a repeater template instance."))}f.isMDXComponent=!0},43413:function(e,t,n){t.Z=n.p+"assets/images/component-object-af744c4cb71eefb9a66a60475ff773fb.png"},65529:function(e,t,n){t.Z=n.p+"assets/images/from-repeater-props-7c95e148f9d348709902b7dc064c8bba.png"},87334:function(e,t,n){t.Z=n.p+"assets/images/repeater-object-f22178b6f620d96543dfeb2620728e5b.png"}}]);