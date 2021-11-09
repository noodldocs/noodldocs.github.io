<##head##>
# Remove Record Relation
This action node is used to remove a relation between two records, the owning record and the target record.

![](./remove-relation.png ':class=img-size-l')

One record is the owning record (in this case **Group** records that can have a relation to many **Post** records), it should have a **Relation** type property.

You need to provide the **Id** of the owning record. You also need to provide the Id of the record that you want to add a relation to, this is the **Target Record Id** input.

Finally, send a signal to **Do** to perform the action.

<##head##>