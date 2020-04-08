# COMPONENT INPUTS

![](component-inputs.png)

Components are a very powerful feature of Noodl and are used to create reuseable parts.
A core concept of components are that they can have inputs and outputs like any of the built in nodes. 

The inputs of an component originate from a *Component Inputs* node and are connected to any node in the component.

When created a *Component Inputs* node doesn't have any ports. The ports must be created by inspecting the node (left clicking it).
You can create and name ports as you wish.

![](component-inputs-add.png)

You may have many *Component Input* nodes in an component. If you have multiple *Component Input* nodes with ports
of the same name they will be merged into one input. It's important that target ports have the same or compatible types.
If not the port may not show up on instances of the component. 