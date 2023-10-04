"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[1142],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var A=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);t&&(A=A.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,A)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,A,o=function(e,t){if(null==e)return{};var n,A,o={},a=Object.keys(e);for(A=0;A<a.length;A++)n=a[A],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(A=0;A<a.length;A++)n=a[A],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=A.createContext({}),s=function(e){var t=A.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return A.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return A.createElement(A.Fragment,{},t)}},g=A.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),h=s(n),g=o,d=h["".concat(l,".").concat(g)]||h[g]||c[g]||a;return n?A.createElement(d,i(i({ref:t},p),{},{components:n})):A.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[h]="string"==typeof e?e:o,i[1]=r;for(var s=2;s<a;s++)i[s]=n[s];return A.createElement.apply(null,i)}return A.createElement.apply(null,n)}g.displayName="MDXCreateElement"},22226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var A=n(87462),o=(n(67294),n(3905));const a={title:"PDF Export",hide_title:!0},i="PDF Export",r={unversionedId:"prefabs/pdf/README",id:"prefabs/pdf/README",title:"PDF Export",description:"This prefab only works on Noodl hosted cloud services.",source:"@site/library/prefabs/pdf/README.md",sourceDirName:"prefabs/pdf",slug:"/prefabs/pdf/",permalink:"/2.9/library/prefabs/pdf/",draft:!1,tags:[],version:"current",frontMatter:{title:"PDF Export",hide_title:!0},sidebar:"PDFExportSidebar"},l={},s=[{value:"The PDF Page",id:"the-pdf-page",level:2},{value:"The PDF export cloud function",id:"the-pdf-export-cloud-function",level:2},{value:"Hooking it up",id:"hooking-it-up",level:2},{value:"User sessions",id:"user-sessions",level:2}],p={toc:s},h="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,A.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pdf-export"},"PDF Export"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This prefab only works on Noodl hosted cloud services.")),(0,o.kt)("p",null,"It's recommended that you have a grasp of the following concepts before diving into this prefab:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/navigation/basic-navigation"},"Page Navigation")," - How to create pages and navigate between them."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides//cloud-logic/introduction"},"Cloud Functions")," - How to create cloud functions and run logic on the backend.")),(0,o.kt)("p",null,"Here is a nifty prefab for exporting / generating PDFs. Exporting a PDF involves two components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A PDF Page")," This needs to be a page in your applications that is accessible externally. This page will be turned into a PDF in the next step."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A PDF export cloud function")," This is a cloud function that will perform the PDF export, the exported PDF will be uploaded as a file to the cloud service and you will receive a URL that can be send to the frontend and opened in a new tab.")),(0,o.kt)("p",null,"Let's review the two components one by one:"),(0,o.kt)("h2",{id:"the-pdf-page"},"The PDF Page"),(0,o.kt)("p",null,"First you need to create a Noodl page in a page router that will be accessible at a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," when you deploy the application. This web page should contain the content pages of your PDF. We have found that you get the best result when simply stacking groups on top of each other as shown below:"),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(31520).Z,width:"707",height:"389"}))),(0,o.kt)("p",null,"We also recommend setting the dimensions of each page to explicit values as shown below:"),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1128).Z,width:"289",height:"190"}))),(0,o.kt)("p",null,"In this way you can put the content of each page within these groups. You could also use a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/ui-controls/repeater"},"Repeater")," to dynamically generate the pages with data. You need to make sure that the page is publicly available so it doesn't require a login for any data you put on the pages. Here is an example: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://pdf-test.sandbox.noodl.app/pdf"),"."),(0,o.kt)("h2",{id:"the-pdf-export-cloud-function"},"The PDF export cloud function"),(0,o.kt)("p",null,"The second step is to create a cloud function that performs the PDF export and returns a URL with the ready PDF. After cloning the prefab into your project you will have "),(0,o.kt)("div",{className:"ndl-image-with-background m"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(31487).Z,width:"298",height:"143"}))),(0,o.kt)("p",null,"The cloud function ",(0,o.kt)("inlineCode",{parentName:"p"},"Create PDF")," will simply create a PDF from a prodived web page URL, upload the file and return the URL. The content of the cloud functions is very simple:"),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(22758).Z,width:"832",height:"405"}))),(0,o.kt)("p",null,"The request is connected to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Generate PDF")," logic component that does the PDF export and when it succeeds the url with the location of the PDF is returned in the request."),(0,o.kt)("h2",{id:"hooking-it-up"},"Hooking it up"),(0,o.kt)("p",null,"Here is a very simple example of to hook it up in your application. When the button is clicked the cloud function is called with a string with the URL of the web page that should be made into a PDF."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(34489).Z,width:"846",height:"358"}))),(0,o.kt)("p",null,"When the cloud function completes the url to the exported PDF is sent to an ",(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/external-link"},"External Link")," node that opens the url in a new tab and the browser will show a preview of the PDF."),(0,o.kt)("p",null,"The PDF generation generally takes a second or two, so it's good to show something like a ",(0,o.kt)("a",{parentName:"p",href:"/library/prefabs/loading-spinner"},"Loading Spinner")," while processing."),(0,o.kt)("h2",{id:"user-sessions"},"User sessions"),(0,o.kt)("p",null,"Often the web page that has the content of the PDF requires access the cloud database to include data in the document. This data should generally be protected with ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/cloud-data/access-control"},"Access Control")," so only users with permissions can access. But the page used to export the PDF will not have a valid user session as it's only used in the export process. We can solve this by providing a session token as a query parameter to the page."),(0,o.kt)("p",null,"There is a second cloud function called ",(0,o.kt)("inlineCode",{parentName:"p"},"Create PDF With Session")," that helps us do this, it works like the other but it first fetches a session for the user calling the cloud function (this cloud function requires authentication on the front end to be called). The session is appended to the provided page url, as seen below:"),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(88662).Z,width:"1032",height:"356"}))),(0,o.kt)("p",null,"To use the session token on the frontend you need to extract it from the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/navigation/page-inputs"},"Page Inputs")," and feed into a function node with this code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'if(Inputs.SessionToken) {\n    try {\n        await Noodl.Users.become(Inputs.SessionToken);\n    }\n    catch(e) {\n        Outputs.Failure();\n        throw e;\n    }\n\n    Outputs.Success();\n}\nelse {\n    Outputs.Failure();\n    throw Error("No session token provided");\n}\n')),(0,o.kt)("p",null,'This code will use the provided session token to authenticate and "become" the user that the session token is valid for. Here is an example of how you can add the user email address to the PDF content.'),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(70695).Z,width:"1015",height:"594"}))))}c.isMDXComponent=!0},31487:(e,t,n)=>{n.d(t,{Z:()=>A});const A="data:image/png;base64,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"},88662:(e,t,n)=>{n.d(t,{Z:()=>A});const A=n.p+"assets/images/create-pdf-session-60f5f4abd9025139aeae1fb77dec7851.png"},22758:(e,t,n)=>{n.d(t,{Z:()=>A});const A=n.p+"assets/images/create-pdf-63188db7d447b1cb94b0af3a397e4c55.png"},34489:(e,t,n)=>{n.d(t,{Z:()=>A});const A=n.p+"assets/images/hook-up-1-1e54ac458b891b70bcc3977bb61e71c4.png"},70695:(e,t,n)=>{n.d(t,{Z:()=>A});const A=n.p+"assets/images/hook-up-2-015b99fe0e1e3160a7b347ee20d2ef25.png"},1128:(e,t,n)=>{n.d(t,{Z:()=>A});const A="data:image/png;base64,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"},31520:(e,t,n)=>{n.d(t,{Z:()=>A});const A=n.p+"assets/images/pages-2f794cb3db4ffd12cdd7dac4eb0a0329.png"}}]);