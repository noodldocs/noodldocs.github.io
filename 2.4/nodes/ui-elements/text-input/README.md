<##head##>
# Text Input

This node places a text input field in the visual tree. The input can be used to capture information from a user.

![](./textinput_visual.png ':class=img-size-l')

The captured value can easily be connected to other nodes in a project.

![](./textinput_node.png ':class=img-size-l')

<##head##>

## Inputs

[filename](../shared-props/inputs/margin-only/README.md ':include')

[filename](../shared-props/inputs/alignment/README.md ':include')

[filename](../shared-props/inputs/dimensions-and-size-mode/README.md ':include')

### Text

**Text**
The text string of the Text Input node. Setting this will change the current text, unless _Set_ is connected, then it will be updated when _Set_ receives a signal.

**Type**
The type of the Text Input.

- _Text_ - A single line text input (default).
- _Text Area_ - A multi line text input.
- _Email_ - A single line email text input.
- _Number_ - A single line number input.
- _Password_ - A single line password input, will mask password by default.

**Placeholder**
The placeholder text for when the Text Input is empty.

**Placeholder Opacity**
The opacity of the placeholder text. 0 is completely transparent and invisible. 1 is completely solid and opaque.


### Text Style
[filename](../shared-props/inputs/text-styles/README.md ':include')

### Actions
**Set**
Sets the text field value to the text in the _Text_ input.

**Clear**
Clears the text

**Focus**
Focuses the text field.

_Note_: Some browsers, most notably Safari, only allow focus if it originates from a user event, like a click. So using a Timer or other method might not work.

**Blur**
Removes the keyboard focus.

### Layout

[filename](../shared-props/inputs/position/README.md ':include')

[filename](../shared-props/inputs/visibility-styles/README.md ':include')

[filename](../shared-props/inputs/border-and-corner-styles/README.md ':include')

[filename](../shared-props/inputs/box-shadow-styles/README.md ':include')

[filename](../shared-props/inputs/placement-styles/README.md ':include')

[filename](../shared-props/inputs/other/README.md ':include')

[filename](../shared-props/inputs/advanced-style/README.md ':include')

</div>

<div class = "node-outputs">

## Outputs

### Other

**Child Index**
The place this node has in relation to its parent. E.g. if a **Group** has three children, then the first child will have _Child Index_ 0, the second child will have _Child Index_ 1, and so on.

**This**
A reference to this node. Used in custom **Javascript** nodes and more.

[filename](../shared-props/outputs/bounding-box/README.md ':include')

[filename](../shared-props/outputs/mounted/README.md ':include')

### Value

**Text**
The current text string.

### Focus

**Focused**
Signal that is emitted when the Text Input node gets input focus.

**Blurred**
Signal that is emitted when the Text Input node loses input focus.

### Actions

**On Enter**
Signal emitted when Enter/Return key is pressed.

</div>
