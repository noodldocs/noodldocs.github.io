# For Each Item

Adds a set of features for components that are created by a [For Each][0] node.

![](for-each-item.png)

<div class = "node-inputs">

## Inputs
### Events
**Remove Completed**  
Set this to true, or send a signal, after **Try Remove** has been sent. This will remove the component from its parent.
See **Try Remove** below to learn more.

</div>

<div class = "node-outputs">

 ## Outputs
 ### Events
 **Added**  
 When a new model is added to a collection, any connected [For Each][0] node will create a new component. This component will get the
 **Added** signal. Useful for playing animations.

 **Try Remove**  
 When a model is removed from a collection, any connected [For Each][0] node will remove the component it created for that model.
 If this signal is connected the **Remove Completed** input should be used to signal when animations are complete.

 **Item Id**  
 The Model Id for this component.

[0]: ./for-each

</div>
