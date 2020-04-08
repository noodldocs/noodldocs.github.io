# EVENT RECEIVER

This node is used to receive events triggered by an [Event Sender][0] node.


![](event-receiver.png)

<div class = "node-inputs">

## INPUTS
**Enabled**  
This port can be used to disable the event receiver node. If set to _No_ the receiver node will not
be activated when the corresponding _Event Sender_ node is triggered.

**Channel**  
Each _Event Receiver_ node must listen to a specific channel. This means that when an _Event Sender_
node of that channel is triggered all _Event Receiver_ nodes with the same channel will be triggered as well.

</div>

<div class = "node-outputs">

## OUTPUTS
The _Event Receiver_ node will automatically get outputs from all _Event Sender_ nodes connected
to the same channel. See the _Event Sender_ documentation for more details on adding ports for sending values with events.

</div>

**Event Received**  
This is a signal port, it is triggered when a signal is triggered in any _Event Sender_ node with
the same channel as this _Event Receiver_ node.

[0]: ./event-sender
