# Radio Button Group

The radio button group is a non visual control used to group [Radio Button](/nodes/visual/controls/radiobutton.md) controls. Just one button in a radio button group can be selected at once.

![](./radiobutton.png ':class=img-size-l')

Each radion button must have a string **Value** specified, the value for the selected radio button is passed as the **Value** output of the radio button group. All radio buttons in a group should have unique values.

## INPUTS

[filename](./margin-and-padding.md ':include')

[filename](./alignment.md ':include')

[filename](./size-mode-and-dimensions.md ':include')

### General

**Value**  
The value of the current selected radio button. By changing this value will change which radio button is currently selected.

### Layout

**Layout**  
By default children are stacked and this property specifies which direction they should be stacked.

- _Vertical_ - Children are stacked vertically.
- _Horizontal_ - Children are stacked horizontally.

[filename](./position.md ':include')

### Style

[filename](./visibility-styles.md ':include')

## Placement  

[filename](./placement-styles.md ':include')

[filename](./dimension-constraints.md ':include')

### Other

[filename](./pointer-events-and-mounted.md ':include')

[filename](../advanced-style.md ':include')

## OUTPUTS

### Other  
[filename](./child-index-and-this-outputs.md ':include')

[filename](./bounding-box-outputs.md ':include')

[filename](./mounted-outputs.md ':include')

### States

**Value**  
The current selected radion button value will be outputted here.

### Events

**Changed**  
This event is triggered when the **Value** of the radio button group is changed due to user interaction.




