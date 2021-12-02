<##head##>

# Delete Record

This node will delete a **Record** of a given **Class** from the Noodl Cloud Services backend.

![](./delete-record-node.png ':class=img-size-l')

You will need to provide the **Id** of the record to be deleted, there are multiple ways to do this, see the **Id Source** property for details.

Then send a signal on the **Do** input to perform the action.

<##head##>

## Inputs

| Data                                | Description                                                                                                                                                    |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Class</span> | You need to select the **Class** of records that this node will act on.                                                                                        |
| <span class="ndl-data">Id</span>    | <##input:id##>Specify the **Id** of the record that you want to delete.<##input##> This input is only valid if **Id Source** is set to **Specify explicitly**. |

[filename](../id-source.md ':include')

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
