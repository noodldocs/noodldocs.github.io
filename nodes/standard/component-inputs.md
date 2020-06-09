# COMPONENT INPUTS

![](component-inputs.png ':class=img-size-m')

A very powerful feature of Noodl is the ability to create **components** that act as reusable parts in your application.

A core concept of components is that they can have inputs and outputs like any of the built in nodes.

The inputs of a component originate from a **Component Inputs** node and are connected to any node in the component.

When a **Component Inputs** node is created, it doesn't have any ports. The ports must be added by inspecting the node (left clicking it) and then clicking the **+Port** button.
You can create and name ports as you wish.

![](component-inputs-add.png ':class=img-size-m')

You can have multiple **Component Input** nodes in a single component. If you have multiple **Component Input** nodes with ports that share the same name, they will be merged into one input. It's important that target ports have the same or compatible types. If not, the port may not show up in instances of the component.
