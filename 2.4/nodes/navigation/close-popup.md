<##head##>

# Close Popup

This node is used to close a popup that have previously been shown with the <span class="ndl-node">Show Popup</span> node. Sending a signal to the <span class="ndl-signal">Close</span> input will close the popup and remove the component instance.

<div class="ndl-images">
    <img src="/nodes/navigation/close-popup-1.png" class="ndl-image large"></img>
</div>

You can also pass data back to the component that triggered the popup by adding <span class="ndl-data">Result</span> values and <span class="ndl-signal">Close Action</span> signals. This is typically used for popups that propmt the user for some kind of input or action, like **Name**, **Confirm** or **Cancel**.

<##head##>

### Results and close actions

Sending data back to the triggering component is done by adding **Result** values and **Close Action** signals. The result values become inputs where you can pass data back, and the actions become signal inputs that can be used to send signals back. This is typically useful for popups that take some sort of input, e.g. **Name** and where the user can perform different actions, e.g. **Confirm** or **Cancel**.

<div class="ndl-images">
    <img src="/nodes/navigation/close-popup-2.png" class="ndl-image med"></img>
</div>

After specifying results and close actions in the properties the corresponding inputs become available on the **Close Popup** node.

<div class="ndl-images">
    <img src="/nodes/navigation/close-popup-3.png" class="ndl-image large"></img>
</div>

These **Result** values and **Close Actions** will also become available as outputs on the **Show Popup** nodes that have the component containing the **Close Popup** node as target.

<div class="ndl-images">
    <img src="/nodes/navigation/show-popup-3.png" class="ndl-image large"></img>
</div>

## Inputs

### Actions

**Close**
Send a signal here to close the popup. If no close actions are specified this should be used.

### Results

All result values specified on this node will become available as inputs. See above for more details.

### Close Actions

All close actions specified on this node will become available as signal inputs. See above for more details.

## Outputs

This node has no outputs.
