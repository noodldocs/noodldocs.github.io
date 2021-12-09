<##head##>

# Create New Record

This node is used to create a new record of a given class. You specify the class of record to be created in the Property Panel. Sending a <span class="ndl-signal">signal</span> to <span class="ndl-signal">Do</span> will perform the action.

<div class="ndl-image-with-background l">

![](./create-new-record.png)

</div>

You can also provide values for the properties of the record either via connections or by typing the values in the property panel.

<##head##>

## Inputs

| Data                                          | Description                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Class</span>           | Choose a class for the record that you want to create.                                                                                                                                                                                                                                                                                                                                        |
| <span class="ndl-data">Property Inputs</span> | When the class of the record to be created is choosen, all properties of that class will be available as inputs. When the **Do** signal is received a new record will be created with the values of the properties either specified in the property panel or via connections. <##input:prop-\*##>The value of these inputs will become the properties of the newly created record.<##input##> |

| Signal                             | Description                                                                  |
| ---------------------------------- | ---------------------------------------------------------------------------- |
| <span class="ndl-signal">Do</span> | <##input:do##>Send a signal on this input to create a new record.<##input##> |

## Outputs

| Data                                | Description                                                                                                     |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Id</span>    | <##output:id##>The **Id** of the new record that was created if the action was successful.<##output##>          |
| <span class="ndl-data">Error</span> | <##output:error##>The specific error message in case something went wrong when creating the record.<##output##> |

| Signal                                  | Description                                                                                                                                                                |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Success</span> | <##output:success##>A signal is sent here when the new record have been created successfully.<##output##>                                                                  |
| <span class="ndl-signal">Failure</span> | <##output:failure##>A signal is sent on this output if something went wrong when creating the record.<##output##> You can find the specific error in the **Error** output. |
