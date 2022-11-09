"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[3131],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12236:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),l=["components"],i={hide_title:!0,hide_table_of_contents:!0},c=void 0,s={unversionedId:"data/cloud-data/acl",id:"data/cloud-data/acl",title:"acl",description:"Access Control Rules",source:"@site/nodes/data/cloud-data/acl.md",sourceDirName:"data/cloud-data",slug:"/data/cloud-data/acl",permalink:"/2.8/nodes/data/cloud-data/acl",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0}},u={},p=[{value:"Access Control Rules",id:"access-control-rules",level:3}],d={toc:p};function m(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"access-control-rules"},"Access Control Rules"),(0,o.kt)("p",null,"When creating and updating records you can also specify access control rules. By default all records created can be read and written by everyone, they are completely public. This is convenient in the beginning when you are working on your applications but as you want to make it publicly available you need to think about access control. You do this by adding access control rules when creating or updating records."),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(12700).Z,width:"588",height:"760"}))),(0,o.kt)("p",null,"You can have as many rules as you want. Each rule has a ",(0,o.kt)("strong",{parentName:"p"},"Target")," which can be one of ",(0,o.kt)("strong",{parentName:"p"},"User"),", ",(0,o.kt)("strong",{parentName:"p"},"Everyone")," or ",(0,o.kt)("strong",{parentName:"p"},"Role"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User")," implies that this rule will target a specific user, you can either specify the ",(0,o.kt)("strong",{parentName:"li"},"User Id")," (that is the record Id for the user record) for the user or if omitted the current logged in user will be used."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Everyone")," means, well, this rule applies to everyone. You can use to to create read only objects, that can be publicly read but not written."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Role")," means that this object can be accessed as you specify by anyone belonging to a certain role. Please look at the access control ",(0,o.kt)("a",{parentName:"li",href:"/docs/guides/cloud-data/access-control"},"guide")," for more information.")),(0,o.kt)("p",null,"All rules have the inputs ",(0,o.kt)("strong",{parentName:"p"},"Read")," and ",(0,o.kt)("strong",{parentName:"p"},"Write")," when you specify if the users targeted by the role have read / write access."),(0,o.kt)("p",null,"Each rule can, depending on the selected ",(0,o.kt)("strong",{parentName:"p"},"Target")," type have the following inputs (it's a good idea to change the label of your rule as in the image above to easier find the inputs when connecting):"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"User Id")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("strong",{parentName:"td"},"User Id")," of the user that the rule should apply to. If none is provided via a connection the currently logged in user will be used. This input is only available if the ",(0,o.kt)("strong",{parentName:"td"},"User")," target type is selected.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Role")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("strong",{parentName:"td"},"Role Name")," of the role that the rule should apply to. This input is only available if the ",(0,o.kt)("strong",{parentName:"td"},"Role")," target type is selected.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Write")),(0,o.kt)("td",{parentName:"tr",align:null},"Set to ",(0,o.kt)("strong",{parentName:"td"},"true")," for this rule to have write access.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"ndl-data"},"Read")),(0,o.kt)("td",{parentName:"tr",align:null},"Set to ",(0,o.kt)("strong",{parentName:"td"},"true")," for this rule to have read access.")))))}m.isMDXComponent=!0},12700:function(e,t,n){t.Z=n.p+"assets/images/acl-1-3af6827df7b94fbd69b66345ae8336c7.png"}}]);