"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[1224],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64596:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={},p="Importing and exporting data with CSV",u={unversionedId:"guides/cloud-data/import-export-csv",id:"guides/cloud-data/import-export-csv",title:"Importing and exporting data with CSV",description:"You can import and export data to/from your cloud service in the CSV (Comma Separated Values) format. This is done in the cloud services dashboard.",source:"@site/docs/guides/cloud-data/import-export-csv.md",sourceDirName:"guides/cloud-data",slug:"/guides/cloud-data/import-export-csv",permalink:"/2.8/docs/guides/cloud-data/import-export-csv",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Access Control",permalink:"/2.8/docs/guides/cloud-data/access-control"},next:{title:"Using the Table node to display data",permalink:"/2.8/docs/guides/visualizing-data/table-to-visualize-data"}},s={},c=[{value:"String",id:"string",level:3},{value:"Boolean",id:"boolean",level:3},{value:"Number",id:"number",level:3},{value:"Date",id:"date",level:3},{value:"Object",id:"object",level:3},{value:"Array",id:"array",level:3},{value:"GeoPoint",id:"geopoint",level:3},{value:"Pointer",id:"pointer",level:3},{value:"Relation",id:"relation",level:3},{value:"File",id:"file",level:3}],d={toc:c};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"importing-and-exporting-data-with-csv"},"Importing and exporting data with CSV"),(0,o.kt)("p",null,"You can import and export data to/from your cloud service in the CSV (Comma Separated Values) format. This is done in the cloud services dashboard."),(0,o.kt)("p",null,"To export, browse the data for a specific record class and then you find the export commands in the toolbar at the top."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(36764).Z,width:"474",height:"204"}))),(0,o.kt)("p",null,"You can either export all records in a class (max 10K) or only the selected records. Select an option and then save the exported CSV."),(0,o.kt)("p",null,"To import a CSV you must also browse to the record class that you want to import into. Then you will find the import command in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit")," menu at the very bottom."),(0,o.kt)("div",{className:"ndl-image-with-background"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(33928).Z,width:"552",height:"876"}))),(0,o.kt)("p",null,"Click and then pick the CSV file on your computer that you want to use for import. The CSV file must follow a certain format for the import to work well."),(0,o.kt)("h3",{id:"string"},"String"),(0,o.kt)("p",null,"The input will be assigned directly as a string."),(0,o.kt)("h3",{id:"boolean"},"Boolean"),(0,o.kt)("p",null,"When the column data type is a boolean, there are a few different formats that are possible:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'"True" // == true\n"true" // == true\n"1" // == true\n1 // == true\n\n"FalsE" // == false\n"false" // == false\n"0" // == false\n0 // == false\n')),(0,o.kt)("h3",{id:"number"},"Number"),(0,o.kt)("p",null,"When the column data type is a number, it will convert the input to a number and assign if the value is not invalid or NaN."),(0,o.kt)("h3",{id:"date"},"Date"),(0,o.kt)("p",null,"Everything that is available via ",(0,o.kt)("inlineCode",{parentName:"p"},"new Date(...)")," will be possible to import."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"Thu Apr 13 2023 10:07:29 GMT+0200 (Central European Summer Time)"\n"2023-04-13T08:02:46.447Z"\n"Thu, 13 Apr 2023 08:06:11 GMT"\n')),(0,o.kt)("h3",{id:"object"},"Object"),(0,o.kt)("p",null,"You can import an object type property by specifying it as JSON:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "some_property":10\n}\n')),(0,o.kt)("h3",{id:"array"},"Array"),(0,o.kt)("p",null,"Properties of array types can also be provided as JSON."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"[1,2,3]\n")),(0,o.kt)("h3",{id:"geopoint"},"GeoPoint"),(0,o.kt)("p",null,"A propety of type GeoPoint can be imported either as a string with latitude and longitude:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"30,30"\n')),(0,o.kt)("p",null,"Or as an object with lat/long as properties:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"latitude": 30, "longitude": 30}\n')),(0,o.kt)("h3",{id:"pointer"},"Pointer"),(0,o.kt)("p",null,"A point is simply a string with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Id")," of the target record."),(0,o.kt)("h3",{id:"relation"},"Relation"),(0,o.kt)("p",null,"This is currently not supported."),(0,o.kt)("h3",{id:"file"},"File"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "url": "path-to-file",\n  "name: "filename.png"\n}\n')))}m.isMDXComponent=!0},36764:function(e,t,n){t.Z=n.p+"assets/images/export-csv-10556bb03b962b568cfd017abe1936d2.png"},33928:function(e,t,n){t.Z=n.p+"assets/images/import-csv-bcdd7c7afa0adc4e5c0892b678d670af.png"}}]);