# Navigation
When building applications you generally need to navigate between screens. You can achieve this via the navigation nodes. These nodes are not standard and you need to either create a project from a template that includes them or import them into an existing project via the library panel.

## Setup
When you create a new project you can choose the *Mobile Web App* template. This template includes the *Navigation* library module from start. It also includes a simple example.

<div class="ndl-images">
    <img src="/guides/navigation/nav-template.png" class="ndl-image med"></img>   
</div>

If you have an existing project started from scratch and you need to add support for navigation you can do this via the library panel. Simply click *Add* and the module is added to your project. If there are any conflicts you will be notified.

<div class="ndl-images">
    <img src="/guides/navigation/nav-library.png" class="ndl-image med"></img>   
</div>

## Basic navigation
We have a short example that shows a simple Master / Detail navigation pattern based on the national park app from the [For Each guide](/guides/for-each.md), we suggest that you review that guide if you have not already done so. You can import this project and follow along if you like.

<div class="ndl-images">
    <img src="/guides/navigation/park-demo.gif" class="ndl-image small"></img>   
    <button class="ndl-import-button" onClick='importIntoNoodl("guides/navigation/project.zip")'></button>
</div>

Using the *Navigation* node is pretty straight forward. You can look at the **Main** component in the example project, here the navigation is peformed when one of the items in the list is clicked.

<div class="ndl-images">
    <img src="/guides/navigation/main-navigate.png" class="ndl-image med"></img>   
</div>

When the *Click* signal is sent from one of the items in the *For Each* the *Navigation* node will navigate to it's specified target page. The target page is specified in the properties of the node. You simply pick a component from your project, it must be a component that has visual nodes.

<div class="ndl-images">
    <img src="/guides/navigation/nav-target.png" class="ndl-image med"></img>   
</div>

When the navigation is performed a new copy of the target component is created and inserted on top of the screen that is currently on top. So navigation is managed in a *Stack* where each time you navigate a new component is pushed on top of the stack.

When this happens you can also define a navigation transition. There are a few transitions that you can choose from and customize.

<div class="ndl-images">
    <img src="/guides/navigation/nav-transition.png" class="ndl-image small"></img>   
</div>

Try playing around with the different transitions and parameters. With them you can create lots of different effects. Later we will also look at creating your own custom transitions.

<div class="ndl-images">
    <img src="/guides/navigation/transition-params.png" class="ndl-image small"></img>   
</div>

Here is an example of the above customized transition:

<div class="ndl-images">
    <img src="/guides/navigation/transition-demo.gif" class="ndl-image small"></img>   
</div>

Have a look at the reference documentation for the [Navigate](/nodes/navigation/navigate.md) node for more details of the different transitions. Another important aspect of navigation is passing parameters to the target screen. In this case we want to pass the *Id* of the Object that we want to display. You can create the paramter inputs on the navigation node.

<div class="ndl-images">
    <img src="/guides/navigation/nav-params.png" class="ndl-image small"></img>   
</div>

Then you simply connect the data you want to pass to the target screen. The data will be provided as component inputs in the target screen component.

<div class="ndl-images">
    <img src="/guides/navigation/param-inputs.png" class="ndl-image med"></img>   
</div>

In this example the *Id* is passed to the target screen (in the example the **Details** component) which is used to access the *Object* containing the data we want to show. That's all we need to navigate from one screen to another.

The **Details** screen then uses the **Navigate Back** node to return to the screen that started the navigation. This essentially pops the stack, i.e. removes the current top component to reveal the one underneath.

<div class="ndl-images">
    <img src="/guides/navigation/navigate-back.png" class="ndl-image med"></img>   
</div>

The same transition used when navigating to the target screen is used to go back. All transitions both has a forward and back animation.

## Navigation stack
Thats it for the basics of navigation, now let's dive into some of the more advanced use cases. In the example above we use the entire screen as the navigation stack. This is called the *Default* stack. But you can also create your own stacks anywhere in the visual hierarchy. This is done via the **Navigation Stack** node.

<div class="ndl-images">
    <img src="/guides/navigation/navigation-stack.png" class="ndl-image small"></img>   
</div>

After you create and place the **Navigation Stack** where you want it (it will consume the entire space of it's parent) you need to specify the **Name** of the stack. This is used in Navigate nodes to refer to which stack is to be navigated.

<div class="ndl-images">
    <img src="/guides/navigation/stack-name.png" class="ndl-image med"></img>   
</div>

You also need to specify the **Start Page**, this is simply the component the will be shown in the navigation stack when it is first created, before any navigation is performed.

<div class="ndl-images">
    <img src="/guides/navigation/start-page.png" class="ndl-image small"></img>   
</div>

Now you perform navigation just like before, but now you can select the name of your **Navigation Stack** instead of the Default full screen.

<div class="ndl-images">
    <img src="/guides/navigation/choose-stack.png" class="ndl-image med"></img>   
</div>

Take a look at the reference documentation for the [Navigation Stack](/nodes/navigation/navigation-stack.md) node for more details.
