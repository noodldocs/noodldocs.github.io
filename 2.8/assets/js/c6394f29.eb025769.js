"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[5492],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87739:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),l=["components"],i={title:"Current User",hide_title:!0},u="Current User",s={unversionedId:"prefabs/xano/components/xano-current-user/README",id:"prefabs/xano/components/xano-current-user/README",title:"Current User",description:"This component is used to fetch information from the current logged in users /auth/me path in Xano.",source:"@site/library/prefabs/xano/components/xano-current-user/README.md",sourceDirName:"prefabs/xano/components/xano-current-user",slug:"/prefabs/xano/components/xano-current-user/",permalink:"/2.8/library/prefabs/xano/components/xano-current-user/",tags:[],version:"current",frontMatter:{title:"Current User",hide_title:!0},sidebar:"XanoSidebar",previous:{title:"Log Out",permalink:"/2.8/library/prefabs/xano/components/xano-log-out/"},next:{title:"Update Current User",permalink:"/2.8/library/prefabs/xano/components/xano-update-current-user/"}},p={},c=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],d={toc:c};function m(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"current-user"},"Current User"),(0,o.kt)("p",null,"This component is used to fetch information from the current logged in users ",(0,o.kt)("inlineCode",{parentName:"p"},"/auth/me")," path in Xano."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(15116).Z,width:"1058",height:"426"}))),(0,o.kt)("p",null,"On a request it checks if the user is still logged in by looking for a valid ",(0,o.kt)("strong",{parentName:"p"},"authToken"),". The ",(0,o.kt)("strong",{parentName:"p"},"authToken")," is automatically generated when the user is logged in."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please note that ",(0,o.kt)("a",{parentName:"p",href:"/library/prefabs/xano/components/setup-xanoclient/"},"Xano Client")," needs to be set up in your app before you can properly use this component.")),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signals"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Fetch")),(0,o.kt)("td",{parentName:"tr",align:null},"Send a Signal to this input to retrieve the data.")))),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Logged In")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"true")," if the user is logged in, ",(0,o.kt)("inlineCode",{parentName:"td"},"false")," if not.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Xano ID")),(0,o.kt)("td",{parentName:"tr",align:null},"The users ID.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Email")),(0,o.kt)("td",{parentName:"tr",align:null},"The users email.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"User Data")),(0,o.kt)("td",{parentName:"tr",align:null},"All the data retrieved from the ",(0,o.kt)("inlineCode",{parentName:"td"},"/auth/me")," endpoint of the logged in user.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Signals"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Success")),(0,o.kt)("td",{parentName:"tr",align:null},"Sends a signal when the request succeeded.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-signal"},"Failure")),(0,o.kt)("td",{parentName:"tr",align:null},"Sends a signal when an error occurred, or if the ",(0,o.kt)("strong",{parentName:"td"},"authToken")," is expired, and logs an error message in the console.")))))}m.isMDXComponent=!0},15116:function(e,t,n){t.Z=n.p+"assets/images/currentuser-dd5c508cd31b803c4e173441d71b03fe.png"}}]);