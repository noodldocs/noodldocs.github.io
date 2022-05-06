"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[316],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return h}});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=o.createContext({}),u=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},l=function(t){var e=u(t.components);return o.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),p=u(n),h=a,g=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return n?o.createElement(g,r(r({ref:e},l),{},{components:n})):o.createElement(g,r({ref:e},l))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},48344:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var o=n(83117),a=n(80102),i=(n(67294),n(3905)),r=n(44996),s=["components"],c={title:"Making Connections",hide_title:!0},u=void 0,l={unversionedId:"guides/data/making-connections",id:"guides/data/making-connections",title:"Making Connections",description:"",source:"@site/docs/guides/data/making-connections.md",sourceDirName:"guides/data",slug:"/guides/data/making-connections",permalink:"/2.6/docs/guides/data/making-connections",tags:[],version:"current",frontMatter:{title:"Making Connections",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Working with Data in Noodl",permalink:"/2.6/docs/guides/data/overview"},next:{title:"Using Variables",permalink:"/2.6/docs/guides/data/variables"}},d={},p=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Data connections",id:"data-connections",level:2}],h={toc:p};function g(t){var e=t.components,c=(0,a.Z)(t,s);return(0,i.kt)("wrapper",(0,o.Z)({},h,c,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"making-connections"},"Making Connections"),(0,i.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,i.kt)("p",null,"How to make data connections between nodes to start creating data driven user interfaces."),(0,i.kt)("h2",{id:"data-connections"},"Data connections"),(0,i.kt)("p",null,"All nodes have inputs and outputs. Most of the properties of a node (that you can edit in the property panel) are also available as inputs. Many nodes also have outputs that provide some sort of data value. The most common example is the ",(0,i.kt)("strong",{parentName:"p"},"Text Input")," node that provides (amonng other things) the typed text as an output value. Using connections you can ensure that an output from one node is written to an input of another node when it is updated. Take a look at the very simple interface below:"),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(86675).Z,width:"1976",height:"848"}))),(0,i.kt)("p",null,"Here you have a ",(0,i.kt)("strong",{parentName:"p"},"Text Input")," and a ",(0,i.kt)("strong",{parentName:"p"},"Text")," UI Element. Now let's say we want the ",(0,i.kt)("strong",{parentName:"p"},"Text")," element to show whatever we type into the ",(0,i.kt)("strong",{parentName:"p"},"Text Input"),". For that we can connect the two nodes."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("video",{width:"100%",autoPlay:!0,muted:!0,loop:!0,src:(0,r.Z)("/docs/guides/data/making-connections/making-connection.mp4")})),(0,i.kt)("p",null,"Now when we type something in the ",(0,i.kt)("strong",{parentName:"p"},"Text Input"),", it will output that on the ",(0,i.kt)("strong",{parentName:"p"},"Text")," output. This is connected to the apptly named ",(0,i.kt)("strong",{parentName:"p"},"Text")," input of the ",(0,i.kt)("strong",{parentName:"p"},"Text")," node. Now let's test the connection. You need to do this in the ",(0,i.kt)("strong",{parentName:"p"},"Preview Window"),"."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("video",{width:"100%",autoPlay:!0,muted:!0,loop:!0,src:(0,r.Z)("/docs/guides/data/making-connections/testing-connection.mp4")})),(0,i.kt)("p",null,"As you can see above, when you start typing in the ",(0,i.kt)("strong",{parentName:"p"},"Text Input")," you can see the ",(0,i.kt)("strong",{parentName:"p"},"Text")," is also updated. You can also see in the node graph editor that the connection lights up briefly when data is updated on the output and written to the input."),(0,i.kt)("p",null,"If you hover the connection in the node graph editor you can also view the latest value that have been sent over the connection, and if you click the little inspection popup you can pin it. Click it again to unpin it."),(0,i.kt)("p",null,"Making direct connections is fun an all, but using the many utility nodes available you can convert and augment the data on it's way from the output to the final input. Here you can see how we use a ",(0,i.kt)("strong",{parentName:"p"},"String Format")," node to make a nice greeting."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(42024).Z,width:"1894",height:"738"}))),(0,i.kt)("p",null,"Now you when you type in the ",(0,i.kt)("strong",{parentName:"p"},"Text Input")," box you can see how the data is first passed to the ",(0,i.kt)("strong",{parentName:"p"},"String Format")," node that then augments the data and passes it along on it's ",(0,i.kt)("strong",{parentName:"p"},"Formatted")," output. Learn more about how the ",(0,i.kt)("a",{parentName:"p",href:"/nodes/string-manipulation/string-format"},"String Format")," node work in the node reference documentation."),(0,i.kt)("div",{className:"ndl-image-with-background xl"},(0,i.kt)("video",{width:"100%",autoPlay:!0,muted:!0,loop:!0,src:(0,r.Z)("/docs/guides/data/making-connections/testing-connection-2.mp4")})),(0,i.kt)("p",null,"We have covered a very important concept that is used for making data driven reactive user interfaces. But we won't get far just connecting different UI Controls together, most often we need to present data from a database, or an external API. For that we will introduce the data nodes (the green ones), and we'll start with the ",(0,i.kt)("strong",{parentName:"p"},"Variable")," in the next guide."))}g.isMDXComponent=!0},86675:function(t,e,n){e.Z=n.p+"assets/images/making-connections-ui-d737b4a896ffb2170ae9813eea51951a.png"},42024:function(t,e,n){e.Z=n.p+"assets/images/string-format-41ab3a41ddcfcd741601cdc791b20c82.png"}}]);