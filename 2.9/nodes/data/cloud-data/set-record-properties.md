---
hide_title: true
hide_table_of_contents: true
title: Set Record Properties node
---

<##head##>

# Set Record Properties

This action node will set property values of a record.

<div className="ndl-image-with-background l">

![](/nodes/data/cloud-data/set-record-properties/set-record-properties-node.png)

</div>

You need specify the class of the record in the property panel. Then you can either specify the values of the properties to set in the property panel or by providing them as an input connection.

Send a <span className="ndl-signal">signal</span> to <span className="ndl-signal">Do</span> to perform the action.
<##head##>

## Inputs

| Data                                              | Description                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Class</span>           | The class of record for this node. Choosing the class will determine which property inputs that become available on the node.                                                                                                                                                                        |
| <span className="ndl-data">Store to</span>        | <##input:store to##>Specifies if this node should store both to the cloud and locally, or only locally.<##input##>                                                                                                                                                                                   |
| <span className="ndl-data">Properties to store</span>        | <##input:properties to store##>Specifies if only the explicitly specified properties should be save, **only specified**, this means that only the properties that have a value either in the property panel or via an input connection will be written to the cloud record. If **All** is selected that means that all properties will always be written, if there is no explicit value provided on this node the value of the object with the corresponding **Id** will be used.<##input##>                                                                                                                                                                                   |
| <span className="ndl-data">Id</span>              | <##input:id##>Specify the **Id** of the record that you want to set the properties on.<##input##> This input is only valid if **Id Source** is set to **Specify explicitly**.                                                                                                                        |
| <span className="ndl-data">Property Inputs</span> | <##input:prop-\*##>The value to set this property to when the action is triggered.<##input##> For each property in the specified class there will be an input of the correct type. You can provide the values for the inputs either through connections or by specifying them in the property panel. |

An Id of a record is needed to perform the action of this node:

| Data                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Id Source</span> | The **Id Soure** property specifies how this Id is retrieved, the options are:<br/><br/>`Specify explicitly`: This means you need to specify the Id of the record explicitly through e.g. a connection to the **Id** input.<br/>`From repeater`: This means that the Id for the record will be derived from a repeater. This option is only valid if the component this node is placed in is created by a repeater. Then this node will act on the repeater object that this component was created for. |


| Signal                                 | Description                                                                                                |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | <##input:do##>When a signal is received on this input the properties will be set on the record.<##input##> |

### Access Control Rules

When creating and updating records you can also specify access control rules. By default all records created can be read and written by everyone, they are completely public. This is convenient in the beginning when you are working on your applications but as you want to make it publicly available you need to think about access control. You do this by adding access control rules when creating or updating records.

<div className="ndl-image-with-background m">

![](/nodes/data/cloud-data/acl-1.png)

</div>

You can have as many rules as you want. Each rule has a **Target** which can be one of **User**, **Everyone** or **Role**:

-   **User** implies that this rule will target a specific user, you can either specify the **User Id** (that is the record Id for the user record) for the user or if omitted the current logged in user will be used.
-   **Everyone** means, well, this rule applies to everyone. You can use to to create read only objects, that can be publicly read but not written.
-   **Role** means that this object can be accessed as you specify by anyone belonging to a certain role. Please look at the access control [guide](/docs/guides/cloud-data/access-control) for more information.

All rules have the inputs **Read** and **Write** when you specify if the users targeted by the role have read / write access.

Each rule can, depending on the selected **Target** type have the following inputs (it's a good idea to change the label of your rule as in the image above to easier find the inputs when connecting):

| Data                                      | Description                                                                                                                                                                                                      |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">User Id</span> | The **User Id** of the user that the rule should apply to. If none is provided via a connection the currently logged in user will be used. This input is only available if the **User** target type is selected. |
| <span className="ndl-data">Role</span>    | The **Role Name** of the role that the rule should apply to. This input is only available if the **Role** target type is selected.                                                                               |
| <span className="ndl-data">Write</span>   | Set to **true** for this rule to have write access.                                                                                                                                                              |
| <span className="ndl-data">Read</span>    | Set to **true** for this rule to have read access.                                                                                                                                                               |


## Outputs

| Data                                    | Description                                                                                                     |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Id</span>    | <##output:id##>The **Id** of the record where the properties will be updated by this node.<##output##>          |
| <span className="ndl-data">Error</span> | <##output:error##>The specific error message in case something went wrong when updating the record.<##output##> |

| Signal                                      | Description                                                                                                                                                                |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | <##output:success##>A signal is sent here when the record have been updated successfully.<##output##>                                                                      |
| <span className="ndl-signal">Failure</span> | <##output:failure##>A signal is sent on this output if something went wrong when updating the record.<##output##> You can find the specific error in the **Error** output. |
