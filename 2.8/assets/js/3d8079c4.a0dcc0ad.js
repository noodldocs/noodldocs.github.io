"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[4855],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=o,m=h["".concat(p,".").concat(u)]||h[u]||d[u]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},17213:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294),o=n(39671);function r(e){var t=e.zip,n=e.name,r=e.thumb,i=e.cf;return a.createElement("button",{className:"ndl-import-button",onClick:function(){return(0,o.I)(t,{name:n,thumb:r,cf:i})}})}},39671:function(e,t,n){n.d(t,{I:function(){return o}});var a=n(99782);function o(e,t){var n=[];t&&void 0!==t.name&&n.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&n.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+a.default.baseUrl+t.thumb)),t&&void 0!==t.cf&&n.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+a.default.baseUrl+"/"+t.cf));var o="noodl:import/"+location.protocol+"//"+location.host+a.default.baseUrl+e+(n.length>0?"?"+n.join("&"):"");console.log("Importing into Noodl:",o),console.log(e),window.location.href=o}},89739:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return h}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=n(17213),s=["components"],p={title:"Using Objects",hide_title:!0},l="Using Objects",c={unversionedId:"guides/data/objects",id:"guides/data/objects",title:"Using Objects",description:"What you will learn in this guide",source:"@site/docs/guides/data/objects.mdx",sourceDirName:"guides/data",slug:"/guides/data/objects",permalink:"/2.8/docs/guides/data/objects",tags:[],version:"current",frontMatter:{title:"Using Objects",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Using Variables",permalink:"/2.8/docs/guides/data/variables"},next:{title:"Arrays",permalink:"/2.8/docs/guides/data/arrays"}},d={},h=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"What&#39;s an Object in Noodl?",id:"whats-an-object-in-noodl",level:2},{value:"The <code>id</code> of an Object",id:"the-id-of-an-object",level:3},{value:"The properties of an Object",id:"the-properties-of-an-object",level:3},{value:"Creating Objects",id:"creating-objects",level:2},{value:"Setting Properties",id:"setting-properties",level:2},{value:"Using Objects as global holders of data",id:"using-objects-as-global-holders-of-data",level:2},{value:"Dynamically creating <strong>Objects</strong>",id:"dynamically-creating-objects",level:2},{value:"Storing Objects in an Array",id:"storing-objects-in-an-array",level:2},{value:"Using Objects in list with the Repeater node",id:"using-objects-in-list-with-the-repeater-node",level:2},{value:"Noodl Objects and Javascript",id:"noodl-objects-and-javascript",level:3}],u={toc:h};function m(e){var t=e.components,p=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-objects"},"Using Objects"),(0,r.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,r.kt)("p",null,"Objects is a concept of the global application data model in Noodl, an object is a data structure with properties and a string identifier that can be used to access the object globally in your Noodl application. In this guide you will learn how to use the ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/object/object-node"},"Object")," node, the ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/object/create-new-object"},"Create New Object")," and the ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/object/set-object-properties"},"Set Object Properties")," node to create and store ",(0,r.kt)("strong",{parentName:"p"},"Objects")," in your app. Objects are ",(0,r.kt)("em",{parentName:"p"},"local")," meaning they will not be stored in a cloud database by default. They are very useful to store data and states that applies to a usage session of an app or a screen. They are also essential when working with ",(0,r.kt)("strong",{parentName:"p"},"Arrays")," in Noodl since only ",(0,r.kt)("strong",{parentName:"p"},"Objects")," and ",(0,r.kt)("strong",{parentName:"p"},"Records")," can be stored in a Noodl Array."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The guide covers the following topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Objects in Noodl"),(0,r.kt)("li",{parentName:"ul"},"Creating ",(0,r.kt)("strong",{parentName:"li"},"Objects")),(0,r.kt)("li",{parentName:"ul"},"Setting Properties in ",(0,r.kt)("strong",{parentName:"li"},"Objects")),(0,r.kt)("li",{parentName:"ul"},"Dynamically creating Objects using the ",(0,r.kt)("strong",{parentName:"li"},"Create New Object")," node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Objects")," in ",(0,r.kt)("strong",{parentName:"li"},"Arrays")),(0,r.kt)("li",{parentName:"ul"},"Using ",(0,r.kt)("strong",{parentName:"li"},"Objects")," in Lists with the ",(0,r.kt)("strong",{parentName:"li"},"Repeater")," node")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Objects")," are very similar to ",(0,r.kt)("strong",{parentName:"p"},"Variables")," in Noodl and it's recommended to go through the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/data/variables"},"Variable guide")," before reading this guide."),(0,r.kt)("h2",{id:"whats-an-object-in-noodl"},"What's an Object in Noodl?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Objects")," in Noodl are used to hold data. ",(0,r.kt)("strong",{parentName:"p"},"Objects")," are ",(0,r.kt)("em",{parentName:"p"},"local")," meaning they only exist while the App is running. This is the main difference between ",(0,r.kt)("strong",{parentName:"p"},"Objects")," and ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/cloud-data/record"},"Records")," - ",(0,r.kt)("strong",{parentName:"p"},"Records")," are stored in a database."),(0,r.kt)("p",null,"Another related node in Noodl is the ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/variable/variable-node"},"Variable")," node. It's also local, but can only store one value, while an ",(0,r.kt)("strong",{parentName:"p"},"Object")," can store a number of values, each in a ",(0,r.kt)("em",{parentName:"p"},"property"),". So essentially an ",(0,r.kt)("strong",{parentName:"p"},"Object")," holds a couple of data points (properties) that belong together."),(0,r.kt)("p",null,"Some typical cases could be information about a person (for example ",(0,r.kt)("inlineCode",{parentName:"p"},"First Name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Last Name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Address"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Age"),"), all the information about a football match (",(0,r.kt)("inlineCode",{parentName:"p"},"Home Team"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Away Team"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Match Date"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Score"),"), etc, etc. There is no limitation on how many properties you can have."),(0,r.kt)("h3",{id:"the-id-of-an-object"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"id")," of an Object"),(0,r.kt)("p",null,"All ",(0,r.kt)("strong",{parentName:"p"},"Objects")," in Noodl have an ",(0,r.kt)("strong",{parentName:"p"},"id"),". This is the unique identifyer of the ",(0,r.kt)("strong",{parentName:"p"},"Object")," and if you have two ",(0,r.kt)("strong",{parentName:"p"},"Object")," nodes in your app, and you give them the same ",(0,r.kt)("strong",{parentName:"p"},"id")," they will point to the same data. Changing properties on one of the nodes will immediately change the data any other ",(0,r.kt)("strong",{parentName:"p"},"Object")," node with the same id."),(0,r.kt)("p",null,"In Noodl, when a ",(0,r.kt)("strong",{parentName:"p"},"Node")," need to refer to an ",(0,r.kt)("strong",{parentName:"p"},"Object")," you use the ",(0,r.kt)("strong",{parentName:"p"},"id")," to identify it. For example, an ",(0,r.kt)("strong",{parentName:"p"},"Array Filter")," have an output called ",(0,r.kt)("strong",{parentName:"p"},"First Item Id")," which will hold the ",(0,r.kt)("strong",{parentName:"p"},"id")," of the first object in the resulting array of object after a filter action have been done. By connecting that ",(0,r.kt)("strong",{parentName:"p"},"First Item Id")," to the ",(0,r.kt)("strong",{parentName:"p"},"Id")," of an ",(0,r.kt)("strong",{parentName:"p"},"Object")," you can access its properties."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(44177).Z,width:"1568",height:"680"}))),(0,r.kt)("h3",{id:"the-properties-of-an-object"},"The properties of an Object"),(0,r.kt)("p",null,"An Object typically have a number of properties. On the ",(0,r.kt)("strong",{parentName:"p"},"Object")," node they have to be explicitly created to be able to access them as outputs and inputs by clicking the ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," in the properties panel."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(77040).Z,width:"840",height:"472"}))),(0,r.kt)("p",null,"Note that just because an ",(0,r.kt)("strong",{parentName:"p"},"Object")," node doesn't have a property added, it doesn't mean that the underlying ",(0,r.kt)("strong",{parentName:"p"},"Object")," don't have it. It's just that this particular node won't have the property available as input and output until you add them."),(0,r.kt)("h2",{id:"creating-objects"},"Creating Objects"),(0,r.kt)("p",null,"Let's get started and create some objects!"),(0,r.kt)("p",null,"Objects are typically created in two different ways. Either you add in an ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/object/object-node"},"Object")," node and give it an ",(0,r.kt)("strong",{parentName:"p"},"Id")," then the object will be created (if it doesn't exists already) when used. The other way is to use the ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/object/create-new-object"},"Create New Object")," node and trigger its ",(0,r.kt)("strong",{parentName:"p"},"Do")," signal. That will create a unique new ",(0,r.kt)("strong",{parentName:"p"},"Object")," with a unique ",(0,r.kt)("strong",{parentName:"p"},"Id"),". "),(0,r.kt)("p",null,"So to summarize the two main ways of creating ",(0,r.kt)("strong",{parentName:"p"},"Objects")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Statically create by adding an ",(0,r.kt)("strong",{parentName:"li"},"Object")," node give it an ",(0,r.kt)("strong",{parentName:"li"},"Id"),", properties and connect to the input properties."),(0,r.kt)("li",{parentName:"ul"},"Dynamically create by triggering the ",(0,r.kt)("strong",{parentName:"li"},"Do")," signal in a ",(0,r.kt)("strong",{parentName:"li"},"Create New Object")," node.")),(0,r.kt)("p",null,'Let\'s start with the former.\nStart a new project using the "Hello World"-template. Then add in two ',(0,r.kt)("a",{parentName:"p",href:"/nodes/ui-controls/button"},"Buttons")," and a ",(0,r.kt)("a",{parentName:"p",href:"/nodes/ui-controls/text-input"},"Text Input")," node right under the root node. Remove the ",(0,r.kt)("strong",{parentName:"p"},"Text")," node and fix the layout slightly by adding som margins and padding. Change the text on the ",(0,r.kt)("strong",{parentName:"p"},"Buttons"),' to "Toggle" and "Increment".'),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(29180).Z,width:"915",height:"1532"}))),(0,r.kt)("h2",{id:"setting-properties"},"Setting Properties"),(0,r.kt)("p",null,'We want the "Toggle" button to toggle a ',(0,r.kt)("a",{parentName:"p",href:"/nodes/logic/switch"},"Switch")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),', the "Increment" button to increase a ',(0,r.kt)("a",{parentName:"p",href:"/nodes/math/counter"},"Counter"),", and the ",(0,r.kt)("strong",{parentName:"p"},"Text Input")," to generate a text. This will allow us to generate some data to put in an ",(0,r.kt)("strong",{parentName:"p"},"Object")),(0,r.kt)("p",null,"So add in the ",(0,r.kt)("strong",{parentName:"p"},"Switch")," and the ",(0,r.kt)("strong",{parentName:"p"},"Counter")," and hook them up."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(80146).Z,width:"1547",height:"832"}))),(0,r.kt)("p",null,"Now let's save the values in an ",(0,r.kt)("strong",{parentName:"p"},"Object"),". So create an ",(0,r.kt)("strong",{parentName:"p"},"Object")," node, make sure the ",(0,r.kt)("strong",{parentName:"p"},"Id")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"Specify explicitly"),". This allows us to set an ",(0,r.kt)("strong",{parentName:"p"},"Id")," of the ",(0,r.kt)("strong",{parentName:"p"},"Object"),". The other option, ",(0,r.kt)("inlineCode",{parentName:"p"},"From repeater"),", is used if the component with this ",(0,r.kt)("strong",{parentName:"p"},"Object")," would be a list item in a ",(0,r.kt)("a",{parentName:"p",href:"/nodes/ui-controls/repeater"},"Repeater")," node, which we will look at later in this guide."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(91133).Z,width:"690",height:"657"}))),(0,r.kt)("p",null,"Give it the ",(0,r.kt)("strong",{parentName:"p"},"Id")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Form Values"),". Then add three properties: ",(0,r.kt)("inlineCode",{parentName:"p"},"toggle_state"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"counter_value")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"input_text"),"."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(10308).Z,width:"690",height:"830"}))),(0,r.kt)("p",null,"Finally, connect the outputs to the ",(0,r.kt)("strong",{parentName:"p"},"Object")," as below."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(51557).Z,width:"1910",height:"810"}))),(0,r.kt)("p",null,"Now, whenever any of these outputs are changed, the new value is stored in the ",(0,r.kt)("strong",{parentName:"p"},"Object"),". This might be exactly what you want - or you might want to control much more specifically when the value is store. For example, maybe you only want to store the text from the ",(0,r.kt)("strong",{parentName:"p"},"Text Input")," when the user hits enter."),(0,r.kt)("p",null,"To do this more controlled set, we can use the ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/object/set-object-properties"},"Set Object Properties")," node. So let's add one in, make sure it's pointing to the same underlying ",(0,r.kt)("strong",{parentName:"p"},"Object")," by giving it the same ",(0,r.kt)("strong",{parentName:"p"},"Id"),", i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"Form Values"),". You will actually see it suggested when clicking the ",(0,r.kt)("strong",{parentName:"p"},"Id")," input property."),(0,r.kt)("p",null,"Now you can add in the ",(0,r.kt)("inlineCode",{parentName:"p"},"input_text")," property on the ",(0,r.kt)("strong",{parentName:"p"},"Set Object Properties")," node. You can also see that in the ",(0,r.kt)("strong",{parentName:"p"},"Set Object Properties")," node you can force what type the value should be when setting it. For example, forcing a Number, would store the number ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," rather than the string ",(0,r.kt)("inlineCode",{parentName:"p"},'"1"')," if you type it in the ",(0,r.kt)("strong",{parentName:"p"},"Input Text")," node. However, we want it to always be strings in this case, so pick ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(79324).Z,width:"685",height:"1100"}))),(0,r.kt)("p",null,"Now connect the ",(0,r.kt)("strong",{parentName:"p"},"On Enter")," signal of the ",(0,r.kt)("strong",{parentName:"p"},"Text Input")," to the ",(0,r.kt)("strong",{parentName:"p"},"Do")," input signal on the ",(0,r.kt)("strong",{parentName:"p"},"Set Object Properties")," and make sure the ",(0,r.kt)("strong",{parentName:"p"},"Text")," output is hooked up to the ",(0,r.kt)("inlineCode",{parentName:"p"},"input_text")," property. The nodes should look like below."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(43986).Z,width:"2097",height:"1230"}))),(0,r.kt)("p",null,"By hovering on the ",(0,r.kt)("strong",{parentName:"p"},"Object")," node and pinning the debug box by clicking on it, you will be able to see that the ",(0,r.kt)("inlineCode",{parentName:"p"},"input_text")," property is only set when hitting enter."),(0,r.kt)("p",null,"Note the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Not all properties need to be created on the ",(0,r.kt)("strong",{parentName:"li"},"Object")," or ",(0,r.kt)("strong",{parentName:"li"},"Set Object Properties")," node if you are not using them."),(0,r.kt)("li",{parentName:"ul"},'You can mix and match "lazy" setting directly on the ',(0,r.kt)("strong",{parentName:"li"},"Object")," node and controlled setting using the ",(0,r.kt)("strong",{parentName:"li"},"Set Object Properties")," node depending on need.")),(0,r.kt)("h2",{id:"using-objects-as-global-holders-of-data"},"Using Objects as global holders of data"),(0,r.kt)("p",null,"So let's use our ",(0,r.kt)("strong",{parentName:"p"},"Object")," in another component to show that it's available anywhere, as long as you know the ",(0,r.kt)("strong",{parentName:"p"},"Id"),". Create a new visual component and call it ",(0,r.kt)("inlineCode",{parentName:"p"},"Data Presentation"),"."),(0,r.kt)("p",null,"Add three ",(0,r.kt)("a",{parentName:"p",href:"/nodes/basic-elements/text"},"Text")," nodes to the root ",(0,r.kt)("strong",{parentName:"p"},"Group"),"."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(84550).Z,width:"592",height:"580"}))),(0,r.kt)("p",null,"Now add om an ",(0,r.kt)("strong",{parentName:"p"},"Object")," node, give it the ",(0,r.kt)("strong",{parentName:"p"},"id")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Form Values")," and hook it up to the ",(0,r.kt)("strong",{parentName:"p"},"Text")," nodes. Don't forget to add the properties to the ",(0,r.kt)("strong",{parentName:"p"},"Object"),"."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(67680).Z,width:"1432",height:"857"}))),(0,r.kt)("p",null,"Finally we add the new component to our main component."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(55244).Z,width:"2100",height:"1212"}))),(0,r.kt)("p",null,"Now when changing the values you will see them updating immediately in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Data Presentation")," component."),(0,r.kt)("h2",{id:"dynamically-creating-objects"},"Dynamically creating ",(0,r.kt)("strong",{parentName:"h2"},"Objects")),(0,r.kt)("p",null,"We will change it up a bit and create more ",(0,r.kt)("strong",{parentName:"p"},"Objects")," - actually we will create one every time the user hits enter. So lets change our nodes. In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Main")," component, remove the ",(0,r.kt)("strong",{parentName:"p"},"Object")," and ",(0,r.kt)("strong",{parentName:"p"},"Set Object Properties")," node. Instead add in a ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/object/create-new-object"},"Create New Object")," node. Add our properties to the node, i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"toggle_state"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"counter_value")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"input_text"),"."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(15406).Z,width:"672",height:"1315"}))),(0,r.kt)("p",null,"Then hook up the output values to the properties as before. Also connect ",(0,r.kt)("strong",{parentName:"p"},"onEnter")," to ",(0,r.kt)("strong",{parentName:"p"},"Do")," on the ",(0,r.kt)("strong",{parentName:"p"},"Create New Object"),"."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(97848).Z,width:"1895",height:"960"}))),(0,r.kt)("p",null,"Now whenever we hit enter we create a new ",(0,r.kt)("strong",{parentName:"p"},"Object")," with the properties set according to the ",(0,r.kt)("strong",{parentName:"p"},"Counter"),", ",(0,r.kt)("strong",{parentName:"p"},"Switch")," and ",(0,r.kt)("strong",{parentName:"p"},"Text Input"),". However the ",(0,r.kt)("strong",{parentName:"p"},"Objects")," are left somewhere in memory where we cant reach them. Each new ",(0,r.kt)("strong",{parentName:"p"},"Object")," have a new unique ",(0,r.kt)("strong",{parentName:"p"},"Id")," but we don't save that ",(0,r.kt)("strong",{parentName:"p"},"Id")," anywhere. Let's fix that! Let's put the ",(0,r.kt)("strong",{parentName:"p"},"Objects")," in an ",(0,r.kt)("strong",{parentName:"p"},"Array"),"."),(0,r.kt)("h2",{id:"storing-objects-in-an-array"},"Storing Objects in an Array"),(0,r.kt)("p",null,"Add in an ",(0,r.kt)("strong",{parentName:"p"},"Array")," node. Give the ",(0,r.kt)("strong",{parentName:"p"},"Array")," the ",(0,r.kt)("strong",{parentName:"p"},"Id")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Form Objects"),". Also add a ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/array/insert-into-array"},"Insert Object Into Array")," node."),(0,r.kt)("p",null,"If you check the documentation of the ",(0,r.kt)("strong",{parentName:"p"},"Insert Object Into Array")," node, it needs the ",(0,r.kt)("strong",{parentName:"p"},"Id")," of the ",(0,r.kt)("strong",{parentName:"p"},"Object")," that should be inserted. Conveniently there is an output from our ",(0,r.kt)("strong",{parentName:"p"},"Create New Object")," that holds the ",(0,r.kt)("strong",{parentName:"p"},"Id")," of the newly created object."),(0,r.kt)("p",null,"To insert the ",(0,r.kt)("strong",{parentName:"p"},"Object")," into the ",(0,r.kt)("strong",{parentName:"p"},"Array")," we need to trigger the ",(0,r.kt)("strong",{parentName:"p"},"Do")," signal on ",(0,r.kt)("strong",{parentName:"p"},"Insert Object Into Array"),". Also, we should not forget to specify the ",(0,r.kt)("strong",{parentName:"p"},"Id")," of the ",(0,r.kt)("strong",{parentName:"p"},"Array")," we want to insert it into, namely the ",(0,r.kt)("inlineCode",{parentName:"p"},"Form Objects"),"."),(0,r.kt)("p",null,"The construct can be seen below."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2704).Z,width:"2610",height:"1042"}))),(0,r.kt)("p",null,"Now if you bring up the debug info on the ",(0,r.kt)("strong",{parentName:"p"},"Array")," by hovering on it and clicking the debug box, you will see the number of items in the ",(0,r.kt)("strong",{parentName:"p"},"Array"),". Everytime you hit enter in your App it should be growing as we are creating ",(0,r.kt)("strong",{parentName:"p"},"Objects")," and inserting into the ",(0,r.kt)("strong",{parentName:"p"},"Array"),"."),(0,r.kt)("h2",{id:"using-objects-in-list-with-the-repeater-node"},"Using Objects in list with the Repeater node"),(0,r.kt)("p",null,"To wrap up this guide, let's also show all the ",(0,r.kt)("strong",{parentName:"p"},"Objects")," we are creating. We want to put them in a list, so we are going to need a ",(0,r.kt)("strong",{parentName:"p"},"Repeater")," node and turn our ",(0,r.kt)("inlineCode",{parentName:"p"},"Data Presentation")," component into a list item."),(0,r.kt)("p",null,"So start with removing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Data Presentation")," node from our main tree. Replace it with a ",(0,r.kt)("strong",{parentName:"p"},"Repeater")," node. Then connect the ",(0,r.kt)("strong",{parentName:"p"},"Items")," output of the ",(0,r.kt)("strong",{parentName:"p"},"Array")," to the ",(0,r.kt)("strong",{parentName:"p"},"Repeater")," input also called ",(0,r.kt)("strong",{parentName:"p"},"Items"),". Now we are feeding the repeater from the ",(0,r.kt)("strong",{parentName:"p"},"Array"),"."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(70404).Z,width:"2625",height:"1122"}))),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Repeater")," node and make sure you select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Data Presentation")," node as the List Item template."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(88146).Z,width:"1315",height:"985"}))),(0,r.kt)("p",null,"Now if you enter som data in your app and press enter, you will actually see new items pop up in your list, but they will be empty, or contain your old data if you didnt refresh the viewer recently."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(87409).Z,width:"918",height:"1752"}))),(0,r.kt)("p",null,"The reason is that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Data Presentation")," component is still looking for data in our old object called ",(0,r.kt)("inlineCode",{parentName:"p"},"Form Values")," and we removed that ",(0,r.kt)("strong",{parentName:"p"},"Object"),"."),(0,r.kt)("p",null,"Go into the ",(0,r.kt)("inlineCode",{parentName:"p"},"Data Presentation")," component. We need to change how the ",(0,r.kt)("strong",{parentName:"p"},"Object")," there gets its ",(0,r.kt)("strong",{parentName:"p"},"Id"),"."),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(25300).Z,width:"680",height:"827"}))),(0,r.kt)("p",null,"Change it to ",(0,r.kt)("inlineCode",{parentName:"p"},"From repeater")," and you should now be able to see the correct values in the list. Clean up the layout of the list items by setting their size to content height and add some margins."),(0,r.kt)("p",null,"Now you know how to use ",(0,r.kt)("strong",{parentName:"p"},"Objects"),' in Noodl. Import the final project by clicking the "Import" button below.'),(0,r.kt)("div",{className:"ndl-image-with-background"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(42339).Z,width:"922",height:"1195"})),(0,r.kt)(i.Z,{zip:"/docs/guides/data/objects/using-objects.zip",name:"Using Objects",thumb:"/docs/guides/data/objects/result-2.png",mdxType:"ImportButton"})),(0,r.kt)("h3",{id:"noodl-objects-and-javascript"},"Noodl Objects and Javascript"),(0,r.kt)("p",null,"Noodl objects can be accessed from Javascript using the ",(0,r.kt)("a",{parentName:"p",href:"/javascript/reference/objects"},"Objects API"),". A Noodl object can be accessed like a normal Javascript object but there are a few important differences. Essentially a Noodl object is like a Javascript object with a string identified, the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of the object which can be used to access this object anywhere in your application."),(0,r.kt)("p",null,"If you have the ",(0,r.kt)("strong",{parentName:"p"},"Id")," of an object you can access it like this in Javascript, e.g. in a function node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const obj = Noodl.Objects["Form Values"];\n\nconsole.log(obj.input_text);\nconsole.log(obj.id); // This will output "Form Values"\n\nobj.input_text = "Something"; // This will trigger a change on the object nodes with "Form Values" id\n')),(0,r.kt)("p",null,"Sometimes you can end up having properties in a Noodl Object that are references to other Noodl Objects, like this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const post = Noodl.Objects["Post"];\n\npost.auhtor = Noodl.Object.create({\n    name:"Lisa Simpson"\n})\n')),(0,r.kt)("p",null,"To access nested objects like this you can use this pattern, that is you don't have to first extract the ",(0,r.kt)("strong",{parentName:"p"},"Id")," of the nested object with something like an Expression node you can just connect it directly to the ",(0,r.kt)("strong",{parentName:"p"},"Id")," input of another Object node like this:"),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(47305).Z,width:"1486",height:"566"}))))}m.isMDXComponent=!0},44177:function(e,t,n){t.Z=n.p+"assets/images/object-1-152e689fbf0e949481097c35cdfeec21.png"},47305:function(e,t,n){t.Z=n.p+"assets/images/object-nested-1-bcee655db28e7d8050c1c72c2f408a3f.png"},77040:function(e,t,n){t.Z=n.p+"assets/images/object-properties-1-2bd96bad971e343a7adf4d2451adf9b3.png"},91133:function(e,t,n){t.Z=n.p+"assets/images/object-properties-2-dd10683601c8e509b0ccd435b60b901b.png"},10308:function(e,t,n){t.Z=n.p+"assets/images/object-properties-3-a29f90b41fb29fac1fa6f67fb9e77136.png"},79324:function(e,t,n){t.Z=n.p+"assets/images/object-properties-4-e0f3d0fa5e25ab4e32bdf621fdcfe7ac.png"},15406:function(e,t,n){t.Z=n.p+"assets/images/object-properties-5-e780e0fa029a7940a4c6e063cffe510e.png"},25300:function(e,t,n){t.Z=n.p+"assets/images/object-properties-6-44f096e5091c0f0338858090de7151df.png"},88146:function(e,t,n){t.Z=n.p+"assets/images/repeater-properties-1-13ec0ca96637ec46c1dbba1e3cf6e51f.png"},87409:function(e,t,n){t.Z=n.p+"assets/images/result-1-7913bfbb7346ffd6f867256792aea13e.png"},42339:function(e,t,n){t.Z=n.p+"assets/images/result-2-97f07e77df9aa00acb3fd22426c45be7.png"},29180:function(e,t,n){t.Z=n.p+"assets/images/step-1-ac656500fd1dd319338b7185ba9ea34a.png"},70404:function(e,t,n){t.Z=n.p+"assets/images/step-10-9932a8e11364dea509dec25538258bd7.png"},80146:function(e,t,n){t.Z=n.p+"assets/images/step-2-eacf8bcf3cb4b8d48356fdf30f8beb77.png"},51557:function(e,t,n){t.Z=n.p+"assets/images/step-3-e3c842e21d0d0d3df5523dc642369442.png"},43986:function(e,t,n){t.Z=n.p+"assets/images/step-4-9e06ca38f353c43d5b862baa6a89ac5e.png"},84550:function(e,t,n){t.Z=n.p+"assets/images/step-5-54bc988740636ef364bac4a6f9804277.png"},67680:function(e,t,n){t.Z=n.p+"assets/images/step-6-5d20f903222718395a9b45d722337702.png"},55244:function(e,t,n){t.Z=n.p+"assets/images/step-7-8aaae31ea4cd38ebddb6621cc63cfd44.png"},97848:function(e,t,n){t.Z=n.p+"assets/images/step-8-c1b3bdbee5e210f3039eb9f91586aef6.png"},2704:function(e,t,n){t.Z=n.p+"assets/images/step-9-b99667aab71502de8e9af98f0f1e2bb5.png"}}]);