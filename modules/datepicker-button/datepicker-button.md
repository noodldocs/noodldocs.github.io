# Date Picker Button

This node places a simple core date picker button in the visual tree. The button will open a date picker popup when clicked and the selected date is available as an output **Value** and when it's changed the **Change** signal will be sent.

<div class="ndl-images">
    <img src="/modules/datepicker-button/datepicker-button.png" class="ndl-image large"></img>  
</div>

The core date picker button has a very simple visual appearance and is most often used in other components as part of a design system, where it is styled or simply used as the control logic. This control contains all logic such as accessibility etc. It can be styled in via it's properties, or you can use it only for the logic and create your own button component in your own design system, see the [Simple Design System](/modules/sds-v3/) for inspiration.

<div class="ndl-images">
    <img src="/modules/datepicker-button/datepicker-button-1.png" class="ndl-image small"></img>  
</div>

When clicked the button will open a date picker popup that can be used to selected a date. On desktop it will open the popup shown below, and on mobile it will open the platform specific popup that is tailor made for mobile use and for that specific platform.

<div class="ndl-images">
    <img src="/modules/datepicker-button/datepicker-button-2.png" class="ndl-image med"></img>  
</div>

## INPUTS

[filename](../../nodes/visual/margin-only.md ':include')

### General

**Enabled**  
Specifies if the control is **Enabled** (true) or **Disabled** (false). A disabled control will not respond to any user interaction.

[filename](../../nodes/visual/alignment.md ':include')

### Style

**Show Icon**  
Toggles if the calendar icon on the button should be shown or not.

[filename](../../nodes/visual/visibility-styles.md ':include')

[filename](../../nodes/visual/bg-and-border-styles.md ':include')


### Dimensions

**Width**  
Specify the width of the checkbox in pixels, percentage of parent width or the unit _vw_ which is percentage of the browser window width.

**Height**  
Specify the height of the checkbox in pixels, percentage of parent height or the unit _vw_ which is percentage of the browser window height.

### Layout

[filename](../../nodes/visual/position.md ':include')

## Placement  

[filename](../../nodes/visual/placement-styles.md ':include')


[filename](../../nodes/visual/size-mode-and-dimensions.md ':include')

### Other

**Mounted**  

[filename](../../nodes/advanced-style.md ':include')



## OUTPUTS

### Other  
[filename](../../nodes/visual/child-index-and-this-outputs.md ':include')

[filename](../../nodes/visual/bounding-box-outputs.md ':include')

[filename](../../nodes/visual/mounted-outputs.md ':include')

### General  
[filename](../../nodes/visual/control-id-output.md ':include')

### States   

**Value**  
The currently selected date if any.

[filename](../../nodes/visual/control-states-outputs.md ':include')

### Events

**Click**  
A signal is sent on this output when the button is clicked.

[filename](../../nodes/visual/control-events-outputs.md ':include')

