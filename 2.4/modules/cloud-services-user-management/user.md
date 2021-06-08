# User

Retreive and store user data for the currently logged in user. Supports custom data fields for storing application specific data.

<div class="ndl-images">
    <img src="/modules/cloud-services-user-management/user.png" class="ndl-image med"></img>   
</div>

## Inputs

### Actions
**Save**  
Save any custom user data to the cloud services. Will automatically update all other User nodes in the project.
Use the error and success output signals to determine if the oparation was successful.

### User Credentials

**Username**  
Change the username. Use the _Save_ signal to send the update to the cloud services.

**Password**  
Change the password. Use the _Save_ signal to send the update to the cloud services.

### User Data

**Email**  
Change the email. Use the _Save_ signal to send the update to cloud services. If the username is the same as the email, the username will also be updated.

### Custom User Data
Additional inputs created by adding custom properties to a user node.

## Outputs

### User Data
**Id**  
A id that's unique for this user. Will always be the same accross logins.

**Email**  
The users email. Empty if the sign up didn't include email, or was removed.

**Created At**  
Date when the user was created.

**Updated At**  
Date when user data or credentials was last updated.

**Authenticated**  
- _True_ if the user is logged in
- _False_ if there's no user. No other data will be avabilable until a user signs in.

### User Credentials
**Username**  
The username.

### Success
**Saved**  
The data was successfully saved in the cloud services.

### Error
**Error**  
A signal indicating that there was a problem saving the user data.

**Error message**  
A human readable error message in English. 

**Error code**  
A short code describing the error. Useful when doing custom error message. Can easily be connected to a [String Mapper](/nodes/utilities/string-mapper.md)

### Custom User Data
Additional outputs created by adding custom properties to a user node.