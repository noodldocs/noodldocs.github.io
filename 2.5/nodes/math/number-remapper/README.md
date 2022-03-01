<##head##>

# Number Remapper

This node maps a range of input <span class="ndl-data">numbers</span> to a range of output <span class="ndl-data">numbers</span>. It translates the relative position of the input <span class="ndl-data">number</span> to its corresponding <span class="ndl-data">number</span> in the output range.

<div class="ndl-image-with-background l">

![](number_remapper_node.png)

</div>

If the input range is `0 to 360`, the output range is `0 to 1` and the input <span class="ndl-data">number</span> is `180` the output <span class="ndl-data">number</span> will be `0.5`.

<##head##>

## Inputs

| Data                                         | Description                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span class="ndl-data">Input Value</span>    | The number to remap.                                                                                                                                                                                                                                                                                                                                                                                   |
| <span class="ndl-data">Input Minimum</span>  | When the _Input Value_ equals this value the output of this node will exactly equal the value specified in _Output Minimum_.                                                                                                                                                                                                                                                                           |
| <span class="ndl-data">Input Maximum</span>  | When the _Input Value_ equals this value the output of this node will exactly equal the value specified in _Output Maximum_.                                                                                                                                                                                                                                                                           |
| <span class="ndl-data">Output Minimum</span> | The lowest value to output.                                                                                                                                                                                                                                                                                                                                                                            |
| <span class="ndl-data">Output Maximum</span> | The highest value to output.                                                                                                                                                                                                                                                                                                                                                                           |
| <span class="ndl-data">Clamp Output</span>   | Controls the behavior if the _Input Value_ is lower than _Input Minimum_ or higher than _Input Maximum_.<br/><br/>If _Clamp Output_ is set to _Yes_ then the output will not be lower than _Output Minimum_ or higher than _Output Maximum_. If _Clamp Output_ is set to _No_ then the output will be linearly extrapolated and will be lower or higher than the specified minimum and maximum values. |

## Outputs

| Data                                         | Description                                                                |
| -------------------------------------------- | -------------------------------------------------------------------------- |
| <span class="ndl-data">Remapped Value</span> | The result of remapping the _Input Value_ with the values specified above. |
