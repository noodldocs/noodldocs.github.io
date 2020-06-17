# Collection

The node is used to access a Collection of Models in the persistent database. To learn more about Models and Collections check out the [guide](/guides/models-and-collections.md).

![](collection.png ':class=img-size-m')

## INPUTS

### General

**Collection Name**  
The name of the Collection that this node will access.

**Use Limit**  
Enables or disables limiting the number of result fetched from the database.

**Limit**  
Specift the maximum number of Models that will be fetched from the database.

### Filter

By default the Collection will fetch all Models, you can however add a filter. You can filter on Model properties. Add which properties you want to filter on.

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
By default the Collection does not return the result of a fetch sorted. You can specify sorting. Like filters you simply add which properties you want to sort on.

For each property you can choose the sorting order.

![](collection-sort.png ':class=img-size-m')

## OUTPUTS

### General

**Name**  
The identifier of this collection. This is the collection name.

**Items**  
An array of the items fetched from the database.

**Count**  
The count of the retuned array from the database.

### Events

**Modified**  
Event signal sent when the collection is modified locally, e.g. when a Model is added or removed.

**Fetched**  
Event signal sent when a *Fetch* is successful.

**Failure**  
Sent when a *Fetch* has failed.

**Error**  
The reason for failure.


