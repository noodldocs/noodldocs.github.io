<##head##>

# Number

This node holds a <span class="ndl-data">number</span> value. It is local to the component and cannot be accessed elsewhere in the app.

![](number-1.png ':class=img-size-l')

You can also use the <span class="ndl-node">Number</span> node connected to a <span class="ndl-node">Component Inputs</span> node. This will make sure the input shows up as a <span class="ndl-data">number</span> input in the Property Panel for instances of this component.

![](number-2.png ':class=img-size-l')

<##head##>

## Inputs

**Value**
The value to store in the node. The output value will equal this value, unless _Set_ is connected, then the value will be updated when a signal is received at the _Set_ input.

**Set**
This is used to only update the output when a signal is sent to _Set_.

## Outputs

**Value**
The number stored in the node

**Stored**
A signal is outputted here when the value is updated as a result of the _Set_ signal being received.
