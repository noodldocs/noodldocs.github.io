# Components

**`Noodl.createComponent(path)`**    
Creates and returns a component

**`Noodl.deleteComponent(component)`**    
Deletes an instance of a component created with `Noodl.createComponent` and removes it from the UI

**`component.setInputValue(componentInputName, value)`**    
Set inputs on components

**`referenceToAGroup.addChild(component, index)`**    
Add a newly created component to a group. `index` is optional and defaults to the last index of the group. Available on both _Groups_ and _Scroll Views_

**`referenceToAGroup.removeChild(component)`**    
Removes a component from a group. Available on both _Groups_ and _Scroll Views_

Example code:

```
define({
    inputs: {
        group: "reference"
    },
    setup: function(inputs, outputs) {
        for(var i=0; i<50; i++) {
            var comp = Noodl.createComponent("My Component");
            comp.setInputValue("Label", "Item "+i);
            inputs.group.addChild(comp);
        }
    }
});
```
