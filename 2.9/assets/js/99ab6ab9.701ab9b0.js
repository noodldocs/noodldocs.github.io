"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[8914],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14366:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),s=["components"],i={title:"Xano",hide_title:!0},p="Xano",l={unversionedId:"prefabs/xano/README",id:"prefabs/xano/README",title:"Xano",description:"This prefab gives you a few components that allows you to connect to Xano and manage user authentication.",source:"@site/library/prefabs/xano/README.md",sourceDirName:"prefabs/xano",slug:"/prefabs/xano/",permalink:"/2.9/library/prefabs/xano/",tags:[],version:"current",frontMatter:{title:"Xano",hide_title:!0},sidebar:"XanoSidebar",next:{title:"Setup XanoClient",permalink:"/2.9/library/prefabs/xano/components/setup-xanoclient/"}},u={},c=[{value:"Included components",id:"included-components",level:2},{value:"Base Components",id:"base-components",level:3},{value:"User Components",id:"user-components",level:3},{value:"Quickstart",id:"quickstart",level:2}],m={toc:c};function d(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"xano"},"Xano"),(0,o.kt)("p",null,"This prefab gives you a few components that allows you to connect to Xano and manage user authentication."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(250).Z,width:"680",height:"384"}))),(0,o.kt)("h2",{id:"included-components"},"Included components"),(0,o.kt)("h3",{id:"base-components"},"Base Components"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"components/setup-xanoclient"},"Xano - Setup XanoClient")),": Sets up the Xano SDK client to access your instance and workspace. Must be placed in your projects home component."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"components/xano-request"},"Xano - Request")),": Does an API Call to a Xano Endpoint and returns the result.")),(0,o.kt)("h3",{id:"user-components"},"User Components"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"components/xano-sign-up"},"Xano \u2013 Sign Up")),": Signs up a new user."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"components/xano-log-in"},"Xano \u2013 Log In")),": Logs in a user."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"components/xano-log-out"},"Xano \u2013 Log Out")),": Logs out a user."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"components/xano-current-user"},"Xano \u2013 Current User")),": Gets the user data of the currently logged in user and saves it to a global ",(0,o.kt)("inlineCode",{parentName:"li"},"currentUser")," object."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"components/xano-update-current-user"},"Xano \u2013 Update Current User")),": Updates user data for the currently logged in user, both in Xano and the ",(0,o.kt)("inlineCode",{parentName:"li"},"currentUser")," object."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"components/xano-authtoken-refresh"},"Xano \u2013 authToken \u2013 Refresh")),": Triggers a refresh of the auth token. Mostly for internal use inside of the Xano prefab, but exposed for advanced users.")),(0,o.kt)("h2",{id:"quickstart"},"Quickstart"),(0,o.kt)("p",null,"First, drop a ",(0,o.kt)("strong",{parentName:"p"},"Xano \u2013 Setup XanoClient")," in your project home component. Then set the ",(0,o.kt)("inlineCode",{parentName:"p"},"API Group Base URL")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Datasource"),". Finally, open the Project Settings sidebar, find the ",(0,o.kt)("strong",{parentName:"p"},"Head Code")," input and paste the following at the top:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script\n  type="text/javascript"\n  src="https://cdn.jsdelivr.net/npm/@xano/js-sdk@latest/dist/xano.min.js"\n><\/script>\n')),(0,o.kt)("p",null,"To automatically refresh the users ",(0,o.kt)("strong",{parentName:"p"},"authToken")," and keep them logged in for longer periods of time, add this to your project home component:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(66687).Z,width:"612",height:"301"}))))}d.isMDXComponent=!0},66687:function(e,t,n){t.Z=n.p+"assets/images/authrefresh-9fe222cecdffd7000d864a717e6bf9e2.png"},250:function(e,t,n){t.Z=n.p+"assets/images/xano-thumb-573cac97cbba082bc4a1955b50cf0e63.png"}}]);