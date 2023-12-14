"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[6841],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(a),d=n,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(f,s(s({ref:t},c),{},{components:a})):r.createElement(f,s({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},63616:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),o=a(17213);const s={title:"Task List App",hide_title:!0},i="Task List App",p={unversionedId:"examples/task-list-app",id:"examples/task-list-app",title:"Task List App",description:"This is a simple example of a Task List App. It's a great starting point if you want to learn about the basics in Noodl. It shows how to do simple Layouts with UI Controls. It also uses a simple Backend with a Database to store the tasks created by the users. There is also a Build Along series that walks through the complete app.",source:"@site/library/examples/task-list-app.mdx",sourceDirName:"examples",slug:"/examples/task-list-app",permalink:"/2.9/library/examples/task-list-app",draft:!1,tags:[],version:"current",frontMatter:{title:"Task List App",hide_title:!0},sidebar:"librarySidebar",previous:{title:"Examples Overview",permalink:"/2.9/library/examples/overview"},next:{title:"Survey App",permalink:"/2.9/library/examples/survey-app"}},l={},c=[],u={toc:c},m="wrapper";function d(e){let{components:t,...s}=e;return(0,n.kt)(m,(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"task-list-app"},"Task List App"),(0,n.kt)("p",null,"This is a simple example of a Task List App. It's a great starting point if you want to learn about the basics in Noodl. It shows how to do simple ",(0,n.kt)("strong",{parentName:"p"},"Layouts")," with ",(0,n.kt)("strong",{parentName:"p"},"UI Controls"),". It also uses a simple ",(0,n.kt)("strong",{parentName:"p"},"Backend")," with a ",(0,n.kt)("strong",{parentName:"p"},"Database")," to store the tasks created by the users. There is also a ",(0,n.kt)("a",{parentName:"p",href:"/docs/build-alongs/task-list-app"},"Build Along")," series that walks through the complete app."),(0,n.kt)("div",{className:"ndl-image-with-background m"},(0,n.kt)("p",null,(0,n.kt)("img",{src:a(66232).Z,width:"530",height:"384"})),(0,n.kt)(o.Z,{zip:"/library/examples/task-list-app/task-app-1-2.zip",name:"Task List App",thumb:"/library/examples/task-list-app/task_list_thumbnail.png",cf:"/library/examples/task-list-app/task-app-cf.json",mdxType:"ImportButton"})))}d.isMDXComponent=!0},17213:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(39671);function o(e){let{zip:t,name:a,thumb:o,cf:s}=e;return r.createElement("button",{className:"ndl-import-button",onClick:()=>(0,n.I)(t,{name:a,thumb:o,cf:s})})}},39671:(e,t,a)=>{a.d(t,{I:()=>n});var r=a(36809);function n(e,t){let a=[];t&&void 0!==t.name&&a.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&a.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+r.default.baseUrl+t.thumb)),t&&void 0!==t.cf&&a.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+r.default.baseUrl+"/"+t.cf));var n="noodl:import/"+location.protocol+"//"+location.host+r.default.baseUrl+e+(a.length>0?"?"+a.join("&"):"");console.log("Importing into Noodl:",n),console.log(e),window.location.href=n}},66232:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/task_list_thumbnail-7e7fb9fc428ae055ba26fcb337f1493b.png"}}]);