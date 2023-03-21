"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[5440],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return h}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=p(a),h=r,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||l;return a?n.createElement(m,o(o({ref:e},d),{},{components:a})):n.createElement(m,o({ref:e},d))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},12253:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),o=["components"],i={hide_title:!0,hide_table_of_contents:!0,title:"Set Record Properties"},s=void 0,p={unversionedId:"data/cloud-data/set-record-properties",id:"data/cloud-data/set-record-properties",title:"Set Record Properties",description:"This action node will set property values of a record.",source:"@site/nodes/data/cloud-data/set-record-properties.md",sourceDirName:"data/cloud-data",slug:"/data/cloud-data/set-record-properties",permalink:"/2.8/nodes/data/cloud-data/set-record-properties",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Set Record Properties"},sidebar:"nodeSidebar",previous:{title:"Filter Record",permalink:"/2.8/nodes/data/cloud-data/filter-records"},next:{title:"Query Records",permalink:"/2.8/nodes/data/cloud-data/query-records"}},d={},c=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],u={toc:c};function h(t){var e=t.components,i=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",{className:"is-hidden"},""),(0,l.kt)("h1",{id:"set-record-properties"},"Set Record Properties"),(0,l.kt)("p",null,"This action node will set property values of a record."),(0,l.kt)("div",{className:"ndl-image-with-background l"},(0,l.kt)("p",null,(0,l.kt)("img",{src:a(19194).Z,width:"1011",height:"360"}))),(0,l.kt)("p",null,"You need specify the class of the record in the property panel. Then you can either specify the values of the properties to set in the property panel or by providing them as an input connection."),(0,l.kt)("p",null,"Send a ",(0,l.kt)("span",{className:"ndl-signal"},"signal")," to ",(0,l.kt)("span",{className:"ndl-signal"},"Do")," to perform the action.\n"),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Class")),(0,l.kt)("td",{parentName:"tr",align:null},"The class of record for this node. Choosing the class will determine which property inputs that become available on the node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Store to")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies if this node should store both to the cloud and locally, or only locally.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Properties to store")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies if only the explicitly specified properties should be save, ",(0,l.kt)("strong",{parentName:"td"},"only specified"),", this means that only the properties that have a value either in the property panel or via an input connection will be written to the cloud record. If ",(0,l.kt)("strong",{parentName:"td"},"All")," is selected that means that all properties will always be written, if there is no explicit value provided on this node the value of the object with the corresponding ",(0,l.kt)("strong",{parentName:"td"},"Id")," will be used.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Id")),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the ",(0,l.kt)("strong",{parentName:"td"},"Id")," of the record that you want to set the properties on. This input is only valid if ",(0,l.kt)("strong",{parentName:"td"},"Id Source")," is set to ",(0,l.kt)("strong",{parentName:"td"},"Specify explicitly"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Property Inputs")),(0,l.kt)("td",{parentName:"tr",align:null},"<##input:prop-","*","##>The value to set this property to when the action is triggered. For each property in the specified class there will be an input of the correct type. You can provide the values for the inputs either through connections or by specifying them in the property panel.")))),(0,l.kt)("p",null,"An Id of a record is needed to perform the action of this node:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Id Source")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("strong",{parentName:"td"},"Id Soure")," property specifies how this Id is retrieved, the options are:",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"Specify explicitly"),": This means you need to specify the Id of the record explicitly through e.g. a connection to the ",(0,l.kt)("strong",{parentName:"td"},"Id")," input.",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"From repeater"),": This means that the Id for the record will be derived from a repeater. This option is only valid if the component this node is placed in is created by a repeater. Then this node will act on the repeater object that this component was created for.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Do")),(0,l.kt)("td",{parentName:"tr",align:null},"When a signal is received on this input the properties will be set on the record.")))),(0,l.kt)("h3",null,"Access Control Rules"),(0,l.kt)("p",null,"When creating and updating records you can also specify access control rules. By default all records created can be read and written by everyone, they are completely public. This is convenient in the beginning when you are working on your applications but as you want to make it publicly available you need to think about access control. You do this by adding access control rules when creating or updating records."),(0,l.kt)("div",{className:"ndl-image-with-background m"},(0,l.kt)("p",{className:"is-hidden"},(0,l.kt)("img",{parentName:"p",src:"/nodes/data/cloud-data/acl-1.png",alt:null}))),(0,l.kt)("p",null,"You can have as many rules as you want. Each rule has a ",(0,l.kt)("strong",{parentName:"p"},"Target")," which can be one of ",(0,l.kt)("strong",{parentName:"p"},"User"),", ",(0,l.kt)("strong",{parentName:"p"},"Everyone")," or ",(0,l.kt)("strong",{parentName:"p"},"Role"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"User")," implies that this rule will target a specific user, you can either specify the ",(0,l.kt)("strong",{parentName:"li"},"User Id")," (that is the record Id for the user record) for the user or if omitted the current logged in user will be used."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Everyone")," means, well, this rule applies to everyone. You can use to to create read only objects, that can be publicly read but not written."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Role")," means that this object can be accessed as you specify by anyone belonging to a certain role. Please look at the access control ",(0,l.kt)("a",{parentName:"li",href:"/docs/guides/cloud-data/access-control"},"guide")," for more information.")),(0,l.kt)("p",null,"All rules have the inputs ",(0,l.kt)("strong",{parentName:"p"},"Read")," and ",(0,l.kt)("strong",{parentName:"p"},"Write")," when you specify if the users targeted by the role have read / write access."),(0,l.kt)("p",null,"Each rule can, depending on the selected ",(0,l.kt)("strong",{parentName:"p"},"Target")," type have the following inputs (it's a good idea to change the label of your rule as in the image above to easier find the inputs when connecting):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"User Id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("strong",{parentName:"td"},"User Id")," of the user that the rule should apply to. If none is provided via a connection the currently logged in user will be used. This input is only available if the ",(0,l.kt)("strong",{parentName:"td"},"User")," target type is selected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Role")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("strong",{parentName:"td"},"Role Name")," of the role that the rule should apply to. This input is only available if the ",(0,l.kt)("strong",{parentName:"td"},"Role")," target type is selected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Write")),(0,l.kt)("td",{parentName:"tr",align:null},"Set to ",(0,l.kt)("strong",{parentName:"td"},"true")," for this rule to have write access.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Read")),(0,l.kt)("td",{parentName:"tr",align:null},"Set to ",(0,l.kt)("strong",{parentName:"td"},"true")," for this rule to have read access.")))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("strong",{parentName:"td"},"Id")," of the record where the properties will be updated by this node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-data"},"Error")),(0,l.kt)("td",{parentName:"tr",align:null},"The specific error message in case something went wrong when updating the record.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Signal"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Success")),(0,l.kt)("td",{parentName:"tr",align:null},"A signal is sent here when the record have been updated successfully.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"ndl-signal"},"Failure")),(0,l.kt)("td",{parentName:"tr",align:null},"A signal is sent on this output if something went wrong when updating the record. You can find the specific error in the ",(0,l.kt)("strong",{parentName:"td"},"Error")," output.")))))}h.isMDXComponent=!0},19194:function(t,e,a){e.Z=a.p+"assets/images/set-record-properties-node-7aea3f0d750c42697c52123f405c1ea4.png"}}]);