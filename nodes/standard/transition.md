# Transition

![](transition.png)

<div class = "node-inputs">

## Inputs
### Target Value
**Target Value**  
The value to chase after

### Override current value
**Override Value**  
When Do is triggered, the current value will instantly jump to this value

**Do**  
When triggered, the current value will instantly jump to the Override Value

### Parameters
**Duration (ms)**  
How long it takes to reach the target value, specified in milliseconds

**Delay (ms)**  
Delay the transition to the target value, specified in milliseconds

**Easing Curve**  
Define the curvature of the transition

* Ease Out
* Ease In
* Ease in Ease Out
* Linear

</div>

<div class = "node-outputs">

## Outputs

**Current State**  
The current value of the transition

**At Target Value**  
This signal fires when the transition reaches the target value

</div>
