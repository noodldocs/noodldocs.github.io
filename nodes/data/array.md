# Array

An array of objects. See the guide on arrays [here](/guides/arrays) for more information.

![](array.png ':class=ndl-image large')

## INPUTS

### General

**Items**  
This input sets the source of the array, this input is of *array* type, [Noodl.Array](/javascript-api/noodl-array.md). You can for instance forward the content of a [Static Array](/nodes/data/static-array.md) node using this input. The content of the source array will be copied to this array by default and any changes to the source array will also be copied automatically. You can control this by making a signal connection to *Set*, in that case the items, i.e. content of the source array, will only be copied when a signal is received on *Set*. 

**Id**  
This is the *Id* of the array, it works similair to objects and variables. It specifies the array that this node will act on via it's *Id*. All **Array** nodes with the same _Id_ will refer to the same array of objects.

### Modify

**Item Id**  
The item id to add or remove. Used in conjunction with the _Add_ or _Remove_ inputs.

**Add**  
Signal to add the **Object** with the id specified with the _Item Id_ input to this **Array**.

**Remove**  
Signal to remove the **Object** with the id specified with the _Item Id_ input from this **Array**.

**Clear**  
Signal to remove all **Objects** in the **Array**

### Actions

**Fetch**  
Normally when _Id_ is set, the items and count outputs are immediately updated with the content of the array referenced by the *Id*. If you want to control how the data is updated you can connect to the _Fetch_ signal input. Then you need to explictly send a signal here for the **Array** node to fetch the data. Before an array have been fetched none of the modify and set operations or source items will have any affect.

**New**  
Sending a signal to this input will generate a new empty array with a unique *Id* and the *Created* output signal will be emitted. If there is a connection to the *Items* input the content of that array will be copied.

## OUTPUTS

### General

**Id**  
The _Id_ for this **Array**.

**Items**  
This is an output that can be connected to others that can take **Array** inputs, such as the [For Each](/nodes/data/for-each.md) node. It will hold an `Noodl.Array` type.

**Count**  
The number of items in the **Array**.

### Events

**Modified**  
A signal triggered when any of the actions above is completed.

**Fetched**  
Triggered when a _Fetch_ action has been performed and the data is ready.

**Created**  
A signal is emitted here when a new array has been created and is ready as a result of the _New_ action.

**Stored**  
A signal emitted after the content of the array have been updated as a result of a *Set* input signal.

 </div>
