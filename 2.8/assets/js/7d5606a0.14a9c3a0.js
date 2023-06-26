"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[1721],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},61311:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),i=t(17213),l=t(44996),s=["components"],c={title:"Scanning for QR Codes in uploaded images",hide_title:!0},u="Scanning for QR Codes in uploaded images",d={unversionedId:"modules/qr-scanner/guides/image-upload/README",id:"modules/qr-scanner/guides/image-upload/README",title:"Scanning for QR Codes in uploaded images",description:"This example enables you to scan uploaded images for Quick Response (QR) Codes and fetch the resulting data in the QR Code. To scan for QR Codes via a camera feed, see the documentation on the Camera QR Scanner.",source:"@site/library/modules/qr-scanner/guides/image-upload/README.md",sourceDirName:"modules/qr-scanner/guides/image-upload",slug:"/modules/qr-scanner/guides/image-upload/",permalink:"/2.8/library/modules/qr-scanner/guides/image-upload/",tags:[],version:"current",frontMatter:{title:"Scanning for QR Codes in uploaded images",hide_title:!0},sidebar:"qrScannerSidebar",previous:{title:"Scanning for QR Codes in a camera feed",permalink:"/2.8/library/modules/qr-scanner/guides/camera-feed/"},next:{title:"Camera QR Scanner",permalink:"/2.8/library/modules/qr-scanner/nodes/camera-qr-scanner/"}},p={},m=[{value:"A simple example setup",id:"a-simple-example-setup",level:2}],f={toc:m};function g(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scanning-for-qr-codes-in-uploaded-images"},"Scanning for QR Codes in uploaded images"),(0,a.kt)("p",null,"This example enables you to scan uploaded images for Quick Response (QR) Codes and fetch the resulting data in the QR Code. To scan for QR Codes via a camera feed, see the documentation on the ",(0,a.kt)("a",{parentName:"p",href:"/library/modules/qr-scanner/guides/camera-feed"},"Camera QR Scanner"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The Image QR Scanner")," node works in conjunction with the ",(0,a.kt)("strong",{parentName:"p"},"Open File Picker")," node, which is used to upload an image that will be scanned for QR Codes. You can read more about the ",(0,a.kt)("strong",{parentName:"p"},"File Picker")," node ",(0,a.kt)("a",{parentName:"p",href:"/nodes/utilities/open-file-picker"},"here"),". In the image below you can see how such a node tree might look."),(0,a.kt)("h2",{id:"a-simple-example-setup"},"A simple example setup"),(0,a.kt)("p",null,"In the example below, we use a ",(0,a.kt)("a",{parentName:"p",href:"/nodes/ui-controls/button"},"Button Node")," to open the ",(0,a.kt)("strong",{parentName:"p"},"File Picker"),". Once a file has been successfully uploaded and sent to the QR Node, the ",(0,a.kt)("span",{className:"ndl-data"},"Scan Result")," is returned to the ",(0,a.kt)("a",{parentName:"p",href:"/nodes/basic-elements/text"},"Text Node")," where the data contained in the QR Code will be displayed."),(0,a.kt)("div",{className:"ndl-image-with-background l"},(0,a.kt)("img",{src:(0,l.Z)("/library/modules/qr-scanner/guides/image-upload/qr-image-upload.png"),className:"ndl-image large"}),(0,a.kt)(i.Z,{zip:"/library/modules/qr-scanner/guides/image-upload/qr-image-upload.zip",name:"Uploaded File QR Scanner",thumb:"/library/modules/qr-scanner/qr_noodlnet.png",mdxType:"ImportButton"})),(0,a.kt)("p",null,"Note that In this particular example, no text will be shown if QR Code can\u2019t be found or read from the uploaded image. You can use the ",(0,a.kt)("span",{className:"ndl-signal"},"Scan Success/Scan Failed")," signals of the ",(0,a.kt)("strong",{parentName:"p"},"Image QR Scanner")," node to include error handling, but this is not shown in this simple setup."))}g.isMDXComponent=!0},17213:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(67294),o=t(39671);function a(e){var n=e.zip,t=e.name,a=e.thumb,i=e.cf;return r.createElement("button",{className:"ndl-import-button",onClick:function(){return(0,o.I)(n,{name:t,thumb:a,cf:i})}})}},39671:function(e,n,t){t.d(n,{I:function(){return o}});var r=t(99782);function o(e,n){var t=[];n&&void 0!==n.name&&t.push("name="+encodeURIComponent(n.name)),n&&void 0!==n.thumb&&t.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+r.default.baseUrl+n.thumb)),n&&void 0!==n.cf&&t.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+r.default.baseUrl+"/"+n.cf));var o="noodl:import/"+location.protocol+"//"+location.host+r.default.baseUrl+e+(t.length>0?"?"+t.join("&"):"");console.log("Importing into Noodl:",o),console.log(e),window.location.href=o}}}]);