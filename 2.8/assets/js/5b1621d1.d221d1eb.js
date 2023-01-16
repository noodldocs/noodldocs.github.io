"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[7880],{3905:function(e,t,a){a.d(t,{Zo:function(){return g},kt:function(){return u}});var n=a(67294);function A(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){A(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,A=function(e,t){if(null==e)return{};var a,n,A={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(A[a]=e[a]);return A}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(A[a]=e[a])}return A}var r=n.createContext({}),s=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},g=function(e){var t=s(e.components);return n.createElement(r.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,A=e.mdxType,i=e.originalType,r=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),h=s(a),u=A,c=h["".concat(r,".").concat(u)]||h[u]||d[u]||i;return a?n.createElement(c,o(o({ref:t},g),{},{components:a})):n.createElement(c,o({ref:t},g))}));function u(e,t){var a=arguments,A=t&&t.mdxType;if("string"==typeof e||A){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:A,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4493:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var n=a(83117),A=a(80102),i=(a(67294),a(3905)),o=["components"],l={title:"Style Variants",hide_title:!0},r="Style Variants",s={unversionedId:"guides/user-interfaces/style-variants",id:"guides/user-interfaces/style-variants",title:"Style Variants",description:"What you will learn in this guide",source:"@site/docs/guides/user-interfaces/style-variants.md",sourceDirName:"guides/user-interfaces",slug:"/guides/user-interfaces/style-variants",permalink:"/2.8/docs/guides/user-interfaces/style-variants",tags:[],version:"current",frontMatter:{title:"Style Variants",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Grouping & Layout",permalink:"/2.8/docs/guides/user-interfaces/layout"},next:{title:"Visual States",permalink:"/2.8/docs/guides/user-interfaces/visual-states"}},g={},d=[{value:"What you will learn in this guide",id:"what-you-will-learn-in-this-guide",level:2},{value:"Overview",id:"overview",level:2},{value:"The quick and dirty method",id:"the-quick-and-dirty-method",level:2},{value:"Creating a Style Variant",id:"creating-a-style-variant",level:2},{value:"Editing a Style Variant",id:"editing-a-style-variant",level:2}],h={toc:d};function u(e){var t=e.components,l=(0,A.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"style-variants"},"Style Variants"),(0,i.kt)("h2",{id:"what-you-will-learn-in-this-guide"},"What you will learn in this guide"),(0,i.kt)("p",null,"When building apps it\u2019s very common that we need the same styling in multiple places. This guide will take you through the most common method of reusing styles, using the Style Variants feature."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"We will go through the following steps in this guide:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a Style Variant"),(0,i.kt)("li",{parentName:"ul"},"Learn the differences between overrides and variants"),(0,i.kt)("li",{parentName:"ul"},"Edit a Style Variant")),(0,i.kt)("p",null,"There is also a video walking through the guide."),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/zFF8hoC-JM8",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("h2",{id:"the-quick-and-dirty-method"},"The quick and dirty method"),(0,i.kt)("p",null,"We could just copy and paste a node we styled, but that comes with a couple of downsides."),(0,i.kt)("p",null,"First of all, we would have to search through all of our pages and components looking for the styled visual node we want whenever we need to include it in a new place."),(0,i.kt)("p",null,"Similarly, if we would find that the design needs to be tweaked, we would have to go through all pages and components, manually updating every instance of this copied node."),(0,i.kt)("p",null,"The better way to achieve reusability and maintainability is by using Style Variants."),(0,i.kt)("h2",{id:"creating-a-style-variant"},"Creating a Style Variant"),(0,i.kt)("p",null,"Let\u2019s see it in action. In our design system we have a \u201cPrimary\u201d button used to indicate the main actions, and a \u201cSecondary\u201d button that is a bit more discreet. Let\u2019s build them, and use them in our app."),(0,i.kt)("p",null,"We start by creating a button in the node tree."),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:a(61626).Z,width:"395",height:"211"}))),(0,i.kt)("p",null,"We will add a bit more left and right padding, increase the height and make the corners rounder."),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:a(94147).Z,width:"340",height:"180"}))),(0,i.kt)("p",null,"That looks good. Now let\u2019s create another button."),(0,i.kt)("div",{className:"ndl-image-with-background s"},(0,i.kt)("p",null,(0,i.kt)("img",{src:a(81742).Z,width:"260",height:"157"}))),(0,i.kt)("p",null,"Oh, wait. Why does the new button not have any of the changes that we made? This is because we didn\u2019t save the changes as a variant, so they became overrides on this specific instance of the button, instead of being attached to all the Button nodes."),(0,i.kt)("p",null,"Let\u2019s fix this and save our changes as a variant so that we can start reusing it."),(0,i.kt)("p",null,"At the top of our restyled buttons Property Panel, click the \u201cplus\u201d, \u201cCreate new variant\u201d, give it a name and confirm."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3561).Z,width:"546",height:"141"}))),(0,i.kt)("p",null,"This will take all the overrides, remove them from the current instance and save them as a new variant together with all other non-overridden properties."),(0,i.kt)("p",null,'We can now select the second button and set it to use the "Primary" variant.'),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:a(15164).Z,width:"538",height:"130"}))),(0,i.kt)("div",{className:"ndl-image-with-background s"},(0,i.kt)("p",null,(0,i.kt)("img",{src:a(50747).Z,width:"219",height:"159"}))),(0,i.kt)("h2",{id:"editing-a-style-variant"},"Editing a Style Variant"),(0,i.kt)("p",null,"Now that we have the \u201cPrimary\u201d button, let\u2019s create the \u201cSecondary\u201d variant."),(0,i.kt)("p",null,"For demonstrational purposes I will show you another workflow so that you can pick the one you like the best. This method will also cover how to edit variants."),(0,i.kt)("p",null,"Since the \u201cSecondary\u201d variant is very similar to the \u201cPrimary\u201d one we will create a button and set it to use the \u201cPrimary\u201d variant. This way we don\u2019t have to repeat any of the styling we\u2019ve already done."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:a(15164).Z,width:"538",height:"130"}))),(0,i.kt)("div",{className:"ndl-image-with-background s"},(0,i.kt)("p",null,(0,i.kt)("img",{src:a(50747).Z,width:"219",height:"159"}))),(0,i.kt)("p",null,"This time we will not override any styles though. Instead we\u2019ll immediately create a new variant and name it \u201cSecondary\u201d."),(0,i.kt)("div",{className:"ndl-image-with-background l"},(0,i.kt)("p",null,(0,i.kt)("img",{src:a(18603).Z,width:"529",height:"130"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(71338).Z,width:"520",height:"137"}))),(0,i.kt)("p",null,"We now have a \u201cSecondary\u201d variant that is identical to the \u201cPrimary\u201d one."),(0,i.kt)("p",null,"As you already know, if we change any properties now it will count as overrides, and only be saved to this particular instance of the Button node. So, in order to edit the Variant and not the Instance, we press the \u201cEdit variant\u201d button."),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:a(22516).Z,width:"291",height:"108"}))),(0,i.kt)("p",null,"Notice how the borders of the Property Panel become a helpful teal color. This is so that we remember that we are in the Variant editor."),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:a(38728).Z,width:"293",height:"347"}))),(0,i.kt)("p",null,"Let\u2019s give this variant a \u201cPrimary\u201d colored text, a transparent background and a \u201cPrimary\u201d colored border."),(0,i.kt)("div",{className:"ndl-image-with-background s"},(0,i.kt)("p",null,(0,i.kt)("img",{src:a(74459).Z,width:"216",height:"178"}))),(0,i.kt)("p",null,"In the \u201cVisual States\u201d guide I got some feedback from my designer friend that I forgot to style the hover state, so let\u2019s make them happy and update the hover styles this time. Let\u2019s make the background a nice \u201cPrimary Light\u201d color. All of the visual states are tied to a Variant and saved on it."),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:a(61558).Z,width:"297",height:"213"}))),(0,i.kt)("p",null,"All changes done when editing a Variant are saved automatically, so we don\u2019t have to do anything else now that we\u2019re done with the styling, but if we for some reason want to go back to editing the instance, we can click the \u201cClose\u201d button to exit the Variant editor."),(0,i.kt)("div",{className:"ndl-image-with-background"},(0,i.kt)("p",null,(0,i.kt)("img",{src:a(89083).Z,width:"292",height:"114"}))),(0,i.kt)("p",null,"We can now populate our whole app with identical buttons, making sure that they always follow the styling defined in our brand guidelines. And if the guidelines would change, we can quickly edit a variant and have it be updated across our whole app."))}u.isMDXComponent=!0},94147:function(e,t){t.Z="data:image/png;base64,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"},89083:function(e,t,a){t.Z=a.p+"assets/images/close-8cc20c68a6440c65f923c36e22237d87.png"},61626:function(e,t,a){t.Z=a.p+"assets/images/create-button-967222b1f4d0b209b0f639545e91b38e.png"},3561:function(e,t,a){t.Z=a.p+"assets/images/create-variant-456752628634027e90ddaa15ca4c90ba.png"},22516:function(e,t){t.Z="data:image/png;base64,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"},38728:function(e,t,a){t.Z=a.p+"assets/images/helpful-teal-ba41d4eb32a1719411864522b40dffcf.png"},71338:function(e,t,a){t.Z=a.p+"assets/images/name-new-variant-0b64a5c52c96bb1a88a3d8cf2857ae71.png"},18603:function(e,t,a){t.Z=a.p+"assets/images/new-variant-07c940c32b8d50f7ba81fad5c7fc3c9b.png"},81742:function(e,t,a){t.Z=a.p+"assets/images/second-button-904d16e1092046557d2bc76290429cbb.png"},15164:function(e,t,a){t.Z=a.p+"assets/images/set-variant-283d3243466d1629156ee2edb2593d8f.png"},50747:function(e,t,a){t.Z=a.p+"assets/images/styled-buttons-e1dc3344dc0e45bc39048080ea4f39e6.png"},74459:function(e,t,a){t.Z=a.p+"assets/images/two-buttons-d4236b835680b9d4904c3d69e426b68f.png"},61558:function(e,t,a){t.Z=a.p+"assets/images/visual-state-4defdf3b32649a3663a7383f187b0811.png"}}]);