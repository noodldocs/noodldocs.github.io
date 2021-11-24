<##head##>
# Component Object

![](component-object.png ':class=img-size-m')

Component Object is a shared set of properties that can be accessed from a component as well as from any child components. It can be used to implement things such as radio groups, tabs, accordion lists and other visual elements that need to coordinate, but is also a useful general tool for any kind communication between a set of components.
<##head##>

The **Component Object** node works much like the [Object](/nodes/data/object/object/) node where you add properties that become inputs / outputs of the node.

![](component-object-props.png ':class=img-size-m')

Unlike the **Object** node it does not have an **Id** instead all **Component Object** nodes within the same component share the same data.


## INPUTS

### Properties
<##input:value-*##>The value of a specific property of the Component Object. A Component Object node can have any amount of properties that must be named in the property panel. When this input is changed all other Component Object nodes in the same component are updated.<##input##> Each property will get one input and output to set/get their current value. See below for more details.

### Actions

**Fetch**  
<##input:fetch##>The fetch signal input can be used to explicitly signal when the data of a **Component Object** should be fetched. If a connection is made to this input the node will not automatically receive changes on it's properties, it will only get the new data when the fetch signal is triggered.<##input##>

## OUTPUTS

### Properties

<##output:value-*##>An Component Object can have any amount of properties. Each property will get one output to get the current value.<##output##>

### Events

**Changed**  
<##output:changed##>An event is triggered when any of the properties have changed.<##output##>

**Fetched**  
<##output:fetched##>An event is triggered on this output when a fetch is completed as a result of a **Fetch** sent on to the node.<##output##>

### Changed signals

<##output:changed-*##>One changed signal output will be created for every property. They will emit a signal when the property changes value when this or some other **Component Object** or [Parent Component Object](/nodes/component-utilities/parent-component-object/README.md) node triggers the _Set_ input.<##output##>