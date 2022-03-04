<##head##>

# Counter

This node holds a <span class="ndl-data">number</span> that can be increased or decreased with <span class="ndl-signal">signals</span>.

<div class="ndl-image-with-background l">

![](counter_node.png)

</div>

The Counter node can be limited to a `min` and a `max` value, and the limit can be turned on and off.

<##head##>

<div class="ndl-image-with-background l">

![](counter.gif)

</div>

## Inputs

| Signal                                         | Description                                                                                     |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Increase Count</span> | <##input:increase##>Triggering this action will increases the count by one.<##input##>          |
| <span class="ndl-signal">Decrease Count</span> | <##input:decrease##>Triggering this action will decrease the count by one.<##input##>           |
| <span class="ndl-signal">Reset To Start</span> | <##input:reset##>Triggering this action will reset the counter to its _Start Value_.<##input##> |
| <span class="ndl-signal">Start Value</span>    | <##input:startValue##>The start value of the count. Defaults to zero.<##input##>                |

| Data                                         | Description                                                                                                                                                                                         |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Min Value</span>      | <##input:limitsMin##>The minimum value of the counter. The counter will never decrease below this value. Note that **Limits Enabled** need to be set to `true` for this to be in effect.<##input##> |
| <span class="ndl-data">Max Value</span>      | <##input:limitsMax##>The maximum value of the counter. The counter will never increase above this value. Note that **Limits Enabled** need to be set to `true` for this to be in effect.<##input##> |
| <span class="ndl-data">Limits Enabled</span> | <##input:limitsEnabled##>This input controls if the limits (**Min Value** and **Max Value**) are active or disabled.<##input##>                                                                     |

## Outputs

| Data                                        | Description                                                                  |
| ------------------------------------------- | ---------------------------------------------------------------------------- |
| <span class="ndl-data">Current Count</span> | <##output:currentCount##>This output contains the current count.<##output##> |

| Signal                                        | Description                                                                                                |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Count Changed</span> | <##output:countChanged##>This signal will be triggered whenever the **Current Count** changes.<##output##> |