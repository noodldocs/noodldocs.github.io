<##head##>

# Switch

This node holds a <span class="ndl-data">boolean</span> state. It is either <span class="ndl-data">true</span> (on) or <span class="ndl-data">false</span> (off).

![](switch.gif)

<##head##>

<div class = "node-inputs">

## Inputs

### Change state

**On**
<##input:on##>Triggering this signal sets the state of the **Switch** to _On_.<##input##>

**Off**
<##input:off##>Triggering this signal sets the state of the **Switch** to _Off_.<##input##>

**Flip**
<##input:flip##>Triggering this signal sets the **Switch** to the opposite of its current state. If it is _On_ flip will set it to _Off_ and vice versa.<##input##>

### Start State

**Start State**
The starting state of the **Switch**. If the _Start State_ is set to _On_ then the _Switched To On_ output signal will trigger instantly when applications starts, or when a component is created dynamically.

</div>

<div class = "node-outputs">

## Outputs

**Current State**
<##output:state##>This output is either _True_ or _False_ depending on if the **Switch** is _On_ or _Off_.<##output##>

**Switched To On**
<##output:switchedToOn##>This signal is triggered when the **Switch** goes from _Off_ to _On_.<##output##>

**Switched To Off**
<##output:switchedToOff##>This signal is triggered when the **Switch** goes from _On_ to _Off_.<##output##>

</div>
