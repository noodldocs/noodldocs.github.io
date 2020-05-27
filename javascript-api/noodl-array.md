# Noodl.Array

**`Noodl.Array.get(id)`**  
Returns the array with the specified Id. A newly created empty array will be
returned if the Id is not previously used.

**`Noodl.Array.exists(id)`**  
Returns `true` if a array with the specified Id exists,
i.e. has been created with `Noodl.Array.get`.

**`array.on(event,listener)`**  
**`array.off(event,listener)`**  
Adds or removes an event listener from the array.
Supported events:
* `add` - a object has been added
* `remove` - a object is removed
* `change` - triggered on both add and remove.

Example usage:

```javascript
myArray.on('change',function() {
    // The items of myArray has changed, e.g. a object has been added or removed
    // will NOT be triggered if the properties of the objects have changed
});

myArray.on('add',function(args) {
    // The object args.item have been added to this array
});

myArray.on('remove',function(args) {
    // The object args.item have been removed from this array
    // The object was removed from index args.index
});
```

**`array.set(items)`**  
This will replace all items of the array with the supplied items.
The items argument can be either an array with objects, in that case objects will automatically be created
for the objects with the `Noodl.Object.create` function. The array can also include a mix of
objects and objects. The items argument can be another array.

The id of the objects (or the id attribute of an object) will be used to determine if the object is
part of the items of this arrays. Objects that are already contained in the array
will be updated, objects that are not will be added (firing the appropriate events)
and objects that are no longer in the array will be removed.

**`array.contains(item)`**  
Returns `true` if the object `item` exists in the array.

**`array.add(item)`**  
Adds a object `item` to the end of the array.

**`array.remove(item)`**  
Removes a object `item` from the array.

**`array.size()`**  
Returns the size of the array, the number of objects in the array.

**`array.get(index)`**  
Returns the object `item` at the specified index, or `undefined` if out of bounds.

**`array.each(callback)`**  
Iterates over all objects of the array and calls the callback function for each object
with `object` and `index` as arguments.
