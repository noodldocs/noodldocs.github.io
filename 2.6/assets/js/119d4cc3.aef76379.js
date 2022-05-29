"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[7155],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},47466:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=a(83117),o=a(80102),i=(a(67294),a(3905)),r=["components"],l={title:"Figma Plugin",hide_title:!0},s="Figma plugin",p={unversionedId:"guides/user-interfaces/figma-plugin",id:"guides/user-interfaces/figma-plugin",title:"Figma Plugin",description:"Download the plugin here//www.figma.com/community/plugin/1006908263044642341/Noodl",source:"@site/docs/guides/user-interfaces/figma-plugin.md",sourceDirName:"guides/user-interfaces",slug:"/guides/user-interfaces/figma-plugin",permalink:"/2.6/docs/guides/user-interfaces/figma-plugin",tags:[],version:"current",frontMatter:{title:"Figma Plugin",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Modules",permalink:"/2.6/docs/guides/user-interfaces/modules"},next:{title:"Making Connections",permalink:"/2.6/docs/guides/data/making-connections"}},u={},c=[{value:"Export a layer",id:"export-a-layer",level:2},{value:"Export text and text styles",id:"export-text-and-text-styles",level:2},{value:"Export complex shapes",id:"export-complex-shapes",level:2},{value:"Export larger layer structures",id:"export-larger-layer-structures",level:2},{value:"Notes about workflow",id:"notes-about-workflow",level:2}],d={toc:c};function m(e){var t=e.components,l=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"figma-plugin"},"Figma plugin"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Download the plugin here: ",(0,i.kt)("a",{parentName:"p",href:"https://www.figma.com/community/plugin/1006908263044642341/Noodl"},"https://www.figma.com/community/plugin/1006908263044642341/Noodl")))),(0,i.kt)("p",null,"If you're a Figma user you can use Figma documents to create nodes in Noodl."),(0,i.kt)("p",null,"Layers in Figma will be mapped to nodes in Noodl, and complex shapes will be exported as images."),(0,i.kt)("p",null,"The Noodl plugin can export:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Shapes like circles, rectangles and lines with one fill or stroke. These will be mapped to the corresponding Noodl nodes."),(0,i.kt)("li",{parentName:"ul"},"Complex shapes, like vectors paths and boolean operation, will be exported as images"),(0,i.kt)("li",{parentName:"ul"},"Text styles"),(0,i.kt)("li",{parentName:"ul"},"Positions and sizes will map to absolute layouts and fixed dimensions"),(0,i.kt)("li",{parentName:"ul"},"Entire layer hierarchies, with the correct order and parent/child relations.")),(0,i.kt)("p",null,"The Noodl plugin can't currently export:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Auto layout"),(0,i.kt)("li",{parentName:"ul"},"Constraints"),(0,i.kt)("li",{parentName:"ul"},"Prototype interactions")),(0,i.kt)("p",null,"This guide uses the Mobile UI kit by Toni Gemayel \u2014 a design resource from the Figma community:\n",(0,i.kt)("a",{parentName:"p",href:"https://www.figma.com/community/file/836596421863073964/Mobile-UI-kit"},"https://www.figma.com/community/file/836596421863073964/Mobile-UI-kit")),(0,i.kt)("h2",{id:"export-a-layer"},"Export a layer"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select a layer"),(0,i.kt)("li",{parentName:"ol"},'Open the Noodl plugin and click "Export". Make sure Noodl is running and have a project open.'),(0,i.kt)("li",{parentName:"ol"},"Noodl will now become focused. Place the Noodl node in your node hierarchy. Assets, like images, will be automatically placed in your project directory.")),(0,i.kt)("iframe",{width:"560",height:"315",style:{margin:"0 auto",display:"block"},src:"https://www.youtube-nocookie.com/embed/GsczhwfoyEE",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("br",null),(0,i.kt)("p",null,"Note that the Ellipse in Figma was mapped to an ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," node in Noodl, with the correct size, image asset and border."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Here's the same node duplicated in Noodl, with a different source and border radius"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(32384).Z,title:":class=img-size-l",width:"2920",height:"2024"})),(0,i.kt)("h2",{id:"export-text-and-text-styles"},"Export text and text styles"),(0,i.kt)("p",null,"All text styles used by exported text layers will automatically be imported."),(0,i.kt)("p",null,"?> Figma uses the fonts you have installed on your system. In Noodl apps the required font files have to be defined in your projects. You can ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=lgMZZC6XoAs"},"import fonts via Google Fonts")," or ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=P76v0Q38eKI"},"via font files")),(0,i.kt)("iframe",{width:"560",height:"315",style:{margin:"0 auto",display:"block"},src:"https://www.youtube-nocookie.com/embed/sZm0eBZvLaM",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("br",null),(0,i.kt)("p",null,"?> Note that the text styles was added to the styles tab in Noodl ",(0,i.kt)("img",{src:a(63225).Z,title:":class=img-size-l",width:"2920",height:"2024"})),(0,i.kt)("h2",{id:"export-complex-shapes"},"Export complex shapes"),(0,i.kt)("p",null,'Complex shapes that don\'t map to a visual node in Noodl, like this vector path, will be exported as images. You can use the "Default image size" option to specify what resolutions the images should be exported at.'),(0,i.kt)("iframe",{width:"560",height:"315",style:{margin:"0 auto",display:"block"},src:"https://www.youtube-nocookie.com/embed/mqML1OL0SUk",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"export-larger-layer-structures"},"Export larger layer structures"),(0,i.kt)("p",null,"To get started quickly you can export entire structures, like a whole page. As you progress building the application and you can extract components and replace the static layouts with dynamic layouts and make the design data-driven."),(0,i.kt)("iframe",{width:"560",height:"315",style:{margin:"0 auto",display:"block"},src:"https://www.youtube-nocookie.com/embed/5miB0PD4z9k",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Another page exported all at once"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(15323).Z,title:":class=img-size-l",width:"2920",height:"2024"})),(0,i.kt)("h2",{id:"notes-about-workflow"},"Notes about workflow"),(0,i.kt)("p",null,"Most application are more dynamic than what's typically designed in Figma. Text inputs are interactive, labels and values are data-driven, the amount of items in a list isn't fixed, groups can have padding, and so on. This means that there's some work left to do on the nodes that are exported."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Applications"),": Export small parts, like a list item, a button, and build them up one by one in Noodl. Entire structures are harder to export as they often need to be restructured.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Prototypes"),": Export entire pages, one by one, and build up the navigation structure in Noodl. Then start replacing the parts that require dynamic and interactive elements, and adjust the layout where it needs to be more flexible."))))}m.isMDXComponent=!0},32384:function(e,t,a){t.Z=a.p+"assets/images/image2-c110ca07534c4da80d82229a347ccf4c.png"},63225:function(e,t,a){t.Z=a.p+"assets/images/text-styles-ec7a9826f23ff3cd578dd506139b20ad.png"},15323:function(e,t,a){t.Z=a.p+"assets/images/whole-page-f31e33e29deed991651d4c2028eb1bbf.png"}}]);