# For Each

Used to dynamically create components based on data. More details can be found in the [guide](/guides/for-each.md).

![](for-each.png ':class=img-size-m')

## INPUTS

### Appearance

**Template Type**  
May be used to enable dynamic templates. Can be:

- _Explicit_ - The same _Component_ will be used for all items.
- _Dynamic_ - Use code to choose what _Component_ to create for each item.

**Script**  
Only visible when _Template Type_ is set to _Dynamic_. Write a script to choose what Component to create for every item.

**Component**  
Only visible when _Template Type_ is set to _Explicit_. Choose a component from your project that will be used as template to dynamically create component instances for each object in the Items array.

**Items**  
An array of objects that will ne used to dynamically create components.

**Refresh**  
A signal that will trigger a remove of all created components and recreate them.

### Input Mapping

**Script**  
Here you can put an optional script that will map the properties of the objects in the *Items* array to component inputs of the template component instances created by the *For Each* node.

```javascript
map({
	Label:'Full Name',
	State:() => object.get('Married') === 'Yes'
})
```

By default the mapping is simply directly from object properties to component inputs. But you can use the script to change that mapping, in the example above the *Full Name* property of the incoming object is mapped to the *Label* component input. You can also use the script to do conversions of types by providing a function.

## OUTPUTS

An output is created for every signal output of the _Template_ component.

**Item Id**  
This output will be updated every time a signal is sent on any of the component output signals to reflect the _Id_ of the object that triggered the signal.

### Item Signals  
This group contains component output signals from the component template of the *For Each* node. When any of the component instances triggers an output signal, these will be relayed by the *For Each* node along with the corresponding *Item Id*.

### Item Outputs
This group comtains component outputs other than signals for the component template of the *For Each* node. When a signal is triggered by one of the component instances the outputs will be replayed along with the *Item Id* of the corrensponding item. This can be used to store component specific outputs in e.g. objects and variables.
