"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[3425],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||l;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},65634:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={hide_title:!0,hide_table_of_contents:!0,title:"Set Record Properties node"},o=void 0,i={unversionedId:"data/cloud-data/set-record-properties/README",id:"data/cloud-data/set-record-properties/README",title:"Set Record Properties node",description:"This action node will set property values of a record.",source:"@site/nodes/data/cloud-data/set-record-properties/README.md",sourceDirName:"data/cloud-data/set-record-properties",slug:"/data/cloud-data/set-record-properties/",permalink:"/2.9/nodes/data/cloud-data/set-record-properties/",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Set Record Properties node"},sidebar:"nodeSidebar",previous:{title:"Filter Record node",permalink:"/2.9/nodes/data/cloud-data/filter-records/"},next:{title:"Query Records node",permalink:"/2.9/nodes/data/cloud-data/query-records/"}},s={},p=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"set-record-properties"},"Set Record Properties"),(0,r.kt)("p",null,"This action node will set property values of a record."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8135).Z,width:"1011",height:"360"}))),(0,r.kt)("p",null,"You need specify the class of the record in the property panel. Then you can either specify the values of the properties to set in the property panel or by providing them as an input connection."),(0,r.kt)("p",null,"Send a ",(0,r.kt)("span",{className:"ndl-signal"},"signal")," to ",(0,r.kt)("span",{className:"ndl-signal"},"Do")," to perform the action.\n"),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Class")),(0,r.kt)("td",{parentName:"tr",align:null},"The class of record for this node. Choosing the class will determine which property inputs that become available on the node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Store to")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies if this node should store both to the cloud and locally, or only locally.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Properties to store")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies if only the explicitly specified properties should be save, ",(0,r.kt)("strong",{parentName:"td"},"only specified"),", this means that only the properties that have a value either in the property panel or via an input connection will be written to the cloud record. If ",(0,r.kt)("strong",{parentName:"td"},"All")," is selected that means that all properties will always be written, if there is no explicit value provided on this node the value of the object with the corresponding ",(0,r.kt)("strong",{parentName:"td"},"Id")," will be used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Id")),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the ",(0,r.kt)("strong",{parentName:"td"},"Id")," of the record that you want to set the properties on. This input is only valid if ",(0,r.kt)("strong",{parentName:"td"},"Id Source")," is set to ",(0,r.kt)("strong",{parentName:"td"},"Specify explicitly"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Property Inputs")),(0,r.kt)("td",{parentName:"tr",align:null},"<##input:prop-","*","##>The value to set this property to when the action is triggered. For each property in the specified class there will be an input of the correct type. You can provide the values for the inputs either through connections or by specifying them in the property panel.")))),(0,r.kt)("p",null,"An Id of a record is needed to perform the action of this node:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Id Source")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("strong",{parentName:"td"},"Id Soure")," property specifies how this Id is retrieved, the options are:",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"Specify explicitly"),": This means you need to specify the Id of the record explicitly through e.g. a connection to the ",(0,r.kt)("strong",{parentName:"td"},"Id")," input.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"From repeater"),": This means that the Id for the record will be derived from a repeater. This option is only valid if the component this node is placed in is created by a repeater. Then this node will act on the repeater object that this component was created for.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Do")),(0,r.kt)("td",{parentName:"tr",align:null},"When a signal is received on this input the properties will be set on the record.")))),(0,r.kt)("h3",null,"Access Control Rules"),(0,r.kt)("p",null,"When creating and updating records you can also specify access control rules. By default all records created can be read and written by everyone, they are completely public. This is convenient in the beginning when you are working on your applications but as you want to make it publicly available you need to think about access control. You do this by adding access control rules when creating or updating records."),(0,r.kt)("div",{className:"ndl-image-with-background m"},(0,r.kt)("p",{className:"is-hidden"},(0,r.kt)("img",{parentName:"p",src:"/nodes/data/cloud-data/acl-1.png",alt:null}))),(0,r.kt)("p",null,"You can have as many rules as you want. Each rule has a ",(0,r.kt)("strong",{parentName:"p"},"Target")," which can be one of ",(0,r.kt)("strong",{parentName:"p"},"User"),", ",(0,r.kt)("strong",{parentName:"p"},"Everyone")," or ",(0,r.kt)("strong",{parentName:"p"},"Role"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User")," implies that this rule will target a specific user, you can either specify the ",(0,r.kt)("strong",{parentName:"li"},"User Id")," (that is the record Id for the user record) for the user or if omitted the current logged in user will be used."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Everyone")," means, well, this rule applies to everyone. You can use to to create read only objects, that can be publicly read but not written."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Role")," means that this object can be accessed as you specify by anyone belonging to a certain role. Please look at the access control ",(0,r.kt)("a",{parentName:"li",href:"/docs/guides/cloud-data/access-control"},"guide")," for more information.")),(0,r.kt)("p",null,"All rules have the inputs ",(0,r.kt)("strong",{parentName:"p"},"Read")," and ",(0,r.kt)("strong",{parentName:"p"},"Write")," when you specify if the users targeted by the role have read / write access."),(0,r.kt)("p",null,"Each rule can, depending on the selected ",(0,r.kt)("strong",{parentName:"p"},"Target")," type have the following inputs (it's a good idea to change the label of your rule as in the image above to easier find the inputs when connecting):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"User Id")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("strong",{parentName:"td"},"User Id")," of the user that the rule should apply to. If none is provided via a connection the currently logged in user will be used. This input is only available if the ",(0,r.kt)("strong",{parentName:"td"},"User")," target type is selected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Role")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("strong",{parentName:"td"},"Role Name")," of the role that the rule should apply to. This input is only available if the ",(0,r.kt)("strong",{parentName:"td"},"Role")," target type is selected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Write")),(0,r.kt)("td",{parentName:"tr",align:null},"Set to ",(0,r.kt)("strong",{parentName:"td"},"true")," for this rule to have write access.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Read")),(0,r.kt)("td",{parentName:"tr",align:null},"Set to ",(0,r.kt)("strong",{parentName:"td"},"true")," for this rule to have read access.")))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Id")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("strong",{parentName:"td"},"Id")," of the record where the properties will be updated by this node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Error")),(0,r.kt)("td",{parentName:"tr",align:null},"The specific error message in case something went wrong when updating the record.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Success")),(0,r.kt)("td",{parentName:"tr",align:null},"A signal is sent here when the record have been updated successfully.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Failure")),(0,r.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output if something went wrong when updating the record. You can find the specific error in the ",(0,r.kt)("strong",{parentName:"td"},"Error")," output.")))))}u.isMDXComponent=!0},8135:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/set-record-properties-node-7aea3f0d750c42697c52123f405c1ea4.png"}}]);