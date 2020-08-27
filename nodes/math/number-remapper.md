# Number Remapper

Maps a range of input valuess to a different range of output values.

![](number-remapper.png)

<div class = "node-inputs">

## Inputs

**Input Value**  
The number to remap.

**Input Minimum**  
When the _Input Value_ equals this value the output of this node will exactly equal the value specified in _Output Minimum_.

**Input Maximum**  
When the _Input Value_ equals this value the output of this node will exactly equal the value specified in _Output Maximum_.

**Output Minimum**  
The lowest value to output.

**Output Maximum**  
The highest value to output.

**Clamp Output**  
Controls the behavior if the _Input Value_ is lower than _Input Minimum_ or higher than _Input Maximum_.

If _Clamp Output_ is set to _Yes_ then the output will not be lower than _Output Minimum_ or higher than _Output Maximum_. If _Clamp Output_ is set to _No_ then the output will be linearly extrapolated
and will be lower or higher than the specified minimum and maximum values.

</div>

<div class = "node-outputs">

## Outputs

**Remapped Value**  
The result of remapping the _Input Value_ with the values specified above.

</div>
