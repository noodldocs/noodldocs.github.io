"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[1224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i="Importing and exporting data with CSV",l={unversionedId:"guides/cloud-data/import-export-csv",id:"guides/cloud-data/import-export-csv",title:"Importing and exporting data with CSV",description:"You can import and export data to/from your cloud service in the CSV (Comma Separated Values) format. This is done in the cloud services dashboard.",source:"@site/docs/guides/cloud-data/import-export-csv.md",sourceDirName:"guides/cloud-data",slug:"/guides/cloud-data/import-export-csv",permalink:"/2.8/docs/guides/cloud-data/import-export-csv",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Access Control",permalink:"/2.8/docs/guides/cloud-data/access-control"},next:{title:"Using the Table node to display data",permalink:"/2.8/docs/guides/visualizing-data/table-to-visualize-data"}},p={},s=[{value:"String",id:"string",level:3},{value:"Boolean",id:"boolean",level:3},{value:"Number",id:"number",level:3},{value:"Date",id:"date",level:3},{value:"Object",id:"object",level:3},{value:"Array",id:"array",level:3},{value:"GeoPoint",id:"geopoint",level:3},{value:"Pointer",id:"pointer",level:3},{value:"Relation",id:"relation",level:3},{value:"File",id:"file",level:3}],d={toc:s},c="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"importing-and-exporting-data-with-csv"},"Importing and exporting data with CSV"),(0,a.kt)("p",null,"You can import and export data to/from your cloud service in the CSV (Comma Separated Values) format. This is done in the cloud services dashboard."),(0,a.kt)("p",null,"To export, browse the data for a specific record class and then you find the export commands in the toolbar at the top."),(0,a.kt)("div",{className:"ndl-image-with-background"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(45044).Z,width:"474",height:"204"}))),(0,a.kt)("p",null,"You can either export all records in a class (max 10K) or only the selected records. Select an option and then save the exported CSV."),(0,a.kt)("p",null,"To import a CSV you must also browse to the record class that you want to import into. Then you will find the import command in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit")," menu at the very bottom."),(0,a.kt)("div",{className:"ndl-image-with-background"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(60222).Z,width:"552",height:"876"}))),(0,a.kt)("p",null,"Click and then pick the CSV file on your computer that you want to use for import. The CSV file must follow a certain format for the import to work well."),(0,a.kt)("h3",{id:"string"},"String"),(0,a.kt)("p",null,"The input will be assigned directly as a string."),(0,a.kt)("h3",{id:"boolean"},"Boolean"),(0,a.kt)("p",null,"When the column data type is a boolean, there are a few different formats that are possible:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'"True" // == true\n"true" // == true\n"1" // == true\n1 // == true\n\n"FalsE" // == false\n"false" // == false\n"0" // == false\n0 // == false\n')),(0,a.kt)("h3",{id:"number"},"Number"),(0,a.kt)("p",null,"When the column data type is a number, it will convert the input to a number and assign if the value is not invalid or NaN."),(0,a.kt)("h3",{id:"date"},"Date"),(0,a.kt)("p",null,"Everything that is available via ",(0,a.kt)("inlineCode",{parentName:"p"},"new Date(...)")," will be possible to import."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"Thu Apr 13 2023 10:07:29 GMT+0200 (Central European Summer Time)"\n"2023-04-13T08:02:46.447Z"\n"Thu, 13 Apr 2023 08:06:11 GMT"\n')),(0,a.kt)("h3",{id:"object"},"Object"),(0,a.kt)("p",null,"You can import an object type property by specifying it as JSON:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "some_property":10\n}\n')),(0,a.kt)("h3",{id:"array"},"Array"),(0,a.kt)("p",null,"Properties of array types can also be provided as JSON."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"[1,2,3]\n")),(0,a.kt)("h3",{id:"geopoint"},"GeoPoint"),(0,a.kt)("p",null,"A propety of type GeoPoint can be imported either as a string with latitude and longitude:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"30,30"\n')),(0,a.kt)("p",null,"Or as an object with lat/long as properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{"latitude": 30, "longitude": 30}\n')),(0,a.kt)("h3",{id:"pointer"},"Pointer"),(0,a.kt)("p",null,"A point is simply a string with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Id")," of the target record."),(0,a.kt)("h3",{id:"relation"},"Relation"),(0,a.kt)("p",null,"This is currently not supported."),(0,a.kt)("h3",{id:"file"},"File"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "url": "path-to-file",\n  "name: "filename.png"\n}\n')))}u.isMDXComponent=!0},45044:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/export-csv-10556bb03b962b568cfd017abe1936d2.png"},60222:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/import-csv-bcdd7c7afa0adc4e5c0892b678d670af.png"}}]);