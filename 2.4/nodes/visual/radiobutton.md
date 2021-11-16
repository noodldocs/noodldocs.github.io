<##head##>

# Radio Button

This node places a radio button in the visual tree. The <span class="ndl-node">Radio Button</span> must be placed in a <span class="ndl-node">Radio Button Group</span> node to function properly.

![](./radiobutton.png ':class=img-size-l')

You must specify a unique <span class="ndl-data">Value</span> for each <span class="ndl-node">Radio Button</span> node. Only one <span class="ndl-node">Radio Button</span> in a <span class="ndl-node">Radio Button Group</span> can be selected at once.

<##head##>

The core radio button has a very simple visual appearance and is most often used in other components as part of a design system. This control contains all logic such as accessibility etc. It can be styled in via it's properties, or you can use it only for the logic and create your own radio button component in your own design system, see the [Simple Design System](/modules/sds-v3/) for inspiration.

![](./radiobutton.gif ':class=img-size-s')

## Inputs

[filename](./margin-only.md ':include')

### General

**Enabled**
Sets the checkbox in enabled or disabled mode. A disable checkbox will not respond to user interaction.

**Value**
The value for this radio button. The value of the selected radio button in a radio button group will be passed as the **Value** output of the radio button group. All radio buttons in a group should have unique values.

[filename](./alignment.md ':include')

### Dimensions

**Width**
Specify the width of the checkbox in pixels, percentage of parent width or the unit _vw_ which is percentage of the browser window width.

**Height**
Specify the height of the checkbox in pixels, percentage of parent height or the unit _vw_ which is percentage of the browser window height.

### Layout

[filename](./position.md ':include')

### Checked Style

**Background Color**
The background color when the checkbox is "checked".

### Style

[filename](./visibility-styles.md ':include')

[filename](./bg-and-border-styles.md ':include')

### Box Shadow

[filename](./box-shadow-styles.md ':include')

### Placement

[filename](./placement-styles.md ':include')

### Other

[filename](./pointer-events-and-mounted.md ':include')

[filename](../advanced-style.md ':include')

## Outputs

### Other

[filename](./child-index-and-this-outputs.md ':include')

[filename](./bounding-box-outputs.md ':include')

[filename](./mounted-outputs.md ':include')

### General

[filename](./control-id-output.md ':include')

### States

**Checked**
A boolean output that is true when this radion button control is checked and false if not. This is useful when using this control as a base for your own component that will represent visually that it is checked.

[filename](./control-states-outputs.md ':include')

### Events

[filename](./control-events-outputs.md ':include')
