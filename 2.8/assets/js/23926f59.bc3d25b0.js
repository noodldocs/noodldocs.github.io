"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[4134],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(a),h=r,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},46013:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=["components"],l={hide_title:!0,hide_table_of_contents:!0,title:"Config"},c=void 0,s={unversionedId:"data/cloud-data/config",id:"data/cloud-data/config",title:"Config",description:"This node is used to fetch a configuration parameter from the cloud services. Can be used to store any sort of parameters like API Keys, email templates etc. The node works much like the Variable node.",source:"@site/nodes/data/cloud-data/config.md",sourceDirName:"data/cloud-data",slug:"/data/cloud-data/config",permalink:"/2.8/nodes/data/cloud-data/config",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Config"},sidebar:"nodeSidebar",previous:{title:"Cloud Function",permalink:"/2.8/nodes/data/cloud-data/cloud-function"},next:{title:"Log In",permalink:"/2.8/nodes/data/user/log-in"}},d={},u=[{value:"Local Override",id:"local-override",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Local Override",id:"local-override-1",level:2},{value:"Outputs",id:"outputs",level:2}],p={toc:u};function h(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("h1",{id:"config"},"Config"),(0,o.kt)("p",null,"This node is used to fetch a configuration parameter from the cloud services. Can be used to store any sort of parameters like API Keys, email templates etc. The node works much like the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/variable/variable-node"},"Variable")," node."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(7399).Z,width:"1052",height:"378"}))),(0,o.kt)("p",null,"You pick a ",(0,o.kt)("strong",{parentName:"p"},"Parameter")," in the properties of the node. First you must specify the ",(0,o.kt)("strong",{parentName:"p"},"Parameter")," in the ",(0,o.kt)("strong",{parentName:"p"},"Config")," section of the cloud services dashboard. Check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/cloud-data/creating-a-backend"},"this guide")," for more details on the dashboard."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(692).Z,width:"2560",height:"384"}))),(0,o.kt)("p",{className:"is-hidden"},""),(0,o.kt)("p",null,"When creating a parameter you can specify if it requires the ",(0,o.kt)("strong",{parentName:"p"},"Master Key")," or not. Requiring the master key means that you can only access these parameters in cloud functions, which is important for config parameters that needs to be kept secure."),(0,o.kt)("p",null,"Once you have create your parameters in the cloud services dashboard you can pick which parameter this node should read with the drop down."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(29015).Z,width:"606",height:"304"}))),(0,o.kt)("h2",{id:"local-override"},"Local Override"),(0,o.kt)("p",null,"Config parameters are especially useful when you need to have values that vary depending if you are working in your ",(0,o.kt)("strong",{parentName:"p"},"testing")," or ",(0,o.kt)("strong",{parentName:"p"},"production")," environment (which cloud service you are currently using). You can also specify a local override for a config parameter so that ",(0,o.kt)("strong",{parentName:"p"},"this particular node")," will return that value when your are working locally with the project. That is, when the working in the editor or when viewing the project in an external browser using the ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost")," domain."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(77826).Z,width:"1054",height:"330"}))),(0,o.kt)("p",null,"For the node above we want a special config parameter for when running locally so we can test without having to deploy every time, so we add a ",(0,o.kt)("strong",{parentName:"p"},"Local Override")," in the parameters of the config node."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(16182).Z,width:"706",height:"458"}))),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Parameter")),(0,o.kt)("td",{parentName:"tr",align:null},"The config parameter to use for this node.")))),(0,o.kt)("h2",{id:"local-override-1"},"Local Override"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Enable")),(0,o.kt)("td",{parentName:"tr",align:null},"Checking this will provide a special value for this node when running in the editor or from ",(0,o.kt)("inlineCode",{parentName:"td"},"localhost"),"")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Value")),(0,o.kt)("td",{parentName:"tr",align:null},"The value to return from this node when running in the editor or on ",(0,o.kt)("inlineCode",{parentName:"td"},"localhost"),"")))),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Value")),(0,o.kt)("td",{parentName:"tr",align:null},"The value for this config parameter for the current active cloud service, or the local override. ")))))}h.isMDXComponent=!0},692:function(e,t,a){t.Z=a.p+"assets/images/config-dashboard-6d337daca309bd6e64e8373f9c7c9328.png"},16182:function(e,t,a){t.Z=a.p+"assets/images/config-local-props-3ba4c9503a9ee9677a3e52e6235f6f17.png"},77826:function(e,t,a){t.Z=a.p+"assets/images/config-local-330578775ca77ee66452d6e8432b0a42.png"},7399:function(e,t,a){t.Z=a.p+"assets/images/config-node-520f369e4fe4e17134151dcde02dfdab.png"},29015:function(e,t,a){t.Z=a.p+"assets/images/config-props-d01a39bddc64584eebc158a44ac7f631.png"}}]);