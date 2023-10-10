"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[2167],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),h=r,m=p["".concat(d,".").concat(h)]||p[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},54295:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={hide_title:!0,hide_table_of_contents:!0,title:"Config node"},i=void 0,l={unversionedId:"data/cloud-data/config/README",id:"data/cloud-data/config/README",title:"Config node",description:"This node is used to fetch a configuration parameter from the cloud services. Can be used to store any sort of parameters like API Keys, email templates etc. The node works much like the Variable node.",source:"@site/nodes/data/cloud-data/config/README.md",sourceDirName:"data/cloud-data/config",slug:"/data/cloud-data/config/",permalink:"/2.9/nodes/data/cloud-data/config/",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Config node"},sidebar:"nodeSidebar",previous:{title:"Cloud Function node",permalink:"/2.9/nodes/data/cloud-data/cloud-function/"},next:{title:"Log In node",permalink:"/2.9/nodes/data/user/log-in/"}},d={},s=[{value:"Local Override",id:"local-override",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Local Override",id:"local-override-1",level:2},{value:"Outputs",id:"outputs",level:2}],c={toc:s},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"config"},"Config"),(0,r.kt)("p",null,"This node is used to fetch a configuration parameter from the cloud services. Can be used to store any sort of parameters like API Keys, email templates etc. The node works much like the ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/variable/variable-node"},"Variable")," node."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(9419).Z,width:"1052",height:"378"}))),(0,r.kt)("p",null,"You pick a ",(0,r.kt)("strong",{parentName:"p"},"Parameter")," in the properties of the node. First you must specify the ",(0,r.kt)("strong",{parentName:"p"},"Parameter")," in the ",(0,r.kt)("strong",{parentName:"p"},"Config")," section of the cloud services dashboard. Check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/cloud-data/creating-a-backend"},"this guide")," for more details on the dashboard."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(43356).Z,width:"2560",height:"384"}))),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("p",null,"When creating a parameter you can specify if it requires the ",(0,r.kt)("strong",{parentName:"p"},"Master Key")," or not. Requiring the master key means that you can only access these parameters in cloud functions, which is important for config parameters that needs to be kept secure."),(0,r.kt)("p",null,"Once you have create your parameters in the cloud services dashboard you can pick which parameter this node should read with the drop down."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(40199).Z,width:"606",height:"304"}))),(0,r.kt)("h2",{id:"local-override"},"Local Override"),(0,r.kt)("p",null,"Config parameters are especially useful when you need to have values that vary depending if you are working in your ",(0,r.kt)("strong",{parentName:"p"},"testing")," or ",(0,r.kt)("strong",{parentName:"p"},"production")," environment (which cloud service you are currently using). You can also specify a local override for a config parameter so that ",(0,r.kt)("strong",{parentName:"p"},"this particular node")," will return that value when your are working locally with the project. That is, when the working in the editor or when viewing the project in an external browser using the ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," domain."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(29341).Z,width:"1054",height:"330"}))),(0,r.kt)("p",null,"For the node above we want a special config parameter for when running locally so we can test without having to deploy every time, so we add a ",(0,r.kt)("strong",{parentName:"p"},"Local Override")," in the parameters of the config node."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(74435).Z,width:"706",height:"458"}))),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Parameter")),(0,r.kt)("td",{parentName:"tr",align:null},"The config parameter to use for this node.")))),(0,r.kt)("h2",{id:"local-override-1"},"Local Override"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Enable")),(0,r.kt)("td",{parentName:"tr",align:null},"Checking this will provide a special value for this node when running in the editor or from ",(0,r.kt)("inlineCode",{parentName:"td"},"localhost"),"")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Value")),(0,r.kt)("td",{parentName:"tr",align:null},"The value to return from this node when running in the editor or on ",(0,r.kt)("inlineCode",{parentName:"td"},"localhost"),"")))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Value")),(0,r.kt)("td",{parentName:"tr",align:null},"The value for this config parameter for the current active cloud service, or the local override. ")))))}u.isMDXComponent=!0},43356:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/config-dashboard-6d337daca309bd6e64e8373f9c7c9328.png"},74435:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/config-local-props-3ba4c9503a9ee9677a3e52e6235f6f17.png"},29341:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/config-local-330578775ca77ee66452d6e8432b0a42.png"},9419:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/config-node-520f369e4fe4e17134151dcde02dfdab.png"},40199:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/config-props-d01a39bddc64584eebc158a44ac7f631.png"}}]);