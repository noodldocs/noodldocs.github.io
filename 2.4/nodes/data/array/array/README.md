<##head##>

# Array

Arrays are ordered lists of [Object](/nodes/data/object/object/)s. See the guide on arrays [here](/guides/arrays) for a more detailed introduction.

![](array.png ':class=ndl-image large')

You can create and modify the array using the [Create new Array](/nodes/data/array/create-new-array/), [Insert Object Into Array](/nodes/data/array/insert-into-array/) and [Remove Object From Array](/nodes/data/array/remove-from-array/).
<##head##>

## Inputs

### General

| Data                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Items</span> | <##input:items##>This input sets the source of the array, this input is of _array_ type, [Noodl.Array](/javascript-api/noodl-array.md).<##input##> You can for instance forward the content of a [Static Array](/nodes/data/array/static-array/) node using this input. The content of the source array will be copied to this array by default and any changes to the source array will also be copied automatically. You can control this by making a signal connection to _Set_, in that case the items, i.e. content of the source array, will only be copied when a signal is received on _Set_. |
| <span class="ndl-data">Id</span>    | <##input:id##>This is the _Id_ of the array, it works similair to objects and variables. It specifies the array that this node will act on via it's _Id_. All **Array** nodes with the same _Id_ will refer to the same array of objects.<##input##>                                                                                                                                                                                                                                                                                                                                                  |

| Signal                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span class="ndl-signal">Fetch</span> | <##input:fetch##>Normally when _Id_ is set, the items and count outputs are immediately updated with the content of the array referenced by the _Id_. If you want to control how the data is updated you can connect to the _Fetch_ signal input. Then you need to explictly send a signal here for the **Array** node to fetch the data. Before an array have been fetched none of the modify and set operations or source items will have any affect.<##input##> |

## Outputs

| Data                                | Description                                                                                                                                                                                                    |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Id</span>    | <##output:id##>The _Id_ for this **Array**.<##output##>                                                                                                                                                        |
| <span class="ndl-data">Items</span> | <##output:items##>This is an output that can be connected to others that can take **Array** inputs, such as the [Repeater](/nodes/ui-elements/repeater/) node. It will hold an `Noodl.Array` type.<##output##> |
| <span class="ndl-data">Count</span> | <##output:count##>The number of items in the **Array**.<##output##>                                                                                                                                            |

| Signal                                  | Description                                                                                                                                                                                                |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Changed</span> | <##output:changed##>This signal is triggered when the content of the array is changed, either by an action on this node or by some other node in the graph that operates on the same array Id.<##output##> |
| <span class="ndl-signal">Fetched</span> | <##output:fetched##>Triggered when a _Fetch_ action has been performed and the data is ready.<##output##>                                                                                                  |
