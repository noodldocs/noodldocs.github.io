<##head##>

# Delete Record

This node will delete a **Record** of a given **Class** from the Noodl Cloud Services backend.

<div class="ndl-image-with-background l">

![](/nodes/data/cloud-data/delete-record/delete-record-node.png)

</div>

You will need to provide the **Id** of the record to be deleted, there are multiple ways to do this, see the **Id Source** property for details.

Then send a signal on the **Do** input to perform the action.

<##head##>

## Inputs

| Data                                | Description                                                                                                                                                    |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Class</span> | You need to select the **Class** of records that this node will act on.                                                                                        |
| <span class="ndl-data">Id</span>    | <##input:id##>Specify the **Id** of the record that you want to delete.<##input##> This input is only valid if **Id Source** is set to **Specify explicitly**. |

An Id of a record is needed to perform the action of this node:

| Data                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Id Source</span> | The **Id Soure** property specifies how this Id is retrieved, the options are:<br/><br/>`Specify explicitly`: This means you need to specify the Id of the record explicitly through e.g. a connection to the **Id** input.<br/>`From repeater`: This means that the Id for the record will be derived from a repeater. This option is only valid if the component this node is placed in is created by a repeater. Then this node will act on the repeater object that this component was created for. |


| Signal                             | Description                                                                                                 |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Do</span> | <##input:do##>When a signal is received on this input the record will be deleted on the backend.<##input##> |

## Outputs

| Data                                | Description                                                                                                                                |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| <span class="ndl-data">Id</span>    | <##output:id##>The **Id** of the record that will be / was deleted by this node. Simply reflecting the **Id** input.<##output##>           |
| <span class="ndl-data">Error</span> | <##output:error##>If something went wrong when deleting the record in the backend, this output will contain the error message.<##output##> |

| Signal                                  | Description                                                                                                                                  |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Success</span> | <##output:success##>A signal is sent on this output when the record have been successfully deleted in the backend.<##output##>               |
| <span class="ndl-signal">Failure</span> | <##output:failure##>A signal is sent on this output if something went wrong when attempting to delete the record in the backend.<##output##> |