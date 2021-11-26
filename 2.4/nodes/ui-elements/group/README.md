<##head##>

# Group

This node is a styleable container. It can have other visual nodes nested inside of it.

![](./group_visual.png ':class=img-size-l')

The <span class="ndl-node">Group</span> is the most essential node when it comes to creating layouts and arranging visual elements.

![](./group_node.png ':class=img-size-l')

<##head##>

**Group** nodes are typically used to layout children by stacking (the default), but can also be used to simply provide margins and padding to a group of visual nodes. To learn more about **Group** nodes check out the [Layouting guide](/guides/layouts.md).

## Inputs

Many of the UI Elements share the same inputs. Please refer to the [Visual Properties](nodes/ui-elements/visual-properties/) documentation.

This node supports the following gadgets:

-   [Margin](nodes/ui-elements/visual-properties/#margin)
-   [Padding](nodes/ui-elements/visual-properties/#padding)
-   [Dimensions](nodes/ui-elements/visual-properties/#dimensions)
-   [Layout](nodes/ui-elements/visual-properties/#layout)
-   [Margin](nodes/ui-elements/visual-properties/#margin)
-   [Align and justify content](nodes/ui-elements/visual-properties/#align-and-justify-content)
-   [Scroll](nodes/ui-elements/visual-properties/#scroll)
-   [Style](nodes/ui-elements/visual-properties/#style)
-   [Border Style](nodes/ui-elements/visual-properties/#border-style)
-   [Corner Radius](nodes/ui-elements/visual-properties/#corner-radius)
-   [Box Shadow](nodes/ui-elements/visual-properties/#box-shadow)
-   [Placement](nodes/ui-elements/visual-properties/#placement)
-   [Dimension Constraints](nodes/ui-elements/visual-properties/#dimension-constraints)
-   [Other](nodes/ui-elements/visual-properties/#other)
-   [Advanced Style](nodes/ui-elements/visual-properties/#advanced-style)

## Focus

**Focus**
Focuses this group. Will trigger the _Focused_ output on this group, as well as _Focused Lost_ on other groups that now lost focus.

## Outputs

### Other

[filename](../shared-props/outputs/other/README.md ':include')

**Scroll Position**
The current position of scrolling in pixels.

**Scroll Start**
Signal emitted when scrolling starts.

**Scroll End**
Signal emitted when scrolling ends.

[filename](../shared-props/outputs/bounding-box/README.md ':include')

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
