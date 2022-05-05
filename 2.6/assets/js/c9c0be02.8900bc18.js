"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[8080],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3703:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=n(44996),s=["components"],l={title:"Building User Interfaces Basics",hide_title:!0},u="Building User Interfaces Basics",c={unversionedId:"guides/user-interfaces/basics",id:"guides/user-interfaces/basics",title:"Building User Interfaces Basics",description:"What you will learn in this guide",source:"@site/docs/guides/user-interfaces/basics.md",sourceDirName:"guides/user-interfaces",slug:"/guides/user-interfaces/basics",permalink:"/2.6/docs/guides/user-interfaces/basics",tags:[],version:"current",frontMatter:{title:"Building User Interfaces Basics",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Building User Interfaces",permalink:"/2.6/docs/guides/user-interfaces/overview"},next:{title:"Components",permalink:"/2.6/docs/guides/user-interfaces/components"}},d={},p=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Adding UI elements",id:"adding-ui-elements",level:2},{value:"Editing properties",id:"editing-properties",level:2},{value:"The visual heirarchy",id:"the-visual-heirarchy",level:2},{value:"Grouping and Layouts",id:"grouping-and-layouts",level:2}],h={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"building-user-interfaces-basics"},"Building User Interfaces Basics"),(0,o.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,o.kt)("p",null,"In this guide you will learn how to place and group components in the visual canvas."),(0,o.kt)("h2",{id:"adding-ui-elements"},"Adding UI elements"),(0,o.kt)("p",null,"To add UI controls and other UI elements, such as Texts, to the currently selected visual component you click the ",(0,o.kt)("strong",{parentName:"p"},"[+]")," icon at the top of the visual canvas. This brings up the ",(0,o.kt)("strong",{parentName:"p"},"Node Picker"),", here you can find yourself to the ",(0,o.kt)("strong",{parentName:"p"},"UI Elements")," section. Click the element you want to add and it is added to the currently selected component."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("video",{width:"100%",autoPlay:!0,muted:!0,loop:!0,src:(0,a.Z)("/docs/guides/user-interfaces/basics/add-ui-control.mp4")})),(0,o.kt)("h2",{id:"editing-properties"},"Editing properties"),(0,o.kt)("p",null,"To edit the properties of a UI element, you click the element in the visual canvas (or more commonly in the node graph editor) which will bring up the properties panel. Here you can edit all properties of the UI element."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("video",{width:"100%",autoPlay:!0,muted:!0,loop:!0,src:(0,a.Z)("/docs/guides/user-interfaces/basics/edit-properties.mp4")})),(0,o.kt)("h2",{id:"the-visual-heirarchy"},"The visual heirarchy"),(0,o.kt)("p",null,"As you add UI elements to your component you will see the visual heirarchy being built in the node graph editor. All UI elements are depicted as blue nodes. Here are some nifty things to know about the visual hierarchy in the node editor."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"All components must have a ",(0,o.kt)("strong",{parentName:"p"},"single root")," UI Element, most ofthen this is a ",(0,o.kt)("strong",{parentName:"p"},"Group")," node.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can hover the UI elements in the node graph editor to reveal them in the visual canvas.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can manipulate the heirarchy much like you would a layer panel in other design tools.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can bring up the ",(0,o.kt)("strong",{parentName:"p"},"Node picker")," by ",(0,o.kt)("strong",{parentName:"p"},"right clicking")," in the node graph editor. If you want the newly created UI element to be placed as a child to another UI element simply right click the parent element to bring up the ",(0,o.kt)("strong",{parentName:"p"},"Node Picker"),"."))),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("video",{width:"100%",autoPlay:!0,muted:!0,loop:!0,src:(0,a.Z)("/docs/guides/user-interfaces/basics/ui-heirarchy.mp4")})),(0,o.kt)("h2",{id:"grouping-and-layouts"},"Grouping and Layouts"),(0,o.kt)("p",null,"Now that you know how to place new components it's time to learn another important concept, grouping. This is how you group UI elements together and control the layout of the elements under a group. Use the ",(0,o.kt)("strong",{parentName:"p"},"Node Picker")," to create a new group, place it where you want it in the heirarchy, select, drag and drop the UI elements that you want under the group."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Group")," node gives you a bunch of options for layouting user interfaces, learn more about the details of layouting and the group node in this ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/user-interfaces/layout"},"guide")),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("video",{width:"100%",autoPlay:!0,muted:!0,loop:!0,src:(0,a.Z)("/docs/guides/user-interfaces/basics/grouping.mp4")})))}m.isMDXComponent=!0}}]);