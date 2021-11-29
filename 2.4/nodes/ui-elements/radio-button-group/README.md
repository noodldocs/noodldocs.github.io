<##head##>

# Radio Button Group

This node is a non visual control used to group <span class="ndl-node">Radio Button</span> nodes. The <span class="ndl-node">Radio Button</span> must be placed in a <span class="ndl-node">Radio Button Group</span> node to function properly.

![](./radio_button_visual.png ':class=img-size-l')

The output of the <span class="ndl-node">Radio Button Group</span> node is the <span class="ndl-data">Value</span> of the selected <span class="ndl-node">Radio Button</span>. Only one <span class="ndl-node">Radio Button</span> in a <span class="ndl-node">Radio Button Group</span> can be selected at the same time.

![](./radio_button_node.png ':class=img-size-l')

<##head##>

## Inputs

| Data                                | Description                                                                                                                  |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Value</span> | The value of the current selected radio button. By changing this value will change which radio button is currently selected. |

It can be enabled and disabled using the <span class="ndl-data">Enabled</span> input:

[filename](../shared-props/inputs/general/enabled.md ':include')

### Visual

This node supports the following [Visual Input Properties](nodes/ui-elements/visual-input-properties/):

-   [Margin](nodes/ui-elements/visual-input-properties/#margin)
-   [Padding](nodes/ui-elements/visual-input-properties/#padding)
-   [Alignment](nodes/ui-elements/visual-input-properties/#alignment)
-   [Dimensions](nodes/ui-elements/visual-input-properties/#dimensions)
-   [Layout](nodes/ui-elements/visual-input-properties/)
-   [Style](nodes/ui-elements/visual-input-properties/#style)
-   [Placement](nodes/ui-elements/visual-input-properties/#placement)
-   [Dimension Constraints](nodes/ui-elements/visual-input-properties/#dimension-constraints)
-   [Other](nodes/ui-elements/visual-input-properties/#other)
-   [Advanced Style](nodes/ui-elements/visual-input-properties/#advanced-style)

## Outputs

| Data                                | Description                                                  |
| ----------------------------------- | ------------------------------------------------------------ |
| <span class="ndl-data">Value</span> | The current selected radio button value will be output here. |

| Signal                                  | Description                                                                                              |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Changed</span> | This event is triggered when the **Value** of the radio button group is changed due to user interaction. |

### Visual

This node supports the following [Visual Output Properties](nodes/ui-elements/visual-output-properties/):

-   [Bounding Box](nodes/ui-elements/visual-output-properties/#bounding-box)
-   [Mounted](nodes/ui-elements/visual-output-properties/#mounted)
-   [Other](nodes/ui-elements/visual-output-properties/#other)

<div class="hidden-props-for-editor">

[filename](../visual-input-properties/README.md ':include')
[filename](../visual-output-properties/README.md ':include')

</div>
