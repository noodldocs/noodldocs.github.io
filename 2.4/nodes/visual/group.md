# Group

This node represents a group that can have other visual nodes as children. **Group** nodes are typically used to layout children by stacking (the default), but can also be used to simply provide margins and padding to a group of visual nodes. To learn more about **Group** nodes check out the [Layouting guide](/guides/layouts.md).

## Inputs

### Margin and padding

Using the margin and padding gadget you can specify the top, bottom, left and right margins and padding for this node. You can specify them in either pixels or percentage of the corresponding parent's dimension. Margins are the distance between this node and its siblings. Padding is the distance from the borders of this node to its children.

![](margin-and-padding.png ':class=img-size-s')

### Alignment

![](align-props.png ':class=img-size-s')

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
Controls how the width and height of a **Group** is specified.

![](dims-1.png ':class=img-size-s')

- _Explicit width and height_ - Set the width and height directly in pixels or percentage. Percentage is in relation to the parent, so 100% is the same size as the parent.
- _Explicit height, Content Width_ - The node will calculate the width to fit all of its children. The height is explicitly set.
- _Explicit width, Content Height_ - The node will calculate the height to fit all of its children. The width is explicitly set.
- _Content Size_ - Both the width and the height is calculated to fit all of the node's children.

**Width**  
Specify the width of this node in pixels, percentage of parent's width or the unit _vw_ which is percentage of the browser window width.

**Height**  
Specify the height of this node in pixels, percentage of parent's height or the unit _vh_ which is percentage of the browser window height.

**Fixed**  
Controls if an element will try to resize and share space with siblings without going outside of the bounds of the parent.

- _Enabled_: Elements will be the exact size set
- _Disabled_: Element will resize to fill up empty space, or shrink to make space for siblings. Use the dimension constraints, min and max size, to control the boundaries

### Layout
**Position**  
Controls how this node is positioned in relation to siblings and if it affects the size of its parent.

- _In Layout_ - This node is part of the parent node's layout. It will be stacked with its siblings depending on the parent node's layout settings.
- _Absolute_ - Removes this node from the flow of the parent's layout. Use margins and alignment to set the position.
- _Sticky_ - Behaves like _In Layout_, except when the node is about the be scrolled outside the parent. It'll stick to an edge of the parent instead of scrolling away. Which edge can be controlled with the **Alignment** input.

**Layout**  
By default children are stacked and this property specifies which direction they should be stacked.

- _Vertical_ - Children are stacked vertically.
- _Horizontal_ - Children are stacked horizontally.
- _None_ - Children are not stacked.

**Multi Line Wrap**  
This property specifies what happens with children that are stacked outside of the border of the Group node.

- _Off_ - Children are stacked beyond the boundaries of the node. If _Clip_ is enabled they will not be visible.
- _On_ - Children are wrapped to the next row or column (depending on layout direction).
- _On Reverse_ - Same as _On_ but opposite layout direction.

**Clip content**  
Controls if elements that are too big to fit inside the parent will be clipped.

If disabled, a group will always expand to contain all of its children. So if the children are taller than the size of the group, the group will expand and be larger than its specified size.

**Align and justify content**  

![](group-align-and-justify.png ':class=img-size-m')
Control how children are aligned and justified by default. Children can override these settings with their **Alignment** input.

The following values control cross-axis alignment, meaning vertical alignment for horizontal layouts, and horizontal alignment for vertical layouts.
- _Align items start_: Children are stacked at the start of the parent.
- _Align items center_: Children are stacked at the center of the parent.
- _Align items end_: Children are stacked at the end of the parent.

The following values control alignment in the same direction as the layout.
- _Justify content start_: Children are stacked at the start of the parent.
- _Justify content center_: Children are stacked at the center of the parent.
- _Justify content end_: Children are stacked at the end of the parent.
- _Justify content space between_: Children are evenly distributed. No space is added between the parent and the first and last child.
- _Justify content space around_: Children are evenly distributed. Space is added between the parent and the first and last child.
- _Justify content space evenly_: Children are evenly distributed with equal space between them.


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

[filename](./visibility-styles.md ':include')

**Background Color**  
Specifies the background color for this node.

**Border Radius**  
Specifies the border radius if this node is set to have a border.

**Border Style**  
Specifies whether this node should have a border and what it should look like.

- _None_ - No border.
- _Solid_ - Solid border.
- _Dotted_ - Dotted border.
- _Dashed_ - Dashed border.

**Border Width**  
The width of the border. Only available it **Border Style** is set to have a border.

**Border Color**  
The color of the border. Only available it **Border Style** is set to have a border.

### Box Shadow

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

### Placement

**Pos X**  
The X position of the node. Either relative to its parent top left corner or relative to its layout position depending on the _Position_ property. Can be specified in pixels or as a percentage of its parent's width.

**Pos Y**  
The Y position of the node either relative to its parent's top left corner or relative to its layout position depending on the _Position_ property. Can be specified in pixels or as a percentage of its parent's height.

**Rotation**  
The rotation in degrees.

**Scale**  
Specifies scaling of this node. A value of 0 scales the node down completely so that it is no longer be visible. A value of 1 gives it the original size, and a value of 2 doubles the size and so on.

**Transform Origin X**  
Specifies the X position, within this node, that will be the center for rotation and scale. By default it is the center of the node (i.e. 50%) but you can specify an arbitrary value in either percentage of the node's width or explicitly in pixels.

**Transform Origin Y**  
Specifies the Y position, within this node, that will be the center for rotation and scale. By default it is the center of the node (i.e. 50%) but you can specify an arbitrary value in either percentage of the node's height or explicitly in pixels.

[filename](./dimension-constraints.md ':include')

**Max Width**

### Focus

**Focus**  
Focuses this group. Will trigger the _Focused_ output on this group, as well as _Focused Lost_ on other groups that now lost focus.

### Other

**Pointer Events Mode**  
This specifies how this node responds to pointer events.

- _Inherit_ - The node will respond to pointer events in the same way as its parent.
- _Explicit_ - The node will respond to pointer events as specified by _Pointer Events Enabled_

**Pointer Events Enabled**  
This property is only available if _Pointer Events Mode_ is set to _Explicit_. It will specify if this node responds to pointer events or not. If set to false this node will completely ignore pointer events.

**Block Pointer Events**  
This will cause this node to block all pointer events, e.g. any node that is behind this node will not receive pointer events.

**Mounted**  
This property is used to completely remove the node from the DOM. If this property is set to false the node is removed from the DOM. It differs from the _Visible_ property where the node is still part of the DOM but invisible.


[filename](../advanced-style.md ':include').

## Outputs

### Other

**Child Index**  
The place this node has in relation to its parent. E.g. if a **Group** has three children, then the first child will have _Child Index_ 0, the second child will have _Child Index_ 1, and so on.

**This**  
A reference to this node. Used in custom **Javascript** nodes and more.

**Scroll Position**  
The current position of scrolling in pixels.

**Scroll Start**  
Signal emitted when scrolling starts.

**Scroll End**  
Signal emitted when scrolling ends.

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

### Focus

**Focused**  
Emitted when the group, or one if its descendants, is clicked, or if the _Focused_ input is triggered.

**Focus Lost**  
Emitted when this group had focus and another group gained focus. Focus is only lost if the new focused group is not a descendant.