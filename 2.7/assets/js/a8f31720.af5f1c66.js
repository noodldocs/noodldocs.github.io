"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[1273],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(r),h=a,f=d["".concat(i,".").concat(h)]||d[h]||c[h]||o;return r?n.createElement(f,p(p({ref:t},s),{},{components:r})):n.createElement(f,p({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,p[1]=u;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},14729:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),p=["components"],u={title:"GraphQL Query",hide_title:!0},i=void 0,l={unversionedId:"modules/graphql/graphql-node",id:"modules/graphql/graphql-node",title:"GraphQL Query",description:"This node enables you to connect to GraphQL based API:s in a quick and easy way.",source:"@site/library/modules/graphql/graphql-node.md",sourceDirName:"modules/graphql",slug:"/modules/graphql/graphql-node",permalink:"/2.7/library/modules/graphql/graphql-node",tags:[],version:"current",frontMatter:{title:"GraphQL Query",hide_title:!0},sidebar:"graphQLSidebar",previous:{title:"Graph QL Module",permalink:"/2.7/library/modules/graphql/"}},s={},c=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],d={toc:c};function h(e){var t=e.components,u=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,""),(0,o.kt)("h1",{id:"graphql-query"},"GraphQL Query"),(0,o.kt)("p",null,"This node enables you to connect to GraphQL based API:s in a quick and easy way."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(99387).Z,width:"1108",height:"850"})),(0,o.kt)("p",null,""),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Query"),(0,o.kt)("br",{parentName:"p"}),"\n","Input your GraphQL query in this field. Example: ",(0,o.kt)("inlineCode",{parentName:"p"},"{ hero { name } }")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Endpoint"),(0,o.kt)("br",{parentName:"p"}),"\n","A URL for the service that you are using."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Results"),(0,o.kt)("br",{parentName:"p"}),"\n","Click the plus button to define the name of the results array you want to receive from your query. If your query was ",(0,o.kt)("inlineCode",{parentName:"p"},"{ hero { name } }"),", you would give your result the name ",(0,o.kt)("inlineCode",{parentName:"p"},"hero"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request Headers"),(0,o.kt)("br",{parentName:"p"}),"\n","Use this field to add any headers the GraphQL service requires.",(0,o.kt)("br",{parentName:"p"}),"\n","Example:  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"headers({ 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer f60e2ea4dcd07fbcdaef8c8cd8418e', })\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Fetch"),(0,o.kt)("br",{parentName:"p"}),"\n","Send a signal to this input to execute your GraphQL query."),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Results"),(0,o.kt)("br",{parentName:"p"}),"\n","This is a list of the results that were defined in the inputs. Each result will have the name that was defined in the inputs section and it will be an array of items."))}h.isMDXComponent=!0},99387:function(e,t,r){t.Z=r.p+"assets/images/graphql-query-node-59d1b270495063795cabec78c7eb8f45.png"}}]);