<##head##>

# Text

This node places a text element in the visual tree. You can use it for both single words as well as paragraphs of text.

![](./text_visual.png ':class=img-size-l')

The <span class="ndl-node">Text</span> node can be styled with font family, color, size, and much more.

![](./text_node.png ':class=img-size-l')

<##head##>

## Inputs

| Data                                     | Description                                                                                                                                                                                        |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Text</span>       | The text string to display.                                                                                                                                                                        |
| <span class="ndl-data">Text Align</span> | The alignment of the text string within the Text node's bounding box.                                                                                                                              |
| <span class="ndl-data">Word Break</span> | Control where line breaks are allowed. <br/><br/> `Normal`: Break on spaces and other whitespace characters <br/>`Break All`: Allow line breaks between any two characters, including inside words |

### Visual

The Text node features the following [Visual Input Properties](nodes/ui-elements/visual-input-properties/).

-   [Margin](nodes/ui-elements/visual-input-properties/#margin)
-   [Alignment](nodes/ui-elements/visual-input-properties/#alignment)
-   [Dimensions](nodes/ui-elements/visual-input-properties/#dimensions)
-   [Text Styles](nodes/ui-elements/visual-input-properties/#text-styles)
-   [Style](nodes/ui-elements/visual-input-properties/#style)
-   [Placement](nodes/ui-elements/visual-input-properties/#placement)
-   [Layout, Position](nodes/ui-elements/visual-input-properties/#-position)
-   [Other](nodes/ui-elements/visual-input-properties/#other)
-   [Advanced Style](nodes/ui-elements/visual-input-properties/#advanced-style)

## Outputs

Many of the UI nodes share the same outputs. Please refer to the [Visual Output Properties](nodes/ui-elements/visual-output-properties/) documentation.

This node supports the following outputs:

-   [Bounding Box](nodes/ui-elements/visual-output-properties/#bounding-box)
-   [Mounted](nodes/ui-elements/visual-output-properties/#mounted)
-   [Pointer Events](nodes/ui-elements/visual-output-properties/#pointer-events)
-   [Hover Events](nodes/ui-elements/visual-output-properties/#hover-events)
-   [Other](nodes/ui-elements/visual-output-properties/#other)

<div class="hidden-props-for-editor">

[filename](../visual-input-properties/README.md ':include')
[filename](../visual-output-properties/README.md ':include')

</div>
