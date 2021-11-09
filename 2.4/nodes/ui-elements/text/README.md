<##head##>
# Text

This node represents a text element, and is used for both single words as well as paragraphs of text.

![](./text_visual.png ':class=img-size-l')

The Text node can be styled with font family, color, size, and much more.

![](./text_node.png ':class=img-size-l')

<##head##>

## Inputs

[filename](../shared-props/inputs/margin-only/README.md ':include')

[filename](../shared-props/inputs/alignment/README.md ':include')

### Text Alignment

<div class="ndl-images">
    <img src="/nodes/visual/text-align.png" class="ndl-image small"></img>
</div>

**Text Align**
The alignment of the text string within the Text node's bounding box.

- _Left_ - The text is left aligned.
- _Center_ - The text is centered on each line.
- _Right_ - The text is right aligned.

[filename](../shared-props/inputs/dimensions-and-size-mode/README.md ':include')

### Text

**Text**
The text string to display.

[filename](../shared-props/inputs/text-styles/README.md ':include')

**Word Break**
Control where line breaks are allowed
- Normal: Break on spaces and other whitespace characters
- Break All: Allow line breaks between any two characters, including inside words


[filename](../shared-props/inputs/visibility-styles/README.md ':include')

[filename](../shared-props/inputs/placement-styles/README.md ':include')

### Layout
[filename](../shared-props/inputs/position/README.md ':include')

[filename](../shared-props/inputs/other/README.md ':include')

[filename](../shared-props/inputs/advanced-style/README.md ':include')

## Outputs

### Other

**Child Index**
The place this node has in relation to its parent. E.g. if a **Group** has three children, then the first child will have _Child Index_ 0, the second child will have _Child Index_ 1, and so on.

**This**
A reference to this node. Used in custom **Javascript** nodes and more.

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
