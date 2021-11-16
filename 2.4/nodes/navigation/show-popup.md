<##head##>

# Show Popup

This node is used to display a component as a modal popup on top of the entire window.

<div class="ndl-images">
    <img src="/nodes/navigation/show-popup-2.png" class="ndl-image med"></img>
</div>

The <span class="ndl-node">Show Popup</span> node lets you specify which component will be popped up when signaled with the <span class="ndl-signal">Show</span> input. Any <span class="ndl-node">Component Inputs</span> that the specified component has will be available as inputs to the <span class="ndl-node">Show Popup</span> node.

<div class="ndl-images">
    <img src="/nodes/navigation/show-popup-1.png" class="ndl-image large"></img>
</div>

<##head##>

When a popup is closed with the [Close Popup](/nodes/navigation/close-popup.md) node it is possible to send back signals and values via **Results** and **Close Actions**. These will become available as outputs for the **Show Popup** node if the target popup component contains **Close Popup** nodes.

<div class="ndl-images">
    <img src="/nodes/navigation/show-popup-3.png" class="ndl-image large"></img>
</div>

## Inputs

### General

**Target**
A component that will be cloned and put on top of the entire window when the **Show** signals is received.

### Actions

**Show**
Send a signal here to show the popup.

### Params

Any **Component Inputs** that the popup component have will be available as inputs.

## Outputs

### Actions

**Closed**
A signal is sent here when the popup is closed with a **Close Popup** node. See [Close Popup](/nodes/navigation/close-popup.md) for more information.

### Close Results

Any result values provided via the [Close Popup](/nodes/navigation/close-popup.md) node from the target popup component will become available here.

### Close actions

Any close action signals provided via the [Close Popup](/nodes/navigation/close-popup.md) node from the target popup component will become available here.
