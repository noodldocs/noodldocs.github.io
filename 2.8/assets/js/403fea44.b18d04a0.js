"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[1016],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83779:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],l={title:"Embedding / iframe / Micro Frontend",hide_title:!0},d="Embedding / iframe / Micro Frontend",c={unversionedId:"guides/deploy/embedding",id:"guides/deploy/embedding",title:"Embedding / iframe / Micro Frontend",description:"Noodl is a powerful tool for creating iframe and micro frontends.",source:"@site/docs/guides/deploy/embedding.md",sourceDirName:"guides/deploy",slug:"/guides/deploy/embedding",permalink:"/2.8/docs/guides/deploy/embedding",tags:[],version:"current",frontMatter:{title:"Embedding / iframe / Micro Frontend",hide_title:!0}},s={},p=[{value:"Embedding",id:"embedding",level:2},{value:"iframe",id:"iframe",level:2},{value:"Add an iframe to a website",id:"add-an-iframe-to-a-website",level:3},{value:"Micro Frontend",id:"micro-frontend",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"embedding--iframe--micro-frontend"},"Embedding / iframe / Micro Frontend"),(0,i.kt)("p",null,"Noodl is a powerful tool for creating iframe and micro frontends."),(0,i.kt)("p",null,"Micro Frontend, iframe, and embedding are all techniques used in web development for integrating different components or applications into a single web page. However, they have distinct approaches and use cases."),(0,i.kt)("h2",{id:"embedding"},"Embedding"),(0,i.kt)("p",null,"Embedding is a more general term that refers to the process of including one piece of content within another, usually referring to the iframe technique."),(0,i.kt)("h2",{id:"iframe"},"iframe"),(0,i.kt)("p",null,"An iframe (inline frame) is an HTML element that allows you to embed another HTML document within a parent HTML document. By using an iframe, you can display content from another website or application within your web page without affecting the main page's layout or styling. This is useful for embedding third-party content like maps, videos, or widgets. However, iframes have some limitations, such as security risks, lack of responsiveness, and difficulty in communication between parents and iframe content."),(0,i.kt)("h3",{id:"add-an-iframe-to-a-website"},"Add an iframe to a website"),(0,i.kt)("p",null,"To add an iframe to your HTML document, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"<iframe>")," tag with the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," attribute specifying the URL of the content you want to embed. Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<iframe\n  width="560"\n  height="315"\n  src="https://example.sandbox.noodl.app/" \n  rameborder="0"\n  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n  allowfullscreen\n></iframe>\n')),(0,i.kt)("p",null,"In this example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"<iframe>")," tag has several attributes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"width")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"height"),": Set the dimensions of the iframe."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src"),": The URL of the Noodl sandbox to be embedded."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"frameborder"),': Set to "0" to remove the border around the iframe.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"allow"),": Specifies a list of features that are allowed within the iframe, such as accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, and picture-in-picture."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"allowfullscreen"),": Allows the iframe to go full-screen mode when the full-screen API is used.")),(0,i.kt)("p",null,"This example demonstrates how to add an iframe to your HTML document to embed a Noodl sandbox. You can customize the attributes as needed to suit your specific use case or other types of content to be embedded using iframes."),(0,i.kt)("h2",{id:"micro-frontend"},"Micro Frontend"),(0,i.kt)("p",null,"Micro Frontends is an architectural pattern that involves breaking down a frontend application into smaller, more manageable, and independent parts, called micro frontends. Each micro frontend is a self-contained unit of the frontend code that is responsible for a specific set of features or functionality."),(0,i.kt)("p",null,"The micro frontend approach allows for greater flexibility and scalability in frontend development, as each micro frontend can be developed and deployed independently, and can be composed to create the overall frontend application. This approach also allows for different teams to work on different parts of the front-end application, using different technologies."),(0,i.kt)("p",null,"If you are interested in hearing more, ",(0,i.kt)("a",{parentName:"p",href:"https://www.noodl.net/community"},"contact us"),"."))}m.isMDXComponent=!0}}]);