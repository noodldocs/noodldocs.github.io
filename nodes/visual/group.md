# Group

This node represents a group that can have other visual nodes as children. **Group** nodes are typically used to layout children by stacking (the default), but can also be used to simply provide margins and padding to a group of visual objects. To learn more about **Group** nodes check out the layouting [guide](/guides/layouts.md).

## INPUTS

## Margin and padding

Using the margin and padding gadget you can specify the top, bottom, left and right margins and padding for this element. You can specify them in either pixels or percentage of the corrensponding parent's dimension. Margins are the distance between this object and siblings. Padding is the distance from the borders of this group to it's children.

<div class="ndl-images">
    <img src="/nodes/visual/margin-and-padding.png" class="ndl-image small"></img>  
</div>

**Margin Left**  
The left margin in pixels or % of parent.

**Margin Right**  
The right margin in pixels or % of parent.

**Margin Top**  
The top margin in pixels or % of parent.

**Margin Bottom**  
The bottom margin in pixels or % of parent.

**Padding Left**  
The left padding in pixels or % of parent.

**Padding Right**  
The right padding in pixels or % of parent.

**Padding Top**  
The top padding in pixels or % of parent.

**Padding Bottom**  
The bottom padding in pixels or % of parent.

### Dimensions

**Size Mode**  
Controls how the width and height of a **Group** is specified

<div class="ndl-images">
    <img src="/nodes/visual/dims-1.png" class="ndl-image small"></img>  
</div>

- _Explicit width and height_ - Set the width and height directly in pixels or percentage. Percentage is in relation to the parent, so 100% is the same size as the parent.
- _Explicit height, Content Width_ - The Group will calculate the width to fit all of its children. The height is explicitly set.
- _Explicit width, Content Height_ - The Group will calculate the height to fit all of its children. The width is explicitly set.
- _Content Size_ - Both the width and the height is calculated to fit all of the Group's children.

**Width**  
Specify the width of this element in pixels, percentage of parent's width or the unit _vw_ which is percentage of the browser window width.

**Height**  
Specify the height of this element in pixels, percentage of parent's height or the unit _vw_ which is percentage of the browser window height.

### Layout

**Layout**  
By default children are stacked and this property specifies which direction they should be stacked.

- _Vertical_ - Children are stacked vertically.
- _Horizontal_ - Children are stacked horizontally.
- _None_ - Children are not stacked.

**Multi Line Wrap**  
This property specifies what happens with children that are stacked outside of the border of the Group.

- _Off_ - Children are stacked beyond the boundaries of the Group. If _Clip_ is enabled they will not be visible.
- _On_ - Children are wrapped to the next row or column (depending on layout direction).
- _On Reverse_ - Same as _On_ but opposite layout direction.

### Alignment

<div class="ndl-images">
    <img src="/nodes/visual/align-props.png" class="ndl-image small"></img>  
</div>

**Align X**  
How to horizontally align the Group in relation to its parent. Can be **Left**, **Right** or **Center**.

**Align Y**  
How to vertically align the Group in relation to its parent. Can be **Top**, **Bottom**, or **Center**.

### Scroll

**Enable Scroll**  
This specifies if the Group should have scrolling enabled for children that overflow outside of the group boundaries. Scrolling direction is determined by the Group's **Layout** direction. Enabling this will show the below scrolling properties.

**Snap**  
Only available if _Native Platform Scroll_ is disabled. Enabling this will snap the scrolling between every screen.

**Snap To Every Item**  
Only available if _Snap_ is enabled. Enabling this will force the scrolling to snap to individual items.

**Show Scrollbar**  
Only available if _Native Platform Scroll_ is disabled. Toggles the visibility of the scrollbar.

**Bounce at boundaries**  
Only available if _Native Platform Scroll_ is disabled. Toggles if scrolling bounces when you are at top or bottom of list.

**Native Platform Scroll**  
When enabled, uses the web's native scrolling dependent on the platform. Uses custom Noodl scrolling when disabled. The custom Noodl scrolling is platform independent and has both touch and mouse support.

### Style

**Clip**  
Specifies whether the Group should clip any part of its children that are outside of its borders.

**Opacity**  
The opacity of the Group. 0 is completely transparent and invisible. 1 is completely solid and opaque.

**Background Color**  
Specifies the background color for this Group.

**Border Radius**  
Specifies the border radius if the Group is set to have a border.

**Border Style**  
Specifies whether the Group should have a border and what it should look like.

- _None_ - No border.
- _Solid_ - Solid border.
- _Dotted_ - Dotted border.
- _Dashed_ - Dashed border.

**Border Width**  
The width of the border. Only available it **Border Style** is set to have a border.

**Border Color**  
The color of the border. Only available it **Border Style** is set to have a border.

**Visible**  
Toggle the visibility of the Group on and off.

**zIndex**  
The depth index for the Group, this can be any number.

## Box Shadow

**Shadow Enabled**  
Enables and disables shadow below the Group.

**Offset X**  
The horizontal offset of the shadow. A positive value puts the shadow on the right side of the Group box, a negative value puts the shadow on the left side of the Group box.

**Offset Y**  
The vertical offset of the shadow. A positive value puts the shadow below the Group box, a negative value puts the shadow above the Group box.

**Blur Radius**  
The blur radius. The higher the number, the blurrier the shadow will be.

**Spread Radius**  
The spread radius. A positive value increases the size of the shadow, a negative value decreases the size of the shadow.

**Inset**  
Changes the shadow from an outer shadow (outset) to an inner shadow.

**Shadow Color**  
The color of the shadow.

### Other

**Position**  
Controls how this Group is layouted in its parent Group.

- _In Layout_ - This Group is part of the parent group's layout. It will be stacked with its siblings depending on the parent group's layout settings.
- _Absolute_ - This Group will not be part of the parent group's layout, instead you are free to use the _Pos X_ and _Pos Y_ to place this Group explicitly.

**Pointer Events Mode**  
This specifies how the Group responds to pointer events.

- _Inherit_ - The Group will respond to pointer events in the same way as its parent.
- _Explicit_ - The Group will respond to pointer events as specified by _Pointer Events Enabled_

**Pointer Events Enabled**  
This property is only available if _Pointer Events Mode_ is set to _Explicit_. It will specify if this Group responds to pointer events or not. If set to false this Group will completely ignore pointer events.

**Block Pointer Events**  
This will cause this Group to block all pointer events, e.g. any node that is behind this Group will not receive pointer events.

**Mounted**  
This property is used to completely remove the Group from the DOM. If this property is set to false the element is removed from the DOM. It differs from the _Visible_ property where the element is still part of the DOM but invisible.

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

### Advanced

**CSS Style**  
Here you can add custom CSS styles that will be added to this element. The styles are specified in camel case, so _background-color_ in CSS will be specified as _backgroundColor_.

## Outputs

### Other

**Child Index**  
The place this node has in relation to its parent. E.g. if a _Group_ have three children, then the first child will have _Child Index_ 0, the second child will have _Child Index_ 1, and so on.

**This**  
A reference to this node. Used in custom _Javascript_ nodes and more.

**Scroll Position**  
The current position of scrolling in pixels.

**Scroll Start**  
Signal emitted when scrolling starts.

**Scroll End**  
Signal emitted when scrolling ends.

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

### Mounted

**Did Mount**
Signal sent when this node has been mounted, i.e. has become part of the visual tree and is visible.

**Will Unmount**
Signal sent when this node is about to be removed from the visual tree and become hidden.
