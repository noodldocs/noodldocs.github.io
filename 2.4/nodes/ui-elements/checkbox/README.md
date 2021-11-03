<##head##>
# Checkbox

This node places a customizable checkbox in the visual tree. 

![](/checkbox_visual.png ':class=img-size-l')

The checkbox will flip its state when clicked and its **Checked** property can be connected to a data source, such as a variable or object.

![](/checkbox_node.png ':class=img-size-l')

<##head##>

This control contains all logic such as accessibility etc. It can be styled in via it's properties, or you can use it only for the logic and create your own checkbox component in your own design system.

![](/checkbox.gif ':class=img-size-s')

## Inputs

[filename](../shared-props/inputs/margin-only/README.md ':include')

[filename](../shared-props/inputs/alignment/README.md ':include')

### Dimensions

**Width**  
Specify the width of the checkbox in pixels, percentage of parent width or the unit _vw_ which is percentage of the browser window width.

**Height**  
Specify the height of the checkbox in pixels, percentage of parent height or the unit _vw_ which is percentage of the browser window height.

### General

**Enabled**  
Sets the checkbox in enabled or disabled mode. A disable checkbox will not respond to user interaction.

**Checked**  
A boolean setting the checkbox in "checked" or "unchecked" state. This is the value of the checkbox and can be connected to a data source.

### Layout

[filename](../shared-props/inputs/position/README.md ':include')

### Checked Style

**Background Color**  
The background color when the checkbox is "checked".

### Style

[filename](../shared-props/inputs/visibility-styles/README.md ':include')

[filename](../shared-props/inputs/border-and-corner-styles/README.md ':include')

### Box Shadow

[filename](../shared-props/inputs/box-shadow-styles/README.md ':include')

### Placement  

[filename](../shared-props/inputs/placement-styles/README.md ':include')


### Other

[filename](../shared-props/inputs/other/README.md ':include')

[filename](../shared-props/inputs/advanced-style/README.md ':include')


## Outputs

### Other  
[filename](../shared-props/outputs/other/README.md ':include')

[filename](../shared-props/outputs/bounding-box/README.md ':include')

[filename](../shared-props/outputs/mounted/README.md ':include')

### General  
[filename](../shared-props/outputs/control-id/README.md ':include')

### States   

**Checked**  
A boolean output that is true when this checkbox control is checked and false if not. This is useful when using this control as a base for your own component that will represent visually that it is checked.

[filename](../shared-props/outputs/control-states/README.md ':include')

### Events

[filename](../shared-props/outputs/control-events/README.md ':include')

