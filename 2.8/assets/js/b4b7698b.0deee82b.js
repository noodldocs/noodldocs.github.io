"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[4239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,h=p["".concat(l,".").concat(u)]||p[u]||g[u]||s;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,r[1]=i;for(var d=2;d<s;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53488:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294);function o(e){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)})):function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+n)}catch(a){console.error("Fallback: Oops, unable to copy",a)}document.body.removeChild(t)}(e)}function s(e){return a.createElement("button",{className:"ndl-copy-nodes-button",onClick:()=>{return t=e.json,void o(JSON.stringify(t));var t}})}},17213:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),o=n(39671);function s(e){let{zip:t,name:n,thumb:s,cf:r}=e;return a.createElement("button",{className:"ndl-import-button",onClick:()=>(0,o.I)(t,{name:n,thumb:s,cf:r})})}},39671:(e,t,n)=>{n.d(t,{I:()=>o});var a=n(36809);function o(e,t){let n=[];t&&void 0!==t.name&&n.push("name="+encodeURIComponent(t.name)),t&&void 0!==t.thumb&&n.push("thumb="+encodeURIComponent(location.protocol+"//"+location.host+a.default.baseUrl+t.thumb)),t&&void 0!==t.cf&&n.push("cf="+encodeURIComponent(location.protocol+"//"+location.host+a.default.baseUrl+"/"+t.cf));var o="noodl:import/"+location.protocol+"//"+location.host+a.default.baseUrl+e+(n.length>0?"?"+n.join("&"):"");console.log("Importing into Noodl:",o),console.log(e),window.location.href=o}},40637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));n(53488),n(17213);const s={title:"Adding pagination to the Table",hide_title:!0},r="Adding pagination to the Table",i={unversionedId:"guides/visualizing-data/table-pagination",id:"guides/visualizing-data/table-pagination",title:"Adding pagination to the Table",description:"What you will learn in this guide",source:"@site/docs/guides/visualizing-data/table-pagination.md",sourceDirName:"guides/visualizing-data",slug:"/guides/visualizing-data/table-pagination",permalink:"/2.8/docs/guides/visualizing-data/table-pagination",draft:!1,tags:[],version:"current",frontMatter:{title:"Adding pagination to the Table",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Using the Table node to display data",permalink:"/2.8/docs/guides/visualizing-data/table-to-visualize-data"},next:{title:"Filter your Table data",permalink:"/2.8/docs/guides/visualizing-data/filter-table-data"}},l={},d=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Adding the Pages And Rows prefab",id:"adding-the-pages-and-rows-prefab",level:2},{value:"Setting up the Query Records node",id:"setting-up-the-query-records-node",level:2},{value:"Connecting the Pages And Rows with the Query Records node",id:"connecting-the-pages-and-rows-with-the-query-records-node",level:2},{value:"Explicit control of when the Query Records node fetches it&#39;s data",id:"explicit-control-of-when-the-query-records-node-fetches-its-data",level:2},{value:"Summary",id:"summary",level:2}],c={toc:d},p="wrapper";function g(e){let{components:t,...s}=e;return(0,o.kt)(p,(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"adding-pagination-to-the-table"},"Adding pagination to the Table"),(0,o.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,o.kt)("p",null,"In this guide we will use the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/library/prefabs/pagesandrows/"},"Pages And Rows"))," component prefab to add pagination to the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/library/prefabs/table"},"Table"))," from the ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/visualizing-data/table-to-visualize-data"},"Using the Table node to display data")," guide. The ",(0,o.kt)("strong",{parentName:"p"},"Pages And Rows")," node also allows users to control how many rows the ",(0,o.kt)("strong",{parentName:"p"},"Table")," displays on each page."),(0,o.kt)("h2",{id:"adding-the-pages-and-rows-prefab"},"Adding the Pages And Rows prefab"),(0,o.kt)("p",null,"Bring up the Node Picker and select the Prefabs tab. Then find the ",(0,o.kt)("strong",{parentName:"p"},"Pages And Rows")," prefab and click clone."),(0,o.kt)("div",{className:"ndl-image-with-background xl"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(36062).Z,width:"1594",height:"1200"}))),(0,o.kt)("p",null,"You should now have the ",(0,o.kt)("strong",{parentName:"p"},"Pages And Rows")," component in your project, so let's add it to the node graph underneath the ",(0,o.kt)("strong",{parentName:"p"},"Table")," node in the Start Page, like in the screenshot below:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(62819).Z,width:"1088",height:"692"}))),(0,o.kt)("p",null,"Let's also give the ",(0,o.kt)("strong",{parentName:"p"},"Pages And Rows")," component a ",(0,o.kt)("strong",{parentName:"p"},"Top Margin")," of 16px:"),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(19362).Z,width:"632",height:"1660"}))),(0,o.kt)("h2",{id:"setting-up-the-query-records-node"},"Setting up the Query Records node"),(0,o.kt)("p",null,"In order to use the ",(0,o.kt)("strong",{parentName:"p"},"Pages And Rows")," component, we need to enable some properties on the ",(0,o.kt)("strong",{parentName:"p"},"Query Records")," node. Check the ",(0,o.kt)("strong",{parentName:"p"},"Use Limit")," property and also check the ",(0,o.kt)("strong",{parentName:"p"},"Fetch Total Count")," property. It should look like this:"),(0,o.kt)("div",{className:"ndl-image-with-background s"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(38869).Z,width:"636",height:"1438"}))),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Pages And Rows")," component will give us the values for ",(0,o.kt)("strong",{parentName:"p"},"Limit")," and ",(0,o.kt)("strong",{parentName:"p"},"Skip"),", and the ",(0,o.kt)("strong",{parentName:"p"},"Query Records")," will give the total count to the ",(0,o.kt)("strong",{parentName:"p"},"Pages And Rows"),". In the next section we will make the connections."),(0,o.kt)("h2",{id:"connecting-the-pages-and-rows-with-the-query-records-node"},"Connecting the Pages And Rows with the Query Records node"),(0,o.kt)("p",null,"Let's start by making some connections from the ",(0,o.kt)("strong",{parentName:"p"},"Pages And Rows")," component to the ",(0,o.kt)("strong",{parentName:"p"},"Query Records")," node. Make the following connections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connect the ",(0,o.kt)("span",{class:"ndl-data"},"Skip")," output from the ",(0,o.kt)("strong",{parentName:"li"},"Pages And Rows")," to the ",(0,o.kt)("span",{class:"ndl-data"},"Skip")," input of the ",(0,o.kt)("strong",{parentName:"li"},"Query Records")),(0,o.kt)("li",{parentName:"ul"},"Connect the ",(0,o.kt)("span",{class:"ndl-data"},"Limit")," output from the ",(0,o.kt)("strong",{parentName:"li"},"Pages And Rows")," to the ",(0,o.kt)("span",{class:"ndl-data"},"Limit")," input of the ",(0,o.kt)("strong",{parentName:"li"},"Query Records")),(0,o.kt)("li",{parentName:"ul"},"Connect the ",(0,o.kt)("span",{class:"ndl-signal"},"Changed")," output from the ",(0,o.kt)("strong",{parentName:"li"},"Pages And Rows")," to the ",(0,o.kt)("span",{class:"ndl-signal"},"Do")," input of the ",(0,o.kt)("strong",{parentName:"li"},"Query Records"))),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(41218).Z,width:"1942",height:"1070"}))),(0,o.kt)("p",null,"Now from the ",(0,o.kt)("strong",{parentName:"p"},"Query Records")," make a connection to the ",(0,o.kt)("strong",{parentName:"p"},"Pages And Rows"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connect the ",(0,o.kt)("span",{class:"ndl-data"},"Total Count")," output from the ",(0,o.kt)("strong",{parentName:"li"},"Query Records")," to the ",(0,o.kt)("span",{class:"ndl-data"},"Total Count")," input of the ",(0,o.kt)("strong",{parentName:"li"},"Pages And Rows"))),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(20715).Z,width:"1918",height:"1056"}))),(0,o.kt)("p",null,"It should look like this in the node graph when you are done:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8037).Z,width:"1292",height:"860"}))),(0,o.kt)("h2",{id:"explicit-control-of-when-the-query-records-node-fetches-its-data"},"Explicit control of when the Query Records node fetches it's data"),(0,o.kt)("p",null,"If you reload the application now, you will be met with the following:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(95849).Z,width:"2684",height:"1030"}))),(0,o.kt)("p",null,"The reason the table looks like this is because the ",(0,o.kt)("strong",{parentName:"p"},"Query Records")," node hasn't fetched any data. When we hooked up the ",(0,o.kt)("span",{class:"ndl-signal"},"Changed")," signal from the ",(0,o.kt)("strong",{parentName:"p"},"Pages And Rows")," to the ",(0,o.kt)("span",{class:"ndl-signal"},"Do")," action of the ",(0,o.kt)("strong",{parentName:"p"},"Query Records"),", the ",(0,o.kt)("strong",{parentName:"p"},"Query Records")," node went from implicitly fetching data, to only fetching data when it gets a signal to the ",(0,o.kt)("span",{class:"ndl-signal"},"Do")," action. This means that we want to make sure that the ",(0,o.kt)("strong",{parentName:"p"},"Query Records")," node fetches data as soon as something in the Node Graph has become visible, so let's connect the ",(0,o.kt)("span",{class:"ndl-signal"},"Did Mount")," signal from the ",(0,o.kt)("strong",{parentName:"p"},"Group")," node to the ",(0,o.kt)("span",{class:"ndl-signal"},"Do")," action of the ",(0,o.kt)("strong",{parentName:"p"},"Query Records"),", like this:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(27764).Z,width:"2080",height:"1312"}))),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(76212).Z,width:"1258",height:"906"}))),(0,o.kt)("p",null,"If you reload now, it should look like this:"),(0,o.kt)("div",{className:"ndl-image-with-background l"},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(61889).Z,width:"2684",height:"1804"}))),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Now we have a fully functioning table where the user can control the number of rows that are displayed on each ",(0,o.kt)("strong",{parentName:"p"},"Table")," page thanks to the ",(0,o.kt)("strong",{parentName:"p"},"Pages And Rows")," component."))}g.isMDXComponent=!0},76212:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/all-connections-3115c35e752fbcb3e0df1b54d9142bf0.png"},36062:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/clone-pages-rows-c1775ec57991effac0017dbd0cb8f6e8.png"},8037:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connections-done-a5a235b4a191dc0b86762dad1e712343.png"},41218:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connections-pr-qr-c5c64a2fc582ad8bf42f7c607904823d.png"},20715:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connections-qr-pr-37279015fb1e52cbcec77495db7fca49.png"},95849:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/empty-table-fc87e23b62d21a9f985ea4460de3fd2c.png"},27764:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/group-qr-cb4fc40d553930bdd7335e445f6d921b.png"},62819:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pages-rows-in-graph-14159485bf236f71edf062530f9549c6.png"},38869:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/query-records-properties-c87681d210e0ecc1fa7c605a9a4fb340.png"},61889:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/table-with-pagination-c1fc20725fbcb884b154f6d39f52c34a.png"},19362:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/top-margin-5681b87f33c3694f6ad1e007be6eec38.png"}}]);