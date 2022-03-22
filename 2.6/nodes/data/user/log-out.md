<##head##>

# Log Out

This node is used to log out a user from the current session. That means that the <span class="ndl-data">User</span> node will no longer be able to access user data and that it will trigger the <span class="ndl-signal">Logged Out</span> event as well as the <span class="ndl-data">Authenticated</span> output will be false.

<div class="ndl-image-with-background l">

![](/nodes/data/user/log-out/logout.png)

</div>

<##head##>

## Inputs

| Signal                             | Description                                                                                                                  |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Do</span> | <##input:do##>Send a signal to this action to logout the user. The user session will be removed from the browser.<##input##> |

## Outputs

| Signal                                  | Description                                                                                                                                                                   |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Success</span> | <##output:success##>This event will be triggered if the logout was succesful.<##output##>                                                                                     |
| <span class="ndl-signal">Failure</span> | <##output:failure##>This event will be triggered if something went wrong while trying to logout the user. The error message can be found in the **Error** output.<##output##> |

| Data                                | Description                                                                                     |
| ----------------------------------- | ----------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Error</span> | <##output:error##>This output will contain the error message if the log out failed.<##output##> |
