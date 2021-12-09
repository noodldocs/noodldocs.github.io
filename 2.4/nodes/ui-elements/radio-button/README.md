<##head##>

# Radio Button

This node places a radio button in the visual tree. The <span class="ndl-node">Radio Button</span> must be placed in a <span class="ndl-node">Radio Button Group</span> node to function properly.

<div class="ndl-image-with-background l">

![](./radio_button_visual.png)

</div>

You must specify a unique <span class="ndl-data">Value</span> for each <span class="ndl-node">Radio Button</span> node. Only one <span class="ndl-node">Radio Button</span> in a <span class="ndl-node">Radio Button Group</span> can be selected at once.

<div class="ndl-image-with-background l">

![](./radio_button_node.png)

</div>

<##head##>

The core radio button has a very simple visual appearance and is most often used in other components as part of a design system. This control contains all logic such as accessibility etc. It can be styled in via it's properties, or you can use it only for the logic and create your own radio button component in your own design system, see the [Simple Design System](/modules/sds-v3/) for inspiration.

<div class="ndl-image-with-background s">

![](./radiobutton.gif)

</div>

## Inputs

The main input of the Radio Button node is the <span class="ndl-data">Value</span> input:

| Data                                           | Description                                                                                                                                                                                                               |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Value</span>            | The value for this radio button. The value of the selected radio button in a radio button group will be passed as the **Value** output of the radio button group. All radio buttons in a group should have unique values. |
| <span class="ndl-data">Background Color</span> | The background color when the radio button is "checked".                                                                                                                                                                  |

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
-   [Padding](nodes/ui-elements/visual-input-properties/#padding)
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

The main output of the Radio Button node is the <span class="ndl-data">Checked</span> output.

| Data                                  | Description                                                                                                                                                                                                        |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span class="ndl-data">Checked</span> | A boolean output that is true when this radio button control is checked and false if not. This is useful when using this control as a base for your own component that will represent visually that it is checked. |

It also features a set of <span class="ndl-signal">signals</span>:

[filename](../shared-props/outputs/control-events/README.md ':include')

### States

Apart from triggering <span class="ndl-signal">signals</span> the Checkbox node also notifies of its state through <span class="ndl-data">data</span> outputs:

[filename](../shared-props/outputs/control-states/README.md ':include')

This node supports the following [Visual Output Properties](nodes/ui-elements/visual-output-properties/):

-   [Bounding Box](nodes/ui-elements/visual-output-properties/#bounding-box)
-   [Mounted](nodes/ui-elements/visual-output-properties/#mounted)
-   [Other](nodes/ui-elements/visual-output-properties/#other)

<div class="hidden-props-for-editor">

[filename](../visual-input-properties/README.md ':include')
[filename](../visual-output-properties/README.md ':include')

</div>
