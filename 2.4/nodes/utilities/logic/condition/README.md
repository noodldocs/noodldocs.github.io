<##head##>
# Condition
This node evaluates a condition and sends one of two signals depending on if the condition is true or false.

![](./condition_node.png ':class=img-size-l')

The input condition will be treated as a boolean, and the evaluation happens when the input changes, unless an explicit signal is connected to the Evaluate input


<##head##>

![](condition.gif ':class=img-size-l')

<div class = "node-inputs">

## Inputs

**Condition**  
A boolean that decides which output signal (*On true* or *On false*) that should be triggered when the *Evaluate* signal is triggered.

**Evaluate**  
Evaluates the *Condition* input and triggers the respective output signal. If no Signal is connected to Evaluate, the node will evaluate the input everytime the input changes.



## Outputs
**On true**  
Triggered when *Evaluate* is triggered and *Condition* is true.

**On false**  
Triggered when *Evaluate* is triggered and *Condition* is false.

</div>
