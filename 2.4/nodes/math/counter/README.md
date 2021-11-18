<##head##>

# Counter

This node holds a <span class="ndl-data">number</span> that can be increased or decreased with <span class="ndl-signal">signals</span>.

![](counter.gif)

The Counter node can be limited to a `min` and a `max` value, and the limit can be turned on and off.

<##head##>

<div class = "node-inputs">

## Inputs

**Increase Count**
Increases the count by one

**Decrease Count**
Decreases the count by one

**Reset To Start**
Resets to count to the _Start Value_

**Start Value**
The start value of the count. Defaults to zero.

### Limits

**Min Value**
The counter will never decrease below this value

**Max Value**
The counter will never increase above this value

**Limits Enabled**
Controls if the limits above are active or disabled

</div>

<div class = "node-outputs">

## Outputs

**Current Count**
The current count

</div>
