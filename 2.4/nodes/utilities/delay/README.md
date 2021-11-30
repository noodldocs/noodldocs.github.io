<##head##>

# Delay

This node lets you delay <span class="ndl-signal">signals</span> by the specified amount of milliseconds.

![](delay_node.png)

<##head##>

## Inputs

| Signal                                  | Description                                                           |
| --------------------------------------- | --------------------------------------------------------------------- |
| <span class="ndl-signal">Start</span>   | Starts the timer. Does nothing if the timer is already running.       |
| <span class="ndl-signal">Restart</span> | Starts the timer. Restarts the timer if the timer is already running. |
| <span class="ndl-signal">Stop</span>    | Stops the timer if it's running. Does nothing otherwise.              |

| Data                                      | Description                                                                                        |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Duration</span>    | The duration of the timer in milliseconds.                                                         |
| <span class="ndl-data">Start Delay</span> | The delay before the timer starts after the _Start_ input is triggered. Specified in milliseconds. |

## Outputs

| Signal                                   | Description                                |
| ---------------------------------------- | ------------------------------------------ |
| <span class="ndl-signal">Started</span>  | Signal emitted when the timer starts.      |
| <span class="ndl-signal">Finished</span> | Signal emitted when the timer is finished. |
