# Text

This node represents a text.

## Inputs

### Margin

Using the margin gadget you can specify the top, bottom, left and right margins for this node. You can specify them in either pixels or percentage (of the corresponding parent dimension).

<div class="ndl-images">
    <img src="/nodes/visual/margin-only.png" class="ndl-image small"></img>  
</div>

**Margin Left**  
The left margin in pixels or % of parent.

**Margin Right**  
The right margin in pixels or % of parent.

**Margin Top**  
The top margin in pixels or % of parent.

**Margin Bottom**  
The bottom margin in pixels or % of parent.

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

### Text Alignment

<div class="ndl-images">
    <img src="/nodes/visual/text-align.png" class="ndl-image small"></img>  
</div>

**Text Align**  
The alignment of the text string within the Text node's bounding box.

- _Left_ - The text is left aligned.
- _Center_ - The text is centered on each line.
- _Right_ - The text is right aligned.

### Dimensions

**Size Mode**  
Controls how the width and height of this node is specified.

<div class="ndl-images">
    <img src="/nodes/visual/dims-1.png" class="ndl-image small"></img>  
</div>

- _Explicit width and height_ - Set the width and height directly in pixels or percent. Percentage is in relation to the parent, so 100% is the same size as the parent
- _Explicit height, Content Width_ - The node will have the same width as the text string on screen. The height is explicitly set
- _Explicit width, Content Height_ - The node will have the same height as the text string on screen. The width is explicitly set
- _Content Size_ - The node will have the same size as the text dimensions.

**Width**  
Specify the width of this node in pixels, percentage of parent width or the unit _vw_ which is percentage of the browser window width.

**Height**  
Specify the height of this node in pixels, percentage of parent height or the unit _vw_ which is percentage of the browser window height.

### Text

**Text**  
The text string to display.

**Font Family**  
The font family of the text to display. Choose a font in the project folder or type font name.

**Font Size**  
The size of the font of the text to be displayed, in pixels.

**Color**  
The color of the text to be displayed.

**Letter Spacing**  
The distance between letters in the string to be displayed. Can be specified in the following units:
- `px`: Pixels. This is CSS pixels, so one pixel will be two physical pixels on a retina display
- `em`: Relative to the font size. 1em is the same as the current font size

**Line Height**  
The line height of the string, if the string is on multiple lines. Can be specified in the following units:
- No unit: Relative to the current font size. Preferred way to set line height
- `px`: Pixels. This is CSS pixels, so one pixel will be two physical pixels on a retina display
- `%`: Percentage

**Word Break**  
Control where line breaks are allowed
- Normal: Break on spaces and other whitespace characters
- Break All: Allow line breaks between any two characters, including inside words

**Case**  
Control how to capitalize the text
- _None_ - Characters are unmodified 
- _Uppercase_ - All characters will be uppercase
- _Lowercase_ - All characters will be lowercase
- _Capitalize_ - The first letter of each word will be converted to uppercase

### Style

[filename](./visibility-styles.md ':include')

### Placement

**Pos X**  
The X position of this node. Either relative to its parent's top left corner or relative to its layout position depending on the _Position_ property. Can be specified in pixels or as a percentage of its parents width.

**Pos Y**  
The Y position of this node. Either relative to its parent's top left corner or relative to its layout position depending on the _Position_ property. Can be specified in pixels or as a percentage of its parents height.

**Rotation**  
The rotation in degrees.

**Scale**  
Specifies scaling of this node. A value of 0 scales the node down completely so that it is no longer be visible. A value of 1 gives it the original size, and a value of 2 doubles the size and so on.

**Transform Origin X**  
Specifies the X position, within this node, that will be the center for rotation and scale. By default it is the center of the node (i.e. 50%) but you can specify an arbitrary value in either percentage of the node's width or explicitly in pixels.

**Transform Origin Y**  
Specifies the Y position, within this node, that will be the center for rotation and scale. By default it is the center of the node (i.e. 50%) but you can specify an arbitrary value in either percentage of the node's height or explicitly in pixels.

### Other

**Position**  
Controls how this node is layouted in its parent group.

- _In Layout_ - This node is part of the parent group layout, it will be stacked with its siblings depending on the parent group layout settings.
- _Absolute_ - This node will not be part of the parent group layout, instead you are free to use the _Pos X_ and _Pos Y_ to place this node explicitly.

**Block Pointer Events**  
This will cause this node to block all pointer events, e.g. any node that is behind this element will not receive pointer events.

**Pointer Events Mode**  
This specifies how this node responds to pointer events.

- _Inherit_ - This node will respond to pointer events in the same way as its parent.
- _Explicit_ - This node will respond to pointer events as specified by _Pointer Events Enabled_

**Pointer Events Enabled**  
This property is only available if _Pointer Events Mode_ is set to _Explicit_. It will specify if this node responds to pointer events or not. If set to false this node will completely ignore pointer events.

**Mounted**  
This property is used to completely remove the node from the DOM. If this property is set to false the node is removed from the DOM. It differs from the _Visible_ property where the node is still part of the DOM but invisible.

[filename](../advanced-style.md ':include')

## Outputs

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

### Pointer Events

**Click**  
Emitted when the node is clicked or tapped.

**Pointer Down**  
Emitted when the mouse is pressed or finger is down on the node.

**Pointer Up**  
Emitted when the mouse is released or finger is lifted on the node.

**Pointer Enter**  
Emitted when the mouse enters the node.

### Hover Events

**Hover Start**  
Emitted when the mouse enters the node.

**Hover End**  
Emitted when the mouse leaves the node.
