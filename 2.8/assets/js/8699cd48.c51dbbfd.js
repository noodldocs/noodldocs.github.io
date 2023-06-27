"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[3055],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,y=d["".concat(a,".").concat(f)]||d[f]||s[f]||c;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<c;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50279:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var n=r(83117),o=r(80102),c=(r(67294),r(3905)),i=["components"],l={title:"Project Structure",hide_title:!0},a="Project Structure",p={unversionedId:"guides/deploy/project-structure",id:"guides/deploy/project-structure",title:"Project Structure",description:"You can find the project folders at this path:",source:"@site/docs/guides/deploy/project-structure.md",sourceDirName:"guides/deploy",slug:"/guides/deploy/project-structure",permalink:"/2.8/docs/guides/deploy/project-structure",tags:[],version:"current",frontMatter:{title:"Project Structure",hide_title:!0}},u={},s=[{value:"What is deployed?",id:"what-is-deployed",level:2}],d={toc:s};function f(e){var t=e.components,l=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"project-structure"},"Project Structure"),(0,c.kt)("p",null,"You can find the project folders at this path:"),(0,c.kt)("p",null,"Windows Path:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"%AppData%\\Roaming\\Noodl\\projects\n")),(0,c.kt)("p",null,"MacOS Path:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"~/Library/Application Support/Noodl/projects\n")),(0,c.kt)("p",null,"You can also open the project via this Button inside Noodl, in the project settings."),(0,c.kt)("div",{className:"ndl-image-with-background l"},(0,c.kt)("p",null,(0,c.kt)("img",{src:r(20512).Z,width:"250",height:"256"}))),(0,c.kt)("h2",{id:"what-is-deployed"},"What is deployed?"),(0,c.kt)("p",null,"All files in the project folder is deployed to the frontend with a few exceptions."),(0,c.kt)("p",null,"List of a few files that are ignored:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},".gitattributes\n.gitignore\nproject.json\n")),(0,c.kt)("p",null,"List of a few folders that are ignored:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},".git/\n.noodl/\n")),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"These lists might not be complete.")),(0,c.kt)("p",null,"When deploying the app Noodl will also add a few new files for example React library."))}f.isMDXComponent=!0},20512:function(e,t,r){t.Z=r.p+"assets/images/open_project_folder-8c53211dbac74f1377d4711df94c2892.png"}}]);