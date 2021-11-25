<##head##>

# Log Out

This node is used to log out a user from the current session. That means that the <span class="ndl-data">User</span> node will no longer be able to access user data and that it will trigger the <span class="ndl-signal">Logged Out</span> event as well as the <span class="ndl-data">Authenticated</span> output will be false.

![](./logout.png ':class=img-size-l')

<##head##>

## Inputs

**Do**
<##input:do##>Send a signal to this action to logout the user. The user session will be removed from the browser.<##input##>

## Outputs

**Success**
<##output:success##>This event will be triggered if the logout was succesful.<##output##>

**Failure**
<##output:failure##>This event will be triggered if something went wrong while trying to logout the user. The error message can be found in the **Error** output.<##output##>

**Error**
<##output:error##>This output will contain the error message if the log out failed.<##output##>
