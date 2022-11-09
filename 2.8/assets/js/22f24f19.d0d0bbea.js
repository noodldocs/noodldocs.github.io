"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[627],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),s=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,m=p["".concat(d,".").concat(h)]||p[h]||u[h]||l;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var s=2;s<l;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9726:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var o=n(83117),a=n(80102),l=(n(67294),n(3905)),r=["components"],i={hide_title:!0,hide_table_of_contents:!0,title:"Create a new core node"},d="Create a new core node",s={unversionedId:"extending/create-lib",id:"extending/create-lib",title:"Create a new core node",description:"Noodl is very extensible. As a developer you can add new modules with new capablities, create connections to data or make new visual components in your workspace. This guide gets us started by showing how the Noodl command line tool works and how to create an extension module with a single new node. This node will behave and appear just like the standard core nodes of Noodl.",source:"@site/javascript/extending/create-lib.md",sourceDirName:"extending",slug:"/extending/create-lib",permalink:"/2.8/javascript/extending/create-lib",tags:[],version:"current",frontMatter:{hide_title:!0,hide_table_of_contents:!0,title:"Create a new core node"},sidebar:"apiSidebar",previous:{title:"Extending Noodl",permalink:"/2.8/javascript/extending/overview"},next:{title:"Create a Visual node with React",permalink:"/2.8/javascript/extending/create-react-lib"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Install the Noodl CLI",id:"install-the-noodl-cli",level:2},{value:"Create a Module Project",id:"create-a-module-project",level:2},{value:"Developing your module",id:"developing-your-module",level:2},{value:"Overview of the module code",id:"overview-of-the-module-code",level:2},{value:"Deploying your module",id:"deploying-your-module",level:2}],p={toc:u};function h(e){var t=e.components,i=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"create-a-new-core-node"},"Create a new core node"),(0,l.kt)("p",null,"Noodl is very extensible. As a developer you can add new modules with new capablities, create connections to data or make new visual components in your workspace. This guide gets us started by showing how the Noodl command line tool works and how to create an extension module with a single new node. This node will behave and appear just like the standard core nodes of Noodl."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This guide requires ",(0,l.kt)("a",{href:"https://nodejs.org/en/download/",target:"_blank"},"Node.js")," and ",(0,l.kt)("a",{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",target:"_blank"},"npm")," installed."))),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"This guide will walk you through how to create a ",(0,l.kt)("strong",{parentName:"p"},"Noodl Module"),". A Noodl Module can contain new core nodes to use in your projects. You can for example wrap an existing JavaScript library and expose it as a node in Noodl."),(0,l.kt)("p",null,"The general process works like this"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Set up a new ",(0,l.kt)("strong",{parentName:"li"},"Module Project")," where you can write the code for your module."),(0,l.kt)("li",{parentName:"ul"},"Test your module in one of you projects while developing it."),(0,l.kt)("li",{parentName:"ul"},"When you are done, build the module and deploy it to the projects you want to use it in.")),(0,l.kt)("h2",{id:"install-the-noodl-cli"},"Install the Noodl CLI"),(0,l.kt)("p",null,"First you need to install the Noodl command line interfaces. If you have not previously installed the CLI you can do so via npm."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @noodl/noodl-cli\n")),(0,l.kt)("h2",{id:"create-a-module-project"},"Create a Module Project"),(0,l.kt)("p",null,"With the CLI tool you can easily create a new Noodl module from a template:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"noodl-cli create-lib my-noodl-module\n")),(0,l.kt)("p",null,"You need to specify a directory name that will be created. The directory will contain everything you need to get started. Using the command above, the directory ",(0,l.kt)("em",{parentName:"p"},"my-noodl-module")," will be created."),(0,l.kt)("p",null,"The newly created directory has the following structure:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"my-noodl-module/\n    module/\n    project/\n    tests/\n    icon.png\n    module.json\n")),(0,l.kt)("p",null,"First some notes on the content of a library module:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("strong",{parentName:"li"},"module")," directory contains the source code for the module as well as build scripts and any assets you might want, such as fonts, css etc."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("strong",{parentName:"li"},"project")," and ",(0,l.kt)("strong",{parentName:"li"},"tests")," folder can be ignored")),(0,l.kt)("p",null,"First enter the ",(0,l.kt)("strong",{parentName:"p"},"module")," directory and install the needed dependencies:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd module\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,l.kt)("p",null,"If your module uses any other external libraries through NPM they will be installed as well."),(0,l.kt)("h2",{id:"developing-your-module"},"Developing your module"),(0,l.kt)("p",null,"You develop your module mainly by editing the file ",(0,l.kt)("inlineCode",{parentName:"p"},"module/src/index.js"),". From start it contains some example code that you can use as a boiler plate. There is currently no official documenation of the Noodl module SDK but you can find the source code to a number of modules ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/noodlapp"},"here"),"."),(0,l.kt)("p",null,'As you are developing your module you would want it packaged up and deployed in a Noodl project where you can test it. To do that you first have to create a new Noodl project that will be your test project. Once you\'ve done that, find the local folder of that project by clickin the cogwheel ("Settings") and "Open project folder".'),(0,l.kt)("div",{class:"ndl-image-with-background m"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(9034).Z,width:"496",height:"130"}))),(0,l.kt)("p",null,"Copy the full path to that folder - you will need it in the next step."),(0,l.kt)("p",null,"Now open the file ",(0,l.kt)("inlineCode",{parentName:"p"},"/module/src/webpack.config.js"),". Among other things, this file specifies where to deploy the module. We want to make sure its deployed to our test project.\nUpdate the row containing ",(0,l.kt)("inlineCode",{parentName:"p"},"var outputPath = ...")," to the following"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var outputPath = path.resolve('<the absolute path that your project>', 'noodl_modules/' + pjson.name);\n")),(0,l.kt)("p",null,"Now go back to your terminal window (that was located in the ",(0,l.kt)("inlineCode",{parentName:"p"},"modules/")," folder) and write the following."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,l.kt)("p",null,"This will enter development mode where your module is automatically rebuilt and redeployed to your project when you make changes in the source code."),(0,l.kt)("p",null,"If you started from the boiler plate code in ",(0,l.kt)("inlineCode",{parentName:"p"},"module/src/index.js"),' you will already have a module now in your project. Reload the Noodl project by closing it and opening it again, or simply press ctrl+R (Windows) / cmd+R (Mac) when you are in the Node Editor. Then bring up the Node Picker and you should see your new core node under "External Libraries".'),(0,l.kt)("h2",{id:"overview-of-the-module-code"},"Overview of the module code"),(0,l.kt)("p",null,"The file ",(0,l.kt)("em",{parentName:"p"},"index.js")," contains the code for your nodes. Open it in your favorite editor and have a look. The file contains boilerplate code for a simple new core node, let's look at the different sections:"),(0,l.kt)("p",null,"First you must import the Noodl SDK."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const Noodl = require('@noodl/noodl-sdk');\n")),(0,l.kt)("p",null,"Next you will define the code for the new node. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const MyFullNameNode = Noodl.defineNode({\n  category: 'My Utils',\n  name: 'Full Name',\n  inputs: {\n    FirstName: 'string',\n    LastName: 'string',\n  },\n  outputs: {\n    FullName: 'string',\n  },\n  changed: {\n    FirstName: function () {\n      this.setOutputs({\n        FullName: this.inputs.FirstName + ' ' + this.inputs.LastName,\n      });\n    },\n    LastName: function () {\n      this.setOutputs({\n        FullName: this.inputs.FirstName + ' ' + this.inputs.LastName,\n      });\n    },\n  },\n});\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You need to specify the ",(0,l.kt)("strong",{parentName:"li"},"name")," of the node, this is the name that shows up in the list when creating new nodes."),(0,l.kt)("li",{parentName:"ul"},"you can optionally specify a ",(0,l.kt)("strong",{parentName:"li"},"category"),", this will also be used in the new node popup in Noodl.")),(0,l.kt)("p",null,"Finally you need to define the specification of your module."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"Noodl.defineModule({\n  nodes: [MyFullNameNode],\n  setup() {\n    //this is called once on startup\n  },\n});\n")),(0,l.kt)("p",null,"Again, check out the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/noodlapp"},"Noodl Repo")," at GitHub for some module examples."),(0,l.kt)("h2",{id:"deploying-your-module"},"Deploying your module"),(0,l.kt)("p",null,"When you are happy with your module you can do a proper deploy. Go back to the terminal window (still in the ",(0,l.kt)("inlineCode",{parentName:"p"},"modules/")," folder) and write."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,l.kt)("p",null,"This deploys an optimized version of the module. If you want to use the module in a different project, just change the path in ",(0,l.kt)("inlineCode",{parentName:"p"},"/module/src/webpack.config.js")," and do ",(0,l.kt)("inlineCode",{parentName:"p"},"npm run build")," again."))}h.isMDXComponent=!0},9034:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfAAAACCCAYAAAC5MZqYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAB3JSURBVHhe7Z0JuFXT+8dXIhRKhmSeGkSZSoUkRFRCpocnZSo8iJB5SjIPmclQmZs0kFKKokgpRYWiSUnJmDn+v8/bXve/7+mcc8+99+xzz+5+P8+zn3vOPntYe+1913e9w1q7gnPuv/8t61CjRo3gkxBCCCHyjQ2Cv0IIIYSIERJwIYQQIoZIwIUQQogYIgEXQgghYogEXAghhIghEnAhhBAihkjAhRBCiBgiARdCCCFiSMqJXIQQQgiRv8gCF0IIIWKIBFwIIYSIISld6FtttVXwqXzw/fffB580D7wQQoiyY/ny5cEn57bbbrvg07rIAhdCCCFiiARcCCGEiCEScCGEECKGSMCFEEKIGCIBF0IIIWKIBFwIIYSIIRJwIYQQIoZIwIUQQogYIgEXQgghYogEXAghhIghEnAhhBAihsRKwCtWrOgqVarkNthA/Q4hhBDlm5wpYYUKFdyGG27oNt54Y1e5cmVXpUoVt+mmm5og81sq+G2jjTayfZo1a+auvfZat8UWWwS/CiGEEOWTnLyNDBHeZJNN3DHHHOP2339/V61aNbOif/31V/f111+74cOHu++++879+++/wR5rweJm25YtW7qDDjrIbbvttvbWsF69ermVK1fa9v/9l7T4xUZvIxNCCJEPZPo2spwI+M477+w6d+7sdtlll6TWNuL5yiuvuMmTJwdrnFnd7dq1c0cccUQhi/uff/5xCxYscJ999pn74IMP3OLFi4NfSocEXAghRD6QqYBX/N9yy9qPhcFlXVoQazoC11xzjRUCa5mCzZgxw33xxRf2+2abbWbu9D333NN9+umn7ueffy7Yt379+m7XXXc1653vLFjuW265patVq5Zr3LixW7Vqlfvmm29sn9Lw+++/B5+clUkIIYQoC1avXh18Sq9HkQo4LnCs6L333tvE+91333VPPPGEmzp1qon1+++/73788UdXt25dK2Tt2rVtG7ZlQeQ///xzt9dee1m8HH755Rf322+/WTyddYg8nYJly5aVyp0edwEnN+DKK690CxcudEuWLAnWlk9UF0KIOJOpgEeaxIaAE7tGbGlIiXVjYf/1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"}}]);