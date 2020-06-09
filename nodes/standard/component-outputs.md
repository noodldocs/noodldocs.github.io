# COMPONENT OUTPUTS

![](component-outputs.png ':class=img-size-m')

A very powerful feature of Noodl is the ability to create **components** that act as reusable parts in your application.
A core concept of components are that they can have inputs and outputs like any of the built in nodes.

The outputs of a component are derived from a **Component Outputs** node and are
connected to any other node in the component.

When a **Component Outputs** node is created, it doesn't have any ports. The ports must be added by inspecting the node (left clicking it) and then clicking the **+Port** button.
You can create and name ports as you wish.

Once you have created your output ports on the **Component Outputs** node, you can connect any port from any node in your component node graph to the **Component Outputs**. These connected ports will now be available as outputs from the component when it is used in other places in your Noodl application.

You may have multiple **Component Outputs** nodes in a single component. If you have multiple nodes with
ports of the same name, they will be merged into one output.
