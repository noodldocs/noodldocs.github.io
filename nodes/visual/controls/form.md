# Form

The form is a non visual component that is used to group other controls. It has a function in accessibility to assist tools such as screen readers. It also has a **Submit** output signal that is triggered if a button of type **Submit** that is a child of the form is clicked. This is also important for accessibility reasons. When building forms it's a good idea to use this pattern and connect the **Submit** signal to any data operation when submitting the form.

## INPUTS

[filename](../margin-and-padding.md ':include')

[filename](../alignment.md ':include')

[filename](../size-mode-and-dimensions.md ':include')

### Layout

**Layout**  
By default children are stacked and this property specifies which direction they should be stacked.

- _Vertical_ - Children are stacked vertically.
- _Horizontal_ - Children are stacked horizontally.

[filename](../position.md ':include')

### Style

[filename](../visibility-styles.md ':include')

## Placement  

[filename](../placement-styles.md ':include')

[filename](./dimension-constraints.md ':include')

### Other

[filename](../pointer-events-and-mounted.md ':include')

[filename](../../advanced-style.md ':include')

## OUTPUTS

### Other  
[filename](../child-index-and-this-outputs.md ':include')

[filename](../bounding-box-outputs.md ':include')

[filename](../mounted-outputs.md ':include')

### Events

**Submit**  
Emitted when a button of type **Submit** that is a child of the form is clicked.




