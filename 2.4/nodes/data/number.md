# NUMBER
A variable that can contain a number. It is local to the component and cannot be accessed elsewhere in the graph.

Here you can see how to use a number variable node to set a global **Variable** to a certain number when it's **Set** signal is received.

<div class="ndl-images">
    <img src="/nodes/data/number-1.png" class="ndl-image large"></img>  
</div>

You can also use variables nodes to connect to component inputs, this will make sure the input shows up as a number input in the property panel for instances of this component.

<div class="ndl-images">
    <img src="/nodes/data/number-2.png" class="ndl-image large"></img>  
</div>

## Inputs
**Value**  
The value to store in the node. The output value will equal this value, unless *Set* is connected, then the value will be updated when a signal is received at the *Set* input.

**Set**  
This is used to only update the output when a signal is sent to *Set*.


## Outputs
**Value**  
The number stored in the node

**Stored**  
A signal is outputted here when the value is updated as a result of the *Set* signal being received.
