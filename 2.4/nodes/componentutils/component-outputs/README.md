<##head##>
# Component Outputs

This node is used to create outputs for reusable components. 

![](./co_node1.png ':class=img-size-l')

A Component Output node can have as many ports as needed and can make output properties from the nodes available on the custom component.

![](./co_node2.png ':class=img-size-l')

<##head##>

A very powerful feature of Noodl is the ability to create **components** that act as reusable nodes in your application. A core concept of components is that they can have inputs and outputs like any of the built in nodes.

![](component-outputs.png ':class=img-size-m')

The outputs of a component are derived from a **Component Outputs** node and are
connected to any other node in the component.

When a **Component Outputs** node is created, it doesn't have any ports. The ports must be added by inspecting the node (left clicking it) and then clicking the **+Port** button.
You can create and name ports as you wish.

![](component-output-ports.png ':class=img-size-m')

Once you have created your output ports on the **Component Outputs** node, you can connect any port from any node in your component node graph to the **Component Outputs**. These connected ports will now be available as outputs from the component when it is used in other places in your Noodl application.

You may have multiple **Component Outputs** nodes in a single component. If you have multiple nodes with
ports of the same name, they will be merged into one output.

You can also create groups of component outputs by using the **+Group** button, you can drag outputs up and down in the list. The label of the groups will be shown in connection panel of the component instance node.
