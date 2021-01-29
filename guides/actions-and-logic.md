# Logic components

So far we have mostly looked at building user interfaces and handling user interactions. That is naturally a very big part of building applications but we also need to handle logic. Another important thing to keep in mind is that as your applications grow so does the node grapgh, and if we don't keep them in order things can get pretty messy and hard to get an overview.

Logic components is a good pattern to follow in order to package pure logical components and to keep your node graphs better structured and easier to understand. You are essentially free to structure your Noodl apps any way you want, but we usually try to stick with a folder that contains our logic components:

<div class="ndl-images">
    <img src="/guides/actions-and-logic/structure-2.png" class="ndl-image large"></img>
</div>

You can quickly create new logic components directly in the folder:

<div class="ndl-images">
    <img src="/guides/actions-and-logic/structure-1.png" class="ndl-image large"></img>
</div>

A logic component is a regular component but instead of containing visual nodes it contains logic flows. The component receives a signal that typically triggeres an action combined with any required inputs needed to perform the task. When the actions is completed it often results in one or more result signals and outputs. This is achieved via the *Component Inputs* and *Component Outputs*. These *Logic Components* are sometimes also referred to as *Actions*.

Logic components don't show up in the *Canvas View* as the don't have a visual representation. 

## A simple action
Here is an example of very simple action.

<div class="ndl-images">
    <img src="/guides/actions-and-logic/simple-example.png" class="ndl-image large"></img>
</div>

The above action is taken from the Tasks app example in the [Models and Collections](/guides/models-and-collections.md) guide. Simple logic components like these can generally be kept in the same component as the visuals but for the sake of learning lets package it into it's own logic component.

* The component has a *Do* signal input that triggers the action along with the *Text* input that is needed to complete the action.

* It has a *Done* signal when it is completed, but also a *Failure* if signal if something went wrong.

If the node graph above is put in a component that we label *Create New Task*, the action component can then simply be used where we have the user interface for this screen. This will result in a node graph that is much more readable and easier to understand.

<div class="ndl-images">
    <img src="/guides/actions-and-logic/create-new-task-action.png" class="ndl-image large"></img>
</div>

## Conditions in actions
This is the gist of the pattern that we call *Logic components* or *Actions* in Noodl. Now lets take a look at a slighly more advanced action example. This time we are going to extend the example from the [Arrays](/guides/arrays.md) guide where new objects (Users) are added to an array. A common pattern is that we need to check if a user with the same name already exists before adding, this is done with the *Action* below. 

<div class="ndl-images">
    <img src="/guides/actions-and-logic/new-user-example.png" class="ndl-image large"></img>
</div>

Lets look at it step by step, first well look at the part that checks if there already is an existing user with the provided name.

<div class="ndl-images">
    <img src="/guides/actions-and-logic/new-user-part1.png" class="ndl-image large"></img>
</div>

* First the *Users* array that holds all our user objects are passed through an *Array Filter* node.

* The *Array Filter* node will, as the name implies, filter out a set of objects from the array based on a condition. You can set conditions based on properties of the objects, learn more about [Array Filter](/nodes/data/array-filter.md) in the reference documentation. We have set up this array filter to only include the objects that have the *Name* property *Equals* a specific value, namely the *Name* input we get when this action is triggered.

<div class="ndl-images">
    <img src="/guides/actions-and-logic/array-filter-name.png" class="ndl-image med"></img>
</div>

* We then look at the *Count* output from the *Array Filter* node, we pass this trough an expression to check if it is higher than zero. If that is the case it means that there already is an object in the *Users* array that has a *Name* property with the same value as the one we get as input in this action.

* We then feed the *boolean* output from the expression into a *Condition* node. This node is very common in actions. It simply takes a *boolean* input and a signal input, *Evaluate* to trigger when the condition should be evaluated. In this case the *Condition* node will evaluate when the action is triggered and then in turn send a signal *On true* if the user already exsists in the array, or *On false* if it does not.

?> Giving important nodes in the action a description label is a great way to make the flow readable and easy to follow.

<div class="ndl-images">
    <img src="/guides/actions-and-logic/new-user-part2.png" class="ndl-image large"></img>
</div>

* If the user already exists, the *On true* signal is emitted from the *Condition* node and we just pass this as an output of this action.

<div class="ndl-images">
    <img src="/guides/actions-and-logic/new-user-part3.png" class="ndl-image large"></img>
</div>

* If on the other hand the *On false* signal is emitted we go through the add user flow from the [Arrays](/guide/arrays.md) guide to add a new user object to the *Users* array.

By using descriptive names for your *Action* components and their inputs and outputs your node graphs remain easy to read and follow even as the complexity of your application increases. Below is an example of how this newly created *Action* could be used in the Array example app.

<div class="ndl-images">
    <img src="/guides/actions-and-logic/new-user-part4.png" class="ndl-image large"></img>
</div>

## Debugging actions
While you build actions and to find problems in the logic of your actions its very useful to use the data inspect feature of Noodl. If you hover a connection in your graph you will see the most recent value on the output end of the connection.

You can also see how the values updates and signals are triggered when the application is running and you perform the action.

<div class="ndl-images">
    <img src="/guides/actions-and-logic/debugging.gif" class="ndl-image large"></img>
</div>
