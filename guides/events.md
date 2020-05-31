# Events
This guide covers an important concept in Noodl called Events. Events are used to send signals with accompanying data from one part of the node graph and receive it at one or many other locations. This is often useful when an user interaction occurs at one place in the app, such as the click of a button, that should trigger an action at a different place, e.g. a popup showing.

This concept includes two nodes, the **Send Event** node and the **Receive Event** node. When you want to send an event you use the appropriately named node. Below is an example of an event being sent when a text node is clicked.

![](events/send-event.png ':class=img-size-m')

As you can see the **Click** signal on the **Text** node is connected to the **Send** input on the **Send Event** node. This will trigger the an event to be send when the text is clicked.

An event is sent to a certain **Channel** which is specified in the properties of the Send Event node. In this case the name of the channel is *Show Popup*.

![](events/channel-prop.png ':class=img-size-s')

The event signal is passed to all **Receive Event** nodes that share the same **Channel**. In the example below the event send above is received.

![](events/receive-event.png ':class=img-size-m')

Just to illustrate this you can see below how when the click signal is sent via the **Send Event** node it is passed to the **Received** output of the **Event Receiver** node.

![](events/events-demo.gif ':class=img-size-l')

This is the basic concept of the Events mechanism in Noodl. Next let's take a look at how you can pass data via payload connections to your event nodes. You start by adding ports to the **Send Event** node. You can add any number of ports for the data that you want to pass with the event.

![](events/add-port.gif ':class=img-size-l')

Next you can connect to the input ports. When the **Send** signal is received the value will captured on all inputs of the **Send Event** node and passed to the **Receive Event**.

![](events/connect-to-port.png ':class=img-size-m')



