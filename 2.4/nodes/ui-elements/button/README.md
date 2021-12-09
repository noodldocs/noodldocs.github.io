<##head##>

# Button

This node places a customizable button in the visual tree.

<div class="ndl-image-with-background l">

![](./button_visual.png)

</div>

The button has a <span class="ndl-signal">Click</span> signal that you can use to trigger actions.

<div class="ndl-image-with-background l">

![](./button_node.png)

</div>
<##head##>

This control contains all logic such as accessibility etc. It can be styled in via it's properties.
Use variations to create different types of buttons

## Inputs

The Button can be enabled and disabled using the Enabled input:

[filename](../shared-props/inputs/general/enabled.md ':include')

The Button node has a set of label properties that can be set:

| Data                                       | Description                                                                                      |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| <span class="ndl-data">Enable Label</span> | Sets whether the label is visible or not.                                                        |
| <span class="ndl-data">Text Style</span>   | Set an existing text style to this node, or create a new text style from the current properties. |
| <span class="ndl-data">Label</span>        | A text string that will be shown as the label on the button.                                     |

Similarly, it has a set of icon properties:

| Data                                      | Description                                                                                         |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Enable Icon</span> | Sets whether the icon is visible or not.                                                            |
| <span class="ndl-data">Type</span>        | Use this to set if you want to use a predefined `icon` or a custom `image` from the project folder. |
| <span class="ndl-data">Source</span>      | Where to get the icon.                                                                              |
| <span class="ndl-data">Spacing</span>     | The spacing between the text and the icon.                                                          |
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
-   [Text Styles](nodes/ui-elements/visual-input-properties/#text-styles)
-   [Style](nodes/ui-elements/visual-input-properties/#style)
-   [Border Style](nodes/ui-elements/visual-input-properties/#border-style)
-   [Corner Radius](nodes/ui-elements/visual-input-properties/#corner-radius)
-   [Box Shadow](nodes/ui-elements/visual-input-properties/#box-shadow)
-   [Placement](nodes/ui-elements/visual-input-properties/#placement)
-   [Dimension Constraints](nodes/ui-elements/visual-input-properties/#dimension-constraints)
-   [Other](nodes/ui-elements/visual-input-properties/#other)
-   [Advanced Style](nodes/ui-elements/visual-input-properties/#advanced-style)

## Outputs

The main output for the button is the Click <span class="ndl-signal">signal</span>:

| Signal                                | Description                                                                                 |
| ------------------------------------- | ------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Click</span> | <##output:onClick##>A signal is sent on this output when the button is clicked.<##output##> |

It also features a set of more in depth <span class="ndl-signal">signals</span>:

[filename](../shared-props/outputs/control-events/README.md ':include')

### States

Apart from triggering <span class="ndl-signal">signals</span> the Button node also notifies of its state through <span class="ndl-data">data</span> outputs:

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
