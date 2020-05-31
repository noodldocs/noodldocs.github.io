# Events
This guide covers an important concept in Noodl called Events. Events are used to send signals with accompanying data from one part of the node graph and receive it at one or many other locations. This is often useful when an user interaction occurs at one place in the app, such as the click of a button, that should trigger an action at a different place, e.g. a popup showing.

This concept includes two nodes, the **Send Event** node and the **Receive Event** node. When you want to send an event you use the appropriately named node. Below is an example of an event being sent when a text node is clicked.

![](events/send-event.png ':class=img-size-m')

## Sending and receiving events
As you can see the **Click** signal on the **Text** node is connected to the **Send** input on the **Send Event** node. This will trigger the an event to be send when the text is clicked.

An event is sent to a certain **Channel** which is specified in the properties of the Send Event node. In this case the name of the channel is *Show Popup*.

![](events/channel-prop.png ':class=img-size-s')

The event signal is passed to all **Receive Event** nodes that share the same **Channel**. In the example below the event send above is received.

![](events/receive-event.png ':class=img-size-m')

Just to illustrate this you can see below how when the click signal is sent via the **Send Event** node it is passed to the **Received** output of the **Event Receiver** node.

![](events/events-demo.gif ':class=img-size-l')

## Passing payload data
This is the basic concept of the Events mechanism in Noodl. Next let's take a look at how you can pass data via payload connections to your event nodes. You start by adding ports to the **Send Event** node. You can add any number of ports for the data that you want to pass with the event.

![](events/add-port.gif ':class=img-size-l')

Next you can connect to the input ports. When the **Send** signal is received the value will captured on all inputs of the **Send Event** node and passed to the **Receive Event**.

![](events/connect-to-port.png ':class=img-size-m')

When the **Receive Event** node sends the **Received** signal it will also update all outputs. You must add the payload port on the Send Event node first and it will become available on all Receive Event nodes that share the same channel.

![](events/receiver-outputs.png ':class=img-size-m')

## Propagation
Event propagation means how an event is sent in the graph, i.e. which **Receive Event** nodes it is sent to. The default propagation mode is **Global** which means the *all* receivers will be triggered. You can however change the propagation via the **Send To** property of the **Send Event** node.

![](events/send-to.png ':class=img-size-m')

The **Children** mode will send the events to all the children in the component where the **Send Event** node is. So in the example below, the event will first be sent to **My Child Comp** followed by any children that component may have. When all descendants of **My Child Comp** have received the event it will pass it to all children that are dynamically created by the **For Each** node, and their descendants.

![](events/send-to-children.png ':class=img-size-l')

The **Siblings** mode will pass the event to all other components that are on the same level as the component where the originating **Send Event** node is. So if for instance the **My Child Comp** in the graph below contains a **Send Event** node that sends an event to its siblings all other My Child Comp nodes will receive it, except for the one sending the event, followed by the child instances dynamically created by the **For Each** node.

![](events/send-to-siblings.png ':class=img-size-l')

The last propagation mode is **Parent**. This mode will instead send the event up the hierarchy. So if for instance the **My Other Child** in the example graph below contained a **Send Event** node that sends an event to it's parent. First the parent **My Child Comp** component with receive it, followed by this component and then the event would be passed on to the parent of this component. The propagation follows the visual hierarchy chain.

![](events/send-to-parent.png ':class=img-size-l')

The final thing to know about propagation is the **Consume** property of the **Receive Event** node. If that property is checked it means that when that particular node receives an event it will stop the propagation. So no other **Receive Event** nodes after that one will receive this specific event.


