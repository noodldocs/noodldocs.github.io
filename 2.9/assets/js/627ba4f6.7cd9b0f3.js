"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[9259],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||s;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var i=2;i<s;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const s={hide_title:!0,title:"REST"},o=void 0,l={unversionedId:"data/rest/README",id:"data/rest/README",title:"REST",description:"This node is used to connect to external REST endpoints to make requests and expose data. It supports request content in JSON format.",source:"@site/nodes/data/rest/README.md",sourceDirName:"data/rest",slug:"/data/rest/",permalink:"/2.9/nodes/data/rest/",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0,title:"REST"},sidebar:"nodeSidebar",previous:{title:"Set User Properties",permalink:"/2.9/nodes/data/user/set-user-properties/"},next:{title:"Expression",permalink:"/2.9/nodes/math/expression/"}},p={},i=[{value:"Request and response script",id:"request-and-response-script",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},{value:"Array Example",id:"array-example",level:4},{value:"Object Example",id:"object-example",level:4},{value:"Inputs",id:"inputs",level:2},{value:"Request and response inputs",id:"request-and-response-inputs",level:3},{value:"Outputs",id:"outputs",level:2},{value:"Request and response outputs",id:"request-and-response-outputs",level:3}],u={toc:i},d="wrapper";function c(e){let{components:t,...s}=e;return(0,r.kt)(d,(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h1",{id:"rest"},"REST"),(0,r.kt)("p",null,"This node is used to connect to external ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"REST")," endpoints to make requests and expose data. It supports request content in ",(0,r.kt)("strong",{parentName:"p"},"JSON")," format."),(0,r.kt)("div",{className:"ndl-image-with-background l"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(79499).Z,width:"994",height:"482"}))),(0,r.kt)("p",null,"You initiate the request by sending a ",(0,r.kt)("span",{className:"ndl-signal"},"signal")," to the ",(0,r.kt)("span",{className:"ndl-signal"},"Fetch")," input. Any inputs and outputs to the node are specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"request")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"response")," scripts."),(0,r.kt)("p",{className:"is-hidden"},""),(0,r.kt)("h2",{id:"request-and-response-script"},"Request and response script"),(0,r.kt)("p",null,"The REST node uses a script much like the ",(0,r.kt)("a",{parentName:"p",href:"/nodes/javascript/script"},"Script")," node to prepare the request and parse the response.\nAny variables with the prefix ",(0,r.kt)("strong",{parentName:"p"},"Inputs.")," and ",(0,r.kt)("strong",{parentName:"p"},"Outputs.")," will be exposed as inputs and outputs to the node. So you can use these inputs in the request script to prepare the REST call, and the outputs in the response script to parse the response into outputs."),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("p",null,"The first script is used to prepare the request before it is sent to the REST endpoint.\nThe ",(0,r.kt)("em",{parentName:"p"},"Inputs")," object contains the values of the inputs specified in the section above at the time the\nrequest was initiated. The ",(0,r.kt)("em",{parentName:"p"},"Request")," object contains details on the request that can be adjusted if necessary."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"resource")," - Contains the resource for the request, i.e. the URL."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"method")," - Contains the method of the request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"headers")," - This is a map containing all headers to the request, add or remove headers in the function."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"parameters")," - This is a map containing all parameters that will be appended to the URL of the request, add or remove in the function."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"content")," - Contains the content of the request, the content will be encoded as JSON when the request is made.")),(0,r.kt)("p",null,"The example below will create two inputs that you can connect to this node from other data in your applications. It modifies the headers and content for the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'Request.headers["some-important-header"] = Inputs.ImportantHeader;\nRequest.content = {\n  "send-me": Inputs.SendMe,\n};\n')),(0,r.kt)("p",null,"When the request is completed and we have a response the corresponding response function will be invoked."),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("p",null,"In the response function, you can parse the response and set the appropriate outputs of the REST node using the ",(0,r.kt)("em",{parentName:"p"},"Outputs")," map\nprovided as an argument to the ",(0,r.kt)("em",{parentName:"p"},"response")," function. In the function, you will also have access to an object called ",(0,r.kt)("em",{parentName:"p"},"Response")," with the following content."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"status")," - The status code of the response."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"content")," - The content of the response."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"request")," - This contains the request object from the ",(0,r.kt)("em",{parentName:"li"},"request")," function above that was used to make the request.")),(0,r.kt)("p",null,"The REST node looks at the ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type")," header to determine how to parse the response from the server. If the type is JSON it will use ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.parse")," and for XML it'll convert it to a JavaScript object."),(0,r.kt)("h4",{id:"array-example"},"Array Example"),(0,r.kt)("p",null,"The following example assumes the response content is an array of objects.\nIt is converted to a Noodl Array with Noodl Objects and sends it to the output ",(0,r.kt)("strong",{parentName:"p"},"Items"),"."),(0,r.kt)("p",null,"Example Response Content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "MyValue": 1\n  },\n  {\n    "MyValue": 2\n  }\n]\n')),(0,r.kt)("p",null,"Script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"Outputs.Items = Response.content.map((o) => Noodl.Object.create(o));\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Items")," is now an array that can be sent to a Repeater or used in another node."),(0,r.kt)("h4",{id:"object-example"},"Object Example"),(0,r.kt)("p",null,"The following example assumes the response content is an object.\nIt converts the object to a Noodl Object and sends it to the output ",(0,r.kt)("strong",{parentName:"p"},"Items"),"."),(0,r.kt)("p",null,"Example Response Content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "my title",\n  "description": "my cool description"\n}\n')),(0,r.kt)("p",null,"Script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"Outputs.Item = Noodl.Object.create(Response.content);\n")),(0,r.kt)("p",null,"We can also call ",(0,r.kt)("inlineCode",{parentName:"p"},"Response.content.description")," immediately to extract certain properties. "),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Fetch")),(0,r.kt)("td",{parentName:"tr",align:null},"Connect a signal to this input to trigger a request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Cancel")),(0,r.kt)("td",{parentName:"tr",align:null},"Send a signal to this input to cancel an ongoing request.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Resource")),(0,r.kt)("td",{parentName:"tr",align:null},"This is the resource endpoint that the REST request will use, i.e. the url.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Method")),(0,r.kt)("td",{parentName:"tr",align:null},"This is the method that will be used for the request. Supported methods are GET, PUT, POST, PATCH and DELETE.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Request")),(0,r.kt)("td",{parentName:"tr",align:null},"Here you can edit the request script.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-data"},"Response")),(0,r.kt)("td",{parentName:"tr",align:null},"Here you can edit the response script.")))),(0,r.kt)("h3",{id:"request-and-response-inputs"},"Request and response inputs"),(0,r.kt)("p",null,"Any variable of the ",(0,r.kt)("strong",{parentName:"p"},"Inputs")," object that you access in your scrips will automatically become an input of the node."),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Success")),(0,r.kt)("td",{parentName:"tr",align:null},"A signal will be emitted on this output if the request receives a successful status code (2XX).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Failure")),(0,r.kt)("td",{parentName:"tr",align:null},"A signal will be emitted on this output on all other status codes of if another type of failure occurs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"ndl-signal"},"Canceled")),(0,r.kt)("td",{parentName:"tr",align:null},"A signal will be emitted on this output if the request was canceled.")))),(0,r.kt)("h3",{id:"request-and-response-outputs"},"Request and response outputs"),(0,r.kt)("p",null,"Any variable of the ",(0,r.kt)("strong",{parentName:"p"},"Outputs")," object that you access in your scrips will automatically become an output of the node."))}c.isMDXComponent=!0},79499:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rest-1-a238c05f977f4b13a12585a1da147c3d.png"}}]);