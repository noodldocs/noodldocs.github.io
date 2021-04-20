# Text Input

This is a text input node.

## INPUTS

### Margin and padding

Using the margin and padding gadget you can specify the top, bottom, left and right margins and padding for this node. You can specify them in either pixels or percentage (of the corrensponding parent dimension). Margins are the distance between this node and its siblings. Padding is the distance from the borders of this nodes container to its children.

<div class="ndl-images">
    <img src="/nodes/visual/margin-and-padding.png" class="ndl-image small"></img>  
</div>

<div class = "node-inputs">

### Alignment

<div class="ndl-images">
    <img src="/nodes/visual/align-props.png" class="ndl-image small"></img>  
</div>

Use the alignment gadget to specify how this node is aligned to its parent. Important to note is that the horizontal alignment options won't have any effect if the parent's layout is set to _Horizontal_, and similarly the vertical alignments have no effect if the parent's layout is set to _Vertical_.

From left to right, the alignment options are:

- _Align Bottom_ - Align this node to the bottom of its parent. Doesn't have any effect if parent's layout is set to _Vertical_.
- _Align Vertical Center_ - Align this node to the vertical center of its parent. Doesn't have any effect if parent's layout is set to _Vertical_.
- _Align Top_ -Align this node to the top of its parent. Doesn't have any effect if parent's layout is set to _Vertical_.
- _Align Left_ - Align this node to the left side of its parent. Doesn't have any effect if parent's layout is set to _Horizontal_.
- _Align Horizontal Center_ Align this node to the horizontal center of its parent. Doesn't have any effect if parent's layout is set to _Horizontal_.
- _Align Right_ - Align this node to the right of its parent. Doesn't have any effect if parent's layout is set to _Horizontal_.

### Dimensions

**Size Mode**  
Controls how the width and height of this node is specified.

<div class="ndl-images">
    <img src="/nodes/visual/dims-1.png" class="ndl-image small"></img>  
</div>

- _Explicit width and height_ - Set the width and height directly in pixels or percent. Percentage is in relation to the parent, so 100% is the same size as the parent
- _Explicit height, Image Width_ - The image node will have the same width as the image. The height is explicitly set
- _Explicit width, Image Height_ - The image node will have the same height as the image. The width is explicitly set
- _Image Size_ - Both the width and the height will be set to the dimensions of the image

**Width**  
Specify the width of this node in pixels, percentage of parent width or the unit _vw_ which is percentage of the browser window width.

**Height**  
Specify the height of this node in pixels, percentage of parent height or the unit _vw_ which is percentage of the browser window height.

### Text

**Text**  
The text string of the Text Input node. Setting this will change the current text, unless _Set_ is connected, then it will be updated when _Set_ receives a signal.

**Type**  
The type of the Text Input.

- _Text_ - A single line text input (default).
- _Text Area_ - A multi line text input.
- _Email_ - A single line email text input.
- _Number_ - A single line number input.
- _Password_ - A single line password input, will mask password by default.

**Font Family**  
The font family used in the Text Input node. Choose any font in the project folder or type in the font name.

**Font Size**  
The size of the font in the Text Input, in pixels.

**Placeholder**  
The placeholder text for when the Text Input is empty.

**Disabled**
Disables the Text Input so it cannot receive input from the user.

### Actions
**Set**  
Sets the text field value to the text in the _Text_ input.

**Clear**  
Clears the text

**Focus**  
Focuses the text field.

_Note_: Some browsers, most notably Safari, only allow focus if it originates from a user event, like a click. So using a Timer or other method might not work. 

**Blur**  
Removes the keyboard focus.

### Other

**Position**  
Controls how this node is layouted in its parent group.

- _In Layout_ - This node is part of the parent group layout, it will be stacked with its siblings depending on the parent group layout settings.
- _Absolute_ - This node will not be part of the parent group layout, instead you are free to use the _Pos X_ and _Pos Y_ to place this node explicitly.

**Pointer Events Mode**  
This specifies how this node responds to pointer events.

- _Inherit_ - This node will respond to pointer events in the same way as its parent.
- _Explicit_ - This node will respond to pointer events as specified by _Pointer Events Enabled_

**Pointer Events Enabled**  
This property is only available if _Pointer Events Mode_ is set to _Explicit_. It will specify if this node responds to pointer events or not. If set to false this node will completely ignore pointer events.

**Mounted**  
This property is used to completely remove the node from the DOM. If this property is set to false the node is removed from the DOM. It differs from the _Visible_ property where the node is still part of the DOM but invisible.

### Style

**Font Color**  
The color of the text.

**Background Color**  
The background color of the Text Input.

**Border Color**  
The color of the border around the Text Input node. Only valid if _Border Width_ is more than 0.

**Border Width**  
The width of the border around the Text Input.

**Opacity**  
The opacity of the node. 0 is completely transparent and invisible. 1 is completely solid and opaque.

**Visible**  
Toggle the visibility of this node on and off.

**zIndex**  
The depth index for this node, this can be any number.

### Placement

**Pos X**  
The X position of this node. Either relative to its parent's top left corner or relative to its layouted position depending on the _Position_ property. Can be specified in pixels or as a percentage of its parents width.

**Pos Y**  
The Y position of this node. Either relative to its parent's top left corner or relative to its layouted position depending on the _Position_ property. Can be specified in pixels or as a percentage of its parents height.

**Rotation**  
The rotation in degrees.

**Scale**  
Specifies scaling of this node. A value of 0 scales the node down completely so that it is no longer be visible. A value of 1 gives it the original size, and a value of 2 doubles the size and so on.

**Transform Origin X**  
Specifes the X position, within this node, that will be the center for rotation and scale. By default it is the center of the node (i.e. 50%) but you can specify an arbitrary value in either percentage of the node's width or explicitly in pixels.

**Transform Origin Y**  
Specifes the Y position, within this node, that will be the center for rotation and scale. By default it is the center of the node (i.e. 50%) but you can specify an arbitrary value in either percentage of the node's height or explicitly in pixels.

[filename](../advanced-style.md ':include')

</div>

<div class = "node-outputs">

## OUTPUTS

### Other

**Child Index**  
The place this node has in relation to its parent. E.g. if a **Group** has three children, then the first child will have _Child Index_ 0, the second child will have _Child Index_ 1, and so on.

**This**  
A reference to this node. Used in custom **Javascript** nodes and more.

### Bounding Box

**Screen Position X**  
Where this node is on the screen's X-axis, in pixels.

**Screen Position Y**  
Where this node is on the screen's Y-axis, in pixels.

**Width**  
Current width of this node.

**Height**  
Current height of this node.

### Mounted

**Did Mount**  
Signal sent when this node has been mounted, i.e. has become part of the visual tree and is visible.

**Will Unmount**  
Signal sent when this node is about to be removed from the visual tree and become hidden.

### Value

**Text**  
The current text string.

### Focus

**Focused**  
Signal that is emitted when the Text Input node gets input focus.

**Blurred**  
Signal that is emitted when the Text Input node loses input focus.

### Actions

**On Enter**  
Signal emitted when Enter/Return key is pressed.

</div>
