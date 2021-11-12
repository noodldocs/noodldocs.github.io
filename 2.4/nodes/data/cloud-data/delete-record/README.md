<##head##>
# Delete Record
This node will delete a **Record** of a given **Class** from the Noodl Cloud Services backend.

![](./delete-record-node.png ':class=img-size-l')

You will need to provide the **Id** of the record to be deleted, there are multiple ways to do this, see the **Id Source** property for details.

Then send a signal on the **Do** input to perform the action.

<##head##>

## Inputs

**Class**
You need to select the **Class** of records that this node will act on.

[filename](../id-source.md ':include')

**Id**
<##input:id##>Specify the **Id** of the record that you want to delete.<##input##> This input is only valid if **Id Source** is set to **Specify explicitly**.

**Do**
<##input:do##>When a signal is received on this input the record will be deleted on the backend.<##input##>


## Outputs

**Id**
<##output:id##>The **Id** of the record that will be / was deleted by this node. Simply reflecting the **Id** input.<##output##>

**Success**
<##output:success##>A signal is sent on this output when the record have been successfully deleted in the backend.<##output##>

**Failure**
<##output:failure##>A signal is sent on this output if something went wrong when attempting to delete the record in the backend.<##output##>

**Error**
<##output:error##>If something went wrong when deleting the record in the backend, this output will contain the error message.<##output##>

