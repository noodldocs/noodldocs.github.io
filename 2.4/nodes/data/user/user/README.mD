<##head##>
# User

This node provides information about the current user session, if the web app has a logged in user.

![](./user_node.png ':class=img-size-l')

The <span class="ndl-node">User</span> node only works if the user is created in the project’s Noodl Cloud Service, and is logged in via the <span class="ndl-node">Log In</span> node.

![](./login_node.png ':class=img-size-l')

<##head##>

## INPUTS

**Fetch**  
<##input:fetch##>Send a signal to this action to fetch the user properties for the current logged in user from the Noodl Cloud Services. There must be a valid user session for this to work.<##input##>

## OUTPUTS

**Id**  
<##output:id##>The **Id** of the User record for the current logged in user.<##output##>

**Username**  
<##output:username##>The **Username** of the current logged in user.<##output##>

**Email**  
<##output:email##>The **Email** of the current logged in user, if the user has an email stored.<##output##>

**Authenticated**  
<##output:authenticated##>This output will be true if a valid user session exists in the browser, i.e. there is a logged in user.<##output##>

**Fetched**  
<##output:fetched##>This event will be triggered after a **Fetch** has been successfully performed. That is the **Fetch** action is triggered by a signal and the user data is return from the Noodl Cloud Services.<##output##>

**Changed**  
<##output:changed##>This event will be triggered when the User is changed locally by a **Set User Properties** node or a **Fetch** action of a **User** node.<##output##>

**Failure**  
<##output:failure##>This event is triggered when a **Fetch** action failed to retrieve the latest user data from the Noodl Cloud Services. This could be due to an invalid session.<##output##>

**Logged In**  
<##output:logged in##>This event is triggered when a user has been successfully logged in.<##output##>

**Logged Out**  
<##output:logged out##>This event is triggered when a user has been successfully logged out.<##output##>

**Session Lost**  
<##output:session lost##>This event is triggered when the current user session becomes invalid, e.g. if it has timed out.<##output##>

**Error**  
<##output:error##>If a **Fetch** action failed to retrieve the user information from the Noodl Cloud Services this output will contain the error message.<##output##>

### Properties  
<##output:prop-*##>The value of extra properties of the **User** class specified in the Noodl Cloud Services.<##output##> The node will contain the latest value of all user properties.

### Changed Events  
<##output:changed-*##>This event will be triggered when the property is changed using the **Set User Property** node or when the latest user data is retrieved from the Noodl Cloud Services with the **Fetch** action.<##output##>
