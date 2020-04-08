# Number Remapper
Maps a range of inputs to a different range of outputs

![](number-remapper.png)

<div class = "node-inputs">

## Inputs
**Input Value**  
The number to remap

**Input Minimum**  
When the *Input Value* equals this value the output of this node will exactly equal the value specified in *Output Minimum*

**Input Maximum**  
When the *Input Value* equals this value the output of this node will exactly equal the value specified in *Output Maximum*

**Output Minimum**  
The lowest value to output

**Output Maximum**  
The highest value to output

**Clamp Output**  
Controls the behavior if the *Input Value* is lower than *Input Minimum* or higher than *Input Maximum*.

If *Clamp Output* is set to *Yes* then the output will cannot be lower than *Output Minimum* or
higher than *Output Maximum*. If *Clamp Output* is set to *No* then the output will be linearly extrapolated
and will be lower or higher than the specified minimum and maximum values.

</div>

<div class = "node-outputs">

## Outputs
**Remapped Value**  
The result of remapping the *Input Value* with the values specified above

</div>
