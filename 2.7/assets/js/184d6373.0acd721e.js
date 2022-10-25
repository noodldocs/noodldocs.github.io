"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[8906],{3905:function(e,n,t){t.d(n,{Zo:function(){return h},kt:function(){return g}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},h=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=c(t),g=i,p=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return t?a.createElement(p,r(r({ref:n},h),{},{components:t})):a.createElement(p,r({ref:n},h))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},49362:function(e,n,t){t.r(n),t.d(n,{assets:function(){return h},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=t(83117),i=t(80102),o=(t(67294),t(3905)),r=["components"],l={},s="Version control",c={unversionedId:"guides/collaboration/version-control",id:"guides/collaboration/version-control",title:"Version control",description:"Introduction",source:"@site/docs/guides/collaboration/version-control.md",sourceDirName:"guides/collaboration",slug:"/guides/collaboration/version-control",permalink:"/2.7/docs/guides/collaboration/version-control",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"User Management",permalink:"/2.7/docs/guides/business-logic/user-management"},next:{title:"Deploy an App on the Sandbox domain",permalink:"/2.7/docs/guides/deploy/deploying-an-app-on-sandbox"}},h={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Enabling version control",id:"enabling-version-control",level:2},{value:"The version control panel",id:"the-version-control-panel",level:2},{value:"Pushing a new version",id:"pushing-a-new-version",level:2},{value:"Pulling down changes",id:"pulling-down-changes",level:2},{value:"Conflicts",id:"conflicts",level:2},{value:"Branches",id:"branches",level:2},{value:"Creating a branch",id:"creating-a-branch",level:3},{value:"Switching branches",id:"switching-branches",level:3},{value:"Merging branches",id:"merging-branches",level:3},{value:"Push the merge",id:"push-the-merge",level:4},{value:"Undo the merge",id:"undo-the-merge",level:4},{value:"Deleting a branch",id:"deleting-a-branch",level:2}],u={toc:d};function g(e){var n=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"version-control"},"Version control"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Version control has three main use cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Collaborating with team members"),(0,o.kt)("li",{parentName:"ul"},'Working with different versions of your project in parallel (what\'s known as "branches")'),(0,o.kt)("li",{parentName:"ul"},"Backup. All versions are backed up in the cloud")),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(85579).Z,width:"616",height:"1002"}))),(0,o.kt)("p",null,"Noodl uses ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com"},"Git")," as the underlying version control system. The project folder is a git repository.\nUsers comfortable with git can use external git clients to view their Noodl projects."),(0,o.kt)("h2",{id:"enabling-version-control"},"Enabling version control"),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Projects will automatically get a version control repository in the cloud,\nbut will only be available to others when the first push has been done."))),(0,o.kt)("h2",{id:"the-version-control-panel"},"The version control panel"),(0,o.kt)("p",null,"The version control panel is where you perform all actions related to version control.\nThis includes actions such as pushing new changes to your collaborators,\npulling down the latest version, seeing differences between versions, merging branches, and more."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(78592).Z,width:"642",height:"1062"}))),(0,o.kt)("h2",{id:"pushing-a-new-version"},"Pushing a new version"),(0,o.kt)("p",null,'When there are changes in your project and you want to share them with your collaborators you click the "Push" button.'),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(81085).Z,width:"560",height:"240"}))),(0,o.kt)("p",null,"Noodl will now show you all the components and files that have changed, and by clicking them you can see the difference compared to the previous version."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(94645).Z,width:"1804",height:"708"}))),(0,o.kt)("p",null,"After the changes are pushed you can see the new version in the version list."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(91351).Z,width:"560",height:"852"}))),(0,o.kt)("h2",{id:"pulling-down-changes"},"Pulling down changes"),(0,o.kt)("p",null,"Noodl automatically checks if there are any changes to pull down when the version control panel is opened."),(0,o.kt)("p",null,"You can also manually check for updates by clicking the update icon"),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(73083).Z,width:"562",height:"68"}))),(0,o.kt)("p",null,"A new version will show be displayed as dimmed items in the version list. These are versions that you haven't pulled down yet."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(40350).Z,width:"564",height:"1062"}))),(0,o.kt)("p",null,'When you want to pull down changes you click on "Pull". Noodl will show you the changes you are about to pull in. Press "Pull" to download the changes.'),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(2930).Z,width:"1938",height:"824"}))),(0,o.kt)("p",null,"Any local changes you have, that aren't pushed, will still be there after pulling down a new version. They will be applied to the new versions, which leads to the next subject, conflicts."),(0,o.kt)("h2",{id:"conflicts"},"Conflicts"),(0,o.kt)("p",null,"Sometimes you and your collaborators might change the same parameter on the same node. In those cases, Noodl doesn't know which change to apply and will ask you to resolve the conflicts."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(7612).Z,width:"1936",height:"1052"}))),(0,o.kt)("p",null,"You can resolve conflicts by choosing to keep your change or overwrite your change with the one from your collaborator."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(51402).Z,width:"1936",height:"952"}))),(0,o.kt)("h2",{id:"branches"},"Branches"),(0,o.kt)("p",null,"Branches can be used to develop different parts of your application in parallel, that can later be merged."),(0,o.kt)("p",null,"Here are a few common use cases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One branch for the stable version of your app, and another one for the development version"),(0,o.kt)("li",{parentName:"ul"},"A new feature that's being worked on can be developed in a separate branch, and later merged into the main branch when it's ready"),(0,o.kt)("li",{parentName:"ul"},"Explore different designs variations of your app, deploying them independently, and later merge in the variation that was the most successful."),(0,o.kt)("li",{parentName:"ul"},"...and there are many more")),(0,o.kt)("h3",{id:"creating-a-branch"},"Creating a branch"),(0,o.kt)("p",null,"Create a branch by clicking the '+' icon in the version control panel's branch section."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(92807).Z,width:"796",height:"318"}))),(0,o.kt)("p",null,"After a branch has been created Noodl will switch to the new branch. Any changes in your project that weren't pushed will be moved to this new branch."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(30572).Z,width:"560",height:"210"}))),(0,o.kt)("p",null,"Changes you push will now belong to the new branch, and won't affect the other branches."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(6016).Z,width:"1938",height:"772"}))),(0,o.kt)("h3",{id:"switching-branches"},"Switching branches"),(0,o.kt)("p",null,"Switch between branches by clicking on a branch. If there are local changes they will stay in the branch in which they were done, and won't move between branches."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(32757).Z,width:"640",height:"363"}))),(0,o.kt)("h3",{id:"merging-branches"},"Merging branches"),(0,o.kt)("p",null,'Changes from one branch can be merged into another branch. In this example, the "my-new-feature" branch is being merged into the "main" branch.'),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(72765).Z,width:"972",height:"794"}))),(0,o.kt)("p",null,'Clicking "Merge into main" will show a preview of the changes that are being merged in. Noodl is visualizing the changes as they will look after the merge has been done.'),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(50062).Z,width:"1938",height:"1012"}))),(0,o.kt)("p",null,'Click "Merge" to perform the merge.'),(0,o.kt)("p",null,"When the merge is done, it is done locally, and won't yet be shared with collaborators. You can now choose to push the changes, or reset all the changes and get back to the version before the merge, effectively undoing the merge."),(0,o.kt)("h4",{id:"push-the-merge"},"Push the merge"),(0,o.kt)("p",null,'Press "Push" to push the merge. Noodl will show you all the differences that you\'re about to push.'),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(96843).Z,width:"650",height:"1108"}))),(0,o.kt)("h4",{id:"undo-the-merge"},"Undo the merge"),(0,o.kt)("p",null,'You can undo the merge by clicking "View local changes" and then "Reset all changes".'),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(48348).Z,width:"650",height:"978"}))),(0,o.kt)("h2",{id:"deleting-a-branch"},"Deleting a branch"),(0,o.kt)("p",null,"After a branch has been merged into another branch it can be a good idea to delete it if it won't be used anymore."),(0,o.kt)("p",null,"Note that deleting branches will delete branches both locally and remotely. If other collaborators have done work on the branch you just deleted, their local copy of the branch will still be intact and they can choose to push their changes to restore the branch."),(0,o.kt)("p",null,"The main branch can't be deleted."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:t(78571).Z,width:"1014",height:"674"}))))}g.isMDXComponent=!0},91351:function(e,n,t){n.Z=t.p+"assets/images/after-first-push-a6b05b520a7e47fd7b9d7c1dcfbc631e.png"},92807:function(e,n,t){n.Z=t.p+"assets/images/branch-create-3521004a3157196c7722e567e830dacb.png"},30572:function(e,n,t){n.Z=t.p+"assets/images/branch-created-d843f902d8335666dce3924b1ae93542.png"},78571:function(e,n,t){n.Z=t.p+"assets/images/branch-delete-8dbac8a3d08cd30b177b1e42d65f7220.png"},6016:function(e,n,t){n.Z=t.p+"assets/images/branch-push-418304daf19969c6bd5af83d4bcc7914.png"},51402:function(e,n,t){n.Z=t.p+"assets/images/conflicts-resolve-982972b81f98b6fdcd51d15c57af0e98.png"},7612:function(e,n,t){n.Z=t.p+"assets/images/conflicts-b6f97617953c62bc8392a5dda8b53e40.png"},2930:function(e,n,t){n.Z=t.p+"assets/images/first-pull-state-9b36b08b9e1e50e7eaadaf9b590e8b6f.png"},40350:function(e,n,t){n.Z=t.p+"assets/images/first-pull-50b3415d8bb8fdaeea8ba49ccd4758b8.png"},94645:function(e,n,t){n.Z=t.p+"assets/images/first-push-5cd0d7d73bcfc93aca81f87b2d8291ee.png"},78592:function(e,n,t){n.Z=t.p+"assets/images/initial-state-a43f2df5b6e5ca08ed070dc12b55f8c5.png"},85579:function(e,n,t){n.Z=t.p+"assets/images/intro-61e583ceb029bcd1eb9929f4c68e9c7d.png"},72765:function(e,n,t){n.Z=t.p+"assets/images/merge-1-2ccd5ffc13976914481145959912a102.png"},50062:function(e,n,t){n.Z=t.p+"assets/images/merge-2-dbbcd2c168a49f3bee4c4e99911e65fc.png"},96843:function(e,n,t){n.Z=t.p+"assets/images/merge-push-c62dcde872be360a3a4e349dbfc4f2c4.png"},48348:function(e,n,t){n.Z=t.p+"assets/images/merge-reset-9228e70a928491dbb91fe171e2fade52.png"},81085:function(e,n,t){n.Z=t.p+"assets/images/status-push-ec6d2bb3e8e0818611b4aa9269a52f31.png"},32757:function(e,n,t){n.Z=t.p+"assets/images/switch-branch-4f6cc5447f296a5b2fb19d09a47a62ae.gif"},73083:function(e,n,t){n.Z=t.p+"assets/images/update-50a5f584a91edee52fdf66df75be5552.png"}}]);