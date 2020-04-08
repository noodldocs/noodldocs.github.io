# Noodl.Collection

**`Noodl.Collection.get(id)`**  
Returns the collection with the specified Id. A newly created empty collection will be
returned if the Id is not previously used.

**`Noodl.Collection.exists(id)`**  
Returns `true` if a collection with the specified Id exists,
i.e. has been created with `Noodl.Collection.get`.

**`collection.on(event,listener)`**  
**`collection.off(event,listener)`**  
Adds or removes an event listener from the collection.
Supported events:
* `add` - a model has been added
* `remove` - a model is removed
* `change` - triggered on both add and remove.

Example usage:

```javascript
myCollection.on('change',function() {
    // The items of myCollection has changed, e.g. a model has been added or removed
    // will NOT be triggered if the properties of the models have changed
});

myCollection.on('add',function(args) {
    // The model args.item have been added to this collection
});

myCollection.on('remove',function(args) {
    // The model args.item have been removed from this collection
    // The model was removed from index args.index
});
```

**`collection.set(items)`**  
This will replace all items of the collection with the supplied items.
The items argument can be either an array with objects, in that case models will automatically be created
for the objects with the `Noodl.Model.create` function. The array can also include a mix of
objects and models. The items argument can be another collection.

The id of the models (or the id attribute of an object) will be used to determine if the model is
part of the items of this collections. Models that are already contained in the collection
will be updated, models that are not will be added (firing the appropriate events)
and models that are no longer in the collection will be removed.

**`collection.contains(item)`**  
Returns `true` if the model `item` exists in the collection.

**`collection.add(item)`**  
Adds a model `item` to the end of the collection.

**`collection.remove(item)`**  
Removes a model `item` from the collection.

**`collection.size()`**  
Returns the size of the collection, the number of models in the collection.

**`collection.get(index)`**  
Returns the model `item` at the specified index, or `undefined` if out of bounds.

**`collection.each(callback)`**  
Iterates over all models of the collection and calls the callback function for each model
with `model` and `index` as arguments.
