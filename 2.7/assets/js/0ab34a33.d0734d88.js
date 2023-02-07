"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[6841],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),l=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=l(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,s(s({ref:e},c),{},{components:n})):r.createElement(d,s({ref:e},c))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63616:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),s=n(17213),i=["components"],p={title:"Task List App",hide_title:!0},l="Task List App",c={unversionedId:"examples/task-list-app",id:"examples/task-list-app",title:"Task List App",description:"This is a simple example of a Task List App. It's a great starting point if you want to learn about the basics in Noodl. It shows how to do simple Layouts with UI Controls. It also uses a simple Backend with a Database to store the tasks created by the users. There is also a Build Along series that walks through the complete app.",source:"@site/library/examples/task-list-app.mdx",sourceDirName:"examples",slug:"/examples/task-list-app",permalink:"/2.7/library/examples/task-list-app",tags:[],version:"current",frontMatter:{title:"Task List App",hide_title:!0},sidebar:"librarySidebar",previous:{title:"Examples Overview",permalink:"/2.7/library/examples/overview"},next:{title:"Survey App",permalink:"/2.7/library/examples/survey-app"}},u={},m=[],f={toc:m};function d(t){var e=t.components,p=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,p,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"task-list-app"},"Task List App"),(0,o.kt)("p",null,"This is a simple example of a Task List App. It's a great starting point if you want to learn about the basics in Noodl. It shows how to do simple ",(0,o.kt)("strong",{parentName:"p"},"Layouts")," with ",(0,o.kt)("strong",{parentName:"p"},"UI Controls"),". It also uses a simple ",(0,o.kt)("strong",{parentName:"p"},"Backend")," with a ",(0,o.kt)("strong",{parentName:"p"},"Database")," to store the tasks created by the users. There is also a ",(0,o.kt)("a",{parentName:"p",href:"/docs/build-alongs/task-list-app"},"Build Along")," series that walks through the complete app."),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(97280).Z,width:"530",height:"384"})),(0,o.kt)(s.Z,{zip:"/library/examples/task-list-app/task-app-1-2.zip",name:"Task List App",thumb:"/library/examples/task-list-app/task_list_thumbnail.png",cf:"/library/examples/task-list-app/task-app-cf.json",mdxType:"ImportButton"})))}d.isMDXComponent=!0},17213:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(67294),a=n(39671);function o(t){var e=t.zip,n=t.name,o=t.thumb,s=t.cf;return r.createElement("button",{className:"ndl-import-button",onClick:function(){return(0,a.I)(e,{name:n,thumb:o,cf:s})}})}},39671:function(t,e,n){n.d(e,{I:function(){return a}});var r=n(99782);function a(t,e){var n=[];e&&void 0!==e.name&&n.push("name="+encodeURIComponent(e.name)),e&&void 0!==e.thumb&&n.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+r.default.baseUrl+e.thumb)),e&&void 0!==e.cf&&n.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+r.default.baseUrl+"/"+e.cf));var a="noodl:import/"+location.protocol+"//"+location.host+r.default.baseUrl+t+(n.length>0?"?"+n.join("&"):"");console.log("Importing into Noodl:",a),console.log(t),window.location.href=a}},97280:function(t,e,n){e.Z=n.p+"assets/images/task_list_thumbnail-7e7fb9fc428ae055ba26fcb337f1493b.png"}}]);