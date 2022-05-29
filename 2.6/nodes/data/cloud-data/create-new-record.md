---
hide_title: true
hide_table_of_contents: true
title: Create New Record
---

<##head##>

# Create New Record

This node is used to create a new record of a given class. You specify the class of record to be created in the Property Panel. Sending a <span className="ndl-signal">signal</span> to <span className="ndl-signal">Do</span> will perform the action.

<div className="ndl-image-with-background l">

![](/nodes/data/cloud-data/create-new-record/create-new-record.png)

</div>

You can also provide values for the properties of the record either via connections or by typing the values in the property panel.

<##head##>

## Inputs

| Data                                              | Description                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Class</span>           | Choose a class for the record that you want to create.                                                                                                                                                                                                                                                                                                                                        |
| <span className="ndl-data">Property Inputs</span> | When the class of the record to be created is choosen, all properties of that class will be available as inputs. When the **Do** signal is received a new record will be created with the values of the properties either specified in the property panel or via connections. <##input:prop-\*##>The value of these inputs will become the properties of the newly created record.<##input##> |

| Signal                                 | Description                                                                  |
| -------------------------------------- | ---------------------------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | <##input:do##>Send a signal on this input to create a new record.<##input##> |

---
hide_title: true
hide_table_of_contents: true
---

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
| <span className="ndl-data">Id</span>    | <##output:id##>The **Id** of the new record that was created if the action was successful.<##output##>          |
| <span className="ndl-data">Error</span> | <##output:error##>The specific error message in case something went wrong when creating the record.<##output##> |

| Signal                                      | Description                                                                                                                                                                |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | <##output:success##>A signal is sent here when the new record have been created successfully.<##output##>                                                                  |
| <span className="ndl-signal">Failure</span> | <##output:failure##>A signal is sent on this output if something went wrong when creating the record.<##output##> You can find the specific error in the **Error** output. |
