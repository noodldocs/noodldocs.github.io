"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[2229],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53488:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(67294);function a(e){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)})):function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+n)}catch(o){console.error("Fallback: Oops, unable to copy",o)}document.body.removeChild(t)}(e)}function r(e){return o.createElement("button",{className:"ndl-copy-nodes-button",onClick:function(){return t=e.json,void a(JSON.stringify(t));var t}})}},17213:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(67294),a=n(39671);function r(e){var t=e.zip,n=e.name,r=e.thumb,i=e.cf;return o.createElement("button",{className:"ndl-import-button",onClick:function(){return(0,a.I)(t,{name:n,thumb:r,cf:i})}})}},39671:function(e,t,n){n.d(t,{I:function(){return a}});var o=n(99782);function a(e,t){var n=[];t&&void 0!==t.name&&n.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&n.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+o.default.baseUrl+t.thumb)),t&&void 0!==t.cf&&n.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+o.default.baseUrl+"/"+t.cf));var a="noodl:import/"+location.protocol+"//"+location.host+o.default.baseUrl+e+(n.length>0?"?"+n.join("&"):"");console.log("Importing into Noodl:",a),console.log(e),window.location.href=a}},9358:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),i=n(53488),s=n(17213),p=["components"],l={title:"Custom UI Components",hide_title:!0},c="Custom UI Components",u={unversionedId:"guides/business-logic/custom-ui-components",id:"guides/business-logic/custom-ui-components",title:"Custom UI Components",description:"What you will learn in this guide",source:"@site/docs/guides/business-logic/custom-ui-components.md",sourceDirName:"guides/business-logic",slug:"/guides/business-logic/custom-ui-components",permalink:"/2.6/docs/guides/business-logic/custom-ui-components",tags:[],version:"current",frontMatter:{title:"Custom UI Components",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Building Business Logic Using Javascript",permalink:"/2.6/docs/guides/business-logic/client-side-biz-logic-js"},next:{title:"Events",permalink:"/2.6/docs/guides/business-logic/events"}},m={},d=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Component Inputs and Outputs",id:"component-inputs-and-outputs",level:2},{value:"Component Object",id:"component-object",level:2},{value:"State management",id:"state-management",level:2}],h={toc:d};function g(e){var t=e.components,l=(0,a.Z)(e,p);return(0,r.kt)("wrapper",(0,o.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-ui-components"},"Custom UI Components"),(0,r.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,r.kt)("p",null,"A very powerful feature of Noodl is the ability to create re-usable components easily. This guide will cover some useful patterns for create re-usable UI components. This guide will involve a bit of coding so it is good if you have some basic coding skills in Javascript and have read our previous guides on business logic in Javascript."),(0,r.kt)("h2",{id:"component-inputs-and-outputs"},"Component Inputs and Outputs"),(0,r.kt)("p",null,"The key to creating good re-usable components is to provide inputs and outputs that makes it useable. There are some good patterns to follow here and we will outline them here. We will start with a simple example where we create a component with a slider plus two labels. This is what it will look like:"),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(50146).Z,width:"1068",height:"194"}))),(0,r.kt)("p",null,"And here is the content of the component. This is a simple UI component that has a slider and two text labels. One label is simple the header for the slider, and the other is formatted using the ",(0,r.kt)("strong",{parentName:"p"},"String Format")," node and the current ",(0,r.kt)("strong",{parentName:"p"},"Value")," and the ",(0,r.kt)("strong",{parentName:"p"},"Max")," value."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)(i.Z,{json:{nodes:[{id:"f73a5d7c-7b0e-e7f1-18a0-537f50623b8d",type:"Group",x:0,y:0,parameters:{},ports:[],children:[{id:"5fb30353-669f-cee0-0339-e96608ad1478",type:"Text",x:20,y:202,parameters:{},ports:[],children:[]},{id:"62063b48-b2c8-cf28-1de2-d20c7866ef42",type:"net.noodl.controls.range",x:20,y:284,parameters:{marginBottom:{value:15,unit:"px"},marginTop:{value:15,unit:"px"}},ports:[],children:[]},{id:"fcee5809-211f-d59d-d566-7737e5383ceb",type:"Text",x:20,y:406,parameters:{alignX:"right",sizeMode:"contentSize",color:"Light Gray"},ports:[],children:[]}]},{id:"aaa82451-4b5d-874e-17c4-622b70e46249",type:"Component Inputs",x:-622.5,y:167,parameters:{},ports:[{name:"Label",plug:"output",type:{name:"*"},group:"Settings",index:0},{name:"Value",plug:"output",type:{name:"*"},group:"Settings",index:1},{name:"Max",plug:"output",type:{name:"*"},group:"Settings",index:2}],children:[]},{id:"1d8d66d2-b86d-6c90-a93c-8b3ffa7bfd56",type:"String Format",x:-184.5,y:377,parameters:{format:"{Value} / {Max}"},ports:[],children:[]},{id:"13725968-85f6-ee25-5e66-b7f208aac194",type:"Number",x:-387.5,y:364,parameters:{},ports:[],children:[]},{id:"f4d370e6-ec69-5459-49e9-9d258172c77a",type:"Component Inputs",x:-227.5,y:-20,parameters:{},ports:[{name:"Margin Left",plug:"output",type:{name:"*"},index:0},{name:"Margin Right",plug:"output",type:{name:"*"},index:1},{name:"Margin Bottom",plug:"output",type:{name:"*"},index:3},{name:"Margin Top",plug:"output",type:{name:"*"},index:2},{name:"Align X",plug:"output",type:{name:"*"},index:4},{name:"Align Y",plug:"output",type:{name:"*"},index:5},{name:"Position",plug:"output",type:{name:"*"},index:6}],children:[]},{id:"51777154-9afa-4aa7-515a-6164a47ba35e",type:"Component Outputs",x:321.5,y:287,parameters:{},ports:[{name:"Value",plug:"input",type:{name:"*"},index:1},{name:"Changed",plug:"input",type:{name:"*"},index:2}],children:[]}],connections:[{fromId:"aaa82451-4b5d-874e-17c4-622b70e46249",fromProperty:"Label",toId:"5fb30353-669f-cee0-0339-e96608ad1478",toProperty:"text"},{fromId:"aaa82451-4b5d-874e-17c4-622b70e46249",fromProperty:"Max",toId:"62063b48-b2c8-cf28-1de2-d20c7866ef42",toProperty:"max"},{fromId:"62063b48-b2c8-cf28-1de2-d20c7866ef42",fromProperty:"value",toId:"1d8d66d2-b86d-6c90-a93c-8b3ffa7bfd56",toProperty:"Value"},{fromId:"1d8d66d2-b86d-6c90-a93c-8b3ffa7bfd56",fromProperty:"formatted",toId:"fcee5809-211f-d59d-d566-7737e5383ceb",toProperty:"text"},{fromId:"aaa82451-4b5d-874e-17c4-622b70e46249",fromProperty:"Max",toId:"13725968-85f6-ee25-5e66-b7f208aac194",toProperty:"value"},{fromId:"13725968-85f6-ee25-5e66-b7f208aac194",fromProperty:"savedValue",toId:"1d8d66d2-b86d-6c90-a93c-8b3ffa7bfd56",toProperty:"Max"},{fromId:"aaa82451-4b5d-874e-17c4-622b70e46249",fromProperty:"Value",toId:"62063b48-b2c8-cf28-1de2-d20c7866ef42",toProperty:"value"},{fromId:"62063b48-b2c8-cf28-1de2-d20c7866ef42",fromProperty:"onChange",toId:"51777154-9afa-4aa7-515a-6164a47ba35e",toProperty:"Changed"},{fromId:"62063b48-b2c8-cf28-1de2-d20c7866ef42",fromProperty:"value",toId:"51777154-9afa-4aa7-515a-6164a47ba35e",toProperty:"Value"},{fromId:"f4d370e6-ec69-5459-49e9-9d258172c77a",fromProperty:"Align Y",toId:"f73a5d7c-7b0e-e7f1-18a0-537f50623b8d",toProperty:"alignY"},{fromId:"f4d370e6-ec69-5459-49e9-9d258172c77a",fromProperty:"Align X",toId:"f73a5d7c-7b0e-e7f1-18a0-537f50623b8d",toProperty:"alignX"},{fromId:"f4d370e6-ec69-5459-49e9-9d258172c77a",fromProperty:"Margin Top",toId:"f73a5d7c-7b0e-e7f1-18a0-537f50623b8d",toProperty:"marginTop"},{fromId:"f4d370e6-ec69-5459-49e9-9d258172c77a",fromProperty:"Margin Bottom",toId:"f73a5d7c-7b0e-e7f1-18a0-537f50623b8d",toProperty:"marginBottom"},{fromId:"f4d370e6-ec69-5459-49e9-9d258172c77a",fromProperty:"Margin Right",toId:"f73a5d7c-7b0e-e7f1-18a0-537f50623b8d",toProperty:"marginRight"},{fromId:"f4d370e6-ec69-5459-49e9-9d258172c77a",fromProperty:"Margin Left",toId:"f73a5d7c-7b0e-e7f1-18a0-537f50623b8d",toProperty:"marginLeft"},{fromId:"f4d370e6-ec69-5459-49e9-9d258172c77a",fromProperty:"Position",toId:"f73a5d7c-7b0e-e7f1-18a0-537f50623b8d",toProperty:"position"}],comments:[]},mdxType:"CopyToClipboardButton"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(92354).Z,width:"2292",height:"1096"}))),(0,r.kt)("p",null,"Let's take a closer look at the ",(0,r.kt)("strong",{parentName:"p"},"Component Inputs")," of this component. First we have a couple of inputs that are the basic settings for the component, the ",(0,r.kt)("strong",{parentName:"p"},"Label"),", ",(0,r.kt)("strong",{parentName:"p"},"Max")," and ",(0,r.kt)("strong",{parentName:"p"},"Value")," inputs. There are a couple of things to note about this component inputs. If you look at the ",(0,r.kt)("strong",{parentName:"p"},"Max")," input it is first connected to a ",(0,r.kt)("strong",{parentName:"p"},"Number")," node and then to the ",(0,r.kt)("strong",{parentName:"p"},"String Format")," node. This is a common pattern to ensure that the ",(0,r.kt)("strong",{parentName:"p"},"Max")," input is represented as a number in the property panel when this component is used. The component input will get the same type in the property panel, as the node it is connected to and in this case it is connected to both the ",(0,r.kt)("strong",{parentName:"p"},"Max")," of the ",(0,r.kt)("strong",{parentName:"p"},"Slider")," (which is a number) and the ",(0,r.kt)("strong",{parentName:"p"},"Max")," input of the ",(0,r.kt)("strong",{parentName:"p"},"String Format")," node which is a string. That fact that we go via a ",(0,r.kt)("strong",{parentName:"p"},"Number")," node will make sure the property panel knows what input field to show for that input."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(96766).Z,width:"1624",height:"642"}))),(0,r.kt)("p",null,"Another thing to note is that the ",(0,r.kt)("strong",{parentName:"p"},"Value")," component input is connected to the ",(0,r.kt)("strong",{parentName:"p"},"Value")," input of the ",(0,r.kt)("strong",{parentName:"p"},"Slider"),". Most UI Components is collecting some sort of data from the user, in this case it's a range value, it is very important that the data is also exposed as an input so that it can be properly connected to a data source."),(0,r.kt)("p",null,"Moving on to the component outputs. Here you of course need the ",(0,r.kt)("strong",{parentName:"p"},"Value")," as an output as well, so that the UI component can be used to collect data from the user. It is also important to have a ",(0,r.kt)("strong",{parentName:"p"},"Changed")," signal."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(86374).Z,width:"958",height:"298"}))),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("strong",{parentName:"p"},"Changed")," signal should ",(0,r.kt)("strong",{parentName:"p"},"ALWAYS")," be on a user input, not just if the ",(0,r.kt)("strong",{parentName:"p"},"Value")," input have changed. This is to make sure that the UI component doesn't report a change if the input value is changed. That can cause unnecessary data feedback loops."))),(0,r.kt)("p",null,"Finally it's a good idea to expose some minimum set of layout properties on the root node. This will make the UI component easier to use."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9220).Z,width:"954",height:"530"}))),(0,r.kt)("p",null,"You can choose yourself what you want to expose as inputs but here are a few recommendations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Margins")," At least exposing margins will remove the need for extra ",(0,r.kt)("strong",{parentName:"li"},"Group")," nodes when using your component."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Align")," It's also common to need to re-align your component when using it, providing this as an input is helpful."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Position")," Maybe not as common, but could still be good to expose.")),(0,r.kt)("h2",{id:"component-object"},"Component Object"),(0,r.kt)("p",null,"You have learnt how to use the ",(0,r.kt)("a",{parentName:"p",href:"/nodes/data/object/object-node"},"Object")," node in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/data/objects"},"working with data guides")," and how to connect it to UI controls in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/data/ui-controls-and-data"},"Connecting UI controls to data guide"),". There is another node which is very useful when working on re-usable UI componets and that is the ",(0,r.kt)("a",{parentName:"p",href:"/nodes/component-utilities/component-object"},"Component Object")," node. This node works just like the ",(0,r.kt)("strong",{parentName:"p"},"Object")," node except that it is unique to the component instance, so it will not be shared between component instances like regular objects. This is very useful when keeping the state of UI controls."),(0,r.kt)("p",null,"We will take a look at a very simple example below, the ",(0,r.kt)("strong",{parentName:"p"},"Segment Control")," UI Component."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)(s.Z,{zip:"/docs/guides/business-logic/custom-ui-components/segment-control-1.zip",name:"Segment Control",thumb:"/docs/guides/business-logic/custom-ui-components/segment-control.png",mdxType:"ImportButton"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(74510).Z,width:"886",height:"164"}))),(0,r.kt)("p",null,"This example actually contains two components the ",(0,r.kt)("strong",{parentName:"p"},"Segment Control")," component and the ",(0,r.kt)("strong",{parentName:"p"},"Segment Control Button")," component. What it does is that it accepts an array as input containing the possible options for the control, each object in the array should have a ",(0,r.kt)("strong",{parentName:"p"},"Label")," and a ",(0,r.kt)("strong",{parentName:"p"},"Value"),". It also accepts an input that is the current selected ",(0,r.kt)("strong",{parentName:"p"},"Value")," of the control, this should correspond to one of the values in the array and that button will be shown as selected (like radio buttons)."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(33848).Z,width:"1768",height:"842"}))),(0,r.kt)("p",null,"Here you can see how we use the ",(0,r.kt)("strong",{parentName:"p"},"Component Object")," node to store the currently ",(0,r.kt)("strong",{parentName:"p"},"Selected Value")," and how it is also passed through as the ",(0,r.kt)("strong",{parentName:"p"},"Value")," output. We will take a look at how it is used later. The options input array is used directly as items in the ",(0,r.kt)("strong",{parentName:"p"},"Repeater")," node. If we take a closer look at the ",(0,r.kt)("strong",{parentName:"p"},"Segment Control Button")," component (that is used as template in the repeater) we will see where the magic happends."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(29448).Z,width:"1892",height:"626"}))),(0,r.kt)("p",null,"Let's go over this one quickly:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Object")," node is used to connect the ",(0,r.kt)("strong",{parentName:"li"},"Label")," to the button. So each button that is created by the repeater will get the correct label."),(0,r.kt)("li",{parentName:"ul"},"Here we introduce a new action node, the ",(0,r.kt)("a",{parentName:"li",href:"/nodes/component-utilities/set-parent-component-object-properties"},"Set Parent Component Object Properties")," node that is used to set a property on the component object. But not the component object of this component instance, but instead it's closets visual parent. In this case (since this component is used as template in the repeater) it will be the ",(0,r.kt)("strong",{parentName:"li"},"Segment Control")," component. That is, each ",(0,r.kt)("strong",{parentName:"li"},"Segment Control Button")," component in the repeater will, when clicked, set it's ",(0,r.kt)("strong",{parentName:"li"},"Value")," as the ",(0,r.kt)("strong",{parentName:"li"},"Selected Value")," of the ",(0,r.kt)("strong",{parentName:"li"},"Component Object"),"."),(0,r.kt)("li",{parentName:"ul"},"Now we also use the ",(0,r.kt)("a",{parentName:"li",href:"/nodes/component-utilities/parent-component-object"},"Parent Component Object")," to compare the currently ",(0,r.kt)("strong",{parentName:"li"},"Selected Value")," with the ",(0,r.kt)("strong",{parentName:"li"},"Value")," of this segment control button, this is done in the ",(0,r.kt)("strong",{parentName:"li"},"Function")," node that takes both the currently selected value and the value from the repeater instance object as inputs. It has the following code:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'if(Inputs.SelectedValue == Inputs.MyValue)\n  Outputs.Variant = "Segment Control Button Selected"\nelse\n  Outputs.Variant = "Segment Control Button"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Here comes the next little trick. The ",(0,r.kt)("strong",{parentName:"li"},"Variant")," of the ",(0,r.kt)("strong",{parentName:"li"},"Button")," is choosen by the ",(0,r.kt)("strong",{parentName:"li"},"Function")," to be either ",(0,r.kt)("strong",{parentName:"li"},"Segment Control Button")," or ",(0,r.kt)("strong",{parentName:"li"},"Segment Control Button Selected"),". We have created two different ",(0,r.kt)("strong",{parentName:"li"},"Button")," variants with those names so we can design how we want the button to look if it is selected and not. Learn more about style variants in ",(0,r.kt)("a",{parentName:"li",href:"/docs/guides/user-interfaces/style-variants"},"this guide"),"."),(0,r.kt)("li",{parentName:"ul"},"Finally we send the ",(0,r.kt)("strong",{parentName:"li"},"Click")," signal from the button as ",(0,r.kt)("strong",{parentName:"li"},"Component Output")," from this component, this will allow us to use that signal from the ",(0,r.kt)("strong",{parentName:"li"},"Repeater")," node in the parent component.")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/nodes/component-utilities/component-object"},"Component Object")," and ",(0,r.kt)("a",{parentName:"p",href:"/nodes/component-utilities/parent-component-object"},"Parent Component Object")," nodes, and their action nodes to set properties, ",(0,r.kt)("a",{parentName:"p",href:"/nodes/component-utilities/set-component-object-properties"},"Set Component Object Properties")," and ",(0,r.kt)("a",{parentName:"p",href:"/nodes/component-utilities/set-parent-component-object-properties"},"Set Parent Component Object Properties")," are very useful when building re-usable UI components. We recommend storing the state of your UI component in these."),(0,r.kt)("h2",{id:"state-management"},"State management"),(0,r.kt)("p",null,"Some times you need to initialise your UI components when they are created. Then you can use the ",(0,r.kt)("strong",{parentName:"p"},"Did mount")," signal from the root UI element, often a ",(0,r.kt)("strong",{parentName:"p"},"Group")," node."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(51224).Z,width:"956",height:"286"}))),(0,r.kt)("p",null,"You can also access the ",(0,r.kt)("strong",{parentName:"p"},"Component Object")," and ",(0,r.kt)("strong",{parentName:"p"},"Parent Component Object")," from ",(0,r.kt)("strong",{parentName:"p"},"Function")," and ",(0,r.kt)("strong",{parentName:"p"},"Script")," nodes by simply writing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'Component.Object.MyValue = "Hello" \nComponent.Object["Selected Value"] = "Use this for properties with spaces"\n\nComponent.ParentObject.MyValue = "This works too"\n')),(0,r.kt)("p",null,"So this is a great place to initialise your ",(0,r.kt)("strong",{parentName:"p"},"Component Object")," when the UI component is created. "),(0,r.kt)("p",null,"Here is another interesting example to look at. This is a ",(0,r.kt)("strong",{parentName:"p"},"Multi Checkbox Group")," example. It takes two arrays as input, one with all possible options each with their\n",(0,r.kt)("strong",{parentName:"p"},"Value")," and ",(0,r.kt)("strong",{parentName:"p"},"Label")," and a second array which is the value, this array contains objects with just ",(0,r.kt)("strong",{parentName:"p"},"Value"),". So you can choose multiple options and not just one like the segment control. This is a little more complex so we wont go into detail here, but you can check out the example below and we will look at a few details."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)(s.Z,{zip:"multi-checkbox.zip",mdxType:"ImportButton"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(56559).Z,width:"872",height:"314"}))),(0,r.kt)("p",null,"If we take a close look at the nodes in the ",(0,r.kt)("strong",{parentName:"p"},"Multi Checkbox Group")," component, this is what we find:"),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(85888).Z,width:"1808",height:"756"}))),(0,r.kt)("p",null,"Here is we can see that if any of the ",(0,r.kt)("strong",{parentName:"p"},"Options")," or ",(0,r.kt)("strong",{parentName:"p"},"Selection")," inputs change, we will run a ",(0,r.kt)("strong",{parentName:"p"},"Function")," node. The code of that node is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"if(!Inputs.Options) return // No options, no fun\n\nComponent.Object.Checkboxes = Inputs.Options.map(o => Noodl.Object.create({\n    id:Component.Object.id+'-'+o.Value,\n    Value:o.Value,\n    Label:o.Label || o.Value,\n    Checked:Inputs.Selection!==undefined && !!Inputs.Selection.find(s => s.Value === o.Value)\n}))\n")),(0,r.kt)("p",null,"It creates a new array of objects in the ",(0,r.kt)("strong",{parentName:"p"},"Component Object")," called ",(0,r.kt)("strong",{parentName:"p"},"Checkboxes"),", these will get the value and label, and a ",(0,r.kt)("strong",{parentName:"p"},"Checked")," property that is true if that value is represented in the in the selection. This array is that is then used in the ",(0,r.kt)("strong",{parentName:"p"},"Repeater")," node to show all components. It is important that this function is re-run if the ",(0,r.kt)("strong",{parentName:"p"},"Options")," or ",(0,r.kt)("strong",{parentName:"p"},"Selection")," is changed so that the UI control will always show the correct state as corresponds to its inputs."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We set the ",(0,r.kt)("strong",{parentName:"p"},"id")," of the object. This makes sure that the ",(0,r.kt)("strong",{parentName:"p"},"Repeater")," doesn't create new items every time the array changes. This increases performance. "))),(0,r.kt)("p",null,"Another important thing to notice is that the ",(0,r.kt)("strong",{parentName:"p"},"Selection")," input is passed to the ",(0,r.kt)("strong",{parentName:"p"},"Component Object")," and then directly to the corresponding output. This is also very common."),(0,r.kt)("p",null,"Finally, we have another ",(0,r.kt)("strong",{parentName:"p"},"Function")," node that is run whenever the selection changes due to user input, just like the segment control component above this is sent out from the ",(0,r.kt)("strong",{parentName:"p"},"Repeater")," node. In this component we update the current ",(0,r.kt)("strong",{parentName:"p"},"Selection")," on the ",(0,r.kt)("strong",{parentName:"p"},"Component Object")," by filtering out the objects that currently are checked, and then filtering out the ",(0,r.kt)("strong",{parentName:"p"},"Value")," property for those objects. We update the ",(0,r.kt)("strong",{parentName:"p"},"Component Object")," which in turn will update the selection output."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"Component.Object.Selection = Component.Object.Checkboxes.filter(o => o.Checked).map(o => ({Value:o.Value}))\n")),(0,r.kt)("p",null,"If we look at the ",(0,r.kt)("strong",{parentName:"p"},"Multi Checkbox Group Item")," component we will see that it is very basic. It is simply a checkbox that with the corresponding ",(0,r.kt)("strong",{parentName:"p"},"Checked")," and ",(0,r.kt)("strong",{parentName:"p"},"Label")," from the object in the ",(0,r.kt)("strong",{parentName:"p"},"Checkboxes")," array that we created before. When the checkbox is updated we update the ",(0,r.kt)("strong",{parentName:"p"},"Checked")," value of the object and report the change."),(0,r.kt)("div",{className:"ndl-image-with-background xl"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(94380).Z,width:"1920",height:"550"}))),(0,r.kt)("p",null,"There you go, that's everything need to create a multi checkbox component. This pattern can be used to create all sorts of UI components with multi selection."))}g.isMDXComponent=!0},96766:function(e,t,n){t.Z=n.p+"assets/images/component-inputs-1-ae3ecab65f4e51fdc985d8148a9ed52f.png"},9220:function(e,t,n){t.Z=n.p+"assets/images/component-inputs-2-cc388b8db3e9f9e18313e44548426e77.png"},86374:function(e,t,n){t.Z=n.p+"assets/images/component-outputs-b6d2cd05fbe90aa658473f6d8bc362cf.png"},51224:function(e,t,n){t.Z=n.p+"assets/images/did-mount-d718da1edf989db22a3ab5d8a4c19364.png"},94380:function(e,t,n){t.Z=n.p+"assets/images/multi-checkbox-item-c884eb6b28c9d9311d251c35940cefe5.png"},85888:function(e,t,n){t.Z=n.p+"assets/images/multi-checkbox-nodes-af744c4cb71eefb9a66a60475ff773fb.png"},56559:function(e,t,n){t.Z=n.p+"assets/images/multi-checkbox-ef96d5ce8e2bf63e64ac90a7b30dce22.png"},29448:function(e,t,n){t.Z=n.p+"assets/images/segment-control-button-nodes-c72471bc662a8a1999288233774f69a2.png"},33848:function(e,t,n){t.Z=n.p+"assets/images/segment-control-nodes-9aef8983fe9b39235b5a2d2f95a78689.png"},74510:function(e,t,n){t.Z=n.p+"assets/images/segment-control-176d063312c9ee545303bf6d8489f487.png"},92354:function(e,t,n){t.Z=n.p+"assets/images/slider-with-label-nodes-e01b14bc5016df55368db4a8b910d544.png"},50146:function(e,t,n){t.Z=n.p+"assets/images/slider-with-label-1e7d542d80843f436296cf11570cb203.png"}}]);