<##head##>
# Remove Object From Array
This node is used to remove an *Object* from an *Array*. Both the Array and the Object are referred to through their *Id*. The removal happens when the *Do* action is triggered.
If the *Object* to be removed is not in the array, nothing will happen.

![](remove-object-from-array.png ':class=ndl-image large')
<##head##>

## Inputs

### General
**Array Id**

<##input:collectionId##>The *Id* of the Array from which the Object will be removed.<##input##>

### Modify
**Object Id**

<##input:modifyId##>The *Id* of the Object to remove from the Array.<##input##>

### Actions
**Do**

<##input:do##>This actions removes the Object with the *Id* set on the input *Object Id* from the Array with the *Id* set on the input *Array Id*.<##input##>

## Outputs

### Events
**Done**

<##output:done##>This event is sent when the removal is done.<##output##>
