### Other

**Pointer Events Mode**  
This specifies how this node responds to pointer events.

- _Inherit_ - The node will respond to pointer events in the same way as its parent.
- _Explicit_ - The node will respond to pointer events as specified by _Pointer Events Enabled_

**Pointer Events Enabled**  
This property is only available if _Pointer Events Mode_ is set to _Explicit_. It will specify if this node responds to pointer events or not. If set to false this node will completely ignore pointer events.

**Block Pointer Events**  
This will cause this node to block all pointer events, e.g. any node that is behind this node will not receive pointer events.

**Mounted**  
This property is used to completely remove the node from the DOM. If this property is set to false the node is removed from the DOM. It differs from the _Visible_ property where the node is still part of the DOM but invisible.