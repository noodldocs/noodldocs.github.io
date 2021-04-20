# Log In

Log in an existing user. Once a user is logged in, all the relevant data is handled by the [User](modules/cloud-services-user-management/user.md) node.

A successful login will be cached, and users will still be logged in after reloading the page. To log out, use the [Log Out](modules/cloud-services-user-management/logout.md) node.

To determine if a user is already logged in, see the _Authenticated_ output of the [User](modules/cloud-services-user-management/user.md?id=outputs) node.

<div class="ndl-images">
    <img src="/modules/cloud-services-user-management/login.png" class="ndl-image med"></img>   
</div>

## INPUTS

### User Data
**Username**  _Required_  
The username for the user. If no username was specified when signing up the user, input the email here instead.

**Password**  _Required_  
The password for the user. For security purposes the password will be encrypted before being sent to the cloud services for verification.

### Actions

**Log In**  
A signal to log in the user.
Use the outputs to determine if the operation was successful or not.

## OUTPUTS

**Success**  
A signal indicating that the log in was successful, and the data is now available through the [User](modules/cloud-services-user-management/user.md?id=outputs) node.

**Error**  
A signal indicating that there was a problem logging in the user.

**Error message**  
A human readable error message in English. Can be used directly in a UI to show the user what the problem was. Includes errors such as "Invalid username/password", "username/email is required" and many more.

**Error code**  
A short code describing the error. Useful when doing custom error message. Can easily be connected to a [String Mapper](/nodes/utilities/string-mapper.md)
