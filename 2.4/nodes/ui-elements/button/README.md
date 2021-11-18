<##head##>
# Button

This node places a customizable button in the visual tree.

![](./button_visual.png ':class=img-size-l')

The button has a <span class="ndl-signal">Click</span> signal that you can use to trigger actions.

![](./button_node.png ':class=img-size-l')
<##head##>

This control contains all logic such as accessibility etc. It can be styled in via it's properties.
Use variations to create different types of buttons

## Inputs

[filename](../shared-props/inputs/margin-and-padding/README.md ':include')

### General

**Enabled**
Specifies if the control is **Enabled** (true) or **Disabled** (false). A disabled control will not respond to any user interaction.

**Label**
A text string that will be shown as the label on the button.

**Type**
The type of button, can be one of:

- **Button** A default button, when clicked it emits the **Click** output signal.
- **Submit** A submit button, when placed in a form it will trigger the **Submit** signal on the form when clicked. This is also important for accessibility.

[filename](../shared-props/inputs/alignment/README.md ':include')

[filename](../shared-props/inputs/dimensions-and-size-mode/README.md ':include')

### Layout

[filename](../shared-props/inputs/position/README.md ':include')

### Text

**Text**
The text string to display.

[filename](../shared-props/inputs/text-styles/README.md ':include')

[filename](../shared-props/inputs/visibility-styles/README.md ':include')

[filename](../shared-props/inputs/border-and-corner-styles/README.md ':include')

[filename](../shared-props/inputs/box-shadow-styles/README.md ':include')

[filename](../shared-props/inputs/placement-styles/README.md ':include')

[filename](../shared-props/inputs/other/README.md ':include')


[filename](../shared-props/inputs/advanced-style/README.md ':include')


## Outputs

### Other
[filename](../shared-props/outputs/other/README.md ':include')

[filename](../shared-props/outputs/bounding-box/README.md ':include')

[filename](../shared-props/outputs/mounted/README.md ':include')

### States

[filename](../shared-props/outputs/control-states/README.md ':include')

### Events

**Click**
<##output:onClick##>A signal is sent on this output when the button is clicked.<##output##>

[filename](../shared-props/outputs/control-events/README.md ':include')

