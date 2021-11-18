<##head##>

# Color

This node holds a <span class="ndl-data">color</span> value.

<div class="ndl-images">
    <img src="/nodes/data/color/color-1.png" class="ndl-image large"></img>
</div>

The <span class="ndl-data">color</span> value can either be static or dynamic using the <span class="ndl-data">Value</span> and <span class="ndl-signal">Set</span> inputs.

<##head##>

## Inputs

**Value**
The value to store in the node. The output value will equal this value, unless _Set_ is connected, then the value will be updated when a signal is received at the _Set_ input.

**Set**
This is used to only update the output when a signal is sent to _Set_.

## Outputs

**Value**
The color stored in the node

**Stored**
A signal is outputted here when the value is updated as a result of the _Set_ signal being received.
