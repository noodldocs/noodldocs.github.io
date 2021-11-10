<##head##>
# Add Record Relation
This action node is used to create a relation between two records, the owning record and the target record.

![](./add-relation.png ':class=img-size-l')

One record is the owning record (in this case **Group** records that can have a relation to many **Post** records), it should have a **Relation** type property.

You need to provide the **Id** of the owning record. You also need to provide the Id of the record that you want to add a relation to, this is the **Target Record Id** input.

Finally, send a signal to **Do** to perform the action.

<##head##>

## Inputs

**Class**  
The **Class** of the owning record where you want to add the related object to.

[filename](../id-source.md ':include')

**Id**  
<##input:id##>Specify the **Id** of the record that you want to use as the owning record to add a relation to.<##input##> This input is only valid if **Id Source** is set to **Specify explicitly**.

**Do**  
<##input:do##>When a signal is received on this input the relation will be created in the backend.<##input##>

**Relation**  
You need to choose the **Relation** property of the owning class to use when creating the relation.

**Target Record Id**  
<##input:target record id##>This input should be connected to the **Id** of the target record of the new relation.<##input##>

## Outputs

**Id**  
<##output:id##>This is the **Id** of the owning record that have / will receive the new relation. It is simply a mirror of the **Id** input.<##output##>

**Success**  
<##output:success##>A signal is sent on this output when the relation has been added successfully in the backend.<##output##>

**Failure**  
<##output:failure##>A signal is sent on this output if something went wrong when adding the relation in the backend. The error message will be outputed on the **Error** output.<##output##>

**Error**  
<##output:error##>The error message in case something went wrong when attempting to add the relation in the backend.<##output##>

