<##head##>

# Remove Record Relation

This node is used to remove a relation between two records, the owning record and the target record.

<div class="ndl-image-with-background l">

![](./remove-relation.png)

</div>

One record is the owning record (in this case **Group** records that can have a relation to many **Post** records), it should have a **Relation** type property.

You need to provide the <span class="ndl-data">Id</span> of the owning record. You also need to provide the <span class="ndl-data">Id</span> of the record that you want to add a relation to, this is the <span class="ndl-data">Target Record Id</span> input.

Finally, send a <span class="ndl-signal">signal</span> to <span class="ndl-signal">Do</span> to perform the action.

<##head##>

## Inputs

| Data                                           | Description                                                                                                                                                                                                          |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Class</span>            | The **Class** of the owning record where you want to remove the relation from.                                                                                                                                       |
| <span class="ndl-data">Id</span>               | <##input:id##>Specify the **Id** of the record that you want to use as the owning record to remove an existing relation from.<##input##> This input is only valid if **Id Source** is set to **Specify explicitly**. |
| <span class="ndl-data">Relation</span>         | You need to choose the **Relation** property of the owning class to use when removing the relation.                                                                                                                  |
| <span class="ndl-data">Target Record Id</span> | <##input:target record id##>This input should be connected to the **Id** of the target record that have an existing relation to the owning record via the **Relation** property that should be removed.<##input##>   |

[filename](../id-source.md ':include')

| Signal                             | Description                                                                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Do</span> | <##input:do##>When a signal is received on this input the relation will be removed in the backend, if it exists.<##input##> |

## Outputs

| Data                                | Description                                                                                                                         |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Id</span>    | <##output:id##>This is the **Id** of the owning record. It is simply a mirror of the **Id** input.<##output##>                      |
| <span class="ndl-data">Error</span> | <##output:error##>The error message in case something went wrong when attempting to remove the relation in the backend.<##output##> |

| Signal                                  | Description                                                                                                                                                                                    |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Success</span> | <##output:success##>A signal is sent on this output when the relation has been removed successfully in the backend.<##output##>                                                                |
| <span class="ndl-signal">Failure</span> | <##output:failure##>A signal is sent on this output if something went wrong when removing the relation in the backend. The error message will be outputed on the **Error** output.<##output##> |
