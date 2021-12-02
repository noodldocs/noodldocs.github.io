<##head##>

# Color

This node holds a <span class="ndl-data">color</span> value.

![](color_node.png)

The <span class="ndl-data">color</span> value can either be static or dynamic using the <span class="ndl-data">Value</span> and <span class="ndl-signal">Set</span> inputs.

<##head##>

## Inputs

| Data                                | Description                                                                                                                                                                     |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Value</span> | The value to store in the node. The output value will equal this value, unless _Set_ is connected, then the value will be updated when a signal is received at the _Set_ input. |

| Signal                              | Description                                                            |
| ----------------------------------- | ---------------------------------------------------------------------- |
| <span class="ndl-signal">Set</span> | This is used to only update the output when a signal is sent to _Set_. |

## Outputs

| Data                                | Description                  |
| ----------------------------------- | ---------------------------- |
| <span class="ndl-data">Value</span> | The color stored in the node |

| Signal                                 | Description                                                                                        |
| -------------------------------------- | -------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Stored</span> | This port sends a signal when the value is updated as a result of the _Set_ signal being received. |
