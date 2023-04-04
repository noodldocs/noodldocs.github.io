"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[9542],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=h(n),u=o,m=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var h=2;h<i;h++)r[h]=n[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},33178:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return h},toc:function(){return d}});var a=n(83117),o=n(80102),i=(n(67294),n(3905)),r=["components"],s={title:"Develop with ChatGPT",hide_title:!0},l="Develop with ChatGPT",h={unversionedId:"getting-started/chat-gpt",id:"getting-started/chat-gpt",title:"Develop with ChatGPT",description:"ChatGPT is a great tool that is used daily to generate code by developers all over the world. However (being a language model and not a programming engine) it does come with its own set of quirks and limitations. In this guide we will look at tips, tricks and strategies for how to get around them, and see why ChatGPT is a great pairing with Noodl.",source:"@site/docs/getting-started/chat-gpt.md",sourceDirName:"getting-started",slug:"/getting-started/chat-gpt",permalink:"/2.8/docs/getting-started/chat-gpt",tags:[],version:"current",frontMatter:{title:"Develop with ChatGPT",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Fundamentals",permalink:"/2.8/docs/getting-started/fundamentals"},next:{title:"Building User Interfaces Basics",permalink:"/2.8/docs/guides/user-interfaces/basics"}},p={},d=[{value:"When to ChatGPT",id:"when-to-chatgpt",level:2},{value:"TL;DR:",id:"tldr",level:3},{value:"Priming for code generation",id:"priming-for-code-generation",level:2},{value:"Tips and tricks for prompting code",id:"tips-and-tricks-for-prompting-code",level:2},{value:"Benefits of a primer",id:"benefits-of-a-primer",level:3},{value:"Adding detail",id:"adding-detail",level:3},{value:"Partial rewrites",id:"partial-rewrites",level:3},{value:"Iterative prompting",id:"iterative-prompting",level:3},{value:"Refreshing ChatGPT&#39;s memory",id:"refreshing-chatgpts-memory",level:2},{value:"Research assistant",id:"research-assistant",level:2},{value:"Age of exploration",id:"age-of-exploration",level:2}],c={toc:d};function u(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"develop-with-chatgpt"},"Develop with ChatGPT"),(0,i.kt)("p",null,"ChatGPT is a great tool that is used daily to generate code by developers all over the world. However (being a language model and not a programming engine) it does come with its own set of quirks and limitations. In this guide we will look at tips, tricks and strategies for how to get around them, and see why ChatGPT is a great pairing with Noodl."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This guide is about how to use ",(0,i.kt)("a",{parentName:"p",href:"http://chat.openai.com"},"http://chat.openai.com")," as part of the development process.",(0,i.kt)("br",null),(0,i.kt)("br",null),"To use OpenAI as part of your application, check out the ",(0,i.kt)("a",{parentName:"p",href:"/library/prefabs/openai/"},"OpenAI prefab"),".")),(0,i.kt)("h2",{id:"when-to-chatgpt"},"When to ChatGPT"),(0,i.kt)("p",null,"One of the lesser known limitations of ChatGPT is that it works with a tiny token memory. The details are technical, and not too interesting in the context of this guide, so we won't go in on it too much. Really, the only thing you need to know is that ChatGPT has the memory of a goldfish, and will start forgetting things (including its own train of thought) pretty quickly if you feed it too much information."),(0,i.kt)("p",null,"This makes ChatGPT bad at handling large scale application code with many different moving parts. Using ChatGPT to code an application from scratch requires you to know how to program an application from scratch so that you can make up for all the mistakes the AI makes."),(0,i.kt)("p",null,"Another implication of the tiny memory is that it limits the amount of instructions we can provide. ChatGPT gives the best solutions when you are very descriptive with what you want to achieve, and a full application requires a lot of describing."),(0,i.kt)("p",null,"The best way to get good code from ChatGPT is really to break up your application into smaller modular pieces, generating those with AI, and gluing them together yourself."),(0,i.kt)("p",null,"This is where Noodl shines. Since one of the base concepts of Noodl is to break your application into smaller reusable components, we dont have to ask ChatGPT to generate a whole app for us. We can just ask it to do the boring, tedious or more complicated functions. This still requires a little bit of programming know-how, but thanks to Noodls seamless combination of visual and text-based programming you don't have to know how to write complex apps at scale and can instead focus on understanding the functionality at hand."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"While this guide is generally about ChatGPT you will get a lot more out of it if you already have some experience with Noodl. It might be a good idea to check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/fundamentals"},"Fundamentals")," guide, or do the interactive tutorials in the Noodl editor first."))),(0,i.kt)("h3",{id:"tldr"},"TL;DR:"),(0,i.kt)("p",null,"ChatGPT is great at generating code for Function and Script nodes, helping you connect to API's, work with external libraries, aggregating data or figuring out chunks of your app."),(0,i.kt)("p",null,"It's a good idea to modularize your functions into separate Function nodes, or combine multiple Function nodes in series in a component. This allows ChatGPT to shine in a smaller scope while allowing for great reusability within Noodl."),(0,i.kt)("p",null,"ChatGPT is also great as a search engine that you can have a conversation with. The ChatGPT model is trained on data up until 2021, so while it's not good for researching current events, it is very powerful with more general development patterns that can easily be translated into Noodl graphs."),(0,i.kt)("p",null,"Sidenote: We have been experimenting with generating full Noodl Node graphs, but due to the limited memory it's not too good at memorizing current documentation."),(0,i.kt)("h2",{id:"priming-for-code-generation"},"Priming for code generation"),(0,i.kt)("p",null,"If we want to use ChatGPT for code generation we have to be prepared to modify the code it gives us. That is just the current state of the AI. However, we can minimize the need for modifications if we start the chat with some instructions, giving ChatGPT a bit of context so that it understands what a Noodl function looks like, some rules for what it can/can't do and how to create inputs and outputs to the node. This is called a ",(0,i.kt)("em",{parentName:"p"},"primer"),", and here is one that we have been experimenting with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},'Hi ChatGPT. Here are your instructions. You must follow all of them.\n\n- You will be writing Noodl functions.\n- An input in a Noodl function must follow the format "Inputs.InputName".\n- An input in a Noodl function is only read, never written to.\n- An output in a Noodl function must follow the format "Outputs.OutputName = value".\n- A variable in a Noodl function never stores an output.\n- Sending a signal from a Noodl function must follow the format "Outputs.SignalName()".\n- Signals can not be passed values. All output values must be set as a Noodl function output.\n- Inputs and Outputs in a Noodl function are global.\n- Noodl functions do not use import statements.\n- Noodl functions do not use export statements.\n- Noodl functions can use recources from a CDN.\n- Noodl functions can access API endpoints with "fetch".\n- Define constants as Noodl function inputs.\n- A Noodl function follows this format:\n\n```js\nconst inputName = Inputs.InputName;\n\n// Check if the input has a value, otherwise return\nif (!inputName) return;\n\n// Perform the function logic\n```\n\nReply "Okidoki" if the instructions are clear, otherwise ask me to clarify\n')),(0,i.kt)("p",null,"This primer has given us great results so far - in many cases the snippets have worked with no modifications at all. Don't shy away from modifying it or trying a different approach though. ChatGPT is a complex technology, and new techniques and strategies are constantly being discovered. If you find something interesting, please don't shy away from sharing it with the community over at our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/invite/23xU2hYrSJ"},"Discord server"),"."),(0,i.kt)("h2",{id:"tips-and-tricks-for-prompting-code"},"Tips and tricks for prompting code"),(0,i.kt)("h3",{id:"benefits-of-a-primer"},"Benefits of a primer"),(0,i.kt)("p",null,"Using the primer above lets us use very sloppy prompts, while still getting a useful result:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(26530).Z,width:"786",height:"1274"})),(0,i.kt)("p",null,"Due to the primer, this result can be copied stright into a Function node without any modifications. Here is how it looks in a node graph with all the inputs and outputs:"),(0,i.kt)("div",{class:"ndl-image-with-background xl"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(85342).Z,width:"1254",height:"688"}))),(0,i.kt)("p",null,"All we needed to provide was an API key. Amazing!"),(0,i.kt)("h3",{id:"adding-detail"},"Adding detail"),(0,i.kt)("p",null,"The example above is very simple. The more complex functionality we want, the more specific we need to be. ChatGPT has a lot of imagination, and it's a good idea to leave it as little room for interpretation as possible."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(83091).Z,width:"786",height:"1523"})),(0,i.kt)("p",null,"This was my third attempt. In the first one I asked it to ",(0,i.kt)("em",{parentName:"p"},"prompt the user for their location"),". It then gave me a soultion using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Window.prompt()")," method. This opens up a system dialog with a text input where the user can type in the ",(0,i.kt)("inlineCode",{parentName:"p"},"latitude")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"longitude")," themselves. It bears noting that the last time ",(0,i.kt)("inlineCode",{parentName:"p"},"Window.prompt()")," was used in a serious project, the smartphone was still a new and revolutionary invention."),(0,i.kt)("p",null,"In the second attempt I asked it to ",(0,i.kt)("em",{parentName:"p"},"get the users location"),". Then it just assumed that the ",(0,i.kt)("inlineCode",{parentName:"p"},"latitude")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"longitude")," was a part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," object. Not specific enough."),(0,i.kt)("p",null,"The third attempt looks perfect, at least at a first glance. The users location is now gotten automatically."),(0,i.kt)("p",null,"The location was not the only issue though. If we take a closer look at the code we see that there are some places where ChatGPT didn't follow the prompt. We asked it to send an ",(0,i.kt)("inlineCode",{parentName:"p"},"Outputs.UserFailed()")," if ",(0,i.kt)("inlineCode",{parentName:"p"},"user.firstName")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"user.lastName")," where missing. Instead it sends the ",(0,i.kt)("inlineCode",{parentName:"p"},"UserFailed")," signal if it cant find a user of the right ID. It also sends ",(0,i.kt)("inlineCode",{parentName:"p"},"MapboxData")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"FullName")," separately. It ",(0,i.kt)("em",{parentName:"p"},"almost")," does what we told it. Discrepancies like this can happen anywhere in the generated code, so it's always a good idea to look over the code you get."),(0,i.kt)("p",null,"These off-prompt moments are not only a bad thing though. As an example, we didn't ask ChatGPT to exit the function using ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," when after sending the ",(0,i.kt)("inlineCode",{parentName:"p"},"UserFailed")," signal, but it was clever enough to assume that we didn't want the function to continue running without a user."),(0,i.kt)("h3",{id:"partial-rewrites"},"Partial rewrites"),(0,i.kt)("p",null,"If we find that parts of the code doesn't fit us, we can always ask ChatGPT to iterate on it."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(86039).Z,width:"789",height:"1390"})),(0,i.kt)("p",null,"It now exits the function when it should, and outputs the data properly. There are still unnecessary checks made for ",(0,i.kt)("inlineCode",{parentName:"p"},"firstName")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"lastName")," when building the ",(0,i.kt)("inlineCode",{parentName:"p"},"fullName"),". They will not throw any errors, or mess up the function in any other way, and the performance hit is so small that it can be ignored, but if we want to keep the code clean we can just manually remove those two lines."),(0,i.kt)("h3",{id:"iterative-prompting"},"Iterative prompting"),(0,i.kt)("p",null,"If we want even more control we can prompt our function in smaller steps. Let's generate a function that does a device generalisation based on the viewport width."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(22847).Z,width:"787",height:"544"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(68723).Z,width:"787",height:"672"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(27644).Z,width:"788",height:"850"})),(0,i.kt)("p",null,"Note that I asked for ",(0,i.kt)("inlineCode",{parentName:"p"},"widths")," but it gave me heights as well! Let's clear that up."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(69462).Z,width:"787",height:"740"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(81433).Z,width:"790",height:"840"})),(0,i.kt)("p",null,"Here I realize that I made two mistakes. First of all, I was hoping for ChatGPT to be a bit clever and assume that I meant to check for a value inside of the desktop range. Instead it tries to match an exact width, which will fail if the browser is resized. The second error was to output a ",(0,i.kt)("inlineCode",{parentName:"p"},"IsDesktop")," boolean. If we check for ranges with the given sizes, there will be a gap between desktop and mobile. Let's make a lazy fix."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(30272).Z,width:"792",height:"1261"})),(0,i.kt)("p",null,"Now, this is not a perfect function by far. Good thing is that this prompting could go on and on, until we have a function that gives us perfect detection. Just remember the goldfish token memory, and that you might need to reprime the AI after a while."),(0,i.kt)("h2",{id:"refreshing-chatgpts-memory"},"Refreshing ChatGPT's memory"),(0,i.kt)("p",null,"If you notice that you start getting answers that stray too far off from things you have told ChatGPT earlier, it is a good idea to reprime the memory. This can be easily done by starting a new chat and sending the primer again. After that you can paste in the function you are working with, together with new instructions on how how you want the function to be modified."),(0,i.kt)("h2",{id:"research-assistant"},"Research assistant"),(0,i.kt)("p",null,"Another interesting use apart from generating code is to use it for research. Finding relevant information can be complicated, especially for more abstract concepts. ChatGPT is great for giving you a kickstart:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(78354).Z,width:"791",height:"993"})),(0,i.kt)("p",null,"In the same way we can easily ask follow-up questions:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(16238).Z,width:"789",height:"860"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(70645).Z,width:"789",height:"339"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(88470).Z,width:"788",height:"389"})),(0,i.kt)("p",null,"(This might not be the best example if there are any newer API's than 2021, or if anyone of them updated ther pricing, etc. It works for the most part though!)"),(0,i.kt)("h2",{id:"age-of-exploration"},"Age of exploration"),(0,i.kt)("p",null,"While a lot is known about ChatGPT, there are still a lot of dark spots on the AI-map. New strategies, primers, tips and tricks are invented and uncovered every day. If you have found something that we havent touched upon here and feel like sharing it, please hop on in to the #chat-gpt channel on our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/invite/23xU2hYrSJ"},"Discord server"),". Exploration is more fun together, and we all stand on the shoulders of each other in this exciting new step within technology."))}u.isMDXComponent=!0},22847:function(e,t,n){t.Z=n.p+"assets/images/chain-prompt-1-1ec28fbb3b9e61e4a6514f7b77c8605c.png"},68723:function(e,t,n){t.Z=n.p+"assets/images/chain-prompt-2-611ebd32c0756b2c4362537489e9dd1e.png"},27644:function(e,t,n){t.Z=n.p+"assets/images/chain-prompt-3-5655781c1e3d1384fe129879b1d00823.png"},69462:function(e,t,n){t.Z=n.p+"assets/images/chain-prompt-4-9a48bd7af8a5316d118af1b559223b27.png"},81433:function(e,t,n){t.Z=n.p+"assets/images/chain-prompt-5-ed08610128a715e49d7c64d36e29ce6d.png"},30272:function(e,t,n){t.Z=n.p+"assets/images/chain-prompt-6-55fe948540de61e852de115c1c7e7d56.png"},83091:function(e,t,n){t.Z=n.p+"assets/images/detailed-prompt-084714a1e00d7d5a3584ab689aed81a1.png"},86039:function(e,t,n){t.Z=n.p+"assets/images/iterate-prompt-cb2f7fa0015ca037b6a4fa662557e6da.png"},16238:function(e,t,n){t.Z=n.p+"assets/images/research-1-f93adcbb37cee86be522087bebd125ae.png"},70645:function(e,t,n){t.Z=n.p+"assets/images/research-2-f1770f8bbf7325f0475e347c48622c1a.png"},88470:function(e,t,n){t.Z=n.p+"assets/images/research-3-b07c2614208e7012c539ccb776bc3f15.png"},78354:function(e,t,n){t.Z=n.p+"assets/images/research-4-4d3eb951c3bd91bc9d9847c74f625485.png"},85342:function(e,t,n){t.Z=n.p+"assets/images/sloppy-prompt-connected-b4798ea24a42cb9b39f1d655580e7b1a.png"},26530:function(e,t,n){t.Z=n.p+"assets/images/sloppy-prompt-cb8599c34de6cd37a2310c98c4435209.png"}}]);