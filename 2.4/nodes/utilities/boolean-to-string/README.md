<##head##>

# Boolean To String

This node takes a <span class="ndl-data">boolean</span> input and converts it into the strings <span class="ndl-data">true</span> or <span class="ndl-data">false</span>.

![](boolean-to-string.png ':class=img-size-l')

<##head##>

## Inputs

**Selector**
<##input:selector##>This is the boolean value that will select which string to output.<##input##>

**String for true**
<##input:trueString##>The string to output if the selector is true.<##input##>

**String for false**
<##input:falseString##>The string to output if the selecor is false.<##input##>

![](boolean-to-string-props.png ':class=img-size-m')

## Outputs

**Current Value**
<##output:currentValue##>The selected string, i.e. either **String for true** or **String for false** depending on the **Selector**.<##output##>

**Selector Changed**
<##output:inputChanged##>This signal is triggered when the **Selector** changes value.<##output##>
