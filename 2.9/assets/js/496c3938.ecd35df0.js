"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[1543],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return b}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=c(n),b=r,m=d["".concat(p,".").concat(b)]||d[b]||u[b]||o;return n?a.createElement(m,l(l({ref:e},s),{},{components:n})):a.createElement(m,l({ref:e},s))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64639:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),l=["components"],i={hide_title:!0,hide_table_of_contents:!0,title:"Create New Object"},p=void 0,c={unversionedId:"data/object/create-new-object",id:"data/object/create-new-object",title:"Create New Object",description:"The node can be used to create a fresh new Object.",source:"@site/nodes/data/object/create-new-object.md",sourceDirName:"data/object",slug:"/data/object/create-new-object",permalink:"/2.9/nodes/data/object/create-new-object",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Create New Object"},sidebar:"nodeSidebar",previous:{title:"Set Object Properties",permalink:"/2.9/nodes/data/object/set-object-properties"},next:{title:"Set Variable",permalink:"/2.9/nodes/data/variable/set-variable"}},s={},u=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],d={toc:u};function b(t){var e=t.components,i=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h1",{id:"create-new-object"},"Create New Object"),(0,o.kt)("p",null,"The node can be used to create a fresh new ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/object/object-node"},"Object"),"."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(23694).Z,width:"1462",height:"334"}))),(0,o.kt)("p",null,"You can provide any number of properties with values for your new Object. When the ",(0,o.kt)("strong",{parentName:"p"},"Done")," signal is sent the Object is created and you can perform other actions using the Object."),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Properties To Set")),(0,o.kt)("td",{parentName:"tr",align:null},"You can specify which properties to set by adding them to this list. Object don't have a schema with predefined properties like Records so you can choose any property name you want.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Property Types")),(0,o.kt)("td",{parentName:"tr",align:null},"Each property that you want to set will give you the option of setting the type of the value that you want to set to that property.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Property Values")),(0,o.kt)("td",{parentName:"tr",align:null},"<##input:prop-","*","##>The value to set on the Object property when the action is performed. (Signal is receieved on the ",(0,o.kt)("strong",{parentName:"td"},"Do")," input) Each property that you want to set (that was added to the ",(0,o.kt)("strong",{parentName:"td"},"Properties to set")," section above) will get it's own input both in the property panel and as a connection input.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Do")),(0,o.kt)("td",{parentName:"tr",align:null},"Send a signal in this input to create the new Object with the provided properties.")))),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Id")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("strong",{parentName:"td"},"Id")," of the newly created object, this output is valid only when the ",(0,o.kt)("strong",{parentName:"td"},"Done")," signal has been sent.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signal"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Done")),(0,o.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output when the Object have been created.")))))}b.isMDXComponent=!0},23694:function(t,e,n){e.Z=n.p+"assets/images/create-new-object-0383a2875ec4b92e57059882fbab5436.png"}}]);