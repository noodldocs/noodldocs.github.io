# Basic concepts

Noodl is a node based app builder. It’s a way of visually building an application in a way that is similar to code but without any coding skills necessary. Building your app with a node based tool means that you can structure your app visually, easily see all execution paths and follow the data flow.

## Nodes

The main building blocks of Noodl are nodes. Every node has its own specific purpose and is very simple in itself, but together they become really powerful.

![](nodes.png)

### Inputs and outputs

All nodes have inputs and outputs. Connecting two nodes is as easy as clicking one node, dragging the connection to another node and selecting what output should be connected to what input. You can visually see the data flow in the Node Editor, and clicking a connection allows you to see what data is being passed.

![](connecting-nodes.gif)

### Connection types

Noodl has two different connection types, Data and Signals.

-   `Data`: We use Data connections when passing along information from one node to another. This can be anything from a value from an input field to data from an API or the result of a calculation.

-   `Signal`: Whenever we want our app to do something we use a Signal connection. When a Signal input receives a Signal it triggers an Action. This could be anything from submitting form data when clicking a button to showing a popup when the API has returned any data or whenever the user's screen size changes.

### Type conversion

You can not connect Data and Signals directly to one another, but there are nodes that can convert the connection types, for example if you want to trigger a signal whenever a value changes.

## Components

The best way to use nodes is to combine them into Components. These Components act as our own custom nodes with their own inputs and outputs. This is a great way of reusing UI or logic across your application.

### Component types

There are three types of components: Page, Visual and Logic.

-   `Page`: Page components are your app’s screens and can be navigated to using Page Router nodes.

-   `Visual`: Visual components are made to group and render your UI elements on the screen. They can contain logic, but the main output is always something visible.

-   `Logic`: Logic components are the brains of your app. They are used to group nodes that don’t render anything on screen. It can be as simple as a couple of nodes that do data transformation to something more complex, like routing signals to different outputs based on passed values.

### Update everywhere

One very practical thing with Components is that they are global, meaning that whenever you update a component's internals, these changes will be updated everywhere this component is used in the app.

![](components.gif)

## Extendability

Noodl has enough abstracted, high level nodes to keep you productive while providing you with enough low level nodes to make it flexible enough to granularly solve any problem in the way you see fit. Sometimes though, specific problems require specific solutions. If you would happen to find yourself wanting to expand beyond the built in nodes you can use the [Function](nodes/javascript/function/) node, [Script](nodes/javascript/script/) node or the Noodl SDK.

## Version control

Noodl also features built-in version control powered by Git, letting you keep track of your changes, and easily collaborate even as your team scales.

## Get Noodling!

In short Noodl is a great tool for anyone looking for flexibility, scalability and quick iterations. We built it as a tool that grows with you and your needs, and that supports you in every step from prototype to production. We hope you will enjoy Noodling as much as we do.
