# Transition

The transition node produces and output value that transitions from an *override value* to a *target value* over a specified time using an easing curve to calculate intermediary values. The transition is started when the *Do* signal is triggered, or when the target value is changed.


The transition node is typically used when you want to make soft transitions between different number values, for example a position or an opacity value that's being updated.

By setting a new *override value* and calling *Do* the *Transition Node* will interpolate from the *override value* towards the target value.
<div class="ndl-images">
    <img src="/nodes/animation/trans1.gif" class="ndl-image large"></img>   
</div>

Another option is to change the *target value*. This will cause the value trend back towards the new target value. For that case the *Do* signal don't have to be triggered. Note that the timing of the transition will reset everytime you set a new target value.


<div class="ndl-images">
    <img src="/nodes/animation/trans2.gif" class="ndl-image large"></img>   
</div>



## Inputs

**Target Value**  
The value to trend the output value (*Current Value*) towards.

**Override Value**  
When _Do_ is triggered, the current value will instantly jump to this value and start trending towards *Target Value*, unless a there is a *Delay* specified.

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



## Outputs

**Current Value**  
The current value of the Transition.

**At Target Value**  
This signal fires when this node reaches its _Target Value_.


