# Velocity
The speed of change of the input value. The output is only updated when the input us changed
and will be constant if the input is constant. The velocity can be negative if the input value is decreasing.

![](velocity.png)

<div class = "node-inputs">

## Inputs
**Value**  
The velocity will be calculated with this value

</div>

<div class = "node-outputs">

## Outputs
**Velocity**  
The difference between the previous two changes in the input value, divided by the time elapsed between the changes.

</div>

*Example*  
If the input starts at 10 and is changed to 20 two seconds later then the velocity will be `(20-10)/2` which equals to 5.
