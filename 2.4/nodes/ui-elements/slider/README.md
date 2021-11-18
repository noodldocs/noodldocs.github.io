<##head##>

# Slider

This node places a range slider in the visual tree. It is used to select a <span class="ndl-data">number</span> between a `min` and a `max` value.

![](./slider.png ':class=img-size-l')

The <span class="ndl-node">Slider</span> node allows you to set a <span class="ndl-data">Step</span> value. This controls in what intervals the slider can be incremented or decremented.

<##head##>

![](./slider.gif ':class=img-size-m')

## Inputs

[filename](../../visual/margin-only.md ':include')

### General

**Enabled**
Sets the range control in enabled or disabled mode. A disabled control will not respond to user interaction.

**Value**
Sets the numeric value of the control.

**Min**
Sets the numeric minumum value that can be selected using this range control. Default is 0.

**Max**
Sets the numeric maximum value that can be selected using this range control. Default is 100.

**Step**
Sets the numeric step value for this range control. Values can only be selected in the specified steps. Default is 1.

[filename](../../visual/alignment.md ':include')

### Dimensions

**Width**
Specify the width of the checkbox in pixels, percentage of parent width or the unit _vw_ which is percentage of the browser window width.

**Height**
Specify the height of the checkbox in pixels, percentage of parent height or the unit _vw_ which is percentage of the browser window height.

### Layout

[filename](../../visual/position.md ':include')

### Thumb Style

**Width**
The width of the thumb or the range control, can be specified in pixels, % or parent or in _vw_ units that is percent of window width.

**Height**
The height of the thumb or the rangecontrol, can be specified in pixels, % or parent or in _vh_ units that is percent of window height.

**Radius**
The radius of the thumb or the rangecontrol, can be specified in pixels, % or parent or in _vh_ units that is percent of window height.

**Color**
The color of the thumb of the range control.

### Track Style

**Height**
The height of the track of the range control, can be specified in pixels, % or parent or in _vh_ units that is percent of window height.

**Color**
The color of the track of the range control.

### Style

[filename](../../visual/visibility-styles.md ':include')

[filename](../../visual/bg-and-border-styles.md ':include')

### Placement

[filename](../../visual/placement-styles.md ':include')

### Other

[filename](../../visual/pointer-events-and-mounted.md ':include')

[filename](../../advanced-style.md ':include')

## Outputs

### Other

[filename](../../visual/child-index-and-this-outputs.md ':include')

[filename](../../visual/bounding-box-outputs.md ':include')

[filename](../../visual/mounted-outputs.md ':include')

### General

[filename](../../visual/control-id-output.md ':include')

### States

**Value**
The current selected numeric value of the range control.

**Value Percent**
The current selected numeric value of the range control adjusted to be between 0 and 100, so the value of the range control in %.

[filename](../../visual/control-states-outputs.md ':include')

### Events

[filename](../../visual/control-events-outputs.md ':include')
