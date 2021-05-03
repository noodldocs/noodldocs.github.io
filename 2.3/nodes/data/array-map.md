# Array Map
This node takes an input array, runs a small map script on each item, and outputs the resulting mapped array. That is an array with new objects, each created in the mapping script.

![](array-map.png ':class=img-size-l')

## Inputs

### General

**Script**  
The mapping script used to map the objects in the input array to new objects in the mapped output array. The script should be provided in the following format:


```javascript
map({
	FullName:() => object.first_name + object.last_name,
	Age:'years_old'
})
```

You can either provide a string with the name of the property that should be mapped with the syntax *to:'from'* which will simply rename a property taking the value directly from the input model.

Or you can provide a mapping function that takes the object (of the type [Noodl.Object](/javascript-api/noodl-object.md)) and the function should return the mapped value.

**Items**  
The array that should be mapped.

## Outputs

### General

**Items**  
The mapped array.

**Count**  
The number of items in the mapped array (this will be the same as the input array)

### Events

**Changed**  
A signal is emitted here when the input array has been modified which will trigger the *Array Map* node to remap the input and produce a new output *Items*.

