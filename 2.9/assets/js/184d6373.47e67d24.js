"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[8906],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,g=d["".concat(c,".").concat(p)]||d[p]||u[p]||r;return n?o.createElement(g,i(i({ref:t},h),{},{components:n})):o.createElement(g,i({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49362:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),i=["components"],l={},c="Version control",s={unversionedId:"guides/collaboration/version-control",id:"guides/collaboration/version-control",title:"Version control",description:"Introduction",source:"@site/docs/guides/collaboration/version-control.md",sourceDirName:"guides/collaboration",slug:"/guides/collaboration/version-control",permalink:"/2.9/docs/guides/collaboration/version-control",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Javascript in Cloud Functions",permalink:"/2.9/docs/guides/cloud-logic/javascript"},next:{title:"Deploy an App on the Sandbox domain",permalink:"/2.9/docs/guides/deploy/deploying-an-app-on-sandbox"}},h={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Enabling version control",id:"enabling-version-control",level:2},{value:"The version control panel",id:"the-version-control-panel",level:2},{value:"Commiting your changes",id:"commiting-your-changes",level:2},{value:"Pulling down changes",id:"pulling-down-changes",level:2},{value:"Conflicts",id:"conflicts",level:2},{value:"Branches",id:"branches",level:2},{value:"Creating a branch",id:"creating-a-branch",level:3},{value:"Switching branches",id:"switching-branches",level:3},{value:"Merging branches",id:"merging-branches",level:3},{value:"Deleting a branch",id:"deleting-a-branch",level:2}],d={toc:u};function p(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"version-control"},"Version control"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Version control has three main use cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Collaborating with team members"),(0,r.kt)("li",{parentName:"ul"},'Working with different versions of your project in parallel (what\'s known as "branches")'),(0,r.kt)("li",{parentName:"ul"},"Backup. All versions are backed up in the cloud")),(0,r.kt)("div",{className:"ndl-image-with-background s"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(42631).Z,width:"736",height:"1450"}))),(0,r.kt)("p",null,"Noodl uses ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com"},"Git")," as the underlying version control system. The project folder is a git repository.\nUsers comfortable with git can use external git clients to view their Noodl projects."),(0,r.kt)("h2",{id:"enabling-version-control"},"Enabling version control"),(0,r.kt)("p",null,"Projects will automatically get a version control repository in the cloud. You can use it locally without sending data to the cloud, but to collaborate you have to push your changes, which will upload the project to Noodl's cloud."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A project that isn't pushed isn't available to collaborators or if you log into another computer.\nSame goes for the changes you make, you have to push them to upload to the cloud."))),(0,r.kt)("p",null,"Read more about how to push your project below."),(0,r.kt)("h2",{id:"the-version-control-panel"},"The version control panel"),(0,r.kt)("p",null,"The version control panel is where you perform all actions related to version control.\nThis includes actions such as pushing new changes to your collaborators,\npulling down the latest version, seeing differences between versions, merging branches, and more."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(77390).Z,width:"654",height:"892"}))),(0,r.kt)("h2",{id:"commiting-your-changes"},"Commiting your changes"),(0,r.kt)("p",null,"When there are changes in your project and you can commit your changes to the version control system. This creates a commit, which is a snapshot of the state of your entire project. This can then be pushed to share your changes with collaborators (or yourself if you work on multiple computers)."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(90564).Z,width:"668",height:"552"}))),(0,r.kt)("p",null,"Noodl will now show you all the components and files that have changed, and by clicking them you can see the difference compared to the previous version."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(34084).Z,width:"2591",height:"1091"}))),(0,r.kt)("p",null,"After the changes have been commited the commit is now visible in the history tab."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(80866).Z,width:"650",height:"1258"}))),(0,r.kt)("p",null,'Push your changes by clicking the button at the top that says "Push 1 local commit".'),(0,r.kt)("h2",{id:"pulling-down-changes"},"Pulling down changes"),(0,r.kt)("p",null,"Noodl checks if there are any changes to pull down when the version control panel is opened."),(0,r.kt)("p",null,"You can also manually check for updates by clicking the update icon"),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(65307).Z,width:"649",height:"127"}))),(0,r.kt)("p",null,'A new version will show be displayed as "Remote commits" in the history tab. These are versions that you haven\'t pulled down yet.'),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(99983).Z,width:"647",height:"1173"}))),(0,r.kt)("p",null,"The button at the top lights up and shows how many remote commits are available. Click it to pull down the changes. You can click on the commits in the history tab to see the changes you're about to pull."),(0,r.kt)("p",null,"Any local changes you have, that aren't pushed, will still be there after pulling down a new version. They will be applied to the new versions, which leads to the next subject, conflicts."),(0,r.kt)("h2",{id:"conflicts"},"Conflicts"),(0,r.kt)("p",null,"Sometimes you and your collaborators might change the same parameter on the same node. In those cases, Noodl doesn't know which change to apply and will ask you to resolve the conflicts."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(21903).Z,width:"939",height:"474"}))),(0,r.kt)("p",null,"You can resolve conflicts by choosing to keep your change or overwrite your change with the one from your collaborator."),(0,r.kt)("h2",{id:"branches"},"Branches"),(0,r.kt)("p",null,"Branches can be used to develop different parts of your application in parallel, that can later be merged."),(0,r.kt)("p",null,"Here are a few common use cases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One branch for the stable version of your app, and another one for the development version"),(0,r.kt)("li",{parentName:"ul"},"A new feature that's being worked on can be developed in a separate branch, and later merged into the main branch when it's ready"),(0,r.kt)("li",{parentName:"ul"},"Explore different designs variations of your app, deploying them independently, and later merge in the variation that was the most successful."),(0,r.kt)("li",{parentName:"ul"},"...and there are many more")),(0,r.kt)("h3",{id:"creating-a-branch"},"Creating a branch"),(0,r.kt)("p",null,"Create a branch by clicking the '+' icon in the version control panel's branch dropdown."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(41703).Z,width:"912",height:"769"}))),(0,r.kt)("p",null,"After a branch has been created Noodl will switch to the new branch. Any changes in your project that weren't pushed will be moved to this new branch."),(0,r.kt)("p",null,"Changes you push will now belong to the new branch, and won't affect the other branches."),(0,r.kt)("h3",{id:"switching-branches"},"Switching branches"),(0,r.kt)("p",null,"Switch between branches by clicking on a branch. Switching requires you to have no local changes. There are three ways to solve this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Commit your changes to the current branch"),(0,r.kt)("li",{parentName:"ul"},"Delete your changes"),(0,r.kt)("li",{parentName:"ul"},"(Advanced) Stash your changes")),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(42364).Z,width:"683",height:"591"}))),(0,r.kt)("h3",{id:"merging-branches"},"Merging branches"),(0,r.kt)("p",null,'Changes from one branch can be merged into another branch. In this example, the "my-new-feature" branch is being merged into the "main" branch.'),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(17819).Z,width:"849",height:"726"}))),(0,r.kt)("p",null,'Clicking "Merge into main" will show a preview of the changes that are being merged in. Noodl is visualizing the changes as they will look after the merge has been done.'),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(80560).Z,width:"683",height:"1118"}))),(0,r.kt)("p",null,'Click "Merge branches" to perform the merge.'),(0,r.kt)("p",null,"When the merge is done, it is done locally, and won't yet be shared with collaborators. You can now choose to push the changes, or continue working locally."),(0,r.kt)("h2",{id:"deleting-a-branch"},"Deleting a branch"),(0,r.kt)("p",null,"After a branch has been merged into another branch it can be a good idea to delete it if it won't be used anymore."),(0,r.kt)("p",null,"Note that deleting branches will delete branches both locally and remotely. If other collaborators have done work on the branch you just deleted, their local copy of the branch will still be intact and they can choose to push their changes to restore the branch."),(0,r.kt)("p",null,"The main branch can't be deleted."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(10406).Z,width:"851",height:"726"}))))}p.isMDXComponent=!0},41703:function(e,t,n){t.Z=n.p+"assets/images/branch-create-b36ba96e8842ea4f10b902cae763e4c7.png"},10406:function(e,t,n){t.Z=n.p+"assets/images/branch-delete-f5b775eebcadaedd9112df32a267b1bd.png"},21903:function(e,t,n){t.Z=n.p+"assets/images/conflicts-754a962dde5faa3d7586c56cefb8c8e7.png"},34084:function(e,t,n){t.Z=n.p+"assets/images/first-commit-22bd6c5d437619286604509faf3de57b.png"},99983:function(e,t,n){t.Z=n.p+"assets/images/first-pull-59763d82cace0f9247816c803509fbaf.png"},80866:function(e,t,n){t.Z=n.p+"assets/images/first-push-384fe4760de7ab38ccf0edaaac4c2131.png"},77390:function(e,t,n){t.Z=n.p+"assets/images/initial-state-5c3efbef13e39f0295b1e44b10e3eb5a.png"},42631:function(e,t,n){t.Z=n.p+"assets/images/intro-1004e9bc4590de8c3761d2060fe47d29.png"},17819:function(e,t,n){t.Z=n.p+"assets/images/merge-1-7c8ef2f114d3ee46bf03a2ae4fbe8ccc.png"},80560:function(e,t,n){t.Z=n.p+"assets/images/merge-2-72c4458c31d79839ab205c94a160c7e5.png"},90564:function(e,t,n){t.Z=n.p+"assets/images/status-commit-d463fe6e49455b08e825e786890b496f.png"},42364:function(e,t,n){t.Z=n.p+"assets/images/switch-branch-917eb2dcf6c7ba14aa162cd442e106de.png"},65307:function(e,t,n){t.Z=n.p+"assets/images/update-061c600fe3c7c6576c713078ae1ddc03.png"}}]);