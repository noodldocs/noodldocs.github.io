# Drag

The drag node is used to make visual nodes draggable with the mouse or touch. All children of a **Drag** node automatically become draggable. See simple example below:

<div class="ndl-images">
    <img src="/nodes/visual/drag.png" class="ndl-image med"></img>  
</div>

<div class = "node-inputs">

## Inputs

### Snap To Position X

**Do**  
Send a signal here to trigger a snap to the position specified by _Value_ and with the transition duration specified by _Duration_.

**Value**  
This is the X value the the snap action will have as destination when triggered.

**Duration**  
The snap transition duration.

### Snap To Position Y

**Do**  
Send a signal here to trigger a snap to the position specified by _Value_ and with the transition duration specified by _Duration_.

**Value**  
This is the X value the the snap action will have as destination when triggered.

**Duration**  
The snap transition duration.

### Drag

**Enable**  
Enables or disables this node. If it is disabled, drag will not have any affect on child nodes.

**Axis**  
Specifies along which axes the drag will work.

- _X_ - Only horizontal drag is enabled.
- _Y_ - Only vertical drag is enabled.
- _Both_ - Both horizontal and vertical drag is enabled.

**Constrain to parent**  
If enabled the child nodes being dragged will be constrained to the borders of the parent node so they cannot be dragged outside of the parent bounds.

### Other

**Start Drag X**  
Specifies the X position that will be used as the starting point. Setting this will force the child nodes to the specified position.

**Start Drag Y**  
Specifies the Y position that will be used as the starting point. Setting this will force the child nodes to the specified position.

**Mounted**  
This property is used to completely remove the node from the DOM. If this property is set to false the node is removed from the DOM. It differs from the _Visible_ property where the node is still part of the DOM but invisible.

[filename](../advanced-style.md ':include')

## Outputs

### Other

**Child Index**  
The place this node has in relation to its parent. E.g. if a **Group** has three children, then the first child will have _Child Index_ 0, the second child will have _Child Index_ 1, and so on.

**This**  
A reference to this node. Used in custom **Javascript** nodes and more.

### Bounding Box

**Screen Position X**  
Where this node is on the screen's X-axis, in pixels.

**Screen Position Y**  
Where this node is on the screen's Y-axis, in pixels.

**Width**  
Current width of this node.

**Height**  
Current height of this node.

### Mounted

**Did Mount**  
Signal sent when this node has been mounted, i.e. has become part of the visual tree and is visible.

**Will Unmount**  
Signal sent when this node is about to be removed from the visual tree and become hidden.

### Signals

**Drag Started**  
Emitted when dragging of a child is detected.

**Drag Ended**  
Emitted when dragging stopped.

**Drag Moved**  
Emitted while a child node is being moved during the drag.

### Values

**Drag X**  
The current X position of the dragged node.

**Drag Y**  
The current Y position of the dragged node.

**Delta X**  
The horizontal distance a node has been dragged from its origin horizontal position. Measured in pixels.

**Delta Y**  
The vertical distance a node has been dragged from its origin vertical position. Measured in pixels.
