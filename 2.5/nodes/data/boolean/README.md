<##head##>

# Boolean

This node holds a <span class="ndl-data">boolean</span> (true/false) value. You can use it to quickly store a <span class="ndl-data">boolean</span> using the <span class="ndl-signal">Set</span> input. It can also be used to hold a static value in logical operations.

<div class="ndl-image-with-background l">

![](boolean-1.png)

</div>

You can connect the <span class="ndl-node">Boolean</span> node to a <span class="ndl-node">Component Inputs</span> node. This will make the input shows up as a <span class="ndl-data">boolean</span> (checkbox) in the Property Panel for instances of this component.

<div class="ndl-image-with-background l">

![](boolean-2.png)

</div>

<##head##>

## Inputs

| Data                                | Description                                                                                                                                                |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Value</span> | The value to store in the node. The output value will equal this value, unless _Set_ is connected, then it will be updated when **Set** receives a signal. |

| Signal                              | Description                                                                                                                                                                                  |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Set</span> | This is used to only update the output when _Save Value_ is set to true. This will allow you to freeze the stored value and only allow it to update under certain conditions, e.g. on a Tap. |

## Outputs

| Data                                | Description                    |
| ----------------------------------- | ------------------------------ |
| <span class="ndl-data">Value</span> | The boolean stored in the node |

| Signal                                 | Description                                                                   |
| -------------------------------------- | ----------------------------------------------------------------------------- |
| <span class="ndl-signal">Stored</span> | This port sends a signal when the value is stored via the _Set_ input signal. |