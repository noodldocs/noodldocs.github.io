<##head##>

# Log In

This node is used to log in users that exist in the Noodl Cloud Service. You need to provide a <span class="ndl-data">Username</span> and a <span class="ndl-data">Password</span> and then send a signal to the <span class="ndl-signal">Do</span> action.

<div class="ndl-image-with-background l">

![](/nodes/data/user/log-in/login_visual.png)

</div>

Once a user is logged in, their data can be accessed through the <span class="ndl-data">User</span> node.

<div class="ndl-image-with-background l">

![](/nodes/data/user/log-in/login_node.png)

</div>

<##head##>

## Inputs

| Data                                   | Description                                                                       |
| -------------------------------------- | --------------------------------------------------------------------------------- |
| <span class="ndl-data">Username</span> | <##input:username##>The username of the user that should be logged in.<##input##> |
| <span class="ndl-data">Password</span> | <##input:password##>The password of the user that should be logged in.<##input##> |

| Signal                             | Description                                                                                                                                                                                           |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Do</span> | <##input:do##>Send a signal to this action to log in the user. You need to make sure the **Username** and **Password** is connected, these will be sent to the backend for authentication.<##input##> |

## Outputs

| Signal                                  | Description                                                                                                                                                                   |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Success</span> | <##output:success##>This event will be triggered if the log in was succesful.<##output##>                                                                                     |
| <span class="ndl-signal">Failure</span> | <##output:failure##>This event will be triggered if something went wrong while trying to log in the user. The error message can be found in the **Error** output.<##output##> |

| Data                                | Description                                                                                    |
| ----------------------------------- | ---------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Error</span> | <##output:error##>This output will contain the error message if the log in failed.<##output##> |
