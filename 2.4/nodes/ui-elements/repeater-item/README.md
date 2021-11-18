<##head##>

# Repeater Item

This node contains a set of useful utilities for components that have been dynamically created by a <span class="ndl-node">Repeater</span> node.

![](repeater-item.png ':class=img-size-m')

<##head##>

## Inputs

**Remove Completed**
Send a signal, after _Try Remove_ has been sent and any remove animation is completed. This will remove the component from its parent. See _Try Remove_ below to learn more.

## Outputs

**Added**
When a new object is added to an array, any connected [Repeater](/nodes/ui-elements/repeater/README.md) node will create a new component. This component will get the _Added_ signal. Useful for playing animations or changing states.

**Try Remove**
When an object is removed from am array, any connected [Repeater](/nodes/ui-elements/repeater/README.md) node will remove the component it created for that object. If this signal is connected the _Remove Completed_ input should be used to signal when animations are complete.

**Item Id**
The object _Id_ for this component.
