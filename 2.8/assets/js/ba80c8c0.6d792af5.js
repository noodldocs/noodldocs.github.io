"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[5004],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||l;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73662:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var r=n(83117),o=n(80102),l=(n(67294),n(3905)),i=["components"],a={hide_title:!0,hide_table_of_contents:!0,title:"Noodl.Files"},s="Noodl.Files",c={unversionedId:"reference/files",id:"reference/files",title:"Noodl.Files",description:"The Noodl.Files service lets you access the cloud services files.",source:"@site/javascript/reference/files.md",sourceDirName:"reference",slug:"/reference/files",permalink:"/2.8/javascript/reference/files",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Noodl.Files"},sidebar:"apiSidebar",previous:{title:"Noodl.Users",permalink:"/2.8/javascript/reference/users"},next:{title:"Noodl.Navigation",permalink:"/2.8/javascript/reference/navigation"}},p={},u=[{value:"<strong><code>Noodl.Files.upload(file,options)</code></strong>",id:"noodlfilesuploadfileoptions",level:4},{value:"<strong><code>Noodl.Files.delete(fileName)</code></strong>",id:"noodlfilesdeletefilename",level:4}],d={toc:u};function f(e){var t=e.components,a=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"noodlfiles"},"Noodl.Files"),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Noodl.Files")," service lets you access the cloud services files."),(0,l.kt)("h4",{id:"noodlfilesuploadfileoptions"},(0,l.kt)("strong",{parentName:"h4"},(0,l.kt)("inlineCode",{parentName:"strong"},"Noodl.Files.upload(file,options)"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Only available on the frontend"),(0,l.kt)("br",{parentName:"p"}),"\n","This function will upload a file to the backend. You can specify a progress callback using the options."),(0,l.kt)("div",{className:"ndl-image-with-background xl"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(24306).Z,width:"1168",height:"564"}))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const cloudFile = await Noodl.Files.upload(Inputs.File, {\n  onProgress: (p) => {\n    console.log(p.total, p.loaded);\n  },\n});\n\nconsole.log(cloudFile.name);\nconsole.log(cloudFile.url);\n")),(0,l.kt)("h4",{id:"noodlfilesdeletefilename"},(0,l.kt)("strong",{parentName:"h4"},(0,l.kt)("inlineCode",{parentName:"strong"},"Noodl.Files.delete(fileName)"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Only available in cloud functions"),(0,l.kt)("br",{parentName:"p"}),"\n","This function will delete a file that has been uploaded to the backend. You need to provide the file name that was returned when the file was uploaded. So not the full ",(0,l.kt)("inlineCode",{parentName:"p"},"url")," but the ",(0,l.kt)("inlineCode",{parentName:"p"},"hash+filename")," returned by the upload function."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// Can only be done in cloud functions\nawait Noodl.Files.delete(filename);\n")))}f.isMDXComponent=!0},24306:function(e,t,n){t.Z=n.p+"assets/images/upload-691bd67954c5e8478af63d27f7689d64.png"}}]);