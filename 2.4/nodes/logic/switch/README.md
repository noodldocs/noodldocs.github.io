<##head##>

# Switch

This node holds a <span class="ndl-data">boolean</span> state. It is either <span class="ndl-data">true</span> (on) or <span class="ndl-data">false</span> (off).

<div class="ndl-image-with-background l">

![](switch.gif)

</div>

<##head##>

## Inputs

### Change state

| Signal                               | Description                                                                                                                                                                 |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">On</span>   | <##input:on##>Sending a signal to this input sets the state of the **Switch** to _On_.<##input##>                                                                           |
| <span class="ndl-signal">Off</span>  | <##input:on##>Sending a signal to this input sets the state of the **Switch** to _Off_.<##input##>                                                                          |
| <span class="ndl-signal">Flip</span> | <##input:flip##>Sending a signal to this input sets the **Switch** to the opposite of its current state. If it is _On_ flip will set it to _Off_ and vice versa.<##input##> |

| Data                                      | Description                                                                                                                                                                                                    |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Start State</span> | The starting state of the **Switch**. If the _Start State_ is set to _On_ then the _Switched To On_ output signal will trigger instantly when applications starts, or when a component is created dynamically. |

## Outputs

| Data                                        | Description                                                                                                            |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Current State</span> | <##output:state##>This output is either _True_ or _False_ depending on if the **Switch** is _On_ or _Off_.<##output##> |

| Signal                                          | Description                                                                                            |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| <span class="ndl-signal">Switched To On</span>  | <##output:switchedToOn##>This signal is sent when the **Switch** goes from _Off_ to _On_.<##output##>  |
| <span class="ndl-signal">Switched To Off</span> | <##output:switchedToOff##>This signal is sent when the **Switch** goes from _On_ to _Off_.<##output##> |
