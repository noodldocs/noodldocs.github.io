"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[2758],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73335:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],c={hide_title:!0,hide_table_of_contents:!0,title:"Script"},s=void 0,p={unversionedId:"javascript/script",id:"javascript/script",title:"Script",description:"This node allows you to add complex JavaScript to your application.",source:"@site/nodes/javascript/script.md",sourceDirName:"javascript",slug:"/javascript/script",permalink:"/2.6/nodes/javascript/script",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Script"},sidebar:"nodeSidebar",previous:{title:"Function",permalink:"/2.6/nodes/javascript/function"},next:{title:"CSS Definition",permalink:"/2.6/nodes/utilities/css-definition"}},u={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],d={toc:l};function f(e){var t=e.components,c=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"is-hidden"},""),(0,a.kt)("h1",{id:"script"},"Script"),(0,a.kt)("p",null,"This node allows you to add complex JavaScript to your application.\nPlease refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/business-logic/javascript"},"Script Guide")," to learn more about the API.\nBut remember - with great power comes great responsibility."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(58160).Z,width:"942",height:"294"}))),(0,a.kt)("p",null,"In most cases you are better off using the simpler ",(0,a.kt)("span",{className:"ndl-node"},(0,a.kt)("a",{parentName:"p",href:"/nodes/javascript/function"},"Function"))," node for your custom JavaScript."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Reading the Javascript ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/business-logic/javascript"},"guide")," gives a broader understanding of how it works."),(0,a.kt)("p",null,"Here is an example of how you create a function that you can call in the node graph:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Node.Signals.MyFunction = function (value) {\n  // run javascript code\n};\n")),(0,a.kt)("p",{className:"is-hidden"},""),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("p",null,"The inputs are defined by the content of the script or by explicitly specifying inputs in the properties.\nSee the javascript ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/business-logic/javascript"},"guide")," for more details."),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("p",null,"The outputs are defined by the content of the script or by explicitly specifying outputs in the properties.\nSee the javascript ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/business-logic/javascript"},"guide")," for more details."))}f.isMDXComponent=!0},58160:function(e,t,n){t.Z=n.p+"assets/images/script-72fa14c04f780838aee9900c82d8aafc.png"}}]);