# Navigation

When building applications you generally need to navigate between screens. You can achieve this via the navigation nodes. These nodes are not standard and you need to either create a project from a template that includes them or import them into an existing project via the library panel.

## Setup

When you create a new project you can choose the _Mobile Web App_ template. This template includes the _Navigation_ library module from start. It also includes a simple example.

<div class="ndl-images">
    <img src="/modules/webappnavigation/guide/nav-template.png" class="ndl-image med"></img>   
</div>

If you have an existing project and you need to add support for navigation you can do this via the library panel. Scroll to find it in the list of modules or use the search field to find the **Mobile Web App Navigation** module. Simply click _Add_ and the module is added to your project. If there are any conflicts you will be notified.

<div class="ndl-images">
    <img src="/modules/webappnavigation/guide/nav-library.png" class="ndl-image med"></img>   
</div>

## Basic navigation

We have a short example that shows a simple Master / Detail navigation pattern, based on the national park app from the [For Each guide](/guides/for-each.md). We suggest that you review the [For Each guide](/guides/for-each.md) before continuing with this example. You can import the example below into Noodl by clicking the import button. You need to have a project open to import into.

<div class="ndl-images">
    <img src="/modules/webappnavigation/guide/park-demo.gif" class="ndl-image small"></img>   
    <button class="ndl-import-button" onClick='importIntoNoodl("modules/webappnavigation/guide/project.zip")'></button>
</div>

Using the **Navigation** node is pretty straight forward. Look at the **Main** component in the example project. Here the navigation is peformed when one of the items in the list is clicked.

<div class="ndl-images">
    <img src="/modules/webappnavigation/guide/main-navigate.png" class="ndl-image med"></img>   
</div>

When the _Click_ signal is sent from one of the items in the **For Each** the **Navigation** node will navigate to its specified target page. The target page is specified in the properties of the node. You simply pick a component from your project, but please note that it must be a component that has visual nodes.

<div class="ndl-images">
    <img src="/modules/webappnavigation/guide/nav-target.png" class="ndl-image med"></img>   
</div>

When the navigation is performed a new copy of the target component is created and inserted on top of the screen that is currently on showing (on top). Navigation is managed in a _Stack_, where each time you navigate a new component is pushed on top of the stack.

When this happens you can also define a navigation transition. There are a few built in transitions that you can choose from and customize.

<div class="ndl-images">
    <img src="/modules/webappnavigation/guide/nav-transition.png" class="ndl-image small"></img>   
</div>

Try playing around with the different transitions and parameters. You can create lots of different effects using the built in transitions. Later we will also look at creating your own custom transitions.

<div class="ndl-images">
    <img src="/modules/webappnavigation/guide/transition-params.png" class="ndl-image small"></img>   
</div>

Here is an example of the above customized transition:

<div class="ndl-images">
    <img src="/modules/webappnavigation/guide/transition-demo.gif" class="ndl-image small"></img>   
</div>

Have a look at the reference documentation for the [Navigate](/modules/webappnavigation/navigate.md) node for more details on the different transitions.

Another important aspect of navigation is passing parameters to the target screen. In this case we want to pass the _Id_ of the **Object** whose data we want to display in the target screen. You can create the parameter inputs on the navigation node as in the screenshot below.

<div class="ndl-images">
    <img src="/modules/webappnavigation/guide/nav-params.png" class="ndl-image small"></img>   
</div>

Then you simply connect the data you want to pass to the target screen. The data will be provided through the **Component Inputs** node in the target screen component.

<div class="ndl-images">
    <img src="/modules/webappnavigation/guide/param-inputs.png" class="ndl-image med"></img>   
</div>

In this example the _Id_ is passed to the target screen (the **Details** component). The _Id_ is used to access the **Object** containing the data we want to show. That's all we need to navigate from one screen to another.

The **Details** screen uses the **Navigate Back** node to return to the screen that started the navigation. This essentially pops the stack, i.e. removes the current top component, to reveal the one underneath.

<div class="ndl-images">
    <img src="/modules/webappnavigation/guide/navigate-back.png" class="ndl-image med"></img>   
</div>

The same transition used when navigating to the target screen is used to go back. All transitions have forward and back animations.

## Navigation stack

That's it for the basics of navigation. Now let's dive into some of the more advanced use cases. In the example above we use the entire screen as the navigation stack. This is called the _Default_ stack. You can also create your own stacks anywhere in the visual hierarchy. This is done via the **Navigation Stack** node.

<div class="ndl-images">
    <img src="/modules/webappnavigation/guide/navigation-stack.png" class="ndl-image small"></img>   
</div>

After you create and place the **Navigation Stack** where you want it (it will consume the entire space of its parent) you need to specify a _Name_ for the stack. This _Name_ is used in **Navigate** nodes to refer to which stack should be used for navigation.

<div class="ndl-images">
    <img src="/modules/webappnavigation/guide/stack-name.png" class="ndl-image med"></img>   
</div>

You also need to specify a _Start Page_. This is the component that is shown in the navigation stack when it is first created, before any navigation is performed.

<div class="ndl-images">
    <img src="/modules/webappnavigation/guide/start-page.png" class="ndl-image small"></img>   
</div>

Now you can perform navigation just like before, but now you can select the name of your **Navigation Stack** instead of the _Default_ full screen stack.

<div class="ndl-images">
    <img src="/modules/webappnavigation/guide/choose-stack.png" class="ndl-image med"></img>   
</div>

Take a look at the reference documentation for the [Navigation Stack](/modules/webappnavigation/navigation-stack.md) node for more details.
