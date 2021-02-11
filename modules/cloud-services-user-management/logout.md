# Log Out

Log out a signed in user.

<div class="ndl-images">
    <img src="/modules/cloud-services-user-management/logout.png" class="ndl-image med"></img>   
</div>

## INPUTS

**Log Out**  
A signal for logging out the currently signed in user. Use the output signals to determine if the operation was successful or not.

## OUTPUTS

**Success**  
A signal indicating that the log out was successful. 

**Error**  
A signal indicating that there was a problem logging out the user.

**Error message**  
A human readable error message in English. 

**Error code**  
A short code describing the error. Useful when doing custom error message. Can easily be connected to a [String Mapper](/nodes/utilities/string-mapper.md)
