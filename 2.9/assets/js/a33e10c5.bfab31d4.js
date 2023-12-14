"use strict";(self.webpackChunknoodl_docs=self.webpackChunknoodl_docs||[]).push([[5790],{78639:e=>{e.exports=JSON.parse('{"pluginId":"javascript","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"apiSidebar":[{"type":"link","label":"Javascript API","href":"/2.9/javascript/overview","docId":"overview"},{"type":"category","label":"References","collapsible":true,"items":[{"type":"link","label":"Variables","href":"/2.9/javascript/reference/variables/","docId":"reference/variables/README"},{"type":"link","label":"Objects","href":"/2.9/javascript/reference/objects/","docId":"reference/objects/README"},{"type":"link","label":"Object","href":"/2.9/javascript/reference/object/","docId":"reference/object/README"},{"type":"link","label":"Arrays","href":"/2.9/javascript/reference/arrays/","docId":"reference/arrays/README"},{"type":"link","label":"Events","href":"/2.9/javascript/reference/events/","docId":"reference/events/README"},{"type":"link","label":"Component","href":"/2.9/javascript/reference/component/","docId":"reference/component/README"},{"type":"link","label":"Records","href":"/2.9/javascript/reference/records/","docId":"reference/records/README"},{"type":"link","label":"Users","href":"/2.9/javascript/reference/users/","docId":"reference/users/README"},{"type":"link","label":"Files","href":"/2.9/javascript/reference/files/","docId":"reference/files/README"},{"type":"link","label":"Navigation","href":"/2.9/javascript/reference/navigation/","docId":"reference/navigation/README"},{"type":"link","label":"CloudFunctions","href":"/2.9/javascript/reference/cloudfunctions/","docId":"reference/cloudfunctions/README"},{"type":"link","label":"SEO","href":"/2.9/javascript/reference/seo/","docId":"reference/seo/README"}],"collapsed":true,"href":"/2.9/javascript/reference/overview/"},{"type":"category","label":"Samples","collapsible":true,"items":[{"type":"link","label":"Get DOM Element","href":"/2.9/javascript/samples/get-dom-element","docId":"samples/get-dom-element"},{"type":"link","label":"Pointer Position","href":"/2.9/javascript/samples/pointer-position","docId":"samples/pointer-position"}],"collapsed":true},{"type":"category","label":"Extending","collapsible":true,"items":[{"type":"link","label":"Simple Logic Node","href":"/2.9/javascript/extending/create-lib","docId":"extending/create-lib"},{"type":"link","label":"Visual Node with React","href":"/2.9/javascript/extending/create-react-lib","docId":"extending/create-react-lib"}],"collapsed":true,"href":"/2.9/javascript/extending/overview"}]},"docs":{"extending/build-script/change-nodes-at-build-time":{"id":"extending/build-script/change-nodes-at-build-time","title":"Change nodes at build time","description":"This is recommended to only use in 2.7.x."},"extending/build-script/overview":{"id":"extending/build-script/overview","title":"Create a build script","description":"Noodl has a way where you can hook into the different build events that"},"extending/build-script/sitemap-and-seo":{"id":"extending/build-script/sitemap-and-seo","title":"Build script that generate Sitemap and static pages","description":"Having a sitemap.xml is very important for SEO,"},"extending/create-lib":{"id":"extending/create-lib","title":"Create a new core node","description":"Noodl is very extensible. As a developer you can add new modules with new capablities, create connections to data or make new visual components in your workspace. This guide gets us started by showing how the Noodl command line tool works and how to create an extension module with a single new node. This node will behave and appear just like the standard core nodes of Noodl.","sidebar":"apiSidebar"},"extending/create-react-lib":{"id":"extending/create-react-lib","title":"Create a Visual node with React","description":"Noodl is built with React which makes it easy for you to add custom or community React components to your workspace. This guide will help you create a React library from scratch and push it to your Noodl workspace.","sidebar":"apiSidebar"},"extending/module/manifest":{"id":"extending/module/manifest","title":"Module Manifest","description":"WIP"},"extending/overview":{"id":"extending/overview","title":"Extending Noodl","description":"One important aspect to improve productivity is extending your Noodl workspace with library modules that are tailored for your organizations needs.","sidebar":"apiSidebar"},"overview":{"id":"overview","title":"Javascript API","description":"This section contains the Javascript API reference documentation, samples and guides on how to extend Noodl with core nodes. Most Javascript is used in your project as part of nodes, most notably the Function and Script nodes. You can learn more about how to use Javascript in your Noodl projects in the Client side business logic with Javascript guide, or when writing Javascript in cloud functions Javascript In Cloud Functions.","sidebar":"apiSidebar"},"reference/arrays/README":{"id":"reference/arrays/README","title":"Noodl.Arrays","description":"Only available on the frontend","sidebar":"apiSidebar"},"reference/cloudfunctions/README":{"id":"reference/cloudfunctions/README","title":"Noodl.CloudFunctions","description":"Only available on the frontend","sidebar":"apiSidebar"},"reference/component/README":{"id":"reference/component/README","title":"Component","description":"Only available on the frontend","sidebar":"apiSidebar"},"reference/events/README":{"id":"reference/events/README","title":"Noodl.Events","description":"Only available on the frontend","sidebar":"apiSidebar"},"reference/files/README":{"id":"reference/files/README","title":"Noodl.Files","description":"The Noodl.Files service lets you access the cloud services files.","sidebar":"apiSidebar"},"reference/navigation/README":{"id":"reference/navigation/README","title":"Noodl.Navigation","description":"Only available on the frontend","sidebar":"apiSidebar"},"reference/object/README":{"id":"reference/object/README","title":"Noodl.Object","description":"Allows access to Object from Javascript. You can learn more about objects and how you use them in your Noodl applications here.","sidebar":"apiSidebar"},"reference/objects/README":{"id":"reference/objects/README","title":"Noodl.Objects","description":"One step above Variables are Objects,","sidebar":"apiSidebar"},"reference/overview/README":{"id":"reference/overview/README","title":"Reference Documentation","description":"Here you will find the reference documentation for the Noodl Javascript API that you can use in Function and Script nodes but also in other nodes such as the REST node, or when creating your own modules and code Noodl nodes.","sidebar":"apiSidebar"},"reference/records/README":{"id":"reference/records/README","title":"Noodl.Records","description":"With Records you can query, read and write records to the cloud database. All functions are async and will throw an exception if they fail.","sidebar":"apiSidebar"},"reference/seo/README":{"id":"reference/seo/README","title":"Noodl.SEO","description":"The Noodl.SEO API lets you change metatags and document titles without directly accessing the window object, this is required for server-side rendering where we don\'t have a window.","sidebar":"apiSidebar"},"reference/users/README":{"id":"reference/users/README","title":"Noodl.Users","description":"The Noodl.Users object let\'s you access the current session user.","sidebar":"apiSidebar"},"reference/variables/README":{"id":"reference/variables/README","title":"Noodl.Variables","description":"Variables are the simplest form of global data model in Noodl. You can learn more about variables in the guide. You can access all variables in your application trough the Noodl.Variables object. Changing a variable will trigger all connections to be updated for all Variable nodes in your project with the corresponding variable name.","sidebar":"apiSidebar"},"samples/get-dom-element":{"id":"samples/get-dom-element","title":"Get DOM element","description":"Sometimes you need to get access to the underlying DOM element and use the browser APIs directly.","sidebar":"apiSidebar"},"samples/pointer-position":{"id":"samples/pointer-position","title":"Pointer position example","description":"This example will attach an event listener to the body element of the web page, and listen for mousemove.","sidebar":"apiSidebar"}}}')}}]);