# Navigation Stack

A navigation stack can be placed in the visual hierarchy and will function just as the *Default* screen stack. Take a look at the [Navigation guide](/guides/navigation.md) to learn more about navigation.

<div class="ndl-images">
    <img src="/guides/navigation/navigation-stack.png" class="ndl-image med"></img>   
</div>


## INPUTS

### General

**Name**  
The name of this stack. This is the identifier used by *Navigate* and *Navigate Back* nodes.

**Start Page**  
The component that will be the component shown when the stack is created and no navigation has been performed.

### Style

**Background Color**  
The color behind the bottom component if it has transparent regions. The backgroud may also be shown briefly during transitions. Default is transparent.

### Other

**Mounted**  
This property is used to completely remove the node from the DOM. If this property is set to false the node is removed from the DOM. It differs from the _Visible_ property where the node is still part of the DOM but invisible.

### Advanced

**CSS Style**  
Here you can add custom CSS styles that will be added to this node. The styles are specified in camel case, so _background-color_ in CSS will be specified as _backgroundColor_.

## OUTPUTS

## Outputs

### Other

**Child Index**  
The place this node has in relation to its parent. E.g. if a _Group_ has three children, then the first child will have _Child Index_ 0, the second child will have _Child Index_ 1, and so on.

**This**  
A reference to this node. Used in custom _Javascript_ nodes and more.

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