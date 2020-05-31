# RECEIVE EVENT

This node is used to receive events triggered by an [Send Event][0] node. To learn more about **Events** check out the [guide](/guides/events.md).


![](receive-event.png)

<div class = "node-inputs">

## INPUTS
**Enabled**  
This port can be used to disable the receive event node. If disabled the receiver node will not
be activated when the corresponding _Send Event_ node is triggered.

**Channel**  
Each _Receive Event_ node must listen to a specific channel. This means that when an _Send Event_
node of that channel is triggered all _Receive Event_ nodes with the same channel will be triggered as well. (depending on the propagation, please review the [guide](/guides/events.md) for more details)

</div>

<div class = "node-outputs">

## OUTPUTS
The _Receive Event_ node will automatically get outputs from all _Send Event_ nodes connected
to the same channel. See the _Send Event_ documentation for more details on adding ports for sending values with events.

</div>

**Received**  
This is a signal port, it is triggered when a signal is triggered in any _Send Event_ node with
the same channel as this _Receive Event_ node.

[0]: /nodes/standard/send-event.md
