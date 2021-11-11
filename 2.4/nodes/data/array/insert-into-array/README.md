<##head##>
# Insert Object Into Array
This node is used to insert an *Object* into an *Array*. Both the Array and the Object are referred to through their *Id*. The insert happens when the *Do* action is triggered.

![](insert-object-into-array.png ':class=ndl-image large')
<##head##>

## Inputs

### General
**Array Id**

<##input:collectionId##>The *Id* of the Array to insert the Object into.<##input##>

### Modify
**Object Id**

<##input:modifyId##>The *Id* of the Object to insert into the Array.<##input##>

### Actions
**Do**

<##input:do##>This actions inserts the Object with the *Id* set on the input *Object Id* into the Array with the *Id* set on the input *Array Id*.<##input##>

## Outputs

### Events
**Done**

<##output:done##>This event is sent when the insertion is ready.<##output##>
