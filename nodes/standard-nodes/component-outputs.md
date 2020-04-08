# COMPONENT OUTPUTS

![](component-outputs.png)

Components are a very powerful feature of Noodl and are used to create reuseable parts.
A core concept of components are that they can have inputs and outputs like any of the built in nodes.

The outputs of a component are derived from a _Component Outputs_ node and are
connected to any other node in the component.

You may have many _Component Outputs_ nodes in an component. If you have multiple nodes with
ports of the same name they will be merged into one input. It's important that connected source ports
have the same or compatible types. If not the port may not show up on instances of the component. 
