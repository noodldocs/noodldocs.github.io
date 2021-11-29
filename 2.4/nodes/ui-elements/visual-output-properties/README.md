# Visual Output Properties

## Scrolling

| Data                                      | Description                                  |
| ----------------------------------------- | -------------------------------------------- |
| <span class="ndl-data">Child Index</span> | The current position of scrolling in pixels. |

| Signal                                       | Description                           |
| -------------------------------------------- | ------------------------------------- |
| <span class="ndl-signal">Scroll Start</span> | Signal emitted when scrolling starts. |
| <span class="ndl-signal">Scroll End</span>   | Signal emitted when scrolling ends.   |

## Bounding Box

| Data                                            | Description                                                                                 |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Screen Position X</span> | <##output:screenPositionX##>Where this node is on the screen's X-axis, in `px`.<##output##> |
| <span class="ndl-data">Screen Position Y</span> | <##output:screenPositionY##>Where this node is on the screen's Y-axis, in `px`.<##output##> |
| <span class="ndl-data">Width</span>             | <##output:width##>Current width of this node.<##output##>                                   |
| <span class="ndl-data">Height</span>            | <##output:height##>Current height of this node.<##output##>                                 |

## Mounted

| Signal                                       | Description                                                                                                                           |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Did Mount</span>    | <##output:didMount##>Signal sent when this node has been mounted, i.e. has become part of the visual tree and is visible.<##output##> |
| <span class="ndl-signal">Will Unmount</span> | <##output:willUnmount##>Signal sent when this node is about to be removed from the visual tree and become hidden.<##output##>         |

## Pointer Events

| Signal                                        | Description                                                           |
| --------------------------------------------- | --------------------------------------------------------------------- |
| <span class="ndl-signal">Click</span>         | Triggered when the node is clicked or tapped.                         |
| <span class="ndl-signal">Pointer Down</span>  | Triggered when the mouse is pressed or finger is down on the node.    |
| <span class="ndl-signal">Pointer Up</span>    | Triggered when the mouse is released or finger is lifted on the node. |
| <span class="ndl-signal">Pointer Enter</span> | Triggered when the mouse enters the node.                             |

## Hover Events

| Signal                                      | Description                             |
| ------------------------------------------- | --------------------------------------- |
| <span class="ndl-signal">Hover Start</span> | Emitted when the mouse enters the node. |
| <span class="ndl-signal">Hover End</span>   | Emitted when the mouse leaves the node. |

## Focus

| Signal                                     | Description                                                                                                                     |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Focused</span>    | Emitted when the node, or one if its descendants, is clicked, or if the _Focused_ input is triggered.                           |
| <span class="ndl-signal">Focus Lost</span> | Emitted when this node had focus and another node gained focus. Focus is only lost if the new focused node is not a descendant. |

## Other

| Data                                      | Description                                                                                                                                                                                                                              |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Child Index</span> | <##output:childIndex##>The place this node has in relation to its parent. E.g. if a **Group** has three children, then the first child will have _Child Index_ `0`, the second child will have _Child Index_ `1`, and so on.<##output##> |
| <span class="ndl-data">Thid</span>        | <##output:this##>A reference to this node. Used in custom **JavaScript** nodes and more.<##output##>                                                                                                                                     |
