<##head##>

# Create New Object

The node can be used to create a fresh new [Object](nodes/data/object/object.md).

<div class="ndl-image-with-background l">

![](/nodes/data/object/create-new-object/create-new-object.png)

</div>

You can provide any number of properties with values for your new Object. When the **Done** signal is sent the Object is created and you can perform other actions using the Object.

<##head##>

## Inputs

| Data                                            | Description                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Properties To Set</span> | You can specify which properties to set by adding them to this list. Object don't have a schema with predefined properties like Records so you can choose any property name you want.                                                                                                                                      |
| <span class="ndl-data">Property Types</span>    | Each property that you want to set will give you the option of setting the type of the value that you want to set to that property.                                                                                                                                                                                        |
| <span class="ndl-data">Property Values</span>   | <##input:prop-\*##>The value to set on the Object property when the action is performed. (Signal is receieved on the **Do** input)<##input##> Each property that you want to set (that was added to the **Properties to set** section above) will get it's own input both in the property panel and as a connection input. |


| Signal                             | Description                                                                                                 |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Do</span> | <##input:do##>Send a signal in this input to create the new Object with the provided properties.<##input##> |

## Outputs

| Data                             | Description                                                                                                                          |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| <span class="ndl-data">Id</span> | <##output:id##>The **Id** of the newly created object, this output is valid only when the **Done** signal has been sent.<##output##> |

| Signal                               | Description                                                                                     |
| ------------------------------------ | ----------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Done</span> | <##output:done##>A signal is sent on this output when the Object have been created.<##output##> |
