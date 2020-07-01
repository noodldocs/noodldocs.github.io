# Model

This node is used to access the data of a single item in a [Collection](/nodes/data/collection.md), refered to as a Model. To learn more about Models and Collections check out the [guide](/guides/models-and-collections.md).

![](model.png ':class=img-size-m')

## INPUTS

### General

**Collection Name**  
The name of the collection this model is part of. Every model must belong to a collection, all actions such as saving etc will act on the collection.

**Id**  
The Id of this model that uniquely identifiers it. All model nodes that share the same _Id_ will act on the same data.

### Actions

**Fetch**  
When a signal is sent to _Fetch_ the model will get the most recent data from the database.

**Set**  
When a signal is sent to _Set_ the values on the property inputs of this node will be set on the object referenced by the _Id_. This is the same as for [Object](/nodes/data/object.md).

**Save**  
When triggered will save the data on the property inputs to the database. This will also issue a _Set_ so other Models and Objects with the same _Id_ will be updated. If it completed successfully a _Deleted_ signal will be outputed, otherwise a _Failure_ signal will be send and the error can be found on the _Error_ output.

**Delete**  
When triggered will delete the model with the given _Id_ from the database. If it completed successfully a _Deleted_ signal will be outputed, otherwise a _Failure_ signal will be send and the error can be found on the _Error_ output.

**New**  
A signal on this input will create a new Model with a fresh new unique _Id_. The data on the property inputs will be set on this new model. When completed the _Created_ signal will be sent.

**Insert**  
A signal here will first do a _New_ to create a new object followed by a _Save_.

### Properties

The node will have any properties from the Models in the Collection that it can find in the database as well as any properties that the are specified directly on the Model, just like for [Objects](/nodes/data/object.md).

![](object-props.png ':class=img-size-s')

### Scripts

**Initialize**  
Here you can provide a small Javascript snippet that is run when a new model is created via the _New_ or _Insert_ signals.

```javascript
initialize({
  // A property is initialized with a static value
  Text: 'Some init value',

  // A property is initialized by running the function and using the returned value
  // as the starting point
  AnotherProperty: function () {
    return 'Some other value';
  },

  // Example of providing a created date
  CreateDate: new Date().toISOString(),
});
```

## OUTPUTS

### General

**Id**  
The _Id_ of this model. This will be updated when a _New_ or _Insert_ signal is received.

### Events

**Saved**  
Signal sent when a Model is successfully saved to the database.

**Stored**  
Signal sent when a Model is successfully stored to memory via _Set_.

**Created**  
Signal sent when a Model is succesfully created via _New_ or _Insert_.

**Fetched**  
Signal sent when a Model is succesfully fetched via _Fetch_.

**Changed**  
Sent when any property of the Model is changed, same as for [Object](/nodes/data/object.md).

**Deleted**  
Sent when a Model with this _Id_ is successfully deleted from the database.

**Failure**  
Sent when an operation _Save_, _New_, _Insert_, _Delete_ fails. The failure reason will be outputed on _Error_.

**Error**  
The reason for a failure.

### Properties

A Model can have any number of properties. Each property will get one output to get the current value.

### Changed signals

A Model will also get changed signal outputs for each of it's properties. They will emit a signal when the property changes value when this or some other Model node with the same _Id_ triggers a set.
