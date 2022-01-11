<##head##>

# Checkbox

This node places a customizable checkbox in the visual tree.

<div class="ndl-image-with-background l">

![](./checkbox_visual.png)

</div>

The checkbox will flip its state when clicked and its <span class="ndl-data">Checked</span> property can be connected to a data source, such as a <span class="ndl-data">variable</span> or <span class="ndl-data">object</span>.

<div class="ndl-image-with-background l">

![](./checkbox_node.png)

</div>

<##head##>

This control contains all logic such as accessibility etc. It can be styled in via it's properties, or you can use it only for the logic and create your own checkbox component in your own design system.

<div class="ndl-image-with-background s">

![](./checkbox.gif)

</div>

## Inputs

The main input of the Checkbox node is the <span class="ndl-data">Checked</span> input:

| Data                                           | Description                                                                                                                                |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| <span class="ndl-data">Checked</span>          | <##input:checked##>A boolean setting the checkbox in "checked" or "unchecked" state. This is the value of the checkbox and can be connected to a data source.<##input##> |
| <span class="ndl-data">Background Color</span> | <##input:backgroundColor##>The background color when the checkbox is "checked"<##input##>.                                                                                       |

It can be enabled and disabled using the <span class="ndl-data">Enabled</span> input:

[filename](../shared-props/inputs/general/enabled.md ':include')

The Checkbox node has a set of label properties that can be set:

| Data                                       | Description                                                                                      |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| <span class="ndl-data">Enable Label</span> | Sets whether the label is visible or not.                                                        |
| <span class="ndl-data">Text Style</span>   | Set an existing text style to this node, or create a new text style from the current properties. |
| <span class="ndl-data">Label</span>        | A text string that will be shown as the label on the button.                                     |
| <span class="ndl-data">Spacing</span>      | The spacing between the label and the checkbox.                                                  |

Similarly, it has a set of icon properties:

| Data                                      | Description                                                                                         |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Enable Icon</span> | Sets whether the icon is visible or not.                                                            |
| <span class="ndl-data">Type</span>        | Use this to set if you want to use a predefined `icon` or a custom `image` from the project folder. |
| <span class="ndl-data">Source</span>      | Where to get the icon.                                                                              |
| <span class="ndl-data">Placement</span>   | Sets whether the icon should be to the `left` or to the `right` of the _Label_                      |
| <span class="ndl-data">Size</span>        | The width of the icon in `px`.                                                                      |
| <span class="ndl-data">Color</span>       | Sets the color of the icon. Only visible if _Type_ is set to `icon`.                                |

### Visual

This node supports the following [Visual Input Properties](nodes/ui-elements/visual-input-properties/):

-   [Margin](nodes/ui-elements/visual-input-properties/#margin)
-   [Alignment](nodes/ui-elements/visual-input-properties/#alignment)
-   [Dimensions](nodes/ui-elements/visual-input-properties/#dimensions)
-   [Layout, Position](nodes/ui-elements/visual-input-properties/#-position)
-   [Style](nodes/ui-elements/visual-input-properties/#style)
-   [Border Style](nodes/ui-elements/visual-input-properties/#border-style)
-   [Corner Radius](nodes/ui-elements/visual-input-properties/#corner-radius)
-   [Box Shadow](nodes/ui-elements/visual-input-properties/#box-shadow)
-   [Placement](nodes/ui-elements/visual-input-properties/#placement)
-   [Other](nodes/ui-elements/visual-input-properties/#other)
-   [Advanced Style](nodes/ui-elements/visual-input-properties/#advanced-style)

## Outputs

The main output of the Checkbox node is the <span class="ndl-data">Checked</span> output.

| Data                                  | Description                                                                                                                                                                                                    |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Checked</span> | <##output:checked##>A boolean output that is true when this checkbox control is checked and false if not. This is useful when using this control as a base for your own component that will represent visually that it is checked.<##output##> |

It also features a set of <span class="ndl-signal">signals</span>:

[filename](../shared-props/outputs/control-events/README.md ':include')

### States

Apart from triggering <span class="ndl-signal">signals</span> the Checkbox node also notifies of its state through <span class="ndl-data">data</span> outputs:

[filename](../shared-props/outputs/control-states/README.md ':include')

### Visual

This node supports the following [Visual Output Properties](nodes/ui-elements/visual-output-properties/):

-   [Bounding Box](nodes/ui-elements/visual-output-properties/#bounding-box)
-   [Mounted](nodes/ui-elements/visual-output-properties/#mounted)
-   [Other](nodes/ui-elements/visual-output-properties/#other)

<div class="hidden-props-for-editor">

[filename](../visual-input-properties/README.md ':include')
[filename](../visual-output-properties/README.md ':include')

</div>
