# COMPONENT STATE

![](component-state.png ':class=img-size-l')

Component state is a shared set of properties that can be accessed from a component as well as from any child components. It can be used to implement things such as radio groups, tabs, accordion lists and other visual elements that need to coordinate, but is also a useful general tool for any kind communication between a set of components.

## Inputs

### Properties
An Component State node can have any amount of properties. Each property will get one input and output to set/get their current value, a start value input, as well as a type input. See below for more details.

### Start Values
Each property will get a Start Value input. This can be optionally be used to set the initial values. Any future updates should be done via the _Set_ input.

### Types
Each property will get a type input. This can be used to set the type of the peoperty which will affect both the input and output for that property.

### Actions

**Set**  
Stores any properties that are connected to the Component State. All other **Component State** nodes in the same component, as well as any [Parent Component State](/nodes/componentutils/parent-component-state.md) nodes, will be updated.

## Outputs

### Properties

An Component State can have any amount of properties. Each property will get one output to get the current value.

### Events

**Changed**  
Signal when any of the properties have changed.

### Changed signals

One changed signal output will be created for every property. They will emit a signal when the property changes value when this or some other **Component State** or [Parent Component State](/nodes/componentutils/parent-component-state.md) node triggers the _Set_ input.