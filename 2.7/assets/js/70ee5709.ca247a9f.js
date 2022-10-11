"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[4633],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=s(n),g=r,h=c["".concat(i,".").concat(g)]||c[g]||p[g]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18960:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),l=["components"],u={title:"LanguageBundle",hide_title:!0},i=void 0,s={unversionedId:"modules/i18next/language-bundle",id:"modules/i18next/language-bundle",title:"LanguageBundle",description:"The language bundle contains the translations for a language. If you have multiple languages you will have one LanguageBundle for each language and they generally should contain the same strings, translated to the respective language.",source:"@site/library/modules/i18next/language-bundle.md",sourceDirName:"modules/i18next",slug:"/modules/i18next/language-bundle",permalink:"/2.7/library/modules/i18next/language-bundle",tags:[],version:"current",frontMatter:{title:"LanguageBundle",hide_title:!0},sidebar:"i18nextSidebar",previous:{title:"i18next",permalink:"/2.7/library/modules/i18next/i18next-node"},next:{title:"Translation",permalink:"/2.7/library/modules/i18next/translation"}},d={},p=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],c={toc:p};function g(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,""),(0,o.kt)("h1",{id:"languagebundle"},"LanguageBundle"),(0,o.kt)("p",null,"The language bundle contains the translations for a language. If you have multiple languages you will have one LanguageBundle for each language and they generally should contain the same strings, translated to the respective language."),(0,o.kt)("p",null,'Each language bundle also has a "Namespace". This can be used to separate different parts of translations to different bundles that can be loaded at different times. For example you can have one bundle for static UI-texts called "UI" and one bundle for texts that are dynamically loaded based on content in the database called "Dbtexts". If you support two languages, English and Spanish, this would mean that you have four language bundle nodes: UI and Dbtexts for English and Spanish.'),(0,o.kt)("p",null,"The bundle itself is a JSON-object, as described on ",(0,o.kt)("a",{parentName:"p",href:"https://www.i18next.com/translation-function/essentials"},"i18next website"),". It contains ",(0,o.kt)("inlineCode",{parentName:"p"},"key:string")," pairs for each text. It can also include an inner structure (JSON objects) to help organize strings based on features. Aa bundle for English could look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "loginpage":{\n    "user_name":"User Name",\n    "confirm_button":{\n      "label":"Confirm",\n      "hover_text":"Press here to confirm"\n    }\n}\n')),(0,o.kt)("p",null,"In this example the key ",(0,o.kt)("inlineCode",{parentName:"p"},"loginpage.confirm_button.hover_text")," would identify the button hover text translation when used in a Translation node.\nNote that i18next supports various dynamic features in the texts, e.g. plurals, date formats, etc. These are generally supported when used in Noodl."),(0,o.kt)("p",null,'There are typically two ways to use Language Bundles. For static texts, for example UI texts, you edit the bundle object directly in Noodl (pressing the "Edit" button on the property panel). As you build the UI you add new texts to the bundle. You have one bundle per language. For dynamic texts, for example loaded during execution from a database, you programatically create bundle objects and load them into the ',(0,o.kt)("strong",{parentName:"p"},"LanguageBundle")," when available and using the AddBundleObject input.\n"),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Language"),(0,o.kt)("br",{parentName:"p"}),"\n","The language that this bundle applies to. Typically a language code string, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"en"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Namespace"),(0,o.kt)("br",{parentName:"p"}),"\n","The name of the Namespace. Can by any string."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"AddResource"),(0,o.kt)("br",{parentName:"p"}),"\n","A signal to add a specific resource to the bundle. This is used for dynamic language string, e.g. when reading content from a database."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ResourceKey"),(0,o.kt)("br",{parentName:"p"}),"\n","The resource key that will be added when the ",(0,o.kt)("strong",{parentName:"p"},"AddResource")," signal is received."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ResourceValue"),(0,o.kt)("br",{parentName:"p"}),"\n","The resource value that will be associated with the ",(0,o.kt)("strong",{parentName:"p"},"ResourceKey")," when the ",(0,o.kt)("strong",{parentName:"p"},"AddResource")," signal is received."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"AddBundleObject"),(0,o.kt)("br",{parentName:"p"}),"\n","This signal is used to add a complete bundle object to the language bundle. This is typically used to dynamically add language resources to a bundle e.g. when fetching from a database."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Resource Bundle Object"),(0,o.kt)("br",{parentName:"p"}),"\n","The object (a javascript object) that will be added to the language bundle when the ",(0,o.kt)("strong",{parentName:"p"},"AddBundleObject")," signal is received."),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"BundleLoaded"),(0,o.kt)("br",{parentName:"p"}),"\n","Triggered when a new bundle object has been loaded."))}g.isMDXComponent=!0}}]);