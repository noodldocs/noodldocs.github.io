
<##head##>
# String Mapper

This node is used to construct a new text string from multiple other text strings. 

![](./stringformat-node.png ':class=img-size-l')

The String Format node needs a format input where the outputtet string and string variables are defined. 

![](./stringformat-visual.png ':class=img-size-l')

<##head##>

This node will map an input string to another string, given a set of input and mapping strings.

![](stringmapper.png)

<div class = "node-inputs">

## Inputs

**Input 0..N**  
The input strings, any string that matches one of these values will be mapped.

**Mapping 0..N**
The mapped strings, for each of the input strings there can be a corresponding mapped string.

**Input String**  
The string that will be used to look up mapping, e.g. if the string matches _Input 2_ then the _Mapped String_ output
will be the value of _Mapping 2_.

</div>

<div class = "node-outputs">

## Outputs

**Mapped String**  
The mapped string that corresponds to the value of _Input String_, e.g. if the _Input String_ value matches _Input 2_ then this output
will be the value of _Mapping 2_.

</div>
