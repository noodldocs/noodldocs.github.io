# Model

This node is used to access the data of a single item in the result from a [Query Collection](/nodes/cloud-services/collection.md), refered to as a Model. To learn more about Models and Collections check out the [guide](/guides/models-and-collections.md).

### Creating new models
To insert a new model into the cloud storage you need to send a signal to the **Insert** action. This will create a new model with the current values on the input properties.

![](model.png ':class=img-size-m')

### Updating a model
To update an existing model that have been either fetched via a [Query Collection](/nodes/cloud-services/collection.md) or by providing the **Id** and signaling **Fetch** to the model you will use the **Save** signal. The current values of all properties will be pushed to the cloud storage.

![](model-1.png ':class=img-size-m')

### Deleting a model
You can delete a model by sending a signal to the **Delete** action.

![](model-2.png ':class=img-size-m')

## INPUTS

### General

**Collection Name**  
The name of the collection this model is part of. Every model must belong to a collection, all actions such as saving etc will act on the collection.

**Id**  
The Id of this model that uniquely identifiers it. All model nodes that share the same _Id_ will act on the same data.

### Actions

**Fetch**  
When a signal is sent to _Fetch_ the model will get the most recent data from the cloud store.

**Set**  
When a signal is sent to _Set_ the values on the property inputs of this node will be set on the object referenced by the _Id_. This is the same as for [Object](/nodes/data/object.md).

**Save**  
When triggered will save the data on the property inputs to the cloud store. This will also issue a _Set_ so other Models and Objects with the same _Id_ will be updated. If it completed successfully a _Saved_ signal will be outputed, otherwise a _Failure_ signal will be send and the error can be found on the _Error_ output.

**Delete**  
When triggered will delete the model with the given _Id_ from the cloud store. If it completed successfully a _Deleted_ signal will be outputed, otherwise a _Failure_ signal will be send and the error can be found on the _Error_ output.

**Insert**  
A signal on this input will create a new Model with a fresh new unique _Id_. The data on the property inputs will be set on this new model as well as the result of the initialize script. When completed the _Created_ signal will be sent. The model will also be inserted into the collection in the cloud store and when completed the _Saved_ signal output will be emitted.

### Properties

The node will have any properties from the Models in the Collection that it can find in the cloud store schema as well as any properties that the are specified directly on the Model, just like for [Objects](/nodes/data/object.md).

![](../data/object-props.png ':class=img-size-s')

### Scripts

**Initialize**  
Here you can provide a small Javascript snippet that is run when a new model is created via the _Insert_ signal.

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
The _Id_ of this model. This will be updated when an _Insert_ signal is received or when the _Id_ input is set.

### Events

**Saved**  
Signal sent when a Model is successfully saved to the cloud store.

**Stored**  
Signal sent when a Model is successfully stored to memory via _Set_.

**Created**  
Signal sent when a Model is succesfully created via _Insert_.

**Fetched**  
Signal sent when a Model is succesfully fetched via _Fetch_.

**Changed**  
Sent when any property of the Model is changed, same as for [Object](/nodes/data/object.md).

**Deleted**  
Sent when a Model with this _Id_ is successfully deleted from the cloud store.

**Failure**  
Sent when an operation _Save_, _Insert_, _Delete_ fails. The failure reason will be outputed on _Error_.

**Error**  
The reason for a failure, as a message string.

### Properties

A Model can have any number of properties. Each property will get one output to get the current value.

### Changed signals

A Model will also get changed signal outputs for each of it's properties. They will emit a signal when the property changes value when this or some other Model node with the same _Id_ triggers a set.
