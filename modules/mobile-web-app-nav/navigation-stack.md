# Navigation Stack

!> Note, this node is part of the _Mobile Web App Navigation_ module. You need to install that module to be able to use this node.

A navigation stack can be placed in the visual hierarchy and will function just as the _Default_ screen stack. Take a look at the [Navigation guide](/modules/mobile-web-app-nav/nav-guide.md) to learn more about navigation.

<div class="ndl-images">
    <img src="/modules/mobile-web-app-nav/guide/navigation-stack.png" class="ndl-image med"></img>   
</div>

## INPUTS

### General

**Name**  
The name of this stack. This is the identifier used by [Navigate](/modules/mobile-web-app-nav/navigate.md) and [Navigate Back](/modules/mobile-web-app-nav/navigate-back.md) nodes.

**Start Page**  
The component that is shown when the stack is created and no navigation has been performed.

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
