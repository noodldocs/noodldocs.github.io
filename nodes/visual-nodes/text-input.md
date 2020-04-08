# Group

This node represents a text input element.

## Margin and padding
Using the margin and padding gadget you can specify the top, bottom, left and right margins and padding for this element. You can specify them in either pixels or percentage (of the corrensponding parent dimension). Margins are the distance between this object and siblings. Padding is the distance from the borders of this group to it's children.
![](margin-and-padding.png)

<div class = "node-inputs">

## Inputs
### Dimensions
**Size Mode**
Controls how the width and height of a *Group* is specified

- *Explicit* - Set the width and height directly in pixels or percent. Percent is in relation to the parent, so 100% is the same size as the parent
- *Content Width* - The text input will calculate the width. The height is explicitly set
- *Content Height* - The text input will calculate the height. The width is explicitly set
- *Content Size* - Both the width and the height is calculated to fit all of the Group's children

**Width**
Specify the width of this element in pixels, percentage of parent width or the unit _vw_ which is percentage of the browser window width.

**Height**
Specify the height of this element in pixels, percentage of parent height or the unit _vw_ which is percentage of the browser window height.

### Other

**Text**
The text string of the text input. Setting this will change the current text.

**Disabled**
Set this to disable the text input so it cannot receive input from the user.

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

**Type**
The type of the text input.

* _Text_ - A single line string input (default).
* _Text Area_ - A multi line text input. 
* _Email_ - A single line email text input.
* _Number_ - A single line number input.
* _Password_ - A single line password input, will mask password by default.


**Font Family**
The font family used in the text input, choose any font in the project folder or type in font name.

**Font Size**
The size of the font in the text input, in pixels.

**Placeholder**
The placeholder text for when the text input is empty.

### Alignment

**Position**
Controls how this node is layouted in it's parent group.

* _Relative_ - This node is part of the groups layout, it will be stacked with it's siblings depending on the parent group layout settings.
* _Absolute_ - This node will not be part of the parent group layout, instead you are free to use the _Pos X_ and _Pos Y_ to place this node explicitly.

**Align X**  
How to align the object in relation to its parent

**Align Y**  
How to align the object in relation to its parent

### Style

**Font Color**
The color of the text.

**Background Color**
The background color of the text input.

**Border Color**
The color of the border around the text input. Only valid if _Border Width_ is more than 0.

**Border Width**
The width of the border around the text input.

**Opacity**
The opacity of the text input, 0 means completely translucent (i.e. invisible) and 1 completely opaque.

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

**Background Color**
Specifies the background color for this group.

**Border Radius**
Specifies the border radius if the group are set to have a border.

**Border Style**
Specifies whether the group should have a border and what it should look like.

* _None_ - No border.
* _Solid_ - Solid border.
* _Dotted_ - Dotted border.
* _Dashed_ - Dashed border.

**Border Width**
The width of the border, if this group is set to have a border.

**Border Color**
The color of the border, if this group is set to have a border.

## Box Shadow

**Shadow Enabled**
Enables and disables shadow below this group.

**Offset X**
The horizontal offset of the shadow. A positive value puts the shadow on the right side of the box, a negative value puts the shadow on the left side of the box.

**Offset Y**
The vertical offset of the shadow. A positive value puts the shadow below the box, a negative value puts the shadow above the box.

**Blur Radius**
The blur radius. The higher the number, the more blurred the shadow will be.

**Spread Radius**
The spread radius. A positive value increases the size of the shadow, a negative value decreases the size of the shadow.

**Inset**
Changes the shadow from an outer shadow (outset) to an inner shadow.

**Shadow Color**
The color of the shadow.

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

### Value

**Text**
The current text string.

### Focus

**Focused**
Signal that is emitted when the text inputs gets input focus.

**Blurred**
Signal that is emitted when the text input losses input focus.

</div>



