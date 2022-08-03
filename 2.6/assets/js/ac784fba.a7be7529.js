"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[8967],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=c(a),p=n,g=h["".concat(l,".").concat(p)]||h[p]||u[p]||o;return a?r.createElement(g,s(s({ref:t},d),{},{components:a})):r.createElement(g,s({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},83035:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=a(83117),n=a(80102),o=(a(67294),a(3905)),s=["components"],i={title:"Access Control",hide_title:!0},l="Access Control",c={unversionedId:"guides/cloud-data/access-control",id:"guides/cloud-data/access-control",title:"Access Control",description:"What you will learn in this guide",source:"@site/docs/guides/cloud-data/access-control.md",sourceDirName:"guides/cloud-data",slug:"/guides/cloud-data/access-control",permalink:"/2.6/docs/guides/cloud-data/access-control",tags:[],version:"current",frontMatter:{title:"Access Control",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Records Relationships",permalink:"/2.6/docs/guides/cloud-data/record-relations"},next:{title:"Client Side Business Logic in Nodes",permalink:"/2.6/docs/guides/business-logic/client-side-biz-logic-nodes"}},d={},u=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Access Control Rules",id:"access-control-rules",level:2},{value:"Roles",id:"roles",level:2}],h={toc:u};function p(e){var t=e.components,i=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"access-control"},"Access Control"),(0,o.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,o.kt)("p",null,"By now you should have a good understanding of how to create, update and query records in the database. If you feel the need to freshen up your skills, check out there guides."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/cloud-data/creating-a-backend"},"Creating a Backend")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/cloud-data/creating-a-class"},"Creating a Class")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/cloud-data/creating-new-database-records"},"Creating Records")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/cloud-data/record-relations"},"Record Relations"))),(0,o.kt)("p",null,"By default all records you create are completely public, so they can be read and written by any user, logged in or anonymous. This is ok while you are developing your application but as soon as it is getting ready to be released outside of your team you will need to think about access control. That is who should be able to read and write which records. Fortunately there is a pretty solid way of achieving this in Noodl."),(0,o.kt)("p",null,"In this guide you will learn how to limit access control to records you create to certain users."),(0,o.kt)("h2",{id:"access-control-rules"},"Access Control Rules"),(0,o.kt)("p",null,"You can set the access conrol of a record when it is created with the ",(0,o.kt)("strong",{parentName:"p"},"Create New Record")," node or, you can update it later usign the ",(0,o.kt)("strong",{parentName:"p"},"Set Record Properties")," node. This is done using the access control rules part in the property panel. Here is an example below."),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(86994).Z,width:"588",height:"760"}))),(0,o.kt)("p",null,"But when you place a new ",(0,o.kt)("strong",{parentName:"p"},"Create New Record")," node and view the properties the rules will be empty. You can create a new rule by clicking the ",(0,o.kt)("strong",{parentName:"p"},"(+)")," icon."),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(63396).Z,width:"582",height:"158"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(15004).Z,width:"580",height:"388"}))),(0,o.kt)("p",null,"You can have how every many access control rules you want and each rule has a specific ",(0,o.kt)("strong",{parentName:"p"},"Target")," that you need to pick:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User")," (default) this indicates that this rule will target a specific user. You can provide the user by connection to the ",(0,o.kt)("strong",{parentName:"li"},"User Id")," input for the rule (this is only available if you have choosen the ",(0,o.kt)("strong",{parentName:"li"},"User")," target). Or if you don't explicitly provide a user id the current logged in user will be used."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Everyone")," this implies that the rule will target all users, logged in or anonymous. This can be used to create public but read only records."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Role")," this target should be used if you want this record to be accessible by a group of users. We will take a closer look at roles below.")),(0,o.kt)("p",null,"First let's take a look at a common rule where we make sure the user creating the record has access rights to reading and writing the record."),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6985).Z,width:"572",height:"394"}))),(0,o.kt)("p",null,"This is simply the default settings for the rule. It is recommended that you edit the label of the rule and give it a short descriptive name so that you know later what it is supposed to achieve. Ok so if we use this rule to create records only the current user will be able to access them. This requires that a user has been ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/user/log-in/"},"logged in"),"."),(0,o.kt)("p",null,"Now let's say that we also want everyone to be able to read the records but not change them. Then we would add a rule with the ",(0,o.kt)("strong",{parentName:"p"},"Everyone")," target."),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(13701).Z,width:"584",height:"672"}))),(0,o.kt)("p",null,"There are many ways you can use this pattern to control who can access your record. Let's say you are creating a ",(0,o.kt)("strong",{parentName:"p"},"Message")," record and you want the current users (the sender) to be able to read and write the message, and the receiver to be able to read it. You would use a very similar set of rules but with two ",(0,o.kt)("strong",{parentName:"p"},"User")," targets."),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(95239).Z,width:"582",height:"668"}))),(0,o.kt)("p",null,"But you will also need to provide the ",(0,o.kt)("strong",{parentName:"p"},"User Id")," of the receiver (the sender will user the current logged in user). This is done via a connection to the ",(0,o.kt)("strong",{parentName:"p"},"User Id")," input that is created when you add a new ",(0,o.kt)("strong",{parentName:"p"},"User")," target rule."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6094).Z,width:"950",height:"396"}))),(0,o.kt)("h2",{id:"roles"},"Roles"),(0,o.kt)("p",null,"This is great, but sometimes you want to have a record accessible by many users and if these users change over time it's a hazzle to update all records accordingly. This is where roles come in. A role is in it's essence simply a list of users (this is esstablished via a relation property called ",(0,o.kt)("strong",{parentName:"p"},"users")," on the role). You can add and remove users from the role using the ",(0,o.kt)("strong",{parentName:"p"},"Add Record Relation")," and ",(0,o.kt)("strong",{parentName:"p"},"Remove Record Relation")," nodes. You can add a role via the cloud services dashboard."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(99205).Z,width:"1966",height:"288"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(56949).Z,width:"1964",height:"224"}))),(0,o.kt)("p",null,"You need to provide a ",(0,o.kt)("strong",{parentName:"p"},"Name")," for your role (this needs to be unique among all roles), you also need to specify the ",(0,o.kt)("strong",{parentName:"p"},"ACL")," (the access control) and you should generally limit it to ",(0,o.kt)("strong",{parentName:"p"},"Master Key Only")," for roles that you create in the dashboard. Once the role is created you can add users to it via the ",(0,o.kt)("strong",{parentName:"p"},"User")," relation directly in the dashboard."),(0,o.kt)("p",null,"Once you have a role in place with users assiged to it you can simply create a ",(0,o.kt)("strong",{parentName:"p"},"Role")," access rule:"),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6686).Z,width:"568",height:"434"}))),(0,o.kt)("p",null,"You choose the ",(0,o.kt)("strong",{parentName:"p"},"Role")," target, give it a descriptive label and choose the access rights. Then you need to specify the ",(0,o.kt)("strong",{parentName:"p"},"Role Name"),", that is the unique name you gave the role when creating it. This is case sensitive."),(0,o.kt)("p",null,"Most cases you want to create and manage your roles dynamically, for instance if you want to create a team of users that should have access to certain records. Then you would create a role for that team and add relations to all team members."),(0,o.kt)("p",null,"This is achieved by creating a new role, which is done as any other record with the ",(0,o.kt)("strong",{parentName:"p"},"Create New Record")," node, picking the ",(0,o.kt)("strong",{parentName:"p"},"Role")," class. You need to limit the access control of the ",(0,o.kt)("strong",{parentName:"p"},"Role"),' otherwise it will not succeed to create. Here we let the creater, i.e. the current user have full access and also we grant access to "everyone in the team". This is done via the role name, that is the same name as we give the role when creating it (we provide that via a connection as shown below).'),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(37341).Z,width:"628",height:"756"}))),(0,o.kt)("p",null,"You need to provide a unique ",(0,o.kt)("strong",{parentName:"p"},"name")," for your new role, in the example below this is simply done with the ",(0,o.kt)("strong",{parentName:"p"},"Unique Id")," node. This is provided both to the ",(0,o.kt)("strong",{parentName:"p"},"name")," input for the role and also to the ",(0,o.kt)("strong",{parentName:"p"},"Everyoone in Team")," access rule as described above."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(91950).Z,width:"1450",height:"860"}))),(0,o.kt)("p",null,"Once the new ",(0,o.kt)("strong",{parentName:"p"},"Role")," is created we add the current logged in user to the role by adding a relation usign the ",(0,o.kt)("strong",{parentName:"p"},"Add Record Relation")," node. The current user already has read and write access to the role via ",(0,o.kt)("strong",{parentName:"p"},"The creator")," rule above, but we still add the user to the role as it should be listed as a team member. This is how we set up the ",(0,o.kt)("strong",{parentName:"p"},"Add Record Relation")," node."),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(60990).Z,width:"620",height:"354"}))),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Id")," is coming from the newly created role (that is the record where we want to add a relation), the class needs to be set to ",(0,o.kt)("strong",{parentName:"p"},"Role")," and the relation we want to add to is ",(0,o.kt)("strong",{parentName:"p"},"users"),"."),(0,o.kt)("p",null,"Finally the ",(0,o.kt)("strong",{parentName:"p"},"Target Record Id")," is the user we want to add to the role and as you an see in the node graph above we get the from the ",(0,o.kt)("strong",{parentName:"p"},"User")," node that contains information on the currently logged in user."))}p.isMDXComponent=!0},86994:function(e,t,a){t.Z=a.p+"assets/images/acl-1-3af6827df7b94fbd69b66345ae8336c7.png"},37341:function(e,t,a){t.Z=a.p+"assets/images/acl-create-role-1-f7653439c6d0fc22ec72a25704ea40ef.png"},91950:function(e,t,a){t.Z=a.p+"assets/images/acl-create-role-2-ef532d4ed3c59006e0e8b23cb2d2144b.png"},60990:function(e,t,a){t.Z=a.p+"assets/images/acl-create-role-3-66719c13498e6b1f256e26a35d84c37c.png"},6985:function(e,t,a){t.Z=a.p+"assets/images/acl-creator-dc60361611319fa85f463c7ec73f6569.png"},63396:function(e,t,a){t.Z=a.p+"assets/images/acl-empty-d46a740e0713c8f434e3b4f3415215a8.png"},15004:function(e,t,a){t.Z=a.p+"assets/images/acl-first-e81fa1e827ff1e712513aad7d315f32b.png"},95239:function(e,t,a){t.Z=a.p+"assets/images/acl-msg-1-6f25e2e4bbe71dca4bc805a36214bd45.png"},6094:function(e,t,a){t.Z=a.p+"assets/images/acl-msg-2-25b837a8392a47bc685756908ddf4ed4.png"},13701:function(e,t,a){t.Z=a.p+"assets/images/acl-public-read-c1825be22ed1dcd95eae74c9ab2a8d98.png"},99205:function(e,t,a){t.Z=a.p+"assets/images/acl-role-1-f383c2dced70c48e6de08bc4b2a2ae62.png"},56949:function(e,t,a){t.Z=a.p+"assets/images/acl-role-2-260b816868348f7d3e114cce54af4f67.png"},6686:function(e,t,a){t.Z=a.p+"assets/images/acl-role-3-d8e8d3d9748e79235dab3c1ceec5078c.png"}}]);