# STRING

Contains a string (text).

## INPUTS

**Value**  
The value to store in the node. The output value will equal this value, unless _Set_
is connected, then the value will be passed to the output when a signal is sent to _Set_.

**Set**  
This is used to only update the output when a signal is sent. This will allow you to freeze
the stored value and only allow it to update under certain conditions, e.g. on a Tap.

## OUTPUTS

**Value**  
The string (text) stored in the node.

**Length**  
The length of the string (text) stored in the node, i.e. the number of characters and spaces.

**Stored**  
A signal send when the value is updated via the _Set_ input.

</div>
