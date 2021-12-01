<##head##>
# Clear Array
This node is used to remove all *Objects* from an *Array*. The Array is referred to through their *Id*. Use the *Do* action to remove all *Objects* in the Array.

![](clear-array.png ':class=ndl-image large')
<##head##>

## Inputs

### General
**Array Id**

<##input:collectionId##>The *Id* of the Array that will be cleared.<##input##>

### Actions
**Do**

<##input:do##>This actions removes all the Objects from the Array with the *Id* set on the input *Array Id*.<##input##>

## Outputs

### Events
**Done**

<##output:done##>This event is sent when the removal is done, and the Array is empty.<##output##>
