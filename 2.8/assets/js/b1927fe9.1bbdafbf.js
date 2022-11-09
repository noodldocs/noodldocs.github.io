"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[9746],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23424:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=["components"],s={title:"Fundamentals",hide_title:!0},l="Fundamentals",c={unversionedId:"getting-started/fundamentals",id:"getting-started/fundamentals",title:"Fundamentals",description:"Here you will learn about a few fundamental concepts in Noodl that are important to get a grasp on before continuing. You can view the video below or review the short guide.",source:"@site/docs/getting-started/fundamentals.md",sourceDirName:"getting-started",slug:"/getting-started/fundamentals",permalink:"/2.8/docs/getting-started/fundamentals",tags:[],version:"current",frontMatter:{title:"Fundamentals",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Workflow overview",permalink:"/2.8/docs/getting-started/workflow"},next:{title:"Building User Interfaces Basics",permalink:"/2.8/docs/guides/user-interfaces/basics"}},p={},u=[{value:"Nodes",id:"nodes",level:2},{value:"Inputs and outputs",id:"inputs-and-outputs",level:3},{value:"Connection types",id:"connection-types",level:3},{value:"Type conversion",id:"type-conversion",level:3},{value:"Components",id:"components",level:2},{value:"Component types",id:"component-types",level:3},{value:"Update everywhere",id:"update-everywhere",level:3}],d={toc:u};function m(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fundamentals"},"Fundamentals"),(0,r.kt)("p",null,"Here you will learn about a few fundamental concepts in Noodl that are important to get a grasp on before continuing. You can view the video below or review the short guide."),(0,r.kt)("div",{style:{padding:"62.5% 0 0 0",position:"relative"}},(0,r.kt)("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/1n0MXSbmTQk",style:{position:"absolute",top:0,left:0},frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,r.kt)("h2",{id:"nodes"},"Nodes"),(0,r.kt)("p",null,"The main building blocks of Noodl are nodes. Every node has its own specific purpose and is very simple in itself, but together they become really powerful. There are a number of types of nodes, indicated by its color. ",(0,r.kt)("strong",{parentName:"p"},"Blue")," nodes are visual elements, such as buttons, or not immediately visible but related, such as groups. ",(0,r.kt)("strong",{parentName:"p"},"Green")," nodes are generally related to reading, writing and manipulating data. ",(0,r.kt)("strong",{parentName:"p"},"Grey")," nodes are utilities, and ",(0,r.kt)("strong",{parentName:"p"},"Pink")," nodes are related to business logic and Javascript."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4497).Z,width:"1402",height:"436"})),(0,r.kt)("h3",{id:"inputs-and-outputs"},"Inputs and outputs"),(0,r.kt)("p",null,"All nodes have inputs and outputs. Connecting two nodes is as easy as clicking one node, dragging the connection to another node and selecting what output should be connected to what input. You can visually see the data flow in the Node Editor, and clicking a connection allows you to see what data is being passed."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(26582).Z,width:"800",height:"443"})),(0,r.kt)("p",null,"Most properties in Noodl can be connected, that's what makes it so powerful and easy to be creative with."),(0,r.kt)("h3",{id:"connection-types"},"Connection types"),(0,r.kt)("p",null,"Noodl has two different connection types, ",(0,r.kt)("span",{className:"ndl-data"},"Data")," and ",(0,r.kt)("span",{className:"ndl-signal"},"Signals"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",{className:"ndl-data"},"Data"),": This connects an output value from one node, such as the content of a Text Input or a Variable, to an input of another node. This is typically used to present data in your user interface. When data is passed over a connection you will see it light up in the node graph editor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",{className:"ndl-signal"},"Signal"),": Whenever we want our app to perform some kind of action we use a Signal connection. This connects a signal output, a node can have several signal outputs that each will trigger on a specific event, e.g. Click on a button, to a signal input on another node. The receiving node will typically be some kind of action that is peformed when the signal is received. When a signal is triggered you will see it light up in the node grap editor.")),(0,r.kt)("h3",{id:"type-conversion"},"Type conversion"),(0,r.kt)("p",null,"You can not connect ",(0,r.kt)("span",{className:"ndl-data"},"Data")," and ",(0,r.kt)("span",{className:"ndl-signal"},"Signals")," directly to one another, but there are nodes that can convert the connection types, for example if you want to trigger a signal whenever a value changes."),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("p",null,'A clusters of nodes and connections, "node graph", and make up a component. These components can then be combined in new node graphs and be part of even larger components. For a larger app, you typically create many different components to keep your application organised. These components can have their own inputs and outputs, just like the built in nodes. This is a great way of reusing UI or logic across your application.'),(0,r.kt)("p",null,"Component is also a great way to abstract and encapsulate complex functionality. You can decide what properties a component has and that are exposed the outer world, sort of like an API."),(0,r.kt)("h3",{id:"component-types"},"Component types"),(0,r.kt)("p",null,"There are three types of components: Page, Visual and Logic."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Page"),": Page components are your app\u2019s screens and can be navigated to using Page Router nodes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Visual"),": Visual components are made to group and render your UI elements on the screen. They can contain logic, but the main output is always something visible.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Logic"),": Logic components are the brains of your app. They are used to group nodes that don\u2019t render anything on screen. It can be as simple as a couple of nodes that do data transformation to something more complex, like routing signals to different outputs based on passed values."))),(0,r.kt)("h3",{id:"update-everywhere"},"Update everywhere"),(0,r.kt)("p",null,"One very practical thing with Components is that they are global, meaning that whenever you update a component's internals, these changes will be updated everywhere this component is used in the app."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(43169).Z,width:"800",height:"340"})))}m.isMDXComponent=!0},43169:function(e,t,n){t.Z=n.p+"assets/images/components-c78a8f25066681c02c493202a095ecd3.gif"},26582:function(e,t,n){t.Z=n.p+"assets/images/connecting-nodes-ef12704b2562eefa596b749fb9630629.gif"},4497:function(e,t,n){t.Z=n.p+"assets/images/nodes-a09ddbb7f156234baded8dcf6876aeaf.png"}}]);