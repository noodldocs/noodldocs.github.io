# Routes and navigation
In the [Navigation](/guides/navigation.md) guide we covered the basics of navigation and how to use stacks for front and back navigation. This is very useful when working on mobile and app experiences, but when creating desktop type web experiences we need to work with routes, i.e. mapping URL paths and patterns to pages. This guide will cover how these concepts work in Noodl.

For this guide we have an example of routes and navigation. You can go ahead and create a new project by importing this into Noodl.

<div class="ndl-images">
    <img src="/guides/routes/import-screen.png" class="ndl-image large"></img>   
    <button class="ndl-import-button" onClick='importIntoNoodl("guides/routes/project.zip",{name:"Routes Guide",thumb:"guides/routes/import-screen.png"})'></button>
</div>

## Navigation stacks and routes
This example contains many of the important aspects of navigation with routes. First let's take a look at the **App** component, this is as you can see the root component for this application (it has the little **Home** icon next to it, both in the canvas view and in the components panel).

<div class="ndl-images">
    <img src="/guides/routes/app-root-1.png" class="ndl-image med"></img>  
    <img src="/guides/routes/app-root-2.png" class="ndl-image med"></img>  
</div>

This component has the root navigation stack, in fact it is very simple, it contains only a group and the **Navigation Stack** node (besides from the sample data that we use in the application).

![](routes/app-nodes.png ':class=img-size-l')

If you take a closer look at the properties of the navigation stack you will see that it has two pages defined:

- **Main** This is the main page, it shows all the parks as a grid.
- **Details** This page shows the details for one park.

As you can see in the properties each page has the visual component for that page defined, it also has a **Path** property. This is the URL that will be used for this page, it will be set on the URL bar of the browser when navigating to the page with the navigation nodes and if the URL in the browser is changed the corresponding page will be shown.

![](routes/main-pages.png ':class=img-size-m')

?> Note that the order of the pages in the list is important for routes as the navigation stack will match the route against them one by one until it finds a match. So more detailed paths should be a the top.

![](routes/main-general.png ':class=img-size-m')

You must set the **Use Routes** property to true in order for the routes to appear under each page. The start page is also important as it will be the page shown if none of the URL paths are a match.

## Page parameters
The details page also uses a parameter in the path, this is specified using the **{...}** syntax, as you can see in the example the **{Park Id}** is the second part of the path to the details page. This means that it will match paths that follow the pattern e.g. `parks/my-park` and will pass the second part of this path `my-park` as a **Component Input** to the `/Part Details` component when it is displayed.

If you take a look at the **Park Details** component you can see that the **Park Id** input is used to find the data for the park and display it.

![](routes/park-id-input.png ':class=img-size-l')

Now let's take a look at the **Main** component, here the navigation to the **Details** page is performed with the **Navigate** node. It is triggered when a **Park Item** is clicked and the corrensponding **Item Id** is passed with the navigation. The **Navigate** node will automatically expose all **Component Inputs** of the target page, in this case the **Park Id** input, and as **{Park Id}** is used in the path of the target page the provided value will be insterted there as well. 

![](routes/main-navigate.png ':class=img-size-l')

So if the item with id `grand-canyon` is clicked the URL will be updated to `parks/grand-canyon`. Let's also take a look at the properties of the **Navigate** node.

![](routes/main-navigate-props.png ':class=img-size-m')

Here you can see that if uses the **Main** navigation stack and that the target page is the **Details** page just as expected. But it also has the navigation **Mode** set to **Replace**. This is often the case for desktop web experiences, it means that all content of the navigation stack is replaced with the current page, as opposed to the normal mode when the page is pushed on top of the current top page.

## Nested navigation stacks
It's perfectly fine to nest **Navigation Stack**s, that is to have navigation stacks in your pages. Let's take a closer look at the effect this has to routes. If you open the **Park Details** component, you will see that it has an additional navigation stack for the comments section. If you examine it's properties you will see that it has a similar setup to the **Main** navigation stack in that it has one page that shows the list and then another page that shows the details for each comment, with a similar path pattern.

![](routes/details-stack-props.png ':class=img-size-m')

The path for this stack is relative to it's parent stack, so if you were to navigate to the **Comment details** page for a given comment item the resulting url might be `parks/grand-canyon/comments/c0002`. Also if you where to put in the following path in the browser `parks/yosemite/comments/c0006` you would be presented with the details for _Yosemite_ and with the details for the specified comment.

?> The **Id**s of the park and comment objects are provided in the sample data in the **App** component. If you would like to add more data or get an understanding for how objects and arrays work check out the [Arrays](/guides/arrays.md) or [Variables and Objects](/guides/variables-and-objects.md) guides.

## Hash routing vs path routing
There are two types of routing supported, by default Noodl uses something called hash routing, this makes the URL in the browser look something like this `#/parks/yosemite/comments/c0006`. It uses the `#` function of paths to encode the path for the navigation stacks. You can also disable this to use traditional routing, this is done in the project settings under the **Navigation** section.

![](routes/project-settings.png ':class=img-size-m')

If you switch to traditional path routing it is important that the hosting solution you use for your app supports these types of paths for single page applications.

## Navigate to path
So far we have been navigating by changing the page of a certain **Navigation Stack** and thus updating the URL. But if we want to navigate on multiple stacks e.g. by reaching a page that requires multiple nested stacks to be navigated or if we want to update other aspects of the URL such as the query parameters we can use the **Navigate To Path** node. An example of this node can be found in the **Main** component.

![](routes/navigate-to-path.png ':class=img-size-l')

In the example the filter bar at the top of the **Main** component is used to filter the parks on their names. In order to support URL paths to include the filter we can use the a query parameter of the path. For this we use the **Navigate To Path** node.

![](routes/navigate-to-path-props.png ':class=img-size-m')

So the **Navigate To Path** will navigate to the `/parks` url and will include a query parameter called **filter** which is the content of the text input. All query parameters are made available as **Component Inputs** to the all pages that are part of a navigation stack. So we can simply use the **filter** component input.