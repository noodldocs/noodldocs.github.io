<##head##>

# Set User Properties

This node is used to set properties on the currently logged in user.

<div class="ndl-image-with-background l">

![](/nodes/data/user/set-user-properties/set-user-properties-nodes.png)

</div>

A user needs to be logged in via either the <span class="ndl-node">Sign Up</span> node or the <span class="ndl-node">Log In</span> node. If you want to read user properties of the currently logged in user you can use the <span class="ndl-node">User</span> node.
<##head##>

## Inputs

| Data                                                 | Description                                                                                                                                                                                                                       |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Email</span>                  | <##input:email##>This input is used to set the **Email** property.<##input##>                                                                                                                                                     |
| <span class="ndl-data">Your custom properties</span> | <##input:prop-\*##>A property of the **User** class. You can add additional properties to the **User** class in the Noodl Cloud Services dashboard. <##input##> These will show up as inputs on the **Set User Properties** node. |

| Signal                             | Description                                                                                                                                                                                          |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Do</span> | <##input:do##>Send a signal to this input to store the properties in the user record in the Noodl Cloud Services. Once completed the **Success** or **Failure** action will be triggered.<##input##> |

## Outputs

| Signal                                  | Description                                                                                                                                                                                                                           |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Success</span> | <##output:success##>This event will be triggered if the properties was succesfully stored.<##output##>                                                                                                                                |
| <span class="ndl-signal">Failure</span> | <##output:failure##>This event will be triggered if something went wrong while trying to store the properties on the **User** record in the Noodl Cloud Services. The error message can be found in the **Error** output.<##output##> |

| Data                                | Description                                                                                    |
| ----------------------------------- | ---------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Error</span> | <##output:error##>This output will contain the error message if the action failed.<##output##> |
