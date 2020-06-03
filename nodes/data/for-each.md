# For Each

Used to dynamically create components based on data. More details can be found in the [guide](/guides/for-each.md).

![](for-each.png ':class=img-size-m')


## INPUTS

### Template Type
May be used to enable dynamic templates. Can be:

* **Explicit** - The same Component will be used for all items. 
* **Dynamic** - Use code to choose what Component to create for each item.

### Script
Only visible when **Template Type** is set to _Dynamic_. Write a script to choose what Component to create for every item.

### Component
Only visible when **Template Type** is set to _Explicit_. Choose a component from your project that will be used as template to dynamically create component instances for each object in the Items array.


### Items
An array of objects that will ne used to dynamically create components.

### Refresh
A signal that will trigger a remove of all created components and recreate them.


## OUTPUTS

An output will created for every signal output of the *Template* component.

### Item Id
This output will be updated every time a signal is sent on any of the component output signals to reflect the *Id* of the object that triggered the signal.











