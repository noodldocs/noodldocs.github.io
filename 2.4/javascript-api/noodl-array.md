# Noodl.Array

**`Noodl.Array.get(id)`**  
Returns the array with the specified Id. A newly created empty array will be
returned if the Id is not previously used. If no id is provided, a new array with a unique id will be generated.

**`Noodl.Array.exists(id)`**  
Returns `true` if an array with the specified Id exists,
i.e. has been created with `Noodl.Array.get`.

**`array.on(event,listener)`**  
**`array.off(event,listener)`**  
Adds or removes an event listener from the array.
Supported events:

- `add` - an object has been added
- `remove` - an object is removed
- `change` - triggered on both add and remove.

Example usage:

```javascript
myArray.on('change', () => {
  // The items of myArray has changed, e.g. an Noodl.Object has been added or removed.
  // will NOT be triggered if the properties of the objects have changed
});

myArray.on('add', args => {
  // The object args.item have been added to this array
});

myArray.on('remove', args => {
  // The object args.item have been removed from this array
  // The object was removed from index args.index
});
```

**`array.set(items)`**  
This will replace all items of the array with the supplied items.

The `items` argument can be an array with regular JavaScript objects, `Noodl.Object` items, or a mix. Regular JavaScript objects will be passed through `Noodl.Object.create` since `Noodl.Array` can only contain objects with the type `Noodl.Object`.

The id of the objects (the `id` attribute of an object) will be used to determine if the object is part of the items of this array. Objects that are already contained in the array
will be updated, objects that aren't will be added (firing the appropriate events)
and objects that are no longer in the array will be removed.

**`array.contains(item)`**  
Returns `true` if the `Noodl.Object` `item` exists in the array.

**`array.add(item)`**  
Adds an `Noodl.Object` `item` to the end of the array.

**`array.addAtIndex(item, index)`**  
Adds an `Noodl.Object` `item` to the array at the specified `index`.

**`array.remove(item)`**  
Removes an `Noodl.Object` `item` from the array.

**`array.removeAtIndex(index)`**  
Removes the `Noodl.Object` at the specified `index`.

**`array.size()`**  
Returns the size of the array, the number of objects in the array.

**`array.get(index)`**  
Returns the `Noodl.Object` `item` at the specified index, or `undefined` if out of bounds.

**`array.each(callback)`**  
Iterates over all objects in the array and calls the callback function for each object
with `object` and `index` as arguments.
