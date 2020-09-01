# Query Collection

This node is used to access a collection of **Models** in the cloud store. To learn more about **Models** and **Collections** check out the [guide](/guides/models-and-collections.md).

![](collection.png ':class=img-size-l')

## INPUTS

### General

**Collection Name**  
The name of the **Collection** that this node will access.

**Use Limit**  
Enables or disables limiting the number of result fetched from the cloud store.

**Limit**  
Specifies the maximum number of **Models** that will be fetched from the cloud store.

**Skip**  
Specifies a number of *Models* that will be skipped when returning the result of the query. This is typically used together with *limit* to achieve pagination.

**Filter**  
The type of filter to choose, can be *Simple* or *JSON*. See below for more details.

### Filter

By default the **Query Collection** will fetch all **Models**, you can however add a filter. You can choose from a simple filter where you can filter on one or more **Model** properties, or a more advanced JSON based filter syntax. More on that below, first the *simple* filter type.

Add a property that you want to filter on.

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

## JSON Filters
If you choose *JSON* as filter type you will get the option to specify a filter in a JSON format. This is done using the following syntax:

```javascript
filter( { Completed:{$eq:true} } )
```

The above filter will return all models in the collection that has the *Completed* property *true*. You can select from a number of operators:

* **$lt**	Less Than
* **$lte**	Less Than Or Equal To
* **$gt**	Greater Than
* **$gte**	Greater Than Or Equal To
* **$ne**	Not Equal To
* **$in**	Contained In
* **$nin**	Not Contained in
* **$exists**	A value is set for the key

For instance, to filter on if a certain property (in this example Letter) is one of many possible values:

```javascript
filter( { Letter:{$in:['A','B','C']} } )
```

Or to filter all models that have a value set for a specific property:

```javascript
filter( { Letter:{$exists:true} } )
```

You can also combine these filters into expressions using **$and** and **$or**, for instance:

```javascript
filter( { $and: [ {ZipCode:{$exists:true}}, {Score:{$gte:10}} ] } )
```

You can also use the **$regex** operator to filter by regular expression, this is generally slow and not recommended for large sets. Learn more [here](https://docs.mongodb.com/manual/reference/operator/query/regex/)

```javascript
filter( { SomeString:{$regex:"pattern", $options:'i'} } )
```

The filter JSON is a javascript function so you can provide javascript code if you like:

```javascript
filter( { SomeDate:{$eq:(new Date()).toISOString()} } )
```

You can also specify variables instead of explicitly specifying the filter values, this will create an input port on the *Query Collection* node that can then be connected to. You specify variables using the same $ syntax, you cannot use any of the keyword and it must be a javascript compatile name. The filter below will create an input called MyStringInput.

```javascript
filter( { SomeString:{$eq:$MyStringInput} } )
```

Don't forget that you need to send a signal to *Fetch* to perform a new fetch with a new filter if any of the filter inputs have changed.

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

**First Item**  
The first model in the result or *undefined* if there are no result. This is of *object* type, [Noodl.Object](/javascript-api/noodl-object.md)

**First Item Id**  
The *Id* of the first model or *undefined*.

### Events

**Modified**  
Event signal sent when the collection is modified locally, e.g. when a **Model** that has previously been fetched is deleted.

**Fetched**  
Event signal sent when a _Fetch_ is successful.

**Failure**  
Sent when a _Fetch_ has failed.

**Error**  
A string with a message indicating the reason for failure.
