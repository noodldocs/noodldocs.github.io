# Object

Stores any amount of properties and can be used standalone or together with [Array](nodes/data/array.md) and [For Each](nodes/data/for-each.md) nodes. An object works much like a [Variable](nodes/data/variable.md) but it can store many values in one "object". 

### Store a value
To store data in an Object simple give it an *Id* (either by typing one into the properties or by connection), create a property and connect to it.

![](object-1.png ':class=img-size-l')

### Controlled store
If you simply connect to the object property as shown above the object will update as soon as the input value changes. You can also control when the object data is saved with the **Set** input.

![](object-2.png ':class=img-size-l')

### Use stored value
Once data is stored in an object you can use it anywhere in your application.

![](object-3.png ':class=img-size-l')

## INPUTS

### General

**Id**  
Set the _Id_ for this **Object**. All **Object** nodes with the same _Id_ will refer to the same data and have the same properties.

### Properties

An **Object** node can have any amount of properties. Each property will get one input and output to set/get their current value.

![](object-props.png ':class=img-size-s')

### Actions

**Set**  
Stores any properties that are connected to the **Object**. All other **Object** nodes that share the same _Id_ will be updated now.

**Clear**  
Removes all properties and values from the Object. This is done by setting all properties in the object to **undefined**.

**Fetch**  
Normally when an **Object** _Id_ is set, the property outputs are immediately updated. If you want to control how the data is updated you can connect to the _Fetch_ signal input. Then you need to explictly send a signal here for the **Object** node to fetch the data.

**New**  
Sending a signal to this input will generate a new object with a unique *Id* and any properties connected to this node will be *Set* just like the *Set* signal above. This will result in both a *Stored* and *Created* signal output.

## OUTPUTS

### General

**Id**  
The _Id_ for this **Object** node.

### Events

**Stored**  
Signal that is sent when new property values are stored in the **Object** as a result of a _Set_ action triggered.

**Created**  
Signal sent when the *New* action is performed as described above.

**Changed**  
Signal when any of the properties of this **Object** have changed.

**Fetched**  
Signal when the **Object** has fetched and updated it's outputs. (Even if they have changed or not)

### Properties

An **Object** can have any amount of properties. Each property will get one output to get the current value.

### Changed signals

An **Object** will also get changed signal outputs for each of it's properties. They will emit a signal when the property changes value when this or some other **Object** node with the same _Id_ triggers a set.
