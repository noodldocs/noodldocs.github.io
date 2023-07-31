"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[1721],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return t?a.createElement(f,i(i({ref:n},d),{},{components:t})):a.createElement(f,i({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},61311:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=t(87462),o=(t(67294),t(3905)),r=t(17213),i=t(44996);const l={title:"Scanning for QR Codes in uploaded images",hide_title:!0},s="Scanning for QR Codes in uploaded images",c={unversionedId:"modules/qr-scanner/guides/image-upload/README",id:"modules/qr-scanner/guides/image-upload/README",title:"Scanning for QR Codes in uploaded images",description:"This example enables you to scan uploaded images for Quick Response (QR) Codes and fetch the resulting data in the QR Code. To scan for QR Codes via a camera feed, see the documentation on the Camera QR Scanner.",source:"@site/library/modules/qr-scanner/guides/image-upload/README.md",sourceDirName:"modules/qr-scanner/guides/image-upload",slug:"/modules/qr-scanner/guides/image-upload/",permalink:"/2.9/library/modules/qr-scanner/guides/image-upload/",draft:!1,tags:[],version:"current",frontMatter:{title:"Scanning for QR Codes in uploaded images",hide_title:!0},sidebar:"qrScannerSidebar",previous:{title:"Scanning for QR Codes in a camera feed",permalink:"/2.9/library/modules/qr-scanner/guides/camera-feed/"},next:{title:"Camera QR Scanner",permalink:"/2.9/library/modules/qr-scanner/nodes/camera-qr-scanner/"}},d={},u=[{value:"A simple example setup",id:"a-simple-example-setup",level:2}],p={toc:u},m="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scanning-for-qr-codes-in-uploaded-images"},"Scanning for QR Codes in uploaded images"),(0,o.kt)("p",null,"This example enables you to scan uploaded images for Quick Response (QR) Codes and fetch the resulting data in the QR Code. To scan for QR Codes via a camera feed, see the documentation on the ",(0,o.kt)("a",{parentName:"p",href:"/library/modules/qr-scanner/guides/camera-feed"},"Camera QR Scanner"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The Image QR Scanner")," node works in conjunction with the ",(0,o.kt)("strong",{parentName:"p"},"Open File Picker")," node, which is used to upload an image that will be scanned for QR Codes. You can read more about the ",(0,o.kt)("strong",{parentName:"p"},"File Picker")," node ",(0,o.kt)("a",{parentName:"p",href:"/nodes/utilities/open-file-picker"},"here"),". In the image below you can see how such a node tree might look."),(0,o.kt)("h2",{id:"a-simple-example-setup"},"A simple example setup"),(0,o.kt)("p",null,"In the example below, we use a ",(0,o.kt)("a",{parentName:"p",href:"/nodes/ui-controls/button"},"Button Node")," to open the ",(0,o.kt)("strong",{parentName:"p"},"File Picker"),". Once a file has been successfully uploaded and sent to the QR Node, the ",(0,o.kt)("span",{className:"ndl-data"},"Scan Result")," is returned to the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/basic-elements/text"},"Text Node")," where the data contained in the QR Code will be displayed."),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("img",{src:(0,i.Z)("/library/modules/qr-scanner/guides/image-upload/qr-image-upload.png"),className:"ndl-image large"}),(0,o.kt)(r.Z,{zip:"/library/modules/qr-scanner/guides/image-upload/qr-image-upload.zip",name:"Uploaded File QR Scanner",thumb:"/library/modules/qr-scanner/qr_noodlnet.png",mdxType:"ImportButton"})),(0,o.kt)("p",null,"Note that In this particular example, no text will be shown if QR Code can\u2019t be found or read from the uploaded image. You can use the ",(0,o.kt)("span",{className:"ndl-signal"},"Scan Success/Scan Failed")," signals of the ",(0,o.kt)("strong",{parentName:"p"},"Image QR Scanner")," node to include error handling, but this is not shown in this simple setup."))}f.isMDXComponent=!0},17213:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294),o=t(39671);function r(e){let{zip:n,name:t,thumb:r,cf:i}=e;return a.createElement("button",{className:"ndl-import-button",onClick:()=>(0,o.I)(n,{name:t,thumb:r,cf:i})})}},39671:(e,n,t)=>{t.d(n,{I:()=>o});var a=t(36809);function o(e,n){let t=[];n&&void 0!==n.name&&t.push("name="+encodeURIComponent(n.name)),n&&void 0!==n.thumb&&t.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+a.default.baseUrl+n.thumb)),n&&void 0!==n.cf&&t.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+a.default.baseUrl+"/"+n.cf));var o="noodl:import/"+location.protocol+"//"+location.host+a.default.baseUrl+e+(t.length>0?"?"+t.join("&"):"");console.log("Importing into Noodl:",o),console.log(e),window.location.href=o}}}]);