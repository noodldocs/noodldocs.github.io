"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[9692],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return g}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=i,p=u["".concat(s,".").concat(g)]||u[g]||d[g]||r;return n?a.createElement(p,o(o({ref:t},h),{},{components:n})):a.createElement(p,o({ref:t},h))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54873:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return h},default:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={},s="Version control",c={unversionedId:"getting-started/editor-tour/version-control",id:"getting-started/editor-tour/version-control",title:"Version control",description:"Introduction",source:"@site/docs/getting-started/editor-tour/version-control.md",sourceDirName:"getting-started/editor-tour",slug:"/getting-started/editor-tour/version-control",permalink:"/2.6/docs/getting-started/editor-tour/version-control",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"The Complete Editor Tour",permalink:"/2.6/docs/getting-started/editor-tour/overview"},next:{title:"Figma plugin",permalink:"/2.6/docs/getting-started/editor-tour/figma-plugin"}},h=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Enabling version control",id:"enabling-version-control",children:[],level:2},{value:"The version control panel",id:"the-version-control-panel",children:[],level:2},{value:"Pushing a new version",id:"pushing-a-new-version",children:[],level:2},{value:"Pulling down changes",id:"pulling-down-changes",children:[],level:2},{value:"Conflicts",id:"conflicts",children:[],level:2},{value:"Branches",id:"branches",children:[{value:"Creating a branch",id:"creating-a-branch",children:[],level:3},{value:"Switching branches",id:"switching-branches",children:[],level:3},{value:"Merging branches",id:"merging-branches",children:[{value:"Push the merge",id:"push-the-merge",children:[],level:4},{value:"Undo the merge",id:"undo-the-merge",children:[],level:4}],level:3}],level:2},{value:"Deleting a branch",id:"deleting-a-branch",children:[],level:2}],d={toc:h};function u(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"version-control"},"Version control"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Version control have three main use cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Collaborating with team members"),(0,r.kt)("li",{parentName:"ul"},'Working with different versions of your project in parallel (what\'s known as "branches")'),(0,r.kt)("li",{parentName:"ul"},"Backup. All versions are backed up in the cloud")),(0,r.kt)("div",{class:"ndl-image-with-background s"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(69710).Z,width:"616",height:"1002"}))),(0,r.kt)("p",null,"Noodl uses ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com"},"Git")," as the underlying version control system. Users comfortable with git can use external git clients to manage their Noodl projects. The project folder is a git repository."),(0,r.kt)("h2",{id:"enabling-version-control"},"Enabling version control"),(0,r.kt)("p",null,'Projects with "Cloud storage" selected will automatically get a version control repository in the cloud. Projects with "Local storage" will have version control disabled.'),(0,r.kt)("div",{class:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3434).Z,width:"1204",height:"1424"}))),(0,r.kt)("h2",{id:"the-version-control-panel"},"The version control panel"),(0,r.kt)("p",null,"The version control panel is where you perform all actions related to version control. This includes actions such as pushing new changes to your collaborators, pulling down the latest version, see differences between versions, merge branches and more."),(0,r.kt)("div",{class:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(63226).Z,width:"642",height:"1062"}))),(0,r.kt)("h2",{id:"pushing-a-new-version"},"Pushing a new version"),(0,r.kt)("p",null,'When there are changes in your project and you want to share them with your collaborators you click the "Push" button.'),(0,r.kt)("div",{class:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(12465).Z,width:"560",height:"240"}))),(0,r.kt)("p",null,"Noodl will now show you all the components and files that have changed, and by clicking them you can see the difference compared to the previous version."),(0,r.kt)("div",{class:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(49176).Z,width:"1804",height:"708"}))),(0,r.kt)("p",null,"After the changes are pushed you can see the new version in the version list."),(0,r.kt)("div",{class:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(62419).Z,width:"560",height:"852"}))),(0,r.kt)("h2",{id:"pulling-down-changes"},"Pulling down changes"),(0,r.kt)("p",null,"Noodl automatically checks if there are any changes to pull down when the version control panel is opened."),(0,r.kt)("p",null,"You can also manually check for updates by clicking the update icon"),(0,r.kt)("div",{class:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4038).Z,width:"562",height:"68"}))),(0,r.kt)("p",null,"New version will show be displayed as dimmed items in the version list. These are versions that you haven't pulled down yet."),(0,r.kt)("div",{class:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(49891).Z,width:"564",height:"1062"}))),(0,r.kt)("p",null,'When you want to pull down changes you click on "Pull". Noodl will show you the changes you are about to pull in. Press "Pull" to download the changes.'),(0,r.kt)("div",{class:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(32126).Z,width:"1938",height:"824"}))),(0,r.kt)("p",null,"Any local changes you have, that aren't pushed, will still be there after pulling down a new version. They will be applied to the new versions, which leads into the next subject, conflicts."),(0,r.kt)("h2",{id:"conflicts"},"Conflicts"),(0,r.kt)("p",null,"Sometimes you and your collaborators might change the same parameter on the same node. In those cases Noodl doesn't know which change to apply, and will ask you to resolve the conflicts."),(0,r.kt)("div",{class:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(72843).Z,width:"1936",height:"1052"}))),(0,r.kt)("p",null,"You can resolve conflicts by choosing to keep your change, or overwrite your change with the one from your collaborator."),(0,r.kt)("div",{class:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(24222).Z,width:"1936",height:"952"}))),(0,r.kt)("h2",{id:"branches"},"Branches"),(0,r.kt)("p",null,"Branches can be used to develop different parts of your application in parallel, that can later be merged together."),(0,r.kt)("p",null,"Here are a few common use cases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One branch for the stable version of your app, and another one for the development version"),(0,r.kt)("li",{parentName:"ul"},"A new feature that's being worked on can be developed in it's own branch, and later merged into the main branch when it's ready"),(0,r.kt)("li",{parentName:"ul"},"Explore different designs variations of your app, deploying them independently, and later merge in the variation that was the most successful."),(0,r.kt)("li",{parentName:"ul"},"...and there are many more")),(0,r.kt)("h3",{id:"creating-a-branch"},"Creating a branch"),(0,r.kt)("p",null,"Create a branch by clicking the '+' icon in the version control panel's branch section."),(0,r.kt)("div",{class:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(76817).Z,width:"796",height:"318"}))),(0,r.kt)("p",null,"After a branch has been created Noodl will switch to the new branch. Any changes in your project that weren't pushed will be moved to this new branch."),(0,r.kt)("div",{class:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(65727).Z,width:"560",height:"210"}))),(0,r.kt)("p",null,"Changes you push will now belong to the new branch, and won't affect the other branches."),(0,r.kt)("div",{class:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1906).Z,width:"1938",height:"772"}))),(0,r.kt)("h3",{id:"switching-branches"},"Switching branches"),(0,r.kt)("p",null,"Switch between branches by clicking on a branch. If there are local changes they will stay in the branch in which they were done, and won't move between branches."),(0,r.kt)("div",{class:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(86537).Z,width:"640",height:"363"}))),(0,r.kt)("h3",{id:"merging-branches"},"Merging branches"),(0,r.kt)("p",null,'Changes from one branch can be merged into another branch. In this example the "my-new-feature" branch is being merged into the "main" branch.'),(0,r.kt)("div",{class:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3387).Z,width:"972",height:"794"}))),(0,r.kt)("p",null,'Clicking "Merge into main" will show a preview of the changes that are being merged in. Noodl is visualizing the changes as they will look after the merge has been done.'),(0,r.kt)("div",{class:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(94770).Z,width:"1938",height:"1012"}))),(0,r.kt)("p",null,'Click "Merge" to perform the merge.'),(0,r.kt)("p",null,"When the merge is done, it is done locally, and won't yet be shared with collaborators. You can now choose to push the changes, or reset all the changes and get back to the version before the merge, effectively undoing the merge."),(0,r.kt)("h4",{id:"push-the-merge"},"Push the merge"),(0,r.kt)("p",null,'Press "Push" to push the merge. Noodl will show you all the differences that you\'re about to push.'),(0,r.kt)("div",{class:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(52546).Z,width:"650",height:"1108"}))),(0,r.kt)("h4",{id:"undo-the-merge"},"Undo the merge"),(0,r.kt)("p",null,'You can undo the merge by clicking "View local changes" and then "Reset all changes".'),(0,r.kt)("div",{class:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(18809).Z,width:"650",height:"978"}))),(0,r.kt)("h2",{id:"deleting-a-branch"},"Deleting a branch"),(0,r.kt)("p",null,"After a branch has been merged into another branch it can be a good idea to delete it if it won't be used anymore."),(0,r.kt)("p",null,"Note that deleting branches will delete branches both locally and remotely. If other collaborators has done work on the branch you just deleted, their local copy of the branch will still be intact and they can choose to push their changes to restore the branch again."),(0,r.kt)("p",null,"The main branch can't be deleted."),(0,r.kt)("div",{class:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(94761).Z,width:"1014",height:"674"}))))}u.isMDXComponent=!0},62419:function(e,t,n){t.Z=n.p+"assets/images/after-first-push-a6b05b520a7e47fd7b9d7c1dcfbc631e.png"},76817:function(e,t,n){t.Z=n.p+"assets/images/branch-create-3521004a3157196c7722e567e830dacb.png"},65727:function(e,t,n){t.Z=n.p+"assets/images/branch-created-d843f902d8335666dce3924b1ae93542.png"},94761:function(e,t,n){t.Z=n.p+"assets/images/branch-delete-8dbac8a3d08cd30b177b1e42d65f7220.png"},1906:function(e,t,n){t.Z=n.p+"assets/images/branch-push-418304daf19969c6bd5af83d4bcc7914.png"},24222:function(e,t,n){t.Z=n.p+"assets/images/conflicts-resolve-982972b81f98b6fdcd51d15c57af0e98.png"},72843:function(e,t,n){t.Z=n.p+"assets/images/conflicts-b6f97617953c62bc8392a5dda8b53e40.png"},3434:function(e,t,n){t.Z=n.p+"assets/images/create-project-ca2ac879f19d25a7009498ae5a6f7f39.png"},32126:function(e,t,n){t.Z=n.p+"assets/images/first-pull-state-9b36b08b9e1e50e7eaadaf9b590e8b6f.png"},49891:function(e,t,n){t.Z=n.p+"assets/images/first-pull-50b3415d8bb8fdaeea8ba49ccd4758b8.png"},49176:function(e,t,n){t.Z=n.p+"assets/images/first-push-5cd0d7d73bcfc93aca81f87b2d8291ee.png"},63226:function(e,t,n){t.Z=n.p+"assets/images/initial-state-a43f2df5b6e5ca08ed070dc12b55f8c5.png"},69710:function(e,t,n){t.Z=n.p+"assets/images/intro-61e583ceb029bcd1eb9929f4c68e9c7d.png"},3387:function(e,t,n){t.Z=n.p+"assets/images/merge-1-2ccd5ffc13976914481145959912a102.png"},94770:function(e,t,n){t.Z=n.p+"assets/images/merge-2-dbbcd2c168a49f3bee4c4e99911e65fc.png"},52546:function(e,t,n){t.Z=n.p+"assets/images/merge-push-c62dcde872be360a3a4e349dbfc4f2c4.png"},18809:function(e,t,n){t.Z=n.p+"assets/images/merge-reset-9228e70a928491dbb91fe171e2fade52.png"},12465:function(e,t,n){t.Z=n.p+"assets/images/status-push-ec6d2bb3e8e0818611b4aa9269a52f31.png"},86537:function(e,t,n){t.Z=n.p+"assets/images/switch-branch-4f6cc5447f296a5b2fb19d09a47a62ae.gif"},4038:function(e,t,n){t.Z=n.p+"assets/images/update-50a5f584a91edee52fdf66df75be5552.png"}}]);