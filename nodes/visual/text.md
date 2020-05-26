# Image

This node represents a text. 

## Margin
Using the margin gadget you can specify the top, bottom, left and right margins for this element. You can specify them in either pixels or percentage (of the corrensponding parent dimension).
![](margin-only.png)

<div class = "node-inputs">

## Inputs
### Dimensions
**Size Mode**
Controls how the width and height is specified

* _Explicit_ - Set the width and height directly in pixels or percent. Percent is in relation to the parent, so 100% is the same size as the parent
* _Content Width_ - The text node will have the same width as the text string on screen. The height is explicitly set
* _Content Height_ - The image node will have the same height as the text string on screen. The width is explicitly set
* _Content Size_ - Both the width and the height will be set to the dimensions of the text string on screen.

**Width**
Specify the width of this element in pixels, percentage of parent width or the unit _vw_ which is percentage of the browser window width.

**Height**
Specify the height of this element in pixels, percentage of parent height or the unit _vw_ which is percentage of the browser window height.

### Other


**Block Pointer Events**
This will cause this element to block all pointer events, e.g. any element that are behind this element will not receive pointer events.

**Visible**
Toggle the visibility of this element on and off.

**zIndex**
The depth index for this element, this can be any number.

**Pointer Events Mode**
This specifies how this node will responds to pointer events.

* _Inherit_ - This node will respond to pointer events in the same way is it's parent.
* _Explicit_ - This node will respond to pointer events as specified by _Pointer Events Enabled_

**Pointer Events Enabled**
This property is only available if _Pointer Events Mode_ is set to _Explicit_. It will specify if this node responds to pointer events or not. If set to false this node will completely ignore pointer events.

**Mounted**
This property can be used to completely remove this element from the DOM. As opposed to the _Visible_ property where the element is still part of the DOM by invisible if this property is set to false the element is removed from the DOM.

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
The distance between letters in the string to be displayed.

**Line Height**
The line height of the string, if the string is on multiple lines.

**Text Align**
The alignment of the text string wihtin it's bounding box.

* _Default_ -
* _Left_ - The text is right aligned.
* _Center_ - The text is centered on each line.
* _Right_ - The text is left aligned.

### Alignment

**Position**
Controls how this node is layouted in it's parent group.

* _Relative_ - This node is part of the groups layout, it will be stacked with it's siblings depending on the parent group layout settings.
* _Absolute_ - This node will not be part of the parent group layout, instead you are free to use the _Pos X_ and _Pos Y_ to place this node explicitly.

**Align X**  
How to align the object in relation to its parent

**Align Y**  
How to align the object in relation to its parent

### Placement

**Pos X**
The X position of this element either relative to it's parent top left corner or relative to it's layouted position depending on the _Position_ property. Can be specified in pixels or as a percentage of it's parents width.

**Pos Y**
The Y position of this element either relative to it's parent top left corner or relative to it's layouted position depending on the _Position_ property. Can be specified in pixels or as a percentage of it's parents height.

**Rotation**
The rotation in degrees.

**Scale**
Specified scaling of this element, a value of 0 scales the element down completely it will no longer be visible, a value of 1 will give it the original size, and a value of 2 will double the size etc.

**Transform Origin X**
Specifes the X position within this element that will be the center for rotation and scale. By default it is the center of the object (e.g. 50%) but you can specify an arbitrary value in either percentage of the element width or a explicitly in pixels.

**Transform Origin Y**
Specifes the Y position within this element that will be the center for rotation and scale. By default it is the center of the object (e.g. 50%) but you can specify an arbitrary value in either percentage of the element height or a explicitly in pixels.

### Style

**Opacity**
The opacity of the element, 0 will be completely translucent and this not visible, 1 will be completely solid.

### Advanced

**CSS Style**
Here you can add custom CSS styles that will be added to this element. The styles are specified in camel case, so _background-color_ in CSS will be specified as _backgroundColor_. 

</div>

<div class = "node-outputs">

## Outputs
### Other

**Child Index**  
The place this node has in relation to its parent. E.g. if a *Group* have three children, then the first child will have *Child Index* 0, the second child will have *Child Index* 1, and so on.

**This**  
A reference to this node. Used in custom *Javascript* nodes and more.

### Bounding Box

**Screen Position X**  
Where this object is on the screen, in pixels

**Screen Position Y**  
Where this object is on the screen, in pixels

**Width**  
Current width of this object

**Height**  
Current height of this object

### Pointer Events

**Click**
Emitted when the element is clicked or tapped.

**Pointer Down**
Emitted when the mouse is pressed or finger is down on the element.

**Pointer Up**
Emitted when the mouse is released or finger is lifted on the element.

**Pointer Enter**
Emitted when the mouse enters the element.

### Hover Events

**Hover Start**
Emitted when the mouse enters the element.

**Hover End**
Emitted when the mouse leaves the element.

</div>



