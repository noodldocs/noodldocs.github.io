<##head##>

# Receive Event

This node is used to receive a signal triggered by a <span class="ndl-node">Send Event</span> node. To learn more about **Events** check out the [Events Guide](/guides/events.md).

![](receive-event.png)

The <span class="ndl-node">Send Event</span> node lets you specify a channel to broadcast to. All <span class="ndl-node">Receive Event</span> nodes set to that channel will be triggered simultaneously.
<##head##>

## Inputs

| Data                                  | Description                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Enabled</span> | <##input:enabled##>This port is used to disable/enable this node.<##input##> If disabled the receiver node will not be activated when the corresponding [Send Event][0] node is triggered.                                                                                                                                                                  |
| <span class="ndl-data">Consume</span> | <##input:consume##>This property specified if and how the event is consumed when captured by this receive event node.<##input##>                                                                                                                                                                                                                            |
| <span class="ndl-data">Channel</span> | <##input:channelName##>Each **Receive Event** node must listen to a specific channel.<##input##> This means that when a [Send Event][0] node of that channel is triggered all **Receive Event** nodes with the same channel will be triggered as well (depending on the propagation, please review the [Events guide](/guides/events.md) for more details). |

## Outputs

| Mixed                                        | Description                                                                                                                                                                                                                    |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span class="ndl-data">Custom Outputs</span> | The **Receive Event** node will automatically get outputs from all [Send Event][0] nodes connected to the same channel. See the [Send Event][0] documentation for more details on adding ports for sending values with events. |

| Signal                                   | Description                                                                                                                                                                              |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Received</span> | <##output:eventReceived##>This is a signal port, it is triggered when a signal is triggered in any **Send Event** node with the same channel as this **Receive Event** node.<##output##> |
