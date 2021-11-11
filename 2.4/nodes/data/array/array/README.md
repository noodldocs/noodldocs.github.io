<##head##>
# Array

Arrays are ordered lists of [Object](/nodes/data/object.md)s. See the guide on arrays [here](/guides/arrays) for a more detailed introduction.

![](array.png ':class=ndl-image large')

You can create and modify the array using the [Create new Array](/nodes/data/array/create-new-array/), [Insert Object Into Array](/nodes/data/array/insert-into-array/) and [Remove Object From Array](/nodes/data/array/remove-from-array/).
<##head##>
## Inputs

### General

**Items**  
<##input:items##>This input sets the source of the array, this input is of *array* type, [Noodl.Array](/javascript-api/noodl-array.md).<##input##> You can for instance forward the content of a [Static Array](/nodes/data/array/static-array/) node using this input. The content of the source array will be copied to this array by default and any changes to the source array will also be copied automatically. You can control this by making a signal connection to *Set*, in that case the items, i.e. content of the source array, will only be copied when a signal is received on *Set*. 

**Id**  
<##input:id##>This is the *Id* of the array, it works similair to objects and variables. It specifies the array that this node will act on via it's *Id*. All **Array** nodes with the same _Id_ will refer to the same array of objects.<##input##>

### Actions

**Fetch**  
<##input:fetch##>Normally when _Id_ is set, the items and count outputs are immediately updated with the content of the array referenced by the *Id*. If you want to control how the data is updated you can connect to the _Fetch_ signal input. Then you need to explictly send a signal here for the **Array** node to fetch the data. Before an array have been fetched none of the modify and set operations or source items will have any affect.<##input##>

## Outputs

### General

**Id**  
<##output:id##>The _Id_ for this **Array**.<##output##>

**Items**  
<##output:items##>This is an output that can be connected to others that can take **Array** inputs, such as the [For Each](/nodes/data/for-each.md) node. It will hold an `Noodl.Array` type.<##output##>

**Count**  
<##output:count##>The number of items in the **Array**.<##output##>

### Events

**Changed**  
<##output:changed##>This signal is triggered when the content of the array is changed, either by an action on this node or by some other node in the graph that operates on the same array Id.<##output##>

**Fetched**  
<##output:fetched##>Triggered when a _Fetch_ action has been performed and the data is ready.<##output##>

 </div>
