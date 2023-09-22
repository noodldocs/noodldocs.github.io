"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[6733],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),h=r,m=p["".concat(i,".").concat(h)]||p[h]||u[h]||l;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},99783:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={hide_title:!0,hide_table_of_contents:!0,title:"Create New Record"},o=void 0,s={unversionedId:"data/cloud-data/create-new-record/README",id:"data/cloud-data/create-new-record/README",title:"Create New Record",description:"This node is used to create a new record of a given class. You specify the class of record to be created in the Property Panel. Sending a signal to Do will perform the action.",source:"@site/nodes/data/cloud-data/create-new-record/README.md",sourceDirName:"data/cloud-data/create-new-record",slug:"/data/cloud-data/create-new-record/",permalink:"/2.9/nodes/data/cloud-data/create-new-record/",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Create New Record"},sidebar:"nodeSidebar",previous:{title:"Record",permalink:"/2.9/nodes/data/cloud-data/record/"},next:{title:"Filter Record",permalink:"/2.9/nodes/data/cloud-data/filter-records/"}},i={},d=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...l}=e;return(0,r.kt)(p,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"create-new-record"},"Create New Record"),(0,r.kt)("p",null,"This node is used to create a new record of a given class. You specify the class of record to be created in the Property Panel. Sending a ",(0,r.kt)("span",{className:"ndl-signal"},"signal")," to ",(0,r.kt)("span",{className:"ndl-signal"},"Do")," will perform the action."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(17680).Z,width:"1011",height:"360"}))),(0,r.kt)("p",null,"You can also provide values for the properties of the record either via connections or by typing the values in the property panel."),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Class")),(0,r.kt)("td",{parentName:"tr",align:null},"Choose a class for the record that you want to create.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Source Object Id")),(0,r.kt)("td",{parentName:"tr",align:null},"This input can be used to provide an object whose properties will be used as the initial values of the newly created record.     ")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Property Inputs")),(0,r.kt)("td",{parentName:"tr",align:null},"When the class of the record to be created is choosen, all properties of that class will be available as inputs. When the ",(0,r.kt)("strong",{parentName:"td"},"Do")," signal is received a new record will be created with the values of the properties either specified in the property panel or via connections. <##input:prop-","*","##>The value of these inputs will become the properties of the newly created record.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Do")),(0,r.kt)("td",{parentName:"tr",align:null},"Send a signal on this input to create a new record.")))),(0,r.kt)("h3",null,"Access Control Rules"),(0,r.kt)("p",null,"When creating and updating records you can also specify access control rules. By default all records created can be read and written by everyone, they are completely public. This is convenient in the beginning when you are working on your applications but as you want to make it publicly available you need to think about access control. You do this by adding access control rules when creating or updating records."),(0,r.kt)("div",{className:"ndl-image-with-background m"},(0,r.kt)("p",{className:"is-hidden"},(0,r.kt)("img",{parentName:"p",src:"/nodes/data/cloud-data/acl-1.png",alt:null}))),(0,r.kt)("p",null,"You can have as many rules as you want. Each rule has a ",(0,r.kt)("strong",{parentName:"p"},"Target")," which can be one of ",(0,r.kt)("strong",{parentName:"p"},"User"),", ",(0,r.kt)("strong",{parentName:"p"},"Everyone")," or ",(0,r.kt)("strong",{parentName:"p"},"Role"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User")," implies that this rule will target a specific user, you can either specify the ",(0,r.kt)("strong",{parentName:"li"},"User Id")," (that is the record Id for the user record) for the user or if omitted the current logged in user will be used."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Everyone")," means, well, this rule applies to everyone. You can use to to create read only objects, that can be publicly read but not written."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Role")," means that this object can be accessed as you specify by anyone belonging to a certain role. Please look at the access control ",(0,r.kt)("a",{parentName:"li",href:"/docs/guides/cloud-data/access-control"},"guide")," for more information.")),(0,r.kt)("p",null,"All rules have the inputs ",(0,r.kt)("strong",{parentName:"p"},"Read")," and ",(0,r.kt)("strong",{parentName:"p"},"Write")," when you specify if the users targeted by the role have read / write access."),(0,r.kt)("p",null,"Each rule can, depending on the selected ",(0,r.kt)("strong",{parentName:"p"},"Target")," type have the following inputs (it's a good idea to change the label of your rule as in the image above to easier find the inputs when connecting):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"User Id")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("strong",{parentName:"td"},"User Id")," of the user that the rule should apply to. If none is provided via a connection the currently logged in user will be used. This input is only available if the ",(0,r.kt)("strong",{parentName:"td"},"User")," target type is selected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Role")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("strong",{parentName:"td"},"Role Name")," of the role that the rule should apply to. This input is only available if the ",(0,r.kt)("strong",{parentName:"td"},"Role")," target type is selected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Write")),(0,r.kt)("td",{parentName:"tr",align:null},"Set to ",(0,r.kt)("strong",{parentName:"td"},"true")," for this rule to have write access.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Read")),(0,r.kt)("td",{parentName:"tr",align:null},"Set to ",(0,r.kt)("strong",{parentName:"td"},"true")," for this rule to have read access.")))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Id")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("strong",{parentName:"td"},"Id")," of the new record that was created if the action was successful.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Error")),(0,r.kt)("td",{parentName:"tr",align:null},"The specific error message in case something went wrong when creating the record.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Success")),(0,r.kt)("td",{parentName:"tr",align:null},"A signal is sent here when the new record have been created successfully.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Failure")),(0,r.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output if something went wrong when creating the record. You can find the specific error in the ",(0,r.kt)("strong",{parentName:"td"},"Error")," output.")))))}u.isMDXComponent=!0},17680:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-new-record-fc54436cff394fcda91987c9e887673d.png"}}]);