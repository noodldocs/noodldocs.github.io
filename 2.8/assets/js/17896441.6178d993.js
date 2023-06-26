"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[7918],{86753:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(67294),l=a(95999),r=a(83117),s=a(80102),i=a(86010),c="iconEdit_dcUD",o=["className"];function m(e){var t=e.className,a=(0,s.Z)(e,o);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var d=a(30662);function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:d.kM.common.editThisPage},n.createElement(m,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},71750:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294),l=a(39960);function r(e){var t=e.permalink,a=e.title,r=e.subLabel;return n.createElement(l.Z,{className:"pagination-nav__link",to:t},r&&n.createElement("div",{className:"pagination-nav__sublabel"},r),n.createElement("div",{className:"pagination-nav__label"},a))}},51575:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(83117),l=a(80102),r=a(67294),s=a(86010),i=a(25002),c="tableOfContents_cNA8",o=["className"];function m(e){var t=e.className,a=(0,l.Z)(e,o);return r.createElement("div",{className:(0,s.Z)(c,"thin-scrollbar",t)},r.createElement(i.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},25002:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(83117),l=a(80102),r=a(67294),s=a(30662),i=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function c(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(c,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function o(e){var t=e.toc,a=e.className,o=void 0===a?"table-of-contents table-of-contents__left-border":a,m=e.linkClassName,d=void 0===m?"table-of-contents__link":m,u=e.linkActiveClassName,v=void 0===u?void 0:u,b=e.minHeadingLevel,E=e.maxHeadingLevel,p=(0,l.Z)(e,i),g=(0,s.LU)(),h=null!=b?b:g.tableOfContents.minHeadingLevel,f=null!=E?E:g.tableOfContents.maxHeadingLevel,N=(0,s.b9)({toc:t,minHeadingLevel:h,maxHeadingLevel:f}),_=(0,r.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:h,maxHeadingLevel:f}}),[d,v,h,f]);return(0,s.Si)(_),r.createElement(c,(0,n.Z)({toc:N,className:o,linkClassName:d},p))}},8727:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(67294),l=a(86010),r=a(95999),s=a(39960),i="tag_hD8n",c="tagRegular_D6E_",o="tagWithCount_i0QQ";function m(e){var t=e.permalink,a=e.name,r=e.count;return n.createElement(s.Z,{href:t,className:(0,l.Z)(i,r?o:c)},a,r&&n.createElement("span",null,r))}var d="tags_XVD_",u="tag_JSN8";function v(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(d,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:u},n.createElement(m,{name:t,permalink:a}))}))))}},31384:function(e,t,a){a.r(t),a.d(t,{default:function(){return ee}});var n=a(67294),l=a(86010),r=a(83117),s=a(95999),i=a(71750);function c(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(i.Z,(0,r.Z)({},t,{subLabel:n.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(i.Z,(0,r.Z)({},a,{subLabel:n.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var o=a(52263),m=a(39960),d=a(65551),u=a(30662);var v={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){var t=v[e.versionMetadata.banner];return n.createElement(t,e)}function E(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(m.Z,{to:a,onClick:l},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,a=e.className,r=e.versionMetadata,s=(0,o.Z)().siteConfig.title,i=(0,d.gA)({failfast:!0}).pluginId,c=(0,u.J)(i).savePreferredVersionName,m=(0,d.Jo)(i),v=m.latestDocSuggestion,p=m.latestVersionSuggestion,g=null!=v?v:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:s,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(E,{versionLabel:p.label,to:g.path,onClick:function(){return c(p.name)}})))}function g(e){var t=e.className,a=(0,u.E6)();return a.banner?n.createElement(p,{className:t,versionMetadata:a}):null}function h(e){var t=e.className,a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(s.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function f(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function N(e){var t=e.lastUpdatedBy;return n.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(f,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(N,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var L=a(86753),Z=a(8727),k="lastUpdated_foO9";function C(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(Z.Z,e)))}function U(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,s=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(L.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",k)},(a||r)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function y(e){var t=e.content.metadata,a=t.editUrl,r=t.lastUpdatedAt,s=t.formattedLastUpdatedAt,i=t.lastUpdatedBy,c=t.tags,o=c.length>0,m=!!(a||r||i);return o||m?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},o&&n.createElement(C,{tags:c}),m&&n.createElement(U,{editUrl:a,lastUpdatedAt:r,lastUpdatedBy:i,formattedLastUpdatedAt:s})):null}var T=a(51575),A="tocCollapsible_jdIR",M="tocCollapsibleButton_Fzxq",x="tocCollapsibleContent_MpvI",w="tocCollapsibleExpanded_laf4",H=a(25002);function B(e){var t=e.toc,a=e.className,r=e.minHeadingLevel,i=e.maxHeadingLevel,c=(0,u.uR)({initialState:!0}),o=c.collapsed,m=c.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(A,!o&&w,a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",M),onClick:m},n.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:x,collapsed:o},n.createElement(H.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:i})))}var I=a(39649),S="docItemContainer_vinB",D="docItemCol_DM6M",V="tocMobile_TmEX",P={breadcrumbsContainer:"breadcrumbsContainer_Xlws"},F=a(44996);function O(e){var t=e.children,a=e.href,l="breadcrumbs__link";return a?n.createElement(m.Z,{className:l,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:l,itemProp:"item name"},t)}function R(e){var t=e.children,a=e.active,r=e.index;return n.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t,n.createElement("meta",{itemProp:"position",content:String(r+1)}))}function q(){var e=(0,F.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(m.Z,{className:(0,l.Z)("breadcrumbs__link",P.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function z(){var e=(0,u.s1)(),t=(0,u.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(u.kM.docs.docBreadcrumbs,P.breadcrumbsContainer),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(q,null),e.map((function(t,a){return n.createElement(R,{key:a,active:a===e.length-1,index:a},n.createElement(O,{href:a<e.length-1?t.href:void 0},t.label))})))):null}var X=a(26926);function J(e){var t,a=e.content,l=a.metadata,r=a.frontMatter,s=a.assets,i=r.keywords,c=l.description,o=l.title,m=null!=(t=s.image)?t:r.image;return n.createElement(u.d,{title:o,description:c,keywords:i,image:m})}function Q(e){var t=e.content,a=t.metadata,r=t.frontMatter,s=r.hide_title,i=r.hide_table_of_contents,o=r.toc_min_heading_level,m=r.toc_max_heading_level,d=a.title,v=!s&&void 0===t.contentTitle,b=(0,u.iP)(),E=!i&&t.toc&&t.toc.length>0,p=E&&("desktop"===b||"ssr"===b);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!i&&D)},n.createElement(g,null),n.createElement("div",{className:S},n.createElement("article",null,n.createElement(z,null),n.createElement(h,null),E&&n.createElement(B,{toc:t.toc,minHeadingLevel:o,maxHeadingLevel:m,className:(0,l.Z)(u.kM.docs.docTocMobile,V)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},v&&n.createElement("header",null,n.createElement(I.Z,{as:"h1"},d)),n.createElement(X.Z,null,n.createElement(t,null))),n.createElement(y,e)),n.createElement(c,{previous:a.previous,next:a.next}))),p&&n.createElement("div",{className:"col col--3"},n.createElement(T.Z,{toc:t.toc,minHeadingLevel:o,maxHeadingLevel:m,className:u.kM.docs.docTocDesktop})))}function G(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(u.FG,{className:t},n.createElement(J,e),n.createElement(Q,e))}var j="Root_noPZ",K="Lightbox_IiBg",W="LightboxImageContainer_Qm_K",Y="LightboxClose_Uqv8",$="LightboxAsset_vqXU";function ee(e){var t=n.useRef(),a=n.useState(null),l=a[0],r=a[1];function s(e){r({src:e.target.src,type:e.target.tagName})}return n.useEffect((function(){if(t.current){var e=Array.from(t.current.querySelectorAll("img")),a=Array.from(t.current.querySelectorAll("video"));return[].concat(e,a).forEach((function(e){e.style.cursor="pointer",e.addEventListener("click",s)})),function(){[].concat(e,a).forEach((function(e){e.removeEventListener("click",s)}))}}}),[t.current]),n.createElement(n.Fragment,null,l&&n.createElement("div",{className:K,onClick:function(){return r(null)}},n.createElement("div",{className:W},n.createElement("button",{className:Y},"\u2715"),"IMG"===l.type&&n.createElement("img",{className:$,src:l.src}),"VIDEO"===l.type&&n.createElement("video",{className:$,src:l.src,autoPlay:!0,loop:!0}))),n.createElement("div",{ref:t,className:j},n.createElement(G,e)))}}}]);