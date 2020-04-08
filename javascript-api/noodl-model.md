# Noodl.Model

Allows access to [Model][0] features from Javascript.

**`Noodl.Model.get(id)`**  
Returns the model with the specified id. This function will return a new empty model if the id is
not previously used. If you want to check if a model exists use the `Noodl.Model.exists` function.

**`Noodl.Model.create(data)`**  
This function will create a new model and return it.
The properties of the model will be that of the supplied data. A special case is
the id attribute that will become the id of the model and not part of the model properties.
E.g. the code below will create a model with two properties and the id set to 'A'.

```javascript
Noodl.Model.create({
  id:'A',
  myProp1:10,
  myProp2:'Hello',
  myProp3:Noodl.Model.create({anotherProp:15})
})
```

If no id is provided the newly created model will get a unique id assigned.
As illustrated in the example above model properties can contain other models.

**`Noodl.Model.exists(id)`**  
Returns true if a model with the specified Id has been created with a call to Noodl.Model.get or Noodl.Model.create.

**`model.on(event,listener)`**  
**`model.on(event,listener)`**  
**`model.off(event,listener)`**  
Add and remove an event listener from the model.
Supported events:
* `change` - any property of the model is changed
* `add` - the model is added to a collection
* `remove` - the model is removed from a collection.

Example usage:

```javascript
myModel.on('change',function(args) {
  // property with name args.name was changed
  // new value in args.value
  // old value in args.old
});

myModel.on('add',function(args) {
  // model was added to the collection args.collection
});

myModel.on('remove',function(args) {
  // model was removed from the collection args.collection
});
```

**`model.getId()`**  
Returns the Id of the model.

**`model.set(name,value,options)`**  
Sets a property of the model. The name and value of the property should be provided to the function.

`myModel.set('myProp1',44)`  

Optionally, dot notation can be used to set a sub property.
If a property of the model is another model, then you can set a property of the model
e.g. `myProp3.anotherProp`. To enable this you must supply the options `{resolve:true}`.

`myModel.set('myProp3.anotherProp',50,{resolve:true})`

**`model.setAll(data)`**  
This function performs a set on all properties of the specified object.
This is equal to calling set for all properties of the data object.

**`model.get(name,options)`**  
Returns the value of the property with the specified name.
As in the set function the dot notation can be used if the model has another model as a property,
if the options {resolve:true} is supplied.

`myModel.get('myProp3.anotherProp',{resolve:true})`

[0]: ./model.html
