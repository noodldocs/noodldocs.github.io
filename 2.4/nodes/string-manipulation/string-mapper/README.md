<##head##>

# String Mapper

This node receives an input <span class="ndl-data">string</span>, looks it up in a mapping table, and outputs the correct output <span class="ndl-data">string</span>.
You define your own string mappings. You can also define a default value to output if the <span class="ndl-node">String Mapper</span> node receives an unspecified input <span class="ndl-data">string</span>.

![](string_mapper_node.png)

<##head##>

## Inputs

| Data                                       | Description                                                                                                                                             |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Input 0..N</span>   | The input strings, any string that matches one of these values will be mapped.                                                                          |
| <span class="ndl-data">Mapping 0..N</span> | The mapped strings, for each of the input strings there can be a corresponding mapped string.                                                           |
| <span class="ndl-data">Input String</span> | The string that will be used to look up mapping, e.g. if the string matches _Input 2_ then the _Mapped String_ output will be the value of _Mapping 2_. |

## Outputs

| Data                                        | Description                                                                                                                                                              |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span class="ndl-data">Mapped String</span> | The mapped string that corresponds to the value of _Input String_, e.g. if the _Input String_ value matches _Input 2_ then this output will be the value of _Mapping 2_. |
