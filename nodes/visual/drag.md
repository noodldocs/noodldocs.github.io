# Drag
The drag not is used to make visual nodes draggable with the mouse or touch. All children of a *Drag* node automatically become draggable. See simple example below:
![](drag.png)

<div class = "node-inputs">

## Inputs
### Drag
**Enable**
Enables or disables the drag node. If it is disabled the drag will not have any affect on child nodes.

**Axis**
Specifies along with axis the drag will work.

- *X* - Only horizontal drag is enabled.
- *Y* - Only vertical drag is enabled.
- *Both* - Both horizontal and vertical drag is enabled.

**Constrain to parent**
If enabled the child nodes being dragged will be constrained to the borders of the parent node. So they cannot be dragged outside of the parent bounds.

### Other
**Start Drag X**
Specifies the X position that will be used as the starting point. Setting this will force the child nodes to the specified position.

**Start Drag Y**
Specifies the Y position that will be used as the starting point. Setting this will force the child nodes to the specified position.

**Mounted**
Mounts or unmounts the node.

### Snap To Position X
**Do**
Send a signal here to trigger a snap to the position specified by *Value* and with the transtion duration specified by *Duration*.

**Value**
This is the X value the the snap action will have as destination when triggered.

**Duration**
The snap transition duration.


### Snap To Position Y
**Do**
Send a signal here to trigger a snap to the position specified by *Value* and with the transtion duration specified by *Duration*.

**Value**
This is the X value the the snap action will have as destination when triggered.

**Duration**
The snap transition duration.

### Advanced

**CSS Style**
Here you can add custom CSS styles that will be added to this element. The styles are specified in camel case, so _background-color_ in CSS will be specified as _backgroundColor_. 



