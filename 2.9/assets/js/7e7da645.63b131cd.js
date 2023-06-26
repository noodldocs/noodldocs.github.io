"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[2530],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,s=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=p(a),m=r,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||s;return a?n.createElement(k,l(l({ref:e},d),{},{components:a})):n.createElement(k,l({ref:e},d))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=a.length,l=new Array(s);l[0]=c;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var p=2;p<s;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},86456:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=a(83117),r=a(80102),s=(a(67294),a(3905)),l=["components"],i={hide_title:!0,hide_table_of_contents:!0,title:"Run Tasks"},o=void 0,p={unversionedId:"data/run-tasks",id:"data/run-tasks",title:"Run Tasks",description:"This node can be used to perform a set of tasks comprised of a logic component for each item in an array. These tasks can be perfomed in a parallel or waterfall fashion. You start running the tasks by sending a signal to the Do input of the Run Tasks node.",source:"@site/nodes/data/run-tasks.md",sourceDirName:"data",slug:"/data/run-tasks",permalink:"/2.9/nodes/data/run-tasks",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Run Tasks"},sidebar:"nodeSidebar",previous:{title:"Variable",permalink:"/2.9/nodes/data/variable/variable-node"},next:{title:"Array",permalink:"/2.9/nodes/data/array/array-node"}},d={},u=[{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2}],c={toc:u};function m(t){var e=t.components,i=(0,r.Z)(t,l);return(0,s.kt)("wrapper",(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",{className:"is-hidden"},""),(0,s.kt)("h1",{id:"run-tasks"},"Run Tasks"),(0,s.kt)("p",null,"This node can be used to perform a set of tasks comprised of a logic component for each item in an ",(0,s.kt)("span",{className:"ndl-data"},"array"),". These tasks can be perfomed in a parallel or waterfall fashion. You start running the tasks by sending a signal to the ",(0,s.kt)("strong",{parentName:"p"},"Do")," input of the ",(0,s.kt)("strong",{parentName:"p"},"Run Tasks")," node."),(0,s.kt)("div",{className:"ndl-image-with-background xl"},(0,s.kt)("p",null,(0,s.kt)("img",{src:a(3733).Z,width:"1570",height:"472"}))),(0,s.kt)("p",null,"The ",(0,s.kt)("span",{className:"ndl-node"},"Run Tasks"),' node needs a task component that it will "run" for each item in the array connected to ',(0,s.kt)("strong",{parentName:"p"},"Items"),". These tasks are logic components that are started with the ",(0,s.kt)("strong",{parentName:"p"},"Do")," signal and that need to complete with a signal either to ",(0,s.kt)("strong",{parentName:"p"},"Success")," or ",(0,s.kt)("strong",{parentName:"p"},"Failure"),"."),(0,s.kt)("div",{className:"ndl-image-with-background xl"},(0,s.kt)("p",null,(0,s.kt)("img",{src:a(46173).Z,width:"1624",height:"536"}))),(0,s.kt)("p",{className:"is-hidden"},""),(0,s.kt)("p",null,"You can control the behaviour of how the tasks are run with the properties."),(0,s.kt)("div",{className:"ndl-image-with-background l"},(0,s.kt)("p",null,(0,s.kt)("img",{src:a(7090).Z,width:"758",height:"354"}))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Stop On Failure")," Indicates wether the run tasks node should stop on the first task that signals a ",(0,s.kt)("strong",{parentName:"p"},"Failure"),". This will result in the ",(0,s.kt)("strong",{parentName:"p"},"Failure")," signal and ",(0,s.kt)("strong",{parentName:"p"},"Aborted")," signal emitted from the ",(0,s.kt)("strong",{parentName:"p"},"Run Tasks")," node.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Max Running Tasks")," Specifies the maximum number of tasks that will run at the same time. If you want each task to be performed in order and wait for a task to be completed before starting a new you set this value to ",(0,s.kt)("strong",{parentName:"p"},"1"),". When running tasks in parallel which is often the case then you may want to limit the number of tasks running concurrently.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Template")," This is the logic component that will be used to run each task."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Run Tasks")," work a lot like the ",(0,s.kt)("a",{parentName:"p",href:"/nodes/ui-controls/repeater"},"Repeater")," node where each task instance can access the data from the corresponding item in the array using an ",(0,s.kt)("a",{parentName:"p",href:"/nodes/data/object/object-node"},"Object")," or ",(0,s.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/record"},"Record")," node."),(0,s.kt)("div",{className:"ndl-image-with-background xl"},(0,s.kt)("p",null,(0,s.kt)("img",{src:a(13738).Z,width:"1186",height:"596"}))),(0,s.kt)("p",null,"As with the ",(0,s.kt)("strong",{parentName:"p"},"Repeater")," you need to specify that the ",(0,s.kt)("strong",{parentName:"p"},"Id")," of the object should be obtained from the repeater, in this case the ",(0,s.kt)("strong",{parentName:"p"},"Run Tasks")," is the repeater and the object will be the item on the array corresponing to this task component instance."),(0,s.kt)("div",{className:"ndl-image-with-background l"},(0,s.kt)("p",null,(0,s.kt)("img",{src:a(320).Z,width:"756",height:"194"}))),(0,s.kt)("p",null,"However the properties of the object corresponding to that task will also be available as ",(0,s.kt)("strong",{parentName:"p"},"Component Inputs")," directly. So a quicker way might be to just add corresponding inputs."),(0,s.kt)("div",{className:"ndl-image-with-background xl"},(0,s.kt)("p",null,(0,s.kt)("img",{src:a(4137).Z,width:"1480",height:"592"}))),(0,s.kt)("h2",{id:"inputs"},"Inputs"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Data"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{className:"ndl-data"},"Template")),(0,s.kt)("td",{parentName:"tr",align:null},"This is a reference to a component that will be cloned for each item in the ",(0,s.kt)("strong",{parentName:"td"},"Items")," array and used to run the task for that item.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{className:"ndl-data"},"Stop On Failure")),(0,s.kt)("td",{parentName:"tr",align:null},"Indicates wether the run tasks node should stop on the first task that signals a ",(0,s.kt)("span",{className:"ndl-signal"},"Failure"),". This will result in the ",(0,s.kt)("span",{className:"ndl-signal"},"Failure")," signal and ",(0,s.kt)("span",{className:"ndl-signal"},"Aborted")," signal emitted from the ",(0,s.kt)("strong",{parentName:"td"},"Run Tasks")," node.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{className:"ndl-data"},"Max Running Tasks")),(0,s.kt)("td",{parentName:"tr",align:null},"Specifies the maximum number of tasks that will run at the same time. If you want each task to be performed in order and wait for a task to be completed before starting a new you set this value to ",(0,s.kt)("strong",{parentName:"td"},"1"),". When running tasks in parallel which is often the case then you may want to limit the number of tasks running concurrently.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{className:"ndl-data"},"Items")),(0,s.kt)("td",{parentName:"tr",align:null},"An array of objects. The run tasks will create a task component instance for each item in the array that may run a task.")))),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Signal"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{className:"ndl-signal"},"Do")),(0,s.kt)("td",{parentName:"tr",align:null},"Send a signal on this input to start running the tasks.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{className:"ndl-signal"},"Abort")),(0,s.kt)("td",{parentName:"tr",align:null},"Sending a signal on this input will abort the running of tasks, when the currently running tasks are completed no new tasks will be started.")))),(0,s.kt)("h2",{id:"outputs"},"Outputs"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Signal"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{className:"ndl-signal"},"Success")),(0,s.kt)("td",{parentName:"tr",align:null},"A signal will be emitted on this output when all tasks have completed successfully.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{className:"ndl-signal"},"Failure")),(0,s.kt)("td",{parentName:"tr",align:null},"A signal will be emitted here when the tasks have completed running and a task failed.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{className:"ndl-signal"},"Aborted")),(0,s.kt)("td",{parentName:"tr",align:null},"A signal here indicated that the running of tasks was aborted eihter due to a signal on the ",(0,s.kt)("span",{className:"ndl-signal"},"Abort")," input or that a task failed and the running of tasks was stopped.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{className:"ndl-signal"},"Done")),(0,s.kt)("td",{parentName:"tr",align:null},"A signal is emitted here when all tasks have been completed, failed and succeeded.")))))}m.isMDXComponent=!0},3733:function(t,e,a){e.Z=a.p+"assets/images/run-tasks-1-18c82f33ee50f15259f359a42369840d.png"},46173:function(t,e,a){e.Z=a.p+"assets/images/run-tasks-2-b2beecd403963488b1312c6ccaf95d5d.png"},320:function(t,e,a){e.Z=a.p+"assets/images/run-tasks-3-d17404cee528e5a93cb3958c21edf5d6.png"},13738:function(t,e,a){e.Z=a.p+"assets/images/run-tasks-4-ceca185c20d446ad2eee5248d8c89e9a.png"},4137:function(t,e,a){e.Z=a.p+"assets/images/run-tasks-5-06e1a1cd85c669a9abecc29be35c0116.png"},7090:function(t,e,a){e.Z=a.p+"assets/images/run-tasks-props-656fdd609bb5478dff321faa3a199b95.png"}}]);