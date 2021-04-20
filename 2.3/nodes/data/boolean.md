# BOOLEAN

Contains a boolean value (true/false). This can be used to quickly store a boolean, or as a local static value.

Here you can see how to use a boolean variable node to set a global **Variable** to true when it's **Set** signal is received.

<div class="ndl-images">
    <img src="/nodes/data/boolean-1.png" class="ndl-image large"></img>  
</div>

You can also use variables nodes to connect to component inputs, this will make sure the input shows up as a boolean (checkbox) in the property panel for instances of this component.

<div class="ndl-images">
    <img src="/nodes/data/boolean-2.png" class="ndl-image large"></img>  
</div>

## INPUTS

**Value**  
The value to store in the node. The output value will equal this value, unless _Set_ is connected, then it will be updated when **Set** receives a signal.

**Set**  
This is used to only update the output when _Save Value_ is set to true. This will allow you to freeze the stored value and only allow it to update under certain conditions, e.g. on a Tap.

## OUTPUTS

**Value**  
The boolean stored in the node

**Stored**  
A signal when the value is stored via the _Set_ input signal.
