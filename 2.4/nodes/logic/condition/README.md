# Condition

Evaluates a condition when triggered and sends a pulse to one of two signal outputs depending on if the condition is true or false.

![](condition_node.png)

## Inputs

| Data                                    | Description                                                                                                                            |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Condition</span> | A boolean that decides which output signal (_On true_ or _On false_) that should be triggered when the _Evaluate_ signal is triggered. |

| Signal                                   | Description                                                                                               |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Evaluate</span> | Sending a signal to this input evaluates the _Condition_ input and triggers the respective output signal. |

## Outputs

| Signal                                  | Description                                                      |
| --------------------------------------- | ---------------------------------------------------------------- |
| <span class="ndl-signal">On true</span> | Triggered when _Evaluate_ is triggered and _Condition_ is true.  |
| <span class="ndl-signal"></span>        | Triggered when _Evaluate_ is triggered and _Condition_ is false. |
