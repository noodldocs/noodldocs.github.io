<##head##>
# Create New Object

The node can be used to create a fresh new [Object](nodes/data/object/object/).

![](./create-new-object.png ':class=img-size-l')

You can provide any number of properties with values for your new Object. When the **Done** signal is sent the Object is created and you can perform other actions using the Object.

<##head##>

## INPUTS

[filename](../properties.md ':include')

**Do**  
<##input:do##>Send a signal in this input to create the new Object with the provided properties.<##input##>


## OUTPUTS

**Done**  
<##output:done##>A signal is sent on this output when the Object have been created.<##output##>

**Id**  
<##output:id##>The **Id** of the newly created object, this output is valid only when the **Done** signal has been sent.<##output##>