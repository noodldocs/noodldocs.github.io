# Navigation

When building applications you generally need to navigate between screens. You can achieve this via the navigation nodes.

## Basic navigation

We have a short example that shows a simple Master / Detail navigation pattern, based on the national park app from the [For Each guide](/guides/for-each.md). We suggest that you review the [For Each guide](/guides/for-each.md) before continuing with this example. You can import the example below into Noodl by clicking the import button.

<div class="ndl-images">
    <img src="/guides/navigation/park-demo.gif" class="ndl-image small"></img>   
    <button class="ndl-import-button" onClick='importIntoNoodl("guides/navigation/project-v2.zip",{name:"Navigation Guide",thumb:"guides/for-each/screen.png"})'></button>
</div>

Using the **Navigation** node is pretty straight forward. Look at the **Main** component in the example project. Here the navigation is peformed when one of the items in the list is clicked.

<div class="ndl-images">
    <img src="/guides/navigation/main-navigate.png" class="ndl-image large"></img>   
</div>

When the _Click_ signal is sent from one of the items in the **For Each** the **Navigation** node will navigate to its specified target page. The target page is specified in the properties of the node. You simply pick the target page from the drop down, we will show you later how to add new pages to the navigation.

<div class="ndl-images">
    <img src="/guides/navigation/nav-target.png" class="ndl-image med"></img>   
</div>

When the navigation is performed a new copy of the target component is created and inserted on top of the screen that is currently on showing (on top). Navigation is managed in a _Navigation Stack_, where each time you navigate a new component is pushed on top of the stack.

When this happens you can also define a navigation transition. There are a few built in transitions that you can choose from and customize.

<div class="ndl-images">
    <img src="/guides/navigation/nav-transition.png" class="ndl-image med"></img>   
</div>

Try playing around with the different transitions and parameters. You can create lots of different effects using the built in transitions. Later we will also look at creating your own custom transitions.

<div class="ndl-images">
    <img src="/guides/navigation/transition-params.png" class="ndl-image med"></img>   
</div>

Here is an example of the above customized transition:

<div class="ndl-images">
    <img src="/guides/navigation/transition-demo.gif" class="ndl-image small"></img>   
</div>

Have a look at the reference documentation for the [Navigate](/nodes/navigation/navigate.md) node for more details on the different transitions.

Another important aspect of navigation is passing parameters to the target screen. In this case we want to pass the _Id_ of the **Object** whose data we want to display in the target screen. All **Component Inputs** of the target page component is made available as inputs on the **Navigate** node, so you can provide data to the page at the time of navigation.

<div class="ndl-images">
    <img src="/guides/navigation/param-inputs.png" class="ndl-image large"></img>   
</div>

In this example the _Id_ is passed to the target screen (the **Details** component). The _Id_ is used to access the **Object** containing the data we want to show. That's all we need to navigate from one screen to another.

The **Details** screen uses the **Navigate Back** node to return to the screen that started the navigation. This essentially pops the stack, i.e. removes the current top component, to reveal the one underneath.

<div class="ndl-images">
    <img src="/guides/navigation/navigate-back.png" class="ndl-image med"></img>   
</div>

The same transition used when navigating to the target screen is used to go back. All transitions have forward and back animations.

## Navigation stack

If you inspect the **App** compnent, which is also the root component of the application, you will see another core navigation node, the **Navigation Stack** node. This node represents the actual surface where navigation occurs, you have have many different navigation stacks.

<div class="ndl-images">
    <img src="/guides/navigation/navigation-stack.png" class="ndl-image med"></img>   
</div>

After you create and place the **Navigation Stack** where you want it (it will consume the entire space of its parent) you need to specify a _Name_ for the stack. This _Name_ is used in **Navigate** nodes to refer to which stack should be used for navigation.

<div class="ndl-images">
    <img src="/guides/navigation/stack-name.png" class="ndl-image med"></img>   
</div>

You also need to specify a _Start Page_. This is the page that is shown in the navigation stack when it is first created, before any navigation is performed.

You can manage the pages of the navigation stack via the properties. Here you can create new pages, remove and rename pages. You must provide a visual component for each page.

<div class="ndl-images">
    <img src="/guides/navigation/stack-pages.png" class="ndl-image med"></img>   
</div>
