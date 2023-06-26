"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[9371],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),g=o,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||r;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34797:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=["components"],p={hide_title:!0,hide_table_of_contents:!0,title:"Noodl.Navigation"},l="Noodl.Navigation",c={unversionedId:"reference/navigation",id:"reference/navigation",title:"Noodl.Navigation",description:"Only available on the frontend",source:"@site/javascript/reference/navigation.md",sourceDirName:"reference",slug:"/reference/navigation",permalink:"/2.9/javascript/reference/navigation",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Noodl.Navigation"},sidebar:"apiSidebar",previous:{title:"Noodl.Files",permalink:"/2.9/javascript/reference/files"},next:{title:"Noodl.CloudFunctions",permalink:"/2.9/javascript/reference/cloudfunctions"}},s={},u=[{value:"<strong><code>Noodl.Navigation.showPopup(componentPath,parameters)</code></strong>",id:"noodlnavigationshowpopupcomponentpathparameters",level:4},{value:"<strong><code>Noodl.Navigation.navigate(routerName,targetPageName,parameters)</code></strong>",id:"noodlnavigationnavigaterouternametargetpagenameparameters",level:4},{value:"<strong><code>Noodl.Navigation.navigateToPath(path,query)</code></strong>",id:"noodlnavigationnavigatetopathpathquery",level:4}],d={toc:u};function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"noodlnavigation"},"Noodl.Navigation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Only available on the frontend"),(0,r.kt)("br",{parentName:"p"}),"\n","The ",(0,r.kt)("strong",{parentName:"p"},"Noodl.Navigation")," service lets you perform navigation from functions and scripts."),(0,r.kt)("h4",{id:"noodlnavigationshowpopupcomponentpathparameters"},(0,r.kt)("strong",{parentName:"h4"},(0,r.kt)("inlineCode",{parentName:"strong"},"Noodl.Navigation.showPopup(componentPath,parameters)"))),(0,r.kt)("p",null,"This function will show the provided visual component as a popup."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const result = await Noodl.Navigation.showPopup("#mysheet/mypopupcomponent", {\n  Message: "hello",\n});\n\nconsole.log(result.action); // The action used to close the popup\nconsole.log(result.parameters); // The close parameters\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"parameters")," are provided to the component as inputs, and must match the component input names."),(0,r.kt)("h4",{id:"noodlnavigationnavigaterouternametargetpagenameparameters"},(0,r.kt)("strong",{parentName:"h4"},(0,r.kt)("inlineCode",{parentName:"strong"},"Noodl.Navigation.navigate(routerName,targetPageName,parameters)"))),(0,r.kt)("p",null,"This function will navigate on a given page router, identified with ",(0,r.kt)("strong",{parentName:"p"},"routerName"),", to a provided page, identified with ",(0,r.kt)("strong",{parentName:"p"},"targetPageName")," (the path to the page component), and give it the parameters provided in ",(0,r.kt)("strong",{parentName:"p"},"parameters"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'Noodl.Navigation.navigate("Main", "#mysheet/DetailsPage", {\n  ObjectId: theClickedObjectId,\n});\n')),(0,r.kt)("h4",{id:"noodlnavigationnavigatetopathpathquery"},(0,r.kt)("strong",{parentName:"h4"},(0,r.kt)("inlineCode",{parentName:"strong"},"Noodl.Navigation.navigateToPath(path,query)"))),(0,r.kt)("p",null,"This function will navigate to a specific url path. You can provide query parameters as an object. The function will use the current path mode selected in the project, hash or path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'Noodl.Navigation.navigateToPath("/main/details/" + theClickedObjectId, {\n  query: {\n    filter: true,\n  },\n});\n')))}g.isMDXComponent=!0}}]);