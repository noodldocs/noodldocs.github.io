# Show Popup

This node is used to display a component as a modal popup on top of the entire window. First you specify which component that will be placed on top and shown when signaled.

<div class="ndl-images">
    <img src="/nodes/navigation/show-popup-2.png" class="ndl-image med"></img>   
</div>

Next you can send a signal to the **Show** input when you would like to show the popup. The specified component will be cloned and put on top. Any **Component Inputs** that the popup component have will be available as inputs on the **Show Popup** node. So you can provide data that will be passed to the new component instance.

<div class="ndl-images">
    <img src="/nodes/navigation/show-popup-1.png" class="ndl-image large"></img>   
</div>

When a popup is closed with the [Close Popup](/nodes/navigation/close-popup.md) node it is possible to send back signals and values via **Results** and **Close Actions**. These will become available as outputs for the **Show Popup** node if the target popup component contains **Close Popup** nodes.

<div class="ndl-images">
    <img src="/nodes/navigation/show-popup-3.png" class="ndl-image large"></img>   
</div>

## INPUTS

### General

**Target**  
A component that will be cloned and put on top of the entire window when the **Show** signals is received.

### Actions

**Show**  
Send a signal here to show the popup.

### Params
Any **Component Inputs** that the popup component have will be available as inputs.

## OUTPUTS

### Actions

**Closed**  
A signal is sent here when the popup is closed with a **Close Popup** node. See [Close Popup](/nodes/navigation/close-popup.md) for more information.

### Close Results
Any result values provided via the [Close Popup](/nodes/navigation/close-popup.md) node from the target popup component will become available here.

### Close actions
Any close action signals provided via the [Close Popup](/nodes/navigation/close-popup.md) node from the target popup component will become available here.

