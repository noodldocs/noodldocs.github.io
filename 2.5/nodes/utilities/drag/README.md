<##head##>
# Drag

The drag node is used to make visual nodes draggable with the mouse or touch. All children of a **Drag** node automatically become draggable.

<div class="ndl-image-with-background l">
    <img src="/nodes/visual/drag.png" class="ndl-image"></img>
</div>

<##head##>
## Inputs

### Snap To Position X

| Signal                             | Description                                                                                                                         |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Do</span> | Send a signal here to trigger a snap to the position specified by _Value_ and with the transition duration specified by _Duration_. |

| Data                                   | Description                                                                      |
| -------------------------------------- | -------------------------------------------------------------------------------- |
| <span class="ndl-data">Value</span>    | This is the X value the the snap action will have as destination when triggered. |
| <span class="ndl-data">Duration</span> | The snap transition duration.                                                    |

### Snap To Position Y

| Signal                             | Description                                                                                                                         |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Do</span> | Send a signal here to trigger a snap to the position specified by _Value_ and with the transition duration specified by _Duration_. |

| Data                                   | Description                                                                      |
| -------------------------------------- | -------------------------------------------------------------------------------- |
| <span class="ndl-data">Value</span>    | This is the Y value the the snap action will have as destination when triggered. |
| <span class="ndl-data">Duration</span> | The snap transition duration.                                                    |

### Drag

| Data                                              | Description                                                                                                                                                                                |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span class="ndl-data">Enable</span>              | Enables or disables this node. If it is disabled, drag will not have any affect on child nodes.                                                                                            |
| <span class="ndl-data">Axis</span>                | Specifies along which axes the drag will wor<br>a<br>`X`: Only horizontal drag is enabled.<br>`Y`: Only vertical drag is enabled.<br>`Both`: Both horizontal and vertical drag is enabled. |
| <span class="ndl-data">Constrain to parent</span> | If enabled the child nodes being dragged will be constrained to the borders of the parent node so they cannot be dragged outside of the parent bounds.                                     |

### Other

| Data                                       | Description                                                                                                                                                                                                                        |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Start Drag X</span> | Specifies the X position that will be used as the starting point. Setting this will force the child nodes to the specified position.                                                                                               |
| <span class="ndl-data">Start Drag Y</span> | Specifies the Y position that will be used as the starting point. Setting this will force the child nodes to the specified position.                                                                                               |
| <span class="ndl-data">Mounted</span>      | This property is used to completely remove the node from the DOM. If this property is set to false the node is removed from the DOM. It differs from the _Visible_ property where the node is still part of the DOM but invisible. |

### Visual

This node supports the following [Visual Input Properties](nodes/ui-elements/visual-input-properties/):

-   [Advanced Style](nodes/ui-elements/visual-input-properties/#advanced-style)

## Outputs

### Other

| Data                                      | Description                                                                                                                                                                                       |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Child Index</span> | The place this node has in relation to its parent. E.g. if a **Group** has three children, then the first child will have _Child Index_ 0, the second child will have _Child Index_ 1, and so on. |
| <span class="ndl-data">This</span>        | A reference to this node. Used in custom **Javascript** nodes and more.                                                                                                                           |

### Bounding Box

| Data                                            | Description                                           |
| ----------------------------------------------- | ----------------------------------------------------- |
| <span class="ndl-data">Screen Position X</span> | Where this node is on the screen's X-axis, in pixels. |
| <span class="ndl-data">Screen Position Y</span> | Where this node is on the screen's Y-axis, in pixels. |
| <span class="ndl-data">Width</span>             | Current width of this node.                           |
| <span class="ndl-data">Height</span>            | Current height of this node.                          |

### Mounted

| Signal                                       | Description                                                                                          |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Did Mount</span>    | Signal sent when this node has been mounted, i.e. has become part of the visual tree and is visible. |
| <span class="ndl-signal">Will Unmount</span> | Signal sent when this node is about to be removed from the visual tree and become hidden.            |

### Signals

| Signal                                       | Description                                                |
| -------------------------------------------- | ---------------------------------------------------------- |
| <span class="ndl-signal">Drag Started</span> | Emitted when dragging of a child is detected.              |
| <span class="ndl-signal">Drag Ended</span>   | Emitted when dragging stopped.                             |
| <span class="ndl-signal">Drag Moved</span>   | Emitted while a child node is being moved during the drag. |

### Values

| Data                                  | Description                                                                                          |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Drag X</span>  | The current X position of the dragged node.                                                          |
| <span class="ndl-data">Drag Y</span>  | The current Y position of the dragged node.                                                          |
| <span class="ndl-data">Delta X</span> | The horizontal distance a node has been dragged from its last horizontal position. Measured in `px`. |
| <span class="ndl-data">Delta Y</span> | The vertical distance a node has been dragged from its last vertical position. Measured in `px`.     |