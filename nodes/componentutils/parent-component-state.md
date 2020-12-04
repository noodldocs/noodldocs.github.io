# PARENT COMPONENT STATE

![](parent-component-state.png ':class=img-size-m')

Parent Component State is always used in combination with an [Component State](/nodes/componentutils/component-state.md). A Parent Component State will search upwards in the component tree until it finds a Component State node and mirror that node. Any change being done to one node will be reflected in the other nodes. Multiple Parent Component State nodes in the same component will always mirror the same Component State.


### Properties
The properties to read from the [Component State](/nodes/componentutils/component-state.md) node that this node will bind itself to. Each property will get one input and output to set/get their current value.

### Actions

**Set**  
Stores any properties that are connected to the bound [Component State](/nodes/componentutils/component-state.md).

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
Signal when this node has bound itself to a [Component State](/nodes/componentutils/component-state.md). Triggers immediately if the **Fetch** inputs isn't connected, and will otherwise trigger when the **Fetch** input is signaled.
### Changed signals

One changed signal output will be created for every property. They will emit a signal when the property changes value.
