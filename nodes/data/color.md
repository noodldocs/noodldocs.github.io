# COLOR
Contains a color. Can be used to provide a static local color value.

## INPUTS
**Value**  
The value to store in the node. The output value will equal this value, unless *Set* is connected, then the value will be updated when a signal is received at the *Set* input.

**Set**  
This is used to only update the output when a signal is sent to *Set*.

## OUTPUTS
**Value**  
The color stored in the node

**Stored**
A signal is outputted here when the value is updated as a result of the *Set* signal being received.
