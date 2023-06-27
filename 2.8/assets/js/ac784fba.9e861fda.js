"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[1699],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},83035:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),s=["components"],i={title:"Access Control",hide_title:!0},l="Access Control",c={unversionedId:"guides/cloud-data/access-control",id:"guides/cloud-data/access-control",title:"Access Control",description:"What you will learn in this guide",source:"@site/docs/guides/cloud-data/access-control.md",sourceDirName:"guides/cloud-data",slug:"/guides/cloud-data/access-control",permalink:"/2.8/docs/guides/cloud-data/access-control",tags:[],version:"current",frontMatter:{title:"Access Control",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Records Relationships",permalink:"/2.8/docs/guides/cloud-data/record-relations"},next:{title:"Importing and exporting data with CSV",permalink:"/2.8/docs/guides/cloud-data/import-export-csv"}},d={},u=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Class Level Permissions",id:"class-level-permissions",level:2},{value:"Access Control Rules",id:"access-control-rules",level:2},{value:"Roles",id:"roles",level:2}],p={toc:u};function h(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"access-control"},"Access Control"),(0,o.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,o.kt)("p",null,"By now you should have a good understanding of how to create, update and query records in the database. If you feel the need to freshen up your skills, check out there guides."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/cloud-data/creating-a-backend"},"Creating a Backend")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/cloud-data/creating-a-class"},"Creating a Class")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/cloud-data/creating-new-database-records"},"Creating Records")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/cloud-data/record-relations"},"Record Relations"))),(0,o.kt)("p",null,"By default all records you create are completely public, so they can be read and written by any user, logged in or anonymous. This is ok while you are developing your application but as soon as it is getting ready to be released outside of your team you will need to think about access control. That is who should be able to read and write which records. Fortunately there is a pretty solid way of achieving this in Noodl."),(0,o.kt)("p",null,"In this guide you will learn how to limit access control to records you create to certain users."),(0,o.kt)("h2",{id:"class-level-permissions"},"Class Level Permissions"),(0,o.kt)("p",null,"There are two levels you can specify access control to your cloud data, either ",(0,o.kt)("strong",{parentName:"p"},"Class Level Permissions")," that are the same for every record of a certain class, and the ",(0,o.kt)("strong",{parentName:"p"},"Access Control Rules")," which apply to a specific record only. Let's start with the former. You can access ",(0,o.kt)("strong",{parentName:"p"},"Class Level Permissions")," for a specific class via the cloud services dashboard."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(66577).Z,width:"704",height:"254"}))),(0,o.kt)("p",null,"This will bring up the following popup."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(12629).Z,width:"1328",height:"822"}))),(0,o.kt)("p",null,"Here you can control the ",(0,o.kt)("strong",{parentName:"p"},"Read"),", ",(0,o.kt)("strong",{parentName:"p"},"Write")," and ",(0,o.kt)("strong",{parentName:"p"},"Add Field")," (the possibility to modify the properties for a class) permissions for a specific class. You can enable and disable them for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Public")," These are user of your application that is not signed in. So this means anyone, public, can perform these actions on records in this class. By default all operations, reading, writing and modyfing the fields are completely public.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Authenticated")," This refers to users that have been signed up and logged in to your application. Again, this applies to all records of this class."))),(0,o.kt)("p",null,"In the example below permissions are set so that everyone can read records in this class (this also include querying) but only logged in users can write (create new and modify) and no one (except when using the dashboard of course) can modify the properties of this class."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(51429).Z,width:"1310",height:"206"}))),(0,o.kt)("p",null,"You can specify a little bit more detailed access control using ",(0,o.kt)("strong",{parentName:"p"},"Class Level Permissons")," with roles and pointers. First just as you specified access for public vs authenticated users you can specify access for users belonging to a certain role (more on roles below). For that you use the text input at the bottom of the list:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(637).Z,width:"660",height:"116"}))),(0,o.kt)("p",null,"You simply type ",(0,o.kt)("inlineCode",{parentName:"p"},"role:the-name-of-your-role")," and then provide the permissions for that role. With this approach you could for instance have a role named ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," and you could have special permissions for any users having that role. In the example below records of this class have public read access, but only users belonging to the role ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," can modify records."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(95074).Z,width:"1314",height:"306"}))),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Simple / Advanced")," switch at the top right to enable even more fine grained control. This will be very useful for some use cases. Now permissions are split up into:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Get")," If you have an ",(0,o.kt)("strong",{parentName:"li"},"Id")," of a record, this permission allows the user to get the properties of the record."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Find")," Records of this class will show up in a ",(0,o.kt)("a",{parentName:"li",href:"/nodes/data/cloud-data/query-records"},"Query Records"),", this permission makes all records of this class readable."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Count")," You can perform a count on this class, but directly read all records."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Create")," Permission to create new records."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Update")," Permission to update existing records."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Delete")," Permission to delete existing records."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Add Field")," Permission to modify the properties of this class, remove/add entire properties.")),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(46195).Z,width:"2066",height:"476"}))),(0,o.kt)("p",null,"Another way to specify more detailed access control is using pointers. So let's say you have a record class ",(0,o.kt)("inlineCode",{parentName:"p"},"Post")," that contain blog posts. Now you want everyone to be able to read the records, but only the creator of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Post")," record should be able to modify it. If you add a pointer to a ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," record on your ",(0,o.kt)("inlineCode",{parentName:"p"},"Post")," class (it must be a pointer to a ",(0,o.kt)("inlineCode",{parentName:"p"},"User"),") you can specify permissions for the user that the pointer points to. Let's say you have a pointer on your class called ",(0,o.kt)("inlineCode",{parentName:"p"},"Owner")," that you set to the current user when creating a post, you could then have an access control that looks like this."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(41873).Z,width:"2022",height:"300"}))),(0,o.kt)("p",null,"With ",(0,o.kt)("strong",{parentName:"p"},"Class Level Permissions")," you can specify access control down to a certain level, but all permissons are still on a class level which means they apply equally to all records of the class. Using ",(0,o.kt)("strong",{parentName:"p"},"Access Control Rules")," you can provide even more detailed permissions, read more about it below."),(0,o.kt)("h2",{id:"access-control-rules"},"Access Control Rules"),(0,o.kt)("p",null,"You can set the access conrol of a record when it is created with the ",(0,o.kt)("strong",{parentName:"p"},"Create New Record")," node or, you can update it later usign the ",(0,o.kt)("strong",{parentName:"p"},"Set Record Properties")," node. This is done using the access control rules part in the property panel. Here is an example below."),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(86994).Z,width:"588",height:"760"}))),(0,o.kt)("p",null,"But when you place a new ",(0,o.kt)("strong",{parentName:"p"},"Create New Record")," node and view the properties the rules will be empty. You can create a new rule by clicking the ",(0,o.kt)("strong",{parentName:"p"},"(+)")," icon."),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(63396).Z,width:"582",height:"158"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(15004).Z,width:"580",height:"388"}))),(0,o.kt)("p",null,"You can have how every many access control rules you want and each rule has a specific ",(0,o.kt)("strong",{parentName:"p"},"Target")," that you need to pick:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User")," (default) this indicates that this rule will target a specific user. You can provide the user by connection to the ",(0,o.kt)("strong",{parentName:"li"},"User Id")," input for the rule (this is only available if you have choosen the ",(0,o.kt)("strong",{parentName:"li"},"User")," target). Or if you don't explicitly provide a user id the current logged in user will be used."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Everyone")," this implies that the rule will target all users, logged in or anonymous. This can be used to create public but read only records."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Role")," this target should be used if you want this record to be accessible by a group of users. We will take a closer look at roles below.")),(0,o.kt)("p",null,"First let's take a look at a common rule where we make sure the user creating the record has access rights to reading and writing the record."),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6985).Z,width:"572",height:"394"}))),(0,o.kt)("p",null,"This is simply the default settings for the rule. It is recommended that you edit the label of the rule and give it a short descriptive name so that you know later what it is supposed to achieve. Ok so if we use this rule to create records only the current user will be able to access them. This requires that a user has been ",(0,o.kt)("a",{parentName:"p",href:"/nodes/data/user/log-in/"},"logged in"),"."),(0,o.kt)("p",null,"Now let's say that we also want everyone to be able to read the records but not change them. Then we would add a rule with the ",(0,o.kt)("strong",{parentName:"p"},"Everyone")," target."),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(13701).Z,width:"584",height:"672"}))),(0,o.kt)("p",null,"There are many ways you can use this pattern to control who can access your record. Let's say you are creating a ",(0,o.kt)("strong",{parentName:"p"},"Message")," record and you want the current users (the sender) to be able to read and write the message, and the receiver to be able to read it. You would use a very similar set of rules but with two ",(0,o.kt)("strong",{parentName:"p"},"User")," targets."),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(95239).Z,width:"582",height:"668"}))),(0,o.kt)("p",null,"But you will also need to provide the ",(0,o.kt)("strong",{parentName:"p"},"User Id")," of the receiver (the sender will user the current logged in user). This is done via a connection to the ",(0,o.kt)("strong",{parentName:"p"},"User Id")," input that is created when you add a new ",(0,o.kt)("strong",{parentName:"p"},"User")," target rule."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6094).Z,width:"950",height:"396"}))),(0,o.kt)("h2",{id:"roles"},"Roles"),(0,o.kt)("p",null,"This is great, but sometimes you want to have a record accessible by many users and if these users change over time it's a hazzle to update all records accordingly. This is where roles come in. A role is in it's essence simply a list of users (this is esstablished via a relation property called ",(0,o.kt)("strong",{parentName:"p"},"users")," on the role). You can add and remove users from the role using the ",(0,o.kt)("strong",{parentName:"p"},"Add Record Relation")," and ",(0,o.kt)("strong",{parentName:"p"},"Remove Record Relation")," nodes. You can add a role via the cloud services dashboard."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(99205).Z,width:"1966",height:"288"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(56949).Z,width:"1964",height:"224"}))),(0,o.kt)("p",null,"You need to provide a ",(0,o.kt)("strong",{parentName:"p"},"Name")," for your role (this needs to be unique among all roles), you also need to specify the ",(0,o.kt)("strong",{parentName:"p"},"ACL")," (the access control) and you should generally limit it to ",(0,o.kt)("strong",{parentName:"p"},"Master Key Only")," for roles that you create in the dashboard. Once the role is created you can add users to it via the ",(0,o.kt)("strong",{parentName:"p"},"User")," relation directly in the dashboard."),(0,o.kt)("p",null,"Once you have a role in place with users assiged to it you can simply create a ",(0,o.kt)("strong",{parentName:"p"},"Role")," access rule:"),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6686).Z,width:"568",height:"434"}))),(0,o.kt)("p",null,"You choose the ",(0,o.kt)("strong",{parentName:"p"},"Role")," target, give it a descriptive label and choose the access rights. Then you need to specify the ",(0,o.kt)("strong",{parentName:"p"},"Role Name"),", that is the unique name you gave the role when creating it. This is case sensitive."),(0,o.kt)("p",null,"Most cases you want to create and manage your roles dynamically, for instance if you want to create a team of users that should have access to certain records. Then you would create a role for that team and add relations to all team members."),(0,o.kt)("p",null,"This is achieved by creating a new role, which is done as any other record with the ",(0,o.kt)("strong",{parentName:"p"},"Create New Record")," node, picking the ",(0,o.kt)("strong",{parentName:"p"},"Role")," class. You need to limit the access control of the ",(0,o.kt)("strong",{parentName:"p"},"Role"),' otherwise it will not succeed to create. Here we let the creater, i.e. the current user have full access and also we grant access to "everyone in the team". This is done via the role name, that is the same name as we give the role when creating it (we provide that via a connection as shown below).'),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(37341).Z,width:"628",height:"756"}))),(0,o.kt)("p",null,"You need to provide a unique ",(0,o.kt)("strong",{parentName:"p"},"name")," for your new role, in the example below this is simply done with the ",(0,o.kt)("strong",{parentName:"p"},"Unique Id")," node. This is provided both to the ",(0,o.kt)("strong",{parentName:"p"},"name")," input for the role and also to the ",(0,o.kt)("strong",{parentName:"p"},"Everyoone in Team")," access rule as described above."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(91950).Z,width:"1450",height:"860"}))),(0,o.kt)("p",null,"Once the new ",(0,o.kt)("strong",{parentName:"p"},"Role")," is created we add the current logged in user to the role by adding a relation usign the ",(0,o.kt)("strong",{parentName:"p"},"Add Record Relation")," node. The current user already has read and write access to the role via ",(0,o.kt)("strong",{parentName:"p"},"The creator")," rule above, but we still add the user to the role as it should be listed as a team member. This is how we set up the ",(0,o.kt)("strong",{parentName:"p"},"Add Record Relation")," node."),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(60990).Z,width:"620",height:"354"}))),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Id")," is coming from the newly created role (that is the record where we want to add a relation), the class needs to be set to ",(0,o.kt)("strong",{parentName:"p"},"Role")," and the relation we want to add to is ",(0,o.kt)("strong",{parentName:"p"},"users"),"."),(0,o.kt)("p",null,"Finally the ",(0,o.kt)("strong",{parentName:"p"},"Target Record Id")," is the user we want to add to the role and as you an see in the node graph above we get the from the ",(0,o.kt)("strong",{parentName:"p"},"User")," node that contains information on the currently logged in user."))}h.isMDXComponent=!0},86994:function(e,t,a){t.Z=a.p+"assets/images/acl-1-3af6827df7b94fbd69b66345ae8336c7.png"},37341:function(e,t,a){t.Z=a.p+"assets/images/acl-create-role-1-f7653439c6d0fc22ec72a25704ea40ef.png"},91950:function(e,t,a){t.Z=a.p+"assets/images/acl-create-role-2-ef532d4ed3c59006e0e8b23cb2d2144b.png"},60990:function(e,t,a){t.Z=a.p+"assets/images/acl-create-role-3-66719c13498e6b1f256e26a35d84c37c.png"},6985:function(e,t,a){t.Z=a.p+"assets/images/acl-creator-dc60361611319fa85f463c7ec73f6569.png"},63396:function(e,t,a){t.Z=a.p+"assets/images/acl-empty-d46a740e0713c8f434e3b4f3415215a8.png"},15004:function(e,t,a){t.Z=a.p+"assets/images/acl-first-e81fa1e827ff1e712513aad7d315f32b.png"},95239:function(e,t,a){t.Z=a.p+"assets/images/acl-msg-1-6f25e2e4bbe71dca4bc805a36214bd45.png"},6094:function(e,t,a){t.Z=a.p+"assets/images/acl-msg-2-25b837a8392a47bc685756908ddf4ed4.png"},13701:function(e,t,a){t.Z=a.p+"assets/images/acl-public-read-c1825be22ed1dcd95eae74c9ab2a8d98.png"},99205:function(e,t,a){t.Z=a.p+"assets/images/acl-role-1-f383c2dced70c48e6de08bc4b2a2ae62.png"},56949:function(e,t,a){t.Z=a.p+"assets/images/acl-role-2-260b816868348f7d3e114cce54af4f67.png"},6686:function(e,t,a){t.Z=a.p+"assets/images/acl-role-3-d8e8d3d9748e79235dab3c1ceec5078c.png"},66577:function(e,t,a){t.Z=a.p+"assets/images/clp-1-550246adc3b1edca7e5605d01e12b70f.png"},12629:function(e,t,a){t.Z=a.p+"assets/images/clp-2-b77ad60a054e2ad6854969635f3d2b21.png"},51429:function(e,t,a){t.Z=a.p+"assets/images/clp-3-989bf7b21f2039fb3e76d801780051bd.png"},637:function(e,t,a){t.Z=a.p+"assets/images/clp-4-e2ec1aefe3d7f73c7b3e43b735fc28fc.png"},95074:function(e,t,a){t.Z=a.p+"assets/images/clp-5-547b696af80cafc581bc3e8ad0112361.png"},46195:function(e,t,a){t.Z=a.p+"assets/images/clp-6-06611262e425f6b17c8c6652011b28b2.png"},41873:function(e,t,a){t.Z=a.p+"assets/images/clp-7-2c7132f8f30d5325e7ea8a5d327b9128.png"}}]);