# Query Collection

This node is used to access a collection of **Models** in the cloud store. To learn more about **Models** and **Collections** check out the [guide](/guides/models-and-collections.md).

![](collection.png ':class=img-size-m')

## INPUTS

### General

**Collection Name**  
The name of the **Collection** that this node will access.

**Use Limit**  
Enables or disables limiting the number of result fetched from the cloud store.

**Limit**  
Specifies the maximum number of **Models** that will be fetched from the cloud store.

### Filter

By default the **Query Collection** will fetch all **Models**, you can however add a filter. You can filter on **Model** properties. Add which properties you want to filter on.

![](collection-filter.png ':class=img-size-m')

For each filter property you can now specify:

**Type**  
The type you want for the filter, can be _Number_, _String_ or _Boolean_.

**Op**  
The available operations of the filter depend on the type that is set.

- _Equals_ Include in filter if the property equals the provided value. Available for all types.
- _Not Equals_ Include in filter if the property does NOT equal the provided value. Available for all types.
- _Greater than_ Include in filter if the property is greater than the provided value. Only available if type is _Number_.
- _Less than_ Include in filter if the property is less than the provided value. Only available if type is _Number_.
- _Greater than or equal_ Include in filter if the property is greater than or equal to the provided value. Only available if type is _Number_.
- _Less than or equal_ Include in filter if the property is less than or equal to the provided value. Only available if type is _Number_.

**Value**  
The value used to test against in the filter operation.

![](collection-filter-2.png ':class=img-size-m')

### Sort

By default the **Query Collection** does not return the result of a fetch sorted. You can specify sorting. Like filters you add which properties you want to sort on.

For each property you can choose the sorting order.

![](collection-sort.png ':class=img-size-m')

## OUTPUTS

### General

**Name**  
The identifier of this **Collection**. This is the collection name.

**Result**  
An array of the items fetched from the cloud store.

**Count**  
The count of the retuned array from the cloud store.

### Events

**Modified**  
Event signal sent when the collection is modified locally, e.g. when a **Model** that has previously been fetched is deleted.

**Fetched**  
Event signal sent when a _Fetch_ is successful.

**Failure**  
Sent when a _Fetch_ has failed.

**Error**  
A string with a message indicating the reason for failure.
