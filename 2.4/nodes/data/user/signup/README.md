<##head##>
# Sign Up

This node is used to sign up new users in the Noodl Cloud Service.

![](./sign-up_visual.png ':class=img-size-l')

The <span class="ndl-node">Sign Up</span> node is the easiest way to handle users in a Noodl web app. Once a user is created with this node, they can log in through the <span class="ndl-node">Log In</span> node and you can access user information via the <span class="ndl-node">User</span> node.

![](./sign-up_node.png ':class=img-size-l')

<##head##>

## INPUTS

**Username**  
<##input:username##>This is the username of the new user that is going to sign up. It is required that this input has a value and it must be unique, or the sign up will fail.<##input##>

**Password**  
<##input:password##>This input should contain the password for the new user.<##input##>

**Email**  
<##input:email##>Optionally the new user can be given assigned an email.<##input##>

**Do**  
<##input:do##>Send a signal to this action to trigger the sign up. Once completed the **Success** or **Failure** event will be triggered.<##input##>

### Properties
<##input:prop-*##>A property of the **User** class. You can add additional properties to the **User** class in the Noodl Cloud Services dashboard. <##input##> These will show up as inputs on the **Sign Up** node to optionally bhe given a value during sign up.


## OUTPUTS

**Success**  
<##output:success##>This event will be triggered if the sign up was succesful. The user is now logged in and information about the user can be accessed via the **User** node.<##output##>

**Failure**  
<##output:failure##>This event will be triggered if something went wrong while trying to sign up the user. The error message can be found in the **Error** output.<##output##>

**Error**  
<##output:error##>This output will contain the error message if the sign up failed.<##output##>
