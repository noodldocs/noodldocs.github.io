# Range

The range control is used to select a number between a **Min** and **Max** value using a slide style interaction.

<div class="ndl-images">
    <img src="/nodes/visual/controls/range.png" class="ndl-image large"></img>  
</div>

The range control have **Min**, **Max** and **Step** inputs that control the numeric range and individual steps that can be selected. The current value of the range is outputted on the **Value** output, and the **Changed** signal is send when the value has changed due to user interaction. Use these inputs and outputs to hook the control up to data, e.g. a variable.

The core range has a very simple visual appearance and is most often used in other components as part of a design system. This control contains all logic such as accessibility etc. It can be styled in via it's properties, or you can use it only for the logic and create your own range component in your own design system, see the [Simple Design System](/modules/sds-v3/) for inspiration.

<div class="ndl-images">
    <img src="/nodes/visual/controls/range.gif" class="ndl-image med"></img>  
</div>

## INPUTS

[filename](../margin-only.md ':include')

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

[filename](../alignment.md ':include')

### Dimensions

**Width**  
Specify the width of the checkbox in pixels, percentage of parent width or the unit _vw_ which is percentage of the browser window width.

**Height**  
Specify the height of the checkbox in pixels, percentage of parent height or the unit _vw_ which is percentage of the browser window height.

### Layout

[filename](../position.md ':include')

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

[filename](../visibility-styles.md ':include')

[filename](../bg-and-border-styles.md ':include')

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

**Value**  
The current selected numeric value of the range control.

**Value Percent**  
The current selected numeric value of the range control adjusted to be between 0 and 100, so the value of the range control in %.

[filename](./control-states-outputs.md ':include')

### Events

[filename](./control-events-outputs.md ':include')


