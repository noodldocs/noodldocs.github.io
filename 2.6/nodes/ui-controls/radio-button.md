---
hide_title: true
hide_table_of_contents: true
title: Radio Button
---

<##head##>

# Radio Button

This node places a radio button in the visual tree. The <span className="ndl-node">Radio Button</span> must be placed in a <span className="ndl-node">Radio Button Group</span> node to function properly.

<div className="ndl-image-with-background l">

![](/nodes/ui-controls/radio-button/radio_button_visual.png)

</div>

You must specify a unique <span className="ndl-data">Value</span> for each <span className="ndl-node">Radio Button</span> node. Only one <span className="ndl-node">Radio Button</span> in a <span className="ndl-node">Radio Button Group</span> can be selected at once.

<div className="ndl-image-with-background l">

![](/nodes/ui-controls/radio-button/radio_button_node.png)

</div>

<##head##>

The core radio button has a very simple visual appearance and is most often used in other components as part of a design system. This control contains all logic such as accessibility etc. It can be styled in via it's properties, or you can use it only for the logic and create your own radio button component in your own design system.

<div className="ndl-image-with-background s">

![](/nodes/ui-controls/radio-button/radiobutton.gif)

</div>

## Inputs

The main input of the Radio Button node is the <span className="ndl-data">Value</span> input:

| Data                                               | Description                                                                                                                                                                                                               |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Value</span>            | The value for this radio button. The value of the selected radio button in a radio button group will be passed as the **Value** output of the radio button group. All radio buttons in a group should have unique values. |
| <span className="ndl-data">Background Color</span> | The background color when the radio button is "checked".                                                                                                                                                                  |

It can be enabled and disabled using the <span className="ndl-data">Enabled</span> input:

| Data                                      | Description                                                                                                                                                            |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Enabled</span> | <##input:enabled##>Specifies if the control is **Enabled** (`true`) or **Disabled** (`false`). A disabled control will not respond to any user interaction.<##input##> |


The Checkbox node has a set of label properties that can be set:

| Data                                           | Description                                                                                      |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Enable Label</span> | Sets whether the label is visible or not.                                                        |
| <span className="ndl-data">Text Style</span>   | Set an existing text style to this node, or create a new text style from the current properties. |
| <span className="ndl-data">Label</span>        | A text string that will be shown as the label on the button.                                     |
| <span className="ndl-data">Spacing</span>      | The spacing between the label and the checkbox.                                                  |

Similarly, it has a set of icon properties:

| Data                                          | Description                                                                                         |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Enable Icon</span> | Sets whether the icon is visible or not.                                                            |
| <span className="ndl-data">Type</span>        | Use this to set if you want to use a predefined `icon` or a custom `image` from the project folder. |
| <span className="ndl-data">Source</span>      | Where to get the icon.                                                                              |
| <span className="ndl-data">Placement</span>   | Sets whether the icon should be to the `left` or to the `right` of the _Label_                      |
| <span className="ndl-data">Size</span>        | The width of the icon in `px`.                                                                      |
| <span className="ndl-data">Color</span>       | Sets the color of the icon. Only visible if _Type_ is set to `icon`.                                |

### Visual

This node supports the following [Visual Input Properties](../shared-props/inputs/visual-input-properties/):

-   [Margin](../shared-props/inputs/visual-input-properties/#margin)
-   [Padding](../shared-props/inputs/visual-input-properties/#padding)
-   [Alignment](../shared-props/inputs/visual-input-properties/#alignment)
-   [Dimensions](../shared-props/inputs/visual-input-properties/#dimensions)
-   [Layout, Position](../shared-props/inputs/visual-input-properties/#-position)
-   [Style](../shared-props/inputs/visual-input-properties/#style)
-   [Border Style](../shared-props/inputs/visual-input-properties/#border-style)
-   [Corner Radius](../shared-props/inputs/visual-input-properties/#corner-radius)
-   [Box Shadow](../shared-props/inputs/visual-input-properties/#box-shadow)
-   [Placement](../shared-props/inputs/visual-input-properties/#placement)
-   [Other](../shared-props/inputs/visual-input-properties/#other)
-   [Advanced Style](../shared-props/inputs/visual-input-properties/#advanced-style)

## Outputs

The main output of the Radio Button node is the <span className="ndl-data">Checked</span> output.

| Data                                      | Description                                                                                                                                                                                                        |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Checked</span> | A boolean output that is true when this radio button control is checked and false if not. This is useful when using this control as a base for your own component that will represent visually that it is checked. |

It also features a set of <span className="ndl-signal">signals</span>:

| Signal                                           | Description                                                                                                                   |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Changed</span>      | A signal is sent on this output when the value of the control is changed by user interaction.                                 |
| <span className="ndl-signal">Focused</span>      | <##output:onFocus##>A signal is sent on this output when the control is focused.<##output##>                                  |
| <span className="ndl-signal">Blurred</span>      | <##output:onBlur##>A signal is sent on this output when the control is blurred, i.e. it has lost the input focus.<##output##> |
| <span className="ndl-signal">Pointer Down</span> | <##output:pointerDown##>Emitted when the mouse is pressed or finger is down on the node.<##output##>                          |
| <span className="ndl-signal">Pointer Up</span>   | <##output:pointerUp##>Emitted when the mouse is released or finger is lifted on the node.<##output##>                         |
| <span className="ndl-signal">Hover Start</span>  | <##output:hoverStart##>Emitted when the mouse enters the node.<##output##>                                                    |
| <span className="ndl-signal">Hover End</span>    | <##output:hoverEnd##>Emitted when the mouse leaves the node.<##output##>                                                      |


### States

Apart from triggering <span className="ndl-signal">signals</span> the Checkbox node also notifies of its state through <span className="ndl-data">data</span> outputs:

| Data                                      | Description                                                                                                                                                                                                                                                                                                                                                    |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Enabled</span> | <##output:enabled##>A boolean output that is true if the control is in **Enabled** state and false if it is **Disabled**. This is useful when using this control as a base for your own component that will represent visually that it is enabled or disabled.<##output##>                                                                                     |
| <span className="ndl-data">Focused</span> | <##output:focusState##>This is a boolean type output that will be true if the control is in **Focused** state, and false otherwise. This is useful when using this control as a base for your own component that will represent visually that it is focused. This can be due to the user selecting the control for input or by using the keyboard.<##output##> |
| <span className="ndl-data">Hover</span>   | <##output:hoverState##>A boolean type output that is true when the user hovers over this control with the mouse and false otherwise. This is useful when using this control as a base for your own component that will represent visually that it is hovered.<##output##>                                                                                      |
| <span className="ndl-data">Pressed</span> | <##output:pressedState##>A boolean output that is true when the user is currently pressing the control. This is useful when using this control as a base for your own component that will represent visually that it is pressed.<##output##>                                                                                                                   |


This node supports the following [Visual Output Properties](../shared-props/outputs/visual-output-properties/):

-   [Bounding Box](../shared-props/outputs/visual-output-properties/#bounding-box)
-   [Mounted](../shared-props/outputs/visual-output-properties/#mounted)
-   [Other](../shared-props/outputs/visual-output-properties/#other)

<div className="hidden-props-for-editor">

# Visual Input Properties

All visual nodes feature a plethora of visual properties that can be accessed both in the Property Panel and through inputs. These are documented below. Plese refer to the individual node documentation pages to see which nodes feature what visual properties.

## Margin

Margins are the spacings around the node, outside of the borders. The margins for the node can be set individually in the Spacing Gadget.

<div className="ndl-image-with-background">

![](/nodes/ui-elements/margin.png)

</div>

| Data                                            | Description                                             |
| ----------------------------------------------- | ------------------------------------------------------- |
| <span className="ndl-data">Margin Left</span>   | The left margin in `px`, or `%` of the parents width.   |
| <span className="ndl-data">Margin Right</span>  | The right margin in `px`, or `%` of the parents width.  |
| <span className="ndl-data">Margin Top</span>    | The top margin in `px` or, `%` of the parents width.    |
| <span className="ndl-data">Margin Bottom</span> | The bottom margin in `px`, or `%` of the parents width. |

## Padding

Paddings are the spacings around the nodes content, inside of the borders. The margins for the node can be set individually in the Spacing Gadget.

<div className="ndl-image-with-background">

![](/nodes/ui-elements/padding.png)

</div>

| Data                                             | Description                                              |
| ------------------------------------------------ | -------------------------------------------------------- |
| <span className="ndl-data">Padding Left</span>   | The left padding in `px`, or `%` of the parents width.   |
| <span className="ndl-data">Padding Right</span>  | The right padding in `px`, or `%` of the parents width.  |
| <span className="ndl-data">Padding Top</span>    | The top padding in `px` or, `%` of the parents width.    |
| <span className="ndl-data">Padding Bottom</span> | The bottom padding in `px`, or `%` of the parents width. |

## Alignment

To specify how the node is aligned to its parent you can use the Alignment Gadget.

<div className="ndl-image-with-background">

![](/nodes/ui-elements/alignment.png)

</div>

From left to right, the alignment options are:

| Data                                                      | Description                                             |
| --------------------------------------------------------- | ------------------------------------------------------- |
| <span className="ndl-data">Align Bottom</span>            | Align this node to the bottom of its parent.            |
| <span className="ndl-data">Align Vertical Center</span>   | Align this node to the bottom of its parent.            |
| <span className="ndl-data">Align Top</span>               | Align this node to the top of its parent.               |
| <span className="ndl-data">Align Left</span>              | Align this node to the left side of its parent.         |
| <span className="ndl-data">Align Horizontal Center</span> | Align this node to the horizontal center of its parent. |
| <span className="ndl-data">Align Right</span>             | Align this node to the right of its parent.             |

## Dimensions

Controling the width and height of the node is done with the Dimension Gadget.

<div className="ndl-image-with-background">

![](/nodes/ui-elements/dimensions.png)

</div>

The first four controls the **Size Mode** of the node. It decides how the width and height of the node is specified. From left to right, the options are:

| Data                                                             | Description                                                                                                                                 |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Explicit width and height</span>      | Set the width and height directly in pixels or percentage. Percentage is in relation to the parent, so 100% is the same size as the parent. |
| <span className="ndl-data">Explicit height, Content Width</span> | The node will calculate the width to fit all of its children. The height is explicitly set.                                                 |
| <span className="ndl-data">Explicit width, Content Height</span> | The node will calculate the height to fit all of its children. The width is explicitly set.                                                 |
| <span className="ndl-data">Content Size</span>                   | Both the width and the height is calculated to fit all of the node's children.                                                              |

The other properties are:

| Data                                     | Description                                                                                                                                                                                                                                                                                                         |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Width</span>  | Specify the width of this node in pixels, percentage of parent's width or the unit `vw` which is percentage of the browser window width.                                                                                                                                                                            |
| <span className="ndl-data">Height</span> | Specify the height of this node in pixels, percentage of parent's height or the unit `vw` which is percentage of the browser window height.                                                                                                                                                                         |
| <span className="ndl-data">Fixed</span>  | Controls if an element will try to resize and share space with siblings without going outside of the bounds of the parent. <br/> <br/>If _Fixed_ is enabled, the element will be the exact specified size. If it is disabled, the element will resize to fill up empty space, or shrink to make space for siblings. |

You can use the [Dimension Contstraints Gadget](#dimension-constraints) to set a min and/or a max size for the node.

## Layout

The supported properties of the Layout Gadget can be very different depending on the node. All possible properties are listed below.

<div className="ndl-image-with-background">

![](/nodes/ui-elements/layout.png)

</div>

### • Position

Controls the layout of this node is in its parent group.

| Option                                      | Description                                                                                                                                                                                                                       |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">In Layout</span> | This node is part of the parent group layout, it will be stacked with its siblings depending on the parent group layout settings.                                                                                                 |
| <span className="ndl-data">Absolute</span>  | This node will not be part of the parent group layout, instead you are free to use the `Pos X` and `Pos Y` to place this node explicitly.                                                                                         |
| <span className="ndl-data">Sticky</span>    | Behaves like _In Layout_, except when the node is about the be scrolled outside the parent. It'll stick to an edge of the parent instead of scrolling away. The edge it sticks to can be controlled with the **Alignment** input. |

### • Layout Direction

By default all children are stacked. This property specifies the stacking direction.

| Data                                         | Description                        |
| -------------------------------------------- | ---------------------------------- |
| <span className="ndl-data">Vertical</span>   | Children are stacked vertically.   |
| <span className="ndl-data">Horizontal</span> | Children are stacked horizontally. |
| <span className="ndl-data">None</span>       | Children are not stacked.          |

### • Multi Line Wrap

This property specifies what happens with children that are stacked outside of the border of the node.

| Data                                         | Description                                                                                            |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Off</span>        | Children are stacked beyond the boundaries of the node. If _Clip_ is enabled they will not be visible. |
| <span className="ndl-data">On</span>         | Children are wrapped to the next row or column (depending on layout direction).                        |
| <span className="ndl-data">On Reverse</span> | Same as _On_ but opposite layout direction.                                                            |

### • Clip content

This property controls if elements that are too big to fit inside the node will be clipped.

If disabled, a group will always expand to contain all of its children. So if the children are taller than the size of the group, the group will expand and be larger than its specified size.

## Align and justify content

This Gadget controls how children are aligned and justified by default. Children can override these settings with their **Alignment** input.

<div className="ndl-image-with-background">

![](/nodes/ui-elements/align_and_justify.png)

</div>

The first set of options control cross-axis alignment, meaning vertical alignment for horizontal layouts, and horizontal alignment for vertical layouts. From left to right, the options are:

| Option                                               | Description                                       |
| ---------------------------------------------------- | ------------------------------------------------- |
| <span className="ndl-data">Align items start</span>  | Children are stacked at the start of the parent.  |
| <span className="ndl-data">Align items center</span> | Children are stacked at the center of the parent. |
| <span className="ndl-data">Align items end</span>    | Children are stacked at the end of the parent.    |

The second set of options control alignment in the same direction as the layout. From left to right, the options are:

| Option                                                          | Description                                                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Justify content start</span>         | Children are stacked at the start of the parent.                                                    |
| <span className="ndl-data">Justify content center</span>        | Children are stacked at the center of the parent.                                                   |
| <span className="ndl-data">Justify content end</span>           | Children are stacked at the end of the parent.                                                      |
| <span className="ndl-data">Justify content space between</span> | Children are evenly distributed. No space is added between the parent and the first and last child. |
| <span className="ndl-data">Justify content space around</span>  | Children are evenly distributed. Space is added between the parent and the first and last child.    |
| <span className="ndl-data">Justify content space evenly</span>  | Children are evenly distributed with equal space between them.                                      |

## Scroll

This Gadget controls how scrolling should be handled within the node.

<div className="ndl-image-with-background">

![](/nodes/ui-elements/scroll.png)

</div>

| Data                                            | Description                                                                                                                                                                                                                                              |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Enable Scroll</span> | This specifies if the node should have scrolling enabled for children that overflow outside of the nodes boundaries. Scrolling direction is determined by the nodes [Layout](#layout) direction. Enabling this will show the scrolling properties below. |

| Data                                                     | Description                                                                                                                                                                                                  |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Native Platform Scroll</span> | When enabled, uses the web's native scrolling dependent on the platform. Uses custom Noodl scrolling when disabled. The custom Noodl scrolling is platform independent and has both touch and mouse support. |
| <span className="ndl-data">Show Scrollbar</span>         | Only available if _Native Platform Scroll_ is disabled. Toggles the visibility of the scrollbar.                                                                                                             |
| <span className="ndl-data">Bounce at boundaries</span>   | Only available if _Native Platform Scroll_ is disabled. Toggles if scrolling bounces when you are at top or bottom of list.                                                                                  |
| <span className="ndl-data">Snap</span>                   | Only available if _Native Platform Scroll_ is disabled. Enabling this will snap the scrolling between every screen.                                                                                          |
| <span className="ndl-data">Snap To Every Item</span>     | Only available if _Snap_ is enabled. Enabling this will force the scrolling to snap to individual items.                                                                                                     |

## Text Style

| Data                                             | Description                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Text Style</span>     | Set an existing text style to this node, or create a new text style from the current properties.                                                                                                                                                                                                                               |
| <span className="ndl-data">Font Family</span>    | The font family of the text to display. Choose a font in the project folder or type font name.                                                                                                                                                                                                                                 |
| <span className="ndl-data">Font Size</span>      | The size of the font of the text to be displayed, in `px`.                                                                                                                                                                                                                                                                     |
| <span className="ndl-data">Color</span>          | The color of the text to be displayed.                                                                                                                                                                                                                                                                                         |
| <span className="ndl-data">Letter spacing</span> | The distance between letters in the string to be displayed. Can be specified in the following units: <br/><br/>`px`: Pixels. This is CSS pixels, so one pixel will be two physical pixels on a retina display<br/>`em`: Relative to the font size. 1em is the same as the current font size                                    |
| <span className="ndl-data">Line height</span>    | The line height of the string, if the string is on multiple lines. Can be specified in the following units: <br/><br/> `No unit`: Relative to the current font size. Preferred way to set line height <br/>`px`: Pixels. This is CSS pixels, so one pixel will be two physical pixels on a retina display <br/>`%`: Percentage |
| <span className="ndl-data">Case</span>           | Control how to capitalize the text: <br/><br/>`None`: Characters are unmodified<br/>`Uppercase`: All characters will be uppercase<br/>`Lowercase`: All characters will be lowercase<br/>`Capitalize`: The first letter of each word will be converted to uppercase                                                             |

## Style

This Gadget controls basic styling of the node.

<div className="ndl-image-with-background">

![](/nodes/ui-elements/style.png)

</div>

| Data                                               | Description                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Opacity</span>          | The opacity of the node. 0 is completely transparent and invisible. 1 is completely solid and opaque.                                                                                                                                                                                                  |
| <span className="ndl-data">Background Color</span> | Specifies the background color for this node.                                                                                                                                                                                                                                                          |
| <span className="ndl-data">Visible</span>          | Toggle the visibility of this node on and off.                                                                                                                                                                                                                                                         |
| <span className="ndl-data">zIndex</span>           | The depth index for this node, this can be any number.                                                                                                                                                                                                                                                 |
| <span className="ndl-data">Blend Mode</span>       | Controls how this element should blend with the elements behind it. The blend mode can be set to one of the following: `Multiply` `Normal` `Screen` `Overlay` `Darken` `Lighten` `Color Dodge` `Color Burn` `Hard Light` `Soft Light` `Difference` `Exclusion` `Hue` `Saturation` `Color` `Luminosity` |

## Border Style

The Border Style Gadget is used to style the borders.

<div className="ndl-image-with-background">

![](/nodes/ui-elements/border_style.png)

</div>

You can select to style all borders at once, or only style individual borders. The styling for the individual borders will override the all-borders option.

| Data                                           | Description                                                                                                                            |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Border Style</span> | Specifies whether this node should have a border and what it should look like. The options are `None`, `Solid`, `Dotted` and `Dashed`. |
| <span className="ndl-data">Border Width</span> | The width of the border. Only available if _Border Style_ is set to have a border.                                                     |
| <span className="ndl-data">Border Color</span> | The color of the border. Only available if _Border Style_ is set to have a border.                                                     |

## Corner Radius

The Corner Radius Gadget is used to round the corners of the node.

<div className="ndl-image-with-background">

![](/nodes/ui-elements/corner_radius.png)

</div>

You can select to set the corner radius all corners at once, or only style individual corners. The styling for the individual corners will override the all-corners option.

The corner radius is specified in `px` or `%` of the nodes width.

## Box Shadow

You use the Box Shadow Gadget to set the shadow behind or inside of the node.

<div className="ndl-image-with-background">

![](/nodes/ui-elements/box_shadow.png)

</div>

| Data                                             | Description                                                                                                                                                         |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Shadow Enabled</span> | Enables and disables the shadow.                                                                                                                                    |
| <span className="ndl-data">Offset X</span>       | The horizontal offset of the shadow. A positive value puts the shadow on the right side of the node, a negative value puts the shadow on the left side of the node. |
| <span className="ndl-data">Offset Y</span>       | The vertical offset of the shadow. A positive value puts the shadow below the node, a negative value puts the shadow above node.                                    |
| <span className="ndl-data">Blur Radius</span>    | The blur radius. The higher the number, the blurrier the shadow will be.                                                                                            |
| <span className="ndl-data">Spread Radius</span>  | The spread radius. A positive value increases the size of the shadow, a negative value decreases the size of the shadow.                                            |
| <span className="ndl-data">Inset</span>          | Changes the shadow from an outer shadow (outset) to an inner shadow.                                                                                                |
| <span className="ndl-data">Shadow Color</span>   | The color of the shadow.                                                                                                                                            |

## Placement

The Placement Gadget lets you offset, rotate and scale the node. It uses CSS Transforms under the hood, meaning that the nod will still take up the original size and position in the visual tree.

<div className="ndl-image-with-background">

![](/nodes/ui-elements/placement.png)

</div>

| Data                                                 | Description                                                                                                                                                                                                                                              |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Pos X</span>              | The X position of the node. Either relative to its parent top left corner or relative to its layout position depending on the _Position_ property. Can be specified in pixels or as a percentage of its parent's width.                                  |
| <span className="ndl-data">Pos Y</span>              | The Y position of the node either relative to its parent's top left corner or relative to its layout position depending on the _Position_ property. Can be specified in pixels or as a percentage of its parent's height.                                |
| <span className="ndl-data">Rotation</span>           | The rotation in degrees.                                                                                                                                                                                                                                 |
| <span className="ndl-data">Scale</span>              | Specifies scaling of this node. A value of 0 scales the node down completely so that it is no longer be visible. A value of 1 gives it the original size, and a value of 2 doubles the size and so on.                                                   |
| <span className="ndl-data">Transform Origin X</span> | Specifies the X position, within this node, that will be the center for rotation and scale. By default it is the center of the node (i.e. 50%) but you can specify an arbitrary value in either percentage of the node's width or explicitly in pixels.  |
| <span className="ndl-data">Transform Origin Y</span> | Specifies the Y position, within this node, that will be the center for rotation and scale. By default it is the center of the node (i.e. 50%) but you can specify an arbitrary value in either percentage of the node's height or explicitly in pixels. |

## Dimension Constraints

The Dimension Constraints Gadget allows you to clamp the values of the [Dimensions Gadget](#dimensions).

<div className="ndl-image-with-background">

![](/nodes/ui-elements/dimension_constraints.png)

</div>

| Data                                         | Description                                                                                                                                               |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Min Width</span>  | The minimum width that can be assumed by growing with children or parent. Can be specified in % or pixels, or _vw_ which is percentage of window width.   |
| <span className="ndl-data">Max Width</span>  | The maximum width that can be assumed by growing with children or parent. Can be specified in % or pixels, or _vw_ which is percentage of window width.   |
| <span className="ndl-data">Min Height</span> | The minimum height that can be assumed by growing with children or parent. Can be specified in % or pixels, or _vh_ which is percentage of window height. |
| <span className="ndl-data">Max Height</span> | The maximum height that can be assumed by growing with children or parent. Can be specified in % or pixels, or _vh_ which is percentage of window height. |

## Focus

| Signal                                    | Description                                                                                                                             |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Focus</span> | Focuses this node. Will trigger the _Focused_ signal output on this node, as well as _Focused Lost_ on other nodes that now lost focus. |

## Other

| Data                                                     | Description                                                                                                                                                                                                                                               |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Pointer Events Mode</span>    | This specifies how this node responds to pointer events.<br/><br/>`Inherit` sets the node to respond to pointer events in the same way as its parent.<br/>`Explicit` sets the node to respond to pointer events as specified by _Pointer Events Enabled_. |
| <span className="ndl-data">Pointer Events Enabled</span> | This property is only available if _Pointer Events Mode_ is set to _Explicit_. It will specify if this node responds to pointer events or not. If set to false this node will completely ignore pointer events.                                           |
| <span className="ndl-data">Block Pointer Events</span>   | This will cause this node to block all pointer events, e.g. any node that is behind this node will not receive pointer events.                                                                                                                            |
| <span className="ndl-data">Mounted</span>                | This property is used to completely remove the node from the DOM. If this property is set to false the node is removed from the visual tree. It differs from the _Visible_ property where the node is still part of the visual tree but invisible.        |

## Advanced Style

| Data                                        | Description                                                             |
| ------------------------------------------- | ----------------------------------------------------------------------- |
| <span className="ndl-data">CSS Class</span> | <##input:cssClass##>Specify a CSS class this node will have.<##input##> |
| **CSS Style**                               | Use this property to specify your custom CSS.                           |

# Visual Output Properties

## Scrolling

| Data                                              | Description                                  |
| ------------------------------------------------- | -------------------------------------------- |
| <span className="ndl-data">Scroll Position</span> | The current position of scrolling in pixels. |

| Signal                                           | Description                           |
| ------------------------------------------------ | ------------------------------------- |
| <span className="ndl-signal">Scroll Start</span> | Signal emitted when scrolling starts. |
| <span className="ndl-signal">Scroll End</span>   | Signal emitted when scrolling ends.   |

## Bounding Box

| Data                                                | Description                                                                                 |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Screen Position X</span> | <##output:screenPositionX##>Where this node is on the screen's X-axis, in `px`.<##output##> |
| <span className="ndl-data">Screen Position Y</span> | <##output:screenPositionY##>Where this node is on the screen's Y-axis, in `px`.<##output##> |
| <span className="ndl-data">Width</span>             | <##output:width##>Current width of this node.<##output##>                                   |
| <span className="ndl-data">Height</span>            | <##output:height##>Current height of this node.<##output##>                                 |

## Mounted

| Signal                                           | Description                                                                                                                           |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Did Mount</span>    | <##output:didMount##>Signal sent when this node has been mounted, i.e. has become part of the visual tree and is visible.<##output##> |
| <span className="ndl-signal">Will Unmount</span> | <##output:willUnmount##>Signal sent when this node is about to be removed from the visual tree and become hidden.<##output##>         |

## Pointer Events

| Signal                                            | Description                                                           |
| ------------------------------------------------- | --------------------------------------------------------------------- |
| <span className="ndl-signal">Click</span>         | Triggered when the node is clicked or tapped.                         |
| <span className="ndl-signal">Pointer Down</span>  | Triggered when the mouse is pressed or finger is down on the node.    |
| <span className="ndl-signal">Pointer Up</span>    | Triggered when the mouse is released or finger is lifted on the node. |
| <span className="ndl-signal">Pointer Enter</span> | Triggered when the mouse enters the node.                             |

## Hover Events

| Signal                                          | Description                               |
| ----------------------------------------------- | ----------------------------------------- |
| <span className="ndl-signal">Hover Start</span> | Triggered when the mouse enters the node. |
| <span className="ndl-signal">Hover End</span>   | Triggered when the mouse leaves the node. |

## Focus

| Signal                                      | Description                                                                                                                       |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Focused</span> | Triggered when the node, or one if its descendants, is clicked, or if the _Focused_ input is triggered.                           |
| <span className="ndl-signal">Blurred</span> | Triggered when this node had focus and another node gained focus. Focus is only lost if the new focused node is not a descendant. |

## Other

| Data                                          | Description                                                                                                                                                                                                                              |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Child Index</span> | <##output:childIndex##>The place this node has in relation to its parent. E.g. if a **Group** has three children, then the first child will have _Child Index_ `0`, the second child will have _Child Index_ `1`, and so on.<##output##> |
| <span className="ndl-data">This</span>        | <##output:this##>A reference to this node. Used in custom **JavaScript** nodes and more.<##output##>                                                                                                                                     |


</div>
