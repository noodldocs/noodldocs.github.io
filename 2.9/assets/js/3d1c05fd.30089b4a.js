"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[3383],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var A=o.createContext({}),l=function(e){var t=o.useContext(A),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(A.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,A=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,u=d["".concat(A,".").concat(g)]||d[g]||c[g]||i;return n?o.createElement(u,r(r({ref:t},p),{},{components:n})):o.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=g;var s={};for(var A in t)hasOwnProperty.call(t,A)&&(s[A]=t[A]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},52228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const i={title:"REST API calls",hide_title:!0},r="Create REST API calls with Chat GPT",s={unversionedId:"getting-started/ai-assisted-dev/rest",id:"getting-started/ai-assisted-dev/rest",title:"REST API calls",description:"In Noodl you typically use the REST node to make REST API requests to access external services. This requires a little bit of coding to set up the request and to parse the response. It also requires a bit of knowlege to figure out how the API you want to use work and to read the documentaion.",source:"@site/docs/getting-started/ai-assisted-dev/rest.md",sourceDirName:"getting-started/ai-assisted-dev",slug:"/getting-started/ai-assisted-dev/rest",permalink:"/2.9/docs/getting-started/ai-assisted-dev/rest",draft:!1,tags:[],version:"current",frontMatter:{title:"REST API calls",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Develop with ChatGPT",permalink:"/2.9/docs/getting-started/ai-assisted-dev/chat-gpt"},next:{title:"Building User Interfaces Basics",permalink:"/2.9/docs/guides/user-interfaces/basics"}},A={},l=[{value:"Priming for REST node scripts",id:"priming-for-rest-node-scripts",level:2},{value:"Refining your answer",id:"refining-your-answer",level:2},{value:"Providing context",id:"providing-context",level:2}],p={toc:l},d="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-rest-api-calls-with-chat-gpt"},"Create REST API calls with Chat GPT"),(0,a.kt)("p",null,"In Noodl you typically use the ",(0,a.kt)("a",{parentName:"p",href:"/nodes/data/rest"},"REST")," node to make REST API requests to access external services. This requires a little bit of coding to set up the request and to parse the response. It also requires a bit of knowlege to figure out how the API you want to use work and to read the documentaion."),(0,a.kt)("div",{class:"ndl-image-with-background xl"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(92062).Z,width:"707",height:"433"}))),(0,a.kt)("p",null,"The example above is a non-trival REST API request. It takes the name of a wikipedia page and retrieves the main image of that page in a given size. This would certainly take me a few minutes to figure out how to do and it's quite tedious and non-interesting work. A ",(0,a.kt)("a",{parentName:"p",href:"/nodes/data/rest"},"REST")," node requires four important parts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Endpoint")," The HTTP endpoint of the REST API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Method")," The method of the API call, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"POST")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"GET"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Request script")," This is a piece of javascript code that, given the node inputs, sets up all the parameters and content to be passed to the REST API call."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Response script")," This is another javascript snippet that parses the received response and turns it into node outputs.")),(0,a.kt)("div",{class:"ndl-image-with-background l"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(49327).Z,width:"529",height:"454"}))),(0,a.kt)("p",null,"Let's see how we can use AI assisted development in Noodl to achieve this."),(0,a.kt)("h2",{id:"priming-for-rest-node-scripts"},"Priming for REST node scripts"),(0,a.kt)("p",null,"We will be using ChatGPT with GPT-4. The key is getting it to generate all the content we need for the REST node to work from just a single prompt. To do this we need to first provide the AI with the context, this is really the key to get it to work nicely with Noodl. This is called a ",(0,a.kt)("em",{parentName:"p"},"primer"),", and here is one that we have been experimenting with for ",(0,a.kt)("a",{parentName:"p",href:"/nodes/data/rest"},"REST")," nodes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'Hi ChatGPT. Here are your instructions. You must follow all of them.\n\n- You will be writing Noodl in javascript functions for Noodl REST API calls.\n- An input in a Noodl function must follow the format "Inputs.InputName".\n- An input in a Noodl function is only read, never written to.\n- An output in a Noodl function must follow the format "Outputs.OutputName = value".\n- A variable in a Noodl function never stores an output.\n- Inputs and Outputs in a Noodl function are global.\n- Noodl functions do not use import statements.\n- Noodl functions do not use export statements.\n- Define constants as Noodl function inputs.\n- You need to create two functions, one to prepare the REST API request and one to process the response.\n- The function to prepare the request have the following format. It is called the "Request script". You don\'t need to wrap it in a function, just the javascript code. \n\n```js\n// All REST options should be set on the Request object as follows\n// Put the headers needed for the API call in the headers object\n// You don\'t need to set the content-type to application/json this is done automatically\nRequest.headers[\'authorization\'] = "Bearer " + Inputs.APIKey;\n\n// Put any query parameters needed for the API call in the parameters object\nRequest.parameters[\'limit\'] = Inputs.NumberOfItems;\n\n// If you are doing a POST method request, but the content in the content object\n// No need to stringify, only a standard JSON object\nRequest.content = {\n    \'param\' : \'something\'\n}\n```\n\n- The function to parse the result of the REST API request have the following format.  It is called the "Response script". You don\'t need to wrap it in a function, just the javascript code.\n\n```js\n// The content of the response is in the Response.content object\nOutputs.Results = Response.content.results;\n\n```\n\n- Finally list the endpoint and the HTTP method in the following format. The endpoint can contain parameters using the {paramName} syntax.\n\nEndpoint: https://example-endpoint.com/{userId}/fetch\nMethod: POST\n\nReply "Okidoki" if the instructions are clear, otherwise ask me to clarify\n')),(0,a.kt)("p",null,"Copy and pasting this primer into ChatGPT GPT-4 and then following up with this prompt:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"given a wikipedia page name, get the main image of that page\n")),(0,a.kt)("p",null,"The nice little robot now gives us everything we need to prepare the REST node. After a quick description we get the request and response scripts we need:"),(0,a.kt)("div",{class:"ndl-image-with-background xl"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(86662).Z,width:"832",height:"676"}))),(0,a.kt)("p",null,"We can simply copy and paste those into the corresponding properties of the REST node. Next we get the ",(0,a.kt)("strong",{parentName:"p"},"Endpoint")," and ",(0,a.kt)("strong",{parentName:"p"},"Method")," nicely listed for us. We also copy these parameters into REST node properties. It even provides us with a little bit of explaination of how to set up the inputs and how to use the outputs of the node."),(0,a.kt)("div",{class:"ndl-image-with-background xl"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(89675).Z,width:"754",height:"363"}))),(0,a.kt)("p",null,"We can now hook up the REST node as shown in the example above and simply put in a Wikipedia page name and provide a size of the image and we get the resulting URL back that we can connect to an image node."),(0,a.kt)("h2",{id:"refining-your-answer"},"Refining your answer"),(0,a.kt)("p",null,"Sometimes you will get an answer back that may be correct but you don't know exactly what the result is. You can always hook it up in Noodl and just test it, view the outputs and see if the result matches your expectations. Or you can simply ask Chat GPT. In this example I asked it to create a spotify API integration, the prompt was:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"get the songs of a playlist using the spotify API\n")),(0,a.kt)("p",null,"It provided me with everything I needed to copy and paste into the REST node."),(0,a.kt)("div",{class:"ndl-image-with-background xl"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(26559).Z,width:"817",height:"520"}))),(0,a.kt)("p",null,"But I wasn't sure about what the content of the output was, so I asked:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"What is the format of an object in the songs output?\n")),(0,a.kt)("p",null,"And it give me a rought outline of the object along with a few examples. "),(0,a.kt)("p",null,"If you find that the inputs and outputs are not to your liking, or that it did not exactly do what you were asking for simply try providing it more context and ask it to change the code."),(0,a.kt)("h2",{id:"providing-context"},"Providing context"),(0,a.kt)("p",null,"The ChatGPT models were trained on data up to 2021 so it's clearly missing some more recent APIs, such as actually it's own API. But you can provide context when asking it to generate code for you."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"using this api https://platform.openai.com/docs/api-reference/chat/create I want to provide messages as an array of string and get the response back\n")),(0,a.kt)("div",{class:"ndl-image-with-background xl"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(35850).Z,width:"873",height:"989"}))),(0,a.kt)("p",null,"It gives you a nice piece of code, but after copy&pasting it into my REST node and testing it on an exampt, it does not give the expected result. In this case I just get an array of ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),", thats weird. Lets see what ChatGPT thinks about that."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"I just got an array of undefined back \n")),(0,a.kt)("p",null,"It fixes the problem and gives you a new updated function. This works much better. That is pretty astounding!"),(0,a.kt)("div",{class:"ndl-image-with-background xl"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(21648).Z,width:"808",height:"425"}))),(0,a.kt)("p",null,"Sometimes the REST call will fail and generate an HTTP error. If the error is not shown on the REST node you can find the error in the web debugger. If you are on the frontend click on the debug icon at the top bar:"),(0,a.kt)("div",{class:"ndl-image-with-background m"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(86158).Z,width:"224",height:"37"}))),(0,a.kt)("p",null,"If you are in a cloud function, open the debugger for the cloud function runtime:"),(0,a.kt)("div",{class:"ndl-image-with-background m"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(20239).Z,width:"298",height:"51"}))),(0,a.kt)("p",null,"In the debugger look for the ",(0,a.kt)("strong",{parentName:"p"},"Network")," tab:"),(0,a.kt)("div",{class:"ndl-image-with-background m"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(40341).Z,width:"100",height:"38"}))),(0,a.kt)("p",null,"Any failed calls will generally be highlighted in red, you can find your endpoint and look at the response from the request. See if you can find an error message and let ChatGPT know about the error and try to have it fix it."),(0,a.kt)("p",null,"Have fun playing with Noodl and AI assisted development and let us know of your discoveries in the Discord community!"))}c.isMDXComponent=!0},86158:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},20239:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},86662:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/gpt-1-c57949caab46c93d5caaea7f255a189a.png"},89675:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/gpt-2-66e9d008aa11cad5128b4f6293de5b6c.png"},26559:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/gpt-3-da1fbbaf5662d8335b5ad1d4611902e9.png"},35850:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/gpt-4-30026338078dd80671edb0bb13cdd10c.png"},21648:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/gpt-5-cb09a38ad647c2bf9cdf2348c3b1e6f7.png"},40341:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},92062:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/rest-node-f07b5cfe5930d5e57c9ac6523ebf8dc1.png"},49327:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/screenshot-598378fbc53828f1e3257980d85f3e94.png"}}]);