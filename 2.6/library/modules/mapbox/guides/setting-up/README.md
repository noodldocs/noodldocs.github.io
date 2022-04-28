# Setting up the Mapbox Module

## What you will learn in this guide

This guide will show you how to include the Mapbox module in a project and set up an Mapbox API key to use for your application.

## Overview

We will go though the following steps:

-   Install the Mapbox Module in a Noodl Project.
-   Create an Access Token on the Mapbox account
-   Create a minimal Mapbox App in Noodl

There is also a video walking through the guide.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/l5HN5bPSWGY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Install the Mapbox Module

The most easy way to get started with the Mapbox Module is to use the "Mapbox" template when creating a new project in Noodl. In that template, the Mapbox module is already included. Note that the template will also need you Mapbox Access Token.

However, if you have an existing project, or want to start from a different template, it's easy to get started as well. Just follow these instructions.

When in the project, open the "Module" tab to the left. Find the "Mapbox" module and click "Add".

<div className="ndl-image-with-background s">

![](/library/modules/mapbox/guides/setting-up/module-1.png)

</div>

After the module is imported, you should now be able to find the [Mapbox Map](/library/modules/mapbox/mapbox-map.md) node in the node picker. Right click in the node editor area to bring up the node picker. Look under "External libraries" to find the **Mapbox Map** node.

<div className="ndl-image-with-background s">

![](/library/modules/mapbox/guides/setting-up/nodepicker-1.png)

</div>

Add the node. Then put it as a child to your main App group. As you will see, you will immedieatly get a warning: _"No access token. Please specify one in the Project Settings and reload"_.

<div className="ndl-image-with-background">

![](/library/modules/mapbox/guides/setting-up/no-token.png)

</div>

So to use the Mapbox Module you need an access token from Mapbox. You can read more about Access tokens [here](https://docs.mapbox.com/help/getting-started/access-tokens/) and also follow instructions on how to create one. Among other things you will have to set up an account on Mapbox unless you already have one.

## Entering the Mapbox Access Token

Once you got the token (which will look like a long password) you open up the "Project Settings" panel by clicking the cogwheel in the main panel to the left. Copy/Paste the token into the field called "Mapbox Access Token"

<div className="ndl-image-with-background">

![](/library/modules/mapbox/guides/setting-up/token-1.png)

</div>

Once you've added in the token, reload the viewer, and you should now have a Mapbox map showing in your App, something like below.

<div className="ndl-image-with-background">

![](/library/modules/mapbox/guides/setting-up/screen-1.png)

</div>

You can play a little with the map. Pan and zoom. The button in the top right corner will show your current position and center the map around it, _however for privacy reasons this only works once your app is deployed on a https-url, so it will not work in the viewer_. If you want to try it out quickly you can make a Sandbox Deployment using [this](/docs/guides/deploy/deploying-an-app-on-sandbox) guide, since a Sandbox deployment will have an url `https://<my_url>.noodl.app`.
