# For Each

Used to dynamically create components based on data. More details can be found in the [guide](/guides/for-each.md).

![](for-each.png ':class=img-size-m')

## INPUTS

### Appearance

**Template Type**  
May be used to enable dynamic templates. Can be:

- _Explicit_ - The same _Component_ will be used for all items.
- _Dynamic_ - Use code to choose what _Component_ to create for each item. In this case you will have to set the _Script_ input.

**Script**  
Visible when _Template Type_ is set to _Dynamic_ or after chosing a _Component_ for a _Explicit_ template type . Write a script to map input or choose what Component to create for every item, (see below).

**Component**  
Only visible when _Template Type_ is set to _Explicit_. Choose a component from your project that will be used as template to dynamically create component instances for each object in the Items array.

**Items**  
An array of objects that will ne used to dynamically create components.

**Refresh**  
A signal that will trigger a remove of all created components and recreate them.

### Script

**Script**  
Here you can put an script that will do one of two things. Either the script
a) Maps the properties of the objects in the *Items* array to component inputs of the template component instances created by the *For Each* node. This is only available if _template type_ is set to _Explicit. (see _Mapping Inputs_ below).
or
b) Chooses which template component to use for each item in the item array provided to the _For Each_ node. This is only available (and mandatory) if the _Template type_ is set to Dynamic. (see _Dynamic Template Types_ below).

***Mapping Inputs***

```javascript
map({
	Label:'Full Name',
	State:() => object.get('Married') === 'Yes'
})
```

By default the mapping is simply directly from object properties to component inputs. But you can use the script to change that mapping, in the example above the *Full Name* property of the incoming object is mapped to the *Label* component input. You can also use the script to do conversions of types by providing a function.
This could for example be useful when having a generic list item, that's used with various types of data arrays with different data models and properties.

***Dynamic Template Types***
By setting _Template type_ to _Dynamic_ you can use a script to determine which component that should be used for each item in the object array. This could for example be useful if different items should have different visual representation and functionality tied to them.
You have to provide a script that determines which template to be used. The script will be called once for each object in the item array provided to the _For Each_ node. The script has has one input variable _item_ which is the current item. This can be used to get properties from the object. The script should set the variable _component_ to the path to the component to use as a template for the item. Note, this is a string containing the path, beginning with a "/", to the component in the Noodl project.

```javascript
let basePath = "/#My Sheet/ListItems";
if (item.type === "header") {
	component = basePath + "/HeaderItem";
}
else {
	component = basePath + "/StandardItem"
}
```

In the example above the script looks at the property "type" of each object, and either choses to component "#My Sheet/ListItems/HeaderItem" or "#My Sheet/ListItems/StandardItem" depending on the value.

## OUTPUTS

An output is created for every signal output of the _Template_ component.

**Item Id**  
This output will be updated every time a signal is sent on any of the component output signals to reflect the _Id_ of the object that triggered the signal.

### Item Signals  
This group contains component output signals from the component template of the *For Each* node. When any of the component instances triggers an output signal, these will be relayed by the *For Each* node along with the corresponding *Item Id*.

### Item Outputs
This group comtains component outputs other than signals for the component template of the *For Each* node. When a signal is triggered by one of the component instances the outputs will be replayed along with the *Item Id* of the corrensponding item. This can be used to store component specific outputs in e.g. objects and variables.
