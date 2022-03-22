<##head##>

# Query Records

This node is used to fetch a selection of records from the Noodl Cloud Services backend. You can provide a query to define the selection of records you want to retrieve.

<div class="ndl-image-with-background l">

![](/nodes/data/cloud-data/query-records/query-records-node.png)

</div>

You can specify the query using filter, sorting and limit in the Property Panel.

<div class="ndl-image-with-background l">

![](/nodes/data/cloud-data/query-records/query-records-filter-1.png)

</div>

<##head##>

## Filters

By default the **Query Records** will fetch all **Records**, you can however add a filter. You can choose from a simple filter where you can filter on one or more **Record** properties, or a more advanced JSON based filter syntax, that also can include Javascript logic.

### Simple Filters

The **Simple** filters are created through a UI where you select properties and how to filter them in the filter panel. 

<div class="ndl-image-with-background l">

![](/nodes/data/cloud-data/query-records/query-records-filter-2.png)

</div>

Note that you can select if you want the filter to use a static value or a value that comes from an input.

<div class="ndl-image-with-background l">

![](/nodes/data/cloud-data/query-records/query-records-filter-3.png)

</div>

### Sorting with Simple Filters

By default the **Query Records** does not return the result of a fetch sorted. You can specify sorting. Like filters you add which properties you want to sort on.

For each property you can choose the sorting order.

<div class="ndl-image-with-background l">

![](/nodes/data/cloud-data/query-records/query-records-sorting-1.png)

</div>

## Advanced filters
If you choose *Advanced* as filter type you will get the option to specify a filter script. This is regular javascript code but you need to end the script by calling the *where* function with the filter definition provided. This is done using the following syntax:

```javascript
where({ 
    Completed:{equalTo:true} 
})
```

The above filter will return all **Records** in the collection that has the *Completed* property *true*. You can select from a number of operators:

* **lessThan**	Less Than
* **lessThanOrEqualTo**	Less Than Or Equal To
* **greaterThan**	Greater Than
* **greaterThanOrEqualTo**	Greater Than Or Equal To
* **equaltTo**   Not Equal To
* **notEqualtTo**	Not Equal To
* **containedIn**	Contained In
* **notContainedIn**	Not Contained in
* **exists**	A value is set for the key
* **matchesRegex**    Check if a value matches a regex pattern
* **text**    Text search in one or several columns using a text index
* **idEqualTo**    Match the id of the item to a specific id
* **idContainedIn**    Check if the id of the item matches an id in an array of ids
* **pointsTo**    Check if the id of the item matches an id in an array of ids
* **relatedTo**    Checks if the item is related to another item, through a *relation*

For instance, to filter on if a certain property (in this example Letter) is one of many possible values:

```javascript
where({ 
    Letter:{containedIn:['A','B','C']} 
})
```

Or to filter all **Records** that have a value set for a specific property:

```javascript
where({ 
    Letter:{exists:true}
})
```

You can also combine these filters into expressions using **and** and **or**, for instance:

```javascript
where({ 
    and: [ 
        {ZipCode:{exists:true}}, 
        {Score:{greaterThan:10}} 
    ]
})
```

You can also use the **matchesRegex** operator to filter by regular expression, this is generally slow and not recommended for large sets. Learn more [here](https://docs.mongodb.com/manual/reference/operator/query/regex/)

```javascript
where({ 
    SomeString:{matchesRegex:"pattern", options:'i'} 
})
```

As mentioned above the filter script is a javascript function so you can provide javascript code if you like:

```javascript
where({ 
    SomeDate:{equalTo:(new Date()).toISOString()} 
})
```

You can also specify variables instead of explicitly specifying the filter values, this will create an input port on the *Query Collection* node that can then be connected to. You specify variables simply by using the **Inputs** object. The filter below will create an input called MyStringInput.

```javascript
where({ 
    SomeString:{equalTo:Inputs.MyStringInput} 
})
```

You can also do text search in strings. This will create an index in the database and text search only works on one property so you have to choose wisely. Also text search matches whole words and must be the first filter in an *and* or *or* sequence.

```javascript
where({ 
    SomeString:{text:{search:Inputs.MyStringInput}}
})
```

You can also toggle case sensitivity for text searches.

```javascript
where({ 
    SomeString:{text:{search:{
        term:Inputs.MyStringInput,
        caseSensitive:true
    }}}
})
```

If you need to match the *Id* of **Redcords** in the collection you need to use the special operation:

```javascript
where({ 
    idEqualTo:Inputs.TheRecordId
})
```

In the above filter you can connect a *Record Id* output to the *TheRecordId* parameter to fetch just one specific object. You can also request a set of object based on their Id.

```javascript
where({ 
    idContainedIn:[Inputs.FirstObjectId, Inputs.SecondObjectId]
})
```

Some properties in your *Records* can be of *Pointer* type, that means that they reference another **Records** with a specific *Id*. If you want to filter out **Records** that point to a specific **Records**, use this syntax. Let's say you have a collection of *Post* **Records**, each have a set of *Comment* **Records** where each *Comment* points back to it's owning *Post* via the *Owner* property. The filter below will find all *Comments* for a *Post* given that you provide the post id.

```javascript
where({ 
    Owner:{pointsTo: Inputs.MyPostId }
})
```

You can also provide an array if you want to find *Comments* that are related to a set of *Post* **Records**.

```javascript
where({ 
    Owner:{pointsTo: [Inputs.MyFirstPostId, Inputs.MySecondPost] }
})
```

Don't forget that you need to send a signal to *Fetch* to perform a new fetch with a new filter if any of the filter inputs have changed.

**Records** also support many-to-many relationships via *Relations*. <!-- , check out the guide [here](/guides/relations.md) for more information. --> You can filter our all **Records** in the collection you are querying that are related to a specific **Record** via a *Relation* with a given key using:

```javascript
where({ 
    relatedTo:{id: Inputs.MyRecordWithARelation, key: "the-relation-key"}
})
```

### Sorting in advanced filters
To specify the sort order when using advanced filter you run a function called *sort* in the filter script.

```javascript
where({ 
    // You where filter here
})

sort(['createdAt'])
```

The sort function takes an array with strings specifying the names of the properties you want to sort by. You can prefix the property name with "-" to specify that you want to sort in descending order instead of the default ascending order.

```javascript
sort(['-Age','createdAt'])
```



## Inputs

| Data                                           | Description                                                                                                                                                                                                                                                                       |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Class</span>            | Select the **Class** for the types of records this node should query. When the **Class** is selected you can create filters and sorting based on the properties of the **Class**.                                                                                                 |
| <span class="ndl-data">Filter</span>           | This specifies the type of filter, you can choose from:<br/><br/>`Visual`: Specify your filter using the visual filter editor.<br/>`JavaScript`: Specify your filter using JavaScript (this is more flexible and you can create more dynamic queyries but it's also more complex) |
| <span class="ndl-data">Use Limit</span>        | <##input:use limit##>Enable or disable the use of limit, i.e. that you can specify how many records are returned as a maximum and if a number of record should be skipped.<##input##>                                                                                             |
| <span class="ndl-data">Limit</span>            | <##input:limit##>The maximum number of records to be returned by the backend.<##input##>                                                                                                                                                                                          |
| <span class="ndl-data">Skip</span>             | <##input:skip##>This property allows you to skip a number of records from being returned by the backend. Using **Skip** and **Limit** allows you to do paging, e.g. return records from 10-20.<##input##>                                                                         |
| <span class="ndl-data">Query Parameters</span> | <##input:qp-\*##>The input for specifying the value of a query parameter.<##input##> Each paramteter used in your query will get an input where you can provide a value through a connection.                                                                                     |

| Signal                             | Description                                                                                                   |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Do</span> | <##input:do##>Send a signal here to perform the query and fetch matching records from the backend.<##input##> |

## Outputs

| Data                                          | Description                                                                                                                |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Items</span>           | <##output:items##>The result of the query as an array of **Records**.<##output##>                                          |
| <span class="ndl-data">Count</span>           | <##output:count##>The number of records in the result.<##output##>                                                         |
| <span class="ndl-data">First Record Id</span> | <##output:first record id##>The Id of the first Record in the result array.<##output##>                                    |
| <span class="ndl-data">Error</span>           | <##output:error##>This output contains the error message incase something when wrong when executing the query.<##output##> |

| Signal                                  | Description                                                                                                                                            |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span class="ndl-signal">Success</span> | <##output:success##>A signal is sent here if the query was successful and the result is ready.<##output##>                                             |
| <span class="ndl-signal">Failure</span> | <##output:failure##>A signal is sent here if something went wrong with the query. You can find the error message via the **Error** output.<##output##> |
