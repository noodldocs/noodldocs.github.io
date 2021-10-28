# SEND EVENT
<##head##>
**Send Event** nodes are used to send a signal to another place in your design without having to connect the nodes directly. To learn more about **Events** check out the [guide](/guides/events.md).

![](send-event.png)

Each **Send Event** has a _Send_ input that can be connected to a signal.
It also has a _Channel_ input port that can be used to specify a name that receiving nodes can reference to receive the signal.
<##head##>


## INPUTS

**Send Event** nodes can have arbitrary input ports that will be passed on to the
[Receive Event][0] nodes when the _Send_ signal is triggered. These ports can be added by
inspecting the node and clicking the _Add port_ button.

There may be multiple **Send Event** nodes with the same channel. In that case the receiving nodes
listening to the channel will get a merged set of ports from all **Send Event** nodes.

**Channel name**  
The channel name can be any identifier and is used on the [Receive Event][0] nodes to connect a sender and receiver node.

**Send**  
<##input:sendEvent##>Trigger this action to send the event.<##input##> This is a signal port and when triggered the corresponding [Receive Event][0] nodes will be triggered as well.

**Send To**  
<##input:propagation##>Controls what components the event will be sent to.<##input##>

- _Global_ - Send to all components
- _Parent_ - Send the event up the visual hierarchy to parent components.
- _Children_ - Send the events to all children of this component, and their descendants.
- _Siblings_ - Send the event to all siblings of this component in the visual hierarchy.



[0]: /nodes/standard/receive-event.md
