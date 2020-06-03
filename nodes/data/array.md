# Array

An array of objects. Mainly used together with a [For Each](/nodes/data/for-each.md) Node.

![](array.png ':class=img-size-m')

## INPUTS

**Items**  
Sets the items in the array. Useful when you set the data with a [Static Array](/nodes/data/static-array.md) node.

**Item Id**  
The item id to add or remove. Unsed in conjunction with the **Add** or **Remove** inputs.

**Add**  
Signal to add the object with the id specified with the **Item Id** input to this collection.

**Remove**  
Signal to remove the object with the id specified with the **Item Id** input from this collection.

**Clear**  
Signal to remove all models in the collection

**Id**  
Set the Id for this array. All array nodes with the same Id will refer to the same array of objects.

## OUTPUTS

**Id**  
The Id for this array.

**Items**  
This is an output that can be connected to others that can take Array inputs. Most common the [For Each](/nodes/data/for-each.md) node. It will hold an object of `Noodl.Array` type.

**Count**  
The number of items in the array.

**Modified**  
A signal triggered when any of the actions above is completed.

 </div>
