# String Mapper
This node will map an input string to another given a set of input and mapping strings.

<div class = "node-inputs">

## Inputs
**Input 0..N**  
The input strings, any string that matches one of these values will be mapped.

**Mapping 0..N**
The mapped strings, for each of the input strings there can be a corresponding mapped string.

**Input String**  
The string that will be used to look up mapping, e.g. if the string matches _Input 2_ then the _Mapped String_ output
will be the value of _Mapping 2_

</div>

<div class = "node-outputs">

## Outputs
**Mapped String**  
The mapped string the corresponds to value of _Input String_, e.g. if the _Input String_ value matches _Input 2_ then this output
will be the value of _Mapping 2_.

</div>
