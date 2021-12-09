<##head##>

# Boolean To String

This node takes a <span class="ndl-data">boolean</span> input and converts it into the strings <span class="ndl-data">true</span> or <span class="ndl-data">false</span>.

<div class="ndl-image-with-background l">

![](boolean-to-string.png)

</div>

<##head##>

## Inputs

| Data                                           | Description                                                                                       |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Selector</span>         | <##input:selector##>This is the boolean value that will select which string to output.<##input##> |
| <span class="ndl-data">String for true</span>  | <##input:trueString##>The string to output if the selector is true.<##input##>                    |
| <span class="ndl-data">String for false</span> | <##input:falseString##>The string to output if the selecor is false.<##input##>                   |

## Outputs

| Data                                        | Description                                                                                                                                      |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span class="ndl-data">Current Value</span> | <##output:currentValue##>The selected string, i.e. either **String for true** or **String for false** depending on the **Selector**.<##output##> |

| Signal                                           | Description                                                                                   |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Selector Changed</span> | <##output:inputChanged##>This signal is sent when the **Selector** changes value.<##output##> |
