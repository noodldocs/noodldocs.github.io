"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[5305],{3905:(A,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>d});var a=t(67294);function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function o(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,a)}return t}function n(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function i(A,e){if(null==A)return{};var t,a,r=function(A,e){if(null==A)return{};var t,a,r={},o=Object.keys(A);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var s=a.createContext({}),g=function(A){var e=a.useContext(s),t=e;return A&&(t="function"==typeof A?A(e):n(n({},e),A)),t},l=function(A){var e=g(A.components);return a.createElement(s.Provider,{value:e},A.children)},p="mdxType",c={inlineCode:"code",wrapper:function(A){var e=A.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(A,e){var t=A.components,r=A.mdxType,o=A.originalType,s=A.parentName,l=i(A,["components","mdxType","originalType","parentName"]),p=g(t),u=r,d=p["".concat(s,".").concat(u)]||p[u]||c[u]||o;return t?a.createElement(d,n(n({ref:e},l),{},{components:t})):a.createElement(d,n({ref:e},l))}));function d(A,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var o=t.length,n=new Array(o);n[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=A,i[p]="string"==typeof A?A:r,n[1]=i;for(var g=2;g<o;g++)n[g]=t[g];return a.createElement.apply(null,n)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},87519:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>n,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var a=t(87462),r=(t(67294),t(3905));const o={title:"Tags",hide_title:!0},n="Tags",i={unversionedId:"prefabs/tags/README",id:"prefabs/tags/README",title:"Tags",description:"This component can be used to display an array of objects with labels as tags. It can automatically create colors based on the label and you can receive click and optionally a remove signal (a small remove cross is displayed.)",source:"@site/library/prefabs/tags/README.md",sourceDirName:"prefabs/tags",slug:"/prefabs/tags/",permalink:"/2.8/library/prefabs/tags/",draft:!1,tags:[],version:"current",frontMatter:{title:"Tags",hide_title:!0},sidebar:"tagsSidebar"},s={},g=[],l={toc:g},p="wrapper";function c(A){let{components:e,...o}=A;return(0,r.kt)(p,(0,a.Z)({},l,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tags"},"Tags"),(0,r.kt)("p",null,"This component can be used to display an array of objects with labels as tags. It can automatically create colors based on the label and you can receive click and optionally a remove signal (a small remove cross is displayed.)"),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:t(61721).Z,width:"680",height:"384"}))),(0,r.kt)("p",null,"You simplye provide an array of objects containing at least the ",(0,r.kt)("strong",{parentName:"p"},"Label")," property to the ",(0,r.kt)("strong",{parentName:"p"},"Items")," input."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'[\n    {\n        "Label":"First"\n    },\n    {\n        "Label":"Second"\n    },  \n    {\n        "Label":"Third"\n    }\n]\n')),(0,r.kt)("p",null,"You can customize the color used for the tags via a property."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:t(51656).Z,width:"644",height:"286"}))),(0,r.kt)("p",null,"There are a couple of more options that is good to use. You can toggle if the the tags should be ",(0,r.kt)("strong",{parentName:"p"},"Removable")," (this will show a litte cross icon next to the label), and ",(0,r.kt)("strong",{parentName:"p"},"Clickable"),". By activating these you will also be able to receive the signals as shown later."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:t(23296).Z,width:"558",height:"346"}))),(0,r.kt)("p",null,"Finally you can enable ",(0,r.kt)("strong",{parentName:"p"},"Generate colors")," which will automatically create unique colors for all tags depending on the label text."),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("strong",{parentName:"p"},"Tag Clicked")," signal along with the ",(0,r.kt)("strong",{parentName:"p"},"Tag Id")," output as shown below to trigger an action when a tag is clicked."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:t(70505).Z,width:"1478",height:"734"}))),(0,r.kt)("p",null,"You can in the same way use the ",(0,r.kt)("strong",{parentName:"p"},"Remove Clicked")," signal to trigger an action when the remove cross is clicked. In the example above the ",(0,r.kt)("strong",{parentName:"p"},"MyTags")," variable contains an array of tags, the following ",(0,r.kt)("strong",{parentName:"p"},"Function")," code removes the tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"Noodl.Variables.MyTags = Noodl.Variables.MyTags.filter(t => t.id !== Inputs.RemoveId)\n")),(0,r.kt)("p",null,"It creates a new array, by filtering out the tag with the id equal to ",(0,r.kt)("strong",{parentName:"p"},"Inputs.RemoveId"),", which in turn is connected to the ",(0,r.kt)("strong",{parentName:"p"},"Tag Id")," output from the ",(0,r.kt)("strong",{parentName:"p"},"Tags")," component."))}c.isMDXComponent=!0},70505:(A,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/tags-nodes-1-20aa7c09c8401d2f0662f3fa925a7bf2.png"},51656:(A,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/tags-props-1-3a1c5a1e40fed962027d5aa67a5358f0.png"},23296:(A,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/tags-props-2-e2b1dc53f8246777152b2b37811e5f47.png"},61721:(A,e,t)=>{t.d(e,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqgAAAGACAYAAABhr5CaAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAB78SURBVHgB7d0HnJ1VnfDx/9T0SW+kkSIQCAngglQLrq6IrqAirqLrfpbV1VUR165rwdeK+Np4V9eu6KuCBXZta0MQl46QkFASCIEkpJHep+w9T5hypyQzQyY5mXy/H+8nc+/c5zKJN5PfnOec81Q0lQQAAOShqTIAACAjAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAFACArAhUAgKwIVAAAsiJQAQDIikAF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gQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWRGoAABkRaACAJAVgQoAQFYEKgAAWakOAACSpiAHTf8Lfp09Qvvy110AAAAASUVORK5CYII="}}]);