<##head##>
# Create New Array
Creates a new Array. The outgoing property *Id* is the id of the newly created array. This can for example be connected to an [Array node](nodes/data/array/array/) or [Insert Object Into Array Node](nodes/data/array/insert-into-array/).

![](create-new-array.png ':class=ndl-image large')<##head##>

## Inputs

### General
**Items**
<##input:items##>An array containing initial items of the new array. It will be read when the *Do* signal is triggered. In other words, the new Array will be a copy of the provided Array, containing the same Objects.<##input##>
### Actions
**Do**
<##input:do##>Triggering this action creates the new Array. The *Id* of the newly created array will be set on the *Id* output. Each triggering will create a new Array, hence changing the *Id* output.<##input##>

## Outputs
### General
**Id**
<##output:id##>The Id of the newly created Array. You use this Id to refer to the Array.<##output##>

### Events
**Done**
<##output:done##>This event will be sent when the new Array has been created.<##output##>
