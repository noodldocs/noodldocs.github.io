# Transition

![](transition.png)

<div class = "node-inputs">

## Inputs

**Target Value**  
The value to chase after.

**Override Value**  
When _Do_ is triggered, the current value will instantly jump to this value.

**Do**  
When triggered, the current value will instantly jump to the _Override Value_.

**Duration (ms)**  
How long it takes to reach the _Target Value_, specified in milliseconds.

**Delay (ms)**  
Delay before this node starts chasing/transitioning to the _Target Value_. Specified in milliseconds.

**Easing Curve**  
Define the curvature of the Transition:

- Ease Out
- Ease In
- Ease in Ease Out
- Linear

</div>

<div class = "node-outputs">

## Outputs

**Current Value**  
The current value of the Transition.

**At Target Value**  
This signal fires when this node reaches its _Target Value_.

</div>
