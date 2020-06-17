# Array Filter

This node will filter an input array and output a filtered version.

## INPUTS

### General

**Use Limit**  
Enables or disables limiting the number of objects in the output array.

**Limit**  
Specift the maximum number of objects in the filtered array.

**Items**  
The array that should be filtered.

### Actions

**Filter**  
By default the node will filter as soon as there is a new array on the *Items* input or if that array changes. But if there is a connection to the *Filter* input it will wait until a signal is sent here to perform the filtering.

### Filter

By default the Array Filter node will simple pass through all objects of the input array. You can filter on Object properties. Add which properties you want to filter on.

![](collection-filter.png ':class=img-size-m')

For each filter property you can now specify:

**Type**  
The type you want for the filter, can be *Number*, *String* or *Boolean*.

**Op**  
The operation of the filter for available operations depend on type.

* *Equals* Include in filter if the property equals the provided value.
* *Not Equals* Include in filter if the property does NOT equal the provided value.
* *Greater than* Include in filter if the property is greater than the provided value.
* *Less than* Include in filter if the property is less than the provided value.
* *Greater than or equal* Include in filter if the property is greater than or equal to the provided value.
* *Less than or equal* Include in filter if the property is less than or equal to the provided value.

**Value**  
The value user in the filter operation.

![](collection-filter-2.png ':class=img-size-m')

### Sort
By default the Array Filter node does not sort the output, it will be in the same order as the input. You can specify sorting. Like filters you simply add which properties you want to sort on.

For each property you can choose the sorting order.

![](collection-sort.png ':class=img-size-m')

## OUPUTS

### General

**Items**  
The filtered and sorted array.

**Count**  
The number of objects in the filtered array.

### Events

**Filtered**  
Signal emitted when the array has been filtered, either due to a **Filter** signal sent or if the array has changed.