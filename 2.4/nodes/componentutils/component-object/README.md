# Component Object

![](component-object.png ':class=img-size-m')

Component Object is a shared set of properties that can be accessed from a component as well as from any child components. It can be used to implement things such as radio groups, tabs, accordion lists and other visual elements that need to coordinate, but is also a useful general tool for any kind communication between a set of components.

The **Component Object** node works much like the [Object](/nodes/data/object/object/) node where you add properties that become inputs / outputs of the node.

![](component-object-props.png ':class=img-size-m')

Unlike the **Object** node it does not have an **Id** instead all **Component Object** nodes within the same component share the same data.

## Inputs

### Properties
An Component Object node can have any amount of properties. Each property will get one input and output to set/get their current value, a start value input, as well as a type input. See below for more details.

### Actions

**Set**  
Stores any properties that are connected to the Component Object. All other **Component Object** nodes in the same component, as well as any [Parent Component Object](/nodes/componentutils/parent-component-state.md) nodes, will be updated. If the **Set** input does not have a connection any properties will receive new values as soons as their connections update.

**Fetch**  
The fetch signal input can be used to explicitly signal when the data of a **Component Object** should be fetch. If a connection is made to this input the node will not automatically receive changes on it's properties, it will only get the new data when the fetch signal is triggered.

### Properties
All properties will become available as inputs.

## Outputs

### Properties

An Component Object can have any amount of properties. Each property will get one output to get the current value.

### Events

**Changed**  
Signal when any of the properties have changed.

**Stored**  
Signal when the *Set* input has executed.

**Fetched**  
Signal is sent here when a fetch is completed as a result of a **Fetch** sent on to the node.

### Changed signals

One changed signal output will be created for every property. They will emit a signal when the property changes value when this or some other **Component Object** or [Parent Component Object](/nodes/componentutils/parent-component-state.md) node triggers the _Set_ input.