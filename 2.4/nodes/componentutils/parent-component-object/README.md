# Parent Component Object

Parent Component Object is always used in combination with a [Component Object](/nodes/componentutils/component-state.md). A Parent Component Object will search upwards in the component tree until it finds a Component Object node and mirror that node. Any change being done to one node will be reflected in the other nodes. Multiple Parent Component Object nodes in the same component will always mirror the same Component Object.

![](parent-component-object.png ':class=img-size-m')

The node is used much like an [Object](/nodes/data/object.md) where you can **Set** properties on the node. The node does not have an **Id** instead the data is shared with the parent component. This node is very useful in patterns such as radio groups where child components may need to access the **Component Object** of its parent.


### Properties
The properties to read from the [Component Object](/nodes/componentutils/component-object.md) node that this node will bind itself to. Each property will get one input and output to set/get their current value.

### Actions

**Set**  
Stores any properties that are connected to the bound [Component Object](/nodes/componentutils/component-object.md). Just like with the [Object](/nodes/data/object.md) node, if there are no connection to the **Set** input any updates on the connection to properties will be stored automatically.

**Fetch**  
Normally when a **Parent Component State** is created, the property outputs are immediately updated. If you want to control how the data is updated you can connect to the _Fetch_ signal input. Then you need to explictly send a signal to fetch the data.

With **Fetch** connected the output data won't change until **Fetch** is explicitly triggered again.

## Outputs

### Properties

The values of the properties defined in the **Properties** input.

### Events

**Changed**  
Signal when any of the properties have changed.

**Fetched**  
Signal when this node has bound itself to a [Component Object](/nodes/componentutils/component-object.md). Triggers immediately if the **Fetch** inputs isn't connected, and will otherwise trigger when the **Fetch** input is signaled.
### Changed signals

One changed signal output will be created for every property. They will emit a signal when the property changes value.
