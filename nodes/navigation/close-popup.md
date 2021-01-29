# Close Popup

This node is used to close a popup that have previously been shown with the [Show Popup](/nodes/navigation/show-popup.md) node. The simples way to use it is to send a signal to the **Close** input. This will close the popup and remove the component instance.

<div class="ndl-images">
    <img src="/nodes/navigation/close-popup-1.png" class="ndl-image large"></img>   
</div>

### Results and close actions
You can also provide results back to the component that showed the popup. This is done by adding **Result** values and **Close Action** signals. The result values become inputs where you can pass data back, and the actions become signal inputs that can be used to send signals back. This is typically useful for popups that take some sort of input, e.g. **Name** and where the user can perform different actions, e.g. **Confirm** or **Cancel**.

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

## INPUTS

### Actions

**Close**  
Send a signal here to close the popup. If no close actions are specified this should be used.

### Results
All result values specified on this node will become available as inputs. See above for more details.

### Close Actions
All close actions specified on this node will become available as signal inputs. See above for more details.


## OUTPUTS

This node has no outputs.