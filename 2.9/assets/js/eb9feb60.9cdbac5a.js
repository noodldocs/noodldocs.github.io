"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[7679],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,f=c["".concat(u,".").concat(m)]||c[m]||s[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},89891:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],l={title:"Noodl 2.8.4",description:"Noodl 2.8.4",slug:"april-2023-2",hide_table_of_contents:!1},u=void 0,d={permalink:"/2.9/whats-new/april-2023-2",source:"@site/whats-new/2023-05-16.md",title:"Noodl 2.8.4",description:"Noodl 2.8.4",date:"2023-05-16T00:00:00.000Z",formattedDate:"May 16, 2023",tags:[],truncated:!1,authors:[],frontMatter:{title:"Noodl 2.8.4",description:"Noodl 2.8.4",slug:"april-2023-2",hide_table_of_contents:!1},prevItem:{title:"Noodl 2.8.5",permalink:"/2.9/whats-new/may-2023"},nextItem:{title:"Noodl 2.8.3",permalink:"/2.9/whats-new/april-2023"}},p={authorsImageUrls:[]},s=[{value:"Features",id:"features",level:2},{value:"Bug fixes",id:"bug-fixes",level:2}],c={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("section",null,(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added Min Column Width to Column node allowing for more finegrained layouts."),(0,i.kt)("li",{parentName:"ul"},"Added Aggregate node, used to compute an aggregate over properties of records. This node can only be used in Cloud Functions."),(0,i.kt)("li",{parentName:"ul"},"Added the possibility to import CSV files inside Parse Dashboard with support for many data types."),(0,i.kt)("li",{parentName:"ul"},"Added Copy values in the debug inspector, making it easy to copy the values and paste them into ChatGPT."),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"{monthShort}")," expression in the Date To String node."),(0,i.kt)("li",{parentName:"ul"},"Added Horizontal Gap and Vertical Gap to the Group node."),(0,i.kt)("li",{parentName:"ul"},"Improved the Icon Picker design and allowed for other kinds of icon libraries."),(0,i.kt)("li",{parentName:"ul"},"Improved the Preview URL input field to be editable, allowing navigation to dynamic pages."))),(0,i.kt)("section",null,(0,i.kt)("h2",{id:"bug-fixes"},"Bug fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fixed Code Editor typings not being imported correctly."),(0,i.kt)("li",{parentName:"ul"},"Fixed setting value in the Dropdown node before items caused an exception."),(0,i.kt)("li",{parentName:"ul"},"Fixed two more rare layout bugs with the node graph view in the editor"),(0,i.kt)("li",{parentName:"ul"},"Fixed Function node and Repeater node could produce errors after being deleted."),(0,i.kt)("li",{parentName:"ul"},"Fixed docs image URLs in node picker allowing us to improve the docs performance."),(0,i.kt)("li",{parentName:"ul"},"Fixed undefined ",(0,i.kt)("inlineCode",{parentName:"li"},"setChildIndex")," exception caused by unattached Repeater nodes."),(0,i.kt)("li",{parentName:"ul"},"Fixed a rare issue when cloning git repositories with invalid filenames on Windows."),(0,i.kt)("li",{parentName:"ul"},"Fixed that the Parse schema was not updated when changed in rare cases."),(0,i.kt)("li",{parentName:"ul"},"Fixed Code Editor Version Control Diff exit button not working when scrolling. "),(0,i.kt)("li",{parentName:"ul"},"Fixed CSS issues in the editor where the scrollbar took over the mouse inputs in popouts."),(0,i.kt)("li",{parentName:"ul"},'Fixed bug with "not equal to" operation in visual query records filter.'),(0,i.kt)("li",{parentName:"ul"},"Fixed bug when importing prefabs twice."),(0,i.kt)("li",{parentName:"ul"},"Fixed color picker bug."),(0,i.kt)("li",{parentName:"ul"},"Fixed bug with meta data in project json that increased file size."))))}m.isMDXComponent=!0}}]);