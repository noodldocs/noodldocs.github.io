<##head##>
# Set Variable
This node sets the **Value** of a [Variable](/nodes/data/variable/variable/). You provide the new value on the **Value** input and trigger the <span class=”ndl-signal”>Do</span> action.

![](../variable/variable-1.png ':class=img-size-l')
<##head##>

## Inputs

**Name**
<##input:name##>The name of the **Variable** to set. Note: All **Variable** nodes with the same name will share the same data.<##input##>

**Value**  
<##input:value##>The value that you want the **Variable** to get when you trigger the <span class=”ndl-signal”>Do</span> action.<##input##>
### Actions
**Do**  
<##input:do##>Updates the value of the **Variable** to what is currently set on the input **Value**.<##input##>

## Outputs

### Events
**Done**
<##output:done##>This event is triggered when the **Variable** have been set.<##output##>