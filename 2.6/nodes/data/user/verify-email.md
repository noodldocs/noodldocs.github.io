---
hide_title: true
hide_table_of_contents: true
title: Verify Email
---

<##head##>

# Verify Email

This node is used to verify the email of a user. When this action is performed successfully the <span className="ndl-data">emailVerified</span> property of the <span className="ndl-data">User</span> will be set to true. You can use this property to enable or disable certain parts of your application. This node will need two things to successfully verify the user email, the <span className="ndl-data">Username</span> and a secret <span className="ndl-data">Token</span> that should be delivered to your user when they sign up or via the [Send Email Verification](/nodes/data/user/send-email-verification) action node.

Generally your application should have a specific **email verification page** that is linked to from the verification email, the username and token should be provided as query parameters to the page. Once you have hooked that up you need to trigger the <span className="ndl-signal">Do</span> action, preferably when the page loads via the <span className="ndl-signal">Did Mount</span> signal.

<div className="ndl-image-with-background l">

![](/nodes/data/user/verify-email/verify-email.png)

</div>

<##head##>

## Inputs

| Signal                                 | Description                                                                                                               |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | <##input:do##>Send a signal to this action to attempt to verify the email for the provided username and token.<##input##> |

| Data                                       | Description                                                                                        |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Username</span> | <##input:username##>The username that this action will attempt to verify the email for.<##input##> |
| <span className="ndl-data">Token</span>    | <##input:token##>The secret token needed to verify the email.<##input##>                           |

## Outputs

| Signal                                      | Description                                                                                                                                                                   |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | <##output:success##>The email was successfully verified.<##output##>                                                                                                          |
| <span className="ndl-signal">Failure</span> | <##output:failure##>This event will be triggered if something when wrong when trying to verify the email. The error message can be found in the **Error** output.<##output##> |

| Data                                    | Description                                                                                    |
| --------------------------------------- | ---------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Error</span> | <##output:error##>This output will contain the error message if the action failed.<##output##> |
