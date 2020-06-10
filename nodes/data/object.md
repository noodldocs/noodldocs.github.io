# Object

Stores any amount of properties and can be used standalone or together with [Array](nodes/data/array.md) and [For Each](nodes/data/for-each.md) nodes.

![](object.png ':class=img-size-m')

## INPUTS

### General

**Id**  
Set the Id for this Object. All object nodes with the same Id will refer to the same data and have the same properties.

### Properties

An Object can have any amount of properties. Each property will get one input and output to set/get their current value.

![](object-props.png ':class=img-size-s')

### Actions

**Set**  
Stores any properties that are connected to the object. All other Object nodes that share the same Id will be updated now.

**Clear**  
Removes all properties and values from the Object.

**Fetch**  
Normally when an object Id is set, the property outputs are immediately updated. If you want to control how the data is updated you can connect to the **Fetch** signal input. Then you need to explictly send a signal here for the object to fetch the data.

## OUTPUTS

### General

**Id**  
The Id for this Object.

### Events

**Stored**  
Signal that is sent when new property values are stored in the Object as a result of a Set action triggered.

**Changed**  
Signal when any of the properties of this Object have changed.

**Fetched**  
Signal when the Object has fetched and updated it's outputs. (Even if they have changed or not)

### Properties

An Object can have any amount of properties. Each property will get one output to get the current value.

### Changed signals

An Object will also get changed signal outputs for each of it's properties. They will emit a signal when the property changes value when this or some other Object node with the same Id triggers a set.
