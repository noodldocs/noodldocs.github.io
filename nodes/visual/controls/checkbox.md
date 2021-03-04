# Checkbox

This node places a simple core checkbox in the visual tree. You can connect the checkbox **Checked** property to a data source, such as a variable or object.

<div class="ndl-images">
    <img src="/nodes/visual/controls/checkbox.png" class="ndl-image large"></img>  
</div>

The core checkbox has a very simple visual appearance and is most often used in other components as part of a design system. This control contains all logic such as accessibility etc.

<div class="ndl-images">
    <img src="/nodes/visual/controls/checkbox.gif" class="ndl-image small"></img>  
</div>

## INPUTS

[filename](../margin-only.md ':include')

[filename](../alignment.md ':include')

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

[filename](../position.md ':include')

### Checked Style

**Background Color**  
The background color when the checkbox is "checked".

### Style

[filename](../visibility-styles.md ':include')

[filename](../bg-and-border-styles.md ':include')

## Box Shadow

[filename](../box-shadow-styles.md ':include')

## Placement  

[filename](../placement-styles.md ':include')


### Other

[filename](../pointer-events-and-mounted.md ':include')


[filename](../../advanced-style.md ':include')


## OUTPUTS

### Other  
[filename](../child-index-and-this-outputs.md ':include')

[filename](../bounding-box-outputs.md ':include')

[filename](../mounted-outputs.md ':include')

### General  
[filename](./control-id-output.md ':include')

### States   

**Checked**  
A boolean output that is true when this checkbox control is checked and false if not. This is useful when using this control as a base for your own component that will represent visually that it is checked.

[filename](./control-states-outputs.md ':include')

### Events

[filename](./control-events-outputs.md ':include')

