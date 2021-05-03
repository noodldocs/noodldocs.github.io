# Sign Up

Create new users in Noodl's cloud services.

<div class="ndl-images">
    <img src="/modules/cloud-services-user-management/signup.png" class="ndl-image med"></img>   
</div>

A sign up will also log in the user, so there's no need to use the [Log In](modules/cloud-services-user-management/login.md) node after a sign up.

After a successful sign up the user data is available through the [User](modules/cloud-services-user-management/user.md) node.


## Inputs

### User Data
**Email**  _Optional_  
The email address for the user.

**Username**  _Required_  
The username for the user. If no username is specified, the email will be used as the username. 

**Password**  _Required_  
The password for the user. For security purposes the password will be encrypted and never sent or stored in clear text, so there's no way to extract the password from a user after sign up.

### Actions

**Sign Up**  
A signal to create the user in the cloud services. Once a user is created the username will be reserved and future sign ups using the same username will fail. However, usernames can be changed, and then the old username will be available again.

Use the outputs to determine if the operation was successful or not.

## Outputs

**Success**  
A signal indicating that the sign up was successful, and a new user has been created.

**Error**  
A signal indicating that there was a problem creating the user.

**Error message**  
A human readable error message in English. Can be used directly in a UI to show the user what the problem was. Includes errors such as "Invalid username/password", "username/email is required" and many more.

**Error code**  
A short code describing the error. Useful when doing custom error message. Can easily be connected to a [String Mapper](/nodes/utilities/string-mapper.md)
