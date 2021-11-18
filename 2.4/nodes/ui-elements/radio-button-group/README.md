<##head##>

# Radio Button Group

This node is a non visual control used to group <span class="ndl-node">Radio Button</span> nodes. The <span class="ndl-node">Radio Button</span> must be placed in a <span class="ndl-node">Radio Button Group</span> node to function properly.

![](../radio-button/radiobutton.png ':class=img-size-l')

The output of the <span class="ndl-node">Radio Button Group</span> node is the <span class="ndl-data">Value</span> of the selected <span class="ndl-node">Radio Button</span>. Only one <span class="ndl-node">Radio Button</span> in a <span class="ndl-node">Radio Button Group</span> can be selected at the same time.

<##head##>

## Inputs

[filename](../../visual/margin-and-padding.md ':include')

[filename](../../visual/alignment.md ':include')

[filename](../../visual/size-mode-and-dimensions.md ':include')

### General

**Value**
The value of the current selected radio button. By changing this value will change which radio button is currently selected.

### Layout

**Layout**
By default children are stacked and this property specifies which direction they should be stacked.

-   _Vertical_ - Children are stacked vertically.
-   _Horizontal_ - Children are stacked horizontally.

[filename](../../visual/position.md ':include')

### Style

[filename](../../visual/visibility-styles.md ':include')

### Placement

[filename](../../visual/placement-styles.md ':include')

[filename](../../visual/dimension-constraints.md ':include')

### Other

[filename](../../visual/pointer-events-and-mounted.md ':include')

[filename](../../advanced-style.md ':include')

## Outputs

### Other

[filename](../../visual/child-index-and-this-outputs.md ':include')

[filename](../../visual/bounding-box-outputs.md ':include')

[filename](../../visual/mounted-outputs.md ':include')

### States

**Value**
The current selected radion button value will be outputted here.

### Events

**Changed**
This event is triggered when the **Value** of the radio button group is changed due to user interaction.
