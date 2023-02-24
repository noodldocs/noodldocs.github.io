"use strict";(self.webpackChunknew_noodl_docs=self.webpackChunknew_noodl_docs||[]).push([[2840],{76949:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"february-2023-2","metadata":{"permalink":"/2.8/whats-new/february-2023-2","source":"@site/whats-new/2023-02-24.md","title":"Noodl 2.8.2","description":"Noodl 2.8.2","date":"2023-02-24T00:00:00.000Z","formattedDate":"February 24, 2023","tags":[],"truncated":false,"authors":[],"frontMatter":{"title":"Noodl 2.8.2","description":"Noodl 2.8.2","slug":"february-2023-2","hide_table_of_contents":false},"nextItem":{"title":"Noodl 2.8.1","permalink":"/2.8/whats-new/february-2023"}},"content":"<section>\\n\\n## Columns node\\n\\nA new visual node: [Columns](https://docs.noodl.net/2.8/nodes/basic-elements/columns)\\n\\nThis is useful for layouts that has columns with gaps between them, and especially powerful in combination with media queries for handling responsive layouts.\\n\\n![](./columns-node.png)\\n\\n</section>\\n\\n<section>\\n\\n## Right click in design mode\\n\\nThe design mode has a new feature. Right click to get a list of all visual elements under the mouse cursor, and click to jump to the corresponding node.\\n\\n![](./right-click-design-mode.png)\\n\\n</section>\\n\\n<section>\\n\\n## Other notable changes\\n\\nExpanded the Noodl.Records Javascript API:\\n\\n- Support for aggregate queries\\n- Support for geo queries\\n- Specific columns of data can be selected to be included in the result of a query, instead of all data\\n- The ability to follow pointers and include their data directly in the result.\\n\\nOther changes:\\n\\n- A new project setting for selecting different positions for the Noodl badge.\\n- REST node can now parse results with content type application/geo+json.\\n- REST node will handle responses that aren\'t JSON as raw text instead of showing a warning.\\n- A Javascript object can now be connected to the \\"Id\\" input of an Object node.\\n\\n</section>\\n\\n<section>\\n\\n## Bug fixes\\n\\n- Fixed issue with property panel not updating correctly when swtiching variants\\n- Fixed stale information in the version control panel after creating or applying a stash\\n- Query Records and a few other nodes and APIs had issues with arrays that included a null object.\\n- Fixed styling issue in Radio Buttons that had multi line labels\\n- Fixed bug with the \\"Cancel\\" input to the REST node\\n- Fixed an UI error when a merge conflict happened in Node parameters that were objects and not simple primitives\\n- Improved how Noodl handes saving the project file to reduce the chance of a corrupt project on Windows.\\n\\n</section>"},{"id":"february-2023","metadata":{"permalink":"/2.8/whats-new/february-2023","source":"@site/whats-new/2023-02-08.md","title":"Noodl 2.8.1","description":"Noodl 2.8.1","date":"2023-02-08T00:00:00.000Z","formattedDate":"February 8, 2023","tags":[],"truncated":false,"authors":[],"frontMatter":{"title":"Noodl 2.8.1","description":"Noodl 2.8.1","slug":"february-2023","hide_table_of_contents":false},"prevItem":{"title":"Noodl 2.8.2","permalink":"/2.8/whats-new/february-2023-2"},"nextItem":{"title":"Noodl 2.8 (??)","permalink":"/2.8/whats-new/january-2023"}},"content":"## Changelog\\n- Fixed memory leaks that reduced performance for some larger applications\\n- Added Javascript API for deleting cloud files\\n- Inputs and Outputs in Function/REST/Script nodes can now include underscores\\n- Noodl logo on deployed applications that are using the free tier\\n- Improved layout in interactive lesson popups, and improved lesson layout on Noodl start page\\n- Static array shows warnings when malformed JSON is parsed"},{"id":"january-2023","metadata":{"permalink":"/2.8/whats-new/january-2023","source":"@site/whats-new/2023-01-16.md","title":"Noodl 2.8 (??)","description":"Noodl 2.8 introduces cloud functions. Create logic that runs in the cloud using the same noodling you already know and love.","date":"2023-01-16T00:00:00.000Z","formattedDate":"January 16, 2023","tags":[],"truncated":false,"authors":[],"frontMatter":{"title":"Noodl 2.8 (??)","description":"Noodl 2.8 introduces cloud functions. Create logic that runs in the cloud using the same noodling you already know and love.","slug":"january-2023","hide_table_of_contents":false},"prevItem":{"title":"Noodl 2.8.1","permalink":"/2.8/whats-new/february-2023"},"nextItem":{"title":"Noodl 2.7.2 (Momofuku)","permalink":"/2.8/whats-new/november-2022-2"}},"content":"<section>\\n\\n![](./cloud-functions.png)\\n## Cloud Functions\\n\\nYou can now create logic components that run in your Noodl Cloud Services, just like you are used to on the frontend. Backend tasks like signing up users with external services, doing complex database lookups faster, scheduling background jobs and much more can now be done at Noodl-speed, and deployed with one click.\\n\\n</section>\\n\\n<section>\\n\\n\\n## A brand new design\\n\\nThe editor interface has gone through a face lift to increase consistency and clarity. We have also added a couple of new features that lay the groundwork for the versions to come during 2023. Most notably, the Component Canvas has been replaced with a much nicer Preview Canvas, letting you navigate your app with a new path dropdown and inspect it in different device sizes. We have also added a design mode (similar to the \u201cinspect\u201d button in previous versions) where UI elements can be selected and revealed in the Node Canvas.\\n\\n\\n</section>\\n\\n<section>\\n\\n![](./version-control.png)\\n\\n## Updated version control\\n\\nThe whole version control UX has been redesigned to be faster and easier to use, and to be able to bring you more of the power features of Git (like enhanced merging and diffing) right inside of the Noodl editor. The best low-code version control system just got even better.\\n\\n</section>\\n\\n<section>\\n\\n## More complete Javascript API\\n\\nThis release allows power users to be even more powerful by providing a more complete JavaScript API. Anything you can do with a node and connections, you can now do inside of the Function and Script nodes.\\n\\n</section>"},{"id":"november-2022-2","metadata":{"permalink":"/2.8/whats-new/november-2022-2","source":"@site/whats-new/2022-11-18.md","title":"Noodl 2.7.2 (Momofuku)","description":"Noodl 2.7.2 fixes a deploy bug reported in 2.7.1","date":"2022-11-18T00:00:00.000Z","formattedDate":"November 18, 2022","tags":[],"truncated":false,"authors":[],"frontMatter":{"title":"Noodl 2.7.2 (Momofuku)","description":"Noodl 2.7.2 fixes a deploy bug reported in 2.7.1","slug":"november-2022-2","hide_table_of_contents":true},"prevItem":{"title":"Noodl 2.8 (??)","permalink":"/2.8/whats-new/january-2023"},"nextItem":{"title":"Noodl 2.7.1 (Momofuku)","permalink":"/2.8/whats-new/november-2022"}},"content":"<section>\\n\\n## Fixes\\n- Fixed a deployement bug that caused a small amount of projects to fail to deploy\\n\\n## Changes\\n- Upgraded Electron so Noodl uses a newer version of Chromium\\n\\n</section>"},{"id":"november-2022","metadata":{"permalink":"/2.8/whats-new/november-2022","source":"@site/whats-new/2022-11-08.md","title":"Noodl 2.7.1 (Momofuku)","description":"Noodl 2.7.1 fixes a few bugs reported in 2.7.0","date":"2022-11-08T00:00:00.000Z","formattedDate":"November 8, 2022","tags":[],"truncated":false,"authors":[],"frontMatter":{"title":"Noodl 2.7.1 (Momofuku)","description":"Noodl 2.7.1 fixes a few bugs reported in 2.7.0","slug":"november-2022","hide_table_of_contents":true},"prevItem":{"title":"Noodl 2.7.2 (Momofuku)","permalink":"/2.8/whats-new/november-2022-2"},"nextItem":{"title":"Noodl 2.7 (Momofuku)","permalink":"/2.8/whats-new/october-2022"}},"content":"<section>\\n\\n## Fixes\\n- Fixed regression causing deployment to take a bit longer\\n- Fixed issue with the cloud service dashboard not showing relations correctly\\n- Fixed issue with queries that included relation constraints\\n\\n</section>"},{"id":"october-2022","metadata":{"permalink":"/2.8/whats-new/october-2022","source":"@site/whats-new/2022-10-25.md","title":"Noodl 2.7 (Momofuku)","description":"Noodl 2.7 introduces an important new concept that will improve your productivity called \u201cprefabs\u201d, it also has some features to help you organise projects better and a few general improvements.","date":"2022-10-25T00:00:00.000Z","formattedDate":"October 25, 2022","tags":[],"truncated":false,"authors":[],"frontMatter":{"title":"Noodl 2.7 (Momofuku)","description":"Noodl 2.7 introduces an important new concept that will improve your productivity called \u201cprefabs\u201d, it also has some features to help you organise projects better and a few general improvements.","slug":"october-2022","hide_table_of_contents":false},"prevItem":{"title":"Noodl 2.7.1 (Momofuku)","permalink":"/2.8/whats-new/november-2022"},"nextItem":{"title":"September update","permalink":"/2.8/whats-new/september-2022"}},"content":"<section>\\n\\n![Prefab Tab](./prefabs.png)\\n## Prefabs\\n\\nA new concept is introduced called Prefabs, it is pre-fabricated components, made from Noodl core nodes, that you can easily clone into your project as a starting point for building a wide range of user interfaces. You can also find guides helping you to take these prefabs and customize them to suit your own specific needs.\\n</section>\\n\\n<section>\\n\\n\\n![Prefab Tab](./nestedcomponents.png)\\n\\n## Sub components\\n\\nTo make it easier to organize your project, work with Prefabs, and to create custom components we have enabled the possibility to move components into other components just like folders. This can make components that are dependent on other components to function move self-sustainable. \\n\\nFolder component children can be created just like components in folders - by dragging in to, or creating new ones from the parents context menu.\\n\\n</section>\\n\\n<section>\\n\\n![Prefab Tab](./arrayinput.png)\\n\\n## Editable array inputs\\n\\nNodes with array type inputs can now be edited directly from the property panel. This makes it easier to provide static data. You can provide any javascript which means you can run computations, fetch variables etc.\\n\\n</section>\\n\\n<section>\\n\\n![Prefab Tab](./templates.png)\\n\\n## New project templates\\n\\nThis release comes with update project templates to handle some of the common navigation structures for web apps. Previous project templates have been moved to the examples section of the documentation.\\n\\n</section>"},{"id":"september-2022","metadata":{"permalink":"/2.8/whats-new/september-2022","source":"@site/whats-new/2022-09-03.md","title":"September update","description":"Platform improvements for September 2022","date":"2022-09-03T00:00:00.000Z","formattedDate":"September 3, 2022","tags":[],"truncated":false,"authors":[],"frontMatter":{"title":"September update","description":"Platform improvements for September 2022","slug":"september-2022","hide_table_of_contents":false},"prevItem":{"title":"Noodl 2.7 (Momofuku)","permalink":"/2.8/whats-new/october-2022"}},"content":"## Performance improvements\\n\\nThe Noodl Editor has been optimised and sped up, and two notable bugs have been fixed:\\n\\n- Under certain conditions the node graph view would not respond to pan or zoom interactions\\n- Fixed a navigation bug in the Page Router when nesting three or more routers"}]}')}}]);