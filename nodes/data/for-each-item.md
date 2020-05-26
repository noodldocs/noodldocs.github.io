# For Each Item

Adds a set of features for components that are created by a [For Each](/nodes/data/for-each.md) node.

![](for-each-item.png ':class=img-size-m')

## Inputs
|Input|Type|Description|
|-----|----|-----------|
|Remove Completed|Signal|Set this to true, or send a signal, after **Try Remove** has been sent. This will remove the component from its parent. See **Try Remove** below to learn more.|

 ## Outputs
|Output|Type|Description|
|------|----|-----------|
|Added|Signal| When a new model is added to a collection, any connected [For Each](/nodes/data/for-each.md) node will create a new component. This component will get the **Added** signal. Useful for playing animations.|
|Try Remove|Signal|When a model is removed from a collection, any connected [For Each](/nodes/data/for-each.md) node will remove the component it created for that model. If this signal is connected the **Remove Completed** input should be used to signal when animations are complete.|
|Item Id|String|The Model Id for this component.|
