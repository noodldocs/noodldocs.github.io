# Model

This node is used to access the data of a single item in a [Collection](/nodes/data/collection.md), refered to as a Model. To learn more about Models and Collections check out the [guide](/guides/models-and-collections.md).

![](model.png ':class=img-size-m')

## INPUTS

### General

**Collection Name**  
The name of the collection this model is part of. Every model must belong to a collection, all actions such as saving etc will act on the collection.

**Id**  
The Id of this model that uniquely identifiers it. All model nodes that share the same *Id* will act on the same data.

### Actions

**Fetch**  
When a signal is sent to *Fetch* the model will get the most recent data from the database.

**Set**  
When a signal is sent to *Set* the values on the property inputs of this node will be set on the object referenced by the *Id*. This is the same as for [Object](/nodes/data/object.md).

**Save**
When triggered will save the data on the property inputs to the database. This will also issue a *Set* so other Models and Objects with the same *Id* will be updated. If it completed successfully a **Deleted** signal will be outputed, otherwise a **Failure** signal will be send and the error can be found on the **Error** output.

**Delete**  
When triggered will delete the model with the given *Id* from the database. If it completed successfully a **Deleted** signal will be outputed, otherwise a **Failure** signal will be send and the error can be found on the **Error** output.

**New**  
A signal on this input will create a new Model with a fresh new unique *Id*. The data on the property inputs will be set on this new model. When completed the **Created** signal will be sent.

**Insert**  
A signal here will first do a *New* to create a new object followed by a *Save*.

### Properties
The node will have any properties from the Models in the Collection that it can find in the database as well as any properties that the are specified directly on the Model, just like for [Objects](/nodes/data/object.md).

![](object-props.png ':class=img-size-s')

### Scripts

**Initialize**  
Here you can provide a small Javascript snippet that is run when a new model is created via the *New* or *Insert* signals.

```javascript
initialize({
    // A property is initialized with a static value
	Text:'Some init value',

    // A property is initialized by running the function and using the returned value
    // as the starting point
	AnotherProperty:function() { return 'Some other value' },

    // Example of providing a created date
    CreateDate:(new Date()).toISOString()
})
```

## OUTPUTS

### General

**Id**  
The *Id* of this model. This will be updated when a *New* or *Insert* signal is received.

### Events

**Saved**  
Signal sent when a Model is successfully saved to the database.

**Stored**  
Signal sent when a Model is successfully stored to memory via *Set*.

**Created**  
Signal sent when a Model is succesfully created via *New* or *Insert*.

**Fetched**  
Signal sent when a Model is succesfully fetched via *Fetch*.

**Changed**  
Sent when any property of the Model is changed, same as for [Object](/nodes/data/object.md).

**Deleted**  
Sent when a Model with this *Id* is successfully deleted from the database.

**Failure**  
Sent when an operation *Save*, *New*, *Insert*, *Delete* fails. The failure reason will be outputed on *Error*.

**Error**  
The reason for a failure.

### Properties

A Model can have any number of properties. Each property will get one output to get the current value.

### Changed signals

A Model will also get changed signal outputs for each of it's properties. They will emit a signal when the property changes value when this or some other Model node with the same *Id* triggers a set.