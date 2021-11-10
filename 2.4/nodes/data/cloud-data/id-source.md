**Id Source**  
An Id of a record is needed to perform the action of this node. The **Id Source** property specifies how this Id is retrieved, the options are:

- **Specify explicitly** This means you need to specify the Id of the record explicitly through e.g. a connection to the **Id** input.
- **From repeater** This means that the Id for the record will be derived from a repeater. This option is only valid if the component this node is placed in is created by a repeater. Then this node will act on the repeater object that this component was created for.