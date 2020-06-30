# Array

An array of objects. Mainly used together with a [For Each](/nodes/data/for-each.md) Node.

![](array.png ':class=img-size-m')

## INPUTS

**Items**  
Sets the items in the **Array**. Useful when you set the data with a [Static Array](/nodes/data/static-array.md) node.

**Item Id**  
The item id to add or remove. Used in conjunction with the _Add_ or _Remove_ inputs.

**Add**  
Signal to add the **Object** with the id specified with the _Item Id_ input to this **Array**.

**Remove**  
Signal to remove the **Object** with the id specified with the _Item Id_ input from this **Array**.

**Clear**  
Signal to remove all **Objects** in the **Array**

**Id**  
Set the _Id_ for this array. All **Array** nodes with the same _Id_ will refer to the same array of objects.

## OUTPUTS

**Id**  
The _Id_ for this **Array**.

**Items**  
This is an output that can be connected to others that can take **Array** inputs. Most common the [For Each](/nodes/data/for-each.md) node. It will hold an object of `Noodl.Array` type.

**Count**  
The number of items in the **Array**.

**Modified**  
A signal triggered when any of the actions above is completed.

 </div>
