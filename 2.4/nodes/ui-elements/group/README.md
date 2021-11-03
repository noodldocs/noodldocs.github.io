<##head##>
# Group

The Group node works as a styleable container, that can have other visual nodes nested inside of it.

![](/group_visual.png ':class=img-size-l')

The Group is the most essential node when it comes to creating layouts and arranging of visual elements.

![](/group_node.png ':class=img-size-l')

<##head##>

**Group** nodes are typically used to layout children by stacking (the default), but can also be used to simply provide margins and padding to a group of visual nodes. To learn more about **Group** nodes check out the [Layouting guide](/guides/layouts.md).

## Inputs
[filename](../shared-props/inputs/margin-and-padding/README.md ':include')

### Alignment

[filename](../shared-props/inputs/alignment/README.md ':include')

### Dimensions

[filename](../shared-props/inputs/size-mode-and-dimensions/README.md ':include')

### Layout

[filename](../shared-props/inputs/position/README.md ':include')

**Layout Direction**  
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

![](../shared-props/inputs/group-align-and-justify.png ':class=img-size-m')

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

[filename](../shared-props/inputs/visibility-styles/README.md ':include')

[filename](../shared-props/inputs/border-and-corner-styles/README.md ':include')


### Box Shadow

[filename](../shared-props/inputs/box-shadow-styles/README.md ':include')


### Placement

[filename](../shared-props/inputs/placement-styles/README.md ':include')

[filename](../shared-props/inputs/dimension-constraints/README.md ':include')


### Focus

**Focus**  
Focuses this group. Will trigger the _Focused_ output on this group, as well as _Focused Lost_ on other groups that now lost focus.


[filename](../shared-props/inputs/other/README.md ':include')


[filename](../shared-props/inputs/advanced-style/README.md ':include').

## Outputs

### Other

[filename](../shared-props/outputs/other/README.md ':include')

**Scroll Position**  
The current position of scrolling in pixels.

**Scroll Start**  
Signal emitted when scrolling starts.

**Scroll End**  
Signal emitted when scrolling ends.

### Bounding Box

[filename](../shared-props/outputs/bounding-box/README.md ':include')

### Mounted

[filename](../shared-props/outputs/mounted/README.md ':include')

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