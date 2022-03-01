<##head##>

# Reset Password

This node is used to reset the email of a user. When this action is performed successfully the user will have it's password changed to the **New Password** provided as input to the node. This node will need three things to successfully change the password for the user, the <span class="ndl-data">Username</span> and a secret <span class="ndl-data">Token</span> that should be delivered to your user via the [Request Password Reset](/nodes/data/user/request-password-reset/) action node, and finally a <span class="ndl-data">New Password</span>.

Generally your application should have a specific **password reset page** that is linked to from the password reset email, the username and token should be provided as query parameters to the page. This page should have the user input the new password and once it's validated your should pass it on <span class="ndl-data">New Password</span> input. Once you have hooked that up you need to trigger the <span class="ndl-signal">Do</span> action.

<div class="ndl-image-with-background l">

![](./reset-password.png)

</div>

<##head##>

## Inputs

| Signal                             | Description                                                                                                                  |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Do</span> | <##input:do##>Send a signal to this action to attempt to change the password for the given username and token.<##input##> |

| Data                                | Description                                                                                     |
| ----------------------------------- | ----------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Username</span> | <##input:username##>The username that this action will attempt to change the password for.<##input##> |
| <span class="ndl-data">Token</span> | <##input:token##>The secret token needed to change the password.<##input##> |
| <span class="ndl-data">New Password</span> | <##input:token##>The new password to set for the user.<##input##> |

## Outputs

| Signal                                  | Description                                                                                                                                                                   |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="ndl-signal">Success</span> | <##output:success##>The password was successfully changed.<##output##>                                                                                     |
| <span class="ndl-signal">Failure</span> | <##output:failure##>This event will be triggered if something when wrong when changing the password. The error message can be found in the **Error** output.<##output##> |

| Data                                | Description                                                                                     |
| ----------------------------------- | ----------------------------------------------------------------------------------------------- |
| <span class="ndl-data">Error</span> | <##output:error##>This output will contain the error message if the action failed.<##output##> |