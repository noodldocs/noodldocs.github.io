# Array

An array of objects. See the guide on arrays [here](/guides/arrays) for more information.

![](array.png ':class=img-size-l')

## INPUTS

### General

**Items**  
This input sets the array that this node will act upon via reference, this input is of *array* type, [Noodl.Array](/javascript-api/noodl-array.md). You can for instance forward the content of a [Static Array](/nodes/data/static-array.md) node using this input.

**Id**  
This is the *Id* of the array, it works similair to objects and variables. It specifies the array that this node will act on via it's *Id*.

### Modify

**Item Id**  
The item id to add or remove. Used in conjunction with the _Add_ or _Remove_ inputs.

**Item**  
The item to add or remove, passed to the node via reference. This is of *object* type. Used in conjunction with the _Add_ or _Remove_ inputs.

**Add**  
Signal to add the **Object** with the id specified with the _Item Id_ input, or _Item_ input, to this **Array**.

**Remove**  
Signal to remove the **Object** with the id specified with the _Item Id_ input, or _Item_ input, from this **Array**.

**Clear**  
Signal to remove all **Objects** in the **Array**

**Id**  
Set the _Id_ for this array. All **Array** nodes with the same _Id_ will refer to the same array of objects.

### Actions

**Fetch**  
Normally when an **Array** _Id_ is set, the items and count outputs are immediately updated. If you want to control how the data is updated you can connect to the _Fetch_ signal input. Then you need to explictly send a signal here for the **Array** node to fetch the data.

**New**  
Sending a signal to this input will generate a new empty array with a unique *Id* and the *Created* output signal will be emitted.

## OUTPUTS

### General

**Id**  
The _Id_ for this **Array**.

**Items**  
This is an output that can be connected to others that can take **Array** inputs. Most common the [For Each](/nodes/data/for-each.md) node. It will hold an object of `Noodl.Array` type.

**Count**  
The number of items in the **Array**.

### Events

**Modified**  
A signal triggered when any of the actions above is completed.

**Fetched**  
Triggered when a *Fetch* action has been performed and the data is ready.

**Created**  
A signal is emitted here when a new array has been created and is ready as a result of the *New* action.

 </div>
