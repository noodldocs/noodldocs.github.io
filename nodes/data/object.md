# Object

Stores any amount of properties and can be used standalone or together with [Array](nodes/data/array.md) and [For Each](nodes/data/for-each.md) nodes.

![](object.png ':class=img-size-m')

<div class = "node-inputs">

## Inputs
### General

**Id**  
Set the Id for this Object. All object nodes with the same Id will refer to the same data and have the same properties. 

### Properties
A model can have any amount of properties. Each property will get one input and output to set/get the current value.

![](object-props.png ':class=img-size-s')

### Actions
**Set**  
Stores any properties that are connected to the object. All other Object nodes that share the same Id will be updated now.

**Clear**  
Removes all properties and values from the Object.

</div>

<div class = "node-outputs">

## Outputs
### General
**Id**  
The Id for this Object.

### Events
**Stored**  
Signal that is sent when new property values are stored in the Object as a result of a Set action triggered.

**Changed**
Signal when any of the properties of this object have changed.

### Properties
An object can have any amount of properties. Each property will get one output to get the current value.

### Changed signals
An object will also get changed signal outputs for each of it's properties. They will emit a signal when the property changes value when this or some other object node with the same Id triggers a set.


</div>
